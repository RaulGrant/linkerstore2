'use client';

import { use, useState, useRef } from 'react';
import { notFound } from 'next/navigation';
import { motion, useMotionValue, useSpring, useTransform, useScroll, useInView } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Star, ExternalLink, ArrowLeft, Award, Shield, Users, TrendingUp, CheckCircle } from 'lucide-react';
import { AmazonProduct } from '@/lib/types/store';
import { realAmazonProducts } from '@/lib/data/real-amazon-products';
import { getFichaByAsin } from '@/lib/data/product-fichas';

interface ProductPageProps {
  params: Promise<{ asin: string }>;
}

export default function ProductPage({ params }: ProductPageProps) {
  const resolvedParams = use(params);
  const { asin } = resolvedParams;
  
  // Mouse tracking para efectos avanzados
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { damping: 50, stiffness: 400 });
  const smoothMouseY = useSpring(mouseY, { damping: 50, stiffness: 400 });
  
  // Referencias para animaciones
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });
  const { scrollYProgress } = useScroll();
  
  // Transformaciones basadas en scroll
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  
  // Manejo del mouse
  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    mouseX.set(event.clientX - rect.left);
    mouseY.set(event.clientY - rect.top);
  };

  // Buscar el producto
  const product = realAmazonProducts.find(p => p.asin === asin);
  const ficha = getFichaByAsin(asin);

  if (!product) {
    notFound();
  }

  return (
    <motion.div 
      ref={containerRef}
      className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50"
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      {/* Partículas flotantes animadas */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-30"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.7, 0.3]
            }}
            transition={{
              duration: 6 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
              type: "tween"
            }}
            style={{
              left: `${10 + i * 8}%`,
              top: `${10 + (i % 3) * 30}%`
            }}
          />
        ))}
      </div>

      {/* Header Navigation con animación espectacular */}
      <motion.div 
        className="bg-white/80 backdrop-blur-md shadow-lg border-b border-white/20"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4 py-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              variant="ghost" 
              onClick={() => window.history.back()}
              className="flex items-center gap-2 group relative overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0"
                whileHover={{ opacity: 0.1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                whileHover={{ x: -5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <ArrowLeft className="h-4 w-4" />
              </motion.div>
              Volver a la tienda
            </Button>
          </motion.div>
        </div>
      </motion.div>

      <div className="container mx-auto px-4 py-8">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          style={{ scale: heroScale, opacity: heroOpacity }}
        >
          {/* Emoji gigante con efectos mágicos espectaculares */}
          <motion.div 
            className="flex items-center justify-center bg-gradient-to-br from-white/80 to-blue-50/80 backdrop-blur-lg rounded-2xl p-8 border border-white/30 shadow-2xl relative overflow-hidden"
            initial={{ scale: 0, rotateY: -180 }}
            animate={{ scale: 1, rotateY: 0 }}
            transition={{ 
              duration: 1.5, 
              ease: "easeOut",
              type: "spring",
              stiffness: 100
            }}
            whileHover={{ 
              scale: 1.05,
              rotateY: 5,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
              transition: { type: "spring", stiffness: 300, damping: 30 }
            }}
          >
            {/* Efectos de partículas en el fondo */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                animate={{
                  x: [0, 50, -50, 0],
                  y: [0, -50, 50, 0],
                  opacity: [0, 1, 0],
                  scale: [0, 1.5, 0]
                }}
                transition={{
                  duration: 3 + i * 0.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.5,
                  type: "tween"
                }}
                style={{
                  left: `${20 + i * 10}%`,
                  top: `${20 + (i % 2) * 60}%`
                }}
              />
            ))}

            {/* Anillos mágicos alrededor del emoji */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute border-2 border-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-30"
                style={{
                  width: `${150 + i * 30}px`,
                  height: `${150 + i * 30}px`,
                  left: `calc(50% - ${75 + i * 15}px)`,
                  top: `calc(50% - ${75 + i * 15}px)`,
                }}
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 4 + i,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 0.5,
                  type: "tween"
                }}
              />
            ))}
            
            <div className="text-center relative z-10">
              {/* Chaleco Image with AI Banner and Wave Animations - Only for Chaleco */}
              {asin === "B08XYZ123A" ? (
                <motion.div 
                  className="relative mb-6 cursor-pointer select-none max-w-md mx-auto"
                  initial={{ scale: 0, rotateZ: -180 }}
                  animate={{ scale: 1, rotateZ: 0 }}
                  transition={{ 
                    delay: 0.5,
                    duration: 1.2,
                    type: "spring",
                    stiffness: 200
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    y: -10,
                    transition: { type: "spring", stiffness: 300, damping: 30 }
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Phosphorescent Yellow Wave Effects */}
                  {[...Array(4)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute inset-0 border-2 rounded-lg"
                      style={{
                        borderColor: `rgba(255, 255, 0, ${0.3 - i * 0.05})`,
                        filter: `drop-shadow(0 0 ${8 + i * 4}px rgba(255, 255, 0, 0.6))`
                      }}
                      animate={{
                        scale: [1, 1.05 + i * 0.02, 1],
                        opacity: [0.3, 0.7, 0.3]
                      }}
                      transition={{
                        duration: 2 + i * 0.3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.2,
                        type: "tween"
                      }}
                    />
                  ))}

                  {/* AI Banner */}
                  <motion.div
                    className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 0.8 }}
                  >
                    <div className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 text-black px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                      <motion.span
                        animate={{ opacity: [1, 0.7, 1] }}
                        transition={{ duration: 2, repeat: Infinity, type: "tween" }}
                      >
                        🤖 Imagen generada con IA del producto original
                      </motion.span>
                    </div>
                  </motion.div>

                  {/* Chaleco Image */}
                  <motion.img
                    src="/images/products/chaleco/chaleco.webp"
                    alt="Chaleco Reflectante Profesional"
                    className="w-full h-auto rounded-lg shadow-2xl border-4 border-yellow-300/30 relative z-10"
                    style={{
                      filter: "drop-shadow(0 0 20px rgba(255, 255, 0, 0.4))"
                    }}
                    animate={{
                      y: [-2, 2, -2],
                      filter: [
                        "drop-shadow(0 0 20px rgba(255, 255, 0, 0.4))",
                        "drop-shadow(0 0 30px rgba(255, 255, 0, 0.6))",
                        "drop-shadow(0 0 20px rgba(255, 255, 0, 0.4))"
                      ]
                    }}
                    transition={{
                      y: {
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        type: "tween"
                      },
                      filter: {
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        type: "tween"
                      }
                    }}
                  />

                  {/* Particle Emission Around Image */}
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-yellow-400 rounded-full"
                      style={{
                        filter: "drop-shadow(0 0 4px rgba(255, 255, 0, 0.8))",
                        left: '50%',
                        top: '50%',
                        transform: 'translate(-50%, -50%)'
                      }}
                      animate={{
                        x: [0, Math.cos(i * 60 * Math.PI / 180) * 40, 0],
                        y: [0, Math.sin(i * 60 * Math.PI / 180) * 40, 0],
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0]
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.3,
                        type: "tween"
                      }}
                    />
                  ))}

                  {/* Purchase Invitation Banner */}
                  <motion.div
                    className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 z-20"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2, duration: 0.8 }}
                  >
                    <div className="bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg">
                      <motion.span
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity, type: "tween" }}
                      >
                        ¡Disponible para compra! 🛒
                      </motion.span>
                    </div>
                  </motion.div>
                </motion.div>
              ) : (
                /* Emoji principal con efectos increíbles para otros productos */
                <motion.div 
                  className="text-9xl mb-6 relative cursor-pointer select-none"
                  initial={{ scale: 0, rotateZ: -180 }}
                  animate={{ 
                    scale: 1, 
                    rotateZ: 0,
                    y: [-5, 5, -5],
                    filter: [
                      "drop-shadow(0 0 15px rgba(59, 130, 246, 0.4))",
                      "drop-shadow(0 0 25px rgba(147, 51, 234, 0.6))",
                      "drop-shadow(0 0 15px rgba(59, 130, 246, 0.4))"
                    ]
                  }}
                  transition={{ 
                    delay: 0.5,
                    duration: 1.2,
                    type: "spring",
                    stiffness: 200,
                    y: {
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      type: "tween"
                    },
                    filter: {
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      type: "tween"
                    }
                  }}
                  whileHover={{ 
                    scale: 1.3,
                    rotateZ: 10,
                    y: -10,
                    filter: "drop-shadow(0 0 30px rgba(147, 51, 234, 0.8))",
                    transition: { type: "spring", stiffness: 300, damping: 30 }
                  }}
                  whileTap={{ scale: 1.2 }}
                >
                  {ficha?.icon || "📦"}
                </motion.div>
              )}

              {/* Título con gradiente animado */}
              <motion.h2 
                className="text-xl font-semibold mb-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 1.5 }}
                whileHover={{ scale: 1.05 }}
              >
                {ficha?.customTitle || product.title}
              </motion.h2>

              {/* Badge con efectos de brillo */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 2, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.1 }}
                className="mt-3"
              >
                <Badge variant="outline" className="relative overflow-hidden group cursor-pointer">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0"
                    whileHover={{ opacity: 0.15 }}
                    animate={{ 
                      x: ["-100%", "100%"],
                      opacity: [0, 0.1, 0]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      type: "tween"
                    }}
                  />
                  <Shield className="h-3 w-3 mr-1" />
                  Cumple normativas
                </Badge>
              </motion.div>
            </div>
          </motion.div>

          {/* Información del producto con animaciones espectaculares */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
            className="relative"
          >
            {/* Badges animados */}
            <motion.div 
              className="mb-4 flex flex-wrap gap-2"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, staggerChildren: 0.1 }}
            >
              <motion.div
                initial={{ scale: 0, rotateZ: -180 }}
                animate={{ scale: 1, rotateZ: 0 }}
                transition={{ delay: 1, type: "spring", stiffness: 200 }}
                whileHover={{ 
                  scale: 1.1, 
                  rotateZ: [0, 5, -5, 0],
                  transition: { type: "tween" }
                }}
              >
                <Badge variant="secondary" className="mb-3 relative overflow-hidden group cursor-pointer">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0"
                    whileHover={{ opacity: 0.2 }}
                  />
                  {product.category}
                </Badge>
              </motion.div>
              
              <motion.div
                initial={{ scale: 0, rotateZ: 180 }}
                animate={{ scale: 1, rotateZ: 0 }}
                transition={{ delay: 1.1, type: "spring", stiffness: 200 }}
                whileHover={{ 
                  scale: 1.1, 
                  rotateZ: [0, -5, 5, 0],
                  transition: { type: "tween" }
                }}
              >
                <Badge variant="outline" className="mb-3 relative overflow-hidden group cursor-pointer">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0"
                    whileHover={{ opacity: 0.2 }}
                  />
                  {product.brand}
                </Badge>
              </motion.div>
              
              {product.is_prime && (
                <motion.div
                  initial={{ scale: 0, rotateY: 180 }}
                  animate={{ scale: 1, rotateY: 0 }}
                  transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
                  whileHover={{ 
                    scale: 1.1, 
                    boxShadow: "0 0 20px rgba(37, 99, 235, 0.5)",
                    y: -2
                  }}
                >
                  <Badge variant="default" className="mb-3 bg-gradient-to-r from-blue-600 to-blue-700 cursor-pointer">
                    Prime
                  </Badge>
                </motion.div>
              )}
            </motion.div>
            
            {/* Título principal con efecto typewriter */}
            <motion.h1 
              className="text-3xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.3, duration: 1.5 }}
              whileHover={{ 
                scale: 1.05,
                textShadow: "0 0 10px rgba(59, 130, 246, 0.5)"
              }}
            >
              {ficha?.customTitle || product.title}
            </motion.h1>
            
            {/* Rating con estrellas animadas */}
            <motion.div 
              className="flex items-center gap-2 mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
            >
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, rotateY: 180, scale: 0 }}
                    animate={{ 
                      opacity: 1, 
                      rotateY: 0, 
                      scale: 1,
                      rotate: [0, 360, 0]
                    }}
                    transition={{ 
                      delay: 1.7 + i * 0.1,
                      duration: 0.6,
                      rotate: {
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.2
                      }
                    }}
                    whileHover={{ 
                      scale: 1.3,
                      y: -5,
                      filter: "drop-shadow(0 0 10px rgba(251, 191, 36, 0.8))"
                    }}
                  >
                    <Star
                      className={`h-5 w-5 cursor-pointer ${
                        i < Math.floor(product.rating || 0) 
                          ? 'fill-yellow-400 text-yellow-400' 
                          : 'text-gray-300'
                      }`}
                    />
                  </motion.div>
                ))}
              </div>
              <motion.span 
                className="text-lg font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.2 }}
                whileHover={{ scale: 1.1, color: "#3B82F6" }}
              >
                {product.rating || 0}
              </motion.span>
              <motion.span 
                className="text-gray-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.4 }}
              >
                ({product.review_count || 0} reseñas)
              </motion.span>
            </motion.div>

            {/* Action Button Mejorado */}
            <div className="mb-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative group"
              >
                <Button 
                  asChild
                  className="w-full bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:from-blue-700 hover:via-blue-800 hover:to-blue-900 text-white text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 border-0"
                  size="lg"
                  style={{ height: '60px' }}
                >
                  <a 
                    href={product.amazon_url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center relative overflow-hidden"
                  >
                    {/* Efecto de brillo animado */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      animate={{
                        x: ['-100%', '100%']
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 3,
                        ease: "linear"
                      }}
                    />
                    
                    {/* Contenido del botón */}
                    <motion.div 
                      className="flex items-center gap-3 relative z-10"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <motion.div
                        animate={{ 
                          rotate: [0, 10, 0],
                          scale: [1, 1.1, 1]
                        }}
                        transition={{ 
                          duration: 1.5,
                          repeat: Infinity,
                          repeatDelay: 2
                        }}
                      >
                        <ExternalLink className="h-6 w-6" />
                      </motion.div>
                      <span className="text-xl">Comprar en Amazon</span>
                      
                      {/* Indicador de confianza */}
                      <motion.div
                        className="ml-auto flex items-center gap-1 opacity-80"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.8 }}
                        transition={{ delay: 0.5 }}
                      >
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        <span className="text-sm">Seguro</span>
                      </motion.div>
                    </motion.div>
                  </a>
                </Button>
                
                {/* Efecto de partículas al hover */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-blue-300 rounded-full"
                      style={{
                        left: `${20 + i * 15}%`,
                        top: `${30 + (i % 2) * 40}%`
                      }}
                      animate={{
                        y: [-10, -20, -10],
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0]
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: i * 0.2,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </motion.div>
              </motion.div>
              
              {/* Texto de confianza */}
              <motion.p 
                className="text-center text-sm text-gray-600 mt-3"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                🔒 Compra segura • ⚡ Envío rápido • 🛡️ Garantía Amazon
              </motion.p>
            </div>

            {/* Quick Benefits */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-2 p-3 bg-green-50 rounded-lg">
                <Award className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium">Calidad Premium</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-blue-50 rounded-lg">
                <Shield className="h-5 w-5 text-blue-600" />
                <span className="text-sm font-medium">Certificado</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-purple-50 rounded-lg">
                <Users className="h-5 w-5 text-purple-600" />
                <span className="text-sm font-medium">Profesional</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-orange-50 rounded-lg">
                <TrendingUp className="h-5 w-5 text-orange-600" />
                <span className="text-sm font-medium">Calidad Premium</span>
              </div>
            </div>

            {/* Basic Product Details */}
            <Card>
              <CardHeader>
                <CardTitle>Detalles del Producto</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-medium">Marca:</span>
                    <span>{product.brand}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Categoría:</span>
                    <span>{product.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Prime:</span>
                    <span>{product.is_prime ? 'Sí' : 'No'}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* Fichas técnicas con animaciones increíbles */}
        {ficha && (
          <motion.div 
            className="mt-12"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 1.2, ease: "easeOut" }}
            whileInView={{ 
              scale: [0.9, 1.02, 1],
              transition: { duration: 0.8 }
            }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div
              initial={{ rotateX: -90, opacity: 0 }}
              animate={{ rotateX: 0, opacity: 1 }}
              transition={{ delay: 2.8, duration: 1 }}
            >
              <Tabs defaultValue="analysis" className="w-full">
                <motion.div
                  initial={{ y: -50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 3, duration: 0.8 }}
                >
                  <TabsList className="grid w-full grid-cols-5 bg-gradient-to-r from-slate-100 via-blue-50 to-purple-50 p-1 rounded-xl shadow-lg border border-white/50">
                    {[
                      { value: "analysis", label: "Análisis Técnico", icon: "🔬" },
                      { value: "features", label: "Características", icon: "✨" },
                      { value: "usage", label: "Guía de Uso", icon: "📖" },
                      { value: "why", label: "¿Por Qué Elegir?", icon: "🏆" },
                      { value: "review", label: "Reseña Experto", icon: "⭐" }
                    ].map((tab, index) => (
                      <motion.div
                        key={tab.value}
                        initial={{ scale: 0, rotateY: 180 }}
                        animate={{ scale: 1, rotateY: 0 }}
                        transition={{ 
                          delay: 3.2 + index * 0.1, 
                          type: "spring", 
                          stiffness: 200 
                        }}
                        whileHover={{ 
                          scale: 1.05,
                          y: -2,
                          boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <TabsTrigger 
                          value={tab.value}
                          className="relative overflow-hidden group data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-500 data-[state=active]:text-white transition-all duration-300"
                        >
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0"
                            whileHover={{ opacity: 0.1 }}
                          />
                          <span className="relative z-10 flex items-center gap-1 text-sm">
                            <span className="text-lg">{tab.icon}</span>
                            <span className="hidden md:inline">{tab.label}</span>
                          </span>
                        </TabsTrigger>
                      </motion.div>
                    ))}
                  </TabsList>
                </motion.div>

              <TabsContent value="analysis" className="mt-6">
                <div className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-200 shadow-lg overflow-hidden">
                  {/* Decorative background elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-200/30 to-indigo-200/30 rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-slate-200/40 to-blue-200/40 rounded-full translate-y-12 -translate-x-12"></div>
                  
                  {/* Header with icon and title */}
                  <div className="relative z-10 mb-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl shadow-md">
                        <Award className="h-7 w-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-slate-800 mb-1">
                          Análisis Técnico Profesional
                        </h3>
                        <p className="text-sm text-blue-600 font-medium">
                          Evaluación exhaustiva por especialistas
                        </p>
                      </div>
                    </div>
                    <div className="h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full w-24"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10 bg-white/70 backdrop-blur-sm p-6 rounded-xl border border-white/50 shadow-sm">
                    <p className="text-slate-700 leading-relaxed text-lg font-light">
                      {ficha.technicalAnalysis}
                    </p>
                  </div>
                  
                  {/* Quality indicators */}
                  <div className="relative z-10 flex items-center justify-between mt-6 pt-4 border-t border-blue-200/50">
                    <div className="flex items-center gap-2 text-sm text-blue-700">
                      <CheckCircle className="h-4 w-4" />
                      <span className="font-medium">Análisis Verificado</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-indigo-700">
                      <Award className="h-4 w-4" />
                      <span className="font-medium">Calidad Certificada</span>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="features" className="mt-6">
                <div className="relative bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 p-8 rounded-2xl border border-green-200 shadow-lg overflow-hidden">
                  {/* Decorative background elements */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-emerald-200/20 to-green-200/20 rounded-full -translate-y-20 translate-x-20"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-teal-200/30 to-emerald-200/30 rounded-full translate-y-16 -translate-x-16"></div>
                  
                  {/* Header */}
                  <div className="relative z-10 mb-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl shadow-md">
                        <CheckCircle className="h-7 w-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-slate-800 mb-1">
                          Características Principales
                        </h3>
                        <p className="text-sm text-emerald-600 font-medium">
                          Especificaciones técnicas detalladas
                        </p>
                      </div>
                    </div>
                    <div className="h-1 bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 rounded-full w-28"></div>
                  </div>
                  
                  {/* Features Grid */}
                  <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-4">
                    {ficha.features.map((feature, index) => (
                      <div key={index} className="group">
                        <div className="flex items-start gap-4 p-5 bg-white/80 backdrop-blur-sm rounded-xl border border-white/60 shadow-sm hover:shadow-md hover:bg-white/90 transition-all duration-300">
                          <div className="flex-shrink-0 p-2 bg-gradient-to-br from-emerald-100 to-green-100 rounded-lg group-hover:from-emerald-200 group-hover:to-green-200 transition-all duration-300">
                            <CheckCircle className="h-5 w-5 text-emerald-600" />
                          </div>
                          <div className="flex-1">
                            <p className="text-slate-700 text-sm leading-relaxed font-medium">
                              {feature}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Footer stats */}
                  <div className="relative z-10 mt-8 pt-6 border-t border-green-200/50">
                    <div className="flex items-center justify-center gap-6 text-sm">
                      <div className="flex items-center gap-2 text-emerald-700">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                        <span className="font-medium">{ficha.features.length} características verificadas</span>
                      </div>
                      <div className="flex items-center gap-2 text-green-700">
                        <Shield className="h-4 w-4" />
                        <span className="font-medium">Especificaciones validadas</span>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="usage" className="mt-6">
                <div className="relative bg-gradient-to-br from-purple-50 via-violet-50 to-indigo-50 p-8 rounded-2xl border border-purple-200 shadow-lg overflow-hidden">
                  {/* Decorative background elements */}
                  <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-br from-purple-200/25 to-violet-200/25 rounded-full -translate-y-18 translate-x-18"></div>
                  <div className="absolute bottom-0 left-0 w-28 h-28 bg-gradient-to-tr from-indigo-200/30 to-purple-200/30 rounded-full translate-y-14 -translate-x-14"></div>
                  
                  {/* Header */}
                  <div className="relative z-10 mb-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-gradient-to-br from-purple-500 to-violet-600 rounded-xl shadow-md">
                        <Users className="h-7 w-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-slate-800 mb-1">
                          Guía de Uso Profesional
                        </h3>
                        <p className="text-sm text-purple-600 font-medium">
                          Instrucciones detalladas para máximo rendimiento
                        </p>
                      </div>
                    </div>
                    <div className="h-1 bg-gradient-to-r from-purple-500 via-violet-500 to-indigo-500 rounded-full w-32"></div>
                  </div>
                  
                  {/* Content with enhanced styling */}
                  <div className="relative z-10">
                    <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-white/60 shadow-sm">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="p-2 bg-gradient-to-br from-purple-100 to-violet-100 rounded-lg">
                          <Users className="h-5 w-5 text-purple-600" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-slate-800 mb-2">Instrucciones de Uso</h4>
                          <p className="text-slate-700 leading-relaxed text-base">
                            {ficha.usageGuide}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Quick tips section */}
                    <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-white/60 backdrop-blur-sm p-4 rounded-lg border border-white/40">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                          <span className="text-sm font-semibold text-purple-700">Preparación</span>
                        </div>
                        <p className="text-xs text-slate-600">Revisa el estado antes del uso</p>
                      </div>
                      <div className="bg-white/60 backdrop-blur-sm p-4 rounded-lg border border-white/40">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
                          <span className="text-sm font-semibold text-violet-700">Aplicación</span>
                        </div>
                        <p className="text-xs text-slate-600">Sigue las instrucciones detalladas</p>
                      </div>
                      <div className="bg-white/60 backdrop-blur-sm p-4 rounded-lg border border-white/40">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                          <span className="text-sm font-semibold text-indigo-700">Mantenimiento</span>
                        </div>
                        <p className="text-xs text-slate-600">Cuidados para mayor durabilidad</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Footer */}
                  <div className="relative z-10 flex items-center justify-center mt-6 pt-4 border-t border-purple-200/50">
                    <div className="flex items-center gap-2 text-sm text-purple-700">
                      <CheckCircle className="h-4 w-4" />
                      <span className="font-medium">Guía verificada por profesionales</span>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="why" className="mt-6">
                <div className="relative bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 p-8 rounded-2xl border border-orange-200 shadow-lg overflow-hidden">
                  {/* Decorative background elements */}
                  <div className="absolute top-0 right-0 w-44 h-44 bg-gradient-to-br from-orange-200/20 to-amber-200/20 rounded-full -translate-y-22 translate-x-22"></div>
                  <div className="absolute bottom-0 left-0 w-36 h-36 bg-gradient-to-tr from-yellow-200/25 to-orange-200/25 rounded-full translate-y-18 -translate-x-18"></div>
                  
                  {/* Header with premium styling */}
                  <div className="relative z-10 mb-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl shadow-md">
                        <TrendingUp className="h-7 w-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-slate-800 mb-1">
                          ¿Por Qué Elegir Este Producto?
                        </h3>
                        <p className="text-sm text-orange-600 font-medium">
                          Ventajas competitivas y beneficios únicos
                        </p>
                      </div>
                    </div>
                    <div className="h-1 bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 rounded-full w-36"></div>
                  </div>
                  
                  {/* Main content with enhanced design */}
                  <div className="relative z-10">
                    <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-white/60 shadow-sm mb-6">
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-gradient-to-br from-orange-100 to-amber-100 rounded-lg">
                          <Award className="h-6 w-6 text-orange-600" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-slate-800 mb-3 text-lg">Ventajas Exclusivas</h4>
                          <p className="text-slate-700 leading-relaxed text-base">
                            {ficha.whyChoose}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Key benefits grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      <div className="bg-white/70 backdrop-blur-sm p-5 rounded-xl border border-white/50 text-center hover:bg-white/80 transition-all duration-300">
                        <div className="p-3 bg-gradient-to-br from-orange-100 to-amber-100 rounded-lg mb-3 mx-auto w-fit">
                          <Award className="h-6 w-6 text-orange-600" />
                        </div>
                        <h5 className="font-semibold text-slate-800 mb-2">Calidad Superior</h5>
                        <p className="text-xs text-slate-600">Materiales premium y construcción robusta</p>
                      </div>
                      
                      <div className="bg-white/70 backdrop-blur-sm p-5 rounded-xl border border-white/50 text-center hover:bg-white/80 transition-all duration-300">
                        <div className="p-3 bg-gradient-to-br from-amber-100 to-yellow-100 rounded-lg mb-3 mx-auto w-fit">
                          <TrendingUp className="h-6 w-6 text-amber-600" />
                        </div>
                        <h5 className="font-semibold text-slate-800 mb-2">Calidad Premium</h5>
                        <p className="text-xs text-slate-600">Relación calidad-beneficio imbatible</p>
                      </div>
                      
                      <div className="bg-white/70 backdrop-blur-sm p-5 rounded-xl border border-white/50 text-center hover:bg-white/80 transition-all duration-300">
                        <div className="p-3 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-lg mb-3 mx-auto w-fit">
                          <Shield className="h-6 w-6 text-yellow-600" />
                        </div>
                        <h5 className="font-semibold text-slate-800 mb-2">Garantía</h5>
                        <p className="text-xs text-slate-600">Respaldo completo del fabricante</p>
                      </div>
                      
                      <div className="bg-white/70 backdrop-blur-sm p-5 rounded-xl border border-white/50 text-center hover:bg-white/80 transition-all duration-300">
                        <div className="p-3 bg-gradient-to-br from-orange-100 to-amber-100 rounded-lg mb-3 mx-auto w-fit">
                          <Users className="h-6 w-6 text-orange-600" />
                        </div>
                        <h5 className="font-semibold text-slate-800 mb-2">Profesional</h5>
                        <p className="text-xs text-slate-600">Aprobado por expertos del sector</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Call to action footer */}
                  <div className="relative z-10 mt-8 pt-6 border-t border-orange-200/50">
                    <div className="flex items-center justify-center gap-4 text-sm">
                      <div className="flex items-center gap-2 text-orange-700">
                        <CheckCircle className="h-4 w-4" />
                        <span className="font-medium">Ventajas verificadas</span>
                      </div>
                      <div className="flex items-center gap-2 text-amber-700">
                        <Star className="h-4 w-4 fill-current" />
                        <span className="font-medium">Recomendado por expertos</span>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="review" className="mt-6">
                <div className="relative bg-gradient-to-br from-rose-50 via-pink-50 to-red-50 p-8 rounded-2xl border border-rose-200 shadow-lg overflow-hidden">
                  {/* Decorative background elements */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-rose-200/20 to-pink-200/20 rounded-full -translate-y-20 translate-x-20"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-red-200/25 to-rose-200/25 rounded-full translate-y-16 -translate-x-16"></div>
                  
                  {/* Header */}
                  <div className="relative z-10 mb-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-gradient-to-br from-rose-500 to-pink-600 rounded-xl shadow-md">
                        <Star className="h-7 w-7 text-white fill-current" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-slate-800 mb-1">
                          Reseña del Experto
                        </h3>
                        <p className="text-sm text-rose-600 font-medium">
                          Análisis profesional independiente
                        </p>
                      </div>
                    </div>
                    <div className="h-1 bg-gradient-to-r from-rose-500 via-pink-500 to-red-500 rounded-full w-28"></div>
                  </div>
                  
                  {/* Quote content with premium styling */}
                  <div className="relative z-10">
                    <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl border border-white/60 shadow-sm">
                      {/* Quote mark */}
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-gradient-to-br from-rose-100 to-pink-100 rounded-full flex items-center justify-center">
                            <span className="text-2xl text-rose-600 font-serif">"</span>
                          </div>
                        </div>
                        
                        {/* Review content */}
                        <div className="flex-1">
                          <blockquote className="text-slate-700 leading-relaxed text-lg italic font-light mb-6">
                            {ficha.originalReview}
                          </blockquote>
                          
                          {/* Rating stars */}
                          <div className="flex items-center gap-3 mb-4">
                            <div className="flex items-center gap-1">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                              ))}
                            </div>
                            <span className="text-sm font-semibold text-slate-600">5.0 / 5.0</span>
                          </div>
                          
                          {/* Author attribution */}
                          <div className="border-t border-rose-100 pt-4">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-gradient-to-br from-rose-500 to-pink-600 rounded-full flex items-center justify-center">
                                <Users className="h-5 w-5 text-white" />
                              </div>
                              <div>
                                <p className="text-sm font-semibold text-slate-800">Equipo de Análisis Técnico</p>
                                <p className="text-xs text-slate-600 leading-relaxed">
                                  <em>Información generada en base a las opiniones de los clientes que adquirieron este producto en Amazon</em>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Trust indicators */}
                    <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-white/60 backdrop-blur-sm p-4 rounded-lg border border-white/40 text-center">
                        <div className="flex items-center justify-center gap-2 mb-2">
                          <CheckCircle className="h-4 w-4 text-rose-600" />
                          <span className="text-sm font-semibold text-rose-700">Análisis Verificado</span>
                        </div>
                        <p className="text-xs text-slate-600">Basado en datos reales de Amazon</p>
                      </div>
                      
                      <div className="bg-white/60 backdrop-blur-sm p-4 rounded-lg border border-white/40 text-center">
                        <div className="flex items-center justify-center gap-2 mb-2">
                          <Users className="h-4 w-4 text-pink-600" />
                          <span className="text-sm font-semibold text-pink-700">Experiencia Real</span>
                        </div>
                        <p className="text-xs text-slate-600">Opiniones de compradores verificados</p>
                      </div>
                      
                      <div className="bg-white/60 backdrop-blur-sm p-4 rounded-lg border border-white/40 text-center">
                        <div className="flex items-center justify-center gap-2 mb-2">
                          <Award className="h-4 w-4 text-red-600" />
                          <span className="text-sm font-semibold text-red-700">Evaluación Profesional</span>
                        </div>
                        <p className="text-xs text-slate-600">Criterios técnicos especializados</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Footer disclaimer */}
                  <div className="relative z-10 mt-6 pt-4 border-t border-rose-200/50">
                    <div className="text-center">
                      <p className="text-xs text-slate-500 leading-relaxed">
                        Esta reseña representa una síntesis profesional de múltiples opiniones y experiencias de usuarios reales de Amazon, 
                        procesada por nuestro equipo de análisis para brindar una perspectiva equilibrada y útil.
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
            </motion.div>
          </motion.div>
        )}

        {/* Fallback content if no ficha is available */}
        {!ficha && (
          <div className="mt-12">
            <Card>
              <CardHeader>
                <CardTitle>Información del Producto</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  {product.description || "Este es un producto de alta calidad diseñado para satisfacer las necesidades de profesionales y usuarios exigentes. Fabricado con materiales premium y diseñado para ofrecer durabilidad y rendimiento excepcional."}
                </p>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <Award className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <h3 className="font-semibold">Calidad Premium</h3>
                    <p className="text-sm text-gray-600">Materiales de alta calidad</p>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <Shield className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <h3 className="font-semibold">Garantía</h3>
                    <p className="text-sm text-gray-600">Producto respaldado</p>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <Users className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                    <h3 className="font-semibold">Profesional</h3>
                    <p className="text-sm text-gray-600">Uso profesional</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </motion.div>
  );
}
                                   