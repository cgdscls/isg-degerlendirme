import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import NavBar from "@/components/NavBar";

type CategoryRow = {
  id: string;
  name: string;
  description: string | null;
};

export default async function DashboardPage() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: categories } = await supabase
    .from("categories")
    .select("id, name, description")
    .order("sort_order", { ascending: true });

  const { data: questions } = await supabase
    .from("questions")
    .select("id, category_id");

  const { data: responses } = await supabase
    .from("responses")
    .select("question_id, answer")
    .eq("user_id", user?.id);

  const responseByQuestion = new Map(
    (responses ?? []).map((r) => [r.question_id, r.answer])
  );

  const rows = (categories as CategoryRow[] | null ?? []).map((cat) => {
    const catQuestions = (questions ?? []).filter((q) => q.category_id === cat.id);
    const total = catQuestions.length;
    const answered = catQuestions.filter((q) =>
      responseByQuestion.has(q.id)
    ).length;
    const evet = catQuestions.filter(
      (q) => responseByQuestion.get(q.id) === "evet"
    ).length;
    const hayir = catQuestions.filter(
      (q) => responseByQuestion.get(q.id) === "hayir"
    ).length;
    const degerlendirilebilir = evet + hayir;
    const uyumYuzdesi =
      degerlendirilebilir > 0 ? Math.round((evet / degerlendirilebilir) * 100) : null;

    return { ...cat, total, answered, uyumYuzdesi };
  });

  const genelToplam = rows.reduce((a, r) => a + r.total, 0);
  const genelCevaplanan = rows.reduce((a, r) => a + r.answered, 0);

  return (
    <>
      <NavBar />
      <main className="mx-auto max-w-4xl px-6 py-8">
        <h1 className="text-2xl font-semibold text-gray-900">Panelim</h1>
        <p className="mt-1 text-sm text-gray-600">
          {genelToplam === 0
            ? "Henüz soru eklenmemiş. Yönetici panelinden kategori ve soru ekleyin."
            : `Toplam ${genelToplam} sorudan ${genelCevaplanan} tanesi cevaplandı.`}
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {rows.map((cat) => (
            <Link
              key={cat.id}
              href={`/assessment/${cat.id}`}
              className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm transition hover:border-brand-400 hover:shadow"
            >
              <h2 className="font-medium text-gray-900">{cat.name}</h2>
              {cat.description && (
                <p className="mt-1 text-sm text-gray-500">{cat.description}</p>
              )}
              <div className="mt-3 flex items-center justify-between text-sm">
                <span className="text-gray-500">
                  {cat.answered}/{cat.total} soru cevaplandı
                </span>
                {cat.uyumYuzdesi !== null && (
                  <span
                    className={`rounded-full px-2.5 py-0.5 font-medium ${
                      cat.uyumYuzdesi >= 80
                        ? "bg-green-100 text-green-700"
                        : cat.uyumYuzdesi >= 50
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    %{cat.uyumYuzdesi} uyum
                  </span>
                )}
              </div>
            </Link>
          ))}
        </div>

        {rows.length === 0 && (
          <p className="mt-10 text-center text-gray-500">
            Henüz kategori yok.
          </p>
        )}
      </main>
    </>
  );
}
