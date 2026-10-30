export const BILET_TURLERI: { deger: string; etiket: string }[] = [
  { deger: "mevzuat_onerisi", etiket: "Mevzuat ekleme önerisi" },
  { deger: "sistem_onerisi", etiket: "Sistemle ilgili öneri" },
  { deger: "hata_bildirimi", etiket: "Hata bildirimi" },
  { deger: "diger", etiket: "Diğer" },
];

export const BILET_DURUMLARI: { deger: string; etiket: string; renk: string }[] = [
  { deger: "acik", etiket: "Açık", renk: "bg-amber-100 text-amber-700" },
  { deger: "inceleniyor", etiket: "İnceleniyor", renk: "bg-blue-100 text-blue-700" },
  { deger: "cozuldu", etiket: "Çözüldü", renk: "bg-green-100 text-green-700" },
];

export function biletTuruEtiket(deger: string) {
  return BILET_TURLERI.find((t) => t.deger === deger)?.etiket ?? deger;
}

export function biletDurumu(deger: string) {
  return BILET_DURUMLARI.find((d) => d.deger === deger) ?? BILET_DURUMLARI[0];
}
