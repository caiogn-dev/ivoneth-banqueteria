import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.ivonethbanqueteria.com.br";
  const now = new Date().toISOString();

  return [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    // se tiver páginas internas futuramente, liste aqui:
    // { url: `${base}/corporativo`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];
}
