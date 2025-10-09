'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Star, Heart, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { AmazonProduct } from '@/lib/types/store';
import { trackAffiliateClick, trackProductView, trackAddToCart, generateTrackingId } from '@/lib/meta-pixel';

// Crear una referencia lazy del modal para evitar problemas de imports
let ProductQuickViewModal: any = null;

interface ProductCardProps {
  product: AmazonProduct;
  showViewDetails?: boolean;
}

function ProductCard({ product, showViewDetails = true }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ModalComponent, setModalComponent] = useState<any>(null);
  const router = useRouter();

  // Funciones de tracking
  const handleProductView = () => {
    const productId = generateTrackingId('product', product.asin);
    trackProductView(productId, product.title, product.category || 'tienda');
  };

  const handleAddToCart = () => {
    const productId = generateTrackingId('product', product.asin);
    trackAddToCart(productId, product.title);
  };

  // Track view al hacer hover (primera interacción)
  const handleMouseEnter = () => {
    setIsHovered(true);
    handleProductView();
  };

  // Cargar el modal de forma asíncrona cuando se necesite
  const loadModal = async () => {
    if (!ModalComponent) {
      try {
        // Usar el modal simple temporalmente
        const module = await import('@/components/modals/SimpleModal');
        const Component = module.default;
        setModalComponent(() => Component);
        return Component;
      } catch (error) {
        console.error('Error loading modal:', error);
        return null;
      }
    }
    return ModalComponent;
  };

  const handleViewOnAmazon = (e: React.MouseEvent) => {
    e.stopPropagation();
    
    // Track affiliate click
    const productId = generateTrackingId('product', product.asin);
    trackAffiliateClick('amazon', productId, product.title, product.category || 'tienda');
    
    window.open(product.amazon_url, '_blank');
  };

  const handleViewDetails = async (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (showViewDetails) {
      // Track interaction with product details
      handleAddToCart(); // Simulated "add to cart" for interest tracking
      
      await loadModal();
      setIsModalOpen(true);
    }
  };

  const handleImageClick = async (e: React.MouseEvent) => {
    e.stopPropagation();
    await loadModal();
    setIsModalOpen(true);
  };

  return (
    <Card 
      className={`group cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 ${
        isHovered ? 'ring-2 ring-blue-500' : ''
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-4">
        <div 
          className="relative aspect-square mb-4 overflow-hidden rounded-lg bg-gray-100 cursor-pointer"
          onClick={handleImageClick}
        >
          {/* Imagen específica del chaleco */}
          {product.asin === "B08XYZ123A" ? (
            <div className="relative w-full h-full">
              <img
                src="/images/products/chaleco/chaleco.webp"
                alt={product.title}
                className="object-cover w-full h-full"
              />
              {/* Mini banner AI para ProductCard */}
              <div className="absolute top-1 right-1 bg-yellow-400 text-black px-1 py-0.5 rounded text-xs font-bold">
                🤖 IA
              </div>
            </div>
          ) : (
            <img
              src={product.image_url}
              alt={product.title}
              className="object-cover w-full h-full"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = '/placeholder-product.svg';
              }}
            />
          )}
          
          {/* Badges */}
          <div className="absolute top-2 left-2 flex flex-col gap-1">
            {product.is_prime && (
              <Badge className="bg-blue-600 text-white text-xs">Prime</Badge>
            )}
            {product.rating && product.rating >= 4.5 && (
              <Badge className="bg-green-600 text-white text-xs">Top Rated</Badge>
            )}
          </div>

          {/* Hover Actions */}
          <div className={`absolute top-2 right-2 flex flex-col gap-1 transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}>
            <Button
              size="sm"
              variant="secondary"
              className="h-8 w-8 p-0 bg-white/90 hover:bg-white"
              onClick={(e) => {
                e.stopPropagation();
                // Add to wishlist logic here
              }}
            >
              <Heart className="h-4 w-4" />
            </Button>
            <Button
              size="sm"
              variant="secondary"
              className="h-8 w-8 p-0 bg-white/90 hover:bg-white"
              onClick={handleViewOnAmazon}
            >
              <ExternalLink className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="font-semibold text-sm line-clamp-2 leading-tight">
            {product.title}
          </h3>
          
          <div className="flex items-center gap-2">
            {product.rating && (
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-medium">{product.rating}</span>
                {product.review_count && (
                  <span className="text-xs text-gray-500">({product.review_count.toLocaleString()})</span>
                )}
              </div>
            )}
          </div>

          {product.brand && (
            <p className="text-xs text-gray-600">por {product.brand}</p>
          )}
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <div className="space-y-2 w-full">
          <div className="flex gap-2 w-full">
            <Button 
              onClick={handleViewOnAmazon}
              className="flex-1 bg-blue-700 hover:bg-blue-800 text-white"
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              Comprar en Amazon
            </Button>
          </div>
          
          <div className="flex gap-2 w-full">
            <Button 
              variant="outline" 
              className="flex-1"
              onClick={() => window.open(`/store/${product.asin}`, '_blank')}
            >
              Ver página completa
            </Button>
            <Button 
              variant="outline" 
              className="flex-1"
              onClick={handleViewDetails}
            >
              Ver detalles
            </Button>
          </div>
        </div>
      </CardFooter>
      
      {/* Modal del producto */}
      {isModalOpen && ModalComponent && (
        <ModalComponent 
          product={product}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </Card>
  );
}

export default ProductCard;
