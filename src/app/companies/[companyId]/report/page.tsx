import Link from "next/link";
import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import NavBar from "@/components/NavBar";
import ReportCharts from "@/components/ReportCharts";

const SISTEM_FAKTORU_SECENEKLERI = [
  "Gereklilik tespit edilmemiş",
  "Uygun kontrol bulunamamış",
  "Kontrol uygulanmamış",
  "Sistem eksikliği",
];

const MALIYET_FAKTORU_SECENEKLERI = [
  "Yüksek getirili yatırım (ROI > %10)",
  "Düşük getirili yatırım (ROI < %10)",
  "İşgücü artışı gerektiriyor",
  "İşletme maliyetini artırıyor",
  "Önemli maliyet etkisi yok",
];

const EYLEM_FAKTORU_SECENEKLERI = [
  "Acil eylem gerekli (24 saat içinde)",
  "Eylem zorunlu (1 ay içinde)",
  "Eylem gerekli (3 ay içinde)",
  "Eylem önerilir (12 ay içinde)",
];

export default async function CompanyReportPage({
  params,
}: {
  params: { companyId: string };
}) {
  const supabase = createClient();

  const { data: company } = await supabase
    .from("companies")
    .select("id, name")
    .eq("id", params.companyId)
    .single();

  if (!company) notFound();

  const { data: categories } = await supabase
    .from("categories")
    .select("id, name, sort_order")
    .order("sort_order", { ascending: true });

  const { data: subcategories } = await supabase
    .from("subcategories")
    .select("id, category_id");

  const { data: questions } = await supabase
    .from("questions")
    .select("id, subcategory_id");

  const { data: responses } = await supabase
    .from("responses")
    .select("question_id, answer, sistem_faktoru, maliyet_faktoru, eylem_faktoru")
    .eq("company_id", params.companyId);

  const categoryBySubcategory = new Map(
    (subcategories ?? []).map((s) => [s.id, s.category_id])
  );
  const categoryByQuestion = new Map(
    (questions ?? []).map((q) => [q.id, categoryBySubcategory.get(q.subcategory_id)])
  );
  const answerByQuestion = new Map((responses ?? []).map((r) => [r.question_id, r]));

  const categoryStats = (categories ?? []).map((cat) => {
    const catQuestions = (questions ?? []).filter(
      (q) => categoryBySubcategory.get(q.subcategory_id) === cat.id
    );
    const total = catQuestions.length;
    let evet = 0,
      hayir = 0,
      kapsamDisi = 0;
    catQuestions.forEach((q) => {
      const r = answerByQuestion.get(q.id);
      if (r?.answer === "evet") evet++;
      else if (r?.answer === "hayir") hayir++;
      else if (r?.answer === "kapsam_disi") kapsamDisi++;
    });
    const answered = evet + hayir + kapsamDisi;
    const degerlendirilebilir = evet + hayir;
    const uyum = degerlendirilebilir > 0 ? Math.round((evet / degerlendirilebilir) * 100) : null;
    return { id: cat.id, name: cat.name, total, answered, evet, hayir, kapsamDisi, uyum };
  });

  const genelToplam = categoryStats.reduce((a, c) => a + c.total, 0);
  const genelCevaplanan = categoryStats.reduce((a, c) => a + c.answered, 0);
  const genelHayir = categoryStats.reduce((a, c) => a + c.hayir, 0);
  const genelEvet = categoryStats.reduce((a, c) => a + c.evet, 0);
  const genelUyum =
    genelEvet + genelHayir > 0 ? Math.round((genelEvet / (genelEvet + genelHayir)) * 100) : null;

  function countBy(field: "sistem_faktoru" | "maliyet_faktoru" | "eylem_faktoru", options: string[]) {
    const counts = new Map(options.map((o) => [o, 0]));
    (responses ?? []).forEach((r) => {
      if (r.answer === "hayir" && r[field] && counts.has(r[field] as string)) {
        counts.set(r[field] as string, (counts.get(r[field] as string) ?? 0) + 1);
      }
    });
    return options.map((o) => ({ name: o, value: counts.get(o) ?? 0 }));
  }

  const sistemData = countBy("sistem_faktoru", SISTEM_FAKTORU_SECENEKLERI);
  const maliyetData = countBy("maliyet_faktoru", MALIYET_FAKTORU_SECENEKLERI);
  const eylemData = countBy("eylem_faktoru", EYLEM_FAKTORU_SECENEKLERI);

  return (
    <>
      <NavBar />
      <main className="mx-auto max-w-4xl px-6 py-8">
        <Link href={`/companies/${company.id}`} className="text-sm text-brand-700">
          ← {company.name}
        </Link>
        <h1 className="mt-2 text-2xl font-semibold text-gray-900">Özet Rapor</h1>
        <p className="mt-1 text-sm text-gray-600">
          {genelToplam === 0
            ? "Henüz soru eklenmemiş."
            : `Toplam ${genelToplam} sorudan ${genelCevaplanan} tanesi cevaplandı${
                genelUyum !== null ? ` — genel uyum %${genelUyum}` : ""
              }.`}
        </p>

        <ReportCharts
          categoryStats={categoryStats}
          sistemData={sistemData}
          maliyetData={maliyetData}
          eylemData={eylemData}
        />
      </main>
    </>
  );
}
