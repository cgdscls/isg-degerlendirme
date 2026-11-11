// Firma formlarındaki "onkosul:<tur>:<id>" alanlarını firma_on_kosul tablosuna kaydeder.
// Sunucu işlemlerinin içinden çağrılır. Cevabı değişmeyen satırların tarihi korunur.
export async function onKosulCevaplariniKaydet(supabase: any, companyId: string, formData: FormData) {
  const kaydedilecek: any[] = [];
  for (const [anahtar, deger] of formData.entries()) {
    if (!anahtar.startsWith("onkosul:")) continue;
    const [, hedef_tur, hedef_id] = anahtar.split(":");
    if (hedef_tur !== "kategori" && hedef_tur !== "alt") continue;
    const cevap = String(deger);
    if (cevap !== "evet" && cevap !== "hayir" && cevap !== "bilmiyorum") continue;
    kaydedilecek.push({
      company_id: companyId,
      hedef_tur,
      hedef_id,
      cevap,
      updated_at: new Date().toISOString(),
    });
  }
  if (!kaydedilecek.length) return;

  const { data: eski } = await supabase
    .from("firma_on_kosul")
    .select("hedef_tur, hedef_id, cevap")
    .eq("company_id", companyId);
  const eskiCevap = new Map((eski ?? []).map((r: any) => [`${r.hedef_tur}:${r.hedef_id}`, r.cevap]));
  const degisen = kaydedilecek.filter((r) => eskiCevap.get(`${r.hedef_tur}:${r.hedef_id}`) !== r.cevap);
  if (degisen.length) {
    await supabase.from("firma_on_kosul").upsert(degisen, { onConflict: "company_id,hedef_tur,hedef_id" });
  }
}
