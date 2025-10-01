'use client';

import { useState, use } from 'react';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Star, ExternalLink, Heart, Share2, ShoppingCart, CheckCircle, Info, Award, Users, Shield, TrendingUp, ArrowLeft } from 'lucide-react';
import { AmazonProduct } from '@/lib/types/store';
import { useCart } from '@/lib/hooks/useCart';
import { realAmazonProducts } from '@/lib/data/real-amazon-products';

// Función para obtener emoji del producto
function getProductEmoji(asin: string): string {
  const emojiMap: Record<string, string> = {
    'B0BYLWYVP1': '⚖️', // Báscula Xiaomi
    'B0CRZ8MBZS': '⌚', // Smartwatch Xiaomi
    'B0CHN1T468': '🎧', // Audífonos Galaxy Buds
    'B0C7DLNQTN': '📱', // Samsung A34
    'B07X8HBHJP': '📶', // Router TP-Link
    'B0CYPVH1DT': '📱', // iPhone 15 Pro
    'B09B8R2QP9': '⌚', // Apple Watch
    'B0BW1P3QRT': '💻', // iPad Air
    'B0BZNVZ5VK': '🎮', // PlayStation 5
    'B07VSFJF1J': '🎮', // Nintendo Switch
    'B0D1JPYH2Y': '🔊', // Echo Dot
    'B08G5XJXJD': '📱', // Fire Tablet
    'B0CBYVPX91': '💻', // MacBook Air
    'B0B8BVQHMY': '⌨️', // Teclado Logitech
    'B07XV16P44': '🖱️', // Ratón Logitech
  };
  
  return emojiMap[asin] || '📦';
}

// Función para generar análisis técnico original
function generateTechnicalAnalysis(product: AmazonProduct): {
  specs: Array<{ label: string; value: string }>;
  features: string[];
  benefits: string[];
  usage: string[];
} {
  // Análisis técnico específico por categoría
  const categoryAnalysis: Record<string, any> = {
    'Electrónicos': {
      specs: [
        { label: 'Calidad de construcción', value: 'Premium con materiales resistentes' },
        { label: 'Conectividad', value: 'Múltiples opciones de conexión' },
        { label: 'Eficiencia energética', value: 'Optimizada para bajo consumo' },
        { label: 'Compatibilidad', value: 'Universal con múltiples dispositivos' }
      ],
      features: [
        'Diseño ergonómico y moderno',
        'Tecnología de última generación',
        'Interfaz intuitiva y fácil de usar',
        'Durabilidad comprobada en el tiempo'
      ],
      benefits: [
        'Mejora la productividad diaria',
        'Ahorro de tiempo y esfuerzo',
        'Experiencia de usuario superior',
        'Inversión a largo plazo'
      ],
      usage: [
        'Configuración inicial sencilla en pocos pasos',
        'Uso diario sin complicaciones técnicas',
        'Mantenimiento mínimo requerido',
        'Soporte técnico disponible cuando lo necesites'
      ]
    },
    'default': {
      specs: [
        { label: 'Calidad', value: 'Materiales de primera calidad' },
        { label: 'Diseño', value: 'Moderno y funcional' },
        { label: 'Durabilidad', value: 'Construido para durar' },
        { label: 'Versatilidad', value: 'Múltiples usos posibles' }
      ],
      features: [
        'Diseño cuidadosamente pensado',
        'Materiales de calidad superior',
        'Funcionalidad práctica',
        'Acabados profesionales'
      ],
      benefits: [
        'Satisface necesidades específicas',
        'Aporta valor en el día a día',
        'Diseño que complementa tu estilo',
        'Calidad que justifica la inversión'
      ],
      usage: [
        'Fácil de usar desde el primer momento',
        'Instrucciones claras incluidas',
        'Mantenimiento sencillo',
        'Resultados consistentes en cada uso'
      ]
    }
  };

  const category = product.category || 'default';
  const analysis = categoryAnalysis[category] || categoryAnalysis['default'];
  
  return analysis;
}

// Función para generar contenido expandido
function generateExpandedContent(product: AmazonProduct): {
  whyChoose: string[];
  technicalDetails: string[];
  usageScenarios: string[];
  maintenance: string[];
} {
  return {
    whyChoose: [
      `${product.title} representa la combinación perfecta entre calidad y funcionalidad`,
      'Diseñado pensando en las necesidades reales de los usuarios',
      'Materiales seleccionados cuidadosamente para garantizar durabilidad',
      'Respaldado por la confianza de miles de usuarios satisfechos'
    ],
    technicalDetails: [
      'Especificaciones técnicas optimizadas para máximo rendimiento',
      'Componentes de alta calidad que aseguran funcionamiento confiable',
      'Diseño ergonómico basado en estudios de usabilidad',
      'Procesos de fabricación que cumplen estándares internacionales'
    ],
    usageScenarios: [
      'Perfecto para uso diario en el hogar',
      'Ideal para profesionales que buscan eficiencia',
      'Excelente opción para regalar en ocasiones especiales',
      'Complemento perfecto para tu estilo de vida moderno'
    ],
    maintenance: [
      'Limpieza sencilla con productos básicos del hogar',
      'Mantenimiento mínimo para funcionamiento óptimo',
      'Guías de cuidado incluidas para máxima durabilidad',
      'Soporte disponible para consultas sobre uso y cuidado'
    ]
  };
}

interface ProductPageProps {
  params: Promise<{ asin: string }>;
}

export default function ProductPage({ params }: ProductPageProps) {
  const resolvedParams = use(params);
  const { asin } = resolvedParams;
  const { addToCart } = useCart();
  const [isFavorite, setIsFavorite] = useState(false);

  // Buscar el producto
  const product = realAmazonProducts.find(p => p.asin === asin);

  if (!product) {
    notFound();
  }

  const emoji = getProductEmoji(asin);
  const analysis = generateTechnicalAnalysis(product);
  const expandedContent = generateExpandedContent(product);

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header Navigation */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <Button 
            variant="ghost" 
            onClick={() => window.history.back()}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver a la tienda
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Product Image and Quick Actions */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardContent className="p-6">
                {/* Product Emoji Display */}
                <div className="flex justify-center mb-6">
                  <div className="w-48 h-48 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl flex items-center justify-center border-2 border-blue-200">
                    <span className="text-8xl filter drop-shadow-lg">{emoji}</span>
                  </div>
                </div>

                {/* Rating */}
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(product.rating) 
                            ? 'fill-yellow-400 text-yellow-400' 
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                    <span className="ml-2 text-sm text-gray-600">
                      ({product.rating}) • {product.reviewCount} reseñas
                    </span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <Button 
                    onClick={handleAddToCart}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white"
                    size="lg"
                  >
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    Añadir al carrito
                  </Button>
                  
                  <Button 
                    asChild
                    variant="outline" 
                    className="w-full border-orange-500 text-orange-600 hover:bg-orange-50"
                    size="lg"
                  >
                    <a 
                      href={product.amazonUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center"
                    >
                      <ExternalLink className="h-5 w-5 mr-2" />
                      Ver en Amazon
                    </a>
                  </Button>

                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="lg"
                      className="flex-1"
                      onClick={() => setIsFavorite(!isFavorite)}
                    >
                      <Heart className={`h-5 w-5 mr-2 ${isFavorite ? 'fill-red-500 text-red-500' : ''}`} />
                      Favorito
                    </Button>
                    
                    <Button
                      variant="outline"
                      size="lg"
                      className="flex-1"
                      onClick={() => {
                        navigator.share({
                          title: product.title,
                          text: `Mira este producto: ${product.title}`,
                          url: window.location.href
                        });
                      }}
                    >
                      <Share2 className="h-5 w-5 mr-2" />
                      Compartir
                    </Button>
                  </div>
                </div>

                {/* Prime Badge */}
                {product.isPrime && (
                  <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="flex items-center gap-2 text-blue-700">
                      <CheckCircle className="h-5 w-5" />
                      <span className="font-medium">Envío rápido disponible</span>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Product Information */}
          <div className="lg:col-span-2">
            {/* Product Title and Category */}
            <div className="mb-6">
              <Badge variant="secondary" className="mb-3">
                {product.category}
              </Badge>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {product.title}
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Content Tabs */}
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Vista General</TabsTrigger>
                <TabsTrigger value="technical">Técnico</TabsTrigger>
                <TabsTrigger value="guide">Guía de Uso</TabsTrigger>
                <TabsTrigger value="why-choose">Por qué Elegir</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="mt-6">
                <div className="grid gap-6">
                  {/* Key Features */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Award className="h-5 w-5 text-blue-600" />
                        Características Principales
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-3">
                        {analysis.features.map((feature, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Benefits */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <TrendingUp className="h-5 w-5 text-green-600" />
                        Beneficios Clave
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-3">
                        {analysis.benefits.map((benefit, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <Star className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="technical" className="mt-6">
                <div className="grid gap-6">
                  {/* Technical Specifications */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Info className="h-5 w-5 text-blue-600" />
                        Especificaciones Técnicas
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-4">
                        {analysis.specs.map((spec, index) => (
                          <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                            <span className="font-medium text-gray-700">{spec.label}:</span>
                            <span className="text-gray-600">{spec.value}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Technical Details */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Shield className="h-5 w-5 text-purple-600" />
                        Detalles Técnicos
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-3">
                        {expandedContent.technicalDetails.map((detail, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="guide" className="mt-6">
                <div className="grid gap-6">
                  {/* Usage Guide */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Users className="h-5 w-5 text-green-600" />
                        Guía de Uso
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-3">
                        {analysis.usage.map((usage, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">
                              {index + 1}
                            </div>
                            <span className="text-gray-700">{usage}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Usage Scenarios */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-blue-600" />
                        Escenarios de Uso
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-3">
                        {expandedContent.usageScenarios.map((scenario, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{scenario}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Maintenance */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Shield className="h-5 w-5 text-orange-600" />
                        Cuidado y Mantenimiento
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-3">
                        {expandedContent.maintenance.map((tip, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700">{tip}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="why-choose" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Award className="h-5 w-5 text-gold-600" />
                      ¿Por qué elegir este producto?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4">
                      {expandedContent.whyChoose.map((reason, index) => (
                        <div key={index} className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
                          <div className="flex items-start gap-3">
                            <Award className="h-6 w-6 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 font-medium">{reason}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
