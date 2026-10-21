import Link from "next/link";
import { notFound } from "next/navigation";
import { revalidatePath } from "next/cache";
import { requireAdmin } from "@/lib/requireAdmin";
import NavBar from "@/components/NavBar";

export default async function AdminSubcategoriesPage({
  params,
}: {
  params: { categoryId: string };
}) {
  const { supabase } = await requireAdmin();

  const { data: category } = await supabase
    .from("categories")
    .select("id, name")
    .eq("id", params.categoryId)
    .single();

  if (!category) notFound();

  const { data: subcategories } = await supabase
    .from("subcategories")
    .select("id, name, sort_order")
    .eq("category_id", params.categoryId)
    .order("sort_order", { ascending: true });

  const { data: questions } = await supabase.from("questions").select("id, subcategory_id");
  const countBySub = new Map<string, number>();
  (questions ?? []).forEach((q) => {
    countBySub.set(q.subcategory_id, (countBySub.get(q.subcategory_id) ?? 0) + 1);
  });

  async function createSubcategory(formData: FormData) {
    "use server";
    const { supabase } = await requireAdmin();
    const name = String(formData.get("name") ?? "").trim();
    if (!name) return;
    await supabase.from("subcategories").insert({
      category_id: params.categoryId,
      name,
    });
    revalidatePath(`/admin/subcategories/${params.categoryId}`);
  }

  async function deleteSubcategory(formData: FormData) {
    "use server";
    const { supabase } = await requireAdmin();
    const id = String(formData.get("id"));
    await supabase.from("subcategories").delete().eq("id", id);
    revalidatePath(`/admin/subcategories/${params.categoryId}`);
  }

  return (
    <>
      <NavBar />
      <main className="mx-auto max-w-3xl px-6 py-8">
        <Link href="/admin" className="text-sm text-brand-700">
          ← Kategorilere dön
        </Link>
        <h1 className="mt-2 text-2xl font-semibold text-gray-900">
          {category.name} — Alt Kategoriler
        </h1>

        <form
          action={createSubcategory}
          className="mt-6 flex flex-col gap-2 rounded-lg border border-gray-200 bg-white p-4 sm:flex-row sm:items-end"
        >
          <div className="flex-1">
            <label className="mb-1 block text-xs font-medium text-gray-600">
              Yeni alt kategori adı
            </label>
            <input
              name="name"
              required
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
              placeholder="Örn: Yangından Korunma"
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
          {(subcategories ?? []).map((sub) => (
            <div
              key={sub.id}
              className="flex items-center justify-between rounded-lg border border-gray-200 bg-white p-4"
            >
              <div>
                <p className="font-medium text-gray-900">{sub.name}</p>
                <p className="text-sm text-gray-500">{countBySub.get(sub.id) ?? 0} soru</p>
              </div>
              <div className="flex items-center gap-3">
                <Link
                  href={`/admin/questions/${sub.id}`}
                  className="text-sm font-medium text-brand-700 hover:underline"
                >
                  Soruları yönet
                </Link>
                <form action={deleteSubcategory}>
                  <input type="hidden" name="id" value={sub.id} />
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
          {(subcategories ?? []).length === 0 && (
            <p className="text-center text-gray-500">Henüz alt kategori eklenmedi.</p>
          )}
        </div>
      </main>
    </>
  );
}
