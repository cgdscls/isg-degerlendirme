import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { requireAdmin } from "@/lib/requireAdmin";
import NavBar from "@/components/NavBar";
import MevzuatMaddeSelect from "@/components/MevzuatMaddeSelect";
import {
  DEGERLENDIRME_TIPLERI,
  OLASILIK_SECENEKLERI,
  SONUC_SECENEKLERI,
  referansGecerliMi,
  referansRiskMetni,
} from "@/lib/emm";

// Formdan gelen EMM alanlarını okur ve doğrular.
function emmAlanlari(formData: FormData) {
  const tip = String(formData.get("degerlendirme_tipi") ?? "").trim();
  const refSonuc = String(formData.get("referans_sonuc") ?? "").trim();
  const refOlasilik = String(formData.get("referans_olasilik") ?? "").trim();
  const degerlendirme_tipi = tip === "risk" || tip === "idari" ? tip : null;
  if (degerlendirme_tipi !== "risk") {
    return { alanlar: { degerlendirme_tipi, referans_sonuc: null, referans_olasilik: null }, hata: null };
  }
  if ((refSonuc || refOlasilik) && !referansGecerliMi(refSonuc, refOlasilik)) {
    return {
      alanlar: null,
      hata: "Referans risk geçersiz: sonuç ve olasılığın ikisi de seçilmeli; 'Ciddi – Muhtemel' referans olamaz.",
    };
  }
  return {
    alanlar: {
      degerlendirme_tipi,
      referans_sonuc: refSonuc || null,
      referans_olasilik: refOlasilik || null,
    },
    hata: null,
  };
}

function EmmAlanlari({
  tip,
  refSonuc,
  refOlasilik,
}: {
  tip?: string | null;
  refSonuc?: string | null;
  refOlasilik?: string | null;
}) {
  return (
    <fieldset className="rounded-md border border-gray-200 p-3">
      <legend className="px-1 text-xs font-medium text-gray-600">
        Uyumsuzluk değerlendirmesi (EMM)
      </legend>
      <div className="grid gap-3 sm:grid-cols-3">
        <label className="text-xs text-gray-600">
          Değerlendirme tipi
          <select
            name="degerlendirme_tipi"
            defaultValue={tip ?? ""}
            className="mt-1 w-full rounded-md border border-gray-300 px-2 py-1.5 text-sm"
          >
            <option value="">Tanımlanmadı</option>
            {DEGERLENDIRME_TIPLERI.map((t) => (
              <option key={t.deger} value={t.deger}>
                {t.etiket}
              </option>
            ))}
          </select>
        </label>
        <label className="text-xs text-gray-600">
          Referans sonuç
          <select
            name="referans_sonuc"
            defaultValue={refSonuc ?? ""}
            className="mt-1 w-full rounded-md border border-gray-300 px-2 py-1.5 text-sm"
          >
            <option value="">—</option>
            {SONUC_SECENEKLERI.map((s) => (
              <option key={s.deger} value={s.deger}>
                {s.etiket}
              </option>
            ))}
          </select>
        </label>
        <label className="text-xs text-gray-600">
          Referans olasılık
          <select
            name="referans_olasilik"
            defaultValue={refOlasilik ?? ""}
            className="mt-1 w-full rounded-md border border-gray-300 px-2 py-1.5 text-sm"
          >
            <option value="">—</option>
            {OLASILIK_SECENEKLERI.map((s) => (
              <option key={s.deger} value={s.deger}>
                {s.etiket}
              </option>
            ))}
          </select>
        </label>
      </div>
      <p className="mt-2 text-[11px] leading-snug text-gray-500">
        Referans risk yalnızca risk temelli sorularda kullanılır: gereklilik tam karşılandığında
        kalacak risk. Örn. durdurma kumandası varken bile sonuç ciddidir ama olasılık uzaktır →
        Ciddi – Uzak. İdari sorularda referans alanları kaydedilmez.
      </p>
    </fieldset>
  );
}

export default async function AdminQuestionsPage({
  params,
  searchParams,
}: {
  params: { subcategoryId: string };
  searchParams: { hata?: string };
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
    .select(
      "id, text, guide_note, beklenen_kanit, madde_id, degerlendirme_tipi, referans_sonuc, referans_olasilik, sort_order, maddeler(mevzuat_id)"
    )
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
    const emm = emmAlanlari(formData);
    if (emm.hata) {
      redirect(`/admin/questions/${params.subcategoryId}?hata=${encodeURIComponent(emm.hata)}`);
    }
    const { error } = await supabase.from("questions").insert({
      subcategory_id: params.subcategoryId,
      text,
      guide_note: guide_note || null,
      beklenen_kanit: beklenen_kanit || null,
      madde_id: madde_id || null,
      ...emm.alanlar,
    });
    if (error) {
      redirect(`/admin/questions/${params.subcategoryId}?hata=${encodeURIComponent(error.message)}`);
    }
    revalidatePath(`/admin/questions/${params.subcategoryId}`);
    redirect(`/admin/questions/${params.subcategoryId}`);
  }

  async function updateQuestion(formData: FormData) {
    "use server";
    const { supabase } = await requireAdmin();
    const id = String(formData.get("id"));
    const text = String(formData.get("text") ?? "").trim();
    const guide_note = String(formData.get("guide_note") ?? "").trim();
    const beklenen_kanit = String(formData.get("beklenen_kanit") ?? "").trim();
    const madde_id = String(formData.get("madde_id") ?? "").trim();
    const emm = emmAlanlari(formData);
    if (emm.hata) {
      redirect(
        `/admin/questions/${params.subcategoryId}?hata=${encodeURIComponent(emm.hata)}#soru-${id}`
      );
    }

    // updated_at kullanıcılarda "Mevzuat güncellendi" uyarısını tetikler; bu yüzden
    // sadece soru içeriği değiştiğinde yenilenir. Tip/referans risk değişiklikleri
    // kullanıcının cevabını geçersiz kılmaz.
    const { data: mevcut } = await supabase
      .from("questions")
      .select("text, guide_note, beklenen_kanit, madde_id")
      .eq("id", id)
      .single();
    // Tarayıcılar textarea satır sonlarını \r\n gönderir; karşılaştırmada normalize edilir.
    const n = (s: string | null | undefined) => (s ?? "").replace(/\r\n/g, "\n").trim();
    const icerikDegisti =
      !mevcut ||
      n(mevcut.text) !== n(text) ||
      n(mevcut.guide_note) !== n(guide_note) ||
      n(mevcut.beklenen_kanit) !== n(beklenen_kanit) ||
      (mevcut.madde_id ?? "") !== madde_id;

    const { error } = await supabase
      .from("questions")
      .update({
        text,
        guide_note: guide_note || null,
        beklenen_kanit: beklenen_kanit || null,
        madde_id: madde_id || null,
        ...emm.alanlar,
        ...(icerikDegisti ? { updated_at: new Date().toISOString() } : {}),
      })
      .eq("id", id);
    if (error) {
      redirect(
        `/admin/questions/${params.subcategoryId}?hata=${encodeURIComponent(error.message)}#soru-${id}`
      );
    }
    revalidatePath(`/admin/questions/${params.subcategoryId}`);
    redirect(`/admin/questions/${params.subcategoryId}#soru-${id}`);
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

        {(() => {
          const tanimsiz = questions.filter((q: any) => !q.degerlendirme_tipi).length;
          const referanssiz = questions.filter(
            (q: any) => q.degerlendirme_tipi === "risk" && !referansGecerliMi(q.referans_sonuc, q.referans_olasilik)
          ).length;
          if (tanimsiz === 0 && referanssiz === 0) return null;
          return (
            <p className="mt-2 text-sm text-amber-700">
              {tanimsiz > 0 && `${tanimsiz} sorunun değerlendirme tipi tanımlanmadı. `}
              {referanssiz > 0 && `${referanssiz} risk temelli sorunun referans riski eksik.`}
            </p>
          );
        })()}

        {searchParams.hata && (
          <div className="mt-4 rounded-md border border-red-200 bg-red-50 p-3 text-sm text-red-700">
            {searchParams.hata}
          </div>
        )}

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
          <EmmAlanlari />
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
                <span
                  className={`ml-2 inline-block rounded-full px-2 py-0.5 text-xs font-medium ${
                    q.degerlendirme_tipi === "risk"
                      ? referansGecerliMi(q.referans_sonuc, q.referans_olasilik)
                        ? "bg-orange-100 text-orange-800"
                        : "bg-amber-100 text-amber-800"
                      : q.degerlendirme_tipi === "idari"
                      ? "bg-blue-100 text-blue-800"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {q.degerlendirme_tipi === "risk"
                    ? `Risk · ${referansRiskMetni(q.referans_sonuc, q.referans_olasilik) ?? "referans eksik"}`
                    : q.degerlendirme_tipi === "idari"
                    ? "İdari"
                    : "Tip yok"}
                </span>
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
                <EmmAlanlari
                  tip={q.degerlendirme_tipi}
                  refSonuc={q.referans_sonuc}
                  refOlasilik={q.referans_olasilik}
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
