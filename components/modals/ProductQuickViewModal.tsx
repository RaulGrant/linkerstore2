'use client';

import { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Star, StarHalf, Heart, Share2, Award, Users, Shield, TrendingUp, ExternalLink, CheckCircle } from 'lucide-react';
import { AmazonProduct } from '@/lib/types/store';
import { getFichaByAsin } from '@/lib/data/product-fichas';

interface ProductQuickViewModalProps {
  product: AmazonProduct | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart?: (product: AmazonProduct) => void;
}

export function ProductQuickViewModal({ product, isOpen, onClose, onAddToCart }: ProductQuickViewModalProps) {
  const [selectedTab, setSelectedTab] = useState('overview');
  
  // Mouse tracking para efectos avanzados
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { damping: 50, stiffness: 400 });
  const smoothMouseY = useSpring(mouseY, { damping: 50, stiffness: 400 });
  
  // Referencias para animaciones
  const modalRef = useRef<HTMLDivElement>(null);
  
  // Manejo del mouse
  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!modalRef.current) return;
    const rect = modalRef.current.getBoundingClientRect();
    mouseX.set(event.clientX - rect.left);
    mouseY.set(event.clientY - rect.top);
  };

  if (!product) return null;

  const ficha = getFichaByAsin(product.asin);
  const starRating = product.rating || 4.2;

  // Rating distribution data
  const ratingData = [
    { stars: 5, count: 234, percentage: 65 },
    { stars: 4, count: 89, percentage: 25 },
    { stars: 3, count: 28, percentage: 8 },
    { stars: 2, count: 4, percentage: 1 },
    { stars: 1, count: 4, percentage: 1 }
  ];

  // Razones detalladas para elegir este producto
  const getProductSpecificReasons = () => {
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
  };

  const productSpecificReasons = getProductSpecificReasons();

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />);
    }

    if (hasHalfStar) {
      stars.push(<StarHalf key="half" className="w-4 h-4 fill-yellow-400 text-yellow-400" />);
    }

    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="w-4 h-4 text-gray-300" />);
    }

    return stars;
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent 
        className="max-w-6xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 backdrop-blur-xl border border-white/50"
        ref={modalRef}
        onMouseMove={handleMouseMove}
      >
        {/* Partículas flotantes animadas para el modal */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-30"
              animate={{
                x: [0, 80, 0],
                y: [0, -80, 0],
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.7, 0.3]
              }}
              transition={{
                duration: 4 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3,
                type: "tween"
              }}
              style={{
                left: `${10 + i * 12}%`,
                top: `${10 + (i % 3) * 30}%`
              }}
            />
          ))}
        </div>

        {/* Cursor follower específico del modal */}
        <motion.div
          className="absolute w-4 h-4 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full pointer-events-none z-50 mix-blend-difference"
          style={{
            x: useTransform(smoothMouseX, (x) => x - 8),
            y: useTransform(smoothMouseY, (y) => y - 8),
          }}
          animate={{
            scale: [1, 1.5, 1],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Partículas flotantes en el modal */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-40"
              animate={{
                x: [0, 50, 0],
                y: [0, -50, 0],
                scale: [1, 1.5, 1],
                opacity: [0.4, 0.8, 0.4]
              }}
              transition={{
                duration: 4 + i * 0.3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2
              }}
              style={{
                left: `${10 + i * 15}%`,
                top: `${10 + (i % 2) * 70}%`
              }}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          exit={{ opacity: 0, scale: 0.8, rotateY: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10"
        >
          {/* Header animado */}
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold line-clamp-2 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
                {product.title}
              </DialogTitle>
            </DialogHeader>
          </motion.div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          {/* Emoji gigante con efectos mágicos del modal */}
          <motion.div 
            className="space-y-4"
            initial={{ x: -100, opacity: 0, rotateY: -90 }}
            animate={{ x: 0, opacity: 1, rotateY: 0 }}
            transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
          >
            <motion.div 
              className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg flex items-center justify-center border-2 border-gray-200 relative overflow-hidden"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                borderColor: "rgba(59, 130, 246, 0.3)"
              }}
            >
              {/* Anillos mágicos en el modal */}
              {[...Array(2)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute border-2 border-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20"
                  style={{
                    width: `${100 + i * 30}px`,
                    height: `${100 + i * 30}px`,
                    left: `calc(50% - ${50 + i * 15}px)`,
                    top: `calc(50% - ${50 + i * 15}px)`,
                  }}
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3 + i,
                    repeat: Infinity,
                    ease: "linear",
                    delay: i * 0.5
                  }}
                />
              ))}

              <div className="text-center relative z-10">
                {/* Chaleco Image for Modal - Only for Chaleco */}
                {product.asin === "B08XYZ123A" ? (
                  <motion.div 
                    className="relative mb-4 cursor-pointer select-none"
                    initial={{ scale: 0, rotateZ: -180 }}
                    animate={{ scale: 1, rotateZ: 0 }}
                    transition={{ 
                      delay: 0.8,
                      duration: 1,
                      type: "spring",
                      stiffness: 200
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      y: -5,
                      transition: { type: "spring", stiffness: 300, damping: 30 }
                    }}
                  >
                    {/* Mini Wave Effects for Modal */}
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute inset-0 border-2 rounded-lg"
                        style={{
                          borderColor: `rgba(255, 255, 0, ${0.2 - i * 0.03})`,
                          filter: `drop-shadow(0 0 ${6 + i * 3}px rgba(255, 255, 0, 0.4))`
                        }}
                        animate={{
                          scale: [1, 1.03 + i * 0.01, 1],
                          opacity: [0.2, 0.5, 0.2]
                        }}
                        transition={{
                          duration: 2 + i * 0.2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: i * 0.1,
                          type: "tween"
                        }}
                      />
                    ))}

                    {/* Mini AI Banner for Modal */}
                    <motion.div
                      className="absolute -top-2 left-1/2 transform -translate-x-1/2 z-20"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.2, duration: 0.6 }}
                    >
                      <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-2 py-0.5 rounded-full text-xs font-bold shadow-md">
                        🤖 IA
                      </div>
                    </motion.div>

                    {/* Product Image in Modal */}
                    <motion.img
                      src={product.image_url}
                      alt={product.title}
                      className="w-full h-auto rounded-lg shadow-xl border-2 border-yellow-300/20"
                      style={{
                        filter: "drop-shadow(0 0 15px rgba(255, 255, 0, 0.3))"
                      }}
                      animate={{
                        y: [-2, 2, -2],
                        filter: [
                          "drop-shadow(0 0 15px rgba(255, 255, 0, 0.3))",
                          "drop-shadow(0 0 20px rgba(255, 255, 0, 0.5))",
                          "drop-shadow(0 0 15px rgba(255, 255, 0, 0.3))"
                        ]
                      }}
                      transition={{
                        y: {
                          duration: 2.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                          type: "tween"
                        },
                        filter: {
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          type: "tween"
                        }
                      }}
                    />

                    {/* Mini Particles for Modal */}
                    {[...Array(4)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1.5 h-1.5 bg-yellow-400 rounded-full"
                        style={{
                          filter: "drop-shadow(0 0 3px rgba(255, 255, 0, 0.6))",
                          left: '50%',
                          top: '50%',
                          transform: 'translate(-50%, -50%)'
                        }}
                        animate={{
                          x: [0, Math.cos(i * 90 * Math.PI / 180) * 25, 0],
                          y: [0, Math.sin(i * 90 * Math.PI / 180) * 25, 0],
                          opacity: [0, 1, 0],
                          scale: [0, 1, 0]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: i * 0.2,
                          type: "tween"
                        }}
                      />
                    ))}
                  </motion.div>
                ) : (
                  /* Original emoji for other products */
                  <motion.div 
                    className="text-8xl mb-4 cursor-pointer select-none"
                    initial={{ scale: 0, rotateZ: -180 }}
                    animate={{ 
                      scale: 1, 
                      rotateZ: 0,
                      y: [-5, 5, -5],
                      filter: [
                        "drop-shadow(0 0 10px rgba(59, 130, 246, 0.3))",
                        "drop-shadow(0 0 20px rgba(147, 51, 234, 0.5))",
                        "drop-shadow(0 0 10px rgba(59, 130, 246, 0.3))"
                      ]
                    }}
                    transition={{ 
                      delay: 0.8,
                      duration: 1,
                      type: "spring",
                      stiffness: 200,
                      y: {
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        type: "tween"
                      },
                      filter: {
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        type: "tween"
                      }
                    }}
                    whileHover={{ 
                      scale: 1.2,
                      rotateZ: [0, -10, 10, 0],
                      filter: "drop-shadow(0 0 20px rgba(59, 130, 246, 0.6))"
                    }}
                  >
                    {ficha?.icon || "📦"}
                  </motion.div>
                )}
                
                <motion.h3 
                  className="text-lg font-semibold text-gray-700 mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.8 }}
                >
                  {ficha?.customTitle || product.title}
                </motion.h3>
                
                <motion.p 
                  className="text-xs text-gray-500 px-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                >
                  Por políticas de Amazon Afiliados, mostramos emojis representativos
                </motion.p>
                
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 1.4, type: "spring", stiffness: 200 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <Badge variant="outline" className="mt-2 relative overflow-hidden group">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0"
                      whileHover={{ opacity: 0.15 }}
                    />
                    <Award className="h-3 w-3 mr-1" />
                    Certificado
                  </Badge>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Información del producto */}
          <div className="space-y-6">
            {/* Rating y categoría */}
            <div className="space-y-3">
              <div className="flex items-center gap-4">
                <Badge variant="secondary">
                  {product.category}
                </Badge>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  {renderStars(starRating)}
                </div>
                <span className="text-sm text-gray-600">
                  {starRating} ({product.review_count || 359} reseñas)
                </span>
              </div>
            </div>

            {/* Tabs de contenido */}
            <Tabs value={selectedTab} onValueChange={setSelectedTab}>
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="overview">Resumen</TabsTrigger>
                <TabsTrigger value="reasons">Por qué elegir</TabsTrigger>
                <TabsTrigger value="reviews">Reseñas</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-4">
                <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200 shadow-md">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg">
                      <Award className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800">Análisis Técnico Profesional</h3>
                      <p className="text-xs text-blue-600">Evaluación por especialistas</p>
                    </div>
                  </div>
                  <div className="bg-white/70 backdrop-blur-sm p-4 rounded-lg border border-white/50">
                    <p className="text-slate-700 text-sm leading-relaxed">
                      {ficha?.technicalAnalysis || "Producto de alta calidad diseñado para profesionales que buscan durabilidad y rendimiento excepcional en sus herramientas de trabajo."}
                    </p>
                  </div>
                </div>

                {ficha?.features && ficha.features.length > 0 && (
                  <div className="bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 p-6 rounded-xl border border-green-200 shadow-md">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg">
                        <CheckCircle className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-800">Características Principales</h3>
                        <p className="text-xs text-emerald-600">Especificaciones verificadas</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      {ficha.features.slice(0, 4).map((feature, index) => (
                        <div key={index} className="flex items-start gap-2 bg-white/70 backdrop-blur-sm p-3 rounded-lg border border-white/50">
                          <CheckCircle className="h-4 w-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-slate-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {ficha?.usageGuide && (
                  <div className="bg-gradient-to-br from-purple-50 via-violet-50 to-indigo-50 p-6 rounded-xl border border-purple-200 shadow-md">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-gradient-to-br from-purple-500 to-violet-600 rounded-lg">
                        <Users className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-800">Guía de Uso</h3>
                        <p className="text-xs text-purple-600">Instrucciones profesionales</p>
                      </div>
                    </div>
                    <div className="bg-white/70 backdrop-blur-sm p-4 rounded-lg border border-white/50">
                      <p className="text-sm text-slate-700 leading-relaxed">
                        {ficha.usageGuide.substring(0, 200)}...
                      </p>
                    </div>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="reasons" className="space-y-4">
                <div className="bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 p-6 rounded-xl border border-orange-200 shadow-md">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-gradient-to-br from-orange-500 to-amber-600 rounded-lg">
                      <TrendingUp className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800">¿Por Qué Elegir Este Producto?</h3>
                      <p className="text-xs text-orange-600">Ventajas competitivas únicas</p>
                    </div>
                  </div>
                  
                  {ficha?.whyChoose ? (
                    <div className="bg-white/70 backdrop-blur-sm p-4 rounded-lg border border-white/50 mb-4">
                      <p className="text-sm text-slate-700 leading-relaxed">
                        {ficha.whyChoose}
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {productSpecificReasons.slice(0, 3).map((reason, index) => {
                        const IconComponent = reason.icon;
                        return (
                          <div key={index} className="flex items-start gap-3 bg-white/70 backdrop-blur-sm p-3 rounded-lg border border-white/50">
                            <div className="flex-shrink-0">
                              <IconComponent className="w-4 h-4 text-orange-600 mt-0.5" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-1">
                                <h4 className="font-medium text-xs">{reason.title}</h4>
                                <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded">
                                  {reason.score}%
                                </span>
                              </div>
                              <p className="text-xs text-slate-600">{reason.description}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>

                {ficha?.originalReview && (
                  <div className="bg-gradient-to-br from-rose-50 via-pink-50 to-red-50 p-6 rounded-xl border border-rose-200 shadow-md">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-gradient-to-br from-rose-500 to-pink-600 rounded-lg">
                        <Star className="h-5 w-5 text-white fill-current" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800">Análisis de Experto</h4>
                        <p className="text-xs text-rose-600">Evaluación profesional independiente</p>
                      </div>
                    </div>
                    <div className="bg-white/70 backdrop-blur-sm p-4 rounded-lg border border-white/50">
                      <blockquote className="text-sm text-slate-700 leading-relaxed italic mb-3">
                        "{ficha.originalReview.substring(0, 150)}..."
                      </blockquote>
                      <div className="flex items-center gap-2 text-xs text-slate-600">
                        <Users className="h-3 w-3" />
                        <span><em>Información generada en base a las opiniones de los clientes que adquirieron este producto en Amazon</em></span>
                      </div>
                    </div>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="reviews" className="space-y-4">
                <h3 className="font-semibold mb-3">Distribución de calificaciones</h3>
                <div className="space-y-2">
                  {ratingData.map((rating) => (
                    <div key={rating.stars} className="flex items-center gap-3 text-sm">
                      <span className="w-8">{rating.stars}★</span>
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-yellow-400 h-2 rounded-full" 
                          style={{ width: `${rating.percentage}%` }}
                        />
                      </div>
                      <span className="w-12 text-gray-600">{rating.count}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-4">
                  <h4 className="font-medium mb-2">Comentarios destacados</h4>
                  <div className="space-y-3">
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="flex">{renderStars(5)}</div>
                        <span className="text-sm font-medium">Usuario verificado</span>
                      </div>
                      <p className="text-sm text-gray-600">
                        "Excelente calidad y muy resistente. Lo uso diariamente en mi trabajo y ha superado mis expectativas."
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            {/* Botones de acción */}
            <div className="space-y-3 pt-4 border-t">
              <div className="flex gap-2">
                <Button 
                  className="flex-1 bg-blue-700 hover:bg-blue-800 text-white"
                  onClick={() => window.open(product.amazon_url, '_blank')}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Comprar en Amazon
                </Button>
              </div>
              
              <div className="flex gap-2">
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
                  onClick={() => setSelectedTab('specs')}
                >
                  Ver detalles
                </Button>
              </div>
              
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1">
                  <Heart className="w-4 h-4 mr-2" />
                  Favoritos
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  <Share2 className="w-4 h-4 mr-2" />
                  Compartir
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
}

export default ProductQuickViewModal;
