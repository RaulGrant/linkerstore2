'use client'

import { useState } from "react";
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowRight, ShoppingBag, Target } from "lucide-react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  return (
    <motion.div 
      className="min-h-screen relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #312e81 50%, #1e1b4b 100%)' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Hero Section */}
      <motion.section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ y: 100, opacity: 0, scale: 0.8 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            {/* Animated Emoji */}
            <motion.div 
              className="relative inline-block mb-8"
              whileHover={{ scale: 1.2 }}
              animate={{ 
                rotate: [0, 5, -5, 0],
                y: [0, -10, 0]
              }}
              transition={{ 
                rotate: { duration: 4, repeat: Infinity },
                y: { duration: 2, repeat: Infinity }
              }}
            >
              <motion.div
                className="text-8xl relative z-10"
                animate={{
                  filter: [
                    'drop-shadow(0 0 20px rgba(59, 130, 246, 0.8))',
                    'drop-shadow(0 0 30px rgba(147, 51, 234, 0.8))',
                    'drop-shadow(0 0 20px rgba(219, 39, 119, 0.8))',
                    'drop-shadow(0 0 30px rgba(59, 130, 246, 0.8))'
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                🏭
              </motion.div>
            </motion.div>

            <motion.h1 
              className="text-6xl lg:text-8xl font-black mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
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
              transition={{ duration: 1, delay: 0.6 }}
            >
              La plataforma más avanzada para equipos industriales y de protección personal. 
              Calidad premium, precios competitivos y entregas confiables.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-bold shadow-xl"
                  onClick={() => router.push('/store')}
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
