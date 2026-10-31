import Link from "next/link";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";
import NavBar from "@/components/NavBar";
import { IS_KOLLARI } from "@/lib/isKollari";

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
    .select("id, name, address, contact_name, sector")
    .order("created_at", { ascending: true });

  const plan = profile?.plan ?? "free";
  const canCreateMore = plan === "premium" || (companies?.length ?? 0) === 0;

  const companyIds = (companies ?? []).map((c) => c.id);
  let reviewCountByCompany = new Map<string, number>();
  if (companyIds.length > 0) {
    const { data: questions } = await supabase.from("questions").select("id, updated_at");
    const { data: responses } = await supabase
      .from("responses")
      .select("company_id, question_id, updated_at")
      .in("company_id", companyIds);

    const questionById = new Map((questions ?? []).map((q) => [q.id, q]));
    reviewCountByCompany = (responses ?? []).reduce((map, r) => {
      const q = questionById.get(r.question_id);
      if (q?.updated_at && new Date(q.updated_at) > new Date(r.updated_at)) {
        map.set(r.company_id, (map.get(r.company_id) ?? 0) + 1);
      }
      return map;
    }, new Map<string, number>());
  }
  const totalNeedsReview = [...reviewCountByCompany.values()].reduce((a, n) => a + n, 0);

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
    const sgk_no = String(formData.get("sgk_no") ?? "").trim();
    const sector = String(formData.get("sector") ?? "").trim();
    const nace_code = String(formData.get("nace_code") ?? "").trim();
    if (!name) return;
    if (!sector) {
      redirect(`/companies?hata=${encodeURIComponent("İş kolu seçimi zorunludur.")}`);
    }

    const { error } = await supabase.from("companies").insert({
      owner_id: user.id,
      name,
      address: address || null,
      contact_name: contact_name || null,
      contact_phone: contact_phone || null,
      contact_email: contact_email || null,
      tax_no: tax_no || null,
      sgk_no: sgk_no || null,
      sector: sector || null,
      nace_code: nace_code || null,
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
          {plan !== "premium" && " En fazla 1 firma ekleyebilirsin."}
        </p>

        {totalNeedsReview > 0 && (
          <div className="mt-4 rounded-lg border border-amber-300 bg-amber-50 p-4 text-sm text-amber-800">
            <strong>Mevzuat güncellendi.</strong> Aşağıda işaretli firma(lar)da,
            cevapladıktan sonra admin tarafından güncellenen sorular var. Gözden geçirin.
          </div>
        )}

        <div className="mt-6 space-y-3">
          {(companies ?? []).map((c) => {
            const reviewCount = reviewCountByCompany.get(c.id) ?? 0;
            return (
              <Link
                key={c.id}
                href={`/companies/${c.id}`}
                className="block rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition hover:border-brand-400 hover:shadow"
              >
                <p className="font-medium text-gray-900">
                  {c.name}
                  {reviewCount > 0 && (
                    <span className="ml-2 inline-block rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-700">
                      {reviewCount} soru güncellendi
                    </span>
                  )}
                </p>
                {(c.address || c.contact_name || c.sector) && (
                  <p className="mt-1 text-sm text-gray-500">
                    {[c.contact_name, c.address, c.sector].filter(Boolean).join(" · ")}
                  </p>
                )}
              </Link>
            );
          })}
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
                name="sgk_no"
                placeholder="İşyeri SGK no (opsiyonel)"
                className="rounded-md border border-gray-300 px-3 py-2 text-sm"
              />
              <select
                name="sector"
                required
                defaultValue=""
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
                placeholder="NACE kodu (opsiyonel)"
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
            En fazla 1 firma ekleyebilirsin.
          </div>
        )}
      </main>
    </>
  );
}
