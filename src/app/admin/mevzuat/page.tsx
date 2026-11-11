import Link from "next/link";
import { requireAdmin } from "@/lib/requireAdmin";
import NavBar from "@/components/NavBar";
import { mevzuatEkle } from "@/lib/mevzuatIslemleri";
import { rgMetni, tumunuGetir } from "@/lib/adminVeri";
import { DAYANAK_TURLERI } from "@/lib/dayanak";

const turkce = new Intl.Collator("tr", { numeric: true, sensitivity: "base" });

export default async function AdminMevzuatPage({
  searchParams,
}: {
  searchParams: { hata?: string; q?: string };
}) {
  const { supabase } = await requireAdmin();

  const [{ data: mevzuatlarHam }, maddeler, sorular] = await Promise.all([
    supabase.from("mevzuatlar").select("id, ad, resmi_gazete_no, resmi_gazete_tarihi, tur"),
    tumunuGetir<{ id: string; mevzuat_id: string }>(() =>
      supabase.from("maddeler").select("id, mevzuat_id").order("id")
    ),
    tumunuGetir<{ id: string; madde_id: string | null }>(() =>
      supabase.from("questions").select("id, madde_id").order("id")
    ),
  ]);

  const soruSayisiMadde = new Map<string, number>();
  let maddesiz = 0;
  sorular.forEach((s) => {
    if (!s.madde_id) maddesiz++;
    else soruSayisiMadde.set(s.madde_id, (soruSayisiMadde.get(s.madde_id) ?? 0) + 1);
  });

  const ozet = new Map<string, { madde: number; soru: number; sorusuz: number }>();
  maddeler.forEach((m) => {
    const o = ozet.get(m.mevzuat_id) ?? { madde: 0, soru: 0, sorusuz: 0 };
    const n = soruSayisiMadde.get(m.id) ?? 0;
    o.madde++;
    o.soru += n;
    if (n === 0) o.sorusuz++;
    ozet.set(m.mevzuat_id, o);
  });

  const arama = (searchParams.q ?? "").trim().toLocaleLowerCase("tr");
  const mevzuatlar = (mevzuatlarHam ?? [])
    .filter((m) => !arama || m.ad.toLocaleLowerCase("tr").includes(arama))
    .sort((a, b) => turkce.compare(a.ad, b.ad));

  return (
    <>
      <NavBar />
      <main className="mx-auto max-w-3xl px-6 py-8">
        <Link href="/admin" className="text-sm text-brand-700">
          ← Yönetime dön
        </Link>
        <h1 className="mt-2 text-2xl font-semibold text-gray-900">Mevzuat / Madde / Soru</h1>
        <p className="mt-1 text-sm text-gray-600">
          Sorular buradan eklenir: mevzuatı aç → maddeyi ekle veya aç → maddenin altına soruyu ekle
          (kategori ve uyumsuzluk değerlendirmesi dahil).
        </p>

        {searchParams.hata && (
          <div className="mt-4 rounded-md border border-red-200 bg-red-50 p-3 text-sm text-red-700">
            {searchParams.hata}
          </div>
        )}

        <details className="mt-6 rounded-lg border border-gray-200 bg-white p-4">
          <summary className="cursor-pointer text-sm font-medium text-gray-900">
            + Yeni mevzuat ekle
          </summary>
          <form action={mevzuatEkle} className="mt-3 grid gap-2 sm:grid-cols-3">
            <input
              name="ad"
              required
              placeholder="Mevzuat adı *"
              className="rounded-md border border-gray-300 px-3 py-2 text-sm sm:col-span-3"
            />
            <select
              name="tur"
              defaultValue={"yasal"}
              className="rounded-md border border-gray-300 bg-white px-3 py-2 text-sm sm:col-span-3"
            >
              {DAYANAK_TURLERI.map((t) => (
                <option key={t.deger} value={t.deger}>
                  Dayanak türü: {t.etiket}
                </option>
              ))}
            </select>
            <input
              name="resmi_gazete_no"
              placeholder="Resmî Gazete No (yasal mevzuat için)"
              className="rounded-md border border-gray-300 px-3 py-2 text-sm"
            />
            <input
              name="resmi_gazete_tarihi"
              type="date"
              className="rounded-md border border-gray-300 px-3 py-2 text-sm"
            />
            <button
              type="submit"
              className="rounded-md bg-brand-600 px-4 py-2 text-sm font-medium text-white hover:bg-brand-700"
            >
              Mevzuat Ekle
            </button>
          </form>
        </details>

        <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <form className="flex flex-1 gap-2">
            <input
              name="q"
              defaultValue={searchParams.q ?? ""}
              placeholder="Mevzuat ara…"
              className="flex-1 rounded-md border border-gray-300 px-3 py-2 text-sm"
            />
            <button
              type="submit"
              className="rounded-md border border-gray-300 bg-white px-3 py-2 text-sm hover:bg-gray-50"
            >
              Ara
            </button>
          </form>
          <Link
            href="/admin/mevzuat/maddesiz"
            className={`text-sm font-medium hover:underline ${
              maddesiz > 0 ? "text-amber-700" : "text-gray-500"
            }`}
          >
            Maddesi olmayan sorular ({maddesiz}) →
          </Link>
        </div>

        <ul className="mt-4 divide-y divide-gray-100 rounded-lg border border-gray-200 bg-white">
          {mevzuatlar.map((mv) => {
            const o = ozet.get(mv.id) ?? { madde: 0, soru: 0, sorusuz: 0 };
            const rg = rgMetni(mv.resmi_gazete_no, mv.resmi_gazete_tarihi);
            return (
              <li key={mv.id}>
                <Link
                  href={`/admin/mevzuat/${mv.id}`}
                  className="flex items-center justify-between gap-3 px-4 py-3 hover:bg-gray-50"
                >
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-gray-900">
                      {mv.ad}
                      {mv.tur === "iyi_uygulama" && (
                        <span className="ml-2 rounded-full bg-violet-100 px-2 py-0.5 text-xs font-medium text-violet-800">
                          İyi uygulama
                        </span>
                      )}
                    </p>
                    <p className="mt-0.5 text-xs text-gray-500">
                      {rg ? `${rg} · ` : ""}
                      {o.madde} madde · {o.soru} soru
                      {o.sorusuz > 0 && (
                        <span className="ml-1 rounded-full bg-amber-100 px-2 py-0.5 text-amber-800">
                          {o.sorusuz} madde sorusuz
                        </span>
                      )}
                    </p>
                  </div>
                  <span aria-hidden className="text-gray-400">
                    ›
                  </span>
                </Link>
              </li>
            );
          })}
          {mevzuatlar.length === 0 && (
            <li className="px-4 py-6 text-center text-sm text-gray-500">
              {arama ? "Aramaya uyan mevzuat yok." : "Henüz mevzuat eklenmedi."}
            </li>
          )}
        </ul>
      </main>
    </>
  );
}
