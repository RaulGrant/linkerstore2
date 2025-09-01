'use client'

import { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowRight, ShoppingBag, Target, Star, Clock } from "lucide-react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();
  
  // Mouse tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { damping: 30, stiffness: 200 });
  const springY = useSpring(mouseY, { damping: 30, stiffness: 200 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div 
      className="min-h-screen relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #312e81 50%, #1e1b4b 100%)' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Partículas de fondo espectaculares */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(40)].map((_, i) => {
          const colors = [
            'bg-blue-400',
            'bg-purple-400', 
            'bg-pink-400',
            'bg-cyan-400',
            'bg-indigo-400',
            'bg-violet-400',
            'bg-rose-400',
            'bg-emerald-400',
            'bg-yellow-400',
            'bg-orange-400'
          ];
          const colorClass = colors[i % colors.length];
          const size = Math.random() * 6 + 2; // 2-8px
          
          return (
            <motion.div
              key={i}
              className={`absolute ${colorClass} rounded-full opacity-30`}
              style={{
                width: `${size}px`,
                height: `${size}px`,
              }}
              animate={{
                x: [0, 300, -300, 0],
                y: [0, -300, 300, 0],
                scale: [1, 3, 1],
                opacity: [0.1, 0.7, 0.1],
                rotate: 360
              }}
              transition={{
                duration: 1 + i * 0.1,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.02,
                type: "tween"
              }}
              style={{
                left: `${1 + i * 2.5}%`,
                top: `${1 + (i % 8) * 12.5}%`
              }}
            />
          );
        })}
      </div>

      {/* Cursor follower */}
      <motion.div
        className="fixed w-12 h-12 pointer-events-none z-50 mix-blend-screen"
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%'
        }}
      >
        <motion.div
          className="w-full h-full rounded-full bg-gradient-to-r from-pink-500 to-purple-600"
          animate={{
            scale: [1, 1.8, 1],
            rotate: 360,
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            ease: "easeInOut",
            type: "tween"
          }}
        />
      </motion.div>

      {/* Banner Próximamente */}
      <motion.div
        className="relative bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 text-white py-4 px-6 text-center overflow-hidden"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
      >
        {/* Efectos de fondo en el banner */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/30 rounded-full"
              animate={{
                x: [0, 60, -60, 0],
                y: [0, -30, 30, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.5, 1]
              }}
              transition={{
                duration: 2 + i * 0.1,
                repeat: Infinity,
                delay: i * 0.2,
                type: "tween"
              }}
              style={{
                left: `${i * 10}%`,
                top: `${30 + (i % 2) * 40}%`
              }}
            />
          ))}
        </div>

        <motion.div 
          className="flex items-center justify-center gap-3 relative z-10"
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          >
            <Clock className="h-6 w-6" />
          </motion.div>
          <span className="text-lg font-bold">🚀 PRÓXIMAMENTE: Nueva experiencia de compra</span>
          <motion.div
            animate={{ 
              scale: [1, 1.3, 1],
              rotate: [0, 15, -15, 0]
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            ⭐
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Hero Section */}
      <motion.section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ y: 100, opacity: 0, scale: 0.8 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            {/* Animated Emoji con anillos mágicos */}
            <motion.div 
              className="relative inline-block mb-8"
              whileHover={{ scale: 1.3 }}
            >
              {/* Anillos mágicos */}
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute border-2 border-white/20 rounded-full"
                  style={{
                    width: `${120 + i * 40}px`,
                    height: `${120 + i * 40}px`,
                    left: `calc(50% - ${60 + i * 20}px)`,
                    top: `calc(50% - ${60 + i * 20}px)`,
                  }}
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.6, 0.2]
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
              
              <motion.div
                className="text-9xl relative z-10"
                animate={{ 
                  rotate: [0, 8, -8, 0],
                  y: [0, -15, 0],
                  filter: [
                    'drop-shadow(0 0 25px rgba(59, 130, 246, 0.8))',
                    'drop-shadow(0 0 40px rgba(147, 51, 234, 0.8))',
                    'drop-shadow(0 0 25px rgba(219, 39, 119, 0.8))',
                    'drop-shadow(0 0 40px rgba(59, 130, 246, 0.8))'
                  ]
                }}
                transition={{ 
                  rotate: { duration: 3, repeat: Infinity, type: "tween" },
                  y: { duration: 2, repeat: Infinity, type: "tween" },
                  filter: { duration: 2.5, repeat: Infinity, type: "tween" }
                }}
                whileHover={{
                  scale: 1.2,
                  rotate: 15,
                  filter: 'drop-shadow(0 0 50px rgba(147, 51, 234, 1))'
                }}
              >
                🏭
              </motion.div>
            </motion.div>

            <motion.h1 
              className="text-6xl lg:text-8xl font-black mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
              whileHover={{ 
                scale: 1.05,
                textShadow: '0 0 30px rgba(147, 51, 234, 0.8)'
              }}
            >
              LinkerStore
            </motion.h1>

            <motion.p 
              className="text-xl lg:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.9 }}
            >
              La plataforma más avanzada para equipos industriales y de protección personal. 
              Calidad premium, precios competitivos y entregas confiables.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.1 }}
            >
              <motion.div
                whileHover={{ scale: 1.08, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-bold shadow-xl relative overflow-hidden group"
                  onClick={() => router.push('/store')}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative z-10 flex items-center gap-2">
                    <ShoppingBag className="h-5 w-5" />
                    Explorar Tienda
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-blue-400 text-blue-300 hover:bg-blue-400 hover:text-blue-900 px-8 py-4 text-lg font-bold"
                  asChild
                >
                  <Link href="/about">
                    <Target className="h-5 w-5 mr-2" />
                    Conoce Más
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Badges animados */}
            <motion.div 
              className="flex flex-wrap justify-center gap-3 mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.8 }}
            >
              {[
                { icon: "🏆", text: "Calidad Premium", color: "from-yellow-400 to-orange-500" },
                { icon: "⚡", text: "Entrega Rápida", color: "from-blue-400 to-cyan-500" },
                { icon: "🛡️", text: "Garantía Total", color: "from-green-400 to-emerald-500" },
                { icon: "💎", text: "Precio Justo", color: "from-purple-400 to-pink-500" }
              ].map((badge, index) => (
                <motion.div
                  key={badge.text}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 1.5 + index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.1, y: -3 }}
                >
                  <Badge 
                    className={`bg-gradient-to-r ${badge.color} text-white px-4 py-2 text-sm font-medium shadow-lg cursor-pointer`}
                  >
                    <span className="mr-2 text-base">{badge.icon}</span>
                    {badge.text}
                  </Badge>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Sección de características mejorada */}
      <motion.section 
        className="py-20 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              ¿Por qué elegir LinkerStore?
            </motion.h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Más que una tienda, somos tu socio tecnológico en el mundo industrial
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🎯",
                title: "Precisión Industrial",
                description: "Equipos de alta precisión seleccionados por expertos para garantizar el máximo rendimiento."
              },
              {
                icon: "🚀",
                title: "Innovación Constante",
                description: "Las últimas tecnologías y herramientas más avanzadas del mercado industrial."
              },
              {
                icon: "🔒",
                title: "Seguridad Garantizada",
                description: "Equipos de protección personal certificados que cumplen con los más altos estándares."
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 text-center group hover:bg-white/15 transition-colors"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <motion.div 
                  className="text-6xl mb-6"
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-blue-200 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
}
                >
                  <ShoppingBag className="mr-2 h-5 w-5" />
                  Explorar Productos
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-purple-400 text-purple-100 hover:bg-purple-400 hover:text-purple-900 px-8 py-4 text-lg font-bold"
                  onClick={() => router.push('/guides')}
                >
                  <Target className="mr-2 h-5 w-5" />
                  Ver Guías
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Simple Categories Section */}
      <motion.section 
        className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <Badge className="mb-4 bg-blue-100 text-blue-800">Catálogo Especializado</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Equipos Industriales por Sector
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Productos verificados y categorizados especialmente para contratistas, 
              electricistas, soldadores y profesionales industriales
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.4 }}
          >
            {[
              {
                name: "Equipos de Protección",
                description: "EPP certificado OSHA/ANSI para seguridad laboral",
                count: "50+ productos",
                href: "/store?category=epp",
                color: "bg-gradient-to-r from-green-500 to-emerald-600"
              },
              {
                name: "Herramientas Industriales",
                description: "Equipos profesionales para proyectos industriales",
                count: "100+ productos",
                href: "/store?category=herramientas",
                color: "bg-gradient-to-r from-blue-500 to-cyan-600"
              },
              {
                name: "Seguridad y Mantenimiento",
                description: "Sistemas de prevención y mantenimiento industrial",
                count: "75+ productos",
                href: "/store?category=seguridad",
                color: "bg-gradient-to-r from-red-500 to-orange-600"
              }
            ].map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ y: 100, opacity: 0, scale: 0.8 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 1.6 + index * 0.2,
                  type: "spring",
                  bounce: 0.4
                }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  transition: { type: "spring", bounce: 0.4 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href={category.href} className="group block">
                  <motion.div 
                    className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 relative overflow-hidden"
                    whileHover={{
                      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                    }}
                  >
                    <div className="relative z-10">
                      <div className={`${category.color} p-4 rounded-xl w-16 h-16 flex items-center justify-center shadow-lg mb-6`}>
                        <ShoppingBag className="w-8 h-8 text-white" />
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                        {category.name}
                      </h3>
                      
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {category.description}
                      </p>

                      <Badge variant="secondary" className="bg-gray-100 text-gray-700 mb-4">
                        {category.count}
                      </Badge>
                      
                      <div className="flex items-center text-blue-600 group-hover:text-blue-800 font-semibold">
                        <span>Explorar categoría</span>
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Final */}
      <motion.section 
        className="py-20 bg-gradient-to-r from-blue-900 to-indigo-900 text-white relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 2.2 }}
          >
            ¿Listo para encontrar el equipo perfecto?
          </motion.h2>
          
          <motion.p 
            className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 2.4 }}
          >
            Explora nuestro catálogo completo de productos verificados en Amazon. 
            Equipos profesionales para contratistas que exigen calidad.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 2.6 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
                <Link href="/store" className="flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5" />
                  Explorar Catálogo
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
}
