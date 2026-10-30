// Resend üzerinden e-posta gönderimi. RESEND_API_KEY ortam değişkeni
// yoksa (yerel geliştirmede henüz ayarlanmamışsa) sessizce atlar, hata
// fırlatmaz — bildirim gönderememek ana işlemi (bilet oluşturma vb.)
// bozmamalı.
export async function sendEmail(params: {
  to: string;
  subject: string;
  html: string;
}) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn("RESEND_API_KEY tanımlı değil, e-posta gönderilmedi.");
    return;
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "İSG Mevzuat Uyum Karnesi <destek@isgmevzuat.tr>",
        to: params.to,
        subject: params.subject,
        html: params.html,
      }),
    });
    if (!res.ok) {
      console.error("Resend e-posta gönderim hatası:", await res.text());
    }
  } catch (err) {
    console.error("Resend e-posta gönderim hatası:", err);
  }
}
