'use client'

import { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, useScroll, useInView } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { realAmazonProducts } from "@/lib/data/real-amazon-products";
import { AmazonProduct } from "@/lib/types/store";
import { ArrowRight, ShoppingBag, Users, Target, Star, Shield, Award, Timer, Eye, Zap } from "lucide-react";
import { useRouter } from "next/navigation";
import { ProductQuickViewModal } from "@/components/modals/ProductQuickViewModal";

// Verificar que los productos existan antes de usarlos
const products = realAmazonProducts || [];

// Datos fijos para las animaciones de partículas (evita errores de hidratación)
const ANIMATION_PARTICLES = [
  { left: 23.09, top: 73.48, delay: 0.88, duration: 5.93 },
  { left: 26.58, top: 36.22, delay: 1.56, duration: 5.81 },
  { left: 16.74, top: 48.94, delay: 1.13, duration: 5.43 },
  { left: 96.37, top: 89.76, delay: 1.01, duration: 5.81 },
  { left: 77.36, top: 86.52, delay: 2.56, duration: 3.04 },
  { left: 36.28, top: 87.71, delay: 2.72, duration: 5.53 },
  { left: 66.16, top: 77.82, delay: 1.04, duration: 4.56 },
  { left: 33.67, top: 34.36, delay: 0.98, duration: 4.23 },
  { left: 17.85, top: 52.60, delay: 2.11, duration: 6.26 },
  { left: 44.50, top: 23.85, delay: 0.06, duration: 5.52 },
  { left: 73.10, top: 67.10, delay: 1.88, duration: 5.35 },
  { left: 14.13, top: 61.55, delay: 0.49, duration: 3.85 },
  { left: 65.48, top: 84.60, delay: 0.58, duration: 3.85 },
  { left: 6.28, top: 11.12, delay: 1.62, duration: 4.52 },
  { left: 80.58, top: 25.86, delay: 0.51, duration: 4.87 },
  { left: 96.26, top: 96.85, delay: 2.64, duration: 4.98 },
  { left: 81.76, top: 14.42, delay: 0.90, duration: 5.79 },
  { left: 88.98, top: 81.69, delay: 2.43, duration: 3.34 },
  { left: 56.60, top: 28.85, delay: 1.99, duration: 6.30 },
  { left: 18.97, top: 35.49, delay: 2.39, duration: 4.08 }
];

const categories = [
  {
    name: "Equipos de Protección",
    description: "EPP certificado OSHA/ANSI para seguridad laboral",
    count: products.filter((p: AmazonProduct) => p.category === "EPP").length,
  // href: "/store?category=epp",
    color: "bg-gradient-to-r from-green-500 to-emerald-600",
    icon: Shield
  },
  {
    name: "Herramientas Industriales",
    description: "Equipos profesionales para proyectos industriales",
    count: products.filter((p: AmazonProduct) => p.category === "Herramientas").length,
  // href: "/store?category=herramientas",
    color: "bg-gradient-to-r from-blue-500 to-cyan-600",
    icon: Zap
  },
  {
    name: "Seguridad y Mantenimiento",
    description: "Equipos para detección, monitoreo y mantenimiento",
    count: products.filter((p: AmazonProduct) => p.category === "Seguridad").length,
  // href: "/store?category=seguridad",
    color: "bg-gradient-to-r from-yellow-500 to-orange-500",
    icon: Award
  }
];

const featuredProducts = products.slice(0, 6);

interface CountdownProps {
  targetDate: Date;
}

function CountdownTimer({ targetDate }: CountdownProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Calcular tiempo inicial del lado del servidor
  useEffect(() => {
    setIsMounted(true);
    
    // Calcular tiempo inicial inmediatamente
    const now = new Date().getTime();
    const distance = targetDate.getTime() - now;

    if (distance > 0) {
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  // No renderizar hasta que el componente esté montado
  if (!isMounted) {
    return (
      <div className="flex justify-center gap-4 mt-8">
        {[
          { label: "Días", value: 91 },
          { label: "Horas", value: 0 },
          { label: "Minutos", value: 0 },
          { label: "Segundos", value: 0 }
        ].map((item, index) => (
          <div key={index} className="text-center">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 min-w-[80px]">
              <div className="text-3xl font-bold text-white">
                {item.value.toString().padStart(2, '0')}
              </div>
              <div className="text-sm text-blue-100 font-medium">
                {item.label}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex justify-center gap-4 mt-8">
      {[
        { label: "Días", value: timeLeft.days },
        { label: "Horas", value: timeLeft.hours },
        { label: "Minutos", value: timeLeft.minutes },
        { label: "Segundos", value: timeLeft.seconds }
      ].map((item, index) => (
        <div key={index} className="text-center">
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 min-w-[80px]">
            <div className="text-3xl font-bold text-white">
              {item.value.toString().padStart(2, '0')}
            </div>
            <div className="text-sm text-blue-100 font-medium">
              {item.label}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function HomePage() {
  // Estado para el modal de vista rápida
  const [selectedProduct, setSelectedProduct] = useState<AmazonProduct | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();
  
  // Mouse tracking for spectacular effects
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { damping: 25, stiffness: 150 });
  const springY = useSpring(mouseY, { damping: 25, stiffness: 150 });
  
  // Parallax scroll effects
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 1000], [0, -200]);
  const heroY = useTransform(scrollY, [0, 500], [0, -100]);
  
  // Container refs for mouse tracking and animations
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const productsRef = useRef<HTMLDivElement>(null);
  const categoriesRef = useRef<HTMLDivElement>(null);
  
  // In-view animations
  const heroInView = useInView(heroRef, { once: true });
  const productsInView = useInView(productsRef, { once: true });
  const categoriesInView = useInView(categoriesRef, { once: true });

  // Mouse movement handler for spectacular tracking effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);
  
  // Función para abrir el modal con un producto
  const openProductModal = (product: AmazonProduct) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  // Fecha objetivo: 3 meses desde ahora (1 de noviembre, 2025)
  const targetDate = new Date('2025-11-01T00:00:00');

  return (
    <motion.div 
      ref={containerRef}
      className="min-h-screen relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #312e81 50%, #1e1b4b 100%)' }}
    >
      {/* Spectacular Cursor Follower */}
      <motion.div
        className="fixed w-6 h-6 pointer-events-none z-50 mix-blend-difference"
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%'
        }}
      >
        <motion.div
          className="w-full h-full rounded-full bg-gradient-to-r from-pink-400 to-purple-500"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>

      {/* Floating Particles Background */}
      <div className="absolute inset-0 overflow-hidden">
        {ANIMATION_PARTICLES.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              rotate: [0, 360],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <motion.div
              className="w-4 h-4 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 opacity-30"
              whileHover={{ scale: 2, opacity: 0.8 }}
            />
          </motion.div>
        ))}
      </div>

      {/* Hero Section con Animaciones Espectaculares */}
      <motion.section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ y: heroY }}
        initial={{ opacity: 0 }}
        animate={{ opacity: heroInView ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        {/* Background Effects */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-800/20 to-pink-900/20"
          style={{ y: backgroundY }}
          animate={{
            background: [
              'linear-gradient(45deg, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2), rgba(219, 39, 119, 0.2))',
              'linear-gradient(135deg, rgba(147, 51, 234, 0.2), rgba(219, 39, 119, 0.2), rgba(59, 130, 246, 0.2))',
              'linear-gradient(225deg, rgba(219, 39, 119, 0.2), rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2))',
              'linear-gradient(315deg, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2), rgba(219, 39, 119, 0.2))'
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />

        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ y: 100, opacity: 0, scale: 0.8 }}
            animate={{ 
              y: heroInView ? 0 : 100, 
              opacity: heroInView ? 1 : 0, 
              scale: heroInView ? 1 : 0.8 
            }}
            transition={{ duration: 1, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            {/* Animated Emoji with Spectacular Effects */}
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
              
              {/* Animación de aros suspendida para evitar referencias innecesarias */}
            </motion.div>

            <motion.h1 
              className="text-6xl lg:text-8xl font-black mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
              initial={{ y: 50, opacity: 0 }}
              animate={{ 
                y: heroInView ? 0 : 50, 
                opacity: heroInView ? 1 : 0 
              }}
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
              animate={{ 
                y: heroInView ? 0 : 30, 
                opacity: heroInView ? 1 : 0 
              }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              La plataforma más avanzada para equipos industriales y de protección personal. 
              Calidad premium, precios competitivos y entregas confiables.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ y: 30, opacity: 0 }}
              animate={{ 
                y: heroInView ? 0 : 30, 
                opacity: heroInView ? 1 : 0 
              }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/*
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-bold shadow-xl"
                  onClick={() => router.push('/store')}
                >
                  <ShoppingBag className="mr-2 h-5 w-5" />
                  Explorar Productos
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                */}
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

      {/* Section adicional en el Hero */}
      <motion.section className="py-24 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            {/* Badge "Próximamente" */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
              <Timer className="w-4 h-4 text-blue-300" />
              <span className="text-blue-100 font-medium">Próximamente</span>
            </div>

            {/* Título principal */}
            <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              LinkerPro
            </h1>
            
            {/* Subtítulo impactante */}
            <div className="max-w-4xl mx-auto mb-8">
              <p className="text-xl md:text-2xl text-blue-100 font-light leading-relaxed">
                La plataforma que permitirá{" "}
                <span className="font-bold text-white">unir talento con las empresas</span>{" "}
                de la manera más{" "}
                <span className="font-bold text-yellow-300">fácil y justa</span>{" "}
                jamás antes vista
              </p>
            </div>

            {/* Cuenta regresiva */}
            <div className="mb-8">
              <p className="text-lg text-blue-200 mb-4 font-medium">
                🚀 Lanzamiento oficial en:
              </p>
              <CountdownTimer targetDate={targetDate} />
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {/* CTA suspendida hasta reactivar la tienda */}
              <div className="bg-white/10 border border-white/20 text-blue-100 px-6 py-4 rounded-full backdrop-blur-sm">
                Catálogo disponible próximamente.
              </div>
              <Button asChild variant="secondary" size="lg" className="bg-white/15 border-2 border-white/50 text-white hover:bg-white/25 hover:border-white font-semibold px-8 py-4 rounded-full backdrop-blur-sm transition-all duration-300">
                <Link href="/guides" className="flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  Ver Guías de Compra
                </Link>
              </Button>
            </div>

            {/* Estadísticas impresionantes */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold text-white">{products.length}</div>
                <div className="text-blue-200">Productos Catalogados</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold text-white">6</div>
                <div className="text-blue-200">Sectores Industriales</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold text-white">100%</div>
                <div className="text-blue-200">Productos Verificados</div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Banner de Aviso Amazon Afiliados con animaciones */}
      <motion.section 
        className="bg-gradient-to-r from-amber-50 to-yellow-50 border-b border-amber-200"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <motion.div 
            className="flex items-center justify-center gap-2 text-center"
            whileHover={{ scale: 1.02 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", bounce: 0.4, delay: 0.2 }}
            >
              <Badge variant="outline" className="bg-amber-100 text-amber-800 border-amber-300">
                Amazon Afiliados
              </Badge>
            </motion.div>
            <motion.p 
              className="text-sm text-amber-800"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <strong>Transparencia total:</strong> Como afiliado de Amazon, obtenemos ingresos por las compras adscritas. 
              Esto nos permite mantener el catálogo actualizado sin costo para ti.
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Categories Section con animaciones espectaculares */}
      <motion.section 
        ref={categoriesRef}
        className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: categoriesInView ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        {/* Background Effects */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-32 h-32 rounded-full bg-gradient-to-r from-blue-200/20 to-purple-200/20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.6, 0.3],
                x: [0, Math.random() * 100 - 50, 0],
                y: [0, Math.random() * 100 - 50, 0],
              }}
              transition={{
                duration: 6 + Math.random() * 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            animate={{ 
              y: categoriesInView ? 0 : 50, 
              opacity: categoriesInView ? 1 : 0 
            }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: categoriesInView ? 1 : 0 }}
              transition={{ type: "spring", bounce: 0.4, delay: 0.2 }}
            >
              <Badge className="mb-4 bg-blue-100 text-blue-800">Catálogo Especializado</Badge>
            </motion.div>
            <motion.h2 
              className="text-4xl font-bold text-gray-900 mb-6"
              initial={{ y: 30, opacity: 0 }}
              animate={{ 
                y: categoriesInView ? 0 : 30, 
                opacity: categoriesInView ? 1 : 0 
              }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Equipos Industriales por Sector
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ y: 20, opacity: 0 }}
              animate={{ 
                y: categoriesInView ? 0 : 20, 
                opacity: categoriesInView ? 1 : 0 
              }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Productos verificados y categorizados especialmente para contratistas, 
              electricistas, soldadores y profesionales industriales
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: categoriesInView ? 1 : 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            {categories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <motion.div
                  key={category.name}
                  initial={{ y: 100, opacity: 0, scale: 0.8 }}
                  animate={{ 
                    y: categoriesInView ? 0 : 100, 
                    opacity: categoriesInView ? 1 : 0,
                    scale: categoriesInView ? 1 : 0.8
                  }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.8 + index * 0.2,
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
                  <div className="group block cursor-default">
                    <motion.div 
                      className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 relative overflow-hidden"
                      whileHover={{
                        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                      }}
                    >
                      {/* Hover Background Effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0"
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />

                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-6">
                          <motion.div 
                            className={`${category.color} p-4 rounded-xl w-16 h-16 flex items-center justify-center shadow-lg`}
                            whileHover={{ 
                              scale: 1.1, 
                              rotate: 5,
                              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)" 
                            }}
                            animate={{
                              y: [0, -2, 0],
                            }}
                            transition={{
                              y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                            }}
                          >
                            <IconComponent className="w-8 h-8 text-white" />
                          </motion.div>
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 1 + index * 0.2, type: "spring", bounce: 0.5 }}
                          >
                            <Badge variant="secondary" className="bg-gray-100 text-gray-700">
                              {category.count} productos
                            </Badge>
                          </motion.div>
                        </div>
                        
                        <motion.h3 
                          className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors"
                          whileHover={{ scale: 1.05 }}
                        >
                          {category.name}
                        </motion.h3>
                        
                        <motion.p 
                          className="text-gray-600 mb-6 leading-relaxed"
                          initial={{ opacity: 0.7 }}
                          whileHover={{ opacity: 1 }}
                        >
                          {category.description}
                        </motion.p>
                        
                        <motion.div 
                          className="flex items-center text-blue-600 group-hover:text-blue-800 font-semibold"
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", bounce: 0.4 }}
                        >
                          <span>Explorar categoría</span>
                          <motion.div
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            <ArrowRight className="w-5 h-5 ml-2" />
                          </motion.div>
                        </motion.div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.section>

      {/* Featured Products Section con animaciones espectaculares */}
      <motion.section 
        ref={productsRef}
        className="py-20 bg-white relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: productsInView ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50" />
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-blue-100/20 to-purple-100/20"
              style={{
                left: `${(i % 3) * 33}%`,
                top: `${Math.floor(i / 3) * 50}%`,
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.4, 0.2],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 1
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            animate={{ 
              y: productsInView ? 0 : 50, 
              opacity: productsInView ? 1 : 0 
            }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ 
                scale: productsInView ? 1 : 0, 
                rotate: productsInView ? 0 : -180 
              }}
              transition={{ type: "spring", bounce: 0.6, delay: 0.2 }}
            >
              <Badge className="mb-4 bg-green-100 text-green-800">Más Vendidos</Badge>
            </motion.div>
            <motion.h2 
              className="text-4xl font-bold text-gray-900 mb-6"
              initial={{ y: 30, opacity: 0 }}
              animate={{ 
                y: productsInView ? 0 : 30, 
                opacity: productsInView ? 1 : 0 
              }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Productos Destacados
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ y: 20, opacity: 0 }}
              animate={{ 
                y: productsInView ? 0 : 20, 
                opacity: productsInView ? 1 : 0 
              }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Los equipos más populares y mejor valorados por profesionales industriales. 
              Todos verificados en Amazon con reseñas reales.
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: productsInView ? 1 : 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            {featuredProducts.map((product: AmazonProduct, index: number) => (
              <motion.div
                key={product.asin}
                initial={{ y: 100, opacity: 0, scale: 0.8, rotateX: 45 }}
                animate={{ 
                  y: productsInView ? 0 : 100, 
                  opacity: productsInView ? 1 : 0,
                  scale: productsInView ? 1 : 0.8,
                  rotateX: productsInView ? 0 : 45
                }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.8 + index * 0.1,
                  type: "spring",
                  bounce: 0.4
                }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  rotateX: 5,
                  transition: { type: "spring", bounce: 0.4 }
                }}
                whileTap={{ scale: 0.95 }}
                role="button"
                tabIndex={0}
                onClick={() => openProductModal(product)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openProductModal(product);
                  }
                }}
                className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 cursor-pointer relative"
              >
                {/* Product Card Background Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-purple-50/0"
                  whileHover={{
                    background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))'
                  }}
                  transition={{ duration: 0.3 }}
                />

                <div className="relative z-10">
                  <motion.div 
                    className="aspect-square relative overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", bounce: 0.4 }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Image
                        src={product.image_url}
                        alt={product.title}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                    
                    <motion.div 
                      className="absolute top-4 left-4"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 1 + index * 0.1, type: "spring", bounce: 0.6 }}
                    >
                      <Badge className="bg-blue-600 text-white">
                        {product.category}
                      </Badge>
                    </motion.div>
                    
                    {product.is_prime && (
                      <motion.div 
                        className="absolute top-4 right-4"
                        initial={{ scale: 0, x: 100 }}
                        animate={{ scale: 1, x: 0 }}
                        transition={{ delay: 1.2 + index * 0.1, type: "spring", bounce: 0.6 }}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <Badge className="bg-orange-500 text-white">
                          Prime
                        </Badge>
                      </motion.div>
                    )}
                  </motion.div>
                  
                  <motion.div 
                    className="p-6"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.3 + index * 0.1 }}
                  >
                    <motion.div 
                      className="flex items-center gap-1 mb-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.4 + index * 0.1 }}
                    >
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ 
                            delay: 1.5 + index * 0.1 + i * 0.05, 
                            type: "spring", 
                            bounce: 0.6 
                          }}
                          whileHover={{ scale: 1.2, rotate: 360 }}
                        >
                          <Star 
                            className={`w-4 h-4 ${
                              i < Math.floor(product.rating || 0) 
                                ? 'text-yellow-400 fill-current' 
                                : 'text-gray-300'
                            }`} 
                          />
                        </motion.div>
                      ))}
                      <motion.span 
                        className="text-sm text-gray-600 ml-1"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.8 + index * 0.1 }}
                      >
                        ({product.review_count || 0})
                      </motion.span>
                    </motion.div>
                    
                    <motion.h3 
                      className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 line-clamp-2"
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 1.6 + index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      {product.title}
                    </motion.h3>
                    
                    <motion.p 
                      className="text-gray-600 text-sm mb-4 line-clamp-2"
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 1.7 + index * 0.1 }}
                    >
                      {product.description}
                    </motion.p>
                    
                    <motion.div 
                      className="flex items-center justify-between"
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 1.8 + index * 0.1 }}
                    >
                      <motion.div 
                        className="text-sm font-semibold text-blue-600"
                        whileHover={{ scale: 1.05 }}
                      >
                        Precio disponible en Amazon.
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button 
                          size="sm" 
                          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                          onClick={() => openProductModal(product)}
                        >
                          Conocer detalles
                        </Button>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="text-center mt-12"
            initial={{ y: 50, opacity: 0 }}
            animate={{ 
              y: productsInView ? 0 : 50, 
              opacity: productsInView ? 1 : 0 
            }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Navegación a /store suspendida temporalmente */}
              <div className="border-2 border-blue-600 text-blue-600 px-6 py-4 rounded-full inline-flex items-center justify-center gap-2 bg-white">
                Catálogo completo disponible próximamente.
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section Final con animaciones espectaculares */}
      <motion.section 
        className="py-20 bg-gradient-to-r from-blue-900 to-indigo-900 text-white relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {/* Background Effects */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            ¿Listo para encontrar el equipo perfecto?
          </motion.h2>
          
          <motion.p 
            className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Explora nuestro catálogo de {products.length} productos verificados en Amazon. 
            Equipos profesionales para contratistas que exigen calidad.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* CTA a /store suspendida */}
              <div className="bg-white/10 border border-white/30 text-blue-100 px-6 py-4 rounded-xl">
                Estamos preparando el nuevo catálogo.
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button asChild variant="secondary" size="lg" className="bg-white/15 border-2 border-white/50 text-white hover:bg-white/25 hover:border-white font-semibold transition-all duration-300">
                <Link href="/guides" className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Guías de Compra
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Modal de vista rápida */}
      <ProductQuickViewModal 
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </motion.div>
  );
}
