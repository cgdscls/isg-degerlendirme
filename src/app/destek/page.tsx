import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";
import NavBar from "@/components/NavBar";
import { BILET_TURLERI, biletTuruEtiket, biletDurumu } from "@/lib/destek";
import { sendEmail } from "@/lib/email";

export default async function DestekPage({
  searchParams,
}: {
  searchParams: { hata?: string };
}) {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const { data: biletler } = await supabase
    .from("destek_biletleri")
    .select("id, tur, baslik, aciklama, durum, admin_yaniti, created_at")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false });

  async function biletOlustur(formData: FormData) {
    "use server";
    const supabase = createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) redirect("/login");

    const tur = String(formData.get("tur") ?? "");
    const baslik = String(formData.get("baslik") ?? "").trim();
    const aciklama = String(formData.get("aciklama") ?? "").trim();
    if (!baslik || !aciklama || !BILET_TURLERI.some((t) => t.deger === tur)) {
      redirect(`/destek?hata=${encodeURIComponent("Lütfen tüm alanları doldurun.")}`);
    }

    const { error } = await supabase.from("destek_biletleri").insert({
      user_id: user.id,
      tur,
      baslik,
      aciklama,
    });
    if (error) {
      redirect(`/destek?hata=${encodeURIComponent(error.message)}`);
    }

    const adminEmail = process.env.ADMIN_BILDIRIM_EMAIL;
    if (adminEmail) {
      await sendEmail({
        to: adminEmail,
        subject: `Yeni destek bileti: ${baslik}`,
        html: `
          <p><strong>Tür:</strong> ${biletTuruEtiket(tur)}</p>
          <p><strong>Gönderen:</strong> ${user.email}</p>
          <p><strong>Başlık:</strong> ${baslik}</p>
          <p><strong>Açıklama:</strong><br/>${aciklama}</p>
        `,
      });
    }

    revalidatePath("/destek");
    redirect("/destek");
  }

  return (
    <>
      <NavBar />
      <main className="mx-auto max-w-3xl px-6 py-8">
        <h1 className="text-2xl font-semibold text-gray-900">Destek</h1>
        <p className="mt-1 text-sm text-gray-600">
          Eklenmesini istediğin bir mevzuat, sistemle ilgili bir öneri ya da
          karşılaştığın bir hata varsa buradan bize bildir.
        </p>

        {searchParams.hata && (
          <div className="mt-4 rounded-md bg-red-50 p-3 text-sm text-red-700">
            {searchParams.hata}
          </div>
        )}

        <form
          action={biletOlustur}
          className="mt-6 space-y-3 rounded-lg border border-gray-200 bg-white p-5"
        >
          <select
            name="tur"
            required
            defaultValue=""
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-700"
          >
            <option value="" disabled>
              Konu seç *
            </option>
            {BILET_TURLERI.map((t) => (
              <option key={t.deger} value={t.deger}>
                {t.etiket}
              </option>
            ))}
          </select>
          <input
            name="baslik"
            required
            placeholder="Kısa başlık *"
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
          />
          <textarea
            name="aciklama"
            required
            rows={4}
            placeholder="Detaylı açıklama *"
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
          />
          <button
            type="submit"
            className="rounded-md bg-brand-600 px-4 py-2 text-sm font-medium text-white hover:bg-brand-700"
          >
            Gönder
          </button>
        </form>

        <h2 className="mt-8 text-lg font-semibold text-gray-900">Gönderdiklerim</h2>
        <div className="mt-3 space-y-3">
          {(biletler ?? []).map((b) => {
            const durum = biletDurumu(b.durum);
            return (
              <div key={b.id} className="rounded-lg border border-gray-200 bg-white p-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="text-sm font-medium text-gray-900">{b.baslik}</p>
                  <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${durum.renk}`}>
                    {durum.etiket}
                  </span>
                </div>
                <p className="mt-1 text-xs text-gray-500">{biletTuruEtiket(b.tur)}</p>
                <p className="mt-2 text-sm text-gray-700">{b.aciklama}</p>
                {b.admin_yaniti && (
                  <div className="mt-3 rounded-md bg-brand-50 p-3 text-sm text-brand-800">
                    <strong>Yanıt:</strong> {b.admin_yaniti}
                  </div>
                )}
              </div>
            );
          })}
          {(biletler ?? []).length === 0 && (
            <p className="text-sm text-gray-500">Henüz bilet göndermedin.</p>
          )}
        </div>
      </main>
    </>
  );
}
