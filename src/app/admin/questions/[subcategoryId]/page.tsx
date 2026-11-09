import Link from "next/link";
import { notFound } from "next/navigation";
import { requireAdmin } from "@/lib/requireAdmin";
import NavBar from "@/components/NavBar";
import OnayliSilForm from "@/components/OnayliSilForm";
import SoruFormu from "@/components/admin/SoruFormu";
import { SORU_ALANLARI, emmEtiketi, kategoriAgaciGetir, tumunuGetir } from "@/lib/adminVeri";
import { baglayicilikBilgi, referansAciklamasi } from "@/lib/emm";
import { soruSil } from "@/lib/soruIslemleri";

// Alt kategorideki soruları listeler ve düzenletir. Yeni soru buradan eklenmez;
// Mevzuat / Madde / Soru sayfasında ilgili maddenin altından eklenir.
export default async function AdminQuestionsPage({
  params,
  searchParams,
}: {
  params: { subcategoryId: string };
  searchParams: { hata?: string; soru?: string };
}) {
  const { supabase } = await requireAdmin();

  const { data: subcategory } = await supabase
    .from("subcategories")
    .select("id, name, category_id, categories(name)")
    .eq("id", params.subcategoryId)
    .single();
  if (!subcategory) notFound();

  const [{ data: sorularHam }, kategoriler, { data: mevzuatlar }, maddeler] = await Promise.all([
    supabase
      .from("questions")
      .select(SORU_ALANLARI)
      .eq("subcategory_id", params.subcategoryId)
      .order("sort_order"),
    kategoriAgaciGetir(supabase),
    supabase.from("mevzuatlar").select("id, ad").order("ad"),
    tumunuGetir<any>(() =>
      supabase.from("maddeler").select("id, mevzuat_id, madde_no, madde_baslik").order("id")
    ),
  ]);
  const sorular = (sorularHam ?? []) as any[];

  const mevzuatAdi = new Map((mevzuatlar ?? []).map((m) => [m.id, m.ad]));
  const maddeBilgi = new Map<string, { mevzuatId: string; etiket: string }>(
    maddeler.map((m: any) => [
      m.id,
      { mevzuatId: m.mevzuat_id, etiket: `${mevzuatAdi.get(m.mevzuat_id) ?? "?"} — ${m.madde_no}` },
    ])
  );

  const categoryName = Array.isArray(subcategory.categories)
    ? subcategory.categories[0]?.name
    : (subcategory.categories as any)?.name;

  const temelYol = `/admin/questions/${params.subcategoryId}`;
  const tanimsiz = sorular.filter((q) => !q.degerlendirme_tipi).length;
  const referanssiz = sorular.filter(
    (q) => q.degerlendirme_tipi === "risk" && !referansAciklamasi(q)
  ).length;
  const maddesiz = sorular.filter((q) => !q.madde_id).length;

  return (
    <>
      <NavBar />
      <main className="mx-auto max-w-3xl px-6 py-8">
        <Link href={`/admin/subcategories/${subcategory.category_id}`} className="text-sm text-brand-700">
          ← {categoryName}
        </Link>
        <h1 className="mt-2 text-2xl font-semibold text-gray-900">{subcategory.name} — Sorular</h1>

        <div className="mt-3 rounded-md border border-blue-200 bg-blue-50 p-3 text-sm text-blue-900">
          Yeni soru{" "}
          <Link href="/admin/mevzuat" className="font-medium underline">
            Mevzuat / Madde / Soru
          </Link>{" "}
          sayfasından, ilgili maddenin altından eklenir. Burada mevcut soruları düzenleyebilir, başka
          alt kategoriye taşıyabilir veya silebilirsin.
        </div>

        {(tanimsiz > 0 || referanssiz > 0 || maddesiz > 0) && (
          <p className="mt-2 text-sm text-amber-700">
            {tanimsiz > 0 && `${tanimsiz} sorunun değerlendirme tipi tanımlanmadı. `}
            {referanssiz > 0 && `${referanssiz} risk temelli sorunun referans riski eksik. `}
            {maddesiz > 0 && `${maddesiz} soru bir maddeye bağlı değil.`}
          </p>
        )}

        {searchParams.hata && (
          <div className="mt-4 rounded-md border border-red-200 bg-red-50 p-3 text-sm text-red-700">
            {searchParams.hata}
          </div>
        )}

        <div className="mt-6 space-y-3">
          {sorular.map((q, idx) => {
            const etiket = emmEtiketi(q);
            const madde = q.madde_id ? maddeBilgi.get(q.madde_id) : undefined;
            const ozet = (
              <>
                {idx + 1}. {q.text}
                <span className="mt-1 block text-xs text-gray-500">
                  {madde ? madde.etiket : <span className="text-amber-700">Maddesiz</span>}
                  <span className={`ml-2 rounded-full px-2 py-0.5 ${etiket.sinif}`}>{etiket.metin}</span>
                  {q.degerlendirme_tipi && (
                    <span className="ml-1 rounded-full bg-gray-100 px-2 py-0.5 text-gray-600">
                      {baglayicilikBilgi(q.standart_baglayiciligi).etiket}
                      {baglayicilikBilgi(q.standart_baglayiciligi).varsayilan ? " (vars.)" : ""}
                    </span>
                  )}
                </span>
              </>
            );

            // Form yalnızca açık soruda yüklenir (her formda bütün madde listesi taşınır).
            if (searchParams.soru !== q.id) {
              return (
                <Link
                  key={q.id}
                  id={`soru-${q.id}`}
                  href={`${temelYol}?soru=${q.id}#soru-${q.id}`}
                  className="block scroll-mt-20 rounded-lg border border-gray-200 bg-white p-4 text-sm text-gray-900 hover:bg-gray-50 target:border-brand-500 target:ring-2 target:ring-brand-200"
                >
                  {ozet}
                </Link>
              );
            }

            return (
              <section
                key={q.id}
                id={`soru-${q.id}`}
                className="scroll-mt-20 rounded-lg border-2 border-brand-300 bg-white p-4"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="text-sm text-gray-900">{ozet}</div>
                  <Link href={`${temelYol}#soru-${q.id}`} className="shrink-0 text-xs text-gray-500 hover:underline">
                    Kapat ✕
                  </Link>
                </div>
                <div className="mt-3 border-t border-gray-100 pt-3">
                  <SoruFormu
                    soru={q}
                    kategoriler={kategoriler}
                    madde={{
                      tur: "secim",
                      mevzuatlar: mevzuatlar ?? [],
                      maddeler,
                      mevzuatId: madde?.mevzuatId,
                      maddeId: q.madde_id,
                    }}
                    donus={`${temelYol}?soru=${q.id}#soru-${q.id}`}
                  />
                  <div className="mt-3 flex flex-wrap items-center gap-4">
                    <OnayliSilForm
                      action={soruSil.bind(null, q.id, temelYol)}
                      confirmMesaji="Bu soru ve firmaların bu soruya verdiği cevaplar silinecek. Devam edilsin mi?"
                      butonMetni="Soruyu sil"
                      className="text-sm font-medium text-red-600 hover:underline"
                    />
                    {madde && (
                      <Link
                        href={`/admin/mevzuat/${madde.mevzuatId}?acik=${q.madde_id}&soru=${q.id}#soru-${q.id}`}
                        className="text-xs text-brand-700 hover:underline"
                      >
                        Mevzuat sayfasında gör →
                      </Link>
                    )}
                  </div>
                </div>
              </section>
            );
          })}
          {sorular.length === 0 && (
            <p className="text-center text-gray-500">Bu alt kategoride henüz soru yok.</p>
          )}
        </div>
      </main>
    </>
  );
}
