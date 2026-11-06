-- EMM temelli uyumsuzluk değerlendirmesi
-- Sorulara değerlendirme tipi ve referans risk; cevaplara yeni değerlendirme alanları.
-- Eski sistem_faktoru / maliyet_faktoru / eylem_faktoru kolonlarına dokunulmaz (veri korunur).

alter table public.questions
  add column if not exists degerlendirme_tipi text
    check (degerlendirme_tipi in ('risk', 'idari')),
  add column if not exists referans_sonuc text
    check (referans_sonuc in ('ciddi', 'onemli', 'hafif')),
  add column if not exists referans_olasilik text
    check (referans_olasilik in ('muhtemel', 'mumkun', 'uzak', 'yok'));

alter table public.questions drop constraint if exists questions_referans_risk_gecerli;
alter table public.questions
  add constraint questions_referans_risk_gecerli
  check (not (referans_sonuc = 'ciddi' and referans_olasilik = 'muhtemel'));

alter table public.responses
  add column if not exists sonuc text
    check (sonuc in ('ciddi', 'onemli', 'hafif')),
  add column if not exists olasilik text
    check (olasilik in ('muhtemel', 'mumkun', 'uzak', 'yok')),
  add column if not exists kapsam text
    check (kapsam in ('tek_az', 'cok')),
  add column if not exists uyum_duzeyi text
    check (uyum_duzeyi in ('hic_yok', 'yetersiz', 'kucuk'));
