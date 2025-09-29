import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const base = "https://www.ivonethbanqueteria.com.br";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
        ],
      },
    ],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
