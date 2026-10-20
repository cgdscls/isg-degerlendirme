import Link from "next/link";
import { notFound } from "next/navigation";
import { revalidatePath } from "next/cache";
import { requireAdmin } from "@/lib/requireAdmin";
import NavBar from "@/components/NavBar";

export default async function AdminQuestionsPage({
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

  const { data: questions } = await supabase
    .from("questions")
    .select("id, text, guide_note, citation, sort_order")
    .eq("category_id", params.categoryId)
    .order("sort_order", { ascending: true });

  async function createQuestion(formData: FormData) {
    "use server";
    const { supabase } = await requireAdmin();
    const text = String(formData.get("text") ?? "").trim();
    const guide_note = String(formData.get("guide_note") ?? "").trim();
    const citation = String(formData.get("citation") ?? "").trim();
    if (!text) return;
    await supabase.from("questions").insert({
      category_id: params.categoryId,
      text,
      guide_note: guide_note || null,
      citation: citation || null,
    });
    revalidatePath(`/admin/questions/${params.categoryId}`);
  }

  async function updateQuestion(formData: FormData) {
    "use server";
    const { supabase } = await requireAdmin();
    const id = String(formData.get("id"));
    const text = String(formData.get("text") ?? "").trim();
    const guide_note = String(formData.get("guide_note") ?? "").trim();
    const citation = String(formData.get("citation") ?? "").trim();
    await supabase
      .from("questions")
      .update({ text, guide_note: guide_note || null, citation: citation || null })
      .eq("id", id);
    revalidatePath(`/admin/questions/${params.categoryId}`);
  }

  async function deleteQuestion(formData: FormData) {
    "use server";
    const { supabase } = await requireAdmin();
    const id = String(formData.get("id"));
    await supabase.from("questions").delete().eq("id", id);
    revalidatePath(`/admin/questions/${params.categoryId}`);
  }

  return (
    <>
      <NavBar />
      <main className="mx-auto max-w-3xl px-6 py-8">
        <Link href="/admin" className="text-sm text-brand-700">
          ← Kategorilere dön
        </Link>
        <h1 className="mt-2 text-2xl font-semibold text-gray-900">
          {category.name} — Sorular
        </h1>

        <form
          action={createQuestion}
          className="mt-6 space-y-2 rounded-lg border border-gray-200 bg-white p-4"
        >
          <p className="text-sm font-medium text-gray-700">Yeni soru ekle</p>
          <textarea
            name="text"
            required
            rows={3}
            placeholder="Soru metni"
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
          />
          <input
            name="citation"
            placeholder="Dayanak (madde/yönetmelik referansı — opsiyonel)"
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
          />
          <textarea
            name="guide_note"
            rows={2}
            placeholder="Yardımcı not / açıklama (opsiyonel)"
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
          />
          <button
            type="submit"
            className="rounded-md bg-brand-600 px-4 py-2 text-sm font-medium text-white hover:bg-brand-700"
          >
            Soru Ekle
          </button>
        </form>

        <div className="mt-6 space-y-4">
          {(questions ?? []).map((q, idx) => (
            <details
              key={q.id}
              className="rounded-lg border border-gray-200 bg-white p-4"
            >
              <summary className="cursor-pointer text-sm font-medium text-gray-900">
                {idx + 1}. {q.text.slice(0, 90)}
                {q.text.length > 90 ? "…" : ""}
              </summary>

              <form action={updateQuestion} className="mt-3 space-y-2">
                <input type="hidden" name="id" value={q.id} />
                <textarea
                  name="text"
                  defaultValue={q.text}
                  rows={3}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                />
                <input
                  name="citation"
                  defaultValue={q.citation ?? ""}
                  placeholder="Dayanak"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                />
                <textarea
                  name="guide_note"
                  defaultValue={q.guide_note ?? ""}
                  rows={2}
                  placeholder="Yardımcı not"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                />
                <div className="flex gap-3">
                  <button
                    type="submit"
                    className="rounded-md bg-gray-900 px-3 py-1.5 text-sm font-medium text-white hover:bg-gray-700"
                  >
                    Güncelle
                  </button>
                </div>
              </form>

              <form action={deleteQuestion} className="mt-2">
                <input type="hidden" name="id" value={q.id} />
                <button
                  type="submit"
                  className="text-sm font-medium text-red-600 hover:underline"
                >
                  Soruyu sil
                </button>
              </form>
            </details>
          ))}
          {(questions ?? []).length === 0 && (
            <p className="text-center text-gray-500">
              Bu kategoride henüz soru yok.
            </p>
          )}
        </div>
      </main>
    </>
  );
}
