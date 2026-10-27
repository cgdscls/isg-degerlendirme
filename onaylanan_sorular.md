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

## İş Hijyeni → Gürültü (YENİ alt kategori)

315. **Soru:** İşveren, çalışanların maruz kaldığı gürültü düzeyini
     işyerinde gerçekleştirilen risk değerlendirmesinde ele almakta,
     risk değerlendirmesi sonuçlarına göre gereken durumlarda gürültü
     ölçümleri yaptırarak maruziyeti belirlemekte; değerlendirme ve ölçüm
     sonuçlarını saklayıp iş müfettişi denetimlerinde göstermektedir.
     **Mevzuat:** Çalışanların Gürültü ile İlgili Risklerden
     Korunmalarına Dair Yönetmelik, Madde 6

316. **Soru:** İşveren, risk değerlendirmesinde gürültüden kaynaklanan
     riskleri değerlendirirken; anlık darbeli gürültü dahil maruziyetin
     türü/düzeyi/süresine, maruziyet sınır ve eylem değerlerine, özel
     politika gerektiren gruplar ile kadın çalışanların durumuna,
     ototoksik madde-titreşim etkileşimine, uyarı sinyallerinin
     algılanabilirliğine, iş ekipmanının gürültü emisyon bilgisine,
     alternatif düşük gürültülü ekipman varlığına, mesai saatleri
     dışında maruziyetin devam edip etmediğine, sağlık gözetimi
     verilerine ve kulak koruyucu bulunabilirliğine özel önem
     vermektedir.
     **Mevzuat:** Çalışanların Gürültü ile İlgili Risklerden
     Korunmalarına Dair Yönetmelik, Madde 7

317. **Soru:** İşveren, gürültüye maruziyetten kaynaklanan riskleri
     kaynağında yok etmek veya en aza indirmek için; gürültüsü daha az
     çalışma yöntemi/iş ekipmanı seçimi, işyerinin uygun tasarımı,
     çalışanlara eğitim verilmesi, gürültünün teknik yollarla (izolasyon,
     yalıtım vb.) azaltılması, uygun bakım programları ve iş
     organizasyonuyla (maruziyet süresi sınırlama, yeterli dinlenme
     araları) azaltma gibi tedbirleri uygulamaktadır.
     **Mevzuat:** Çalışanların Gürültü ile İlgili Risklerden
     Korunmalarına Dair Yönetmelik, Madde 8/1-2

318. **Soru:** İşyerinde en yüksek maruziyet eylem değerinin aşıldığının
     tespiti halinde işveren; gürültüye maruziyeti azaltmak için teknik
     veya iş organizasyonuna yönelik önlemleri içeren bir eylem planı
     oluşturup uygulamakta, gürültüye maruz kalınan çalışma yerlerini
     uygun şekilde işaretleyip teknik olarak mümkünse bu alanlara
     girişleri kontrollü yapmaktadır.
     **Mevzuat:** Çalışanların Gürültü ile İlgili Risklerden
     Korunmalarına Dair Yönetmelik, Madde 8/3

319. **Soru:** Çalışanların dinlenmesi için ayrılan yerlerdeki gürültü
     düzeyi, bu yerlerin kullanım şartları ve amacına uygun
     tutulmaktadır.
     **Mevzuat:** Çalışanların Gürültü ile İlgili Risklerden
     Korunmalarına Dair Yönetmelik, Madde 8/4

320. **Soru:** Bu Yönetmeliğe göre alınacak tedbirler, özel politika
     gerektiren gruplar ile kadın çalışanların durumlarına uygun
     şekilde düzenlenmektedir.
     **Mevzuat:** Çalışanların Gürültü ile İlgili Risklerden
     Korunmalarına Dair Yönetmelik, Madde 8/5

321. **Soru:** Çalışanın gürültüye maruziyeti en düşük maruziyet eylem
     değerini (80 dB(A)) aştığında kulak koruyucu donanımlar
     çalışanların kullanımına hazır bulundurulmakta; en yüksek maruziyet
     eylem değerine (85 dB(A)) ulaşıldığında veya aşıldığında kulak
     koruyucuların kullanılması sağlanıp denetlenmektedir.
     **Mevzuat:** Çalışanların Gürültü ile İlgili Risklerden
     Korunmalarına Dair Yönetmelik, Madde 9/1

322. **Soru:** Sağlanan kulak koruyucu donanımlar ilgili kişisel koruyucu
     donanım mevzuatına uygun, işitme ile ilgili riski ortadan
     kaldıracak veya en aza indirecek şekilde seçilmiş, çalışana tam
     uyan ve hijyenik şartların gerektirdiği durumlarda çalışana özel
     olarak sağlanan niteliktedir.
     **Mevzuat:** Çalışanların Gürültü ile İlgili Risklerden
     Korunmalarına Dair Yönetmelik, Madde 9/2

323. **Soru:** Çalışanın gürültü maruziyeti hiçbir durumda maruziyet
     sınır değerini (87 dB(A)) aşmamaktadır; aşıldığının tespiti halinde
     işveren maruziyeti derhal sınır değerin altına indirecek tedbirleri
     almakta, aşılma nedenlerini belirleyerek tekrarını önlemek amacıyla
     koruma ve önleme tedbirlerini gözden geçirip yeniden
     düzenlemektedir.
     **Mevzuat:** Çalışanların Gürültü ile İlgili Risklerden
     Korunmalarına Dair Yönetmelik, Madde 10

## Genel Yükümlülükler → Eğitim

324. **Soru:** İşveren, en düşük maruziyet eylem değerine eşit veya
     üzerinde gürültüye maruz kalan çalışanlara/temsilcilerine; riskler,
     alınan tedbirler, maruziyet sınır/eylem değerleri, ölçüm sonuçları,
     kulak koruyucuların doğru kullanımı, işitmeyle ilgili belirtilerin
     bildirimi, sağlık gözetimi şartları ve güvenli çalışma
     uygulamaları konusunda bilgilendirme ve eğitim vermektedir.
     **Mevzuat:** Çalışanların Gürültü ile İlgili Risklerden
     Korunmalarına Dair Yönetmelik, Madde 11

## Genel Yükümlülükler → Bilgilendirme ve Katılım

325. **Soru:** İşveren, gürültüyle ilgili risk değerlendirmesi, alınacak
     önlemler ve kulak koruyucu seçimi konularında çalışanların veya
     temsilcilerinin görüşlerini almakta ve katılımlarını sağlamaktadır.
     **Mevzuat:** Çalışanların Gürültü ile İlgili Risklerden
     Korunmalarına Dair Yönetmelik, Madde 12

## Genel Yükümlülükler → Sağlık Gözetimi

326. **Soru:** Gürültüye maruz kalan çalışanlar işe girişte ve düzenli
     aralıklarla sağlık gözetimine tabi tutulmakta; en yüksek maruziyet
     eylem değerini aşan çalışanlar için işitme testleri işverence
     yaptırılmaktadır.
     **Mevzuat:** Çalışanların Gürültü ile İlgili Risklerden
     Korunmalarına Dair Yönetmelik, Madde 13/1

327. **Soru:** Bir çalışanda gürültüye bağlı işitme kaybı tespit
     edildiğinde işveren; işyerinde yapılan risk değerlendirmesini ve
     alınan önlemleri gözden geçirmekte, gerekli görülürse çalışanı
     gürültüye maruz kalmayacağı başka bir işte görevlendirmekte ve
     benzer biçimde gürültüye maruz kalan diğer çalışanların sağlık
     durumunu gözden geçirip düzenli sağlık gözetimine tabi tutmaktadır.
     **Mevzuat:** Çalışanların Gürültü ile İlgili Risklerden
     Korunmalarına Dair Yönetmelik, Madde 13/2-b

## İş Hijyeni → Kanserojen veya Mutajen Maddeler (YENİ alt kategori)

328. **Soru:** İşyerinde kanserojen veya mutajen maddelere maruziyet
     riski bulunan işlerde, çalışanların bu maddelere maruziyet türü,
     düzeyi ve süresi risk değerlendirmesi kapsamında belirleniyor ve
     gerekli sağlık ve güvenlik önlemleri buna göre alınıyor mu?
     **Mevzuat:** Kanserojen veya Mutajen Maddelerle Çalışmalarda
     Sağlık ve Güvenlik Önlemleri Hakkında Yönetmelik, Madde 5

329. **Soru:** İşveren, teknik olarak mümkün olduğu hâllerde tehlikesiz
     veya daha az tehlikeli madde, müstahzar veya işlem kullanarak
     işyerindeki kanserojen veya mutajen madde kullanımını azaltıyor
     mu ve bu konudaki araştırma sonuçlarını istenmesi hâlinde
     Bakanlığa veriyor mu?
     **Mevzuat:** Kanserojen veya Mutajen Maddelerle Çalışmalarda
     Sağlık ve Güvenlik Önlemleri Hakkında Yönetmelik, Madde 6

330. **Soru:** Risk değerlendirmesi sonucunda çalışanların sağlığı ve
     güvenliği yönünden risk bulunduğu ortaya çıkması hâlinde,
     çalışanların tehlikeli maddelere maruziyeti önleniyor mu?
     **Mevzuat:** Kanserojen veya Mutajen Maddelerle Çalışmalarda
     Sağlık ve Güvenlik Önlemleri Hakkında Yönetmelik, Madde 7/1-a

331. **Soru:** Kanserojen veya mutajen maddelerin tehlikesiz veya daha
     az tehlikeli olanlarıyla değiştirilmesinin teknik olarak mümkün
     olmadığı hâllerde, bu maddelerin üretiminde ve kullanılmasında
     teknik imkânlara göre kapalı sistemler kullanılıyor mu?
     **Mevzuat:** Kanserojen veya Mutajen Maddelerle Çalışmalarda
     Sağlık ve Güvenlik Önlemleri Hakkında Yönetmelik, Madde 7/1-b

332. **Soru:** Kapalı sistemle çalışmanın teknik olarak mümkün olmadığı
     hâllerde, çalışanların maruziyeti mümkün olan en az düzeye
     indiriliyor mu?
     **Mevzuat:** Kanserojen veya Mutajen Maddelerle Çalışmalarda
     Sağlık ve Güvenlik Önlemleri Hakkında Yönetmelik, Madde 7/1-c

333. **Soru:** Çalışanların kanserojen veya mutajen maddelere
     maruziyeti, Ek-2'de verilen sınır değerleri aşmıyor mu?
     **Mevzuat:** Kanserojen veya Mutajen Maddelerle Çalışmalarda
     Sağlık ve Güvenlik Önlemleri Hakkında Yönetmelik, Madde 7/1-ç

334. **Soru:** İşveren, işyerinde kullanılacak kanserojen veya mutajen
     madde miktarını belirleyip yapılan iş için gereken miktardan
     fazla madde bulunmasını önlüyor ve bu maddelere maruz kalan veya
     kalabilecek çalışan sayısının mümkün olan en az sayıda olmasını
     sağlıyor mu?
     **Mevzuat:** Kanserojen veya Mutajen Maddelerle Çalışmalarda
     Sağlık ve Güvenlik Önlemleri Hakkında Yönetmelik, Madde 7/1-d

335. **Soru:** Kanserojen veya mutajen maddelerin çalışma ortamına
     yayılmasını önlemek veya en aza indirmek için uygun işlem
     tasarımı ve mühendislik kontrol önlemleri (lokal veya genel
     havalandırma dâhil) alınıyor mu ve kaza sonucunda veya
     beklenmeyen bir şekilde maddelerin ortama yayılması hâlinde bu
     durumun erken tespiti için uygun ölçüm sistemleri bulunduruluyor
     mu?
     **Mevzuat:** Kanserojen veya Mutajen Maddelerle Çalışmalarda
     Sağlık ve Güvenlik Önlemleri Hakkında Yönetmelik, Madde 7/1-d

336. **Soru:** Uygun çalışma yöntemleri ve işlemlerin kullanılması
     sağlanıyor mu; alınan diğer önlemlerle toplu korumanın
     sağlanamadığı veya maruziyetin önlenemediği durumlarda uygun
     kişisel korunma yöntemleri ve kişisel koruyucu donanımların
     kullanılması sağlanıyor mu?
     **Mevzuat:** Kanserojen veya Mutajen Maddelerle Çalışmalarda
     Sağlık ve Güvenlik Önlemleri Hakkında Yönetmelik, Madde 7/1-d

337. **Soru:** Çalışma ortamı zemini, duvarlar ve diğer yüzeylerin
     düzenli olarak temizlenmesi ve hijyen şartlarının sağlanması
     gerçekleştiriliyor mu?
     **Mevzuat:** Kanserojen veya Mutajen Maddelerle Çalışmalarda
     Sağlık ve Güvenlik Önlemleri Hakkında Yönetmelik, Madde 7/1-d

338. **Soru:** İşveren, kanserojen veya mutajen maddelerle çalışan
     işçileri bu maddelerin riskleri hakkında bilgilendiriyor mu?
     **Mevzuat:** Kanserojen veya Mutajen Maddelerle Çalışmalarda
     Sağlık ve Güvenlik Önlemleri Hakkında Yönetmelik, Madde 7/1-d
     **Not:** Madde 13 (eğitim) ve Madde 14 (bilgi alma hakkı) ile
     konu olarak örtüşüyor, ancak bu bent işverenin ayrı ve genel bir
     bilgilendirme yükümlülüğünü düzenliyor — mükerrer değil, ayrı
     soru olarak eklendi.

339. **Soru:** Kanserojen veya mutajen maddelere maruz kalınan veya
     maruz kalma riski bulunan yerler uygun ikaz levhaları ve güvenlik
     işaretleri ile belirleniyor, bu yerlerde sigara kullanılmasının
     ve yeme-içmenin yasak olduğunu belirten ikaz levhaları
     bulunduruluyor mu; ilgili mevzuat gereği hazırlanacak acil durum
     planında yüksek düzeyde maruziyete neden olabilecek durumlara
     yönelik eylemler de planlanıyor mu?
     **Mevzuat:** Kanserojen veya Mutajen Maddelerle Çalışmalarda
     Sağlık ve Güvenlik Önlemleri Hakkında Yönetmelik, Madde 7/1-d

340. **Soru:** Kanserojen veya mutajen maddelerin güvenli şekilde
     depolanması, taşınması veya işlem görmesi için bu maddelerin
     açıkça ve görünür şekilde etiketlenmiş, sızdırmaz kapalı kaplarda
     bulundurulması sağlanıyor, bu alanlara görevli olmayanların
     giriş-çıkışı kontrol altında tutuluyor mu; atıkların güvenli bir
     şekilde toplanması, depolanması ve uzaklaştırılmasında da benzer
     etiketlenmiş, sızdırmaz kapalı kaplar kullanılıyor mu?
     **Mevzuat:** Kanserojen veya Mutajen Maddelerle Çalışmalarda
     Sağlık ve Güvenlik Önlemleri Hakkında Yönetmelik, Madde 7/1-d

341. **Soru:** Kanserojen veya mutajen maddeler, Tehlikeli Maddelerin
     Karayoluyla Taşınması Hakkında Yönetmelik ve ADR (Tehlikeli
     Malların Karayolu ile Uluslararası Taşımacılığına İlişkin Avrupa
     Anlaşması) hükümlerine uygun olarak taşınıyor mu?
     **Mevzuat:** Kanserojen veya Mutajen Maddelerle Çalışmalarda
     Sağlık ve Güvenlik Önlemleri Hakkında Yönetmelik, Madde 7/2

342. **Soru:** İşyerinde gerçekleştirilen risk değerlendirmesi
     sonucunda çalışanların sağlığı ve güvenliği yönünden risk
     bulunduğu saptanan işlerde, Bakanlıkça istendiğinde işveren;
     kullanılan madde ve işlemler, kullanılma nedeni, üretilen ve
     kullanılan miktar, maruz kalan çalışan sayısı, alınan koruyucu
     önlemler, kullanılan koruyucu araç ve gerecin türü, maruziyetin
     türü ve düzeyi ile ikame yapılıp yapılamadığı konularında yeterli
     bilgileri veriyor mu?
     **Mevzuat:** Kanserojen veya Mutajen Maddelerle Çalışmalarda
     Sağlık ve Güvenlik Önlemleri Hakkında Yönetmelik, Madde 8

343. **Soru:** Çalışanların yüksek düzeyde maruziyetine neden
     olabilecek beklenmedik bir olay veya kaza hâlinde, işveren
     çalışanlara durum hakkında derhal bilgi veriyor mu?
     **Mevzuat:** Kanserojen veya Mutajen Maddelerle Çalışmalarda
     Sağlık ve Güvenlik Önlemleri Hakkında Yönetmelik, Madde 9/1-a

344. **Soru:** Yüksek düzeydeki maruziyet nedeni ortadan kaldırılıp
     durum normale dönünceye kadar, etkilenmiş alana sadece onarım ve
     diğer zorunlu işleri yapacak çalışanların girmesine izin
     veriliyor, bu çalışanların koruyucu giysi ve solunum koruyucu
     ekipman kullanarak mümkün olduğunca kısa süreli çalıştırılması
     sağlanıyor ve koruma sağlanmayanların etkilenmiş alanda
     çalışmasına izin verilmiyor mu?
     **Mevzuat:** Kanserojen veya Mutajen Maddelerle Çalışmalarda
     Sağlık ve Güvenlik Önlemleri Hakkında Yönetmelik, Madde 9/1-b

345. **Soru:** Çalışanların maruziyetinin önemli ölçüde artma ihtimali
     olan ve maruziyeti azaltıcı tüm teknik koruyucu önlemlerin
     hâlihazırda alınmış olduğu bakım, onarım gibi işlerde; çalışanlar
     ve/veya temsilcilerine danışıldıktan sonra, bu işlerde çalışanların
     korunmasını sağlamak ve maruziyetlerini asgari süreye indirmek
     için gerekli önlemler belirleniyor ve alınıyor mu?
     **Mevzuat:** Kanserojen veya Mutajen Maddelerle Çalışmalarda
     Sağlık ve Güvenlik Önlemleri Hakkında Yönetmelik, Madde 10/1-a

346. **Soru:** Yüksek düzeyde maruziyete neden olabilecek koşulların
     devamı süresince, çalışanların koruyucu giysi ve solunum koruyucu
     ekipman kullanmaları sağlanıyor ve bu koşullardaki çalışmaların
     mümkün olduğunca kısa süreli olması sağlanarak koşulların
     süreklilik arz etmesi engelleniyor mu?
     **Mevzuat:** Kanserojen veya Mutajen Maddelerle Çalışmalarda
     Sağlık ve Güvenlik Önlemleri Hakkında Yönetmelik, Madde 10/1-b

347. **Soru:** Yüksek maruziyet riski olan işlerin yapıldığı alanlar
     belirlenip açık bir şekilde işaretleniyor ve yetkili olmayan
     kişilerin bu alanlara girmesi önleniyor mu?
     **Mevzuat:** Kanserojen veya Mutajen Maddelerle Çalışmalarda
     Sağlık ve Güvenlik Önlemleri Hakkında Yönetmelik, Madde 10/1-c

348. **Soru:** İşyerinde gerçekleştirilen risk değerlendirmesine göre
     sağlık ve güvenlik yönünden risk bulunan alanlara, sadece işi
     veya görevi gereği bu alana girmesi gereken çalışanlara izin
     veriliyor, bunların dışındakilerin girmemesi için gerekli
     önlemler alınıyor mu?
     **Mevzuat:** Kanserojen veya Mutajen Maddelerle Çalışmalarda
     Sağlık ve Güvenlik Önlemleri Hakkında Yönetmelik, Madde 11

349. **Soru:** Kanserojen veya mutajen maddelerle kirlenme ihtimali
     olan işlerin yapıldığı yerlerde çalışanların yemeleri, içmeleri
     ve sigara kullanmaları önleniyor mu?
     **Mevzuat:** Kanserojen veya Mutajen Maddelerle Çalışmalarda
     Sağlık ve Güvenlik Önlemleri Hakkında Yönetmelik, Madde 12/1-a

350. **Soru:** Çalışanlara koruyucu giysi veya uygun özel giysi
     veriliyor ve bunların günlük kıyafetlerinden ayrı yerlerde
     saklanabilmesi için birbirinden ayrı elbise dolapları
     bulunduruluyor mu?
     **Mevzuat:** Kanserojen veya Mutajen Maddelerle Çalışmalarda
     Sağlık ve Güvenlik Önlemleri Hakkında Yönetmelik, Madde 12/1-b

351. **Soru:** Çalışanlara uygun ve yeterli yıkanma yeri, tuvalet ve
     temizlik malzemesi sağlanıyor mu?
     **Mevzuat:** Kanserojen veya Mutajen Maddelerle Çalışmalarda
     Sağlık ve Güvenlik Önlemleri Hakkında Yönetmelik, Madde 12/1-c

352. **Soru:** Kişisel koruyucu donanımların özel yerlerde ve uygun
     şartlarda saklanması sağlanıyor ve her kullanımdan sonra, mümkünse
     kullanmadan önce kontrol edilerek temizleniyor, tamir ediliyor
     veya değiştiriliyor mu?
     **Mevzuat:** Kanserojen veya Mutajen Maddelerle Çalışmalarda
     Sağlık ve Güvenlik Önlemleri Hakkında Yönetmelik, Madde 12/1-ç

353. **Soru:** Madde 12 kapsamındaki koruyucu önlemlerin maliyeti
     çalışanlara yansıtılmıyor mu?
     **Mevzuat:** Kanserojen veya Mutajen Maddelerle Çalışmalarda
     Sağlık ve Güvenlik Önlemleri Hakkında Yönetmelik, Madde 12/2

## Genel Yükümlülükler → Eğitim

354. **Soru:** İşveren; çalışanların işyerinde kullanılan kanserojen
     veya mutajen maddelerin riskleri ve etkileri, tütün kullanımının
     getirebileceği ek riskler dâhil sağlığı etkileyebilecek riskler,
     maruziyeti önlemek için alınan ve alınacak önlemler, hijyen
     kuralları, kişisel koruyucu donanımların kullanılması, kaza
     halinde yapılması gereken işler ve madde/kapların üzerindeki
     etiket ve uyarı işaretleri konularında yeterli ve uygun eğitim
     almalarını sağlıyor ve yeni bir risk ortaya çıktığında veya
     mevcut risklerde değişiklik olduğunda bu eğitimi yeniliyor mu?
     **Mevzuat:** Kanserojen veya Mutajen Maddelerle Çalışmalarda
     Sağlık ve Güvenlik Önlemleri Hakkında Yönetmelik, Madde 13

## Genel Yükümlülükler → Bilgilendirme ve Katılım

355. **Soru:** Çalışanlar ve/veya temsilcileri; kişisel koruyucu
     donanımın seçimi ve kullanılmasının çalışanların sağlık ve
     güvenliğine etkilerinin belirlenmesinde ve maruziyetin önemli
     ölçüde artma ihtimali olan bakım/onarım gibi işlerde alınacak
     önlemlerin belirlenmesinde uygulamalara katılma hakkına sahip mi?
     **Mevzuat:** Kanserojen veya Mutajen Maddelerle Çalışmalarda
     Sağlık ve Güvenlik Önlemleri Hakkında Yönetmelik, Madde 14/1

356. **Soru:** Maruziyetin yüksek olabileceği durumlar hakkında
     çalışanlar ve/veya temsilcileri en kısa sürede bilgilendiriliyor
     (olayın nedenleri, alınması gerekli koruyucu/önleyici tedbirler ve
     durumun düzeltilmesi için yapılması gereken işler dâhil) ve
     işyerinde kullanılan kanserojen veya mutajen maddelerin malzeme
     güvenlik bilgi formlarının ilgili çalışan ve/veya temsilcilerince
     kolayca ulaşılabilir olması sağlanıyor mu?
     **Mevzuat:** Kanserojen veya Mutajen Maddelerle Çalışmalarda
     Sağlık ve Güvenlik Önlemleri Hakkında Yönetmelik, Madde 14/2-3

357. **Soru:** İşveren, risk değerlendirmesine göre sağlık ve
     güvenlik yönünden riskli olan işlerde çalışanların güncellenmiş
     listesini ve maruziyet durumlarını belirten kayıtları tutuyor mu;
     bu liste ve kayıtlar işyeri hekimi, işyerinde sağlık ve
     güvenlikten sorumlu kişiler ve/veya yetkili mercilerin inceleme
     hakkına açık mı; her çalışan kendisiyle ilgili kişisel bilgileri,
     çalışanlar ve/veya temsilcileri ise bilgilerin tümünü isimsiz
     olarak alma hakkına sahip mi?
     **Mevzuat:** Kanserojen veya Mutajen Maddelerle Çalışmalarda
     Sağlık ve Güvenlik Önlemleri Hakkında Yönetmelik, Madde 14/4-7

358. **Soru:** İşveren, bu Yönetmelikte belirtilen konularda
     çalışanların ve/veya temsilcilerinin görüşlerini alıyor, teklif
     getirme hakkını tanıyor ve görüşmelere katılımlarını sağlıyor mu;
     işyerinde alınan önlemlerin yetersiz olduğu durumlarda veya
     teftiş sırasında yetkili makama başvurmalarından dolayı
     çalışanların hakları kısıtlanmıyor mu?
     **Mevzuat:** Kanserojen veya Mutajen Maddelerle Çalışmalarda
     Sağlık ve Güvenlik Önlemleri Hakkında Yönetmelik, Madde 15

## Genel Yükümlülükler → Sağlık Gözetimi

359. **Soru:** Çalışanlar; 6331 sayılı Kanunun 15 inci maddesi
     kapsamında veya işyerinde gerçekleştirilen risk değerlendirmesi
     sonuçlarına göre gerektiğinde, maruziyet öncesinde ve sonrasında
     düzenli aralıklarla sağlık gözetimine tabi tutuluyor ve işyerinde
     kişisel ve mesleki hijyen önlemlerinin derhal alınabilmesi için
     gerekli düzenlemeler yapılıyor mu?
     **Mevzuat:** Kanserojen veya Mutajen Maddelerle Çalışmalarda
     Sağlık ve Güvenlik Önlemleri Hakkında Yönetmelik, Madde 16/1

360. **Soru:** Sağlık gözetimi sonucunda saptanan sağlık sorununun
     kanserojen veya mutajen maddelere maruziyet nedeniyle oluştuğunun
     tespiti halinde; çalışanların kişisel sağlık kayıtları tutuluyor,
     işyeri hekimi tarafından koruyucu/önleyici tedbirler öneriliyor,
     çalışana maruziyet sonrası takip bilgisi veriliyor, işyerinde
     yapılan risk değerlendirmesi ve alınan önlemler gözden
     geçiriliyor, gerekli görülürse çalışan maruz kalmayacağı başka bir
     işte görevlendiriliyor ve benzer biçimde maruz kalan diğer
     çalışanlar da düzenli sağlık gözetimine tabi tutuluyor mu?
     **Mevzuat:** Kanserojen veya Mutajen Maddelerle Çalışmalarda
     Sağlık ve Güvenlik Önlemleri Hakkında Yönetmelik, Madde 16/2

361. **Soru:** Çalışanın kendisi veya işveren, sağlık gözetimi
     sonuçlarının yeniden değerlendirilmesini isteyebiliyor mu ve
     çalışanlar kendilerine ait sağlık gözetimi sonuçlarına ait
     bilgileri alma hakkına sahip mi?
     **Mevzuat:** Kanserojen veya Mutajen Maddelerle Çalışmalarda
     Sağlık ve Güvenlik Önlemleri Hakkında Yönetmelik, Madde 16/3

362. **Soru:** İşyerinde, sağlık hizmeti sunucuları veya işyeri hekimi
     tarafından kanserojen veya mutajen maddelere maruziyet nedeniyle
     oluştuğu ön tanısı konulan tüm kanser vakaları, 6331 sayılı
     Kanunun 14 üncü maddesi uyarınca ilgili kurum ve kuruluşlara
     bildiriliyor mu?
     **Mevzuat:** Kanserojen veya Mutajen Maddelerle Çalışmalarda
     Sağlık ve Güvenlik Önlemleri Hakkında Yönetmelik, Madde 16/5

## İş Hijyeni → Kanserojen veya Mutajen Maddeler

363. **Soru:** Madde 14 ve 16'da belirtilen maruziyet ve sağlık
     gözetimi kayıtları, maruziyetin sona ermesinden sonra en az 40 yıl
     süre ile saklanıyor mu ve işyerinde faaliyetin sona ermesi
     halinde işveren bu kayıtları Sosyal Güvenlik Kurumu İl
     Müdürlüğüne teslim ediyor mu?
     **Mevzuat:** Kanserojen veya Mutajen Maddelerle Çalışmalarda
     Sağlık ve Güvenlik Önlemleri Hakkında Yönetmelik, Madde 17

## İş Hijyeni → Kimyasal Maddeler (YENİ alt kategori)

364. **Soru:** İşveren, kimyasal maddelerle çalışmalarda çalışanların
     bu maddelere maruziyetini önlemek, bunun mümkün olmadığı hallerde
     en aza indirmek ve çalışanların bu maddelerin tehlikelerinden
     korunması için gerekli tüm önlemleri alıyor mu?
     **Mevzuat:** Kimyasal Maddelerle Çalışmalarda Sağlık ve Güvenlik
     Önlemleri Hakkında Yönetmelik, Madde 5

365. **Soru:** İşveren, işyerinde tehlikeli kimyasal madde bulunup
     bulunmadığını tespit etmek üzere risk değerlendirmesi yapıyor mu;
     bu değerlendirmede kimyasal maddenin sağlık ve güvenlik yönünden
     tehlike ve zararları, güvenlik bilgi formu, yetkilendirilmiş
     laboratuvar tarafından tespit edilen maruziyetin türü/düzeyi/
     süresi, maddenin miktarı/kullanma şartları/kullanım sıklığı,
     mesleki maruziyet sınır değerleri ve biyolojik sınır değerleri,
     alınan önlemlerin etkisi, önceki sağlık gözetimi sonuçları,
     birden fazla kimyasal maddenin birbirleriyle etkileşimi ve bakım,
     onarım, kurulum gibi işlerdeki maruziyet riskleri dikkate alınıyor
     mu?
     **Mevzuat:** Kimyasal Maddelerle Çalışmalarda Sağlık ve Güvenlik
     Önlemleri Hakkında Yönetmelik, Madde 6/1-2

366. **Soru:** Tehlikeli kimyasal maddeler içeren yeni bir faaliyete,
     ancak risk değerlendirmesi yapılarak belirlenen her türlü önlem
     alındıktan sonra başlanıyor mu?
     **Mevzuat:** Kimyasal Maddelerle Çalışmalarda Sağlık ve Güvenlik
     Önlemleri Hakkında Yönetmelik, Madde 6/4

367. **Soru:** İşyerinde uygun düzenleme ve iş organizasyonu yapılıyor,
     tehlikeli kimyasal maddelerle çalışmalar en az sayıda çalışan ile
     yürütülüyor, çalışanların maruz kalacağı madde miktarı ve
     maruziyet süreleri ile işyerinde kullanılması gereken kimyasal
     madde miktarı mümkün olan en az düzeyde tutuluyor mu?
     **Mevzuat:** Kimyasal Maddelerle Çalışmalarda Sağlık ve Güvenlik
     Önlemleri Hakkında Yönetmelik, Madde 7/1-a,b,c,ç

368. **Soru:** İşyeri bina ve eklentileri her zaman düzenli ve temiz
     tutuluyor, çalışanların kişisel temizlikleri için uygun ve
     yeterli şartlar sağlanıyor ve tehlikeli kimyasal maddelerin, atık
     ve artıkların işlenmesi, kullanılması, taşınması ve depolanması
     için gerekli düzenlemeler yapılıyor mu?
     **Mevzuat:** Kimyasal Maddelerle Çalışmalarda Sağlık ve Güvenlik
     Önlemleri Hakkında Yönetmelik, Madde 7/1-d,e,f

369. **Soru:** İkame yöntemi uygulanarak tehlikeli kimyasal madde
     yerine çalışanların sağlık ve güvenliği yönünden tehlikesiz veya
     daha az tehlikeli olan kimyasal madde kullanılıyor mu; ikame
     yöntemi kullanılamadığında risk değerlendirmesi sonucuna göre
     öncelik sırasıyla uygun proses/mühendislik kontrol sistemleri ve
     yeterli havalandırma gibi toplu koruma önlemleri, bunların
     yetersiz kaldığı hallerde de kişisel korunma yöntemleri
     uygulanıyor mu?
     **Mevzuat:** Kimyasal Maddelerle Çalışmalarda Sağlık ve Güvenlik
     Önlemleri Hakkında Yönetmelik, Madde 7/1-g

370. **Soru:** Alınan önlemlerin etkinliğini ve sürekliliğini sağlamak
     üzere yeterli kontrol, denetim ve gözetim sağlanıyor mu; çalışanların
     sağlığı için risk oluşturabilecek kimyasal maddelerin düzenli
     ölçüm ve analizi yapılıyor (maruziyeti etkileyebilecek koşul
     değişikliklerinde tekrarlanıyor) mu; mesleki maruziyet sınır
     değerlerinin aşıldığı durumlarda en kısa sürede koruyucu ve
     önleyici tedbirler alınıyor mu?
     **Mevzuat:** Kimyasal Maddelerle Çalışmalarda Sağlık ve Güvenlik
     Önlemleri Hakkında Yönetmelik, Madde 7/1-ğ,h,ı

371. **Soru:** İşveren, parlayıcı ve patlayıcı maddelerin tehlikeli
     konsantrasyonlara ulaşmasının ve kimyasal olarak kararsız
     maddelerin tehlikeli miktarlarda bulunmasının önlenmesi, bu
     mümkün değilse yangın veya patlamaya sebep olabilecek tutuşturucu
     kaynakların bulunmasının önlenmesi, bu da mümkün değilse yangın
     veya patlama halinde çalışanların zarar görmesinin önlenmesi
     veya en aza indirilmesi şeklinde öncelik sıralı teknik önlemleri
     alıyor ve idari düzenlemeleri yapıyor mu?
     **Mevzuat:** Kimyasal Maddelerle Çalışmalarda Sağlık ve Güvenlik
     Önlemleri Hakkında Yönetmelik, Madde 7/1-i

372. **Soru:** İş ekipmanı ve çalışanların korunması için sağlanan
     koruyucu sistemlerin tasarımı, imali ve temini mevzuata (patlayıcı
     ortamlarda kullanılacak donanım ve koruyucu sistemler için ilgili
     yönetmelik dâhil) uygun şekilde yapılıyor mu; patlama basıncının
     etkisini azaltacak düzenlemeler yapılıyor, tesis/makine/ekipmanın
     sürekli kontrol altında tutulması sağlanıyor ve tehlikeli
     kimyasal maddelerin depolandığı tanklar ilgili standartlara (TS
     EN 14197, TS EN ISO 21009) uygun mu?
     **Mevzuat:** Kimyasal Maddelerle Çalışmalarda Sağlık ve Güvenlik
     Önlemleri Hakkında Yönetmelik, Madde 7/1-j,k,l,m

373. **Soru:** İşyerindeki tehlikeli kimyasal maddelerden kaynaklanacak
     acil durumlarda, olumsuz etkileri azaltacak önleyici tedbirler
     derhal alınıyor ve çalışanlar durumdan haberdar ediliyor mu;
     etkilenmiş alana sadece bakım, onarım ve zorunlu işlerin
     yapılması için görevlendirilen çalışanlar ile işyeri dışından
     gelen ekiplerin girmesine izin veriliyor mu?
     **Mevzuat:** Kimyasal Maddelerle Çalışmalarda Sağlık ve Güvenlik
     Önlemleri Hakkında Yönetmelik, Madde 8/1-a

374. **Soru:** Etkilenmiş alana girmesine izin verilen kişilere uygun
     kişisel koruyucu donanım ve özel güvenlik ekipmanı veriliyor ve
     acil durum devam ettiği sürece kullanmaları sağlanıyor mu; uygun
     donanımı bulunmayan kişilerin etkilenmiş alana girmesine izin
     verilmiyor mu?
     **Mevzuat:** Kimyasal Maddelerle Çalışmalarda Sağlık ve Güvenlik
     Önlemleri Hakkında Yönetmelik, Madde 8/1-b

375. **Soru:** Tehlikeli kimyasallarla ilgili bilgiler ve acil durum
     müdahale ve tahliye prosedürleri kullanıma hazır bulunduruluyor
     ve işyerindeki görevli çalışanlar ile işyeri dışındaki ilk
     yardım, acil tıbbi müdahale, kurtarma ve yangınla mücadele
     konularında faaliyet gösteren kuruluşların bu bilgilere kolayca
     ulaşabilmesi sağlanıyor mu?
     **Mevzuat:** Kimyasal Maddelerle Çalışmalarda Sağlık ve Güvenlik
     Önlemleri Hakkında Yönetmelik, Madde 8/1-c

376. **Soru:** Ek-3'te liste halinde belirtilen kimyasal maddelerin
     belirtilen oranlardan fazla bulunması halinde, bu maddelerin
     üretilmesi, kullanılması ve bu maddelerle işlem yapılması
     yasaklanıyor mu?
     **Mevzuat:** Kimyasal Maddelerle Çalışmalarda Sağlık ve Güvenlik
     Önlemleri Hakkında Yönetmelik, Madde 11/a

377. **Soru:** Ek-3'te belirtilen maddelerle yalnızca bilimsel
     araştırma ve deneylerde, yan ürün/atık maddelerden ayırma
     işlerinde veya teknoloji gereği zorunlu ara madde kullanımında;
     tam kapalı sistemlerde, mümkün olan en az miktarlarda ve
     çalışanların maruziyetinin önlenmesi şartıyla Bakanlıktan izin
     alınarak ve izin başvurusunda istenen bilgiler (izin isteme
     nedeni, yıllık kullanım miktarı, çalışacak kişi sayısı,
     kullanılacağı işler/reaksiyonlar/prosesler, alınan önlemler)
     Bakanlığa verilerek çalışma yapılıyor mu?
     **Mevzuat:** Kimyasal Maddelerle Çalışmalarda Sağlık ve Güvenlik
     Önlemleri Hakkında Yönetmelik, Madde 11/b,c

378. **Soru:** Yapılan risk değerlendirmesi sonucunda sağlık yönünden
     risk altında olduğu saptanan çalışanlar; belirli bir hastalık
     veya olumsuz etkilenmeye neden olduğu bilinen maddeye maruziyet,
     özel çalışma şartlarında hastalık/etkilenme olasılığı ve
     çalışanlar üzerindeki tetkiklerin oluşturduğu riskin kabul
     edilebilir düzeyde olduğu, ayrıca hastalık/etkilenmeyi tespit
     edecek geçerli tekniklerin bulunduğu durumlarda uygun sağlık
     gözetimine tabi tutuluyor mu?
     **Mevzuat:** Kimyasal Maddelerle Çalışmalarda Sağlık ve Güvenlik
     Önlemleri Hakkında Yönetmelik, Madde 12/1-a,b,c

379. **Soru:** Ek-2'de belirtilen biyolojik sınır değeri bulunan
     tehlikeli kimyasal maddelerle çalışmalarda, aynı ekteki prosedüre
     uygun sağlık gözetimi yapılıyor ve çalışanlar bu işe başlamadan
     önce bu durumdan haberdar ediliyor mu?
     **Mevzuat:** Kimyasal Maddelerle Çalışmalarda Sağlık ve Güvenlik
     Önlemleri Hakkında Yönetmelik, Madde 12/1-ç

380. **Soru:** Sağlık gözetimine tabi tutulan her çalışan için kişisel
     sağlık ve maruziyet kayıtları tutuluyor ve güncelleniyor, bu
     kayıtlar gizliliği dikkate alınarak uygun bir şekilde muhafaza
     ediliyor ve istenmesi halinde bir örneği Bakanlığa veriliyor mu?
     **Mevzuat:** Kimyasal Maddelerle Çalışmalarda Sağlık ve Güvenlik
     Önlemleri Hakkında Yönetmelik, Madde 12/1-d,e,f,g

381. **Soru:** İşyerinde faaliyetin sona ermesi halinde, işveren
     sağlık ve maruziyet kayıtlarını Sosyal Güvenlik Kurumu il
     müdürlüğüne teslim ediyor mu?
     **Mevzuat:** Kimyasal Maddelerle Çalışmalarda Sağlık ve Güvenlik
     Önlemleri Hakkında Yönetmelik, Madde 12/1-h

382. **Soru:** Sağlık gözetimi sonucunda, tehlikeli kimyasal maddeye
     maruz kalan çalışanda bu maddeden kaynaklanan tanımlanabilir bir
     hastalık/olumsuz sağlık etkisi görülmesi veya biyolojik sınır
     değerin aşıldığının tespit edilmesi halinde; çalışan durumdan
     haberdar edilip gerekli bilgi/tavsiyeler veriliyor, risk
     değerlendirmesi gözden geçirilip gerekirse yenileniyor, Madde
     7 kapsamındaki önlemler gözden geçiriliyor, gerekirse çalışan
     maruziyet riski olmayan başka bir işte görevlendiriliyor ve
     benzer biçimde maruz kalan diğer çalışanlar da sürekli sağlık
     gözetimi altında tutuluyor mu?
     **Mevzuat:** Kimyasal Maddelerle Çalışmalarda Sağlık ve Güvenlik
     Önlemleri Hakkında Yönetmelik, Madde 12/1-ı

## Genel Yükümlülükler → Eğitim

383. **Soru:** İşveren; çalışanlara ve temsilcilerine, risk
     değerlendirmesi sonucunda elde edilen bilgiler, işyerinde bulunan
     veya ortaya çıkabilecek tehlikeli kimyasal maddelerin tanınması/
     sağlık ve güvenlik riskleri/meslek hastalıkları/mesleki maruziyet
     sınır değerleri, kendilerini ve diğer çalışanları tehlikeye
     atmamaları için gerekli önlemler, güvenlik bilgi formları ve
     etiketleme/kilitleme ile ilgili konularda eğitim ve bilgilendirme
     sağlıyor mu; bu eğitim ve bilgiler, risk değerlendirmesi sonucu
     ortaya çıkan riskin derecesine göre sözlü talimat ve yazılı
     bilgilerle destekleniyor ve değişen şartlara göre güncelleniyor
     mu?
     **Mevzuat:** Kimyasal Maddelerle Çalışmalarda Sağlık ve Güvenlik
     Önlemleri Hakkında Yönetmelik, Madde 9

## Genel Yükümlülükler → Bilgilendirme ve Katılım

384. **Soru:** İşveren, bu Yönetmelik ve eklerinde belirtilen
     konularda çalışanların ve/veya temsilcilerinin görüşlerini alıyor
     ve katılımlarını sağlıyor mu?
     **Mevzuat:** Kimyasal Maddelerle Çalışmalarda Sağlık ve Güvenlik
     Önlemleri Hakkında Yönetmelik, Madde 10

385. **Soru:** Çalışanlar, kendilerine ait sağlık muayene sonuçları ve
     etkilenme düzeylerine ait bilgileri görme hakkına sahip mi?
     **Mevzuat:** Kimyasal Maddelerle Çalışmalarda Sağlık ve Güvenlik
     Önlemleri Hakkında Yönetmelik, Madde 12/1-ğ

## Genel Yükümlülükler → Gebe, yeni doğum yapmış ve emziren kadın çalışanlar

386. **Soru:** İşveren, gebe veya emziren çalışanın sağlık ve güvenliği
     için tehlikeli sayılan kimyasal, fiziksel, biyolojik etkenlerin ve
     çalışma süreçlerinin çalışan üzerindeki etkilerini değerlendiriyor,
     bu değerlendirmeye göre Ek-I'de belirtilen genel ve özel önlemleri
     alıyor ve çalışanı değerlendirme sonuçları ile alınması gereken
     önlemler hakkında bilgilendiriyor mu?
     **Mevzuat:** Gebe veya Emziren Kadınların Çalıştırılma Şartlarıyla
     Emzirme Odaları ve Çocuk Bakım Yurtlarına Dair Yönetmelik, Madde
     6/2-4

387. **Soru:** Değerlendirme sonuçları gebe veya emziren çalışan için
     sağlık ve güvenlik riski ortaya çıkardığında, işveren ilgili
     çalışanın çalışma koşullarını ve/veya çalışma saatlerini geçici
     olarak değiştiriyor mu; bu mümkün olmadığında çalışanı başka bir
     işe aktarmak için gerekli önlemleri alıyor mu?
     **Mevzuat:** Gebe veya Emziren Kadınların Çalıştırılma Şartlarıyla
     Emzirme Odaları ve Çocuk Bakım Yurtlarına Dair Yönetmelik, Madde
     7/1-2

388. **Soru:** Sağlık raporuyla gerekli görülmesi halinde gebe çalışan,
     ücretinde kesinti yapılmadan daha hafif işlerde çalıştırılıyor mu;
     başka bir işe aktarılması mümkün değilse isteği halinde ücretsiz
     izinli sayılması sağlanıyor (bu sürenin yıllık ücretli izin
     hesabına dahil edilmemesi) mu?
     **Mevzuat:** Gebe veya Emziren Kadınların Çalıştırılma Şartlarıyla
     Emzirme Odaları ve Çocuk Bakım Yurtlarına Dair Yönetmelik, Madde
     7/3

389. **Soru:** Gebe olduğu sağlık raporuyla tespit edilen kadın
     çalışan doğuma kadar, yeni doğum yapmış çalışan ise doğumu
     izleyen bir yıl boyunca (sağlık ve güvenlik açısından sakıncalı
     olunduğu sürece daha uzun) gece çalışmaya zorlanmıyor mu?
     **Mevzuat:** Gebe veya Emziren Kadınların Çalıştırılma Şartlarıyla
     Emzirme Odaları ve Çocuk Bakım Yurtlarına Dair Yönetmelik, Madde 8
     **Not:** Kadın Çalışanların Gece Postalarında Çalıştırılma
     Koşulları Hakkında Yönetmelik Madde 9 (soru 314) ile aynı konuyu
     düzenliyor; mükerrer değil, bu yönetmeliğin kendi hükmü olarak
     ayrı soru olarak eklendi.

390. **Soru:** Gebe veya emziren çalışan günde yedi buçuk saatten
     fazla çalıştırılıyor mu?
     **Mevzuat:** Gebe veya Emziren Kadınların Çalıştırılma Şartlarıyla
     Emzirme Odaları ve Çocuk Bakım Yurtlarına Dair Yönetmelik, Madde 9

391. **Soru:** Çalışanın analık ve süt izni, 4857 sayılı İş Kanununun
     74 üncü maddesi hükümlerine uygun şekilde uygulanıyor mu?
     **Mevzuat:** Gebe veya Emziren Kadınların Çalıştırılma Şartlarıyla
     Emzirme Odaları ve Çocuk Bakım Yurtlarına Dair Yönetmelik, Madde 10
     **Not:** Soru 13'te İş Kanunu Madde 74 zaten soruldu; bu
     yönetmelik aynı hükme ayrı bir atıf mevzuatı olarak referans
     veriyor — mükerrer değil, ayrı soru olarak eklendi.

392. **Soru:** Gebe çalışanlara gebelikleri süresince periyodik
     kontrolleri için ücretli izin veriliyor mu?
     **Mevzuat:** Gebe veya Emziren Kadınların Çalıştırılma Şartlarıyla
     Emzirme Odaları ve Çocuk Bakım Yurtlarına Dair Yönetmelik, Madde 11

393. **Soru:** Emziren çalışanlar, doğum izninin bitiminde ve işe
     başlamadan önce çalışmaya engel durumları olmadığının raporla
     belirlenmesi şartına uyularak çalıştırılıyor mu; çalışmasının
     sakıncalı olduğu hekim raporuyla belirlenen çalışan, raporda
     belirtilen süre ve işlerde çalıştırılmıyor mu?
     **Mevzuat:** Gebe veya Emziren Kadınların Çalıştırılma Şartlarıyla
     Emzirme Odaları ve Çocuk Bakım Yurtlarına Dair Yönetmelik, Madde 12

## Genel Yükümlülükler → Emzirme Odaları ve Çocuk Bakım Yurtları (YENİ alt kategori)

394. **Soru:** 100-150 kadın çalışanı olan işyerlerinde Ek-IV
     şartlarını taşıyan bir emzirme odası, 150'den çok kadın çalışanı
     olan işyerlerinde ise 0-6 yaşındaki çocuklar için bir yurt
     kuruluyor mu (işverenler ortaklaşa oda/yurt kurabilir veya
     yetkili yurtlarla anlaşma yapabilir)?
     **Mevzuat:** Gebe veya Emziren Kadınların Çalıştırılma Şartlarıyla
     Emzirme Odaları ve Çocuk Bakım Yurtlarına Dair Yönetmelik, Madde 13
     **Not:** Madde 5/3-5'teki hesaplama kuralları (statü ayrımı
     yapılmaksızın tüm çalışanların sayılması, belediye/mücavir alan
     sınırındaki işyerlerinin toplam çalışan sayısının esas alınması,
     annesi ölmüş/velayeti babaya verilmiş erkek çalışanların sayıma
     dahil edilmesi) bu yükümlülüğün uygulanma usulü olarak aynı
     soruya dahil edildi, ayrı soru açılmadı.

395. **Soru:** Oda ve yurtlardan sadece kadın çalışanların çocukları
     ile annesi ölmüş veya velayeti babaya verilmiş erkek çalışanların
     çocukları faydalanıyor, çocuklar yaş gruplarına göre (0-24 ay,
     25-48 ay, 49 ay ve üzeri) birbirinden ayrı bulunduruluyor ve
     amaç dışı kullanım/yabancı kişi girişi önleniyor mu?
     **Mevzuat:** Gebe veya Emziren Kadınların Çalıştırılma Şartlarıyla
     Emzirme Odaları ve Çocuk Bakım Yurtlarına Dair Yönetmelik, Madde 14

396. **Soru:** Oda ve yurtlara kabul edilen çocuklar için kayıt-kabul
     defteri tutuluyor ve tamamen ayrılan çocukların ayrılış nedeni,
     tarihi ve kiminle çıktığı gözlem kağıdına ve kayıt defterine
     işleniyor mu?
     **Mevzuat:** Gebe veya Emziren Kadınların Çalıştırılma Şartlarıyla
     Emzirme Odaları ve Çocuk Bakım Yurtlarına Dair Yönetmelik, Madde 15

397. **Soru:** Oda ve yurtlarda çocukların vücut ısısının ölçülmesi
     için termometreler ve gerekli ilaç/tıbbi gereçler bulunduruluyor,
     bunlar özel bir dolapta saklanıp işyeri hekimince düzenli gözden
     geçirilerek bozulmuş/eksik olanlar yenileniyor mu?
     **Mevzuat:** Gebe veya Emziren Kadınların Çalıştırılma Şartlarıyla
     Emzirme Odaları ve Çocuk Bakım Yurtlarına Dair Yönetmelik, Madde 16

398. **Soru:** Oda/yurt yöneticisi olarak, ilgili alanlarda (eğitim
     yönetimi, sosyal hizmetler, çocuk gelişimi, psikoloji vb.)
     yükseköğrenim görmüş veya okul öncesi öğretmenliği unvanına
     sahip bir kişi görevlendiriliyor mu?
     **Mevzuat:** Gebe veya Emziren Kadınların Çalıştırılma Şartlarıyla
     Emzirme Odaları ve Çocuk Bakım Yurtlarına Dair Yönetmelik, Madde
     17/a

399. **Soru:** Oda ve yurtlar işyeri hekiminin tıbbi gözetimi altında
     mı; çocukların sağlık durumu düzenli aralıklarla kontrol edilip
     sağlıkla ilgili kayıtlar tutuluyor ve salgın/bulaşıcı
     hastalıklara karşı gerekli önlemler alınıyor mu?
     **Mevzuat:** Gebe veya Emziren Kadınların Çalıştırılma Şartlarıyla
     Emzirme Odaları ve Çocuk Bakım Yurtlarına Dair Yönetmelik, Madde
     17/b

400. **Soru:** Oda ve yurtların emzirme odalarında her 10 çocuk için
     bir kadın çocuk bakıcısı (yurtlarda her 20 çocuk için bir
     bakıcı), en az biri ilgili meslek eğitimini almış olmak üzere
     bulunduruluyor mu; beslenme, temizlik ve diğer hizmetler için
     yeterli sayıda personel istihdam ediliyor mu?
     **Mevzuat:** Gebe veya Emziren Kadınların Çalıştırılma Şartlarıyla
     Emzirme Odaları ve Çocuk Bakım Yurtlarına Dair Yönetmelik, Madde
     17/c

401. **Soru:** Oda ve yurtlarda çalıştırılacak tüm personelin işe
     girişte ve periyodik olarak akıl/vücut sağlığı ve bulaşıcı
     hastalıklar yönünden sağlık kontrolü yapılıyor, bulaşıcı
     hastalığı bulunanlar veya çocukların sağlık ve gelişimini
     olumsuz etkileyebilecek personel çalıştırılmıyor mu?
     **Mevzuat:** Gebe veya Emziren Kadınların Çalıştırılma Şartlarıyla
     Emzirme Odaları ve Çocuk Bakım Yurtlarına Dair Yönetmelik, Madde
     17/d

402. **Soru:** Oda/yurda kabul edilecek çocuklar işyeri hekiminin
     muayenesinden geçiriliyor mu; bulaşıcı veya tehlikeli bir
     hastalığı olan, hastalık kuşkusu bulunan veya portör olan
     çocuklar sağlıklı oldukları belirlenene kadar oda/yurda
     alınmıyor, bulaşıcı hastalığa tutulan çocuklar derhal gözlem
     odasına alınıp gerekirse sağlık kuruluşuna gönderiliyor ve
     velisi bilgilendiriliyor mu?
     **Mevzuat:** Gebe veya Emziren Kadınların Çalıştırılma Şartlarıyla
     Emzirme Odaları ve Çocuk Bakım Yurtlarına Dair Yönetmelik, Madde
     18/1-3

403. **Soru:** Oda veya yurda kabul edilen her çocuk için gözlem
     kağıdı doldurulup özel dosyasına konuyor, çocukların sağlık ve
     gelişme durumları düzenli aralıklarla işyeri hekimince sağlık
     muayenesi kağıtlarına işleniyor ve çocukların aşı takibi işyeri
     hekimince yapılarak eksik aşılı olanların velileri
     bilgilendiriliyor mu?
     **Mevzuat:** Gebe veya Emziren Kadınların Çalıştırılma Şartlarıyla
     Emzirme Odaları ve Çocuk Bakım Yurtlarına Dair Yönetmelik, Madde
     18/4-5

404. **Soru:** Oda ve yurtlarda çocukların ihtiyaçlarına göre gerekli
     besinler, kahvaltı ve yemekler (yemek listeleri işyeri hekiminin
     görüşü alınarak düzenlenerek) veriliyor ve ayrıca günde 250 gram
     dayanıklı veya pastörize süt/yoğurt veriliyor mu?
     **Mevzuat:** Gebe veya Emziren Kadınların Çalıştırılma Şartlarıyla
     Emzirme Odaları ve Çocuk Bakım Yurtlarına Dair Yönetmelik, Madde 19

405. **Soru:** Oda ve yurtlarda çocuklara psikososyal gelişimlerini
     sağlayacak okul öncesi eğitimler veriliyor mu?
     **Mevzuat:** Gebe veya Emziren Kadınların Çalıştırılma Şartlarıyla
     Emzirme Odaları ve Çocuk Bakım Yurtlarına Dair Yönetmelik, Madde 20

406. **Soru:** Oda ve yurtların bina, kuruluş, döşeme, araç, gereç,
     taşıt ve beslenme gibi giderlerinin tamamı işveren tarafından
     karşılanıyor mu; buralar ayda en az bir defa işveren veya vekili
     tarafından denetlenip görülen eksiklikler derhal gideriliyor mu?
     **Mevzuat:** Gebe veya Emziren Kadınların Çalıştırılma Şartlarıyla
     Emzirme Odaları ve Çocuk Bakım Yurtlarına Dair Yönetmelik, Madde 21

407. **Soru:** Oda ve yurtlar birden çok işveren tarafından
     kurulduğunda, bu işverenler veya vekilleri ayda en az bir defa
     toplanarak yerlerin yönetimine dair kararları alıp uygulanmasını
     sağlıyor mu?
     **Mevzuat:** Gebe veya Emziren Kadınların Çalıştırılma Şartlarıyla
     Emzirme Odaları ve Çocuk Bakım Yurtlarına Dair Yönetmelik, Madde 22

408. **Soru:** İşverenler, 6331 sayılı Kanun kapsamındaki işyerlerinde
     açtıkları oda ve yurtlarla ilgili bilgi ve belgeleri, açılma
     tarihinden itibaren en geç 30 gün içinde bir rapor halinde Millî
     Eğitim Bakanlığı ile bağlı oldukları Çalışma ve İş Kurumu İl
     Müdürlüğüne gönderiyor mu?
     **Mevzuat:** Gebe veya Emziren Kadınların Çalıştırılma Şartlarıyla
     Emzirme Odaları ve Çocuk Bakım Yurtlarına Dair Yönetmelik, Madde 23

## Genel Yükümlülükler → Balıkçı Gemileri (YENİ alt kategori)

409. **Soru:** Kaptanın sorumluluğu saklı kalmak kaydıyla, gemi
     sahibi geminin, özellikle öngörülebilir meteorolojik koşullarda,
     çalışanların sağlık ve güvenliğini tehlikeye atmadan
     kullanılmasını sağlıyor mu?
     **Mevzuat:** Balıkçı Gemilerinde Yapılan Çalışmalarda Sağlık ve
     Güvenlik Önlemleri Hakkında Yönetmelik, Madde 5/1-a

410. **Soru:** Ciddi, yakın ve önlenemeyen tehlike durumunda çalışma
     yerini, tehlikeli bölgeyi veya gemiyi terk eden çalışanların bu
     hareketleri nedeniyle dezavantajlı duruma düşmemeleri ve
     herhangi bir zarar görmemeleri için gerekli tedbirler alınıyor
     mu?
     **Mevzuat:** Balıkçı Gemilerinde Yapılan Çalışmalarda Sağlık ve
     Güvenlik Önlemleri Hakkında Yönetmelik, Madde 5/1-b

411. **Soru:** Denizde çalışanların sağlık ve güvenliğini etkileyen
     veya etkileyebilecek bir olay meydana geldiğinde, bu olay
     ayrıntılı bir rapor halinde Sosyal Güvenlik Kurumuna ve olayın
     meydana geldiği mahallin bağlı bulunduğu liman başkanlığına
     bildiriliyor ve gemi jurnaline yazılıyor (jurnal tutma
     mecburiyeti olmayan gemilerde raporun bir örneği saklanıyor) mu?
     **Mevzuat:** Balıkçı Gemilerinde Yapılan Çalışmalarda Sağlık ve
     Güvenlik Önlemleri Hakkında Yönetmelik, Madde 5/1-c

412. **Soru:** Gemi denize elverişli koşullarda tutuluyor, kullanımına
     ve amacına uygun şekilde donatılıyor, geminin dengesiyle ilgili
     bilgi ve dokümanlar gemide bulundurulup seyirden sorumlu
     personelce erişilebiliyor ve geminin tüm hizmet koşullarında
     dengede olması sağlanıyor mu?
     **Mevzuat:** Balıkçı Gemilerinde Yapılan Çalışmalarda Sağlık ve
     Güvenlik Önlemleri Hakkında Yönetmelik, Madde 6, Ek-1/1
     **Not:** Madde 7 kapsamındaki büyük onarım/dönüşüm/değişikliklerde
     de aynı Ek-1 gerekleri uygulanır, ayrı soru açılmadı. Mevcut
     (18 metre ve üzeri) balıkçı gemileri için Ek-2'deki karşılığı,
     Geçici Madde 1 uyarınca Yönetmeliğin yürürlüğe girdiği tarihten
     itibaren 5 yıl içinde sağlanır; Ek-2 içeriği Ek-1 ile büyük
     ölçüde örtüştüğünden kullanıcı kararıyla ayrı soru yazılmadı (bu
     not soru 412-428 için geçerlidir).

413. **Soru:** Elektrik ekipmanı, mürettebatı ve gemiyi elektrikten
     kaynaklanabilecek tehlikelerden koruyacak şekilde tasarlanıp
     herhangi bir tehlike oluşturmayacak biçimde yapılıyor mu; gemide
     acil durumlarda kullanılmak üzere (dahili haberleşme, seyir
     fenerleri/acil aydınlatma, telsiz haberleşme ekipmanı gibi
     sistemleri en az üç saat kesintisiz çalıştırabilecek) bir acil
     durum elektrik güç kaynağı bulunduruluyor mu; panolar görünür
     şekilde işaretlenip düzenli kontrol ediliyor mu?
     **Mevzuat:** Balıkçı Gemilerinde Yapılan Çalışmalarda Sağlık ve
     Güvenlik Önlemleri Hakkında Yönetmelik, Madde 6, Ek-1/2.1-2.4

414. **Soru:** Kaldırma işlerinde kullanılan iş ekipmanlarının,
     kaldırma/çekme araçlarının, soğutma tesislerinin ve basınçlı
     hava sistemlerinin düzenli kontrol/test ve bakımları yapılıyor
     mu; seyir için kullanılan elektronik aygıtlar düzenli test
     ediliyor mu; yanıcı/tehlikeli gaz tüpleri belirgin şekilde
     işaretlenip hasara karşı korunuyor mu?
     **Mevzuat:** Balıkçı Gemilerinde Yapılan Çalışmalarda Sağlık ve
     Güvenlik Önlemleri Hakkında Yönetmelik, Madde 6, Ek-1/2.5-2.9

415. **Soru:** Telsiz haberleşme ekipmanı, normal şartlarda kıyıda
     veya karada bulunan en az bir istasyon ile sürekli iletişim
     kurulabilecek özellikte mi?
     **Mevzuat:** Balıkçı Gemilerinde Yapılan Çalışmalarda Sağlık ve
     Güvenlik Önlemleri Hakkında Yönetmelik, Madde 6, Ek-1/3

416. **Soru:** Acil kaçış yolları ve çıkışlarında engel bulunmuyor,
     bu yollar kolayca erişilebilir ve güvenli alana/cankurtaran
     sandallarına ulaşımı sağlıyor mu; kapılar su/yangına dayanıklı
     özellikte olup Güvenlik ve Sağlık İşaretleri Yönetmeliğine uygun
     işaretleniyor ve arıza durumunda yeterli acil durum aydınlatması
     sağlanıyor mu?
     **Mevzuat:** Balıkçı Gemilerinde Yapılan Çalışmalarda Sağlık ve
     Güvenlik Önlemleri Hakkında Yönetmelik, Madde 6, Ek-1/4

417. **Soru:** Gemi, boyutları ve kullanım şekline uygun yangın
     söndürme ekipmanı ve gerektiğinde yangın dedektörü/alarm
     sistemleriyle donatılıyor mu; bu ekipmanlar her zaman çalışır ve
     erişilebilir durumda tutuluyor, çalışanlar kullanımları
     konusunda eğitiliyor, gemi yola çıkmadan önce kontrol ediliyor
     ve düzenli aralıklarla yangın söndürme tatbikatları yapılıyor
     mu?
     **Mevzuat:** Balıkçı Gemilerinde Yapılan Çalışmalarda Sağlık ve
     Güvenlik Önlemleri Hakkında Yönetmelik, Madde 6, Ek-1/5

418. **Soru:** Kapalı çalışma yerlerinde çalışanların ihtiyaç duyacağı
     yeterli temiz hava bulunması sağlanıyor mu (mekanik havalandırma
     sistemi her zaman çalışır durumda tutuluyor mu); çalışma
     yerlerindeki ortam sıcaklığı insan yapısına uygun tutuluyor mu?
     **Mevzuat:** Balıkçı Gemilerinde Yapılan Çalışmalarda Sağlık ve
     Güvenlik Önlemleri Hakkında Yönetmelik, Madde 6, Ek-1/6-7

419. **Soru:** Çalışma yerleri mümkün olduğu ölçüde yeterli gün ışığı
     alıyor ve uygun suni aydınlatma sistemiyle donatılıyor mu;
     aydınlatma sisteminde arıza olması halinde risk oluşabilecek
     yerlerde yeterli aydınlatmayı sağlayacak acil durum aydınlatma
     sistemi bulunup düzenli test ediliyor mu?
     **Mevzuat:** Balıkçı Gemilerinde Yapılan Çalışmalarda Sağlık ve
     Güvenlik Önlemleri Hakkında Yönetmelik, Madde 6, Ek-1/8

420. **Soru:** Çalışanların bulunabileceği alanlar kaymaz malzemeden
     yapılıyor veya kaymayı/düşmeyi önleyen araçlarla donatılıyor
     mu; bölmeler halindeki çalışma yerleri yeterince ses geçirmez ve
     yalıtılmış mı; güverte/bölme/başaltı yüzeyleri hijyen
     kurallarına uygun temizlenebilir malzemeden mi?
     **Mevzuat:** Balıkçı Gemilerinde Yapılan Çalışmalarda Sağlık ve
     Güvenlik Önlemleri Hakkında Yönetmelik, Madde 6, Ek-1/9

421. **Soru:** Kapılar özel bir ekipman gerekmeden her zaman içeriden
     açılabilecek durumda mı (çalışma yerlerindeki kapılar her iki
     taraftan da açılabiliyor mu); kapılar özellikle kötü hava ve
     deniz koşullarında mümkün olan en güvenli biçimde açılıp
     kapanabiliyor mu?
     **Mevzuat:** Balıkçı Gemilerinde Yapılan Çalışmalarda Sağlık ve
     Güvenlik Önlemleri Hakkında Yönetmelik, Madde 6, Ek-1/10

422. **Soru:** Geçitler ve ulaşım yolları çalışanların güvenliğini
     sağlayacak korkuluk, tutma demiri veya benzeri araçlarla
     donatılıyor mu; güvertedeki boşluklara veya bir güverteden
     diğerine düşme riski bulunan yerlerde yeterli koruma (demir
     korkuluklarla sağlanıyorsa en az 1 metre yükseklikte) sağlanıyor
     mu?
     **Mevzuat:** Balıkçı Gemilerinde Yapılan Çalışmalarda Sağlık ve
     Güvenlik Önlemleri Hakkında Yönetmelik, Madde 6, Ek-1/11

423. **Soru:** Çalışma alanları temiz tutuluyor ve düşme riskine
     karşı yeterli koruma sağlıyor mu; makineler makine dairesinden
     kontrol ediliyorsa izole/ses geçirmez bir bölümden kontrol
     edilebiliyor mu; çekme ekipmanının kumanda sistemleri uygun
     genişlikte bir alanda, acil durdurma tertibatı dahil koruyucu
     donanımla ve operatöre yeterli görüş açısıyla tesis ediliyor mu;
     kötü hava/deniz koşullarını uyaracak nitelikli personel
     bulunduruluyor mu?
     **Mevzuat:** Balıkçı Gemilerinde Yapılan Çalışmalarda Sağlık ve
     Güvenlik Önlemleri Hakkında Yönetmelik, Madde 6, Ek-1/12

424. **Soru:** Çalışanların yaşam bölümlerinin yeri, yapısı, ses
     geçirmezliği ve yalıtımı; kokulardan, gürültü ve titreşimden,
     hava ve deniz koşullarından koruyacak biçimde tesis ediliyor,
     sürekli temiz hava girişi ve uygun aydınlatma (genel, azaltılmış
     ve ranza başı aydınlatma) sağlanıyor mu; mutfak/yemekhane yeterli
     büyüklükte, iyi aydınlatılmış, kolay temizlenebilir ve uygun
     havalandırılmış mı?
     **Mevzuat:** Balıkçı Gemilerinde Yapılan Çalışmalarda Sağlık ve
     Güvenlik Önlemleri Hakkında Yönetmelik, Madde 6, Ek-1/13

425. **Soru:** Gemilerin yaşam bölümlerinde, soğuk ve sıcak akar
     suyu olan banyo, tuvalet ve el yüz yıkama yerleri uygun şekilde
     havalandırılarak bulunduruluyor mu; her çalışanın elbiselerini
     koyabileceği uygun bir yeri var mı?
     **Mevzuat:** Balıkçı Gemilerinde Yapılan Çalışmalarda Sağlık ve
     Güvenlik Önlemleri Hakkında Yönetmelik, Madde 6, Ek-1/14

426. **Soru:** Gemide, Seyir Halindeki Gemilerde Daha İyi Tıbbi
     Hizmet Verilmesi için Gerekli Asgari Sağlık ve Güvenlik Koşulları
     Hakkında Yönetmeliğin Ek-2'sinde yer alan ilk yardım malzemesi
     bulunduruluyor mu?
     **Mevzuat:** Balıkçı Gemilerinde Yapılan Çalışmalarda Sağlık ve
     Güvenlik Önlemleri Hakkında Yönetmelik, Madde 6, Ek-1/15

427. **Soru:** Gemiye güvenli biçimde geçişi sağlayan bir borda
     iskelesi, giriş iskelesi veya benzer bir ekipman bulunduruluyor
     mu?
     **Mevzuat:** Balıkçı Gemilerinde Yapılan Çalışmalarda Sağlık ve
     Güvenlik Önlemleri Hakkında Yönetmelik, Madde 6, Ek-1/16

428. **Soru:** Geminin büyüklüğü dikkate alınarak, çalışma
     yerlerindeki ve yaşam bölümlerindeki gürültü düzeyini en aza
     indirmek için gerekli teknik önlemler alınıyor mu?
     **Mevzuat:** Balıkçı Gemilerinde Yapılan Çalışmalarda Sağlık ve
     Güvenlik Önlemleri Hakkında Yönetmelik, Madde 6, Ek-1/17

429. **Soru:** Gemilerin ve bunların Ek-1 ve Ek-2'de belirtilen bütün
     aksam ve ekipmanının teknik bakımı düzenli olarak yapılıyor ve
     çalışanların sağlık ve güvenliğini etkileyecek herhangi bir arıza
     oluştuğunda en kısa sürede gideriliyor mu?
     **Mevzuat:** Balıkçı Gemilerinde Yapılan Çalışmalarda Sağlık ve
     Güvenlik Önlemleri Hakkında Yönetmelik, Madde 8/1-a

430. **Soru:** Gemiler ve bunların bütün aksam ve ekipmanı düzenli
     olarak temizlenip uygun hijyen koşullarında olması sağlanıyor
     mu?
     **Mevzuat:** Balıkçı Gemilerinde Yapılan Çalışmalarda Sağlık ve
     Güvenlik Önlemleri Hakkında Yönetmelik, Madde 8/1-b

431. **Soru:** Gemide yeterli sayıda uygun acil durum ve can kurtarma
     ekipmanı kullanıma hazır halde bulunduruluyor mu?
     **Mevzuat:** Balıkçı Gemilerinde Yapılan Çalışmalarda Sağlık ve
     Güvenlik Önlemleri Hakkında Yönetmelik, Madde 8/1-c

432. **Soru:** Gemideki kişi sayısı ve çalışma alanı dikkate
     alınarak, çalışanları sudan kurtarmak için gerekli araçların ve
     acil konum gösteren hidrostatik tertibatlı telsiz vericisinin
     bulunduğu yeterli can kurtarma ve hayatta kalma ekipmanı
     bulunduruluyor; bu ekipman daima asıl yerinde, çalışır ve hemen
     kullanılabilir durumda tutuluyor ve gemi limandan ayrılmadan
     önce ve sefer sırasında düzenli olarak kontrol ediliyor mu?
     **Mevzuat:** Balıkçı Gemilerinde Yapılan Çalışmalarda Sağlık ve
     Güvenlik Önlemleri Hakkında Yönetmelik, Madde 8/1-ç, Ek-3/1-3

433. **Soru:** Bütün çalışanlara acil durumlarda yapılması gereken
     işlerle ilgili uygulamalı eğitim ve talimat veriliyor mu; 45
     metreden fazla veya beş ve daha çok çalışanı bulunan gemilerde
     acil durum görevlilerinin listesi ve görev talimatları
     hazırlanıyor mu; limanda veya denizde ayda bir kez hayat kurtarma
     tatbikatı yapılıyor mu?
     **Mevzuat:** Balıkçı Gemilerinde Yapılan Çalışmalarda Sağlık ve
     Güvenlik Önlemleri Hakkında Yönetmelik, Madde 8/1-ç, Ek-3/4-6

434. **Soru:** Toplu veya teknik koruma yöntemleriyle risk önlenemediği
     veya yeterince azaltılamadığı durumlarda çalışanlara kişisel
     koruyucu donanım sağlanıyor mu; giysi şeklinde veya giysi
     üzerine giyilen KKD, deniz ortamıyla kontrast oluşturacak ve
     açıkça görülebilecek parlak renklerde mi?
     **Mevzuat:** Balıkçı Gemilerinde Yapılan Çalışmalarda Sağlık ve
     Güvenlik Önlemleri Hakkında Yönetmelik, Madde 8/1-d, Ek-4

435. **Soru:** Gemi sahibi, çalışanların sağlık ve güvenliğinin
     korunması ile ilgili olarak kaptana, bu Yönetmelikte belirtilen
     yükümlülüklerini yerine getirebilmesi için gerekli her türlü
     imkânı sağlıyor mu?
     **Mevzuat:** Balıkçı Gemilerinde Yapılan Çalışmalarda Sağlık ve
     Güvenlik Önlemleri Hakkında Yönetmelik, Madde 8/2

## Genel Yükümlülükler → Eğitim

436. **Soru:** Çalışanlara, gemilerde sağlık ve güvenlik, özellikle
     kazaların önlenmesi konusunda net, kolay ve anlaşılır uygun
     eğitim veriliyor mu; bu eğitim yangınla mücadele, can kurtarma
     ekipmanının kullanılması, balık avlama ve çekme ekipmanının
     kullanılması ve el işaretleri dahil işaretlerin kullanılması
     hususlarını kapsıyor ve gemideki çalışmalarda değişiklik olması
     halinde güncelleniyor mu?
     **Mevzuat:** Balıkçı Gemilerinde Yapılan Çalışmalarda Sağlık ve
     Güvenlik Önlemleri Hakkında Yönetmelik, Madde 10

437. **Soru:** Bir gemiyi sevk ve idare edecek kişiye; iş kazaları ve
     meslek hastalıklarının önlenmesi ve kaza halinde yapılması
     gereken işler, öngörülebilir yükleme/avlanma koşullarında
     geminin dengeli ve güvenli bulundurulması ile radyo navigasyonu
     ve iletişimi ile ilgili yöntem ve kurallar konularında ayrıntılı
     eğitim veriliyor mu?
     **Mevzuat:** Balıkçı Gemilerinde Yapılan Çalışmalarda Sağlık ve
     Güvenlik Önlemleri Hakkında Yönetmelik, Madde 11

## Genel Yükümlülükler → Bilgilendirme ve Katılım

438. **Soru:** Gemi sahipleri/donatanlar veya kaptan; gemilerdeki
     çalışanları veya çalışan temsilcilerini, geminin tümü ile
     çalışanın çalışmakta olduğu bölümde veya yaptığı her işte
     yürütülen faaliyetler, sağlık ve güvenlik riskleri ve alınacak
     tüm önlemler hakkında yazılı ve sözlü, kolay ve anlaşılır şekilde
     bilgilendiriyor mu?
     **Mevzuat:** Balıkçı Gemilerinde Yapılan Çalışmalarda Sağlık ve
     Güvenlik Önlemleri Hakkında Yönetmelik, Madde 9

439. **Soru:** İş sağlığı ve güvenliği konularında ve özellikle bu
     Yönetmelikte ve eklerinde belirtilen konularda çalışan ve/veya
     temsilcilerinin görüşleri alınıyor ve katılımları sağlanıyor mu?
     **Mevzuat:** Balıkçı Gemilerinde Yapılan Çalışmalarda Sağlık ve
     Güvenlik Önlemleri Hakkında Yönetmelik, Madde 12

## İş Hijyeni → Titreşim (YENİ alt kategori)

440. **Soru:** İşveren, çalışanların maruz kaldığı mekanik titreşim
     düzeyini işyerinde gerçekleştirilen risk değerlendirmesinde ele
     alıyor, gerekiyorsa yetkili laboratuvara ölçüm yaptırıyor ve
     değerlendirme/ölçüm sonuçlarını denetimlerde gösterilmek üzere
     uygun şekilde saklıyor mu?
     **Mevzuat:** Çalışanların Titreşimle İlgili Risklerden
     Korunmalarına Dair Yönetmelik, Madde 6

441. **Soru:** Risk değerlendirmesinde; maruziyetin türü, düzeyi ve
     süresi, maruziyet sınır değerleri ve maruziyet eylem değerleri,
     özel politika gerektiren gruplar ile kadın çalışanlara etkisi,
     titreşim ile çalışma ortamı/diğer iş ekipmanları arasındaki
     etkileşimlerin dolaylı etkisi, imalatçılardan sağlanan bilgiler,
     alternatif iş ekipmanının bulunup bulunmadığı, bütün vücut
     titreşimine maruziyetin normal çalışma saatleri dışında da devam
     edip etmediği, düşük sıcaklık gibi özel çalışma koşulları ve
     sağlık gözetiminden elde edilen güncel bilgiler dikkate alınıyor
     mu?
     **Mevzuat:** Çalışanların Titreşimle İlgili Risklerden
     Korunmalarına Dair Yönetmelik, Madde 7

442. **Soru:** Mekanik titreşimden kaynaklanabilecek riskler
     kaynağında yok ediliyor veya en aza indiriliyor ve bu süreçte
     6331 sayılı Kanunun 5 inci maddesinde yer alan korunma
     ilkelerine uyuluyor mu?
     **Mevzuat:** Çalışanların Titreşimle İlgili Risklerden
     Korunmalarına Dair Yönetmelik, Madde 8/1-2

443. **Soru:** Maruziyet eylem değerlerinin aşıldığının tespit
     edilmesi halinde; işveren, mekanik titreşime maruziyeti azaltan
     çalışma yöntemlerinin seçilmesi, ergonomik tasarlanmış uygun iş
     ekipmanının seçilmesi, titreşimi azaltan oturma/el tutma yerleri
     gibi yardımcı ekipmanın sağlanması, uygun bakım programlarının
     uygulanması, işyeri ve çalışma ortamının uygun tasarlanması,
     çalışanlara gerekli bilgi ve eğitimin verilmesi, maruziyet
     süresi/düzeyinin sınırlandırılması, yeterli dinlenme aralarıyla
     çalışma sürelerinin düzenlenmesi ve soğuktan/nemden koruyacak
     giysi sağlanmasını içeren teknik ve organizasyona yönelik bir
     eylem planı oluşturup uyguluyor mu?
     **Mevzuat:** Çalışanların Titreşimle İlgili Risklerden
     Korunmalarına Dair Yönetmelik, Madde 8/3

444. **Soru:** Bu Yönetmeliğe göre alınacak önlemlerin, 6331 sayılı
     Kanunun 10 uncu maddesi uyarınca özel politika gerektiren
     gruplar ile kadın çalışanların durumlarına uygun olması
     sağlanıyor mu?
     **Mevzuat:** Çalışanların Titreşimle İlgili Risklerden
     Korunmalarına Dair Yönetmelik, Madde 8/4

445. **Soru:** Çalışanın maruziyeti hiçbir koşulda maruziyet sınır
     değerini aşmıyor mu; alınan tüm kontrol tedbirlerine rağmen
     sınır değerin aşıldığı tespit edildiğinde işveren, maruziyeti
     sınır değerin altına indirmek için gerekli tedbirleri derhal
     alıyor ve aşılma nedenlerini belirleyip tekrarını önlemeye
     yönelik gerekli tedbirleri alıyor mu?
     **Mevzuat:** Çalışanların Titreşimle İlgili Risklerden
     Korunmalarına Dair Yönetmelik, Madde 9

## Genel Yükümlülükler → Eğitim

446. **Soru:** İşveren; işyerinde mekanik titreşime maruz kalan
     çalışanların veya temsilcilerinin, risk değerlendirmesi
     sonuçları, mekanik titreşimden kaynaklanabilecek riskleri önlemek
     veya en aza indirmek için alınan önlemler, maruziyet sınır ve
     eylem değerleri, risklerin değerlendirilmesi/ölçüm sonuçları ve
     kullanılan ekipmandan kaynaklanabilecek yaralanmalar, yaralanma
     belirtilerinin niçin ve nasıl tespit edilip bildirileceği,
     çalışanların hangi şartlarda sağlık gözetimine tabi tutulacağı
     ve maruziyeti en aza indirecek güvenli çalışma uygulamaları
     konularında bilgilendirilmelerini ve eğitilmelerini sağlıyor mu?
     **Mevzuat:** Çalışanların Titreşimle İlgili Risklerden
     Korunmalarına Dair Yönetmelik, Madde 10

## Genel Yükümlülükler → Bilgilendirme ve Katılım

447. **Soru:** İşveren, bu Yönetmeliğin kapsadığı konularda
     çalışanların veya temsilcilerinin görüşlerini alıyor ve
     katılımlarını sağlıyor mu?
     **Mevzuat:** Çalışanların Titreşimle İlgili Risklerden
     Korunmalarına Dair Yönetmelik, Madde 11

## Genel Yükümlülükler → Sağlık Gözetimi

448. **Soru:** Çalışanlar; 6331 sayılı Kanunun 15 inci maddesi ve
     ilgili mevzuat hükümlerine göre gereken durumlarda, işyerinde
     gerçekleştirilen risk değerlendirmesi sonuçlarına göre
     gerektiğinde veya maruziyet eylem değerlerini aşan mekanik
     titreşime maruziyetin olduğu her durumda (sağlığa zararlı etki
     ile maruziyet arasında ilişki tespit edilebilen, özel çalışma
     koşullarından kaynaklanma ihtimali bulunan ve geçerli tespit
     yöntemlerinin bulunduğu hallerde) sağlık gözetimine tabi
     tutuluyor ve gözetim sonuçlarına göre gerekli koruyucu önlemler
     alınıyor mu?
     **Mevzuat:** Çalışanların Titreşimle İlgili Risklerden
     Korunmalarına Dair Yönetmelik, Madde 12/1-2

449. **Soru:** Sağlık gözetimi sonucunda çalışanda mekanik titreşime
     maruz kalmanın sonucu olarak tanımlanabilir bir hastalık veya
     olumsuz sağlık etkisi saptanması halinde; çalışan işyeri
     hekimince kendisiyle ilgili sonuçlar hakkında bilgilendirilir
     mi, işveren tıbbi gizlilik dikkate alınarak dikkate değer
     bulgulardan haberdar edilir mi, risk değerlendirmesi ve alınan
     önlemler gözden geçirilir mi, gerekirse çalışan titreşime maruz
     kalmayacağı başka bir işte görevlendirilir mi ve benzer biçimde
     maruz kalan diğer çalışanlar da düzenli sağlık gözetimine tabi
     tutulur mu?
     **Mevzuat:** Çalışanların Titreşimle İlgili Risklerden
     Korunmalarına Dair Yönetmelik, Madde 12/3

## Genel Yükümlülükler → Geçici veya Belirli Süreli Çalışanlar (YENİ alt kategori)

450. **Soru:** İşveren, belirli süreli işlerde veya geçici süreli iş
     ilişkilerinde, kişisel koruyucu donanımlara erişim dahil olmak
     üzere çalışanların sağlık ve güvenliğinin korunmasını içeren
     çalışma koşulları bakımından (diğer çalışanlara göre) farklı
     uygulamada bulunmuyor mu?
     **Mevzuat:** Geçici veya Belirli Süreli İşlerde İş Sağlığı ve
     Güvenliği Hakkında Yönetmelik, Madde 5

451. **Soru:** İşveren, belirli veya geçici süreli çalışanlara işe
     başlamadan önce yapacakları işin ne olduğu ve karşılaşacakları
     riskler hakkında gerekli bilgilerin verilmesini sağlıyor mu;
     işin gerektirdiği mesleki bilgi, yetenek, tecrübe ve gerekli
     sağlık gözetimi ile iş nedeniyle ortaya çıkabilecek ilave özel
     riskler açıkça belirtiliyor mu?
     **Mevzuat:** Geçici veya Belirli Süreli İşlerde İş Sağlığı ve
     Güvenliği Hakkında Yönetmelik, Madde 6

452. **Soru:** İşyerinde iş sağlığı ve güvenliği hizmetlerinin yerine
     getirilmesi için görevlendirilen kişiler, belirli veya geçici
     süreli iş sözleşmesiyle istihdam edilecek çalışanlarla ilgili
     olarak işveren tarafından bilgilendiriliyor ve bu çalışanların da
     diğer çalışanlarla birlikte sağlık ve güvenliklerinin sağlanması
     için gerekli çalışmalar yapılıyor mu?
     **Mevzuat:** Geçici veya Belirli Süreli İşlerde İş Sağlığı ve
     Güvenliği Hakkında Yönetmelik, Madde 9

453. **Soru:** Geçici iş ilişkisi kurulacak işveren, çalışanlarını
     devredecek diğer işverene 6331 sayılı Kanunun 16 ncı maddesinin
     birinci fıkrasında belirtilen hususlar ile yapılacak işin
     gerektirdiği mesleki bilgi, yetenek ve işin özellikleri hakkında
     gerekli bilgiyi veriyor ve bu bilgilerin sözleşmede yer almasını
     sağlıyor mu?
     **Mevzuat:** Geçici veya Belirli Süreli İşlerde İş Sağlığı ve
     Güvenliği Hakkında Yönetmelik, Madde 10/a

454. **Soru:** Çalışanlarını geçici olarak devredecek işveren, aldığı
     bu bilgileri geçici iş ilişkisi ile çalıştırılacak çalışanlara
     veriyor mu?
     **Mevzuat:** Geçici veya Belirli Süreli İşlerde İş Sağlığı ve
     Güvenliği Hakkında Yönetmelik, Madde 10/b

455. **Soru:** Çalışanlarını geçici olarak devreden işveren ile
     birlikte geçici iş ilişkisi kurulan işveren, yapılan iş süresince
     işin yapılmasıyla ilgili iş sağlığı ve güvenliği ile iş hijyeni
     konularından birlikte sorumlu mu?
     **Mevzuat:** Geçici veya Belirli Süreli İşlerde İş Sağlığı ve
     Güvenliği Hakkında Yönetmelik, Madde 11

## Genel Yükümlülükler → Eğitim

456. **Soru:** İşveren, belirli veya geçici süreli iş sözleşmesiyle
     istihdam edeceği çalışanların bilgi ve tecrübelerini dikkate
     alarak, yapacakları işin niteliğine uygun yeterli eğitim
     almalarını sağlıyor mu?
     **Mevzuat:** Geçici veya Belirli Süreli İşlerde İş Sağlığı ve
     Güvenliği Hakkında Yönetmelik, Madde 7

## Genel Yükümlülükler → Sağlık Gözetimi

457. **Soru:** Sağlık ve güvenlik yönünden özel sağlık gözetimi
     gerektiren işlerde, belirli veya geçici süreli çalışanlar işin
     gerektirdiği özel sağlık gözetimine tabi tutuluyor mu; işten
     kaynaklanan gereklilik sürdüğü takdirde bu gözetim çalışanın
     sözleşme süresinin sona ermesinden sonra da sürdürülüyor mu?
     **Mevzuat:** Geçici veya Belirli Süreli İşlerde İş Sağlığı ve
     Güvenliği Hakkında Yönetmelik, Madde 8

## Genel Yükümlülükler → Sağlık ve Güvenlik İşaretleri (YENİ alt kategori)

458. **Soru:** İşveren, risk değerlendirmesi sonuçlarına göre
     işyerindeki riskler ortadan kaldırılamadığında veya toplu koruma
     ya da organizasyon önlemleriyle yeterince azaltılamadığında, bu
     Yönetmelikte yer alan sağlık ve güvenlik işaretlerini
     bulunduruyor ve uygun yerlerde kullanılmasını sağlıyor mu?
     **Mevzuat:** Sağlık ve Güvenlik İşaretleri Yönetmeliği, Madde 5/1

459. **Soru:** İşyerinde kara, demir, deniz, hava veya iç suyolu
     taşımacılığı yapılması halinde, bu taşımacılık alanlarında
     kullanılan işaretler Ek-5'te belirtilen hususlara aykırı olmamak
     şartıyla aynen kullanılıyor mu?
     **Mevzuat:** Sağlık ve Güvenlik İşaretleri Yönetmeliği, Madde 5/2

## Genel Yükümlülükler → Eğitim

460. **Soru:** İşveren, işaretlerin anlamları ve bu işaretlerin
     gerektirdiği davranış biçimleri hakkında çalışanların eğitim
     almasını sağlıyor mu?
     **Mevzuat:** Sağlık ve Güvenlik İşaretleri Yönetmeliği, Madde 6/2

## Genel Yükümlülükler → Bilgilendirme ve Katılım

461. **Soru:** İşveren, işyerinde kullanılan sağlık ve güvenlik
     işaretleri hakkında çalışanları veya temsilcilerini
     bilgilendiriyor mu?
     **Mevzuat:** Sağlık ve Güvenlik İşaretleri Yönetmeliği, Madde 6/1

462. **Soru:** İşveren, bu Yönetmeliğin kapsadığı konularla ilgili
     çalışanların veya temsilcilerinin görüşlerini alıyor ve
     katılımlarını sağlıyor mu?
     **Mevzuat:** Sağlık ve Güvenlik İşaretleri Yönetmeliği, Madde 7

## Genel Yükümlülükler → Maden İşyerleri (YENİ alt kategori)

463. **Soru:** İşyerleri çalışanların sağlık ve güvenliğini tehlikeye
     atmayacak şekilde tasarlanıyor, inşa ediliyor, teçhiz ediliyor,
     hizmete alınıyor, işletiliyor ve bakımı yapılıyor mu; her türlü
     çalışma yetkili kişinin nezaretinde ve sorumluluğu altında
     yapılıyor mu; özel riski bulunan işler yalnızca bu işlerle ilgili
     özel eğitim alan ehil kişilerce talimatlara uygun olarak
     yapılıyor mu; tüm güvenlik talimatları çalışanların anlayacağı
     şekilde hazırlanıyor mu?
     **Mevzuat:** Maden İşyerlerinde İş Sağlığı ve Güvenliği
     Yönetmeliği, Madde 5/1-1,2,3,4

464. **Soru:** İşyerlerinde Acil Durumlar Hakkında Yönetmeliğe uygun
     olarak yeterli ilk yardım donanımı sağlanıyor ve en geç 6 ayda
     bir olmak üzere düzenli olarak gerekli tatbikatlar yapılıyor mu?
     **Mevzuat:** Maden İşyerlerinde İş Sağlığı ve Güvenliği
     Yönetmeliği, Madde 5/1-5

465. **Soru:** İşveren; 6331 sayılı Kanunun 4, 10, 14 ve 16 ncı
     maddeleri doğrultusunda, çalışanların maruz kalabileceği
     psikososyal riskler dahil risklerin belirlenmesi ve
     değerlendirilmesini, bu Yönetmelik hükümlerini yerine getirmek
     için alınacak tedbirler ile hazırlanması gereken yönerge ve
     planları, çalışma yerleri ve ekipmanın güvenli düzenlenmesi/
     kullanılması/bakımını içeren bir sağlık ve güvenlik dokümanı
     hazırlatıp güncelliyor mu; bu doküman işyerinde çalışmaya
     başlanmadan önce hazırlanıp önemli değişiklik, ilave veya kaza/
     ramak kala olaylardan sonra gözden geçirilip gerekirse revize
     ediliyor mu?
     **Mevzuat:** Maden İşyerlerinde İş Sağlığı ve Güvenliği
     Yönetmeliği, Madde 5/2

466. **Soru:** İşveren, 6331 sayılı Kanunun 14 üncü maddesi uyarınca
     gerekli kayıt ve bildirimleri yapıyor mu?
     **Mevzuat:** Maden İşyerlerinde İş Sağlığı ve Güvenliği
     Yönetmeliği, Madde 5/3

467. **Soru:** Bir işyerinde birden çok işverene ait çalışanların
     bulunması durumunda, işyerinin tamamından sorumlu olan işveren,
     çalışanların sağlık ve güvenliğinin korunması ile ilgili
     tedbirlerin uygulanmasını koordine edip, koordinasyonun amacını
     ve alınacak tedbirler/yöntemleri kendi sağlık ve güvenlik
     dokümanında belirtiyor mu?
     **Mevzuat:** Maden İşyerlerinde İş Sağlığı ve Güvenliği
     Yönetmeliği, Madde 5/4

468. **Soru:** İşveren, patlama ve yangın çıkmasını ve bunların
     olumsuz etkilerini önlemek üzere; patlayıcı ve sağlığa zararlı
     ortam havasının oluşmasını önlemek, bu mümkün değilse patlayıcı
     ortamın tutuşmasını önlemek, patlama ve yangın başlangıçlarını
     tespit etmek, yayılmasını önlemek ve mücadele etmek için yapılan
     işe uygun tedbirler alıyor mu?
     **Mevzuat:** Maden İşyerlerinde İş Sağlığı ve Güvenliği
     Yönetmeliği, Madde 7

469. **Soru:** İşveren, bir tehlike anında çalışanların çalışma
     yerlerini en kısa zamanda ve güvenli bir şekilde terk
     edebilmeleri için uygun kaçış ve kurtarma araçlarını sağlıyor ve
     kullanıma hazır bulunduruyor mu?
     **Mevzuat:** Maden İşyerlerinde İş Sağlığı ve Güvenliği
     Yönetmeliği, Madde 8

470. **Soru:** İşveren, işyerinin bütününde gerekli haberleşme ve
     iletişim sistemini kuruyor mu; ihtiyaç halinde yardım, kaçış ve
     kurtarma işlemlerinin derhal uygulamaya konulabilmesi için
     gerekli uyarı ve diğer iletişim sistemlerini hazır bulunduruyor
     mu?
     **Mevzuat:** Maden İşyerlerinde İş Sağlığı ve Güvenliği
     Yönetmeliği, Madde 9

471. **Soru:** Yeraltı kömür madenlerinde, faaliyet alanları ile
     yeryüzüne çıkış ağzı arasında, Tablo-1 ve Tablo-2'deki kaçış
     hızları ile kaçış yolundaki engeller, galeri yüksekliği/eğimi,
     madenin jeolojik yapısı ve kaçış yolunu aynı anda kullanacak
     kişi sayısı gibi hususlar dikkate alınarak oksijenli ferdi
     kurtarıcı değişim istasyonları kuruluyor ve bu istasyonlar
     yeraltında yaşanabilecek göçük, su baskını, patlama, yangın gibi
     acil durumlardan etkilenmeyecek şekilde teçhiz ediliyor mu?
     **Mevzuat:** Maden İşyerlerinde İş Sağlığı ve Güvenliği
     Yönetmeliği, EK MADDE 1/1-a,b

472. **Soru:** Kirli hava akımının bulunduğu nefeslik ve benzeri
     yollarda çalışanların, seçilen oksijenli ferdi kurtarıcı ile
     sağlıklı ve güvenli şekilde yeryüzüne ulaşamayacağı mesafede
     bulunmaları durumunda, uygun yerlerde ayrıca değişim istasyonu
     kuruluyor mu?
     **Mevzuat:** Maden İşyerlerinde İş Sağlığı ve Güvenliği
     Yönetmeliği, EK MADDE 1/1-c

473. **Soru:** İstasyonlarda bulunacak donanım sayısı ve ekipmanı, o
     istasyondan yararlanması beklenen çalışan sayısının en az %10
     fazlası olacak şekilde belirleniyor mu?
     **Mevzuat:** Maden İşyerlerinde İş Sağlığı ve Güvenliği
     Yönetmeliği, EK MADDE 1/1-d

474. **Soru:** Bu madde kapsamında alınacak önlemlerin, işletme
     ruhsatı başvurusunda düzenlenen maden işletme projesinde
     (veya projenin revizyonunda) bulunması ve Enerji ve Tabii
     Kaynaklar Bakanlığı Maden İşleri Genel Müdürlüğünce onaylanması
     sağlanıyor mu?
     **Mevzuat:** Maden İşyerlerinde İş Sağlığı ve Güvenliği
     Yönetmeliği, EK MADDE 1/1-e

## Genel Yükümlülükler → Bilgilendirme ve Katılım

475. **Soru:** Çalışanlar veya temsilcileri, işyerinde sağlık ve
     güvenlikle ilgili alınması gereken tüm tedbirler ve özellikle bu
     Yönetmeliğin 5, 6, 7 ve 8 inci maddelerinin uygulanması hakkında,
     erişilebilir ve anlaşılır şekilde bilgilendiriliyor mu?
     **Mevzuat:** Maden İşyerlerinde İş Sağlığı ve Güvenliği
     Yönetmeliği, Madde 10

476. **Soru:** İşveren, bu Yönetmelikte belirtilen konularda
     çalışanların veya temsilcilerinin görüşlerini alıyor ve
     katılımlarını sağlıyor mu?
     **Mevzuat:** Maden İşyerlerinde İş Sağlığı ve Güvenliği
     Yönetmeliği, Madde 12

## Genel Yükümlülükler → Sağlık Gözetimi

477. **Soru:** Çalışanlar, yapmakta oldukları işlerde maruz
     kaldıkları sağlık ve güvenlik risklerine uygun olarak işe
     girişte ve işin devamı süresince periyodik olarak sağlık
     gözetimine tabi tutuluyor mu?
     **Mevzuat:** Maden İşyerlerinde İş Sağlığı ve Güvenliği
     Yönetmeliği, Madde 11

## Genel Yükümlülükler → Maden İşyerleri

478. **Soru:** İşveren, yeraltı maden işyerlerinde çalışanların ocağa
     giriş ve çıkışlarını an be an takip eden bir personel takip
     sistemi kurar, kayıtları en az bir yıl saklar, işyerinde sağlık
     ve güvenlikten sorumlu yetkili kişi(ler) atar ve bunların yeterli
     ve nitelikli personel eşliğinde gözetim ve denetim yapmasını
     sağlar mı?
     **Mevzuat:** Maden İşyerlerinde İş Sağlığı ve Güvenliği
     Yönetmeliği, Madde 13, Ek-1/1.1-1.4

479. **Soru:** İşveren, çalışanlara yapacakları işle ilgili bilgi,
     talimat ve eğitim verir, yazılı talimatlar hazırlar, tek başına
     çalışmayı yasaklı işlerde izin sistemiyle sınırlar, sağlık ve
     güvenlik dokümanını ve çalışma izin sistemini oluşturur ve
     bunları düzenli olarak gözden geçirir mi?
     **Mevzuat:** Maden İşyerlerinde İş Sağlığı ve Güvenliği
     Yönetmeliği, Madde 13, Ek-1/1.5-1.10

480. **Soru:** İşveren, grizu/yanıcı toz tehlikesi bulunan yerlerde
     kullanılan mekanik ve elektrikli ekipman ve tesisatların patlama
     riskine uygun nitelikte olmasını, 42 volt üstü tesisatın
     topraklanmasını, bant konveyörlerin yangın önleme donanımıyla
     donatılmasını, ekipmanın aşırı güçlere karşı korunmasını ve
     periyodik kontrol/bakımının yapılmasını sağlar mı?
     **Mevzuat:** Maden İşyerlerinde İş Sağlığı ve Güvenliği
     Yönetmeliği, Madde 13, Ek-1/2.1-2.7

481. **Soru:** İşveren, ekipman ve tesisatların bakım planını ve
     kayıtlarını tutar, güvenlik ekipmanları ve koruyucu düzenlerin
     çalışır durumda kalmasını sağlar mı?
     **Mevzuat:** Maden İşyerlerinde İş Sağlığı ve Güvenliği
     Yönetmeliği, Madde 13, Ek-1/3.1-3.2

482. **Soru:** İşveren, sondaj kuyusu açılması sırasında kuyu kontrol
     donanımı ve gerekli kontrol ekipmanını bulundurur, petrol/doğal
     gaz/jeotermal ve kaya gazı sondajlarında bu donanımın çalışır
     durumda olmasını sağlar mı?
     **Mevzuat:** Maden İşyerlerinde İş Sağlığı ve Güvenliği
     Yönetmeliği, Madde 13, Ek-1/4.1-4.3

483. **Soru:** İşveren, ortam havasında sağlığa zararlı ve/veya
     patlayıcı madde bulunup bulunmadığını ölçer, gerekli görülen
     yerlerde otomatik ölçüm/alarm sistemleri kurar, yangın/patlama
     tehlikesi olan ortamlarda sigara içilmesini ve açık alev/kıvılcım
     kaynaklı çalışmayı yasaklar mı?
     **Mevzuat:** Maden İşyerlerinde İş Sağlığı ve Güvenliği
     Yönetmeliği, Madde 13, Ek-1/5.1-5.2

484. **Soru:** İşveren, zararlı maddelerin ortam havasına
     karışabileceği yerlerde kaynağında engelleme/emme/azaltma
     tedbirleri alır, çalışanlara uygun solunum ve canlandırma
     ekipmanı sağlar, bu ekipmanı kullanabilecek eğitimli çalışan
     bulundurur ve zehirli gaz riski olan yerler için bir koruma planı
     hazırlar mı?
     **Mevzuat:** Maden İşyerlerinde İş Sağlığı ve Güvenliği
     Yönetmeliği, Madde 13, Ek-1/5.3

485. **Soru:** İşveren, yangının başlama ve yayılma kaynaklarına karşı
     tedbir alır, uygun yangın söndürme/algılama/alarm donanımı sağlar,
     bir yangından korunma planı hazırlar ve kendiliğinden yanmaya
     elverişli madenlerde bekleme barajları kurarak bunların ardındaki
     gaz/sıcaklık ölçümlerini en az 10 günde bir yapar ve kayıt altına
     alır mı?
     **Mevzuat:** Maden İşyerlerinde İş Sağlığı ve Güvenliği
     Yönetmeliği, Madde 13, Ek-1/5.4

486. **Soru:** İşveren, patlayıcı madde ve ateşleyici malzemelerin
     depolanması, taşınması, kullanılması, lağım delme/doldurma/
     sıkılama/ateşleme işlemlerinin sadece yetkili ateşleyiciler
     tarafından ve yönetmelikte belirtilen teknik/güvenlik usullerine
     (bekleme mesafesi/süresi, patlamamış madde kontrolü dahil) uygun
     şekilde yapılmasını sağlar mı?
     **Mevzuat:** Maden İşyerlerinde İş Sağlığı ve Güvenliği
     Yönetmeliği, Madde 13, Ek-1/6.1-6.11

487. **Soru:** İşveren, patlayıcı maddelerin taşınması, depolanması,
     tecridi, havalandırılması ve yangına karşı alınacak tedbirleri
     kapsayan yazılı bir yönerge hazırlar mı?
     **Mevzuat:** Maden İşyerlerinde İş Sağlığı ve Güvenliği
     Yönetmeliği, Madde 13, Ek-1/6.12

488. **Soru:** İşveren, radyoaktif maden ve minerallerin arama,
     üretim ve çıkarılmasıyla ilgili çalışmalarda bunların zararlı
     etkilerini giderici önleyici veya koruyucu tedbirler alır mı?
     **Mevzuat:** Maden İşyerlerinde İş Sağlığı ve Güvenliği
     Yönetmeliği, Madde 13, Ek-1/7.2

489. **Soru:** İşveren, ulaşım yollarını yaya ve araç trafiğinin
     güvenli ve kolay olmasını sağlayacak şekilde boyutlandırır,
     işaretler ve aydınlatır, araç trafiğine açık yollarla yaya
     geçişleri arasında yeterli mesafe bırakır ve yolları engel/
     döküntüden temiz tutar mı?
     **Mevzuat:** Maden İşyerlerinde İş Sağlığı ve Güvenliği
     Yönetmeliği, Madde 13, Ek-1/8.1-8.7

490. **Soru:** İşveren, kurtarma işleri hariç çalışanları sadece
     insan taşımak için imal edilmiş araçlarla taşır, bu araçlarda
     hız limitleri belirler ve uygun durdurma tertibatı bulundurur mu?
     **Mevzuat:** Maden İşyerlerinde İş Sağlığı ve Güvenliği
     Yönetmeliği, Madde 13, Ek-1/9.1

491. **Soru:** İşveren, ocakta kullanılan mobil ekipmanları işaret
     lambalarıyla donatır, konveyörlerin tehlikeli kısımlarını
     koruyucu altına alır, acil durdurma düzeni kurar ve taşıyıcı
     halatların periyodik kontrol/bakımını yaptırır mı?
     **Mevzuat:** Maden İşyerlerinde İş Sağlığı ve Güvenliği
     Yönetmeliği, Madde 13, Ek-1/9.2-9.5

492. **Soru:** İşveren, açık alanda yapılan çalışmalarda yaya/araç
     trafiğini güvenli şekilde düzenler, yetersiz gün ışığında uygun
     aydınlatma sağlar ve çalışanları olumsuz hava koşullarına, cisim
     düşmesine, kayma/düşmeye karşı korur mu?
     **Mevzuat:** Maden İşyerlerinde İş Sağlığı ve Güvenliği
     Yönetmeliği, Madde 13, Ek-1/10.1-10.3

493. **Soru:** İşveren, tehlikeli alanları açıkça işaretler, gerekiyorsa
     etrafını engellerle çevirir, görevli olmayan kişilerin girişini
     engeller ve merdiven/yükseklik gerektiren yerlerde güvenlik
     tedbirleri alır mı?
     **Mevzuat:** Maden İşyerlerinde İş Sağlığı ve Güvenliği
     Yönetmeliği, Madde 13, Ek-1/11.1-11.4

494. **Soru:** İşveren, silo/kuyu gibi yerlere güvenlik tedbirleriyle
     girilmesini sağlar, lağım atılması sonrası kuyuya sağlık ve
     güvenlik yönünden kontrol yapılmadan kimsenin inmesine izin
     vermez ve ocaklara kesici/yaralayıcı alet, silah veya alkollü
     içki girişini yasaklar mı?
     **Mevzuat:** Maden İşyerlerinde İş Sağlığı ve Güvenliği
     Yönetmeliği, Madde 13, Ek-1/11.5-11.6

495. **Soru:** İşveren, işletmelerin yeraltı ve yerüstü çalışmalarında
     suların meydana getirebileceği tehlikelere karşı gerekli sağlık
     ve güvenlik tedbirlerini alır mı?
     **Mevzuat:** Maden İşyerlerinde İş Sağlığı ve Güvenliği
     Yönetmeliği, Madde 13, Ek-1/12.1

496. **Soru:** İşveren, acil çıkış yollarının ve kapılarının sayısını,
     boyutunu ve yerini işin niteliğine uygun belirler, bu kapıların
     kilitli olmamasını ve engelsiz olmasını sağlar, elektrik kesilmesi
     halinde yedek aydınlatma bulundurur ve kaçış yollarını Sağlık ve
     Güvenlik İşaretleri Yönetmeliğine uygun işaretler mi?
     **Mevzuat:** Maden İşyerlerinde İş Sağlığı ve Güvenliği
     Yönetmeliği, Madde 13, Ek-1/13.1-13.7

497. **Soru:** İşveren, çalışanları acil durumlarda nasıl
     davranacakları konusunda eğitir, yeterli sayıda arama/kurtarma/
     tahliye destek elemanı görevlendirir (eğitimleri her 6 ayda bir
     yeniler) ve bu amaçla kullanılacak ekipmanı kolay erişilebilir,
     işaretli ve kullanıma hazır bulundurur mu?
     **Mevzuat:** Maden İşyerlerinde İş Sağlığı ve Güvenliği
     Yönetmeliği, Madde 13, Ek-1/14.1-14.2

498. **Soru:** İşveren, yeraltı maden işyerlerinde arama-kurtarma-
     tahliye için uygun bir kurtarma istasyonu kurar (yarıçapı 50
     km'yi geçmeyen işyerleri ortak istasyon kurabilir), yerüstü
     işyerlerinde ise bu ihtiyacı işyeri özelliklerine göre değerlendirir
     mi?
     **Mevzuat:** Maden İşyerlerinde İş Sağlığı ve Güvenliği
     Yönetmeliği, Madde 13, Ek-1/14.3-14.4

499. **Soru:** İşveren, en geç altı ayda bir güvenlik tatbikatı yapar,
     tatbikatı görüntülü kaydeder, gerekli tutanakları düzenler ve
     kullanılan acil durum ekipmanını test edip yeniler mi?
     **Mevzuat:** Maden İşyerlerinde İş Sağlığı ve Güvenliği
     Yönetmeliği, Madde 13, Ek-1/15

500. **Soru:** İşveren, çalışma şartlarının gerektirdiği her yerde
     işaretli ve kolay erişilebilir ilk yardım ekipmanı, işyerinin
     büyüklüğüne göre bir veya daha fazla ilk yardım odası bulundurur
     ve İlkyardım Yönetmeliği esaslarına göre destek elemanı
     görevlendirir mi?
     **Mevzuat:** Maden İşyerlerinde İş Sağlığı ve Güvenliği
     Yönetmeliği, Madde 13, Ek-1/16.1-16.4

501. **Soru:** İşveren, çalışma ve geçiş yerlerinin yeterince aydınlık
     olmasını, mümkün olduğunca doğal ışık almasını sağlar ve
     aydınlatma arızasının risk oluşturacağı yerlerde yedek aydınlatma
     sistemi veya kişisel aydınlatma aracı bulundurur mu?
     **Mevzuat:** Maden İşyerlerinde İş Sağlığı ve Güvenliği
     Yönetmeliği, Madde 13, Ek-1/17.1-17.5
     **Not:** Genel işyeri aydınlatma yükümlülüğü "Genel Yükümlülükler →
     İşyeri Bina ve Eklentileri" kapsamında zaten mevcuttur; bu soru
     madene özgü yedek aydınlatma/kişisel aydınlatma vurgusunu kapsar.

502. **Soru:** İşveren, hafriyat dökme yerlerini, atık yığınları ve
     sahalarını, çöktürme havuzlarını çalışanların sağlığını ve
     güvenliğini tehlikeye düşürmeyecek şekilde tasarlar, inşa eder,
     işletir ve bakımını yapar mı?
     **Mevzuat:** Maden İşyerlerinde İş Sağlığı ve Güvenliği
     Yönetmeliği, Madde 13, Ek-1/19

503. **Soru:** İşveren, özel iş elbisesi giyen çalışanlar için
     kadın-erkek ayrı, yeterli büyüklükte, kilitli dolaplı soyunma
     yerleri sağlar ve ıslak iş elbiselerinin kurutulabilmesi için
     imkan tanır mı?
     **Mevzuat:** Maden İşyerlerinde İş Sağlığı ve Güvenliği
     Yönetmeliği, Madde 13, Ek-1/20.1
     **Not:** "Genel Yükümlülükler → İşyeri Bina ve Eklentileri"
     kapsamındaki genel sıhhi tesis sorularıyla örtüşür; madene özgü
     (yeraltı ocaklarında bu tesislerin yerüstünde bulunabilmesi)
     unsur bu soruda vurgulanmıştır.

504. **Soru:** İşveren, çalışanlar için kadın-erkek ayrı duş ve
     lavabo tesisleri (sıcak/soğuk akan su ile) ve yeterli sayıda ayrı
     tuvalet bulundurur mu; yeraltı ocaklarında bu tesislerin yerüstünde
     bulunabileceğini kabul eder mi?
     **Mevzuat:** Maden İşyerlerinde İş Sağlığı ve Güvenliği
     Yönetmeliği, Madde 13, Ek-1/20.2-20.3

505. **Soru:** İşveren, engelli çalışanların durumunu dikkate alarak,
     özellikle bu çalışanların kullandığı kapı, geçiş yeri, merdiven,
     duş, lavabo ve tuvaletlerde gerekli düzenlemeleri yapar mı?
     **Mevzuat:** Maden İşyerlerinde İş Sağlığı ve Güvenliği
     Yönetmeliği, Madde 13, Ek-1/24

506. **Soru:** İşveren, açık ocak çalışmalarını sağlık ve güvenlik
     dokümanında belirtilen toprak kayması/çökmesi riskini dikkate
     alarak planlar, kazı yüzeyi ve şev eğim/yüksekliğini zeminin
     yapısına uygun belirler ve her çalışma öncesi üst seviyelerdeki
     şev/kazı yüzeylerinde toprak-kaya düşmesi kontrolü yapar mı?
     **Mevzuat:** Maden İşyerlerinde İş Sağlığı ve Güvenliği
     Yönetmeliği, Madde 13, Ek-2/1.1-1.3

507. **Soru:** İşveren, her kademeye en az bir çalışma yolu sağlar,
     kademe ve nakliyat yollarının araçlara uygun sağlamlıkta
     olmasını ve bakımını sağlar, döküm sahası gibi düşme tehlikesi
     olan yerlerde güvenlik bariyeri yapar ve kademe cephelerini
     kayma/düşme olasılığına karşı sürekli denetler mi?
     **Mevzuat:** Maden İşyerlerinde İş Sağlığı ve Güvenliği
     Yönetmeliği, Madde 13, Ek-2/1.4-1.7

508. **Soru:** İşveren, yıldırım düşmesi tehlikesi varsa elektrikli
     kapsülle ateşleme yapılan açık ocaklarda gerekli tedbirler
     alınmadan lağım deliği doldurmaz; ateşleme veya doğal olaylar
     (donma, kar, yağmur) sonrası işe başlamadan önce kademe
     yüzlerinde deneyimli çalışanlarla çatlak sökümü yaptırır ve ters
     ıskarpa (kademe alınlarının askıya alınması) şeklinde çalışmayı
     yasaklar mı?
     **Mevzuat:** Maden İşyerlerinde İş Sağlığı ve Güvenliği
     Yönetmeliği, Madde 13, Ek-2/1.8-1.10

509. **Soru:** İşveren, elle kazı ve yükleme yapılan açık ocaklarda
     kademe yüksekliğinin 3 metreyi, şev açısının ise arazi yapısına
     göre belirlenen sınırları (sağlam arazide 60°, çöküntülü/killi/
     tüflü arazide 45°, kaygan/sulu yerlerde 30°) geçmemesini sağlar
     mı?
     **Mevzuat:** Maden İşyerlerinde İş Sağlığı ve Güvenliği
     Yönetmeliği, Madde 13, Ek-2/1.11

510. **Soru:** İşveren, kazıcı/doldurucu makine kullanılan veya derin
     lağım deliği uygulanan açık işletmelerde; kademe yüksekliği, şev
     derecesi, lağım derinliği/aralığı, ateşleme güvenlik tedbirleri
     ve makine çalışma koşullarını kapsayan yazılı bir yönerge
     hazırlar mı?
     **Mevzuat:** Maden İşyerlerinde İş Sağlığı ve Güvenliği
     Yönetmeliği, Madde 13, Ek-2/1.12

511. **Soru:** İşveren, yeraltı çalışmalarını gösteren üç boyutlu bir
     çalışma planı (imalat haritası) hazırlar, bunu elektronik ortamda
     da üç boyutlu olarak tutar, en geç ayda bir güncelleyerek
     işyerinde bulundurur ve su bulunması muhtemel tabaka/fay/su
     kaynaklarını haritalara işler mi?
     **Mevzuat:** Maden İşyerlerinde İş Sağlığı ve Güvenliği
     Yönetmeliği, Madde 13, Ek-3/1.1-1.3

512. **Soru:** İşveren, yeraltı çalışmalarında birbirinden bağımsız ve
     güvenli yapıda en az iki ayrı yoldan yerüstü bağlantısı sağlar
     (yollar arası topuk 30 metreden az olmaz, yol ağızları aynı çatı
     altında bulunmaz) mı?
     **Mevzuat:** Maden İşyerlerinde İş Sağlığı ve Güvenliği
     Yönetmeliği, Madde 13, Ek-3/2

513. **Soru:** İşveren, yeraltı çalışma yerlerini ve yollarını en az
     riskle çalışılabilecek şekilde yapar/işletir, yolları kolayca
     bulunabilecek şekilde işaretler, yaya yollarını galeri tabanından
     en az 180 cm yükseklik ve araçtan en az 60 cm mesafe bırakacak
     şekilde düzenler, bu mümkün değilse yeterli boyutta güvenlik
     cepleri yapar mı?
     **Mevzuat:** Maden İşyerlerinde İş Sağlığı ve Güvenliği
     Yönetmeliği, Madde 13, Ek-3/3.1-3.4

514. **Soru:** İşveren, araba kancalama/boşaltma merkezlerinde gerekli
     aydınlatmayı sağlar, taşıma araçlarının yoldan kaçmasına karşı
     tedbir alır, uygun bir işaretleşme sistemi kurar ve başyukarılarda
     insan/malzeme yollarını cevher/pasa yollarından ayırır mı?
     **Mevzuat:** Maden İşyerlerinde İş Sağlığı ve Güvenliği
     Yönetmeliği, Madde 13, Ek-3/3.5-3.8

515. **Soru:** İşveren, taşıma araçlarının güvenli kurulum/bakımını
     sağlar, insan naklinin yapıldığı eğimli galerilerde eğimi 18
     dereceyle sınırlar (aşımında uygun fren sistemli mekanik vasıta
     kullanır), insan taşıma araçlarını yazılı talimatla kullandırır
     ve tek çıkarma sistemli kuyularda insan taşınırken malzeme
     taşınmasını yasaklar mı?
     **Mevzuat:** Maden İşyerlerinde İş Sağlığı ve Güvenliği
     Yönetmeliği, Madde 13, Ek-3/4.1-4.3

516. **Soru:** İşveren, patlayıcı/yüksek metan oranlı kömür ve kükürt
     ocaklarında elektrikli ve benzinli lokomotif kullanımını
     yasaklar, dizel lokomotiflerde egzoz gazı önleme sistemi
     kullandırır ve freno/vinçle taşıma yapılırken çalışanların bu
     yollardan yürüyerek iniş-çıkışını yasaklar mı?
     **Mevzuat:** Maden İşyerlerinde İş Sağlığı ve Güvenliği
     Yönetmeliği, Madde 13, Ek-3/4.4-4.6

517. **Soru:** İşveren, ocakta kullanılacak mekanik taşıt sistemine
     ilişkin (işaretleşme, hız, kancacı kuralları, uyarı levhaları
     dahil) yazılı bir nakliyat yönergesi hazırlar ve bunu tüm ocak
     personeline öğretir mi?
     **Mevzuat:** Maden İşyerlerinde İş Sağlığı ve Güvenliği
     Yönetmeliği, Madde 13, Ek-3/4.7

518. **Soru:** İşveren, kuyularda taşımada halat/bağlama düzeni
     kopma-kayma riskine karşı tedbir alır, koşum düzeninin güvenlik
     katsayısının kafesin taşıyacağı en çok statik yüke göre en az 12
     olmasını sağlar ve koşum düzenini altı ayda en az bir kez muayene
     ettirip sonuçları rapor defterine kaydeder mi?
     **Mevzuat:** Maden İşyerlerinde İş Sağlığı ve Güvenliği
     Yönetmeliği, Madde 13, Ek-3/5.1-5.3

519. **Soru:** İşveren, doldurma istasyonu ve lokomotif garajlarını
     yanmaz malzemeden yapar, yeterli aydınlatma/havalandırma sağlar
     (açık alevli ışık yasak) ve akümülatörlü lokomotiflerin
     akümülatör doldurma işlemlerini yönetmelikte belirtilen özel
     koşullara uygun istasyonlarda yaptırır mı?
     **Mevzuat:** Maden İşyerlerinde İş Sağlığı ve Güvenliği
     Yönetmeliği, Madde 13, Ek-3/6.1-6.3

520. **Soru:** İşveren, taş/toprak/kömür/cevher kayma ve düşmelerini
     önlemek için uygun ve yeterli tahkimat yapar, tavan/duvar/
     tahkimatı düzenli muayene ettirir, planlara ve yazılı talimatlara
     uygun tahkimat yapılmasını sağlar ve galerileri zemin sağlamlığı
     açısından düzenli kontrol ettirir mi?
     **Mevzuat:** Maden İşyerlerinde İş Sağlığı ve Güvenliği
     Yönetmeliği, Madde 13, Ek-3/7.1-7.6

521. **Soru:** İşveren, tavanın kendini taşıyamadığı tüm açık tutulan
     yeraltı alanlarında tahkimat zorunlu kılar ve tahkimattan
     sorumlu çalışan, çevre güvenliği, malzeme bulunurluğu ve
     kendiliğinden yanmaya meyilli/grizulu ocaklara özel tedbirleri
     kapsayan yazılı bir tahkimat yönergesi hazırlar mı?
     **Mevzuat:** Maden İşyerlerinde İş Sağlığı ve Güvenliği
     Yönetmeliği, Madde 13, Ek-3/7.7

522. **Soru:** İşveren, çalışılan bütün yeraltı işletmelerinde
     üretime başlamadan önce uygun bir havalandırma sistemi kurar
     (solunabilir hava, patlama riski/toz kontrolü, sürekli
     havalandırma), doğal havalandırmanın yetersiz olduğu yerlerde
     mekanik sistem kullanır, periyodik ölçüm yaptırıp havalandırma
     planı/defteri tutar ve hava hızının 0,5 m/s'nin altına
     düşmemesini sağlar mı?
     **Mevzuat:** Maden İşyerlerinde İş Sağlığı ve Güvenliği
     Yönetmeliği, Madde 13, Ek-3/8.1-8.3

523. **Soru:** İşveren, insan/malzeme taşınan yollarda hava hızının 8
     m/s'yi geçmemesini, oksijen/metan/karbondioksit/karbonmonoksit/
     hidrojensülfür için belirlenen tehlike eşiklerinin aşıldığı
     yerlerde kurtarma dışında çalışmayı yasaklamayı ve terk
     edilmiş/yetersiz havalandırılan yerlerin kapatılıp
     işaretlenmesini sağlar mı?
     **Mevzuat:** Maden İşyerlerinde İş Sağlığı ve Güvenliği
     Yönetmeliği, Madde 13, Ek-3/8.4-8.6

524. **Soru:** İşveren, havalandırma sistemini kapı/perdelerle
     yönlendirir, barajları patlama/yangına dayanıklı yapar, ana
     havalandırma fanını yedek güç kaynağına bağlar, ocak sıcaklık/
     nem oranını düzenli ölçtürür ve hava giriş kuyusuna kömür tozu
     girişini önleyici tedbirler alır mı?
     **Mevzuat:** Maden İşyerlerinde İş Sağlığı ve Güvenliği
     Yönetmeliği, Madde 13, Ek-3/8.7-8.10

525. **Soru:** İşveren, havalandırma sistemi, planı, etkileyen
     durumlar, ölçüm sorumluları/sıklığı ve gaz ölçümlerini kapsayan
     yazılı bir havalandırma yönergesi hazırlayıp çalışanların
     görebileceği yerlere asar mı?
     **Mevzuat:** Maden İşyerlerinde İş Sağlığı ve Güvenliği
     Yönetmeliği, Madde 13, Ek-3/8.11

526. **Soru:** İşveren, belirlenen metan/grizu konsantrasyonunun
     bulunduğu veya grizu kontrolü yapılamayan tıkanmış silo/kömür/
     bür açma ve yangın barajı açma işlerinde patlayıcı madde
     kullanımını yasaklar mı?
     **Mevzuat:** Maden İşyerlerinde İş Sağlığı ve Güvenliği
     Yönetmeliği, Madde 13, Ek-3/9.1

527. **Soru:** İşveren, grizulu kabul edilen ocaklarda baca
     ilerlemelerinde kontrol sondajı yaptırır, havalandırma
     değerlerini her vardiyada ölçtürür, merkezi izleme sistemine
     bağlı sensörlerle oksijen/metan/CO/H2S/sıcaklık/hava hızını
     sürekli izletir ve ölçümleri havalandırma defterine kaydettirir
     mi?
     **Mevzuat:** Maden İşyerlerinde İş Sağlığı ve Güvenliği
     Yönetmeliği, Madde 13, Ek-3/10.1-10.4

528. **Soru:** İşveren, grizulu ocaklarda havalandırmayı mekanik
     sistemle sağlar, metan riskine göre çalışmaları yönetir ve tali
     havalandırmayı (kısa devre önleme, antistatik vantüp, fan
     arızasında derhal tahliye, yedek fan hazırlığı) yönetmelikte
     belirtilen kurallara uygun yürütür mü?
     **Mevzuat:** Maden İşyerlerinde İş Sağlığı ve Güvenliği
     Yönetmeliği, Madde 13, Ek-3/10.5-10.8

529. **Soru:** İşveren, grizu birikimini önleyecek hava akımı
     sağlamayan bölme/boru ile havalandırmayı (hazırlık/grizu dağıtma
     işleri dışında) yasaklar, grizu birikintilerini güvenli şekilde
     temizletir ve aynı hava akımındaki çalışma yerlerinde metan oranı
     sınırlarını (ayak/yol %1,5, hava dönüş yolu %1) aşmamasını sağlar
     mı?
     **Mevzuat:** Maden İşyerlerinde İş Sağlığı ve Güvenliği
     Yönetmeliği, Madde 13, Ek-3/10.9-10.11

530. **Soru:** İşveren, grizulu veya yangına elverişli kömür damarı
     bulunan ocaklarda tüm çalışanlara standartlara uygun oksijenli
     ferdi kurtarıcı bulundurur, ana havalandırma fanına eşdeğer yedek
     fan sağlar ve yedek fanın devreye girme testini en geç ayda bir
     yaptırıp kayıt altına alır mı?
     **Mevzuat:** Maden İşyerlerinde İş Sağlığı ve Güvenliği
     Yönetmeliği, Madde 13, Ek-3/10.12-10.13

531. **Soru:** İşveren, %2'den çok metan tespit edilen ocak
     kısımlarında kurtarma/temizlik dışında çalışmayı yasaklar, %1,5'i
     geçen yerlerde elektrik gerilimini derhal kestirir, grizulu
     ocaklarda yalnız bu tip ocaklara uygun patlayıcı/ateşleyici
     kullandırır, ateşleyiciye lağım doldurma öncesi/sonrası metan
     ölçümü yaptırır, sigara/açık alev/kaynak işlerini yasaklar ve
     yerüstünde grizu tahliyesine karşı tedbir alır mı?
     **Mevzuat:** Maden İşyerlerinde İş Sağlığı ve Güvenliği
     Yönetmeliği, Madde 13, Ek-3/10.14-10.22

532. **Soru:** İşveren, kömür madenlerini (sağlık ve güvenlik
     dokümanında aksi belirtilmedikçe) yanıcı toz bulunan ocak sayar,
     toz patlamasına karşı tedbir alır, bu ocaklara özel patlayıcı/
     ateşleyici kullandırır ve zincirleme toz patlamalarını önleyecek
     patlama barajları kurup yerlerini imalat haritası ve
     havalandırma planında gösterir mi?
     **Mevzuat:** Maden İşyerlerinde İş Sağlığı ve Güvenliği
     Yönetmeliği, Madde 13, Ek-3/11.1-11.4

533. **Soru:** İşveren, kömür ocaklarındaki arabaların kömür tozu
     dökmeyecek şekilde olmasını, üretim/taşıma/aktarma yerlerinde
     pülverize su gibi toz önleme tedbirlerini ve taş tozu serpme
     işleminin yönetmelikte belirtilen özellik ve aralıklarla
     yapılmasını sağlar mı?
     **Mevzuat:** Maden İşyerlerinde İş Sağlığı ve Güvenliği
     Yönetmeliği, Madde 13, Ek-3/11.5-11.7

534. **Soru:** İşveren, ani gaz geliri/göçük/su baskını ihtimali olan
     bölgelerde çalışanların korunması için sağlık ve güvenlik
     dokümanında planlanan faaliyetleri uygular, tehlikeli su/akıcı
     malzeme bulunan kuyularda derhal çıkış tedbiri alır ve ocak
     ağızlarını doğal afetlerden zarar görmeyecek yerlerde seçer mi?
     **Mevzuat:** Maden İşyerlerinde İş Sağlığı ve Güvenliği
     Yönetmeliği, Madde 13, Ek-3/12.1-12.4

535. **Soru:** İşveren, yeraltı kömür ocaklarında gaz degaj riskini
     (damar gaz içeriği, desorbsiyon kapasitesi, bilimsel değerlendirme
     ile) sağlık ve güvenlik dokümanında değerlendirir ve degaj riski
     belirlenen yerlerde gaz drenajı, uygun topuk bırakma veya
     kontrollü sondajla ilerleme tedbirlerinden en az birini uygular
     mı?
     **Mevzuat:** Maden İşyerlerinde İş Sağlığı ve Güvenliği
     Yönetmeliği, Madde 13, Ek-3/12.5-12.5.2

536. **Soru:** İşveren, gaz degaj riskinin belirlenemediği veya eski
     çalışma yerlerinde su birikimi olan durumlarda, lağım/galeri/
     bacalarda yönetmelikte belirtilen aralık ve yönlerde (en az 25
     metre, 15 metre topuk bırakarak) kontrol sondajları yaptırır mı?
     **Mevzuat:** Maden İşyerlerinde İş Sağlığı ve Güvenliği
     Yönetmeliği, Madde 13, Ek-3/12.5.3-12.5.5

537. **Soru:** İşveren, kendiliğinden tutuşmayı önlemek/erken fark
     etmek için tedbir alır, ana yol ve havalandırma yollarının
     mümkünse kömür içinden geçirilmemesini sağlar, zorunlu
     ihtiyaçtan fazla yanıcı madde yeraltına indirmez ve hidrolik
     sıvıların yangına dayanıklılık/hijyen kriterlerine uygun olmasını
     sağlar mı?
     **Mevzuat:** Maden İşyerlerinde İş Sağlığı ve Güvenliği
     Yönetmeliği, Madde 13, Ek-3/13.1-13.3

538. **Soru:** İşveren, çalışanlara her zaman kolay erişilebilir
     yerlerde kişisel solunum koruma cihazı verir, bu cihazların
     kullanımı konusunda eğitim verir ve düzenli kontrol ile çalışır
     durumda tutar mı?
     **Mevzuat:** Maden İşyerlerinde İş Sağlığı ve Güvenliği
     Yönetmeliği, Madde 13, Ek-3/14.1

539. **Soru:** İşveren, çalışanlara uygun kişisel lambalar verir ve
     işyerlerini risk oluşturmayacak, uygun yerleştirilmiş suni
     aydınlatma tesisatıyla donatır mı?
     **Mevzuat:** Maden İşyerlerinde İş Sağlığı ve Güvenliği
     Yönetmeliği, Madde 13, Ek-3/15.1-15.2

540. **Soru:** İşveren, her ocakta arama-kurtarma-tahliye destek
     elemanlarının kullanımı için kapıları, barajları, hava
     köprülerini, hava akım düzenini ve telefon istasyonlarını
     gösteren bir kurtarma planı bulundurur mu?
     **Mevzuat:** Maden İşyerlerinde İş Sağlığı ve Güvenliği
     Yönetmeliği, Madde 13, Ek-3/16.1

541. **Soru:** İşveren, su dolu olduğu bilinen/kuşkulanılan tabakalar
     altındaki ocaklarda emniyet topuğu bırakır ve çözünebilir taş/
     jips yatakları altındaki damarları terk etmeden önce su girişini
     engelleyecek şekilde tıkar mı?
     **Mevzuat:** Maden İşyerlerinde İş Sağlığı ve Güvenliği
     Yönetmeliği, Madde 13, Ek-3/17.1-17.2

542. **Soru:** İşveren, yeraltı maden işletmesinin tüm bölümlerini
     kapsayan, yanmaya/kopmaya/aşınmaya dayanıklı bir hayat hattı
     kurar, hayat hattının acil durumlarda kullanımı konusunda
     çalışanları eğitir ve hattın zarar görmemesini, görürse en kısa
     sürede onarılmasını sağlar mı?
     **Mevzuat:** Maden İşyerlerinde İş Sağlığı ve Güvenliği
     Yönetmeliği, Madde 13, Ek-3/18-18.3

543. **Soru:** İşveren, hayat hattını yönetmelikte belirtilen teknik
     özelliklere (sehimsiz montaj, yanmaz polipropilen malzeme, sarı
     renk/7mm çap, 10 metre aralıklı konik gösterge, yönlü reflektör
     levha, galeri/üretim alanı kesişim göstergeleri, ferdi kurtarıcı
     istasyonu ve sığınma odası bağlantı işaretleri) uygun şekilde
     tesis eder mi?
     **Mevzuat:** Maden İşyerlerinde İş Sağlığı ve Güvenliği
     Yönetmeliği, Madde 13, Ek-3/18.4-18.10

544. **Soru:** İşveren, kömür ve türevleri hariç yeraltı maden
     işyerlerinde acil durumlarda kullanılmak üzere sığınma odaları
     kurar mı (henüz üretim aşamasına geçmemiş işyerleri bu odaları
     üretime geçtiklerinde kurar)?
     **Mevzuat:** Maden İşyerlerinde İş Sağlığı ve Güvenliği
     Yönetmeliği, Madde 13, Ek-3/19

545. **Soru:** İşveren, sağlık ve güvenlik dokümanında gerekli
     görülmesi halinde acil durumlar için havalandırma, tutuşma
     kaynağı kapatma, parlayıcı sıvı/gaz önleme, yangından korunma ve
     sondaj kuyusu kontrol sistemlerine kumanda edebilecek bir
     uzaktan kumanda sistemi kurar mı?
     **Mevzuat:** Maden İşyerlerinde İş Sağlığı ve Güvenliği
     Yönetmeliği, Madde 13, Ek-4 (Ortak Hükümler)/1.1-1.2

546. **Soru:** İşveren, işyerinin tüm bölümlerine ulaşan sesli/ışıklı
     alarm sistemi, çalışan bulunan kısımlardan işitilebilir sesli
     sistem ve (deniz tesislerinde) kıyı/kurtarma servisleriyle
     sürekli haberleşme sistemi kurar, bu sistemleri güvenilir
     olmayan enerjiden bağımsız besler mi?
     **Mevzuat:** Maden İşyerlerinde İş Sağlığı ve Güvenliği
     Yönetmeliği, Madde 13, Ek-4 (Ortak Hükümler)/2.1-2.4

547. **Soru:** İşveren, özel görevli çalışanların listesini işyerinin
     uygun yerlerine asar, güvenli toplanma yerlerini belirler, güncel
     isim listesi bulundurur ve tahliye/toplanma yollarını ısı/duman/
     patlama etkilerinden koruyarak kullanılabilir durumda tutar mı?
     **Mevzuat:** Maden İşyerlerinde İş Sağlığı ve Güvenliği
     Yönetmeliği, Madde 13, Ek-4 (Ortak Hükümler)/3.1-3.4

548. **Soru:** Denizdeki sondajla maden çıkarma işyerinden sorumlu
     işveren, özel tehlike kaynaklarını belirleyip risklerini
     değerlendiren, kaza önleme/tahliye tedbirlerini belirten bir
     sağlık ve güvenlik dokümanı hazırlar, bu dokümanda belirtilen
     prosedürlere uyar ve birden fazla işveren varsa aralarında
     işbirliği yapar mı?
     **Mevzuat:** Maden İşyerlerinde İş Sağlığı ve Güvenliği
     Yönetmeliği, Madde 13, Ek-4 (Denizlerdeki Tesisler)/1.1-1.3

549. **Soru:** İşveren, denizdeki sondaj tesisinde riskli alanları
     yangın duvarlarıyla ayırır, bu alanları yangın algılama/alarm/
     söndürme sistemleriyle (ana su borusu, sprink, köpük, taşınabilir
     söndürücü vb.) donatır, bir yangın planı bulundurur ve yangınla
     mücadele ekipmanını Sağlık ve Güvenlik İşaretleri Yönetmeliğine
     uygun işaretler mi?
     **Mevzuat:** Maden İşyerlerinde İş Sağlığı ve Güvenliği
     Yönetmeliği, Madde 13, Ek-4 (Denizlerdeki Tesisler)/2.1-2.6

550. **Soru:** İşveren, denizdeki sondaj tesisi çalışanlarına genel
     acil durum eğitimine ek olarak işyerine özgü tahliye eğitimi ve
     hayatta kalma teknikleri eğitimi verir mi?
     **Mevzuat:** Maden İşyerlerinde İş Sağlığı ve Güvenliği
     Yönetmeliği, Madde 13, Ek-4 (Denizlerdeki Tesisler)/3.1-3.2

551. **Soru:** İşveren, denizdeki sondaj tesisinde yeterli tahliye
     araçları ve denize kaçış imkanı sağlar, tüm çalışanlara yetecek
     sayıda uygun cankurtaran sandalı/botu/can simidi/yeleği
     bulundurur ve tatbikatlarla cankurtaran teknelerinin operasyona
     hazır olduğunu teyit eder mi?
     **Mevzuat:** Maden İşyerlerinde İş Sağlığı ve Güvenliği
     Yönetmeliği, Madde 13, Ek-4 (Denizlerdeki Tesisler)/3.3-3.6, 4.1

552. **Soru:** İşveren, denizdeki sondaj tesisinde işin gerektirdiği
     hallerde çalışanlara patlama/duman/yangına karşı korunaklı,
     havalandırma/ısıtma/aydınlatmalı, her katta en az iki bağımsız
     çıkışlı barınma imkanı sağlar, kadın-erkek yatakhanelerini
     ayırır ve hijyenik şartları korur mu?
     **Mevzuat:** Maden İşyerlerinde İş Sağlığı ve Güvenliği
     Yönetmeliği, Madde 13, Ek-4 (Denizlerdeki Tesisler)/5.1-5.3

553. **Soru:** İşveren, denizdeki sondaj tesisinde helikopter
     operasyonlarına uygun büyüklükte bir pist tasarlar, kaza
     malzemelerini pist yakınında depolar ve helikopter hareketleri
     sırasında eğitimli destek elemanı bulundurur mu?
     **Mevzuat:** Maden İşyerlerinde İş Sağlığı ve Güvenliği
     Yönetmeliği, Madde 13, Ek-4 (Denizlerdeki Tesisler)/6.1-6.3

554. **Soru:** İşveren, sondajla maden çıkartma işyerinin açık
     denizde konuşlandırılması sırasında çalışanların sağlık ve
     güvenliğini koruyacak tüm tedbirleri alır ve kullanılan ekipman/
     çalışma yöntemlerinin normal ve kritik koşullardaki riskleri
     azaltacak şekilde olmasını sağlar mı?
     **Mevzuat:** Maden İşyerlerinde İş Sağlığı ve Güvenliği
     Yönetmeliği, Madde 13, Ek-4 (Denizlerdeki Tesisler)/7.1-7.3

## Genel Yükümlülükler → Yapı İşleri (YENİ alt kategori)

555. **Soru:** İşveren, yapı alanının düzenli ve temiz tutulmasını,
     çalışma yerlerine ulaşım/geçiş alanlarının belirlenmesini ve
     malzemenin kullanım/taşıma şartlarının düzenlenmesini sağlar mı?
     **Mevzuat:** Yapı İşlerinde İş Sağlığı ve Güvenliği Yönetmeliği,
     Madde 5/1-a,b,c

556. **Soru:** İşveren, tesis ve ekipmanın periyodik bakım/kontrolünü,
     tehlikeli malzemeler için uygun ve sınırları belirlenmiş
     depolama alanlarını, bu malzemelerin kullanım/uzaklaştırma
     koşullarını ve atıkların uygun yöntem/ekipmanla depolanıp
     uzaklaştırılmasını sağlar mı?
     **Mevzuat:** Yapı İşlerinde İş Sağlığı ve Güvenliği Yönetmeliği,
     Madde 5/1-ç,d,e,f

557. **Soru:** İşveren, iş süresini yapı alanındaki duruma göre
     yeniden belirler, alt işverenler ve kendi nam ve hesabına
     çalışanlar arasında işbirliğini sağlar, çevresel/endüstriyel
     etkileşimi dikkate alır ve çalışanlara uygun kişisel koruyucu
     donanımı bulundurup kullandırır mı?
     **Mevzuat:** Yapı İşlerinde İş Sağlığı ve Güvenliği Yönetmeliği,
     Madde 5/1-g,ğ,h,ı

558. **Soru:** İşveren ve alt işverenler, sağlık ve güvenlik
     şartlarının sürdürülmesinde Ek-4'teki asgari şartları dikkate
     alır, sağlık ve güvenlik koordinatörünün uyarı/tespit/
     talimatlarını ve (inşaata bizzat katılmaları halinde) görüş ve
     önerilerini dikkate alarak hareket eder mi?
     **Mevzuat:** Yapı İşlerinde İş Sağlığı ve Güvenliği Yönetmeliği,
     Madde 5/2-3

559. **Soru:** Aynı yapı alanında birden fazla işveren/alt işveren
     varsa, işveren veya proje sorumlusu bir veya daha fazla sağlık
     ve güvenlik koordinatörü görevlendirir ve yapı işine başlamadan
     önce proje hazırlık aşamasında bir sağlık ve güvenlik planı
     hazırlar veya hazırlanmasını sağlar mı?
     **Mevzuat:** Yapı İşlerinde İş Sağlığı ve Güvenliği Yönetmeliği,
     Madde 8/1-2

560. **Soru:** Yapı işi 30 işgününden fazla sürüp devamlı 20'den
     fazla çalışan istihdam edilecekse veya iş 500 yevmiyeden fazla
     çalışma gerektirecekse, işveren veya proje sorumlusu işe
     başlamadan önce ilgili çalışma ve iş kurumu il müdürlüğüne
     bildirim yapar ve bildirim bilgilerini içeren levhayı yapı
     alanında görünür bir yere asıp gerektiğinde güncellenmesini
     sağlar mı?
     **Mevzuat:** Yapı İşlerinde İş Sağlığı ve Güvenliği Yönetmeliği,
     Madde 8/4-5

561. **Soru:** İşveren veya proje sorumlusu, projenin tasarım/hazırlık
     aşamasında mimari, teknik ve organizasyonel kararlar alırken ve
     iş/iş aşamaları için gereken süreyi hesaplarken Kanunun 5.
     maddesindeki risklerden korunma ilkelerini gözetir mi?
     **Mevzuat:** Yapı İşlerinde İş Sağlığı ve Güvenliği Yönetmeliği,
     Madde 9

562. **Soru:** İşveren, sağlık ve güvenlik koordinatörünün proje
     hazırlık aşamasında sağlık ve güvenlik planını (Ek-2'deki riskli
     işler varsa özel tedbirleriyle) ve projenin sonraki her türlü
     yapı işinde (bakım/tadilat/yıkım dahil) kullanılacak bir sağlık
     ve güvenlik dosyası hazırlamasını sağlar mı?
     **Mevzuat:** Yapı İşlerinde İş Sağlığı ve Güvenliği Yönetmeliği,
     Madde 10

563. **Soru:** İşveren, sağlık ve güvenlik koordinatörünün uygulama
     aşamasında işverenler/alt işverenler arası organizasyonu, sağlık
     ve güvenlik planının güncellenmesini, işverenler arası bilgi
     alışverişini ve yapı alanına yetkisiz kişilerin girişini
     önleyecek düzenlemeleri koordine etmesini sağlar mı?
     **Mevzuat:** Yapı İşlerinde İş Sağlığı ve Güvenliği Yönetmeliği,
     Madde 11

566. **Soru:** İşveren, yapı işlerinde kullanılan makine/araç/
     ekipman/malzeme ve çalışma yöntemlerinin ilgili teknik mevzuata
     ve standartlara uygun olmasını, mekanik/elektrikli ekipmanın
     seçimi/kurulması/yerleştirilmesi/işletilmesi/bakımında ilgili
     yönetmelik hükümlerini dikkate almasını sağlar mı?
     **Mevzuat:** Yapı İşlerinde İş Sağlığı ve Güvenliği Yönetmeliği,
     Madde 14/1-2

567. **Soru:** İşveren, iş ekipmanlarının asgari sağlık ve güvenlik
     şartlarına ilişkin Ek-5'te yer alan hükümlere uyar mı?
     **Mevzuat:** Yapı İşlerinde İş Sağlığı ve Güvenliği Yönetmeliği,
     Madde 14/3

## Genel Yükümlülükler → Bilgilendirme ve Katılım

564. **Soru:** İşveren, çalışanları veya temsilcilerini yapı
     alanında alınan sağlık ve güvenlik tedbirleri hakkında kolay ve
     anlaşılır şekilde bilgilendirir ve iş ekipmanlarının kullanım
     talimatını çalışanların rahatlıkla okuyabileceği bir yere asar
     mı?
     **Mevzuat:** Yapı İşlerinde İş Sağlığı ve Güvenliği Yönetmeliği,
     Madde 12

565. **Soru:** İşveren, yapı alanının büyüklüğü ve risk derecesini
     göz önünde bulundurarak çalışanların veya temsilcilerinin
     görüşlerini alır ve katılımlarını sağlar mı?
     **Mevzuat:** Yapı İşlerinde İş Sağlığı ve Güvenliği Yönetmeliği,
     Madde 13

568. **Soru:** İşveren, seviye farkı bulunan düşme riskli her çalışmayı
     yüksekte çalışma kabul eder; mümkünse montaj işlerini yerde
     yaptırır, çalışmaları önceden planlayıp acil durum planına
     yüksekten düşme hususlarını dahil eder ve çalışma yerlerine
     güvenli ulaşım sağlar mı?
     **Mevzuat:** Yapı İşlerinde İş Sağlığı ve Güvenliği Yönetmeliği,
     Madde 14/3, Ek-4(A)/1-2-a,b,c

569. **Soru:** İşveren, yüksekte çalışmada öncelikle korkuluk/
     platform/bariyer/güvenlik ağı gibi toplu koruma tedbirlerini,
     bunların yetersiz kaldığı hallerde ankraj noktası/yaşam hattı ve
     tam vücut kemer sistemlerini kullandırır, bu donanımların
     bakımını yaptırır, uygunsuz donanımı yasaklar, çalışanlara
     eğitim verir ve çalışmayı ehil bir kişinin gözetiminde yürütür
     mü?
     **Mevzuat:** Yapı İşlerinde İş Sağlığı ve Güvenliği Yönetmeliği,
     Madde 14/3, Ek-4(A)/2-d,e,f,g,ğ

570. **Soru:** İşveren, çalışma platformları ve geçitlerin kişileri
     düşmekten ve düşen cisimlerden koruyacak şekilde yapılmasını,
     boyutlandırılmasını ve muhafaza edilmesini sağlar mı?
     **Mevzuat:** Yapı İşlerinde İş Sağlığı ve Güvenliği Yönetmeliği,
     Madde 14/3, Ek-4(A)/7

571. **Soru:** İşveren, yüksekte kullanılan el aletleri ve
     malzemelerin düşmesini engelleyecek tedbirler alır, çalışanları
     düşen cisimlere karşı öncelikle toplu olarak korur ve cisim
     düşme riski olan bölgelere girişi önler veya kapalı geçit
     yaptırır mı?
     **Mevzuat:** Yapı İşlerinde İş Sağlığı ve Güvenliği Yönetmeliği,
     Madde 14/3, Ek-4(A)/8-10

572. **Soru:** İşveren, çalışanlara uygun baş koruyucu donanım
     kullandırır ve malzemelerin herhangi bir yükseklikten doğrudan
     yere atılmasını değil, dengeli/güvenli indirilip istiflenmesini
     (moloz kaydırağı gibi güvenli yöntemlerle) sağlar mı?
     **Mevzuat:** Yapı İşlerinde İş Sağlığı ve Güvenliği Yönetmeliği,
     Madde 14/3, Ek-4(A)/11-12

573. **Soru:** İşveren, enerji dağıtım tesislerini yangın/patlama
     riski oluşturmayacak şekilde kurdurur, elektrik çarpması riskine
     karşı koruma sağlar ve elektrik tesisat işlerini (kurulum/söküm/
     tamirat/tadilat) sadece yetkili elektrikçilere yaptırır mı?
     **Mevzuat:** Yapı İşlerinde İş Sağlığı ve Güvenliği Yönetmeliği,
     Madde 14/3, Ek-4(A)/13-14

574. **Soru:** İşveren, elektrik tesisatının yeterli kapasite/
     kalitede ve çalışma koşullarına dayanıklı olmasını, ana/tali
     panolarda kaçak akım rölesi kullanılmasını, panoların kilitli
     dolap/hücre içinde tutulmasını ve açık uçlu kablolarla bağlantı
     yapılmamasını sağlar mı?
     **Mevzuat:** Yapı İşlerinde İş Sağlığı ve Güvenliği Yönetmeliği,
     Madde 14/3, Ek-4(A)/15-19

575. **Soru:** İşveren, elektrik ekipman/koruyucu cihaz seçiminde
     çalışma alanı şartlarını ve kullanıcı eğitim/deneyimini dikkate
     alır, ekipman üzerinde voltaj bilgisi bulundurur ve elektrikli
     iş ekipmanlarının gövde topraklamasını yaptırır mı?
     **Mevzuat:** Yapı İşlerinde İş Sağlığı ve Güvenliği Yönetmeliği,
     Madde 14/3, Ek-4(A)/20-22

576. **Soru:** İşveren, yapı alanının düzenli/temiz tutulmasını,
     sivri/keskin malzeme ve atıkların düzenli uzaklaştırılmasını
     (uzaklaştırılamıyorsa korunmasını), kaygan hale gelen yerlerin
     temizlenip kaymayı önleyici tedbir alınmasını ve malzemelerin
     yıkılma/devrilmeyi önleyecek şekilde istiflenmesini sağlar mı?
     **Mevzuat:** Yapı İşlerinde İş Sağlığı ve Güvenliği Yönetmeliği,
     Madde 14/3, Ek-4(A)/24-26

577. **Soru:** İşveren, beklenmeyen hareket riski taşıyan malzeme/
     ekipmanı güvenli şekilde sabitler, yeterli dayanıklılıkta olmayan
     yüzeylerde çalışmaya/girişe izin vermez ve kurulum/söküm/bakım/
     yıkım halindeki yapılarda dayanıksızlık/kırılganlık risklerine
     karşı tedbir alır mı?
     **Mevzuat:** Yapı İşlerinde İş Sağlığı ve Güvenliği Yönetmeliği,
     Madde 14/3, Ek-4(A)/28-30

578. **Soru:** İşveren, acil çıkış yollarının/kapılarının doğrudan
     dışarıya veya güvenli alana açılmasını, engelsiz ve kilitsiz
     olmasını, sayı/boyutlarının yapı alanına uygun olmasını, Sağlık
     ve Güvenlik İşaretleri Yönetmeliğine uygun işaretlenmesini ve
     elektrik kesilmesi halinde yedek aydınlatma bulundurulmasını
     sağlar mı?
     **Mevzuat:** Yapı İşlerinde İş Sağlığı ve Güvenliği Yönetmeliği,
     Madde 14/3, Ek-4(A)/31
     **Not:** "Genel Yükümlülükler → İşyeri Bina ve Eklentileri"
     kapsamındaki genel acil çıkış sorularıyla örtüşür; bu soru yapı
     alanına özgü uygulamayı kapsar.

579. **Soru:** İşveren, yapı alanının özelliğine uygun yeterli
     yangın söndürme araç/gereci, yangın dedektörü/alarm sistemi
     bulundurur, bunların düzenli bakım/periyodik kontrolünü yaptırır
     ve otomatik olmayan söndürme ekipmanını erişilebilir, işaretli
     yerlerde tutar mı?
     **Mevzuat:** Yapı İşlerinde İş Sağlığı ve Güvenliği Yönetmeliği,
     Madde 14/3, Ek-4(A)/32-34
     **Not:** "Genel Yükümlülükler → İşyeri Bina ve Eklentileri"
     kapsamındaki genel yangın sorularıyla örtüşür; bu soru yapı
     alanına özgü uygulamayı kapsar.

580. **Soru:** İşveren, çalışanların harcadığı fiziksel güce uygun
     yeterli temiz hava sağlar, cebri havalandırma sistemini her
     zaman çalışır tutar ve gerekli hallerde arıza bildiren sistem
     bulundurur mu?
     **Mevzuat:** Yapı İşlerinde İş Sağlığı ve Güvenliği Yönetmeliği,
     Madde 14/3, Ek-4(A)/35
     **Not:** Genel havalandırma yükümlülüğü "Genel Yükümlülükler →
     İşyeri Bina ve Eklentileri" kapsamında zaten mevcuttur; bu soru
     yapı alanına özgü uygulamayı kapsar.

581. **Soru:** İşveren, çalışanların zararlı titreşim/gürültü/gaz/
     buhar/toz etkenlerine maruz kalmasını önler, zehirli/zararlı
     madde veya düşük oksijen riski olan kapalı ortamlarda hava
     kontrolü yapar ve sınırlı hava hacmine sahip yüksek riskli
     ortamlarda çalıştırmaktan kaçınır (zorunlu hallerde sürekli
     izleme ve yardım tedbirleriyle) mı?
     **Mevzuat:** Yapı İşlerinde İş Sağlığı ve Güvenliği Yönetmeliği,
     Madde 14/3, Ek-4(A)/36-38

582. **Soru:** İşveren, ortam sıcaklığının yapılan işe ve harcanan
     güce uygun olmasını sağlar, değiştirilemeyen hallerde çalışanları
     aşırı sıcak/soğuktan koruyacak tedbir alır mı?
     **Mevzuat:** Yapı İşlerinde İş Sağlığı ve Güvenliği Yönetmeliği,
     Madde 14/3, Ek-4(A)/39
     **Not:** Genel sıcaklık yükümlülüğü "Genel Yükümlülükler →
     İşyeri Bina ve Eklentileri" kapsamında zaten mevcuttur; bu soru
     yapı alanına özgü uygulamayı kapsar.

583. **Soru:** İşveren, çalışma yerleri/barakalar/yolları mümkün
     olduğunca doğal ışıkla, yetersiz kaldığında uygun suni ışıkla
     (gerekirse darbeye dayanıklı taşınabilir araçlarla) aydınlatır,
     arıza halinde yedek aydınlatma bulundurur mu?
     **Mevzuat:** Yapı İşlerinde İş Sağlığı ve Güvenliği Yönetmeliği,
     Madde 14/3, Ek-4(A)/40
     **Not:** Genel aydınlatma yükümlülüğü "Genel Yükümlülükler →
     İşyeri Bina ve Eklentileri" kapsamında zaten mevcuttur; bu soru
     yapı alanına özgü uygulamayı kapsar.

584. **Soru:** İşveren, raylı/yukarı açılan kapılarda güvenlik
     tertibatı bulundurur, kaçış yollarındaki kapıları işaretleyip
     içeriden açılabilir yapar, araç geçitlerinde yayalar için ayrı
     işaretli geçiş bulundurur ve mekanik kapılarda acil durdurma/
     manuel açma özelliği sağlar mı?
     **Mevzuat:** Yapı İşlerinde İş Sağlığı ve Güvenliği Yönetmeliği,
     Madde 14/3, Ek-4(A)/41

585. **Soru:** İşveren, merdiven/rampa dahil trafik yollarını kolay
     ve güvenli geçişi sağlayacak şekilde tasarlar, araç/yaya yollarını
     kullanıcı sayısı ve işe uygun boyutlandırır, güvenlik mesafesi/
     koruyucu tedbir alır ve yolları işaretleyip düzenli bakımını
     yapar mı?
     **Mevzuat:** Yapı İşlerinde İş Sağlığı ve Güvenliği Yönetmeliği,
     Madde 14/3, Ek-4(A)/42-44

586. **Soru:** İşveren, yasak bölgelere yetkisiz girişi engeller,
     tehlikeli bölgeleri işaretleyip uyarı levhası koyar ve trafik
     yolu güzergahındaki havai hat gibi engeller için gerekli
     işaretleme/tedbirleri alır mı?
     **Mevzuat:** Yapı İşlerinde İş Sağlığı ve Güvenliği Yönetmeliği,
     Madde 14/3, Ek-4(A)/45-46

587. **Soru:** İşveren, yükleme yerleri ve rampalarının taşınacak
     yükün boyutuna uygun tasarlanmasını, düşmeyi önleyecek şekilde
     güvenli olmasını ve en az bir çıkış yerine sahip olmasını sağlar
     mı?
     **Mevzuat:** Yapı İşlerinde İş Sağlığı ve Güvenliği Yönetmeliği,
     Madde 14/3, Ek-4(A)/47

588. **Soru:** İşveren, çalışılan yerlerin gerekli ekipman/araçlar
     dikkate alınarak çalışanların rahatça hareket edebileceği
     genişlikte olmasını sağlar mı?
     **Mevzuat:** Yapı İşlerinde İş Sağlığı ve Güvenliği Yönetmeliği,
     Madde 14/3, Ek-4(A)/48

589. **Soru:** İşveren, İşyerlerinde Acil Durumlar Hakkında
     Yönetmeliğe uygun sayıda ilkyardım eğitimli çalışanı her an
     hazır bulundurur ve kaza geçiren/rahatsızlanan çalışanların
     tıbbi müdahale yerine en kısa sürede ulaşmasını sağlayacak
     tedbirler alır mı?
     **Mevzuat:** Yapı İşlerinde İş Sağlığı ve Güvenliği Yönetmeliği,
     Madde 14/3, Ek-4(A)/49

590. **Soru:** İşveren, İş Sağlığı ve Güvenliği Hizmetleri
     Yönetmeliğine göre gerektiğinde bir veya daha fazla ilkyardım/
     acil müdahale odası sağlar, bu odaları malzeme/sedye ile
     donatıp işaretler ve çalışma koşullarının gerektirdiği her
     yerde işaretli ilkyardım ekipmanı ile acil servis iletişim
     bilgilerini görünür yerlerde bulundurur mu?
     **Mevzuat:** Yapı İşlerinde İş Sağlığı ve Güvenliği Yönetmeliği,
     Madde 14/3, Ek-4(A)/50-52
     **Not:** Genel ilkyardım yükümlülüğü "Genel Yükümlülükler →
     İşyeri Bina ve Eklentileri" kapsamında kısmen mevcuttur; bu soru
     yapı alanına özgü uygulamayı kapsar.

591. **Soru:** İşveren, iş elbisesi giyen çalışanlar için kadın-erkek
     ayrı, kolay ulaşılabilir, yeterli kapasiteli, oturma yeri ve
     kilitli (nemli/tozlu/tehlikeli işlerde iki bölmeli) dolaplı
     soyunma yerleri sağlar mı?
     **Mevzuat:** Yapı İşlerinde İş Sağlığı ve Güvenliği Yönetmeliği,
     Madde 14/3, Ek-4(A)/53-54
     **Not:** "Genel Yükümlülükler → İşyeri Bina ve Eklentileri"
     kapsamındaki genel soyunma yeri sorularıyla örtüşür; bu soru
     yapı alanına özgü uygulamayı kapsar.

592. **Soru:** İşveren, gerektiğinde kadın-erkek ayrı, sıcak/soğuk
     suyu olan, yeterli genişlikte, havalandırılmış/aydınlatılmış duş
     ve lavabo tesisleri kurar, bunları her zaman kullanıma hazır ve
     temizlik malzemeli tutar mı?
     **Mevzuat:** Yapı İşlerinde İş Sağlığı ve Güvenliği Yönetmeliği,
     Madde 14/3, Ek-4(A)/55-57
     **Not:** "Genel Yükümlülükler → İşyeri Bina ve Eklentileri"
     kapsamındaki genel duş/lavabo sorularıyla örtüşür; bu soru yapı
     alanına özgü uygulamayı kapsar.

593. **Soru:** İşveren, çalışma/dinlenme/yıkanma/soyunma yerlerine
     yakın, kadın-erkek ayrı, yeterli sayıda, havalandırılmış/
     aydınlatılmış ve temizlik malzemeli tuvalet ve lavabo tesis eder
     mi?
     **Mevzuat:** Yapı İşlerinde İş Sağlığı ve Güvenliği Yönetmeliği,
     Madde 14/3, Ek-4(A)/58
     **Not:** "Genel Yükümlülükler → İşyeri Bina ve Eklentileri"
     kapsamındaki genel tuvalet sorularıyla örtüşür; bu soru yapı
     alanına özgü uygulamayı kapsar.

594. **Soru:** İşveren, gerektiğinde çalışanlara kolay ulaşılabilir
     dinlenme/barınma yerleri sağlar, bu yerleri sağlık şartlarına
     uygun mahfuz bir zeminde kurar ve drenaj tedbirlerini alır mı?
     **Mevzuat:** Yapı İşlerinde İş Sağlığı ve Güvenliği Yönetmeliği,
     Madde 14/3, Ek-4(A)/59-60

595. **Soru:** İşveren, dinlenme/barınma/sosyal tesisleri yanmaz
     veya kolay tutuşmayan malzemeden inşa eder, barınma amacıyla
     çadır/branda kullanmaz (meskûn mahal dışı açık hava
     çalışmalarında sadece yanmaz çadır kullanılabilir) ve ısıtma/
     soğutma/havalandırma/elektrik tesisatını yangın riski
     oluşturmayacak şekilde kurar (mangal/maltız gibi açık ateş
     yasağı dahil) mı?
     **Mevzuat:** Yapı İşlerinde İş Sağlığı ve Güvenliği Yönetmeliği,
     Madde 14/3, Ek-4(A)/61-62

596. **Soru:** İşveren, barınma yerlerinde yeterli sayıda temiz
     karyola/ranza/yatak/battaniye sağlar, dinlenme/barınma yerlerini
     yeterli genişlikte kurar, masa/sandalye bulundurur, sigara
     dumanından koruma tedbiri alır ve sabit barınma tesislerinde
     dinlenme odası, boş vakit odası, yeterli duş/tuvalet/lavabo
     bulundurur mu?
     **Mevzuat:** Yapı İşlerinde İş Sağlığı ve Güvenliği Yönetmeliği,
     Madde 14/3, Ek-4(A)/63-65

597. **Soru:** İşveren, gebe ve emziren kadın çalışanların yatıp
     uzanarak dinlenebilecekleri uygun koşulları sağlar mı?
     **Mevzuat:** Yapı İşlerinde İş Sağlığı ve Güvenliği Yönetmeliği,
     Madde 14/3, Ek-4(A)/66
     **Not:** "Genel Yükümlülükler → Gebe, yeni doğum yapmış ve
     emziren kadın çalışanlar" kapsamında zaten mevcuttur; bu soru
     yapı alanına özgü uygulamayı kapsar.

598. **Soru:** İşveren, engelli çalışanların durumunu dikkate alarak
     çalışma yerleri, kapılar, geçiş yerleri, merdivenler, duşlar,
     lavabolar ve tuvaletlerde gerekli düzenlemeleri yapar mı?
     **Mevzuat:** Yapı İşlerinde İş Sağlığı ve Güvenliği Yönetmeliği,
     Madde 14/3, Ek-4(A)/67
     **Not:** "Genel Yükümlülükler → İşyeri Bina ve Eklentileri"
     kapsamındaki genel engelli erişilebilirlik sorularıyla örtüşür;
     bu soru yapı alanına özgü uygulamayı kapsar.

599. **Soru:** İşveren, yapı alanının çevresini yetkisiz girişi
     önleyecek şekilde çevirip işaretler, çalışanlara yeterli içme
     suyu/alkolsüz içecek bulundurur ve yemek yiyip gerektiğinde
     hazırlayabilecekleri imkanlar sağlar mı?
     **Mevzuat:** Yapı İşlerinde İş Sağlığı ve Güvenliği Yönetmeliği,
     Madde 14/3, Ek-4(A)/68-70

600. **Soru:** İşveren, yapı alanındaki kapalı mekan tesis ve
     müştemilatının kullanım amacına uygun sağlamlık ve dayanıklılıkta
     olmasını sağlar mı?
     **Mevzuat:** Yapı İşlerinde İş Sağlığı ve Güvenliği Yönetmeliği,
     Madde 14/3, Ek-4(B-I)/1

601. **Soru:** İşveren, kapalı mekanlardaki acil çıkış kapılarının
     doğrudan dışarıya/güvenli alana açılmasını, raylı/döner kapı
     olmamasını, kilitsiz olmasını ve Sağlık ve Güvenlik İşaretleri
     Yönetmeliğine uygun işaretlenmesini sağlar mı?
     **Mevzuat:** Yapı İşlerinde İş Sağlığı ve Güvenliği Yönetmeliği,
     Madde 14/3, Ek-4(B-I)/2
     **Not:** Ek-4 Bölüm A/31 ile örtüşür (kapalı mekana özgü
     varyant).

602. **Soru:** İşveren, kapalı mekanlarda cebri havalandırma/klima
     sisteminin çalışanları rahatsız etmeyecek şekilde kurulmasını
     ve sağlığa ani tehlike oluşturacak kirliliğin derhal
     uzaklaştırılmasını sağlar mı?
     **Mevzuat:** Yapı İşlerinde İş Sağlığı ve Güvenliği Yönetmeliği,
     Madde 14/3, Ek-4(B-I)/3
     **Not:** Ek-4 Bölüm A/35 ile örtüşür (kapalı mekana özgü
     varyant).

603. **Soru:** İşveren, kapalı mekanlardaki çalışma odaları,
     dinlenme/soyunma/duş/tuvalet/kantin/ilkyardım odalarının
     sıcaklığının kullanım amacına uygun olmasını ve pencere/çatı
     aydınlatması/camlı kısımların güneş ışığının aşırı etkisini
     engellemesini sağlar mı?
     **Mevzuat:** Yapı İşlerinde İş Sağlığı ve Güvenliği Yönetmeliği,
     Madde 14/3, Ek-4(B-I)/4
     **Not:** Ek-4 Bölüm A/39 ile örtüşür (kapalı mekana özgü
     varyant).

604. **Soru:** İşveren, kapalı mekanların mümkün olduğunca doğal
     ışıkla, yetersiz kaldığında yeterli suni aydınlatma ile
     aydınlatılmasını sağlar mı?
     **Mevzuat:** Yapı İşlerinde İş Sağlığı ve Güvenliği Yönetmeliği,
     Madde 14/3, Ek-4(B-I)/5
     **Not:** Ek-4 Bölüm A/40 ile örtüşür (kapalı mekana özgü
     varyant).

605. **Soru:** İşveren, çalışma yerlerinin taban/duvar/tavan
     yüzeylerinin kolay temizlenebilir malzemeden olmasını ve trafik
     yolu yakınındaki saydam/camlı bölmelerin güvenli malzemeden
     yapılıp işaretlenmesini, çarpma/kırılmaya karşı korunmasını
     sağlar mı?
     **Mevzuat:** Yapı İşlerinde İş Sağlığı ve Güvenliği Yönetmeliği,
     Madde 14/3, Ek-4(B-I)/6-8

606. **Soru:** İşveren, pencerelerin/çatı pencerelerinin/havalandırma
     sistemlerinin çalışanlarca güvenli şekilde açılıp kapanmasını,
     açıkken tehlike oluşturmamasını ve temizliği yapanlar için risk
     oluşturmayacak şekilde tasarlanmasını sağlar mı?
     **Mevzuat:** Yapı İşlerinde İş Sağlığı ve Güvenliği Yönetmeliği,
     Madde 14/3, Ek-4(B-I)/9

607. **Soru:** İşveren, kapı ve girişlerin kullanım amacına uygun
     boyut/sayı/malzemede olmasını, çift yönlü açılan kapıların
     saydam kısma sahip olmasını ve saydam kapı yüzeylerinin
     işaretlenip kırılmaya karşı korunmasını sağlar mı?
     **Mevzuat:** Yapı İşlerinde İş Sağlığı ve Güvenliği Yönetmeliği,
     Madde 14/3, Ek-4(B-I)/10

608. **Soru:** İşveren, kapalı mekanlarda araç geçiş yollarını
     açıkça işaretler ve yürüyen merdiven/bantların güvenli çalışır
     durumda, güvenlik araçlı ve erişilebilir acil durdurma sistemli
     olmasını sağlar mı?
     **Mevzuat:** Yapı İşlerinde İş Sağlığı ve Güvenliği Yönetmeliği,
     Madde 14/3, Ek-4(B-I)/11-12

609. **Soru:** İşveren, çalışma yerlerinin taban alanı/yüksekliği/
     hava hacminin çalışanların sağlık-güvenliğini riske atmayacak
     ve rahat çalışmayı sağlayacak yeterli boyutlarda olmasını sağlar
     mı?
     **Mevzuat:** Yapı İşlerinde İş Sağlığı ve Güvenliği Yönetmeliği,
     Madde 14/3, Ek-4(B-I)/13

610. **Soru:** İşveren, açık mekandaki hareketli/sabit çalışma
     yerlerinin çalışan sayısı/yük/dış etkiler dikkate alınarak
     yeterli sağlamlıkta olmasını, zamansız hareketinin güvenilir
     sabitleme ile önlenmesini ve yükseklik/derinlik değişikliğinde
     kontrol edilmesini sağlar mı?
     **Mevzuat:** Yapı İşlerinde İş Sağlığı ve Güvenliği Yönetmeliği,
     Madde 14/3, Ek-4(B-II)/14

611. **Soru:** İşveren, yapı işine başlamadan önce alandaki enerji
     tesisatını belirler/işaretler, enerji nakil hatlarına yeterli
     güvenlik mesafesi bırakır (yetersizse güzergah değişikliği/akım
     kesme izni alır), bariyer/ikaz levhasıyla hatlardan uzak tutar
     ve tesisatın düzenli bakımını yaptırır mı?
     **Mevzuat:** Yapı İşlerinde İş Sağlığı ve Güvenliği Yönetmeliği,
     Madde 14/3, Ek-4(B-II)/15

612. **Soru:** İşveren, çalışanları olumsuz hava koşullarından korur
     ve kuvvetli rüzgar alan işyerlerinde güvenlik tedbiri alınmadan
     çalışma yaptırmaz mı?
     **Mevzuat:** Yapı İşlerinde İş Sağlığı ve Güvenliği Yönetmeliği,
     Madde 14/3, Ek-4(B-II)/16

613. **Soru:** İşveren, seyyar erişim ve çalışma kulelerini üzerinde
     çalışan varken hareket ettirmez, ekipmanın dik/platformun düz
     olmasını ve ayaklarında fren kolu gibi kendiliğinden hareketi
     engelleyen tertibat bulunmasını sağlar mı?
     **Mevzuat:** Yapı İşlerinde İş Sağlığı ve Güvenliği Yönetmeliği,
     Madde 14/3, Ek-4(B-II)/36

614. **Soru:** İşveren, asma iskelelerin taşıyıcı halat/mekanik
     tesisat/motor/fren sistemlerini her gün işe başlamadan kontrol
     ettirir, hareket ettiren makine-teçhizatın kullanıma elverişlilik
     belgelerini bulundurur, iskelenin sabit asılı kalmasını sağlar
     ve azami yük sınırını (merdiven kullanımı yasağı dahil) aştırmaz
     mı?
     **Mevzuat:** Yapı İşlerinde İş Sağlığı ve Güvenliği Yönetmeliği,
     Madde 14/3, Ek-4(B-II)/37-41

615. **Soru:** İşveren, güç tahrikli halatlı asma iskele sistemlerinde
     aşırı yük algılama/hız algılama/sınır anahtarı/çarpışma önleyici/
     eğim algılayıcı gibi güvenlik sistemlerini, çalışan sayısı kadar
     dikey yaşam hattı ve tam vücut kemer sistemini bulundurur, halat
     kayma önleyici tedbir alır, iniş-çıkış yollarını engelsiz tutar
     ve platform taşıyıcı sistemin yükleme koşullarına dayanıklı
     olmasını sağlar mı?
     **Mevzuat:** Yapı İşlerinde İş Sağlığı ve Güvenliği Yönetmeliği,
     Madde 14/3, Ek-4(B-II)/42-46

616. **Soru:** İşveren, standartlara uygun, kaymaz, sağlam el
     merdivenleri kullandırır, hasarlı merdivenleri kullandırmaz,
     düzenli kontrol ettirir ve İş Ekipmanlarının Kullanımında
     Sağlık ve Güvenlik Şartları Yönetmeliği hükümlerine uyar mı?
     **Mevzuat:** Yapı İşlerinde İş Sağlığı ve Güvenliği Yönetmeliği,
     Madde 14/3, Ek-4(B-II)/47-48

617. **Soru:** İşveren, güçle çalışan tesis/makine/ekipmanın
     ergonomik ve sağlam tasarlanmış, iyi çalışır, doğru kurulmuş ve
     sadece eğitimli kişilerce doğru kullanılmasını sağlar; iş
     ekipmanlarının periyodik kontrol/test/deneylerini ilgili
     yönetmeliğe uygun yaptırır, zemin sağlamlığını kontrol eder ve
     görüş alanı kısıtlı ekipmanlarda eğitimli işaretçi görevlendirir
     mi?
     **Mevzuat:** Yapı İşlerinde İş Sağlığı ve Güvenliği Yönetmeliği,
     Madde 14/3, Ek-4(B-II)/49-52

618. **Soru:** İşveren, kazı/malzeme taşıma makine ve araçlarının
     manevra/park/hareket alanlarını belirler, manevraları gözetici
     yönetiminde ve sesli-ışıklı uyarı ile yaptırır, kazı çukuruna/
     suya düşme tedbiri alır, sürücü kısmını devrilme/düşen cisme
     karşı korur ve operatör kabininde sadece operatör (gerekirse
     muavin) bulunmasını sağlar mı?
     **Mevzuat:** Yapı İşlerinde İş Sağlığı ve Güvenliği Yönetmeliği,
     Madde 14/3, Ek-4(B-II)/53-57

619. **Soru:** İşveren, kaldırma araçlarında yüke uygun aparat/
     yöntem kullandırır, ilgili yönetmelik hükümlerine uyar, hareket
     esnasında sesli-ışıklı ikaz sistemi bulundurur ve güvenlik sınır
     noktalarını aşımda otomatik durduran tertibat bulundurur mu?
     **Mevzuat:** Yapı İşlerinde İş Sağlığı ve Güvenliği Yönetmeliği,
     Madde 14/3, Ek-4(B-II)/58-61

620. **Soru:** İşveren, kazıya başlamadan önce bitişik yapılara
     etkiyi araştırır, yeraltı kablo/boru/tesisat yerlerini belirler,
     meskûn mahallerde çevresini perdeyle çevirip ikaz yapar ve
     meskûn mahal dışında uyarı şeridi/levha astırır mı?
     **Mevzuat:** Yapı İşlerinde İş Sağlığı ve Güvenliği Yönetmeliği,
     Madde 14/3, Ek-4(B-II)/62

621. **Soru:** İşveren, kazı/kuyu/yeraltı/tünel/kanal çalışmalarını
     ehil kişi gözetiminde yaptırır, güvenli giriş-çıkış yolu sağlar,
     zemin yapısına uygun şev açısı/destek belirler, malzeme düşmesi/
     su baskını/insan düşmesine karşı tedbir alır, solunabilir hava
     sağlar ve yangın/göçük gibi durumlarda güvenli tahliye imkanı
     sağlar mı?
     **Mevzuat:** Yapı İşlerinde İş Sağlığı ve Güvenliği Yönetmeliği,
     Madde 14/3, Ek-4(B-II)/63

622. **Soru:** İşveren, kazı yüzeylerini her vardiyadan önce,
     patlatmadan sonra, beklenmedik parça düşmesinden sonra, destek
     zararından sonra ve şiddetli yağış/don/kardan sonra kontrol
     ettirir (güvenli onaylanmadan çalışmaya başlatmaz) ve zararlı
     toz/kimyasal/gaz tespitinde çalışanları derhal uzaklaştırır mı?
     **Mevzuat:** Yapı İşlerinde İş Sağlığı ve Güvenliği Yönetmeliği,
     Madde 14/3, Ek-4(B-II)/64-65

623. **Soru:** İşveren, meskûn mahallerde kazı üzerinden geçiş için
     korkuluklu geçit kullandırır, 150 cm'den derin kazılarda/her
     derinlikteki temel-kanal kazısında alttan oyma çalışmasını
     engeller ve hafriyat ile kazı kenarı/hareketli araçlar arasında
     güvenlik mesafesi bırakır mı?
     **Mevzuat:** Yapı İşlerinde İş Sağlığı ve Güvenliği Yönetmeliği,
     Madde 14/3, Ek-4(B-II)/66-68

624. **Soru:** İşveren, yağış sırasında kazı çalışmasını durdurur,
     çalışanların kazı alanına güvenli yöntemlerle erişimini sağlar
     (destek/setleri iniş-çıkış için kullandırmaz) ve makinelerin
     hareket alanına çalışan girişini yasaklar mı?
     **Mevzuat:** Yapı İşlerinde İş Sağlığı ve Güvenliği Yönetmeliği,
     Madde 14/3, Ek-4(B-II)/69-71

625. **Soru:** İşveren, yeraltı çalışmalarında havalandırma
     arızasında tahliye yaptırır, haberleşme sistemi kurar/kaçış
     yollarını işaretler, göçük tedbiri alır, patlayıcı gaz riski olan
     yerlerde açık alev/sigara yasağı koyar ve patlayıcı madde
     kullanımını (depolama, yetkili kişi, özel taşıma) kurallarına
     uygun yaptırır mı?
     **Mevzuat:** Yapı İşlerinde İş Sağlığı ve Güvenliği Yönetmeliği,
     Madde 14/3, Ek-4(B-II)/72-74

626. **Soru:** İşveren, yıkım öncesi havagazı/su/elektrik
     bağlantılarını kestirir, güvenlik alanı bırakır, ilgili standart/
     mevzuata uygun yöntem kullandırır, çalışmaları ehil kişi
     gözetiminde yaptırır ve toz/moloz için güvenli uzaklaştırma
     tedbiri alır mı?
     **Mevzuat:** Yapı İşlerinde İş Sağlığı ve Güvenliği Yönetmeliği,
     Madde 14/3, Ek-4(B-II)/75

627. **Soru:** İşveren, asbest içerebilecek yapıların söküm/yıkım/
     tamir/bakım işlerine başlamadan önce bina/tesis sahibinden bilgi
     alarak araştırma yaptırır mı?
     **Mevzuat:** Yapı İşlerinde İş Sağlığı ve Güvenliği Yönetmeliği,
     Madde 14/3, Ek-4(B-II)/76-a
     **Not:** 76-b bendi (Asbestle Çalışmalarda Sağlık ve Güvenlik
     Önlemleri Yönetmeliği'ne atıf) zaten soru havuzunda, bu soruya
     dahil edilmedi.

628. **Soru:** İşveren, batardo ve kesonların yeterli dayanıklılıkta/
     sağlam malzemeden ve su/sıvı beton baskınında sığınma imkanlı
     yapılmasını, kurulum/değişim/sökümünün ehil kişi gözetiminde
     yapılmasını ve düzenli kontrol edilmesini sağlar mı?
     **Mevzuat:** Yapı İşlerinde İş Sağlığı ve Güvenliği Yönetmeliği,
     Madde 14/3, Ek-4(B-II)/77-78

629. **Soru:** İşveren, çatı/eğik yüzey çalışmalarında kenar koruma
     sistemleri, çatı merdivenleri, güvenlik ağları, korkuluklu
     iskele veya yaşam hatları gibi düşme önleyici tedbirleri ve
     kırılgan yüzeylerde dalgınlıkla düşmeyi önleyecek tedbirleri
     alır mı?
     **Mevzuat:** Yapı İşlerinde İş Sağlığı ve Güvenliği Yönetmeliği,
     Madde 14/3, Ek-4(B-II)/79-80

630. **Soru:** İşveren, beton döküm işlerinde pompanın güvenli
     konumlandırılmasını/sabitlenmesini, enerji hattı risklerinin
     giderilmesini, döküm altında çalışma yapılmamasını ve kalıpların
     döküm süresince kontrol edilmesini sağlar mı?
     **Mevzuat:** Yapı İşlerinde İş Sağlığı ve Güvenliği Yönetmeliği,
     Madde 14/3, Ek-4(B-II)/81

631. **Soru:** İşveren, kalıp işlerini ehil kişi gözetiminde ve
     tecrübeli çalışanlara yaptırır, kalıp panoları/destek/
     payandaların yüke dayanıklı kurulmasını sağlar, her dökümden
     önce kalıp yeterliliğini kontrol ettirir ve kalıp sökümünü
     güvenli/düzenli bir yöntemle (yetkisiz kişi bulundurmadan)
     yaptırır mı?
     **Mevzuat:** Yapı İşlerinde İş Sağlığı ve Güvenliği Yönetmeliği,
     Madde 14/3, Ek-4(B-II)/82-86

632. **Soru:** İşveren, metal/beton karkas, prefabrik ve çelik yapı
     elemanlarının yük/gerilime dayanıklı planlanıp kurulmasını,
     standartlara uygun malzeme kullanılmasını, montaj/sökümün ehil
     kişi gözetiminde yapılmasını, montaj sahasının işaretlenip
     yetkisiz girişin engellenmesini ve yapının geçici
     dayanıksızlığına karşı tedbir alınmasını sağlar mı?
     **Mevzuat:** Yapı İşlerinde İş Sağlığı ve Güvenliği Yönetmeliği,
     Madde 14/3, Ek-4(B-II)/87-91

## Genel Yükümlülükler → Tozla Mücadele (YENİ alt kategori)

633. **Soru:** İşveren, toz oluşan işyerlerinde çalışanların maruziyetini
     önlemek için tehlikeli madde yerine daha az tehlikeli madde
     kullanımını (ikame), uygun iş organizasyonu ve toplu koruma
     yöntemlerini, toz çıkışını önleyecek mühendislik yöntemlerini
     uygular mı?
     **Mevzuat:** Tozla Mücadele Yönetmeliği, Madde 5/1-2-a,b,c

634. **Soru:** İşveren, yeterli temiz hava bulundurur, alınan tedbirler
     yetersizse çalışanlara tozun niteliğine uygun kişisel koruyucu
     donanım verip kullandırır, tedbirlerin etkinliğini kontrol/
     denetim/gözetimle sürdürür ve işyerinde oluşan atıkları ilgili
     mevzuata uygun bertaraf eder mi?
     **Mevzuat:** Tozla Mücadele Yönetmeliği, Madde 5/2-ç,d,e,f

635. **Soru:** İşveren, tozlu işlerde risk değerlendirmesi yaparken
     ortamdaki tozun çeşidini, tehlike/zararlarını, maruziyetin düzey/
     süre/sıklığını, Ek-1'deki mesleki maruziyet sınır değerlerini, toz
     ölçüm sonuçlarını, alınması gereken tedbirleri ve önceki sağlık
     gözetimi sonuçlarını dikkate alır mı?
     **Mevzuat:** Tozla Mücadele Yönetmeliği, Madde 6

636. **Soru:** İşveren, risk değerlendirmesine göre belirlenen periyodik
     aralıklarla toz ölçümü yaptırır, maruziyet koşulları değiştiğinde
     ölçümü tekrarlatır, sonuçları Ek-1'deki sınır değerlere göre
     değerlendirir ve ölçümleri yetkili (ön yeterlik/yeterlik belgeli)
     laboratuvarlara yaptırır mı?
     **Mevzuat:** Tozla Mücadele Yönetmeliği, Madde 8

637. **Soru:** İşveren, toz yoğunluğunun Ek-1'deki sınır değerleri
     aşmamasını sağlar; aştığında kaynağında önleme/bastırma çalışmaları
     yaptırır, ölçümü yeniler ve değerin sınırın altına düştüğü tespit
     edilmeden çalışma izni vermez mi?
     **Mevzuat:** Tozla Mücadele Yönetmeliği, Madde 9

638. **Soru:** İşveren, çalışanların sağlık gözetimini İşe Giriş/
     Periyodik Muayene Formu'na göre yaptırır, risk değerlendirmesi/toz
     ölçüm sonuçları/toz cinsine göre işyeri hekimince belirlenen
     sıklıkta tekrarlatır ve her çalışan için sağlık kaydı tutar mı?
     **Mevzuat:** Tozla Mücadele Yönetmeliği, Madde 10/a-b

639. **Soru:** İşveren, pnömokonyoz yönünden periyodik muayenelerde
     Ek-2'deki tanı şemasının dikkate alınmasını, işyeri hekiminin
     muayene sonucuna göre koruyucu/önleyici tedbir ve tavsiyelerde
     bulunmasını (toza maruz işten men dahil), maruziyet bitiminde
     gereken sağlık takibi süresinin belirlenmesini sağlar ve çalışan/
     işverenin yeniden muayene talep hakkını tanır mı?
     **Mevzuat:** Tozla Mücadele Yönetmeliği, Madde 10/c,ç,d,e

640. **Soru:** İşveren, Kanunun 15. maddesindeki durumlarda ve işyeri
     hekimince belirlenen sıklıkta ILO standardına uygun akciğer
     radyografisi çektirir; asbest/kuvars içeren tozlu işyerlerinde bu
     sıklığın işyeri hekimince risk değerlendirmesi ve sağlık durumuna
     göre belirlenmesini sağlar mı?
     **Mevzuat:** Tozla Mücadele Yönetmeliği, Madde 11/1-2

641. **Soru:** İşveren, asbest/kuvars işyerlerinde radyografilerin ILO
     sınıflandırmasına uygun eğitimli okuyucu tarafından değerlendirilip
     nihai sonucun yazılı bildirilmesini; diğer tozlu işyerlerinde ise
     değerlendirmenin işyeri hekimi tarafından (gerekirse okuyucuya
     yönlendirerek) yapılmasını sağlar mı?
     **Mevzuat:** Tozla Mücadele Yönetmeliği, Madde 11/3,5

642. **Soru:** İşveren, okuyucudan Kategori 0 olarak değerlendirilen
     çalışanları aralıklı muayenelerle takip eder, Kategori 1 ve üzeri
     değerlendirilenleri SGK yetkili sağlık hizmet sunucusuna sevk eder
     mi?
     **Mevzuat:** Tozla Mücadele Yönetmeliği, Madde 12/1

643. **Soru:** İşveren, meslek hastalıkları tanısında yetkili sağlık
     kuruluşunun pnömokonyoz tanılı çalışan için raporunda belirttiği
     çalışma koşullarını sağlar mı?
     **Mevzuat:** Tozla Mücadele Yönetmeliği, Madde 13

644. **Soru:** İşveren, çalışanların yaptığı iş/çalışma süresi/toz ölçüm
     sonuçları/kişisel sağlık dosyası kayıtlarını işten ayrılma
     tarihinden itibaren 15 yıl saklar, çalışan başka işyerine
     geçtiğinde dosyayı onaylı örnekle yeni işverene gönderir ve
     çalışanın kendi kayıtlarına erişim hakkını tanır mı?
     **Mevzuat:** Tozla Mücadele Yönetmeliği, Madde 14

## Genel Yükümlülükler → Eğitim

645. **Soru:** İşveren, çalışanlara ve temsilcilerine risk değerlendirmesi
     sonuçları, işyerinde bulunan toz çeşidi/sağlık riskleri/meslek
     hastalıkları/maruziyet sınır değerleri, korunma yöntemleri ve
     KKD'nin doğru kullanım/bakımı konularında eğitim ve bilgilendirme
     sağlar mı?
     **Mevzuat:** Tozla Mücadele Yönetmeliği, Madde 15

## Genel Yükümlülükler → İSG Profesyonelleri / Hizmetleri

646. **Soru:** İşveren veya eğitimi tamamlayan işveren vekili, elliden az
     çalışanı olan ve az tehlikeli sınıfta yer alan işyerinde iş sağlığı ve
     güvenliği hizmetlerini (işe giriş/periyodik muayene ve tetkikler
     hariç) üstlenirken çalışan başına ayda en az 10 dakika süre ayırıyor
     mu?
     **Mevzuat:** İşyerlerinde İşveren veya İşveren Vekili Tarafından
     Yürütülecek İş Sağlığı ve Güvenliği Hizmetlerine İlişkin Yönetmelik,
     Madde 5/1
     **Not:** İş Güvenliği Uzmanlarının Görev, Yetki, Sorumluluk ve
     Eğitimleri Hakkında Yönetmelik Madde 12'deki aynı süre kuralıyla
     örtüşüyor (soru 117) — orada hizmet dışarıdan uzmana aldırılıyor,
     burada işveren/vekil kendisi yürütüyor; farklı yönetmelik/madde.

647. **Soru:** İşveren veya işveren vekili, işyerinde iş sağlığı ve
     güvenliği hizmetlerini yürütmeye başlamadan önce İSG-KATİP üzerinden
     sisteme kaydoluyor mu (hizmetler kayıt onaylandığı tarihten itibaren
     geçerli sayılıyor)?
     **Mevzuat:** İşyerlerinde İşveren veya İşveren Vekili Tarafından
     Yürütülecek İş Sağlığı ve Güvenliği Hizmetlerine İlişkin Yönetmelik,
     Madde 5/3

648. **Soru:** İşveren, Kanun kapsamında alınması gereken sağlık
     raporlarını işyeri hekiminden; 50'den az çalışanı olan az tehlikeli
     işyerlerinde ise ayrıca çalışan sağlığı merkezinden (ÇASMER), aile
     hekimlerinden veya diğer kamu sağlık hizmeti sunucularından alıyor
     mu?
     **Mevzuat:** İşyerlerinde İşveren veya İşveren Vekili Tarafından
     Yürütülecek İş Sağlığı ve Güvenliği Hizmetlerine İlişkin Yönetmelik,
     Madde 7/2

649. **Soru:** İşveren, Kanun ve alt düzenlemeleri uyarınca işyerinde
     yapılması gereken ölçümleri Bakanlıkça yetkilendirilen laboratuvarlara
     yaptırıyor mu?
     **Mevzuat:** İşyerlerinde İşveren veya İşveren Vekili Tarafından
     Yürütülecek İş Sağlığı ve Güvenliği Hizmetlerine İlişkin Yönetmelik,
     Madde 8

650. **Soru:** İşyerinin tehlike sınıfı değiştiğinde veya çalışan sayısı
     elli ve üzerine çıktığında (ya da işveren/vekil hizmeti üstlenmek
     istemezse), işveren otuz gün içinde İş Sağlığı ve Güvenliği
     Hizmetleri Yönetmeliği hükümlerine göre işyeri hekimi/iş güvenliği
     uzmanı görevlendirmesi yapıyor mu?
     **Mevzuat:** İşyerlerinde İşveren veya İşveren Vekili Tarafından
     Yürütülecek İş Sağlığı ve Güvenliği Hizmetlerine İlişkin Yönetmelik,
     Madde 16

651. **Soru:** Asıl işveren-alt işveren ilişkisi kurulan işyerlerinde, iş
     sağlığı ve güvenliği hizmetlerini kendileri yürütmek isteyen her bir
     işveren veya işveren vekili bu Yönetmelik kapsamında ayrı ayrı eğitim
     alıyor mu?
     **Mevzuat:** İşyerlerinde İşveren veya İşveren Vekili Tarafından
     Yürütülecek İş Sağlığı ve Güvenliği Hizmetlerine İlişkin Yönetmelik,
     Madde 19

## Genel Yükümlülükler → İlkyardım (YENİ alt kategori)

652. **Soru:** İşveren, işyerinde iş sağlığı ve güvenliği kapsamında
     işyerinin tehlike sınıfına göre belirlenen sayıda ilkyardımcı
     bulunduruyor mu (az tehlikeli işyerlerinde her 20 çalışan için 1,
     tehlikeli işyerlerinde her 15 çalışana kadar 1, çok tehlikeli
     işyerlerinde her 10 çalışana kadar 1 ilkyardımcı)?
     **Mevzuat:** İlkyardım Yönetmeliği, Madde 19/1
     **Not:** "İşyerlerinde Acil Durumlar Hakkında Yönetmelik"e dayanan
     genel "ilkyardım eğitimli çalışan hazır bulundurma" yükümlülüğüyle
     ilişkili (soru 589), ama buradaki sayısal oranlar doğrudan bu
     Yönetmelikte düzenleniyor — daha spesifik ve ayrı bir hüküm.

## Genel Yükümlülükler → Geçici veya Belirli Süreli Çalışanlar

653. **Soru:** Geçici işçi çalıştıran işveren (kullanıcı işveren), 6331
     sayılı İş Sağlığı ve Güvenliği Kanunu'nun 17. maddesinin altıncı
     fıkrasında öngörülen eğitimleri geçici işçiye veriyor ve iş sağlığı
     ve güvenliği açısından gereken tedbirleri alıyor mu?
     **Mevzuat:** Özel İstihdam Büroları Yönetmeliği, Madde 9/1-e
     **Not:** "Geçici veya Belirli Süreli İşlerde İş Sağlığı ve Güvenliği
     Hakkında Yönetmelik" Madde 9-11 ile örtüşüyor (soru 452-455) —
     burada aynı yükümlülük, özel istihdam bürosu aracılığıyla kurulan
     üçlü ilişki bağlamında ayrıca düzenleniyor.

654. **Soru:** Geçici işçi çalıştıran işveren, geçici işçinin iş kazası
     ve meslek hastalığı hâllerini özel istihdam bürosuna derhal, 5510
     sayılı Kanunun 13 ve 14. maddelerine göre de ilgili mercilere
     bildiriyor mu?
     **Mevzuat:** Özel İstihdam Büroları Yönetmeliği, Madde 9/1-c

## Genel Yükümlülükler → Eğitim

655. **Soru:** İşveren, çalışanlara, kullandıkları veya çalışmaları
     sırasında maruz kalabilecekleri maddeler ya da karışımlarla ilgili
     olarak güvenlik bilgi formu (SDS) kapsamında tedarikçiden temin
     edilen bilgileri sağlıyor mu?
     **Mevzuat:** Kimyasalların Kaydı, Değerlendirilmesi, İzni ve
     Kısıtlanması Hakkında Yönetmelik, Madde 31
     **Not:** "Kimyasal Maddelerle Çalışmalarda Sağlık ve Güvenlik
     Önlemleri Hakkında Yönetmelik" Madde 9 ile örtüşüyor (soru 383 —
     eğitim/bilgilendirme, güvenlik bilgi formları dahil). Buradaki
     yükümlülük KKDİK'in kendi madde numarasıyla, tedarik zincirinden
     gelen bilginin iletilmesi odaklı; ayrı hüküm.

## Genel Yükümlülükler → İşyeri Bina ve Eklentileri

656. **Soru:** Bina sorumlusu (işveren), işyerinde sürekli kullanılan
     asansörün güvenli şekilde kullanılmasını sağlamak üzere yılda en az
     bir defa periyodik kontrolünü Bakanlık tarafından yetkilendirilmiş
     A tipi muayene kuruluşuna yaptırıyor mu; güvensiz (kırmızı etiketli)
     bulunan asansörü, altmış gün içinde güvenli hale getirilene kadar
     kullandırmıyor mu?
     **Mevzuat:** Asansör Periyodik Kontrol Yönetmeliği, Madde 8/1,4,
     Madde 26, Madde 34

670. **Soru:** Bina sorumlusu (işveren), işyerindeki asansörün bakımı
     için asansör monte eden veya yetkili servis ile bakım sözleşmesi
     imzalıyor, bakımını düzenli olarak yaptırıyor ve bakım ücretini
     ödüyor mu?
     **Mevzuat:** Asansör İşletme ve Bakım Yönetmeliği, Madde 8/1,
     Madde 14/1
     **Not:** Asansör Periyodik Kontrol Yönetmeliği Madde 8/1,4 ile
     (soru 656) örtüşüyor — orada yıllık periyodik kontrol, burada
     düzenli (en az ayda bir) bakım sözleşmesi zorunluluğu; ayrı ve
     tamamlayıcı yükümlülük.

671. **Soru:** Bina sorumlusu, bakım sözleşmesi yapılan asansör monte
     eden veya yetkili servis aracılığıyla, binadaki asansör sayısına
     göre belirleyeceği sayıda kişiye acil durumlarda kurtarma
     çalışması konusunda yılda en az bir defa eğitim verilmesini
     sağlıyor ve eğitim alan kişilerin değişmesi halinde yeni
     kişilere eğitim verilmesini sağlıyor mu?
     **Mevzuat:** Asansör İşletme ve Bakım Yönetmeliği, Madde 10/6

672. **Soru:** Bina sorumlusu, bakım sözleşmesi imzaladığı asansör
     monte eden veya yetkili servis ile birlikte, asansörde yürütülen
     bakım, onarım, arıza giderme ve periyodik kontrol faaliyetleri
     sırasında 6331 sayılı İş Sağlığı ve Güvenliği Kanunu ve ilgili
     mevzuat doğrultusunda gerekli iş sağlığı ve güvenliği
     tedbirlerinin alınmasını sağlıyor mu?
     **Mevzuat:** Asansör İşletme ve Bakım Yönetmeliği, Madde 10/9
     **Not:** Genel risk değerlendirmesi/tedbir alma yükümlülüğüyle
     (6331 kapsamı) örtüşüyor — burada asansör bakım/onarım
     faaliyetine özgü, üçüncü taraf (asansör monte eden/yetkili
     servis) ile birlikte sorumluluk; ayrı hüküm.

673. **Soru:** Bina sorumlusu, bakım sözleşmesi yaptığı asansör monte
     eden veya yetkili servis dışındaki üçüncü tarafların asansöre
     müdahale etmesine izin vermiyor mu?
     **Mevzuat:** Asansör İşletme ve Bakım Yönetmeliği, Madde 10/13

674. **Soru:** Bina sorumlusu, asansörle ilgili herhangi bir tehlikeli
     durumu bakım sözleşmesi imzaladığı asansör monte eden veya
     yetkili servise bildiriyor ve söz konusu asansöre müdahale
     edilene kadar gerekli güvenlik tedbirini alıyor mu?
     **Mevzuat:** Asansör İşletme ve Bakım Yönetmeliği, Madde 14/3

675. **Soru:** Bina sorumlusu, mevcut (15/8/2004 tarihinden önce
     monte edilmiş) asansörün güvenlik seviyesini, güncel TS EN 81-80
     standardında belirtilen tehlikeli durumlara karşı, Asansör
     Yönetmeliği (2014/33/AB) kapsamında monte edilen asansörlerin
     güvenlik seviyesine yakın bir seviyeye getirilecek şekilde
     arttırıyor mu?
     **Mevzuat:** Asansör İşletme ve Bakım Yönetmeliği, Madde 16/1,
     Madde 16/4
     **Not:** Asansör Periyodik Kontrol Yönetmeliği'nde (soru 656) yer
     alan periyodik kontrol/etiketleme yükümlülüğünden ayrı — burada
     mevcut asansörlerin güvenlik seviyesinin standarda uygun olarak
     fiilen yükseltilmesi (iyileştirme) zorunluluğu söz konusu.

## Genel Yükümlülükler → Büyük Endüstriyel Kazalar (YENİ alt kategori)

657. **Soru:** İşletmeci, kuruluşunda büyük endüstriyel kazaların
     önlenmesi ve etkilerinin azaltılması için bir güvenlik yönetim
     sistemi kurarak işletiyor ve bu Yönetmeliğin Ek-3'ünde belirtilen
     asgari unsurları uyguluyor mu?
     **Mevzuat:** Büyük Endüstriyel Kazaların Önlenmesi ve Etkilerinin
     Azaltılması Hakkında Yönetmelik, Madde 6/1

658. **Soru:** İşletmeci, kuruluşuna ilişkin bu Yönetmeliğin Ek-7'sinde
     belirtilen formatta bir bilgi kartı hazırlayarak ilgili valiliğe/
     büyükşehir belediyesine gönderiyor ve kuruluşta değişiklik
     olduğunda bu bilgi kartını güncelliyor mu?
     **Mevzuat:** Büyük Endüstriyel Kazaların Önlenmesi ve Etkilerinin
     Azaltılması Hakkında Yönetmelik, Madde 6/2,3

659. **Soru:** İşletmeci, kuruluşunun alt veya üst seviyeli kuruluş
     olarak hangi seviyede bulunduğuna ilişkin bildirimi ilgili
     mercilere yapıyor ve bildirim kapsamındaki bilgileri değiştiren
     bir husus ortaya çıktığında bunu 30 gün içinde güncelliyor mu?
     **Mevzuat:** Büyük Endüstriyel Kazaların Önlenmesi ve Etkilerinin
     Azaltılması Hakkında Yönetmelik, Madde 7

660. **Soru:** İşletmeci, kuruluşunda meydana gelebilecek büyük kaza
     senaryolarını ortaya koyan büyük kaza senaryo dokümanını
     hazırlayarak muhafaza ediyor mu?
     **Mevzuat:** Büyük Endüstriyel Kazaların Önlenmesi ve Etkilerinin
     Azaltılması Hakkında Yönetmelik, Madde 8
     **Not:** Genel risk değerlendirmesi yükümlülüğüyle (6331 sayılı
     Kanun, Madde 10) kavramsal olarak örtüşüyor — burada kantitatif
     ve büyük kazaya özgü senaryo analizi söz konusu, genel risk
     değerlendirmesinden ayrı ve ek bir belge.

661. **Soru:** İşletmeci, büyük kaza senaryo dokümanında domino etkisi
     gösteren kuruluşlar dahil olmak üzere büyük kaza frekansını
     1x10⁻⁴/yıl değerinin altına indirecek tedbirleri alıyor mu?
     **Mevzuat:** Büyük Endüstriyel Kazaların Önlenmesi ve Etkilerinin
     Azaltılması Hakkında Yönetmelik, Madde 9

662. **Soru:** Alt seviyeli kuruluşun işletmecisi, büyük kaza önleme
     politika belgesini hazırlayıp muhafaza ediyor mu?
     **Mevzuat:** Büyük Endüstriyel Kazaların Önlenmesi ve Etkilerinin
     Azaltılması Hakkında Yönetmelik, Madde 10

663. **Soru:** Üst seviyeli kuruluşun işletmecisi, güvenlik raporunu
     hazırlayarak Bakanlığa sunuyor mu?
     **Mevzuat:** Büyük Endüstriyel Kazaların Önlenmesi ve Etkilerinin
     Azaltılması Hakkında Yönetmelik, Madde 11

664. **Soru:** İşletmeci, büyük kaza önleme politika belgesini veya
     güvenlik raporunu kuruluşta önemli bir değişiklik olması,
     kuruluşun kapatılması veya Yönetmelikte belirtilen diğer hâllerde
     gözden geçirip güncelliyor mu?
     **Mevzuat:** Büyük Endüstriyel Kazaların Önlenmesi ve Etkilerinin
     Azaltılması Hakkında Yönetmelik, Madde 12

665. **Soru:** Üst seviyeli kuruluşun işletmecisi, büyük kaza durumunda
     uygulanacak dâhili acil durum planını hazırlıyor mu?
     **Mevzuat:** Büyük Endüstriyel Kazaların Önlenmesi ve Etkilerinin
     Azaltılması Hakkında Yönetmelik, Madde 13
     **Not:** Genel acil durum planı yükümlülüğüyle (6331 sayılı Kanun,
     Madde 11) örtüşüyor — burada büyük kaza senaryolarına özgü, ayrı
     bir plan söz konusu.

666. **Soru:** İşletmeci, dâhili acil durum planını en az 3 yılda bir
     gözden geçirip güncelliyor ve planın etkinliğini test etmek üzere
     tatbikat yapıyor mu?
     **Mevzuat:** Büyük Endüstriyel Kazaların Önlenmesi ve Etkilerinin
     Azaltılması Hakkında Yönetmelik, Madde 14
     **Not:** Genel tatbikat yükümlülüğüyle örtüşüyor — burada 3 yıllık
     periyot ve büyük kaza senaryosuna özgü test, ayrı bir hüküm.

667. **Soru:** İşletmeci, büyük kaza meydana gelmesi veya meydana
     gelme ihtimalinin ortaya çıkması halinde dâhili acil durum
     planını uyguluyor ve ilgili mercilere gerekli bilgiyi derhal
     veriyor mu?
     **Mevzuat:** Büyük Endüstriyel Kazaların Önlenmesi ve Etkilerinin
     Azaltılması Hakkında Yönetmelik, Madde 15

668. **Soru:** Üst seviyeli kuruluşun işletmecisi, kuruluşun
     faaliyetleri ve olası büyük kaza tehlikeleri hakkında kamuyu
     internet sitesi üzerinden bilgilendiriyor mu?
     **Mevzuat:** Büyük Endüstriyel Kazaların Önlenmesi ve Etkilerinin
     Azaltılması Hakkında Yönetmelik, Madde 16

669. **Soru:** İşletmeci, kuruluşunda büyük kaza meydana gelmesi
     halinde ilgili mercilere derhal bildirim yapıyor ve kazadan
     sonraki 60 gün içinde kazaya ilişkin raporu ilgili mercilere
     sunuyor mu?
     **Mevzuat:** Büyük Endüstriyel Kazaların Önlenmesi ve Etkilerinin
     Azaltılması Hakkında Yönetmelik, Madde 17

## Genel Yükümlülükler → Uzaktan Çalışma (YENİ alt kategori)

676. **Soru:** İşveren, uzaktan çalışanın yaptığı işin niteliğini
     dikkate alarak iş sağlığı ve güvenliği önlemleri hususunda
     çalışanı bilgilendiriyor, gerekli eğitimi veriyor, sağlık
     gözetimini sağlıyor ve sağladığı ekipmanla ilgili gerekli iş
     güvenliği tedbirlerini alıyor mu?
     **Mevzuat:** Uzaktan Çalışma Yönetmeliği, Madde 12
     **Not:** Genel bilgilendirme/eğitim/sağlık gözetimi
     yükümlülükleriyle (6331 sayılı Kanun kapsamı) örtüşüyor — burada
     uzaktan çalışma bağlamına özgü, ayrı hüküm.

677. **Soru:** İşveren, tehlikeli kimyasal madde ve radyoaktif
     maddelerle çalışma, bu maddelerin işlenmesi veya atıkları ile
     çalışma ya da biyolojik etkenlere maruz kalma riski bulunan
     işlerde çalışanın uzaktan çalışma usulüyle çalıştırılmamasını
     sağlıyor mu?
     **Mevzuat:** Uzaktan Çalışma Yönetmeliği, Madde 13/1

## Genel Yükümlülükler → Yıkım İşleri (YENİ alt kategori)

678. **Soru:** Müteahhit, yıkım faaliyetlerine başlamadan önce; yıkım
     şantiyesini güvenlik ve çevre koruma tedbirleri alarak kurup en
     az 2,5 metre yükseklikte paravanla çevreliyor, Sağlık ve Güvenlik
     İşaretleri Yönetmeliği'ne uygun işaretlemeler yapıyor, risk
     değerlendirmesi sonuçlarına göre yangın güvenlik tedbirleri,
     yangınla mücadele donanımı, acil tıbbi yardım donanımı ve
     çalışanlar için güvenilir bir haberleşme sistemi bulunduruyor
     mu?
     **Mevzuat:** Binaların Yıkılması Hakkında Yönetmelik, Madde
     8/1,2,3
     **Not:** Genel "Sağlık ve Güvenlik İşaretleri Yönetmeliği" ve
     "İş Sağlığı ve Güvenliği Risk Değerlendirmesi Yönetmeliği"
     kapsamındaki yükümlülüklerle örtüşüyor — burada yıkım şantiyesine
     özgü somut uygulama detayları söz konusu.

679. **Soru:** Müteahhit, yıkım faaliyetine başlamadan önce, yıkım
     esnasında ve yıkım sonrasında, yıkımda çalışanlar ve üçüncü
     şahıslar için ilgili mevzuatında öngörülen güvenlik tedbirleri
     ile çevre koruma tedbirlerini alıyor mu?
     **Mevzuat:** Binaların Yıkılması Hakkında Yönetmelik, Madde 9/1

680. **Soru:** Müteahhit, yıkım makina ve ekipmanlarının yalnızca
     mesleki yeterlilik belgesine haiz operatörler tarafından
     kullanılmasını sağlıyor mu?
     **Mevzuat:** Binaların Yıkılması Hakkında Yönetmelik, Madde 12/1

681. **Soru:** Müteahhit, yıkım faaliyetinin her safhasında 6331
     sayılı İş Sağlığı ve Güvenliği Kanunu ve Yapı İşlerinde İş
     Sağlığı ve Güvenliği Yönetmeliği hükümlerine uyulmasını ve yıkım
     faaliyetinde görev alanların kişisel koruyucu donanım
     kullanmasını sağlıyor mu?
     **Mevzuat:** Binaların Yıkılması Hakkında Yönetmelik, Madde 13
     **Not:** Yapı İşlerinde İş Sağlığı ve Güvenliği Yönetmeliği
     (soru 555 vd.) ve işyerlerinde KKD kullanılması yönetmeliği ile
     örtüşüyor — burada yıkım faaliyetine özgü ayrı ve açık bir atıf
     hükmü.

682. **Soru:** Müteahhit, yıkıma başlanmadan önce asbestli imalatın
     var olup olmadığını, varsa asbestin türü, miktarı ve yerini
     belirlemeye yönelik envanter çalışması yaptırıyor mu?
     **Mevzuat:** Binaların Yıkılması Hakkında Yönetmelik, Madde 16/1
     **Not:** "Asbestle Çalışmalarda Sağlık ve Güvenlik Önlemleri
     Hakkında Yönetmelik" ile (zaten soru havuzunda) örtüşüyor —
     burada yıkıma özgü, yıkıma başlamadan önceki envanter/tespit
     zorunluluğu; ayrı ve ek bir hüküm.

683. **Soru:** Müteahhit, yıkım faaliyetleri sırasında oluşacak toz
     emisyonunun kontrolü amacıyla TS 13883 standardına uygun toz
     bastırma sistemleri kullanılmasını sağlıyor mu?
     **Mevzuat:** Binaların Yıkılması Hakkında Yönetmelik, Madde 18/3
     **Not:** Tozla Mücadele Yönetmeliği (soru 633 vd.) ile kavramsal
     olarak örtüşüyor — burada yıkım faaliyetine özgü toz emisyonu
     kontrolü; ayrı hüküm.

## Genel Yükümlülükler → Korumalı İşyerleri (YENİ alt kategori)

684. **Soru:** Korumalı işyeri veya korumalı iş merkezi işvereni,
     binanın bulunduğu yerin engelli bireylerin geliş ve gidişlerinde
     trafik yönünden uygun ve emniyetli olmasını sağlıyor mu?
     **Mevzuat:** Korumalı İşyerleri Hakkında Yönetmelik, Madde 10

685. **Soru:** İşveren, korumalı işyerinde veya korumalı iş
     merkezinde yeterli sayıda yangın söndürme cihazı ve malzemesi,
     sesli ve ışıklı alarm sistemi, engelli bireylerin kullanımına
     uygun yangın tahliye sistemi bulunduruyor; elektrikli aletler,
     kesici-delici aletler ve yanıcı/yakıcı maddelerin engelli
     bireyler için tehlike oluşturmasını önleyecek tedbirleri alıyor
     mu?
     **Mevzuat:** Korumalı İşyerleri Hakkında Yönetmelik, Madde 11/1,2
     **Not:** Genel yangından korunma/elektrik tesisatı
     yükümlülükleriyle ("İşyeri Bina ve Eklentileri" kategorisi)
     örtüşüyor — burada engelli çalışanlara özgü ek tedbirler ve
     erişilebilir tahliye sistemi söz konusu.

686. **Soru:** İşveren, korumalı işyerinin veya korumalı iş
     merkezinin fiziksel koşullarını (asansör/yangın merdiveni,
     aydınlatma, kaymayan taban malzemesi, erişilebilir merdiven/
     kapı, ses yalıtımlı atölye bölmeleri, erişilebilir tuvalet/duş
     ve diğer zorunlu bölümler) bu Yönetmelikte belirtilen
     erişilebilirlik standartlarına uygun şekilde düzenliyor mu?
     **Mevzuat:** Korumalı İşyerleri Hakkında Yönetmelik, Madde 12/1

## Genel Yükümlülükler → Maden İşyerleri

687. **Soru:** Ruhsat sahibi (işveren), kaynak tuzlaları hariç, maden
     ruhsat sahalarındaki işletme faaliyetlerini maden mühendisi
     nezaretinde yürütüyor mu; daimî nezaretçisi olmayan sahalarda
     maden işletme faaliyeti yapmıyor mu?
     **Mevzuat:** Maden Yönetmeliği, Madde 124/1
     **Not:** Maden İşyerlerinde İş Sağlığı ve Güvenliği Yönetmeliği
     (soru 463 vd.) ile kavramsal olarak örtüşüyor — burada 3213
     sayılı Maden Kanunu çerçevesinde zorunlu mühendis nezareti/
     denetim mekanizması; ayrı ve ek bir hüküm.

688. **Soru:** Ruhsat sahibi, daimî nezaretçi tarafından işletme
     güvenliğini tehlikeye atan hususlar bildirildiğinde, bu
     tehlikeli durumları gidermeye yönelik faaliyetler dışındaki
     maden işletme faaliyetlerini derhal durduruyor mu?
     **Mevzuat:** Maden Yönetmeliği, Madde 126/1-ç

689. **Soru:** Ruhsat sahibi, vardiyalı çalışılan işletmelerde,
     vardiyadaki çalışan sayısı seksenin altında ise her vardiyada en
     az bir maden mühendisi, seksen ve üzeri ise her seksen çalışana
     biri maden mühendisi olmak üzere en az iki teknik eleman
     istihdam ediyor mu?
     **Mevzuat:** Maden Yönetmeliği, Madde 131/1-a

690. **Soru:** Ruhsat sahibi, rödövansçı, faaliyeti gerçekleştiren
     veya daimî nezaretçi, ruhsat sahalarında meydana gelen her türlü
     maden kazasını Genel Müdürlüğe derhal bildiriyor mu?
     **Mevzuat:** Maden Yönetmeliği, Madde 32/16
     **Not:** 5510 sayılı Kanun kapsamındaki iş kazası bildirimi
     (SGK'ya) ile örtüşüyor — burada madencilik otoritesine (Genel
     Müdürlük) özgü ayrı bir bildirim yükümlülüğü.

691. **Soru:** İşveren, Zorunlu Ferdi Kaza Sigortası kapsamındaki
     ruhsat sahalarındaki ocaklarda yürütülen madencilik
     faaliyetlerinde çalışanlar için Zorunlu Ferdi Kaza Sigorta
     Poliçesi yaptırıyor mu?
     **Mevzuat:** Maden Yönetmeliği, Madde 32/18

## Genel Yükümlülükler → İş Hijyeni Ölçüm, Test ve Analizleri (YENİ alt kategori)

692. **Soru:** İşveren, güvenli bir çalışma ortamı sağlamak amacıyla
     risk değerlendirmesinde yer alan fiziksel, kimyasal ve biyolojik
     tehlike kaynaklarının varlığını, niteliğini ve niceliğini ortam
     ve kişisel maruziyet ölçüm, test ve analiziyle tespit ediyor mu?
     **Mevzuat:** İş Hijyeni Ölçüm, Test ve Analizleri Hakkında
     Yönetmelik, Madde 5/1
     **Not:** 6331 sayılı Kanun'daki genel risk değerlendirmesi
     yükümlülüğüyle örtüşüyor — burada ölçüm/test/analiz yöntemiyle
     somut tespit zorunluluğu.

693. **Soru:** İşveren, iş hijyeni ölçüm, test ve analizlerini;
     alınan kontrol tedbirlerinin etkinliğini değerlendirmek için,
     çalışanın maruziyetinde değişiklik meydana geldiğinde, iş
     müfettişlerinin istemesi halinde veya işyeri hekimi/iş güvenliği
     uzmanının gerekli görmesi halinde tekrarlıyor mu?
     **Mevzuat:** İş Hijyeni Ölçüm, Test ve Analizleri Hakkında
     Yönetmelik, Madde 5/2-a,b,c,ç

694. **Soru:** İşveren, iş hijyeni ölçüm, test ve analizlerini
     yeterlik veya ön yeterlik belgesine sahip laboratuvarlara
     yaptırıyor mu?
     **Mevzuat:** İş Hijyeni Ölçüm, Test ve Analizleri Hakkında
     Yönetmelik, Madde 5/3

695. **Soru:** İşveren, laboratuvar personeline ön inceleme ve
     ölçümler süresince eşlik etmesi için iş güvenliği uzmanı ve/veya
     işyeri hekimini ya da bunların yokluğunda işin yürütülmesi
     hakkında bilgi sahibi olan çalışanları görevlendiriyor mu?
     **Mevzuat:** İş Hijyeni Ölçüm, Test ve Analizleri Hakkında
     Yönetmelik, Madde 5/4

696. **Soru:** İşveren, doğru sonuçlar alınması için laboratuvar
     personeline işyerinde kullanılan teknolojiler hakkında bilgi
     veriyor, çalışan temsilcisi ve çalışanlarla görüşmesini
     sağlıyor, laboratuvarın hazırladığı plana göre ölçüm
     yapılmasını sağlıyor, normal çalışma şartları ve üretim
     kapasitesinde değişiklik yapmadan çalışmanın sürdürülmesini
     sağlıyor ve ölçülecek etmenler hakkında güvenlik bilgi formları
     dahil her türlü bilgi/belgeyi laboratuvar personeline veriyor
     mu?
     **Mevzuat:** İş Hijyeni Ölçüm, Test ve Analizleri Hakkında
     Yönetmelik, Madde 5/5-a,b,c,ç

697. **Soru:** İşveren, işyerinde iş hijyeni ölçüm, test ve analiz
     kayıtlarını ilgili mevzuatla belirlenen sürelere (belirlenmemişse
     en az 10 yıl) uygun olarak saklıyor mu?
     **Mevzuat:** İş Hijyeni Ölçüm, Test ve Analizleri Hakkında
     Yönetmelik, Madde 5/6

698. **Soru:** İşveren, iş hijyeni ölçüm, test ve analiz
     raporlarındaki sonuçların mevzuata veya ilgili sınır değerlere
     uygunluğunu değerlendirip, çalışanların fizyolojik durumlarını
     da dikkate alarak maruziyetin azaltılması için ek tedbir gerekip
     gerekmediğine, varsa İSG kurulunun yoksa işyeri hekimi ve iş
     güvenliği uzmanının yazılı görüşünü alarak karar veriyor mu?
     **Mevzuat:** İş Hijyeni Ölçüm, Test ve Analizleri Hakkında
     Yönetmelik, Madde 6/1

699. **Soru:** İşveren, ölçüm yapılan işyerinde, ölçüm sonuçlarını
     etkileyecek şekilde yapılan işi durdurma, yavaşlatma veya
     hızlandırma gibi yöntemlerle manipülasyon yapmıyor mu?
     **Mevzuat:** İş Hijyeni Ölçüm, Test ve Analizleri Hakkında
     Yönetmelik, Madde 16/9

## İncelenip EKLENMEMESİNE karar verilen mevzuatlar

- Elektrik ile İlgili Fen Adamlarının Yetki, Görev ve Sorumlulukları
  Hakkında Yönetmelik — tamamı atlandı. 3194 sayılı İmar Kanunu'na
  dayanan bir mesleki yetkilendirme/lisanslandırma yönetmeliği:
  elektrik tesisatçılarının ("fen adamı") öğrenim seviyesine göre
  gruplandırılması, her grubun proje hazırlama/yapım/işletme
  yetkisinin güç (kW) ve gerilim (Volt) sınırları, meslek odası
  kaydı, ilgili idareye karşı sorumluluk ve ceza hükümleri. Muhatap
  fen adamının kendisi, ilgili idareye (belediye/il özel idaresi)
  karşı mesleki sorumluluğu; işveren-çalışan İSG ilişkisi hiç
  geçmiyor — Yapı Müteahhitlerinin Sınıflandırılması Yönetmeliği ve
  benzeri mesleki lisanslandırma skip kategorisiyle aynı.
- Yataklı Tedavi Kurumları Enfeksiyon Kontrol Yönetmeliği — tamamı
  atlandı. Hastanelerde "enfeksiyon kontrol komitesi"nin teşkili,
  görev/yetkileri ve çalışma usulünü düzenleyen bir sağlık kurumu
  idari yönetmeliği (3359 sayılı Sağlık Hizmetleri Temel Kanunu).
  Muhatap "yönetim" (hastane idaresi), amaç "sağlık hizmeti ile
  ilişkili enfeksiyonları önlemek" — hasta güvenliği/halk sağlığı
  maksatlı, 6331 sayılı Kanun kapsamında işverenin çalışana yönelik
  İSG yükümlülüğü değil. Metin boyunca hiç "işveren" kelimesi
  geçmiyor — Lejyoner Hastalığı ve Kanser Bildirimi/Kayıt Merkezleri
  yönetmelikleriyle aynı kamu sağlığı/sağlık tesisi idari yönetmeliği
  kategorisi.
- Sığınak Yönetmeliği — tamamı atlandı. 3194 sayılı İmar Kanunu'na
  dayanan, nükleer/konvansiyonel silah, biyolojik-kimyevi harp
  maddeleri ve tabii afetlere karşı bina sığınaklarının inşası/
  kullanımı/muhafazasına ilişkin bir imar/sivil savunma yönetmeliği.
  Metin boyunca "işveren" hiç geçmiyor; tek "çalışan" eşleşmesi bir
  havalandırma mekanizmasının tanımında ("insan gücü ile çalışan
  çevirmeli kol"), çalışan anlamında değil. İçerik bina inşa standardı
  (bodrum kat düzenlemesi, havalandırma tertibatı vb.), işveren-
  çalışan İSG ilişkisi değil.
- Demiryolu Emniyet Yönetmeliği — tamamı atlandı. Demiryolu altyapı/
  tren/şehir içi raylı toplu taşıma işletmecilerine yönelik
  taşımacılık/işletme emniyeti yönetmeliği: emniyet sertifikası/
  yetkilendirmesi, kaza/olay bildirimi, emniyet yönetim sistemi.
  Amaç maddesi "demiryolu taşımacılığında emniyet" diyor — tren
  işletme güvenliği (çarpışma, raydan çıkma, yolcu güvenliği)
  anlamında bir emniyet, çalışanın işyerindeki İSG'si değil.
  Makinistlere ilişkin eğitim/yeterlilik maddeleri de mesleki
  yeterlilik/ehliyet niteliğinde. Metin boyunca hiç "işveren",
  "6331" veya "iş sağlığı ve güvenliği" kelimesi geçmiyor — BEKRA'dan
  farklı olarak (orada "işletmeci" açıkça 6331'in işveren tanımına
  bağlanmıştı), burada böyle bir bağ yok.
- İş Hijyeni Ölçüm, Test ve Analizleri Hakkında Yönetmeliğin
  aşağıdaki maddeleri (TAMAMLANDI — bkz. soru 692-699): Madde 1-4
  (amaç/kapsam/dayanak/tanımlar), Madde 7-13 (laboratuvarın kendi
  yeterlik/akreditasyon/personel eğitim-sertifikasyon
  yükümlülükleri), Madde 14-15, 17 (laboratuvarın ön inceleme/metot
  seçimi/numune kabul süreçleri — laboratuvarın kendi teknik işlemi),
  Madde 16/1-8 (numune alma/ölçüm teknik usulleri — laboratuvarın
  görevi), Madde 18-39 (yeterlik belgesi başvurusu, denetim, askıya
  alma/iptal, kalite yönetim sistemi gibi laboratuvar-Bakanlık idari
  süreci), Ek Madde 1, Geçici Madde 1-2, Madde 40-41 (yürürlük/
  yürütme).
- Maden Yönetmeliğinin aşağıdaki maddeleri (TAMAMLANDI — bkz. soru
  687-691): Yönetmeliğin kalan tamamı (Madde 1-31, 33-123, 125,
  127-136, Geçici Maddeler) — 3213 sayılı Maden Kanunu'na dayanan,
  maden arama/işletme ruhsatı verilmesi, ihale, rödövans, ruhsat
  bedeli/Devlet hakkı, süre uzatımı, ruhsat devri/intikali, geçici
  tatil, tebligat usulleri, daimî nezaretçi/teknik elemanın atanma-
  başvuru-sertifikasyon süreçleri gibi tamamen madencilik hukuku/
  idari lisanslandırma konuları; işverenin çalışana yönelik somut
  İSG tedbiri niteliğinde değil (Maden İşyerlerinde İş Sağlığı ve
  Güvenliği Yönetmeliği'nden [soru 463 vd.] tamamen farklı bir
  yönetmelik).
- Lüks Çadır Tesisleri Nitelikler Yönetmeliği — tamamı atlandı.
  Turizm belgelendirme/yatırım yönetmeliği (2634 sayılı Turizmi
  Teşvik Kanunu): yerleşim-tasarım planı, turizm yatırımı/işletme
  belgesi, kiralama ve ruhsatlandırma süreçleri. Metin boyunca hiç
  "işveren" veya "çalışan" kelimesi geçmiyor — Basit Konaklama
  Tesisleri/Plaj İşletmeleri Yönetmeliği için verilen skip
  gerekçesiyle aynı turizm belgelendirme kategorisi.
- Korumalı İşyerleri Hakkında Yönetmeliğin aşağıdaki maddeleri
  (TAMAMLANDI — bkz. soru 684-686): Madde 1-3 (amaç/kapsam/dayanak/
  tanımlar), Madde 4-7 (korumalı işyeri statüsü başvurusu/belgeler/
  komisyon değerlendirmesi — idari lisanslandırma süreci), Madde 8-9
  (personel istihdamı zorunluluğu/personel desteği — kadrolama/eğitim
  gerekliliği, somut İSG tedbiri değil), Madde 13-15 (engelli bireyin
  kabulü/ayrılışı, bildirim yükümlülükleri — İŞKUR/Aile Bakanlığı'na
  idari bildirim), Madde 16-20 (denetim, defter/belge ibrazı, yıllık
  faaliyet raporu, statü sona erdirme, itiraz — idari süreç), Madde
  21-23 (yürürlükten kaldırma/yürürlük/yürütme).
- Çalışanların Sağlık Gözetimine Yönelik Tıbbi Tetkiklerin Usul ve
  Esasları Hakkında Yönetmelik — tamamı atlandı. İşverene değil,
  OSGB/İSGB/ÇASMER'in kendisine (tıbbi tetkik hizmeti sunan birimlere)
  hitap ediyor: gezici iş sağlığı aracı ve sabit tıbbi tetkik
  mekânının teknik donanım şartları, bu birimlerin il sağlık
  müdürlüğüne yetkilendirme başvurusu, personel nitelikleri,
  radyolojik görüntüleme/teletıp standartları. Metin boyunca
  "işveren" kelimesi tek bir yerde geçiyor (Madde 16'da, İSGB'nin
  kendi yetkilendirme başvurusuna eklediği belgeler arasında "işveren
  imzalı olur yazısı" — işverene yüklenen bir yükümlülük değil,
  OSGB/İSGB'nin başvuru evrakının bir parçası). "İşyerlerinde İşveren
  veya İşveren Vekili Tarafından Yürütülecek İSG Hizmetlerine İlişkin
  Yönetmelik"te OSGB'nin kendi kurumsal sürecine ait maddeleri
  atlarken kullanılan gerekçeyle aynı kategori: muhatap işveren değil,
  hizmet sağlayıcı kurum.
- Binaların Yıkılması Hakkında Yönetmeliğin aşağıdaki maddeleri
  (TAMAMLANDI — bkz. soru 678-683): Madde 1-4 (amaç/kapsam/dayanak/
  tanımlar), Madde 5 (genel ilkeler — ruhsat/fenni mesuliyet/
  yetkilendirme süreci, idari), Madde 6 (yıkım planı hazırlama —
  müellifin/mühendisin teknik görevi), Madde 7 (yıkım ruhsatı —
  ilgili idare süreci), Madde 10 (yanan ve yıkılan yapılar formu —
  ilgili idarenin görevi), Madde 11 (yıkım yöntemleri — teknik
  standart, somut İSG yükümlülüğü değil), Madde 14-15 (atık yönetimi
  — çevre mevzuatı), Madde 17/1,2 (gürültü/titreşim çevresel rapor —
  environmental), Madde 17/3 (titreşim/gürültü yönetmeliklerine salt
  atıf, zaten soru havuzunda — yeni bilgi içermiyor), Madde 16/3
  (asbest çalışmaları yönetmeliğine salt atıf, zaten soru havuzunda),
  Madde 19 (atık kodları), Geçici Madde 1, Madde 20-21 (yürürlük/
  yürütme).
- Maluliyet ve Çalışma Gücü Kaybı Tespiti İşlemleri Yönetmeliği —
  tamamı atlandı. 5510 sayılı Kanun kapsamında sigortalıların
  maluliyet/çalışma gücü kaybı tespitine ve bu tespitte esas alınacak
  sağlık kurulu raporlarına ilişkin SGK/sağlık kurulu süreç
  yönetmeliği. Muhatap SGK, sağlık kurulları ve sigortalının kendisi;
  metinde "işveren" kelimesi bile geçmiyor — 5510 sayılı Kanun
  değerlendirmesinde zaten kurulan SGK/bordro-tahsilat idari
  süreçleri skip kategorisine giriyor.
- Basit Konaklama Tesisleri ile Plaj İşletmelerinin
  Belgelendirilmesine İlişkin Yönetmelik — tamamı atlandı. Turizm
  belgelendirme yönetmeliği (2634 sayılı Turizmi Teşvik Kanunu):
  belge verme usulleri, plaj işletmelerinin fiziki şartları, fiyat
  tarifesi onayı, denetim. Metin boyunca hiç "işveren" veya "çalışan"
  kelimesi geçmiyor — ticari/işletmecilik lisanslandırma skip
  kategorisine giriyor (AVM Yönetmeliği, Yapı Müteahhitleri
  Yönetmeliği ile aynı familya).
- Sosyal Güvenlik Kurumunca Elektronik Ortamda Yapılacak Tebligata
  İlişkin Yönetmelik — tamamı atlandı. SGK'nın 5510 ve 6183 sayılı
  Kanunlar kapsamındaki tebliğ evrakını elektronik ortamda tebliğ
  etme usullerini düzenleyen tamamen idari-usul yönetmeliği; İSG ile
  ilgisi yok — 5510 sayılı Kanun değerlendirmesinde zaten kurulan
  SGK/bordro-tahsilat idari süreçleri skip kategorisine giriyor.
- Boru Hatları ile Petrol Taşıma A.Ş. Genel Müdürlüğü (BOTAŞ) Ham
  Petrol ve Doğal Gaz Boru Hattı Tesislerinin Yapımı ve İşletilmesine
  Dair Teknik Emniyet ve Çevre Yönetmeliği — tamamı atlandı. Maden/
  Yapı İşleri gibi sektör geneline uygulanan İSG yönetmeliklerinden
  farklı olarak Madde 2 (Kapsam) açıkça "BOTAŞ'a ait" tesisleri
  kapsadığını belirtiyor — tek bir kamu kuruluşuna (BOTAŞ Genel
  Müdürlüğü) hitap ediyor, genel bir sektöre değil. İçerikte gerçek
  İSG unsurları var (6331 sayılı Kanun'a atıf, işverenler arası
  koordinasyon, personel eğitimi, acil durum müdahalesi) ancak metin
  muhatabı açıkça "BOTAŞ personeli ve kendi kuruluş mevzuatı uyarınca
  bu faaliyetlerin güvenliğinden sorumlu olan diğer kamu personeli"
  olarak tanımlanıyor — uygulamanın genel işveren kitlesi için
  genellenebilir bir yükümlülük değil. **Yeni skip kategorisi: tek
  isimli kuruluşa özgü yönetmelik** (sektör geneline değil, tek bir
  kamu kuruluşuna hitap eden).
- Aerosol Kaplar Yönetmeliği (75/324/AT) — tamamı atlandı. Amaç
  maddesi (Madde 1) "aerosol kapların temel sağlık ve güvenlik
  gereklilikleri, piyasaya arz koşulları ve piyasa gözetimi/denetimi
  esasları"nı düzenlediğini belirtiyor; imalatçı/ithalatçı muhatap bir
  ürün yönetmeliği. Metin boyunca hiç "işveren" veya "çalışan"
  kelimesi geçmiyor — aynı EU ürün/piyasaya arz skip kategorisi
  ("CE" İşareti Yönetmeliği, Kişisel Koruyucu Donanım Yönetmeliği vb.
  ile aynı familya).
- "CE" İşareti Yönetmeliği — tamamı atlandı. Ürün güvenliği genel
  çatı yönetmeliği: imalatçı/yetkili temsilci/ithalatçı/dağıtıcının
  CE işareti koyma ve kullanma usullerini düzenliyor. Metin boyunca
  hiç "işveren" veya "çalışan" kelimesi geçmiyor — Kişisel Koruyucu
  Donanım Yönetmeliği (2016/425/AB) için verilen skip gerekçesiyle
  aynı EU ürün/CE-işaretleme kategorisi, hatta ondan daha genel/çatı
  niteliğinde (tüm CE'li ürünler için geçerli).
- Uzaktan Çalışma Yönetmeliğinin aşağıdaki maddeleri (TAMAMLANDI —
  bkz. soru 676-677): Madde 1-4 (amaç/kapsam/dayanak/tanımlar), Madde
  5-11 (sözleşme şekli, çalışma mekânı/malzeme/ekipman temini, üretim
  maliyeti, çalışma süresi, iletişim, veri koruma — iş hukuku/
  sözleşme hükümleri, İSG kapsamı değil), Madde 13/2 (kamu
  kurumlarının stratejik iş belirleme yetkisi — idari), Madde 14
  (uzaktan çalışmaya geçiş usulü — sözleşme süreci), Madde 15-16
  (yürürlük/yürütme).
- Kişisel Koruyucu Donanım Yönetmeliği (2016/425/AB) — tamamı
  atlandı. "İşyerlerinde Kişisel Koruyucu Donanımların Kullanılması
  Hakkında Yönetmelik"ten (zaten soru havuzunda) farklı bir yönetmelik:
  piyasada bulundurulan KKD'lerin tasarımı/üretimi, CE işaretleme,
  onaylanmış kuruluş ve uygunluk değerlendirme süreçlerini düzenliyor
  (imalatçı/ithalatçı/dağıtıcı muhatap). Metin boyunca tek bir
  "işveren" veya "çalışan" kelimesi geçmiyor — EU ürün/CE-işaretleme
  direktifi transpozisyonu skip kategorisiyle aynı (Asansör, ATEX,
  EMC, Düşük Gerilim, Basit Basınçlı Kaplar, Basınçlı Ekipmanlar ile
  aynı familya).
- Asansör İşletme ve Bakım Yönetmeliğinin aşağıdaki maddeleri
  (TAMAMLANDI — bkz. soru 670-675): Madde 1-4 (amaç/kapsam/dayanak/
  tanımlar), Madde 5 (asansör kimlik numarası — oluşturulması muayene
  kuruluşunun görevi; etiket muhafazası bina sorumlusuna ait minor bir
  yükümlülük olup soru 656 ile örtüşen içerikle yeterince kapsandı),
  Madde 6-7 (binaya fenni uygunluk kontrolü ve tescil — ruhsat makamı
  ve asansör monte edenin süreci, bina sorumlusunun değil), Madde 9
  (bakımın kapsamı tanımı — asansör monte edenin teknik yükümlülüğü),
  Madde 10/1-5,7,8,10-12,14 (asansör monte eden/yetkili servisin kendi
  teknik-idari yükümlülükleri: durum tespit raporu, bakım föyü, yedek
  parça temini, mesleki sorumluluk vb.), Madde 11-13 (garanti belgesi,
  satış sonrası hizmetler, yetkili servis şartları — üçüncü taraf
  yükümlülükleri), Madde 14/2 (engellilerin erişilebilirliği için
  sürekli çalıştırma — kamusal erişilebilirlik, çalışan İSG'si değil),
  Madde 15 (Bakanlığın hizmet denetimi), Madde 17 (idari yaptırımlar),
  Madde 18-19 (atıflar/yürürlükten kaldırma), Geçici Madde 1 (tescil
  geçiş hükmü, tarihi geçmiş: 15/8/2004-24/6/2015), Madde 20-21
  (yürürlük/yürütme).
- Büyük Endüstriyel Kazaların Önlenmesi ve Etkilerinin Azaltılması
  Hakkında Yönetmeliğin aşağıdaki maddeleri (TAMAMLANDI — bkz. soru
  657-669): Madde 1-5 (amaç/kapsam/dayanak/tanımlar — Madde 5/h'de
  "işletmeci" tanımı 6331 sayılı Kanun'un işveren tanımına açıkça
  bağlanıyor, bu nedenle yönetmelik bütünüyle kapsam dahilinde
  değerlendirildi), Madde 18-19 (Bakanlığın/ilgili Bakanlıkların kendi
  denetim ve idari yaptırım süreci — işletmecinin yükümlülüğü değil),
  Madde 20 (yürürlükten kaldırılan önceki yönetmelik), Madde 21
  (Bakanlıklar arası tereddüt giderme yetkisi), Geçici Madde 1-4
  (geçiş hükümleri, tarihleri geçmiş: 1/7/2019 ve öncesi), Madde 22-23
  (yürürlük/yürütme).
- Yapı Müteahhitlerinin Sınıflandırılması ve Kayıtlarının Tutulması
  Hakkında Yönetmelik — 3194 sayılı İmar Kanunu'na dayanan müteahhitlik
  yetki belgesi/sınıflandırma yönetmeliği (ekonomik-mali-mesleki-teknik
  yeterlik, belge grubu, kayıt/iptal/itiraz). Madde 6/3'teki "6331'de
  öngörülen tedbirleri almaktan sorumludur" ifadesi zaten havuzda işlenmiş
  6331'e saf atıf, yeni içerik eklemiyor — soru yazılmadı.
- Asansör Periyodik Kontrol Yönetmeliği'nin aşağıdaki maddeleri
  (TAMAMLANDI — bkz. soru 656): Madde 1-7 (amaç/kapsam/dayanak/tanımlar,
  idari tedbir); Madde 9-23, 27-29, 31-33, 35-38 (A tipi muayene
  kuruluşu ile ilgili idare arasındaki protokol/akreditasyon/eğitim/
  veri tabanı/ücret/denetim süreçleri — işveren-çalışan İSG değil);
  Madde 24-25 (muayene kuruluşunun takip kontrolü/standart uygulama
  usulü); Madde 30 (muayene kuruluşunun kendi personeli için OSGB/uzman
  sözleşmesi — denetlenen işyerin işvereniyle ilgili değil); Ek Madde
  1-2, Geçici Madde 1-7, Madde 39-40 (yürürlük/yürütme).
- Basınçlı Ekipmanlar Yönetmeliği (2014/68/AB) — Asansör, ATEX, EMC, Düşük
  Gerilim ve Basit Basınçlı Kaplar yönetmelikleriyle aynı yapı, piyasaya
  arz düzenlemesi. "İşveren"/"çalışan" hiç geçmiyor, İSG kapsamı dışında.
- Yağmursuyu Toplama, Depolama ve Deşarj Sistemleri Hakkında Yönetmelik —
  drenaj sistemlerinin mühendislik tasarım standardı (belediyeler/tasarımcı
  mühendislere yönelik). "İş sağlığı ve güvenliği"/"çalışanların sağlığı ve
  güvenliği" ifadeleri geçiyor (Madde 8, 14) ama tasarım aşamasında dikkate
  alınacak bir faktör olarak; somut/denetlenebilir bir işveren-çalışan İSG
  yükümlülüğü yok.
- Kimyasalların Kaydı, Değerlendirilmesi, İzni ve Kısıtlanması Hakkında
  Yönetmelik (KKDİK)'in aşağıdaki maddeleri (TAMAMLANDI — bkz. soru 655):
  Madde 1-30, 32-65/A, Geçici Madde 1-2, 66-67 — tamamı imalatçı/ithalatçı/
  alt kullanıcı/tedarikçinin Bakanlığa yönelik kayıt, test, değerlendirme,
  izin, kısıtlama, bildirim ve ücret yükümlülükleri (Türk REACH'i, SEA/CLP
  ile aynı ürün/piyasa düzenlemesi yapısı); işveren-çalışan İSG ilişkisi
  değil.
- Analık İzni veya Ücretsiz İzin Sonrası Yapılacak Kısmi Süreli Çalışmalar
  Hakkında Yönetmelik — 4857 sayılı İş Kanunu Madde 13'e dayanan çalışma
  süresi/izin düzenlemesi (analık izni süreleri, ücretsiz izin, kısmi
  süreli çalışma talebi usulü); "iş sağlığı" hiç geçmiyor. Gebe/emziren
  çalışanların sağlık/güvenlik korumasını düzenleyen "Genel Yükümlülükler
  → Gebe, yeni doğum yapmış ve emziren kadın çalışanlar" kategorisiyle
  karıştırılmamalı — bu yönetmelik izin süresi/idari usul, İSG değil.
- Basit Basınçlı Kaplar Yönetmeliği (2014/29/AB) — Asansör, ATEX, EMC ve
  Düşük Gerilim yönetmelikleriyle aynı yapı, ürünün piyasaya arzı/CE
  işaretleme/piyasa gözetimi düzenlemesi. "İşveren"/"çalışan" hiç
  geçmiyor, İSG kapsamı dışında.
- Özel İstihdam Büroları Yönetmeliği'nin aşağıdaki maddeleri (TAMAMLANDI —
  bkz. soru 653-654): Madde 1-6 (amaç/kapsam/tanım/büro kuruluş-lisans
  şartları); Madde 7-8 (geçici iş ilişkisi kurulamayacak haller, çalıştırma
  koşulları/oran sınırları — İSG değil); Madde 9/1-a,b,d (talimat yetkisi,
  açık iş bildirimi, sendika temsilcisine bildirim — İSG değil); Madde 9/2-5
  (çalışma koşulları eşitliği, ücret kontrolü/ödeme — İSG değil); Madde 10
  (geçici işçinin kendi yükümlülüğü, işveren değil); Madde 11-33 (büro
  lisans yenileme/iptal, denetim, idari para cezaları, yürürlük/yürütme).
- Belirli Gerilim Sınırları İçin Tasarlanan Elektrikli Ekipman İle İlgili
  Yönetmelik (2014/35/AB) — Düşük Gerilim Direktifi transpozisyonu; SEA/CLP,
  Asansör, ATEX ekipman ve EMC yönetmelikleriyle aynı yapı, piyasaya arz
  düzenlemesi. "İşveren"/"çalışan" hiç geçmiyor, İSG kapsamı dışında.
- Elektromanyetik Uyumluluk Yönetmeliği (2014/30/AB) — EMC Direktifi
  transpozisyonu; SEA/CLP, Asansör ve ATEX ekipman yönetmelikleriyle aynı
  yapı, donanımın piyasaya arzı/CE işaretleme/piyasa gözetimi düzenlemesi.
  "İşveren" hiç geçmiyor, İSG kapsamı dışında.
- Muhtemel Patlayıcı Ortamda Kullanılan Teçhizat ve Koruyucu Sistemler İle
  İlgili Yönetmelik (2014/34/AB) — ATEX ekipman direktifinin transpozisyonu;
  SEA/CLP ve Asansör Yönetmeliği ile aynı yapı, imalatçı/ithalatçının
  piyasaya arz/CE işaretleme/piyasa gözetimi yükümlülükleri. "İşveren"
  hiç geçmiyor. (Karıştırılmamalı: işveren-çalışan ATEX çalışma ortamı
  yükümlülükleri "Çalışanların Patlayıcı Ortamların Tehlikelerinden
  Korunması Hakkında Yönetmelik"te zaten havuzda — bkz. soru 1281-1335
  civarı.)
- Asansör Yönetmeliği (2014/33/AB) — AB Asansör Direktifi'nin transpozisyonu;
  asansör/asansör güvenlik aksamlarının piyasaya arzı için imalatçı/
  montajcı/ithalatçı/dağıtıcının CE işaretlemesi, uygunluk değerlendirmesi,
  piyasa gözetimi yükümlülükleri (SEA/CLP ile aynı yapı — ürün/piyasa
  düzenlemesi). "İşveren" hiç geçmiyor; işveren-çalışan İSG ilişkisiyle
  ilgisi yok. (Asansörün bina sahibi/işveren tarafından işletme/bakım/
  periyodik kontrolü ayrı bir yönetmelikte düzenleniyor.)
- Alışveriş Merkezleri Hakkında Yönetmelik — 6585 sayılı Perakende
  Ticaretin Düzenlenmesi Hakkında Kanun'a dayanan Ticaret Bakanlığı
  yönetmeliği; AVM'nin yapısal/işletme nitelikleri (ortak alan, acil
  tıbbi müdahale ünitesi, bebek bakım odası, ibadet yeri) ve esnaf
  kiracılara işyeri tahsisini düzenliyor — müşteri/ziyaretçiye ve AVM
  maliki-esnaf ilişkisine yönelik; "işveren" hiç geçmiyor, İSG kapsamı
  dışında.
- Geçici Koruma Sağlanan Yabancıların Çalışma İzinlerine Dair Yönetmelik —
  göç/istihdam yönetmeliği (çalışma izni başvuru usulü, istihdam kotası,
  asgari ücret altında ödeme yasağı); "iş sağlığı ve güvenliği" hiç
  geçmiyor, İSG kapsamı dışında.
- İlkyardım Yönetmeliği'nin aşağıdaki maddeleri (TAMAMLANDI — bkz. soru
  652): Madde 1-4 (amaç/kapsam/dayanak/tanımlar); Madde 5-18 (ilkyardım/
  eğitici eğitim merkezi açma-kapama şartları, eğitim salonu özellikleri,
  başvuru belgeleri — eğitim kurumu idari süreçleri, işverenin yükümlülüğü
  değil); Madde 19/2-3 (özel güvenlik/sürücü kursu ve MEB öğretmen eğitimi
  zorunlulukları — işveren-çalışan İSG ilişkisi değil); Madde 20-31
  (eğitim standartları/süreleri, sınav, belgelendirme, ücretler, denetim —
  eğitim kurumu/Bakanlık süreçleri); Geçici Madde 1-3 (OED eğitimi geçiş
  hükümleri, Covid-19 güncelleme eğitimi); Madde 32-33 (yürürlük/yürütme).
- İşyerlerinde İşveren veya İşveren Vekili Tarafından Yürütülecek İş Sağlığı
  ve Güvenliği Hizmetlerine İlişkin Yönetmelik'in aşağıdaki maddeleri
  (TAMAMLANDI — bkz. soru 646-651): Madde 1-4 (amaç/kapsam/dayanak/
  tanımlar); Madde 6 (eğitim verme yetkisinin kime ait olduğu — izin/
  yetkilendirme maddesi, yeni işveren yükümlülüğü değil); Madde 9-15
  (eğitim programı içeriği, eğitici nitelikleri, başvuru, süre,
  belgelendirme, ücret, denetim — eğitim kurumu/Bakanlık süreçleri,
  işverenin kendi yükümlülüğü değil); Madde 17 (mülga); Madde 18 (zaten
  belgeli işveren/vekillerin hangi hizmetleri üstlenebileceği — Madde
  5/7/8'in istisna/uzantısı, ayrı soru gerektirmiyor); Geçici Madde 1-3
  (geçiş hükümleri/mülga); Madde 20-21 (yürürlük/yürütme).
- Kanser Bildirimi ve Kanser Kayıt Merkezleri Yönetmeliği — halk sağlığı
  sürveyans/istatistik yönetmeliği (kanser vakalarının bildirimi, kanser
  kayıt merkezlerinin örgütlenmesi, il kanser danışma komisyonu); muhatap
  hastane yöneticisi/kayıt elemanları/Halk Sağlığı Müdürlüğü. "İşveren"
  hiç geçmiyor; işveren-çalışan İSG ilişkisiyle ilgisi yok.
- Lejyoner Hastalığı Kontrol Usul ve Esasları Hakkında Yönetmelik — tesis
  (konaklama birimi: hastane, otel, SPA vb.) sahibi/işletmecisinin halk
  sağlığına yönelik legionella önleme/sürveyans/bildirim yükümlülüklerini
  düzenliyor; muhatap Sağlık Bakanlığı/Halk Sağlığı Müdürlüğü, korunan taraf
  misafir/hasta/halk. Madde 7/1'deki İSG risk değerlendirmesi atfı yeni bir
  çalışan-koruma yükümlülüğü yaratmıyor, mevcut 6331 sürecine koordinasyon
  atfı.
- İş Yeri Dışında Kurulan Sözleşmeler Yönetmeliği — İSG ile ilgisi yok;
  6502 sayılı Tüketicinin Korunması Hakkında Kanun'a dayanan bir tüketici
  koruma yönetmeliği (kapıdan kapıya satış, mesafeli iletişimle kurulan
  sözleşmeler, cayma hakkı). "İş yeri" burada satıcının satış noktası
  anlamında; metinde "çalışan"/"işveren" hiç geçmiyor.
- Maddelerin ve Karışımların Sınıflandırılması, Etiketlenmesi ve Ambalajlanması
  Hakkında Yönetmelik (SEA/CLP, AB 1272/2008'e paralel, 53 madde) — tamamen
  imalatçı/ithalatçı/tedarikçi/alt kullanıcının maddeleri piyasaya arz etmeden
  önce sınıflandırma/etiketleme/ambalajlama/bildirim yükümlülüklerini
  düzenliyor; metinde "çalışan" ve "işveren" hiç geçmiyor. İşverenin
  kimyasallarla çalışırken çalışanlara yönelik yükümlülükleri zaten "İş
  Hijyeni → Kimyasal Maddeler" alt kategorisinde (Kimyasal Maddelerle
  Çalışmalarda Sağlık ve Güvenlik Önlemleri Hakkında Yönetmelik) mevcut.
- Tozla Mücadele Yönetmeliği'nin aşağıdaki maddeleri (TAMAMLANDI — bkz. soru
  633-645): Madde 1-4 (amaç/kapsam/dayanak/tanımlar); Madde 7 (Tozla Mücadele
  Komisyonu — Bakanlık düzeyinde idari komisyon, işverene yönelik yükümlülük
  değil); Madde 16 (pnömokonyoz okuyucu eğitimi — İSGÜM'ün hekimlere verdiği
  sertifikasyon süreci, işverenin yükümlülüğü değil); Madde 17 (eski Tozla
  Mücadele Birimlerinin iç kontrol ölçümüne devam hakkı — kazanılmış hak/geçiş
  hükmü, yeni yükümlülük getirmiyor); Madde 18-20 (yürürlükten kaldırma/
  yürürlük/yürütme). Ek-1 (sınır değer tablosu), Ek-2 (tanı şeması), Ek-3 (ILO
  değerlendirme çizelgesi) ve Ek-4 (sertifika örneği) zaten Madde 6/9/10/12'de
  atıfla kullanıma alınan referans dokümanlar — ayrı soru gerektirmiyor.
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
- Çalışanların Gürültü ile İlgili Risklerden Korunmalarına Dair
  Yönetmelik — soru 315-327 eklendi, yeni "İş Hijyeni → Gürültü" alt
  kategorisi açıldı (Madde 6, 7, 8/1-2, 8/3, 8/4, 8/5, 9/1, 9/2, 10).
  Soru 324 (Madde 11) "Genel Yükümlülükler → Eğitim", soru 325 (Madde
  12) "Genel Yükümlülükler → Bilgilendirme ve Katılım", soru 326-327
  (Madde 13/1, 13/2-b) "Genel Yükümlülükler → Sağlık Gözetimi" alt
  kategorilerine eklendi. Madde 1-4 (amaç/kapsam/dayanak/tanımlar),
  Madde 5 (eylem değeri/sınır değerlerin sayısal tanımı — başlı başına
  bir yükümlülük değil, diğer maddelerde referans olarak kullanılıyor)
  ve Madde 14-16 (yürürlükten kaldırma/yürürlük/yürütme) atlandı.
- Kanserojen veya Mutajen Maddelerle Çalışmalarda Sağlık ve Güvenlik
  Önlemleri Hakkında Yönetmelik — soru 328-363 eklendi, yeni "İş
  Hijyeni → Kanserojen veya Mutajen Maddeler" alt kategorisi açıldı
  (Madde 5, 6, 7/1-a,b,c,ç,d (çoklu bent-içi kümeleme), 7/2, 8, 9/1-a,
  9/1-b, 10/1-a, 10/1-b, 10/1-c, 11, 12/1-a,b,c,ç, 12/2, 17). Soru 354
  (Madde 13) "Genel Yükümlülükler → Eğitim"; soru 355-358 (Madde
  14/1, 14/2-3, 14/4-7, 15) "Genel Yükümlülükler → Bilgilendirme ve
  Katılım"; soru 359-362 (Madde 16/1, 16/2, 16/3, 16/5) "Genel
  Yükümlülükler → Sağlık Gözetimi" alt kategorilerine eklendi. Madde
  7/1-d'nin 13 alt bendi (1-13), aşırı parçalanmayı önlemek için konu
  bazlı kümelenerek 7 soruya (334-340) dönüştürüldü — her biri yine
  tek madde/bent olan 7/1-d'ye atıfla. Soru 338 (Madde 7/1-d,
  bilgilendirme), Madde 13/14 ile konu örtüşmesi flaglenerek ayrı
  soru olarak eklendi. Madde 1-4 (amaç/kapsam/dayanak/tanımlar), Madde
  18 (sınır değer referans/sınıflandırma tanımı — başlı başına
  yükümlülük değil) ve Madde 19-21 (yürürlükten kaldırma/yürürlük/
  yürütme) atlandı. Ek-1/Ek-2/Ek-3 ilgili maddelere (4, 7, 16, 18)
  atıfla zaten kapsandığından ayrı soru açılmadı.
- Kimyasal Maddelerle Çalışmalarda Sağlık ve Güvenlik Önlemleri
  Hakkında Yönetmelik — soru 364-385 eklendi, yeni "İş Hijyeni →
  Kimyasal Maddeler" alt kategorisi açıldı (Madde 5, 6/1-2, 6/4,
  7/1-a,b,c,ç, 7/1-d,e,f, 7/1-g, 7/1-ğ,h,ı, 7/1-i, 7/1-j,k,l,m, 8/1-a,
  8/1-b, 8/1-c, 11/a, 11/b,c, 12/1-a,b,c, 12/1-ç, 12/1-d,e,f,g,
  12/1-h, 12/1-ı). Madde 7'nin a-m bentleri (13 bent), aşırı
  parçalanmayı önlemek için konu bazlı kümelenerek 6 soruya (367-372)
  dönüştürüldü. Soru 383 (Madde 9) "Genel Yükümlülükler → Eğitim";
  soru 384 (Madde 10) ve soru 385 (Madde 12/1-ğ, çalışanın kendi
  sağlık sonuçlarına erişim hakkı) "Genel Yükümlülükler →
  Bilgilendirme ve Katılım" alt kategorisine eklendi. Madde 1-4
  (amaç/kapsam/dayanak/tanımlar), Madde 9/3 (kimyasal madde üreticisi/
  tedarikçisinin kendi bilgi verme yükümlülüğü — işverenin değil),
  Madde 12/A (rehber/metot hazırlanması — Bakanlık/kurum süreci,
  idari), Madde 12/B (AB mevzuatına uyum beyanı — dayanak niteliğinde)
  ve Madde 13-15 (yürürlükten kaldırma/yürürlük/yürütme) atlandı.
- Gebe veya Emziren Kadınların Çalıştırılma Şartlarıyla Emzirme
  Odaları ve Çocuk Bakım Yurtlarına Dair Yönetmelik — soru 386-408
  eklendi. Soru 386-393 (Madde 6/2-4, 7/1-2, 7/3, 8, 9, 10, 11, 12)
  mevcut "Genel Yükümlülükler → Gebe, yeni doğum yapmış ve emziren
  kadın çalışanlar" alt kategorisine (soru 314'te açılmıştı); soru
  394-408 (Madde 13-23) yeni "Genel Yükümlülükler → Emzirme Odaları
  ve Çocuk Bakım Yurtları" alt kategorisine eklendi. Soru 389 (Madde
  8, gece çalışması yasağı) Kadın Çalışanların Gece Postalarında
  Çalıştırılma Koşulları Hakkında Yönetmelik Madde 9 (soru 314) ile,
  soru 391 (Madde 10, analık/süt izni) ise soru 13 (İş Kanunu Madde
  74) ile konu örtüşmesi flaglenerek ayrı soru olarak eklendi —
  mükerrer değil, her biri kendi yönetmeliğinin hükmü. Madde 5/3-5
  (oda/yurt hesaplama kuralları) ayrı soru açılmadan soru 394'e (Madde
  13) "Not" olarak dahil edildi. Madde 1-4 (amaç/kapsam/dayanak/
  tanımlar), Madde 5/1-2 (uygulamada öncelik — hukuki çatışma kuralı,
  somut yükümlülük değil), Madde 24 (yürürlükten kaldırma), Geçici
  Madde 1-2 (geçiş hükümleri) ve Madde 25-26 (yürürlük/yürütme)
  atlandı.
- Balıkçı Gemilerinde Yapılan Çalışmalarda Sağlık ve Güvenlik
  Önlemleri Hakkında Yönetmelik — soru 409-439 eklendi, yeni "Genel
  Yükümlülükler → Balıkçı Gemileri" alt kategorisi açıldı (Madde
  5/1-a,b,c, 6+Ek-1'in 17 başlığı soru 412-428, 8/1-a,b,c,
  8/1-ç+Ek-3, 8/1-d+Ek-4, 8/2). Soru 436-437 (Madde 10, 11) "Genel
  Yükümlülükler → Eğitim"; soru 438-439 (Madde 9, 12) "Genel
  Yükümlülükler → Bilgilendirme ve Katılım" alt kategorisine eklendi.
  Ek-1 (yeni gemiler, 17 başlık) ile neredeyse birebir örtüşen Ek-2
  (mevcut 18m+ gemiler, Geçici Madde 1 ile 5 yıl geçiş süreli),
  kullanıcı onayıyla ayrı soru seti olarak yazılmadı; soru 412'ye tek
  bir not eklenerek (soru 412-428 için geçerli) işlendi — ~17 sorunun
  mükerrer yazılması önlendi. Madde 7 (büyük onarım/dönüşüm/
  değişikliklerde aynı Ek-1 gerekleri) de aynı şekilde ayrı soru
  açılmadan not olarak işlendi. Madde 1-4 (amaç/kapsam/dayanak/
  tanımlar), Madde 13 (yürürlükten kaldırma) ve Madde 14-15
  (yürürlük/yürütme) atlandı.
- Çalışanların Titreşimle İlgili Risklerden Korunmalarına Dair
  Yönetmelik — soru 440-449 eklendi, yeni "İş Hijyeni → Titreşim" alt
  kategorisi açıldı (Madde 6, 7, 8/1-2, 8/3, 8/4, 9). Soru 446 (Madde
  10) "Genel Yükümlülükler → Eğitim"; soru 447 (Madde 11) "Genel
  Yükümlülükler → Bilgilendirme ve Katılım"; soru 448-449 (Madde
  12/1-2, 12/3) "Genel Yükümlülükler → Sağlık Gözetimi" alt
  kategorilerine eklendi. Madde 1-4 (amaç/kapsam/dayanak/tanımlar),
  Madde 5 (maruziyet sınır/eylem değerlerinin sayısal tanımı — başlı
  başına yükümlülük değil, diğer maddelerde referans olarak
  kullanılıyor), Madde 13 (deniz/hava taşımacılığı için Bakanlık iş
  müfettişince onaylanan dört yıllık muafiyet — somut işveren
  yükümlülüğü değil, dar kapsamlı idari istisna) ve Madde 14-16
  (yürürlükten kaldırma/yürürlük/yürütme) atlandı.
- Geçici veya Belirli Süreli İşlerde İş Sağlığı ve Güvenliği Hakkında
  Yönetmelik — soru 450-457 eklendi, yeni "Genel Yükümlülükler →
  Geçici veya Belirli Süreli Çalışanlar" alt kategorisi açıldı (Madde
  5, 6, 9, 10/a, 10/b, 11). Soru 456 (Madde 7) "Genel Yükümlülükler →
  Eğitim"; soru 457 (Madde 8) "Genel Yükümlülükler → Sağlık
  Gözetimi" alt kategorilerine eklendi. Madde 1-4 (amaç/kapsam/
  dayanak/tanımlar), Madde 12 (hüküm bulunmayan hallerde 6331 sayılı
  Kanunun uygulanması — somut yükümlülük değil, hukuki tamamlama
  kuralı), Madde 13 (daha uygun önlem almaya engel olmama — izin/
  serbestlik hükmü) ve Madde 14-16 (yürürlükten kaldırma/yürürlük/
  yürütme) atlandı.
- Sağlık ve Güvenlik İşaretleri Yönetmeliği — soru 458-462 eklendi,
  yeni "Genel Yükümlülükler → Sağlık ve Güvenlik İşaretleri" alt
  kategorisi açıldı (Madde 5/1, 5/2). Soru 460 (Madde 6/2) "Genel
  Yükümlülükler → Eğitim"; soru 461-462 (Madde 6/1, 7) "Genel
  Yükümlülükler → Bilgilendirme ve Katılım" alt kategorilerine
  eklendi. Ekler (işaretlerin renk/şekil/piktogram gibi teknik görsel
  standartları) metne dahil değildi ("Ekleri için tıklayınız") ve
  Madde 5/1'deki genel yükümlülük zaten bu standartlara atıf
  yaptığından ayrı soru açılmadı. Madde 1-4 (amaç/kapsam/dayanak/
  tanımlar) ve Madde 8-10 (yürürlükten kaldırma/yürürlük/yürütme)
  atlandı.
- Maden İşyerlerinde İş Sağlığı ve Güvenliği Yönetmeliği (TAMAMLANDI)
  — soru 463-477 (Madde 5-12 + EK MADDE 1), soru 478-505 (Ek-1), soru
  506-510 (Ek-2), soru 511-544 (Ek-3) ve soru 545-554 (Ek-4) eklendi,
  "Genel Yükümlülükler → Maden İşyerleri" alt kategorisine (soru
  475-476 "Bilgilendirme ve Katılım", soru 477 "Sağlık Gözetimi" alt
  kategorilerine eklendi). Madde 1-4 (amaç/kapsam/dayanak/tanımlar),
  Madde 6 (çalışanın kendi yükümlülüğü — işverenin değil), Madde 13
  (eklere atıf yapan şemsiye madde — içeriği Ek-1/2/3/4 üzerinden
  işlendi), Geçici Madde 1-4 (geçiş hükümleri) ve Madde 15-16
  (yürürlük/yürütme) atlandı. Ek-1'in 7.1/18/23 bentleri (başka
  yönetmeliklere salt atıf, yeni bilgi içermiyor) ve 21-22 bentleri
  ("Genel Yükümlülükler → İşyeri Bina ve Eklentileri" ile örtüşen
  yapı/tesis hükümleri, kullanıcı kararıyla ayrı soru yazılmadı, soru
  501/503'e Not eklendi) atlandı.
- Yapı Denetimi Uygulama Yönetmeliği — tamamı atlandı. Bu yönetmelik
  işverenin kendi çalışanlarına karşı İSG yükümlülüklerini değil,
  yapı denetim kuruluşlarının (üçüncü taraf denetim şirketleri)
  lisanslanması, denetçi mimar/mühendis nitelikleri, yapı sahibi-
  müteahhit-denetim kuruluşu arasındaki sözleşme/hakediş/ücretlendirme
  usullerini düzenliyor. Tek İSG-ilgili madde (Madde 5/1-ı) işçi
  sağlığı ve iş güvenliği tedbirlerinin alınıp alınmadığını "kontrol
  etme" görevini yapı denetim kuruluşuna (işverene değil) yüklüyor —
  Yapı Denetimi Hakkında Kanun (4708) için verilen skip gerekçesiyle
  aynı. Madde 14/11 (çalışan sigorta primlerinin yatırılması) ise
  5510 sayılı Kanun değerlendirmesinde zaten atlanan SGK/bordro
  kategorisine giriyor, İSG maruziyeti değil.
- Yapı İşlerinde İş Sağlığı ve Güvenliği Yönetmeliği (TAMAMLANDI) —
  soru 555-563, 566-567 (Madde 5-14), soru 568-599 (Ek-4 Bölüm A,
  "Yapı alanındaki çalışma yerleri için genel asgari şartlar") ve
  soru 600-632 (Ek-4 Bölüm B, "Yapı Alanlarındaki Özel Asgari
  Şartlar" — Kapalı Mekanlar + Açık Mekanlar) eklendi, "Genel
  Yükümlülükler → Yapı İşleri" alt kategorisine. Soru 564-565
  (Madde 12, 13) "Genel Yükümlülükler → Bilgilendirme ve Katılım" alt
  kategorisine eklendi. Madde 1-4 (amaç/kapsam/dayanak/tanımlar),
  Madde 6 (proje sorumlusu atama — takdir hakkı/sorumluluk
  netleştirme, somut yükümlülük değil), Madde 7 (kendi nam ve
  hesabına çalışanların kendi yükümlülüğü — işverenin değil), Madde
  15-17 (yürürlükten kaldırma/yürürlük/yürütme) ve Geçici Madde 1
  (geçiş hükmü, tarihi geçmiş) atlandı. Ek-1 (yapı işleri listesi),
  Ek-2 (riskli işler listesi) ve Ek-3 (bildirim içeriği) ayrı soru
  gerektirmedi — tanım/liste niteliğinde, Madde 2 ve 8'e referans.
  Ek-4 Bölüm A'daki Madde 27 (patlayıcı ortam yönetmeliğine salt
  atıf, zaten soru havuzunda) atlandı. Ek-4 Bölüm A'daki birçok
  madde (acil çıkış, yangın, havalandırma, sıcaklık, aydınlatma,
  ilkyardım, soyunma/duş/tuvalet, gebe/engelli çalışanlar), "Genel
  Yükümlülükler → İşyeri Bina ve Eklentileri" ve ilgili diğer alt
  kategorilerle örtüşüyor; kullanıcı kararıyla (tam soru seti yaz)
  ayrı soru olarak yazıldı ve ilgili sorulara örtüşmeyi işaret eden
  Not eklendi. Ek-4 Bölüm B-I'deki (Kapalı Mekanlardaki Çalışma
  Yerleri) acil çıkış/havalandırma/sıcaklık/aydınlatma maddeleri,
  Ek-4 Bölüm A'nın aynı konulu maddeleriyle (yönetmeliğin kendi
  içinde) örtüştüğü için de ilgili sorulara Not eklendi. Ek-4 Bölüm
  B-II'de 17-35 arası maddeler (iskelelerde genel tedbirler) mülga —
  içerikleri Ek-5'e (iskele/korkuluk standartları) taşınmış; Ek-5
  metin olarak çıkarılamadı (dokümanda "Ek-5 için tıklayınız" ayrı
  ek olarak belirtiliyor), genel uyma yükümlülüğü soru 567'de
  (Madde 14/3) zaten kapsandı. Ek-4 Bölüm B-II/76-b bendi (Asbestle
  Çalışmalarda Sağlık ve Güvenlik Önlemleri Yönetmeliği'ne salt atıf,
  zaten soru havuzunda) atlandı.

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
