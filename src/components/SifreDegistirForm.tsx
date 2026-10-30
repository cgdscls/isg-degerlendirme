"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";

export default function SifreDegistirForm() {
  const supabase = createClient();
  const [sifre, setSifre] = useState("");
  const [sifreTekrar, setSifreTekrar] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [basarili, setBasarili] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setBasarili(false);
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
      setError("Şifre güncellenemedi: " + error.message);
      return;
    }
    setSifre("");
    setSifreTekrar("");
    setBasarili(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div>
        <label className="mb-1 block text-xs font-medium text-gray-600">
          Yeni şifre
        </label>
        <input
          type="password"
          required
          minLength={6}
          value={sifre}
          onChange={(e) => setSifre(e.target.value)}
          className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
        />
      </div>
      <div>
        <label className="mb-1 block text-xs font-medium text-gray-600">
          Yeni şifre (tekrar)
        </label>
        <input
          type="password"
          required
          minLength={6}
          value={sifreTekrar}
          onChange={(e) => setSifreTekrar(e.target.value)}
          className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
        />
      </div>
      {error && <p className="text-sm text-red-600">{error}</p>}
      {basarili && <p className="text-sm text-green-700">Şifren güncellendi.</p>}
      <button
        type="submit"
        disabled={loading}
        className="rounded-md bg-brand-600 px-4 py-2 text-sm font-medium text-white hover:bg-brand-700 disabled:opacity-60"
      >
        {loading ? "Güncelleniyor..." : "Şifreyi Güncelle"}
      </button>
    </form>
  );
}
