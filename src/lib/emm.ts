// HSE Enforcement Management Model (EMM, operasyonel sürüm 3.2) temelli
// uyumsuzluk değerlendirmesi. Kaynak: docs/kaynaklar/HSE_Enforcement_Management_Model_EMM.pdf
//
// Bir soru "Hayır" cevaplandığında, sorunun önceden belirlenmiş tipine göre
// iki değerlendirmeden biri yapılır:
//  - "risk"  : Sağlık ve güvenlik riskleri (EMM Adım 3, Tablo 1, 2.1, 2.2)
//  - "idari" : Risk temelli olmayan uyum ve idari düzenlemeler (EMM Tablo 4)

export type DegerlendirmeTipi = "risk" | "idari";
export type Sonuc = "ciddi" | "onemli" | "hafif";
export type Olasilik = "muhtemel" | "mumkun" | "uzak" | "yok";
export type Kapsam = "tek_az" | "cok";
export type UyumDuzeyi = "hic_yok" | "yetersiz" | "kucuk";
export type RiskAcigi = "asiri" | "yuksek" | "orta" | "dusuk" | "yok";

type Secenek<T extends string> = { deger: T; etiket: string; aciklama: string };

export const DEGERLENDIRME_TIPLERI: Secenek<DegerlendirmeTipi>[] = [
  {
    deger: "risk",
    etiket: "Risk temelli",
    aciklama: "Gereklilik doğrudan bir sağlık/güvenlik riskini kontrol eder.",
  },
  {
    deger: "idari",
    etiket: "İdari / uyum",
    aciklama:
      "Gereklilik kendi başına riski kontrol etmez (kayıt, bildirim, görevlendirme, belge vb.).",
  },
];

// EMM Tablo 1
export const SONUC_SECENEKLERI: Secenek<Sonuc>[] = [
  {
    deger: "ciddi",
    etiket: "Ciddi",
    aciklama:
      "Ölüm; kalıcı/geri dönüşsüz sakatlık ya da hemen hastane tedavisi gerektiren yaralanma; kalıcı, ilerleyici sağlık etkisi.",
  },
  {
    deger: "onemli",
    etiket: "Önemli",
    aciklama:
      "Kişinin 3 günden fazla normal işini yapamamasına yol açan yaralanma; geçici, geri dönüşlü, ilerlemeyen sağlık etkisi.",
  },
  {
    deger: "hafif",
    etiket: "Hafif",
    aciklama: "Yukarıdakilere girmeyen yaralanma veya sağlık etkisi.",
  },
];

// EMM paragraf 52 (kademeler EMM'de tanımlanmaz; açıklamalar karne için öneridir)
export const OLASILIK_SECENEKLERI: Secenek<Olasilik>[] = [
  { deger: "muhtemel", etiket: "Muhtemel", aciklama: "Mevcut koşullarda gerçekleşmesi beklenir." },
  { deger: "mumkun", etiket: "Mümkün", aciklama: "Gerçekleşebilir; bir koşulun daha bozulması yeterli." },
  { deger: "uzak", etiket: "Uzak", aciklama: "Birden fazla koşulun aynı anda bozulması gerekir." },
  { deger: "yok", etiket: "Yok / ihmal edilebilir", aciklama: "Sonucun gerçekleşmesi beklenmez." },
];

// EMM paragraf 53 ve 60
export const KAPSAM_SECENEKLERI: Secenek<Kapsam>[] = [
  { deger: "tek_az", etiket: "Tek veya az sayıda kişi", aciklama: "EMM Tablo 2.1" },
  {
    deger: "cok",
    etiket: "Büyük olay / çok sayıda kişi",
    aciklama: "Büyük kaza veya işyeri dışına taşan, çok sayıda kişiyi etkileyebilecek tehlike. EMM Tablo 2.2",
  },
];

// EMM Tablo 4
export const UYUM_DUZEYI_SECENEKLERI: Secenek<UyumDuzeyi>[] = [
  {
    deger: "hic_yok",
    etiket: "Hiç yok",
    aciklama: "Düzenleme tamamen yok, ya da hiç anlaşılmamış / uygulanmamış.",
  },
  {
    deger: "yetersiz",
    etiket: "Yetersiz",
    aciklama: "Yalnızca göstermelik uyum; eksikler esaslı nitelikte.",
  },
  {
    deger: "kucuk",
    etiket: "Küçük eksik",
    aciklama: "Eksikler küçük, somut etkisi az ve kolayca giderilebilir.",
  },
];

export const RISK_ACIGI_BILGI: Record<RiskAcigi, { etiket: string; emm: string; sinif: string }> = {
  asiri: { etiket: "Aşırı", emm: "Extreme", sinif: "bg-red-600 text-white" },
  yuksek: { etiket: "Yüksek", emm: "Substantial", sinif: "bg-orange-500 text-white" },
  orta: { etiket: "Orta", emm: "Moderate", sinif: "bg-yellow-300 text-yellow-900" },
  dusuk: { etiket: "Düşük", emm: "Nominal", sinif: "bg-lime-500 text-lime-950" },
  yok: { etiket: "Açık yok", emm: "Complies", sinif: "bg-gray-200 text-gray-700" },
};

export const RISK_ACIGI_SIRASI: RiskAcigi[] = ["asiri", "yuksek", "orta", "dusuk", "yok"];

// ---------------------------------------------------------------------------
// Risk açığı tabloları (EMM Tablo 2.1 ve 2.2)
// Satır = mevcut risk (işyerinin bulunduğu yer), sütun = referans risk
// (yükümlülük karşılanınca kalacak risk). Hücreler EMM PDF'inin 20. ve 21.
// sayfalarındaki renkli tablolardan piksel örneklemesiyle çıkarılmıştır.
// A = Aşırı, Y = Yüksek, O = Orta, D = Düşük, - = açık yok (uyumlu)

const SATIRLAR = [
  "ciddi-muhtemel",
  "ciddi-mumkun",
  "ciddi-uzak",
  "onemli-muhtemel",
  "onemli-mumkun",
  "onemli-uzak",
  "hafif-muhtemel",
  "hafif-mumkun",
  "hafif-uzak",
];

const SUTUNLAR = [
  "ciddi-mumkun",
  "ciddi-uzak",
  "ciddi-yok",
  "onemli-muhtemel",
  "onemli-mumkun",
  "onemli-uzak",
  "onemli-yok",
  "hafif-muhtemel",
  "hafif-mumkun",
  "hafif-uzak",
  "hafif-yok",
];

// Tablo 2.1: Tek ve az sayıda kişi
const TABLO_2_1 = [
  "YYAYYYAYYAA", // ciddi-muhtemel
  "-OAOYYAYYYA", // ciddi-mumkun
  "--YOOOYOOYY", // ciddi-uzak
  "--Y-OOYOOOY", // onemli-muhtemel
  "--O--OOOOOO", // onemli-mumkun
  "--O---ODOOO", // onemli-uzak
  "--O---O-DOO", // hafif-muhtemel
  "--D---D--DD", // hafif-mumkun
  "--D---D---D", // hafif-uzak
];

// Tablo 2.2: Çok sayıda kişi
const TABLO_2_2 = [
  "AAAAAAAAAAA", // ciddi-muhtemel
  "-YAYYYAYYAA", // ciddi-mumkun
  "--YOYYYYYYY", // ciddi-uzak
  "--Y-OOYYYYY", // onemli-muhtemel
  "--Y--OYYYYY", // onemli-mumkun
  "--Y---YOOOY", // onemli-uzak
  "--O---O-DOO", // hafif-muhtemel
  "--D---D--DD", // hafif-mumkun
  "--D---D---D", // hafif-uzak
];

const KOD: Record<string, RiskAcigi> = { A: "asiri", Y: "yuksek", O: "orta", D: "dusuk", "-": "yok" };

function sutunAnahtari(sonuc: Sonuc, olasilik: Olasilik) {
  // EMM'de "olasılık yok" sütunları üç sonuç için de aynıdır.
  if (olasilik === "yok") return `${sonuc}-yok`;
  return `${sonuc}-${olasilik}`;
}

/** Referans risk olarak geçerli mi? (Ciddi + Muhtemel bir referans düzey olamaz.) */
export function referansGecerliMi(sonuc?: string | null, olasilik?: string | null) {
  if (!sonuc || !olasilik) return false;
  return SUTUNLAR.includes(sutunAnahtari(sonuc as Sonuc, olasilik as Olasilik));
}

/**
 * Mevcut riski referans riskle karşılaştırıp risk açığını verir.
 * Eksik ya da geçersiz girdi varsa null döner.
 */
export function riskAcigiHesapla(p: {
  sonuc?: string | null;
  olasilik?: string | null;
  kapsam?: string | null;
  referansSonuc?: string | null;
  referansOlasilik?: string | null;
}): RiskAcigi | null {
  const { sonuc, olasilik, kapsam, referansSonuc, referansOlasilik } = p;
  if (!sonuc || !olasilik || !kapsam) return null;
  if (!referansGecerliMi(referansSonuc, referansOlasilik)) return null;
  if (olasilik === "yok") return "yok";

  const satir = SATIRLAR.indexOf(`${sonuc}-${olasilik}`);
  const sutun = SUTUNLAR.indexOf(sutunAnahtari(referansSonuc as Sonuc, referansOlasilik as Olasilik));
  if (satir < 0 || sutun < 0) return null;

  const tablo = kapsam === "cok" ? TABLO_2_2 : TABLO_2_1;
  return KOD[tablo[satir][sutun]] ?? null;
}

export function etiketBul<T extends string>(liste: Secenek<T>[], deger?: string | null) {
  if (!deger) return null;
  return liste.find((s) => s.deger === deger)?.etiket ?? deger;
}

export function referansRiskMetni(sonuc?: string | null, olasilik?: string | null) {
  if (!referansGecerliMi(sonuc, olasilik)) return null;
  return `${etiketBul(SONUC_SECENEKLERI, sonuc)} – ${etiketBul(OLASILIK_SECENEKLERI, olasilik)}`;
}
