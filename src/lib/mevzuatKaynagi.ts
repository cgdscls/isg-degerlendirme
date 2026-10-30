// "Mevzuat Kaynağı" (isgmevzuat.tr'deki herkese açık mevzuat listesi) için
// ortak sabitler. Admin ve public sayfalar bu dosyayı paylaşır.

export type MevzuatKategori = "ilo_sozlesmesi" | "kanun" | "yonetmelik" | "teblig";

export const KATEGORILER: {
  deger: MevzuatKategori;
  slug: string;
  baslik: string;
  baslikTekil: string;
}[] = [
  { deger: "ilo_sozlesmesi", slug: "ilo-sozlesmeleri", baslik: "ILO Sözleşmeleri", baslikTekil: "ILO Sözleşmesi" },
  { deger: "kanun", slug: "kanunlar", baslik: "Kanunlar", baslikTekil: "Kanun" },
  { deger: "yonetmelik", slug: "yonetmelikler", baslik: "Yönetmelikler", baslikTekil: "Yönetmelik" },
  { deger: "teblig", slug: "tebligler", baslik: "Tebliğler", baslikTekil: "Tebliğ" },
];

export function kategoriSlugDan(slug: string) {
  return KATEGORILER.find((k) => k.slug === slug);
}

export function kategoriDegerDen(deger: string) {
  return KATEGORILER.find((k) => k.deger === deger);
}

export type MevzuatKaynagiKayit = {
  id: string;
  kategori: MevzuatKategori;
  ad: string;
  sozlesme_no: string | null;
  ilo_kabul_tarihi: string | null;
  yururluk_tarihi: string | null;
  kanun_no: string | null;
  kabul_rg_no: string | null;
  kabul_rg_tarihi: string | null;
  degisiklik_rg_no: string | null;
  degisiklik_rg_tarihi: string | null;
  mbs_link: string | null;
  word_link: string | null;
  pdf_link: string | null;
  kaysis_link: string | null;
  sort_order: number;
};

export function tarihGoster(iso: string | null) {
  if (!iso) return null;
  const [y, m, d] = iso.split("-");
  if (!y || !m || !d) return iso;
  return `${d}.${m}.${y}`;
}
