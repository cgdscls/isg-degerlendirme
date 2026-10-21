import Link from "next/link";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";
import NavBar from "@/components/NavBar";

export default async function CompaniesPage() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  const { data: profile } = await supabase
    .from("profiles")
    .select("plan")
    .eq("id", user.id)
    .single();

  const { data: companies } = await supabase
    .from("companies")
    .select("id, name, address, contact_name")
    .order("created_at", { ascending: true });

  const plan = profile?.plan ?? "free";
  const canCreateMore = plan === "premium" || (companies?.length ?? 0) === 0;

  async function createCompany(formData: FormData) {
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
    if (!name) return;

    const { error } = await supabase.from("companies").insert({
      owner_id: user.id,
      name,
      address: address || null,
      contact_name: contact_name || null,
      contact_phone: contact_phone || null,
      contact_email: contact_email || null,
      tax_no: tax_no || null,
    });

    if (error) {
      redirect(`/companies?hata=${encodeURIComponent(error.message)}`);
    }
    revalidatePath("/companies");
  }

  return (
    <>
      <NavBar />
      <main className="mx-auto max-w-3xl px-6 py-8">
        <h1 className="text-2xl font-semibold text-gray-900">Firmalarım</h1>
        <p className="mt-1 text-sm text-gray-600">
          Değerlendirme yapacağın firmayı seç, ya da yeni bir firma ekle.
          {plan === "free" && " Ücretsiz planda en fazla 1 firma ekleyebilirsin."}
        </p>

        <div className="mt-6 space-y-3">
          {(companies ?? []).map((c) => (
            <Link
              key={c.id}
              href={`/companies/${c.id}`}
              className="block rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition hover:border-brand-400 hover:shadow"
            >
              <p className="font-medium text-gray-900">{c.name}</p>
              {(c.address || c.contact_name) && (
                <p className="mt-1 text-sm text-gray-500">
                  {[c.contact_name, c.address].filter(Boolean).join(" · ")}
                </p>
              )}
            </Link>
          ))}
          {(companies ?? []).length === 0 && (
            <p className="text-gray-500">Henüz firma eklemedin.</p>
          )}
        </div>

        {canCreateMore ? (
          <form
            action={createCompany}
            className="mt-8 space-y-3 rounded-lg border border-gray-200 bg-white p-5"
          >
            <h2 className="text-sm font-semibold text-gray-700">Yeni Firma Ekle</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              <input
                name="name"
                required
                placeholder="Firma adı *"
                className="rounded-md border border-gray-300 px-3 py-2 text-sm sm:col-span-2"
              />
              <input
                name="address"
                placeholder="Adres"
                className="rounded-md border border-gray-300 px-3 py-2 text-sm sm:col-span-2"
              />
              <input
                name="contact_name"
                placeholder="Yetkili kişi"
                className="rounded-md border border-gray-300 px-3 py-2 text-sm"
              />
              <input
                name="tax_no"
                placeholder="Vergi no (opsiyonel)"
                className="rounded-md border border-gray-300 px-3 py-2 text-sm"
              />
              <input
                name="contact_phone"
                placeholder="Telefon"
                className="rounded-md border border-gray-300 px-3 py-2 text-sm"
              />
              <input
                name="contact_email"
                type="email"
                placeholder="E-posta"
                className="rounded-md border border-gray-300 px-3 py-2 text-sm"
              />
            </div>
            <button
              type="submit"
              className="rounded-md bg-brand-600 px-4 py-2 text-sm font-medium text-white hover:bg-brand-700"
            >
              Firma Ekle
            </button>
          </form>
        ) : (
          <div className="mt-8 rounded-lg border border-yellow-200 bg-yellow-50 p-4 text-sm text-yellow-800">
            Ücretsiz planda en fazla 1 firma ekleyebilirsin. Daha fazla firma
            için premium plana geçmen gerekiyor.
          </div>
        )}
      </main>
    </>
  );
}
