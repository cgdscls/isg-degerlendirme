import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";
import NavBar from "@/components/NavBar";
import OnayliSilForm from "@/components/OnayliSilForm";
import { IS_KOLLARI } from "@/lib/isKollari";
import { TEHLIKE_SINIFLARI } from "@/lib/tehlikeSinifi";
import { onKosulSorulariGetir } from "@/lib/kapsam";

export default async function EditCompanyPage({
  params,
}: {
  params: { companyId: string };
}) {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const { data: company } = await supabase
    .from("companies")
    .select(
      "id, name, address, contact_name, contact_phone, contact_email, tax_no, sgk_no, sector, nace_code, tehlike_sinifi"
    )
    .eq("id", params.companyId)
    .single();

  if (!company) notFound();

  const [onKosulSorulari, { data: onKosulCevaplari }] = await Promise.all([
    onKosulSorulariGetir(supabase),
    supabase.from("firma_on_kosul").select("hedef_tur, hedef_id, cevap").eq("company_id", params.companyId),
  ]);
  const cevapHaritasi = new Map(
    (onKosulCevaplari ?? []).map((r: any) => [`${r.hedef_tur}:${r.hedef_id}`, r.cevap as string])
  );

  async function updateCompany(formData: FormData) {
    "use server";
    const supabase = createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) redirect("/login");

    const name = String(formData.get("name") ?? "").trim();
    const address = String(formData.get("address") ?? "").trim();
    const contact_name = String(formData.get("contact_name") ?? "").trim();
    const contact_phone = String(formData.get("contact_phone") ?? "").trim();
    const contact_email = String(formData.get("contact_email") ?? "").trim();
    const tax_no = String(formData.get("tax_no") ?? "").trim();
    const sgk_no = String(formData.get("sgk_no") ?? "").trim();
    const sector = String(formData.get("sector") ?? "").trim();
    const nace_code = String(formData.get("nace_code") ?? "").trim();
    const tehlike_sinifi = String(formData.get("tehlike_sinifi") ?? "").trim();
    if (!name) return;
    if (!sector) {
      redirect(
        `/companies/${params.companyId}/edit?hata=${encodeURIComponent("İş kolu seçimi zorunludur.")}`
      );
    }

    const { error } = await supabase
      .from("companies")
      .update({
        name,
        address: address || null,
        contact_name: contact_name || null,
        contact_phone: contact_phone || null,
        contact_email: contact_email || null,
        tax_no: tax_no || null,
        sgk_no: sgk_no || null,
        sector: sector || null,
        nace_code: nace_code || null,
        tehlike_sinifi: tehlike_sinifi || null,
      })
      .eq("id", params.companyId);

    if (error) {
      redirect(
        `/companies/${params.companyId}/edit?hata=${encodeURIComponent(error.message)}`
      );
    }
    // Ön koşul (faaliyet) cevapları: "onkosul:<tur>:<id>" alanları
    const kaydedilecek: any[] = [];
    const silinecek: { hedef_tur: string; hedef_id: string }[] = [];
    for (const [anahtar, deger] of formData.entries()) {
      if (!anahtar.startsWith("onkosul:")) continue;
      const [, hedef_tur, hedef_id] = anahtar.split(":");
      if (hedef_tur !== "kategori" && hedef_tur !== "alt") continue;
      const cevap = String(deger);
      if (cevap === "evet" || cevap === "hayir" || cevap === "bilmiyorum") {
        kaydedilecek.push({
          company_id: params.companyId,
          hedef_tur,
          hedef_id,
          cevap,
          updated_at: new Date().toISOString(),
        });
      } else {
        silinecek.push({ hedef_tur, hedef_id });
      }
    }
    if (kaydedilecek.length) {
      // Cevabı değişmeyenlerin tarihi korunur.
      const { data: eski } = await supabase
        .from("firma_on_kosul")
        .select("hedef_tur, hedef_id, cevap")
        .eq("company_id", params.companyId);
      const eskiCevap = new Map((eski ?? []).map((r: any) => [`${r.hedef_tur}:${r.hedef_id}`, r.cevap]));
      const degisen = kaydedilecek.filter(
        (r) => eskiCevap.get(`${r.hedef_tur}:${r.hedef_id}`) !== r.cevap
      );
      if (degisen.length) {
        await supabase
          .from("firma_on_kosul")
          .upsert(degisen, { onConflict: "company_id,hedef_tur,hedef_id" });
      }
    }
    for (const sil of silinecek) {
      await supabase
        .from("firma_on_kosul")
        .delete()
        .eq("company_id", params.companyId)
        .eq("hedef_tur", sil.hedef_tur)
        .eq("hedef_id", sil.hedef_id);
    }

    revalidatePath(`/companies/${params.companyId}`, "layout");
    revalidatePath("/companies");
    redirect(`/companies/${params.companyId}`);
  }

  async function deleteCompany() {
    "use server";
    const supabase = createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) redirect("/login");

    await supabase.from("companies").delete().eq("id", params.companyId);
    revalidatePath("/companies");
    redirect("/companies");
  }

  return (
    <>
      <NavBar />
      <main className="mx-auto max-w-3xl px-6 py-8">
        <Link href={`/companies/${company.id}`} className="text-sm text-brand-700">
          ← {company.name}
        </Link>
        <h1 className="mt-2 text-2xl font-semibold text-gray-900">Firma Bilgilerini Güncelle</h1>

        <form
          action={updateCompany}
          className="mt-6 space-y-3 rounded-lg border border-gray-200 bg-white p-5"
        >
          <div className="grid gap-3 sm:grid-cols-2">
            <input
              name="name"
              required
              defaultValue={company.name ?? ""}
              placeholder="Firma adı *"
              className="rounded-md border border-gray-300 px-3 py-2 text-sm sm:col-span-2"
            />
            <input
              name="address"
              defaultValue={company.address ?? ""}
              placeholder="Adres"
              className="rounded-md border border-gray-300 px-3 py-2 text-sm sm:col-span-2"
            />
            <input
              name="contact_name"
              defaultValue={company.contact_name ?? ""}
              placeholder="Yetkili kişi"
              className="rounded-md border border-gray-300 px-3 py-2 text-sm"
            />
            <input
              name="tax_no"
              defaultValue={company.tax_no ?? ""}
              placeholder="Vergi no (opsiyonel)"
              className="rounded-md border border-gray-300 px-3 py-2 text-sm"
            />
            <input
              name="sgk_no"
              defaultValue={(company as any).sgk_no ?? ""}
              placeholder="İşyeri SGK no (opsiyonel)"
              className="rounded-md border border-gray-300 px-3 py-2 text-sm"
            />
            <select
              name="sector"
              required
              defaultValue={company.sector ?? ""}
              className="rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-700"
            >
              <option value="" disabled>
                İş kolu seç *
              </option>
              {IS_KOLLARI.map((k) => (
                <option key={k} value={k}>
                  {k}
                </option>
              ))}
            </select>
            <input
              name="nace_code"
              defaultValue={company.nace_code ?? ""}
              placeholder="NACE kodu (opsiyonel)"
              className="rounded-md border border-gray-300 px-3 py-2 text-sm"
            />
            <select
              name="tehlike_sinifi"
              defaultValue={(company as any).tehlike_sinifi ?? ""}
              className="rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-700"
            >
              <option value="">Tehlike sınıfı (opsiyonel)</option>
              {TEHLIKE_SINIFLARI.map((t) => (
                <option key={t.deger} value={t.deger}>
                  {t.etiket}
                </option>
              ))}
            </select>
            <input
              name="contact_phone"
              defaultValue={company.contact_phone ?? ""}
              placeholder="Telefon"
              className="rounded-md border border-gray-300 px-3 py-2 text-sm"
            />
            <input
              name="contact_email"
              type="email"
              defaultValue={company.contact_email ?? ""}
              placeholder="E-posta"
              className="rounded-md border border-gray-300 px-3 py-2 text-sm"
            />
          </div>
          {onKosulSorulari.length > 0 && (
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
                {onKosulSorulari.map((q) => {
                  const ad = `onkosul:${q.tur}:${q.id}`;
                  const mevcut = cevapHaritasi.get(`${q.tur}:${q.id}`) ?? "";
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

          <div className="flex items-center gap-3">
            <button
              type="submit"
              className="rounded-md bg-brand-600 px-4 py-2 text-sm font-medium text-white hover:bg-brand-700"
            >
              Kaydet
            </button>
            <Link
              href={`/companies/${company.id}`}
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              Vazgeç
            </Link>
          </div>
        </form>

        <div className="mt-4">
          <OnayliSilForm
            action={deleteCompany}
            confirmMesaji={`"${company.name}" firmasını ve tüm değerlendirme cevaplarını kalıcı olarak silmek istediğine emin misin? Bu işlem geri alınamaz.`}
            butonMetni="Firmayı Sil"
          />
        </div>
      </main>
    </>
  );
}
