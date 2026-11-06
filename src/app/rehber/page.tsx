import Link from "next/link";
import NavBar from "@/components/NavBar";
import {
  BAGLAYICILIK_SECENEKLERI,
  KAPSAM_SECENEKLERI,
  OLASILIK_SECENEKLERI,
  RISK_ACIGI_BILGI,
  RISK_ACIGI_SIRASI,
  SONUC_SECENEKLERI,
  UYUM_DUZEYI_SECENEKLERI,
} from "@/lib/emm";

export const metadata = { title: "Karne Doldurma Rehberi — İSG Mevzuat Uyum Karnesi" };

const ICINDEKILER = [
  { id: "genel", baslik: "1. Karne nasıl çalışır?" },
  { id: "cevaplar", baslik: "2. Evet, Hayır, Kapsam Dışı" },
  { id: "en-kotu-durum", baslik: "3. En kötü durum ilkesi" },
  { id: "hayir-sonrasi", baslik: "4. Hayır dedikten sonra: iki değerlendirme" },
  { id: "risk", baslik: "5. Risk temelli değerlendirme" },
  { id: "uyum", baslik: "6. Uyum ve idari düzenleme değerlendirmesi" },
  { id: "baglayicilik", baslik: "7. Standart bağlayıcılığı" },
  { id: "bulgu", baslik: "8. Bulgu açıklaması nasıl yazılır?" },
  { id: "duzeltici", baslik: "9. Düzeltici faaliyet nasıl yazılır?" },
  { id: "rapor", baslik: "10. Özet rapor nasıl okunur?" },
  { id: "guncelleme", baslik: "11. \"Mevzuat güncellendi\" uyarısı" },
  { id: "kaynaklar", baslik: "Kaynaklar" },
];

function Tablo({ satirlar }: { satirlar: { etiket: string; aciklama: string }[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-left text-sm">
        <tbody>
          {satirlar.map((s) => (
            <tr key={s.etiket} className="border-b border-gray-200 align-top">
              <th className="w-40 py-2 pr-4 font-semibold text-gray-900">{s.etiket}</th>
              <td className="py-2 text-gray-700">{s.aciklama}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Ornek({ baslik, children }: { baslik: string; children: React.ReactNode }) {
  return (
    <div className="rounded-md border border-gray-200 bg-gray-50 p-4">
      <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">{baslik}</p>
      <div className="mt-2 space-y-2">{children}</div>
    </div>
  );
}

function IyiKotu({ kotu, iyi }: { kotu: string; iyi: string }) {
  return (
    <div className="grid gap-2 sm:grid-cols-2">
      <div className="rounded-md border border-red-200 bg-red-50 p-3">
        <p className="text-xs font-semibold text-red-700">Yetersiz</p>
        <p className="mt-1 text-red-900">{kotu}</p>
      </div>
      <div className="rounded-md border border-green-200 bg-green-50 p-3">
        <p className="text-xs font-semibold text-green-700">İyi</p>
        <p className="mt-1 text-green-900">{iyi}</p>
      </div>
    </div>
  );
}

export default function RehberPage() {
  return (
    <>
      <NavBar />
      <main className="mx-auto max-w-3xl px-6 py-8">
        <Link href="/companies" className="text-sm text-brand-700">
          ← Firmalarım
        </Link>
        <h1 className="mt-2 text-2xl font-semibold text-gray-900">Karne Doldurma Rehberi</h1>
        <p className="mt-1 text-sm text-gray-600">
          Soruları nasıl cevaplayacağınızı, "Hayır" cevabından sonra bulguyu nasıl
          değerlendireceğinizi ve düzeltici faaliyeti nasıl yazacağınızı anlatır.
        </p>

        <nav className="mt-6 rounded-lg border border-gray-200 bg-white p-4">
          <p className="text-sm font-semibold text-gray-900">İçindekiler</p>
          <ol className="mt-2 grid gap-1 text-sm sm:grid-cols-2">
            {ICINDEKILER.map((b) => (
              <li key={b.id}>
                <a href={`#${b.id}`} className="text-brand-700 hover:underline">
                  {b.baslik}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="mt-8 space-y-4 text-sm leading-relaxed text-gray-800 [&_h2]:scroll-mt-20 [&_h2]:pt-6 [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-gray-900 [&_h3]:pt-2 [&_h3]:font-semibold [&_h3]:text-gray-900 [&_ul]:ml-5 [&_ul]:list-disc [&_ul]:space-y-1 [&_ol]:ml-5 [&_ol]:list-decimal [&_ol]:space-y-1 [&_strong]:font-semibold">
          {/* 1 */}
          <h2 id="genel">1. Karne nasıl çalışır?</h2>
          <p>
            Karne, işyerinizin İSG mevzuatına uyumunu kendi beyanınıza dayanarak ölçen bir
            öz-değerlendirme aracıdır. Sorular kategorilere ve alt kategorilere ayrılmıştır; her
            soru mevzuattaki tek bir yükümlülüğü sorar ve altında dayanağı (kanun/yönetmelik ve
            madde) yazar.
          </p>
          <ul>
            <li>
              Cevaplar <strong>otomatik kaydedilir</strong>. Evet / Hayır / Kapsam Dışı ve
              açılır listelerdeki seçimler tıkladığınız anda, metin alanları alandan
              çıktığınızda kaydedilir. Sağ üstte "kaydedildi ✓" yazısını görürsünüz.
            </li>
            <li>
              Sorunun altında <strong>"Beklenen kanıt"</strong> yazıyorsa, "Evet" demeden önce o
              belgeyi veya durumu görmüş olmanız beklenir.
            </li>
            <li>
              Firma sayfasında bazı alt kategorilerde (ör. Maden İşyerleri, Sivil Savunma){" "}
              <strong>"Kapsam Dışı Yap"</strong> düğmesi vardır. İşyeriniz o kapsamda değilse,
              tek tıkla alt kategorideki bütün soruları "Kapsam Dışı" yapar.
            </li>
          </ul>

          {/* 2 */}
          <h2 id="cevaplar">2. Evet, Hayır, Kapsam Dışı</h2>
          <Tablo
            satirlar={[
              {
                etiket: "Evet",
                aciklama:
                  "Yükümlülük tam olarak karşılanıyor ve bunu kanıtlayabiliyorsunuz (belge, kayıt, sahada gözlem). Ek değerlendirme istenmez; uyum oranını artırır.",
              },
              {
                etiket: "Hayır",
                aciklama:
                  "Yükümlülük hiç karşılanmıyor, kısmen karşılanıyor ya da karşılandığı kanıtlanamıyor. \"Kısmen\" diye bir seçenek yoktur; kısmi uyum da Hayır'dır, eksikliğin derecesi değerlendirmede belirtilir.",
              },
              {
                etiket: "Kapsam Dışı",
                aciklama:
                  "Yükümlülük işyerinize uygulanmıyor (ör. 50'den az çalışanı olan işyerinde 50+ çalışana yönelik bir şart). Uyum oranına dahil edilmez. \"Yapmadık\" demek değildir; o durum Hayır'dır.",
              },
            ]}
          />
          <p>
            Emin değilseniz "Evet" demeyin. Kanıtı olmayan bir "Evet", eksikliği raporda
            görünmez kılar.
          </p>

          {/* 3 */}
          <h2 id="en-kotu-durum">3. En kötü durum ilkesi</h2>
          <p>
            Bazı sorular toplu ifade içerir: "her iş ekipmanında", "tüm çalışanlara", "bütün
            bölümlerde". Böyle bir soruda <strong>bir tane bile uygunsuzluk varsa cevap
            Hayır'dır</strong> ve değerlendirme <strong>en kötü durumdaki unsura göre</strong>{" "}
            yapılır. O unsurun ne olduğu (ekipman adı, bölüm, kişi grubu) bulgu açıklamasına
            yazılır.
          </p>
          <Ornek baslik="Örnek">
            <p>
              "Her iş ekipmanında güvenli durdurma kumandası bulunmaktadır." İşyerinde 12 makine
              var; masa matkabında ve hidrolik preste kumanda yok. Değerlendirme, daha tehlikeli
              olan <strong>hidrolik prese</strong> göre yapılır; masa matkabı da bulgu
              açıklamasında belirtilir.
            </p>
          </Ornek>

          {/* 4 */}
          <h2 id="hayir-sonrasi">4. Hayır dedikten sonra: iki değerlendirme</h2>
          <p>
            "Hayır" seçtiğinizde sorunun altında kırmızı bir değerlendirme kutusu açılır. Hangi
            değerlendirmenin yapılacağına siz karar vermezsiniz; soru önceden iki tipten birine
            ayrılmıştır ve kutunun başlığı bunu söyler. Yöntem, İngiltere İSG otoritesi HSE'nin
            müfettişleri için geliştirdiği <strong>Enforcement Management Model (EMM)</strong>{" "}
            modeline dayanır.
          </p>
          <Tablo
            satirlar={[
              {
                etiket: "Risk temelli",
                aciklama:
                  "Yükümlülük doğrudan bir sağlık veya güvenlik riskini kontrol eder (makine koruyucusu, topraklama, korkuluk, maruziyet sınırı). Eksikliğin ne kadar risk yarattığı ölçülür.",
              },
              {
                etiket: "Uyum ve idari düzenleme",
                aciklama:
                  "Yükümlülük kendi başına riski kontrol etmez ama yasal olarak zorunludur: kayıt, bildirim, görevlendirme, belge, risk değerlendirmesinin yapılması. Eksikliğin ne kadar esaslı olduğu ölçülür.",
              },
            ]}
          />
          <p>
            Kutuda "Bu soru için değerlendirme tipi henüz tanımlanmadı" yazıyorsa soru henüz
            sınıflandırılmamıştır. Bulgu açıklamasını ve düzeltici faaliyeti yine yazın.
          </p>

          {/* 5 */}
          <h2 id="risk">5. Risk temelli değerlendirme</h2>
          <p>
            Bugünkü durumu, yani <strong>mevcut riski</strong> üç seçimle tarif edersiniz.
            Sistem bunu, yükümlülük tam karşılansaydı kalacak <strong>referans riskle</strong>{" "}
            karşılaştırır ve aradaki farkı, yani <strong>risk açığını</strong> hesaplar.
            Referans risk her soru için önceden tanımlıdır ve kutuda gösterilir; siz seçmezsiniz.
          </p>

          <h3>Sonuç: olay gerçekleşirse ne olur?</h3>
          <p>Gerçekçi olarak beklenebilecek en kötü zararı seçin, akla gelebilecek en uç senaryoyu değil.</p>
          <Tablo satirlar={SONUC_SECENEKLERI} />

          <h3>Olasılık: olay ne kadar olası?</h3>
          <p>
            "Olay" yapılan iş değil, kontrolden çıkan andır: yük kaldırmak değil yükün düşmesi,
            makinede çalışmak değil elin hareketli parçaya girmesi. Bugünkü koşullara bakın;
            sağlık etkilerinde tek bir kişinin direncini değil, çalışanların genelini düşünün.
          </p>
          <Tablo satirlar={OLASILIK_SECENEKLERI} />

          <h3>Kapsam: kaç kişi etkilenebilir?</h3>
          <Tablo satirlar={KAPSAM_SECENEKLERI} />
          <p>
            Bir iki kişinin yaralanabileceği durumlar "Tek veya az sayıda kişi"dir. "Büyük olay"
            seçeneğini patlama, yangın, toksik yayılım, yapı çökmesi gibi çok sayıda çalışanı
            ya da işyeri dışındaki kişileri etkileyebilecek tehlikeler için kullanın.
          </p>

          <h3>Risk açığı</h3>
          <p>Seçimleriniz tamamlanınca kutuda renkli bir etiket çıkar:</p>
          <div className="flex flex-wrap gap-2">
            {RISK_ACIGI_SIRASI.map((k) => (
              <span
                key={k}
                className={`rounded-full px-3 py-1 text-xs font-medium ${RISK_ACIGI_BILGI[k].sinif}`}
              >
                {RISK_ACIGI_BILGI[k].etiket}
              </span>
            ))}
          </div>
          <p>
            Aşırı'dan Düşük'e doğru, mevcut durumun olması gereken yerden ne kadar uzak olduğunu
            gösterir. "Açık yok", seçtiğiniz mevcut riskin referans riskten yüksek olmadığı
            anlamına gelir. Hayır dediğiniz bir soruda bu sonucu görürseniz seçimlerinizi
            gözden geçirin.
          </p>
          <Ornek baslik="Örnek">
            <p>
              Soru: "Her iş ekipmanında, ekipmanı tümüyle ve güvenli şekilde durdurabilecek bir
              kumanda sistemi bulunmaktadır." Her gün kullanılan hidrolik preste durdurma
              kumandası yok.
            </p>
            <ul>
              <li>Sonuç: <strong>Ciddi</strong> (sıkışma, uzuv kaybı)</li>
              <li>Olasılık: <strong>Muhtemel</strong> (her gün, koruma olmadan kullanılıyor)</li>
              <li>Kapsam: <strong>Tek veya az sayıda kişi</strong> (operatör)</li>
              <li>
                Referans risk (soruda tanımlı): Ciddi – Uzak → Risk açığı: <strong>Yüksek</strong>
              </li>
            </ul>
          </Ornek>

          {/* 6 */}
          <h2 id="uyum">6. Uyum ve idari düzenleme değerlendirmesi</h2>
          <p>
            Tek bir seçim yaparsınız: <strong>uyum düzeyi</strong>. Soru, yükümlülüğün ne
            kadar karşılandığıdır.
          </p>
          <Tablo satirlar={UYUM_DUZEYI_SECENEKLERI} />
          <Ornek baslik="Örnek">
            <p>
              Soru: çalışan sayısına göre gerekli sayıda çalışan temsilcisi görevlendirilmiştir.
              120 çalışan var, 3 temsilci gerekiyor, 1 temsilci atanmış.
            </p>
            <ul>
              <li>Hiç temsilci olmasaydı → <strong>Hiç yok</strong></li>
              <li>3 yerine 1 temsilci var → <strong>Yetersiz</strong> ← bu örnek</li>
              <li>3 temsilci görevlendirilmiş ama birinin görevlendirme yazısı dosyada yok → <strong>Küçük eksik</strong></li>
            </ul>
          </Ornek>

          {/* 7 */}
          <h2 id="baglayicilik">7. Standart bağlayıcılığı</h2>
          <p>
            Her iki kutuda da "Standart bağlayıcılığı" satırı görünür. Bu bilgi her soru için
            önceden tanımlıdır; siz seçmezsiniz. Yükümlülüğün hukuken zorunlu olup olmadığını
            değil, <strong>ne yapılacağının nerede yazdığını</strong> gösterir. Ne yapılacağı
            ne kadar açık yazılmışsa, eksiklik o kadar ağır kabul edilir.
          </p>
          <Tablo satirlar={BAGLAYICILIK_SECENEKLERI} />

          {/* 8 */}
          <h2 id="bulgu">8. Bulgu açıklaması nasıl yazılır?</h2>
          <p>
            Bulgu açıklaması, raporu okuyan kişinin işyerine gelmeden eksikliği anlamasını
            sağlamalıdır. İyi bir bulgu şunları içerir:
          </p>
          <ol>
            <li><strong>Ne:</strong> gözlenen durum, yorum katmadan</li>
            <li><strong>Nerede:</strong> bölüm, ekipman, seri no, belge adı</li>
            <li><strong>Ne kadar:</strong> sayı, oran, süre (ör. "12 makinenin 2'sinde")</li>
            <li><strong>Kanıt:</strong> neye bakarak tespit edildi (gözlem, kayıt, görüşme, fotoğraf)</li>
            <li><strong>Dayanak:</strong> ilgili madde zaten soruda yazılı; gerekiyorsa bendi ekleyin</li>
          </ol>
          <p>
            Kişi adı yazmayın; görev unvanı yeterlidir. Toplu ifadeli sorularda en kötü durumdaki
            unsuru mutlaka belirtin.
          </p>
          <IyiKotu
            kotu="Makinelerde durdurma yok."
            iyi="Üretim holündeki 12 makinenin 2'sinde (hidrolik pres seri no HP-0457, masa matkabı MM-12) ekipmanı tümüyle durduracak kumanda bulunmuyor. Sahada gözlem, 06.11.2026."
          />
          <IyiKotu
            kotu="Temsilci eksik."
            iyi="120 çalışan için 3 çalışan temsilcisi gerekirken 1 temsilci görevlendirilmiş (görevlendirme yazısı 12.03.2026). Diğer 2 temsilci için seçim yapılmamış."
          />

          {/* 9 */}
          <h2 id="duzeltici">9. Düzeltici faaliyet nasıl yazılır?</h2>
          <p>
            "Öneri / düzeltici faaliyet" alanı, eksikliğin nasıl giderileceğini yazdığınız
            yerdir. ISO 45001 (madde 10.2) iki adımı birbirinden ayırır; ikisini de yazın:
          </p>
          <ol>
            <li>
              <strong>Düzeltme (acil kontrol):</strong> Uygunsuzluğu hemen kontrol altına alan
              adım. Ör. "Pres, kumanda takılana kadar kullanımdan çekilecek."
            </li>
            <li>
              <strong>Düzeltici faaliyet (kök neden):</strong> Aynı eksikliğin tekrar etmemesi
              için nedeni gideren adım. Önce sorun: Bu eksiklik neden oluştu, neden fark
              edilmedi? Ör. "Periyodik kontrol formuna durdurma kumandası maddesi eklenecek;
              yeni ekipman devreye alınmadan önce uygunluk kontrolü yapılacak."
            </li>
          </ol>

          <h3>Önlem seçerken kontrol hiyerarşisi</h3>
          <p>
            6331 sayılı Kanun md. 5 ve ISO 45001 md. 8.1.2 önlemleri bir öncelik sırasına koyar.
            Yukarıdaki bir önlem mümkünse, yalnızca aşağıdakiyle yetinmeyin:
          </p>
          <ol>
            <li><strong>Ortadan kaldırma:</strong> tehlikeyi tamamen yok etmek</li>
            <li><strong>İkame:</strong> daha az tehlikeli olanla değiştirmek</li>
            <li><strong>Mühendislik önlemi:</strong> koruyucu, kilitleme, havalandırma, iş düzenlemesi</li>
            <li><strong>İdari önlem:</strong> talimat, prosedür, eğitim, uyarı işareti</li>
            <li><strong>Kişisel koruyucu donanım:</strong> son çare; toplu korumanın yerine geçmez</li>
          </ol>

          <h3>Her düzeltici faaliyette bulunması gerekenler</h3>
          <ul>
            <li><strong>Ne yapılacak:</strong> somut iş, "iyileştirilecek" gibi belirsiz fiiller değil</li>
            <li><strong>Kim yapacak:</strong> sorumlu görev/birim</li>
            <li><strong>Ne zaman:</strong> hedef tarih</li>
            <li><strong>Nasıl doğrulanacak:</strong> tamamlandığı neyle anlaşılacak (kayıt, ölçüm, kontrol)</li>
          </ul>
          <IyiKotu
            kotu="Gerekli önlemler alınmalı."
            iyi="Pres kumanda takılana kadar kullanımdan çekilecek (Üretim Şefi, derhal). Ekipmanı tümüyle durduran kumanda takılacak (Bakım Birimi, 30.11.2026); montaj sonrası yetkili kişiye kontrol yaptırılıp raporu dosyalanacak. Periyodik kontrol formuna durdurma kumandası maddesi eklenecek (İSG Uzmanı, 15.12.2026)."
          />

          {/* 10 */}
          <h2 id="rapor">10. Özet rapor nasıl okunur?</h2>
          <ul>
            <li>
              <strong>Uyum oranı</strong> = Evet / (Evet + Hayır). Kapsam Dışı ve
              cevaplanmamış sorular hesaba katılmaz.
            </li>
            <li>
              <strong>Risk açığı dağılımı:</strong> risk temelli "Hayır"ların Aşırı'dan Düşük'e
              dağılımı. Önce Aşırı ve Yüksek bulgulara bakın.
            </li>
            <li>
              <strong>Uyum düzeyi dağılımı:</strong> uyum ve idari düzenleme "Hayır"larının Hiç
              yok / Yetersiz / Küçük eksik dağılımı.
            </li>
            <li>
              <strong>Değerlendirilmedi:</strong> "Hayır" denmiş ama seçimleri eksik bırakılmış
              ya da referans riski henüz tanımlanmamış bulgular. Seçimleri tamamladığınızda
              ilgili düzeye geçer.
            </li>
          </ul>

          {/* 11 */}
          <h2 id="guncelleme">11. "Mevzuat güncellendi" uyarısı</h2>
          <p>
            Bir soru siz cevapladıktan sonra mevzuat değişikliği nedeniyle güncellenirse, soru
            sarı "Mevzuat güncellendi — gözden geçir" etiketiyle işaretlenir. Soruyu ve
            dayanağını yeniden okuyun; cevabınız hâlâ doğruysa aynı cevaba tekrar tıklamanız
            yeterlidir, etiket kalkar.
          </p>

          <h2 id="kaynaklar">Kaynaklar</h2>
          <ul>
            <li>
              HSE, <em>Enforcement Management Model (EMM)</em>, operasyonel sürüm 3.2: risk açığı,
              uyum düzeyi ve standart bağlayıcılığı tabloları
            </li>
            <li>TS ISO 45001: İSG yönetim sistemleri, md. 8.1.2 ve 10.2</li>
            <li>6331 sayılı İş Sağlığı ve Güvenliği Kanunu, md. 5 (Risklerden korunma ilkeleri)</li>
          </ul>
          <p className="text-xs text-gray-500">
            Karne bir öz-değerlendirme aracıdır; resmî denetim veya hukuki görüş yerine geçmez.
          </p>
        </div>
      </main>
    </>
  );
}
