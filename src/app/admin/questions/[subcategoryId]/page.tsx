import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { requireAdmin } from "@/lib/requireAdmin";
import NavBar from "@/components/NavBar";
import MevzuatMaddeSelect from "@/components/MevzuatMaddeSelect";
import {
  BAGLAYICILIK_SECENEKLERI,
  DEGERLENDIRME_TIPLERI,
  GEREKLILIK_ETKISI_SECENEKLERI,
  OLASILIK_SECENEKLERI,
  SONUC_SECENEKLERI,
  baglayicilikBilgi,
  referansAciklamasi,
  referansGecerliMi,
  yardimciHatasi,
} from "@/lib/emm";

const SECIM_SINIFI = "mt-1 w-full rounded-md border border-gray-300 px-2 py-1.5 text-sm";

function oku(formData: FormData, ad: string) {
  return String(formData.get(ad) ?? "").trim();
}

// Formdan gelen EMM alanlarını okur ve doğrular.
function emmAlanlari(formData: FormData) {
  const tip = oku(formData, "degerlendirme_tipi");
  const degerlendirme_tipi = tip === "risk" || tip === "idari" ? tip : null;
  const bag = oku(formData, "standart_baglayiciligi");
  const standart_baglayiciligi = BAGLAYICILIK_SECENEKLERI.some((b) => b.deger === bag) ? bag : null;

  const bos = {
    referans_sonuc: null,
    referans_olasilik: null,
    tehlike_sonuc: null,
    gereklilik_etkisi: null,
    azaltilmis_sonuc: null,
    referans_gerekce: null,
  };

  if (degerlendirme_tipi !== "risk") {
    return { alanlar: { degerlendirme_tipi, standart_baglayiciligi, ...bos }, hata: null };
  }

  const refSonuc = oku(formData, "referans_sonuc");
  const refOlasilik = oku(formData, "referans_olasilik");
  if ((refSonuc || refOlasilik) && !referansGecerliMi(refSonuc, refOlasilik)) {
    return {
      alanlar: null,
      hata: "Elle referans risk geçersiz: sonuç ve olasılığın ikisi de seçilmeli; 'Ciddi – Muhtemel' referans olamaz.",
    };
  }

  const tehlike_sonuc = oku(formData, "tehlike_sonuc") || null;
  const gereklilik_etkisi = oku(formData, "gereklilik_etkisi") || null;
  const azaltilmisHam = oku(formData, "azaltilmis_sonuc") || null;
  const azaltilmis_sonuc =
    gereklilik_etkisi === "sonuc_azaltir" || gereklilik_etkisi === "ikisi" ? azaltilmisHam : null;
  const hata = yardimciHatasi({ tehlike_sonuc, gereklilik_etkisi, azaltilmis_sonuc });
  if (hata) return { alanlar: null, hata };

  return {
    alanlar: {
      degerlendirme_tipi,
      standart_baglayiciligi,
      referans_sonuc: refSonuc || null,
      referans_olasilik: refOlasilik || null,
      tehlike_sonuc,
      gereklilik_etkisi,
      azaltilmis_sonuc,
      referans_gerekce: oku(formData, "referans_gerekce") || null,
    },
    hata: null,
  };
}

function SecimKutusu({
  ad,
  etiket,
  deger,
  secenekler,
  bosEtiket = "—",
}: {
  ad: string;
  etiket: string;
  deger?: string | null;
  secenekler: { deger: string; etiket: string }[];
  bosEtiket?: string;
}) {
  return (
    <label className="text-xs text-gray-600">
      {etiket}
      <select name={ad} defaultValue={deger ?? ""} className={SECIM_SINIFI}>
        <option value="">{bosEtiket}</option>
        {secenekler.map((s) => (
          <option key={s.deger} value={s.deger}>
            {s.etiket}
          </option>
        ))}
      </select>
    </label>
  );
}

function EmmAlanlari({ q }: { q?: any }) {
  return (
    <fieldset className="space-y-3 rounded-md border border-gray-200 p-3">
      <legend className="px-1 text-xs font-medium text-gray-600">
        Uyumsuzluk değerlendirmesi (EMM)
      </legend>

      <div className="grid gap-3 sm:grid-cols-2">
        <SecimKutusu
          ad="degerlendirme_tipi"
          etiket="Değerlendirme tipi"
          deger={q?.degerlendirme_tipi}
          secenekler={DEGERLENDIRME_TIPLERI}
          bosEtiket="Tanımlanmadı"
        />
        <SecimKutusu
          ad="standart_baglayiciligi"
          etiket="Standardın bağlayıcılığı (EMM Tablo 3)"
          deger={q?.standart_baglayiciligi}
          secenekler={BAGLAYICILIK_SECENEKLERI}
          bosEtiket="Tanımlı (varsayılan)"
        />
      </div>
      <ul className="space-y-0.5 text-[11px] leading-snug text-gray-500">
        {BAGLAYICILIK_SECENEKLERI.map((b) => (
          <li key={b.deger}>
            <strong>{b.etiket}:</strong> {b.aciklama}
          </li>
        ))}
      </ul>

      <div className="rounded-md bg-gray-50 p-3">
        <p className="text-xs font-medium text-gray-700">
          Referans risk yardımcısı — yalnızca risk temelli sorular
        </p>
        <p className="mt-0.5 text-[11px] leading-snug text-gray-500">
          Referans risk, gereklilik karşılandığında kalan risktir (EMM par. 35, 44-46). Örn. tornada
          koruyucu: tehlike Ciddi, gereklilik olayı imkânsız kılar → Ciddi – Yok.
        </p>
        <div className="mt-2 grid gap-3 sm:grid-cols-3">
          <SecimKutusu
            ad="tehlike_sonuc"
            etiket="Tehlikenin gerçekçi en kötü sonucu"
            deger={q?.tehlike_sonuc}
            secenekler={SONUC_SECENEKLERI}
          />
          <SecimKutusu
            ad="gereklilik_etkisi"
            etiket="Gereklilik ne yapıyor?"
            deger={q?.gereklilik_etkisi}
            secenekler={GEREKLILIK_ETKISI_SECENEKLERI}
          />
          <SecimKutusu
            ad="azaltilmis_sonuc"
            etiket="Azaltılmış sonuç (sonucu azaltanlarda)"
            deger={q?.azaltilmis_sonuc}
            secenekler={SONUC_SECENEKLERI}
            bosEtiket="Bir kademe aşağı (varsayılan)"
          />
        </div>
        <ul className="mt-2 space-y-0.5 text-[11px] leading-snug text-gray-500">
          {GEREKLILIK_ETKISI_SECENEKLERI.map((g) => (
            <li key={g.deger}>
              <strong>{g.etiket}:</strong> {g.aciklama}
            </li>
          ))}
        </ul>
        <textarea
          name="referans_gerekce"
          defaultValue={q?.referans_gerekce ?? ""}
          rows={2}
          placeholder="Gerekçe: gereklilik neden bu etkiyi yaratıyor? (kullanıcıya da gösterilir)"
          className="mt-2 w-full rounded-md border border-gray-300 px-3 py-2 text-xs"
        />
        {q && (
          <p className="mt-1 text-xs text-gray-600">
            Şu anki referans risk: <strong>{referansAciklamasi(q) ?? "tanımlanmadı"}</strong>
          </p>
        )}

        <details className="mt-2">
          <summary className="cursor-pointer text-[11px] text-gray-500">
            Elle referans risk (yardımcı boş bırakılırsa kullanılır)
          </summary>
          <div className="mt-2 grid gap-3 sm:grid-cols-2">
            <SecimKutusu
              ad="referans_sonuc"
              etiket="Referans sonuç"
              deger={q?.referans_sonuc}
              secenekler={SONUC_SECENEKLERI}
            />
            <SecimKutusu
              ad="referans_olasilik"
              etiket="Referans olasılık"
              deger={q?.referans_olasilik}
              secenekler={OLASILIK_SECENEKLERI}
            />
          </div>
        </details>
      </div>
      <p className="text-[11px] text-gray-500">
        İdari sorularda yalnızca bağlayıcılık kaydedilir; referans risk alanları temizlenir.
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
      "id, text, guide_note, beklenen_kanit, madde_id, degerlendirme_tipi, referans_sonuc, referans_olasilik, tehlike_sonuc, gereklilik_etkisi, azaltilmis_sonuc, referans_gerekce, standart_baglayiciligi, sort_order, maddeler(mevzuat_id)"
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
            (q: any) => q.degerlendirme_tipi === "risk" && !referansAciklamasi(q)
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
                      ? referansAciklamasi(q)
                        ? "bg-orange-100 text-orange-800"
                        : "bg-amber-100 text-amber-800"
                      : q.degerlendirme_tipi === "idari"
                      ? "bg-blue-100 text-blue-800"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {q.degerlendirme_tipi === "risk"
                    ? `Risk · ${referansAciklamasi(q) ?? "referans eksik"}`
                    : q.degerlendirme_tipi === "idari"
                    ? "İdari"
                    : "Tip yok"}
                </span>
                {q.degerlendirme_tipi && (
                  <span className="ml-1 inline-block rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-600">
                    {baglayicilikBilgi(q.standart_baglayiciligi).etiket}
                    {baglayicilikBilgi(q.standart_baglayiciligi).varsayilan ? " (vars.)" : ""}
                  </span>
                )}
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
                <EmmAlanlari q={q} />
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
