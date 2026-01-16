/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  webpack: (config, { isServer }) => {
    // Deshabilitar el caché de webpack para evitar problemas
    config.cache = false;
    
    // Mejorar la resolución de módulos
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false,
    };
    
    return config;
  },
  experimental: {
    serverActions: {
      allowedOrigins: ["localhost:3007"],
    },
    optimizeCss: false, // Previene problemas con CSS chunks
  },
  // Configurar headers para mejor cache management
  async headers() {
    return [
      {
        source: '/_next/static/chunks/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
}

export default nextConfig