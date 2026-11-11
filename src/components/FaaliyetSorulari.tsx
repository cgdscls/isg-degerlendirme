import type { OnKosulSorusu } from "@/lib/kapsam";

// Firma ekleme ve düzenleme formlarındaki "İşyerinizin faaliyetleri" bölümü.
// Alanlar "onkosul:<tur>:<id>" adıyla gönderilir; onKosulCevaplariniKaydet ile kaydedilir.
export default function FaaliyetSorulari({
  sorular,
  cevaplar = new Map(),
}: {
  sorular: OnKosulSorusu[];
  cevaplar?: Map<string, string>;
}) {
  return (
    <>
          {sorular.length > 0 && (
            <fieldset id="faaliyetler" className="scroll-mt-20 rounded-lg border border-gray-200 bg-white p-4">
              <legend className="px-1 text-sm font-semibold text-gray-900">
                İşyerinizin faaliyetleri
              </legend>
              <p className="text-xs text-gray-500">
                "Hayır" dediğiniz faaliyetlerin soruları otomatik olarak kapsam dışı bırakılır ve
                rapora katılmaz. Emin değilseniz "Bilmiyorum" seçin; alan kapsamda kalır.
                Cevabınızı değiştirdiğinizde önceki cevaplarınız geri gelir.
              </p>
              <div className="mt-3 divide-y divide-gray-100">
                {sorular.map((q) => {
                  const ad = `onkosul:${q.tur}:${q.id}`;
                  const mevcut = cevaplar.get(`${q.tur}:${q.id}`) ?? "";
                  return (
                    <div key={ad} className="py-3">
                      <p className="text-sm text-gray-900">{q.soru}</p>
                      <p className="text-[11px] text-gray-400">{q.ad}</p>
                      {q.aciklama && <p className="mt-1 text-xs text-gray-500">{q.aciklama}</p>}
                      <div className="mt-2 flex flex-wrap gap-2">
                        {[
                          { d: "evet", e: "Evet" },
                          { d: "hayir", e: "Hayır" },
                          { d: "bilmiyorum", e: "Bilmiyorum" },
                        ].map((o) => (
                          <label
                            key={o.d}
                            className="flex cursor-pointer items-center gap-1.5 rounded-md border border-gray-300 px-3 py-1.5 text-sm has-[:checked]:border-brand-600 has-[:checked]:bg-brand-50"
                          >
                            <input type="radio" name={ad} value={o.d} defaultChecked={mevcut === o.d} />
                            {o.e}
                          </label>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </fieldset>
          )}
    </>
  );
}
