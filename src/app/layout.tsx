import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import { SITE_URL, CL_SITE_URL } from "@/lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | acohete.es",
    default: "acohete.es — Agencia de Marketing Digital & Growth Engineering en España",
  },
  description:
    "Agencia de marketing digital en España Google Partner Oficial. Especialistas en sistemas de captación con IA, Google Ads, SEO Generativo (GEO), desarrollo web y producción audiovisual orientados a ROAS.",
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: SITE_URL,
    languages: {
      "es-ES": SITE_URL,
      "es-CL": CL_SITE_URL,
      "x-default": SITE_URL,
    },
  },
  openGraph: {
    title: "acohete.es — Agencia de Marketing Digital & Growth Engineering en España",
    description:
      "Transformamos tu inversión en facturación predecible. Especialistas certificados en Google Ads, SEO Generativo (GEO), Desarrollo Web y Audiovisual en Madrid, Barcelona y toda España.",
    url: SITE_URL,
    siteName: "acohete.es",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/img/logo.png`,
        width: 1200,
        height: 630,
        alt: "acohete.es — Marketing Digital y Growth Engineering en España",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "acohete.es — Marketing Digital con IA en España",
    description: "Sistemas de captación, Google Ads y SEO Generativo para empresas de alto rendimiento.",
    images: [`${SITE_URL}/img/logo.png`],
  },
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#07090e] text-slate-100 selection:bg-orange-500 selection:text-white">
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
