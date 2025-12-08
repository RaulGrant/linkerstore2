"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, Star, ExternalLink, CheckCircle, Info } from "lucide-react";

interface TopProductsProps {
  showOnLargeScreens?: boolean;
}

const respiratorProducts = [
  {
    id: 1,
    name: 'Respirador N95 (NIOSH)',
    brand: '3M',
    protection: 'Partículas no aceitosas',
    efficiency: '95%',
    uses: 'Polvo, polen, partículas de construcción',
    price: '$150 MXN',
    originalPrice: '$180 MXN',
    certification: 'NOM-116 / NIOSH N95',
    color: 'blue',
    link: 'https://mercadolibre.com/sec/1y9ipYB',
    features: ['Pack 3 unidades', 'Ajuste cómodo', 'Válvula de exhalación'],
    rating: 4.8,
    bestseller: true
  },
  {
    id: 2,
    name: 'Respirador N99/P100',
    brand: 'MSA',
    protection: 'Partículas tóxicas y humos',
    efficiency: '99.97%',
    uses: 'Soldadura, plomo, asbesto',
    price: '$340 MXN',
    originalPrice: '$390 MXN',
    certification: 'NOM-116 / NIOSH P100',
    color: 'yellow',
    link: 'https://mercadolibre.com/sec/1Sy5jEP',
    features: ['Pack 10 unidades', 'Filtro HEPA', 'Máxima protección'],
    rating: 4.9,
    bestseller: false
  },
  {
    id: 3,
    name: 'Respirador R95',
    brand: 'Honeywell',
    protection: 'Partículas con aceite',
    efficiency: '95%',
    uses: 'Pintura, solventes, petroquímica',
    price: '$410 MXN',
    originalPrice: '$450 MXN',
    certification: 'NOM-116 / NIOSH R95',
    color: 'red',
    link: 'https://mercadolibre.com/sec/1iUuf9x',
    features: ['Resistente a aceites', 'Tiempo limitado', 'Industrial'],
    rating: 4.7,
    bestseller: false
  },
  {
    id: 4,
    name: 'Respirador Media Cara',
    brand: '3M',
    protection: 'Gases, vapores y partículas',
    efficiency: '95-99%',
    uses: 'Pinturas, químicos, disolventes',
    price: '$250 MXN',
    originalPrice: '$300 MXN',
    certification: 'NOM-116-STPS',
    color: 'green',
    link: 'https://mercadolibre.com/sec/1zQQGoi',
    features: ['Cartuchos intercambiables', 'Reutilizable', 'Ajuste ergonómico'],
    rating: 4.6,
    bestseller: true
  },
  {
    id: 5,
    name: 'Respirador Cara Completa',
    brand: 'MSA',
    protection: 'Protección total respiratoria y ocular',
    efficiency: '99.97%',
    uses: 'Químicos peligrosos, emergencias',
    price: '$270 MXN',
    originalPrice: '$350 MXN',
    certification: 'NOM-116-STPS',
    color: 'purple',
    link: 'https://mercadolibre.com/sec/1Pw8Xku',
    features: ['Protección ocular incluida', 'Visor panorámico', 'Uso profesional'],
    rating: 4.9,
    bestseller: false
  }
];

export default function TopProducts({ showOnLargeScreens = true }: TopProductsProps) {
  return (
    <section id="productos-recomendados" className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="bg-green-100 text-green-800 px-4 py-2 mb-4 text-sm font-medium">
            Top 5 Productos Recomendados
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Respiradores Más Vendidos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Selección de los mejores equipos de protección respiratoria basada en certificaciones, 
            eficiencia de filtrado y valoraciones de usuarios profesionales
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {respiratorProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
                {product.bestseller && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className="bg-yellow-500 text-white px-3 py-1 text-xs font-bold">
                      MÁS VENDIDO
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      product.color === 'blue' ? 'bg-blue-100' :
                      product.color === 'yellow' ? 'bg-yellow-100' :
                      product.color === 'red' ? 'bg-red-100' :
                      product.color === 'green' ? 'bg-green-100' :
                      'bg-purple-100'
                    }`}>
                      <Shield className={`w-6 h-6 ${
                        product.color === 'blue' ? 'text-blue-600' :
                        product.color === 'yellow' ? 'text-yellow-600' :
                        product.color === 'red' ? 'text-red-600' :
                        product.color === 'green' ? 'text-green-600' :
                        'text-purple-600'
                      }`} />
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 mb-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium text-gray-700">{product.rating}</span>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {product.brand}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">
                    {product.name}
                  </CardTitle>
                  
                  <div className="space-y-2 mt-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-600">{product.protection}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Info className="w-4 h-4 text-blue-500" />
                      <span className="text-sm font-medium text-blue-700">Eficiencia: {product.efficiency}</span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-600 mb-2">
                        <strong>Usos principales:</strong> {product.uses}
                      </p>
                      <Badge className="bg-gray-100 text-gray-800 text-xs">
                        {product.certification}
                      </Badge>
                    </div>

                    <div className="space-y-2">
                      <p className="text-sm font-medium text-gray-700">Características:</p>
                      <ul className="space-y-1">
                        {product.features.map((feature, idx) => (
                          <li key={idx} className="text-xs text-gray-600 flex items-center gap-2">
                            <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-2xl font-bold text-green-600">{product.price}</span>
                          {product.originalPrice && (
                            <span className="text-sm text-gray-400 line-through">{product.originalPrice}</span>
                          )}
                        </div>
                        {product.originalPrice && (
                          <span className="text-xs text-green-600 font-medium">
                            Ahorro: {Math.round((1 - parseInt(product.price.replace('$', '').replace(' MXN', '')) / parseInt(product.originalPrice.replace('$', '').replace(' MXN', ''))) * 100)}%
                          </span>
                        )}
                      </div>
                    </div>

                    <Button 
                      asChild 
                      className="w-full bg-green-600 hover:bg-green-700 text-white group-hover:scale-105 transition-all duration-200"
                    >
                      <a 
                        href={product.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2"
                      >
                        Ver en MercadoLibre
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              ¿Necesitas Asesoría Personalizada?
            </h3>
            <p className="text-green-100 mb-6 max-w-2xl mx-auto">
              Nuestros especialistas te ayudan a elegir el respirador perfecto para tu industria específica
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                variant="secondary"
                className="bg-white text-green-700 hover:bg-gray-100"
              >
                <a href="/catalogo">
                  Ver Catálogo Completo
                </a>
              </Button>
              <Button 
                asChild
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-green-700"
              >
                <a href="/contacto">
                  Solicitar Consulta
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}