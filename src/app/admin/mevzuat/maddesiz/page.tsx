import Link from "next/link";
import { requireAdmin } from "@/lib/requireAdmin";
import NavBar from "@/components/NavBar";
import OnayliSilForm from "@/components/OnayliSilForm";
import SoruFormu from "@/components/admin/SoruFormu";
import { SORU_ALANLARI, emmEtiketi, kategoriAgaciGetir, tumunuGetir } from "@/lib/adminVeri";
import { soruSil } from "@/lib/soruIslemleri";

// Mevzuat maddesine bağlı olmayan sorular: burada maddeye bağlanır, düzenlenir veya silinir.
export default async function MaddesizSorularPage({
  searchParams,
}: {
  searchParams: { hata?: string; soru?: string };
}) {
  const { supabase } = await requireAdmin();

  const [sorular, kategoriler, { data: mevzuatlar }, maddeler] = await Promise.all([
    tumunuGetir<any>(() =>
      supabase.from("questions").select(SORU_ALANLARI).is("madde_id", null).order("id")
    ),
    kategoriAgaciGetir(supabase),
    supabase.from("mevzuatlar").select("id, ad").order("ad"),
    tumunuGetir<any>(() =>
      supabase.from("maddeler").select("id, mevzuat_id, madde_no, madde_baslik").order("id")
    ),
  ]);

  // Kategori ağacındaki sıraya göre (üst kategori → alt kategori → soru sırası) diz.
  const sira = new Map<string, number>();
  const ad = new Map<string, string>();
  let i = 0;
  kategoriler.forEach((k) =>
    k.altlar.forEach((a) => {
      sira.set(a.id, i++);
      ad.set(a.id, `${k.name} / ${a.name}`);
    })
  );
  sorular.sort(
    (a, b) =>
      (sira.get(a.subcategory_id) ?? 1e9) - (sira.get(b.subcategory_id) ?? 1e9) ||
      (a.sort_order ?? 0) - (b.sort_order ?? 0)
  );

  const donus = "/admin/mevzuat/maddesiz";

  return (
    <>
      <NavBar />
      <main className="mx-auto max-w-3xl px-6 py-8">
        <Link href="/admin/mevzuat" className="text-sm text-brand-700">
          ← Mevzuat listesi
        </Link>
        <h1 className="mt-2 text-2xl font-semibold text-gray-900">Maddesi olmayan sorular</h1>
        <p className="mt-1 text-sm text-gray-600">
          {sorular.length} soru bir mevzuat maddesine bağlı değil. Soruyu açıp mevzuat ve maddeyi
          seçerek bağlayabilirsin; bağlanan soru bu listeden çıkar.
        </p>

        {searchParams.hata && (
          <div className="mt-4 rounded-md border border-red-200 bg-red-50 p-3 text-sm text-red-700">
            {searchParams.hata}
          </div>
        )}

        <div className="mt-6 space-y-3">
          {sorular.map((q) => {
            const etiket = emmEtiketi(q);
            const ozet = (
              <>
                {q.text}
                <span className="mt-1 block text-xs text-gray-500">
                  {ad.get(q.subcategory_id) ?? "Kategori bulunamadı"}
                  <span className={`ml-2 rounded-full px-2 py-0.5 ${etiket.sinif}`}>{etiket.metin}</span>
                </span>
              </>
            );
            // Form yalnızca açık soruda yüklenir (her formda bütün madde listesi taşınır).
            if (searchParams.soru !== q.id) {
              return (
                <Link
                  key={q.id}
                  id={`soru-${q.id}`}
                  href={`${donus}?soru=${q.id}#soru-${q.id}`}
                  className="block scroll-mt-20 rounded-lg border border-gray-200 bg-white p-4 text-sm text-gray-900 hover:bg-gray-50"
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
                  <p className="text-sm text-gray-900">{ozet}</p>
                  <Link href={`${donus}#soru-${q.id}`} className="shrink-0 text-xs text-gray-500 hover:underline">
                    Kapat ✕
                  </Link>
                </div>
                <div className="mt-3 border-t border-gray-100 pt-3">
                  <SoruFormu
                    soru={q}
                    kategoriler={kategoriler}
                    madde={{ tur: "secim", mevzuatlar: mevzuatlar ?? [], maddeler }}
                    donus={`${donus}?soru=${q.id}#soru-${q.id}`}
                  />
                  <div className="mt-3">
                    <OnayliSilForm
                      action={soruSil.bind(null, q.id, donus)}
                      confirmMesaji="Bu soru ve firmaların bu soruya verdiği cevaplar silinecek. Devam edilsin mi?"
                      butonMetni="Soruyu sil"
                      className="text-sm font-medium text-red-600 hover:underline"
                    />
                  </div>
                </div>
              </section>
            );
          })}
          {sorular.length === 0 && (
            <p className="py-6 text-center text-sm text-gray-500">Bütün sorular bir maddeye bağlı.</p>
          )}
        </div>
      </main>
    </>
  );
}
