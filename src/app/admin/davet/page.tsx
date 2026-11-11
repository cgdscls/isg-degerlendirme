import Link from "next/link";
import { requireAdmin } from "@/lib/requireAdmin";
import NavBar from "@/components/NavBar";
import OnayliSilForm from "@/components/OnayliSilForm";
import KopyalaDugmesi from "@/components/admin/KopyalaDugmesi";
import { davetAyariDegistir, davetKoduSil, davetKoduUret } from "@/lib/davetIslemleri";
import { tarihTr } from "@/lib/kapsam";

// Kodu okunaklı gösterir: K7Q2M9XP → K7Q2-M9XP
const goster = (k: string) => (k.length === 8 ? `${k.slice(0, 4)}-${k.slice(4)}` : k);

export default async function AdminDavetPage({
  searchParams,
}: {
  searchParams: { hata?: string; yeni?: string };
}) {
  const { supabase } = await requireAdmin();

  const [{ data: ayar }, { data: kodlar }, { data: profiller }] = await Promise.all([
    supabase.from("uygulama_ayarlari").select("davet_kodu_gerekli").eq("id", 1).maybeSingle(),
    supabase
      .from("davet_kodlari")
      .select("kod, aciklama, email, created_at, kullanildi_at, kullanan")
      .order("created_at", { ascending: false }),
    supabase.from("profiles").select("id, full_name"),
  ]);
  const gerekli = ayar?.davet_kodu_gerekli !== false;
  const adSoyad = new Map((profiller ?? []).map((p: any) => [p.id, p.full_name]));
  const yeniKodlar = (searchParams.yeni ?? "").split(",").filter(Boolean);
  const kullanilmamis = (kodlar ?? []).filter((k: any) => !k.kullanildi_at).length;

  return (
    <>
      <NavBar />
      <main className="mx-auto max-w-3xl px-6 py-8">
        <Link href="/admin" className="text-sm text-brand-700">
          ← Yönetime dön
        </Link>
        <h1 className="mt-2 text-2xl font-semibold text-gray-900">Davet kodları</h1>
        <p className="mt-1 text-sm text-gray-600">
          Test döneminde yalnızca davet koduyla kayıt olunabilir. Her kod tek bir kayıt için
          geçerlidir; kullanıldıktan sonra bir daha kullanılamaz.
        </p>

        {searchParams.hata && (
          <div className="mt-4 rounded-md border border-red-200 bg-red-50 p-3 text-sm text-red-700">
            {searchParams.hata}
          </div>
        )}

        <div
          className={`mt-4 flex flex-wrap items-center justify-between gap-3 rounded-lg border p-4 ${
            gerekli ? "border-brand-200 bg-brand-50" : "border-amber-200 bg-amber-50"
          }`}
        >
          <p className="text-sm text-gray-800">
            Davet kodu gerekli: <strong>{gerekli ? "Açık" : "Kapalı"}</strong>
            <span className="block text-xs text-gray-600">
              {gerekli
                ? "Kod olmadan kimse kayıt olamaz."
                : "Kayıt herkese açık; davet kodu alanı kayıt formunda görünmez."}
            </span>
          </p>
          <OnayliSilForm
            action={davetAyariDegistir.bind(null, !gerekli)}
            confirmMesaji={
              gerekli
                ? "Davet kodu zorunluluğu kapatılacak ve kayıt herkese açılacak. Devam edilsin mi?"
                : "Davet kodu zorunluluğu açılacak; yeni kayıtlar kod gerektirecek. Devam edilsin mi?"
            }
            butonMetni={gerekli ? "Kaydı herkese aç" : "Davet kodunu zorunlu yap"}
            className="rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-800 hover:bg-gray-50"
          />
        </div>

        {yeniKodlar.length > 0 && (
          <div className="mt-4 rounded-lg border border-green-200 bg-green-50 p-4">
            <p className="text-sm font-medium text-green-900">
              {yeniKodlar.length === 1 ? "Yeni kod üretildi:" : `${yeniKodlar.length} yeni kod üretildi:`}
            </p>
            <ul className="mt-2 space-y-1">
              {yeniKodlar.map((k) => (
                <li key={k} className="flex items-center gap-3">
                  <span className="font-mono text-lg tracking-wider text-green-900">{goster(k)}</span>
                  <KopyalaDugmesi metin={goster(k)} />
                </li>
              ))}
            </ul>
          </div>
        )}

        <form
          action={davetKoduUret}
          className="mt-4 grid gap-2 rounded-lg border border-gray-200 bg-white p-4 sm:grid-cols-[1fr_1fr_5rem_auto]"
        >
          <input
            name="aciklama"
            placeholder="Kime verildi (ör. Ahmet Yılmaz, X OSGB)"
            className="rounded-md border border-gray-300 px-3 py-2 text-sm"
          />
          <input
            name="email"
            type="email"
            placeholder="E-posta (opsiyonel, koda bağlar)"
            className="rounded-md border border-gray-300 px-3 py-2 text-sm"
          />
          <input
            name="adet"
            type="number"
            min={1}
            max={20}
            defaultValue={1}
            title="Adet (e-posta girilirse 1)"
            className="rounded-md border border-gray-300 px-3 py-2 text-sm"
          />
          <button
            type="submit"
            className="rounded-md bg-brand-600 px-4 py-2 text-sm font-medium text-white hover:bg-brand-700"
          >
            Kod üret
          </button>
          <p className="text-xs text-gray-500 sm:col-span-4">
            E-posta girersen kod yalnızca o adresle kullanılabilir; kodun başkasına iletilmesini
            önler.
          </p>
        </form>

        <h2 className="mt-8 text-sm font-semibold text-gray-900">
          Kodlar ({(kodlar ?? []).length}, kullanılmamış {kullanilmamis})
        </h2>
        <div className="mt-2 overflow-x-auto rounded-lg border border-gray-200 bg-white">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-50 text-xs text-gray-500">
              <tr>
                <th className="px-3 py-2 font-medium">Kod</th>
                <th className="px-3 py-2 font-medium">Kime</th>
                <th className="px-3 py-2 font-medium">Durum</th>
                <th className="px-3 py-2" />
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {(kodlar ?? []).map((k: any) => (
                <tr key={k.kod} className={k.kullanildi_at ? "text-gray-400" : ""}>
                  <td className="whitespace-nowrap px-3 py-2 font-mono tracking-wider">{goster(k.kod)}</td>
                  <td className="px-3 py-2">
                    {k.aciklama || "—"}
                    {k.email && <span className="block text-xs text-gray-500">{k.email}</span>}
                  </td>
                  <td className="px-3 py-2 text-xs">
                    {k.kullanildi_at ? (
                      <>
                        Kullanıldı · {tarihTr(k.kullanildi_at)}
                        {k.kullanan && adSoyad.get(k.kullanan) && (
                          <span className="block">{adSoyad.get(k.kullanan)}</span>
                        )}
                      </>
                    ) : (
                      <span className="text-green-700">Kullanılmadı · {tarihTr(k.created_at)}</span>
                    )}
                  </td>
                  <td className="whitespace-nowrap px-3 py-2 text-right">
                    {!k.kullanildi_at && (
                      <span className="flex justify-end gap-2">
                        <KopyalaDugmesi metin={goster(k.kod)} />
                        <OnayliSilForm
                          action={davetKoduSil.bind(null, k.kod)}
                          confirmMesaji="Bu davet kodu iptal edilecek. Devam edilsin mi?"
                          butonMetni="İptal"
                          className="rounded-md px-2 py-1 text-xs text-red-600 hover:bg-red-50"
                        />
                      </span>
                    )}
                  </td>
                </tr>
              ))}
              {(kodlar ?? []).length === 0 && (
                <tr>
                  <td colSpan={4} className="px-3 py-6 text-center text-gray-500">
                    Henüz kod üretilmedi.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
}
