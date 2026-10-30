"use client";

import { useMemo, useState } from "react";
import { MevzuatKategori, MevzuatKaynagiKayit, tarihGoster } from "@/lib/mevzuatKaynagi";

function WordIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <rect width="24" height="24" rx="3" fill="#2B579A" />
      <text x="12" y="16" textAnchor="middle" fontSize="10" fontWeight="700" fill="#fff">
        W
      </text>
    </svg>
  );
}

function PdfIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <rect width="24" height="24" rx="3" fill="#C62828" />
      <text x="12" y="16" textAnchor="middle" fontSize="8" fontWeight="700" fill="#fff">
        PDF
      </text>
    </svg>
  );
}

type SortYon = "asc" | "desc";

export default function MevzuatKaynagiTablosu({
  kategori,
  kayitlar,
}: {
  kategori: MevzuatKategori;
  kayitlar: MevzuatKaynagiKayit[];
}) {
  const [arama, setArama] = useState("");
  const [siralaAlan, setSiralaAlan] = useState<string>("ad");
  const [siralaYon, setSiralaYon] = useState<SortYon>("asc");

  function basligaTikla(alan: string) {
    if (siralaAlan === alan) {
      setSiralaYon(siralaYon === "asc" ? "desc" : "asc");
    } else {
      setSiralaAlan(alan);
      setSiralaYon("asc");
    }
  }

  const filtreliSirali = useMemo(() => {
    const q = arama.trim().toLocaleLowerCase("tr");
    let liste = kayitlar;
    if (q) {
      liste = liste.filter((k) =>
        [k.ad, k.sozlesme_no, k.kanun_no]
          .filter(Boolean)
          .some((v) => String(v).toLocaleLowerCase("tr").includes(q))
      );
    }
    const kopya = [...liste];
    kopya.sort((a: any, b: any) => {
      const av = a[siralaAlan] ?? "";
      const bv = b[siralaAlan] ?? "";
      const cmp = String(av).localeCompare(String(bv), "tr");
      return siralaYon === "asc" ? cmp : -cmp;
    });
    return kopya;
  }, [kayitlar, arama, siralaAlan, siralaYon]);

  const ok = (alan: string) => (siralaAlan === alan ? (siralaYon === "asc" ? " ▲" : " ▼") : " ⇅");

  const thSinif =
    "cursor-pointer select-none whitespace-nowrap px-3 py-2 text-left text-sm font-semibold text-gray-700 hover:bg-gray-100";

  // "no results" satırının colSpan'ı kategoriye göre değişen sütun sayısına uysun
  const sutunSayisi =
    (kategori === "ilo_sozlesmesi" ? 1 : 0) + // Sözleşme No
    1 + // Ad
    (kategori === "kanun" ? 1 : 0) + // Kanun No
    2 + // iki tarih sütunu (her kategori için)
    1; // Erişim

  return (
    <div>
      <div className="mb-3 flex justify-end">
        <input
          value={arama}
          onChange={(e) => setArama(e.target.value)}
          placeholder="Bul..."
          className="w-full max-w-xs rounded-md border border-gray-300 px-3 py-2 text-sm sm:w-64"
        />
      </div>

      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200 bg-white">
          <thead className="bg-gray-50">
            <tr>
              {kategori === "ilo_sozlesmesi" && (
                <th className={thSinif} onClick={() => basligaTikla("sozlesme_no")}>
                  Sözleşme No{ok("sozlesme_no")}
                </th>
              )}
              <th className={thSinif} onClick={() => basligaTikla("ad")}>
                {kategori === "ilo_sozlesmesi" ? "Sözleşme Adı" : "Adı"}
                {ok("ad")}
              </th>
              {kategori === "kanun" && (
                <th className={thSinif} onClick={() => basligaTikla("kanun_no")}>
                  Kanun No{ok("kanun_no")}
                </th>
              )}
              {kategori === "ilo_sozlesmesi" ? (
                <>
                  <th className={thSinif} onClick={() => basligaTikla("ilo_kabul_tarihi")}>
                    ILO Kabul Tarihi{ok("ilo_kabul_tarihi")}
                  </th>
                  <th className={thSinif} onClick={() => basligaTikla("kabul_rg_tarihi")}>
                    Resmî Gazete (Tarih / Sayı){ok("kabul_rg_tarihi")}
                  </th>
                  <th className={thSinif} onClick={() => basligaTikla("yururluk_tarihi")}>
                    Yürürlüğe Giriş Tarihi{ok("yururluk_tarihi")}
                  </th>
                </>
              ) : (
                <>
                  <th className={thSinif} onClick={() => basligaTikla("kabul_rg_tarihi")}>
                    Kabul RG (Tarih / Sayı){ok("kabul_rg_tarihi")}
                  </th>
                  <th className={thSinif} onClick={() => basligaTikla("degisiklik_rg_tarihi")}>
                    Değişiklik RG (Tarih – Sayı){ok("degisiklik_rg_tarihi")}
                  </th>
                </>
              )}
              <th className="whitespace-nowrap px-3 py-2 text-left text-sm font-semibold text-gray-700">
                Erişim
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {filtreliSirali.map((k) => (
              <tr key={k.id} className="hover:bg-gray-50">
                {kategori === "ilo_sozlesmesi" && (
                  <td className="whitespace-nowrap px-3 py-2 text-sm text-gray-700">
                    {k.sozlesme_no ?? "—"}
                  </td>
                )}
                <td className="px-3 py-2 text-sm font-medium text-gray-900">{k.ad}</td>
                {kategori === "kanun" && (
                  <td className="whitespace-nowrap px-3 py-2 text-sm text-gray-700">
                    {k.kanun_no ?? "—"}
                  </td>
                )}
                {kategori === "ilo_sozlesmesi" ? (
                  <>
                    <td className="whitespace-nowrap px-3 py-2 text-sm text-gray-700">
                      {tarihGoster(k.ilo_kabul_tarihi) ?? "—"}
                    </td>
                    <td className="whitespace-nowrap px-3 py-2 text-sm text-gray-700">
                      {tarihGoster(k.kabul_rg_tarihi) ?? "—"}
                      {k.kabul_rg_no ? ` / ${k.kabul_rg_no}` : ""}
                    </td>
                    <td className="whitespace-nowrap px-3 py-2 text-sm text-gray-700">
                      {tarihGoster(k.yururluk_tarihi) ?? "—"}
                    </td>
                  </>
                ) : (
                  <>
                    <td className="whitespace-nowrap px-3 py-2 text-sm text-gray-700">
                      {tarihGoster(k.kabul_rg_tarihi) ?? "—"}
                      {k.kabul_rg_no ? ` / ${k.kabul_rg_no}` : ""}
                    </td>
                    <td className="whitespace-nowrap px-3 py-2 text-sm text-gray-700">
                      {k.degisiklik_rg_tarihi || k.degisiklik_rg_no
                        ? `${tarihGoster(k.degisiklik_rg_tarihi) ?? ""}${
                            k.degisiklik_rg_no ? ` – ${k.degisiklik_rg_no}` : ""
                          }`
                        : "—"}
                    </td>
                  </>
                )}
                <td className="whitespace-nowrap px-3 py-2">
                  <div className="flex items-center gap-3">
                    {k.mbs_link && (
                      <a
                        href={k.mbs_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-brand-700 hover:underline"
                      >
                        MBS Link
                      </a>
                    )}
                    {k.word_link && (
                      <a
                        href={k.word_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Word olarak indir"
                      >
                        <WordIcon />
                      </a>
                    )}
                    {k.pdf_link && (
                      <a
                        href={k.pdf_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="PDF olarak indir"
                      >
                        <PdfIcon />
                      </a>
                    )}
                    {k.kaysis_link && (
                      <a
                        href={k.kaysis_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-brand-700 hover:underline"
                      >
                        KAYSİS
                      </a>
                    )}
                    {!k.mbs_link && !k.word_link && !k.pdf_link && !k.kaysis_link && (
                      <span className="text-sm text-gray-400">—</span>
                    )}
                  </div>
                </td>
              </tr>
            ))}
            {filtreliSirali.length === 0 && (
              <tr>
                <td colSpan={sutunSayisi} className="px-3 py-6 text-center text-sm text-gray-500">
                  Kayıt bulunamadı.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
