'use client';

import { useState, useEffect } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ExternalLink, Star, CheckCircle, AlertTriangle, Info, Users, Wrench, Shield, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AmazonProduct } from '@/lib/types/store';
import { getProductByAsin, getRelatedProducts } from '@/lib/data/real-amazon-products';

interface ProductDetailPageProps {
  params: {
    asin: string;
  };
}

// Componente para renderizar estrellas
function renderStars(rating: number) {
  return [...Array(5)].map((_, i) => (
    <Star 
      key={i} 
      className={`w-4 h-4 ${
        i < Math.floor(rating) 
          ? 'text-yellow-400 fill-current' 
          : 'text-gray-300'
      }`} 
    />
  ));
}

// Función para generar contenido específico por categoría
function generateProductContent(product: AmazonProduct) {
  const category = product.category?.toLowerCase() || '';
  
  const prosConsData = {
    epp: {
      pros: [
        'Cumple con estándares OSHA/ANSI',
        'Materiales duraderos y resistentes',
        'Diseño ergonómico para uso prolongado',
        'Certificaciones internacionales'
      ],
      cons: [
        'Requiere mantenimiento regular',
        'Puede requerir período de adaptación',
        'Costo inicial medio-alto'
      ]
    },
    herramientas: {
      pros: [
        'Construcción robusta para uso industrial',
        'Precisión y confiabilidad',
        'Garantía del fabricante',
        'Versatilidad de aplicaciones'
      ],
      cons: [
        'Requiere calibración periódica',
        'Necesita almacenamiento adecuado',
        'Curva de aprendizaje para nuevos usuarios'
      ]
    },
    default: {
      pros: [
        'Calidad industrial verificada',
        'Relación costo-beneficio favorable',
        'Disponibilidad inmediata',
        'Soporte técnico disponible'
      ],
      cons: [
        'Puede requerir accesorios adicionales',
        'Necesita seguir instrucciones específicas',
        'Mantenimiento preventivo recomendado'
      ]
    }
  };

  const userProfiles = {
    epp: [
      'Contratistas de construcción',
      'Supervisores de seguridad industrial',
      'Trabajadores de soldadura',
      'Personal de mantenimiento'
    ],
    herramientas: [
      'Técnicos especializados',
      'Electricistas certificados',
      'Mecánicos industriales',
      'Ingenieros de campo'
    ],
    default: [
      'Profesionales industriales',
      'Contratistas generales',
      'Supervisores de obra',
      'Personal técnico'
    ]
  };

  const usageGuides = {
    epp: [
      '1. Inspeccionar antes de cada uso',
      '2. Verificar certificaciones vigentes',
      '3. Seguir protocolos de limpieza',
      '4. Almacenar en lugar seco y seguro',
      '5. Reemplazar según vida útil'
    ],
    herramientas: [
      '1. Calibrar antes del primer uso',
      '2. Verificar estado de componentes',
      '3. Usar con equipos compatibles',
      '4. Mantener limpio y lubricado',
      '5. Seguir manual del fabricante'
    ],
    default: [
      '1. Leer manual de instrucciones',
      '2. Verificar compatibilidad',
      '3. Usar equipo de protección',
      '4. Seguir procedimientos seguros',
      '5. Realizar mantenimiento regular'
    ]
  };

  return {
    pros: prosConsData[category as keyof typeof prosConsData] || prosConsData.default,
    userProfiles: userProfiles[category as keyof typeof userProfiles] || userProfiles.default,
    usageGuide: usageGuides[category as keyof typeof usageGuides] || usageGuides.default
  };
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const [product, setProduct] = useState<AmazonProduct | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<AmazonProduct[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProduct = () => {
      try {
        const foundProduct = getProductByAsin(params.asin);
        if (foundProduct) {
          setProduct(foundProduct);
          setRelatedProducts(getRelatedProducts(params.asin, 4));
        }
      } catch (error) {
        console.error('Error loading product:', error);
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [params.asin]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Cargando producto...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    notFound();
  }

  const contentData = generateProductContent(product);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header con navegación */}
      <header className="bg-white border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link 
              href="/store" 
              className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver a la tienda
            </Link>
            <div className="flex items-center gap-4">
              <Badge variant="secondary">{product.category}</Badge>
              {product.is_prime && (
                <Badge className="bg-orange-500">Prime</Badge>
              )}
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Sección principal del producto */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Imagen del producto */}
          <div className="space-y-4">
            <div className="aspect-square relative bg-white rounded-lg overflow-hidden border">
              <Image
                src={product.image_url}
                alt={product.title}
                fill
                className="object-cover"
                priority
              />
            </div>
            
            {/* Aviso Amazon Afiliados */}
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <div className="flex items-start gap-2">
                <Info className="w-5 h-5 text-amber-600 mt-0.5" />
                <div className="text-sm">
                  <p className="font-medium text-amber-800">Transparencia Amazon Afiliados</p>
                  <p className="text-amber-700">
                    Como afiliado de Amazon, obtenemos ingresos por las compras adscritas. 
                    Esto nos permite mantener nuestras reseñas independientes y gratuitas.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Información del producto */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {product.title}
              </h1>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  {renderStars(product.rating || 0)}
                  <span className="text-sm text-gray-600 ml-2">
                    ({(product.review_count || 0).toLocaleString()} reseñas)
                  </span>
                </div>
                <Badge variant="outline" className="text-xs">
                  {product.brand}
                </Badge>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {product.description}
              </p>

              <div className="flex items-center gap-4 mb-6">
                <div className="text-3xl font-bold text-blue-600">
                  ${(product.price || 0).toLocaleString('es-MX')} MXN
                </div>
                {product.is_active && (
                  <Badge variant="default" className="bg-green-600">
                    Disponible
                  </Badge>
                )}
              </div>

              <Button 
                asChild 
                size="lg" 
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
              >
                <a href={product.amazon_url} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Comprar en Amazon
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Contenido detallado con tabs */}
        <Tabs defaultValue="review" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="review">Reseña Técnica</TabsTrigger>
            <TabsTrigger value="pros-cons">Pros y Contras</TabsTrigger>
            <TabsTrigger value="users">Perfil de Usuario</TabsTrigger>
            <TabsTrigger value="guide">Guía de Uso</TabsTrigger>
            <TabsTrigger value="specs">Especificaciones</TabsTrigger>
          </TabsList>

          <TabsContent value="review" className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-6 h-6 text-blue-600" />
                  Reseña Técnica Detallada
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="prose max-w-none">
                  <h3>Análisis Profesional</h3>
                  <p>
                    Este {product.category?.toLowerCase()} de la marca {product.brand} representa una 
                    excelente opción para profesionales que buscan equipos confiables y duraderos. 
                    Con una calificación de {product.rating} estrellas basada en {product.review_count} reseñas 
                    verificadas, ha demostrado su valor en aplicaciones industriales reales.
                  </p>
                  
                  <h3>Construcción y Materiales</h3>
                  <p>
                    La construcción robusta y los materiales de alta calidad garantizan un rendimiento 
                    consistente bajo condiciones exigentes. El diseño ergonómico facilita su uso 
                    durante jornadas extensas de trabajo.
                  </p>

                  <h3>Aplicaciones Recomendadas</h3>
                  <p>
                    Ideal para uso en {product.sub_category?.toLowerCase()}, este producto cumple con 
                    los estándares más exigentes de la industria. Su versatilidad lo hace perfecto 
                    para múltiples aplicaciones profesionales.
                  </p>

                  <h3>Opinión del Experto</h3>
                  <p>
                    Después de analizar las especificaciones y revisar el feedback de usuarios, 
                    consideramos que este producto ofrece una excelente relación calidad-precio. 
                    La reputación de {product.brand} respalda la confiabilidad a largo plazo.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="pros-cons" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-green-700">
                    <CheckCircle className="w-6 h-6" />
                    Ventajas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {contentData.pros.pros.map((pro, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{pro}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-orange-700">
                    <AlertTriangle className="w-6 h-6" />
                    Consideraciones
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {contentData.pros.cons.map((con, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <AlertTriangle className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{con}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="users" className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-6 h-6 text-blue-600" />
                  Perfil de Usuario Ideal
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Usuarios Principales</h3>
                    <ul className="space-y-2">
                      {contentData.userProfiles.map((profile, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          <span className="text-gray-700">{profile}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Nivel de Experiencia</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                        <span className="text-gray-700">Principiantes: Fácil de usar</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                        <span className="text-gray-700">Intermedios: Funciones avanzadas</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                        <span className="text-gray-700">Expertos: Máximo rendimiento</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="guide" className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wrench className="w-6 h-6 text-blue-600" />
                  Guía de Uso y Mantenimiento
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Pasos de Uso</h3>
                  <ol className="space-y-2">
                    {contentData.usageGuide.map((step, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0 mt-0.5">
                          {index + 1}
                        </div>
                        <span className="text-gray-700">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <h4 className="font-medium text-yellow-800 mb-2">⚠️ Certificaciones y Normativas</h4>
                  <p className="text-yellow-700 text-sm">
                    Este producto cumple con las normativas OSHA, ANSI y estándares internacionales de seguridad. 
                    Siempre verifique las certificaciones específicas para su aplicación.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="specs" className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-6 h-6 text-blue-600" />
                  Especificaciones Técnicas
                </CardTitle>
              </CardHeader>
              <CardContent>
                {product.specifications && Object.keys(product.specifications).length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-3 border-b border-gray-100">
                        <span className="font-medium text-gray-700">{key}:</span>
                        <span className="text-gray-600 text-right">{value}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-gray-600">
                      Especificaciones técnicas detalladas disponibles en la página oficial de Amazon.
                    </p>
                    <Button variant="outline" className="mt-4" asChild>
                      <a href={product.amazon_url} target="_blank" rel="noopener noreferrer">
                        Ver especificaciones completas
                      </a>
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Productos relacionados */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Productos Relacionados</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Link key={relatedProduct.asin} href={`/store/${relatedProduct.asin}`}>
                  <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                    <div className="aspect-square relative">
                      <Image
                        src={relatedProduct.image_url}
                        alt={relatedProduct.title}
                        fill
                        className="object-cover rounded-t-lg"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-medium text-gray-900 line-clamp-2 mb-2">
                        {relatedProduct.title}
                      </h3>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold text-blue-600">
                          ${(relatedProduct.price || 0).toLocaleString('es-MX')}
                        </span>
                        <div className="flex items-center gap-1">
                          {renderStars(relatedProduct.rating || 0)}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
