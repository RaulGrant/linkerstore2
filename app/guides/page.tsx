'use client';

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"
import GuideModal from "@/components/modals/GuideModal"
import { guideData } from "@/lib/data/guide-data"
import {
  BookOpen,
  Shield,
  HardHat,
  Wrench,
  Zap,
  Eye,
  FileText,
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  Star,
  Filter
} from "lucide-react"
import Link from "next/link"

export default function GuidesPage() {
  const [selectedGuide, setSelectedGuide] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleGuideClick = (guideKey: string) => {
    setSelectedGuide(guideData[guideKey])
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedGuide(null)
  }
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
            <Link href="/guides" className="text-blue-600 font-medium">
              Guías de Compra
            </Link>
            <Link href="/faq" className="text-gray-600 hover:text-blue-600 transition-colors">
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
                <BookOpen className="h-16 w-16 text-blue-600" />
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
                Guías de Compra Industrial
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Encuentra las mejores recomendaciones y guías especializadas para elegir 
                el equipo de protección personal y herramientas industriales más adecuadas 
                para tu trabajo y sector.
              </p>
            </div>
          </div>
        </section>

        {/* Categorías de Guías */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Guías por Sector Industrial
              </h2>
              <p className="text-lg text-gray-600">
                Selecciona tu sector para encontrar las mejores recomendaciones
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Construcción */}
              <Card className="border-2 border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all cursor-pointer">
                <CardHeader className="text-center">
                  <HardHat className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                  <CardTitle className="text-xl">Construcción</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 text-center">
                    EPP básico, herramientas de construcción, equipos de seguridad en altura
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Cascos y chalecos reflectantes
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Arneses y equipos anti-caídas
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Herramientas básicas y especialistas
                    </div>
                  </div>
                  <Button 
                    className="w-full" 
                    variant="outline"
                    onClick={() => handleGuideClick('safety')}
                  >
                    Ver Guía Completa
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              {/* Electricidad */}
              <Card className="border-2 border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all cursor-pointer">
                <CardHeader className="text-center">
                  <Zap className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                  <CardTitle className="text-xl">Electricidad</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 text-center">
                    Equipos dieléctricos, herramientas de medición, protección eléctrica
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Guantes y botas dieléctricas
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Multímetros y detectores
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Herramientas aisladas
                    </div>
                  </div>
                  <Button 
                    className="w-full" 
                    variant="outline"
                    onClick={() => handleGuideClick('electrical')}
                  >
                    Ver Guía Completa
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              {/* Soldadura */}
              <Card className="border-2 border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all cursor-pointer">
                <CardHeader className="text-center">
                  <Shield className="h-12 w-12 text-red-600 mx-auto mb-4" />
                  <CardTitle className="text-xl">Soldadura</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 text-center">
                    Protección facial, respiradores, equipos especializados
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Máscaras de soldadura automáticas
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Respiradores con filtros
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Guantes resistentes al calor
                    </div>
                  </div>
                  <Button 
                    className="w-full" 
                    variant="outline"
                    onClick={() => handleGuideClick('vision')}
                  >
                    Ver Guía Completa
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              {/* Mecánica */}
              <Card className="border-2 border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all cursor-pointer">
                <CardHeader className="text-center">
                  <Wrench className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle className="text-xl">Mecánica</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 text-center">
                    Herramientas de precisión, equipos de diagnóstico, protección básica
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Llaves y destornilladores
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Taladros y rotomartillos
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Lentes y guantes de protección
                    </div>
                  </div>
                  <Button 
                    className="w-full" 
                    variant="outline"
                    onClick={() => handleGuideClick('tools')}
                  >
                    Ver Guía Completa
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              {/* Seguridad Industrial */}
              <Card className="border-2 border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all cursor-pointer">
                <CardHeader className="text-center">
                  <Eye className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <CardTitle className="text-xl">Seguridad Industrial</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 text-center">
                    Detectores de gases, equipos de emergencia, primeros auxilios
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Detectores de gas multiuso
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Botiquines industriales
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Extintores portátiles
                    </div>
                  </div>
                  <Button 
                    className="w-full" 
                    variant="outline"
                    onClick={() => handleGuideClick('documentation')}
                  >
                    Ver Guía Completa
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              {/* Mantenimiento */}
              <Card className="border-2 border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all cursor-pointer">
                <CardHeader className="text-center">
                  <Filter className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <CardTitle className="text-xl">Mantenimiento</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 text-center">
                    Equipos de medición, selladores, productos de limpieza industrial
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Termómetros infrarrojos
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Selladores y cintas
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Sonómetros y medidores
                    </div>
                  </div>
                  <Button 
                    className="w-full" 
                    variant="outline"
                    onClick={() => handleGuideClick('maintenance')}
                  >
                    Ver Guía Completa
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Cómo elegir productos */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Cómo Elegir el Equipo Correcto
              </h2>
              <p className="text-lg text-gray-600">
                Factores clave a considerar al seleccionar productos industriales
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Star className="h-6 w-6 text-yellow-500 mr-2" />
                    Factores de Calidad
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <div>
                      <strong>Certificaciones:</strong> OSHA, ANSI, ISO
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <div>
                      <strong>Materiales:</strong> Durabilidad y resistencia
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <div>
                      <strong>Reputación:</strong> Marca y reseñas de usuarios
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <AlertTriangle className="h-6 w-6 text-orange-500 mr-2" />
                    Consideraciones de Seguridad
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <div>
                      <strong>Nivel de protección:</strong> Según riesgo laboral
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <div>
                      <strong>Comodidad:</strong> Uso prolongado sin fatiga
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <div>
                      <strong>Mantenimiento:</strong> Facilidad de limpieza
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <div className="container mx-auto px-4 lg:px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">
              ¿Listo para encontrar el equipo perfecto?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Explora nuestra tienda con productos cuidadosamente seleccionados y reseñados
            </p>
            {/*
            <Link href="/store">
              <Button size="lg" variant="secondary" className="text-blue-600">
                Ver Tienda Industrial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            */}
          </div>
        </section>
      </main>

      <Footer />
      
      {/* Guide Modal */}
      <GuideModal 
        isOpen={isModalOpen}
        onClose={closeModal}
        guide={selectedGuide}
      />
    </div>
  )
}
