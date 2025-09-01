'use client';

import { motion } from 'framer-motion';
import BlogLayout from '@/components/blog/BlogLayout';
import { FileText, Scale, AlertTriangle, Globe, Mail } from 'lucide-react';

export default function TerminosCondiciones() {
  return (
    <BlogLayout>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-400/30 rounded-full px-4 py-2 text-blue-100 text-sm font-medium mb-6">
                <Scale className="h-4 w-4" />
                Marco Legal
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Términos y Condiciones
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Condiciones de uso del sitio web y servicios de LinkerPro
              </p>
              <div className="flex items-center justify-center gap-2 text-sm text-blue-200">
                <FileText className="h-4 w-4" />
                Última actualización: 26 de agosto de 2025
              </div>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container mx-auto px-6 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="prose prose-lg max-w-none"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Aceptación de los Términos</h2>
              <p className="mb-6">
                Al acceder y utilizar el sitio web LinkerPro (linkerpro.com), usted acepta estar sujeto a estos Términos y Condiciones y a todas las leyes y regulaciones aplicables en México. Si no está de acuerdo con alguno de estos términos, no debe utilizar este sitio web.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Descripción del Servicio</h2>
              <p className="mb-4">
                LinkerPro es un blog especializado en seguridad industrial que proporciona:
              </p>
              <ul className="list-disc list-inside mb-6 space-y-1">
                <li>Artículos informativos sobre equipos de protección personal (EPP)</li>
                <li>Guías técnicas y reseñas de productos de seguridad industrial</li>
                <li>Comparativas y análisis de productos especializados</li>
                <li>Contenido educativo sobre normativas de seguridad</li>
                <li>Enlaces de afiliación a productos en Amazon</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Programa de Afiliados</h2>
              <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-6 rounded-r-lg">
                <h3 className="text-lg font-semibold text-orange-900 mb-3 flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5" />
                  Divulgación de Afiliación
                </h3>
                <p className="text-orange-800 mb-3">
                  LinkerPro participa en el Programa de Afiliados de Amazon Services LLC, un programa de publicidad de afiliados diseñado para proporcionar un medio para que los sitios ganen tarifas de publicidad mediante la publicidad y los enlaces a Amazon.com y Amazon.com.mx.
                </p>
                <p className="text-orange-800">
                  Esto significa que podemos recibir una comisión cuando usted compra productos a través de nuestros enlaces de afiliación, sin costo adicional para usted.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Uso del Sitio Web</h2>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Usos Permitidos:</h3>
              <ul className="list-disc list-inside mb-4 space-y-1">
                <li>Leer y compartir contenido del blog</li>
                <li>Utilizar la información para fines educativos</li>
                <li>Realizar compras a través de enlaces de afiliación</li>
                <li>Suscribirse a nuestro newsletter</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Usos Prohibidos:</h3>
              <ul className="list-disc list-inside mb-6 space-y-1">
                <li>Copiar, reproducir o distribuir contenido sin autorización</li>
                <li>Utilizar el sitio para actividades ilegales o no autorizadas</li>
                <li>Intentar acceder a áreas restringidas del sitio</li>
                <li>Enviar spam o contenido malicioso</li>
                <li>Realizar ingeniería inversa del sitio web</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Propiedad Intelectual</h2>
              <p className="mb-4">
                Todo el contenido del sitio web LinkerPro, incluyendo pero no limitándose a:
              </p>
              <ul className="list-disc list-inside mb-4 space-y-1">
                <li>Textos, artículos y guías</li>
                <li>Imágenes y fotografías</li>
                <li>Logotipos y marcas</li>
                <li>Diseño y estructura del sitio</li>
                <li>Código fuente y software</li>
              </ul>
              <p className="mb-6">
                Está protegido por las leyes de derechos de autor de México y tratados internacionales. Todos los derechos están reservados.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Disclaimer y Limitación de Responsabilidad</h2>
              <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6 rounded-r-lg">
                <h3 className="text-lg font-semibold text-red-900 mb-3">Importante:</h3>
                <ul className="list-disc list-inside text-red-800 space-y-2">
                  <li>El contenido es meramente informativo y educativo</li>
                  <li>No constituye asesoramiento profesional en seguridad industrial</li>
                  <li>Siempre consulte con profesionales certificados para decisiones críticas</li>
                  <li>No nos hacemos responsables por decisiones tomadas basadas en nuestro contenido</li>
                  <li>Los productos recomendados deben cumplir con normativas locales aplicables</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Enlaces a Terceros</h2>
              <p className="mb-6">
                Nuestro sitio web puede contener enlaces a sitios web de terceros, incluidos sitios de Amazon y otros proveedores. No tenemos control sobre el contenido o las políticas de privacidad de estos sitios y no somos responsables de ellos.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Modificaciones</h2>
              <p className="mb-6">
                Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento. Los cambios entrarán en vigor inmediatamente después de su publicación en el sitio web. Su uso continuado del sitio constituye la aceptación de dichos cambios.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Ley Aplicable y Jurisdicción</h2>
              <p className="mb-6">
                Estos términos y condiciones se rigen por las leyes de México. Cualquier disputa que surja en relación con estos términos será sometida a la jurisdicción exclusiva de los tribunales competentes de la Ciudad de México.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contacto</h2>
              <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
                <p className="mb-3">Si tiene preguntas sobre estos Términos y Condiciones, puede contactarnos:</p>
                <div className="space-y-2 text-blue-800">
                  <p className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    <strong>Email:</strong> legal@linkerpro.com
                  </p>
                  <p className="flex items-center gap-2">
                    <Globe className="h-4 w-4" />
                    <strong>Sitio web:</strong> www.linkerpro.com
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </BlogLayout>
  );
}
