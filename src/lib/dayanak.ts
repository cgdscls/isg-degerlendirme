// Sorunun dayanak türü: bağlı olduğu maddenin mevzuatından gelir.
// Maddesiz sorular ve türü olmayan mevzuatlar "yasal" sayılır.

export type DayanakTuru = "yasal" | "iyi_uygulama";

function tekil<T>(x: T | T[] | null | undefined): T | null {
  return Array.isArray(x) ? x[0] ?? null : x ?? null;
}

// questions.select("..., maddeler(mevzuatlar(tur))") sonucundan türü okur.
export function dayanakTuru(q: any): DayanakTuru {
  const madde = tekil<any>(q?.maddeler);
  const mevzuat = tekil<any>(madde?.mevzuatlar);
  return mevzuat?.tur === "iyi_uygulama" ? "iyi_uygulama" : "yasal";
}

export const DAYANAK_TURLERI: { deger: DayanakTuru; etiket: string }[] = [
  { deger: "yasal", etiket: "Yasal (Türk mevzuatı)" },
  { deger: "iyi_uygulama", etiket: "İyi uygulama (bağlayıcı değil: OSHA, rehber, standart)" },
];
