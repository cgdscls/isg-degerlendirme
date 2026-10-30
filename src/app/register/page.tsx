"use client";

import { useState } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";

export default function RegisterPage() {
  const supabase = createClient();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);
  const [kabulEdildi, setKabulEdildi] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (!kabulEdildi) {
      setError("Devam etmek için KVKK Aydınlatma Metni'ni ve Kullanım Koşulları'nı kabul etmelisiniz.");
      return;
    }
    setLoading(true);
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { full_name: fullName } },
    });
    setLoading(false);
    if (error) {
      setError(error.message);
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
        <h1 className="mb-6 text-xl font-semibold text-brand-700">Kayıt Ol</h1>

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
