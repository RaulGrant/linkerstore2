'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, XCircle, Star, ExternalLink, Info, Shield } from 'lucide-react';

interface ProductFeature {
  name: string;
  product1: boolean | string;
  product2: boolean | string;
  product3?: boolean | string;
}

interface ComparisonProduct {
  id: string;
  name: string;
  rating: number;
  reviewCount: number;
  isRecommended?: boolean;
  bestFor: string;
  amazonLink: string;
}

interface ProductComparisonProps {
  title: string;
  products: ComparisonProduct[];
  features: ProductFeature[];
  className?: string;
}

export default function ProductComparison({
  title,
  products,
  features,
  className = ''
}: ProductComparisonProps) {
  const renderFeatureValue = (value: boolean | string) => {
    if (typeof value === 'boolean') {
      return value ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, rotate: -180 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          whileHover={{ scale: 1.3, rotate: 10, y: -2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="flex justify-center items-center"
        >
          <CheckCircle className="h-6 w-6 text-green-600 drop-shadow-lg" />
        </motion.div>
      ) : (
        <motion.div
          initial={{ scale: 0, opacity: 0, rotate: 180 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          whileHover={{ scale: 1.3, rotate: -10, y: -2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="flex justify-center items-center"
        >
          <XCircle className="h-6 w-6 text-red-500 drop-shadow-lg" />
        </motion.div>
      );
    }
    return (
      <motion.span 
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        whileHover={{ scale: 1.05, color: "#2563eb" }}
        transition={{ type: "spring", stiffness: 200 }}
        className="text-sm text-gray-700 font-medium"
      >
        {value}
      </motion.span>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`space-y-6 relative ${className}`}
    >
      {/* Título de la comparación */}
      <motion.div 
        className="text-center relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="flex items-center justify-center gap-2 mb-4 relative z-10">
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <Shield className="h-8 w-8 text-blue-600" />
          </motion.div>
          <motion.h2 
            className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 150 }}
            whileHover={{ scale: 1.05 }}
          >
            {title}
          </motion.h2>
        </div>
        <motion.p 
          className="text-gray-600 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          🔍 Comparamos las mejores opciones del mercado para ayudarte a tomar la mejor decisión
        </motion.p>
      </motion.div>

      {/* Tabla de comparación */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
      >
        <Card className="overflow-hidden shadow-xl border-0">
          <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
            <CardTitle className="text-xl text-center flex items-center justify-center gap-2">
              🔧 Comparación Detallada de Kits de Herramientas
            </CardTitle>
          </CardHeader>
          
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                {/* Encabezados de productos */}
                <thead>
                  <tr className="border-b bg-gradient-to-r from-gray-50 to-blue-50">
                    <th className="p-4 text-left font-medium text-gray-900 w-1/4">
                      <div className="flex items-center gap-2">
                        📋 Características
                      </div>
                    </th>
                    {products.map((product, index) => (
                      <th key={product.id} className="p-4 text-center relative group">
                        <div className="space-y-3 relative z-10">
                          {/* Emoji del producto */}
                          <div className="relative h-20 w-20 mx-auto bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center text-3xl border-2 border-blue-200 overflow-hidden hover:border-blue-400 hover:shadow-lg transition-all duration-300">
                            <span className="animate-pulse">
                              🔧
                            </span>

                            {product.isRecommended && (
                              <div className="absolute -top-2 -right-2">
                                <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs animate-pulse shadow-lg">
                                  ⭐ Top
                                </Badge>
                              </div>
                            )}
                          </div>
                          
                          {/* Nombre del producto */}
                          <h3 className="font-bold text-gray-900 text-sm leading-tight hover:text-blue-600 transition-colors">
                            {product.name}
                          </h3>
                          
                          {/* Rating */}
                          <div className="flex items-center justify-center gap-1">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm font-medium">{product.rating}</span>
                            <span className="text-xs text-gray-500">
                              ({product.reviewCount})
                            </span>
                          </div>
                          
                          {/* Mejor para */}
                          <div>
                            <Badge variant="secondary" className="text-xs bg-blue-100 text-blue-800 shadow-sm">
                              {product.bestFor}
                            </Badge>
                          </div>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                
                {/* Filas de características */}
                <tbody>
                  {features.map((feature, index) => (
                    <tr
                      key={feature.name}
                      className="border-b group cursor-pointer relative overflow-hidden hover:bg-blue-50/30 transition-colors duration-200"
                    >
                      <td className="p-4 font-medium text-gray-900 border-r bg-gray-50 relative z-10">
                        <div className="flex items-center gap-2">
                          <Info className="h-4 w-4 text-blue-500" />
                          <span>
                            {feature.name}
                          </span>
                        </div>
                      </td>
                      <td className="p-4 text-center relative z-10">
                        {renderFeatureValue(feature.product1)}
                      </td>
                      <td className="p-4 text-center relative z-10">
                        {renderFeatureValue(feature.product2)}
                      </td>
                      {feature.product3 !== undefined && (
                        <td className="p-4 text-center relative z-10">
                          {renderFeatureValue(feature.product3)}
                        </td>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Botones de acción */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.8 + index * 0.1, type: "spring", stiffness: 150 }}
            whileHover={{ 
              scale: 1.05, 
              y: -5,
              transition: { type: "spring", stiffness: 400, damping: 25 }
            }}
            whileTap={{ scale: 0.95 }}
            className="relative"
          >
            {/* Efecto de brillo en hover */}
            <motion.div
              className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-white to-transparent opacity-0"
              whileHover={{ 
                opacity: [0, 0.3, 0],
                x: [-100, 100],
                transition: { duration: 0.6 }
              }}
              style={{ transform: "skewX(-45deg)" }}
            />
            
            <Button
              variant={product.isRecommended ? "default" : "outline"}
              className={`w-full h-auto p-6 flex flex-col gap-3 relative overflow-hidden group ${
                product.isRecommended 
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl' 
                  : 'hover:border-blue-400 hover:bg-blue-50 hover:shadow-lg'
              }`}
              onClick={() => window.open(product.amazonLink, '_blank')}
            >
              <motion.div 
                className="text-2xl mb-2"
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                🛒
              </motion.div>
              
              <motion.span 
                className="font-bold"
                whileHover={{ scale: 1.05 }}
              >
                {product.amazonLink.includes('mercadolibre.com') ? 'Comprar en Mercado Libre' : 'Ver en Amazon'}
              </motion.span>
              
              <span className="text-sm opacity-90">{product.name}</span>
              
              <motion.div 
                className="flex items-center gap-1"
                whileHover={{ x: 2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <ExternalLink className="h-4 w-4" />
                <span className="text-xs">Enlace externo</span>
              </motion.div>
              
              {product.isRecommended && (
                <motion.div
                  className="absolute top-2 right-2"
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  whileHover={{ scale: 1.3 }}
                >
                  ⭐
                </motion.div>
              )}
            </Button>
          </motion.div>
        ))}
      </div>

      {/* Nota sobre enlaces de afiliados */}
      <motion.div 
        className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
      >
        <p className="text-sm text-blue-800">
          <strong>📢 Divulgación:</strong> Los enlaces anteriores son enlaces de afiliados de Amazon y Mercado Libre. 
          Podemos recibir una comisión si realizas una compra, sin costo adicional para ti. 💙
        </p>
      </motion.div>
    </motion.div>
  );
}
