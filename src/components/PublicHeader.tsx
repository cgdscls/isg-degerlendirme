import Link from "next/link";
import { KATEGORILER } from "@/lib/mevzuatKaynagi";

// Karne'nin NavBar'ından farklı: giriş gerektirmez, herkese açık
// Mevzuat Kaynağı sayfalarında kullanılır.
export default function PublicHeader() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-6 py-4">
        <Link href="/" className="font-semibold text-brand-700">
          İSG Mevzuat Kaynağı
        </Link>
        <nav className="flex flex-wrap items-center gap-4">
          {KATEGORILER.map((k) => (
            <Link
              key={k.slug}
              href={`/mevzuat/${k.slug}`}
              className="text-sm text-gray-600 hover:text-brand-700"
            >
              {k.baslik}
            </Link>
          ))}
          <Link
            href="/karne"
            className="rounded-md bg-brand-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-brand-700"
          >
            Uyum Karnesi
          </Link>
        </nav>
      </div>
    </header>
  );
}
