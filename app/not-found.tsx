'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Home, Search, ArrowLeft, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/pexels-pixabay-209251.jpg"
          alt="Background"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-blue-900/80 to-indigo-900/80" />
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${4 + (i % 8)}px`,
              height: `${4 + (i % 8)}px`,
              background: `hsl(${200 + (i * 10)}, 70%, ${50 + (i % 30)}%)`,
              left: `${(i * 3.33) % 100}%`,
              top: `${(i * 5.1) % 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, 50, -30, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [0.8, 1.3, 0.8],
            }}
            transition={{
              duration: 8 + (i % 4),
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-20 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl w-full">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Alert Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              className="inline-block mb-6"
            >
              <div className="relative">
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <AlertCircle className="w-20 h-20 sm:w-24 sm:h-24 text-yellow-400" />
                </motion.div>
                
                {/* Pulsing Ring */}
                <motion.div
                  className="absolute inset-0 border-4 border-yellow-400 rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.8, 0, 0.8],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
            </motion.div>

            {/* 404 Text */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-7xl sm:text-8xl md:text-9xl font-bold mb-4 sm:mb-6"
            >
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                404
              </span>
            </motion.h1>

            {/* Error Message */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4"
            >
              Página No Encontrada
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-12 px-4 max-w-2xl mx-auto"
            >
              Lo sentimos, la página que estás buscando no existe o ha sido movida.
              Te sugerimos regresar a la página principal o explorar nuestras otras secciones.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4"
            >
              <Button
                onClick={() => router.push('/')}
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold px-6 py-3 sm:px-8 sm:py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <Home className="w-5 h-5 mr-2" />
                Ir al Inicio
              </Button>

              <Button
                onClick={() => router.back()}
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-2 border-white/30 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 sm:px-8 sm:py-6 rounded-xl backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Regresar
              </Button>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3 }}
              className="mt-12 sm:mt-16"
            >
              <p className="text-gray-400 text-sm mb-4">Enlaces rápidos:</p>
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4 px-4">
                {[
                  { label: 'Tienda', path: '/store' },
                  { label: 'Blog', path: '/blog' },
                  { label: 'Sobre Nosotros', path: '/sobre-nosotros' },
                  { label: 'FAQ', path: '/faq' },
                ].map((link, index) => (
                  <motion.button
                    key={link.path}
                    onClick={() => router.push(link.path)}
                    className="text-sm sm:text-base text-gray-300 hover:text-white underline underline-offset-4 transition-colors duration-200"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.4 + index * 0.1 }}
                  >
                    {link.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Decorative Elements */}
          <motion.div
            className="absolute top-10 left-10 opacity-20 hidden lg:block"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <Search className="w-32 h-32 text-blue-400" />
          </motion.div>

          <motion.div
            className="absolute bottom-10 right-10 opacity-20 hidden lg:block"
            animate={{
              rotate: [360, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <Search className="w-32 h-32 text-purple-400" />
          </motion.div>
        </div>
      </div>

      {/* Animated Grid Background */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="h-full w-full" style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }} />
      </div>
    </div>
  );
}
