"use client";

import { useState } from "react";

export type KategoriAgaci = { id: string; name: string; altlar: { id: string; name: string }[] }[];

const SINIF =
  "mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm disabled:bg-gray-100 disabled:text-gray-400";

// Üst kategori → alt kategori bağımlı seçim. Form'a "subcategory_id" olarak gider.
export default function KategoriSecimi({
  kategoriler,
  seciliAltKategoriId,
}: {
  kategoriler: KategoriAgaci;
  seciliAltKategoriId?: string | null;
}) {
  const baslangicUst =
    kategoriler.find((k) => k.altlar.some((a) => a.id === seciliAltKategoriId))?.id ?? "";
  const [ustId, setUstId] = useState(baslangicUst);
  const [altId, setAltId] = useState(seciliAltKategoriId ?? "");
  const altlar = kategoriler.find((k) => k.id === ustId)?.altlar ?? [];

  return (
    <div className="grid gap-2 sm:grid-cols-2">
      <label className="text-xs text-gray-600">
        Üst kategori *
        <select
          value={ustId}
          onChange={(e) => {
            setUstId(e.target.value);
            setAltId("");
          }}
          className={SINIF}
        >
          <option value="">Seçiniz</option>
          {kategoriler.map((k) => (
            <option key={k.id} value={k.id}>
              {k.name}
            </option>
          ))}
        </select>
      </label>
      <label className="text-xs text-gray-600">
        Alt kategori *
        <select
          name="subcategory_id"
          required
          value={altId}
          onChange={(e) => setAltId(e.target.value)}
          disabled={!ustId}
          className={SINIF}
        >
          <option value="">{ustId ? "Seçiniz" : "Önce üst kategori seçin"}</option>
          {altlar.map((a) => (
            <option key={a.id} value={a.id}>
              {a.name}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}
