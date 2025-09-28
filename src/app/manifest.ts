import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: "/",
    name: "Ivoneth Banqueteria",
    short_name: "Ivoneth",
    description:
      "Banqueteria de alto padrão para casamentos, debutantes e formaturas em Palmas-TO.",
    lang: "pt-BR",
    dir: "ltr",
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#ffffff",
    theme_color: "#6b0f2a", // marsala da sua paleta
    categories: ["food", "events", "lifestyle", "business"],
    icons: [
      // Android legacy / Chrome install
      { src: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      // Ícone principal (redondo/transparent — o seu icon.png)
      { src: "/icon.png", sizes: "512x512", type: "image/png", purpose: "any" },
      // Maskable (opcional — gere quando quiser um corte seguro em redondo)
      // { src: "/icon-maskable.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
      // Apple touch (para iOS)
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png", purpose: "any" },
    ],
    shortcuts: [
      { name: "Portfólio", url: "/#portfolio", description: "Ver eventos realizados" },
      { name: "Serviços", url: "/#services", description: "Tipos de eventos" },
      { name: "Orçamento 24h", url: "/#cta", description: "Solicitar proposta" },
    ],
    // Você pode adicionar screenshots depois (melhora installability):
    // screenshots: [
    //   { src: "/screenshots/home-portrait.png", sizes: "1179x2556", type: "image/png", form_factor: "narrow", label: "Página inicial" },
    //   { src: "/screenshots/home-landscape.png", sizes: "2556x1179", type: "image/png", form_factor: "wide", label: "Página inicial" },
    // ],
    prefer_related_applications: false,
  };
}
