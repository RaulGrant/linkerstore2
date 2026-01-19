'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { ArrowRight, MessageCircle, TrendingUp, Users, Award } from 'lucide-react';

const stats = [
  { value: 500, label: 'Proyectos Completados', suffix: '+' },
  { value: 98, label: 'Clientes Satisfechos', suffix: '%' },
  { value: 10, label: 'Años de Experiencia', suffix: '+' },
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

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/522472544357', '_blank', 'noopener,noreferrer');
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('servicios');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      {/* Background Wave Pattern */}
      <div className="absolute inset-0 opacity-30">
        <svg className="absolute top-0 right-0 w-1/2 h-1/2" viewBox="0 0 400 400" fill="none">
          <path d="M0 200 Q 100 150, 200 200 T 400 200 V 400 H 0 Z" fill="#C8B29E" opacity="0.2"/>
        </svg>
        <svg className="absolute bottom-0 left-0 w-1/2 h-1/2" viewBox="0 0 400 400" fill="none">
          <path d="M0 200 Q 100 250, 200 200 T 400 200 V 0 H 0 Z" fill="#C8B29E" opacity="0.2"/>
        </svg>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <Image
              src="/images/brands/grevel.jpg"
              alt="Interiores Grevel Logo"
              width={200}
              height={80}
              className="object-contain mx-auto"
            />
          </motion.div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-center mb-6"
          >
            <Badge 
              className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2 text-base"
              style={{ backgroundColor: '#2D8CFF' }}
            >
              ✨ +10 años de experiencia en la región
            </Badge>
          </motion.div>

          {/* Main Content */}
          <div className="text-center mb-12">
            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black mb-6"
              style={{ color: '#1A1A1A' }}
            >
              Transformamos Espacios, Creamos Experiencias
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl font-bold mb-4"
              style={{ color: '#2D8CFF' }}
            >
              Servicios de Remodelación, Mantenimiento, Instalaciones y Construcción
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto mb-8"
            >
              Especialistas en acabados de alta calidad para proyectos residenciales, comerciales e industriales
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                size="lg"
                className="text-white font-semibold text-lg px-8 py-6 transition-all duration-300 hover:scale-105"
                style={{ 
                  backgroundColor: '#2D8CFF',
                  boxShadow: '0 10px 25px rgba(45, 140, 255, 0.3)'
                }}
                onClick={handleWhatsAppClick}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1A6FD9'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#2D8CFF'}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Cotizar por WhatsApp
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="font-semibold text-lg px-8 py-6 border-2 transition-all duration-300 hover:scale-105"
                style={{ 
                  borderColor: '#2D8CFF',
                  color: '#2D8CFF'
                }}
                onClick={scrollToProjects}
              >
                Ver Proyectos
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center p-6 rounded-2xl border-2 bg-white transition-all duration-300 hover:shadow-xl"
                style={{ 
                  borderColor: '#2D8CFF',
                  boxShadow: '0 4px 20px rgba(45, 140, 255, 0.1)'
                }}
              >
                <div className="flex justify-center mb-3">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: 'rgba(255, 193, 7, 0.2)' }}
                  >
                    {index === 0 && <TrendingUp className="h-6 w-6" style={{ color: '#FFC107' }} />}
                    {index === 1 && <Users className="h-6 w-6" style={{ color: '#FFC107' }} />}
                    {index === 2 && <Award className="h-6 w-6" style={{ color: '#FFC107' }} />}
                  </div>
                </div>
                <div className="text-4xl md:text-5xl font-black mb-2" style={{ color: '#2D8CFF' }}>
                  {counters[index]}{stat.suffix}
                </div>
                <div className="text-sm md:text-base text-gray-600 font-semibold">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 rounded-full flex items-start justify-center p-2"
          style={{ border: `2px solid #2D8CFF` }}
        >
          <div className="w-1.5 h-3 rounded-full" style={{ backgroundColor: '#2D8CFF' }} />
        </motion.div>
      </motion.div>
    </section>
  );
}
