import Link from "next/link";
import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { tumunuGetir } from "@/lib/tumunuGetir";
import { kapsamDisiGetir, tarihTr } from "@/lib/kapsam";
import { dayanakTuru } from "@/lib/dayanak";
import NavBar from "@/components/NavBar";
import ReportCharts from "@/components/ReportCharts";
import {
  RISK_ACIGI_BILGI,
  RISK_ACIGI_SIRASI,
  UYUM_DUZEYI_SECENEKLERI,
  referansBelirle,
  riskAcigiHesapla,
} from "@/lib/emm";

export default async function CompanyReportPage({
  params,
}: {
  params: { companyId: string };
}) {
  const supabase = createClient();

  const { data: company } = await supabase
    .from("companies")
    .select("id, name, iyi_uygulama_goster")
    .eq("id", params.companyId)
    .single();

  if (!company) notFound();

  const { data: categories } = await supabase
    .from("categories")
    .select("id, name, sort_order")
    .order("sort_order", { ascending: true });

  const { data: subcategories } = await supabase
    .from("subcategories")
    .select("id, category_id, name, sort_order");

  const kapsamDisi = (await kapsamDisiGetir(supabase, [company.id])).get(company.id) ?? new Map();

  const tumSorular = await tumunuGetir<any>(() =>
    supabase
      .from("questions")
      .select(
        "id, subcategory_id, degerlendirme_tipi, referans_sonuc, referans_olasilik, tehlike_sonuc, gereklilik_etkisi, azaltilmis_sonuc, maddeler(mevzuatlar(tur))"
      )
      .order("id")
  );

  const responses = await tumunuGetir<any>(() =>
    supabase
      .from("responses")
      .select("question_id, answer, sonuc, olasilik, kapsam, uyum_duzeyi")
      .eq("company_id", params.companyId)
      .order("question_id")
  );

  // Kapsam dışı bırakılan alt kategorilerin soruları ve cevapları rapora katılmaz.
  const kapsamdaki = tumSorular.filter((q: any) => !kapsamDisi.has(q.subcategory_id));
  // Mevzuat uyum oranı ve EMM dağılımları yalnızca yasal sorulardan hesaplanır;
  // iyi uygulama soruları (firma ayarı açıksa) ayrı bölümde gösterilir.
  const questions = kapsamdaki.filter((q: any) => dayanakTuru(q) === "yasal");
  const iuGoster = company.iyi_uygulama_goster !== false;
  const iuSorular = iuGoster ? kapsamdaki.filter((q: any) => dayanakTuru(q) === "iyi_uygulama") : [];
  const katAdi = new Map((categories ?? []).map((c) => [c.id, c.name]));
  const kapsamDisiListe = (subcategories ?? [])
    .filter((s: any) => kapsamDisi.has(s.id))
    .map((s: any) => ({
      ad: s.name,
      kategori: katAdi.get(s.category_id) ?? "",
      soruSayisi: tumSorular.filter((q: any) => q.subcategory_id === s.id).length,
      ...kapsamDisi.get(s.id)!,
    }))
    .sort((a: any, b: any) => a.kategori.localeCompare(b.kategori, "tr") || a.ad.localeCompare(b.ad, "tr"));

  const categoryBySubcategory = new Map(
    (subcategories ?? []).map((s) => [s.id, s.category_id])
  );
  const questionById = new Map((questions ?? []).map((q) => [q.id, q]));
  const answerByQuestion = new Map((responses ?? []).map((r) => [r.question_id, r]));

  const categoryStats = (categories ?? []).map((cat) => {
    const catQuestions = (questions ?? []).filter(
      (q) => categoryBySubcategory.get(q.subcategory_id) === cat.id
    );
    const total = catQuestions.length;
    let evet = 0,
      hayir = 0,
      kapsamDisi = 0;
    catQuestions.forEach((q) => {
      const r = answerByQuestion.get(q.id);
      if (r?.answer === "evet") evet++;
      else if (r?.answer === "hayir") hayir++;
      else if (r?.answer === "kapsam_disi") kapsamDisi++;
    });
    const answered = evet + hayir + kapsamDisi;
    const degerlendirilebilir = evet + hayir;
    const uyum = degerlendirilebilir > 0 ? Math.round((evet / degerlendirilebilir) * 100) : null;
    return { id: cat.id, name: cat.name, total, answered, evet, hayir, kapsamDisi, uyum };
  });

  const genelToplam = categoryStats.reduce((a, c) => a + c.total, 0);
  const genelCevaplanan = categoryStats.reduce((a, c) => a + c.answered, 0);
  const genelHayir = categoryStats.reduce((a, c) => a + c.hayir, 0);
  const genelEvet = categoryStats.reduce((a, c) => a + c.evet, 0);
  const genelUyum =
    genelEvet + genelHayir > 0 ? Math.round((genelEvet / (genelEvet + genelHayir)) * 100) : null;

  const iuStats = (categories ?? [])
    .map((cat) => {
      const qs = iuSorular.filter((q: any) => categoryBySubcategory.get(q.subcategory_id) === cat.id);
      let evet = 0,
        hayir = 0,
        kd = 0;
      qs.forEach((q: any) => {
        const a = answerByQuestion.get(q.id)?.answer;
        if (a === "evet") evet++;
        else if (a === "hayir") hayir++;
        else if (a === "kapsam_disi") kd++;
      });
      const oran = evet + hayir > 0 ? Math.round((evet / (evet + hayir)) * 100) : null;
      return { id: cat.id, name: cat.name, total: qs.length, cevaplanan: evet + hayir + kd, evet, hayir, oran };
    })
    .filter((c) => c.total > 0);
  const iuEvet = iuStats.reduce((a, c) => a + c.evet, 0);
  const iuHayir = iuStats.reduce((a, c) => a + c.hayir, 0);
  const iuOran = iuEvet + iuHayir > 0 ? Math.round((iuEvet / (iuEvet + iuHayir)) * 100) : null;

  // "Hayır" cevaplarının EMM değerlendirme dağılımları
  const riskSayilari = new Map<string, number>();
  const uyumSayilari = new Map<string, number>();
  let riskDegerlendirilmedi = 0;
  let idariDegerlendirilmedi = 0;
  let tipTanimsiz = 0;

  (responses ?? []).forEach((r) => {
    if (r.answer !== "hayir") return;
    if (!questionById.has(r.question_id)) return;
    const q = questionById.get(r.question_id);
    if (!q) return;
    if (q.degerlendirme_tipi === "risk") {
      const ref = referansBelirle(q, r.olasilik);
      const acik = riskAcigiHesapla({
        sonuc: r.sonuc,
        olasilik: r.olasilik,
        kapsam: r.kapsam,
        referansSonuc: ref?.sonuc,
        referansOlasilik: ref?.olasilik,
      });
      if (acik) riskSayilari.set(acik, (riskSayilari.get(acik) ?? 0) + 1);
      else riskDegerlendirilmedi++;
    } else if (q.degerlendirme_tipi === "idari") {
      if (r.uyum_duzeyi) uyumSayilari.set(r.uyum_duzeyi, (uyumSayilari.get(r.uyum_duzeyi) ?? 0) + 1);
      else idariDegerlendirilmedi++;
    } else {
      tipTanimsiz++;
    }
  });

  const riskAcigiData = [
    ...RISK_ACIGI_SIRASI.map((k) => ({
      name: RISK_ACIGI_BILGI[k].etiket,
      value: riskSayilari.get(k) ?? 0,
    })),
    { name: "Değerlendirilmedi", value: riskDegerlendirilmedi },
  ];

  const uyumDuzeyiData = [
    ...UYUM_DUZEYI_SECENEKLERI.map((s) => ({
      name: s.etiket,
      value: uyumSayilari.get(s.deger) ?? 0,
    })),
    { name: "Değerlendirilmedi", value: idariDegerlendirilmedi },
  ];

  return (
    <>
      <NavBar />
      <main className="mx-auto max-w-4xl px-6 py-8">
        <Link href={`/companies/${company.id}`} className="text-sm text-brand-700">
          ← {company.name}
        </Link>
        <h1 className="mt-2 text-2xl font-semibold text-gray-900">Özet Rapor</h1>
        <p className="mt-1 text-sm text-gray-600">
          {genelToplam === 0
            ? "Henüz soru eklenmemiş."
            : `Mevzuat soruları: ${genelToplam} sorudan ${genelCevaplanan} tanesi cevaplandı${
                genelUyum !== null ? ` — mevzuat uyum oranı %${genelUyum}` : ""
              }.`}
        </p>

        <ReportCharts
          categoryStats={categoryStats}
          riskAcigiData={riskAcigiData}
          uyumDuzeyiData={uyumDuzeyiData}
          tipTanimsiz={tipTanimsiz}
        />

        {iuStats.length > 0 && (
          <section className="mt-8">
            <h2 className="text-lg font-semibold text-gray-900">İyi uygulama soruları</h2>
            <p className="mt-1 text-sm text-gray-600">
              Dayanağı yasal yükümlülük olmayan (OSHA, rehber, standart) sorular. Yukarıdaki
              mevzuat uyum oranına katılmamıştır.
              {iuOran !== null && (
                <>
                  {" "}
                  İyi uygulama oranı: <strong>%{iuOran}</strong>.
                </>
              )}
            </p>
            <div className="mt-3 overflow-x-auto rounded-lg border border-violet-200 bg-white">
              <table className="w-full text-left text-sm">
                <thead className="bg-violet-50 text-xs text-violet-900">
                  <tr>
                    <th className="px-4 py-2 font-medium">Kategori</th>
                    <th className="px-4 py-2 font-medium">Cevaplanan</th>
                    <th className="px-4 py-2 font-medium">Evet</th>
                    <th className="px-4 py-2 font-medium">Hayır</th>
                    <th className="px-4 py-2 font-medium">Oran</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {iuStats.map((c) => (
                    <tr key={c.id}>
                      <td className="px-4 py-2 text-gray-900">{c.name}</td>
                      <td className="px-4 py-2 text-gray-600">
                        {c.cevaplanan}/{c.total}
                      </td>
                      <td className="px-4 py-2 text-gray-600">{c.evet}</td>
                      <td className="px-4 py-2 text-gray-600">{c.hayir}</td>
                      <td className="px-4 py-2 text-gray-900">{c.oran !== null ? `%${c.oran}` : "—"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {kapsamDisiListe.length > 0 && (
          <section className="mt-8">
            <h2 className="text-lg font-semibold text-gray-900">Kapsam dışı bırakılan alanlar</h2>
            <p className="mt-1 text-sm text-gray-600">
              Bu alanların soruları yukarıdaki sayımlara ve grafiklere katılmamıştır.
            </p>
            <div className="mt-3 overflow-x-auto rounded-lg border border-gray-200 bg-white">
              <table className="w-full text-left text-sm">
                <thead className="bg-gray-50 text-xs text-gray-500">
                  <tr>
                    <th className="px-4 py-2 font-medium">Alan</th>
                    <th className="px-4 py-2 font-medium">Gerekçe</th>
                    <th className="px-4 py-2 font-medium">Tarih</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {kapsamDisiListe.map((k: any) => (
                    <tr key={`${k.kategori}-${k.ad}`}>
                      <td className="px-4 py-2">
                        <span className="text-gray-900">{k.ad}</span>
                        <span className="block text-xs text-gray-500">
                          {k.kategori} · {k.soruSayisi} soru
                        </span>
                      </td>
                      <td className="px-4 py-2 text-gray-700">{k.gerekce || "—"}</td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-500">{tarihTr(k.created_at)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}
      </main>
    </>
  );
}
