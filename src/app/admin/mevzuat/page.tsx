import Link from "next/link";
import { revalidatePath } from "next/cache";
import { requireAdmin } from "@/lib/requireAdmin";
import NavBar from "@/components/NavBar";

export default async function AdminMevzuatPage() {
  const { supabase } = await requireAdmin();

  const { data: mevzuatlar } = await supabase
    .from("mevzuatlar")
    .select("id, ad, resmi_gazete_no, resmi_gazete_tarihi")
    .order("ad", { ascending: true });

  const { data: maddeler } = await supabase
    .from("maddeler")
    .select("id, mevzuat_id, madde_no, madde_baslik")
    .order("madde_no", { ascending: true });

  const maddelerByMevzuat = new Map<string, typeof maddeler>();
  (maddeler ?? []).forEach((m) => {
    const list = maddelerByMevzuat.get(m.mevzuat_id) ?? [];
    list.push(m);
    maddelerByMevzuat.set(m.mevzuat_id, list);
  });

  const { data: questionsRaw } = await supabase
    .from("questions")
    .select(
      "id, text, madde_id, subcategory_id, subcategories(name, category_id, categories(name))"
    )
    .not("madde_id", "is", null);

  const questionsByMadde = new Map<
    string,
    { id: string; text: string; subcategory_id: string; subName: string; catName: string }[]
  >();
  (questionsRaw ?? []).forEach((q: any) => {
    if (!q.madde_id) return;
    const sub = Array.isArray(q.subcategories) ? q.subcategories[0] : q.subcategories;
    const cat = sub ? (Array.isArray(sub.categories) ? sub.categories[0] : sub.categories) : null;
    const list = questionsByMadde.get(q.madde_id) ?? [];
    list.push({
      id: q.id,
      text: q.text,
      subcategory_id: q.subcategory_id,
      subName: sub?.name ?? "",
      catName: cat?.name ?? "",
    });
    questionsByMadde.set(q.madde_id, list);
  });

  async function createMevzuat(formData: FormData) {
    "use server";
    const { supabase } = await requireAdmin();
    const ad = String(formData.get("ad") ?? "").trim();
    const resmi_gazete_no = String(formData.get("resmi_gazete_no") ?? "").trim();
    const resmi_gazete_tarihi = String(formData.get("resmi_gazete_tarihi") ?? "").trim();
    if (!ad) return;
    await supabase.from("mevzuatlar").insert({
      ad,
      resmi_gazete_no: resmi_gazete_no || null,
      resmi_gazete_tarihi: resmi_gazete_tarihi || null,
    });
    revalidatePath("/admin/mevzuat");
  }

  async function deleteMevzuat(formData: FormData) {
    "use server";
    const { supabase } = await requireAdmin();
    const id = String(formData.get("id"));
    await supabase.from("mevzuatlar").delete().eq("id", id);
    revalidatePath("/admin/mevzuat");
  }

  async function createMadde(formData: FormData) {
    "use server";
    const { supabase } = await requireAdmin();
    const mevzuat_id = String(formData.get("mevzuat_id"));
    const madde_no = String(formData.get("madde_no") ?? "").trim();
    const madde_baslik = String(formData.get("madde_baslik") ?? "").trim();
    if (!madde_no) return;
    await supabase.from("maddeler").insert({
      mevzuat_id,
      madde_no,
      madde_baslik: madde_baslik || null,
    });
    revalidatePath("/admin/mevzuat");
  }

  async function deleteMadde(formData: FormData) {
    "use server";
    const { supabase } = await requireAdmin();
    const id = String(formData.get("id"));
    await supabase.from("maddeler").delete().eq("id", id);
    revalidatePath("/admin/mevzuat");
  }

  async function updateMadde(formData: FormData) {
    "use server";
    const { supabase } = await requireAdmin();
    const id = String(formData.get("id"));
    const madde_no = String(formData.get("madde_no") ?? "").trim();
    const madde_baslik = String(formData.get("madde_baslik") ?? "").trim();
    if (!madde_no) return;
    await supabase
      .from("maddeler")
      .update({ madde_no, madde_baslik: madde_baslik || null })
      .eq("id", id);
    // Bu maddeye bağlı tüm soruların "güncellendi" damgasını bas, böylece
    // kullanıcı tarafında "mevzuat güncellendi, gözden geçir" uyarısı çıkar.
    await supabase
      .from("questions")
      .update({ updated_at: new Date().toISOString() })
      .eq("madde_id", id);
    revalidatePath("/admin/mevzuat");
  }

  return (
    <>
      <NavBar />
      <main className="mx-auto max-w-3xl px-6 py-8">
        <Link href="/admin" className="text-sm text-brand-700">
          ← Yönetime dön
        </Link>
        <h1 className="mt-2 text-2xl font-semibold text-gray-900">Mevzuat / Madde</h1>
        <p className="mt-1 text-sm text-gray-600">
          Önce mevzuatı ekle, sonra altına maddelerini ekle. Soru eklerken bu
          maddeleri referans olarak seçeceksin.
        </p>

        <form
          action={createMevzuat}
          className="mt-6 grid gap-2 rounded-lg border border-gray-200 bg-white p-4 sm:grid-cols-3"
        >
          <input
            name="ad"
            required
            placeholder="Mevzuat adı *"
            className="rounded-md border border-gray-300 px-3 py-2 text-sm sm:col-span-3"
          />
          <input
            name="resmi_gazete_no"
            placeholder="Resmî Gazete No"
            className="rounded-md border border-gray-300 px-3 py-2 text-sm"
          />
          <input
            name="resmi_gazete_tarihi"
            type="date"
            placeholder="Resmî Gazete Tarihi"
            className="rounded-md border border-gray-300 px-3 py-2 text-sm"
          />
          <button
            type="submit"
            className="rounded-md bg-brand-600 px-4 py-2 text-sm font-medium text-white hover:bg-brand-700"
          >
            Mevzuat Ekle
          </button>
        </form>

        <div className="mt-6 space-y-3">
          {(mevzuatlar ?? []).map((mv) => (
            <details key={mv.id} className="rounded-lg border border-gray-200 bg-white p-4">
              <summary className="cursor-pointer text-sm font-medium text-gray-900">
                {mv.ad}
                {(() => {
                  const tarih = mv.resmi_gazete_tarihi
                    ? mv.resmi_gazete_tarihi.split("-").reverse().join(".")
                    : null;
                  const rg =
                    mv.resmi_gazete_no && tarih
                      ? `${mv.resmi_gazete_no}/${tarih}`
                      : mv.resmi_gazete_no || tarih;
                  return rg ? ` (RG: ${rg})` : "";
                })()}{" "}
                — {(maddelerByMevzuat.get(mv.id) ?? []).length} madde
              </summary>

              <div className="mt-3 space-y-2">
                {(maddelerByMevzuat.get(mv.id) ?? []).map((m) => {
                  const bagliSorular = questionsByMadde.get(m.id) ?? [];
                  return (
                    <details key={m.id} className="rounded-md bg-gray-50 px-3 py-2 text-sm">
                      <summary className="cursor-pointer">
                        <strong>{m.madde_no}</strong>
                        {m.madde_baslik ? ` — ${m.madde_baslik}` : ""}
                        <span className="ml-2 text-xs text-gray-500">
                          ({bagliSorular.length} soruda kullanılıyor)
                        </span>
                      </summary>

                      <form
                        action={updateMadde}
                        className="mt-2 flex flex-wrap items-end gap-2 border-t border-gray-200 pt-2"
                      >
                        <input type="hidden" name="id" value={m.id} />
                        <div>
                          <label className="mb-1 block text-xs text-gray-600">Madde no</label>
                          <input
                            name="madde_no"
                            defaultValue={m.madde_no}
                            required
                            className="rounded-md border border-gray-300 px-2 py-1.5 text-xs"
                          />
                        </div>
                        <div>
                          <label className="mb-1 block text-xs text-gray-600">Başlık</label>
                          <input
                            name="madde_baslik"
                            defaultValue={m.madde_baslik ?? ""}
                            className="rounded-md border border-gray-300 px-2 py-1.5 text-xs"
                          />
                        </div>
                        <button
                          type="submit"
                          className="rounded-md bg-gray-900 px-3 py-1.5 text-xs font-medium text-white hover:bg-gray-700"
                        >
                          Güncelle
                        </button>
                        {bagliSorular.length > 0 && (
                          <span className="text-xs text-amber-600">
                            Kaydedince bu maddeye bağlı {bagliSorular.length} soru için
                            kullanıcılara "mevzuat güncellendi" uyarısı çıkacak.
                          </span>
                        )}
                      </form>

                      <form action={deleteMadde} className="mt-2">
                        <input type="hidden" name="id" value={m.id} />
                        <button
                          type="submit"
                          className="text-xs font-medium text-red-600 hover:underline"
                        >
                          Maddeyi sil
                        </button>
                      </form>

                      {bagliSorular.length > 0 ? (
                        <ul className="mt-2 space-y-1 border-t border-gray-200 pt-2">
                          {bagliSorular.map((q) => (
                            <li key={q.id}>
                              <Link
                                href={`/admin/questions/${q.subcategory_id}#soru-${q.id}`}
                                className="text-xs text-brand-700 hover:underline"
                              >
                                [{q.catName} / {q.subName}] {q.text.slice(0, 80)}
                                {q.text.length > 80 ? "…" : ""}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="mt-2 border-t border-gray-200 pt-2 text-xs text-gray-400">
                          Bu maddeye bağlı soru yok.
                        </p>
                      )}
                    </details>
                  );
                })}

                <form action={createMadde} className="flex flex-wrap gap-2 pt-2">
                  <input type="hidden" name="mevzuat_id" value={mv.id} />
                  <input
                    name="madde_no"
                    required
                    placeholder="Madde no (örn: Md. 7)"
                    className="flex-1 rounded-md border border-gray-300 px-3 py-1.5 text-sm"
                  />
                  <input
                    name="madde_baslik"
                    placeholder="Başlık (opsiyonel)"
                    className="flex-1 rounded-md border border-gray-300 px-3 py-1.5 text-sm"
                  />
                  <button
                    type="submit"
                    className="rounded-md bg-gray-900 px-3 py-1.5 text-sm font-medium text-white hover:bg-gray-700"
                  >
                    Madde Ekle
                  </button>
                </form>
              </div>

              <form action={deleteMevzuat} className="mt-3">
                <input type="hidden" name="id" value={mv.id} />
                <button type="submit" className="text-xs font-medium text-red-600 hover:underline">
                  Mevzuatı sil
                </button>
              </form>
            </details>
          ))}
          {(mevzuatlar ?? []).length === 0 && (
            <p className="text-center text-gray-500">Henüz mevzuat eklenmedi.</p>
          )}
        </div>
      </main>
    </>
  );
}
