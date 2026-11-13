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

### DNS kararı (13.11.2026)
- isg360.tr Natro'da kayıtlı; hosting yok, Natro DNS'inde kayıt düzenleme yalnızca ücretli "Profesyonel DNS" ile görünüyor.
- Karar: **nameserver'ı Vercel'e çevir** (Natro → Alan Adı → DNS Değiştir → 1. ve 2. DNS = Vercel'in verdiği adresler, 3–5 boş). Hosting ve Pro DNS gerekmez.
- Sıra: önce Vercel'e alan adını ekle, sonra Natro'da nameserver'ı değiştir (.tr/TRABIS kontrolü).
- isg360.tr → tanıtım sayfası projesi; karne.isg360.tr → isg-degerlendirme projesi. Alt alan adı kayıtlarını Vercel kendisi açar; MX/TXT gibi elle kayıtlar Vercel → Domains → DNS Records.

### Taşıma günü yapılacaklar
- [ ] Vercel'e isg360.tr ve karne.isg360.tr ekle; Natro'da nameserver'ı Vercel'e çevir (yukarıdaki DNS kararı).
- [ ] Supabase → Authentication → URL Configuration: Site URL ve Redirect URLs'i güncelle.
- [ ] E-posta şablonlarını kontrol et ({{ .SiteURL }} kullandıkları için kendiliğinden düzelir).
- [ ] isgmevzuat.tr → karne.isg360.tr kalıcı yönlendirme (yol korunarak).
- [ ] Kullanıcıları bilgilendir: oturumlar adrese bağlı, herkes bir kez yeniden giriş yapacak.
- [ ] Site, rehber, kullanım koşulları ve KVKK metnindeki "isgmevzuat.tr" geçen yerleri güncelle.
- [ ] Resend kuruluyorsa gönderen alan adını (bildirim@…) yeni yapıya göre seç.

---

## 3. Büyük Endüstriyel Kazalar (BEK) mevzuatı ve soruları

**Park tarihi:** 11.11.2026
**Durum:** Park edildi — mevzuatlar ve sorular sonra değerlendirilecek

### Kapsamdaki mevzuatlar (11.11.2026 itibarıyla bankada)

| Mevzuat | Madde | Soru |
|---|---|---|
| Büyük Endüstriyel Kazaların Önlenmesi ve Etkilerinin Azaltılması Hakkında Yönetmelik | 13 | 13 |
| Büyük Endüstriyel Kazalarda Uygulanacak Dâhili Acil Durum Planları Hakkında Tebliğ | 27 | 27 |
| Büyük Endüstriyel Kazalarla İlgili Hazırlanacak Büyük Kaza Önleme Politika Belgesi Tebliği | 3 | 3 |
| Büyük Endüstriyel Kazalarla İlgili Hazırlanacak Büyük Kaza Senaryo Dokümanı Tebliği | 4 | 4 |
| Büyük Endüstriyel Kazalarla İlgili Hazırlanacak Güvenlik Raporu Tebliği | 3 | 3 |
| **Toplam** | **50** | **50** |

### Senin notların
- BEK ile ilgili mevzuatlar sonra değerlendirilecek.

### Bugüne kadar konuşulanlar
- **Dâhili Acil Durum Planları Tebliği yalnızca üst seviyeli kuruluşlara uygulanır** (Tebliğ md. 2 — doğrulandı). Alt seviyeli kuruluşlar için 27 sorunun hepsi kapsam dışı.
- Kapsam cümlesini 27 soruya tek tek eklemek yerine öneri: yeni alt kategori **"Büyük Endüstriyel Kazalar — Üst Seviyeli Kuruluşlar"** (Acil Durum, Yangın, Patlama altında) ve oraya ön koşul:
  - Soru: "İşyeri, BEK Yönetmeliği kapsamında üst seviyeli kuruluş mu?"
  - Açıklama: "Üst seviyeli kuruluş, sahasındaki tehlikeli madde miktarı BEK Yönetmeliği Ek-1'deki üst seviye eşik değerlerine ulaşan kuruluştur; seviyeniz BEKRA Bildirim Sistemi'ndeki hesaplama sonucunda görünür. Alt seviyeli kuruluşsanız ya da BEK kapsamında değilseniz "Hayır" deyin. Hesaplama yapılmadıysa "Bilmiyorum" seçin."
- Mevcut "Büyük Endüstriyel Kazalar" alt kategorisinin ön koşulu ("alt veya üst seviyeli kuruluş mu?") ortak yükümlülükler için kalır.
- Tebliğ md. 5 için hazırlanan soru (son hal): "Üst seviyeli kuruluşlarda işletmeci, Yönetmelik, Tebliğ ve ilgili mevzuattaki usul ve esasları dikkate alarak dâhili acil durum planını hazırlamakta veya hazırlatmakta, nihai planı bir ay içinde Bakanlığın bildirim sistemine yüklemekte ve kuruluşta bulundurmaktadır; yeni açılacak kuruluşlarda plan faaliyete geçmeden önce hazırlanıp sisteme yüklenmektedir." — Risk temelli; Tanımlı; tehlike Ciddi, Sonucu azaltır, azaltılmış Önemli. Yükümlü terim "işveren" değil "işletmeci".
- Soruları topluca taşıma SQL'i (önce önizleme, sonra taşıma; mevzuat adı "dâhili acil durum" ile eşleşir; alt kategori adı birebir yazılmalı) sohbette verildi; gerektiğinde yeniden üretilebilir.

### Yapılacaklar (yeniden ele alınınca)
- [ ] Her tebliğin kapsam maddesini kontrol et: alt seviye mi, üst seviye mi, ikisi mi? [Tahmin: Güvenlik Raporu ve Dâhili Acil Durum Planı yalnızca üst seviye; Büyük Kaza Önleme Politika Belgesi her iki seviye; Senaryo Dokümanı doğrulanmalı]
- [ ] Yalnızca üst seviyeye ait soruları yeni alt kategoriye taşı; ön koşulu yaz.
- [ ] Dâhili Acil Durum Tebliği md. 5'teki "bir ay"ın neyden itibaren sayıldığını (geçici madde) doğrula, yardımcı nota ekle.
- [ ] 50 sorunun tip, bağlayıcılık (tebliğ = Tanımlı), referans risk ve yardımcı notlarını gözden geçir; "işveren" geçen yerleri "işletmeci" ile değiştir.
- [ ] BEKRA Bildirim Sistemi'nin adı ve yürüten bakanlık (ön koşul açıklamasında geçiyor) doğrulanacak.
- [ ] Acil Durum altında yinelenen "Büyük Endüstriyel Kazalar" alt kategorisi kalmadığını kontrol et (birleştirme SQL'inin sonucu bildirilmemişti).
- [ ] Proses Güvenliği ön koşul açıklamasına "BEK kapsamındaysanız büyük olasılıkla bu soruya da Evet demelisiniz" cümlesi eklenecek mi, karar ver.

---

## Diğer açık konular (11.11.2026 itibarıyla, kısa liste)

Bunlar park edilmedi; hatırlatma için:
- **Düzeltici faaliyet sistemi** — EMM Tablo 5.1/5.2, işveren faktörleri, kök neden, süre ve önceliklendirme. Soru gözden geçirmesi bitince başlanacak.
- **İş Ekipmanı Güvenliği'nin ekipman bazında ayrılması** — ortak sorular ön koşulsuz genel alt kategoride kalacak; ön koşul yalnızca birçok işyerinde olmayan ekipmanlara (forklift, vinç, kazan) yazılacak.
- **Sivil Savunma** — tek soru, ön koşul yok; yardımcı nota kapsam cümlesi eklenecek, yönetmeliğin kapsam maddesi (özel sektörü kapsıyor mu) kontrol edilecek.
- **Proses Güvenliği kapsam cümlesi** — sorulardaki "PSM kapsamında proses yoksa kapsam dışı" notu, ön koşul sorusuyla uyumlu olacak şekilde gözden geçirilecek.
- **Ön koşul açıklamalarında doğrulanacaklar** — asansör (yük kaldırma platformu sınırı), maden (taş/kum ocakları, ruhsat sahibi–yüklenici), balıkçı gemileri (tekne boyu sınırı), sağlık kurumu (poliklinik ve tıp merkezinin basamağı).
- **Supabase Pro ve yedekleme otomasyonu** — teklif edildi, karar bekliyor.
