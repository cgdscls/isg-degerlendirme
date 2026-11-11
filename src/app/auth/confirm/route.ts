import { NextResponse, type NextRequest } from "next/server";
import { createClient } from "@/lib/supabase/server";

// E-posta bağlantıları (şifre sıfırlama, kayıt onayı) için doğrulama.
// Bağlantı token_hash taşır; doğrulama sunucuda yapıldığı için bağlantı, isteğin
// yapıldığı tarayıcıdan farklı bir tarayıcıda veya cihazda açılsa da çalışır.
// Supabase e-posta şablonundaki bağlantı:
//   {{ .SiteURL }}/auth/confirm?token_hash={{ .TokenHash }}&type=recovery&next=/sifre-guncelle
export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const token_hash = url.searchParams.get("token_hash");
  const type = url.searchParams.get("type") as
    | "recovery"
    | "signup"
    | "email"
    | "invite"
    | "magiclink"
    | "email_change"
    | null;
  const nextHam = url.searchParams.get("next") ?? "/companies";
  const next = nextHam.startsWith("/") && !nextHam.startsWith("//") ? nextHam : "/companies";

  if (token_hash && type) {
    const supabase = createClient();
    // Tarayıcıda başka bir hesap açıksa önce kapatılır; aksi halde
    // şifre yanlış hesapta değiştirilebilir.
    await supabase.auth.signOut();
    const { error } = await supabase.auth.verifyOtp({ type, token_hash });
    if (!error) {
      return NextResponse.redirect(new URL(type === "recovery" ? "/sifre-guncelle?kurtarma=1" : next, url.origin));
    }
  }
  return NextResponse.redirect(new URL("/sifre-guncelle?hata=baglanti", url.origin));
}
