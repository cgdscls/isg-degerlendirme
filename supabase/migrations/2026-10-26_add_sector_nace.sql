-- Mevcut Supabase projende SQL Editor'e yapıştırıp çalıştır.
-- Bu migration mevcut veriyi SİLMEZ, sadece companies tablosuna iki yeni
-- (opsiyonel) sütun ekler: sector (iş kolu) ve nace_code (NACE kodu).

alter table public.companies
  add column if not exists sector text,
  add column if not exists nace_code text;

alter table public.companies
  drop constraint if exists companies_sector_check;

alter table public.companies
  add constraint companies_sector_check check (sector is null or sector in (
    'Avcılık, balıkçılık, tarım ve ormancılık',
    'Gıda sanayi',
    'Madencilik ve taş ocakları',
    'Petrol, kimya, lastik, plastik ve ilaç',
    'Dokuma, hazır giyim ve deri',
    'Ağaç ve kâğıt',
    'İletişim',
    'Basın, yayın ve gazetecilik',
    'Banka, finans ve sigorta',
    'Ticaret, büro, eğitim ve güzel sanatlar',
    'Çimento, toprak ve cam',
    'Metal',
    'İnşaat',
    'Enerji',
    'Taşımacılık',
    'Gemi yapımı ve deniz taşımacılığı, ardiye ve antrepoculuk',
    'Sağlık ve sosyal hizmetler',
    'Konaklama ve eğlence işleri',
    'Savunma ve güvenlik',
    'Genel işler'
  ));
