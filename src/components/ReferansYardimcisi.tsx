"use client";

import { useState } from "react";
import {
  GEREKLILIK_ETKISI_SECENEKLERI,
  SONUC_SECENEKLERI,
  referansAciklamasi,
} from "@/lib/emm";

const SECIM_SINIFI =
  "mt-1 w-full rounded-md border border-gray-300 px-2 py-1.5 text-sm disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-400";

// Admin soru formundaki referans risk yardımcısı (EMM paragraf 44-46).
// "Azaltılmış sonuç" yalnızca sonucu azaltan etkilerde aktiftir; devre dışı
// bir select form ile gönderilmez, sunucu da bu durumda alanı temizler.
export default function ReferansYardimcisi({
  tehlikeSonuc,
  gereklilikEtkisi,
  azaltilmisSonuc,
}: {
  tehlikeSonuc?: string | null;
  gereklilikEtkisi?: string | null;
  azaltilmisSonuc?: string | null;
}) {
  const [tehlike, setTehlike] = useState(tehlikeSonuc ?? "");
  const [etki, setEtki] = useState(gereklilikEtkisi ?? "");
  const [azaltilmis, setAzaltilmis] = useState(azaltilmisSonuc ?? "");

  const azaltilmisAktif = etki === "sonuc_azaltir" || etki === "ikisi";
  const onizleme = referansAciklamasi({
    tehlike_sonuc: tehlike || null,
    gereklilik_etkisi: etki || null,
    azaltilmis_sonuc: azaltilmisAktif ? azaltilmis || null : null,
  });

  return (
    <>
      <div className="mt-2 grid gap-3 sm:grid-cols-3">
        <label className="text-xs text-gray-600">
          Tehlikenin gerçekçi en kötü sonucu
          <select
            name="tehlike_sonuc"
            value={tehlike}
            onChange={(e) => setTehlike(e.target.value)}
            className={SECIM_SINIFI}
          >
            <option value="">—</option>
            {SONUC_SECENEKLERI.map((s) => (
              <option key={s.deger} value={s.deger}>
                {s.etiket}
              </option>
            ))}
          </select>
        </label>
        <label className="text-xs text-gray-600">
          Gereklilik tam uygulandığında ne olur?
          <select
            name="gereklilik_etkisi"
            value={etki}
            onChange={(e) => setEtki(e.target.value)}
            className={SECIM_SINIFI}
          >
            <option value="">—</option>
            {GEREKLILIK_ETKISI_SECENEKLERI.map((g) => (
              <option key={g.deger} value={g.deger}>
                {g.etiket}
              </option>
            ))}
          </select>
        </label>
        <label className={`text-xs ${azaltilmisAktif ? "text-gray-600" : "text-gray-400"}`}>
          Azaltılmış sonuç
          <select
            name="azaltilmis_sonuc"
            value={azaltilmisAktif ? azaltilmis : ""}
            onChange={(e) => setAzaltilmis(e.target.value)}
            disabled={!azaltilmisAktif}
            className={SECIM_SINIFI}
          >
            <option value="">{azaltilmisAktif ? "Bir kademe aşağı (varsayılan)" : "Bu seçimde kullanılmaz"}</option>
            {SONUC_SECENEKLERI.map((s) => (
              <option key={s.deger} value={s.deger}>
                {s.etiket}
              </option>
            ))}
          </select>
        </label>
      </div>

      <p className="mt-2 text-[11px] font-medium leading-snug text-gray-600">
        Seçimi önlemin türüne göre değil, tam uygulandığında yarattığı sonuca göre yapın. Örn. bir
        prosedür de (enerjinin kesilip topraklanması gibi) olayı tamamen imkânsız kılabilir.
      </p>
      <ul className="mt-1 space-y-0.5 text-[11px] leading-snug text-gray-500">
        {GEREKLILIK_ETKISI_SECENEKLERI.map((g) => (
          <li key={g.deger} className={g.deger === etki ? "text-gray-800" : undefined}>
            <strong>{g.etiket}:</strong> {g.aciklama}
          </li>
        ))}
      </ul>

      <p className="mt-2 text-xs text-gray-600">
        Bu seçimlerle referans risk: <strong>{onizleme ?? "seçimleri tamamlayın"}</strong>
      </p>
    </>
  );
}
