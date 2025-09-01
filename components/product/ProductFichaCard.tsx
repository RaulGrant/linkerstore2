'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Star, CheckCircle, Wrench, Scale, Eye } from 'lucide-react';
import { ProductFicha } from '@/lib/data/product-fichas';

interface ProductFichaCardProps {
  ficha: ProductFicha;
  className?: string;
}

export const ProductFichaCard: React.FC<ProductFichaCardProps> = ({ 
  ficha, 
  className = "" 
}) => {
  const handleAmazonClick = () => {
    window.open(ficha.amazonUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <Card className={`max-w-4xl mx-auto shadow-lg border border-gray-200 ${className}`}>
      {/* Header con título e ícono */}
      <CardHeader className="text-center pb-4 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="flex flex-col items-center gap-4">
          <div className="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center text-4xl border border-gray-200 shadow-sm">
            <span role="img" aria-label="Ícono del producto">{ficha.icon}</span>
          </div>
          <div>
            <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
              {ficha.customTitle}
            </CardTitle>
            <div className="flex items-center justify-center gap-4">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold">{ficha.rating}</span>
                <span className="text-gray-500 text-sm">estrellas</span>
              </div>
              <Badge variant="secondary">{ficha.category}</Badge>
              <Badge variant="outline">{ficha.brand}</Badge>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-6 space-y-6">
        {/* Precio destacado */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg border border-green-200 text-center">
          <div className="text-3xl font-bold text-green-700 mb-1">
            ${ficha.price.toFixed(2)} MXN
          </div>
          <div className="text-green-600 text-sm">✓ Precio competitivo del mercado</div>
        </div>

        {/* Análisis técnico profesional */}
        <section>
          <h2 className="flex items-center gap-2 text-xl font-semibold mb-3 text-blue-800">
            <Wrench className="h-5 w-5" />
            Análisis técnico profesional
          </h2>
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <p className="text-gray-700 leading-relaxed text-justify">
              {ficha.technicalAnalysis}
            </p>
          </div>
        </section>

        {/* Características principales */}
        <section>
          <h2 className="flex items-center gap-2 text-xl font-semibold mb-3 text-green-800">
            <CheckCircle className="h-5 w-5" />
            Características principales
          </h2>
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <ul className="space-y-2">
              {ficha.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Guía de uso */}
        <section>
          <h2 className="flex items-center gap-2 text-xl font-semibold mb-3 text-orange-800">
            <Scale className="h-5 w-5" />
            Guía de uso
          </h2>
          <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
            <p className="text-gray-700 leading-relaxed text-justify">
              {ficha.usageGuide}
            </p>
          </div>
        </section>

        {/* ¿Por qué elegir este producto? */}
        <section>
          <h2 className="flex items-center gap-2 text-xl font-semibold mb-3 text-purple-800">
            <Star className="h-5 w-5" />
            ¿Por qué elegir este producto?
          </h2>
          <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
            <p className="text-gray-700 leading-relaxed text-justify">
              {ficha.whyChoose}
            </p>
          </div>
        </section>

        {/* Reseña original */}
        <section>
          <h2 className="flex items-center gap-2 text-xl font-semibold mb-3 text-pink-800">
            <Eye className="h-5 w-5" />
            Reseña original
          </h2>
          <div className="bg-pink-50 p-4 rounded-lg border border-pink-200">
            <p className="text-gray-700 leading-relaxed text-justify italic">
              "{ficha.originalReview}"
            </p>
          </div>
        </section>

        {/* Botón de compra */}
        <div className="flex justify-center pt-4">
          <Button 
            onClick={handleAmazonClick}
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-lg shadow-lg text-lg transition-all duration-200 transform hover:scale-105"
            size="lg"
          >
            <ExternalLink className="h-5 w-5 mr-2" />
            Comprar en Amazon
          </Button>
        </div>

        {/* Nota de afiliados */}
        <div className="text-center">
          <p className="text-xs text-gray-500">
            Al hacer clic en "Comprar en Amazon", serás redirigido a Amazon para completar tu compra.
            LinkerPro puede recibir una comisión por compras realizadas a través de nuestros enlaces.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductFichaCard;
