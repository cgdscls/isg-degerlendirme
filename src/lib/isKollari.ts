// Firma formunda kullanılan sektör (iş kolu) listesi.
// "companies/page.tsx" ve "companies/[companyId]/edit/page.tsx" burada paylaşır.
// (Daha önce companies/page.tsx'ten export edilip import ediliyordu; Next.js
// App Router'da page.tsx dosyaları default export dışında bir şey export
// edemediği için "npm run build" tip kontrolünde hataya yol açıyordu.)
export const IS_KOLLARI = [
  "Avcılık, balıkçılık, tarım ve ormancılık",
  "Gıda sanayi",
  "Madencilik ve taş ocakları",
  "Petrol, kimya, lastik, plastik ve ilaç",
  "Dokuma, hazır giyim ve deri",
  "Ağaç ve kâğıt",
  "İletişim",
  "Basın, yayın ve gazetecilik",
  "Banka, finans ve sigorta",
  "Ticaret, büro, eğitim ve güzel sanatlar",
  "Çimento, toprak ve cam",
  "Metal",
  "İnşaat",
  "Enerji",
  "Taşımacılık",
  "Gemi yapımı ve deniz taşımacılığı, ardiye ve antrepoculuk",
  "Sağlık ve sosyal hizmetler",
  "Konaklama ve eğlence işleri",
  "Savunma ve güvenlik",
  "Genel işler",
];
