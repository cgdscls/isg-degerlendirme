import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import PublicHeader from "@/components/PublicHeader";
import { KATEGORILER } from "@/lib/mevzuatKaynagi";

export default async function MevzuatAnaSayfa() {
  const supabase = createClient();
  const { data } = await supabase.from("mevzuat_kaynagi").select("kategori");

  const sayilar = new Map<string, number>();
  (data ?? []).forEach((r: any) => {
    sayilar.set(r.kategori, (sayilar.get(r.kategori) ?? 0) + 1);
  });

  return (
    <>
      <PublicHeader />
      <main className="mx-auto max-w-5xl px-6 py-10">
        <h1 className="text-3xl font-bold text-brand-700">İSG Mevzuat Kaynağı</h1>
        <p className="mt-3 max-w-2xl text-gray-600">
          Ücretsiz İSG mevzuat listeleri — ayrıntılı arama yaparak işletmenizin iş
          sağlığı ve güvenliğine uyumunu sağlayın.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {KATEGORILER.map((k) => (
            <Link
              key={k.slug}
              href={`/mevzuat/${k.slug}`}
              className="rounded-lg border border-gray-200 bg-white p-5 transition hover:border-brand-400 hover:shadow-sm"
            >
              <p className="text-lg font-semibold text-gray-900">{k.baslik}</p>
              <p className="mt-1 text-sm text-gray-500">{sayilar.get(k.deger) ?? 0} kayıt</p>
            </Link>
          ))}
        </div>

        <div className="mt-10 rounded-lg border border-brand-100 bg-brand-50 p-6">
          <p className="text-lg font-semibold text-brand-700">İSG Mevzuat Uyum Karnesi</p>
          <p className="mt-1 text-sm text-gray-700">
            İşyerinizin mevzuata uyumunu soru soru değerlendirin, eksiklerinizi görün.
          </p>
          <Link
            href="/karne"
            className="mt-4 inline-block rounded-md bg-brand-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-brand-700"
          >
            Uyum Karnesine Git →
          </Link>
        </div>
      </main>
    </>
  );
}
