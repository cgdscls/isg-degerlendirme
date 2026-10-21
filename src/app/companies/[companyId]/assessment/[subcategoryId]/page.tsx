import Link from "next/link";
import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import NavBar from "@/components/NavBar";
import AssessmentForm from "@/components/AssessmentForm";

export default async function AssessmentPage({
  params,
}: {
  params: { companyId: string; subcategoryId: string };
}) {
  const supabase = createClient();

  const { data: company } = await supabase
    .from("companies")
    .select("id, name")
    .eq("id", params.companyId)
    .single();

  const { data: subcategory } = await supabase
    .from("subcategories")
    .select("id, name, category_id, categories(name)")
    .eq("id", params.subcategoryId)
    .single();

  if (!company || !subcategory) notFound();

  const { data: questionsRaw } = await supabase
    .from("questions")
    .select(
      "id, text, guide_note, beklenen_kanit, sort_order, maddeler(madde_no, mevzuatlar(ad, resmi_gazete_no, resmi_gazete_tarihi))"
    )
    .eq("subcategory_id", params.subcategoryId)
    .order("sort_order", { ascending: true });

  function formatTarih(iso: string | null) {
    if (!iso) return null;
    const [yil, ay, gun] = iso.split("-");
    if (!yil || !ay || !gun) return iso;
    return `${gun}.${ay}.${yil}`;
  }

  const questions = (questionsRaw ?? []).map((q: any) => {
    const madde = Array.isArray(q.maddeler) ? q.maddeler[0] : q.maddeler;
    const mevzuat = madde ? (Array.isArray(madde.mevzuatlar) ? madde.mevzuatlar[0] : madde.mevzuatlar) : null;
    const rgNo = mevzuat?.resmi_gazete_no ?? null;
    const rgTarih = formatTarih(mevzuat?.resmi_gazete_tarihi ?? null);
    const rgText = rgNo && rgTarih ? `${rgNo}/${rgTarih}` : rgNo || rgTarih;
    const citation =
      mevzuat && madde
        ? `${mevzuat.ad}${rgText ? ` (RG: ${rgText})` : ""} — ${madde.madde_no}`
        : null;
    return {
      id: q.id,
      text: q.text,
      guide_note: q.guide_note,
      beklenen_kanit: q.beklenen_kanit,
      citation,
    };
  });

  const { data: responses } = await supabase
    .from("responses")
    .select(
      "question_id, answer, note, oneri, sistem_faktoru, maliyet_faktoru, eylem_faktoru"
    )
    .eq("company_id", params.companyId);

  const categoryName = Array.isArray(subcategory.categories)
    ? subcategory.categories[0]?.name
    : (subcategory.categories as any)?.name;

  return (
    <>
      <NavBar />
      <main className="mx-auto max-w-3xl px-6 py-8">
        <Link href={`/companies/${company.id}`} className="text-sm text-brand-700">
          ← {company.name}
        </Link>
        <p className="mt-2 text-xs font-medium uppercase tracking-wide text-gray-400">
          {categoryName}
        </p>
        <h1 className="text-2xl font-semibold text-gray-900">{subcategory.name}</h1>

        <div className="mt-6">
          {questions.length > 0 ? (
            <AssessmentForm
              companyId={company.id}
              questions={questions}
              existingResponses={(responses ?? []).filter((r) =>
                questions.some((q) => q.id === r.question_id)
              )}
            />
          ) : (
            <p className="text-gray-500">Bu alt kategoride henüz soru yok.</p>
          )}
        </div>
      </main>
    </>
  );
}
