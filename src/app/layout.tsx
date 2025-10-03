import "./globals.css";
import JsonLd from "./(seo)/jsonld";
import type { Metadata } from "next";
import FloatingWhatsappButton from "@/components/core/FloatingWhatsappButton";
import GoogleTagManager from "@/components/core/GoogleTagManager";

// ✅ Ajuste para seu domínio real
const SITE_URL = "https://www.ivonethbanqueteria.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Ivoneth Banqueteria – Casamentos e eventos sociais em Palmas",
    template: "%s · Ivoneth Banqueteria",
  },
  description:
    "Casamentos, debutantes, aniversários e formaturas com assinatura gourmet e apresentação impecável em Palmas-TO. ISO 9001, acervo premium e menus autorais.",
  keywords: [
    "banqueteria",
    "buffet casamento",
    "buffet Palmas",
    "eventos sociais",
    "debutante",
    "formatura",
    "Palmas TO",
    "catering",
  ],
  alternates: {
    canonical: "/",
    languages: {
      "pt-BR": "/",
      // "en-US": "/en", // habilite quando tiver versão em inglês
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Ivoneth Banqueteria",
    url: SITE_URL + "/",
    title: "Ivoneth Banqueteria – Casamentos e eventos sociais",
    description:
      "Experiências gastronômicas que encantam olhos e paladar. ISO 9001 e acervo premium.",
    images: [
      {
        url: "/og/og-ivoneth.jpg", // coloque este arquivo em /public/og/og-ivoneth.jpg (1200x630)
        width: 1200,
        height: 630,
        alt: "Mesa de casamento Ivoneth Banqueteria",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ivoneth Banqueteria – Casamentos e eventos sociais",
    description:
      "Banqueteria de alto padrão em Palmas-TO. ISO 9001, acervo premium e menus autorais.",
    images: ["/og/og-ivoneth.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  verification: {
    // Se usar Search Console, preencha aqui:
    google: "", // ex.: "abcdefg123456"
  },
  category: "eventos",
  authors: [{ name: "Ivoneth Banqueteria" }],
  creator: "Ivoneth Banqueteria",
  publisher: "Ivoneth Banqueteria",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
     <body className="min-h-screen bg-white scroll-smooth">
        <GoogleTagManager />
        <JsonLd />
        {children}
        <FloatingWhatsappButton /> {/* ✅ Adicione o botão aqui */}
     </body>
    </html>
  );
}
