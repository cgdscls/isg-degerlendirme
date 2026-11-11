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
