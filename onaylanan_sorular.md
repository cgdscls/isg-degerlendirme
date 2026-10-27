# Onaylanmış Yeni Sorular (mevzuat gözden geçirme süreci)

Bu dosya, 22.10.2026'dan itibaren mevzuat mevzuat gözden geçirip onayladığımız
yeni soruları takip eder. `KATEGORI_YAPISI.md`'deki yapıya göre yerleştirilmiştir.
Henüz veritabanına işlenmedi — biriktirip toplu olarak SQL'e ekleyeceğiz.

**Not:** Eski 571 soruluk Excel havuzu artık referans alınmıyor — bu, mevzuat
mevzuat gözden geçirilerek baştan oluşturulan YENİ bir soru havuzu. Eskiyle
mükerrerlik kontrolü yapılmıyor.

**Kural (25.10.2026):** Her soru **tek bir maddeye** bağlanır (asıl kanun/
yönetmelik maddesine, gerekirse fıkra/bent ile: "Madde 14/1-b" gibi — bu
tektir, aynı maddenin bir alt birimidir). Bir gereklilik birden fazla
maddeye yayılıyorsa, soru o maddelere bölünür. Sebep: veritabanında her
soru bir `madde_id`'ye bağlı; bir madde güncellenince ona bağlı sorular
kullanıcıya "gözden geçir" uyarısı veriyor. Soru birden fazla maddeye
atıfta bulunursa, diğer maddeler güncellendiğinde bu uyarı tetiklenmez —
bu yüzden 25.10.2026'da geriye dönük olarak tüm çok-maddeli sorular
tek maddeye bölündü (bkz. aşağıdaki soru numaralarındaki artış).

## Genel Yükümlülükler → Çırak ve Stajyer Çalışanlar (YENİ alt kategori)

1. **Soru:** İşyerinde aday çırak veya çırak çalıştırılıyorsa, eğitimlerinden
   sorumlu bir usta öğretici bulunmaktadır.
   **Mevzuat:** Mesleki Eğitim Kanunu (RG: 19139/19.06.1986), Madde 15

2. **Soru:** Aday çırak, çırak ve öğrencilerin işyerinde eğitimi sırasında iş
   kazası veya meslek hastalığı riskine karşı gerekli önlemler alınmaktadır.
   **Mevzuat:** Mesleki Eğitim Kanunu (RG: 19139/19.06.1986), Madde 25

## Genel Yükümlülükler → Operasyon İzni / Lisans

3. **Soru:** İşyeri, faaliyete başlamadan önce yetkili merciden İşyeri Açma
   ve Çalışma Ruhsatı almıştır.
   **Mevzuat:** İşyeri Açma ve Çalışma Ruhsatlarına Dair Kanun (RG: 20198/17.06.1989),
   Madde 5

## Genel Yükümlülükler → Genel İş Yeri Gereklilikleri

4. **Soru:** İşyerinin kapalı alanlarında tütün ürünü tüketimine izin
   verilmemektedir.
   **Mevzuat:** Tütün Ürünlerinin Zararlarının Önlenmesi ve Kontrolü Hakkında
   Kanun (RG: 22829/26.11.1996), Madde 2/1-b

## Genel Yükümlülükler → İSG İşaretleri

5. **Soru:** İşyerinde tütün ürünlerinin yasak olduğuna dair yasal uyarılar,
   görülebilir yerlere asılmıştır.
   **Mevzuat:** Tütün Ürünlerinin Zararlarının Önlenmesi ve Kontrolü Hakkında
   Kanun (RG: 22829/26.11.1996), Madde 4/1

## Genel Yükümlülükler → Engelli Çalışanlar

6. **Soru:** İşyeri 50 veya daha fazla işçi çalıştırıyorsa, yasal kotaya uygun
   oranda engelli (özel sektörde %3, kamuda %4) ve eski hükümlü (kamuda %2)
   işçi çalıştırılmaktadır.
   **Mevzuat:** İş Kanunu (RG: 25134/10.06.2003), Madde 30

## Genel Yükümlülükler → Genel İş Yeri Gereklilikleri

7. **Soru:** Haftalık çalışma süresi 45 saati aşmamaktadır (yer altı maden
   işlerinde günde 7,5 / haftada 37,5 saati aşmamaktadır).
   **Mevzuat:** İş Kanunu (RG: 25134/10.06.2003), Madde 63

8. **Soru:** İşçilere, günlük çalışma süresinin ortalama bir zamanında, işin
   gereğine uygun ara dinlenmesi verilmektedir.
   **Mevzuat:** İş Kanunu (RG: 25134/10.06.2003), Madde 68

## Genel Yükümlülükler → Gece Vardiyasında Çalışanlar

9. **Soru:** Gece çalışması, 20:00-06:00 arasını kapsayan ve en fazla 11 saat
   süren dönem içinde planlanmaktadır.
   **Mevzuat:** İş Kanunu (RG: 25134/10.06.2003), Madde 69

## Genel Yükümlülükler → Genç Çalışanlar

10. **Soru:** 15 yaşını doldurmamış çocuklar çalıştırılmamaktadır; 14-15 yaş
    arası çocuklar yalnızca gelişimlerine ve eğitimlerine engel olmayacak hafif
    işlerde çalıştırılmaktadır.
    **Mevzuat:** İş Kanunu (RG: 25134/10.06.2003), Madde 71

11. **Soru:** Yer altında veya su altında yapılan işlerde (maden ocağı,
    kanalizasyon, tünel vb.) 18 yaşını doldurmamış erkek işçiler ve her
    yaştan kadın işçiler çalıştırılmamaktadır.
    **Mevzuat:** İş Kanunu (RG: 25134/10.06.2003), Madde 72

12. **Soru:** Sanayi işlerinde 18 yaşını doldurmamış çocuk ve genç işçiler
    gece çalıştırılmamaktadır.
    **Mevzuat:** İş Kanunu (RG: 25134/10.06.2003), Madde 73

## Genel Yükümlülükler → Gebe, yeni doğum yapmış ve emziren kadın çalışanlar

13. **Soru:** Kadın işçiler, doğumdan önce 8 ve doğumdan sonra 16 hafta olmak
    üzere toplam 24 haftalık analık izni kullanmaktadır (çoğul gebelikte
    doğum öncesi süreye 2 hafta eklenir).
    **Mevzuat:** İş Kanunu (RG: 25134/10.06.2003), Madde 74

## Genel Yükümlülükler → Kaza/Hastalık Araştırması, Kayıt ve Raporlama

14. **Soru:** İş kazası meydana geldiğinde işveren, durumu derhal yetkili
    kolluk kuvvetlerine ve en geç kazadan sonraki 3 iş günü içinde SGK'ya
    (iş kazası ve meslek hastalığı bildirgesi ile) bildirmektedir.
    **Mevzuat:** Sosyal Sigortalar ve Genel Sağlık Sigortası Kanunu
    (RG: 26200/16.06.2006), Madde 13

15. **Soru:** Bir çalışanın meslek hastalığına yakalandığı öğrenildiğinde
    işveren, bu durumu öğrendiği tarihten itibaren 3 iş günü içinde SGK'ya
    bildirmektedir.
    **Mevzuat:** Sosyal Sigortalar ve Genel Sağlık Sigortası Kanunu
    (RG: 26200/16.06.2006), Madde 14

## İş Hijyeni → Psikososyal Riskler (YENİ alt kategori)

16. **Soru:** İşveren, çalışanların işyerinde psikolojik veya cinsel tacize
    (mobbing) uğramamaları için gerekli önlemleri almaktadır; taciz mağduru
    olanların daha fazla zarar görmemesi için tedbir alınmaktadır.
    **Mevzuat:** Türk Borçlar Kanunu (RG: 27836/04.02.2011), Madde 417/1

## Genel Yükümlülükler → Risk Değerlendirme

17. **Soru:** İşyerinde risk değerlendirmesi yazılı olarak yapılmış veya
    yaptırılmıştır; değerlendirmede riskten etkilenecek çalışanların durumu,
    kullanılan iş ekipmanı/kimyasalların seçimi, işyeri düzeni ve genç/yaşlı/
    engelli/gebe/emziren çalışanlar gibi özel politika gerektiren gruplar
    dikkate alınmıştır.
    **Mevzuat:** İş Sağlığı ve Güvenliği Kanunu (RG: 28339/30.06.2012), Madde 10

## Genel Yükümlülükler → İSG Profesyonelleri / Hizmetleri

18. **Soru:** İşveren, çalışan sayısı ve tehlike sınıfına göre gereken sayıda
    iş güvenliği uzmanı, işyeri hekimi ve (10+ çalışanlı çok tehlikeli sınıf
    işyerlerinde) diğer sağlık personelini görevlendirmiştir veya bu hizmeti
    ortak sağlık ve güvenlik biriminden (OSGB) almaktadır.
    **Mevzuat:** İş Sağlığı ve Güvenliği Kanunu, Madde 6

19. **Soru:** İşyeri hekimi/iş güvenliği uzmanı tarafından yazılı olarak
    bildirilen eksiklik ve aksaklıklar (tedbir ve tavsiyeler) işveren
    tarafından giderilmektedir.
    **Mevzuat:** İş Sağlığı ve Güvenliği Kanunu, Madde 8/2

## Acil Durum, Yangın, Patlama → Tahliye

20. **Soru:** İşveren; işyerinde olabilecek acil durumları önceden belirlemiş,
    bunların olumsuz etkilerini önleyici/sınırlandırıcı tedbirleri almış ve
    acil durum planı hazırlamıştır; yeterli sayıda ve eğitimli kişiyi önleme/
    tahliye/yangınla mücadele/ilk yardım konularında görevlendirmiş, tatbikat
    yaptırmaktadır.
    **Mevzuat:** İş Sağlığı ve Güvenliği Kanunu, Madde 11

21. **Soru:** Ciddi ve yakın tehlike durumunda çalışanların derhal güvenli
    yere gidebilmesi için önceden düzenleme yapılmış ve talimat verilmiştir;
    bu durum sürerse zorunlu olmadıkça özel görevliler dışındaki
    çalışanlardan işe devam etmeleri istenmemektedir.
    **Mevzuat:** İş Sağlığı ve Güvenliği Kanunu, Madde 12

## Genel Yükümlülükler → Kaza/Hastalık Araştırması, Kayıt ve Raporlama

22. **Soru:** İşyerinde meydana gelen iş kazalarının ve meslek hastalıklarının
    yanı sıra, yaralanma/ölüme yol açmayan ama ekipman/çalışan açısından zarar
    potansiyeli taşıyan olaylar ("ramak kala" olaylar) da kayıt altına
    alınmakta ve incelenmektedir.
    **Mevzuat:** İş Sağlığı ve Güvenliği Kanunu, Madde 14/1-b
    **Not:** SGK Kanunu Md.13/14 (soru 14-15) dış bildirim süresini, bu madde
    iç kayıt/ramak-kala inceleme yükümlülüğünü düzenliyor — mükerrer değil,
    tamamlayıcı.

## Genel Yükümlülükler → Sağlık Gözetimi

23. **Soru:** Tehlikeli ve çok tehlikeli sınıfta yer alan işlerde çalışacaklar,
    işe uygunluk sağlık raporu olmadan işe başlatılmamaktadır; sağlık
    muayeneleri işe girişte, iş değişikliğinde ve düzenli aralıklarla
    yapılmaktadır.
    **Mevzuat:** İş Sağlığı ve Güvenliği Kanunu, Madde 15

## Genel Yükümlülükler → Eğitim

24. **Soru:** Çalışanlara, işe başlamadan önce, iş/çalışma yeri değişikliğinde,
    iş ekipmanı değişiminde veya yeni teknoloji uygulandığında iş sağlığı ve
    güvenliği eğitimi verilmekte; eğitim maliyeti çalışana yansıtılmamaktadır.
    **Mevzuat:** İş Sağlığı ve Güvenliği Kanunu, Madde 17

25. **Soru:** İş kazası geçiren veya meslek hastalığına yakalanan çalışana işe
    dönmeden önce, kazanın/hastalığın sebepleri ve güvenli çalışma yöntemleri
    hakkında ilave eğitim verilmektedir.
    **Mevzuat:** İş Sağlığı ve Güvenliği Kanunu, Madde 17/4

## Genel Yükümlülükler → Çalışan Temsilcisi

26. **Soru:** İşyerinde çalışan sayısına göre gerekli sayıda çalışan temsilcisi
    görevlendirilmiştir (2-50 çalışan: 1, 51-100: 2, 101-500: 3, vb.).
    **Mevzuat:** İş Sağlığı ve Güvenliği Kanunu, Madde 20

## Genel Yükümlülükler → İş Sağlığı ve Güvenliği Kurulu

27. **Soru:** 50 ve daha fazla çalışanı olan ve 6 aydan fazla süren işlerin
    yapıldığı işyerinde İş Sağlığı ve Güvenliği Kurulu oluşturulmuştur ve
    kurul kararları uygulanmaktadır.
    **Mevzuat:** İş Sağlığı ve Güvenliği Kanunu, Madde 22

## Acil Durum, Yangın, Patlama → Büyük Endüstriyel Kazalar

28. **Soru:** Büyük endüstriyel kaza oluşabilecek işyerlerinde, işletmeye
    başlamadan önce işyeri büyüklüğüne göre büyük kaza önleme politika
    belgesi veya güvenlik raporu hazırlanmış; güvenlik raporu gereken
    işyerlerinde rapor Bakanlıkça değerlendirilmeden faaliyete başlanmamıştır.
    **Mevzuat:** İş Sağlığı ve Güvenliği Kanunu, Madde 29

## Genel Yükümlülükler → Genel Özen Görevi

29. **Soru:** Ciddi ve yakın bir tehlikeyle karşı karşıya kalan çalışanlar,
    kurula (varsa) veya işverene başvurarak durumun tespitini ve gerekli
    tedbirlerin alınmasını talep edebilmekte; gerekli tedbirler alınıncaya
    kadar çalışmaktan kaçınan çalışanın ücreti ve diğer hakları korunmaktadır.
    **Mevzuat:** İş Sağlığı ve Güvenliği Kanunu, Madde 13

## Genel Yükümlülükler → Bilgilendirme ve Katılım (YENİ alt kategori)

30. **Soru:** İşveren, çalışanları ve çalışan temsilcilerini işyerinde
    karşılaşılabilecek sağlık/güvenlik riskleri, alınan koruyucu/önleyici
    tedbirler ve kendileriyle ilgili yasal hak ve sorumluluklar konusunda
    bilgilendirmektedir.
    **Mevzuat:** İş Sağlığı ve Güvenliği Kanunu, Madde 16

31. **Soru:** İşveren; iş sağlığı ve güvenliğiyle ilgili konularda, yeni
    teknoloji/ekipman seçimi ve risk değerlendirmesi sonucu alınacak tedbirler
    hakkında çalışanların veya çalışan temsilcilerinin görüşünü önceden
    almaktadır.
    **Mevzuat:** İş Sağlığı ve Güvenliği Kanunu, Madde 18

## Teknik Güvenlik → Alt İşveren/Yüklenici (eski adı: Taşeronlar, yeniden adlandırıldı)

32. **Soru:** Aynı çalışma alanını (iş merkezi, sanayi sitesi, OSB vb.)
    paylaşan birden fazla işveren/alt işveren, iş sağlığı ve güvenliği
    tedbirlerinin uygulanmasında birbirleriyle koordinasyon içinde çalışmakta
    ve birbirlerini karşılıklı riskler konusunda bilgilendirmektedir.
    **Mevzuat:** İş Sağlığı ve Güvenliği Kanunu, Madde 23

## Genel Yükümlülükler → Genel İş Yeri Gereklilikleri

33. **Soru:** İşyerine alkollü veya uyuşturucu madde almış olarak gelmek ve
    işyerinde bu maddeleri kullanmak yasaklanmıştır (kanunen istisna tutulan
    işler hariç).
    **Mevzuat:** İş Sağlığı ve Güvenliği Kanunu, Madde 28

## Genel Yükümlülükler → Çalışan Verilerinin Korunması (YENİ alt kategori)

34. **Soru:** İşyeri hekimi/sağlık personeli tarafından tutulan çalışan sağlık
    verileri (muayene sonuçları, sağlık raporları, meslek hastalığı kayıtları)
    özel nitelikli kişisel veri olarak kabul edilmekte; yalnızca sır saklama
    yükümlülüğü bulunan yetkili kişilerce işlenmekte ve üçüncü kişilerle
    paylaşılmamaktadır.
    **Mevzuat:** Kişisel Verilerin Korunması Kanunu (RG: 29677/07.04.2016),
    Madde 6
    **Not:** İş Sağlığı ve Güvenliği Kanunu Madde 15/5 ("sağlık bilgileri
    gizli tutulur") aynı konuyu ayrıca düzenliyor — bilgi amaçlı, bu soru
    yalnızca KVKK Madde 6'ya bağlıdır.

35. **Soru:** Çalışanların İSG kayıtları (sağlık dosyaları, kaza/meslek
    hastalığı kayıtları, risk değerlendirmesi anketleri vb.) yetkisiz
    erişime karşı uygun teknik ve idari güvenlik tedbirleriyle (erişim
    kısıtlaması, kilitli dolap/şifreli dijital ortam vb.) korunmaktadır.
    **Mevzuat:** Kişisel Verilerin Korunması Kanunu, Madde 12

## Teknik Güvenlik → Sürücü Güvenliği

36. **Soru:** Ticari amaçla yük taşımacılığı yapan (3,5 tonu geçen) veya
    yolcu taşımacılığı yapan (şoför hariç 9+ kişi kapasiteli) araçların
    şoförleri, günlük/haftalık araç kullanma ve dinlenme süresi sınırlarına
    uymaktadır (4,5 saatlik sürede en az 45 dakika mola, 24 saatte 11 saat
    kesintisiz dinlenme, 6 günde 1 gün hafta tatili vb.).
    **Mevzuat:** Karayolları Trafik Yönetmeliği, Madde 98/A

37. **Soru:** Ticari amaçla yük taşımacılığı yapan (3,5 tonu geçen) veya
    yolcu taşımacılığı yapan (şoför hariç 9+ kişi kapasiteli) araçlarda
    takoğraf cihazı bulundurulmakta ve işler durumda tutulmaktadır; takoğraf
    kayıtları kayıt tarihinden itibaren 1 ay araçlarda, 5 yıl işyerinde
    muhafaza edilmektedir.
    **Mevzuat:** Karayolları Trafik Yönetmeliği, Madde 98/B

38. **Soru:** İşveren, şoförlerin araç kullanma/dinlenme sürelerini ve kural
    dışı hareketlerini izlemekte; kuralları ihlal etmeyi itiyat haline
    getiren şoförleri eğitmekte ve önleyici tedbirler almaktadır.
    **Mevzuat:** Karayolları Trafik Yönetmeliği, Madde 98/B

39. **Soru:** Tehlikeli madde taşıyan araçlarda; sürücünün kolayca
    kullanabileceği yerde 2 yangın söndürme cihazı, kaza halinde
    müdahale/ilk yardım için gerekli malzemeler ve taşınan maddenin tehlike
    etiket/işaretleri bulundurulmaktadır.
    **Mevzuat:** Karayolları Trafik Yönetmeliği, Madde 108

## Elektrik, Makine, Ekipman → Elektrik Güvenliği

40. **Soru:** Yüksek gerilimli (fazlar arası etkin değeri 1000 volt üstü)
    kuvvetli akım tesislerinde (trafo merkezi, YG hücresi vb.) teknik
    konulardan sorumlu bir elektrik mühendisi görevlendirilmiştir; 154 kV ve
    üzeri tesislerde tam zamanlı bir işletme sorumlusu elektrik mühendisi
    bulunmaktadır. Yüksek gerilim altında çalışma yalnızca elektrik
    mühendisleri veya EKAT (Elektrik Kuvvetli Akım Tesislerinde Yüksek
    Gerilim Altında Çalışma İzin Belgesi) sahibi fen adamları tarafından
    yapılmaktadır.
    **Mevzuat:** Elektrik Kuvvetli Akım Tesisleri Yönetmeliği, Madde 60

## Elektrik, Makine, Ekipman → Kilitleme Etiketleme

41. **Soru:** Kuvvetli akım tesislerinde (fazlar arası 1000 volt üstü gerilim
    içeren tesisler) bakım/onarım çalışması öncesinde; ilgili devrenin
    gerilimi kesilmekte, yeniden gerilim verilmesini önlemek için kilitleme/
    uyarı levhası uygulaması yapılmakta, gerilim olmadığı ölçü aletiyle
    doğrulanmakta ve çalışılacak bölüm kısa devre edilip topraklanmaktadır.
    **Mevzuat:** Elektrik Kuvvetli Akım Tesisleri Yönetmeliği, Madde 61

## Elektrik, Makine, Ekipman → Elektrik Güvenliği

42. **Soru:** İşletmede kullanılan koruyucu malzemeler (manevra çubuğu,
    yalıtkan eldiven, yalıtkan sehpa vb.) standartta belirtildiği sürelerde,
    yoksa imalatçının öngördüğü sürelerde denetlenmektedir.
    **Mevzuat:** Elektrik Kuvvetli Akım Tesisleri Yönetmeliği, Madde 26

43. **Soru:** Tesislerin ve aygıtların teknik belgelerinde belirtilen
    aralıklarda bakım ve onarımları yapılmakta; yapılan bakım ve onarımlar
    kalıcı bir şekilde kaydedilmektedir.
    **Mevzuat:** Elektrik Kuvvetli Akım Tesisleri Yönetmeliği, Madde 27

44. **Soru:** İşyerindeki topraklama tesisleri, kurulumdan sonra ve belirli
    periyotlarla gözle muayene ve ölçme yoluyla kontrol edilmekte; topraklama
    direnci ölçüm sonuçları kayıt altına alınmaktadır.
    **Mevzuat:** Elektrik Tesislerinde Topraklamalar Yönetmeliği, Madde 10

## Genel Yükümlülükler → Yıllık İzin (YENİ alt kategori)

45. **Soru:** İşçilere kıdemlerine göre asgari yıllık ücretli izin süresi
    (1-5 yıl: 14 gün, 5-15 yıl: 20 gün, 15 yıl ve üzeri: 26 gün; yeraltı
    işlerinde +4 gün; 18 yaş altı veya 50 yaş üzeri işçilerde en az 20 gün)
    kullandırılmaktadır.
    **Mevzuat:** Yıllık Ücretli İzin Yönetmeliği, Madde 9

46. **Soru:** İşveren, çalıştırdığı işçilerin izin durumlarını gösteren
    yıllık izin kayıt belgesini (veya izin defteri/kartoteks sistemini)
    tutmak zorundadır.
    **Mevzuat:** Yıllık Ücretli İzin Yönetmeliği, Madde 20

47. **Soru:** Yıllık ücretli izin işveren tarafından bölünmeden, tarafların
    anlaşması halinde bir bölümü 10 günden az olmamak kaydıyla bölümler
    halinde kullandırılmakta; işyeri dışında izin geçirecek işçilere talep
    üzerine toplam 4 güne kadar ücretsiz yol izni verilmektedir.
    **Mevzuat:** Yıllık Ücretli İzin Yönetmeliği, Madde 6

48. **Soru:** İzin ücreti ve bu döneme rastlayan diğer ücret/hakları,
    işçiye izine başlamadan önce peşin veya avans olarak ödenmektedir.
    **Mevzuat:** Yıllık Ücretli İzin Yönetmeliği, Madde 21

49. **Soru:** İşçi sayısı yüzden fazla olan işyerlerinde, işveren ve işçi
    temsilcilerinden oluşan izin kurulu kurulmuş ve izin çizelgeleri bu
    kurul tarafından hazırlanmaktadır.
    **Mevzuat:** Yıllık Ücretli İzin Yönetmeliği, Madde 15

## Genel Yükümlülükler → Genç Çalışanlar

50. **Soru:** 18 yaşını doldurmamış işçiler; gürültü/titreşimi yüksek, aşırı
    sıcak/soğuk ortamlarda, meslek hastalığına yol açan maddelerle,
    radyoaktif maddelerle, parlayıcı/patlayıcı maddelerle yapılan işlerde,
    para taşıma/tahsilat işlerinde, parça başı/prim usulü ücretlendirilen
    işlerde veya gece döneminde çalıştırılmamaktadır.
    **Mevzuat:** Çocuk ve Genç İşçilerin Çalıştırılma Usul ve Esasları
    Hakkında Yönetmelik, Madde 5

51. **Soru:** Çocuk ve genç işçilerin günlük/haftalık çalışma süreleri
    (temel eğitimini tamamlamış çocuklarda günde 7/haftada 35 saat, 15 yaş
    üstünde günde 8/haftada 40 saat, okula devam edenlerde günde 2/haftada
    10 saat) ve ara dinlenmesi süreleri bu sınırlara uygun uygulanmakta;
    24 saatte en az 14 saat kesintisiz dinlenme sağlanmaktadır.
    **Mevzuat:** Aynı Yönetmelik, Madde 6

52. **Soru:** Çocuk ve genç işçilerin hafta tatili izni kesintisiz en az
    40 saattir ve ücretli ödenir.
    **Mevzuat:** Aynı Yönetmelik, Madde 8

53. **Soru:** Çocuk ve genç işçiler ulusal bayram ve genel tatil günlerinde
    çalıştırılmazlar ve bu günlerin ücreti ödenir.
    **Mevzuat:** Aynı Yönetmelik, Madde 9

54. **Soru:** Çocuk ve genç işçilere verilen yıllık ücretli izin süresi
    20 günden az değildir, kesintisiz kullandırılmakta (gerekirse en fazla
    ikiye bölünerek) ve okula/eğitime devam edenlere okul tatil döneminde
    verilmektedir.
    **Mevzuat:** Aynı Yönetmelik, Madde 10

55. **Soru:** Çocuklara karşı işlenmiş suçlardan veya yüz kızartıcı
    suçlardan hüküm giymiş kişiler işveren veya işveren vekili olarak
    çocuk ve genç işçi çalıştırmamaktadır.
    **Mevzuat:** Aynı Yönetmelik, Madde 11

56. **Soru:** İşveren, çocuk/genç işçinin velisi veya vasisine çalıştırılacağı
    iş, riskler ve alınan önlemler hakkında bilgi vermekte; okula devam eden
    çocuk/genç işçiden öğrenci belgesi istemekte ve veli/vasi ile yazılı iş
    sözleşmesi yapmaktadır.
    **Mevzuat:** Aynı Yönetmelik, Madde 12

57. **Soru:** İşveren, çocuk ve genç işçilere çalıştırmaya başlamadan önce
    işyerindeki riskler, işe uyum ve kanuni hakları konusunda iş başı
    eğitimi vermekte; risk tespit edilen durumlarda gerekli tıbbi kontroller
    yapılmaktadır.
    **Mevzuat:** Aynı Yönetmelik, Madde 13

## Teknik Güvenlik → Sürücü Güvenliği

58. **Soru:** Hareket halindeki taşıtlarda (karayolu, demiryolu, deniz/göl/
    akarsu) çalışan ve işi haftalık günlere bölünemeyen işçiler için çalışma
    dönemi en çok 6 ay olarak işveren tarafından belirlenmektedir.
    **Mevzuat:** Haftalık İş Günlerine Bölünemeyen Çalışma Süreleri
    Yönetmeliği, Madde 4

59. **Soru:** Hareket halindeki taşıtlarda çalışan ve işi haftalık günlere
    bölünemeyen işçiler için, çalışma döneminde haftalık ortalama çalışma
    süresi 45 saati aşmamaktadır (yoğunlaştırılmış haftalardan sonraki
    dönemde daha az çalıştırılarak denkleştirilir).
    **Mevzuat:** Aynı Yönetmelik, Madde 5

60. **Soru:** Hareket halindeki taşıtlarda çalışan ve işi haftalık günlere
    bölünemeyen işçiler için günlük çalışma süresi 11 saati, gece çalışma
    süresi 7,5 saati (profesyonel sürücülerde 9 saati, haftada 2 kez 10
    saate çıkabilir) geçmemektedir.
    **Mevzuat:** Aynı Yönetmelik, Madde 6

61. **Soru:** Hareket halindeki taşıtlarda çalışan ve işi haftalık günlere
    bölünemeyen işçilere 24 saatte en az 11 saat kesintisiz günlük
    dinlenme verilmektedir.
    **Mevzuat:** Aynı Yönetmelik, Madde 8

62. **Soru:** Hareket halindeki taşıtlarda çalışan ve işi haftalık günlere
    bölünemeyen işçilere haftada kesintisiz en az 24 saat hafta tatili
    verilmektedir.
    **Mevzuat:** Aynı Yönetmelik, Madde 9

63. **Soru:** Hareket halindeki taşıtlarda çalışan ve işi haftalık günlere
    bölünemeyen işçiler için bir yıl içindeki toplam fazla çalışma 270
    saati aşmamaktadır.
    **Mevzuat:** Aynı Yönetmelik, Madde 11

64. **Soru:** İşveren, her çalışma dönemi için çalışma tablo/çizelgelerini
    (çalışma dönemi, günlük başlama/bitiş saatleri, dinlenme zamanları,
    hafta tatili günleri) düzenleyip idare bürolarında ve taşıtlarda
    bulundurmaktadır.
    **Mevzuat:** Aynı Yönetmelik, Madde 16

65. **Soru:** Hareket halindeki taşıtlarda çalışan işçinin günlük çalışması
    oturduğu yer dışında sona erdiğinde işveren, işçinin evine gitmesini
    veya yatacak yer sağlamakla yükümlüdür.
    **Mevzuat:** Aynı Yönetmelik, Madde 14

## Genel Yükümlülükler → Genel İş Yeri Gereklilikleri

66. **Soru:** Yer altı maden işlerinde çalışan işçilerin çalışma süresi
    günde en çok 7,5, haftada en çok 37,5 saat olarak uygulanmaktadır.
    **Mevzuat:** İş Kanununa İlişkin Çalışma Süreleri Yönetmeliği, Madde 4

67. **Soru:** Denkleştirme esasına göre çalışmada (yoğun haftalardan sonra
    az çalıştırma), toplam çalışma süresi 2 aylık (toplu iş sözleşmesiyle
    4 aya; turizm sektöründe 4 aylık, toplu iş sözleşmesiyle 6 aya kadar)
    süre içinde normal çalışma süresini aşmayacak şekilde denkleştirilmekte;
    günlük çalışma süresi bu düzenlemede de 11 saati aşmamaktadır.
    **Mevzuat:** Aynı Yönetmelik, Madde 5

68. **Soru:** Telafi çalışması yaptırılırken işveren, çalışmanın hangi
    zorunlu nedene dayandığını ve başlama tarihini işçilere açıkça
    bildirmekte; telafi çalışması günde 3 saatten fazla yaptırılmamakta,
    tatil günlerinde uygulanmamakta ve normal çalışma döneminin başlamasını
    takip eden 2 ay içinde tamamlanmaktadır.
    **Mevzuat:** Aynı Yönetmelik, Madde 7

69. **Soru:** Günlük çalışmanın başlama ve bitiş saatleri ile dinlenme
    saatleri işyerlerinde işçilere uygun araçlarla duyurulmaktadır.
    **Mevzuat:** Aynı Yönetmelik, Madde 8

70. **Soru:** İşveren, işçilerin çalışma sürelerini uygun araçlarla
    (puantaj, kayıt sistemi vb.) belgelemek zorundadır.
    **Mevzuat:** Aynı Yönetmelik, Madde 9

## Genel Yükümlülükler → Gece Vardiyasında Çalışanlar

71. **Soru:** İşveren, posta sayısı, her postanın başlama/bitiş saatleri,
    posta işçilerinin ad-soyadları, ara dinlenmesi ve hafta tatillerini
    düzenleyip işyerinde işçilerin kolayca görüp okuyabileceği şekilde ilan
    etmektedir.
    **Mevzuat:** Postalar Halinde İşçi Çalıştırılarak Yürütülen İşlerde
    Çalışmalara İlişkin Özel Usul ve Esaslar Hakkında Yönetmelik, Madde 3

72. **Soru:** Sürekli/durmaksızın postalar halinde yürütülen işlerde 24
    saatlik sürede en az 3 işçi postası çalıştırılmakta (turizm, özel
    güvenlik, sağlık hizmeti ve petrol arama/sondaj işlerinde en az 2
    postaya düşürülebilir); diğer postalı işlerde her postanın çalışma
    süresi ilgili günlük çalışma süresi sınırlarını aşmamaktadır.
    **Mevzuat:** Aynı Yönetmelik, Madde 4

73. **Soru:** Posta sayısının artırılması veya çalışma süresinin
    azaltılması nedeniyle işçi ücretlerinden kesinti yapılmamaktadır.
    **Mevzuat:** Aynı Yönetmelik, Madde 6

74. **Soru:** Gece postalarında işçiler 7,5 saatten fazla çalıştırılmamaktadır
    (turizm, özel güvenlik, sağlık hizmeti ve petrol arama/sondaj işlerinde
    işçinin yazılı onayıyla aşılabilir).
    **Mevzuat:** Aynı Yönetmelik, Madde 7

75. **Soru:** Gece ve gündüz postaları, en fazla bir hafta gece çalıştırılan
    işçilerin bir sonraki hafta gündüz çalıştırılması suretiyle rotasyonla
    düzenlenmekte; gece çalışması nedeniyle sağlığının bozulduğunu raporla
    belgeleyen işçiye imkanlar ölçüsünde gündüz postasında uygun bir iş
    verilmektedir.
    **Mevzuat:** Aynı Yönetmelik, Madde 8

76. **Soru:** Posta değişiminde işçiler sürekli en az 11 saat
    dinlendirilmeden çalıştırılmamaktadır.
    **Mevzuat:** Aynı Yönetmelik, Madde 9

77. **Soru:** İşveren, her postada çalışan işçilerin ad-soyad listelerini,
    Bakanlıkça talep edildiğinde sunmak üzere işyerinde bulundurmaktadır.
    **Mevzuat:** Aynı Yönetmelik, Madde 12

## Genel Yükümlülükler → Hazırlama, Tamamlama ve Temizleme İşleri (YENİ alt kategori)

78. **Soru:** Hazırlama/tamamlama/temizleme işleri yalnızca teknik
    zorunluluk veya sağlık-güvenlik sakıncası bulunması halinde asıl iş
    saatlerinden önce veya sonra yaptırılmaktadır.
    **Mevzuat:** Hazırlama, Tamamlama ve Temizleme İşleri Yönetmeliği,
    Madde 4

79. **Soru:** Hazırlama/tamamlama/temizleme işlerinde işçiler, asıl iş için
    belirlenmiş günlük çalışma süresine ek olarak günde en çok 2 saat daha
    çalıştırılmaktadır.
    **Mevzuat:** Aynı Yönetmelik, Madde 5

80. **Soru:** Hazırlama/tamamlama/temizleme işlerinde çalıştırılacak işçi
    sayısı işyeri büyüklüğüne göre belirlenen sınırları aşmamaktadır (örn.
    1-15 çalışanlı işyerinde en fazla 3 işçi, 100'den fazla çalışanlı
    işyerinde toplam çalışan sayısının %10'u).
    **Mevzuat:** Aynı Yönetmelik, Madde 6

81. **Soru:** Hazırlama/tamamlama/temizleme işlerinin yürütülmesi sırasında
    işveren tarafından, çalıştırılacak işçiler arasından deneyimli bir
    ekip başı görevlendirilmekte ve işçiler işverenin tebliğ ettiği
    talimatlara uymaktadır.
    **Mevzuat:** Aynı Yönetmelik, Madde 7

82. **Soru:** İşveren, hazırlama/tamamlama/temizleme işlerinin yürütülmesi
    sırasında iş sağlığı ve güvenliği için gerekli her türlü önlemi almakta,
    araç-gereci noksansız bulundurmakta ve işçilere gerekli İSG eğitimini
    vermektedir.
    **Mevzuat:** Aynı Yönetmelik, Madde 8

83. **Soru:** Hazırlama/tamamlama/temizleme işleri mümkün oldukça
    işyerindeki işçiler arasında nöbetleşe yaptırılmaktadır.
    **Mevzuat:** Aynı Yönetmelik, Madde 9

84. **Soru:** Asıl iş bitiminden sonra hazırlama/tamamlama/temizleme
    işlerine başlamadan önce işçilere en az 30 dakika dinlenme
    verilmektedir.
    **Mevzuat:** Aynı Yönetmelik, Madde 10

85. **Soru:** Hazırlama/tamamlama/temizleme işleri dahil toplam günlük
    çalışma süresi 11 saati, bu işler ile yapılan fazla çalışmaların
    toplamı yılda 270 saati aşmamaktadır.
    **Mevzuat:** Aynı Yönetmelik, Madde 12

86. **Soru:** Hazırlama/tamamlama/temizleme işlerini de yapan asıl
    işçilere, bu işlerde geçirdikleri süre için normal ücretin saat başına
    düşen tutarının yüzde elli zamlı ödenmektedir.
    **Mevzuat:** Aynı Yönetmelik, Madde 15

## Acil Durum, Yangın, Patlama → Yangın Güvenliği (YENİ alt kategori)

87. **Soru:** 30'dan fazla çalışanı bulunan, patlayıcı/parlayıcı/yanıcı madde
    üretilen-satılan-depolanan veya birden fazla işyerinin bir arada
    bulunduğu iş hanı/çarşı gibi yerlerde yangına karşı önlemlerin alındığını
    gösteren itfaiye raporu alınmakta; diğer işyerlerinde ise yangına karşı
    gerekli tedbirler alınmaktadır.
    **Mevzuat:** İşyeri Açma ve Çalışma Ruhsatlarına İlişkin Yönetmelik,
    Madde 5

## Genel Yükümlülükler → Engelli Çalışanlar

88. **Soru:** İşyeri, engelliler, yaşlılar ve diğer hareket kısıtlılığı
    bulunan kişiler için erişilebilirlik mevzuatına uygun olarak
    düzenlenmiştir.
    **Mevzuat:** Aynı Yönetmelik, Madde 5

## Genel Yükümlülükler → Genel İş Yeri Gereklilikleri

89. **Soru:** On kişiden fazla çalışanı bulunan müstakil işyerinde dinlenme
    yeri, kıyafet değiştirme kabini, bay ve bayan için ayrı tuvalet
    bulunmaktadır (ortak kullanım alanı olan iş hanı/pasaj/terminal gibi
    yerlerde bu şart aranmaz).
    **Mevzuat:** Aynı Yönetmelik, Madde 14 (Ek-1/A-4 kapsamında)

## Acil Durum, Yangın, Patlama → Yangın Güvenliği

90. **Soru:** Umuma açık istirahat ve eğlence yerlerinde ve kişilerin yoğun
    giriş-çıkış yaptığı diğer işyerlerinde, giriş ve çıkışlar ayrı kapıdan
    olmakta, yangına karşı ayrıca tahliye çıkışı bulunmakta ve yangın
    çıkışları ışıklı tabela ile gösterilmektedir.
    **Mevzuat:** Aynı Yönetmelik, Madde 14 (Ek-1/A-8 kapsamında)

## Acil Durum, Yangın, Patlama → Yangın Güvenliği

91. **Soru:** Çalışma saatleri içinde, binanın her katı/bölümü veya tamamı
    için görevliler arasından bir yangın güvenliği sorumlusu seçilmiştir;
    bu kişi mesai boyunca yangına karşı koruma önlemlerini kontrol etmekle
    yükümlüdür.
    **Mevzuat:** Binaların Yangından Korunması Hakkında Yönetmelik,
    Madde 125

92. **Soru:** Yapı yüksekliği 30,50 m'den fazla olan binalarda veya içinde
    50'den fazla kişi barındıran konut dışı yapı/işletmelerde söndürme,
    kurtarma, koruma ve ilk yardım ekipleri kurulmuştur (diğer işyerlerinde
    bina sahibi/yöneticisinin uygun gördüğü tedbirler alınmaktadır).
    **Mevzuat:** Aynı Yönetmelik, Madde 126

93. **Soru:** Acil durum ekiplerinin yapılardaki yangınlara müdahale ve
    kurtarma işlerinde kullanacağı gerekli malzemeler (gerekiyorsa gaz
    maskesi, teneffüs cihazı, yedek hortum vb.) bulundurulmaktadır.
    **Mevzuat:** Aynı Yönetmelik, Madde 128

94. **Soru:** Acil durum ekip personeli ve binadaki diğer görevliler yangın
    söndürme eğitiminden geçirilmekte; binada senede en az 1 kez söndürme
    ve tahliye tatbikatı yapılmaktadır.
    **Mevzuat:** Aynı Yönetmelik, Madde 129

95. **Soru:** Binadaki yangın dolapları ve hortum makara sistemlerinin
    TS EN 671-3 standardında belirtilen periyodik bakımları
    yaptırılmaktadır.
    **Mevzuat:** Aynı Yönetmelik, Madde 94

96. **Soru:** Taşınabilir yangın söndürme cihazlarının yılda bir kez
    yerinde genel kontrolü yapılmakta; dördüncü yılın sonunda içindeki
    söndürme maddeleri yenilenerek hidrostatik testleri yaptırılmaktadır.
    **Mevzuat:** Aynı Yönetmelik, Madde 99

97. **Soru:** Acil aydınlatma, yönlendirme ve yangın algılama/uyarı
    sistemlerinin ilgili standartlarda belirtilen periyodik kontrol, test
    ve bakımı yaptırılmaktadır.
    **Mevzuat:** Aynı Yönetmelik, Madde 84

98. **Soru:** Binada yangın söndürme sistemleri (örn. sprinkler/yağmurlama
    sistemi) varsa, bunların ilgili standartlarda belirtilen periyodik
    kontrol, test ve bakımı yaptırılmaktadır.
    **Mevzuat:** Aynı Yönetmelik, Madde 100

99. **Soru:** Binada katı veya sıvı yakıtlı kazan varsa, bacalarının altında
    kurum temizleme menfezi bulunmakta ve bacalar yılda en az iki defa
    yetkili kişilere temizlettirilmektedir.
    **Mevzuat:** Aynı Yönetmelik, Madde 58

## Acil Durum, Yangın, Patlama → Tahliye

100. **Soru:** Kaçış merdivenlerinin kullanıma uygun şekilde, hiçbir
     engelleyici (depo malzemesi, eşya vb.) olmadan boş bulundurulması
     sağlanmaktadır.
     **Mevzuat:** Aynı Yönetmelik, Madde 38

101. **Soru:** Binada acil durum asansörü önünde yangın güvenlik holü
     bulunuyorsa, bu holün kullanıma uygun şekilde boş bulundurulması
     sağlanmaktadır.
     **Mevzuat:** Aynı Yönetmelik, Madde 34

## Teknik Güvenlik → Alt İşveren/Yüklenici

102. **Soru:** Alt işveren ilişkisi kurulurken; asıl işverenin kendi
     işçilerinin de o işte çalışması, alt işverene verilen işin yardımcı iş
     (veya asıl işin bölünmesi halinde işletme ve işin gereği ile
     teknolojik nedenlerle uzmanlık gerektiren bir iş) olması, alt
     işverenin işçilerini sadece o işyerindeki bu işte çalıştırması ve alt
     işverenin daha önce o işyerinde çalıştırılan bir kimse olmaması
     şartlarına uyulmaktadır.
     **Mevzuat:** Alt İşverenlik Yönetmeliği, Madde 4

103. **Soru:** Alt işveren, kendi işyeri için İş Kanunu'nun 3. maddesine
     göre bildirim yapmakta ve işyerinin tescili için gerekli belgelerle
     bölge müdürlüğüne başvurmaktadır.
     **Mevzuat:** Aynı Yönetmelik, Madde 5

104. **Soru:** Asıl işveren ile alt işveren arasında yazılı bir alt
     işverenlik sözleşmesi yapılmakta; sözleşmede işyeri unvanı/adresi,
     asıl iş ve verilen işin tanımı, asıl işverenin alt işveren işçilerine
     karşı yasal yükümlülüklerden alt işverenle birlikte sorumlu olacağı
     hükmü gibi Madde 10'da sayılan hususlar yer almaktadır.
     **Mevzuat:** Aynı Yönetmelik, Madde 10

105. **Soru:** Alt işverene verilen iş, bölünerek bir başka alt işverene
     devredilmemektedir (alt işveren üstlendiği işi tekrar alt işverene
     veremez).
     **Mevzuat:** Aynı Yönetmelik, Madde 11

## İş Hijyeni → Kimyasal Risk Etmenleri (YENİ alt kategori)

106. **Soru:** Biyosidal ürünler (dezenfektan, haşere ilacı vb.)
     kullanılırken; ürünün güvenlik bilgi formunda yer alan talimatlara,
     işyeri koşullarında işçilerin korunmasına yönelik bilgilere ve etiket
     bilgilerine uyularak doğru kullanımı sağlanmakta, insanları,
     hayvanları veya çevreyi tehdit edebilecek durumlara karşı gerekli
     tedbirler alınmaktadır.
     **Mevzuat:** Biyosidal Ürünler Yönetmeliği, Madde 7

## Acil Durum, Yangın, Patlama → Sivil Savunma (YENİ alt kategori — sadece kamu kurum ve kuruluşları için geçerli)

107. **Soru:** Kamu kurum ve kuruluşunda sivil savunma uzmanı kadrosu
     bulunmuyorsa, kurumun üst yöneticisi tarafından bir personel sivil
     savunma amiri olarak görevlendirilmiş; sivil savunma, seferberlik ve
     afet/acil durum hizmetlerinin koordinasyonu bu kişi tarafından
     yürütülmektedir.
     **Mevzuat:** Sivil Savunma Uzmanlarının İdari Statüleri, Görevleri,
     Çalışma Usul ve Esasları ile Eğitimleri Hakkında Yönetmelik, Madde 8

## İş Hijyeni → Kimyasal Risk Etmenleri

108. **Soru:** Uçucu madde içeren ürünlerle çalışılan işyerlerinde çocuk
     çalıştırılmamakta ve Ek-3'te belirtilen niteliklere uygun uyarı
     levhası asılmaktadır.
     **Mevzuat:** Uçucu Maddelerin Zararlarından İnsan Sağlığının
     Korunması Hakkında Yönetmelik, Madde 5

109. **Soru:** Uçucu madde içeren ürünlerle çalışılan işyerlerinde kısmi
     veya genel havalandırma sistemi bulunmakta, bu sistem hava
     emisyonlarına ilişkin mevzuata uygun olarak kapı/pencere gibi
     açıklıklardan atmosfere kontrolsüz çıkışı önlemektedir.
     **Mevzuat:** Aynı Yönetmelik, Madde 5

110. **Soru:** Uçucu madde içeren ürünlerle çalışan işçilere uygun ve
     yeterli yıkanma yeri, tuvalet ve temizlik malzemesi sağlanmakta;
     koruyucu maske, eldiven ve ayrı bir iş kıyafeti verilmektedir.
     **Mevzuat:** Aynı Yönetmelik, Madde 5

111. **Soru:** Uçucu madde içeren ürünlerle çalışan işçiler yılda en az
     bir kez bu konuda yeterli ve uygun eğitim almaktadır (işyeri hekimi
     varsa onun tarafından, yoksa toplum sağlığı merkezi tarafından
     verilir).
     **Mevzuat:** Aynı Yönetmelik, Madde 6

## Genel Yükümlülükler → Sağlık Kurumu Çalışan Güvenliği (YENİ alt kategori — sadece 2. ve 3. basamak sağlık kurumları için geçerli)

112. **Soru:** Sağlık kurumunda bir çalışan güvenliği programı
     hazırlanmış; çalışanlara yönelik sağlık taramaları yapılmakta,
     çalışanların kişisel koruyucu önlemler alması sağlanmakta ve engelli
     çalışanlara yönelik düzenlemeler yapılmaktadır.
     **Mevzuat:** Hasta ve Çalışan Güvenliğinin Sağlanmasına Dair
     Yönetmelik, Madde 7

113. **Soru:** Sağlık kurumunda çalışanlara yönelik fiziksel saldırıların
     önlenmesine yönelik düzenleme yapılmaktadır.
     **Mevzuat:** Aynı Yönetmelik, Madde 7

114. **Soru:** Sağlık kurumunda güvenlik raporlama sistemi (beyaz kod
     uygulaması dahil) kurulmuş; kesici-delici alet yaralanmaları,
     kan/vücut sıvıları ile temas gibi çalışan güvenliğini ilgilendiren
     olaylar bu sisteme bildirilmekte ve bildirilen olaylarla ilgili
     düzeltici/önleyici faaliyetler uygulamaya konulmaktadır.
     **Mevzuat:** Aynı Yönetmelik, Madde 8

## Elektrik, Makine, Ekipman → LPG Güvenliği (YENİ alt kategori)

115. **Soru:** LPG piyasasında lisans sahibi işletmeler (otogaz istasyonu,
     dolum tesisi, dağıtım şirketi vb.), ilgili sertifikaya (Sorumlu Müdür
     Sertifikası, LPG Yetkili Teknik Personel Sertifikası veya LPG Yetkili
     İşletme Personeli Sertifikası) sahip olmayan personeli bu görevlerde
     çalıştırmamaktadır.
     **Mevzuat:** Sıvılaştırılmış Petrol Gazları (LPG) Piyasası Eğitim ve
     Sorumlu Müdür Yönetmeliği, Madde 7

## Genel Yükümlülükler → İSG Profesyonelleri / Hizmetleri

116. **Soru:** İşyerinde vardiyalı çalışma yapılıyorsa, iş güvenliği uzmanı/
     uzmanları işveren tarafından vardiyalara uygun şekilde
     görevlendirilmektedir (bir uzmanın süresi bölünerek birden fazla
     uzmana paylaştırılmamaktadır).
     **Mevzuat:** İş Güvenliği Uzmanlarının Görev, Yetki, Sorumluluk ve
     Eğitimleri Hakkında Yönetmelik, Madde 7/4

117. **Soru:** İşveren, iş güvenliği uzmanından işyerinin tehlike sınıfına
     göre belirlenen asgari süre kadar hizmet almaktadır (az tehlikeli:
     çalışan başına ayda en az 10 dakika, tehlikeli: 20 dakika, çok
     tehlikeli: 40 dakika); ayrıca az tehlikeli sınıfta 1000, tehlikeli
     sınıfta 500, çok tehlikeli sınıfta 250 ve üzeri çalışanı olan
     işyerlerinde bu sayılara karşılık tam süreli çalışacak iş güvenliği
     uzmanı görevlendirilmektedir.
     **Mevzuat:** İş Güvenliği Uzmanlarının Görev, Yetki, Sorumluluk ve
     Eğitimleri Hakkında Yönetmelik, Madde 12

118. **Soru:** Tam süreli görevlendirilen iş güvenliği uzmanının mesleki
     gelişim amaçlı eğitim/seminer/panel katılımları için yılda toplam 5
     iş gününe kadar süre çalışma süresinden sayılmakta ve bu süreler
     nedeniyle uzmanın ücretinden kesinti yapılmamaktadır.
     **Mevzuat:** İş Güvenliği Uzmanlarının Görev, Yetki, Sorumluluk ve
     Eğitimleri Hakkında Yönetmelik, Madde 10/2

## Genel Yükümlülükler → İSG Profesyonelleri / Hizmetleri

119. **Soru:** İşveren, işyeri hekimi ve iş güvenliği uzmanının tam süreli
     görevlendirilmesi gerektiği durumlarda İşyeri Sağlık ve Güvenlik Birimi
     (İSGB) kurmaktadır.
     **Mevzuat:** İş Sağlığı ve Güvenliği Hizmetleri Yönetmeliği, Madde 5/3

120. **Soru:** Çalışanın ölümü veya maluliyetiyle sonuçlanan iş kazası veya
     meslek hastalığında ihmali yargı kararıyla kesinleşen işyeri hekimi veya
     iş güvenliği uzmanı işveren tarafından Genel Müdürlüğe bildirilmektedir.
     **Mevzuat:** İş Sağlığı ve Güvenliği Hizmetleri Yönetmeliği, Madde 5

121. **Soru:** İşveren, görevlendirdiği işyeri hekimi, iş güvenliği uzmanı,
     diğer sağlık personeli ve hizmet aldığı OSGB'lerin geçerli yetki
     belgesine sahip olduğunu doğrulamaktadır.
     **Mevzuat:** İş Sağlığı ve Güvenliği Hizmetleri Yönetmeliği, Madde 5/7

122. **Soru:** İşveren; iş sağlığı ve güvenliği hizmeti verecek kişilerin
     veya OSGB'nin görevlendirilmesinde çalışan temsilcilerinin görüşünü
     önceden almakta, bu kişilerin çalışma saatleri ve görev/yetki/
     sorumluluklarını çalışanlara bildirmekte, çalışanların sağlığını
     etkileyen konularda ilgilileri bilgilendirmekte ve yükümlü olduğu
     kayıt/bildirimleri İSG hizmeti sağlayanlarla işbirliği içinde
     yapmaktadır.
     **Mevzuat:** İş Sağlığı ve Güvenliği Hizmetleri Yönetmeliği, Madde 6

123. **Soru:** İşveren, işyerinde yürütülen iş sağlığı ve güvenliği
     faaliyetlerine ilişkin her türlü kaydı ve çalışanların kişisel sağlık
     dosyalarını, işten ayrılma tarihinden itibaren en az 15 yıl süreyle
     saklamaktadır.
     **Mevzuat:** İş Sağlığı ve Güvenliği Hizmetleri Yönetmeliği, Madde 7

124. **Soru:** İşyerinde onaylı defter (Çalışma ve İş Kurumu İl Müdürlüğü
     veya noterce onaylı) tutulmakta; iş güvenliği uzmanı, işyeri hekimi ve
     işveren tarafından imzalanmakta, düzenli saklanmakta ve teftişe yetkili
     iş müfettişlerine istenildiğinde gösterilmektedir.
     **Mevzuat:** İş Sağlığı ve Güvenliği Hizmetleri Yönetmeliği, Madde 7

125. **Soru:** İş sağlığı ve güvenliği hizmetleri çalışanlara mali yük
     getirmeyecek şekilde (ücretsiz) sunulmaktadır.
     **Mevzuat:** İş Sağlığı ve Güvenliği Hizmetleri Yönetmeliği, Madde 9

126. **Soru:** İşyerinde çalışanlar arasından işyeri hekimi/iş güvenliği
     uzmanı/diğer sağlık personeli görevlendirilmişse bu kişilerle, OSGB'den
     hizmet alınıyorsa OSGB ile yazılı sözleşme veya görevlendirme belgesi
     imzalanmıştır.
     **Mevzuat:** İş Sağlığı ve Güvenliği Hizmetleri Yönetmeliği, Madde 14/1

127. **Soru:** İş güvenliği uzmanı, işyeri hekimi ve diğer sağlık personeline,
     iş sağlığı ve güvenliği ile ilgili çalışmaları yaptığı süre içinde
     başka görev verilmemektedir.
     **Mevzuat:** İş Sağlığı ve Güvenliği Hizmetleri Yönetmeliği, Madde 14/8

128. **Soru:** İSGB veya OSGB'de görevlendirme zorunluluğu bulunan personel
     görevinden ayrıldığında, yerine 30 gün içinde aranan niteliklere sahip
     personel görevlendirilmekte ve Genel Müdürlüğe bildirilmektedir.
     **Mevzuat:** İş Sağlığı ve Güvenliği Hizmetleri Yönetmeliği, Madde 14/10

129. **Soru:** İşyerinde İşyeri Sağlık ve Güvenlik Birimi (İSGB)
     kurulmuşsa; iş sağlığı ve güvenliği hizmetlerinin yürütülmesine ve
     çalışan sayısına uygun büyüklükte (mümkünse asıl işin yürütüldüğü
     mekânda ve giriş katta) kurulmuş olup en az 8 m² iş güvenliği uzmanı
     odası, işyeri hekimi muayene odası ve en az 12 m² ilkyardım/acil
     müdahale odası içermekte, gerekli araç-gereçlerle donatılmış ve
     kolayca görülebilir şekilde işaretlenmiştir.
     **Mevzuat:** İş Sağlığı ve Güvenliği Hizmetleri Yönetmeliği, Madde 10

130. **Soru:** Tam süreli işyeri hekimi/iş güvenliği uzmanı
     görevlendirilmesi gerekmeyen işyerlerinde işveren; 50 ve üzeri
     çalışanı olan işyerlerinde en az 8 m²'lik toplam iki oda ve acil
     ulaştırma aracı, 50'den az çalışanı olan işyerlerinde ise hizmetin
     etkin verilebilmesi için uygun bir yer sağlamaktadır.
     **Mevzuat:** İş Sağlığı ve Güvenliği Hizmetleri Yönetmeliği, Madde 11

131. **Soru:** Sözleşme veya görevlendirmesi Genel Müdürlükçe (İSG-KATİP
     üzerinden) onaylanmamış işyeri hekimi, iş güvenliği uzmanı veya diğer
     sağlık personeli göreve başlatılmamaktadır.
     **Mevzuat:** İş Sağlığı ve Güvenliği Hizmetleri Yönetmeliği, Madde 14/7

## Genel Yükümlülükler → Risk Değerlendirme

132. **Soru:** İşveren; çalışma ortamının ve çalışanların sağlık ve
     güvenliğini sağlama, sürdürme ve geliştirme amacıyla iş sağlığı ve
     güvenliği yönünden risk değerlendirmesi yapmakta veya yaptırmaktadır.
     **Mevzuat:** İş Sağlığı ve Güvenliği Risk Değerlendirmesi Yönetmeliği,
     Madde 5/1

133. **Soru:** İşveren, risk değerlendirmesinin yapılmış olmasının kendi iş
     sağlığı ve güvenliğini sağlama yükümlülüğünü ortadan kaldırmadığının
     farkındadır ve risk değerlendirmesi sonrasında da bu yükümlülüğe uygun
     davranmaktadır.
     **Mevzuat:** İş Sağlığı ve Güvenliği Risk Değerlendirmesi Yönetmeliği,
     Madde 5/2

134. **Soru:** İşveren, risk değerlendirmesini; kendisi veya vekili, iş
     güvenliği uzmanı/işyeri hekimi, çalışan temsilcileri, destek elemanları
     ve işyerindeki birimleri temsil eden bilgili çalışanlardan oluşan bir
     ekip ile gerçekleştirmekte, bu ekibe görevini yerine getirmesi için
     gerekli araç-gereç-mekân-zaman imkanlarını sağlamakta ve ekip
     üyelerinin hak/yetkilerini kısıtlamamaktadır.
     **Mevzuat:** İş Sağlığı ve Güvenliği Risk Değerlendirmesi Yönetmeliği,
     Madde 6

135. **Soru:** Risk değerlendirmesi; tehlikelerin tanımlanması, risklerin
     belirlenip analiz edilmesi, risk kontrol tedbirlerinin
     kararlaştırılması, dokümantasyon ve gerektiğinde güncelleme/yenileme
     aşamaları izlenerek gerçekleştirilmektedir.
     **Mevzuat:** İş Sağlığı ve Güvenliği Risk Değerlendirmesi Yönetmeliği,
     Madde 7/1

136. **Soru:** Risk değerlendirmesi çalışması yapılırken çalışanların
     ihtiyaç duyulan her aşamada sürece katılarak görüşlerinin alınması
     sağlanmaktadır.
     **Mevzuat:** İş Sağlığı ve Güvenliği Risk Değerlendirmesi Yönetmeliği,
     Madde 7/2

137. **Soru:** Risk değerlendirmesi dokümanı; işyeri/işveren bilgileri,
     gerçekleştiren kişilerin unvan/belge bilgileri, tarih ve geçerlilik
     tarihi, tespit edilen tehlike/riskler, kullanılan analiz yöntemi,
     analiz sonuçları ile düzeltici/önleyici tedbirleri içerecek şekilde
     hazırlanmakta; sayfaları numaralandırılıp gerçekleştiren kişilerce
     paraflanmakta, son sayfası imzalanmakta ve işyerinde saklanmaktadır.
     **Mevzuat:** İş Sağlığı ve Güvenliği Risk Değerlendirmesi Yönetmeliği,
     Madde 11

138. **Soru:** Risk değerlendirmesi, tehlike sınıfına göre çok tehlikeli
     işyerlerinde en geç 2 yılda, tehlikeli işyerlerinde en geç 4 yılda, az
     tehlikeli işyerlerinde en geç 6 yılda bir yenilenmektedir.
     **Mevzuat:** İş Sağlığı ve Güvenliği Risk Değerlendirmesi Yönetmeliği,
     Madde 12/1

139. **Soru:** İşyerinin taşınması/bina değişikliği, teknoloji/madde/
     ekipman değişikliği, üretim yöntemi değişikliği, iş kazası/meslek
     hastalığı/ramak kala olayı, ilgili mevzuat değişikliği, ölçüm/sağlık
     gözetim sonuçları veya işyeri dışından kaynaklanan yeni bir tehlike
     halinde risk değerlendirmesi tamamen veya kısmen yenilenmektedir.
     **Mevzuat:** İş Sağlığı ve Güvenliği Risk Değerlendirmesi Yönetmeliği,
     Madde 12/2

## Acil Durum, Yangın, Patlama → Büyük Endüstriyel Kazalar

140. **Soru:** Büyük kaza önleme politika belgesi veya güvenlik raporu
     hazırlanması gereken işyerlerinde, bu belge/raporlarda değerlendirilmiş
     riskler, risk değerlendirmesinde dikkate alınarak kullanılmaktadır.
     **Mevzuat:** İş Sağlığı ve Güvenliği Risk Değerlendirmesi Yönetmeliği,
     Madde 13

## Teknik Güvenlik → Alt İşveren/Yüklenici

141. **Soru:** Aynı çalışma alanını paylaşan birden fazla işveren,
     yürüttükleri işler için ayrı ayrı risk değerlendirmesi yapmakta, bu
     çalışmaları koordinasyon içinde yürütmekte ve birbirlerini/çalışan
     temsilcilerini tespit edilen riskler konusunda bilgilendirmektedir.
     **Mevzuat:** İş Sağlığı ve Güvenliği Risk Değerlendirmesi Yönetmeliği,
     Madde 14

142. **Soru:** Asıl işveren-alt işveren ilişkisi bulunan işyerlerinde her
     alt işveren kendi risk değerlendirmesini yapmakta, asıl işveren ihtiyaç
     duyulan bilgi/belgeyi sağlamakta ve alt işverenlerin risk
     değerlendirmesi çalışmalarını denetleyip koordine etmektedir; alt
     işveren risk değerlendirmesinin bir nüshasını asıl işverene vermekte ve
     asıl işveren bunu kendi çalışmasıyla bütünleştirerek tedbirlerin
     uygulanıp uygulanmadığını izlemektedir.
     **Mevzuat:** İş Sağlığı ve Güvenliği Risk Değerlendirmesi Yönetmeliği,
     Madde 15

## Genel Yükümlülükler → Bilgilendirme ve Katılım

143. **Soru:** İşyerinde çalışanlar, çalışan temsilcileri ve başka
     işyerlerinden çalışmak üzere gelen çalışanlar ile bunların işverenleri;
     işyerinde karşılaşılabilecek sağlık ve güvenlik riskleri ile düzeltici
     ve önleyici tedbirler hakkında bilgilendirilmektedir.
     **Mevzuat:** İş Sağlığı ve Güvenliği Risk Değerlendirmesi Yönetmeliği,
     Madde 16

## Genel Yükümlülükler → İş Sağlığı ve Güvenliği Kurulu

144. **Soru:** 50 ve daha fazla çalışanın bulunduğu ve 6 aydan fazla süren
     işlerin yapıldığı işyerinde kurul oluşturulmakta ve kurul kararları iş
     sağlığı ve güvenliği mevzuatına uygun şekilde uygulanmaktadır.
     **Mevzuat:** İş Sağlığı ve Güvenliği Kurulları Hakkında Yönetmelik,
     Madde 4

145. **Soru:** Asıl işveren-alt işveren ilişkisi bulunan işyerlerinde,
     çalışan sayılarına göre (her ikisi de 50+, sadece asıl işveren 50+,
     sadece alt işveren 50+ veya toplamda 50+) kurulun hangi tarafça veya
     ortak olarak kurulacağına ilişkin kurallara uyulmaktadır.
     **Mevzuat:** İş Sağlığı ve Güvenliği Kurulları Hakkında Yönetmelik,
     Madde 4

146. **Soru:** Asıl işveren-alt işveren ilişkisi bulunmayan ve aynı çalışma
     alanını paylaşan birden fazla işverenin ayrı kurullar oluşturması
     halinde, işverenler birbirlerinin çalışmalarını etkileyebilecek kurul
     kararları hakkında birbirlerini bilgilendirmektedir.
     **Mevzuat:** İş Sağlığı ve Güvenliği Kurulları Hakkında Yönetmelik,
     Madde 4

147. **Soru:** İşverene bağlı birden çok işyeri bulunması halinde, 50 ve
     daha fazla çalışanı olan her işyerinde ayrı kurul kurulmakta; işveren
     kurullar arası koordinasyon/bilgi alışverişini sağlamakta ve bu
     işyerlerine ait İSG raporlarının en az üç ayda bir ilgili teknik
     eleman/uzmanlarca incelenmesini sağlamaktadır.
     **Mevzuat:** İş Sağlığı ve Güvenliği Kurulları Hakkında Yönetmelik,
     Madde 5

148. **Soru:** Kurul; işveren veya vekili, iş güvenliği uzmanı, işyeri
     hekimi, insan kaynakları/personel/idari ve mali işleri yürütmekle
     görevli bir kişi, (bulunması halinde) sivil savunma uzmanı,
     (bulunması halinde) formen/ustabaşı/usta ve çalışan temsilcisinden
     oluşturulmakta; başkanlık işveren veya vekilinde, sekreterlik iş
     güvenliği uzmanında olmak üzere usulüne uygun atanmaktadır.
     **Mevzuat:** İş Sağlığı ve Güvenliği Kurulları Hakkında Yönetmelik,
     Madde 6

149. **Soru:** Kurul üyelerine ve yedeklerine, kurulun görev/yetkileri, iş
     sağlığı ve güvenliği mevzuatı, iş kazası nedenleri, meslek hastalıkları,
     acil durum önlemleri ve risk değerlendirmesi gibi konuları kapsayan
     eğitim verilmektedir.
     **Mevzuat:** İş Sağlığı ve Güvenliği Kurulları Hakkında Yönetmelik,
     Madde 7

150. **Soru:** Kurul; işyerine özgü İSG iç yönergesi hazırlama, çalışanlara
     yol gösterme, tehlike/tedbir değerlendirme, kaza/ramak kala olaylarını
     inceleme, eğitim planlama, yıllık rapor hazırlama ve çalışmaktan
     kaçınma taleplerine karar verme gibi görev ve yetkilerini yerine
     getirmektedir.
     **Mevzuat:** İş Sağlığı ve Güvenliği Kurulları Hakkında Yönetmelik,
     Madde 8

151. **Soru:** Kurul üyelerinin, bu görevleri yerine getirmeleri nedeniyle
     hakları kısıtlanmamakta, kötü davranış veya muameleye maruz
     kalmamaktadır.
     **Mevzuat:** İş Sağlığı ve Güvenliği Kurulları Hakkında Yönetmelik,
     Madde 8

152. **Soru:** Kurul, ayda en az bir kere (tehlikeli işyerlerinde en fazla
     iki ayda, az tehlikeli işyerlerinde en fazla üç ayda bir) toplanmaktadır.
     **Mevzuat:** İş Sağlığı ve Güvenliği Kurulları Hakkında Yönetmelik,
     Madde 9

153. **Soru:** Toplantı gündemi, yeri, günü ve saati toplantıdan en az 48
     saat önce üyelere bildirilmekte; kurul salt çoğunlukla toplanıp
     çekimser oy kullanılmaksızın karar almakta; alınan kararları içeren
     tutanak düzenlenip imzalanarak saklanmaktadır.
     **Mevzuat:** İş Sağlığı ve Güvenliği Kurulları Hakkında Yönetmelik,
     Madde 9

154. **Soru:** Kurul toplantılarında geçen süreler günlük çalışma
     süresinden sayılmaktadır.
     **Mevzuat:** İş Sağlığı ve Güvenliği Kurulları Hakkında Yönetmelik,
     Madde 9

155. **Soru:** İşveren veya vekili, kurul için gerekli toplantı yerini,
     araç ve gereçleri sağlamakta; kurul tutanak/raporlarını iş
     müfettişlerinin incelemesi için işyerinde bulundurmaktadır.
     **Mevzuat:** İş Sağlığı ve Güvenliği Kurulları Hakkında Yönetmelik,
     Madde 10

## İş Hijyeni → Asbest Maruziyeti (YENİ alt kategori)

156. **Soru:** İşyerinde asbestin çıkarılması, işlenmesi, satılması,
     ithalatı veya asbest içeren/ilave edilmiş ürünlerin üretimi/işlenmesi
     yapılmamaktadır (yasak kapsamındaki faaliyetler yürütülmemektedir).
     **Mevzuat:** Asbestle Çalışmalarda Sağlık ve Güvenlik Önlemleri
     Hakkında Yönetmelik, Madde 5

157. **Soru:** İşveren, asbest tozuna maruziyet riski bulunan çalışmalarda,
     asbestin türü/fiziksel özellikleri ve çalışanların maruziyet derecesini
     dikkate alarak özel bir risk değerlendirmesi yapmakta ve bu
     değerlendirmede çalışan/temsilcilerinin görüşlerini almaktadır.
     **Mevzuat:** Asbestle Çalışmalarda Sağlık ve Güvenlik Önlemleri
     Hakkında Yönetmelik, Madde 6

158. **Soru:** İşveren; asbest içerebilecek malzemelerin söküm/yıkım/
     tamir/bakım/uzaklaştırma işlerine başlamadan önce inceleme yaparak
     gerekli tedbirleri almakta, bu işleri asbest söküm uzmanı nezaretinde
     asbest söküm çalışanına yaptırmakta, sınır değerin aşılabileceği
     işlerde uygun solunum koruyucusu/kişisel koruyucu donanım sağlamakta,
     uyarı levhaları koymakta, tozun yayılmasını önlemekte ve işe
     başlamadan önce çalışanları/temsilcilerini bilgilendirip görüşlerini
     almaktadır.
     **Mevzuat:** Asbestle Çalışmalarda Sağlık ve Güvenlik Önlemleri
     Hakkında Yönetmelik, Madde 7

159. **Soru:** Asbest söküm, yıkım, tamir, bakım ve uzaklaştırma işleri
     yalnızca asbest söküm uzmanı nezaretinde asbest söküm çalışanı
     tarafından yapılmaktadır.
     **Mevzuat:** Asbestle Çalışmalarda Sağlık ve Güvenlik Önlemleri
     Hakkında Yönetmelik, Madde 8

160. **Soru:** İşveren, bu Yönetmelik kapsamına giren çalışmalara
     başlamadan önce iş planı hazırlamakta ve işyerinin bağlı bulunduğu
     Çalışma ve İş Kurumu İl Müdürlüğüne iş planı ile birlikte bildirimde
     bulunmaktadır (işyeri bilgileri, asbest türü/miktarı, yapılacak
     işler, çalışan sayısı, işe başlama tarihi/tahmini süre, uzman/çalışan
     belgeleri dahil).
     **Mevzuat:** Asbestle Çalışmalarda Sağlık ve Güvenlik Önlemleri
     Hakkında Yönetmelik, Madde 9

161. **Soru:** Asbest söküm/yıkım/tamir/bakım/uzaklaştırma işlemleri
     tamamlandığında, işyerinde asbest tozuna maruziyet riskinin
     kalmadığını gösteren ve ölçüm sonuçlarını içeren belge akredite/
     yetkilendirilmiş laboratuvarca düzenlenmekte ve Çalışma ve İş Kurumu
     İl Müdürlüğüne teslim edilmektedir.
     **Mevzuat:** Asbestle Çalışmalarda Sağlık ve Güvenlik Önlemleri
     Hakkında Yönetmelik, Madde 9

162. **Soru:** Asbest ölçüm ve numune alma işlemleri akredite olmuş ve
     Genel Müdürlükçe yetkilendirilmiş laboratuvarlarca, çalışma
     ortamından düzenli olarak ve 8 saatlik vardiya bazında çalışanın
     kişisel maruziyetini gösterecek şekilde yapılmakta; numune alma
     yerleri belirlenirken çalışan/temsilcilerinin görüşleri alınmaktadır.
     **Mevzuat:** Asbestle Çalışmalarda Sağlık ve Güvenlik Önlemleri
     Hakkında Yönetmelik, Madde 10

163. **Soru:** İşveren, çalışanların maruz kaldığı havadaki asbest
     konsantrasyonunun sekiz saatlik zaman ağırlıklı ortalama değerinin
     (ZAOD-TWA) 0,1 lif/cm³'ü geçmemesini sağlamaktadır.
     **Mevzuat:** Asbestle Çalışmalarda Sağlık ve Güvenlik Önlemleri
     Hakkında Yönetmelik, Madde 11

164. **Soru:** Asbest tozu maruziyetinin en aza indirilmesi için; işler
     mümkün olan en az sayıda çalışanla yapılmakta, çalışma sistemi tozun
     yayılmasını önleyecek şekilde tasarlanmakta, ilgili yerler/ekipmanlar
     düzenli temizlenmekte, asbestli malzemeler sızdırmaz paketlerde
     taşınıp ayrı depolanmakta ve asbest içeren atıklar etiketlenip
     sızdırmaz paketlerde en kısa sürede uzaklaştırılmaktadır.
     **Mevzuat:** Asbestle Çalışmalarda Sağlık ve Güvenlik Önlemleri
     Hakkında Yönetmelik, Madde 12

165. **Soru:** Sınır değerin aşılması halinde nedenleri tespit edilerek
     derhal önlem alınmakta, önlemler alınıncaya kadar etkilenen alanda
     çalışma yapılmamakta, önlemlerin yeterliliği tekrar ölçümle
     doğrulanmakta ve solunum koruyucusuyla çalışma süresi önceden
     belirlenip aşılmamaktadır.
     **Mevzuat:** Asbestle Çalışmalarda Sağlık ve Güvenlik Önlemleri
     Hakkında Yönetmelik, Madde 13

166. **Soru:** Asbestle çalışılan alanlarda işaretleme/uyarı levhaları
     bulunmakta, yetkisiz kişilerin girişi önlenmekte, sigara içme ve
     yeme-içme alanları ayrılmakta; çalışanlara koruyucu giysi/solunum
     cihazı gibi kişisel koruyucu donanım verilmekte, bu donanımlar işyeri
     dışına çıkarılmamakta, ayrı muhafaza edilmekte, el-yüz yıkama/duş
     imkanı sağlanmakta ve bu önlemler çalışana mali yük getirmemektedir.
     **Mevzuat:** Asbestle Çalışmalarda Sağlık ve Güvenlik Önlemleri
     Hakkında Yönetmelik, Madde 14

167. **Soru:** İşveren gözetiminde asbest söküm uzmanınca çalışanlara ve
     temsilcilerine; sağlık riskleri, sınır değerler/ölçümler, hijyen
     kuralları, kişisel koruyucu donanım kullanımı ve alınan önlemler
     hakkında bilgi verilmekte; ölçüm sonuçları ve sınır değerin aşıldığı
     durumlar derhal bildirilmektedir.
     **Mevzuat:** Asbestle Çalışmalarda Sağlık ve Güvenlik Önlemleri
     Hakkında Yönetmelik, Madde 15

168. **Soru:** Asbestle çalışacak kişiler işe başlamadan önce işyeri
     hekimi tarafından muayene edilmekte, risk değerlendirmesi/ölçüm
     sonuçlarına göre akciğer radyografisi en çok 2 yılda bir
     tekrarlanmakta ve hekimin önerileri işverene bildirilmektedir.
     **Mevzuat:** Asbestle Çalışmalarda Sağlık ve Güvenlik Önlemleri
     Hakkında Yönetmelik, Madde 16

169. **Soru:** Asbestle çalışılan işyerlerinde işveren, asbest sökümünde
     görev alanların yaptıkları işleri/çalışma süresini/maruziyet düzeyini
     gösteren kayıtları tutmakta ve maruziyetin sona ermesinden sonra en
     az 40 yıl süreyle saklamaktadır.
     **Mevzuat:** Asbestle Çalışmalarda Sağlık ve Güvenlik Önlemleri
     Hakkında Yönetmelik, Madde 17

## Genel Yükümlülükler → Genel Özen Görevi

170. **Soru:** İşveren, işin durdurulması sebebiyle işsiz kalan
     çalışanlara ücretlerini ödemekle veya ücretlerinde bir düşüklük
     olmamak üzere meslek veya durumlarına göre başka bir iş vermekle
     yükümlüdür.
     **Mevzuat:** İşyerlerinde İşin Durdurulmasına Dair Yönetmelik,
     Madde 13

## İş Hijyeni → Ergonomik Riskler (YENİ alt kategori)

171. **Soru:** İşveren, risk değerlendirmesinde ekranlı araç kullanımından
     kaynaklanan görme, fiziksel sorunlar ve mental stresle ilgili
     riskleri dikkate alarak gerekli sağlık ve güvenlik önlemlerini
     almakta ve bu önlemlerin maliyetini çalışanlara yansıtmamaktadır.
     **Mevzuat:** Ekranlı Araçlarla Çalışmalarda Sağlık ve Güvenlik
     Önlemleri Hakkında Yönetmelik, Madde 5

172. **Soru:** İşveren, ekranlı araçlarla çalışacaklara işe başlamadan
     önce ve çalışma koşullarında önemli bir değişiklik olduğunda;
     riskler/korunma yolları, doğru oturuş, gözlerin korunması, uygun
     yazı karakteri/renk seçimi, göz/kas-iskelet sistemi dinlendirme
     alışkanlıkları ve ara dinlenme/egzersizleri kapsayan eğitim
     vermektedir.
     **Mevzuat:** Ekranlı Araçlarla Çalışmalarda Sağlık ve Güvenlik
     Önlemleri Hakkında Yönetmelik, Madde 6

173. **Soru:** İşveren, ekranlı araçlarla yapılan çalışmalardan kaynaklanan
     iş yükünü azaltmak amacıyla uygun bir çalışma planı yaparak
     operatörlerin periyodik ara vermesini veya dönüşümlü olarak başka
     işlerde çalışmasını sağlamaktadır.
     **Mevzuat:** Ekranlı Araçlarla Çalışmalarda Sağlık ve Güvenlik
     Önlemleri Hakkında Yönetmelik, Madde 7

174. **Soru:** İşveren, ekranlı araçlarla çalışmaya ilişkin konularda
     çalışanların ve temsilcilerinin görüş ve önerilerini almakta ve
     katılımlarını sağlamaktadır.
     **Mevzuat:** Ekranlı Araçlarla Çalışmalarda Sağlık ve Güvenlik
     Önlemleri Hakkında Yönetmelik, Madde 8

175. **Soru:** Ekranlı araçlarla çalışmaya başlamadan önce, işyeri
     hekimince belirlenecek düzenli aralıklarla ve görme zorluğu
     yaşandığında çalışanların göz muayeneleri yapılmakta; gerekiyorsa
     işe uygun araç-gereç (örn. gözlük) verilmektedir.
     **Mevzuat:** Ekranlı Araçlarla Çalışmalarda Sağlık ve Güvenlik
     Önlemleri Hakkında Yönetmelik, Madde 9

## Elektrik, Makine, Ekipman → İş Ekipmanı Güvenliği (YENİ alt kategori)

176. **Soru:** İşveren, işyerinde kullanılacak iş ekipmanının yapılacak
     işe uygun olması ve çalışanlara sağlık/güvenlik yönünden zarar
     vermemesi için gerekli tedbirleri almakta; ekipmanı seçerken
     işyerindeki özel çalışma şartları ve tehlikeleri göz önünde
     bulundurmakta, ekipman tamamen tehlikesiz değilse riski kabul
     edilebilir seviyeye indirecek önlemleri almaktadır.
     **Mevzuat:** İş Ekipmanlarının Kullanımında Sağlık ve Güvenlik
     Şartları Yönetmeliği, Madde 5

177. **Soru:** İşveren, iş ekipmanının Yönetmelik eklerinde belirtilen
     asgari gereklere ve güvenlik düzeyine uygun olmasını sağlamakta;
     kullanım süresince gerekli bakımını ve periyodik kontrollerini
     yaptırarak bu uygunluğu sürdürmektedir.
     **Mevzuat:** İş Ekipmanlarının Kullanımında Sağlık ve Güvenlik
     Şartları Yönetmeliği, Madde 6

178. **Soru:** İş ekipmanına önemli bakım ve onarım (konstrüksiyon/yük
     kolu/gövde değişimi, elektrik tesisatında esaslı değişiklik, proje
     değişikliği gerektiren tadilat vb.) yapılması durumunda, buna
     ilişkin asgari ilave tedbirler işveren tarafından alınmaktadır.
     **Mevzuat:** İş Ekipmanlarının Kullanımında Sağlık ve Güvenlik
     Şartları Yönetmeliği, Madde 6/A

179. **Soru:** İşveren; periyodik kontrole tabi iş ekipmanlarının
     kontrollerini (kurulum/montaj sonrası, önemli bakım-onarım sonrası,
     yer değişikliğinde vb.) periyodik kontrol yapmaya yetkili kişilere
     yaptırmakta, kontrol sonuçlarını ıslak imzalı veya güvenli elektronik
     imzalı şekilde kayıt altına alıp saklamakta ve periyodik kontrol
     hizmeti öncesinde İSG-KATİP üzerinden sözleşme düzenlemektedir.
     **Mevzuat:** İş Ekipmanlarının Kullanımında Sağlık ve Güvenlik
     Şartları Yönetmeliği, Madde 7

180. **Soru:** Özel risk taşıyan iş ekipmanı sadece o ekipmanı kullanmak
     üzere görevlendirilen kişilerce kullanılmakta; bu ekipmanların
     tamiri, tadili, kontrolü, bakımı ve hizmete alınması özel olarak
     görevlendirilen kişilerce yapılmaktadır.
     **Mevzuat:** İş Ekipmanlarının Kullanımında Sağlık ve Güvenlik
     Şartları Yönetmeliği, Madde 8

181. **Soru:** İş ekipmanı kullanımı sırasında çalışanların duruş
     pozisyonları, çalışma şekilleri ve ergonomi prensipleri işveren
     tarafından tam olarak dikkate alınmaktadır.
     **Mevzuat:** İş Ekipmanlarının Kullanımında Sağlık ve Güvenlik
     Şartları Yönetmeliği, Madde 9

182. **Soru:** İşveren, çalışanlara kullandıkları iş ekipmanına ilişkin
     yeterli bilgi ve (imalatçının Türkçe kullanım kılavuzuna dayalı)
     yazılı talimat vermekte; bu talimatı ekipmanla birlikte
     bulundurmakta ve ekipmandan etkilenebilecek diğer çalışanları da
     olası tehlikelerden haberdar etmektedir.
     **Mevzuat:** İş Ekipmanlarının Kullanımında Sağlık ve Güvenlik
     Şartları Yönetmeliği, Madde 10

183. **Soru:** İşveren, iş ekipmanını kullanmakla görevli çalışanlara
     kullanmadan önce risklere ve bunlardan kaçınma yollarına ilişkin
     eğitim vermekte; özel risk taşıyan ekipmanları kullanan/bakımını
     yapan çalışanlara ayrıca yeterli özel eğitim vermektedir.
     **Mevzuat:** İş Ekipmanlarının Kullanımında Sağlık ve Güvenlik
     Şartları Yönetmeliği, Madde 11

184. **Soru:** İşveren, iş ekipmanlarıyla ilgili konularda çalışanların
     veya temsilcilerinin görüşlerini almakta ve katılımlarını
     sağlamaktadır.
     **Mevzuat:** İş Ekipmanlarının Kullanımında Sağlık ve Güvenlik
     Şartları Yönetmeliği, Madde 12

## Acil Durum, Yangın, Patlama → Patlayıcı Ortam (YENİ alt kategori)

185. **Soru:** İşveren, patlamaların önlenmesi ve korunması için önce
     patlayıcı ortam oluşmasını önlemeyi, bu mümkün değilse ortamın
     tutuşmasını önlemeyi, bu da mümkün değilse patlamanın zararlı
     etkilerini azaltacak önlemleri (bu öncelik sırasıyla) almakta ve bu
     tedbirleri düzenli aralıklarla/önemli değişiklik sonrası gözden
     geçirmektedir.
     **Mevzuat:** Çalışanların Patlayıcı Ortamların Tehlikelerinden
     Korunması Hakkında Yönetmelik, Madde 5

186. **Soru:** İşveren, risk değerlendirmesinde patlayıcı ortamdan
     kaynaklanan özel riskleri (ortam oluşma ihtimali/kalıcılığı, statik
     elektrik dahil tutuşturucu kaynaklar, tesis/madde/proses
     etkileşimleri, olası patlama etkisinin büyüklüğü) de dikkate
     almaktadır.
     **Mevzuat:** Çalışanların Patlayıcı Ortamların Tehlikelerinden
     Korunması Hakkında Yönetmelik, Madde 6

187. **Soru:** İşveren, patlayıcı ortam oluşma ihtimali bulunan yerlerde
     güvenli çalışma şartlarını sağlamakta ve risk değerlendirmesi
     sonucuna göre bu alanlarda uygun teknik önlemler aldırıp gözetim
     altında tutulmasını sağlamaktadır.
     **Mevzuat:** Çalışanların Patlayıcı Ortamların Tehlikelerinden
     Korunması Hakkında Yönetmelik, Madde 7

188. **Soru:** Bir işyerinde birden fazla işverene ait çalışan bulunması
     halinde her işveren kendi kontrol alanından sorumlu olmakta; asıl
     işveren-alt işveren ilişkisinde asıl işveren koordinasyonu sağlayıp
     bunu Patlamadan Korunma Dokümanında belirtmekte; aynı alanı
     paylaşan işyerlerinde koordinasyon yönetim tarafından sağlanmaktadır.
     **Mevzuat:** Çalışanların Patlayıcı Ortamların Tehlikelerinden
     Korunması Hakkında Yönetmelik, Madde 8

189. **Soru:** İşveren, patlayıcı ortam oluşma ihtimali olan yerleri
     mevzuata uygun şekilde sınıflandırmakta, bu bölgelerde asgari
     gerekleri uygulamakta ve girişlerine gerekli uyarı işaretlerini
     yerleştirmektedir.
     **Mevzuat:** Çalışanların Patlayıcı Ortamların Tehlikelerinden
     Korunması Hakkında Yönetmelik, Madde 9

190. **Soru:** İşveren, patlama riskinin belirlenip değerlendirildiği,
     alınacak önlemlerin, sınıflandırılmış yerlerin ve ekipman
     uygunluğunun yer aldığı bir Patlamadan Korunma Dokümanını işe
     başlamadan önce hazırlamakta ve önemli değişiklik/genişleme/tadilat
     hallerinde güncellemektedir.
     **Mevzuat:** Çalışanların Patlayıcı Ortamların Tehlikelerinden
     Korunması Hakkında Yönetmelik, Madde 10

191. **Soru:** Patlayıcı ortam oluşma ihtimali bulunan işyerlerinde; eski
     iş ekipmanları asgari gerekleri karşılamakta, işyeri mevzuata uygun
     şekilde kurulmakta ve herhangi bir değişiklik/eklenti/tadilat
     halinde bu uyumun sürdürülmesi sağlanmaktadır.
     **Mevzuat:** Çalışanların Patlayıcı Ortamların Tehlikelerinden
     Korunması Hakkında Yönetmelik, Madde 11

## Genel Yükümlülükler → Eğitim

192. **Soru:** İşveren, çalışanların işe başlama eğitimlerini, temel
     eğitimlerini ve gerekli hallerde diğer eğitimlerini almasını
     sağlamaktadır.
     **Mevzuat:** Çalışanların İş Sağlığı ve Güvenliği Eğitimlerinin Usul
     ve Esasları Hakkında Yönetmelik, Madde 5

193. **Soru:** İşveren, çırak ve stajyerler dahil tüm çalışanların fiilen
     çalışmaya başlamadan önce işe başlama eğitimi almasını sağlamaktadır.
     **Mevzuat:** Çalışanların İş Sağlığı ve Güvenliği Eğitimlerinin Usul
     ve Esasları Hakkında Yönetmelik, Madde 7

194. **Soru:** Temel eğitimlerin tamamı, çalışan işe başladıktan sonra en
     kısa sürede ve her halükarda işe başlamadan itibaren en çok 3 ay
     içinde tamamlanmaktadır.
     **Mevzuat:** Çalışanların İş Sağlığı ve Güvenliği Eğitimlerinin Usul
     ve Esasları Hakkında Yönetmelik, Madde 8

195. **Soru:** Temel eğitim, Ek-1'de yer alan konuları asgari olarak
     içermektedir.
     **Mevzuat:** Çalışanların İş Sağlığı ve Güvenliği Eğitimlerinin Usul
     ve Esasları Hakkında Yönetmelik, Madde 9

196. **Soru:** Temel eğitimler; işyerinde görevli iş güvenliği uzmanı/
     işyeri hekimi veya mevzuatta sayılan yetkili kurum/kuruluşlar
     (eğiticinin uzmanlık alanı konulara uygun olacak şekilde) tarafından
     verilmektedir.
     **Mevzuat:** Çalışanların İş Sağlığı ve Güvenliği Eğitimlerinin Usul
     ve Esasları Hakkında Yönetmelik, Madde 10

197. **Soru:** İşveren, yıllık eğitim programını (konu, tarih, yer, süre,
     katılımcı, hedef/amaç) çalışan/temsilci görüşlerini alarak
     hazırlamakta, onaylamakta ve mevzuat/risk değişikliklerinde
     güncellemektedir.
     **Mevzuat:** Çalışanların İş Sağlığı ve Güvenliği Eğitimlerinin Usul
     ve Esasları Hakkında Yönetmelik, Madde 11

198. **Soru:** Temel eğitimler çalışanların kolayca anlayabileceği
     şekilde bireysel/grup halinde düzenlenmekte; tehlikeli ve çok
     tehlikeli sınıf işyerlerinde Ek-1'in dördüncü konu başlığı yüz yüze
     yöntemle verilmektedir.
     **Mevzuat:** Çalışanların İş Sağlığı ve Güvenliği Eğitimlerinin Usul
     ve Esasları Hakkında Yönetmelik, Madde 12

199. **Soru:** Temel eğitimler, işyeri tehlike sınıfına göre asgari
     sürelerde (az tehlikeli: 8, tehlikeli: 12, çok tehlikeli: 16 ders
     saati) verilmektedir.
     **Mevzuat:** Çalışanların İş Sağlığı ve Güvenliği Eğitimlerinin Usul
     ve Esasları Hakkında Yönetmelik, Madde 13

200. **Soru:** Temel eğitimler düzenli aralıklarla (çok tehlikeli: yılda
     bir, tehlikeli: 2 yılda bir, az tehlikeli: 3 yılda bir)
     tekrarlanmakta; çalışma yeri/iş/ekipman/teknoloji değişikliğinde bu
     aralıklar beklenmeden ilgili eğitim verilmektedir.
     **Mevzuat:** Çalışanların İş Sağlığı ve Güvenliği Eğitimlerinin Usul
     ve Esasları Hakkında Yönetmelik, Madde 14

201. **Soru:** İşveren, yüz yüze verilecek temel eğitimler için uygun/
     yeterli mekân, termal konfor/aydınlatma ve güncel eğitim araç-
     gereçlerini sağlamaktadır.
     **Mevzuat:** Çalışanların İş Sağlığı ve Güvenliği Eğitimlerinin Usul
     ve Esasları Hakkında Yönetmelik, Madde 15

202. **Soru:** Temel eğitim öncesi çalışanların bireysel seviye tespiti
     yapılmakta; eğitim sonunda ölçme-değerlendirme (sınav)
     uygulanmakta ve eğitimin etkinliği değerlendirilerek gerekirse
     program/eğitici değiştirilmekte veya eğitim tekrarlanmaktadır.
     **Mevzuat:** Çalışanların İş Sağlığı ve Güvenliği Eğitimlerinin Usul
     ve Esasları Hakkında Yönetmelik, Madde 16

203. **Soru:** Yüz yüze verilen temel eğitimlerde katılım; yer/tarih,
     katılımcı ve eğiticinin ad-soyad/imzası, eğitimin süresi ve konu
     başlıklarını içeren tutanaklarla kayıt altına alınmaktadır.
     **Mevzuat:** Çalışanların İş Sağlığı ve Güvenliği Eğitimlerinin Usul
     ve Esasları Hakkında Yönetmelik, Madde 17

204. **Soru:** Herhangi bir sebeple 6 aydan fazla işten uzak kalan
     çalışanlara, tekrar işe başlatılmadan önce bilgi yenileme eğitimi
     verilmektedir.
     **Mevzuat:** Çalışanların İş Sağlığı ve Güvenliği Eğitimlerinin Usul
     ve Esasları Hakkında Yönetmelik, Madde 18

205. **Soru:** İş kazası geçiren veya meslek hastalığına yakalanan
     çalışana işe dönüşünde, kazanın/hastalığın sebepleri ve güvenli
     çalışma yöntemleriyle ilgili ilave eğitim verilmektedir.
     **Mevzuat:** Çalışanların İş Sağlığı ve Güvenliği Eğitimlerinin Usul
     ve Esasları Hakkında Yönetmelik, Madde 19

206. **Soru:** Genç, yaşlı, engelli, gebe veya emziren çalışanlar gibi
     özel politika gerektiren gruplara özellikleri dikkate alınarak
     gerekli eğitimler verilmekte; engelliler için eğitim erişilebilirlik
     standartlarına uygun alternatif formatlarda sunulmaktadır.
     **Mevzuat:** Çalışanların İş Sağlığı ve Güvenliği Eğitimlerinin Usul
     ve Esasları Hakkında Yönetmelik, Madde 20

207. **Soru:** İşveren, bu Yönetmelik kapsamında verilen diğer
     eğitimlerin tamamını belgelendirip çalışanın özlük dosyasında
     saklanmasını sağlamaktadır.
     **Mevzuat:** Çalışanların İş Sağlığı ve Güvenliği Eğitimlerinin Usul
     ve Esasları Hakkında Yönetmelik, Madde 24

208. **Soru:** İşyeri değiştiren ama yaptığı iş değişmeyen ve önceki
     işyerinde temel eğitimini tamamlamış çalışana sadece Ek-1'in
     dördüncü konu başlığı eğitimi verilmekte; işveren bu çalışanın
     önceki eğitim belgelerini kontrol etmekte ve işe başlama eğitimi
     almasını sağlamaktadır.
     **Mevzuat:** Çalışanların İş Sağlığı ve Güvenliği Eğitimlerinin Usul
     ve Esasları Hakkında Yönetmelik, Madde 25

## Genel Yükümlülükler → Çırak ve Stajyer Çalışanlar

209. **Soru:** Çırak ve stajyerlerin eğitim ve bilgilendirilmelerinden
     uygulamalı eğitim aldıkları işyerinin işvereni sorumludur; işverenin
     kabulü halinde eğitim/öğretim kurumunda tamamlanan iş sağlığı ve
     güvenliği dersleri/kursları temel eğitim yerine geçer.
     **Mevzuat:** Çalışanların İş Sağlığı ve Güvenliği Eğitimlerinin Usul
     ve Esasları Hakkında Yönetmelik, Madde 21

## Teknik Güvenlik → Alt İşveren/Yüklenici

210. **Soru:** Asıl işveren-alt işveren ilişkisi bulunan işyerlerinde her
     işveren kendi çalışanlarının eğitiminden sorumludur; asıl işveren
     alt işverenin çalışan eğitimi belgelerini kontrol eder ve alt
     işverenin çalışanlarına işe başlamadan önce işyerine özgü risklere
     ilişkin bilgi verir.
     **Mevzuat:** Çalışanların İş Sağlığı ve Güvenliği Eğitimlerinin Usul
     ve Esasları Hakkında Yönetmelik, Madde 22

## Genel Yükümlülükler → Eğitim

211. **Soru:** Geçici iş ilişkisi kapsamında çalışan ödünç alan işveren,
     bu çalışana iş sağlığı ve güvenliği risklerine karşı gerekli
     eğitimin verilmesini sağlamaktadır.
     **Mevzuat:** Çalışanların İş Sağlığı ve Güvenliği Eğitimlerinin Usul
     ve Esasları Hakkında Yönetmelik, Madde 23

## İş Hijyeni → Biyolojik Risk Etmenleri (YENİ alt kategori)

212. **Soru:** İşveren, biyolojik etkenlere maruziyet riski bulunan
     işlerde çalışanın maruziyet türü/düzey/süresini belirleyerek risk
     değerlendirmesi yapmakta (birden fazla etken grubu varsa hepsini
     dikkate alarak), maruziyet koşullarını etkileyecek değişiklikte bu
     değerlendirmeyi yenilemektedir.
     **Mevzuat:** Biyolojik Etkenlere Maruziyet Risklerinin Önlenmesi
     Hakkında Yönetmelik, Madde 6

213. **Soru:** İşveren, yapılan işin özelliğine göre zararlı biyolojik
     etkenleri kullanmaktan kaçınmakta, mevcut bilgiler ışığında bunları
     sağlık için tehlikeli olmayan veya daha az tehlikeli olanlarla
     ikame etmektedir.
     **Mevzuat:** Biyolojik Etkenlere Maruziyet Risklerinin Önlenmesi
     Hakkında Yönetmelik, Madde 7

214. **Soru:** İşveren, biyolojik etkenlere maruziyeti önleyememesi
     halinde; çalışan sayısını asgaride tutmakta, teknik kontrol
     önlemleri ve toplu/kişisel koruma uygulamakta, hijyen tedbirleri
     almakta, biyolojik risk işareti/uyarı koymakta, kaza önleme planı
     hazırlamakta ve atıkların/etkenlerin güvenli taşınması-depolanmasını
     sağlamaktadır.
     **Mevzuat:** Biyolojik Etkenlere Maruziyet Risklerinin Önlenmesi
     Hakkında Yönetmelik, Madde 8

215. **Soru:** İşveren, biyolojik etkenin ortama yayılmasına ve ciddi
     enfeksiyon/hastalığa sebep olabilecek kaza veya olayı derhal
     Bakanlığa ve Sağlık Bakanlığına bildirmektedir.
     **Mevzuat:** Biyolojik Etkenlere Maruziyet Risklerinin Önlenmesi
     Hakkında Yönetmelik, Madde 9

216. **Soru:** İşveren, risk değerlendirmesi risk bulunduğunu
     gösteriyorsa Bakanlık talebi halinde ilgili bilgileri (risk
     sonuçları, maruz kalan çalışan sayısı, alınan tedbirler vb.) çalışma
     ve iş kurumu il müdürlüğüne vermekte; işletme faaliyeti sona
     erdiğinde maruz kalan çalışanların listesini ve tıbbi kayıtları
     teslim etmektedir.
     **Mevzuat:** Biyolojik Etkenlere Maruziyet Risklerinin Önlenmesi
     Hakkında Yönetmelik, Madde 9

217. **Soru:** İşveren; biyolojik etken bulaşma riski olan alanlarda
     yeme-içmeyi yasaklamakta, uygun koruyucu giysi ve yıkanma/tuvalet
     imkanı sağlamakta, kişisel koruyucu donanımı uygun şekilde muhafaza/
     temizlemekte, kirlenmiş giysileri ayrı tutup dekontaminasyonunu
     sağlamakta ve bu önlemlerin maliyetini çalışana yansıtmamaktadır.
     **Mevzuat:** Biyolojik Etkenlere Maruziyet Risklerinin Önlenmesi
     Hakkında Yönetmelik, Madde 10

218. **Soru:** İşveren, biyolojik etkenlerle çalışmaya başlamadan önce
     çalışanlara riskler, önlemler, hijyen gerekleri, kişisel koruyucu
     donanım kullanımı ve olay anında yapılması gerekenler konusunda
     eğitim vermekte; bu eğitimi yeni risklere göre güncellemekte/
     periyodik tekrarlamaktadır.
     **Mevzuat:** Biyolojik Etkenlere Maruziyet Risklerinin Önlenmesi
     Hakkında Yönetmelik, Madde 11

219. **Soru:** İşveren; biyolojik etkenlerle çalışmada ciddi kaza/olay
     durumunda veya grup 4 etkenlerle çalışmalarda yazılı talimat
     sağlayıp uyarıları görünür şekilde asmakta; ciddi enfeksiyon riski
     oluşturan kaza/olayı ve alınan önlemleri çalışanlara/temsilcilerine
     derhal bildirmektedir.
     **Mevzuat:** Biyolojik Etkenlere Maruziyet Risklerinin Önlenmesi
     Hakkında Yönetmelik, Madde 12

220. **Soru:** İşveren, grup 3 ve/veya grup 4 biyolojik etkenlere maruz
     kalan çalışanların listesini ve maruziyet/kaza kayıtlarını tutmakta,
     bunları maruziyet sona erdikten sonra en az 15 yıl (belirli kalıcı/
     gizli enfeksiyon risklerinde en az 40 yıl) saklamakta ve işyeri
     hekimi/iş güvenliği uzmanının bu listeye erişimini sağlamaktadır.
     **Mevzuat:** Biyolojik Etkenlere Maruziyet Risklerinin Önlenmesi
     Hakkında Yönetmelik, Madde 13

221. **Soru:** İşveren, bu Yönetmelikte belirtilen konularda çalışanların
     ve/veya temsilcilerinin görüşlerini almakta ve katılımlarını
     sağlamaktadır.
     **Mevzuat:** Biyolojik Etkenlere Maruziyet Risklerinin Önlenmesi
     Hakkında Yönetmelik, Madde 14

222. **Soru:** İşveren, grup 2/3/4 biyolojik etkenlerin ilk kez
     kullanımında işin başlamasından en az 30 gün önce çalışma ve iş
     kurumu il müdürlüğüne ön bildirimde bulunmakta; önemli
     değişikliklerde bildirimi yenilemektedir.
     **Mevzuat:** Biyolojik Etkenlere Maruziyet Risklerinin Önlenmesi
     Hakkında Yönetmelik, Madde 15

223. **Soru:** İşveren, biyolojik etkenlerle çalışan personeli işe
     başlamadan önce ve düzenli aralıklarla sağlık gözetimine tabi
     tutmakta; özel koruma gereken çalışanları risk değerlendirmesiyle
     belirlemekte ve bir çalışanda maruziyete bağlı enfeksiyon
     saptandığında benzer şekilde maruz kalan diğer çalışanları da sağlık
     gözetimine almaktadır.
     **Mevzuat:** Biyolojik Etkenlere Maruziyet Risklerinin Önlenmesi
     Hakkında Yönetmelik, Madde 16

224. **Soru:** Henüz bağışıklığı olmayan çalışanlar için gerektiğinde
     Sağlık Bakanlığı yetkili birimleriyle işbirliği içinde uygun aşılar
     yapılmaktadır.
     **Mevzuat:** Biyolojik Etkenlere Maruziyet Risklerinin Önlenmesi
     Hakkında Yönetmelik, Madde 16/3

225. **Soru:** Sağlık gözetimi kişisel tıbbi kayıtları maruziyet sona
     erdikten sonra en az 15 yıl (özel hallerde 40 yıl) saklanmakta;
     biyolojik etkenlere mesleki maruziyet sonucu meydana gelen hastalık/
     ölüm vakaları Bakanlığa bildirilmektedir.
     **Mevzuat:** Biyolojik Etkenlere Maruziyet Risklerinin Önlenmesi
     Hakkında Yönetmelik, Madde 16

226. **Soru:** Tanı laboratuvarları dışında insan sağlığı/veterinerlik
     hizmeti verilen işyerlerinde; uygun dekontaminasyon/dezenfeksiyon
     yöntemleri belirlenmekte, bulaşan atıklar risksiz şekilde
     işlenmekte ve grup 3/4 etkenle enfekte (şüpheli) izolasyon
     yerlerinde gerekli önlemler alınmaktadır.
     **Mevzuat:** Biyolojik Etkenlere Maruziyet Risklerinin Önlenmesi
     Hakkında Yönetmelik, Madde 17

227. **Soru:** Laboratuvar, hayvan barınağı veya grup 2/3/4 biyolojik
     etken kullanılan sanayi proseslerinde, etkenin risk derecesine
     uygun fiziksel koruma düzeyi (2/3/4) belirlenip gerekli önlemler
     uygulanmaktadır.
     **Mevzuat:** Biyolojik Etkenlere Maruziyet Risklerinin Önlenmesi
     Hakkında Yönetmelik, Madde 18

## Acil Durum, Yangın, Patlama → Tahliye

228. **Soru:** İşveren; muhtemel acil durumları önceden belirlemekte,
     önleyici/sınırlandırıcı tedbirler almakta, gerekli ölçüm/
     değerlendirmeleri yapmakta, acil durum planı hazırlayıp tatbikat
     yaptırmakta, yeterli sayıda eğitimli personel görevlendirmekte, dış
     kuruluşlarla irtibat sağlamakta, enerji kaynaklarının güvenli devre
     dışı bırakılmasını düzenlemekte ve alt işveren çalışanları/
     ziyaretçiler/katılımcıları acil durumlar ve tahliye hakkında
     bilgilendirmektedir.
     **Mevzuat:** İşyerlerinde Acil Durumlar Hakkında Yönetmelik, Madde 5

229. **Soru:** İşveren, çalışanların ciddi/yakın bir tehlike ile
     karşılaşıp amirine hemen haber veremedikleri durumlarda bilgi ve
     teknik donanımları çerçevesinde müdahale edebilmelerine imkân
     sağlamakta ve ihmal/dikkatsizlik olmadıkça bu müdahaleden dolayı
     çalışanı sorumlu tutmamaktadır.
     **Mevzuat:** İşyerlerinde Acil Durumlar Hakkında Yönetmelik, Madde 6/2

230. **Soru:** Acil durum planı; acil durumların belirlenmesi, önleyici/
     sınırlandırıcı tedbirlerin alınması, görevli kişilerin belirlenmesi,
     müdahale/tahliye yöntemlerinin oluşturulması, dokümantasyon,
     tatbikat ve yenileme aşamaları izlenerek hazırlanmaktadır.
     **Mevzuat:** İşyerlerinde Acil Durumlar Hakkında Yönetmelik, Madde 7

231. **Soru:** İşyerinde meydana gelebilecek acil durumlar, risk
     değerlendirmesi sonuçları ile yangın/patlama, tehlikeli madde
     yayılımı/zehirlenme/salgın, doğal afet ve sabotaj ihtimalleri
     dikkate alınarak belirlenmektedir.
     **Mevzuat:** İşyerlerinde Acil Durumlar Hakkında Yönetmelik, Madde 8

232. **Soru:** Belirlenen acil durumların zararlarını önlemek/
     sınırlandırmak için toplu korumayı esas alan tedbirler alınmakta,
     gerektiğinde ölçüm/değerlendirme yapılmaktadır.
     **Mevzuat:** İşyerlerinde Acil Durumlar Hakkında Yönetmelik, Madde 9

233. **Soru:** İşveren, acil durumlarda uygulanacak uyarı/arama/kurtarma/
     tahliye/haberleşme/ilk yardım/yangınla mücadele yöntemlerini yazılı
     hale getirmekte, tahliye sonrası sayım dahil kontrolleri yapmakta ve
     çalışanlara önceden tahliye talimatlarını vermektedir.
     **Mevzuat:** İşyerlerinde Acil Durumlar Hakkında Yönetmelik, Madde 10

234. **Soru:** Tahliye esnasında yaşlı, engelli, gebe çalışanlar ile
     kreşteki çocuklara refakat edilmesi için tedbirler alınmaktadır.
     **Mevzuat:** İşyerlerinde Acil Durumlar Hakkında Yönetmelik, Madde 10/4

235. **Soru:** İşveren; söndürme, kurtarma, koruma ve ilk yardım
     ekiplerini işyeri tehlike sınıfına göre belirlenen çalışan sayısı
     eşiklerine (30/40/50) uygun şekilde oluşturmakta, ekip listesini
     görünür şekilde asmakta ve ayrılan destek elemanının yerine yeniden
     görevlendirme yapmaktadır.
     **Mevzuat:** İşyerlerinde Acil Durumlar Hakkında Yönetmelik, Madde 11

236. **Soru:** Acil durum planı; işyeri/işveren bilgileri, hazırlayanlar,
     tarih, belirlenen acil durumlar, alınan tedbirler, müdahale/tahliye
     yöntemleri ve tahliye planı/krokisini içerecek şekilde dokümante
     edilip onaylanmakta; tahliye planı işyerinin giriş/çıkış ve
     katlarında görünür şekilde asılmaktadır.
     **Mevzuat:** İşyerlerinde Acil Durumlar Hakkında Yönetmelik, Madde 12

237. **Soru:** İşyerinde acil durum planı periyodik olarak (en geç yılda
     bir) tatbik edilmekte, tatbikat formu hazırlanmakta ve sonuçlara
     göre plan gözden geçirilip gerekli düzeltmeler yapılmaktadır.
     **Mevzuat:** İşyerlerinde Acil Durumlar Hakkında Yönetmelik, Madde 13

238. **Soru:** Acil durum planı; belirlenmiş acil durumları etkileyecek
     değişiklik halinde veya tehlike sınıfına göre periyodik olarak (çok
     tehlikeli: 2 yıl, tehlikeli: 4 yıl, az tehlikeli: 6 yıl)
     yenilenmektedir.
     **Mevzuat:** İşyerlerinde Acil Durumlar Hakkında Yönetmelik, Madde 14

239. **Soru:** Tüm çalışanlar acil durum planları ve görevli destek
     elemanları hakkında bilgilendirilmekte; işe yeni alınan/geçici
     çalışanlara ilave bilgilendirme yapılmakta ve özel
     görevlendirilenlere (söndürme/kurtarma/koruma/ilk yardım ekipleri)
     belgelendirilmiş özel eğitim verilmektedir.
     **Mevzuat:** İşyerlerinde Acil Durumlar Hakkında Yönetmelik, Madde 15

240. **Soru:** Aynı çalışma alanını paylaşan birden fazla işveren acil
     durum planını ortaklaşa hazırlamakta; iş merkezi/sanayi sitesi gibi
     yerlerde koordinasyon yönetim tarafından yürütülmektedir.
     **Mevzuat:** İşyerlerinde Acil Durumlar Hakkında Yönetmelik, Madde 17

241. **Soru:** 30 iş günü veya daha kısa süren işlerde, işi doğrudan
     etkileyebilecek acil durumlar için özel görevlendirmeler yapılmakta
     ve çalışanlar bu görevliler/acil durumlar hakkında
     bilgilendirilmektedir.
     **Mevzuat:** İşyerlerinde Acil Durumlar Hakkında Yönetmelik, Madde 19

## Acil Durum, Yangın, Patlama → Büyük Endüstriyel Kazalar

242. **Soru:** Güvenlik raporu hazırlanması gereken işyerlerinde,
     güvenlik raporu kapsamında hazırlanan dahili acil durum planı bu
     Yönetmelik kapsamındaki acil durum planı hazırlığında dikkate
     alınmaktadır.
     **Mevzuat:** İşyerlerinde Acil Durumlar Hakkında Yönetmelik, Madde 16

## Teknik Güvenlik → Alt İşveren/Yüklenici

243. **Soru:** Alt işveren bulunan işyerlerinde acil durum planının
     hazırlanmasından işyerinin bütünü için asıl işveren, kendi çalışma
     alanı ve işleriyle sınırlı olarak alt işverenler sorumludur.
     **Mevzuat:** İşyerlerinde Acil Durumlar Hakkında Yönetmelik, Madde 18

## Genel Yükümlülükler → Kişisel Koruyucu Donanım (KKD) (YENİ alt kategori)

244. **Soru:** Kişisel koruyucu donanım, risklerin toplu korunma (teknik
     önlem/iş organizasyonu) ile önlenemediği veya tam sınırlandırılamadığı
     durumlarda kullanılmakta; işveren toplu korunma tedbirlerine kişisel
     korunma tedbirlerine göre öncelik vermektedir.
     **Mevzuat:** Kişisel Koruyucu Donanımların İşyerlerinde Kullanılması
     Hakkında Yönetmelik, Madde 5

245. **Soru:** İşyerinde kullanılan kişisel koruyucu donanım; ilgili
     mevzuata uygun tasarlanmış/üretilmiş, işyeri koşullarına ve
     kullananın ergonomik gereksinimlerine uygun, gerektiğinde
     ayarlanabilir, CE işaretli ve Türkçe kullanım kılavuzlu olmakta;
     sadece amacına uygun kullanılmakta ve çalışanların kolayca
     erişebileceği yerlerde yeterli miktarda bulundurulmaktadır.
     **Mevzuat:** Kişisel Koruyucu Donanımların İşyerlerinde Kullanılması
     Hakkında Yönetmelik, Madde 6

246. **Soru:** Kişisel koruyucu donanımlar işveren tarafından ücretsiz
     verilmekte; bakım/onarım/periyodik kontrolleri yapılmakta, hijyenik
     şartlarda muhafaza edilmekte; işveren çalışanı bu donanımları hangi
     risklere karşı kullanacağı konusunda bilgilendirmekte ve uygulamalı
     eğitim verilmesini sağlamaktadır.
     **Mevzuat:** Kişisel Koruyucu Donanımların İşyerlerinde Kullanılması
     Hakkında Yönetmelik, Madde 6

247. **Soru:** İşveren, kişisel koruyucu donanım seçiminden önce diğer
     yöntemlerle önlenemeyen riskleri analiz etmekte, donanımın kendisinden
     kaynaklanabilecek riskleri de göz önünde bulundurarak değerlendirme
     yapmakta ve donanımın herhangi bir parçası değiştiğinde bu
     değerlendirmeyi yenilemektedir.
     **Mevzuat:** Kişisel Koruyucu Donanımların İşyerlerinde Kullanılması
     Hakkında Yönetmelik, Madde 7

248. **Soru:** İşveren, ilgili risk tablolarına göre riskleri
     değerlendirerek gerekli kişisel koruyucu donanımları sağlamakta ve
     çalışanların bunları uygun şekilde kullanması için gerekli tüm
     önlemleri almaktadır.
     **Mevzuat:** Kişisel Koruyucu Donanımların İşyerlerinde Kullanılması
     Hakkında Yönetmelik, Madde 8

249. **Soru:** İşveren, kişisel koruyucu donanım kullanımı esnasında
     alınması gereken sağlık ve güvenlik önlemleri hakkında çalışanlara
     ve temsilcilerine bilgi vermektedir.
     **Mevzuat:** Kişisel Koruyucu Donanımların İşyerlerinde Kullanılması
     Hakkında Yönetmelik, Madde 9

250. **Soru:** İşveren, bu Yönetmelik kapsamındaki konularda
     çalışanların/temsilcilerinin görüşünü almakta; özellikle
     kullanılması gereken kişisel koruyucu donanımların belirlenmesinde
     destek elemanları ve çalışan temsilcilerinin görüşünü önceden
     almaktadır.
     **Mevzuat:** Kişisel Koruyucu Donanımların İşyerlerinde Kullanılması
     Hakkında Yönetmelik, Madde 10

## Genel Yükümlülükler → Eğitim

251. **Soru:** İş yeri, hijyen eğitimi almasının zorunlu olduğu iş
     kollarında (gıda hizmeti, perakende satış, kişisel hizmetler vb.)
     çalışanlarının bu eğitimi aldığını ve belgeli olarak çalıştırıldığını
     belgeleyebiliyor mu?
     **Mevzuat:** Hijyen Eğitimi Yönetmeliği, Madde 5

252. **Soru:** Ek-1 çizelgede yer alan tehlikeli ve çok tehlikeli sınıftaki
     işlerde çalışacaklar, işe alınmadan önce mesleki eğitime tabi
     tutulmaktadır.
     **Mevzuat:** Tehlikeli ve Çok Tehlikeli Sınıfta Yer Alan İşlerde
     Çalıştırılacakların Mesleki Eğitimlerine Dair Yönetmelik, Madde 5

253. **Soru:** Ek-1 çizelgede yer alan işlerde fiilen çalıştırılanlar,
     yaptığı işe uygun bir mesleki eğitim belgesine (diploma, sertifika,
     yetki/yeterlilik belgesi vb.) sahiptir.
     **Mevzuat:** Tehlikeli ve Çok Tehlikeli Sınıfta Yer Alan İşlerde
     Çalıştırılacakların Mesleki Eğitimlerine Dair Yönetmelik, Madde 6/1

254. **Soru:** Bu Yönetmelik kapsamındaki işlerde çalıştırılanların mesleki
     eğitim belgelerinin bir örneği özlük dosyasında saklanmakta ve
     istenildiğinde yetkili memurlara gösterilmektedir.
     **Mevzuat:** Tehlikeli ve Çok Tehlikeli Sınıfta Yer Alan İşlerde
     Çalıştırılacakların Mesleki Eğitimlerine Dair Yönetmelik, Madde 7/2

## Genel Yükümlülükler → Genel İş Yeri Gereklilikleri

255. **Soru:** Ek'te sayılan sağlığa zararlı işlerde (kurşun, cam, cıva,
     çimento, kok/termik santral, çinko, bakır, alüminyum, demir-çelik,
     döküm, kaplamacılık, karpit, asit, akümülatör, kaynak, su verme,
     kauçuk, yeraltı işleri, radyoaktif maddeler, 85 dB üzeri gürültülü
     işler, sığ su altı basınçlı hava işleri, pnömokonyoz yapan tozlu
     işler, tarım ilaçları) çalışanlar günde azami 7,5 saat
     çalıştırılmaktadır.
     **Mevzuat:** Sağlık Kuralları Bakımından Günde Azami Yedi Buçuk Saat
     veya Daha Az Çalışılması Gereken İşler Hakkında Yönetmelik, Madde 4
     **Not:** İş Kanunu Madde 63 (soru 7) zaten "yer altı maden işlerinde
     günde 7,5/haftada 37,5 saat" diyor; bu maddenin "yeraltı işleri" alt
     bendiyle kısmen örtüşüyor, ancak bu madde çok daha geniş bir iş
     listesini (kurşun, cam, cıva, çimento vb.) kapsıyor.

256. **Soru:** Madde 4'tekinden daha riskli alt gruptaki işlerde (derin su
     altı dalış, cıva/kurşun izabe, karbon sülfür, insektisit) çalışanlar,
     işin türüne göre belirlenen daha kısa azami süreleri (4-7 saat,
     dalışta 0,5-7 saat) aşacak şekilde çalıştırılmamaktadır.
     **Mevzuat:** Sağlık Kuralları Bakımından Günde Azami Yedi Buçuk Saat
     veya Daha Az Çalışılması Gereken İşler Hakkında Yönetmelik, Madde 5

257. **Soru:** Madde 4 ve 5'te sayılan işlerde çalışanlar, bu maddelerde
     belirtilen günlük azami çalışma sürelerinden sonra başka herhangi bir
     işte çalıştırılmamaktadır.
     **Mevzuat:** Sağlık Kuralları Bakımından Günde Azami Yedi Buçuk Saat
     veya Daha Az Çalışılması Gereken İşler Hakkında Yönetmelik, Madde 6

258. **Soru:** Madde 4 ve 5'te sayılan işlerde fazla çalışma
     yaptırılmamaktadır.
     **Mevzuat:** Sağlık Kuralları Bakımından Günde Azami Yedi Buçuk Saat
     veya Daha Az Çalışılması Gereken İşler Hakkında Yönetmelik, Madde 7

259. **Soru:** Madde 4 ve 5'te sayılan işlerden herhangi biri işyerinde
     sürekli olarak yapılıyorsa, işveren bu işlerin çeşidi/niteliği,
     yapılma zamanı ve bu işlerde çalışanların (kadın/erkek ayrı ayrı)
     sayısını, işe başlamadan önce işin yürütüldüğü yerin bağlı olduğu
     Çalışma ve İş Kurumu İl Müdürlüğüne yazılı olarak bildirmektedir.
     **Mevzuat:** Sağlık Kuralları Bakımından Günde Azami Yedi Buçuk Saat
     veya Daha Az Çalışılması Gereken İşler Hakkında Yönetmelik, Madde 8

## Genel Yükümlülükler → İşyeri Bina ve Eklentileri (YENİ alt kategori)

260. **Soru:** İşyeri binaları ile bunlara yapılan her çeşit ek ve
     değişiklikler, yapılan işin özelliğine uygun nitelik ve yeterli
     sağlamlıkta inşa edilmiştir.
     **Mevzuat:** İşyeri Bina ve Eklentilerinde Alınacak Sağlık ve
     Güvenlik Önlemlerine İlişkin Yönetmelik, Madde 5/1-a (Ek-1/3)

261. **Soru:** Elektrik tesisatı, yangın veya patlama tehlikesi
     oluşturmayacak şekilde projelendirilip tesis edilmiş, bakımı/
     onarımı/kontrolü düzenli yapılıp gerekli kayıtlar tutulmaktadır;
     patlayıcı ortam oluşması muhtemel yerlerde elektrik tesisleri ilgili
     mevzuata (muhtemel patlayıcı ortamda kullanılan teçhizat
     yönetmeliği) uygun kurulmuştur.
     **Mevzuat:** İşyeri Bina ve Eklentilerinde Alınacak Sağlık ve
     Güvenlik Önlemlerine İlişkin Yönetmelik, Madde 5/1-a (Ek-1/4-7)

262. **Soru:** İşyerinin ana pano ve tali elektrik panolarında seçicilik
     ilkesine uygun kaçak akım rölesi (artık akım anahtarı) tesis
     edilmiştir.
     **Mevzuat:** İşyeri Bina ve Eklentilerinde Alınacak Sağlık ve
     Güvenlik Önlemlerine İlişkin Yönetmelik, Madde 5/1-a (Ek-1/8)

263. **Soru:** Parlayıcı/patlayıcı/tehlikeli madde üretilen, işlenen veya
     depolanan yerlerde ve yüksek bina/baca/direk gibi yüksek yapılarda
     yıldırıma karşı gerekli tedbirler alınmış ve tesisler kurulmuştur.
     **Mevzuat:** İşyeri Bina ve Eklentilerinde Alınacak Sağlık ve
     Güvenlik Önlemlerine İlişkin Yönetmelik, Madde 5/1-a (Ek-1/9)

264. **Soru:** İşyerindeki tüm acil çıkış yolları ve kapıları doğrudan
     dışarıya veya güvenli bir alana açılmakta, önlerinde engel
     bulunmamakta, kilitli/bağlı değildir; uygun şekilde işaretlenmiş
     olup elektrik kesilmesi halinde acil aydınlatma sistemi
     bulunmaktadır.
     **Mevzuat:** İşyeri Bina ve Eklentilerinde Alınacak Sağlık ve
     Güvenlik Önlemlerine İlişkin Yönetmelik, Madde 5/1-a (Ek-1/10)

265. **Soru:** İşyerinde yeterli ve etkili yangın söndürme ekipmanı,
     gerektiğinde yangın detektörü/alarm sistemi bulunmakta; bu
     ekipmanlar her zaman kullanıma hazır, periyodik bakımlı, görünür/
     erişilir yerlerde ve usulüne uygun işaretlenmiş durumdadır.
     **Mevzuat:** İşyeri Bina ve Eklentilerinde Alınacak Sağlık ve
     Güvenlik Önlemlerine İlişkin Yönetmelik, Madde 5/1-a (Ek-1/11-14)

266. **Soru:** Kapalı işyerlerinde çalışanların ihtiyaç duyacağı yeterli
     temiz hava sağlanmakta; gerektiğinde mekanik (cebri) havalandırma
     sistemi kurulmuş olup bu sistemin yıllık bakımı/filtre değişimi
     yetkili kişilere yaptırılmaktadır.
     **Mevzuat:** İşyeri Bina ve Eklentilerinde Alınacak Sağlık ve
     Güvenlik Önlemlerine İlişkin Yönetmelik, Madde 5/1-a (Ek-1/15-18)

267. **Soru:** İşyerinde termal konfor şartları (ortam sıcaklığı)
     çalışma şekline ve çalışanların harcadığı güce uygun olup; sürekli
     çok sıcak/soğuk ortamda çalışmanın zorunlu olduğu hallerde koruyucu
     tedbirler alınmaktadır.
     **Mevzuat:** İşyeri Bina ve Eklentilerinde Alınacak Sağlık ve
     Güvenlik Önlemlerine İlişkin Yönetmelik, Madde 5/1-a (Ek-1/19-21)

268. **Soru:** İşyerleri yeterli gün ışığı veya (gerektiğinde) uygun
     suni aydınlatmayla aydınlatılmakta; çalışma mahalleri ve geçiş
     yollarındaki aydınlatma kaza riski oluşturmayacak şekilde
     yerleştirilmiş, aydınlatmanın devre dışı kalmasının risk
     oluşturacağı yerlerde acil aydınlatma sistemi bulunmaktadır.
     **Mevzuat:** İşyeri Bina ve Eklentilerinde Alınacak Sağlık ve
     Güvenlik Önlemlerine İlişkin Yönetmelik, Madde 5/1-a (Ek-1/22-24)

269. **Soru:** İşyeri taban döşemeleri sağlam/kuru/düz/kaymaz olup
     tehlikeli eğim, çukur ve engel bulunmamakta; taban ve asma kat
     döşemeleri üzerlerine konulacak yük ve çalışan ağırlığına dayanıklı,
     hijyenik temizliğe elverişli malzemeden yapılmış; camlı bölmeler
     işaretlenmiş ve kırılmaya karşı korunmuş; tavan yüksekliği ve çatı
     yapısı uygun ve dayanıklıdır.
     **Mevzuat:** İşyeri Bina ve Eklentilerinde Alınacak Sağlık ve
     Güvenlik Önlemlerine İlişkin Yönetmelik, Madde 5/1-a (Ek-1/25-32)

270. **Soru:** İşyerindeki pencereler ve tavan pencereleri güvenli
     şekilde açılıp kapanabilmekte, ayarlanabilmekte ve güvenli bir
     şekilde temizlenebilmektedir.
     **Mevzuat:** İşyeri Bina ve Eklentilerinde Alınacak Sağlık ve
     Güvenlik Önlemlerine İlişkin Yönetmelik, Madde 5/1-a (Ek-1/33-34)

271. **Soru:** Kapı ve girişler, bulundukları alanın kullanım amacına
     uygun yer/sayı/boyut/malzemede olup; saydam kapılar işaretlenmiş/
     korunmuş, raylı/yukarı açılan kapılarda güvenlik sistemi
     bulunmakta, kaçış yollarındaki kapılar yardım almaksızın her zaman
     içeriden açılabilmektedir.
     **Mevzuat:** İşyeri Bina ve Eklentilerinde Alınacak Sağlık ve
     Güvenlik Önlemlerine İlişkin Yönetmelik, Madde 5/1-a (Ek-1/35)

272. **Soru:** Merdiven, koridor, geçiş yolu, yükleme yeri ve rampa
     dahil tüm yollar güvenli boyut/şekilde olup engebeli/çukur/kaygan
     değildir; tehlikeli alanlara görevli olmayan kişilerin girişi
     engellenmiş, yüksekten düşme riski olan yerlerde uygun korkuluklar
     bulunmaktadır.
     **Mevzuat:** İşyeri Bina ve Eklentilerinde Alınacak Sağlık ve
     Güvenlik Önlemlerine İlişkin Yönetmelik, Madde 5/1-a (Ek-1/36-40)

273. **Soru:** İşyerindeki merdivenler ateşe dayanıklı yanmaz
     malzemeden, sağlam, yeterli genişlik/eğimde ve düşmelere karşı
     korkuluklarla çevrilidir.
     **Mevzuat:** İşyeri Bina ve Eklentilerinde Alınacak Sağlık ve
     Güvenlik Önlemlerine İlişkin Yönetmelik, Madde 5/1-a (Ek-1/41)

274. **Soru:** Yürüyen merdiven ve bantlar güvenli şekilde çalışmakta
     olup kolay fark edilir/ulaşılır acil durdurma tertibatına sahiptir.
     **Mevzuat:** İşyeri Bina ve Eklentilerinde Alınacak Sağlık ve
     Güvenlik Önlemlerine İlişkin Yönetmelik, Madde 5/1-a (Ek-1/42)

275. **Soru:** Yükleme yerleri ve rampaları taşınacak yükün boyutuna
     uygun, çalışanların düşmesini önleyecek şekilde güvenli olup en az
     bir çıkış yerine sahiptir.
     **Mevzuat:** İşyeri Bina ve Eklentilerinde Alınacak Sağlık ve
     Güvenlik Önlemlerine İlişkin Yönetmelik, Madde 5/1-a (Ek-1/43)

276. **Soru:** Çalışma yerinin taban alanı, yüksekliği ve hava hacmi,
     çalışanların güvenle ve rahat çalışabilmesi için yeterli olup
     çalışanın serbestçe hareket edebileceği alan bulunmaktadır.
     **Mevzuat:** İşyeri Bina ve Eklentilerinde Alınacak Sağlık ve
     Güvenlik Önlemlerine İlişkin Yönetmelik, Madde 5/1-a (Ek-1/44-45)

277. **Soru:** Gerekli hallerde veya 10 ve daha fazla çalışanın
     bulunduğu işyerlerinde uygun bir dinlenme yeri sağlanmaktadır.
     **Mevzuat:** İşyeri Bina ve Eklentilerinde Alınacak Sağlık ve
     Güvenlik Önlemlerine İlişkin Yönetmelik, Madde 5/1-a (Ek-1/46-47)

278. **Soru:** İşyerinde yemek yemek durumunda olan çalışanlar için
     uygun termal konfor ve hijyen şartlarını haiz bir yemek yeme yeri
     sağlanmaktadır.
     **Mevzuat:** İşyeri Bina ve Eklentilerinde Alınacak Sağlık ve
     Güvenlik Önlemlerine İlişkin Yönetmelik, Madde 5/1-a (Ek-1/48)

279. **Soru:** Gebe ve emziren kadın çalışanların uzanarak
     dinlenebilecekleri uygun şartlar sağlanmaktadır.
     **Mevzuat:** İşyeri Bina ve Eklentilerinde Alınacak Sağlık ve
     Güvenlik Önlemlerine İlişkin Yönetmelik, Madde 5/1-a (Ek-1/49)
     **Not:** Mevcut "Gebe/emziren" alt kategorisindeki soru 13 (İş
     Kanunu Madde 74) analık izni süresini düzenliyor; bu madde fiziksel
     dinlenme yeri şartını düzenliyor — mükerrer değil, farklı açı.

280. **Soru:** İş elbisesi giyme zorunluluğu olan çalışanlar için kadın
     ve erkek çalışanlara ayrı ayrı, uygun şartları haiz soyunma yerleri
     ve her çalışan için kilitli elbise dolabı sağlanmaktadır.
     **Mevzuat:** İşyeri Bina ve Eklentilerinde Alınacak Sağlık ve
     Güvenlik Önlemlerine İlişkin Yönetmelik, Madde 5/1-a (Ek-1/50-51)

281. **Soru:** Gerektiğinde kadın ve erkek çalışanlar için ayrı ayrı,
     sıcak ve soğuk akarsuyu bulunan uygun yıkanma yerleri/duşlar tesis
     edilmiş olup her zaman kullanıma hazır durumdadır.
     **Mevzuat:** İşyeri Bina ve Eklentilerinde Alınacak Sağlık ve
     Güvenlik Önlemlerine İlişkin Yönetmelik, Madde 5/1-a (Ek-1/52-54)

282. **Soru:** Çalışma yerlerine, dinlenme/soyunma/duş yerlerine yakın
     konumda, kadın ve erkek çalışanlar için ayrı ayrı yeterli sayıda
     tuvalet ve lavabo bulunmakta, gerekli temizlik malzemeleri
     sağlanmaktadır.
     **Mevzuat:** İşyeri Bina ve Eklentilerinde Alınacak Sağlık ve
     Güvenlik Önlemlerine İlişkin Yönetmelik, Madde 5/1-a (Ek-1/55-56)

283. **Soru:** İşyerindeki atık ve birikinti suların aktığı/toplandığı
     yerler, uygun bir kanalizasyon veya fosseptiğe bağlanmış ve
     kapatılmıştır.
     **Mevzuat:** İşyeri Bina ve Eklentilerinde Alınacak Sağlık ve
     Güvenlik Önlemlerine İlişkin Yönetmelik, Madde 5/1-a (Ek-1/57)

284. **Soru:** İşyerinin büyüklüğü, yapılan işin niteliği ve kaza
     riskine göre bir veya daha fazla ilkyardım/acil müdahale odası
     bulunmakta, yeterli ilkyardım malzemesi ve ekipmanıyla teçhiz
     edilmiş olup usulüne uygun işaretlenmiştir.
     **Mevzuat:** İşyeri Bina ve Eklentilerinde Alınacak Sağlık ve
     Güvenlik Önlemlerine İlişkin Yönetmelik, Madde 5/1-a (Ek-1/58-60)

285. **Soru:** Engelli çalışanların bulunduğu işyerlerinde, bu
     çalışanların doğrudan çalıştığı yerler ve kullandıkları kapı/geçiş
     yeri/merdiven/servis aracı/duş/lavabo/tuvalet ilgili standartlara
     uygun şekilde düzenlenmiştir.
     **Mevzuat:** İşyeri Bina ve Eklentilerinde Alınacak Sağlık ve
     Güvenlik Önlemlerine İlişkin Yönetmelik, Madde 5/1-a (Ek-1/61)
     **Not:** Mevcut "Engelli Çalışanlar" alt kategorisindeki soru 6 (İş
     Kanunu Madde 30) engelli çalıştırma kotasını düzenliyor; bu madde
     fiziksel erişilebilirlik şartını düzenliyor — mükerrer değil, farklı
     açı.

286. **Soru:** Açık çalışma alanları yaya/araç trafiğinin güvenli
     yapılmasını sağlayacak şekilde düzenlenmiş, gün ışığının yetersiz
     olduğu hallerde uygun aydınlatılmış olup çalışanlar olumsuz hava
     şartlarına, düşme/kaymaya ve zararlı dış etkilere karşı
     korunmaktadır.
     **Mevzuat:** İşyeri Bina ve Eklentilerinde Alınacak Sağlık ve
     Güvenlik Önlemlerine İlişkin Yönetmelik, Madde 5/1-a (Ek-1/62-65)

287. **Soru:** Barınma amaçlı kullanılan tesisler yanıcı olmayan
     malzemeden inşa edilmiş, ısıtmada açık ateş/mangal kullanılmamakta,
     yeterli tuvalet/lavabo/duş ve hijyenik şartlar sağlanmaktadır.
     **Mevzuat:** İşyeri Bina ve Eklentilerinde Alınacak Sağlık ve
     Güvenlik Önlemlerine İlişkin Yönetmelik, Madde 5/1-a (Ek-1/66)

288. **Soru:** Çalışan konutları sağlık ve teknik şartlara uygun inşa
     edilmiş olup aileleriyle oturan çalışanlar için ayrı, bekar
     çalışanlar için cinsiyete göre ayrı bölümler halinde
     düzenlenmiştir.
     **Mevzuat:** İşyeri Bina ve Eklentilerinde Alınacak Sağlık ve
     Güvenlik Önlemlerine İlişkin Yönetmelik, Madde 5/1-a (Ek-1/67)

289. **Soru:** İşyeri bina ve eklentileri ile bulunan ekipman/araç-
     gereçlerin düzenli teknik bakımı yapılmakta, sağlığı/güvenliği
     olumsuz etkileyebilecek aksaklıklar en kısa sürede giderilmekte ve
     gerekli kayıtlar tutulmaktadır.
     **Mevzuat:** İşyeri Bina ve Eklentilerinde Alınacak Sağlık ve
     Güvenlik Önlemlerine İlişkin Yönetmelik, Madde 5/1-c

290. **Soru:** İşyeri bina ve eklentileri ile ekipman/araç-gereçlerin,
     özellikle havalandırma sistemlerinin, uygun hijyen şartlarını
     sağlayacak şekilde düzenli temizliği yapılmakta ve gerekli kayıtlar
     tutulmaktadır.
     **Mevzuat:** İşyeri Bina ve Eklentilerinde Alınacak Sağlık ve
     Güvenlik Önlemlerine İlişkin Yönetmelik, Madde 5/1-ç

291. **Soru:** İşyerinin düzeni, sağlık ve güvenlik risklerine yol
     açmayacak ve çalışanların işlerini rahatça yapabileceği şekilde
     sağlanmaktadır.
     **Mevzuat:** İşyeri Bina ve Eklentilerinde Alınacak Sağlık ve
     Güvenlik Önlemlerine İlişkin Yönetmelik, Madde 5/1-f

## Genel Yükümlülükler → İSG Profesyonelleri / Hizmetleri

292. **Soru:** İşverence işyeri hekimi olarak görevlendirilenler, geçerli
     işyeri hekimliği belgesine sahiptir.
     **Mevzuat:** İşyeri Hekimi ve Diğer Sağlık Personelinin Görev,
     Yetki, Sorumluluk ve Eğitimleri Hakkında Yönetmelik, Madde 7/1
     **Not:** Soru 121 (İş Sağlığı ve Güvenliği Hizmetleri Yönetmeliği,
     Madde 5/7) tüm İSG personeli/OSGB için genel belge doğrulama
     yükümlülüğü getiriyor; bu soru hekime özel, kendi yönetmeliğinden —
     farklı kaynak, mükerrer değil.

293. **Soru:** İşyeri hekimi görevlendirmesinde, hesaplanan çalışma
     süresi bölünerek birden fazla hekime verilmemekte; vardiyalı
     çalışma yapılan işyerlerinde vardiyalara uygun şekilde görevlendirme
     yapılmaktadır.
     **Mevzuat:** İşyeri Hekimi ve Diğer Sağlık Personelinin Görev,
     Yetki, Sorumluluk ve Eğitimleri Hakkında Yönetmelik, Madde 7/2-3
     **Not:** Soru 116 aynı ilkeyi iş güvenliği uzmanı için düzenliyor —
     farklı personel/mevzuat, mükerrer değil.

294. **Soru:** İşveren, işyeri hekiminden işyerinin tehlike sınıfına göre
     belirlenen asgari süre kadar hizmet almaktadır (az tehlikeli: ayda
     çalışan başına en az 5 dakika, tehlikeli: 10 dakika, çok tehlikeli:
     15 dakika); az tehlikeli sınıfta 2000, tehlikeli sınıfta 1000, çok
     tehlikeli sınıfta 750 ve üzeri çalışanı olan işyerlerinde bu sayılara
     karşılık tam süreli çalışacak işyeri hekimi görevlendirilmektedir.
     **Mevzuat:** İşyeri Hekimi ve Diğer Sağlık Personelinin Görev,
     Yetki, Sorumluluk ve Eğitimleri Hakkında Yönetmelik, Madde 12
     **Not:** Soru 117 aynı ilkeyi iş güvenliği uzmanı için (farklı
     sayılar/mevzuat) düzenliyor — mükerrer değil.

295. **Soru:** İşverence diğer sağlık personeli olarak görevlendirilenler
     geçerli diğer sağlık personeli belgesine sahiptir (tam süreli
     işyeri hekimi görevlendirilen işyerlerinde bu şart aranmaz).
     **Mevzuat:** İşyeri Hekimi ve Diğer Sağlık Personelinin Görev,
     Yetki, Sorumluluk ve Eğitimleri Hakkında Yönetmelik, Madde 14/1-2

296. **Soru:** Diğer sağlık personeli görevlendirmesinde, hesaplanan
     çalışma süresi bölünerek birden fazla kişiye verilmemekte; vardiyalı
     çalışma yapılan işyerlerinde vardiyalara uygun şekilde görevlendirme
     yapılmaktadır.
     **Mevzuat:** İşyeri Hekimi ve Diğer Sağlık Personelinin Görev,
     Yetki, Sorumluluk ve Eğitimleri Hakkında Yönetmelik, Madde 14/3-4

297. **Soru:** İşveren, çok tehlikeli sınıfta yer alan işyerlerinde
     çalışan sayısına göre diğer sağlık personelinden asgari süre kadar
     hizmet almaktadır (10-49 çalışan: ayda çalışan başına en az 10
     dakika, 50-249 çalışan: 15 dakika, 250 ve üzeri çalışan: 20 dakika);
     tam süreli işyeri hekimi görevlendirilen işyerlerinde bu şart
     aranmaz.
     **Mevzuat:** İşyeri Hekimi ve Diğer Sağlık Personelinin Görev,
     Yetki, Sorumluluk ve Eğitimleri Hakkında Yönetmelik, Madde 19

298. **Soru:** Tam süreli görevlendirilen işyeri hekiminin mesleki
     gelişim amaçlı eğitim/seminer/panel katılımları için yılda toplam 5
     iş gününe kadar süre çalışma süresinden sayılmakta, bu süreler
     nedeniyle hekimin ücretinden kesinti yapılmamaktadır.
     **Mevzuat:** İşyeri Hekimi ve Diğer Sağlık Personelinin Görev,
     Yetki, Sorumluluk ve Eğitimleri Hakkında Yönetmelik, Madde 10/2
     **Not:** Soru 118 aynı ilkeyi iş güvenliği uzmanı için düzenliyor —
     mükerrer değil.

299. **Soru:** Tam süreli görevlendirilen diğer sağlık personelinin
     mesleki gelişim amaçlı eğitim/seminer/panel katılımları için yılda
     toplam 5 iş gününe kadar süre çalışma süresinden sayılmakta, bu
     süreler nedeniyle ücretinden kesinti yapılmamaktadır.
     **Mevzuat:** İşyeri Hekimi ve Diğer Sağlık Personelinin Görev,
     Yetki, Sorumluluk ve Eğitimleri Hakkında Yönetmelik, Madde 17/2

300. **Soru:** İşveren, işyeri hekimi veya diğer sağlık personeli ile
     yapılan sözleşmelere, bu kişilerin mesleki bağımsız çalışmasını
     kısıtlayabilecek şartlar koymamakta; bu kişilerin hak ve yetkileri
     görevlerini yerine getirmeleri nedeniyle kısıtlanmamaktadır.
     **Mevzuat:** İşyeri Hekimi ve Diğer Sağlık Personelinin Görev,
     Yetki, Sorumluluk ve Eğitimleri Hakkında Yönetmelik, Madde 42/2-3

## Genel Yükümlülükler → Bilgilendirme ve Katılım

301. **Soru:** İşveren, çalışanları ve çalışan temsilcilerini, işyeri bina
     ve eklentilerinde bulunan sağlık ve güvenlikle ilgili riskler ve
     alınan tedbirler hakkında bilgilendirmektedir.
     **Mevzuat:** İşyeri Bina ve Eklentilerinde Alınacak Sağlık ve
     Güvenlik Önlemlerine İlişkin Yönetmelik, Madde 6
     **Not (geriye dönük düzeltme):** Bu madde, İşyeri Bina ve Eklentileri
     Yönetmeliği ilk incelendiğinde (soru 260-291) gözden kaçmış, ne aday
     listesine ne skip gerekçesine yazılmış. Şimdi düzeltiliyor.

302. **Soru:** İşveren, işyeri bina ve eklentileriyle ilgili konularda
     çalışanların veya çalışan temsilcilerinin görüşlerini almakta ve
     katılımlarını sağlamaktadır.
     **Mevzuat:** İşyeri Bina ve Eklentilerinde Alınacak Sağlık ve
     Güvenlik Önlemlerine İlişkin Yönetmelik, Madde 7
     **Not (geriye dönük düzeltme):** Soru 301 ile aynı gözden kaçma
     hatasının parçası, şimdi düzeltiliyor.

## İş Hijyeni → Ergonomik Riskler

303. **Soru:** İşveren, işyerinde yüklerin elle taşınmasına gerek
     duyulmayacak şekilde iş organizasyonu yapmakta ve yükün mekanik
     sistemler gibi uygun yöntemlerle taşınmasını sağlamaktadır.
     **Mevzuat:** Elle Taşıma İşleri Yönetmeliği, Madde 5/1-a

304. **Soru:** Elle taşımanın kaçınılmaz olduğu durumlarda işveren, işi
     sağlık ve güvenlik şartlarına uygun düzenlemekte; Ek-1'deki
     hususları ve yük özelliklerini değerlendirmekte; çalışanların sırt/
     bel incinme riskini önlemek veya azaltmak için gerekli önlemleri
     almaktadır.
     **Mevzuat:** Elle Taşıma İşleri Yönetmeliği, Madde 6
     **Not:** Madde 5/1-b bu maddenin özeti niteliğinde olduğu için ayrı
     soru yapılmadı.

305. **Soru:** Özel politika gerektiren grupların (gebe, 18 yaşından
     küçükler, kronik hastalığı olanlar vb.) elle taşıma işlerinde
     karşılaşabileceği tehlikelere karşı Ek-2'deki hususlar dikkate
     alınarak korunması sağlanmaktadır.
     **Mevzuat:** Elle Taşıma İşleri Yönetmeliği, Madde 7

## Genel Yükümlülükler → Eğitim

306. **Soru:** İşveren, elle taşıma işlerinde çalışanlara ve/veya
     temsilcilerine; alınan tedbirler, taşınan yükün özellikleri/ağırlığı
     ve yüklerin doğru taşınma yöntemi ile yanlış taşınması halinde
     ortaya çıkabilecek riskler konusunda bilgilendirme ve eğitim
     vermektedir.
     **Mevzuat:** Elle Taşıma İşleri Yönetmeliği, Madde 8

## Genel Yükümlülükler → Bilgilendirme ve Katılım

307. **Soru:** İşveren, elle taşıma işleriyle ilgili konularda
     çalışanların veya temsilcilerinin görüşlerini almakta ve
     katılımlarını sağlamaktadır.
     **Mevzuat:** Elle Taşıma İşleri Yönetmeliği, Madde 9

## Genel Yükümlülükler → Gece Vardiyasında Çalışanlar

308. **Soru:** Kadın çalışanlar gece postalarında 7,5 saatten fazla
     çalıştırılmamaktadır (turizm, özel güvenlik, sağlık hizmeti işleri
     ve bunların alt işverenlerinde kadının yazılı onayıyla istisna
     mümkündür).
     **Mevzuat:** Kadın Çalışanların Gece Postalarında Çalıştırılma
     Koşulları Hakkında Yönetmelik, Madde 5

309. **Soru:** Belediye sınırları dışındaki işyerleri ile toplu taşımayla
     ulaşım zorluğu olan işyerlerinde işveren, gece postasında çalışan
     kadın çalışanları uygun araçla ikametgahlarına en yakın merkezden
     işyerine götürüp getirmektedir.
     **Mevzuat:** Kadın Çalışanların Gece Postalarında Çalıştırılma
     Koşulları Hakkında Yönetmelik, Madde 6

310. **Soru:** Kadın çalışanlar gece postasında çalıştırılmaya
     başlamadan önce, bunda sakınca olmadığına dair işyeri hekiminden
     sağlık raporu alınmaktadır.
     **Mevzuat:** Kadın Çalışanların Gece Postalarında Çalıştırılma
     Koşulları Hakkında Yönetmelik, Madde 7/1

311. **Soru:** Gece postasında çalıştırılan kadın çalışanların, işin
     devamı süresince işyeri hekimince belirlenen düzenli aralıklarla
     sağlık muayeneleri yapılmaktadır.
     **Mevzuat:** Kadın Çalışanların Gece Postalarında Çalıştırılma
     Koşulları Hakkında Yönetmelik, Madde 7/2

312. **Soru:** Kadın çalışanın eşi de postalı çalışıyorsa, kadının
     isteği üzerine gece çalışması eşinin gece postasına rastlamayacak
     şekilde düzenlenmekte; aynı işyerinde çalışan eşlerin aynı gece
     postasında çalışma istekleri imkan dahilinde karşılanmaktadır.
     **Mevzuat:** Kadın Çalışanların Gece Postalarında Çalıştırılma
     Koşulları Hakkında Yönetmelik, Madde 8

313. **Soru:** İşveren, gece postasında çalıştırdığı kadın çalışanların
     isim listesini, iş müfettişi denetimlerinde göstermek üzere
     işyerinde saklamaktadır.
     **Mevzuat:** Kadın Çalışanların Gece Postalarında Çalıştırılma
     Koşulları Hakkında Yönetmelik, Madde 10

## Genel Yükümlülükler → Gebe, yeni doğum yapmış ve emziren kadın çalışanlar

314. **Soru:** Gebe çalışanlar doğuma kadar, emziren çalışanlar doğumdan
     itibaren 1 yıl (gerekli hallerde 6 ay uzatılarak) gece postasında
     çalıştırılmamakta; bu dönemdeki çalışmaları gündüz postasına denk
     getirilmektedir.
     **Mevzuat:** Kadın Çalışanların Gece Postalarında Çalıştırılma
     Koşulları Hakkında Yönetmelik, Madde 9
     **Not:** Soru 13 (İş Kanunu Madde 74) analık izni süresini
     düzenliyor; bu madde gece postası yasağını düzenliyor — farklı
     açı, mükerrer değil.

## İncelenip EKLENMEMESİNE karar verilen mevzuatlar

- Türkiye Cumhuriyeti Anayasası — somut/denetlenebilir işveren yükümlülüğü yok,
  sadece devlete yönelik çerçeve hükümler.
- Karayolları Trafik Kanunu (2918) — "işveren" hiç geçmiyor, tamamen trafik
  polisi/sürücü belgesi/araç tescili konuları.
- İmar Kanunu (3194) — "işveren/işyeri" yok; Madde 34 (inşaat sahası tahta
  perde/aydınlatma) borderline ama kullanıcı tarafından atlandı.
- Organize Sanayi Bölgeleri Kanunu (4562) — OSB'nin kendi yönetim yapısıyla
  ilgili, İSG içermiyor.
- Yapı Denetimi Hakkında Kanun (4708) — tek ilgili madde (2/f) işverene değil,
  üçüncü taraf yapı denetim şirketine yükümlülük yüklüyor; atlandı.

- Özel Güvenlik Hizmetlerine Dair Kanun (5188) — sadece özel güvenlik
  görevlisi istihdamını düzenliyor, klasik İSG maruziyeti değil; atlandı.
- Türk Ceza Kanunu (5237) — önleyici yükümlülük tanımlamıyor, sadece ceza
  hükümleri; checklist'e uygun değil.
- Sosyal Sigortalar ve Genel Sağlık Sigortası Kanunu (5510) Madde 8 (işe
  giriş bildirgesi) — SGK/bordro kaydı, İSG maruziyeti değil; kullanıcı
  tarafından atlandı (Madde 13 ve 14 eklendi).

- Türk Borçlar Kanunu (6098) Madde 417/2 (genel İSG önlem alma) — 6331 sayılı
  Kanun'da çok daha detaylı geleceği için tekrar olmasın diye eklenmedi.
  Madde 418 (ev düzeninde çalışma) ve Madde 419 (kişisel veri) İSG değil,
  atlandı.

- İş Sağlığı ve Güvenliği Kanunu (6331) Madde 7 (SGK teşvik/finansman —
  işveren yükümlülüğü değil), Madde 9 (tehlike sınıfı tespiti — Bakanlık işi),
  Madde 19 (çalışanın kendi yükümlülüğü, denetlenebilir işveren gerekliliği
  değil), Madde 21/24/24A/26/27 (idari/kurumsal/ceza hükümleri), Madde 25
  (işin durdurulması — idari müdahale süreci; tetikleyicisi olan risk
  değerlendirmesi zaten Madde 10 ile kapsanıyor), Madde 30-39 (yönetmelik
  yetkilendirme ve diğer kanunlarda değişiklik hükümleri) — atlandı.

- Kişisel Verilerin Korunması Kanunu (6698) Madde 1-5, 7-11, 13-33 — genel
  veri koruma/idari/kurumsal/ceza hükümleri, İSG'ye özgü değil; atlandı.
  Sadece Madde 6 (özel nitelikli veri) ve Madde 12 (veri güvenliği), çalışan
  sağlık kayıtlarıyla kesiştiği için eklendi (soru 34-35).
- Bilirkişilik Kanunu (6754) — "işveren/işyeri" hiç geçmiyor; bilirkişilik
  mesleğinin kurumsal yapısı (bölge kurulları, sicil, Danışma Kurulu) ile
  ilgili, İSG içermiyor; atlandı.
- Elektrik İç Tesisleri Yönetmeliği — "işveren" hiç geçmiyor; tamamen elektrik
  tesisatının kurulumu/projelendirilmesi için teknik mühendislik standardı
  (topraklama sistemi tipleri, kablo kesit tabloları, izolasyon/aydınlatma
  hesapları). Muhatabı tesisatçı/denetim kuruluşu/işletme (dağıtım şirketi),
  işveren değil; denetlenebilir bir işveren yükümlülüğü yok. Mevcut "Elektrik
  Güvenliği" alt kategorisi (8 soru) zaten işveren-tarafı periyodik kontrol
  sorularını kapsıyor. Atlandı.
- Hayvan Sağlığı ve Zabıtası Yönetmeliği — "işveren/işyeri" hiç geçmiyor;
  tamamen hayvan hastalıklarıyla mücadele, karantina ve aşılama programlarının
  Bakanlık/belediye/il özel idaresi tarafından yürütülmesiyle ilgili bir kamu
  sağlığı/veterinerlik düzenlemesi; atlandı.
- Karayolları Kenarında Yapılacak ve Açılacak Tesisler Hakkında Yönetmelik —
  "işveren/çalışan" hiç geçmiyor; tamamen geçiş yolu izni, kavşak/görüş
  mesafesi ve imar/trafik güvenliği şartlarını düzenliyor, İSG içermiyor;
  atlandı.
- Karayolları Trafik Yönetmeliği — büyük kısmı (sürücü belgesi alma şartları,
  hız sınırları, alkol/uyuşturucu tespiti, araç tescili, çekme kuralları vb.)
  bireysel sürücü/trafik polisi düzenlemesi, işveren yükümlülüğü değil;
  atlandı. Sadece Madde 98 (ticari şoförlerin çalışma/dinlenme süreleri,
  takoğraf) ve Madde 108 (tehlikeli madde taşıyan araç ekipmanı), profesyonel
  şoför/lojistik çalıştıran işverenler için gerçek bir yükümlülük olduğundan
  eklendi (soru 36-39).
- Hasta Hakları Yönetmeliği — "işveren/çalışan" hiç geçmiyor; tamamen sağlık
  kurum/kuruluşlarında hasta haklarını (aydınlatılmış onam, mahremiyet, rıza,
  şikayet hakkı vb.) düzenliyor, işveren-çalışan İSG ilişkisi değil; atlandı.
- Acil Sağlık Hizmetleri Yönetmeliği — "işveren/işyeri" hiç geçmiyor; 112
  acil sağlık hizmetleri sisteminin (ambulans istasyonları, komuta kontrol
  merkezi, personel görevlendirme) kamu tarafından işletilmesini düzenliyor,
  işveren yükümlülüğü içermiyor; atlandı.
- Elektrik Kuvvetli Akım Tesisleri Yönetmeliği — büyük kısmı (trafo/akümülatör
  odası özellikleri, hava hattı/kablo döşeme kuralları, havalandırma/
  aydınlatma düzeyleri vb.) tesis tasarım/inşaat standardı, atlandı. Sadece
  Madde 26-27 (koruyucu malzeme periyodik denetim/kayıt), Madde 60 (yetkili
  mühendis/EKAT zorunluluğu) ve Madde 61 (bakım öncesi gerilim kesme/
  kilitleme/topraklama — LOTO), kendi yüksek gerilim tesisi olan işletmeler
  için gerçek bir yükümlülük olduğundan eklendi (soru 40-43).
- Elektrik Tesislerinde Topraklamalar Yönetmeliği — büyük kısmı (topraklama
  direnci hesap formülleri, iletken kesit tabloları, TN/TT/IT sistem
  detayları, ölçüm yöntemleri) tasarım/mühendislik standardı, atlandı. Sadece
  topraklama tesislerinin periyodik muayene/ölçme ile kontrolü (Madde 10)
  işveren tarafı için gerçek bir yükümlülük olduğundan eklendi (soru 44).
- Özel Hastaneler Yönetmeliği — "işveren" hiç geçmiyor; İSG/çalışan sağlığı
  konusu da yok. Tamamen özel hastanelerin ruhsatlandırılması, hasta hizmet
  standartları ve bina/hizmet kalitesi şartlarını (yatak kapasitesi, uzman
  hekim/personel sayısı vb.) düzenliyor; atlandı.
- Alkol ve Alkollü İçki Tesisleri Yönetmeliği — "işveren/çalışan" hiç
  geçmiyor; tamamen alkol/alkollü içki üretim tesislerinin ruhsatlandırılması
  (TAPDK lisanslama), üretim kapasitesi ve kalite/gıda güvenliği şartlarını
  düzenliyor, İSG içermiyor; atlandı.
- Hafriyat Toprağı, İnşaat ve Yıkıntı Atıklarının Kontrolü Yönetmeliği —
  "işveren/çalışan" hiç geçmiyor; 2872 sayılı Çevre Kanunu'na dayanan,
  hafriyat/inşaat atıklarının toplanması, taşınması ve bertarafına ilişkin
  bir çevre mevzuatı, İSG içermiyor; atlandı.
- Özel Güvenlik Hizmetlerine Dair Kanunun Uygulanmasına İlişkin Yönetmelik —
  5188 sayılı Kanun'un (zaten atlanan) uygulama detayı. Tamamen özel güvenlik
  şirketi/eğitim kurumu faaliyet izni, sınav komisyonu, eğitim müfredatı,
  silah/teçhizat miktarı izni, kimlik kartı ve valiliğe bildirim süreçlerini
  düzenliyor; muhatabı Bakanlık/valilik denetimi. Sağlık şartları ayrı bir
  yönetmeliğe (Özel Güvenlik Görevlileri Sağlık Şartları Yönetmeliği) havale
  ediliyor, burada düzenlenmiyor. Geçen tek "işveren" ifadesi (Madde 21,
  kimlik kartı kaybını bildirme) idari bir bildirim, İSG önlemi değil;
  denetlenebilir bir işveren İSG yükümlülüğü yok. Atlandı.
- İşyeri Açma ve Çalışma Ruhsatlarına İlişkin Yönetmelik — gövdesi (Madde
  1-48) ve EK-2/EK-3 tamamen ruhsat alma prosedürü, GSM (gayrisıhhî
  müessese) sınıflandırması/inceleme kurulu, kolluk denetimi, içkili yer
  bölgesi tespiti ve faaliyetten men gibi yetkili idare (belediye/valilik)
  süreçleri; işveren-çalışan İSG ilişkisi değil. EK-1'in sektöre özgü B,C,D...
  bölümleri (et/balık satış yerleri, bakkal/market vb. için malzeme/yüzey
  şartları) de aynı şekilde dar kapsamlı teknik şartlar, atlandı. EK-1'in
  genel "A- Asgari Ortak Şartlar" bölümünden gerçek ve geniş kapsamlı
  işveren yükümlülükleri soru 87-90'a eklendi. Değerlendirilip niş/sektöre
  özgü olduğu için eklenmeyen kalemler: Madde 25 (1. sınıf GSM'de sorumlu
  müdür çalıştırma), Madde 35 (umuma açık eğlence yerinde mesul müdür
  görevlendirme), Madde 36 (eğlence/içki yerinde 18 yaş altı çalıştırma
  yasağı — zaten genel genç çalışan kurallarıyla örtüşüyor), Madde 5/j
  (sınai/tıbbi/radyoaktif atık yönetimi — çevre mevzuatına daha yakın).
- Sıvılaştırılmış Petrol Gazları (LPG) Piyasasında Yapılacak Denetimler ile
  Ön Araştırma ve Soruşturmalarda Takip Edilecek Usul ve Esaslar Hakkında
  Yönetmelik — "işveren/işyeri/çalışan/iş sağlığı/iş güvenliği" hiç
  geçmiyor; tamamen EPDK'nın LPG piyasasındaki lisans sahiplerine yönelik
  denetim, ön araştırma ve soruşturma usulünü (denetim elemanı yetkisi,
  tutanak düzenleme, idari para cezası süreci) düzenliyor, İSG içermiyor;
  atlandı.
- Sürücü Adayları ve Sürücülerde Aranacak Sağlık Şartları ile Muayenelerine
  Dair Yönetmelik — "işveren/işyeri/çalışan" hiç geçmiyor; tamamen ehliyet
  alabilmek için aranacak bireysel sağlık/muayene kriterlerini (görme,
  işitme, nörolojik durum vb. tanı eşikleri) ve bunların sağlık kurulu/il
  sağlık müdürlüğü tarafından değerlendirilme usulünü düzenliyor. Muhatabı
  birey ve sağlık kuruluşları; işverenin denetleyebileceği bir yükümlülük
  yok (Karayolları Trafik Yönetmeliği Madde 98'deki şoför çalışma/dinlenme
  takibi türünden bir hüküm burada yok). Atlandı.
- Belediye İtfaiye Yönetmeliği — tamamen belediye itfaiye teşkilatının kendi
  iç işleyişini (itfaiye eri alımı/sınavı, görevde yükselme, kıyafet/
  teçhizat, araç standartları, itfaiye raporu düzenleme prosedürü)
  düzenliyor. Muhatabı belediye itfaiye teşkilatı ve kendi personeli; genel
  bir işveren/işyeri için denetlenebilir bir İSG yükümlülüğü yok (itfaiye
  raporu alma yükümlülüğü zaten soru 87'de kapsanmış durumda). Atlandı.
- Bulaşıcı Hastalıklar Sürveyans ve Kontrol Esasları Yönetmeliği —
  "işveren/işyeri/çalışan" hiç geçmiyor; tamamen Sağlık Bakanlığı'nın
  bulaşıcı hastalıklar için ulusal sürveyans/bildirim sistemini (hastalık
  tanımları, ihbar-bildirim ağı, yerel sağlık otoriteleri-Bakanlık arası
  veri paylaşımı, salgın müdahale yöntemleri) düzenliyor. Muhatabı sağlık
  kuruluşları/hekimler ve kamu sağlık otoriteleri; işveren-çalışan İSG
  ilişkisi yok. Atlandı.
- Sıvılaştırılmış Petrol Gazları (LPG) Piyasasında Uygulanacak Teknik
  Düzenlemeler Hakkında Yönetmelik — "işveren/işyeri/çalışan" hiç geçmiyor
  (9 maddenin tamamı okundu); LPG ürün ve tesislerinin TS/EN/ISO
  standartlarına uygunluğunu, ölçüm birimlerini, numune/analiz ve
  laboratuvar akreditasyonunu, kantar-baskül-sayaç ayarlarını düzenliyor.
  Muhatabı rafinerici/dağıtıcı lisans sahipleri ve EPDK; ürün/ticaret
  uygunluğu mevzuatı, İSG içermiyor. Atlandı.
- Binaların Yangından Korunması Hakkında Yönetmelik — 104 sayfa; büyük
  kısmı (kaçış yolu/merdiven boyut hesapları, yangına dayanım süreleri,
  sprinkler/hidrant sistem tasarım debileri, EK-3 tabloları vb.) bina
  tasarım/inşaat standardı, proje müellifi/müteahhit muhatap, işletme
  aşamasında işverenin tekrarlayan bir eylemi değil; atlandı. Operasyonel,
  bina sahibi/yöneticisi/işyeri sahibine yönelik gerçek ve somut
  yükümlülükler soru 91-101'e eklendi.
- Sıvı ve Gaz Yakıtlı Yeni Sıcak Su Kazanlarının Verimlilik Gereklerine
  Dair Yönetmelik (92/42/AT) — "işveren/işyeri/çalışan" hiç geçmiyor; bir AB
  direktifi uyarlaması olarak kazan üreticisi/ithalatçısı için CE
  işaretlemesi, uygunluk değerlendirmesi ve enerji verimliliği (kW bazlı
  verim sınıfları) şartlarını düzenliyor. Ürün uygunluk mevzuatı, İSG
  içermiyor; atlandı.
- Alt İşverenlik Yönetmeliği — tamamı (15 madde) okundu. Madde 8 (SGK/ihale
  makamları gibi diğer kamu kurumlarının denetim/bildirim yükümlülüğü —
  işverene değil) ve Madde 12-13 (muvazaa incelemesi/mahkeme süreci —
  işverenin önleyici bir eylemi değil, ihlal sonrası işleyen bir süreç
  tarifi) atlandı. Gerçek ve somut işveren yükümlülükleri soru 102-105'e
  eklendi.
- Çalışma Gücü ve Meslekte Kazanma Gücü Kaybı Oranı Tespit İşlemleri
  Yönetmeliği — "işveren" hiç geçmiyor, "işyeri" sadece sağlık kurulunun
  meslek hastalığı tespiti sırasında işyeri incelemesi bağlamında geçiyor
  (kurulun eylemi, işverenin değil). Tamamen SGK'nın çalışma gücü kaybı/
  malullük oranı tespiti sürecini (sağlık kurulları, meslek hastalıkları
  listesi değerlendirmesi, itiraz süreci) düzenliyor; muhatabı sağlık
  kurulları, SGK ve sigortalının kendisi. İşveren-çalışan İSG ilişkisi
  yok; atlandı.
- Makine Emniyeti Yönetmeliği (2023/1230/AB) — "işveren/işyeri/çalışan" hiç
  geçmiyor; bir AB direktifi uyarlaması olarak makine imalatçısı/
  ithalatçısı/yetkili temsilcisi için CE işaretlemesi, piyasaya arz/serbest
  dolaşım ve tasarım/imalat sağlık-güvenlik gerekliliklerini düzenliyor
  (ürün uygunluk mevzuatı). Makinenin işyerinde kullanımı sırasındaki
  işveren yükümlülükleri ayrı bir yönetmelikte (İş Ekipmanlarının
  Kullanımında Sağlık ve Güvenlik Şartları Yönetmeliği) düzenleniyor, bu
  yönetmelikte değil; atlandı.
- Biyosidal Ürünler Yönetmeliği — büyük kısmı Sağlık Bakanlığı'na yönelik
  ürün ruhsatlandırma/tescil başvuru süreci, risk değerlendirme kriterleri,
  denetim/numune alma prosedürü ve imalattan sorumlu müdür zorunluluğu
  (sadece biyosidal ürün üreticileri için niş); atlandı. Madde 7'deki genel
  kullanım kuralı (işyeri koşullarında işçi koruma bilgilerine uyma),
  biyosidal ürün kullanan her işyeri için geçerli olduğundan soru 106'ya
  eklendi.
- Sivil Savunma Uzmanlarının İdari Statüleri, Görevleri, Çalışma Usul ve
  Esasları ile Eğitimleri Hakkında Yönetmelik — Madde 2'de kapsam açıkça
  "kamu kurum ve kuruluşlarında görev yapan sivil savunma uzmanları" ile
  sınırlı; "işveren/işyeri" hiç geçmiyor. Tamamı (14 madde) okundu; büyük
  kısmı (uzmanların kendi idari statüsü, atanması, denetimi, eğitim
  prosedürü) kamu personeli mevzuatı, genel bir işveren yükümlülüğü değil.
  Ancak Madde 8 (sivil savunma uzmanı kadrosu olmayan kamu kurumunda bir
  sivil savunma amiri görevlendirme zorunluluğu), uygulamanın kamu İSG
  işlerinde de kullanılabileceği gözetilerek soru 107'ye (sadece kamu
  kurum/kuruluşları için geçerli olduğu notuyla) eklendi.
- Uçucu Maddelerin Zararlarından İnsan Sağlığının Korunması Hakkında
  Yönetmelik — Madde 5(c) (maruziyet sınırları — zaten genel İSG
  mevzuatına/Bilimsel Kurul kararına atıf, bağımsız bir eylem değil) ve
  Madde 5(ç) (atık yönetimi — Tehlikeli Atıkların Kontrolü Yönetmeliği'ne
  atıf, çevre mevzuatına daha yakın) atlandı. Uçucu madde içeren ürünlerle
  (tiner, bally/yapıştırıcı vb.) çalışılan işyerleri için somut işveren
  yükümlülükleri soru 108-111'e eklendi.
- Hasta ve Çalışan Güvenliğinin Sağlanmasına Dair Yönetmelik — kapsamı
  2. ve 3. basamak sağlık kurumlarıyla (hastaneler) sınırlı. Madde 6 (hasta
  güvenliği uygulamaları — çalışan değil hasta odaklı), Madde 8(a-c)
  (enfeksiyon kontrolü/laboratuvar/radyasyon güvenliği — esas olarak hasta
  güvenliği odaklı) ve Madde 9 (sorumluluk — sadece "en üst amir
  sorumludur" beyanı, somut bir eylem değil) atlandı. Madde 7'deki
  "Çalışan Güvenliği Uygulamaları" bölümü ve Madde 8(d)'deki güvenlik
  raporlama sistemi, hastane/sağlık kurumu müşterileri için gerçek ve somut
  çalışan güvenliği yükümlülükleri olduğundan soru 112-114'e (sadece sağlık
  kurumları için geçerli olduğu notuyla) eklendi.
- Kısa Çalışma ve Kısa Çalışma Ödeneğine İlişkin Usul ve Esaslar Hakkında
  Yönetmelik — İSG ile ilgisi yok; tamamen ekonomik kriz/salgın/zorlayıcı
  sebep hallerinde İŞKUR'un kısa çalışma ödeneği (işsizlik sigortası
  fonundan yapılan ödeme) başvuru, değerlendirme, ödeme ve denetim sürecini
  düzenliyor. Madde 4/10/11'de gerçek işveren yükümlülükleri var (başvuru,
  kayıt tutma, bildirim) ama bunlar iş hukuku/sosyal güvenlik alanına ait,
  İSG değil; "İSG Mevzuat Uyum Karnesi" kapsamı dışında kalıyor. Atlandı.
- Gıda İşletmelerinin Kayıt ve Onay İşlemlerine Dair Yönetmelik —
  "işveren/işyeri" hiç geçmiyor; tamamen gıda işletmelerinin Tarım ve Orman
  Bakanlığı'na kayıt/onay prosedürünü düzenliyor (gıda güvenliği/kalite
  kontrolü mevzuatı). "Çalışan" geçen tek yer (zorunlu personel istihdamı)
  de gıda güvenliği uzmanlığı amaçlı (gıda mühendisi/veteriner hekim vb.
  bulundurma), İSG ile ilgisi yok — GSM'deki "sorumlu müdür" örneğine
  benzer, orada da aynı sebeple eklenmemişti. Atlandı.
- Gıda Hijyeni Yönetmeliği — "işveren/işyeri" hiç geçmiyor. Personel
  hijyeni maddesi (Madde 17) dahil tüm içerik gıda güvenliği/hijyeni
  amaçlı; odak noktası çalışanın kendi sağlığı/güvenliği değil, gıdanın
  kontaminasyondan korunması (tüketici güvenliği). Madde 21'deki eğitim
  yükümlülüğü de HACCP/gıda hijyeni eğitimi, İSG eğitimi değil. Gıda
  İşletmelerinin Kayıt ve Onay İşlemlerine Dair Yönetmelik ile aynı
  sebeple atlandı.
- Zoonozlar ve Zoonotik Etkenler, İlgili Antimikrobiyal Direnç ve Gıda
  Kaynaklı Salgınların İzlenmesi Yönetmeliği — tamamen Bakanlık düzeyinde
  zoonotik hastalıkların/gıda kaynaklı salgınların ulusal sürveyans
  sistemini düzenliyor; muhatabı Bakanlık ve kendi görevli personeli.
  "İşveren" hiç geçmiyor; "işyerinde sağlık ve güvenlik" ifadesi sadece bir
  kapsam/çakışmama notu, "çalışan" ifadesi Bakanlığın kendi personeli
  bağlamında. İşveren-çalışan İSG ilişkisi yok; atlandı.
- İnsan Tüketimi Amacıyla Kullanılmayan Hayvansal Yan Ürünler Yönetmeliği —
  "işveren/işyeri" hiç geçmiyor; tamamen halk ve hayvan sağlığına yönelik
  riskleri önlemek amacıyla insan tüketimine sunulmayan hayvansal yan
  ürünlerin (imha, sınıflandırma, toplama, işleme) sağlık kurallarını
  düzenliyor — niş bir sektör (rendering/hayvansal yan ürün tesisleri).
  "Çalışan" geçen tek yer (koruyucu giysi, kirli/temiz bölge ayrımı) de
  biyogüvenlik/çapraz kontaminasyon önleme amaçlı, çalışanın kendi sağlığı/
  güvenliği değil — Gıda Hijyeni Yönetmeliği'ndeki örüntüyle tutarlı;
  atlandı.
- Hayvansal Gıdalar için Özel Hijyen Kuralları Yönetmeliği — Amaç
  maddesinde açıkça "Gıda Hijyeni Yönetmeliği'ne ek olarak hayvansal gıda
  üreten işletmeciler için özel hijyen gereklilikleri" olarak tanımlanıyor
  (et/süt/mezbaha işleme standartları, sıcaklık kontrolü, ekipman
  malzemeleri vb.). "İşveren" ve "çalışan" hiç geçmiyor, personel hijyeni/
  koruyucu ekipman içeriği yok — tamamen ürün/tüketici güvenliği teknik
  standardı; Gıda Hijyeni Yönetmeliği ile aynı sebeple atlandı.
- Yemlerin Piyasaya Arzı ve Kullanımı Hakkında Yönetmelik —
  "işveren/işyeri/çalışan" hiç geçmiyor; tamamen hayvan yemlerinin piyasaya
  arzı, etiketlenmesi ve kullanımına ilişkin ürün mevzuatı; İSG içermiyor.
  Atlandı.
- Kızartmada Kullanılmakta Olan Katı ve Sıvı Yağlar için Özel Hijyen
  Kuralları Yönetmeliği — "işveren/işyeri/çalışan" hiç geçmiyor (kısa
  yönetmelik, tamamı tarandı); kızartma yağlarının hijyen standartlarını
  (asitlik değeri, kullanım süresi vb.) düzenliyor, ürün/tüketici güvenliği
  mevzuatı; İSG içermiyor. Atlandı.
- Sıvılaştırılmış Petrol Gazları (LPG) Piyasası Eğitim ve Sorumlu Müdür
  Yönetmeliği — büyük kısmı sertifika/eğitim programı prosedürü (TMMOB
  meslek odaları, EPDK), idari/kurumsal; atlandı. Madde 7(2)'deki
  sertifikasız personel çalıştırma yasağı, LPG istasyonu/dolum/dağıtım
  işletmeleri için somut ve gerçek bir işveren yükümlülüğü olduğundan
  soru 115'e eklendi.
- İşkolları Yönetmeliği — Amaç maddesinde açıkça belirtildiği gibi, 6356
  sayılı Sendikalar ve Toplu İş Sözleşmesi Kanunu'ndaki işkollarına hangi
  işlerin gireceğini belirleyen bir sınıflandırma listesi; sendika yetki/
  temsil alanı tespiti amaçlı, İSG ile ilgisi yok. İşveren geçen yerler de
  sendika başvuru süreciyle ilgili, bir güvenlik yükümlülüğü değil.
  Atlandı.
- İş Güvenliği Uzmanlarının Görev, Yetki, Sorumluluk ve Eğitimleri Hakkında
  Yönetmelik — büyük kısmı (Madde 8-9, 13 ve Üçüncü/Dördüncü Bölüm'ün
  kalanı) iş güvenliği uzmanının kendi niteliklerini, belge sınıflarını,
  görev/yetkilerini ve eğitim kurumlarının açılış/ruhsat şartlarını
  düzenliyor; bunlar işverenin kendi kendine denetleyebileceği bir
  yükümlülük değil, uzmanın veya eğitim kurumunun sorumluluğu/idari
  süreci. "İşverenin Yükümlülükleri" bölümündeki Madde 5 ve Madde 6 de
  mülga. Genel görevlendirme yükümlülüğü zaten soru 18'de (6331 sayılı
  Kanun, Madde 6), tedbirlerin giderilmesi soru 19'da (Madde 8/2)
  karşılanıyor. Madde 7/4 (vardiyalı görevlendirme), Madde 12 (tehlike
  sınıfına göre asgari süre/tam süreli eşik) ve Madde 10/2 (mesleki
  gelişim eğitimi süresi/ücret güvencesi) somut ve gerçek işveren
  yükümlülükleri olduğundan soru 116-118'e eklendi.
- İş Sağlığı ve Güvenliği Hizmetleri Yönetmeliği — soru 119-131 eklendi
  (10 ana + 3 opsiyonel, Madde 5-7, 9-11, 14). Aşağıdaki maddeler/bentler,
  başka bir mevzuatta zaten sorulan bir yükümlülüğün bu yönetmelikteki
  tekrarı olduğu veya somut bir checkbox'a dönüştürülemeyecek kadar soyut/
  idari olduğu için atlandı:
  - Madde 5/1 (genel İGU/işyeri hekimi/diğer sağlık personeli görevlendirme
    yükümlülüğü, 10+ çalışanlı çok tehlikeli sınıfta diğer sağlık personeli)
    → zaten soru 18'de (6331 sayılı Kanun, Madde 6) soruluyor.
  - Madde 5/5-ç (görevlendirilen kişi/OSGB tarafından yazılı bildirilen
    tedbirlerin işverence yerine getirilmesi) → zaten soru 19'da (6331
    sayılı Kanun, Madde 8/2) soruluyor.
  - Madde 5/5-d (İGU/hekim/diğer sağlık personeline Bakanlıkça belirlenen
    sürelerden az olmayan çalışma süresinin sağlanması) → kavramsal
    olarak soru 117'de (İGU Yönetmeliği, Madde 12 — tehlike sınıfına göre
    asgari süre/tam süreli eşik) karşılanıyor.
  - Madde 14/2 (zorunlu sürenin bölünerek birden fazla kişiye
    görevlendirme yapılamaması) → aynı prensip soru 116'da (İGU
    Yönetmeliği, Madde 7/4 — vardiyalı görevlendirme/bölünmeme ilkesi)
    zaten var.
  - Madde 15/3 (İSG hizmetlerinde görevlendirilenler arasında
    koordinasyonun işveren tarafından sağlanması) → Madde 6'da zaten
    kapsanan işbirliği/koordinasyon yükümlülüğüyle (soru 122) örtüşüyor.
  - Madde 5/5-f (İSG KATİP sistemi üzerinden Bakanlıkça belirlenecek
    konularda bilgi verilmesi) → çok muğlak, "Bakanlıkça belirlenecek
    konular" tanımsız; somut bir checkbox'a dönüştürülemiyor.
  - Madde 5/6 (yetkiyi devreden işverenin yükümlülüklerinin devam etmesi)
    → aktif bir eylem değil, kavramsal/hukuki bir hatırlatma; denetlenebilir
    bir yükümlülük değil.
  - Madde 5/2, 5/8, 5/9, 5/10 → seçimlik haklar (OSGB'den hizmet alma
    opsiyonu, küçük işyerinde işverenin kendi üstlenmesi hakkı), teknik
    hesaplama detayları (çırak/stajyer sayım istisnası) veya henüz
    somutlaşmamış koşullu düzenlemeler (sektörel belge); employer
    self-assessment checkbox'ı için uygun değil.
  - Madde 12, 13 — OSGB'nin kendi kuruluş şartları (personel istihdamı,
    oda büyüklükleri, şube açma) ve OSGB/İSGB'nin kendi görev/sorumlulukları;
    işverenin değil hizmet sağlayıcısının yükümlülüğü.
  - Madde 16-22/A — OSGB'nin yetki belgesi başvurusu, iptali, ihtar puanı
    gibi tamamen idari/regülatif süreçler; işverenle ilgisi yok.
  - Madde 23-25 — yürürlükten kaldırma, yürürlük ve yürütme hükümleri.
- İş Sağlığı ve Güvenliği Risk Değerlendirmesi Yönetmeliği — soru 132-143
  eklendi (Madde 5-7, 11-16; kullanıcı talebiyle örtüşen/tekrar eden
  maddeler de dahil edildi). Not düşülmesi gereken örtüşmeler:
  - Soru 132 (Madde 5/1) ↔ soru 17 (6331 sayılı Kanun, Madde 10) — her
    ikisi de genel risk değerlendirmesi yaptırma yükümlülüğünü soruyor,
    ancak farklı mevzuat/madde kaynağına bağlı olduklarından içerik
    güncelleme takibi için ayrı tutuldu.
  - Soru 143 (Madde 16) ↔ soru 30 (6331 sayılı Kanun, Madde 16) — neredeyse
    birebir aynı bilgilendirme yükümlülüğü, farklı madde kaynağı.
  - Soru 141 (Madde 14) ↔ soru 32 (6331 sayılı Kanun, Madde 23) — aynı
    çalışma alanını paylaşan işverenler arası koordinasyon ilkesi aynı,
    ancak soru 141 özellikle risk değerlendirmesi sürecine odaklı.
  - Soru 133 (Madde 5/2) kavramsal/soyut bir hatırlatma niteliğinde,
    somut bir eylem değil; kullanıcı talebiyle yine de eklendi.
  - Madde 17 (risk değerlendirmesi rehberleri) ve Geçici Madde 1, Madde
    18-19 (geçiş/yürürlük/yürütme hükümleri) atlandı — işveren için
    doğrudan bir yükümlülük içermiyor.
- İş Sağlığı ve Güvenliği Kurulları Hakkında Yönetmelik — soru 144-155
  eklendi (Madde 4-10; soru 144, soru 27'de — 6331 sayılı Kanun, Madde
  22 — zaten sorulan genel kurul oluşturma/kararların uygulanması
  yükümlülüğüyle örtüşüyor, kullanıcı talebiyle yine de eklendi). Madde
  11 (kurulun kendi gizlilik yükümlülüğü, iş müfettişine kolaylık
  sağlaması — kurulun kendi görevi, işverenin değil), Madde 12
  (çalışanların kurul kararlarına uyma yükümlülüğü — çalışanın
  yükümlülüğü, işverenin değil) ve Madde 13, Geçici Madde 1, Madde 14-15
  (yürürlükten kaldırma/geçiş/yürürlük/yürütme hükümleri) atlandı.
- Asbestle Çalışmalarda Sağlık ve Güvenlik Önlemleri Hakkında Yönetmelik —
  soru 156-169 eklendi, yeni "İş Hijyeni → Asbest Maruziyeti" alt
  kategorisi açıldı (Madde 5-17). Madde 18 (SGK'nın asbestoz/mezotelyoma
  kaydı — SGK'nın görevi, işverenin değil), Madde 19 (eğitim programının
  Bakanlık/İSGÜM tarafından belirlenmesi — idari) ve Madde 20-23, Geçici
  Madde 1-2 (uygulama esası/yürürlükten kaldırma/geçiş/yürürlük/yürütme
  hükümleri) atlandı.
- İşyerlerinde İşin Durdurulmasına Dair Yönetmelik — soru 170 eklendi
  (Madde 13). Büyük kısmı (Madde 5-12, 14-16) Bakanlık müfettişi/heyet/
  mülki idare amirinin durdurma kararı verme-uygulama-kaldırma süreci;
  idari/reaktif prosedür, işverenin genel ve sürekli geçerli bir
  yükümlülüğü değil. Madde 12 işverenin itiraz hakkı (yükümlülük değil).
  Atlandı.
- Ekranlı Araçlarla Çalışmalarda Sağlık ve Güvenlik Önlemleri Hakkında
  Yönetmelik — soru 171-175 eklendi, yeni "İş Hijyeni → Ergonomik
  Riskler" alt kategorisi açıldı (Madde 5-9). Madde 10-12 (yürürlükten
  kaldırma/yürürlük/yürütme) atlandı.
- İş Ekipmanlarının Kullanımında Sağlık ve Güvenlik Şartları Yönetmeliği —
  soru 176-184 eklendi, yeni "Elektrik, Makine, Ekipman → İş Ekipmanı
  Güvenliği" alt kategorisi açıldı (Madde 5-12). Madde 3, 3/A (dayanak/AB
  uyumu), Madde 4 (tanımlar), Madde 7/A (mülga), Madde 13, 13/A, 14, 14/A,
  14/B (periyodik kontrol yapan yetkili kişi/muayene kuruluşunun kendi
  yükümlülükleri, Bakanlık yetkilendirme/denetim süreçleri — hizmet
  sağlayıcının/idarenin görevi, işverenin değil) ve Madde 15-17
  (yürürlükten kaldırma/yürürlük/yürütme) atlandı.
- Çalışanların Patlayıcı Ortamların Tehlikelerinden Korunması Hakkında
  Yönetmelik — soru 185-191 eklendi, yeni "Acil Durum, Yangın, Patlama →
  Patlayıcı Ortam" alt kategorisi açıldı (Madde 5-11). Madde 1-4 (amaç/
  kapsam/dayanak/tanımlar), Madde 12-14 ve Geçici Madde 1 (yürürlükten
  kaldırma/geçiş hükmü/yürürlük/yürütme) atlandı.
- Çalışanların İş Sağlığı ve Güvenliği Eğitimlerinin Usul ve Esasları
  Hakkında Yönetmelik — soru 192-211 eklendi (Madde 5, 7-25 arası çoğu
  madde; Madde 5 soru 24'te — 6331 sayılı Kanun, Madde 17 — ve Madde 19
  soru 25'te — 6331 sayılı Kanun, Madde 17/4 — zaten sorulan genel eğitim
  ve kaza-sonrası eğitim yükümlülükleriyle örtüşüyor, kullanıcı talebiyle
  yine de eklendi). Madde 1-4 (amaç/kapsam/dayanak/tanımlar), Madde 6
  (çalışanın kendi yükümlülüğü, işverenin değil), Madde 26 (elektronik
  imza/arşivleme — permissif, yükümlülük değil) ve Madde 27-29
  (yürürlükten kaldırma/yürürlük/yürütme) atlandı.
- Biyolojik Etkenlere Maruziyet Risklerinin Önlenmesi Hakkında Yönetmelik
  — soru 212-227 eklendi, yeni "İş Hijyeni → Biyolojik Risk Etmenleri"
  alt kategorisi açıldı (Madde 6-18; soru 221/Madde 14, soru 31'de — 6331
  sayılı Kanun, Madde 18 — zaten sorulan genel görüş alma/katılım
  yükümlülüğüyle kısmen örtüşüyor, yine de eklendi). Madde 1-4 (amaç/
  kapsam/dayanak/tanımlar), Madde 5 (biyolojik etken grup sınıflandırması
  — bilgi/tanım, eylem içermiyor) ve Madde 19-21 (yürürlükten kaldırma/
  yürürlük/yürütme) atlandı.
- İşyerlerinde Acil Durumlar Hakkında Yönetmelik — soru 228-243 eklendi
  (Madde 5-19 arası çoğu madde; soru 228/Madde 5 soru 20'de — 6331 sayılı
  Kanun, Madde 11 — zaten sorulan genel acil durum yükümlülüğüyle
  örtüşüyor, soru 240/Madde 17 de soru 32/141/188'deki genel koordinasyon
  ilkesiyle kısmen örtüşüyor, kullanıcı talebiyle yine de eklendi). Madde
  1-4 (amaç/kapsam/dayanak/tanımlar), Madde 6/1 (çalışanın kendi
  yükümlülüğü, işverenin değil) ve Madde 20-22 (rehberler/yürürlük/
  yürütme) atlandı.
- Kişisel Koruyucu Donanımların İşyerlerinde Kullanılması Hakkında
  Yönetmelik — soru 244-250 eklendi, yeni "Genel Yükümlülükler → Kişisel
  Koruyucu Donanım (KKD)" alt kategorisi açıldı (Madde 5-10). Madde 1-4
  (amaç/kapsam/dayanak/tanımlar), Madde 8/2-3 (çalışanın kendi
  yükümlülüğü, işverenin değil) ve Madde 11-13 (yürürlükten kaldırma/
  yürürlük/yürütme) atlandı.
- Hijyen Eğitimi Yönetmeliği — soru 251 eklendi (Madde 5, mevcut "Genel
  Yükümlülükler → Eğitim" alt kategorisine eklendi). NOT: Bu yönetmelik
  klasik İSG mevzuatı değil, halk sağlığı mevzuatıdır (amacı çalışanın
  halka bulaştırabileceği hastalıkları önlemek, çalışanın kendi
  sağlığı/güvenliği değil) — gıda güvenliği yönetmelikleriyle aynı
  kategoride, ama tek bir net işveren yükümlülüğü (çalışana hijyen eğitimi
  aldırma/belgeli çalıştırma) içerdiği için kullanıcı onayıyla eklendi.
  Madde 1-4 (amaç/kapsam/dayanak/tanımlar), Madde 6-8 (eğitimin idari
  olarak Bakanlık/komisyon tarafından planlanması/verilmesi), Madde 9/2
  (çalışanın kendi bilgi verme yükümlülüğü), Madde 9/1 ve 10 (hasta
  çalışanın kendi durumu, işverenin yükümlülüğü değil) ve Madde 11
  (Bakanlık/mahalli idare denetim ve idari ceza) atlandı.
- Tehlikeli ve Çok Tehlikeli Sınıfta Yer Alan İşlerde Çalıştırılacakların
  Mesleki Eğitimlerine Dair Yönetmelik — soru 252-254 eklendi, mevcut
  "Genel Yükümlülükler → Eğitim" alt kategorisine eklendi (Madde 5, 6/1,
  7/2). Soru 254 (belgelerin özlük dosyasında saklanması), soru 207
  (Çalışanların İSG Eğitimleri Yönetmeliği, Madde 24 — İSG eğitim
  belgelerinin özlük dosyasında saklanması) ile yapısal olarak benzer,
  ancak farklı belge türü (mesleki eğitim/yeterlilik belgesi, İSG eğitim
  belgesi değil) ve farklı mevzuat kaynağı olduğu için örtüşme değil,
  ayrı soru olarak eklendi. Madde 1-4 (amaç/kapsam/dayanak/tanımlar),
  Madde 6/2-3 (1/5/2017 öncesi çalışanlara özel geçiş süreci + kamu kurum
  idari süreci), Madde 7/1 (Bakanlık iş müfettişi denetimi — idari),
  Geçici Madde 1 (eski belgelerin geçerliliği — geçiş hükmü) ve Madde 8-9
  (yürürlük/yürütme) atlandı.
- Sağlık Kuralları Bakımından Günde Azami Yedi Buçuk Saat veya Daha Az
  Çalışılması Gereken İşler Hakkında Yönetmelik — soru 255-259 eklendi,
  mevcut "Genel Yükümlülükler → Genel İş Yeri Gereklilikleri" alt
  kategorisine eklendi (Madde 4-8). Soru 255 (Madde 4), soru 7 (İş
  Kanunu Madde 63 — yer altı maden işlerinde günde 7,5/haftada 37,5 saat)
  ile "yeraltı işleri" alt bendi üzerinden kısmen örtüşüyor; kullanıcı
  talebiyle yine de ayrı soru olarak eklendi (Madde 4'ün kapsadığı diğer
  21 iş türü soru 7'de yok). Madde 6 ve 7'nin soru metinlerine, kullanıcı
  talebiyle hangi işleri kapsadığı (Madde 4 ve 5'te sayılan işler) açıkça
  yazıldı. Madde 1-3 (amaç/kapsam/dayanak), Madde 9 (itiraz süreci —
  Bakanlık kararı, idari), Madde 10 (yürürlükten kaldırma), Geçici Madde 1
  (2004 yönetmeliği kapsamında zaten bildirim yapmış eski işyerleri için
  dar/tarihsel muafiyet) ve Madde 11-12 (yürürlük/yürütme) atlandı.
- İşyeri Bina ve Eklentilerinde Alınacak Sağlık ve Güvenlik Önlemlerine
  İlişkin Yönetmelik — soru 260-291 eklendi, yeni "Genel Yükümlülükler →
  İşyeri Bina ve Eklentileri" alt kategorisi açıldı (Madde 5/1-a üzerinden
  EK-1'in 67 maddesi 26 konu kümesine bölünerek soru 260-288'e, Madde
  5/1-c, 1-ç, 1-f bentlerinden soru 289-291'e dönüştürüldü). Madde 5'in
  b, d, e, g, ğ bentleri, içerik olarak EK-1'deki ilgili sorularla
  (acil çıkış, güvenlik ekipmanı bakımı, aydınlatma/havalandırma/termal
  konfor, yangın, barınma) tamamen örtüştüğü için ayrıca soru yapılmadı
  (tekrar olurdu). Soru 279 (Ek-1/49, gebe/emziren dinlenme yeri) soru 13
  (İş Kanunu Madde 74, analık izni) ile, soru 285 (Ek-1/61, engelli
  fiziksel erişilebilirlik) soru 6 (İş Kanunu Madde 30, engelli kotası)
  ile aynı genel konuyu paylaşıyor ama farklı açı — kullanıcı talebiyle
  ayrı soru olarak eklendi. Madde 1-4 (amaç/kapsam/dayanak/tanımlar),
  Madde 8 (ilgili diğer mevzuat/standartların uygulanması — somut
  yükümlülük değil, atıf hükmü) ve Madde 9-11 (yürürlükten kaldırma/
  yürürlük/yürütme) atlandı.
- İşyeri Hekimi ve Diğer Sağlık Personelinin Görev, Yetki, Sorumluluk ve
  Eğitimleri Hakkında Yönetmelik — soru 292-300 eklendi, mevcut "Genel
  Yükümlülükler → İSG Profesyonelleri / Hizmetleri" alt kategorisine
  eklendi (Madde 7/1, 7/2-3, 10/2, 12, 14/1-2, 14/3-4, 17/2, 19, 42/2-3).
  Soru 292/294/298 soru 121/117/118 (İGU/İSG Hizmetleri Yönetmeliği) ile
  aynı ilkeyi farklı personel türü ve farklı mevzuat kaynağından
  düzenliyor — mükerrer değil, ayrı soru olarak eklendi. Madde 1-4
  (amaç/kapsam/dayanak/tanımlar), Madde 5-6/13/20/34 (mülga), Madde 8
  (belge verilme usulü — Bakanlık işi), Madde 9-11/1,2,4,5 ve 15-18/1,2,3
  (hekim/diğer sağlık personelinin kendi görev/yetki/yükümlülük tanımı —
  işverenin değil), Madde 21-41 (eğitim kurumu yetkilendirme/vize/eğitim
  programı/denetim/ihtar — tamamen idari, kurum muhatap), Madde 42/A
  (İSG-KATİP tebligat adresi — kurum muhatap), Madde 43-45 (yürürlükten
  kaldırma/yürürlük/yürütme) ve Ek Madde 1 (afet/OHAL istisnası —
  eğitim kurumlarına özel) atlandı.
- DÜZELTME: İşyeri Bina ve Eklentilerinde Alınacak Sağlık ve Güvenlik
  Önlemlerine İlişkin Yönetmelik'in Madde 6 (bilgilendirme) ve Madde 7
  (görüş alma/katılım) maddeleri ilk incelemede (soru 260-291) hem aday
  listesine hem skip gerekçesine yazılmadan gözden kaçmış. Soru 301-302
  olarak geriye dönük eklendi, "Genel Yükümlülükler → Bilgilendirme ve
  Katılım" alt kategorisine.
- Elle Taşıma İşleri Yönetmeliği — soru 303-307 eklendi (Madde 5/1-a, 6,
  7, 8, 9). Soru 303-305 (iş organizasyonu, risk azaltma önlemleri, özel
  politika grupları), konu olarak ergonomik risk niteliği taşıdığı için
  "Genel Yükümlülükler → Genel İş Yeri Gereklilikleri" yerine mevcut
  "İş Hijyeni → Ergonomik Riskler" alt kategorisine yerleştirildi (daha
  önce Ekranlı Araçlarla Çalışma Yönetmeliği için açılmış alt kategori).
  Soru 306 "Eğitim", soru 307 "Bilgilendirme ve Katılım" alt
  kategorisine eklendi. Madde 5/1-b, Madde 6'nın özeti niteliğinde
  olduğu için ayrı soru yapılmadı. Madde 1-4 (amaç/kapsam/dayanak/
  tanımlar) ve Madde 10-12 (yürürlükten kaldırma/yürürlük/yürütme)
  atlandı.
- Kadın Çalışanların Gece Postalarında Çalıştırılma Koşulları Hakkında
  Yönetmelik — soru 308-314 eklendi (Madde 5, 6, 7/1, 7/2, 8, 9, 10).
  Soru 308-309, 310-311, 313 "Genel Yükümlülükler → Gece Vardiyasında
  Çalışanlar" alt kategorisine; soru 314 (Madde 9, gebe/emziren gece
  postası yasağı) "Genel Yükümlülükler → Gebe, yeni doğum yapmış ve
  emziren kadın çalışanlar" alt kategorisine eklendi — soru 13 (İş
  Kanunu Madde 74, analık izni) ile aynı genel konuyu paylaşıyor ama
  farklı açı, mükerrer değil. Madde 1-4 (amaç/kapsam/dayanak/tanımlar),
  Madde 11 (uygulamada öncelik — hukuki çatışma kuralı, somut
  yükümlülük değil), Madde 12 (yürürlükten kaldırma), Geçici Madde 1
  (eski sağlık raporlarının geçerliliği — geçiş hükmü) ve Madde 13-14
  (yürürlük/yürütme) atlandı.

**Tasarım ilkesi (22.10.2026):** "İş Hijyeni" kategorisi, İSG'nin klasik risk
etmeni sınıflandırmasının (fiziksel, kimyasal, biyolojik, ergonomik,
psikososyal) toplandığı yer olarak kullanılıyor. Yeni bir risk etmeni
konusu çıktığında "Genel Yükümlülükler" gibi idari/prosedürel kategorilere
değil, buraya eklenmeli.

**ÖNEMLİ:** İş Kanunu'nun (4857) asıl İSG bölümü (Madde 77-89) 20/6/2012
tarihli 6331 sayılı İş Sağlığı ve Güvenliği Kanunu ile tamamen MÜLGA
(yürürlükten kaldırılmış). Yani asıl İSG kaynağı artık 6331 sayılı kanun —
bu mutlaka gözden geçirilecek mevzuat listesine eklenmeli. **(22.10.2026
itibarıyla 6331 tamamlandı — bkz. soru 17-33.)**
