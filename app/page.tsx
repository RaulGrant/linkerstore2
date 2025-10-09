'use client'

import { useState, useEffect } from "react";
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowRight, ShoppingBag, Target, Timer, FileText } from "lucide-react";
import { useRouter } from "next/navigation";
import { trackEvent, trackInteraction, generateTrackingId } from '@/lib/meta-pixel';
import { useScrollTracking } from '@/hooks/useScrollTracking';

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
        <motion.div 
          key={index} 
          className="text-center"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: index * 0.1, type: "spring", bounce: 0.4 }}
          whileHover={{ scale: 1.05 }}
        >
          <motion.div 
            className="bg-white/20 backdrop-blur-sm rounded-lg p-4 min-w-[80px] border border-white/30"
            animate={{
              boxShadow: [
                "0 0 20px rgba(59, 130, 246, 0.3)",
                "0 0 30px rgba(147, 51, 234, 0.4)",
                "0 0 20px rgba(59, 130, 246, 0.3)"
              ]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              type: "tween"
            }}
          >
            <motion.div 
              className="text-3xl font-bold text-white"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: "easeInOut",
                type: "tween"
              }}
            >
              {item.value.toString().padStart(2, '0')}
            </motion.div>
            <div className="text-sm text-blue-100 font-medium">
              {item.label}
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}

export default function HomePage() {
  const router = useRouter();
  
  // Enable scroll and time tracking for homepage
  useScrollTracking({ 
    pageTitle: 'LinkerStore Homepage',
    trackTimeOnPage: true 
  });

  // Track homepage view on component mount
  useEffect(() => {
    const pageId = generateTrackingId('page', 'homepage');
    trackEvent('ViewContent', {
      content_type: 'page',
      content_ids: [pageId],
      content_name: 'LinkerStore Homepage',
      content_category: 'homepage'
    });
  }, []);

  // Function to track button clicks
  const handleCTAClick = (ctaName: string) => {
    trackInteraction('button_click', ctaName, 'homepage');
  };

  // Fecha objetivo: 3 meses desde ahora (1 de noviembre, 2025)
  const targetDate = new Date('2025-11-01T00:00:00');

  return (
    <motion.div 
      className="min-h-screen relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #312e81 50%, #1e1b4b 100%)' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* LinkerPro Section - Próximamente (MOVIDO ARRIBA) */}
      <motion.section 
        className="py-24 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Background animated particles */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
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
                delay: Math.random() * 2,
                type: "tween"
              }}
            />
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            {/* Badge "Próximamente" */}
            <motion.div 
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6"
              initial={{ scale: 0, rotateY: 180 }}
              animate={{ scale: 1, rotateY: 0 }}
              transition={{ type: "spring", bounce: 0.4, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <Timer className="w-4 h-4 text-blue-300" />
              <span className="text-blue-100 font-medium">Próximamente</span>
            </motion.div>

            {/* Título principal con animaciones espectaculares */}
            <motion.h1 
              className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent"
              initial={{ y: 100, opacity: 0, scale: 0.8 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4, type: "spring", bounce: 0.4 }}
              whileHover={{ 
                scale: 1.05,
                textShadow: '0 0 50px rgba(147, 51, 234, 0.8)',
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              LinkerPro
            </motion.h1>
            
            {/* Subtítulo impactante */}
            <motion.div 
              className="max-w-4xl mx-auto mb-8"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <p className="text-xl md:text-2xl text-blue-100 font-light leading-relaxed">
                Mientras preparamos LinkerPro, descubre nuestro{" "}
                <motion.span 
                  className="font-bold text-white"
                  whileHover={{ scale: 1.1, color: "#60a5fa" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  blog especializado en seguridad industrial
                </motion.span>{" "}
                con guías expertas,{" "}
                <motion.span 
                  className="font-bold text-yellow-300"
                  whileHover={{ scale: 1.1, color: "#fbbf24" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  reseñas de equipos EPP
                </motion.span>{" "}
                y consejos para crear ambientes laborales más seguros
              </p>
            </motion.div>

            {/* Cuenta regresiva espectacular */}
            <motion.div 
              className="mb-8"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <motion.p 
                className="text-lg text-blue-200 mb-4 font-medium"
                animate={{ 
                  scale: [1, 1.05, 1],
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  type: "tween"
                }}
              >
                🚀 Lanzamiento oficial en:
              </motion.p>
              <CountdownTimer targetDate={targetDate} />
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => handleCTAClick('blog_cta')}
                >
                  <Link href="/blog" className="flex items-center gap-2">
                    <ShoppingBag className="w-5 h-5" />
                    Explora Nuestro Blog de Seguridad
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  asChild 
                  variant="secondary" 
                  size="lg" 
                  className="bg-white/15 border-2 border-white/50 text-white hover:bg-white/25 hover:border-white font-semibold px-8 py-4 rounded-full backdrop-blur-sm transition-all duration-300"
                >
                  <Link href="/guias" className="flex items-center gap-2">
                    <Target className="w-5 h-5" />
                    Ver Guías de Seguridad
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Estadísticas impresionantes animadas */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              {[
                { value: "50+", label: "Artículos Especializados" },
                { value: "15+", label: "Guías Técnicas Detalladas" },
                { value: "100%", label: "Contenido Verificado por Expertos" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0, rotateY: 180 }}
                  animate={{ scale: 1, rotateY: 0 }}
                  transition={{ 
                    delay: 1.4 + index * 0.1, 
                    type: "spring", 
                    bounce: 0.4 
                  }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -5,
                    boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
                  }}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20"
                >
                  <motion.div 
                    className="text-3xl font-bold text-white"
                    animate={{ 
                      textShadow: [
                        "0 0 10px rgba(59, 130, 246, 0.5)",
                        "0 0 20px rgba(147, 51, 234, 0.5)",
                        "0 0 10px rgba(59, 130, 246, 0.5)"
                      ]
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      type: "tween"
                    }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-blue-200">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Hero Section LinkerStore (TEMPORALMENTE OCULTO) */}
      {/*
      <motion.section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ y: 100, opacity: 0, scale: 0.8 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <motion.div 
              className="relative inline-block mb-8"
              whileHover={{ scale: 1.2 }}
              animate={{ 
                rotate: [0, 5, -5, 0],
                y: [0, -10, 0]
              }}
              transition={{ 
                rotate: { duration: 4, repeat: Infinity, type: "tween" },
                y: { duration: 2, repeat: Infinity, type: "tween" }
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
                transition={{ duration: 3, repeat: Infinity, type: "tween" }}
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
                  className="border-2 border-purple-400 bg-purple-400 text-purple-900 hover:bg-purple-500 hover:text-white px-8 py-4 text-lg font-bold"
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
      */}

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
            <Badge className="mb-4 bg-blue-100 text-blue-800">Contenido Especializado</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Explora Nuestro Blog de Seguridad Industrial
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Información confiable y actualizada sobre equipos de protección personal, 
              guías técnicas y mejores prácticas en seguridad laboral
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
                name: "Artículos del Blog",
                description: "Contenido actualizado sobre seguridad industrial y EPP",
                count: "50+ artículos",
                href: "/blog",
                color: "bg-gradient-to-r from-green-500 to-emerald-600"
              },
              {
                name: "Guías Técnicas",
                description: "Manuales detallados y guías paso a paso",
                count: "15+ guías",
                href: "/guias",
                color: "bg-gradient-to-r from-blue-500 to-cyan-600"
              },
              {
                name: "Sobre Nosotros",
                description: "Conoce a nuestro equipo de expertos certificados",
                count: "Nuestro equipo",
                href: "/sobre-nosotros",
                color: "bg-gradient-to-r from-purple-500 to-indigo-600"
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
                        <FileText className="w-8 h-8 text-white" />
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
                        <span>Explorar sección</span>
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
            ¿Listo para mejorar la seguridad en tu trabajo?
          </motion.h2>
          
          <motion.p 
            className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 2.4 }}
          >
            Descubre nuestras guías especializadas, reseñas de equipos EPP y consejos 
            de expertos para crear ambientes laborales más seguros.
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
                <Link href="/blog" className="flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Explorar Blog
                </Link>
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
                <Link href="/guias" className="flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  Ver Guías
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Resto del contenido original... */}
      <motion.section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            className="text-4xl font-bold text-gray-900 mb-6"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Únete a Nuestra Comunidad de Seguridad
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto mb-8"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Mientras preparamos LinkerPro, mantente actualizado con nuestro blog especializado en seguridad industrial.
          </motion.p>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              asChild 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
            >
              <Link href="/blog">
                Explorar Blog de Seguridad
              </Link>
            </Button>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
}
