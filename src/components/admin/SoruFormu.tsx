import MevzuatMaddeSelect from "@/components/MevzuatMaddeSelect";
import KategoriSecimi, { type KategoriAgaci } from "@/components/admin/KategoriSecimi";
import { soruEkle, soruGuncelle } from "@/lib/soruIslemleri";
import EmmAlanlari from "@/components/admin/EmmAlanlari";

const ALAN_SINIFI = "w-full rounded-md border border-gray-300 px-3 py-2 text-sm";

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
