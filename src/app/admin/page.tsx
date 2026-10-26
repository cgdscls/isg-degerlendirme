import Link from "next/link";
import { revalidatePath } from "next/cache";
import { requireAdmin } from "@/lib/requireAdmin";
import NavBar from "@/components/NavBar";

export default async function AdminPage() {
  const { supabase } = await requireAdmin();

  const { data: categories } = await supabase
    .from("categories")
    .select("id, name, description, sort_order")
    .order("sort_order", { ascending: true });

  const { data: subcategories } = await supabase
    .from("subcategories")
    .select("id, category_id");

  const countByCategory = new Map<string, number>();
  (subcategories ?? []).forEach((s) => {
    countByCategory.set(s.category_id, (countByCategory.get(s.category_id) ?? 0) + 1);
  });

  async function createCategory(formData: FormData) {
    "use server";
    const { supabase } = await requireAdmin();
    const name = String(formData.get("name") ?? "").trim();
    const description = String(formData.get("description") ?? "").trim();
    if (!name) return;
    await supabase.from("categories").insert({ name, description: description || null });
    revalidatePath("/admin");
  }

  async function deleteCategory(formData: FormData) {
    "use server";
    const { supabase } = await requireAdmin();
    const id = String(formData.get("id"));
    await supabase.from("categories").delete().eq("id", id);
    revalidatePath("/admin");
  }

  return (
    <>
      <NavBar />
      <main className="mx-auto max-w-3xl px-6 py-8">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-gray-900">Yönetim</h1>
          <Link
            href="/admin/mevzuat"
            className="text-sm font-medium text-brand-700 hover:underline"
          >
            Mevzuat / Madde Yönetimi →
          </Link>
        </div>
        <p className="mt-1 text-sm text-gray-600">
          Kategorileri, alt kategorileri ve sorularını buradan yönet.
        </p>

        <form
          action={createCategory}
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
            <div
              key={cat.id}
              className="flex items-center justify-between rounded-lg border border-gray-200 bg-white p-4"
            >
              <div>
                <p className="font-medium text-gray-900">{cat.name}</p>
                <p className="text-sm text-gray-500">
                  {countByCategory.get(cat.id) ?? 0} alt kategori
                  {cat.description ? ` · ${cat.description}` : ""}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Link
                  href={`/admin/subcategories/${cat.id}`}
                  className="text-sm font-medium text-brand-700 hover:underline"
                >
                  Alt kategorileri yönet
                </Link>
                <form action={deleteCategory}>
                  <input type="hidden" name="id" value={cat.id} />
                  <button
                    type="submit"
                    className="text-sm font-medium text-red-600 hover:underline"
                  >
                    Sil
                  </button>
                </form>
              </div>
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
