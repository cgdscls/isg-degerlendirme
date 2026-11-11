import Link from "next/link";
import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import NavBar from "@/components/NavBar";
import AcilirKategori from "@/components/AcilirKategori";
import KapsamAnahtari from "@/components/KapsamAnahtari";
import { tumunuGetir, yeniSoruMu } from "@/lib/tumunuGetir";
import { kapsamDisiGetir, onKosulSorulariGetir } from "@/lib/kapsam";
import { kapsamDisiBirak, kapsamaAl, iyiUygulamaAyarla } from "@/lib/kapsamIslemleri";
import { dayanakTuru } from "@/lib/dayanak";

// Çoğu işyerinde geçerli olmayan özel alanlar. Bu alt kategorilerde, henüz
// cevap yoksa kart üzerinde "Çoğu işyerinde kapsam dışı" ipucu gösterilir.
// Kapsam anahtarı bütün alt kategorilerde vardır.
const KAPSAM_DISI_ONERILEN = [
  "Sağlık Kurumu Çalışan Güvenliği",
  "Maden İşyerleri",
  "Büyük Endüstriyel Kazalar",
  "Nükleer ve Radyasyon Tesisleri",
  "Sivil Savunma",
  "Yapı İşleri",
  "Balıkçı Gemileri",
  "Yıkım İşleri",
];

export default async function CompanyDashboardPage({
  params,
  searchParams,
}: {
  params: { companyId: string };
  searchParams: { hata?: string };
}) {
  const supabase = createClient();

  const { data: company } = await supabase
    .from("companies")
    .select("id, name, address, contact_name, sector, nace_code, created_at, iyi_uygulama_goster")
    .eq("id", params.companyId)
    .single();

  if (!company) notFound();

  const { data: categories } = await supabase
    .from("categories")
    .select("id, name, sort_order")
    .order("sort_order", { ascending: true });

  const { data: subcategories } = await supabase
    .from("subcategories")
    .select("id, category_id, name, sort_order")
    .order("sort_order", { ascending: true });

  const iuGoster = company.iyi_uygulama_goster !== false;
  const tumSorular = await tumunuGetir<any>(() =>
    supabase
      .from("questions")
      .select("id, subcategory_id, updated_at, created_at, maddeler(mevzuatlar(tur))")
      .order("id")
  );
  // İyi uygulama soruları firma ayarı kapalıysa hiç görünmez.
  const questions = tumSorular
    .map((q: any) => ({ ...q, iu: dayanakTuru(q) === "iyi_uygulama" }))
    .filter((q: any) => iuGoster || !q.iu);
  const iuSoruVar = tumSorular.some((q: any) => dayanakTuru(q) === "iyi_uygulama");

  const responses = await tumunuGetir<any>(() =>
    supabase
      .from("responses")
      .select("question_id, answer, updated_at")
      .eq("company_id", params.companyId)
      .order("question_id")
  );

  const kapsamDisi = (await kapsamDisiGetir(supabase, [company.id])).get(company.id) ?? new Map();

  // Firma bilgisinde cevap bekleyen ön koşul ("İşyerinde ... var mı?") soruları
  const [onKosulSorulari, { data: onKosulCevaplari }] = await Promise.all([
    onKosulSorulariGetir(supabase),
    supabase.from("firma_on_kosul").select("hedef_tur, hedef_id").eq("company_id", company.id),
  ]);
  const cevaplananOnKosul = new Set(
    (onKosulCevaplari ?? []).map((r: any) => `${r.hedef_tur}:${r.hedef_id}`)
  );
  const bekleyenOnKosul = onKosulSorulari.filter((s) => !cevaplananOnKosul.has(`${s.tur}:${s.id}`)).length;
  // Kapsam dışı alt kategorilerin soruları sayımlara, uyarılara ve rozetlere katılmaz.
  const kapsamdakiSorular = questions.filter((q: any) => !kapsamDisi.has(q.subcategory_id));

  const answerByQuestion = new Map((responses ?? []).map((r) => [r.question_id, r.answer]));
  const responseByQuestion = new Map((responses ?? []).map((r) => [r.question_id, r]));

  const needsReviewSubIds = new Set(
    kapsamdakiSorular
      .filter((q: any) => {
        const existing = responseByQuestion.get(q.id);
        return (
          existing && q.updated_at && new Date(q.updated_at) > new Date(existing.updated_at)
        );
      })
      .map((q: any) => q.subcategory_id)
  );
  const needsReviewCount = kapsamdakiSorular.filter((q: any) => {
    const existing = responseByQuestion.get(q.id);
    return existing && q.updated_at && new Date(q.updated_at) > new Date(existing.updated_at);
  }).length;
  const firstNeedsReviewSubId = [...needsReviewSubIds][0];
  const ilkGuncellenenSoru = kapsamdakiSorular.find((q: any) => {
    const existing = responseByQuestion.get(q.id);
    return existing && q.updated_at && new Date(q.updated_at) > new Date(existing.updated_at);
  });

  const subStats = (subcategories ?? []).map((sub) => {
    const subQuestions = (questions ?? []).filter((q) => q.subcategory_id === sub.id);
    const total = subQuestions.length;
    const answered = subQuestions.filter((q) => answerByQuestion.has(q.id)).length;
    // Uyum oranı yalnızca yasal sorulardan; iyi uygulama ayrı sayılır.
    const yasal = subQuestions.filter((q: any) => !q.iu);
    const iu = subQuestions.filter((q: any) => q.iu);
    const evet = yasal.filter((q) => answerByQuestion.get(q.id) === "evet").length;
    const hayir = yasal.filter((q) => answerByQuestion.get(q.id) === "hayir").length;
    const iuEvet = iu.filter((q) => answerByQuestion.get(q.id) === "evet").length;
    const iuHayir = iu.filter((q) => answerByQuestion.get(q.id) === "hayir").length;
    const iuOran = iuEvet + iuHayir > 0 ? Math.round((iuEvet / (iuEvet + iuHayir)) * 100) : null;
    const kapsam = kapsamDisi.get(sub.id) ?? null;
    const yeni = kapsam
      ? 0
      : subQuestions.filter((q) =>
          yeniSoruMu(q.created_at, company.created_at, answerByQuestion.has(q.id))
        ).length;
    const degerlendirilebilir = evet + hayir;
    const uyum = degerlendirilebilir > 0 ? Math.round((evet / degerlendirilebilir) * 100) : null;
    return {
      ...sub,
      total,
      answered,
      evet,
      hayir,
      yeni,
      uyum,
      iuToplam: iu.length,
      iuOran,
      kapsam,
      needsReview: needsReviewSubIds.has(sub.id),
    };
  });

  const kapsamdakiAltlar = subStats.filter((s) => !s.kapsam);
  const genelToplam = kapsamdakiAltlar.reduce((a, s) => a + s.total, 0);
  const genelCevaplanan = kapsamdakiAltlar.reduce((a, s) => a + s.answered, 0);
  const genelYeni = kapsamdakiAltlar.reduce((a, s) => a + s.yeni, 0);
  const ilkYeniAlt = kapsamdakiAltlar.find((s) => s.yeni > 0);
  const kapsamDisiSayisi = subStats.length - kapsamdakiAltlar.length;

  return (
    <>
      <NavBar />
      <main className="mx-auto max-w-4xl px-6 py-8">
        <Link href="/companies" className="text-sm text-brand-700">
          ← Firmalarım
        </Link>
        <div className="mt-2 flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-gray-900">{company.name}</h1>
          <div className="flex items-center gap-2">
            <Link
              href={`/companies/${company.id}/edit`}
              className="rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 hover:border-gray-400"
            >
              Bilgi Güncelle
            </Link>
            <Link
              href={`/companies/${company.id}/report`}
              className="rounded-md bg-gray-900 px-3 py-1.5 text-sm font-medium text-white hover:bg-gray-700"
            >
              Özet Rapor
            </Link>
          </div>
        </div>
        {(company.contact_name || company.address || company.sector) && (
          <p className="mt-1 text-sm text-gray-500">
            {[company.contact_name, company.address, company.sector]
              .filter(Boolean)
              .join(" · ")}
            {company.nace_code && (
              <span className="ml-1 text-gray-400">(NACE: {company.nace_code})</span>
            )}
          </p>
        )}
        <p className="mt-3 text-sm text-gray-600">
          {genelToplam === 0
            ? "Henüz soru eklenmemiş. Yönetici panelinden kategori ve soru eklenmesi gerekiyor."
            : `Toplam ${genelToplam} sorudan ${genelCevaplanan} tanesi cevaplandı.`}
          {kapsamDisiSayisi > 0 &&
            ` ${kapsamDisiSayisi} alan kapsam dışı bırakıldı; bu alanların soruları sayıma katılmaz.`}
        </p>
        {bekleyenOnKosul > 0 && (
          <Link
            href={`/companies/${company.id}/edit#faaliyetler`}
            className="mt-4 block rounded-lg border border-red-300 bg-red-50 p-4 text-sm text-red-800 hover:border-red-400"
          >
            <strong>{bekleyenOnKosul} faaliyet sorusu cevap bekliyor.</strong> İşyerinizde
            bulunmayan faaliyetleri (ör. yıkım işi, balıkçı gemisi) işaretleyin; ilgili alanlar
            otomatik olarak kapsam dışı bırakılır →
          </Link>
        )}
        {searchParams.hata && (
          <div className="mt-3 rounded-md border border-red-200 bg-red-50 p-3 text-sm text-red-700">
            {searchParams.hata}
          </div>
        )}
        {iuSoruVar && (
          <form
            action={iyiUygulamaAyarla.bind(null, company.id, !iuGoster)}
            className="mt-2 flex flex-wrap items-center gap-2 text-xs text-gray-500"
          >
            <span>
              İyi uygulama soruları{" "}
              <strong className="font-medium text-gray-700">{iuGoster ? "gösteriliyor" : "gizli"}</strong>
              {iuGoster && " — mevzuat uyum oranına katılmaz"}.
            </span>
            <button type="submit" className="font-medium text-brand-700 underline">
              {iuGoster ? "Gizle" : "Göster"}
            </button>
            <Link href="/rehber#iyi-uygulama" className="text-gray-400 underline">
              Bu nedir?
            </Link>
          </form>
        )}

        {needsReviewCount > 0 && firstNeedsReviewSubId && (
          <Link
            href={`/companies/${company.id}/assessment/${firstNeedsReviewSubId}${
              ilkGuncellenenSoru && ilkGuncellenenSoru.subcategory_id === firstNeedsReviewSubId
                ? `#soru-${ilkGuncellenenSoru.id}`
                : ""
            }`}
            className="mt-4 block rounded-lg border border-amber-300 bg-amber-50 p-4 text-sm text-amber-800 hover:border-amber-400"
          >
            <strong>Mevzuat güncellendi.</strong> {needsReviewCount} sorunuz, cevapladıktan
            sonra admin tarafından güncellendi. Gözden geçirmek için tıklayın →
          </Link>
        )}

        {genelYeni > 0 && ilkYeniAlt && (
          <Link
            href={`/companies/${company.id}/assessment/${ilkYeniAlt.id}`}
            className="mt-4 block rounded-lg border border-blue-300 bg-blue-50 p-4 text-sm text-blue-800 hover:border-blue-400"
          >
            <strong>Yeni soru eklendi.</strong> Firmayı ekledikten sonra {genelYeni} yeni soru
            eklendi ve henüz cevaplanmadı. "Yeni" etiketli alt kategorilere bakın →
          </Link>
        )}

        <div className="mt-6 space-y-3">
          {(categories ?? []).map((cat) => {
            const subs = (subStats.filter((s) => s.category_id === cat.id)).sort((a, b) =>
              a.name.localeCompare(b.name, "tr", { numeric: true, sensitivity: "base" })
            );
            if (subs.length === 0) return null;
            const katKapsamda = subs.filter((s) => !s.kapsam);
            const katToplam = katKapsamda.reduce((a, s) => a + s.total, 0);
            const katCevaplanan = katKapsamda.reduce((a, s) => a + s.answered, 0);
            const katEvet = katKapsamda.reduce((a, s) => a + s.evet, 0);
            const katHayir = katKapsamda.reduce((a, s) => a + s.hayir, 0);
            const katUyum =
              katEvet + katHayir > 0 ? Math.round((katEvet / (katEvet + katHayir)) * 100) : null;
            const katGuncellendi = subs.some((s) => s.needsReview);
            const katYeni = subs.reduce((a, s) => a + s.yeni, 0);
            return (
              <AcilirKategori
                key={cat.id}
                depoAnahtari={`kategori-acik:${company.id}:${cat.id}`}
                baslik={cat.name}
                sag={
                  <>
                    {katYeni > 0 && (
                      <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-700">
                        {katYeni} yeni
                      </span>
                    )}
                    {katGuncellendi && (
                      <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-700">
                        Güncellendi
                      </span>
                    )}
                    <span className="text-gray-500">
                      {katCevaplanan}/{katToplam} soru
                    </span>
                    {katUyum !== null && (
                      <span
                        className={`rounded-full px-2.5 py-0.5 font-medium ${
                          katUyum >= 80
                            ? "bg-green-100 text-green-700"
                            : katUyum >= 50
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        %{katUyum}
                      </span>
                    )}
                  </>
                }
              >
                <div className="space-y-2">
                  {subs.map((sub) => {
                    const onerilen = KAPSAM_DISI_ONERILEN.includes(sub.name);
                    const disarida = Boolean(sub.kapsam);
                    return (
                      <div
                        key={sub.id}
                        className={`flex items-start gap-3 rounded-lg border px-4 py-3 transition ${
                          disarida
                            ? "border-dashed border-gray-300 bg-gray-50"
                            : "border-gray-200 bg-white shadow-sm hover:border-brand-400 hover:shadow"
                        }`}
                      >
                        <Link
                          href={`/companies/${company.id}/assessment/${sub.id}`}
                          className="min-w-0 flex-1"
                        >
                          <p className={`font-medium ${disarida ? "text-gray-500" : "text-gray-900"}`}>
                            {sub.name}
                            {!disarida && sub.yeni > 0 && (
                              <span className="ml-2 inline-block rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-700">
                                {sub.yeni} yeni
                              </span>
                            )}
                            {!disarida && sub.needsReview && (
                              <span className="ml-2 inline-block rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-700">
                                Güncellendi
                              </span>
                            )}
                          </p>
                          {disarida ? (
                            <p className="mt-1 text-sm text-gray-500">
                              {sub.kapsam?.gerekce ? sub.kapsam.gerekce : "Kapsam dışı bırakıldı"}
                              <span className="text-gray-400"> · {sub.total} soru sayıma katılmıyor</span>
                            </p>
                          ) : (
                            <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
                              <span className="text-gray-500">
                                {sub.answered}/{sub.total} soru
                              </span>
                              {sub.uyum !== null && (
                                <span
                                  className={`rounded-full px-2.5 py-0.5 font-medium ${
                                    sub.uyum >= 80
                                      ? "bg-green-100 text-green-700"
                                      : sub.uyum >= 50
                                      ? "bg-yellow-100 text-yellow-700"
                                      : "bg-red-100 text-red-700"
                                  }`}
                                >
                                  %{sub.uyum}
                                </span>
                              )}
                              {sub.iuToplam > 0 && (
                                <span className="rounded-full bg-violet-50 px-2 py-0.5 text-xs text-violet-800">
                                  İyi uygulama{sub.iuOran !== null ? ` %${sub.iuOran}` : ""}
                                </span>
                              )}
                              {onerilen && sub.answered === 0 && (
                                <span className="text-xs text-gray-400">Çoğu işyerinde kapsam dışı</span>
                              )}
                            </div>
                          )}
                        </Link>

                        <KapsamAnahtari
                          altAdi={sub.name}
                          kapsamDisi={disarida}
                          birakAction={kapsamDisiBirak.bind(null, company.id, sub.id)}
                          alAction={kapsamaAl.bind(null, company.id, sub.id)}
                          kilitliHref={
                            sub.kapsam?.kaynak === "on_kosul"
                              ? `/companies/${company.id}/edit#faaliyetler`
                              : null
                          }
                        />
                      </div>
                    );
                  })}
                </div>
              </AcilirKategori>
            );
          })}
        </div>

        {(categories ?? []).length === 0 && (
          <p className="mt-10 text-center text-gray-500">Henüz kategori yok.</p>
        )}
      </main>
    </>
  );
}
