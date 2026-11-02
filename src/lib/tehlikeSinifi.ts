// Firma formunda kullanılan "Tehlike Sınıfı" seçenekleri.
// companies/page.tsx ve companies/[companyId]/edit/page.tsx burada paylaşır.
export const TEHLIKE_SINIFLARI: { deger: string; etiket: string }[] = [
  { deger: "az_tehlikeli", etiket: "Az Tehlikeli" },
  { deger: "tehlikeli", etiket: "Tehlikeli" },
  { deger: "cok_tehlikeli", etiket: "Çok Tehlikeli" },
];

export function tehlikeSinifiEtiket(deger: string | null | undefined) {
  if (!deger) return null;
  return TEHLIKE_SINIFLARI.find((t) => t.deger === deger)?.etiket ?? deger;
}
