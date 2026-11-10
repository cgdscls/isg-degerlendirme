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
