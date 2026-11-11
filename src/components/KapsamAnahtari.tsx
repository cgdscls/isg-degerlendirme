"use client";

import { useRef, useState } from "react";

// Alt kategori kartındaki "Kapsamda / Kapsam dışı" anahtarı.
// Kapsam dışı bırakırken isteğe bağlı gerekçe sorulur; kapsama alırken onay istenir.
export default function KapsamAnahtari({
  altAdi,
  kapsamDisi,
  birakAction,
  alAction,
  kilitliHref,
}: {
  altAdi: string;
  kapsamDisi: boolean;
  // Firma bilgisindeki ön koşul cevabından geliyorsa anahtar kilitlidir;
  // değiştirmek için firma bilgisine yönlendirilir.
  kilitliHref?: string | null;
  birakAction: (formData: FormData) => void | Promise<void>;
  alAction: (formData: FormData) => void | Promise<void>;
}) {
  const [formAcik, setFormAcik] = useState(false);
  const [bekliyor, setBekliyor] = useState(false);
  const alForm = useRef<HTMLFormElement>(null);
  const kapsamda = !kapsamDisi;

  if (kilitliHref) {
    return (
      <div className="flex shrink-0 flex-col items-end text-right">
        <span className="flex items-center gap-2 text-xs font-medium text-gray-400">
          Kapsam dışı
          <span aria-hidden className="relative inline-block h-5 w-9 rounded-full bg-gray-200">
            <span className="absolute left-0.5 top-0.5 h-4 w-4 rounded-full bg-white shadow" />
          </span>
        </span>
        <a href={kilitliHref} className="mt-1 text-[11px] text-brand-700 underline">
          Firma bilgisinden değiştir
        </a>
      </div>
    );
  }

  function tikla() {
    if (bekliyor) return;
    if (kapsamda) {
      setFormAcik((v) => !v);
      return;
    }
    if (
      window.confirm(
        `"${altAdi}" yeniden kapsama alınsın mı? Bu alandaki sorular değerlendirmeye ve rapora tekrar katılır; daha önce verdiğiniz cevaplar korunur.`
      )
    ) {
      setBekliyor(true);
      alForm.current?.requestSubmit();
    }
  }

  return (
    <div className="flex shrink-0 flex-col items-end">
      <button
        type="button"
        role="switch"
        aria-checked={kapsamda}
        aria-label={`${altAdi}: ${kapsamda ? "kapsamda" : "kapsam dışı"}`}
        onClick={tikla}
        disabled={bekliyor}
        className="flex items-center gap-2 rounded-full px-1 py-1 text-xs font-medium text-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-500 disabled:opacity-50"
      >
        <span className={kapsamda ? "text-gray-700" : "text-gray-400"}>
          {kapsamda ? "Kapsamda" : "Kapsam dışı"}
        </span>
        <span
          aria-hidden
          className={`relative inline-block h-5 w-9 rounded-full transition-colors ${
            kapsamda ? "bg-brand-600" : "bg-gray-300"
          }`}
        >
          <span
            className={`absolute top-0.5 h-4 w-4 rounded-full bg-white shadow transition-all ${
              kapsamda ? "left-[1.125rem]" : "left-0.5"
            }`}
          />
        </span>
      </button>

      <form ref={alForm} action={alAction} className="hidden" />

      {kapsamda && formAcik && (
        <form
          action={async (fd) => {
            setBekliyor(true);
            await birakAction(fd);
            setBekliyor(false);
            setFormAcik(false);
          }}
          className="mt-2 w-64 max-w-[80vw] rounded-md border border-gray-200 bg-white p-3 text-left shadow-md"
        >
          <p className="text-xs text-gray-700">
            Bu alan işyeriniz için kapsam dışı bırakılacak. Cevaplarınız silinmez; daha sonra
            tekrar kapsama alabilirsiniz.
          </p>
          <input
            name="gerekce"
            maxLength={300}
            placeholder="Gerekçe (opsiyonel), örn. yıkım işi yapılmıyor"
            className="mt-2 w-full rounded-md border border-gray-300 px-2 py-1.5 text-xs"
          />
          <div className="mt-2 flex justify-end gap-2">
            <button
              type="button"
              onClick={() => setFormAcik(false)}
              className="rounded-md px-2 py-1 text-xs text-gray-600 hover:bg-gray-100"
            >
              Vazgeç
            </button>
            <button
              type="submit"
              disabled={bekliyor}
              className="rounded-md bg-gray-900 px-2.5 py-1 text-xs font-medium text-white hover:bg-gray-700 disabled:opacity-50"
            >
              Kapsam dışı bırak
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
