import Link from "next/link";
import { notFound } from "next/navigation";
import { requireAdmin } from "@/lib/requireAdmin";
import NavBar from "@/components/NavBar";
import OnayliSilForm from "@/components/OnayliSilForm";
import SoruFormu from "@/components/admin/SoruFormu";
import { maddeleriSirala } from "@/lib/maddeSiralama";
import { SORU_ALANLARI, emmEtiketi, kategoriAgaciGetir, rgMetni } from "@/lib/adminVeri";
import { baglayicilikBilgi } from "@/lib/emm";
import { maddeEkle, maddeGuncelle, maddeSil, mevzuatGuncelle, mevzuatSil } from "@/lib/mevzuatIslemleri";
import { soruSil } from "@/lib/soruIslemleri";

type Madde = { id: string; madde_no: string; madde_baslik: string | null };

export default async function MevzuatDetayPage({
  params,
  searchParams,
}: {
  params: { mevzuatId: string };
  searchParams: { hata?: string; acik?: string; soru?: string; filtre?: string };
}) {
  const { supabase } = await requireAdmin();

  const { data: mevzuat } = await supabase
    .from("mevzuatlar")
    .select("id, ad, resmi_gazete_no, resmi_gazete_tarihi")
    .eq("id", params.mevzuatId)
    .single();
  if (!mevzuat) notFound();

  const [{ data: maddelerHam }, kategoriler] = await Promise.all([
    supabase.from("maddeler").select("id, madde_no, madde_baslik").eq("mevzuat_id", mevzuat.id),
    kategoriAgaciGetir(supabase),
  ]);
  const maddeler = maddeleriSirala((maddelerHam ?? []) as Madde[]);

  const maddeIdleri = maddeler.map((m) => m.id);
  const { data: sorularHam } = maddeIdleri.length
    ? await supabase
        .from("questions")
        .select(SORU_ALANLARI)
        .in("madde_id", maddeIdleri)
        .order("sort_order")
    : { data: [] as any[] };

  const sorularMadde = new Map<string, any[]>();
  (sorularHam ?? []).forEach((s: any) => {
    const l = sorularMadde.get(s.madde_id) ?? [];
    l.push(s);
    sorularMadde.set(s.madde_id, l);
  });

  const altKategoriAdi = new Map<string, string>();
  kategoriler.forEach((k) => k.altlar.forEach((a) => altKategoriAdi.set(a.id, `${k.name} / ${a.name}`)));

  const sorusuzSayisi = maddeler.filter((m) => !sorularMadde.has(m.id)).length;
  const filtre = searchParams.filtre === "sorusuz" ? "sorusuz" : "";
  const acik = searchParams.acik ?? "";
  // Filtrede açık madde, soru eklendikten sonra da görünür kalır.
  const gosterilen = filtre
    ? maddeler.filter((m) => !sorularMadde.has(m.id) || m.id === acik)
    : maddeler;
  const toplamSoru = (sorularHam ?? []).length;

  const temelYol = `/admin/mevzuat/${mevzuat.id}`;
  const yol = (ek: Record<string, string>) => {
    const p = new URLSearchParams({ ...(filtre ? { filtre } : {}), ...ek });
    const s = p.toString();
    return s ? `${temelYol}?${s}` : temelYol;
  };
  const rg = rgMetni(mevzuat.resmi_gazete_no, mevzuat.resmi_gazete_tarihi);

  return (
    <>
      <NavBar />
      <main className="mx-auto max-w-3xl px-6 py-8">
        <Link href="/admin/mevzuat" className="text-sm text-brand-700">
          ← Mevzuat listesi
        </Link>
        <h1 className="mt-2 text-2xl font-semibold text-gray-900">{mevzuat.ad}</h1>
        <p className="mt-1 text-sm text-gray-500">
          {rg ? `${rg} · ` : ""}
          {maddeler.length} madde · {toplamSoru} soru
        </p>

        {searchParams.hata && (
          <div className="mt-4 rounded-md border border-red-200 bg-red-50 p-3 text-sm text-red-700">
            {searchParams.hata}
          </div>
        )}

        <details className="mt-4 rounded-lg border border-gray-200 bg-white p-4">
          <summary className="cursor-pointer text-sm text-gray-700">Mevzuat bilgilerini düzenle</summary>
          <form action={mevzuatGuncelle} className="mt-3 grid gap-2 sm:grid-cols-3">
            <input type="hidden" name="id" value={mevzuat.id} />
            <input
              name="ad"
              required
              defaultValue={mevzuat.ad}
              className="rounded-md border border-gray-300 px-3 py-2 text-sm sm:col-span-3"
            />
            <input
              name="resmi_gazete_no"
              defaultValue={mevzuat.resmi_gazete_no ?? ""}
              placeholder="Resmî Gazete No"
              className="rounded-md border border-gray-300 px-3 py-2 text-sm"
            />
            <input
              name="resmi_gazete_tarihi"
              type="date"
              defaultValue={mevzuat.resmi_gazete_tarihi ?? ""}
              className="rounded-md border border-gray-300 px-3 py-2 text-sm"
            />
            <button
              type="submit"
              className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white hover:bg-gray-700"
            >
              Kaydet
            </button>
          </form>
          <div className="mt-3 border-t border-gray-100 pt-3">
            <OnayliSilForm
              action={mevzuatSil.bind(null, mevzuat.id)}
              confirmMesaji={`"${mevzuat.ad}" ve ${maddeler.length} maddesi silinecek. Bağlı ${toplamSoru} soru silinmez, maddesiz kalır. Devam edilsin mi?`}
              butonMetni="Mevzuatı sil"
              className="text-xs font-medium text-red-600 hover:underline"
            />
          </div>
        </details>

        <form
          action={maddeEkle}
          className="mt-4 flex flex-col gap-2 rounded-lg border border-gray-200 bg-white p-4 sm:flex-row"
        >
          <input type="hidden" name="mevzuat_id" value={mevzuat.id} />
          <input
            name="madde_no"
            required
            placeholder="Madde no (örn: Madde 7) *"
            className="rounded-md border border-gray-300 px-3 py-2 text-sm sm:w-48"
          />
          <input
            name="madde_baslik"
            placeholder="Başlık (opsiyonel)"
            className="flex-1 rounded-md border border-gray-300 px-3 py-2 text-sm"
          />
          <button
            type="submit"
            className="rounded-md bg-brand-600 px-4 py-2 text-sm font-medium text-white hover:bg-brand-700"
          >
            Madde Ekle
          </button>
        </form>
        <p className="mt-1 text-xs text-gray-500">
          Madde eklenince açık gelir; altındaki "Soru ekle" formundan sorusunu girebilirsin.
        </p>

        <div className="mt-4 flex gap-2 text-sm">
          <Link
            href={temelYol}
            className={`rounded-full px-3 py-1 ${filtre ? "bg-white text-gray-600 ring-1 ring-gray-200" : "bg-gray-900 text-white"}`}
          >
            Tüm maddeler ({maddeler.length})
          </Link>
          <Link
            href={`${temelYol}?filtre=sorusuz`}
            className={`rounded-full px-3 py-1 ${filtre ? "bg-amber-600 text-white" : "bg-white text-amber-700 ring-1 ring-amber-200"}`}
          >
            Sorusuz maddeler ({sorusuzSayisi})
          </Link>
        </div>

        <div className="mt-3 space-y-2">
          {gosterilen.map((m) => {
            const sorular = sorularMadde.get(m.id) ?? [];
            const maddeEtiketi = `${m.madde_no}${m.madde_baslik ? ` — ${m.madde_baslik}` : ""}`;
            const rozet = (
              <span
                className={`ml-2 shrink-0 rounded-full px-2 py-0.5 text-xs ${
                  sorular.length ? "bg-gray-100 text-gray-600" : "bg-amber-100 text-amber-800"
                }`}
              >
                {sorular.length ? `${sorular.length} soru` : "soru yok"}
              </span>
            );

            // Kapalı maddeler yalnızca bağlantıdır; formlar sadece açık maddede yüklenir.
            if (acik !== m.id) {
              return (
                <Link
                  key={m.id}
                  id={`madde-${m.id}`}
                  href={`${yol({ acik: m.id })}#madde-${m.id}`}
                  className="flex scroll-mt-20 items-center justify-between rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm hover:bg-gray-50"
                >
                  <span className="min-w-0">
                    <strong>{m.madde_no}</strong>
                    {m.madde_baslik ? ` — ${m.madde_baslik}` : ""}
                  </span>
                  {rozet}
                </Link>
              );
            }

            const donus = `${yol({ acik: m.id })}#madde-${m.id}`;
            return (
              <section
                key={m.id}
                id={`madde-${m.id}`}
                className="scroll-mt-20 rounded-lg border-2 border-brand-300 bg-white p-4"
              >
                <div className="flex items-start justify-between gap-2">
                  <h2 className="text-sm font-semibold text-gray-900">
                    {maddeEtiketi}
                    {rozet}
                  </h2>
                  <Link href={`${yol({})}#madde-${m.id}`} className="shrink-0 text-xs text-gray-500 hover:underline">
                    Kapat ✕
                  </Link>
                </div>

                <details className="mt-2">
                  <summary className="cursor-pointer text-xs text-gray-500">Maddeyi düzenle / sil</summary>
                  <form action={maddeGuncelle} className="mt-2 flex flex-wrap items-end gap-2">
                    <input type="hidden" name="id" value={m.id} />
                    <input type="hidden" name="mevzuat_id" value={mevzuat.id} />
                    <input
                      name="madde_no"
                      defaultValue={m.madde_no}
                      required
                      className="w-32 rounded-md border border-gray-300 px-2 py-1.5 text-xs"
                    />
                    <input
                      name="madde_baslik"
                      defaultValue={m.madde_baslik ?? ""}
                      placeholder="Başlık"
                      className="flex-1 rounded-md border border-gray-300 px-2 py-1.5 text-xs"
                    />
                    <button
                      type="submit"
                      className="rounded-md bg-gray-900 px-3 py-1.5 text-xs font-medium text-white hover:bg-gray-700"
                    >
                      Kaydet
                    </button>
                  </form>
                  {sorular.length > 0 && (
                    <p className="mt-1 text-xs text-amber-600">
                      Madde no veya başlık değişirse bağlı {sorular.length} soru için kullanıcılara
                      "mevzuat güncellendi" uyarısı çıkar.
                    </p>
                  )}
                  <div className="mt-2">
                    <OnayliSilForm
                      action={maddeSil.bind(null, m.id, mevzuat.id)}
                      confirmMesaji={`${m.madde_no} silinecek.${
                        sorular.length ? ` Bağlı ${sorular.length} soru silinmez, maddesiz kalır.` : ""
                      } Devam edilsin mi?`}
                      butonMetni="Maddeyi sil"
                      className="text-xs font-medium text-red-600 hover:underline"
                    />
                  </div>
                </details>

                <div className="mt-3 space-y-2">
                  {sorular.map((q: any) => {
                    const etiket = emmEtiketi(q);
                    const soruDonus = `${yol({ acik: m.id, soru: q.id })}#soru-${q.id}`;
                    return (
                      <details
                        key={q.id}
                        id={`soru-${q.id}`}
                        open={searchParams.soru === q.id}
                        className="scroll-mt-20 rounded-md border border-gray-200 bg-gray-50 p-3"
                      >
                        <summary className="cursor-pointer text-sm text-gray-900">
                          {q.text}
                          <span className="mt-1 block text-xs text-gray-500">
                            {altKategoriAdi.get(q.subcategory_id) ?? "Kategori bulunamadı"}
                            <span className={`ml-2 rounded-full px-2 py-0.5 ${etiket.sinif}`}>
                              {etiket.metin}
                            </span>
                            {q.degerlendirme_tipi && (
                              <span className="ml-1 rounded-full bg-gray-100 px-2 py-0.5 text-gray-600">
                                {baglayicilikBilgi(q.standart_baglayiciligi).etiket}
                              </span>
                            )}
                          </span>
                        </summary>
                        <div className="mt-3 border-t border-gray-200 pt-3">
                          <SoruFormu
                            soru={q}
                            kategoriler={kategoriler}
                            madde={{ tur: "sabit", maddeId: m.id, etiket: `${mevzuat.ad} — ${maddeEtiketi}` }}
                            donus={soruDonus}
                          />
                          <div className="mt-3 flex flex-wrap items-center gap-4">
                            <OnayliSilForm
                              action={soruSil.bind(null, q.id, donus)}
                              confirmMesaji="Bu soru ve firmaların bu soruya verdiği cevaplar silinecek. Devam edilsin mi?"
                              butonMetni="Soruyu sil"
                              className="text-sm font-medium text-red-600 hover:underline"
                            />
                            <Link
                              href={`/admin/questions/${q.subcategory_id}?soru=${q.id}#soru-${q.id}`}
                              className="text-xs text-brand-700 hover:underline"
                            >
                              Alt kategoride gör →
                            </Link>
                          </div>
                        </div>
                      </details>
                    );
                  })}
                </div>

                <details
                  open={sorular.length === 0}
                  className="mt-3 rounded-md border border-dashed border-brand-300 p-3"
                >
                  <summary className="cursor-pointer text-sm font-medium text-brand-700">
                    + Bu maddeye soru ekle
                  </summary>
                  <div className="mt-3">
                    <SoruFormu
                      kategoriler={kategoriler}
                      madde={{ tur: "sabit", maddeId: m.id, etiket: `${mevzuat.ad} — ${maddeEtiketi}` }}
                      donus={donus}
                    />
                  </div>
                </details>
              </section>
            );
          })}
          {gosterilen.length === 0 && (
            <p className="py-6 text-center text-sm text-gray-500">
              {filtre ? "Sorusu olmayan madde yok." : "Bu mevzuata henüz madde eklenmedi."}
            </p>
          )}
        </div>
      </main>
    </>
  );
}
