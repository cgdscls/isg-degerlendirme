"use server";

// Admin soru işlemleri: ekleme, güncelleme (alt kategori değişikliği = taşıma) ve silme.
// Hem mevzuat sayfasından hem alt kategori sayfasından aynı işlemler kullanılır.
// Formlar, işlemden sonra dönülecek sayfayı gizli "donus" alanında gönderir.

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { requireAdmin } from "@/lib/requireAdmin";
import { BAGLAYICILIK_SECENEKLERI, referansGecerliMi, yardimciHatasi } from "@/lib/emm";

function oku(formData: FormData, ad: string) {
  return String(formData.get(ad) ?? "").trim();
}

// Açık yönlendirmeyi önlemek için yalnızca admin içi yollara dönülür.
function donusYolu(formData: FormData) {
  const d = oku(formData, "donus");
  return d.startsWith("/admin/") ? d : "/admin";
}

// "/admin/x?acik=1#madde-5" yoluna hata parametresi ekler, çapayı korur.
function hataliYol(donus: string, hata: string) {
  const [yol, capa] = donus.split("#");
  const ayirac = yol.includes("?") ? "&" : "?";
  return `${yol}${ayirac}hata=${encodeURIComponent(hata)}${capa ? `#${capa}` : ""}`;
}

// Next 14'te sunucu işleminden aynı adrese ve "#çapa" içeren bir adrese yönlendirme,
// istemcide yalnızca çapaya kaydırma olarak işlenip sayfa verisi yenilenmeyebiliyor.
// Benzersiz bir "t" parametresi adresi değiştirir ve sayfanın yeniden çizilmesini sağlar.
function taze(yol: string) {
  const [adres, capa] = yol.split("#");
  const ayirac = adres.includes("?") ? "&" : "?";
  return `${adres}${ayirac}t=${Date.now()}${capa ? `#${capa}` : ""}`;
}

function sayfalariYenile() {
  revalidatePath("/admin", "layout");
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

async function sonSira(supabase: any, subcategoryId: string) {
  const { data } = await supabase
    .from("questions")
    .select("sort_order")
    .eq("subcategory_id", subcategoryId)
    .order("sort_order", { ascending: false })
    .limit(1);
  return ((data?.[0]?.sort_order as number | undefined) ?? -1) + 1;
}

export async function soruEkle(formData: FormData) {
  const { supabase } = await requireAdmin();
  const donus = donusYolu(formData);
  const text = oku(formData, "text");
  const subcategory_id = oku(formData, "subcategory_id");
  const madde_id = oku(formData, "madde_id");

  if (!text) redirect(hataliYol(donus, "Soru metni boş olamaz."));
  if (!subcategory_id) redirect(hataliYol(donus, "Üst ve alt kategori seçilmeli."));

  const emm = emmAlanlari(formData);
  if (emm.hata) redirect(hataliYol(donus, emm.hata));

  const { error } = await supabase.from("questions").insert({
    subcategory_id,
    text,
    guide_note: oku(formData, "guide_note") || null,
    beklenen_kanit: oku(formData, "beklenen_kanit") || null,
    madde_id: madde_id || null,
    sort_order: await sonSira(supabase, subcategory_id),
    ...emm.alanlar,
  });
  if (error) redirect(hataliYol(donus, error.message));

  sayfalariYenile();
  redirect(taze(donus));
}

export async function soruGuncelle(formData: FormData) {
  const { supabase } = await requireAdmin();
  const donus = donusYolu(formData);
  const id = oku(formData, "id");
  const text = oku(formData, "text");
  const guide_note = oku(formData, "guide_note");
  const beklenen_kanit = oku(formData, "beklenen_kanit");
  const madde_id = oku(formData, "madde_id");
  const subcategory_id = oku(formData, "subcategory_id");

  if (!id) redirect(donus);
  if (!text) redirect(hataliYol(donus, "Soru metni boş olamaz."));

  const emm = emmAlanlari(formData);
  if (emm.hata) redirect(hataliYol(donus, emm.hata));

  const { data: mevcut } = await supabase
    .from("questions")
    .select("text, guide_note, beklenen_kanit, madde_id, subcategory_id")
    .eq("id", id)
    .single();

  // updated_at kullanıcılarda "Mevzuat güncellendi" uyarısını tetikler; bu yüzden yalnızca
  // soru içeriği değiştiğinde yenilenir. Tip, referans risk ve kategori değişiklikleri
  // kullanıcının cevabını geçersiz kılmaz. Tarayıcılar satır sonlarını \r\n gönderir.
  const n = (s: string | null | undefined) => (s ?? "").replace(/\r\n/g, "\n").trim();
  const icerikDegisti =
    !mevcut ||
    n(mevcut.text) !== n(text) ||
    n(mevcut.guide_note) !== n(guide_note) ||
    n(mevcut.beklenen_kanit) !== n(beklenen_kanit) ||
    (mevcut.madde_id ?? "") !== madde_id;

  // Alt kategori değiştiyse soru yeni alt kategorinin sonuna taşınır.
  const tasiniyor = Boolean(subcategory_id) && mevcut?.subcategory_id !== subcategory_id;

  const { error } = await supabase
    .from("questions")
    .update({
      text,
      guide_note: guide_note || null,
      beklenen_kanit: beklenen_kanit || null,
      madde_id: madde_id || null,
      ...emm.alanlar,
      ...(tasiniyor
        ? { subcategory_id, sort_order: await sonSira(supabase, subcategory_id) }
        : {}),
      ...(icerikDegisti ? { updated_at: new Date().toISOString() } : {}),
    })
    .eq("id", id);
  if (error) redirect(hataliYol(donus, error.message));

  sayfalariYenile();
  redirect(taze(donus));
}

// Onay pencereli silme düğmesiyle (OnayliSilForm) kullanılmak üzere bağlanır:
// soruSil.bind(null, soruId, donusYolu)
export async function soruSil(id: string, donusHam: string, _formData?: FormData) {
  const { supabase } = await requireAdmin();
  const donus = donusHam.startsWith("/admin/") ? donusHam : "/admin";
  if (id) {
    const { error } = await supabase.from("questions").delete().eq("id", id);
    if (error) redirect(hataliYol(donus, error.message));
  }
  sayfalariYenile();
  redirect(taze(donus));
}
