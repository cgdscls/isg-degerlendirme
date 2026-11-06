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
    etiket: "Uyum ve idari düzenleme bulguları",
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

// ---------------------------------------------------------------------------
// Referans risk yardımcısı (EMM paragraf 35 ve 44-46)
// Referans risk = gereklilik karşılandığında kalan risk. Gerekliliğin olasılığı mı,
// sonucu mu, ikisini mi azalttığına bakılarak türetilir. Kurallar EMM'nin üç
// örneğini (torna, yüksekten düşme, diş röntgeni) aynen verir.

export type GereklilikEtkisi = "olasilik_kaldirir" | "olasilik_azaltir" | "sonuc_azaltir" | "ikisi";

export const GEREKLILIK_ETKISI_SECENEKLERI: Secenek<GereklilikEtkisi>[] = [
  {
    deger: "olasilik_kaldirir",
    etiket: "Olayı imkânsız kılar",
    aciklama: "Fiziksel engel, kilitleme, ayırma vb. Tehlike durur ama olay gerçekleşemez → olasılık Yok.",
  },
  {
    deger: "olasilik_azaltir",
    etiket: "Olasılığı azaltır",
    aciklama: "Korkuluk, bakım, kontrol, prosedür vb. Sonuç değişmez → olasılık Uzak.",
  },
  {
    deger: "sonuc_azaltir",
    etiket: "Sonucu azaltır",
    aciklama: "Güvenlik ağı, acil durdurma, KKD vb. Olasılık değişmez, sonuç düşer.",
  },
  {
    deger: "ikisi",
    etiket: "İkisini de azaltır",
    aciklama: "Hem olasılığı hem sonucu düşürür → düşük sonuç, olasılık Uzak.",
  },
];

const SONUC_SIRA: Sonuc[] = ["hafif", "onemli", "ciddi"];

function birKademeAsagi(s: Sonuc): Sonuc {
  const i = SONUC_SIRA.indexOf(s);
  return SONUC_SIRA[Math.max(0, i - 1)];
}

export type SoruReferansAlanlari = {
  referans_sonuc?: string | null;
  referans_olasilik?: string | null;
  tehlike_sonuc?: string | null;
  gereklilik_etkisi?: string | null;
  azaltilmis_sonuc?: string | null;
};

function yardimciDoluMu(q: SoruReferansAlanlari) {
  return Boolean(q.tehlike_sonuc && q.gereklilik_etkisi);
}

/**
 * Sorunun referans riskini verir. Yardımcı alanlar doluysa onlardan türetilir,
 * değilse elle girilmiş referans_sonuc/referans_olasilik kullanılır.
 * "Sonucu azaltır" durumunda referans olasılık, mevcut olasılıkla aynıdır.
 */
export function referansBelirle(
  q: SoruReferansAlanlari,
  mevcutOlasilik?: string | null
): { sonuc: Sonuc; olasilik: Olasilik } | null {
  if (yardimciDoluMu(q)) {
    const tehlike = q.tehlike_sonuc as Sonuc;
    const dusuk = (q.azaltilmis_sonuc as Sonuc) || birKademeAsagi(tehlike);
    let sonuc: { sonuc: Sonuc; olasilik: Olasilik } | null = null;
    switch (q.gereklilik_etkisi) {
      case "olasilik_kaldirir":
        sonuc = { sonuc: tehlike, olasilik: "yok" };
        break;
      case "olasilik_azaltir":
        sonuc = { sonuc: tehlike, olasilik: "uzak" };
        break;
      case "sonuc_azaltir":
        if (!mevcutOlasilik) return null;
        sonuc = { sonuc: dusuk, olasilik: mevcutOlasilik as Olasilik };
        break;
      case "ikisi":
        sonuc = { sonuc: dusuk, olasilik: "uzak" };
        break;
    }
    if (!sonuc || !referansGecerliMi(sonuc.sonuc, sonuc.olasilik)) return null;
    return sonuc;
  }
  if (referansGecerliMi(q.referans_sonuc, q.referans_olasilik)) {
    return { sonuc: q.referans_sonuc as Sonuc, olasilik: q.referans_olasilik as Olasilik };
  }
  return null;
}

/** Referans riskin insan okunur özeti (mevcut olasılıktan bağımsız). */
export function referansAciklamasi(q: SoruReferansAlanlari): string | null {
  if (yardimciDoluMu(q)) {
    if (q.gereklilik_etkisi === "sonuc_azaltir") {
      const dusuk = (q.azaltilmis_sonuc as Sonuc) || birKademeAsagi(q.tehlike_sonuc as Sonuc);
      return `${etiketBul(SONUC_SECENEKLERI, dusuk)} – mevcut olasılıkla aynı`;
    }
    const r = referansBelirle(q);
    return r ? referansRiskMetni(r.sonuc, r.olasilik) : null;
  }
  return referansRiskMetni(q.referans_sonuc, q.referans_olasilik);
}

/** Admin formundan gelen yardımcı alanları doğrular; hata metni ya da null döner. */
export function yardimciHatasi(q: SoruReferansAlanlari): string | null {
  const dolu = [q.tehlike_sonuc, q.gereklilik_etkisi].filter(Boolean).length;
  if (dolu === 1) return "Referans risk yardımcısında tehlikenin sonucu ve gerekliliğin etkisi birlikte seçilmeli.";
  if (dolu === 0) return null;
  if (q.azaltilmis_sonuc) {
    if (q.gereklilik_etkisi !== "sonuc_azaltir" && q.gereklilik_etkisi !== "ikisi") return null;
    const a = SONUC_SIRA.indexOf(q.azaltilmis_sonuc as Sonuc);
    const t = SONUC_SIRA.indexOf(q.tehlike_sonuc as Sonuc);
    if (a >= t && t > 0) return "Azaltılmış sonuç, tehlikenin sonucundan düşük olmalı.";
  }
  return null;
}

// ---------------------------------------------------------------------------
// Standardın bağlayıcılığı (EMM Tablo 3, paragraf 67-69)
// Hukuken zorunlu olup olmamasına değil, işverenin ne yapacağını öğrenmek için
// nereye bakması gerektiğine göre belirlenir.

export type Baglayicilik = "tanimli" | "yerlesik" | "yorumsal";

export const BAGLAYICILIK_SECENEKLERI: Secenek<Baglayicilik>[] = [
  {
    deger: "tanimli",
    etiket: "Tanımlı",
    aciklama: "Ne yapılacağı kanun, yönetmelik veya tebliğ maddesinde açıkça belirtilmiş.",
  },
  {
    deger: "yerlesik",
    etiket: "Yerleşik",
    aciklama:
      "Mevzuat genel bir yükümlülük koyuyor; ayrıntı mevzuatla bağlantılı standartta (TS EN vb.) veya yayımlanmış rehberde.",
  },
  {
    deger: "yorumsal",
    etiket: "Yorumsal",
    aciklama: "Ayrıntı yayımlanmış bir kaynakta yok; ne yapılacağı uzman yorumuna kalmış.",
  },
];

/** Tanımlanmamışsa varsayılan Tanımlı kabul edilir. */
export function baglayicilikBilgi(deger?: string | null) {
  const s = BAGLAYICILIK_SECENEKLERI.find((b) => b.deger === deger);
  if (s) return { ...s, varsayilan: false };
  return { ...BAGLAYICILIK_SECENEKLERI[0], varsayilan: true };
}
