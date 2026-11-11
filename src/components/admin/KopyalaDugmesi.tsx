"use client";

import { useState } from "react";

export default function KopyalaDugmesi({ metin }: { metin: string }) {
  const [kopyalandi, setKopyalandi] = useState(false);
  return (
    <button
      type="button"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(metin);
          setKopyalandi(true);
          setTimeout(() => setKopyalandi(false), 1500);
        } catch {
          // Pano erişimi yoksa kullanıcı kodu elle seçer.
        }
      }}
      className="rounded-md border border-gray-300 px-2 py-1 text-xs text-gray-700 hover:bg-gray-50"
    >
      {kopyalandi ? "Kopyalandı" : "Kopyala"}
    </button>
  );
}
