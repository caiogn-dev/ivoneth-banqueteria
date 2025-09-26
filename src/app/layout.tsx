import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ivoneth Banqueteria | Eventos Sociais em Palmas",
  description: "Casamentos, debutantes, aniversários e formaturas com assinatura gourmet e apresentação impecável.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-white">{children}</body>
    </html>
  );
}
