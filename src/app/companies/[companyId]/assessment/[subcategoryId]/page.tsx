import Link from "next/link";
import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import NavBar from "@/components/NavBar";
import AssessmentForm from "@/components/AssessmentForm";
import { tumunuGetir, yeniSoruMu } from "@/lib/tumunuGetir";
import KapsamAnahtari from "@/components/KapsamAnahtari";
import { kapsamDisiGetir, tarihTr } from "@/lib/kapsam";
import { kapsamDisiBirak, kapsamaAl } from "@/lib/kapsamIslemleri";

export default async function AssessmentPage({
  params,
}: {
  params: { companyId: string; subcategoryId: string };
}) {
  const supabase = createClient();

  const { data: company } = await supabase
    .from("companies")
    .select("id, name, created_at")
    .eq("id", params.companyId)
    .single();

  const { data: subcategory } = await supabase
    .from("subcategories")
    .select("id, name, category_id, categories(name)")
    .eq("id", params.subcategoryId)
    .single();

  if (!company || !subcategory) notFound();

  const kapsam =
    (await kapsamDisiGetir(supabase, [company.id])).get(company.id)?.get(subcategory.id) ?? null;

  const { data: questionsRaw } = await supabase
    .from("questions")
    .select(
      "id, text, guide_note, beklenen_kanit, degerlendirme_tipi, referans_sonuc, referans_olasilik, tehlike_sonuc, gereklilik_etkisi, azaltilmis_sonuc, referans_gerekce, standart_baglayiciligi, sort_order, updated_at, created_at, maddeler(madde_no, mevzuatlar(ad, resmi_gazete_no, resmi_gazete_tarihi))"
    )
    .eq("subcategory_id", params.subcategoryId)
    .order("sort_order", { ascending: true });

  function formatTarih(iso: string | null) {
    if (!iso) return null;
    const [yil, ay, gun] = iso.split("-");
    if (!yil || !ay || !gun) return iso;
    return `${gun}.${ay}.${yil}`;
  }

  const responses = await tumunuGetir<any>(() =>
    supabase
      .from("responses")
      .select("question_id, answer, note, oneri, sonuc, olasilik, kapsam, uyum_duzeyi, updated_at")
      .eq("company_id", params.companyId)
      .order("question_id")
  );

  const responseByQuestion = new Map(
    (responses ?? []).map((r) => [r.question_id, r])
  );

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
    const existing = responseByQuestion.get(q.id);
    const needsReview = Boolean(
      existing && q.updated_at && new Date(q.updated_at) > new Date(existing.updated_at)
    );
    return {
      id: q.id,
      text: q.text,
      guide_note: q.guide_note,
      beklenen_kanit: q.beklenen_kanit,
      degerlendirme_tipi: q.degerlendirme_tipi ?? null,
      referans_sonuc: q.referans_sonuc ?? null,
      referans_olasilik: q.referans_olasilik ?? null,
      tehlike_sonuc: q.tehlike_sonuc ?? null,
      gereklilik_etkisi: q.gereklilik_etkisi ?? null,
      azaltilmis_sonuc: q.azaltilmis_sonuc ?? null,
      referans_gerekce: q.referans_gerekce ?? null,
      standart_baglayiciligi: q.standart_baglayiciligi ?? null,
      citation,
      needsReview,
      yeni: yeniSoruMu(q.created_at, company.created_at, Boolean(existing)),
    };
  });

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
        <div className="flex items-start justify-between gap-3">
          <h1 className="text-2xl font-semibold text-gray-900">{subcategory.name}</h1>
          <KapsamAnahtari
            altAdi={subcategory.name}
            kapsamDisi={Boolean(kapsam)}
            birakAction={kapsamDisiBirak.bind(null, company.id, subcategory.id)}
            alAction={kapsamaAl.bind(null, company.id, subcategory.id)}
          />
        </div>

        <div className="mt-6">
          {kapsam ? (
            <div className="rounded-lg border border-dashed border-gray-300 bg-gray-50 p-5 text-sm text-gray-700">
              <p className="font-medium text-gray-900">Bu alan işyeriniz için kapsam dışı.</p>
              <p className="mt-1">
                {tarihTr(kapsam.created_at)} tarihinde kapsam dışı bırakıldı
                {kapsam.gerekce ? `: ${kapsam.gerekce}` : "."}
              </p>
              <p className="mt-2 text-gray-500">
                Bu alandaki {questions.length} soru değerlendirmeye ve rapora katılmıyor. İşyerinizde
                bu alana giren bir faaliyet başlarsa sağ üstteki anahtarla kapsama alın; daha önce
                verdiğiniz cevaplar korunur.
              </p>
            </div>
          ) : questions.length > 0 ? (
            <AssessmentForm
              companyId={company.id}
              questions={questions}
              existingResponses={responses.filter((r: any) =>
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
