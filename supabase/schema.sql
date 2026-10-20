-- İSG Değerlendirme - Supabase şeması
-- Bu dosyayı Supabase projende SQL Editor'e yapıştırıp çalıştır.

-- 1) Profiller: her auth kullanıcısı için rol bilgisi tutar
create table if not exists public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  full_name text,
  role text not null default 'user' check (role in ('user', 'admin')),
  created_at timestamptz not null default now()
);

-- Yeni kullanıcı kaydolunca otomatik profil oluştur
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, full_name)
  values (new.id, new.raw_user_meta_data ->> 'full_name');
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- Admin kontrolü için yardımcı fonksiyon (RLS içinde recursive sorunu önler)
create or replace function public.is_admin()
returns boolean
language sql
security definer set search_path = public
stable
as $$
  select exists (
    select 1 from public.profiles
    where id = auth.uid() and role = 'admin'
  );
$$;

-- 2) Kategoriler
create table if not exists public.categories (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  description text,
  sort_order int not null default 0,
  created_at timestamptz not null default now()
);

-- 3) Sorular
create table if not exists public.questions (
  id uuid primary key default gen_random_uuid(),
  category_id uuid not null references public.categories (id) on delete cascade,
  text text not null,
  guide_note text,
  citation text,
  sort_order int not null default 0,
  created_at timestamptz not null default now()
);

-- 4) Cevaplar (her kullanıcının kendi cevapları)
create table if not exists public.responses (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  question_id uuid not null references public.questions (id) on delete cascade,
  answer text not null check (answer in ('evet', 'hayir', 'kapsam_disi')),
  note text,
  updated_at timestamptz not null default now(),
  unique (user_id, question_id)
);

-- RLS'i etkinleştir
alter table public.profiles enable row level security;
alter table public.categories enable row level security;
alter table public.questions enable row level security;
alter table public.responses enable row level security;

-- Profiller: kullanıcı kendi profilini görür/günceller, admin herkesi görür
drop policy if exists "profiles_select_own_or_admin" on public.profiles;
create policy "profiles_select_own_or_admin" on public.profiles
  for select using (id = auth.uid() or public.is_admin());

drop policy if exists "profiles_update_own" on public.profiles;
create policy "profiles_update_own" on public.profiles
  for update using (id = auth.uid());

-- Kategoriler: herkes (giriş yapmış) okuyabilir, sadece admin değiştirebilir
drop policy if exists "categories_select_all" on public.categories;
create policy "categories_select_all" on public.categories
  for select using (auth.role() = 'authenticated');

drop policy if exists "categories_admin_write" on public.categories;
create policy "categories_admin_write" on public.categories
  for all using (public.is_admin()) with check (public.is_admin());

-- Sorular: herkes okuyabilir, sadece admin değiştirebilir
drop policy if exists "questions_select_all" on public.questions;
create policy "questions_select_all" on public.questions
  for select using (auth.role() = 'authenticated');

drop policy if exists "questions_admin_write" on public.questions;
create policy "questions_admin_write" on public.questions
  for all using (public.is_admin()) with check (public.is_admin());

-- Cevaplar: kullanıcı sadece kendi cevaplarını okur/yazar
drop policy if exists "responses_select_own" on public.responses;
create policy "responses_select_own" on public.responses
  for select using (user_id = auth.uid() or public.is_admin());

drop policy if exists "responses_insert_own" on public.responses;
create policy "responses_insert_own" on public.responses
  for insert with check (user_id = auth.uid());

drop policy if exists "responses_update_own" on public.responses;
create policy "responses_update_own" on public.responses
  for update using (user_id = auth.uid());

-- Kendini admin yapmak için (ilk kurulumda SQL Editor'den SENİN kullanıcın için çalıştır):
-- update public.profiles set role = 'admin' where id = 'BURAYA-KENDI-USER-UUID-NI-YAZ';
