import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import LogoutButton from "./LogoutButton";

export default async function NavBar() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  let isAdmin = false;
  if (user) {
    const { data: profile } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", user.id)
      .single();
    isAdmin = profile?.role === "admin";
  }

  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <Link href="/companies" className="font-semibold text-brand-700">
          İSG Değerlendirme
        </Link>
        <nav className="flex items-center gap-5">
          <Link href="/companies" className="text-sm text-gray-600 hover:text-brand-700">
            Firmalarım
          </Link>
          {isAdmin && (
            <Link href="/admin" className="text-sm text-gray-600 hover:text-brand-700">
              Yönetim
            </Link>
          )}
          <LogoutButton />
        </nav>
      </div>
    </header>
  );
}
