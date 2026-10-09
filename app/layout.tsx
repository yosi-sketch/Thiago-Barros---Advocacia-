import type { Metadata, Viewport } from "next";
import { Cinzel, Manrope } from "next/font/google";
import { site } from "./site";
import "./globals.css";
const displayFont = Cinzel({ variable: "--font-display", subsets: ["latin"], weight: ["400", "500", "600"], display: "swap" });
const bodyFont = Manrope({ variable: "--font-body", subsets: ["latin"], display: "swap" });
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const metadataBase = siteUrl ? new URL(siteUrl) : undefined;
const title = "Thiago Barros | Advocacia Criminal e de Trânsito em Barbacena";
const description = "Advocacia criminal e de trânsito, consultoria e correspondência jurídica em Barbacena e região. Thiago Barros — OAB/MG 221.217. Atendimento: (32) 98899-5799.";
export const metadata: Metadata = {
  ...(metadataBase ? { metadataBase } : {}), title, description,
  keywords: ["Thiago Barros", "advogado em Barbacena", "advocacia criminal", "direito de trânsito", "consultoria jurídica", "correspondente jurídico em Barbacena"],
  openGraph: { title, description, locale: "pt_BR", siteName: site.name, type: "website", ...(metadataBase ? { images: [{ url: site.logo, width: 2172, height: 724, alt: "Thiago Barros — Advocacia e Consultoria Jurídica" }] } : {}) },
  twitter: { card: metadataBase ? "summary_large_image" : "summary", title, description, ...(metadataBase ? { images: [site.logo] } : {}) },
};
export const viewport: Viewport = { themeColor: "#0e100e" };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR" className={`${bodyFont.variable} ${displayFont.variable}`}><body className="min-h-screen font-sans antialiased">{children}</body></html>;
}
