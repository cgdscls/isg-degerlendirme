import Link from "next/link";

export default function PublicFooter() {
  return (
    <footer className="mt-12 border-t border-gray-200 bg-white py-6">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-6 text-sm text-gray-500">
        <p>© {new Date().getFullYear()} İSG Mevzuat Kaynağı</p>
        <div className="flex gap-4">
          <Link href="/kvkk" className="hover:text-brand-700">
            KVKK Aydınlatma Metni
          </Link>
          <Link href="/kullanim-kosullari" className="hover:text-brand-700">
            Kullanım Koşulları
          </Link>
        </div>
      </div>
    </footer>
  );
}
