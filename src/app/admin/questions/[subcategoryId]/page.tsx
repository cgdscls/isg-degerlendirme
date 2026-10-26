import Link from "next/link";
import { notFound } from "next/navigation";
import { revalidatePath } from "next/cache";
import { requireAdmin } from "@/lib/requireAdmin";
import NavBar from "@/components/NavBar";
import MevzuatMaddeSelect from "@/components/MevzuatMaddeSelect";

export default async function AdminQuestionsPage({
  params,
}: {
  params: { subcategoryId: string };
}) {
  const { supabase } = await requireAdmin();

  const { data: subcategory } = await supabase
    .from("subcategories")
    .select("id, name, category_id, categories(name)")
    .eq("id", params.subcategoryId)
    .single();

  if (!subcategory) notFound();

  const { data: mevzuatlar } = await supabase
    .from("mevzuatlar")
    .select("id, ad")
    .order("ad", { ascending: true });

  const { data: maddeler } = await supabase
    .from("maddeler")
    .select("id, mevzuat_id, madde_no, madde_baslik")
    .order("madde_no", { ascending: true });

  const { data: questionsRaw } = await supabase
    .from("questions")
    .select("id, text, guide_note, beklenen_kanit, madde_id, sort_order, maddeler(mevzuat_id)")
    .eq("subcategory_id", params.subcategoryId)
    .order("sort_order", { ascending: true });

  const questions = (questionsRaw ?? []).map((q: any) => ({
    ...q,
    mevzuat_id: Array.isArray(q.maddeler) ? q.maddeler[0]?.mevzuat_id : q.maddeler?.mevzuat_id,
  }));

  async function createQuestion(formData: FormData) {
    "use server";
    const { supabase } = await requireAdmin();
    const text = String(formData.get("text") ?? "").trim();
    const guide_note = String(formData.get("guide_note") ?? "").trim();
    const beklenen_kanit = String(formData.get("beklenen_kanit") ?? "").trim();
    const madde_id = String(formData.get("madde_id") ?? "").trim();
    if (!text) return;
    await supabase.from("questions").insert({
      subcategory_id: params.subcategoryId,
      text,
      guide_note: guide_note || null,
      beklenen_kanit: beklenen_kanit || null,
      madde_id: madde_id || null,
    });
    revalidatePath(`/admin/questions/${params.subcategoryId}`);
  }

  async function updateQuestion(formData: FormData) {
    "use server";
    const { supabase } = await requireAdmin();
    const id = String(formData.get("id"));
    const text = String(formData.get("text") ?? "").trim();
    const guide_note = String(formData.get("guide_note") ?? "").trim();
    const beklenen_kanit = String(formData.get("beklenen_kanit") ?? "").trim();
    const madde_id = String(formData.get("madde_id") ?? "").trim();
    await supabase
      .from("questions")
      .update({
        text,
        guide_note: guide_note || null,
        beklenen_kanit: beklenen_kanit || null,
        madde_id: madde_id || null,
        updated_at: new Date().toISOString(),
      })
      .eq("id", id);
    revalidatePath(`/admin/questions/${params.subcategoryId}`);
  }

  async function deleteQuestion(formData: FormData) {
    "use server";
    const { supabase } = await requireAdmin();
    const id = String(formData.get("id"));
    await supabase.from("questions").delete().eq("id", id);
    revalidatePath(`/admin/questions/${params.subcategoryId}`);
  }

  const categoryName = Array.isArray(subcategory.categories)
    ? subcategory.categories[0]?.name
    : (subcategory.categories as any)?.name;

  return (
    <>
      <NavBar />
      <main className="mx-auto max-w-3xl px-6 py-8">
        <Link href={`/admin/subcategories/${subcategory.category_id}`} className="text-sm text-brand-700">
          ← {categoryName}
        </Link>
        <h1 className="mt-2 text-2xl font-semibold text-gray-900">
          {subcategory.name} — Sorular
        </h1>

        <form
          action={createQuestion}
          className="mt-6 space-y-3 rounded-lg border border-gray-200 bg-white p-4"
        >
          <p className="text-sm font-medium text-gray-700">Yeni soru ekle</p>
          <textarea
            name="text"
            required
            rows={3}
            placeholder="Soru metni (Gereklilik)"
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
          />
          <MevzuatMaddeSelect mevzuatlar={mevzuatlar ?? []} maddeler={maddeler ?? []} />
          <input
            name="beklenen_kanit"
            placeholder="Beklenen kanıt / ilgili doküman (opsiyonel)"
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
          {questions.map((q, idx) => (
            <details
              key={q.id}
              id={`soru-${q.id}`}
              className="scroll-mt-20 rounded-lg border border-gray-200 bg-white p-4 target:border-brand-500 target:ring-2 target:ring-brand-200"
            >
              <summary className="cursor-pointer text-sm font-medium text-gray-900">
                {idx + 1}. {q.text.slice(0, 90)}
                {q.text.length > 90 ? "…" : ""}
              </summary>

              <form action={updateQuestion} className="mt-3 space-y-3">
                <input type="hidden" name="id" value={q.id} />
                <textarea
                  name="text"
                  defaultValue={q.text}
                  rows={3}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                />
                <MevzuatMaddeSelect
                  mevzuatlar={mevzuatlar ?? []}
                  maddeler={maddeler ?? []}
                  initialMevzuatId={q.mevzuat_id ?? undefined}
                  initialMaddeId={q.madde_id ?? undefined}
                />
                <input
                  name="beklenen_kanit"
                  defaultValue={q.beklenen_kanit ?? ""}
                  placeholder="Beklenen kanıt"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                />
                <textarea
                  name="guide_note"
                  defaultValue={q.guide_note ?? ""}
                  rows={2}
                  placeholder="Yardımcı not"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                />
                <button
                  type="submit"
                  className="rounded-md bg-gray-900 px-3 py-1.5 text-sm font-medium text-white hover:bg-gray-700"
                >
                  Güncelle
                </button>
              </form>

              <form action={deleteQuestion} className="mt-2">
                <input type="hidden" name="id" value={q.id} />
                <button type="submit" className="text-sm font-medium text-red-600 hover:underline">
                  Soruyu sil
                </button>
              </form>
            </details>
          ))}
          {questions.length === 0 && (
            <p className="text-center text-gray-500">Bu alt kategoride henüz soru yok.</p>
          )}
        </div>
      </main>
    </>
  );
}
