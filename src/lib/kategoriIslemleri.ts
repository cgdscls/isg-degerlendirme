"use server";

// Admin kategori ve alt kategori işlemleri (soru eklenmez; sorular mevzuat sayfasından eklenir).

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { requireAdmin } from "@/lib/requireAdmin";

function oku(formData: FormData, ad: string) {
  return String(formData.get(ad) ?? "").trim();
}

function yenile() {
  revalidatePath("/admin", "layout");
  revalidatePath("/companies", "layout");
}

function hataYolu(yol: string, hata: string) {
  return `${yol}${yol.includes("?") ? "&" : "?"}hata=${encodeURIComponent(hata)}`;
}

async function sonSira(supabase: any, tablo: string, alan?: string, deger?: string) {
  let q = supabase.from(tablo).select("sort_order");
  if (alan) q = q.eq(alan, deger);
  const { data } = await q.order("sort_order", { ascending: false }).limit(1);
  return ((data?.[0]?.sort_order as number | undefined) ?? -1) + 1;
}

export async function kategoriEkle(formData: FormData) {
  const { supabase } = await requireAdmin();
  const name = oku(formData, "name");
  if (!name) redirect(hataYolu("/admin", "Kategori adı boş olamaz."));
  const { error } = await supabase.from("categories").insert({
    name,
    description: oku(formData, "description") || null,
    sort_order: await sonSira(supabase, "categories"),
  });
  if (error) redirect(hataYolu("/admin", error.message));
  yenile();
  redirect("/admin");
}

export async function kategoriGuncelle(formData: FormData) {
  const { supabase } = await requireAdmin();
  const id = oku(formData, "id");
  const name = oku(formData, "name");
  if (!id) redirect("/admin");
  if (!name) redirect(hataYolu("/admin", "Kategori adı boş olamaz."));
  const { error } = await supabase
    .from("categories")
    .update({
      name,
      description: oku(formData, "description") || null,
      on_kosul_sorusu: oku(formData, "on_kosul_sorusu") || null,
      on_kosul_aciklama: oku(formData, "on_kosul_aciklama") || null,
    })
    .eq("id", id);
  if (error) redirect(hataYolu("/admin", error.message));
  yenile();
  redirect("/admin");
}

// OnayliSilForm ile: kategoriSil.bind(null, id). Alt kategoriler, sorular ve cevaplar da silinir.
export async function kategoriSil(id: string, _formData?: FormData) {
  const { supabase } = await requireAdmin();
  const { error } = await supabase.from("categories").delete().eq("id", id);
  if (error) redirect(hataYolu("/admin", error.message));
  yenile();
  redirect("/admin");
}

export async function altKategoriEkle(formData: FormData) {
  const { supabase } = await requireAdmin();
  const category_id = oku(formData, "category_id");
  const name = oku(formData, "name");
  const yol = `/admin/subcategories/${category_id}`;
  if (!category_id) redirect("/admin");
  if (!name) redirect(hataYolu(yol, "Alt kategori adı boş olamaz."));
  const { error } = await supabase.from("subcategories").insert({
    category_id,
    name,
    sort_order: await sonSira(supabase, "subcategories", "category_id", category_id),
  });
  if (error) redirect(hataYolu(yol, error.message));
  yenile();
  redirect(yol);
}

// Ad değişikliği ve başka üst kategoriye taşıma. Sorular ve cevaplar alt kategoriyle birlikte gider.
export async function altKategoriGuncelle(formData: FormData) {
  const { supabase } = await requireAdmin();
  const id = oku(formData, "id");
  const eskiKategori = oku(formData, "eski_category_id");
  const category_id = oku(formData, "category_id") || eskiKategori;
  const name = oku(formData, "name");
  const yol = `/admin/subcategories/${eskiKategori}`;
  if (!id || !eskiKategori) redirect("/admin");
  if (!name) redirect(hataYolu(yol, "Alt kategori adı boş olamaz."));

  const tasiniyor = category_id !== eskiKategori;
  const { error } = await supabase
    .from("subcategories")
    .update({
      name,
      on_kosul_sorusu: oku(formData, "on_kosul_sorusu") || null,
      on_kosul_aciklama: oku(formData, "on_kosul_aciklama") || null,
      ...(tasiniyor
        ? {
            category_id,
            sort_order: await sonSira(supabase, "subcategories", "category_id", category_id),
          }
        : {}),
    })
    .eq("id", id);
  if (error) redirect(hataYolu(yol, error.message));
  yenile();
  redirect(yol);
}

// OnayliSilForm ile: altKategoriSil.bind(null, id, categoryId). Sorular ve cevaplar da silinir.
export async function altKategoriSil(id: string, categoryId: string, _formData?: FormData) {
  const { supabase } = await requireAdmin();
  const yol = `/admin/subcategories/${categoryId}`;
  const { error } = await supabase.from("subcategories").delete().eq("id", id);
  if (error) redirect(hataYolu(yol, error.message));
  yenile();
  redirect(yol);
}
