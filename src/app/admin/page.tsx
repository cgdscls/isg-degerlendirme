import Link from "next/link";
import OnayliSilForm from "@/components/OnayliSilForm";
import { kategoriEkle, kategoriGuncelle, kategoriSil } from "@/lib/kategoriIslemleri";
import { requireAdmin } from "@/lib/requireAdmin";
import NavBar from "@/components/NavBar";

export default async function AdminPage({
  searchParams,
}: {
  searchParams: { hata?: string };
}) {
  const { supabase } = await requireAdmin();

  const { data: categories } = await supabase
    .from("categories")
    .select("id, name, description, sort_order, on_kosul_sorusu, on_kosul_aciklama")
    .order("sort_order", { ascending: true });

  const { data: subcategories } = await supabase
    .from("subcategories")
    .select("id, category_id");

  const countByCategory = new Map<string, number>();
  (subcategories ?? []).forEach((s) => {
    countByCategory.set(s.category_id, (countByCategory.get(s.category_id) ?? 0) + 1);
  });

  return (
    <>
      <NavBar />
      <main className="mx-auto max-w-3xl px-6 py-8">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-gray-900">Yönetim</h1>
          <div className="flex flex-col items-end gap-1">
            <Link
              href="/admin/mevzuat"
              className="text-sm font-medium text-brand-700 hover:underline"
            >
              Mevzuat / Madde / Soru →
            </Link>
            <Link
              href="/admin/mevzuat-kaynagi"
              className="text-sm font-medium text-brand-700 hover:underline"
            >
              Mevzuat Kaynağı (herkese açık liste) →
            </Link>
            <Link
              href="/admin/uyeler"
              className="text-sm font-medium text-brand-700 hover:underline"
            >
              Üyeler →
            </Link>
            <Link
              href="/admin/davet"
              className="text-sm font-medium text-brand-700 hover:underline"
            >
              Davet Kodları →
            </Link>
            <Link
              href="/admin/destek"
              className="text-sm font-medium text-brand-700 hover:underline"
            >
              Destek Biletleri →
            </Link>
          </div>
        </div>
        <p className="mt-1 text-sm text-gray-600">
          Kategori ve alt kategorileri buradan yönet. Yeni soru{" "}
          <Link href="/admin/mevzuat" className="text-brand-700 underline">
            Mevzuat / Madde / Soru
          </Link>{" "}
          sayfasında, ilgili maddenin altından eklenir.
        </p>

        {searchParams.hata && (
          <div className="mt-4 rounded-md border border-red-200 bg-red-50 p-3 text-sm text-red-700">
            {searchParams.hata}
          </div>
        )}

        <form
          action={kategoriEkle}
          className="mt-6 flex flex-col gap-2 rounded-lg border border-gray-200 bg-white p-4 sm:flex-row sm:items-end"
        >
          <div className="flex-1">
            <label className="mb-1 block text-xs font-medium text-gray-600">
              Yeni kategori adı
            </label>
            <input
              name="name"
              required
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
              placeholder="Örn: Acil Durum, Yangın, Patlama"
            />
          </div>
          <div className="flex-1">
            <label className="mb-1 block text-xs font-medium text-gray-600">
              Açıklama (opsiyonel)
            </label>
            <input
              name="description"
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
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
          {(categories ?? []).map((cat) => (
            <div key={cat.id} className="rounded-lg border border-gray-200 bg-white p-4">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="font-medium text-gray-900">
                    {cat.name}
                    {cat.on_kosul_sorusu && (
                      <span className="ml-2 rounded-full bg-brand-50 px-2 py-0.5 text-xs font-normal text-brand-700">
                        Ön koşul var
                      </span>
                    )}
                  </p>
                  <p className="text-sm text-gray-500">
                    {countByCategory.get(cat.id) ?? 0} alt kategori
                    {cat.description ? ` · ${cat.description}` : ""}
                  </p>
                </div>
                <Link
                  href={`/admin/subcategories/${cat.id}`}
                  className="shrink-0 text-sm font-medium text-brand-700 hover:underline"
                >
                  Alt kategorileri yönet
                </Link>
              </div>
              <details className="mt-2">
                <summary className="cursor-pointer text-xs text-gray-500">Düzenle / sil</summary>
                <form action={kategoriGuncelle} className="mt-2 grid gap-2 sm:grid-cols-[1fr_1fr_auto]">
                  <input type="hidden" name="id" value={cat.id} />
                  <input
                    name="name"
                    required
                    defaultValue={cat.name}
                    className="rounded-md border border-gray-300 px-2 py-1.5 text-sm"
                  />
                  <input
                    name="description"
                    defaultValue={cat.description ?? ""}
                    placeholder="Açıklama"
                    className="rounded-md border border-gray-300 px-2 py-1.5 text-sm"
                  />
                                    <label className="text-xs text-gray-600 sm:col-span-3">
                    Ön koşul sorusu (opsiyonel, firma bilgisinde sorulur; "Hayır" → otomatik kapsam dışı)
                    <input
                      name="on_kosul_sorusu"
                      defaultValue={cat.on_kosul_sorusu ?? ""}
                      placeholder="Örn. İşyerinde yıkım işi yapılıyor veya yaptırılıyor mu?"
                      className="mt-1 w-full rounded-md border border-gray-300 px-2 py-1.5 text-sm"
                    />
                  </label>
                  <label className="text-xs text-gray-600 sm:col-span-3">
                    Ön koşul açıklaması (kullanıcıya yardımcı not)
                    <textarea
                      name="on_kosul_aciklama"
                      rows={2}
                      defaultValue={cat.on_kosul_aciklama ?? ""}
                      className="mt-1 w-full rounded-md border border-gray-300 px-2 py-1.5 text-sm"
                    />
                  </label>
                  <button
                    type="submit"
                    className="rounded-md bg-gray-900 px-3 py-1.5 text-sm font-medium text-white hover:bg-gray-700"
                  >
                    Kaydet
                  </button>
                </form>
                <div className="mt-2">
                  <OnayliSilForm
                    action={kategoriSil.bind(null, cat.id)}
                    confirmMesaji={`"${cat.name}" silinecek. Altındaki ${countByCategory.get(cat.id) ?? 0} alt kategori, bütün soruları ve firmaların bu sorulara verdiği cevaplar da kalıcı olarak silinir. Devam edilsin mi?`}
                    butonMetni="Kategoriyi sil"
                    className="text-xs font-medium text-red-600 hover:underline"
                  />
                </div>
              </details>
            </div>
          ))}
          {(categories ?? []).length === 0 && (
            <p className="text-center text-gray-500">Henüz kategori eklenmedi.</p>
          )}
        </div>
      </main>
    </>
  );
}
