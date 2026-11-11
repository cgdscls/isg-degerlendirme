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

## Diğer açık konular (11.11.2026 itibarıyla, kısa liste)

Bunlar park edilmedi; hatırlatma için:
- **Düzeltici faaliyet sistemi** — EMM Tablo 5.1/5.2, işveren faktörleri, kök neden, süre ve önceliklendirme. Soru gözden geçirmesi bitince başlanacak.
- **İş Ekipmanı Güvenliği'nin ekipman bazında ayrılması** — ortak sorular ön koşulsuz genel alt kategoride kalacak; ön koşul yalnızca birçok işyerinde olmayan ekipmanlara (forklift, vinç, kazan) yazılacak.
- **Sivil Savunma** — tek soru, ön koşul yok; yardımcı nota kapsam cümlesi eklenecek, yönetmeliğin kapsam maddesi (özel sektörü kapsıyor mu) kontrol edilecek.
- **Proses Güvenliği kapsam cümlesi** — sorulardaki "PSM kapsamında proses yoksa kapsam dışı" notu, ön koşul sorusuyla uyumlu olacak şekilde gözden geçirilecek.
- **Ön koşul açıklamalarında doğrulanacaklar** — asansör (yük kaldırma platformu sınırı), maden (taş/kum ocakları, ruhsat sahibi–yüklenici), BEK (BEKRA bildirim sistemi adı ve bakanlığı), balıkçı gemileri (tekne boyu sınırı), sağlık kurumu (poliklinik ve tıp merkezinin basamağı).
- **Supabase Pro ve yedekleme otomasyonu** — teklif edildi, karar bekliyor.
