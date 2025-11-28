'use client'

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { realAmazonProducts } from "@/lib/data/real-amazon-products";
import { AmazonProduct } from "@/lib/types/store";
import { ArrowRight, ShoppingBag, Users, Target, Star, Timer, Sparkles, Zap, Shield, Award } from "lucide-react";

// Verificar que los productos existan antes de usarlos
const products = realAmazonProducts || [];

const categories = [
  {
    name: "Equipos de Protección",
    description: "EPP certificado OSHA/ANSI para seguridad laboral",
    count: products.filter((p: AmazonProduct) => p.category === "EPP").length,
    href: "/store?category=epp",
    color: "bg-gradient-to-r from-green-500 to-emerald-600",
    icon: Shield
  },
  {
    name: "Herramientas Industriales",
    description: "Equipos profesionales para proyectos industriales",
    count: products.filter((p: AmazonProduct) => p.category === "Herramientas").length,
    href: "/store?category=herramientas",
    color: "bg-gradient-to-r from-blue-500 to-cyan-600",
    icon: Zap
  },
  {
    name: "Seguridad y Mantenimiento",
    description: "Equipos para detección, monitoreo y mantenimiento",
    count: products.filter((p: AmazonProduct) => p.category === "Seguridad").length,
    href: "/store?category=seguridad",
    color: "bg-gradient-to-r from-yellow-500 to-orange-500",
    icon: Award
  }
];

const featuredProducts = products.slice(0, 6);

interface CountdownProps {
  targetDate: Date;
}

function CountdownTimer({ targetDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
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
  // Fecha objetivo: 3 meses desde ahora (1 de noviembre, 2025)
  const targetDate = new Date('2025-11-01T00:00:00');

  return (
    <div className="min-h-screen">
      {/* Hero Section con Cuenta Regresiva */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
        {/* Efectos visuales de fondo */}
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] opacity-10 bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-indigo-900/80"></div>
        
        {/* Partículas flotantes */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            >
              <Sparkles className="w-4 h-4 text-blue-300/30" />
            </div>
          ))}
        </div>

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
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <Link href="/store" className="flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5" />
                  Explora Nuestra Tienda Industrial
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-2 border-white/30 text-white hover:bg-white hover:text-blue-900 font-semibold px-8 py-4 rounded-full backdrop-blur-sm">
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
      </section>

      {/* Banner de Aviso Amazon Afiliados */}
      <section className="bg-gradient-to-r from-amber-50 to-yellow-50 border-b border-amber-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-center gap-2 text-center">
            <Badge variant="outline" className="bg-amber-100 text-amber-800 border-amber-300">
              Amazon Afiliados
            </Badge>
            <p className="text-sm text-amber-800">
              <strong>Transparencia total:</strong> Como afiliado de Amazon, obtenemos ingresos por las compras adscritas. 
              Esto nos permite mantener el catálogo actualizado sin costo para ti.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Section Mejorada */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800">Catálogo Especializado</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Equipos Industriales por Sector
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Productos verificados y categorizados especialmente para contratistas, 
              electricistas, soldadores y profesionales industriales
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <Link key={category.name} href={category.href} className="group">
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 transform hover:scale-105">
                    <div className="flex items-center justify-between mb-6">
                      <div className={`${category.color} p-4 rounded-xl w-16 h-16 flex items-center justify-center shadow-lg`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <Badge variant="secondary" className="bg-gray-100 text-gray-700">
                        {category.count} productos
                      </Badge>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {category.description}
                    </p>
                    <div className="flex items-center text-blue-600 group-hover:text-blue-800 font-semibold">
                      <span>Explorar categoría</span>
                      <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Products Section Mejorada */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-100 text-green-800">Más Vendidos</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Productos Destacados
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Los equipos más populares y mejor valorados por profesionales industriales. 
              Todos verificados en Amazon con reseñas reales.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product: AmazonProduct) => (
              <Link key={product.asin} href={`/store/${product.asin}`} className="group">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 transform hover:scale-105">
                  <div className="aspect-square relative overflow-hidden">
                    <Image
                      src={product.image_url}
                      alt={product.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-blue-600 text-white">
                        {product.category}
                      </Badge>
                    </div>
                    {product.is_prime && (
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-orange-500 text-white">
                          Prime
                        </Badge>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating || 0) 
                              ? 'text-yellow-400 fill-current' 
                              : 'text-gray-300'
                          }`} 
                        />
                      ))}
                      <span className="text-sm text-gray-600 ml-1">
                        ({product.review_count || 0})
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 line-clamp-2">
                      {product.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-2xl font-bold text-gray-900">
                          ${(product.price || 0).toLocaleString('es-MX')}
                        </span>
                        <span className="text-sm text-gray-500 ml-1">MXN</span>
                      </div>
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                        Ver detalles
                      </Button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
              <Link href="/store" className="flex items-center gap-2">
                Ver todos los {products.length} productos
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section Final */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Listo para encontrar el equipo perfecto?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Explora nuestro catálogo de {products.length} productos verificados en Amazon. 
            Equipos profesionales para contratistas que exigen calidad.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
              <Link href="/store" className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5" />
                Explorar Catálogo
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-900">
              <Link href="/guias" className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                Guías de Compra
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
