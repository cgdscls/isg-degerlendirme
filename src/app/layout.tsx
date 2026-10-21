import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "İSG Değerlendirme",
  description: "İSG mevzuatına uyum öz-değerlendirme aracı",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
