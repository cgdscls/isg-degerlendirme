-- Mevcut Supabase projende SQL Editor'e yapıştırıp çalıştır.
-- Bu migration mevcut veriyi SİLMEZ. İki değişiklik yapar:
--   1) companies tablosuna opsiyonel "sgk_no" (İşyeri SGK Numarası) sütunu
--   2) yeni "destek_biletleri" tablosu (mevzuat ekleme önerisi / sistem
--      önerisi / hata bildirimi için kullanıcıların gönderebileceği biletler)

alter table public.companies
  add column if not exists sgk_no text;

create table if not exists public.destek_biletleri (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  tur text not null check (tur in ('mevzuat_onerisi', 'sistem_onerisi', 'hata_bildirimi', 'diger')),
  baslik text not null,
  aciklama text not null,
  durum text not null default 'acik' check (durum in ('acik', 'inceleniyor', 'cozuldu')),
  admin_yaniti text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists destek_biletleri_user_id_idx on public.destek_biletleri (user_id);

alter table public.destek_biletleri enable row level security;

drop policy if exists "destek_biletleri_select_own_or_admin" on public.destek_biletleri;
create policy "destek_biletleri_select_own_or_admin" on public.destek_biletleri
  for select using (user_id = auth.uid() or public.is_admin());

drop policy if exists "destek_biletleri_insert_own" on public.destek_biletleri;
create policy "destek_biletleri_insert_own" on public.destek_biletleri
  for insert with check (user_id = auth.uid());

drop policy if exists "destek_biletleri_update_admin" on public.destek_biletleri;
create policy "destek_biletleri_update_admin" on public.destek_biletleri
  for update using (public.is_admin()) with check (public.is_admin());
