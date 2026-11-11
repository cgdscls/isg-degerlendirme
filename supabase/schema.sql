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
  sgk_no text,
  tehlike_sinifi text check (tehlike_sinifi in ('cok_tehlikeli', 'tehlikeli', 'az_tehlikeli')),
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
  -- EMM değerlendirme tipi ve referans risk (yükümlülük karşılanınca kalacak risk)
  degerlendirme_tipi text check (degerlendirme_tipi in ('risk', 'idari')),
  referans_sonuc text check (referans_sonuc in ('ciddi', 'onemli', 'hafif')),
  referans_olasilik text check (referans_olasilik in ('muhtemel', 'mumkun', 'uzak', 'yok')),
  -- Referans risk yardımcısı (EMM paragraf 44-46) ve standardın bağlayıcılığı (Tablo 3)
  tehlike_sonuc text check (tehlike_sonuc in ('ciddi', 'onemli', 'hafif')),
  gereklilik_etkisi text check (gereklilik_etkisi in ('olasilik_kaldirir', 'olasilik_azaltir', 'sonuc_azaltir', 'ikisi')),
  azaltilmis_sonuc text check (azaltilmis_sonuc in ('ciddi', 'onemli', 'hafif')),
  referans_gerekce text,
  standart_baglayiciligi text check (standart_baglayiciligi in ('tanimli', 'yerlesik', 'yorumsal')),
  sort_order int not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint questions_referans_risk_gecerli
    check (not (referans_sonuc = 'ciddi' and referans_olasilik = 'muhtemel'))
);

-- 6b) Mevzuat Kaynağı: isgmevzuat.tr'deki ILO Sözleşmeleri / Kanunlar /
-- Yönetmelikler / Tebliğler listesi. Karne'nin mevzuat/madde yapısından
-- bağımsız, herkese açık (girişsiz okunabilir) bir referans kütüphanesi.
create table public.mevzuat_kaynagi (
  id uuid primary key default gen_random_uuid(),
  kategori text not null check (kategori in ('ilo_sozlesmesi', 'kanun', 'yonetmelik', 'teblig')),
  ad text not null,
  sozlesme_no text,
  ilo_kabul_tarihi date,
  yururluk_tarihi date,
  kanun_no text,
  kabul_rg_no text,
  kabul_rg_tarihi date,
  degisiklik_rg_no text,
  degisiklik_rg_tarihi date,
  mbs_link text,
  word_link text,
  pdf_link text,
  kaysis_link text,
  sort_order int not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index mevzuat_kaynagi_kategori_idx on public.mevzuat_kaynagi (kategori);

-- 6c) Destek biletleri: kullanıcıların mevzuat ekleme önerisi, sistem
-- önerisi veya hata bildirimi gönderebildiği basit bilet sistemi.
create table public.destek_biletleri (
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

create index destek_biletleri_user_id_idx on public.destek_biletleri (user_id);

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
  -- EMM değerlendirmesi (risk temelli: sonuc/olasilik/kapsam; idari: uyum_duzeyi)
  sonuc text check (sonuc in ('ciddi', 'onemli', 'hafif')),
  olasilik text check (olasilik in ('muhtemel', 'mumkun', 'uzak', 'yok')),
  kapsam text check (kapsam in ('tek_az', 'cok')),
  uyum_duzeyi text check (uyum_duzeyi in ('hic_yok', 'yetersiz', 'kucuk')),
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
alter table public.mevzuat_kaynagi enable row level security;
alter table public.destek_biletleri enable row level security;

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

-- Mevzuat Kaynağı: herkes (girişsiz dahil) okur, sadece admin yazar
create policy "mevzuat_kaynagi_select_public" on public.mevzuat_kaynagi
  for select using (true);
create policy "mevzuat_kaynagi_admin_write" on public.mevzuat_kaynagi
  for all using (public.is_admin()) with check (public.is_admin());

-- Destek biletleri: kullanıcı kendi biletini oluşturur/görür, admin hepsini
-- görür ve yanıtlar/durum günceller
create policy "destek_biletleri_select_own_or_admin" on public.destek_biletleri
  for select using (user_id = auth.uid() or public.is_admin());
create policy "destek_biletleri_insert_own" on public.destek_biletleri
  for insert with check (user_id = auth.uid());
create policy "destek_biletleri_update_admin" on public.destek_biletleri
  for update using (public.is_admin()) with check (public.is_admin());

-- Kendini admin yapmak için (SQL Editor'den kendi kullanıcın için çalıştır):
-- update public.profiles set role = 'admin' where id = 'BURAYA-KENDI-USER-UUID-NI-YAZ';

-- Firma × alt kategori kapsam ayarı.
-- Satır varsa o alt kategori bu firma için kapsam dışıdır; satır silinince
-- alt kategori yeniden kapsama girer. Cevaplara (responses) dokunulmaz.

create table if not exists public.firma_kapsam (
  company_id     uuid not null references public.companies(id) on delete cascade,
  subcategory_id uuid not null references public.subcategories(id) on delete cascade,
  gerekce        text,
  created_at     timestamptz not null default now(),
  created_by     uuid references auth.users(id) on delete set null,
  primary key (company_id, subcategory_id)
);

alter table public.firma_kapsam enable row level security;

drop policy if exists "firma_kapsam_select_own_company" on public.firma_kapsam;
create policy "firma_kapsam_select_own_company" on public.firma_kapsam
  for select using (
    public.is_admin() or
    exists (select 1 from public.companies c where c.id = firma_kapsam.company_id and c.owner_id = auth.uid())
  );

drop policy if exists "firma_kapsam_insert_own_company" on public.firma_kapsam;
create policy "firma_kapsam_insert_own_company" on public.firma_kapsam
  for insert with check (
    exists (select 1 from public.companies c where c.id = firma_kapsam.company_id and c.owner_id = auth.uid())
  );

drop policy if exists "firma_kapsam_update_own_company" on public.firma_kapsam;
create policy "firma_kapsam_update_own_company" on public.firma_kapsam
  for update using (
    exists (select 1 from public.companies c where c.id = firma_kapsam.company_id and c.owner_id = auth.uid())
  );

drop policy if exists "firma_kapsam_delete_own_company" on public.firma_kapsam;
create policy "firma_kapsam_delete_own_company" on public.firma_kapsam
  for delete using (
    exists (select 1 from public.companies c where c.id = firma_kapsam.company_id and c.owner_id = auth.uid())
  );
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
-- Ön koşul soruları: admin bir üst veya alt kategoriye "İşyerinde ... var mı?" sorusu yazar.
-- Firma bu soruya "Hayır" derse o alan otomatik kapsam dışı sayılır.

alter table public.categories
  add column if not exists on_kosul_sorusu text,
  add column if not exists on_kosul_aciklama text;

alter table public.subcategories
  add column if not exists on_kosul_sorusu text,
  add column if not exists on_kosul_aciklama text;

create table if not exists public.firma_on_kosul (
  company_id uuid not null references public.companies(id) on delete cascade,
  hedef_tur  text not null check (hedef_tur in ('kategori', 'alt')),
  hedef_id   uuid not null,
  cevap      text not null check (cevap in ('evet', 'hayir', 'bilmiyorum')),
  updated_at timestamptz not null default now(),
  primary key (company_id, hedef_tur, hedef_id)
);

alter table public.firma_on_kosul enable row level security;

drop policy if exists "firma_on_kosul_select_own_company" on public.firma_on_kosul;
create policy "firma_on_kosul_select_own_company" on public.firma_on_kosul
  for select using (
    public.is_admin() or
    exists (select 1 from public.companies c where c.id = firma_on_kosul.company_id and c.owner_id = auth.uid())
  );

drop policy if exists "firma_on_kosul_insert_own_company" on public.firma_on_kosul;
create policy "firma_on_kosul_insert_own_company" on public.firma_on_kosul
  for insert with check (
    exists (select 1 from public.companies c where c.id = firma_on_kosul.company_id and c.owner_id = auth.uid())
  );

drop policy if exists "firma_on_kosul_update_own_company" on public.firma_on_kosul;
create policy "firma_on_kosul_update_own_company" on public.firma_on_kosul
  for update using (
    exists (select 1 from public.companies c where c.id = firma_on_kosul.company_id and c.owner_id = auth.uid())
  );

drop policy if exists "firma_on_kosul_delete_own_company" on public.firma_on_kosul;
create policy "firma_on_kosul_delete_own_company" on public.firma_on_kosul
  for delete using (
    exists (select 1 from public.companies c where c.id = firma_on_kosul.company_id and c.owner_id = auth.uid())
  );
-- Test dönemi: tek kullanımlık davet kodu ile kayıt.
-- Kontrol kayıt tetikleyicisinde yapılır; Supabase kayıt servisine doğrudan gelen istekler de
-- geçerli kod olmadan hesap oluşturamaz. Ayar kapatılınca kayıt herkese açılır.

create table if not exists public.uygulama_ayarlari (
  id int primary key default 1 check (id = 1),
  davet_kodu_gerekli boolean not null default true
);
insert into public.uygulama_ayarlari (id) values (1) on conflict (id) do nothing;

alter table public.uygulama_ayarlari enable row level security;
drop policy if exists "uygulama_ayarlari_select_all" on public.uygulama_ayarlari;
create policy "uygulama_ayarlari_select_all" on public.uygulama_ayarlari
  for select using (true);
drop policy if exists "uygulama_ayarlari_update_admin" on public.uygulama_ayarlari;
create policy "uygulama_ayarlari_update_admin" on public.uygulama_ayarlari
  for update using (public.is_admin());

create table if not exists public.davet_kodlari (
  kod           text primary key,           -- büyük harf, tiresiz (ör. K7Q2M9XP)
  aciklama      text,                       -- kime verildiği
  email         text,                       -- doluysa yalnızca bu adresle kullanılabilir
  olusturan     uuid references auth.users(id) on delete set null,
  created_at    timestamptz not null default now(),
  kullanildi_at timestamptz,
  kullanan      uuid references auth.users(id) on delete set null
);

alter table public.davet_kodlari enable row level security;
drop policy if exists "davet_kodlari_admin" on public.davet_kodlari;
create policy "davet_kodlari_admin" on public.davet_kodlari
  for all using (public.is_admin()) with check (public.is_admin());

-- Kodu normalleştirir: boşluk ve tireleri atar, büyük harfe çevirir.
create or replace function public.davet_kodu_normal(p text)
returns text language sql immutable as $$
  select upper(regexp_replace(coalesce(p, ''), '[^A-Za-z0-9]', '', 'g'))
$$;

-- Kayıt formunun ön kontrolü (anlaşılır hata mesajı için). Kodu tüketmez.
create or replace function public.davet_kodu_kontrol(p_kod text, p_email text)
returns text
language plpgsql
security definer set search_path = public
stable
as $$
declare
  r public.davet_kodlari%rowtype;
begin
  if not (select davet_kodu_gerekli from public.uygulama_ayarlari where id = 1) then
    return 'gerekli_degil';
  end if;
  select * into r from public.davet_kodlari where kod = public.davet_kodu_normal(p_kod);
  if not found then return 'gecersiz'; end if;
  if r.kullanildi_at is not null then return 'kullanilmis'; end if;
  if r.email is not null and lower(trim(r.email)) <> lower(trim(coalesce(p_email, ''))) then
    return 'baska_eposta';
  end if;
  return 'gecerli';
end;
$$;
grant execute on function public.davet_kodu_kontrol(text, text) to anon, authenticated;

-- Yeni kullanıcı: davet kodu ayarı açıksa kodu doğrula ve tüket, sonra profili oluştur.
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
declare
  v_gerekli boolean;
  v_kod text;
  r public.davet_kodlari%rowtype;
begin
  select davet_kodu_gerekli into v_gerekli from public.uygulama_ayarlari where id = 1;
  if coalesce(v_gerekli, false) then
    v_kod := public.davet_kodu_normal(new.raw_user_meta_data ->> 'davet_kodu');
    select * into r from public.davet_kodlari where kod = v_kod for update;
    if not found then
      raise exception 'DAVET_KODU_GECERSIZ';
    end if;
    if r.kullanildi_at is not null then
      raise exception 'DAVET_KODU_KULLANILMIS';
    end if;
    if r.email is not null and lower(trim(r.email)) <> lower(trim(new.email)) then
      raise exception 'DAVET_KODU_BASKA_EPOSTA';
    end if;
    update public.davet_kodlari
      set kullanildi_at = now(), kullanan = new.id
      where kod = v_kod;
  end if;

  insert into public.profiles (id, full_name)
  values (new.id, new.raw_user_meta_data ->> 'full_name');
  return new;
end;
$$;
