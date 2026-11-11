import Link from "next/link";
import { notFound } from "next/navigation";
import { requireAdmin } from "@/lib/requireAdmin";
import NavBar from "@/components/NavBar";
import OnayliSilForm from "@/components/OnayliSilForm";
import { tumunuGetir } from "@/lib/adminVeri";
import { altKategoriEkle, altKategoriGuncelle, altKategoriSil } from "@/lib/kategoriIslemleri";

export default async function AdminSubcategoriesPage({
  params,
  searchParams,
}: {
  params: { categoryId: string };
  searchParams: { hata?: string };
}) {
  const { supabase } = await requireAdmin();

  const { data: category } = await supabase
    .from("categories")
    .select("id, name")
    .eq("id", params.categoryId)
    .single();
  if (!category) notFound();

  const [{ data: subcategories }, { data: tumKategoriler }] = await Promise.all([
    supabase
      .from("subcategories")
      .select("id, name, sort_order, on_kosul_sorusu, on_kosul_aciklama")
      .eq("category_id", params.categoryId)
      .order("sort_order", { ascending: true }),
    supabase.from("categories").select("id, name").order("sort_order"),
  ]);

  const altIdleri = (subcategories ?? []).map((s) => s.id);
  const sorular = altIdleri.length
    ? await tumunuGetir<{ id: string; subcategory_id: string }>(() =>
        supabase.from("questions").select("id, subcategory_id").in("subcategory_id", altIdleri).order("id")
      )
    : [];
  const countBySub = new Map<string, number>();
  sorular.forEach((q) => countBySub.set(q.subcategory_id, (countBySub.get(q.subcategory_id) ?? 0) + 1));

  return (
    <>
      <NavBar />
      <main className="mx-auto max-w-3xl px-6 py-8">
        <Link href="/admin" className="text-sm text-brand-700">
          ← Kategorilere dön
        </Link>
        <h1 className="mt-2 text-2xl font-semibold text-gray-900">{category.name} — Alt Kategoriler</h1>
        <p className="mt-1 text-sm text-gray-600">
          Burada alt kategorileri ekler, adlandırır ve taşırsın. Sorular{" "}
          <Link href="/admin/mevzuat" className="text-brand-700 underline">
            Mevzuat / Madde / Soru
          </Link>{" "}
          sayfasından eklenir.
        </p>

        {searchParams.hata && (
          <div className="mt-4 rounded-md border border-red-200 bg-red-50 p-3 text-sm text-red-700">
            {searchParams.hata}
          </div>
        )}

        <form
          action={altKategoriEkle}
          className="mt-6 flex flex-col gap-2 rounded-lg border border-gray-200 bg-white p-4 sm:flex-row sm:items-end"
        >
          <input type="hidden" name="category_id" value={category.id} />
          <div className="flex-1">
            <label className="mb-1 block text-xs font-medium text-gray-600">Yeni alt kategori adı</label>
            <input
              name="name"
              required
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
              placeholder="Örn: Yangından Korunma"
            />
          </div>
          <button
            type="submit"
            className="rounded-md bg-brand-600 px-4 py-2 text-sm font-medium text-white hover:bg-brand-700"
          >
            Ekle
          </button>
        </form>

        <div className="mt-6 space-y-3">
          {(subcategories ?? []).map((sub) => {
            const soruSayisi = countBySub.get(sub.id) ?? 0;
            return (
              <div key={sub.id} className="rounded-lg border border-gray-200 bg-white p-4">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="font-medium text-gray-900">
                      {sub.name}
                      {sub.on_kosul_sorusu && (
                        <span className="ml-2 rounded-full bg-brand-50 px-2 py-0.5 text-xs font-normal text-brand-700">
                          Ön koşul var
                        </span>
                      )}
                    </p>
                    <p className="text-sm text-gray-500">{soruSayisi} soru</p>
                  </div>
                  <Link
                    href={`/admin/questions/${sub.id}`}
                    className="shrink-0 text-sm font-medium text-brand-700 hover:underline"
                  >
                    Soruları gör / düzenle
                  </Link>
                </div>

                <details className="mt-2">
                  <summary className="cursor-pointer text-xs text-gray-500">
                    Adını değiştir / taşı / sil
                  </summary>
                  <form action={altKategoriGuncelle} className="mt-2 grid gap-2 sm:grid-cols-[1fr_1fr_auto]">
                    <input type="hidden" name="id" value={sub.id} />
                    <input type="hidden" name="eski_category_id" value={category.id} />
                    <label className="text-xs text-gray-600">
                      Ad
                      <input
                        name="name"
                        required
                        defaultValue={sub.name}
                        className="mt-1 w-full rounded-md border border-gray-300 px-2 py-1.5 text-sm"
                      />
                    </label>
                    <label className="text-xs text-gray-600">
                      Üst kategori
                      <select
                        name="category_id"
                        defaultValue={category.id}
                        className="mt-1 w-full rounded-md border border-gray-300 bg-white px-2 py-1.5 text-sm"
                      >
                        {(tumKategoriler ?? []).map((k) => (
                          <option key={k.id} value={k.id}>
                            {k.name}
                          </option>
                        ))}
                      </select>
                    </label>
                                      <label className="text-xs text-gray-600 sm:col-span-3">
                    Ön koşul sorusu (opsiyonel, firma bilgisinde sorulur; "Hayır" → otomatik kapsam dışı)
                    <input
                      name="on_kosul_sorusu"
                      defaultValue={sub.on_kosul_sorusu ?? ""}
                      placeholder="Örn. İşyerinde yıkım işi yapılıyor veya yaptırılıyor mu?"
                      className="mt-1 w-full rounded-md border border-gray-300 px-2 py-1.5 text-sm"
                    />
                  </label>
                  <label className="text-xs text-gray-600 sm:col-span-3">
                    Ön koşul açıklaması (kullanıcıya yardımcı not)
                    <textarea
                      name="on_kosul_aciklama"
                      rows={2}
                      defaultValue={sub.on_kosul_aciklama ?? ""}
                      className="mt-1 w-full rounded-md border border-gray-300 px-2 py-1.5 text-sm"
                    />
                  </label>
                    <button
                      type="submit"
                      className="self-end rounded-md bg-gray-900 px-3 py-1.5 text-sm font-medium text-white hover:bg-gray-700"
                    >
                      Kaydet
                    </button>
                  </form>
                  <p className="mt-1 text-[11px] text-gray-500">
                    Başka üst kategoriye taşınırsa soruları ve firmaların cevapları da birlikte taşınır.
                  </p>
                  <div className="mt-2">
                    <OnayliSilForm
                      action={altKategoriSil.bind(null, sub.id, category.id)}
                      confirmMesaji={`"${sub.name}" silinecek.${
                        soruSayisi
                          ? ` İçindeki ${soruSayisi} soru ve firmaların bu sorulara verdiği bütün cevaplar da kalıcı olarak silinir. Soruları korumak istiyorsan önce başka alt kategoriye taşı.`
                          : ""
                      } Devam edilsin mi?`}
                      butonMetni="Alt kategoriyi sil"
                      className="text-xs font-medium text-red-600 hover:underline"
                    />
                  </div>
                </details>
              </div>
            );
          })}
          {(subcategories ?? []).length === 0 && (
            <p className="text-center text-gray-500">Henüz alt kategori eklenmedi.</p>
          )}
        </div>
      </main>
    </>
  );
}
