/** @type {import('next').NextConfig} */
const nextConfig = {
  // Producción: NO ignorar errores de ESLint y TypeScript
  eslint: {
    ignoreDuringBuilds: false,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  
  // Optimización de imágenes para producción
  images: {
    unoptimized: false,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      }
    ],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // Configuración para producción
  experimental: {
    serverActions: {
      allowedOrigins: process.env.NODE_ENV === 'production' 
        ? ["linkerpro.com", "www.linkerpro.com"]
        : ["localhost:3000", "localhost:3007"],
    },
  },
  
  // Configuración de headers de seguridad
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
  
  // Redirecciones para SEO
  async redirects() {
    return [
      {
        source: '/guides',
        destination: '/guias',
        permanent: true,
      },
      {
        source: '/privacy',
        destination: '/legal/politica-privacidad',
        permanent: true,
      },
    ];
  },
  
  // Configuración de compresión
  compress: true,
  
  // Configuración de logging para producción
  logging: {
    fetches: {
      fullUrl: process.env.NODE_ENV === 'development',
    },
  },
  
  // PWA y optimizaciones
  swcMinify: true,
  
  // Configuración de output para deployment
  output: 'standalone',
}

export default nextConfig