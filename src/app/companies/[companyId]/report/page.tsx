import Link from "next/link";
import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
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
    .select("id, name")
    .eq("id", params.companyId)
    .single();

  if (!company) notFound();

  const { data: categories } = await supabase
    .from("categories")
    .select("id, name, sort_order")
    .order("sort_order", { ascending: true });

  const { data: subcategories } = await supabase
    .from("subcategories")
    .select("id, category_id");

  const { data: questions } = await supabase
    .from("questions")
    .select(
      "id, subcategory_id, degerlendirme_tipi, referans_sonuc, referans_olasilik, tehlike_sonuc, gereklilik_etkisi, azaltilmis_sonuc"
    );

  const { data: responses } = await supabase
    .from("responses")
    .select("question_id, answer, sonuc, olasilik, kapsam, uyum_duzeyi")
    .eq("company_id", params.companyId);

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

  // "Hayır" cevaplarının EMM değerlendirme dağılımları
  const riskSayilari = new Map<string, number>();
  const uyumSayilari = new Map<string, number>();
  let riskDegerlendirilmedi = 0;
  let idariDegerlendirilmedi = 0;
  let tipTanimsiz = 0;

  (responses ?? []).forEach((r) => {
    if (r.answer !== "hayir") return;
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
            : `Toplam ${genelToplam} sorudan ${genelCevaplanan} tanesi cevaplandı${
                genelUyum !== null ? ` — genel uyum %${genelUyum}` : ""
              }.`}
        </p>

        <ReportCharts
          categoryStats={categoryStats}
          riskAcigiData={riskAcigiData}
          uyumDuzeyiData={uyumDuzeyiData}
          tipTanimsiz={tipTanimsiz}
        />
      </main>
    </>
  );
}
