'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { HotmartBanner } from '@/lib/types/store';
import BannerDisplay from './BannerDisplay';

interface BannerRotatorProps {
  banners: HotmartBanner[];
  autoPlay?: boolean;
  interval?: number;
  showControls?: boolean;
  variant?: 'default' | 'compact' | 'hero';
  className?: string;
  trackClicks?: boolean;
}

export default function BannerRotator({
  banners,
  autoPlay = true,
  interval = 5000,
  showControls = true,
  variant = 'default',
  className = '',
  trackClicks = true
}: BannerRotatorProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);

  useEffect(() => {
    if (!isPlaying || banners.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    }, interval);

    return () => clearInterval(timer);
  }, [isPlaying, banners.length, interval]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + banners.length) % banners.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % banners.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  if (banners.length === 0) {
    return (
      <div className={`flex items-center justify-center h-64 bg-gray-100 rounded-lg ${className}`}>
        <p className="text-gray-500">No hay banners disponibles</p>
      </div>
    );
  }

  if (banners.length === 1) {
    return (
      <div className={className}>
        <BannerDisplay 
          banner={banners[0]} 
          variant={variant}
          trackClick={trackClicks}
        />
      </div>
    );
  }

  return (
    <div className={`relative group ${className}`}>
      {/* Banner actual */}
      <div className="overflow-hidden">
        <BannerDisplay 
          banner={banners[currentIndex]} 
          variant={variant}
          trackClick={trackClicks}
        />
      </div>

      {/* Controles */}
      {showControls && (
        <>
          {/* Botones de navegación */}
          <div className="absolute inset-y-0 left-0 flex items-center">
            <Button
              variant="secondary"
              size="icon"
              className="ml-2 h-8 w-8 rounded-full bg-white/80 hover:bg-white/90 opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={goToPrevious}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center">
            <Button
              variant="secondary"
              size="icon"
              className="mr-2 h-8 w-8 rounded-full bg-white/80 hover:bg-white/90 opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={goToNext}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Indicadores */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-2">
            {banners.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-white w-6' 
                    : 'bg-white/50 hover:bg-white/70'
                }`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>

          {/* Control de reproducción */}
          <div className="absolute top-4 right-4">
            <Button
              variant="secondary"
              size="icon"
              className="h-8 w-8 rounded-full bg-white/80 hover:bg-white/90 opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={togglePlayPause}
            >
              {isPlaying ? (
                <Pause className="h-4 w-4" />
              ) : (
                <Play className="h-4 w-4" />
              )}
            </Button>
          </div>
        </>
      )}

      {/* Información del banner actual */}
      {variant !== 'hero' && (
        <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="bg-white/90 rounded-lg p-2 text-sm">
            <span className="font-medium">{currentIndex + 1}</span>
            <span className="text-gray-500"> / {banners.length}</span>
          </div>
        </div>
      )}
    </div>
  );
}
