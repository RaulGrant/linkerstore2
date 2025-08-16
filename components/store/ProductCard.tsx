'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Star, ShoppingCart, Heart, ExternalLink, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { SafeImage } from '@/components/ui/safe-image';
import { AmazonProduct } from '@/lib/types/store';
import { useCart } from '@/lib/hooks/useCart';
import ProductQuickViewModal from '@/components/modals/ProductQuickViewModal';

interface ProductCardProps {
  product: AmazonProduct;
  showViewDetails?: boolean;
}

export default function ProductCard({ product, showViewDetails = true }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { addToCart, isInCart, getItemQuantity } = useCart();
  const router = useRouter();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product);
  };

  const handleViewOnAmazon = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(product.amazon_url, '_blank');
  };

  const handleViewDetails = () => {
    if (showViewDetails) {
      setIsModalOpen(true);
    }
  };

  const handleViewFullDetails = (e: React.MouseEvent) => {
    e.stopPropagation();
    router.push(`/store/${product.asin}`);
  };

  return (
    <Card 
      className={`group cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 ${
        isHovered ? 'ring-2 ring-blue-500' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleViewDetails}
    >
      <CardContent className="p-4">
        <div className="relative aspect-square mb-4 overflow-hidden rounded-lg bg-gray-100">
          <SafeImage
            src={`/images/products/${product.asin}_Prin.webp`}
            alt={product.title}
            fill
            className="object-cover"
            fallbackSrc="/placeholder-product.svg"
          />
          
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

          <div className="flex items-center gap-1">
            <span className="text-lg font-bold text-green-600">
              ${product.price.toFixed(2)}
            </span>
            <span className="text-sm text-gray-500">{product.currency}</span>
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
              className="flex-1" 
              onClick={handleAddToCart}
              variant={isInCart(product.id) ? "secondary" : "default"}
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              {isInCart(product.id) ? 
                `En carrito (${getItemQuantity(product.id)})` : 
                'Agregar'
              }
            </Button>
            <Button 
              variant="outline" 
              onClick={handleViewOnAmazon}
              className="px-3"
            >
              <ExternalLink className="h-4 w-4" />
            </Button>
          </div>
          
          {/* Botón Ver más */}
          <Button 
            variant="outline" 
            className="w-full"
            onClick={handleViewFullDetails}
          >
            <Eye className="h-4 w-4 mr-2" />
            Ver más
          </Button>
        </div>
      </CardFooter>
      
      {/* Modal del producto */}
      <ProductQuickViewModal 
        product={product}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </Card>
  );
}
