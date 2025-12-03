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
  webpack: (config, { dev, isServer }) => {
    // Configuraciones para evitar ChunkLoadError
    config.resolve = {
      ...config.resolve,
      fallback: {
        ...config.resolve.fallback,
      },
    };

    // Configurar cache y optimization
    if (dev && !isServer) {
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            default: {
              minChunks: 2,
              priority: -20,
              reuseExistingChunk: true,
            },
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              priority: -10,
              chunks: 'all',
              enforce: true,
            },
          },
        },
        runtimeChunk: {
          name: 'webpack-runtime',
        },
      };

      // Configurar DevServer para mejorar la estabilidad
      config.devServer = {
        ...config.devServer,
        hot: true,
        liveReload: false,
      };
    }

    // Configuraciones adicionales para resolver problemas de módulos
    config.resolve.alias = {
      ...config.resolve.alias,
    };

    return config;
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
}

export default nextConfig