"use server";

// Alt kategoriyi firma için kapsam dışı bırakma / yeniden kapsama alma.
// Cevaplara (responses) dokunulmaz; kapsama alınınca önceki cevaplar aynen görünür.

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";

function yenile(companyId: string) {
  revalidatePath("/companies");
  revalidatePath(`/companies/${companyId}`, "layout");
}

export async function kapsamDisiBirak(companyId: string, subcategoryId: string, formData: FormData) {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const gerekce = String(formData.get("gerekce") ?? "").trim().slice(0, 300) || null;
  await supabase.from("firma_kapsam").upsert(
    {
      company_id: companyId,
      subcategory_id: subcategoryId,
      gerekce,
      created_at: new Date().toISOString(),
      created_by: user.id,
    },
    { onConflict: "company_id,subcategory_id" }
  );
  yenile(companyId);
}

export async function kapsamaAl(companyId: string, subcategoryId: string, _formData?: FormData) {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  await supabase
    .from("firma_kapsam")
    .delete()
    .eq("company_id", companyId)
    .eq("subcategory_id", subcategoryId);
  yenile(companyId);
}

// Firma ayarı: iyi uygulama soruları gösterilsin mi.
export async function iyiUygulamaAyarla(companyId: string, goster: boolean, _formData?: FormData) {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/login");
  await supabase.from("companies").update({ iyi_uygulama_goster: goster }).eq("id", companyId);
  yenile(companyId);
}
