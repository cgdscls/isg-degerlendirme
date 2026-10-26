import Link from "next/link";
import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import NavBar from "@/components/NavBar";

export default async function CompanyDashboardPage({
  params,
}: {
  params: { companyId: string };
}) {
  const supabase = createClient();

  const { data: company } = await supabase
    .from("companies")
    .select("id, name, address, contact_name, sector, nace_code")
    .eq("id", params.companyId)
    .single();

  if (!company) notFound();

  const { data: categories } = await supabase
    .from("categories")
    .select("id, name, sort_order")
    .order("sort_order", { ascending: true });

  const { data: subcategories } = await supabase
    .from("subcategories")
    .select("id, category_id, name, sort_order")
    .order("sort_order", { ascending: true });

  const { data: questions } = await supabase
    .from("questions")
    .select("id, subcategory_id, updated_at");

  const { data: responses } = await supabase
    .from("responses")
    .select("question_id, answer, updated_at")
    .eq("company_id", params.companyId);

  const answerByQuestion = new Map((responses ?? []).map((r) => [r.question_id, r.answer]));
  const responseByQuestion = new Map((responses ?? []).map((r) => [r.question_id, r]));

  const needsReviewSubIds = new Set(
    (questions ?? [])
      .filter((q: any) => {
        const existing = responseByQuestion.get(q.id);
        return (
          existing && q.updated_at && new Date(q.updated_at) > new Date(existing.updated_at)
        );
      })
      .map((q: any) => q.subcategory_id)
  );
  const needsReviewCount = (questions ?? []).filter((q: any) => {
    const existing = responseByQuestion.get(q.id);
    return existing && q.updated_at && new Date(q.updated_at) > new Date(existing.updated_at);
  }).length;
  const firstNeedsReviewSubId = [...needsReviewSubIds][0];

  const subStats = (subcategories ?? []).map((sub) => {
    const subQuestions = (questions ?? []).filter((q) => q.subcategory_id === sub.id);
    const total = subQuestions.length;
    const answered = subQuestions.filter((q) => answerByQuestion.has(q.id)).length;
    const evet = subQuestions.filter((q) => answerByQuestion.get(q.id) === "evet").length;
    const hayir = subQuestions.filter((q) => answerByQuestion.get(q.id) === "hayir").length;
    const degerlendirilebilir = evet + hayir;
    const uyum = degerlendirilebilir > 0 ? Math.round((evet / degerlendirilebilir) * 100) : null;
    return { ...sub, total, answered, uyum, needsReview: needsReviewSubIds.has(sub.id) };
  });

  const genelToplam = subStats.reduce((a, s) => a + s.total, 0);
  const genelCevaplanan = subStats.reduce((a, s) => a + s.answered, 0);

  return (
    <>
      <NavBar />
      <main className="mx-auto max-w-4xl px-6 py-8">
        <Link href="/companies" className="text-sm text-brand-700">
          ← Firmalarım
        </Link>
        <div className="mt-2 flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-gray-900">{company.name}</h1>
          <div className="flex items-center gap-2">
            <Link
              href={`/companies/${company.id}/edit`}
              className="rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 hover:border-gray-400"
            >
              Bilgi Güncelle
            </Link>
            <Link
              href={`/companies/${company.id}/report`}
              className="rounded-md bg-gray-900 px-3 py-1.5 text-sm font-medium text-white hover:bg-gray-700"
            >
              Özet Rapor
            </Link>
          </div>
        </div>
        {(company.contact_name || company.address || company.sector) && (
          <p className="mt-1 text-sm text-gray-500">
            {[company.contact_name, company.address, company.sector]
              .filter(Boolean)
              .join(" · ")}
            {company.nace_code && (
              <span className="ml-1 text-gray-400">(NACE: {company.nace_code})</span>
            )}
          </p>
        )}
        <p className="mt-3 text-sm text-gray-600">
          {genelToplam === 0
            ? "Henüz soru eklenmemiş. Yönetici panelinden kategori ve soru eklenmesi gerekiyor."
            : `Toplam ${genelToplam} sorudan ${genelCevaplanan} tanesi cevaplandı.`}
        </p>

        {needsReviewCount > 0 && firstNeedsReviewSubId && (
          <Link
            href={`/companies/${company.id}/assessment/${firstNeedsReviewSubId}`}
            className="mt-4 block rounded-lg border border-amber-300 bg-amber-50 p-4 text-sm text-amber-800 hover:border-amber-400"
          >
            <strong>Mevzuat güncellendi.</strong> {needsReviewCount} sorunuz, cevapladıktan
            sonra admin tarafından güncellendi. Gözden geçirmek için tıklayın →
          </Link>
        )}

        <div className="mt-6 space-y-6">
          {(categories ?? []).map((cat) => {
            const subs = subStats.filter((s) => s.category_id === cat.id);
            if (subs.length === 0) return null;
            return (
              <div key={cat.id}>
                <h2 className="mb-2 text-sm font-semibold uppercase tracking-wide text-gray-500">
                  {cat.name}
                </h2>
                <div className="grid gap-3 sm:grid-cols-2">
                  {subs.map((sub) => (
                    <Link
                      key={sub.id}
                      href={`/companies/${company.id}/assessment/${sub.id}`}
                      className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition hover:border-brand-400 hover:shadow"
                    >
                      <p className="font-medium text-gray-900">
                        {sub.name}
                        {sub.needsReview && (
                          <span className="ml-2 inline-block rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-700">
                            Güncellendi
                          </span>
                        )}
                      </p>
                      <div className="mt-2 flex items-center justify-between text-sm">
                        <span className="text-gray-500">
                          {sub.answered}/{sub.total} soru
                        </span>
                        {sub.uyum !== null && (
                          <span
                            className={`rounded-full px-2.5 py-0.5 font-medium ${
                              sub.uyum >= 80
                                ? "bg-green-100 text-green-700"
                                : sub.uyum >= 50
                                ? "bg-yellow-100 text-yellow-700"
                                : "bg-red-100 text-red-700"
                            }`}
                          >
                            %{sub.uyum}
                          </span>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {(categories ?? []).length === 0 && (
          <p className="mt-10 text-center text-gray-500">Henüz kategori yok.</p>
        )}
      </main>
    </>
  );
}
