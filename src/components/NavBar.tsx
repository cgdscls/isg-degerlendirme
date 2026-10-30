import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import NavLinks from "./NavLinks";

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

  const links = [
    { href: "/", label: "← Ana Sayfa" },
    { href: "/companies", label: "Firmalarım" },
    { href: "/destek", label: "Destek" },
    { href: "/profil", label: "Profilim" },
    ...(isAdmin ? [{ href: "/admin", label: "Yönetim" }] : []),
  ];

  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <Link href="/companies" className="font-semibold text-brand-700">
          İSG Mevzuat Uyum Karnesi
        </Link>
        <NavLinks links={links} />
      </div>
    </header>
  );
}
