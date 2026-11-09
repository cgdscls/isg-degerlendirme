import type { KategoriAgaci } from "@/components/admin/KategoriSecimi";
import { referansAciklamasi } from "@/lib/emm";

// Soru formlarındaki üst → alt kategori seçimi için kategori ağacını getirir.
export async function kategoriAgaciGetir(supabase: any): Promise<KategoriAgaci> {
  const [{ data: kategoriler }, { data: altlar }] = await Promise.all([
    supabase.from("categories").select("id, name, sort_order").order("sort_order"),
    supabase.from("subcategories").select("id, name, category_id, sort_order").order("sort_order"),
  ]);
  return (kategoriler ?? []).map((k: any) => ({
    id: k.id,
    name: k.name,
    altlar: (altlar ?? [])
      .filter((a: any) => a.category_id === k.id)
      .map((a: any) => ({ id: a.id, name: a.name })),
  }));
}

// Soru formunun ihtiyaç duyduğu bütün alanlar.
export const SORU_ALANLARI =
  "id, text, guide_note, beklenen_kanit, madde_id, subcategory_id, sort_order, degerlendirme_tipi, referans_sonuc, referans_olasilik, tehlike_sonuc, gereklilik_etkisi, azaltilmis_sonuc, referans_gerekce, standart_baglayiciligi";

// Soru özet satırındaki değerlendirme etiketi.
export function emmEtiketi(q: any): { metin: string; sinif: string } {
  if (q.degerlendirme_tipi === "risk") {
    const ref = referansAciklamasi(q);
    return {
      metin: `Risk · ${ref ?? "referans eksik"}`,
      sinif: ref ? "bg-orange-100 text-orange-800" : "bg-amber-100 text-amber-800",
    };
  }
  if (q.degerlendirme_tipi === "idari") {
    return { metin: "Uyum ve idari düzenleme", sinif: "bg-blue-100 text-blue-800" };
  }
  return { metin: "Tip yok", sinif: "bg-gray-100 text-gray-600" };
}

export { tumunuGetir } from "@/lib/tumunuGetir";

export function rgMetni(no: string | null, tarih: string | null) {
  const t = tarih ? tarih.split("-").reverse().join(".") : null;
  const rg = no && t ? `${no}/${t}` : no || t;
  return rg ? `RG: ${rg}` : null;
}
