import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  // Optionnel mais recommandé pour du full static
  images: {
    unoptimized: true,
  },

  // Si tu veux éviter les soucis de trailing slash sur certains hébergeurs
  trailingSlash: true,
};

export default nextConfig;