"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function SifreGuncellePage() {
  const router = useRouter();
  const supabase = createClient();
  const [hazir, setHazir] = useState(false);
  const [kontrolBitti, setKontrolBitti] = useState(false);
  const [hesap, setHesap] = useState<string | null>(null);
  const [sifre, setSifre] = useState("");
  const [sifreTekrar, setSifreTekrar] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [basarili, setBasarili] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Bağlantı geçersiz veya süresi dolmuşsa Supabase/ara sayfa hata parametresi ekler.
    const arama = new URLSearchParams(window.location.search);
    const hash = new URLSearchParams(window.location.hash.replace(/^#/, ""));
    const bagHatasi =
      arama.get("hata") || arama.get("error") || hash.get("error") || arama.get("error_code");

    // Eski tip bağlantılar (?code=...) tarayıcı istemcisi tarafından otomatik
    // oturuma çevrilir; yeni tip bağlantılar /auth/confirm üzerinden gelir.
    supabase.auth.getSession().then(({ data }) => {
      const oturum = data.session;
      setHesap(oturum?.user?.email ?? null);
      setHazir(!!oturum && !bagHatasi);
      setKontrolBitti(true);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (sifre.length < 6) {
      setError("Şifre en az 6 karakter olmalı.");
      return;
    }
    if (sifre !== sifreTekrar) {
      setError("Şifreler birbiriyle uyuşmuyor.");
      return;
    }
    setLoading(true);
    const { error } = await supabase.auth.updateUser({ password: sifre });
    setLoading(false);
    if (error) {
      setError(
        /reauth|recent|nonce/i.test(error.message)
          ? "Bu hesap için şifre değişikliği yeniden giriş gerektiriyor. Çıkış yapıp e-postadaki sıfırlama bağlantısını yeniden açın."
          : /same|different from the old/i.test(error.message)
          ? "Yeni şifre eskisinden farklı olmalı."
          : /weak|short|characters/i.test(error.message)
          ? "Şifre yeterince güçlü değil; daha uzun bir şifre deneyin."
          : "Şifre güncellenemedi, bağlantının süresi dolmuş olabilir. Yeni bağlantı isteyin."
      );
      return;
    }
    setBasarili(true);
    setTimeout(() => router.push("/companies"), 1500);
  }

  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="w-full max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
        <h1 className="mb-4 text-xl font-semibold text-brand-700">
          Yeni Şifre Belirle
        </h1>

        {!hazir && !basarili && !kontrolBitti && (
          <p className="text-sm text-gray-600">Bağlantı kontrol ediliyor...</p>
        )}

        {!hazir && !basarili && kontrolBitti && (
          <div className="text-sm text-gray-700">
            <p className="text-red-600">
              Şifre sıfırlama bağlantısı geçersiz veya süresi dolmuş.
            </p>
            <p className="mt-2">
              Bağlantı yalnızca bir kez ve sınırlı bir süre için geçerlidir. Bazı e-posta
              programları bağlantıyı güvenlik taraması için önceden açıp geçersiz hale
              getirebilir.
            </p>
            <a href="/sifremi-unuttum" className="mt-3 inline-block font-medium text-brand-700 underline">
              Yeni bağlantı iste
            </a>
          </div>
        )}

        {hazir && !basarili && hesap && (
          <p className="mb-4 rounded-md bg-gray-50 px-3 py-2 text-xs text-gray-600">
            Şifresi değişecek hesap: <strong className="text-gray-900">{hesap}</strong>
            <span className="block">
              Bu hesap sizin değilse işlem yapmayın ve{" "}
              <a href="/sifremi-unuttum" className="underline">
                yeni bağlantı isteyin
              </a>
              .
            </span>
          </p>
        )}

        {basarili && (
          <p className="text-sm text-green-700">
            Şifren güncellendi, yönlendiriliyorsun...
          </p>
        )}

        {hazir && !basarili && (
          <form onSubmit={handleSubmit}>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Yeni şifre
            </label>
            <input
              type="password"
              required
              value={sifre}
              onChange={(e) => setSifre(e.target.value)}
              className="mb-4 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-brand-500 focus:outline-none"
            />
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Yeni şifre (tekrar)
            </label>
            <input
              type="password"
              required
              value={sifreTekrar}
              onChange={(e) => setSifreTekrar(e.target.value)}
              className="mb-4 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-brand-500 focus:outline-none"
            />
            {error && <p className="mb-4 text-sm text-red-600">{error}</p>}
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-md bg-brand-600 px-4 py-2.5 font-medium text-white hover:bg-brand-700 disabled:opacity-60"
            >
              {loading ? "Güncelleniyor..." : "Şifreyi Güncelle"}
            </button>
          </form>
        )}
      </div>
    </main>
  );
}
