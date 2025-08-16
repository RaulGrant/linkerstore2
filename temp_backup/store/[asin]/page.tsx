'use client';

import { useState, useEffect } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { 
  ArrowLeft, 
  Star, 
  ShoppingCart, 
  ExternalLink, 
  Heart, 
  Share2,
  Truck,
  Shield,
  RotateCcw
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { SafeImage } from '@/components/ui/safe-image';
import { AmazonProduct } from '@/lib/types/store';
import { mockAmazonProducts } from '@/lib/data/mock-data';
import { useCart } from '@/lib/hooks/useCart';
import CartSimulator from '@/components/store/CartSimulator';

interface ProductDetailPageProps {
  params: {
    asin: string;
  };
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const [product, setProduct] = useState<AmazonProduct | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const { addToCart, isInCart, getItemQuantity } = useCart();

  useEffect(() => {
    const loadProduct = async () => {
      setLoading(true);
      // Simular delay de API
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Buscar producto por ASIN
      const foundProduct = mockAmazonProducts.find(p => p.asin === params.asin);
      setProduct(foundProduct || null);
      setLoading(false);
    };

    loadProduct();
  }, [params.asin]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="aspect-square bg-gray-200 animate-pulse rounded-lg" />
              <div className="flex gap-2">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="w-16 h-16 bg-gray-200 animate-pulse rounded-lg" />
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <div className="h-8 bg-gray-200 animate-pulse rounded" />
              <div className="h-4 bg-gray-200 animate-pulse rounded w-2/3" />
              <div className="h-6 bg-gray-200 animate-pulse rounded w-1/3" />
              <div className="h-12 bg-gray-200 animate-pulse rounded" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    notFound();
  }

  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleBuyNow = () => {
    window.open(product.amazon_url, '_blank');
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: product.title,
          text: product.description,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      // Fallback - copiar URL al portapapeles
      navigator.clipboard.writeText(window.location.href);
      alert('¡Enlace copiado al portapapeles!');
    }
  };

  // Simular múltiples imágenes (en la realidad vendrían de la API)
  const productImages = [
    product.image_url,
    product.image_url,
    product.image_url,
    product.image_url,
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/store">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Volver a la tienda
                </Button>
              </Link>
              <Separator orientation="vertical" className="h-6" />
              <div className="flex items-center gap-2">
                <Badge variant="secondary">{product.category}</Badge>
                {product.is_prime && (
                  <Badge className="bg-blue-600">Prime</Badge>
                )}
              </div>
            </div>
            <CartSimulator />
          </div>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Imágenes */}
          <div className="space-y-4">
            <div className="aspect-square relative overflow-hidden rounded-lg bg-white">
              <SafeImage
                src={productImages[selectedImageIndex]}
                alt={product.title}
                fill
                className="object-cover"
                fallbackSrc="/placeholder-product.svg"
                priority
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 border-2 ${
                    selectedImageIndex === index ? 'border-blue-500' : 'border-gray-200'
                  }`}
                >
                  <SafeImage
                    src={image}
                    alt={`${product.title} - imagen ${index + 1}`}
                    fill
                    className="object-cover"
                    fallbackSrc="/placeholder-product.svg"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Información del producto */}
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                {product.title}
              </h1>
              {product.brand && (
                <p className="text-gray-600 mb-4">por {product.brand}</p>
              )}
              
              {/* Calificación */}
              {product.rating && (
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating!)
                            ? 'text-yellow-400 fill-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="font-medium">{product.rating}</span>
                  {product.review_count && (
                    <span className="text-gray-500">
                      ({product.review_count.toLocaleString()} reseñas)
                    </span>
                  )}
                </div>
              )}

              {/* Precio */}
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-3xl font-bold text-green-600">
                  ${product.price.toFixed(2)}
                </span>
                <span className="text-gray-500">{product.currency}</span>
              </div>
            </div>

            {/* Características */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {product.is_prime && (
                <Card>
                  <CardContent className="p-4 text-center">
                    <Truck className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                    <p className="text-sm font-medium">Envío Prime</p>
                    <p className="text-xs text-gray-500">Gratis y rápido</p>
                  </CardContent>
                </Card>
              )}
              <Card>
                <CardContent className="p-4 text-center">
                  <Shield className="h-6 w-6 text-green-600 mx-auto mb-2" />
                  <p className="text-sm font-medium">Compra Segura</p>
                  <p className="text-xs text-gray-500">Garantía Amazon</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <RotateCcw className="h-6 w-6 text-orange-600 mx-auto mb-2" />
                  <p className="text-sm font-medium">Devoluciones</p>
                  <p className="text-xs text-gray-500">30 días</p>
                </CardContent>
              </Card>
            </div>

            {/* Acciones */}
            <div className="space-y-3">
              <div className="flex gap-3">
                <Button 
                  className="flex-1" 
                  size="lg"
                  onClick={handleAddToCart}
                  variant={isInCart(product.id) ? "secondary" : "default"}
                >
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  {isInCart(product.id) ? 
                    `En carrito (${getItemQuantity(product.id)})` : 
                    'Agregar al carrito'
                  }
                </Button>
                <Button variant="outline" size="lg" onClick={handleShare}>
                  <Share2 className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg">
                  <Heart className="h-4 w-4" />
                </Button>
              </div>
              
              <Button 
                className="w-full bg-orange-500 hover:bg-orange-600" 
                size="lg"
                onClick={handleBuyNow}
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Comprar ahora en Amazon
              </Button>
            </div>

            {/* Tags */}
            {product.tags.length > 0 && (
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">Etiquetas</h3>
                <div className="flex flex-wrap gap-2">
                  {product.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Información adicional */}
        <div className="mt-12">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="description">Descripción</TabsTrigger>
              <TabsTrigger value="specs">Especificaciones</TabsTrigger>
              <TabsTrigger value="reviews">Reseñas</TabsTrigger>
            </TabsList>
            
            <TabsContent value="description" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Descripción del producto</h3>
                  <p className="text-gray-700 leading-relaxed">
                    {product.description}
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="specs" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Especificaciones</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <span className="font-medium">ASIN:</span> {product.asin}
                    </div>
                    <div>
                      <span className="font-medium">Categoría:</span> {product.category}
                    </div>
                    {product.sub_category && (
                      <div>
                        <span className="font-medium">Subcategoría:</span> {product.sub_category}
                      </div>
                    )}
                    {product.brand && (
                      <div>
                        <span className="font-medium">Marca:</span> {product.brand}
                      </div>
                    )}
                    <div>
                      <span className="font-medium">Prime:</span> {product.is_prime ? 'Sí' : 'No'}
                    </div>
                    <div>
                      <span className="font-medium">Disponible:</span> {product.is_active ? 'Sí' : 'No'}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="reviews" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Reseñas de clientes</h3>
                  <div className="text-center py-8">
                    <p className="text-gray-500">
                      Las reseñas están disponibles en la página de Amazon.
                    </p>
                    <Button 
                      variant="outline" 
                      className="mt-4"
                      onClick={() => window.open(product.amazon_url, '_blank')}
                    >
                      Ver reseñas en Amazon
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
