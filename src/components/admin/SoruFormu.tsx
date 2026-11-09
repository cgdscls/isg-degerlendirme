import MevzuatMaddeSelect from "@/components/MevzuatMaddeSelect";
import ReferansYardimcisi from "@/components/ReferansYardimcisi";
import KategoriSecimi, { type KategoriAgaci } from "@/components/admin/KategoriSecimi";
import { soruEkle, soruGuncelle } from "@/lib/soruIslemleri";
import {
  BAGLAYICILIK_SECENEKLERI,
  DEGERLENDIRME_TIPLERI,
  OLASILIK_SECENEKLERI,
  SONUC_SECENEKLERI,
  referansAciklamasi,
} from "@/lib/emm";

const SECIM_SINIFI = "mt-1 w-full rounded-md border border-gray-300 px-2 py-1.5 text-sm";
const ALAN_SINIFI = "w-full rounded-md border border-gray-300 px-3 py-2 text-sm";

function SecimKutusu({
  ad,
  etiket,
  deger,
  secenekler,
  bosEtiket = "—",
}: {
  ad: string;
  etiket: string;
  deger?: string | null;
  secenekler: { deger: string; etiket: string }[];
  bosEtiket?: string;
}) {
  return (
    <label className="text-xs text-gray-600">
      {etiket}
      <select name={ad} defaultValue={deger ?? ""} className={SECIM_SINIFI}>
        <option value="">{bosEtiket}</option>
        {secenekler.map((s) => (
          <option key={s.deger} value={s.deger}>
            {s.etiket}
          </option>
        ))}
      </select>
    </label>
  );
}

function EmmAlanlari({ q }: { q?: any }) {
  return (
    <fieldset className="space-y-3 rounded-md border border-gray-200 p-3">
      <legend className="px-1 text-xs font-medium text-gray-600">
        Uyumsuzluk değerlendirmesi (EMM)
      </legend>

      <div className="grid gap-3 sm:grid-cols-2">
        <SecimKutusu
          ad="degerlendirme_tipi"
          etiket="Değerlendirme tipi"
          deger={q?.degerlendirme_tipi}
          secenekler={DEGERLENDIRME_TIPLERI}
          bosEtiket="Tanımlanmadı"
        />
        <SecimKutusu
          ad="standart_baglayiciligi"
          etiket="Standardın bağlayıcılığı (EMM Tablo 3)"
          deger={q?.standart_baglayiciligi}
          secenekler={BAGLAYICILIK_SECENEKLERI}
          bosEtiket="Tanımlı (varsayılan)"
        />
      </div>
      <ul className="space-y-0.5 text-[11px] leading-snug text-gray-500">
        {BAGLAYICILIK_SECENEKLERI.map((b) => (
          <li key={b.deger}>
            <strong>{b.etiket}:</strong> {b.aciklama}
          </li>
        ))}
      </ul>

      <div className="rounded-md bg-gray-50 p-3">
        <p className="text-xs font-medium text-gray-700">
          Referans risk yardımcısı — yalnızca risk temelli sorular
        </p>
        <p className="mt-0.5 text-[11px] leading-snug text-gray-500">
          Referans risk, gereklilik karşılandığında kalan risktir (EMM par. 35, 44-46). Örn. tornada
          koruyucu: tehlike Ciddi, gereklilik olayı imkânsız kılar → Ciddi – Yok.
        </p>
        <ReferansYardimcisi
          tehlikeSonuc={q?.tehlike_sonuc}
          gereklilikEtkisi={q?.gereklilik_etkisi}
          azaltilmisSonuc={q?.azaltilmis_sonuc}
        />
        <textarea
          name="referans_gerekce"
          defaultValue={q?.referans_gerekce ?? ""}
          rows={2}
          placeholder="Gerekçe: gereklilik neden bu etkiyi yaratıyor? (kullanıcıya da gösterilir)"
          className="mt-2 w-full rounded-md border border-gray-300 px-3 py-2 text-xs"
        />
        {q && (
          <p className="mt-1 text-[11px] text-gray-500">
            Kayıtlı referans risk: {referansAciklamasi(q) ?? "tanımlanmadı"}
          </p>
        )}

        <details className="mt-2">
          <summary className="cursor-pointer text-[11px] text-gray-500">
            Elle referans risk (yardımcı boş bırakılırsa kullanılır)
          </summary>
          <div className="mt-2 grid gap-3 sm:grid-cols-2">
            <SecimKutusu
              ad="referans_sonuc"
              etiket="Referans sonuç"
              deger={q?.referans_sonuc}
              secenekler={SONUC_SECENEKLERI}
            />
            <SecimKutusu
              ad="referans_olasilik"
              etiket="Referans olasılık"
              deger={q?.referans_olasilik}
              secenekler={OLASILIK_SECENEKLERI}
            />
          </div>
        </details>
      </div>
      <p className="text-[11px] text-gray-500">
        Uyum ve idari düzenleme sorularında yalnızca bağlayıcılık kaydedilir; referans risk alanları
        temizlenir.
      </p>
    </fieldset>
  );
}

type MaddeKaynagi =
  | { tur: "sabit"; maddeId: string; etiket: string }
  | {
      tur: "secim";
      mevzuatlar: { id: string; ad: string }[];
      maddeler: { id: string; mevzuat_id: string; madde_no: string; madde_baslik: string | null }[];
      mevzuatId?: string | null;
      maddeId?: string | null;
    };

// Soru ekleme ve düzenleme için ortak form. Mevzuat sayfasında madde sabittir;
// alt kategori ve maddesiz soru sayfalarında madde seçilebilir.
export default function SoruFormu({
  soru,
  kategoriler,
  madde,
  donus,
}: {
  soru?: any;
  kategoriler: KategoriAgaci;
  madde: MaddeKaynagi;
  donus: string;
}) {
  const yeni = !soru;
  return (
    <form action={yeni ? soruEkle : soruGuncelle} className="space-y-3">
      <input type="hidden" name="donus" value={donus} />
      {soru && <input type="hidden" name="id" value={soru.id} />}

      {madde.tur === "sabit" ? (
        <>
          <input type="hidden" name="madde_id" value={madde.maddeId} />
          <p className="text-xs text-gray-500">
            Dayanak: <strong className="text-gray-700">{madde.etiket}</strong>
          </p>
        </>
      ) : (
        <MevzuatMaddeSelect
          mevzuatlar={madde.mevzuatlar}
          maddeler={madde.maddeler}
          initialMevzuatId={madde.mevzuatId ?? undefined}
          initialMaddeId={madde.maddeId ?? undefined}
        />
      )}

      <textarea
        name="text"
        required
        rows={3}
        defaultValue={soru?.text ?? ""}
        placeholder="Soru metni (gereklilik) *"
        className={ALAN_SINIFI}
      />
      <input
        name="beklenen_kanit"
        defaultValue={soru?.beklenen_kanit ?? ""}
        placeholder="Beklenen kanıt / ilgili doküman (opsiyonel)"
        className={ALAN_SINIFI}
      />
      <textarea
        name="guide_note"
        rows={2}
        defaultValue={soru?.guide_note ?? ""}
        placeholder="Yardımcı not / açıklama (opsiyonel)"
        className={ALAN_SINIFI}
      />

      <KategoriSecimi kategoriler={kategoriler} seciliAltKategoriId={soru?.subcategory_id} />
      {soru && (
        <p className="text-[11px] text-gray-500">
          Alt kategoriyi değiştirirsen soru yeni alt kategorinin sonuna taşınır; cevaplar korunur.
        </p>
      )}

      <EmmAlanlari q={soru} />

      <button
        type="submit"
        className={
          yeni
            ? "rounded-md bg-brand-600 px-4 py-2 text-sm font-medium text-white hover:bg-brand-700"
            : "rounded-md bg-gray-900 px-3 py-1.5 text-sm font-medium text-white hover:bg-gray-700"
        }
      >
        {yeni ? "Soruyu Ekle" : "Güncelle"}
      </button>
    </form>
  );
}
