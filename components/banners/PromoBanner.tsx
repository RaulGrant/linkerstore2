'use client'

import { useState, useEffect } from 'react'
import { X, Sparkles, Timer, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

interface PromoBannerProps {
  targetDate?: Date
}

export default function PromoBanner({ targetDate = new Date('2025-11-01T00:00:00') }: PromoBannerProps) {
  const [isVisible, setIsVisible] = useState(true)
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    // Verificar si el usuario ya cerró el banner
    const bannerClosed = localStorage.getItem('promoBannerClosed')
    if (bannerClosed) {
      setIsVisible(false)
      return
    }

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = targetDate.getTime() - now

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  const handleClose = () => {
    setIsVisible(false)
    localStorage.setItem('promoBannerClosed', 'true')
  }

  if (!isVisible) return null

  return (
    <div className="relative bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white">
      {/* Efectos visuales */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.1)_50%,transparent_75%,transparent_100%)] bg-[length:250px_250px] animate-pulse"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center gap-4">
            {/* Icono animado */}
            <div className="hidden sm:flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-yellow-300 animate-pulse" />
              <Timer className="w-5 h-5 text-yellow-300" />
            </div>
            
            {/* Mensaje principal */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
              <span className="font-bold text-sm sm:text-base">
                🚀 ¡Próximamente LinkerPro!
              </span>
              <span className="text-xs sm:text-sm text-blue-100">
                La plataforma más justa para unir talento con empresas
              </span>
            </div>
            
            {/* Cuenta regresiva compacta */}
            <div className="hidden md:flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1">
              <span className="text-xs font-medium">Faltan:</span>
              <div className="flex gap-1 text-xs font-bold">
                <span>{timeLeft.days}d</span>
                <span>{timeLeft.hours}h</span>
                <span>{timeLeft.minutes}m</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* CTA Button */}
            <Button 
              asChild 
              size="sm" 
              variant="secondary" 
              className="bg-white/20 hover:bg-white/30 text-white border-white/30 backdrop-blur-sm text-xs"
            >
              <Link href="/store" className="flex items-center gap-1">
                <span className="hidden sm:inline">Ver Tienda</span>
                <span className="sm:hidden">Tienda</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </Button>
            
            {/* Botón cerrar */}
            <Button
              variant="ghost"
              size="sm"
              onClick={handleClose}
              className="text-white hover:bg-white/20 p-1 h-auto"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
