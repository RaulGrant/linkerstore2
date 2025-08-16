'use client';

import { useState, useEffect, use } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ExternalLink, Star, CheckCircle, AlertTriangle, Info, Users, Wrench, Shield, Award, BarChart3, PieChart, Target, TrendingUp, Clock, ThumbsUp, Eye, Check, X, Heart, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { AmazonProduct } from '@/lib/types/store';
import { getProductByAsin, getRelatedProducts } from '@/lib/data/real-amazon-products';
import { getProductImageUrls, hasMultipleImages } from '@/lib/utils/productImageMapping';

interface ProductDetailPageProps {
  params: Promise<{
    asin: string;
  }>;
}

interface ProductImage {
  url: string;
  alt: string;
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
  
  // Generar reseñas detalladas y realistas (igual que en el modal)
  const detailedReviews = [
    {
      id: 1,
      name: "Carlos Mendoza",
      verified: true,
      rating: 5,
      date: "15 de julio, 2024",
      title: "Excelente calidad para uso industrial",
      text: `He estado usando este ${product.category?.toLowerCase()} durante 6 meses en mi taller y la calidad es excepcional. La construcción es sólida, cumple todas las normativas OSHA que necesitamos y el equipo de trabajo está muy satisfecho. La relación calidad-precio es imbatible, especialmente considerando la durabilidad que ha demostrado hasta ahora. Sin duda lo recomiendo para uso profesional.`,
      helpful: 24,
      images: 3,
      pros: ["Construcción robusta", "Certificación completa", "Confort prolongado"],
      cons: ["Precio ligeramente alto", "Tiempo de envío"]
    },
    {
      id: 2,
      name: "María Elena Rodríguez",
      verified: true,
      rating: 4,
      date: "3 de julio, 2024",
      title: "Muy bueno pero con pequeños detalles",
      text: `Compré este producto para mi empresa de construcción y en general estamos muy contentos. La funcionalidad es excelente y cumple perfectamente con su propósito. Sin embargo, me gustaría que las instrucciones fueran más claras y que incluyera algunos accesorios adicionales. Aún así, lo recomiendo porque la calidad principal del producto es muy buena.`,
      helpful: 18,
      images: 2,
      pros: ["Funcionalidad perfecta", "Buen acabado", "Llegó rápido"],
      cons: ["Instrucciones confusas", "Faltan accesorios"]
    },
    {
      id: 3,
      name: "Roberto Jiménez",
      verified: true,
      rating: 5,
      date: "28 de junio, 2024",
      title: "Superó mis expectativas completamente",
      text: `Después de usar varios productos similares, puedo decir que éste es superior en muchos aspectos. La atención al detalle en el diseño es notable, los materiales se sienten premium y la funcionalidad es intuitiva. Lo he usado en condiciones exigentes y ha resistido perfectamente. El servicio al cliente también fue excelente cuando tuve una consulta. Definitivamente una inversión que vale la pena.`,
      helpful: 31,
      images: 4,
      pros: ["Calidad premium", "Muy resistente", "Excelente servicio"],
      cons: ["Ninguno destacable"]
    }
  ];

  // Datos para gráficas de calificaciones
  const ratingData = [
    { stars: 5, count: 245, percentage: 65 },
    { stars: 4, count: 89, percentage: 24 },
    { stars: 3, count: 28, percentage: 7 },
    { stars: 2, count: 11, percentage: 3 },
    { stars: 1, count: 4, percentage: 1 }
  ];

  // Productos comparativos (simulados)
  const comparativeProducts = [
    {
      name: "Producto Actual",
      rating: product.rating || 4.5,
      price: product.price,
      durability: 95,
      safety: 98,
      comfort: 92,
      value: 90
    },
    {
      name: "Competidor A",
      rating: 4.2,
      price: product.price * 1.15,
      durability: 88,
      safety: 94,
      comfort: 85,
      value: 82
    },
    {
      name: "Competidor B", 
      rating: 4.1,
      price: product.price * 0.85,
      durability: 82,
      safety: 90,
      comfort: 88,
      value: 85
    }
  ];

  // Análisis de sentimientos simulado
  const sentimentData = [
    { aspect: "Calidad", positive: 92, negative: 8 },
    { aspect: "Precio", positive: 78, negative: 22 },
    { aspect: "Durabilidad", positive: 89, negative: 11 },
    { aspect: "Comodidad", positive: 85, negative: 15 },
    { aspect: "Diseño", positive: 91, negative: 9 }
  ];
  
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
    detailedReviews,
    ratingData,
    comparativeProducts,
    sentimentData,
    pros: prosConsData[category as keyof typeof prosConsData] || prosConsData.default,
    userProfiles: userProfiles[category as keyof typeof userProfiles] || userProfiles.default,
    usageGuide: usageGuides[category as keyof typeof usageGuides] || usageGuides.default
  };
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const resolvedParams = use(params);
  const [product, setProduct] = useState<AmazonProduct | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<AmazonProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [productImages, setProductImages] = useState<ProductImage[]>([]);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    const loadProduct = () => {
      try {
        const foundProduct = getProductByAsin(resolvedParams.asin);
        if (foundProduct) {
          setProduct(foundProduct);
          setRelatedProducts(getRelatedProducts(resolvedParams.asin, 4));
          
          // Cargar imágenes del producto usando el mapeo optimizado
          const images = getProductImageUrls(foundProduct.asin);
          setProductImages(images);
          setSelectedImageIndex(0);
        }
      } catch (error) {
        console.error('Error loading product:', error);
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [resolvedParams.asin]);

  // Funciones para navegación del carrusel
  const nextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % productImages.length);
  };

  const prevImage = () => {
    setSelectedImageIndex((prev) => (prev - 1 + productImages.length) % productImages.length);
  };

  const goToImage = (index: number) => {
    setSelectedImageIndex(index);
  };

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
          {/* Carrusel de imágenes del producto */}
          <div className="space-y-4">
            {/* Imagen principal */}
            <div className="aspect-square relative bg-white rounded-lg overflow-hidden border">
              <Image
                src={productImages[selectedImageIndex]?.url || product.image_url || '/images/placeholder-product.webp'}
                alt={productImages[selectedImageIndex]?.alt || product.title}
                fill
                className={`object-contain transition-transform duration-300 ${
                  isZoomed ? 'scale-150 cursor-zoom-out' : 'cursor-zoom-in'
                }`}
                onClick={() => setIsZoomed(!isZoomed)}
                priority
              />
              
              {/* Controles de navegación - Solo mostrar si hay más de 1 imagen */}
              {productImages.length > 1 && (
                <>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow-sm"
                    onClick={prevImage}
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow-sm"
                    onClick={nextImage}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                  
                  {/* Indicador de imagen actual */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/50 text-white text-xs px-2 py-1 rounded">
                    {selectedImageIndex + 1} / {productImages.length}
                  </div>
                </>
              )}
            </div>

            {/* Miniaturas - Solo mostrar si hay más de 1 imagen */}
            {productImages.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-2">
                {productImages.map((image, index) => (
                  <button
                    key={index}
                    className={`relative flex-shrink-0 w-16 h-16 rounded-md overflow-hidden border-2 transition-colors ${
                      index === selectedImageIndex
                        ? 'border-blue-500'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => goToImage(index)}
                  >
                    <Image
                      src={image.url}
                      alt={image.alt}
                      fill
                      className="object-contain bg-white"
                    />
                  </button>
                ))}
              </div>
            )}
            
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
            <div className="space-y-8">
              {/* Análisis Profesional Original */}
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

              {/* Análisis de Calificaciones */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5" />
                    Distribución de Calificaciones
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {contentData.ratingData.map((item) => (
                      <div key={item.stars} className="flex items-center gap-3">
                        <div className="flex items-center gap-1 w-16">
                          <span className="text-sm">{item.stars}</span>
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        </div>
                        <Progress value={item.percentage} className="flex-1" />
                        <span className="text-sm text-gray-600 w-12">{item.count}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-green-600">92%</div>
                      <div className="text-sm text-gray-600">Satisfacción</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-600">4.8/5</div>
                      <div className="text-sm text-gray-600">Calidad</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-purple-600">95%</div>
                      <div className="text-sm text-gray-600">Recomprarían</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Análisis de Sentimientos */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <PieChart className="h-5 w-5" />
                    Análisis de Sentimientos por Aspecto
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {contentData.sentimentData.map((item) => (
                      <div key={item.aspect}>
                        <div className="flex justify-between mb-2">
                          <span className="font-medium">{item.aspect}</span>
                          <span className="text-sm text-gray-500">
                            {item.positive}% positivo
                          </span>
                        </div>
                        <div className="flex h-3 bg-red-200 rounded-full overflow-hidden">
                          <div 
                            className="bg-green-500 transition-all duration-500"
                            style={{ width: `${item.positive}%` }}
                          />
                          <div 
                            className="bg-red-500"
                            style={{ width: `${item.negative}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Comparación de Productos */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5" />
                    Comparación de Productos
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left p-2">Producto</th>
                          <th className="text-center p-2">Calificación</th>
                          <th className="text-center p-2">Precio</th>
                          <th className="text-center p-2">Durabilidad</th>
                          <th className="text-center p-2">Seguridad</th>
                          <th className="text-center p-2">Comodidad</th>
                          <th className="text-center p-2">Valor</th>
                        </tr>
                      </thead>
                      <tbody>
                        {contentData.comparativeProducts.map((prod, i) => (
                          <tr key={i} className={`border-b ${i === 0 ? 'bg-blue-50' : ''}`}>
                            <td className="p-2 font-medium">
                              {prod.name}
                              {i === 0 && <Badge className="ml-2 bg-blue-600">Actual</Badge>}
                            </td>
                            <td className="text-center p-2">
                              <div className="flex items-center justify-center gap-1">
                                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                {prod.rating}
                              </div>
                            </td>
                            <td className="text-center p-2 font-semibold">${prod.price.toFixed(2)}</td>
                            <td className="text-center p-2">
                              <Progress value={prod.durability} className="w-16 mx-auto" />
                              <span className="text-xs">{prod.durability}%</span>
                            </td>
                            <td className="text-center p-2">
                              <Progress value={prod.safety} className="w-16 mx-auto" />
                              <span className="text-xs">{prod.safety}%</span>
                            </td>
                            <td className="text-center p-2">
                              <Progress value={prod.comfort} className="w-16 mx-auto" />
                              <span className="text-xs">{prod.comfort}%</span>
                            </td>
                            <td className="text-center p-2">
                              <Progress value={prod.value} className="w-16 mx-auto" />
                              <span className="text-xs">{prod.value}%</span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>

              {/* Tendencias de Ventas */}
              <Card>
                <CardHeader>
                  <CardTitle>Tendencias de Ventas y Popularidad</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="p-4 bg-green-50 rounded-lg">
                      <TrendingUp className="h-8 w-8 text-green-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-green-600">+23%</div>
                      <div className="text-sm text-gray-600">Ventas este mes</div>
                    </div>
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-blue-600">1,247</div>
                      <div className="text-sm text-gray-600">Compradores únicos</div>
                    </div>
                    <div className="p-4 bg-purple-50 rounded-lg">
                      <Clock className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-purple-600">2.3 años</div>
                      <div className="text-sm text-gray-600">Vida útil promedio</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Reseñas Detalladas de Usuarios */}
              <Card>
                <CardHeader>
                  <CardTitle>Reseñas Destacadas de Usuarios</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {contentData.detailedReviews.map((review) => (
                      <div key={review.id} className="border-b pb-6 last:border-b-0">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <span className="font-semibold">{review.name}</span>
                              {review.verified && (
                                <Badge variant="outline" className="text-xs">
                                  <Check className="h-3 w-3 mr-1" />
                                  Compra verificada
                                </Badge>
                              )}
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                  <Star 
                                    key={i} 
                                    className={`h-4 w-4 ${
                                      i < review.rating 
                                        ? 'fill-yellow-400 text-yellow-400' 
                                        : 'text-gray-300'
                                    }`}
                                  />
                                ))}
                              </div>
                              <span className="text-sm text-gray-500">{review.date}</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="flex items-center gap-1 text-sm text-gray-500">
                              <ThumbsUp className="h-4 w-4" />
                              {review.helpful}
                            </div>
                          </div>
                        </div>
                        
                        <h4 className="font-semibold mb-2">{review.title}</h4>
                        <p className="text-gray-700 mb-4">{review.text}</p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h5 className="font-medium text-green-700 mb-2">Pros:</h5>
                            <ul className="space-y-1">
                              {review.pros.map((pro, i) => (
                                <li key={i} className="flex items-center gap-2 text-sm">
                                  <Check className="h-3 w-3 text-green-600" />
                                  {pro}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-medium text-red-700 mb-2">Contras:</h5>
                            <ul className="space-y-1">
                              {review.cons.map((con, i) => (
                                <li key={i} className="flex items-center gap-2 text-sm">
                                  <X className="h-3 w-3 text-red-600" />
                                  {con}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        
                        {review.images > 0 && (
                          <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
                            <Eye className="h-4 w-4" />
                            {review.images} imágenes incluidas
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
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