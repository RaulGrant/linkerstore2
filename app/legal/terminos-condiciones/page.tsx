'use client';

import { motion } from 'framer-motion';
import BlogLayout from '@/components/blog/BlogLayout';
import { FileText, Scale, AlertTriangle, Globe, Mail, Shield, Award } from 'lucide-react';

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
                Condiciones de uso del sitio web y servicios de LinkerStore
              </p>
              <div className="flex items-center justify-center gap-2 text-sm text-blue-200">
                <FileText className="h-4 w-4" />
                Última actualización: 10 de septiembre de 2025
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
                Al acceder y utilizar el sitio web LinkerStore (linkerstore.com), usted acepta estar sujeto a estos Términos y Condiciones y a todas las leyes y regulaciones aplicables en México. Si no está de acuerdo con alguno de estos términos, no debe utilizar este sitio web.
              </p>

              {/* === NUEVA SECCIÓN DE MARCO NORMATIVO === */}
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Marco Normativo</h2>
              <p className="mb-4">
                Para garantizar la transparencia y la confianza de nuestros usuarios, LinkerStore opera en conformidad con un sólido marco legal. A continuación, se mencionan las principales normativas que rigen nuestra actividad:
              </p>
              <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Normas Nacionales (México)</h3>
                <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700">
                  <li><strong>Código de Comercio y Código Fiscal de la Federación:</strong> Como empresa legalmente constituida, nuestras operaciones comerciales y fiscales se rigen por estas leyes, asegurando el cumplimiento y la formalidad de nuestras actividades.</li>
                  <li><strong>NMX-COE-001-SCFI-2018:</strong> Esta Norma Oficial Mexicana regula el comercio electrónico. La aplicamos en nuestra relación como afiliados con plataformas como Amazon para asegurar que nuestras prácticas sean claras, éticas y transparentes para el consumidor.</li>
                </ul>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Leyes Internacionales de Referencia</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li><strong>GDPR (Reglamento General de Protección de Datos de la UE) y CCPA (Ley de Privacidad del Consumidor de California):</strong> Aunque nuestro enfoque es nacional, adoptamos los más altos estándares de privacidad. Nuestra política de no recolección de datos personales se alinea con los principios de estas reconocidas leyes internacionales.</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Descripción del Servicio</h2>
              <p className="mb-4">
                LinkerStore es un blog especializado en seguridad industrial que proporciona:
              </p>
              <ul className="list-disc list-inside mb-6 space-y-1">
                <li>Artículos informativos y reseñas sobre productos variados.</li>
                <li>Guías técnicas y comparativas de productos variados.</li>
                <li>Contenido educativo sobre normativas de seguridad.</li>
                <li>Enlaces de afiliación a productos en Amazon y Mercado Libre.</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Programas de Afiliados</h2>
              <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-6 rounded-r-lg">
                <h3 className="text-lg font-semibold text-orange-900 mb-3 flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5" />
                  Divulgación de Afiliación
                </h3>
                <p className="text-orange-800 mb-3">
                  LinkerStore participa en los siguientes programas de afiliación:
                </p>
                <ul className="list-disc list-inside text-orange-800 space-y-2 mb-3">
                  <li><strong>Amazon Associates Program:</strong> Nos permite ganar comisiones por publicidad al anunciar y enlazar a Amazon.com, Amazon.com.mx y otros sitios de Amazon.</li>
                  <li><strong>Mercado Libre Afiliados:</strong> Nos permite ganar comisiones por ventas realizadas a través de enlaces a MercadoLibre.com.mx y otros sitios de Mercado Libre.</li>
                </ul>
                <p className="text-orange-800">
                  Estas comisiones no generan ningún costo adicional para usted y nos ayudan a mantener el contenido gratuito.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Uso del Sitio Web</h2>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Usos Permitidos:</h3>
              <ul className="list-disc list-inside mb-4 space-y-1">
                <li>Leer y compartir nuestro contenido con fines informativos.</li>
                <li>Utilizar la información para fines educativos y de referencia.</li>
                <li>Realizar compras a través de los enlaces de afiliación.</li>
              </ul>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Usos Prohibidos:</h3>
              <ul className="list-disc list-inside mb-6 space-y-1">
                <li>Copiar o distribuir nuestro contenido sin autorización explícita.</li>
                <li>Utilizar el sitio para actividades ilegales.</li>
                <li>Intentar acceder a áreas restringidas o realizar ingeniería inversa.</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Propiedad Intelectual</h2>
              <p className="mb-6">
                Todo el contenido del sitio web LinkerStore, incluyendo textos, imágenes y logotipos, está protegido por las leyes de derechos de autor de México. Todos los derechos están reservados.
              </p>
              
              {/* === NUEVA SECCIÓN DE GARANTÍAS === */}
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Garantía de Productos</h2>
               <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6 rounded-r-lg">
                 <h3 className="text-lg font-semibold text-blue-900 mb-3 flex items-center gap-2">
                   <Award className="h-5 w-5" />
                   Aclaración sobre Garantías
                 </h3>
                 <p className="text-blue-800">
                   LinkerStore no vende productos directamente. Todas las compras se realizan a través de las plataformas de terceros (Amazon o Mercado Libre). Por lo tanto, cualquier garantía, devolución o reclamación sobre un producto es responsabilidad exclusiva del vendedor en la plataforma correspondiente y del fabricante de la marca. Le recomendamos verificar siempre las políticas de garantía en la página del producto antes de comprar.
                 </p>
               </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Disclaimer y Limitación de Responsabilidad</h2>
              <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6 rounded-r-lg">
                <h3 className="text-lg font-semibold text-red-900 mb-3">Importante:</h3>
                <ul className="list-disc list-inside text-red-800 space-y-2">
                  <li>El contenido es meramente informativo y no constituye asesoramiento profesional.</li>
                  <li>Consulte siempre con un profesional certificado para decisiones críticas de seguridad.</li>
                  <li>No nos hacemos responsables por decisiones tomadas basadas en nuestro contenido.</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Enlaces a Terceros</h2>
              <p className="mb-6">
                Nuestro sitio web contiene enlaces a sitios de terceros (Amazon y Mercado Libre). No tenemos control sobre su contenido o políticas de privacidad y no somos responsables de ellos.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Modificaciones</h2>
              <p className="mb-6">
                Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios entrarán en vigor inmediatamente después de su publicación.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Ley Aplicable y Jurisdicción</h2>
              <p className="mb-6">
                Estos términos se rigen por las leyes de México. Cualquier disputa será sometida a la jurisdicción de los tribunales competentes de la Ciudad de México.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contacto</h2>
              <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
                <p className="mb-3">Si tiene preguntas sobre estos Términos y Condiciones, puede contactarnos:</p>
                <div className="space-y-2 text-blue-800">
                  <p className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    <strong>Email:</strong> linkerpro.notifications@gmail.com
                  </p>
                  <p className="flex items-center gap-2">
                    <Globe className="h-4 w-4" />
                    <strong>Sitio web:</strong> www.linkerstore.com.mx
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