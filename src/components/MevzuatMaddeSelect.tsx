"use client";

import { useMemo, useState } from "react";

type Mevzuat = { id: string; ad: string };
type Madde = { id: string; mevzuat_id: string; madde_no: string; madde_baslik: string | null };

export default function MevzuatMaddeSelect({
  mevzuatlar,
  maddeler,
  initialMevzuatId,
  initialMaddeId,
}: {
  mevzuatlar: Mevzuat[];
  maddeler: Madde[];
  initialMevzuatId?: string;
  initialMaddeId?: string;
}) {
  const [mevzuatId, setMevzuatId] = useState(initialMevzuatId ?? "");

  const filtered = useMemo(
    () => maddeler.filter((m) => m.mevzuat_id === mevzuatId),
    [maddeler, mevzuatId]
  );

  return (
    <div className="grid gap-2 sm:grid-cols-2">
      <div>
        <label className="mb-1 block text-xs text-gray-600">Mevzuat</label>
        <select
          value={mevzuatId}
          onChange={(e) => setMevzuatId(e.target.value)}
          className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
        >
          <option value="">Mevzuat seçiniz (opsiyonel)</option>
          {mevzuatlar.map((mv) => (
            <option key={mv.id} value={mv.id}>
              {mv.ad}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="mb-1 block text-xs text-gray-600">Madde</label>
        <select
          name="madde_id"
          defaultValue={initialMaddeId ?? ""}
          disabled={!mevzuatId}
          className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm disabled:bg-gray-100"
        >
          <option value="">Madde seçiniz</option>
          {filtered.map((m) => (
            <option key={m.id} value={m.id}>
              {m.madde_no}
              {m.madde_baslik ? ` — ${m.madde_baslik}` : ""}
            </option>
          ))}
        </select>
        {mevzuatId && filtered.length === 0 && (
          <p className="mt-1 text-xs text-amber-600">
            Bu mevzuatın henüz maddesi yok — önce Mevzuat/Madde sayfasından ekle.
          </p>
        )}
      </div>
    </div>
  );
}
