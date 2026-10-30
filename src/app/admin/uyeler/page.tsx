import Link from "next/link";
import { requireAdmin } from "@/lib/requireAdmin";
import { createAdminClient } from "@/lib/supabase/admin";
import NavBar from "@/components/NavBar";

export default async function AdminUyelerPage() {
  const { supabase } = await requireAdmin();
  const admin = createAdminClient();

  // auth.admin.listUsers sayfalı döner; hepsini topla.
  const tumKullanicilar: { id: string; email: string | undefined; created_at: string }[] = [];
  let page = 1;
  while (true) {
    const { data, error } = await admin.auth.admin.listUsers({ page, perPage: 200 });
    if (error || !data?.users?.length) break;
    tumKullanicilar.push(
      ...data.users.map((u) => ({ id: u.id, email: u.email, created_at: u.created_at }))
    );
    if (data.users.length < 200) break;
    page += 1;
  }

  const { data: profiller } = await supabase
    .from("profiles")
    .select("id, full_name, role, plan");
  const profilById = new Map((profiller ?? []).map((p) => [p.id, p]));

  const { data: firmalar } = await supabase.from("companies").select("id, owner_id");
  const firmaSayisiByOwner = new Map<string, number>();
  (firmalar ?? []).forEach((f) => {
    firmaSayisiByOwner.set(f.owner_id, (firmaSayisiByOwner.get(f.owner_id) ?? 0) + 1);
  });

  const satirlar = tumKullanicilar
    .map((u) => {
      const p = profilById.get(u.id);
      return {
        id: u.id,
        email: u.email ?? "—",
        full_name: p?.full_name ?? "—",
        role: p?.role ?? "user",
        plan: p?.plan ?? "free",
        firmaSayisi: firmaSayisiByOwner.get(u.id) ?? 0,
        created_at: u.created_at,
      };
    })
    .sort((a, b) => (a.created_at < b.created_at ? 1 : -1));

  return (
    <>
      <NavBar />
      <main className="mx-auto max-w-5xl px-6 py-8">
        <Link href="/admin" className="text-sm text-brand-700">
          ← Yönetime dön
        </Link>
        <h1 className="mt-2 text-2xl font-semibold text-gray-900">Üyeler</h1>
        <p className="mt-1 text-sm text-gray-600">
          {satirlar.length} kayıtlı kullanıcı. E-posta adresine tıklayarak
          doğrudan mail gönderebilirsin.
        </p>

        <div className="mt-6 overflow-x-auto rounded-lg border border-gray-200">
          <table className="min-w-full divide-y divide-gray-200 bg-white">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-3 py-2 text-left text-xs font-semibold text-gray-600">Ad Soyad</th>
                <th className="px-3 py-2 text-left text-xs font-semibold text-gray-600">E-posta</th>
                <th className="px-3 py-2 text-left text-xs font-semibold text-gray-600">Rol</th>
                <th className="px-3 py-2 text-left text-xs font-semibold text-gray-600">Plan</th>
                <th className="px-3 py-2 text-left text-xs font-semibold text-gray-600">Firma</th>
                <th className="px-3 py-2 text-left text-xs font-semibold text-gray-600">Kayıt Tarihi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {satirlar.map((s) => (
                <tr key={s.id} className="hover:bg-gray-50">
                  <td className="whitespace-nowrap px-3 py-2 text-sm text-gray-900">{s.full_name}</td>
                  <td className="whitespace-nowrap px-3 py-2 text-sm">
                    <a href={`mailto:${s.email}`} className="text-brand-700 hover:underline">
                      {s.email}
                    </a>
                  </td>
                  <td className="whitespace-nowrap px-3 py-2 text-sm text-gray-700">
                    {s.role === "admin" ? "Admin" : "Kullanıcı"}
                  </td>
                  <td className="whitespace-nowrap px-3 py-2 text-sm text-gray-700">
                    {s.plan === "premium" ? "Premium" : "Ücretsiz"}
                  </td>
                  <td className="whitespace-nowrap px-3 py-2 text-sm text-gray-700">{s.firmaSayisi}</td>
                  <td className="whitespace-nowrap px-3 py-2 text-sm text-gray-500">
                    {new Date(s.created_at).toLocaleDateString("tr-TR")}
                  </td>
                </tr>
              ))}
              {satirlar.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-3 py-6 text-center text-sm text-gray-500">
                    Henüz üye yok.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
}
