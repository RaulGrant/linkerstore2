'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { ArrowRight, Shield, TrendingUp, CheckCircle } from 'lucide-react';

const stats = [
  { value: 100, label: 'Proyectos Completados', suffix: '+' },
  { value: 10, label: 'Años de Experiencia', suffix: '+' },
  { value: 100, label: 'Cumplimiento Normativo', suffix: '%' },
];

export default function HeroSection() {
  const [counters, setCounters] = useState([0, 0, 0]);

  useEffect(() => {
    const timers = stats.map((stat, index) => {
      let current = 0;
      const increment = stat.value / 50;
      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.value) {
          current = stat.value;
          clearInterval(timer);
        }
        setCounters((prev) => {
          const newCounters = [...prev];
          newCounters[index] = Math.floor(current);
          return newCounters;
        });
      }, 30);
      return timer;
    });

    return () => timers.forEach((timer) => clearInterval(timer));
  }, []);

  const scrollToServices = () => {
    const servicesSection = document.getElementById('servicios');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gray-50 opacity-50">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #e5e7eb 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block"
            >
              <Image
                src="/images/brands/ajrh.jpg"
                alt="AJRH Industrial Logo"
                width={180}
                height={80}
                className="object-contain"
              />
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight"
            >
              En AJRH te ofrecemos los mejores servicios industriales! 🚧🔥
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl font-semibold text-gray-700"
            >
              ¿Buscas seguridad, supervisión y calidad en tus proyectos industriales?
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-base md:text-lg text-gray-600"
            >
              En AJRH te ofrecemos servicios especializados para garantizar eficiencia, cumplimiento normativo y seguridad en cada trabajo.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white font-semibold text-base md:text-lg shadow-lg shadow-green-200 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-green-300"
                onClick={() => {
                  const ctaSection = document.getElementById('contacto');
                  if (ctaSection) {
                    ctaSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Solicitar Cotización
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-green-600 text-green-600 hover:bg-green-50 font-semibold text-base md:text-lg transition-all duration-300 hover:scale-105"
                onClick={scrollToServices}
              >
                Ver Servicios
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="grid grid-cols-3 gap-4 pt-8"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-black text-green-600">
                    {counters[index]}{stat.suffix}
                  </div>
                  <div className="text-sm md:text-base text-gray-600 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-gray-900/20 z-10" />
              <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                <div className="text-center p-8">
                  <Shield className="h-32 w-32 text-green-600 mx-auto mb-4" />
                  <p className="text-2xl font-bold text-gray-700">Seguridad Industrial</p>
                  <p className="text-gray-600 mt-2">Servicios Especializados</p>
                </div>
              </div>
            </div>

            {/* Floating Badges */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="absolute -top-6 -right-6 bg-white p-4 rounded-full shadow-xl border-4 border-green-600"
            >
              <CheckCircle className="h-12 w-12 text-green-600" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.4, duration: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl"
            >
              <TrendingUp className="h-8 w-8 text-green-600 mb-2" />
              <p className="text-sm font-bold text-gray-900">Certificado</p>
              <p className="text-xs text-gray-600">ISO 45001</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 border-2 border-green-600 rounded-full flex items-start justify-center p-2"
        >
          <div className="w-1.5 h-3 bg-green-600 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
