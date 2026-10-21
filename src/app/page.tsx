import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export default async function HomePage() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    redirect("/dashboard");
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <h1 className="text-3xl font-bold text-brand-700">İSG Değerlendirme</h1>
      <p className="mt-3 max-w-md text-gray-600">
        İş sağlığı ve güvenliği mevzuatına uyumunuzu kategori bazında
        değerlendirin, eksiklerinizi görün.
      </p>
      <div className="mt-8 flex gap-3">
        <Link
          href="/login"
          className="rounded-md bg-brand-600 px-5 py-2.5 font-medium text-white hover:bg-brand-700"
        >
          Giriş Yap
        </Link>
        <Link
          href="/register"
          className="rounded-md border border-brand-600 px-5 py-2.5 font-medium text-brand-700 hover:bg-brand-50"
        >
          Kayıt Ol
        </Link>
      </div>
    </main>
  );
}
