-- Yapı İşlerinde İş Sağlığı ve Güvenliği Yönetmeliği'ne bağlı soruları
-- Teknik Güvenlik > Yapı İşleri alt kategorisine taşır.
-- Cevaplar (responses) soru kimliğine bağlı olduğu için korunur; updated_at
-- değişmez, kullanıcılarda "mevzuat güncellendi" uyarısı çıkmaz.

begin;

-- 1) Alt kategoriyi oluştur (yoksa), Teknik Güvenlik'in sonuna ekle
insert into public.subcategories (category_id, name, sort_order)
select c.id,
       'Yapı İşleri',
       coalesce((select max(s.sort_order) from public.subcategories s where s.category_id = c.id), -1) + 1
from public.categories c
where c.name = 'Teknik Güvenlik'
  and not exists (
    select 1 from public.subcategories s
    where s.category_id = c.id and s.name = 'Yapı İşleri'
  );

-- 2) Soruları taşı; madde numarasına göre sırala
with hedef as (
  select s.id
  from public.subcategories s
  join public.categories c on c.id = s.category_id
  where c.name = 'Teknik Güvenlik' and s.name = 'Yapı İşleri'
),
tasinacak as (
  select q.id,
         row_number() over (
           order by nullif(substring(m.madde_no from '[0-9]+'), '')::int nulls last,
                    m.madde_no,
                    q.sort_order
         ) - 1 as yeni_sira
  from public.questions q
  join public.maddeler m on m.id = q.madde_id
  join public.mevzuatlar mv on mv.id = m.mevzuat_id
  where mv.ad = 'Yapı İşlerinde İş Sağlığı ve Güvenliği Yönetmeliği'
)
update public.questions q
set subcategory_id = (select id from hedef),
    sort_order = t.yeni_sira
from tasinacak t
where q.id = t.id;

commit;
