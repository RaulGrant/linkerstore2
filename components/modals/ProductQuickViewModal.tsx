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
  ShoppingCart, 
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
  ChevronRight
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

  // Generar reseñas detalladas y realistas
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

  // Análisis de sentimientos simulado
  const sentimentData = [
    { aspect: "Calidad", positive: 92, negative: 8 },
    { aspect: "Precio", positive: 78, negative: 22 },
    { aspect: "Durabilidad", positive: 89, negative: 11 },
    { aspect: "Comodidad", positive: 85, negative: 15 },
    { aspect: "Diseño", positive: 91, negative: 9 }
  ];

  // Razones detalladas para elegir este producto
  const reasons = [
    {
      icon: Award,
      title: "Calidad Certificada OSHA/ANSI",
      description: "Cumple y supera todas las normativas de seguridad laboral requeridas",
      score: 98
    },
    {
      icon: Users,
      title: "Aprobado por + de 500 Profesionales", 
      description: `${product.review_count || 377}+ reseñas positivas de usuarios verificados`,
      score: 94
    },
    {
      icon: TrendingUp,
      title: "Mejor Relación Calidad-Precio",
      description: "Análisis comparativo confirma 23% mejor valor que competidores",
      score: 91
    },
    {
      icon: Shield,
      title: "Garantía Extendida",
      description: "2 años de garantía completa + soporte técnico especializado",
      score: 96
    }
  ];

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
              <Button className="w-full h-12 text-lg" size="lg">
                <ShoppingCart className="h-5 w-5 mr-2" />
                Agregar al carrito
              </Button>
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
                  <span className="font-medium font-mono text-sm">{product.asin}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Prime:</span>
                  <span className={`font-medium ${product.is_prime ? 'text-blue-600' : 'text-gray-400'}`}>
                    {product.is_prime ? '✓ Disponible' : 'No disponible'}
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
              <TabsList className="grid grid-cols-4 w-full mb-6">
                <TabsTrigger value="overview">Resumen</TabsTrigger>
                <TabsTrigger value="reviews">Reseñas</TabsTrigger>
                <TabsTrigger value="analytics">Análisis</TabsTrigger>
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

                <Card>
                  <CardHeader>
                    <CardTitle>Especificaciones Técnicas</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <span className="font-medium">Marca:</span> {product.brand || 'Premium Industrial'}
                      </div>
                      <div>
                        <span className="font-medium">Modelo:</span> {product.asin}
                      </div>
                      <div>
                        <span className="font-medium">Categoría:</span> {product.category}
                      </div>
                      <div>
                        <span className="font-medium">Certificación:</span> OSHA/ANSI Compliant
                      </div>
                      <div>
                        <span className="font-medium">Garantía:</span> 24 meses
                      </div>
                      <div>
                        <span className="font-medium">Origen:</span> Fabricado en USA
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="reviews" className="space-y-4">
                {detailedReviews.map((review) => (
                  <Card key={review.id}>
                    <CardContent className="p-6">
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
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="analytics" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <PieChart className="h-5 w-5" />
                      Análisis de Sentimientos por Aspecto
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {sentimentData.map((item) => (
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

                <Card>
                  <CardHeader>
                    <CardTitle>Tendencias de Ventas</CardTitle>
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

                <Card className="bg-gradient-to-r from-blue-50 to-indigo-50">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Zap className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                      <h3 className="text-xl font-bold mb-2">¡Oferta Especial!</h3>
                      <p className="text-gray-700 mb-4">
                        Compra ahora y obtén 15% de descuento en tu próxima compra + envío gratis express
                      </p>
                      <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                        <Truck className="h-4 w-4" />
                        Entrega en 1-2 días hábiles
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
