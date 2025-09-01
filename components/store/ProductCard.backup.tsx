'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Star, Heart, ExternalLink, Eye } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import SafeImage from '@/components/ui/safe-image';
import { AmazonProduct } from '@/lib/types/store';
import { ProductQuickViewModal } from '@/components/modals/ProductQuickViewModal';

interface ProductCardProps {
  product: AmazonProduct;
  showViewDetails?: boolean;
}

function ProductCard({ product, showViewDetails = true }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  const handleViewOnAmazon = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(product.amazon_url, '_blank');
  };

  const handleViewDetails = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (showViewDetails) {
      setIsModalOpen(true);
    }
  };

  const handleImageClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsModalOpen(true);
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
            <SafeImage
              src={`/images/products/${product.asin}_Prin.webp`}
              alt={product.title}
              fill
              className="object-cover"
              fallbackSrc="/placeholder-product.svg"
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
      <ProductQuickViewModal 
        product={product}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </Card>
  );
}

export default ProductCard;
