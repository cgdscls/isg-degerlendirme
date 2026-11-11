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
