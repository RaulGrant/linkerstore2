'use client';

import { motion } from 'framer-motion';
import BlogLayout from '@/components/blog/BlogLayout';
import { Shield, FileText, Globe, Mail, AlertTriangle, CheckCircle } from 'lucide-react';

export default function PoliticaPrivacidad() {
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
                <Shield className="h-4 w-4" />
                Protección de Datos
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Política de Privacidad
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Tu privacidad es nuestra prioridad. Aquí te explicamos por qué puedes navegar con total tranquilidad.
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
              {/* Información del Responsable */}
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
                <h2 className="text-xl font-semibold text-blue-900 mb-3 flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Responsable del Sitio Web
                </h2>
                <div className="text-blue-800">
                  <p><strong>LinkerStore</strong></p>
                  <p className="flex items-center gap-2"><Globe className="h-4 w-4" /> www.linkerstore.com.mx</p>
                  <p className="flex items-center gap-2"><Mail className="h-4 w-4" /> linkerpro.notifications@gmail.com</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Nuestro Compromiso Principal</h2>
              <p className="mb-6 text-xl">
                En LinkerStore, tu privacidad es fundamental. Nuestra política es simple: <strong>No recopilamos, no almacenamos y no compartimos tus datos personales.</strong> No necesitas registrarte y tu visita es completamente anónima.
              </p>

              <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8 rounded-r-lg">
                <h3 className="text-lg font-semibold text-green-900 mb-3 flex items-center gap-2">
                    <CheckCircle className="h-5 w-5" />
                    Datos que NO Recopilamos
                </h3>
                <p className="text-green-800 mb-2">
                    Para ser totalmente transparentes, aquí tienes una lista de datos que <strong>NUNCA</strong> te solicitaremos ni registraremos:
                </p>
                <ul className="list-disc list-inside text-green-800 space-y-1">
                    <li>Nombre, correo electrónico o número de teléfono.</li>
                    <li>Dirección IP, tipo de navegador o datos de tu dispositivo.</li>
                    <li>Información de tu empresa o cargo.</li>
                    <li>Cookies de seguimiento, publicitarias o analíticas.</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Cookies</h2>
              <p className="mb-6">
                LinkerStore <strong> utiliza cookies de seguimiento por parte de meta y de google analitycs con el fin de mejorar las analíticas del sitio web </strong>. Estas cookies son completamente anónimas y no almacenan información personal.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Programas de Afiliados y Enlaces a Terceros</h2>
              <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-8 rounded-r-lg">
                <h3 className="text-lg font-semibold text-orange-900 mb-3 flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5" />
                    Importante sobre Enlaces Externos
                </h3>
                <p className="text-orange-800 mb-3">
                    LinkerStore participa en los programas de afiliados de <strong>Amazon Associates</strong> y <strong>Mercado Libre Afiliados</strong>. Cuando haces clic en un enlace de afiliado, eres redirigido al sitio web correspondiente:
                </p>
                <ul className="list-disc list-inside text-orange-800 space-y-2 mb-3">
                  <li><strong>Amazon:</strong> amazon.com, amazon.com.mx, amazon.es y otros sitios de Amazon</li>
                  <li><strong>Mercado Libre:</strong> mercadolibre.com.mx, mercadolibre.com.ar y otros sitios de Mercado Libre</li>
                </ul>
                <p className="text-orange-800">
                    A partir de ese momento, la navegación se rige por las políticas de privacidad respectivas de cada plataforma, sobre las cuales no tenemos control. Te recomendamos leer sus políticas si tienes alguna duda.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Tus Derechos (Derechos ARCO)</h2>
              <p className="mb-6">
                La legislación mexicana te otorga derechos sobre tus datos (Acceso, Rectificación, Cancelación y Oposición). En LinkerStore, garantizamos estos derechos de la forma más efectiva: <strong>al no recopilar ningún dato personal, no existe información que acceder, rectificar o cancelar.</strong>
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Cambios a esta Política</h2>
              <p className="mb-6">
                Si en el futuro realizamos algún cambio a esta política, lo publicaremos en esta misma página. Sin embargo, nuestro compromiso de no recolectar tus datos personales se mantendrá.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Contacto</h2>
              <p className="mb-6">
                Si tienes cualquier pregunta sobre nuestra Política de Privacidad, no dudes en escribirnos a: <strong>linkerpro.notifications@gmail.com</strong>.
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </BlogLayout>
  );
}