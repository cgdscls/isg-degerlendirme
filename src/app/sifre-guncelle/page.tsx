"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function SifreGuncellePage() {
  const router = useRouter();
  const supabase = createClient();
  const [hazir, setHazir] = useState(false);
  const [sifre, setSifre] = useState("");
  const [sifreTekrar, setSifreTekrar] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [basarili, setBasarili] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Supabase, sıfırlama bağlantısındaki token'ı otomatik olarak
    // oturuma dönüştürür (detectSessionInUrl varsayılan olarak açık).
    supabase.auth.getSession().then(({ data }) => {
      setHazir(!!data.session);
    });
  }, [supabase]);

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
      setError("Şifre güncellenemedi, bağlantının süresi dolmuş olabilir.");
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

        {!hazir && !basarili && (
          <p className="text-sm text-gray-600">
            Bağlantı kontrol ediliyor... E-postandaki sıfırlama bağlantısına
            tıklayarak bu sayfaya geldiğinden emin ol.
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
