-- Mevcut Supabase projende SQL Editor'e yapıştırıp çalıştır.
-- Bu migration mevcut veriyi SİLMEZ, yeni bir tablo ekler:
-- "mevzuat_kaynagi" — isgmevzuat.tr'deki ILO Sözleşmeleri / Kanunlar /
-- Yönetmelikler / Tebliğler listelerini tutar.
--
-- ÖNEMLİ FARK: Bu tablo projedeki diğer tabloların aksine GİRİŞSİZ (herkese
-- açık) okunabilir — çünkü amacı ücretsiz, herkese açık bir mevzuat kaynağı
-- olmak. Karne tarafındaki (categories, mevzuatlar, maddeler, questions vb.)
-- hiçbir tabloya ve kurala dokunulmuyor, onlar "sadece giriş yapan kullanıcı
-- okur" kuralıyla aynı şekilde kalmaya devam ediyor.

create table if not exists public.mevzuat_kaynagi (
  id uuid primary key default gen_random_uuid(),
  kategori text not null check (kategori in ('ilo_sozlesmesi', 'kanun', 'yonetmelik', 'teblig')),
  ad text not null,

  -- Sadece ILO Sözleşmeleri için
  sozlesme_no text,
  ilo_kabul_tarihi date,
  yururluk_tarihi date,

  -- Sadece Kanunlar için
  kanun_no text,

  -- Kanun / Yönetmelik / Tebliğ ortak alanları
  kabul_rg_no text,
  kabul_rg_tarihi date,
  degisiklik_rg_no text,
  degisiklik_rg_tarihi date,

  -- Erişim linkleri (hepsi opsiyonel, admin elle girecek)
  mbs_link text,
  word_link text,
  pdf_link text,
  kaysis_link text,

  sort_order int not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists mevzuat_kaynagi_kategori_idx on public.mevzuat_kaynagi (kategori);

alter table public.mevzuat_kaynagi enable row level security;

drop policy if exists "mevzuat_kaynagi_select_public" on public.mevzuat_kaynagi;
create policy "mevzuat_kaynagi_select_public" on public.mevzuat_kaynagi
  for select using (true);

drop policy if exists "mevzuat_kaynagi_admin_write" on public.mevzuat_kaynagi;
create policy "mevzuat_kaynagi_admin_write" on public.mevzuat_kaynagi
  for all using (public.is_admin()) with check (public.is_admin());
