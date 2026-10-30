import Link from "next/link";

export const metadata = { title: "KVKK Aydınlatma Metni — İSG Mevzuat Kaynağı" };

export default function KvkkPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-10">
      <Link href="/" className="text-sm text-brand-700">
        ← Ana Sayfa
      </Link>
      <h1 className="mt-2 text-2xl font-semibold text-gray-900">
        KVKK Aydınlatma Metni
      </h1>
      <p className="mt-1 text-sm text-gray-500">Son güncelleme: 30.10.2026</p>

      <div className="mt-6 space-y-4 text-sm leading-relaxed text-gray-800 [&_h2]:mt-6 [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-gray-900 [&_li]:ml-5 [&_li]:list-disc [&_ul]:space-y-1 [&_a]:text-brand-700 [&_a]:underline [&_strong]:font-semibold">
        <p>
          Bu Aydınlatma Metni, 6698 sayılı Kişisel Verilerin Korunması Kanunu
          ("KVKK") m.10 uyarınca, isgmevzuat.tr ("Site") üzerinden sunulan
          Mevzuat Kaynağı ve İSG Mevzuat Uyum Karnesi hizmetleri kapsamında
          işlenen kişisel verileriniz hakkında sizi bilgilendirmek amacıyla
          hazırlanmıştır.
        </p>

        <h2>1. Veri Sorumlusu</h2>
        <p>
          Kişisel verileriniz, veri sorumlusu sıfatıyla <strong>Çağdaş Çalış</strong>{" "}
          (gerçek kişi, kayıtlı bir şirket/şahıs işletmesi unvanı bulunmamaktadır)
          tarafından, aşağıda açıklanan kapsamda işlenmektedir.
        </p>
        <p>
          KVKK kapsamındaki başvurularınızı{" "}
          <a href="mailto:kvkk@isgmevzuat.tr">kvkk@isgmevzuat.tr</a> adresine
          yazılı olarak iletebilirsiniz.
        </p>

        <h2>2. İşlenen Kişisel Veriler</h2>
        <ul>
          <li>
            <strong>Kimlik ve iletişim verileri:</strong> ad-soyad, e-posta
            adresi (hesap oluştururken)
          </li>
          <li>
            <strong>Firma/işyeri verileri:</strong> İSG Mevzuat Uyum Karnesi'ni
            kullanırken girdiğiniz firma unvanı, adresi, yetkili kişi adı,
            telefon, e-posta, vergi numarası, sektör ve NACE kodu bilgileri
          </li>
          <li>
            <strong>Değerlendirme verileri:</strong> karne içinde verdiğiniz
            evet/hayır cevapları, notlar ve risk değerlendirme seçimleriniz
          </li>
          <li>
            <strong>İşlem güvenliği verileri:</strong> hesap erişimi için
            gerekli oturum/kimlik doğrulama bilgileri (barındırma altyapımız
            tarafından otomatik tutulan teknik log kayıtları dahil)
          </li>
        </ul>
        <p>
          Mevzuat Kaynağı bölümü (ILO Sözleşmeleri, Kanunlar, Yönetmelikler,
          Tebliğler listeleri) herkese açıktır ve kullanımı için herhangi bir
          kişisel veri toplanmaz.
        </p>

        <h2>3. Kişisel Verilerin Toplanma Yöntemi ve Hukuki Sebebi</h2>
        <p>
          Verileriniz, Site üzerinden doldurduğunuz kayıt formu ve karne
          değerlendirme ekranları aracılığıyla elektronik ortamda doğrudan
          sizden toplanır. Bu veriler;
        </p>
        <ul>
          <li>bir sözleşmenin kurulması veya ifasıyla doğrudan ilgili olması (KVKK m.5/2-c),</li>
          <li>veri sorumlusunun meşru menfaati için veri işlenmesinin zorunlu olması (KVKK m.5/2-f) ve</li>
          <li>açık rızanızın bulunması (hesap oluştururken onayınızla, KVKK m.5/1)</li>
        </ul>
        <p>hukuki sebeplerine dayanılarak işlenmektedir.</p>

        <h2>4. İşleme Amaçları</h2>
        <ul>
          <li>Hesabınızın oluşturulması ve kimlik doğrulamanın sağlanması</li>
          <li>İSG Mevzuat Uyum Karnesi hizmetinin sunulması ve sonuçlarınızın hesabınızda saklanması</li>
          <li>Hizmetin iyileştirilmesi ve teknik sorunların giderilmesi</li>
          <li>Talep ve şikayetlerinizin değerlendirilmesi</li>
          <li>Yasal yükümlülüklerin yerine getirilmesi</li>
        </ul>

        <h2>5. Kişisel Verilerin Aktarılması</h2>
        <p>
          Site, barındırma (hosting) ve veritabanı altyapısı için yurt dışı
          merkezli bulut hizmeti sağlayıcılarından (ör. Supabase, Vercel)
          yararlanmaktadır. Bu kapsamda verileriniz, yalnızca hizmetin teknik
          olarak sunulabilmesi amacıyla, bu sağlayıcıların sunucularında
          işlenebilir/saklanabilir. Bu aktarım, KVKK'nın yurt dışına veri
          aktarımına ilişkin hükümleri çerçevesinde ve yalnızca hizmetin
          ifası için gerekli ölçüde gerçekleştirilir. Verileriniz, yukarıda
          sayılanlar dışında üçüncü kişilerle paylaşılmaz; yasal zorunluluk
          halleri bu kuralın istisnasıdır.
        </p>

        <h2>6. Saklama Süresi</h2>
        <p>
          Verileriniz, hesabınız aktif olduğu sürece saklanır. Hesabınızı
          silmeniz veya silme talebinde bulunmanız halinde, ilgili veriler
          makul bir süre içinde silinir veya anonim hale getirilir; yasal
          saklama yükümlülüğü bulunan veriler ilgili mevzuatta öngörülen süre
          kadar saklanır.
        </p>

        <h2>7. KVKK m.11 Kapsamındaki Haklarınız</h2>
        <p>İlgili kişi sıfatıyla aşağıdaki haklara sahipsiniz:</p>
        <ul>
          <li>Kişisel verinizin işlenip işlenmediğini öğrenme</li>
          <li>İşlenmişse buna ilişkin bilgi talep etme</li>
          <li>İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme</li>
          <li>Yurt içinde/yurt dışında aktarıldığı üçüncü kişileri bilme</li>
          <li>Eksik/yanlış işlenmişse düzeltilmesini isteme</li>
          <li>KVKK'da öngörülen şartlar çerçevesinde silinmesini/yok edilmesini isteme</li>
          <li>Düzeltme/silme işlemlerinin aktarılan üçüncü kişilere bildirilmesini isteme</li>
          <li>İşlenen verilerin münhasıran otomatik sistemlerle analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme</li>
          <li>Kanuna aykırı işleme nedeniyle zarara uğramanız halinde zararın giderilmesini talep etme</li>
        </ul>
        <p>
          Bu haklarınızı kullanmak için{" "}
          <a href="mailto:kvkk@isgmevzuat.tr">kvkk@isgmevzuat.tr</a> adresine
          başvurabilirsiniz. Talebiniz, niteliğine göre en geç 30 gün içinde
          sonuçlandırılır.
        </p>

        <h2>8. Çerezler</h2>
        <p>
          Site, üyelik girişinizi sürdürebilmeniz için yalnızca teknik olarak
          zorunlu oturum çerezleri kullanır. Reklam veya istatistik amaçlı
          izleme/analitik çerezi kullanılmamaktadır.
        </p>
      </div>
    </main>
  );
}
