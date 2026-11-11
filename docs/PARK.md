# Park edilen konular

Sonra yeniden ele alınacak konular. Her konu: tarih, durum, senin notların, Claude'un önerileri, yapılacaklar.

---

## 1. Nükleer ve Radyasyon Tesisleri alt kategorisi

**Park tarihi:** 11.11.2026
**Durum:** Park edildi — kategori ve sorular yeniden gözden geçirilecek
**Yer:** Teknik Güvenlik → Nükleer ve Radyasyon Tesisleri (76 soru)

### Senin notların
- Bu alt kategoriye ön koşul (faaliyet) sorusu yazılmayacak; bırakılıyor.
- Gerekçe: Tesis olmasa da lazer vb. kullanan işletme kapsama girebilir.
- Alt kategori olduğu için kullanıcı gerekirse kartındaki anahtarla kendisi kapsam dışı bırakabilir.
- "Tesisleri" ibaresini çıkarıp adı "Nükleer ve Radyasyon" yapmayı düşünüyorsun.

### Claude'un değerlendirmesi ve önerileri
1. **Ön koşul koymama kararı doğru, ama lazer gerekçesi büyük olasılıkla değil.** [Muhtemel]
   - Lazer **optik radyasyondur**; ayrı bir İSG yönetmeliğine tabidir: *Yapay Optik Radyasyona Maruziyete İlişkin Sağlık ve Güvenlik Önlemleri Hakkında Yönetmelik*.
   - 76 sorunun büyük olasılıkla **iyonlaştırıcı radyasyon** ve nükleer mevzuattan (nükleer düzenleme / radyasyon güvenliği yönetmelikleri) geldiği düşünülüyor; kontrol edilmedi.
   - Kararın doğru olmasının asıl nedeni: nükleer tesisi olmayan pek çok fabrika iyonlaştırıcı radyasyon kaynağı kullanır (kalınlık ve seviye ölçerler, endüstriyel radyografi/kaynak kontrolü, gıda ve bagaj röntgen cihazları).

2. **"Nükleer ve Radyasyon" adı yeterli değil.** "Radyasyon" hangi radyasyonun sorulduğunu söylemiyor:
   - Lazer kullanan kullanıcı girip iyonlaştırıcı radyasyon sorularıyla karşılaşır.
   - Röntgen cihazı olan kullanıcı "nükleer" kelimesini görüp kendini kapsam dışı sayabilir.

3. **Ad önerisi — alt kategorinin içeriğine göre:**

   | Sorular nereden geliyorsa | Önerilen ad |
   |---|---|
   | Yalnızca iyonlaştırıcı radyasyon ve nükleer mevzuat | **İyonlaştırıcı Radyasyon (Röntgen, Radyoaktif Kaynak, Nükleer)** |
   | İyonlaştırıcı + optik radyasyon (lazer, UV) + elektromanyetik alan mevzuatı | **Radyasyon (İyonlaştırıcı, Optik, Elektromanyetik)** |

   - Parantezdeki örnekler kullanıcının kendini tanımasına yardım eder.
   - Alt kategoriler alfabetik sıralandığı için "İyonlaştırıcı…" İ harfine, "Radyasyon…" R harfine düşer.

4. **Uzun vadeli öneri — ayırma:** Optik radyasyon veya elektromanyetik alan yönetmeliğinden sorular varsa iyonlaştırıcıdan ayrı alt kategoriye alınmalı. Lazer ve kaynak UV'si çok yaygın, iyonlaştırıcı radyasyon nadir; ayrı olurlarsa kullanıcı birini kapatıp diğerini açık tutabilir. Ayrıldıktan sonra **iyonlaştırıcı radyasyon** alt kategorisine ön koşul yazmak anlamlı hale gelebilir (ör. "İşyerinde röntgen cihazı, radyoaktif kaynak içeren ölçüm cihazı veya başka bir iyonlaştırıcı radyasyon kaynağı var mı?").

### Yapılacaklar (yeniden ele alınınca)
- [ ] Admin'de alt kategoriyi aç; 76 sorunun dayanak satırlarındaki mevzuat adlarını listele.
- [ ] İçeriğe göre adı seç (yukarıdaki tablo).
- [ ] Optik radyasyon / elektromanyetik alan soruları varsa ayrı alt kategoriye taşı.
- [ ] Soruları gözden geçir: tip (risk/idari), referans risk, bağlayıcılık, yardımcı not.
- [ ] Ayırma yapıldıysa iyonlaştırıcı radyasyon için ön koşul sorusunu değerlendir.

---

## 2. Alan adı taşıma: karne.isg360.tr (şirket kurulunca)

**Park tarihi:** 11.11.2026
**Durum:** Şirket kuruluşunu bekliyor

### Senin notların
- Mevzuat dışı (iyi uygulama) sorular geldikçe adreste "mevzuat" kelimesinin olması ürünü daraltıyor.
- Ürün İSG360 şemsiyesi altında bir alt alan adına taşınabilir. Sahip olunan alan adı **isg360.tr**; isg360.com başkasına ait.

### Claude'un önerileri
- Adres: **karne.isg360.tr** (ürünü anlatır; ileride ikinci bir ürün olursa ör. egitim.isg360.tr ile tutarlı). "app." yalnızca tek platform ve iç modüller planlanıyorsa.
- Zaman: şirket kurulduğunda, Resend (e-posta), ücretli plan ve kurumsal siteyle aynı anda. Marka şirket kimliğine oturur, aynı ayarlar iki kez değişmez.
- isgmevzuat.tr kapatılmaz; aynı yolu koruyarak kalıcı (308) yönlendirme ile yeni adrese bağlanır. Bugün gönderilen davet ve linkler çalışmaya devam eder.
- isg360.com'un kimde olduğu ve nasıl kullanıldığı kontrol edilmeli; markayla karıştırılabilir. Tescilli sınıflarda (41/42/44/45) kullanılıyorsa marka hakkı açısından değerlendirilmeli (avukat).

### Taşıma günü yapılacaklar
- [ ] Vercel'e karne.isg360.tr ekle; alan adı panelinde CNAME kaydını gir.
- [ ] Supabase → Authentication → URL Configuration: Site URL ve Redirect URLs'i güncelle.
- [ ] E-posta şablonlarını kontrol et ({{ .SiteURL }} kullandıkları için kendiliğinden düzelir).
- [ ] isgmevzuat.tr → karne.isg360.tr kalıcı yönlendirme (yol korunarak).
- [ ] Kullanıcıları bilgilendir: oturumlar adrese bağlı, herkes bir kez yeniden giriş yapacak.
- [ ] Site, rehber, kullanım koşulları ve KVKK metnindeki "isgmevzuat.tr" geçen yerleri güncelle.
- [ ] Resend kuruluyorsa gönderen alan adını (bildirim@…) yeni yapıya göre seç.

---

## Diğer açık konular (11.11.2026 itibarıyla, kısa liste)

Bunlar park edilmedi; hatırlatma için:
- **Düzeltici faaliyet sistemi** — EMM Tablo 5.1/5.2, işveren faktörleri, kök neden, süre ve önceliklendirme. Soru gözden geçirmesi bitince başlanacak.
- **İş Ekipmanı Güvenliği'nin ekipman bazında ayrılması** — ortak sorular ön koşulsuz genel alt kategoride kalacak; ön koşul yalnızca birçok işyerinde olmayan ekipmanlara (forklift, vinç, kazan) yazılacak.
- **Sivil Savunma** — tek soru, ön koşul yok; yardımcı nota kapsam cümlesi eklenecek, yönetmeliğin kapsam maddesi (özel sektörü kapsıyor mu) kontrol edilecek.
- **Proses Güvenliği kapsam cümlesi** — sorulardaki "PSM kapsamında proses yoksa kapsam dışı" notu, ön koşul sorusuyla uyumlu olacak şekilde gözden geçirilecek.
- **Ön koşul açıklamalarında doğrulanacaklar** — asansör (yük kaldırma platformu sınırı), maden (taş/kum ocakları, ruhsat sahibi–yüklenici), BEK (BEKRA bildirim sistemi adı ve bakanlığı), balıkçı gemileri (tekne boyu sınırı), sağlık kurumu (poliklinik ve tıp merkezinin basamağı).
- **Supabase Pro ve yedekleme otomasyonu** — teklif edildi, karar bekliyor.
