'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"
import TutorialModal from '@/components/modals/TutorialModal';
import {
  HelpCircle,
  Store,
  ShoppingCart,
  Shield,
  Package,
  Truck,
  CreditCard,
  User,
  ArrowRight,
  ChevronDown,
  ChevronUp
} from "lucide-react"
import Link from "next/link"

export default function FAQPage() {
  const [isTutorialOpen, setIsTutorialOpen] = useState(false);
  const [tutorialSection, setTutorialSection] = useState('navigation');

  const openTutorial = (section: string) => {
    setTutorialSection(section);
    setIsTutorialOpen(true);
  };
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-sm">LP</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              LinkerStore
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
              {/*
              <Link href="/store" className="text-gray-600 hover:text-blue-600 transition-colors">
                Tienda Industrial
              </Link>
              */}
            <Link href="/guides" className="text-gray-600 hover:text-blue-600 transition-colors">
              Guías de Compra
            </Link>
            <Link href="/faq" className="text-blue-600 font-medium">
              FAQ
            </Link>
          </nav>

          <Link href="/login">
            <Button variant="ghost" className="text-gray-600 hover:text-blue-600">
              Iniciar Sesión
            </Button>
          </Link>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center max-w-3xl mx-auto space-y-6">
              <div className="flex justify-center">
                <HelpCircle className="h-16 w-16 text-blue-600" />
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
                Preguntas Frecuentes
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Encuentra respuestas a las preguntas más comunes sobre nuestra tienda industrial, 
                productos, envíos y más.
              </p>
            </div>
          </div>
        </section>

        {/* Categorías de FAQ */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="grid lg:grid-cols-2 gap-12">
              
              {/* Sobre la Tienda */}
              <div className="space-y-6">
                <Card className="border-2 border-blue-100">
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl">
                      <Store className="h-6 w-6 text-blue-600 mr-3" />
                      Sobre la Tienda
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    
                    <div className="space-y-3">
                      <h3 className="font-semibold text-gray-900">¿Qué es LinkerStore?</h3>
                      <p className="text-gray-600">
                        Somos un blog especializado en productos industriales con reseñas detalladas 
                        y comparativas profesionales. Nos enfocamos en equipos de protección personal (EPP) 
                        y herramientas industriales de alta calidad.
                      </p>
                    </div>

                    <div className="space-y-3">
                      <h3 className="font-semibold text-gray-900">¿Son productos originales?</h3>
                      <p className="text-gray-600">
                        Sí, todos nuestros productos son originales y están disponibles a través de Amazon. 
                        Proporcionamos enlaces directos a productos verificados en Amazon para garantizar 
                        autenticidad y servicio confiable.
                      </p>
                    </div>

                    <div className="space-y-3">
                      <h3 className="font-semibold text-gray-900">¿Por qué confiar en nuestras reseñas?</h3>
                      <p className="text-gray-600">
                        Nuestro equipo cuenta con experiencia en la industria y realiza evaluaciones 
                        técnicas detalladas. Analizamos especificaciones, certificaciones y feedback 
                        real de profesionales que han usado los productos.
                      </p>
                    </div>

                  </CardContent>
                </Card>
              </div>

              {/* Productos y Compras */}
              <div className="space-y-6">
                <Card className="border-2 border-green-100">
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl">
                      <ShoppingCart className="h-6 w-6 text-green-600 mr-3" />
                      Productos y Compras
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    
                    <div className="space-y-3">
                      <h3 className="font-semibold text-gray-900">¿Cómo realizo una compra?</h3>
                      <p className="text-gray-600">
                        Al hacer clic en "Comprar en Amazon", serás redirigido directamente a Amazon 
                        donde puedes completar tu compra de forma segura. Nosotros no procesamos 
                        pagos directamente.
                      </p>
                    </div>

                    <div className="space-y-3">
                      <h3 className="font-semibold text-gray-900">¿Puedo ver mi historial de pedidos?</h3>
                      <p className="text-gray-600">
                        Los pedidos se realizan directamente en Amazon, por lo que el historial 
                        está disponible en tu cuenta de Amazon. En LinkerStore puedes ver tu 
                        historial de productos vistos y favoritos.
                      </p>
                    </div>

                    <div className="space-y-3">
                      <h3 className="font-semibold text-gray-900">¿Hay garantía en los productos?</h3>
                      <p className="text-gray-600">
                        La garantía y política de devoluciones están respaldadas por Amazon. 
                        Cada producto tiene información detallada sobre garantías del fabricante 
                        y políticas de Amazon.
                      </p>
                    </div>

                  </CardContent>
                </Card>
              </div>

              {/* Seguridad y Certificaciones */}
              <div className="space-y-6">
                <Card className="border-2 border-orange-100">
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl">
                      <Shield className="h-6 w-6 text-orange-600 mr-3" />
                      Seguridad y Certificaciones
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    
                    <div className="space-y-3">
                      <h3 className="font-semibold text-gray-900">¿Qué certificaciones buscar en EPP?</h3>
                      <p className="text-gray-600">
                        Los principales estándares son OSHA (Administración de Seguridad), 
                        ANSI (Instituto Nacional Americano de Estándares), y certificaciones ISO. 
                        Siempre verificamos que los productos cumplan con normativas aplicables.
                      </p>
                    </div>

                    <div className="space-y-3">
                      <h3 className="font-semibold text-gray-900">¿Cómo saber si un producto es adecuado para mi trabajo?</h3>
                      <p className="text-gray-600">
                        Cada producto incluye información sobre aplicaciones específicas, 
                        nivel de protección y sectores recomendados. También ofrecemos 
                        guías de compra por sector industrial.
                      </p>
                    </div>

                    <div className="space-y-3">
                      <h3 className="font-semibold text-gray-900">¿Verifican la calidad de los productos?</h3>
                      <p className="text-gray-600">
                        Sí, evaluamos especificaciones técnicas, certificaciones, reseñas 
                        de usuarios y, cuando es posible, realizamos pruebas directas para 
                        nuestras reseñas detalladas.
                      </p>
                    </div>

                  </CardContent>
                </Card>
              </div>

              {/* Cuenta de Usuario */}
              <div className="space-y-6">
                <Card className="border-2 border-purple-100">
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl">
                      <User className="h-6 w-6 text-purple-600 mr-3" />
                      Cuenta de Usuario
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    
                    <div className="space-y-3">
                      <h3 className="font-semibold text-gray-900">¿Necesito crear una cuenta?</h3>
                      <p className="text-gray-600">
                        No es obligatorio, pero crear una cuenta te permite guardar productos 
                        favoritos, ver tu historial de productos visitados y recibir 
                        recomendaciones personalizadas.
                      </p>
                    </div>

                    <div className="space-y-3">
                      <h3 className="font-semibold text-gray-900">¿Qué información guardamos?</h3>
                      <p className="text-gray-600">
                        Solo guardamos información básica de perfil, productos que has visitado 
                        o marcado como favoritos. No almacenamos información de pago ya que 
                        las compras se realizan en Amazon.
                      </p>
                    </div>

                    <div className="space-y-3">
                      <h3 className="font-semibold text-gray-900">¿Cómo protegen mi privacidad?</h3>
                      <p className="text-gray-600">
                        Cumplimos con todas las regulaciones de privacidad. Tu información 
                        personal nunca se comparte con terceros. Como afiliados de Amazon, 
                        obtenemos ingresos por compras adscritas.
                      </p>
                    </div>

                  </CardContent>
                </Card>
              </div>

            </div>
          </div>
        </section>

        {/* Tutoriales de Uso */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Tutoriales de Uso
              </h2>
              <p className="text-lg text-gray-600">
                Aprende a usar nuestra plataforma y sacar el máximo provecho de nuestros productos
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Cómo navegar la tienda</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Aprende a usar filtros, categorías y búsqueda para encontrar 
                    exactamente lo que necesitas.
                  </p>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => openTutorial('navigation')}
                  >
                    Ver Tutorial
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Interpretar reseñas</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Entiende nuestro sistema de evaluación y cómo interpretar 
                    las comparativas técnicas.
                  </p>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => openTutorial('reviews')}
                  >
                    Ver Tutorial
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Seleccionar EPP correcto</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Guía paso a paso para elegir el equipo de protección 
                    personal adecuado para tu sector.
                  </p>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => openTutorial('epp-selection')}
                  >
                    Ver Tutorial
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

            </div>
          </div>
        </section>

        {/* Contacto */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <div className="container mx-auto px-4 lg:px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">
              ¿No encontraste lo que buscabas?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Estamos aquí para ayudarte. Explora nuestra tienda o contáctanos directamente.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {/*
                <Link href="/store">
                  <Button size="lg" variant="secondary" className="text-blue-600">
                    <Store className="mr-2 h-5 w-5" />
                    Ver Tienda
                  </Button>
                </Link>
                */}
              <Link href="/guides">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  Guías de Compra
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Tutorial Modal */}
      <TutorialModal 
        isOpen={isTutorialOpen}
        onClose={() => setIsTutorialOpen(false)}
        initialSection={tutorialSection}
      />
    </div>
  )
}
