import Link from "next/link";
import { revalidatePath } from "next/cache";
import { requireAdmin } from "@/lib/requireAdmin";
import NavBar from "@/components/NavBar";
import { KATEGORILER, MevzuatKategori, MevzuatKaynagiKayit } from "@/lib/mevzuatKaynagi";

export default async function AdminMevzuatKaynagiPage({
  searchParams,
}: {
  searchParams: { kategori?: string };
}) {
  const { supabase } = await requireAdmin();

  const aktifKategori: MevzuatKategori =
    (searchParams.kategori as MevzuatKategori) &&
    KATEGORILER.some((k) => k.deger === searchParams.kategori)
      ? (searchParams.kategori as MevzuatKategori)
      : "ilo_sozlesmesi";

  const { data: kayitlar } = await supabase
    .from("mevzuat_kaynagi")
    .select("*")
    .eq("kategori", aktifKategori)
    .order("sort_order", { ascending: true })
    .order("ad", { ascending: true });

  async function createKayit(formData: FormData) {
    "use server";
    const { supabase } = await requireAdmin();
    const kategori = String(formData.get("kategori") ?? "");
    const ad = String(formData.get("ad") ?? "").trim();
    if (!ad || !KATEGORILER.some((k) => k.deger === kategori)) return;

    const str = (name: string) => {
      const v = String(formData.get(name) ?? "").trim();
      return v || null;
    };

    await supabase.from("mevzuat_kaynagi").insert({
      kategori,
      ad,
      sozlesme_no: str("sozlesme_no"),
      ilo_kabul_tarihi: str("ilo_kabul_tarihi"),
      yururluk_tarihi: str("yururluk_tarihi"),
      kanun_no: str("kanun_no"),
      kabul_rg_no: str("kabul_rg_no"),
      kabul_rg_tarihi: str("kabul_rg_tarihi"),
      degisiklik_rg_no: str("degisiklik_rg_no"),
      degisiklik_rg_tarihi: str("degisiklik_rg_tarihi"),
      mbs_link: str("mbs_link"),
      word_link: str("word_link"),
      pdf_link: str("pdf_link"),
      kaysis_link: str("kaysis_link"),
    });
    revalidatePath("/admin/mevzuat-kaynagi");
    revalidatePath("/mevzuat");
  }

  async function updateKayit(formData: FormData) {
    "use server";
    const { supabase } = await requireAdmin();
    const id = String(formData.get("id"));
    const ad = String(formData.get("ad") ?? "").trim();
    if (!id || !ad) return;

    const str = (name: string) => {
      const v = String(formData.get(name) ?? "").trim();
      return v || null;
    };

    await supabase
      .from("mevzuat_kaynagi")
      .update({
        ad,
        sozlesme_no: str("sozlesme_no"),
        ilo_kabul_tarihi: str("ilo_kabul_tarihi"),
        yururluk_tarihi: str("yururluk_tarihi"),
        kanun_no: str("kanun_no"),
        kabul_rg_no: str("kabul_rg_no"),
        kabul_rg_tarihi: str("kabul_rg_tarihi"),
        degisiklik_rg_no: str("degisiklik_rg_no"),
        degisiklik_rg_tarihi: str("degisiklik_rg_tarihi"),
        mbs_link: str("mbs_link"),
        word_link: str("word_link"),
        pdf_link: str("pdf_link"),
        kaysis_link: str("kaysis_link"),
        updated_at: new Date().toISOString(),
      })
      .eq("id", id);
    revalidatePath("/admin/mevzuat-kaynagi");
    revalidatePath("/mevzuat");
  }

  async function deleteKayit(formData: FormData) {
    "use server";
    const { supabase } = await requireAdmin();
    const id = String(formData.get("id"));
    await supabase.from("mevzuat_kaynagi").delete().eq("id", id);
    revalidatePath("/admin/mevzuat-kaynagi");
    revalidatePath("/mevzuat");
  }

  const aktif = KATEGORILER.find((k) => k.deger === aktifKategori)!;

  return (
    <>
      <NavBar />
      <main className="mx-auto max-w-5xl px-6 py-8">
        <Link href="/admin" className="text-sm text-brand-700">
          ← Yönetime dön
        </Link>
        <h1 className="mt-2 text-2xl font-semibold text-gray-900">Mevzuat Kaynağı</h1>
        <p className="mt-1 text-sm text-gray-600">
          isgmevzuat.tr ana sayfasında herkese açık gösterilen ILO Sözleşmeleri /
          Kanunlar / Yönetmelikler / Tebliğler listesi. Karne'nin mevzuat/madde
          yapısından bağımsızdır.
        </p>

        <div className="mt-6 flex flex-wrap gap-2 border-b border-gray-200 pb-3">
          {KATEGORILER.map((k) => (
            <Link
              key={k.deger}
              href={`/admin/mevzuat-kaynagi?kategori=${k.deger}`}
              className={`rounded-md px-3 py-1.5 text-sm font-medium ${
                k.deger === aktifKategori
                  ? "bg-brand-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {k.baslik}
            </Link>
          ))}
        </div>

        <form
          action={createKayit}
          className="mt-6 grid gap-3 rounded-lg border border-gray-200 bg-white p-4 sm:grid-cols-2"
        >
          <input type="hidden" name="kategori" value={aktifKategori} />
          <input
            name="ad"
            required
            placeholder={`${aktif.baslikTekil} adı *`}
            className="rounded-md border border-gray-300 px-3 py-2 text-sm sm:col-span-2"
          />

          {aktifKategori === "ilo_sozlesmesi" && (
            <>
              <input
                name="sozlesme_no"
                placeholder="Sözleşme numarası (örn: C 29)"
                className="rounded-md border border-gray-300 px-3 py-2 text-sm"
              />
              <div />
              <label className="text-xs text-gray-600">
                ILO Kabul Tarihi
                <input
                  name="ilo_kabul_tarihi"
                  type="date"
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                />
              </label>
              <label className="text-xs text-gray-600">
                Türkiye'de Yürürlüğe Giriş Tarihi
                <input
                  name="yururluk_tarihi"
                  type="date"
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                />
              </label>
            </>
          )}

          {aktifKategori === "kanun" && (
            <input
              name="kanun_no"
              placeholder="Kanun No"
              className="rounded-md border border-gray-300 px-3 py-2 text-sm"
            />
          )}

          <label className="text-xs text-gray-600">
            Kabul / Resmî Gazete No
            <input
              name="kabul_rg_no"
              placeholder="örn: 18565"
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
            />
          </label>
          <label className="text-xs text-gray-600">
            Kabul / Resmî Gazete Tarihi
            <input
              name="kabul_rg_tarihi"
              type="date"
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
            />
          </label>
          <label className="text-xs text-gray-600">
            Değişiklik Resmî Gazete No
            <input
              name="degisiklik_rg_no"
              placeholder="örn: 31006"
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
            />
          </label>
          <label className="text-xs text-gray-600">
            Değişiklik Resmî Gazete Tarihi
            <input
              name="degisiklik_rg_tarihi"
              type="date"
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
            />
          </label>

          <label className="text-xs text-gray-600 sm:col-span-2">
            MBS Link
            <input
              name="mbs_link"
              placeholder="https://www.mevzuat.gov.tr/..."
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
            />
          </label>
          <label className="text-xs text-gray-600">
            Word Link
            <input
              name="word_link"
              placeholder="https://..."
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
            />
          </label>
          <label className="text-xs text-gray-600">
            PDF Link
            <input
              name="pdf_link"
              placeholder="https://..."
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
            />
          </label>
          <label className="text-xs text-gray-600 sm:col-span-2">
            KAYSİS Link
            <input
              name="kaysis_link"
              placeholder="https://www.kaysis.gov.tr/..."
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
            />
          </label>

          <button
            type="submit"
            className="rounded-md bg-brand-600 px-4 py-2 text-sm font-medium text-white hover:bg-brand-700 sm:col-span-2"
          >
            {aktif.baslikTekil} Ekle
          </button>
        </form>

        <div className="mt-6 space-y-2">
          {((kayitlar as MevzuatKaynagiKayit[] | null) ?? []).map((kayit) => (
            <details key={kayit.id} className="rounded-lg border border-gray-200 bg-white p-4">
              <summary className="cursor-pointer text-sm font-medium text-gray-900">
                {kayit.ad}
              </summary>

              <form
                action={updateKayit}
                className="mt-3 grid gap-3 border-t border-gray-200 pt-3 sm:grid-cols-2"
              >
                <input type="hidden" name="id" value={kayit.id} />
                <input
                  name="ad"
                  defaultValue={kayit.ad}
                  required
                  className="rounded-md border border-gray-300 px-3 py-2 text-sm sm:col-span-2"
                />

                {aktifKategori === "ilo_sozlesmesi" && (
                  <>
                    <input
                      name="sozlesme_no"
                      defaultValue={kayit.sozlesme_no ?? ""}
                      placeholder="Sözleşme numarası"
                      className="rounded-md border border-gray-300 px-3 py-2 text-sm"
                    />
                    <div />
                    <label className="text-xs text-gray-600">
                      ILO Kabul Tarihi
                      <input
                        name="ilo_kabul_tarihi"
                        type="date"
                        defaultValue={kayit.ilo_kabul_tarihi ?? ""}
                        className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                      />
                    </label>
                    <label className="text-xs text-gray-600">
                      Yürürlüğe Giriş Tarihi
                      <input
                        name="yururluk_tarihi"
                        type="date"
                        defaultValue={kayit.yururluk_tarihi ?? ""}
                        className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                      />
                    </label>
                  </>
                )}

                {aktifKategori === "kanun" && (
                  <input
                    name="kanun_no"
                    defaultValue={kayit.kanun_no ?? ""}
                    placeholder="Kanun No"
                    className="rounded-md border border-gray-300 px-3 py-2 text-sm"
                  />
                )}

                <label className="text-xs text-gray-600">
                  Kabul RG No
                  <input
                    name="kabul_rg_no"
                    defaultValue={kayit.kabul_rg_no ?? ""}
                    className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                  />
                </label>
                <label className="text-xs text-gray-600">
                  Kabul RG Tarihi
                  <input
                    name="kabul_rg_tarihi"
                    type="date"
                    defaultValue={kayit.kabul_rg_tarihi ?? ""}
                    className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                  />
                </label>
                <label className="text-xs text-gray-600">
                  Değişiklik RG No
                  <input
                    name="degisiklik_rg_no"
                    defaultValue={kayit.degisiklik_rg_no ?? ""}
                    className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                  />
                </label>
                <label className="text-xs text-gray-600">
                  Değişiklik RG Tarihi
                  <input
                    name="degisiklik_rg_tarihi"
                    type="date"
                    defaultValue={kayit.degisiklik_rg_tarihi ?? ""}
                    className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                  />
                </label>

                <label className="text-xs text-gray-600 sm:col-span-2">
                  MBS Link
                  <input
                    name="mbs_link"
                    defaultValue={kayit.mbs_link ?? ""}
                    className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                  />
                </label>
                <label className="text-xs text-gray-600">
                  Word Link
                  <input
                    name="word_link"
                    defaultValue={kayit.word_link ?? ""}
                    className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                  />
                </label>
                <label className="text-xs text-gray-600">
                  PDF Link
                  <input
                    name="pdf_link"
                    defaultValue={kayit.pdf_link ?? ""}
                    className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                  />
                </label>
                <label className="text-xs text-gray-600 sm:col-span-2">
                  KAYSİS Link
                  <input
                    name="kaysis_link"
                    defaultValue={kayit.kaysis_link ?? ""}
                    className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                  />
                </label>

                <button
                  type="submit"
                  className="rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-700"
                >
                  Güncelle
                </button>
              </form>

              <form action={deleteKayit} className="mt-2">
                <input type="hidden" name="id" value={kayit.id} />
                <button type="submit" className="text-xs font-medium text-red-600 hover:underline">
                  Sil
                </button>
              </form>
            </details>
          ))}
          {((kayitlar as MevzuatKaynagiKayit[] | null) ?? []).length === 0 && (
            <p className="text-center text-gray-500">
              Bu kategoride henüz kayıt yok.
            </p>
          )}
        </div>
      </main>
    </>
  );
}
