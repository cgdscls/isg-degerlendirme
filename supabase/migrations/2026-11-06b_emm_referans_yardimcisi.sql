-- EMM referans risk yardımcısı, gerekçe ve standardın bağlayıcılığı (deneme).
-- Kaldırılmak istenirse kolonlar düşürülebilir; elle girilen referans_sonuc /
-- referans_olasilik alanları ayrı durduğu için hesaplama onlarla devam eder.

alter table public.questions
  add column if not exists tehlike_sonuc text
    check (tehlike_sonuc in ('ciddi', 'onemli', 'hafif')),
  add column if not exists gereklilik_etkisi text
    check (gereklilik_etkisi in ('olasilik_kaldirir', 'olasilik_azaltir', 'sonuc_azaltir', 'ikisi')),
  add column if not exists azaltilmis_sonuc text
    check (azaltilmis_sonuc in ('ciddi', 'onemli', 'hafif')),
  add column if not exists referans_gerekce text,
  add column if not exists standart_baglayiciligi text
    check (standart_baglayiciligi in ('tanimli', 'yerlesik', 'yorumsal'));
