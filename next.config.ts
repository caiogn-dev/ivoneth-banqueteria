// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,

  // Otimização de imagens
  images: {
    // Use formatos modernos sempre que possível
    formats: ["image/avif", "image/webp"],
    deviceSizes: [360, 414, 640, 768, 960, 1024, 1280, 1366, 1440, 1536],
    imageSizes: [16, 24, 32, 48, 64, 96, 128, 256],
  },

  // Headers úteis de cache e segurança (leves)
  async headers() {
    return [
      // Cache agressivo para imagens estáticas
      {
        source: "/:all*(avif|webp|png|jpg|jpeg|gif|svg)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      // Cache p/ fontes (se usar local ou @next/font com self-host)
      {
        source: "/:all*(woff|woff2|ttf|otf)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },

  // Redireciona para o domínio canônico (opcional, mas recomendado)
  async redirects() {
    return [
      // Se quiser consolidar em SEM www:
      { source: "/:path*", has: [{ type: "host", value: "www.ivonethbanqueteria.com.br" }], destination: "https://ivonethbanqueteria.com.br/:path*", permanent: true },
      // (Se preferir COM www, inverta o destino)
    ];
  },

  // Reduz JS enviado quando importar libs grandes (ex.: lucide, framer-motion)
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },

  // Se algum warning do ESLint estiver travando build em prod, pode usar:
  // eslint: { ignoreDuringBuilds: true },
  // typescript: { ignoreBuildErrors: false },
};

export default nextConfig;
