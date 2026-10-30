import Link from "next/link";

export const metadata = { title: "Kullanım Koşulları — İSG Mevzuat Kaynağı" };

export default function KullanimKosullariPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-10">
      <Link href="/" className="text-sm text-brand-700">
        ← Ana Sayfa
      </Link>
      <h1 className="mt-2 text-2xl font-semibold text-gray-900">
        Kullanım Koşulları
      </h1>
      <p className="mt-1 text-sm text-gray-500">Son güncelleme: 30.10.2026</p>

      <div className="mt-6 space-y-4 text-sm leading-relaxed text-gray-800 [&_h2]:mt-6 [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-gray-900 [&_li]:ml-5 [&_li]:list-disc [&_ul]:space-y-1 [&_a]:text-brand-700 [&_a]:underline [&_strong]:font-semibold">
        <p>
          Bu Kullanım Koşulları ("Koşullar"), isgmevzuat.tr adresinde ("Site")
          sunulan Mevzuat Kaynağı ve İSG Mevzuat Uyum Karnesi hizmetlerinin
          ("Hizmet") kullanımına ilişkin şartları düzenler. Siteyi kullanarak
          ve/veya hesap oluşturarak bu Koşulları kabul etmiş sayılırsınız.
        </p>

        <h2>1. Hizmetin Tanımı</h2>
        <p>
          <strong>Mevzuat Kaynağı</strong> bölümü (ILO Sözleşmeleri, Kanunlar,
          Yönetmelikler, Tebliğler listeleri), üyelik gerektirmeyen, herkese
          açık ve ücretsiz bir referans bilgi hizmetidir.
        </p>
        <p>
          <strong>İSG Mevzuat Uyum Karnesi</strong> ("Karne"), üyelik
          gerektiren, kullanıcının işyerinin İSG mevzuatına uyumunu
          kendi beyanına dayalı olarak öz-değerlendirmesine imkân veren bir
          araçtır. Karne şu anda ücretsiz sunulmaktadır; işleticinin, ileride
          Karne'nin bir kısmını veya tamamını ücretli bir plana
          dönüştürme hakkı saklıdır. Ücretli bir plana geçiş halinde, mevcut
          kullanıcılara makul bir süre önceden bildirim yapılır.
        </p>

        <h2>2. Hizmetin Niteliği ve Sorumluluk Sınırı</h2>
        <p>
          Karne, bir <strong>öz-değerlendirme aracıdır</strong>; hukuki
          danışmanlık, İSG uzmanlığı hizmeti veya resmî bir denetim/belgelendirme
          süreci yerine geçmez. Sitede yer alan mevzuat listeleri ve sorular
          bilgilendirme amaçlıdır; güncelliği ve eksiksizliği için makul çaba
          gösterilmekle birlikte, bu konuda herhangi bir garanti verilmez.
        </p>
        <p>
          Kullanıcı, işyerinin mevzuata uyumuna ilişkin nihai sorumluluğun
          kendisine ait olduğunu, Hizmet'ten elde ettiği sonuçları resmî bir
          İSG uzmanı/işyeri hekimi veya ilgili mevzuata göre ayrıca teyit
          etmesi gerektiğini kabul eder. İşletici, Hizmet'in kullanımından
          doğrudan veya dolaylı olarak doğabilecek zararlardan, kasıt veya
          ağır ihmal halleri saklı kalmak kaydıyla, sorumlu tutulamaz.
        </p>

        <h2>3. Hesap Oluşturma ve Kullanıcı Yükümlülükleri</h2>
        <ul>
          <li>Kayıt sırasında verdiğiniz bilgilerin doğru ve güncel olmasından siz sorumlusunuz.</li>
          <li>Hesap şifrenizin gizliliğinden ve hesabınız üzerinden gerçekleştirilen işlemlerden siz sorumlusunuz.</li>
          <li>Hesabınızın yetkisiz kullanıldığını fark ederseniz derhal bildirmeniz gerekir.</li>
          <li>Hizmeti hukuka aykırı amaçlarla veya başkalarının haklarını ihlal edecek şekilde kullanamazsınız.</li>
        </ul>

        <h2>4. Fikri Mülkiyet</h2>
        <p>
          Site üzerindeki tasarım, yazılım, soru havuzu ve içeriklerin fikri
          mülkiyet hakları işleticiye aittir. Mevzuat metinlerinin kendisi
          (kanun, yönetmelik, tebliğ metinleri) resmî kaynaklara aittir; Site
          yalnızca bunlara ilişkin bir dizin/erişim listesi sunar.
        </p>

        <h2>5. Ücretlendirme (İleride Uygulanacak Planlar İçin)</h2>
        <p>
          Hizmet'in ücretli bir plana geçmesi halinde, ücret tarifesi, ödeme
          yöntemleri ve iptal/iade koşulları ayrıca Site üzerinde ilan edilir
          ve bu Koşullar'ın eki niteliğinde kabul edilir. Ödeme bilgileri
          (kart bilgisi vb.), işleticinin kendisi tarafından değil, tercih
          edilecek lisanslı bir ödeme kuruluşu aracılığıyla işlenir.
        </p>

        <h2>6. Hizmette Değişiklik ve Kesinti</h2>
        <p>
          İşletici, Hizmet'in içeriğini, kapsamını veya bu Koşullar'ı önceden
          haber vermek suretiyle değiştirme hakkını saklı tutar. Hizmet,
          bakım, teknik arıza veya mücbir sebepler nedeniyle geçici olarak
          kesintiye uğrayabilir; bu durumlardan doğabilecek zararlardan
          işletici sorumlu tutulamaz.
        </p>

        <h2>7. Fesih</h2>
        <p>
          Hesabınızı dilediğiniz zaman kapatabilirsiniz. İşletici, bu
          Koşullar'ın ihlali halinde kullanıcı hesabını askıya alma veya
          sonlandırma hakkını saklı tutar.
        </p>

        <h2>8. Kişisel Veriler</h2>
        <p>
          Kişisel verilerinizin nasıl işlendiği hakkında detaylı bilgi için{" "}
          <Link href="/kvkk">KVKK Aydınlatma Metni</Link>'ni inceleyebilirsiniz.
        </p>

        <h2>9. Uygulanacak Hukuk ve Yetkili Mahkeme</h2>
        <p>
          Bu Koşullar, Türkiye Cumhuriyeti kanunlarına tabidir. Koşullar'dan
          doğabilecek uyuşmazlıklarda Türkiye Cumhuriyeti mahkemeleri ve icra
          daireleri yetkilidir.
        </p>

        <h2>10. İletişim</h2>
        <p>
          Bu Koşullar'a ilişkin sorularınız için{" "}
          <a href="mailto:destek@isgmevzuat.tr">destek@isgmevzuat.tr</a>{" "}
          adresinden bize ulaşabilirsiniz. Kişisel verilerinize ilişkin
          başvurularınız içinse{" "}
          <a href="mailto:kvkk@isgmevzuat.tr">kvkk@isgmevzuat.tr</a> adresini
          kullanınız.
        </p>
      </div>
    </main>
  );
}
