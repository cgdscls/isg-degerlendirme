# İSG Değerlendirme

Bireysel kullanıcıların İSG mevzuatı sorularını cevaplayarak kendi uyum durumlarını
değerlendirdiği, admin panelinden kategori/soru yönetimi yapılan web uygulaması.

## Kurulum (kod bilgisi gerektirmez, tek seferlik)

### 1. Supabase projesi oluştur (ücretsiz)

1. [supabase.com](https://supabase.com) adresine git, ücretsiz hesap aç.
2. "New Project" ile yeni proje oluştur, bir veritabanı şifresi belirle (not al).
3. Proje açılınca sol menüden **SQL Editor**'e gir.
4. Bu depodaki `supabase/schema.sql` dosyasının tüm içeriğini kopyala, SQL Editor'e
   yapıştır ve **Run** butonuna bas. Bu, tüm tabloları ve güvenlik kurallarını kurar.

### 2. Bağlantı bilgilerini al

1. Supabase projesinde **Project Settings → API** sayfasına git.
2. `Project URL` ve `anon public` anahtarını kopyala — bunları birazdan Vercel'e
   gireceksin.

### 3. Kendini yönetici (admin) yap

1. Uygulamayı deploy ettikten sonra (aşağıdaki adım) siteye gidip normal şekilde
   **Kayıt Ol** ile kendi hesabını oluştur.
2. Supabase'de **Authentication → Users** sayfasından kendi kullanıcının UUID'sini
   kopyala.
3. SQL Editor'e dön, şunu çalıştır (UUID'yi kendi değerinle değiştir):
   ```sql
   update public.profiles set role = 'admin' where id = 'BURAYA-UUID-YAPISTIR';
   ```
4. Siteye tekrar girdiğinde üst menüde "Yönetim" sekmesi görünecek.

### 4. Vercel'e deploy et

1. [vercel.com](https://vercel.com) adresine git, GitHub hesabınla giriş yap.
2. "Add New → Project" ile bu GitHub reposunu seç.
3. "Environment Variables" bölümüne şunları ekle:
   - `NEXT_PUBLIC_SUPABASE_URL` → Supabase'den kopyaladığın Project URL
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` → Supabase'den kopyaladığın anon key
4. **Deploy** butonuna bas. Birkaç dakika içinde site yayında olur
   (`xxx.vercel.app` adresinde).

### 5. isgmevzuat.tr ile ilişkilendirme (opsiyonel)

1. Vercel projende **Settings → Domains** kısmına git.
2. Örneğin `degerlendirme.isgmevzuat.tr` yaz.
3. Vercel sana bir CNAME kaydı verir; bu kaydı alan adını aldığın yerden (DNS
   ayarları) ekle.
4. WordPress sitende menüye bu alt alan adına giden bir bağlantı ekle.

## Geliştirme notları

- Kod tabanı: Next.js (App Router) + TypeScript + Tailwind + Supabase.
- Veri modeli: `categories` (kategoriler), `questions` (sorular),
  `responses` (kullanıcıların kendi cevapları), `profiles` (rol bilgisi).
- Her kullanıcı sadece kendi cevaplarını görür/değiştirir (Postgres Row Level
  Security ile zorlanır, uygulama koduna güvenmez).
- v1 kapsamı dışında bırakılanlar (istenirse sonradan eklenir): risk/sistem/maliyet
  ağırlıklı puanlama, kanıt dosyası yükleme, PDF rapor çıktısı, firma/şirket bazlı
  çoklu kiracı yapısı, ödeme/abonelik.
