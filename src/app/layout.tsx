import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "acohete.es — Próximamente / En Construcción",
  description:
    "Despegue en curso. Desarrollo de software de alto impacto, automatización con Inteligencia Artificial e infraestructura cloud. Muy pronto en acohete.es.",
  keywords: [
    "acohete",
    "acohete.es",
    "software",
    "inteligencia artificial",
    "desarrollo web",
    "automatizacion",
    "espana",
  ],
  metadataBase: new URL("https://acohete.es"),
  openGraph: {
    title: "acohete.es — Preparando el despegue",
    description:
      "Plataforma de software, IA y automatización digital. Próximamente disponible.",
    url: "https://acohete.es",
    siteName: "acohete.es",
    locale: "es_ES",
    type: "website",
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
        {children}
      </body>
    </html>
  );
}
