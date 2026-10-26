# Kategori / Alt Kategori Yapısı (sadeleştirilmiş)

Bu doküman, orijinal Excel'deki (571 soru, 5 kategori, 74 alt kategori) yapının
22.10.2026'da üzerinde anlaştığımız sadeleştirilmiş hâlidir. Henüz veritabanına
işlenmedi — mevzuat içeriği güncellenip (`mevzuat_icerik.sql`) yeniden
yüklenirken bu yapı esas alınacak.

**Özet:** 6 kategori (yeni: İyonlaştırıcı Radyasyon ve Nükleer Güvenlik), 71 alt
kategori, toplam soru sayısı değişmedi: 571.

## Yapılan değişiklikler

1. **İyonlaştırıcı Radyasyon (94 soru) + Radon (1 soru), İş Hijyeni'nden çıkıp
   kendi kategorisi oldu**: "İyonlaştırıcı Radyasyon ve Nükleer Güvenlik" (95 soru),
   5 alt kategoriye bölündü. ⚠️ [Tahmin] Alt kategori sayıları, 94 sorunun içeriğine
   göre yaptığım kaba bir gruplamadır — her sorunun hangi alt kategoriye gideceği,
   mevzuat güncellemesi sırasında tek tek teyit edilmeli.
2. **Mükerrer alt kategori birleştirildi**: Teknik Güvenlik'teki "Makine ve İş
   Ekipmanlarının Güvenliği" (1 soru) → Elektrik, Makine, Ekipman'daki aynı isimli
   alt kategoriye taşındı.
3. **Belirsiz "Genel Yükümlülük" adları düzeltildi**:
   - Acil Durum'daki "Genel Yükümlülük" (1 soru, lüks çadır tesisi) →
     "Yangından Korunma"ya taşındı.
   - İş Hijyeni'ndeki "Genel Yükümlülük" (12 soru) → "Genel İlkeler ve Esaslar"
     olarak yeniden adlandırıldı.
4. **Tek-sorulu alt kategoriler birleştirildi** (anlamlı örtüşme olanlar):
   - Ergonomi + Yüklerin Elle Taşınması → "Ergonomi ve Elle Taşıma" (7)
   - Kimyasalların Ambalajlanması + Kimyasalların Etiketlenmesi →
     "Kimyasalların Ambalajlanması ve Etiketlenmesi" (5)
   - Raporlama + Kaza/Hastalık Araştırması, Kayıt ve Raporlama → aynı alt
     kategoriye birleşti (8)
   - İçme Suyu + Soyunma yerleri, duş, tuvalet ve lavabolar →
     "Sosyal Tesisler (Soyunma, Duş, Tuvalet, İçme Suyu)" (5)
5. **Bilinçli olarak OLDUĞU GİBİ bırakılanlar** (Teknik Güvenlik'te kalan tek
   sorulu alt kategoriler — aralarında doğal bir ilişki yok, zorla birleştirmek
   yanlış gruplama yaratırdı): Kapalı Alanlar, Kaynak/Sıcak Çalışma, Sürücü
   Güvenliği, Taşeronlar, Yükleme Yerleri ve Rampalar.

## Final yapı

### 1. Acil Durum, Yangın, Patlama — 53 soru, 6 alt kategori
- Büyük Endüstriyel Kazalar (24)
- Patlayıcı Ortamlar (8)
- Tahliye (8)
- Yangına Müdahale (4)
- Yangından Korunma (6)
- Yangınla Mücadele (3)

### 2. Elektrik, Makine, Ekipman — 44 soru, 6 alt kategori
- Basınçlı Kaplar / Sistemler (3)
- Elektrik Güvenliği (8)
- Kaldırma, Malzeme Yükleme-Boşaltma Ekipmanları (10)
- Kilitleme Etiketleme (3)
- Makine ve İş Ekipmanlarının Güvenliği (14)
- Yeraltı Depolama Tankları (6)

### 3. Genel Yükümlülükler — 201 soru, 24 alt kategori
- Aksiyon Planı / Risk Yönetimi (2)
- Çalışan Temsilcisi (5)
- Dinlenme Alanları (3)
- Eğitim (19)
- Engelli Çalışanlar (2)
- Gebe, yeni doğum yapmış ve emziren kadın çalışanlar (13)
- Gece Vardiyasında Çalışanlar (12)
- Geçici veya Belirli Süreli İşlerde Çalışanlar (6)
- Genç Çalışanlar (8)
- Genel İş Yeri Gereklilikleri (16)
- Genel Önleme Gereklilikleri (5)
- Genel Özen Görevi (2)
- İlk Yardım Eğitimi (3)
- İlk Yardım Hükümleri (9)
- İSG İşaretleri (3)
- İSG Profesyonelleri / Hizmetleri (20)
- İş Sağlığı ve Güvenliği Kurulu (5)
- Kaza/Hastalık Araştırması, Kayıt ve Raporlama (8)
- Koruma Altına Alınan Çalışanlar (13)
- Operasyon İzni / Lisans (9)
- Risk Değerlendirme (16)
- Sağlık Gözetimi (13)
- Uzaktan Çalışma (4)
- Sosyal Tesisler (Soyunma, Duş, Tuvalet, İçme Suyu) (5)

### 4. İş Hijyeni — 129 soru, 20 alt kategori
- Asbest (10)
- Aydınlatma (3)
- Biyolojik Etkenler (28)
- Ekranlı Araçlar (5)
- Gürültü (4)
- Güvenlik Bilgi Formu (6)
- Havalandırma (4)
- İyonlaştırıcı Olmayan Radyasyon (3)
- Kanserojen ve Mutajen Maddeler (12)
- Kazalardan Kaynaklı Sızıntılar (3)
- Kimyasal Etkenler (9)
- Kimyasalların Sınıflandırılması (4)
- Kurşun (2)
- Maruziyet Limitleri ve Korunma (3)
- Sıcaklık (3)
- Titreşim (3)
- Yeni ve Mevcut Kimyasalların Sınıflandırılması (3)
- Genel İlkeler ve Esaslar (12)
- Ergonomi ve Elle Taşıma (7)
- Kimyasalların Ambalajlanması ve Etiketlenmesi (5)

### 5. Teknik Güvenlik — 49 soru, 10 alt kategori
- Kapalı Alanlar (1)
- Kaynak, Kesme / Sıcak Çalışma (1)
- Kişisel Koruyucu Donanımlar (9)
- Maden (5)
- Sürücü Güvenliği (1)
- Taşeronlar (1)
- Tehlikeli Maddelerin Depolanması (2)
- Yapı İşleri (26)
- Yükleme Yerleri ve Rampalar (1)
- Yüksekte Çalışma (2)

### 6. İyonlaştırıcı Radyasyon ve Nükleer Güvenlik — 95 soru, 5 alt kategori (YENİ)
- Lisans, İzin ve Bildirim (~10)
- Nükleer Tesis ve Madde Güvenliği (~24)
- Radyasyondan Korunma (~31, Radon dahil)
- Sağlık Kurumları Özel Gereklilikleri (~20)
- Acil Durum ve Kaza Müdahalesi (~10)

## Sıradaki adım

Kullanıcı mevzuatın çoğunun değiştiğini belirtti — içeriği yeniden gözden
geçirecek. Bu yapı, o gözden geçirme bittikten sonra `mevzuat_icerik.sql`
yeniden üretilirken esas alınacak. Şimdilik sadece bu doküman referans olarak
tutuluyor, veritabanına henüz bir şey yazılmadı.
