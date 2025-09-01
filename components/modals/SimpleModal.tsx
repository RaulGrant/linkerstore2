'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Star, StarHalf, Heart, Share2, Award, Users, Shield, TrendingUp, ExternalLink, CheckCircle } from 'lucide-react';
import { AmazonProduct } from '@/lib/types/store';
import { getFichaByAsin } from '@/lib/data/product-fichas';

interface SimpleModalProps {
  product: AmazonProduct | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function SimpleModal({ product, isOpen, onClose }: SimpleModalProps) {
  const [selectedTab, setSelectedTab] = useState('overview');
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  
  if (!product) return null;

  const ficha = getFichaByAsin(product.asin);

  // Función para renderizar estrellas
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />);
    }
    
    if (hasHalfStar) {
      stars.push(<StarHalf key="half" className="h-4 w-4 fill-yellow-400 text-yellow-400" />);
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="h-4 w-4 text-gray-300" />);
    }
    
    return stars;
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="relative bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden"
        >
          {/* Partículas flotantes de fondo */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-blue-200 rounded-full opacity-20"
                animate={{
                  x: [0, 100, 0],
                  y: [0, -100, 0],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 10 + i * 2,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
              />
            ))}
          </div>

          <div className="relative z-10 p-6">
            <DialogHeader className="mb-6">
              <div className="flex items-center justify-between">
                <DialogTitle className="text-2xl font-bold text-gray-800">
                  Vista Rápida del Producto
                </DialogTitle>
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsFavorite(!isFavorite)}
                    className="p-2"
                  >
                    <Heart className={`h-5 w-5 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} />
                  </Button>
                  <Button variant="ghost" size="sm" className="p-2">
                    <Share2 className="h-5 w-5 text-gray-400" />
                  </Button>
                </div>
              </div>
            </DialogHeader>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Imagen del producto */}
              <div className="space-y-4">
                {/* Banner IA para chaleco - fuera de la imagen */}
                {product.asin === "B08XYZ123A" && (
                  <motion.div 
                    className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-4 py-2 rounded-full text-sm font-bold shadow-lg text-center"
                    animate={{ rotate: [0, 2, -2, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    🤖 Imagen generada con IA basándose en el producto de Amazon
                  </motion.div>
                )}
                
                <motion.div 
                  className="relative aspect-square bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  {/* Imagen específica del chaleco */}
                  {product.asin === "B08XYZ123A" ? (
                    <div className="relative w-full h-full">
                      <motion.img
                        src="/images/products/chaleco/chaleco.webp"
                        alt={product.title}
                        className="object-cover w-full h-full"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: imageLoaded ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                        onLoad={() => setImageLoaded(true)}
                      />
                    </div>
                  ) : (
                    <motion.img
                      src={product.image_url}
                      alt={product.title}
                      className="object-cover w-full h-full"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: imageLoaded ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                      onLoad={() => setImageLoaded(true)}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/placeholder-product.svg';
                      }}
                    />
                  )}

                  {/* Badges flotantes */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    {product.is_prime && (
                      <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        <Badge className="bg-blue-600 text-white shadow-lg">
                          Prime
                        </Badge>
                      </motion.div>
                    )}
                    {product.rating && product.rating >= 4.5 && (
                      <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        <Badge className="bg-green-600 text-white shadow-lg">
                          <Award className="w-3 h-3 mr-1" />
                          Top Rated
                        </Badge>
                      </motion.div>
                    )}
                  </div>

                  {/* Indicador de carga */}
                  {!imageLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full"
                      />
                    </div>
                  )}
                </motion.div>
              </div>

              {/* Información del producto */}
              <div className="space-y-6">
                <div>
                  <motion.h1 
                    className="text-2xl font-bold text-gray-900 mb-2"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    {product.title}
                  </motion.h1>
                  
                  {product.brand && (
                    <motion.p 
                      className="text-lg text-gray-600 mb-4"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      por <span className="font-semibold text-blue-600">{product.brand}</span>
                    </motion.p>
                  )}

                  {/* Rating y reseñas */}
                  {product.rating && (
                    <motion.div 
                      className="flex items-center gap-3 mb-4"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      <div className="flex items-center gap-1">
                        {renderStars(product.rating)}
                      </div>
                      <span className="text-lg font-semibold text-gray-800">{product.rating}</span>
                      {product.review_count && (
                        <span className="text-gray-500">
                          ({product.review_count.toLocaleString()} reseñas)
                        </span>
                      )}
                    </motion.div>
                  )}
                </div>

                {/* Tabs con información detallada */}
                <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="overview">Resumen</TabsTrigger>
                    <TabsTrigger value="features">Características</TabsTrigger>
                    <TabsTrigger value="details">Detalles</TabsTrigger>
                  </TabsList>

                  <TabsContent value="overview" className="space-y-4 mt-4">
                    <div className="bg-white rounded-lg p-4 shadow-sm border">
                      <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Puntos Destacados
                      </h3>
                      {ficha ? (
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li className="flex items-start gap-2">
                            <span className="text-blue-500 mt-1">•</span>
                            <span>Producto de alta calidad con excelentes reseñas</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-blue-500 mt-1">•</span>
                            <span>Envío rápido y confiable con Amazon</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-blue-500 mt-1">•</span>
                            <span>Garantía de satisfacción</span>
                          </li>
                        </ul>
                      ) : (
                        <p className="text-sm text-gray-600">
                          Este producto ha sido seleccionado cuidadosamente por nuestro equipo.
                        </p>
                      )}
                    </div>

                    {/* Indicadores de confianza */}
                    <div className="grid grid-cols-3 gap-3">
                      <motion.div 
                        className="bg-green-50 border border-green-200 rounded-lg p-3 text-center"
                        whileHover={{ scale: 1.05 }}
                      >
                        <Shield className="h-6 w-6 text-green-600 mx-auto mb-1" />
                        <div className="text-xs font-semibold text-green-800">Compra Segura</div>
                      </motion.div>
                      <motion.div 
                        className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-center"
                        whileHover={{ scale: 1.05 }}
                      >
                        <Users className="h-6 w-6 text-blue-600 mx-auto mb-1" />
                        <div className="text-xs font-semibold text-blue-800">Recomendado</div>
                      </motion.div>
                      <motion.div 
                        className="bg-purple-50 border border-purple-200 rounded-lg p-3 text-center"
                        whileHover={{ scale: 1.05 }}
                      >
                        <TrendingUp className="h-6 w-6 text-purple-600 mx-auto mb-1" />
                        <div className="text-xs font-semibold text-purple-800">Popular</div>
                      </motion.div>
                    </div>
                  </TabsContent>

                  <TabsContent value="features" className="space-y-4 mt-4">
                    <div className="bg-white rounded-lg p-4 shadow-sm border">
                      <h3 className="font-semibold text-gray-800 mb-3">Características Principales</h3>
                      {ficha?.features ? (
                        <ul className="space-y-2">
                          {ficha.features.map((feature: string, index: number) => (
                            <motion.li 
                              key={index}
                              className="flex items-start gap-2 text-sm text-gray-600"
                              initial={{ x: -20, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ delay: index * 0.1 }}
                            >
                              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>{feature}</span>
                            </motion.li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-sm text-gray-600">
                          Información detallada disponible en la página del producto en Amazon.
                        </p>
                      )}
                    </div>
                  </TabsContent>

                  <TabsContent value="details" className="space-y-4 mt-4">
                    <div className="bg-white rounded-lg p-4 shadow-sm border">
                      <h3 className="font-semibold text-gray-800 mb-3">Información del Producto</h3>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="font-medium text-gray-700">ASIN:</span>
                          <span className="ml-2 text-gray-600">{product.asin}</span>
                        </div>
                        {product.brand && (
                          <div>
                            <span className="font-medium text-gray-700">Marca:</span>
                            <span className="ml-2 text-gray-600">{product.brand}</span>
                          </div>
                        )}
                        {product.is_prime && (
                          <div className="col-span-2">
                            <span className="font-medium text-gray-700">Envío:</span>
                            <span className="ml-2 text-blue-600 font-medium">Amazon Prime disponible</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>

                {/* Botones de acción */}
                <div className="space-y-3">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button 
                      onClick={() => window.open(product.amazon_url, '_blank')}
                      className="w-full h-14 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-lg font-semibold shadow-lg relative overflow-hidden"
                    >
                      <motion.div
                        className="absolute inset-0 bg-white opacity-0"
                        whileHover={{ opacity: 0.1 }}
                        transition={{ duration: 0.2 }}
                      />
                      <ExternalLink className="h-5 w-5 mr-2" />
                      Comprar en Amazon
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0"
                        animate={{ 
                          x: ['-100%', '100%'],
                          opacity: [0, 0.3, 0]
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          repeatDelay: 3
                        }}
                      />
                    </Button>
                  </motion.div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <Button 
                      variant="outline" 
                      onClick={() => window.open(`/store/${product.asin}`, '_blank')}
                      className="flex-1 border-gray-300 hover:border-blue-400 hover:text-blue-600"
                    >
                      Ver página completa
                    </Button>
                    <Button 
                      variant="outline" 
                      onClick={onClose}
                      className="flex-1 border-gray-300 hover:border-gray-400"
                    >
                      Cerrar
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
}
