// Firma × alt kategori kapsam durumu. İki kaynaktan gelir:
//  - "elle": kullanıcı kartın anahtarıyla kapsam dışı bıraktı (firma_kapsam tablosu)
//  - "on_kosul": firma bilgisindeki ön koşul sorusuna "Hayır" dedi (firma_on_kosul);
//    üst kategoriye yazılmış soru o kategorinin bütün alt kategorilerini kapsar.
// Ön koşuldan gelen durum önceliklidir ve karttan değiştirilemez.

export type KapsamKaydi = {
  gerekce: string | null;
  created_at: string;
  kaynak: "elle" | "on_kosul";
};

// companyId → (subcategoryId → kayıt). Tablolar henüz yoksa veya okunamazsa
// ilgili kaynak boş sayılır; sayfalar kapsam ayarı olmadan da çalışır.
export async function kapsamDisiGetir(
  supabase: any,
  companyIds: string[]
): Promise<Map<string, Map<string, KapsamKaydi>>> {
  const sonuc = new Map<string, Map<string, KapsamKaydi>>();
  if (companyIds.length === 0) return sonuc;
  const firmaHaritasi = (id: string) => {
    const m = sonuc.get(id) ?? new Map<string, KapsamKaydi>();
    sonuc.set(id, m);
    return m;
  };

  const [elle, onKosul] = await Promise.all([
    supabase
      .from("firma_kapsam")
      .select("company_id, subcategory_id, gerekce, created_at")
      .in("company_id", companyIds),
    supabase
      .from("firma_on_kosul")
      .select("company_id, hedef_tur, hedef_id, updated_at")
      .in("company_id", companyIds)
      .eq("cevap", "hayir"),
  ]);

  for (const r of (elle.error ? [] : elle.data ?? []) as any[]) {
    firmaHaritasi(r.company_id).set(r.subcategory_id, {
      gerekce: r.gerekce,
      created_at: r.created_at,
      kaynak: "elle",
    });
  }

  const hayirlar = (onKosul.error ? [] : onKosul.data ?? []) as any[];
  if (hayirlar.length > 0) {
    const sorular = await onKosulSorulariGetir(supabase);
    const soruMetni = new Map(sorular.map((s) => [`${s.tur}:${s.id}`, s.soru]));
    const kategoriAltlari = new Map<string, string[]>();
    sorular.forEach((s) => {
      if (s.tur === "kategori") kategoriAltlari.set(s.id, s.altIdleri);
    });
    for (const r of hayirlar) {
      const soru = soruMetni.get(`${r.hedef_tur}:${r.hedef_id}`);
      if (!soru) continue; // admin soruyu kaldırmışsa cevap etkisizdir
      const kayit: KapsamKaydi = {
        gerekce: `Firma bilgisi: "${soru}" — Hayır`,
        created_at: r.updated_at,
        kaynak: "on_kosul",
      };
      const altlar = r.hedef_tur === "kategori" ? kategoriAltlari.get(r.hedef_id) ?? [] : [r.hedef_id];
      const m = firmaHaritasi(r.company_id);
      altlar.forEach((a) => m.set(a, kayit));
    }
  }
  return sonuc;
}

export type OnKosulSorusu = {
  tur: "kategori" | "alt";
  id: string;
  ad: string; // kategori veya "Üst / Alt" adı
  soru: string;
  aciklama: string | null;
  altIdleri: string[]; // kategori için bütün alt kategoriler, alt için kendisi
  sira: number;
};

// Admin'in tanımladığı bütün ön koşul soruları, kategori sırasıyla.
export async function onKosulSorulariGetir(supabase: any): Promise<OnKosulSorusu[]> {
  const [{ data: kat, error: e1 }, { data: alt, error: e2 }] = await Promise.all([
    supabase
      .from("categories")
      .select("id, name, sort_order, on_kosul_sorusu, on_kosul_aciklama")
      .order("sort_order"),
    supabase
      .from("subcategories")
      .select("id, name, category_id, sort_order, on_kosul_sorusu, on_kosul_aciklama")
      .order("sort_order"),
  ]);
  if (e1 || e2) return [];
  const katAdi = new Map((kat ?? []).map((k: any) => [k.id, k.name]));
  const katSira = new Map((kat ?? []).map((k: any, i: number) => [k.id, i]));
  const liste: OnKosulSorusu[] = [];
  (kat ?? []).forEach((k: any, i: number) => {
    if (!k.on_kosul_sorusu?.trim()) return;
    liste.push({
      tur: "kategori",
      id: k.id,
      ad: k.name,
      soru: k.on_kosul_sorusu.trim(),
      aciklama: k.on_kosul_aciklama?.trim() || null,
      altIdleri: (alt ?? []).filter((a: any) => a.category_id === k.id).map((a: any) => a.id),
      sira: i * 1000,
    });
  });
  (alt ?? []).forEach((a: any) => {
    if (!a.on_kosul_sorusu?.trim()) return;
    liste.push({
      tur: "alt",
      id: a.id,
      ad: `${katAdi.get(a.category_id) ?? ""} / ${a.name}`,
      soru: a.on_kosul_sorusu.trim(),
      aciklama: a.on_kosul_aciklama?.trim() || null,
      altIdleri: [a.id],
      sira: ((katSira.get(a.category_id) as number) ?? 99) * 1000 + 1 + (a.sort_order ?? 0),
    });
  });
  return liste.sort((x, y) => x.sira - y.sira);
}

export function tarihTr(iso: string | null | undefined) {
  if (!iso) return "";
  const d = new Date(iso);
  return isNaN(d.getTime())
    ? ""
    : d.toLocaleDateString("tr-TR", { day: "2-digit", month: "2-digit", year: "numeric", timeZone: "Europe/Istanbul" });
}
