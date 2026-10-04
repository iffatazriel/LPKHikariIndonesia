import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Noto_Sans_JP } from "next/font/google";
import { ScrollToTop } from "@/components/ScrollToTop";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-jp",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "LPK Hikari Indonesia - Dari Sidareja ke Jepang",
  description: "LPK Hikari membantu mempersiapkan calon pekerja melalui pelatihan bahasa, pemagangan resmi (Kenshusei), dan pembinaan budaya kerja Jepang",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${plusJakarta.variable} ${notoSansJP.variable} h-full antialiased scroll-smooth`}>
      <body className="min-h-screen flex flex-col bg-white text-slate-700 font-sans antialiased">
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}
