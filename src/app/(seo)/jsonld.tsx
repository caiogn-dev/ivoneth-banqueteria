import React from "react";

export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Caterer", // Banqueteria / Buffet
    name: "Ivoneth Banqueteria",
    url: "https://www.ivonethbanqueteria.com.br",
    logo: "https://www.ivonethbanqueteria.com.br/icon.png",
    image: "https://www.ivonethbanqueteria.com.br/og/og-ivoneth.jpg",
    description:
      "Banqueteria de alto padrão para casamentos, debutantes e formaturas em Palmas-TO. ISO 9001, acervo premium e menus autorais.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Quadra 112 Sul, RUA SR 1, Lote 06 (Ivoneth Buffet)",
      addressLocality: "Palmas",
      addressRegion: "TO",
      postalCode: "77020-170",
      addressCountry: "BR",
    },
    telephone: "+55-63-3217-4500",
    areaServed: ["Palmas-TO", "Região metropolitana de Palmas"],
    sameAs: [
      "https://www.instagram.com/seu-perfil",
      "https://www.facebook.com/seu-perfil",
      "https://www.linkedin.com/company/seu-perfil",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "120",
    },
  };

  return (
    <script
      type="application/ld+json"
      // @ts-expect-error // Correção para ESLint/TS
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}