// Firma × alt kategori kapsam ayarı (firma_kapsam tablosu).
// Satır varsa alt kategori o firma için kapsam dışıdır.

export type KapsamKaydi = { gerekce: string | null; created_at: string };

// companyId → (subcategoryId → kayıt). Tablo henüz yoksa veya okunamazsa boş döner;
// böylece sayfalar kapsam ayarı olmadan da çalışır.
export async function kapsamDisiGetir(
  supabase: any,
  companyIds: string[]
): Promise<Map<string, Map<string, KapsamKaydi>>> {
  const sonuc = new Map<string, Map<string, KapsamKaydi>>();
  if (companyIds.length === 0) return sonuc;
  const { data, error } = await supabase
    .from("firma_kapsam")
    .select("company_id, subcategory_id, gerekce, created_at")
    .in("company_id", companyIds);
  if (error || !data) return sonuc;
  for (const r of data as any[]) {
    const m = sonuc.get(r.company_id) ?? new Map<string, KapsamKaydi>();
    m.set(r.subcategory_id, { gerekce: r.gerekce, created_at: r.created_at });
    sonuc.set(r.company_id, m);
  }
  return sonuc;
}

export function tarihTr(iso: string | null | undefined) {
  if (!iso) return "";
  const d = new Date(iso);
  return isNaN(d.getTime())
    ? ""
    : d.toLocaleDateString("tr-TR", { day: "2-digit", month: "2-digit", year: "numeric", timeZone: "Europe/Istanbul" });
}
