// Madde numaralarını doğal sıraya göre karşılaştırır: "Madde 4" < "Madde 10".
// Metin sıralaması "Madde 10" < "Madde 4" verdiği için kullanılmaz.
const karsilastirici = new Intl.Collator("tr", { numeric: true, sensitivity: "base" });

export function maddeKarsilastir(a: string | null | undefined, b: string | null | undefined) {
  return karsilastirici.compare(a ?? "", b ?? "");
}

export function maddeleriSirala<T extends { madde_no: string | null }>(liste: T[]): T[] {
  return [...liste].sort((x, y) => maddeKarsilastir(x.madde_no, y.madde_no));
}
