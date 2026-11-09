"use server";

// Admin mevzuat ve madde işlemleri.

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { requireAdmin } from "@/lib/requireAdmin";

function oku(formData: FormData, ad: string) {
  return String(formData.get(ad) ?? "").trim();
}

function yenile() {
  revalidatePath("/admin", "layout");
}

function hataYolu(yol: string, hata: string) {
  return `${yol}${yol.includes("?") ? "&" : "?"}hata=${encodeURIComponent(hata)}`;
}

export async function mevzuatEkle(formData: FormData) {
  const { supabase } = await requireAdmin();
  const ad = oku(formData, "ad");
  if (!ad) redirect(hataYolu("/admin/mevzuat", "Mevzuat adı boş olamaz."));
  const { data, error } = await supabase
    .from("mevzuatlar")
    .insert({
      ad,
      resmi_gazete_no: oku(formData, "resmi_gazete_no") || null,
      resmi_gazete_tarihi: oku(formData, "resmi_gazete_tarihi") || null,
    })
    .select("id")
    .single();
  if (error || !data) redirect(hataYolu("/admin/mevzuat", error?.message ?? "Eklenemedi."));
  yenile();
  redirect(`/admin/mevzuat/${data.id}`);
}

export async function mevzuatGuncelle(formData: FormData) {
  const { supabase } = await requireAdmin();
  const id = oku(formData, "id");
  const ad = oku(formData, "ad");
  const yol = `/admin/mevzuat/${id}`;
  if (!id) redirect("/admin/mevzuat");
  if (!ad) redirect(hataYolu(yol, "Mevzuat adı boş olamaz."));
  const { error } = await supabase
    .from("mevzuatlar")
    .update({
      ad,
      resmi_gazete_no: oku(formData, "resmi_gazete_no") || null,
      resmi_gazete_tarihi: oku(formData, "resmi_gazete_tarihi") || null,
    })
    .eq("id", id);
  if (error) redirect(hataYolu(yol, error.message));
  yenile();
  redirect(yol);
}

// OnayliSilForm ile: mevzuatSil.bind(null, id)
export async function mevzuatSil(id: string, _formData?: FormData) {
  const { supabase } = await requireAdmin();
  const { error } = await supabase.from("mevzuatlar").delete().eq("id", id);
  if (error) redirect(hataYolu(`/admin/mevzuat/${id}`, error.message));
  yenile();
  redirect("/admin/mevzuat");
}

export async function maddeEkle(formData: FormData) {
  const { supabase } = await requireAdmin();
  const mevzuat_id = oku(formData, "mevzuat_id");
  const madde_no = oku(formData, "madde_no");
  const yol = `/admin/mevzuat/${mevzuat_id}`;
  if (!mevzuat_id) redirect("/admin/mevzuat");
  if (!madde_no) redirect(hataYolu(yol, "Madde no boş olamaz."));
  const { data, error } = await supabase
    .from("maddeler")
    .insert({ mevzuat_id, madde_no, madde_baslik: oku(formData, "madde_baslik") || null })
    .select("id")
    .single();
  if (error || !data) redirect(hataYolu(yol, error?.message ?? "Eklenemedi."));
  yenile();
  // Yeni madde açık gelir; hemen soru eklenebilir.
  redirect(`${yol}?acik=${data.id}#madde-${data.id}`);
}

export async function maddeGuncelle(formData: FormData) {
  const { supabase } = await requireAdmin();
  const id = oku(formData, "id");
  const mevzuat_id = oku(formData, "mevzuat_id");
  const madde_no = oku(formData, "madde_no");
  const yol = `/admin/mevzuat/${mevzuat_id}?acik=${id}`;
  if (!id || !mevzuat_id) redirect("/admin/mevzuat");
  if (!madde_no) redirect(hataYolu(yol, "Madde no boş olamaz.") + `#madde-${id}`);

  const { data: mevcut } = await supabase
    .from("maddeler")
    .select("madde_no, madde_baslik")
    .eq("id", id)
    .single();
  const madde_baslik = oku(formData, "madde_baslik") || null;

  const { error } = await supabase.from("maddeler").update({ madde_no, madde_baslik }).eq("id", id);
  if (error) redirect(hataYolu(yol, error.message) + `#madde-${id}`);

  // Madde gerçekten değiştiyse bağlı soruların "güncellendi" damgası yenilenir;
  // kullanıcı tarafında "mevzuat güncellendi, gözden geçir" uyarısı çıkar.
  if (!mevcut || mevcut.madde_no !== madde_no || (mevcut.madde_baslik ?? null) !== madde_baslik) {
    await supabase
      .from("questions")
      .update({ updated_at: new Date().toISOString() })
      .eq("madde_id", id);
  }
  yenile();
  redirect(`${yol}#madde-${id}`);
}

// OnayliSilForm ile: maddeSil.bind(null, maddeId, mevzuatId)
// Bağlı sorular silinmez; maddesiz kalır (veritabanında on delete set null).
export async function maddeSil(id: string, mevzuatId: string, _formData?: FormData) {
  const { supabase } = await requireAdmin();
  const yol = `/admin/mevzuat/${mevzuatId}`;
  const { error } = await supabase.from("maddeler").delete().eq("id", id);
  if (error) redirect(hataYolu(yol, error.message));
  yenile();
  redirect(yol);
}
