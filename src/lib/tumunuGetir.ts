// Supabase tek sorguda en fazla 1000 satır döndürür; büyük tablolar sayfa sayfa okunur.
// sorgu: her çağrıda yeni bir sorgu üreten fonksiyon. Sorgu sabit bir sıralama
// içermelidir (ör. .order("id")), yoksa sayfalar arasında satır kayabilir.
export async function tumunuGetir<T = any>(sorgu: () => any, sayfa = 1000): Promise<T[]> {
  const sonuc: T[] = [];
  for (let bas = 0; ; bas += sayfa) {
    const { data, error } = await sorgu().range(bas, bas + sayfa - 1);
    if (error || !data) break;
    sonuc.push(...data);
    if (data.length < sayfa) break;
  }
  return sonuc;
}

// Firma eklendikten sonra eklenen ve henüz cevaplanmamış soru "yeni" sayılır.
export function yeniSoruMu(
  soruOlusturma: string | null | undefined,
  firmaOlusturma: string | null | undefined,
  cevaplandi: boolean
) {
  if (cevaplandi || !soruOlusturma || !firmaOlusturma) return false;
  return new Date(soruOlusturma) > new Date(firmaOlusturma);
}
