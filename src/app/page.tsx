import { redirect } from "next/navigation";

// Kök adres artık herkese açık "Mevzuat Kaynağı" sayfasına yönlendiriyor.
// Karne (giriş/kayıt) akışı /karne altında duruyor, değişmedi.
export default function RootPage() {
  redirect("/mevzuat");
}
