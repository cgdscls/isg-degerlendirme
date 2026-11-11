"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";

const DAVET_MESAJLARI: Record<string, string> = {
  gecersiz: "Davet kodu geçersiz. Kodu size ileten mesajdaki gibi yazdığınızdan emin olun.",
  kullanilmis: "Bu davet kodu daha önce kullanılmış. Yeni bir kod için sizi davet eden kişiye başvurun.",
  baska_eposta: "Bu davet kodu başka bir e-posta adresi için oluşturulmuş. Davetin gönderildiği e-posta adresiyle kayıt olun.",
};

const TETIKLEYICI_HATALARI: Record<string, string> = {
  DAVET_KODU_GECERSIZ: DAVET_MESAJLARI.gecersiz,
  DAVET_KODU_KULLANILMIS: DAVET_MESAJLARI.kullanilmis,
  DAVET_KODU_BASKA_EPOSTA: DAVET_MESAJLARI.baska_eposta,
};

export default function RegisterPage() {
  const supabase = createClient();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);
  const [kabulEdildi, setKabulEdildi] = useState(false);
  const [davetKodu, setDavetKodu] = useState("");
  // Test döneminde kayıt davet koduyla yapılır; ayar kapatılınca alan gizlenir.
  const [davetGerekli, setDavetGerekli] = useState(true);

  useEffect(() => {
    supabase
      .from("uygulama_ayarlari")
      .select("davet_kodu_gerekli")
      .eq("id", 1)
      .maybeSingle()
      .then(({ data, error }) => {
        if (!error && data) setDavetGerekli(Boolean(data.davet_kodu_gerekli));
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (!kabulEdildi) {
      setError("Devam etmek için KVKK Aydınlatma Metni'ni ve Kullanım Koşulları'nı kabul etmelisiniz.");
      return;
    }
    setLoading(true);

    if (davetGerekli) {
      const { data: durum } = await supabase.rpc("davet_kodu_kontrol", {
        p_kod: davetKodu,
        p_email: email,
      });
      const mesaj = DAVET_MESAJLARI[String(durum)];
      if (mesaj) {
        setLoading(false);
        setError(mesaj);
        return;
      }
    }

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { full_name: fullName, davet_kodu: davetKodu } },
    });
    setLoading(false);
    if (error) {
      // Veritabanı tetikleyicisinin davet kodu hataları Supabase'den genel bir mesajla gelir.
      const m = error.message || "";
      const kod = Object.keys(TETIKLEYICI_HATALARI).find((k) => m.includes(k));
      setError(
        kod
          ? TETIKLEYICI_HATALARI[kod]
          : /database error/i.test(m)
          ? "Kayıt tamamlanamadı. Davet kodunuzu kontrol edin; sorun sürerse sizi davet eden kişiye başvurun."
          : m
      );
      return;
    }
    setDone(true);
  }

  if (done) {
    return (
      <main className="flex min-h-screen items-center justify-center px-6 text-center">
        <div className="max-w-sm">
          <h1 className="mb-2 text-xl font-semibold text-brand-700">
            Kayıt tamamlandı
          </h1>
          <p className="text-gray-600">
            E-postanıza gelen onay bağlantısına tıkladıktan sonra giriş
            yapabilirsiniz.
          </p>
          <Link href="/login" className="mt-4 inline-block font-medium text-brand-700">
            Giriş sayfasına dön
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
      >
        <h1 className="mb-2 text-xl font-semibold text-brand-700">Kayıt Ol</h1>
        {davetGerekli ? (
          <p className="mb-6 rounded-md bg-brand-50 px-3 py-2 text-xs text-brand-800">
            Sistem şu an test aşamasındadır; kayıt için davet kodu gerekir.
          </p>
        ) : (
          <div className="mb-4" />
        )}

        <label className="mb-1 block text-sm font-medium text-gray-700">
          Ad Soyad
        </label>
        <input
          required
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="mb-4 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-brand-500 focus:outline-none"
        />

        <label className="mb-1 block text-sm font-medium text-gray-700">
          E-posta
        </label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-4 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-brand-500 focus:outline-none"
        />

        <label className="mb-1 block text-sm font-medium text-gray-700">
          Şifre
        </label>
        <input
          type="password"
          required
          minLength={6}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-4 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-brand-500 focus:outline-none"
        />

        {davetGerekli && (
          <>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Davet kodu
            </label>
            <input
              required
              value={davetKodu}
              onChange={(e) => setDavetKodu(e.target.value)}
              placeholder="ör. K7Q2-M9XP"
              autoCapitalize="characters"
              autoComplete="off"
              className="mb-4 w-full rounded-md border border-gray-300 px-3 py-2 font-mono text-sm uppercase tracking-wider focus:border-brand-500 focus:outline-none"
            />
          </>
        )}

        <label className="mb-4 flex items-start gap-2 text-sm text-gray-700">
          <input
            type="checkbox"
            checked={kabulEdildi}
            onChange={(e) => setKabulEdildi(e.target.checked)}
            className="mt-0.5"
          />
          <span>
            <Link href="/kvkk" target="_blank" className="font-medium text-brand-700 underline">
              KVKK Aydınlatma Metni
            </Link>
            'ni ve{" "}
            <Link href="/kullanim-kosullari" target="_blank" className="font-medium text-brand-700 underline">
              Kullanım Koşulları
            </Link>
            'nı okudum, kabul ediyorum.
          </span>
        </label>

        {error && <p className="mb-4 text-sm text-red-600">{error}</p>}

        <button
          type="submit"
          disabled={loading || !kabulEdildi}
          className="w-full rounded-md bg-brand-600 px-4 py-2.5 font-medium text-white hover:bg-brand-700 disabled:opacity-60"
        >
          {loading ? "Kaydediliyor..." : "Kayıt Ol"}
        </button>

        <p className="mt-4 text-center text-sm text-gray-600">
          Zaten hesabın var mı?{" "}
          <Link href="/login" className="font-medium text-brand-700">
            Giriş yap
          </Link>
        </p>
      </form>
    </main>
  );
}
