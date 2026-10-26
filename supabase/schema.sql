-- İSG Değerlendirme - Supabase şeması (v2)
-- Bu dosyayı Supabase projende SQL Editor'e yapıştırıp çalıştır.
-- NOT: Bu sürüm v1 tablolarını siler ve yeniden kurar (test verisi kaybolur).

drop table if exists public.responses cascade;
drop table if exists public.questions cascade;
drop table if exists public.maddeler cascade;
drop table if exists public.mevzuatlar cascade;
drop table if exists public.subcategories cascade;
drop table if exists public.categories cascade;
drop table if exists public.companies cascade;
drop table if exists public.profiles cascade;

-- 1) Profiller: her auth kullanıcısı için rol ve plan bilgisi
create table public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  full_name text,
  role text not null default 'user' check (role in ('user', 'admin')),
  plan text not null default 'free' check (plan in ('free', 'premium')),
  created_at timestamptz not null default now()
);

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

-- 2) Firmalar (her kullanıcı kendi firmalarını yönetir)
create table public.companies (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null references auth.users (id) on delete cascade,
  name text not null,
  address text,
  contact_name text,
  contact_phone text,
  contact_email text,
  tax_no text,
  sector text check (sector is null or sector in (
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
  )),
  nace_code text,
  created_at timestamptz not null default now()
);

-- Ücretsiz planda en fazla 1 firma
create or replace function public.enforce_company_limit()
returns trigger
language plpgsql
security definer set search_path = public
as $$
declare
  user_plan text;
  company_count int;
begin
  select plan into user_plan from public.profiles where id = new.owner_id;

  if coalesce(user_plan, 'free') = 'free' then
    select count(*) into company_count from public.companies where owner_id = new.owner_id;
    if company_count >= 1 then
      raise exception 'Ücretsiz planda en fazla 1 firma oluşturabilirsiniz. Daha fazla firma için premium plana geçin.';
    end if;
  end if;

  return new;
end;
$$;

drop trigger if exists before_company_insert on public.companies;
create trigger before_company_insert
  before insert on public.companies
  for each row execute procedure public.enforce_company_limit();

-- 3) Kategoriler ve alt kategoriler
create table public.categories (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  description text,
  sort_order int not null default 0,
  created_at timestamptz not null default now()
);

create table public.subcategories (
  id uuid primary key default gen_random_uuid(),
  category_id uuid not null references public.categories (id) on delete cascade,
  name text not null,
  sort_order int not null default 0,
  created_at timestamptz not null default now()
);

-- 4) Mevzuat ve maddeler (kademeli referans yapısı)
create table public.mevzuatlar (
  id uuid primary key default gen_random_uuid(),
  ad text not null,
  resmi_gazete_no text,
  resmi_gazete_tarihi date,
  created_at timestamptz not null default now()
);

create table public.maddeler (
  id uuid primary key default gen_random_uuid(),
  mevzuat_id uuid not null references public.mevzuatlar (id) on delete cascade,
  madde_no text not null,
  madde_baslik text,
  created_at timestamptz not null default now()
);

-- 5) Sorular
create table public.questions (
  id uuid primary key default gen_random_uuid(),
  subcategory_id uuid not null references public.subcategories (id) on delete cascade,
  text text not null,
  guide_note text,
  madde_id uuid references public.maddeler (id) on delete set null,
  beklenen_kanit text,
  sort_order int not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- 6) Cevaplar (firma bazında; "Hayır" cevabında faktör/öneri alanları anlamlıdır)
create table public.responses (
  id uuid primary key default gen_random_uuid(),
  company_id uuid not null references public.companies (id) on delete cascade,
  question_id uuid not null references public.questions (id) on delete cascade,
  answer text not null check (answer in ('evet', 'hayir', 'kapsam_disi')),
  note text,
  oneri text,
  sistem_faktoru text check (
    sistem_faktoru in (
      'Gereklilik tespit edilmemiş',
      'Uygun kontrol bulunamamış',
      'Kontrol uygulanmamış',
      'Sistem eksikliği'
    )
  ),
  maliyet_faktoru text check (
    maliyet_faktoru in (
      'Yüksek getirili yatırım (ROI > %10)',
      'Düşük getirili yatırım (ROI < %10)',
      'İşgücü artışı gerektiriyor',
      'İşletme maliyetini artırıyor',
      'Önemli maliyet etkisi yok'
    )
  ),
  eylem_faktoru text check (
    eylem_faktoru in (
      'Acil eylem gerekli (24 saat içinde)',
      'Eylem zorunlu (1 ay içinde)',
      'Eylem gerekli (3 ay içinde)',
      'Eylem önerilir (12 ay içinde)'
    )
  ),
  updated_by uuid references auth.users (id),
  updated_at timestamptz not null default now(),
  unique (company_id, question_id)
);

-- RLS
alter table public.profiles enable row level security;
alter table public.companies enable row level security;
alter table public.categories enable row level security;
alter table public.subcategories enable row level security;
alter table public.mevzuatlar enable row level security;
alter table public.maddeler enable row level security;
alter table public.questions enable row level security;
alter table public.responses enable row level security;

-- Profiller
create policy "profiles_select_own_or_admin" on public.profiles
  for select using (id = auth.uid() or public.is_admin());
create policy "profiles_update_own" on public.profiles
  for update using (id = auth.uid());

-- Firmalar: sadece sahibi (ve admin) görür/değiştirir
create policy "companies_select_own_or_admin" on public.companies
  for select using (owner_id = auth.uid() or public.is_admin());
create policy "companies_insert_own" on public.companies
  for insert with check (owner_id = auth.uid());
create policy "companies_update_own" on public.companies
  for update using (owner_id = auth.uid());
create policy "companies_delete_own" on public.companies
  for delete using (owner_id = auth.uid());

-- Kategoriler / alt kategoriler / mevzuat / madde / sorular: herkes okur, admin yazar
create policy "categories_select_all" on public.categories
  for select using (auth.role() = 'authenticated');
create policy "categories_admin_write" on public.categories
  for all using (public.is_admin()) with check (public.is_admin());

create policy "subcategories_select_all" on public.subcategories
  for select using (auth.role() = 'authenticated');
create policy "subcategories_admin_write" on public.subcategories
  for all using (public.is_admin()) with check (public.is_admin());

create policy "mevzuatlar_select_all" on public.mevzuatlar
  for select using (auth.role() = 'authenticated');
create policy "mevzuatlar_admin_write" on public.mevzuatlar
  for all using (public.is_admin()) with check (public.is_admin());

create policy "maddeler_select_all" on public.maddeler
  for select using (auth.role() = 'authenticated');
create policy "maddeler_admin_write" on public.maddeler
  for all using (public.is_admin()) with check (public.is_admin());

create policy "questions_select_all" on public.questions
  for select using (auth.role() = 'authenticated');
create policy "questions_admin_write" on public.questions
  for all using (public.is_admin()) with check (public.is_admin());

-- Cevaplar: sadece ilgili firmanın sahibi (ve admin)
create policy "responses_select_own_company" on public.responses
  for select using (
    public.is_admin() or
    exists (select 1 from public.companies c where c.id = responses.company_id and c.owner_id = auth.uid())
  );
create policy "responses_insert_own_company" on public.responses
  for insert with check (
    exists (select 1 from public.companies c where c.id = responses.company_id and c.owner_id = auth.uid())
  );
create policy "responses_update_own_company" on public.responses
  for update using (
    exists (select 1 from public.companies c where c.id = responses.company_id and c.owner_id = auth.uid())
  );

-- Kendini admin yapmak için (SQL Editor'den kendi kullanıcın için çalıştır):
-- update public.profiles set role = 'admin' where id = 'BURAYA-KENDI-USER-UUID-NI-YAZ';
