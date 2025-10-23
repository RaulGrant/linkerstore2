'use client';

import { motion } from 'framer-motion';
import BlogLayout from '@/components/blog/BlogLayout';
import { AlertTriangle, ExternalLink, DollarSign, Shield, Info } from 'lucide-react';

export default function DivulgacionAfiliados() {
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
              <div className="inline-flex items-center gap-2 bg-orange-600/20 border border-orange-400/30 rounded-full px-4 py-2 text-orange-100 text-sm font-medium mb-6">
                <AlertTriangle className="h-4 w-4" />
                Transparencia Total
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Divulgación de Afiliados
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Información transparente sobre nuestras relaciones comerciales y comisiones
              </p>
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
              {/* Declaración Principal */}
              <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-8 rounded-r-lg">
                <h2 className="text-xl font-semibold text-orange-900 mb-3 flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5" />
                  Declaración de Afiliación
                </h2>
                <p className="text-orange-800 text-lg">
                  <strong>LinkerStore participa en programas de afiliación de Amazon Associates y Mercado Libre Afiliados que nos permiten ganar comisiones por las compras realizadas a través de nuestros enlaces.</strong> Esta página explica cómo funcionan estas relaciones y cómo nos comprometemos a mantener la transparencia y objetividad en nuestras recomendaciones.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Programas de Afiliación</h2>
              
              {/* Amazon Associates */}
              <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-6">
                <h3 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
                  <ExternalLink className="h-5 w-5" />
                  Amazon Associates Program
                </h3>
                <p className="text-blue-800 mb-3">
                  LinkerStore es participante del Programa de Afiliados de Amazon Services LLC, un programa de publicidad de afiliados diseñado para proporcionar un medio para que los sitios ganen tarifas de publicidad mediante la publicidad y los enlaces a:
                </p>
                <ul className="list-disc list-inside text-blue-800 space-y-1">
                  <li>Amazon.com (Estados Unidos)</li>
                  <li>Amazon.com.mx (México)</li>
                  <li>Amazon.es (España)</li>
                  <li>Otros sitios de Amazon según disponibilidad</li>
                </ul>
              </div>

              {/* Mercado Libre Afiliados */}
              <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg mb-6">
                <h3 className="font-semibold text-yellow-900 mb-3 flex items-center gap-2">
                  <ExternalLink className="h-5 w-5" />
                  Mercado Libre Afiliados
                </h3>
                <p className="text-yellow-800 mb-3">
                  LinkerStore también participa en el Programa de Afiliados de Mercado Libre, la plataforma de e-commerce líder en América Latina. Esto nos permite ofrecer alternativas locales y facilitar el acceso a productos de seguridad industrial en:
                </p>
                <ul className="list-disc list-inside text-yellow-800 space-y-1">
                  <li>MercadoLibre.com.mx (México)</li>
                  <li>MercadoLibre.com.ar (Argentina)</li>
                  <li>MercadoLibre.com.co (Colombia)</li>
                  <li>Otros sitios de Mercado Libre según disponibilidad</li>
                </ul>
                <p className="text-yellow-800 mt-3 text-sm">
                  <strong>Ventajas de Mercado Libre:</strong> Envío gratuito en muchos productos, opciones de pago locales, atención al cliente en español y garantía de compra protegida.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Cómo Funcionan las Comisiones</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <h3 className="font-semibold text-green-900 mb-3 flex items-center gap-2">
                    <DollarSign className="h-5 w-5" />
                    Para Usted (Comprador)
                  </h3>
                  <ul className="text-green-800 space-y-2 text-sm">
                    <li>✅ <strong>Sin costo adicional:</strong> El precio es exactamente el mismo</li>
                    <li>✅ <strong>Mismas ofertas:</strong> Accede a todas las promociones disponibles</li>
                    <li>✅ <strong>Misma garantía:</strong> Términos y condiciones de Amazon/Mercado Libre</li>
                    <li>✅ <strong>Mismo servicio:</strong> Atención al cliente oficial de cada plataforma</li>
                    <li>✅ <strong>Protección de compra:</strong> Políticas de devolución estándar</li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                  <h3 className="font-semibold text-purple-900 mb-3 flex items-center gap-2">
                    <Shield className="h-5 w-5" />
                    Para LinkerStore
                  </h3>
                  <ul className="text-purple-800 space-y-2 text-sm">
                    <li>📈 <strong>Amazon:</strong> Comisión 1-10% según categoría</li>
                    <li>🛒 <strong>Mercado Libre:</strong> Comisión 1-8% según categoría</li>
                    <li>⏰ <strong>Plazo de cookie:</strong> 24h Amazon, 30 días Mercado Libre</li>
                    <li>🎯 <strong>Solo productos enlazados:</strong> Productos que recomendamos</li>
                    <li>💰 <strong>Financiación del sitio:</strong> Mantiene LinkerStore gratuito</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Nuestro Compromiso con la Objetividad</h2>
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-xs font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Evaluación Independiente</h4>
                    <p className="text-gray-700 text-sm">Nuestras reseñas y recomendaciones están basadas en criterios técnicos, investigación independiente y experiencia profesional en seguridad industrial.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-xs font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Criterios de Calidad</h4>
                    <p className="text-gray-700 text-sm">Evaluamos productos basándonos en certificaciones, durabilidad, funcionalidad, relación calidad-precio y cumplimiento de normativas de seguridad.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-xs font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Transparencia Total</h4>
                    <p className="text-gray-700 text-sm">Identificamos claramente todos los enlaces de afiliación y explicamos cómo las comisiones nos ayudan a mantener el sitio gratuito.</p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Identificación de Enlaces de Afiliación</h2>
              <p className="mb-4">Los enlaces de afiliación en nuestro sitio están claramente identificados mediante:</p>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span><strong>Botones de compra</strong> con texto "Ver en Amazon", "Comprar en Amazon" o "Ver en Mercado Libre"</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span><strong>Avisos en artículos</strong> indicando "Enlaces de afiliación incluidos"</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span><strong>Iconos distintivos</strong> junto a enlaces que generan comisión</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span><strong>Declaraciones específicas</strong> antes de las recomendaciones de productos</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span><strong>Esta página de divulgación</strong> enlazada desde el footer</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Otros Programas de Afiliación</h2>
              <p className="mb-4">Además de Amazon, podemos participar en otros programas de afiliación con:</p>
              <ul className="list-disc list-inside mb-6 space-y-1">
                <li>Fabricantes de equipos de seguridad industrial</li>
                <li>Distribuidores especializados en EPP</li>
                <li>Plataformas de cursos de seguridad y certificaciones</li>
                <li>Proveedores de software de gestión de seguridad</li>
              </ul>
              <p className="mb-6">
                <strong>Siempre divulgaremos estas relaciones</strong> cuando recomienden productos o servicios de estos socios.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Financiación del Contenido</h2>
              <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-6">
                <h3 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
                  <Info className="h-5 w-5" />
                  ¿Por qué usamos afiliación?
                </h3>
                <p className="text-blue-800 mb-3">
                  Las comisiones de afiliación nos permiten:
                </p>
                <ul className="list-disc list-inside text-blue-800 space-y-1">
                  <li>Mantener LinkerStore completamente gratuito para los usuarios</li>
                  <li>Financiar investigación independiente de productos</li>
                  <li>Crear contenido de alta calidad sin publicidad intrusiva</li>
                  <li>Mantener un equipo de expertos en seguridad industrial</li>
                  <li>Actualizar constantemente nuestras recomendaciones</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Su Privacidad y las Cookies</h2>
              <p className="mb-6">
                Cuando hace clic en un enlace de afiliación, tanto Amazon como Mercado Libre pueden colocar cookies en su dispositivo para rastrear la referencia. Esta información se utiliza únicamente para calcular comisiones y no afecta su experiencia de compra. Para más información, consulte nuestra <a href="/legal/politica-privacidad" className="text-blue-600 hover:underline">Política de Privacidad</a> y <a href="/legal/cookies" className="text-blue-600 hover:underline">Política de Cookies</a>.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contacto</h2>
              <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg">
                <p className="mb-3">Si tiene preguntas sobre nuestras relaciones de afiliación o desea más información sobre un producto específico:</p>
                <div className="space-y-2">
                  <p><strong>Email:</strong> linkerpro.notifications@gmail.com</p>
                  <p><strong>Respuesta:</strong> Dentro de 48 horas</p>
                </div>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg mt-8">
                <h3 className="font-semibold text-green-900 mb-2">Agradecimiento</h3>
                <p className="text-green-800">
                  Gracias por su confianza y por apoyar a LinkerStore a través de sus compras. Su apoyo nos permite continuar proporcionando contenido gratuito y de alta calidad sobre seguridad industrial.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </BlogLayout>
  );
}
