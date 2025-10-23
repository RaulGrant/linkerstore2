'use client';

import { motion } from 'framer-motion';
import BlogLayout from '@/components/blog/BlogLayout';
import ProductComparison from '@/components/blog/ProductComparison';
import RelatedArticles from '@/components/blog/RelatedArticles';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, Shield, Star, CheckCircle, AlertTriangle } from 'lucide-react';
import { trackAffiliateClick, trackBlogView, generateTrackingId } from '@/lib/meta-pixel';
import { useEffect } from 'react';

export default function ChalecosSeguridadArticle() {
  // Track article view on component mount
  useEffect(() => {
    const articleId = generateTrackingId('article', 'mejores-chalecos-seguridad-2025');
    trackBlogView(articleId, 'Los 7 Mejores Chalecos Reflectantes de Seguridad 2025', 'chaleco_seguridad');
  }, []);

  // Función para manejar clicks en enlaces de Amazon
  const handleAmazonClick = (productName: string, amazonUrl: string) => {
    const productId = generateTrackingId('product', productName);
    trackAffiliateClick('amazon', productId, productName, 'chaleco_seguridad');
  };

  return (
    <BlogLayout>
      <article className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Los 7 Mejores Chalecos Reflectantes de Seguridad 2025
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Guía completa para elegir el chaleco de seguridad perfecto para tu trabajo
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>15 de enero, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>12 min de lectura</span>
            </div>
          </div>
        </div>

        {/* Contenido del artículo */}
        <div className="prose prose-lg max-w-none">
          <p>
            La seguridad en el trabajo es primordial, y elegir el chaleco reflectante adecuado 
            puede marcar la diferencia entre estar visible o pasar desapercibido en situaciones críticas.
          </p>

          <h2>¿Por qué es importante elegir un buen chaleco de seguridad?</h2>
          <p>
            Los chalecos reflectantes no solo son un requisito legal en muchos trabajos, 
            sino que son tu primera línea de defensa contra accidentes laborales relacionados con la visibilidad.
          </p>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 my-8">
            <div className="flex items-center mb-2">
              <AlertTriangle className="h-5 w-5 text-yellow-600 mr-2" />
              <h3 className="text-lg font-semibold text-yellow-800">Importante</h3>
            </div>
            <p className="text-yellow-700">
              Asegúrate siempre de que tu chaleco cumple con las normativas de seguridad 
              aplicables en tu país y sector laboral.
            </p>
          </div>

          <h2>Nuestras recomendaciones principales</h2>
          <p>
            Después de evaluar docenas de modelos, hemos seleccionado los mejores chalecos 
            reflectantes basándonos en calidad, durabilidad, visibilidad y relación calidad-precio.
          </p>
        </div>
      </article>
    </BlogLayout>
  );
}