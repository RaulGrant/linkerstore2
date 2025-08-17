'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle 
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { 
  Star, 
  ExternalLink, 
  Check, 
  X, 
  ThumbsUp,
  ThumbsDown,
  Award,
  Users,
  Shield,
  TrendingUp,
  Eye,
  Heart,
  Clock,
  Truck,
  BarChart3,
  PieChart,
  Zap,
  ChevronLeft,
  ChevronRight,
  Info,
  CheckCircle,
  Wrench
} from 'lucide-react';
import { AmazonProduct } from '@/lib/types/store';
import { getProductImageUrls, hasMultipleImages } from '@/lib/utils/productImageMapping';

interface ProductQuickViewModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: AmazonProduct | null;
}

interface ProductImage {
  url: string;
  alt: string;
}

interface ProductQuickViewModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: AmazonProduct | null;
}

export default function ProductQuickViewModal({ isOpen, onClose, product }: ProductQuickViewModalProps) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [selectedTab, setSelectedTab] = useState('overview');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [productImages, setProductImages] = useState<ProductImage[]>([]);
  const [isZoomed, setIsZoomed] = useState(false);

  // Cargar imágenes del producto cuando cambie el product
  useEffect(() => {
    if (product) {
      const images = getProductImageUrls(product.asin);
      setProductImages(images);
      setCurrentImageIndex(0);
      setIsZoomed(false);
    }
  }, [product]);

  // Funciones para navegación del carrusel
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % productImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + productImages.length) % productImages.length);
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  // Función para manejar el cierre del modal
  const handleClose = () => {
    setCurrentImageIndex(0);
    setIsZoomed(false);
    setSelectedTab('overview');
    onClose();
  };

  if (!product) return null;

  // Usar datos reales del producto
  const productReviews = product.reviews || [];
  
  // Datos para gráficas de calificaciones desde el producto
  const ratingData = (product as any).rating_distribution ? [
    { stars: 5, count: Math.round((product.reviews?.length || 0) * ((product as any).rating_distribution["5"] / 100)), percentage: (product as any).rating_distribution["5"] },
    { stars: 4, count: Math.round((product.reviews?.length || 0) * ((product as any).rating_distribution["4"] / 100)), percentage: (product as any).rating_distribution["4"] },
    { stars: 3, count: Math.round((product.reviews?.length || 0) * ((product as any).rating_distribution["3"] / 100)), percentage: (product as any).rating_distribution["3"] },
    { stars: 2, count: Math.round((product.reviews?.length || 0) * ((product as any).rating_distribution["2"] / 100)), percentage: (product as any).rating_distribution["2"] },
    { stars: 1, count: Math.round((product.reviews?.length || 0) * ((product as any).rating_distribution["1"] / 100)), percentage: (product as any).rating_distribution["1"] }
  ] : [
    { stars: 5, count: 245, percentage: 65 },
    { stars: 4, count: 89, percentage: 24 },
    { stars: 3, count: 28, percentage: 7 },
    { stars: 2, count: 11, percentage: 3 },
    { stars: 1, count: 4, percentage: 1 }
  ];

  // Razones detalladas para elegir este producto - específicas por producto
  const getProductSpecificReasons = (product: AmazonProduct) => {
    const productId = product.id;
    
    switch(productId) {
      case "1": // Chaleco de seguridad
        return [
          {
            icon: Award,
            title: "Material Premium de Alta Visibilidad",
            description: "Cumple y supera normativas ANSI/ISEA 107-2020. Material reflectante 3M de grado comercial",
            score: 98
          },
          {
            icon: Users,
            title: "Aprobado por + de 400 Profesionales", 
            description: `${product.review_count || 377}+ reseñas positivas de trabajadores de construcción verificados`,
            score: 94
          },
          {
            icon: TrendingUp,
            title: "Relación Calidad-Precio Excepcional",
            description: `Por solo $${product.price} obtienes protección profesional. 35% mejor valor que competidores`,
            score: 91
          },
          {
            icon: Shield,
            title: "Resistente y Lavable",
            description: "Material duradero que mantiene propiedades reflectantes después de 100+ lavados",
            score: 96
          }
        ];
      
      case "2": // Overol industrial
        return [
          {
            icon: Award,
            title: "100% Algodón Industrial Mexicano",
            description: "Gabardina premium fabricada en México. Resistente y transpirable para largas jornadas",
            score: 97
          },
          {
            icon: Shield,
            title: "Cierre Doble Dieléctrico",
            description: "Tecnología única que permite abrir desde arriba o abajo. Material plástico antieléctrico",
            score: 95
          },
          {
            icon: Users,
            title: "Preferido en Industria Petrolera", 
            description: "Bandas reflejantes de alta visibilidad. Ideal para construcción y mantenimiento industrial",
            score: 92
          },
          {
            icon: TrendingUp,
            title: "Diseño Ergonómico Mexicano",
            description: "Cintura elástica trasera y corte anatómico. Hecho en México con estándares internacionales",
            score: 94
          }
        ];
      
      case "3": // LICA Botas
        return [
          {
            icon: Award,
            title: "Certificación NOM-113-STPS-2009",
            description: "Casquillo de poliamida resiste impactos de 101.7 J. Certificación oficial mexicana",
            score: 99
          },
          {
            icon: Shield,
            title: "Protección Dieléctrica 14,000V",
            description: "Resistencia eléctrica certificada hasta 14,000 voltios. Ideal para electricistas",
            score: 98
          },
          {
            icon: Users,
            title: "89 Reseñas Verificadas Positivas", 
            description: "4.5/5 estrellas promedio. Preferidas por electricistas y trabajadores industriales",
            score: 95
          },
          {
            icon: TrendingUp,
            title: "Ultraligeras y Cómodas",
            description: "Solo 0.785g por bota. Plantilla PU conformado y forro antimicótico para comodidad",
            score: 93
          }
        ];
      
      case "4": // Lubardy Tenis
        return [
          {
            icon: Award,
            title: "Tecnología Antideslizante Avanzada",
            description: "Suela especializada para superficies húmedas y aceitosas. Adherencia superior",
            score: 96
          },
          {
            icon: Shield,
            title: "Protección Integral del Pie",
            description: "Casquillo reforzado y protección lateral. Resistente a aceites y químicos industriales",
            score: 94
          },
          {
            icon: Users,
            title: "Recomendado por Chefs y Operarios", 
            description: "Ideal para cocinas industriales y plantas de producción. Fácil limpieza",
            score: 92
          },
          {
            icon: TrendingUp,
            title: "Precio Competitivo $599",
            description: "Calzado profesional a precio accesible. 40% más económico que marcas importadas",
            score: 90
          }
        ];
      
      case "5": // ThreeH Guantes
        return [
          {
            icon: Award,
            title: "Recubrimiento Antideslizante",
            description: "Tecnología de agarre superior en superficies húmedas y secas. Durabilidad extendida",
            score: 97
          },
          {
            icon: Shield,
            title: "Protección Nivel A3",
            description: "Resistencia al corte nivel A3. Protege contra objetos punzocortantes en construcción",
            score: 95
          },
          {
            icon: Users,
            title: "Preferidos por Constructores", 
            description: "Flexibilidad y destreza manual sin sacrificar protección. Cómodos por horas",
            score: 93
          },
          {
            icon: TrendingUp,
            title: "Mejor Precio $299",
            description: "Pack de guantes profesionales. 50% más económicos que competidores europeos",
            score: 91
          }
        ];
      
      default:
        return [
          {
            icon: Award,
            title: "Calidad Certificada",
            description: "Cumple normativas internacionales de seguridad laboral",
            score: 98
          },
          {
            icon: Users,
            title: "Aprobado por Profesionales", 
            description: `${product.review_count || 100}+ reseñas positivas de usuarios verificados`,
            score: 94
          },
          {
            icon: TrendingUp,
            title: "Mejor Relación Calidad-Precio",
            description: "Análisis comparativo confirma mejor valor que competidores",
            score: 91
          },
          {
            icon: Shield,
            title: "Garantía Extendida",
            description: "Garantía completa + soporte técnico especializado",
            score: 96
          }
        ];
    }
  };

  const reasons = getProductSpecificReasons(product);

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent 
        className="max-w-7xl max-h-[95vh] overflow-y-auto p-0"
        onEscapeKeyDown={handleClose}
        onPointerDownOutside={handleClose}
      >
        {/* Botón de cierre mejorado */}
        <div className="absolute top-4 right-4 z-[100]">
          <Button
            variant="ghost"
            size="sm"
            className="h-10 w-10 p-0 bg-white/95 hover:bg-white shadow-lg rounded-full border border-gray-200"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              handleClose();
            }}
          >
            <X className="h-5 w-5 text-gray-700" />
          </Button>
        </div>

        {/* Header simplificado */}
        <DialogHeader className="p-6 pb-4 border-b">
          <div className="pr-12">
            <DialogTitle className="text-3xl font-bold text-gray-900 mb-3">
              {product.title}
            </DialogTitle>
            <div className="flex items-center gap-4 mb-2">
              <div className="flex items-center gap-1">
                <Star className="h-5 h-5 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold text-lg">{product.rating || '4.5'}</span>
                <span className="text-gray-500">({product.review_count || 377} reseñas)</span>
              </div>
              <Badge variant="secondary" className="text-sm">{product.category}</Badge>
              <Badge className="bg-green-600 text-sm">En stock</Badge>
            </div>
          </div>
        </DialogHeader>

        {/* Sección principal: Carrusel + Información */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 p-6">
          
          {/* Carrusel de imágenes - Más espacio */}
          <div className="lg:col-span-3">
            {/* Imagen principal más grande */}
            <div className="aspect-square relative bg-white rounded-xl border overflow-hidden shadow-sm mb-4">
              <Image
                src={productImages[currentImageIndex]?.url || product.image_url || '/images/placeholder-product.webp'}
                alt={productImages[currentImageIndex]?.alt || product.title}
                fill
                className={`object-contain transition-transform duration-300 ${
                  isZoomed ? 'scale-150 cursor-zoom-out' : 'cursor-zoom-in'
                }`}
                onClick={() => setIsZoomed(!isZoomed)}
                priority
              />
              
              {/* Controles de navegación - Solo si hay múltiples imágenes */}
              {productImages.length > 1 && (
                <>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg h-12 w-12"
                    onClick={prevImage}
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg h-12 w-12"
                    onClick={nextImage}
                  >
                    <ChevronRight className="w-6 h-6" />
                  </Button>
                  
                  {/* Indicador de posición mejorado */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white text-sm px-3 py-1 rounded-full">
                    {currentImageIndex + 1} / {productImages.length}
                  </div>
                </>
              )}
            </div>

            {/* Miniaturas mejoradas - Solo si hay múltiples imágenes */}
            {productImages.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {productImages.map((image, index) => (
                  <button
                    key={index}
                    className={`relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-3 transition-all ${
                      index === currentImageIndex
                        ? 'border-blue-500 shadow-lg'
                        : 'border-gray-200 hover:border-gray-400'
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
          </div>

          {/* Información del producto */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Precio destacado */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl border border-green-200">
              <div className="text-4xl font-bold text-green-700 mb-2">
                ${product.price.toFixed(2)} {product.currency}
              </div>
              <div className="text-green-600 font-medium mb-4">✓ Envío gratis incluido</div>
              <div className="flex items-center gap-2 text-sm text-green-600">
                <Truck className="h-4 w-4" />
                <span>Entrega rápida disponible</span>
              </div>
            </div>

            {/* Acciones principales */}
            <div className="space-y-3">
              <Button variant="outline" className="w-full h-12 text-lg" size="lg">
                <ExternalLink className="h-5 w-5 mr-2" />
                Ver en Amazon
              </Button>
              <Link href={`/store/${product.asin}`} className="block">
                <Button variant="ghost" className="w-full h-12">
                  <Eye className="h-4 w-4 mr-2" />
                  Ver página completa
                </Button>
              </Link>
            </div>

            {/* Información destacada */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-yellow-500" />
                  Información del Producto
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Marca:</span>
                  <span className="font-medium">{product.brand || 'Premium Industrial'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Categoría:</span>
                  <span className="font-medium">{product.category}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Modelo:</span>
                  <span className="font-medium">
                    {(product as any).product_details?.['Número de modelo'] || 
                     (product as any).specifications?.['Modelo'] || 
                     'Modelo Industrial'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Disponibilidad:</span>
                  <span className="font-medium text-green-600">
                    ✓ En stock
                  </span>
                </div>
              </CardContent>
            </Card>

            {/* Botón de favoritos */}
            <Button
              variant="outline"
              className="w-full"
              onClick={() => setIsWishlisted(!isWishlisted)}
            >
              <Heart className={`h-4 w-4 mr-2 ${isWishlisted ? 'fill-red-500 text-red-500' : ''}`} />
              {isWishlisted ? 'En favoritos' : 'Agregar a favoritos'}
            </Button>

          </div>
        </div>

        {/* Sección de tabs - Movida abajo para darle más espacio al carrusel */}
        <div className="border-t bg-gray-50">
          <div className="p-6">
            <Tabs value={selectedTab} onValueChange={setSelectedTab}>
              <TabsList className="grid grid-cols-3 w-full mb-6">
                <TabsTrigger value="overview">Resumen</TabsTrigger>
                <TabsTrigger value="reviews">Reseñas</TabsTrigger>
                <TabsTrigger value="why-choose">¿Por qué elegir?</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BarChart3 className="h-5 w-5" />
                      Distribución de Calificaciones
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {ratingData.map((item) => (
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

                <Card className="border-l-4 border-l-blue-500 bg-gradient-to-r from-blue-50 to-white">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-3 text-blue-800">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <Info className="h-5 w-5 text-blue-600" />
                      </div>
                      Acerca de este artículo
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {(product as any).features && (
                      <div className="space-y-4">
                        {Object.entries((product as any).features).map(([key, value]) => (
                          <div key={key} className="bg-white rounded-lg p-4 border border-blue-100 shadow-sm">
                            <div className="flex items-start gap-3">
                              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                              <div className="flex-1">
                                <span className="font-semibold text-gray-800 block mb-1 text-sm uppercase tracking-wide">{key}</span>
                                <span className="text-gray-600 leading-relaxed">{String(value)}</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-green-500 bg-gradient-to-r from-green-50 to-white">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-3 text-green-800">
                      <div className="p-2 bg-green-100 rounded-lg">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                      </div>
                      Información adicional
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {(product as any).additional_info && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {Object.entries((product as any).additional_info).map(([key, value]) => (
                          <div key={key} className="bg-white rounded-lg p-4 border border-green-100 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center gap-3 mb-2">
                              {key === "País de origen" && <div className="w-3 h-3 bg-blue-500 rounded-full"></div>}
                              {key === "Envío" && <div className="w-3 h-3 bg-orange-500 rounded-full"></div>}
                              {key === "Vendido por" && <div className="w-3 h-3 bg-purple-500 rounded-full"></div>}
                              {key === "Devolución" && <div className="w-3 h-3 bg-red-500 rounded-full"></div>}
                              {key === "Pago" && <div className="w-3 h-3 bg-green-500 rounded-full"></div>}
                              <span className="font-semibold text-gray-800 text-sm uppercase tracking-wide">{key}</span>
                            </div>
                            <span className="text-gray-600 font-medium">{String(value)}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-purple-500 bg-gradient-to-r from-purple-50 to-white">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-3 text-purple-800">
                      <div className="p-2 bg-purple-100 rounded-lg">
                        <Eye className="h-5 w-5 text-purple-600" />
                      </div>
                      Detalles del producto
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {(product as any).product_details && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {Object.entries((product as any).product_details).map(([key, value]) => (
                          <div key={key} className="bg-white rounded-lg p-4 border border-purple-100 shadow-sm hover:shadow-md transition-all duration-200">
                            <div className="flex items-start gap-3">
                              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                              <div className="flex-1">
                                <span className="font-semibold text-gray-800 block mb-1 text-sm uppercase tracking-wide">{key}</span>
                                <span className="text-gray-600 leading-relaxed">{String(value)}</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-orange-500 bg-gradient-to-r from-orange-50 to-white">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-3 text-orange-800">
                      <div className="p-2 bg-orange-100 rounded-lg">
                        <Wrench className="h-5 w-5 text-orange-600" />
                      </div>
                      Especificaciones Técnicas
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {(product as any).specifications ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {Object.entries((product as any).specifications).map(([key, value]) => (
                          <div key={key} className="bg-white rounded-lg p-4 border border-orange-100 shadow-sm hover:shadow-md transition-all duration-200">
                            <div className="flex items-center justify-between">
                              <span className="font-semibold text-gray-800 text-sm uppercase tracking-wide flex items-center gap-2">
                                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                                {key}
                              </span>
                              <span className="text-gray-600 font-medium text-right">{String(value)}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-white rounded-lg p-4 border border-orange-100 shadow-sm">
                          <div className="flex items-center justify-between">
                            <span className="font-semibold text-gray-800 text-sm uppercase tracking-wide flex items-center gap-2">
                              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                              Marca
                            </span>
                            <span className="text-gray-600 font-medium">{product.brand || 'Premium Industrial'}</span>
                          </div>
                        </div>
                        <div className="bg-white rounded-lg p-4 border border-orange-100 shadow-sm">
                          <div className="flex items-center justify-between">
                            <span className="font-semibold text-gray-800 text-sm uppercase tracking-wide flex items-center gap-2">
                              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                              Modelo
                            </span>
                            <span className="text-gray-600 font-medium">{product.asin}</span>
                          </div>
                        </div>
                        <div className="bg-white rounded-lg p-4 border border-orange-100 shadow-sm">
                          <div className="flex items-center justify-between">
                            <span className="font-semibold text-gray-800 text-sm uppercase tracking-wide flex items-center gap-2">
                              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                              Categoría
                            </span>
                            <span className="text-gray-600 font-medium">{product.category}</span>
                          </div>
                        </div>
                        <div className="bg-white rounded-lg p-4 border border-orange-100 shadow-sm">
                          <div className="flex items-center justify-between">
                            <span className="font-semibold text-gray-800 text-sm uppercase tracking-wide flex items-center gap-2">
                              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              Certificación
                            </span>
                            <span className="text-gray-600 font-medium">OSHA/ANSI Compliant</span>
                          </div>
                        </div>
                        <div className="bg-white rounded-lg p-4 border border-orange-100 shadow-sm">
                          <div className="flex items-center justify-between">
                            <span className="font-semibold text-gray-800 text-sm uppercase tracking-wide flex items-center gap-2">
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                              Garantía
                            </span>
                            <span className="text-gray-600 font-medium">24 meses</span>
                          </div>
                        </div>
                        <div className="bg-white rounded-lg p-4 border border-orange-100 shadow-sm">
                          <div className="flex items-center justify-between">
                            <span className="font-semibold text-gray-800 text-sm uppercase tracking-wide flex items-center gap-2">
                              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                              Origen
                            </span>
                            <span className="text-gray-600 font-medium">Fabricado en USA</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="reviews" className="space-y-4">
                {productReviews.map((review: any) => (
                  <Card key={review.id} className="border-l-4 border-l-yellow-400 bg-gradient-to-r from-yellow-50 to-white hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                              {review.author.charAt(0).toUpperCase()}
                            </div>
                            <div>
                              <span className="font-bold text-gray-900 text-lg">{review.author}</span>
                              {review.verified && (
                                <Badge variant="outline" className="ml-2 text-xs border-green-500 text-green-700 bg-green-50">
                                  <Check className="h-3 w-3 mr-1" />
                                  Compra verificada
                                </Badge>
                              )}
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star 
                                  key={i} 
                                  className={`h-5 w-5 ${
                                    i < (review.rating || 0)
                                      ? 'fill-yellow-400 text-yellow-400' 
                                      : 'text-gray-300'
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-sm text-gray-500 font-medium bg-gray-100 px-2 py-1 rounded-full">{review.date}</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-2 text-sm text-gray-500 bg-blue-50 px-3 py-1 rounded-full">
                            <ThumbsUp className="h-4 w-4 text-blue-600" />
                            <span className="font-medium text-blue-700">{review.helpful_count || 0}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm">
                        <h4 className="font-bold text-gray-900 mb-3 text-lg">{review.title}</h4>
                        <p className="text-gray-700 leading-relaxed">{review.content}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="why-choose" className="space-y-4">
                {reasons.map((reason, i) => (
                  <Card key={i}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-blue-100 rounded-lg">
                          <reason.icon className="h-6 w-6 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg mb-2">{reason.title}</h3>
                          <p className="text-gray-700 mb-3">{reason.description}</p>
                          <div className="flex items-center gap-3">
                            <Progress value={reason.score} className="flex-1" />
                            <span className="font-semibold text-blue-600">{reason.score}%</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
