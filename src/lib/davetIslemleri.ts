"use server";

// Admin: davet kodu üretme, silme ve "davet kodu gerekli" ayarı.

import { randomInt } from "crypto";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { requireAdmin } from "@/lib/requireAdmin";

// Karışabilecek karakterler (0/O, 1/I/L) çıkarıldı.
const ALFABE = "ABCDEFGHJKMNPQRSTUVWXYZ23456789";

function kodUret() {
  let k = "";
  for (let i = 0; i < 8; i++) k += ALFABE[randomInt(ALFABE.length)];
  return k;
}

function taze(yol: string) {
  return `${yol}${yol.includes("?") ? "&" : "?"}t=${Date.now()}`;
}

export async function davetKoduUret(formData: FormData) {
  const { supabase, user } = await requireAdmin();
  const aciklama = String(formData.get("aciklama") ?? "").trim() || null;
  const email = String(formData.get("email") ?? "").trim().toLowerCase() || null;
  const adet = Math.min(Math.max(Number(formData.get("adet") ?? 1) || 1, 1), 20);

  const satirlar = Array.from({ length: email ? 1 : adet }, () => ({
    kod: kodUret(),
    aciklama,
    email,
    olusturan: user.id,
  }));
  const { error } = await supabase.from("davet_kodlari").insert(satirlar);
  revalidatePath("/admin/davet");
  redirect(
    taze(`/admin/davet${error ? `?hata=${encodeURIComponent(error.message)}` : `?yeni=${satirlar.map((s) => s.kod).join(",")}`}`)
  );
}

export async function davetKoduSil(kod: string, _formData?: FormData) {
  const { supabase } = await requireAdmin();
  await supabase.from("davet_kodlari").delete().eq("kod", kod).is("kullanildi_at", null);
  revalidatePath("/admin/davet");
  redirect(taze("/admin/davet"));
}

export async function davetAyariDegistir(gerekli: boolean, _formData?: FormData) {
  const { supabase } = await requireAdmin();
  const { error } = await supabase
    .from("uygulama_ayarlari")
    .update({ davet_kodu_gerekli: gerekli })
    .eq("id", 1);
  revalidatePath("/admin/davet");
  redirect(taze(`/admin/davet${error ? `?hata=${encodeURIComponent(error.message)}` : ""}`));
}
