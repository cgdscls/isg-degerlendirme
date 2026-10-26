import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";
import NavBar from "@/components/NavBar";
import { IS_KOLLARI } from "../../page";

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
      "id, name, address, contact_name, contact_phone, contact_email, tax_no, sector, nace_code"
    )
    .eq("id", params.companyId)
    .single();

  if (!company) notFound();

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
    const sector = String(formData.get("sector") ?? "").trim();
    const nace_code = String(formData.get("nace_code") ?? "").trim();
    if (!name) return;

    const { error } = await supabase
      .from("companies")
      .update({
        name,
        address: address || null,
        contact_name: contact_name || null,
        contact_phone: contact_phone || null,
        contact_email: contact_email || null,
        tax_no: tax_no || null,
        sector: sector || null,
        nace_code: nace_code || null,
      })
      .eq("id", params.companyId);

    if (error) {
      redirect(
        `/companies/${params.companyId}/edit?hata=${encodeURIComponent(error.message)}`
      );
    }
    revalidatePath(`/companies/${params.companyId}`);
    revalidatePath("/companies");
    redirect(`/companies/${params.companyId}`);
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
            <select
              name="sector"
              defaultValue={company.sector ?? ""}
              className="rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-700"
            >
              <option value="">İş kolu seç (opsiyonel)</option>
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
      </main>
    </>
  );
}
