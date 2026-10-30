import { notFound } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import PublicHeader from "@/components/PublicHeader";
import PublicFooter from "@/components/PublicFooter";
import MevzuatKaynagiTablosu from "@/components/MevzuatKaynagiTablosu";
import { kategoriSlugDan, MevzuatKaynagiKayit } from "@/lib/mevzuatKaynagi";

export default async function MevzuatKategoriPage({
  params,
}: {
  params: { slug: string };
}) {
  const kategori = kategoriSlugDan(params.slug);
  if (!kategori) notFound();

  const supabase = createClient();
  const { data } = await supabase
    .from("mevzuat_kaynagi")
    .select("*")
    .eq("kategori", kategori.deger)
    .order("sort_order", { ascending: true })
    .order("ad", { ascending: true });

  return (
    <>
      <PublicHeader />
      <main className="mx-auto max-w-6xl px-6 py-8">
        <Link href="/mevzuat" className="text-sm text-brand-700">
          ← Mevzuat Kaynağı
        </Link>
        <h1 className="mt-2 text-2xl font-semibold text-gray-900">{kategori.baslik}</h1>
        <p className="mt-1 text-sm text-gray-600">
          {(data ?? []).length} kayıt. Başlıklara tıklayarak sıralayabilir, sağ üstteki
          kutudan arayabilirsiniz.
        </p>

        <div className="mt-6">
          <MevzuatKaynagiTablosu
            kategori={kategori.deger}
            kayitlar={(data as MevzuatKaynagiKayit[] | null) ?? []}
          />
        </div>
      </main>
      <PublicFooter />
    </>
  );
}
