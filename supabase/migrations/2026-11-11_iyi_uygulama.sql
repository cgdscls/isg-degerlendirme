-- İyi uygulama: dayanağı bağlayıcı olmayan kaynaklar (OSHA, HSE rehberi, standart vb.)
-- Tür mevzuat düzeyinde tutulur; o mevzuatın maddelerine bağlı sorular iyi uygulama sayılır.
alter table public.mevzuatlar
  add column if not exists tur text not null default 'yasal';
alter table public.mevzuatlar drop constraint if exists mevzuatlar_tur_check;
alter table public.mevzuatlar
  add constraint mevzuatlar_tur_check check (tur in ('yasal', 'iyi_uygulama'));

-- Firma ayarı: iyi uygulama soruları gösterilsin mi (varsayılan: evet)
alter table public.companies
  add column if not exists iyi_uygulama_goster boolean not null default true;
