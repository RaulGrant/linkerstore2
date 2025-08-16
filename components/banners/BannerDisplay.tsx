'use client';

import { useState, useEffect } from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { SafeImage } from '@/components/ui/safe-image';
import { HotmartBanner } from '@/lib/types/store';
import Image from 'next/image';

interface BannerDisplayProps {
  banner: HotmartBanner;
  variant?: 'default' | 'compact' | 'hero';
  className?: string;
  trackClick?: boolean;
}

export default function BannerDisplay({ 
  banner, 
  variant = 'default', 
  className = '',
  trackClick = true
}: BannerDisplayProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleClick = () => {
    // Registrar click para métricas (en el futuro se conectará con la API)
    if (trackClick) {
      console.log('Banner clicked:', banner.title);
      // Aquí se podría hacer una llamada a la API para registrar el click
    }
    
    // Abrir enlace
    window.open(banner.banner_url, '_blank');
  };

  if (variant === 'hero') {
    return (
      <div className={`relative overflow-hidden rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 ${className}`}>
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative p-8 md:p-12 text-white">
          <div className="max-w-2xl">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              {banner.category}
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {banner.title}
            </h1>
            <p className="text-lg md:text-xl mb-6 text-white/90">
              {banner.description}
            </p>
            <Button 
              size="lg" 
              onClick={handleClick}
              className="bg-white text-blue-600 hover:bg-white/90"
            >
              {banner.cta_text}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <Card className={`group cursor-pointer transition-all duration-300 hover:shadow-lg ${className}`} onClick={handleClick}>
        <CardContent className="p-4">
          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
              {!imageLoaded && (
                <div className="absolute inset-0 bg-gray-200 animate-pulse" />
              )}
              <Image
                src={banner.image_url}
                alt={banner.title}
                fill
                className={`object-cover transition-opacity duration-300 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                onLoad={() => setImageLoaded(true)}
              />
            </div>
            <div className="flex-1 min-w-0">
              <Badge variant="secondary" className="text-xs mb-1">
                {banner.category}
              </Badge>
              <h3 className="font-semibold text-sm line-clamp-1 mb-1">
                {banner.title}
              </h3>
              <p className="text-xs text-gray-600 line-clamp-2">
                {banner.description}
              </p>
            </div>
            <div className="flex-shrink-0">
              <Button size="sm" variant="outline" className="h-8 w-8 p-0">
                <ExternalLink className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={`group cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 ${className}`} onClick={handleClick}>
      <CardContent className="p-0">
        <div className="relative aspect-[16/9] overflow-hidden rounded-t-lg bg-gray-100">
          <SafeImage
            src={banner.image_url}
            alt={banner.title}
            fill
            className="object-cover"
            fallbackSrc="/placeholder-course.svg"
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* CTA Button on hover */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button className="bg-white text-gray-900 hover:bg-gray-100">
              {banner.cta_text}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Category Badge */}
          <div className="absolute top-3 left-3">
            <Badge className="bg-white/90 text-gray-900">
              {banner.category}
            </Badge>
          </div>
        </div>
        
        <div className="p-4">
          <h3 className="font-semibold text-lg mb-2 line-clamp-1">
            {banner.title}
          </h3>
          <p className="text-gray-600 text-sm line-clamp-2 mb-3">
            {banner.description}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-sm text-blue-600 font-medium">
              {banner.cta_text}
            </span>
            <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
