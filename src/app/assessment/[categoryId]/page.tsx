import Link from "next/link";
import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import NavBar from "@/components/NavBar";
import AssessmentForm from "@/components/AssessmentForm";

export default async function AssessmentPage({
  params,
}: {
  params: { categoryId: string };
}) {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: category } = await supabase
    .from("categories")
    .select("id, name, description")
    .eq("id", params.categoryId)
    .single();

  if (!category) {
    notFound();
  }

  const { data: questions } = await supabase
    .from("questions")
    .select("id, text, guide_note, citation")
    .eq("category_id", params.categoryId)
    .order("sort_order", { ascending: true });

  const { data: responses } = await supabase
    .from("responses")
    .select("question_id, answer, note")
    .eq("user_id", user?.id);

  return (
    <>
      <NavBar />
      <main className="mx-auto max-w-3xl px-6 py-8">
        <Link href="/dashboard" className="text-sm text-brand-700">
          ← Panelime dön
        </Link>
        <h1 className="mt-2 text-2xl font-semibold text-gray-900">
          {category.name}
        </h1>
        {category.description && (
          <p className="mt-1 text-sm text-gray-600">{category.description}</p>
        )}

        <div className="mt-6">
          {questions && questions.length > 0 ? (
            <AssessmentForm
              userId={user!.id}
              questions={questions}
              existingResponses={(responses ?? []).filter((r) =>
                questions.some((q) => q.id === r.question_id)
              )}
            />
          ) : (
            <p className="text-gray-500">Bu kategoride henüz soru yok.</p>
          )}
        </div>
      </main>
    </>
  );
}
