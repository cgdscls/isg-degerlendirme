"use client";

import { useState } from "react";
import ReferansYardimcisi from "@/components/ReferansYardimcisi";
import {
  BAGLAYICILIK_SECENEKLERI,
  DEGERLENDIRME_TIPLERI,
  OLASILIK_SECENEKLERI,
  SONUC_SECENEKLERI,
  referansAciklamasi,
} from "@/lib/emm";

const SECIM_SINIFI = "mt-1 w-full rounded-md border border-gray-300 px-2 py-1.5 text-sm";

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

// Değerlendirme tipine göre alanları gösterir: referans risk bölümü yalnızca
// "Risk temelli" seçiliyken görünür. Gizlenen alanlar formda kalır; sunucu,
// risk temelli olmayan sorularda referans risk alanlarını zaten temizler.
export default function EmmAlanlari({ q }: { q?: any }) {
  const [tip, setTip] = useState<string>(q?.degerlendirme_tipi ?? "");
  return (
    <fieldset className="space-y-3 rounded-md border border-gray-200 p-3">
      <legend className="px-1 text-xs font-medium text-gray-600">
        Uyumsuzluk değerlendirmesi (EMM)
      </legend>

      <div className="grid gap-3 sm:grid-cols-2">
        <label className="text-xs text-gray-600">
          Değerlendirme tipi
          <select
            name="degerlendirme_tipi"
            value={tip}
            onChange={(e) => setTip(e.target.value)}
            className={SECIM_SINIFI}
          >
            <option value="">Tanımlanmadı</option>
            {DEGERLENDIRME_TIPLERI.map((s) => (
              <option key={s.deger} value={s.deger}>
                {s.etiket}
              </option>
            ))}
          </select>
        </label>
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

      <div className={tip === "risk" ? "rounded-md bg-gray-50 p-3" : "hidden"}>
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
      {tip === "idari" && (
        <p className="text-[11px] text-gray-500">
          Uyum ve idari düzenleme sorularında referans risk kullanılmaz; yalnızca bağlayıcılık
          kaydedilir.
        </p>
      )}
      {tip === "" && (
        <p className="text-[11px] text-amber-700">
          Değerlendirme tipi seçilmezse kullanıcı "Hayır" dediğinde uyumsuzluk değerlendirmesi
          yapılamaz.
        </p>
      )}
    </fieldset>
  );
}

