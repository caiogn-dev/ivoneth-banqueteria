import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "images.pexels.com" }],
    formats: ['image/avif', 'image/webp'],
    // liste explicitamente os 'quality' que você usa no projeto
    qualities: [60, 65, 70, 75, 80, 85],
  },
  
};

export default nextConfig;
