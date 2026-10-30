import Link from "next/link";
import { revalidatePath } from "next/cache";
import { requireAdmin } from "@/lib/requireAdmin";
import { createAdminClient } from "@/lib/supabase/admin";
import NavBar from "@/components/NavBar";
import { BILET_DURUMLARI, biletTuruEtiket, biletDurumu } from "@/lib/destek";

export default async function AdminDestekPage() {
  const { supabase } = await requireAdmin();

  const { data: biletler } = await supabase
    .from("destek_biletleri")
    .select("id, user_id, tur, baslik, aciklama, durum, admin_yaniti, created_at")
    .order("created_at", { ascending: false });

  const kullaniciIdleri = Array.from(new Set((biletler ?? []).map((b) => b.user_id)));
  const emailById = new Map<string, string>();
  if (kullaniciIdleri.length > 0) {
    const admin = createAdminClient();
    let page = 1;
    while (true) {
      const { data, error } = await admin.auth.admin.listUsers({ page, perPage: 200 });
      if (error || !data?.users?.length) break;
      data.users.forEach((u) => {
        if (kullaniciIdleri.includes(u.id)) emailById.set(u.id, u.email ?? "—");
      });
      if (data.users.length < 200) break;
      page += 1;
    }
  }

  async function biletGuncelle(formData: FormData) {
    "use server";
    const { supabase } = await requireAdmin();
    const id = String(formData.get("id"));
    const durum = String(formData.get("durum") ?? "");
    const admin_yaniti = String(formData.get("admin_yaniti") ?? "").trim();
    await supabase
      .from("destek_biletleri")
      .update({ durum, admin_yaniti: admin_yaniti || null, updated_at: new Date().toISOString() })
      .eq("id", id);
    revalidatePath("/admin/destek");
  }

  return (
    <>
      <NavBar />
      <main className="mx-auto max-w-4xl px-6 py-8">
        <Link href="/admin" className="text-sm text-brand-700">
          ← Yönetime dön
        </Link>
        <h1 className="mt-2 text-2xl font-semibold text-gray-900">Destek Biletleri</h1>
        <p className="mt-1 text-sm text-gray-600">
          {(biletler ?? []).length} bilet.
        </p>

        <div className="mt-6 space-y-4">
          {(biletler ?? []).map((b) => {
            const durum = biletDurumu(b.durum);
            return (
              <div key={b.id} className="rounded-lg border border-gray-200 bg-white p-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <p className="text-sm font-medium text-gray-900">{b.baslik}</p>
                    <p className="text-xs text-gray-500">
                      {biletTuruEtiket(b.tur)} ·{" "}
                      <a
                        href={`mailto:${emailById.get(b.user_id) ?? ""}`}
                        className="text-brand-700 hover:underline"
                      >
                        {emailById.get(b.user_id) ?? "—"}
                      </a>{" "}
                      · {new Date(b.created_at).toLocaleDateString("tr-TR")}
                    </p>
                  </div>
                  <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${durum.renk}`}>
                    {durum.etiket}
                  </span>
                </div>
                <p className="mt-2 text-sm text-gray-700">{b.aciklama}</p>

                <form
                  action={biletGuncelle}
                  className="mt-3 flex flex-col gap-2 border-t border-gray-100 pt-3 sm:flex-row sm:items-end"
                >
                  <input type="hidden" name="id" value={b.id} />
                  <select
                    name="durum"
                    defaultValue={b.durum}
                    className="rounded-md border border-gray-300 px-3 py-2 text-sm"
                  >
                    {BILET_DURUMLARI.map((d) => (
                      <option key={d.deger} value={d.deger}>
                        {d.etiket}
                      </option>
                    ))}
                  </select>
                  <input
                    name="admin_yaniti"
                    defaultValue={b.admin_yaniti ?? ""}
                    placeholder="Yanıt (kullanıcıya görünür)"
                    className="flex-1 rounded-md border border-gray-300 px-3 py-2 text-sm"
                  />
                  <button
                    type="submit"
                    className="rounded-md bg-brand-600 px-4 py-2 text-sm font-medium text-white hover:bg-brand-700"
                  >
                    Kaydet
                  </button>
                </form>
              </div>
            );
          })}
          {(biletler ?? []).length === 0 && (
            <p className="text-center text-sm text-gray-500">Henüz bilet yok.</p>
          )}
        </div>
      </main>
    </>
  );
}
