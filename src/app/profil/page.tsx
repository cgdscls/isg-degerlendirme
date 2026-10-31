import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import NavBar from "@/components/NavBar";
import OnayliSilForm from "@/components/OnayliSilForm";
import SifreDegistirForm from "@/components/SifreDegistirForm";

export default async function ProfilPage() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const { data: profile } = await supabase
    .from("profiles")
    .select("full_name")
    .eq("id", user.id)
    .single();

  async function hesabimiSil() {
    "use server";
    const supabase = createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) redirect("/login");

    const admin = createAdminClient();
    // auth.users satırı silinince profiles/companies/responses zincirleme
    // (on delete cascade) olarak otomatik silinir.
    const { error } = await admin.auth.admin.deleteUser(user.id);
    if (error) {
      redirect(`/profil?hata=${encodeURIComponent(error.message)}`);
    }

    // Oturumu da sonlandır.
    await supabase.auth.signOut();
    redirect("/");
  }

  return (
    <>
      <NavBar />
      <main className="mx-auto max-w-xl px-6 py-8">
        <h1 className="text-2xl font-semibold text-gray-900">Profilim</h1>

        <div className="mt-6 rounded-lg border border-gray-200 bg-white p-5">
          <dl className="space-y-2 text-sm">
            <div className="flex justify-between">
              <dt className="text-gray-500">Ad Soyad</dt>
              <dd className="font-medium text-gray-900">{profile?.full_name ?? "—"}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-gray-500">E-posta</dt>
              <dd className="font-medium text-gray-900">{user.email}</dd>
            </div>
          </dl>
        </div>

        <div className="mt-6 rounded-lg border border-gray-200 bg-white p-5">
          <p className="text-sm font-semibold text-gray-900">Şifre Değiştir</p>
          <div className="mt-3">
            <SifreDegistirForm />
          </div>
        </div>

        <div className="mt-8 rounded-lg border border-red-200 bg-red-50 p-5">
          <p className="text-sm font-semibold text-red-700">Hesabımı Sil</p>
          <p className="mt-1 text-sm text-red-700">
            Hesabını sildiğinde; tüm firmaların, verdiğin cevapların ve
            profil bilgilerin kalıcı olarak silinir. Bu işlem geri alınamaz.
          </p>
          <div className="mt-3">
            <OnayliSilForm
              action={hesabimiSil}
              confirmMesaji="Hesabını ve tüm verilerini kalıcı olarak silmek istediğine emin misin? Bu işlem geri alınamaz."
              butonMetni="Hesabımı Kalıcı Olarak Sil"
              className="rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
            />
          </div>
        </div>
      </main>
    </>
  );
}
