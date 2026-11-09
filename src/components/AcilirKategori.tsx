"use client";

import { useEffect, useRef } from "react";

// Firma sayfasında bir üst kategoriyi tek satır olarak gösterir; tıklanınca alt
// kategori kartları açılır. Açık/kapalı durumu tarayıcı oturumunda hatırlanır,
// böylece bir alt kategoriye girip geri dönüldüğünde açık kategoriler kapanmaz.
export default function AcilirKategori({
  depoAnahtari,
  baslik,
  sag,
  children,
}: {
  depoAnahtari: string;
  baslik: React.ReactNode;
  sag?: React.ReactNode;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    try {
      if (window.sessionStorage.getItem(depoAnahtari) === "1" && ref.current) {
        ref.current.open = true;
      }
    } catch {
      // Depolama kullanılamıyorsa kategori kapalı başlar.
    }
  }, [depoAnahtari]);

  return (
    <details
      ref={ref}
      onToggle={(e) => {
        try {
          window.sessionStorage.setItem(depoAnahtari, e.currentTarget.open ? "1" : "0");
        } catch {
          // yoksay
        }
      }}
      className="group rounded-lg border border-gray-200 bg-white shadow-sm"
    >
      <summary className="flex cursor-pointer list-none flex-wrap items-center gap-x-3 gap-y-1 rounded-lg px-4 py-3 hover:bg-gray-50 [&::-webkit-details-marker]:hidden">
        <svg
          aria-hidden="true"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-5 w-5 shrink-0 text-gray-400 transition-transform group-open:rotate-90"
        >
          <path
            fillRule="evenodd"
            d="M7.21 14.77a.75.75 0 0 1 .02-1.06L11.17 10 7.23 6.29a.75.75 0 1 1 1.04-1.08l4.5 4.25a.75.75 0 0 1 0 1.08l-4.5 4.25a.75.75 0 0 1-1.06-.02Z"
            clipRule="evenodd"
          />
        </svg>
        <span className="min-w-0 flex-1 font-semibold text-gray-900">{baslik}</span>
        {sag && <span className="flex items-center gap-2 text-sm">{sag}</span>}
      </summary>
      <div className="border-t border-gray-100 p-4">{children}</div>
    </details>
  );
}
