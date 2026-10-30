import { createClient as createSupabaseClient } from "@supabase/supabase-js";

// DİKKAT: Bu client service_role anahtarını kullanır, Row Level Security'yi
// tamamen bypass eder. SADECE sunucu tarafında ("use server" fonksiyonlar
// içinde) çağrılmalı, asla bir client component'e veya tarayıcıya
// gönderilmemeli. SUPABASE_SERVICE_ROLE_KEY ortam değişkeni (NEXT_PUBLIC_
// ÖNEKİ OLMADAN) Vercel'de ve .env.local'de ayarlanmalı.
export function createAdminClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !serviceKey) {
    throw new Error(
      "SUPABASE_SERVICE_ROLE_KEY tanımlı değil. Bu özellik için .env.local " +
        "(ve Vercel ortam değişkenleri) içine SUPABASE_SERVICE_ROLE_KEY " +
        "eklenmeli (NEXT_PUBLIC_ öneki OLMADAN, sadece sunucuda kullanılır)."
    );
  }
  return createSupabaseClient(url, serviceKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });
}
