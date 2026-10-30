"use client";

import { useState } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";

export default function SifremiUnuttumPage() {
  const supabase = createClient();
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [gonderildi, setGonderildi] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/sifre-guncelle`,
    });
    setLoading(false);
    if (error) {
      setError("Bir şeyler ters gitti, lütfen tekrar dene.");
      return;
    }
    setGonderildi(true);
  }

  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="w-full max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
        <h1 className="mb-2 text-xl font-semibold text-brand-700">Şifremi Unuttum</h1>
        {gonderildi ? (
          <p className="text-sm text-gray-700">
            E-posta adresin kayıtlıysa, şifre sıfırlama bağlantısı gönderildi.
            Gelen kutunu (ve spam klasörünü) kontrol et.
          </p>
        ) : (
          <>
            <p className="mb-4 text-sm text-gray-600">
              Kayıtlı e-posta adresini gir, sana şifre sıfırlama bağlantısı
              gönderelim.
            </p>
            <form onSubmit={handleSubmit}>
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
              {error && <p className="mb-4 text-sm text-red-600">{error}</p>}
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-md bg-brand-600 px-4 py-2.5 font-medium text-white hover:bg-brand-700 disabled:opacity-60"
              >
                {loading ? "Gönderiliyor..." : "Sıfırlama Bağlantısı Gönder"}
              </button>
            </form>
          </>
        )}
        <p className="mt-4 text-center text-sm text-gray-600">
          <Link href="/login" className="font-medium text-brand-700">
            ← Girişe dön
          </Link>
        </p>
      </div>
    </main>
  );
}
