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
                Última actualización: 10 de octubre de 2025
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
                  <p><strong>LinkerPro</strong></p>
                  <p className="flex items-center gap-2"><Globe className="h-4 w-4" /> www.linkerpro.com</p>
                  <p className="flex items-center gap-2"><Mail className="h-4 w-4" /> linkerpro.notifications@gmail.com</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Nuestro Compromiso Principal</h2>
              <p className="mb-6 text-xl">
                En LinkerPro, tu privacidad es fundamental. Nuestra política es simple: <strong>No recopilamos, no almacenamos y no compartimos tus datos personales.</strong> No necesitas registrarte y tu visita es completamente anónima.
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

              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Herramientas de Analytics y Seguimiento</h2>
              
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
                <h3 className="text-lg font-semibold text-blue-900 mb-3 flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5" />
                    Meta Pixel de Facebook
                </h3>
                <p className="text-blue-800 mb-3">
                    Utilizamos Meta Pixel (ID: 2002160850545438) para mejorar nuestro contenido y mostrar información relevante. Esta herramienta:
                </p>
                <ul className="list-disc list-inside text-blue-800 space-y-1 mb-3">
                    <li>Recopila información anónima sobre tu navegación en nuestro sitio</li>
                    <li>No almacena datos personales identificables en nuestros servidores</li>
                    <li>Se rige por la política de privacidad de Meta/Facebook</li>
                    <li>Puedes deshabilitarlo usando herramientas como uBlock Origin o AdBlock</li>
                </ul>
                <p className="text-blue-800 text-sm">
                    Para más información: <a href="https://www.facebook.com/privacy/policy/" className="text-blue-600 underline">Política de Privacidad de Meta</a>
                </p>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8 rounded-r-lg">
                <h3 className="text-lg font-semibold text-green-900 mb-3">Google Analytics (Próximamente)</h3>
                <p className="text-green-800 mb-2">
                    Estamos preparando la implementación de Google Analytics 4 para entender mejor cómo mejorar nuestro contenido. Cuando se implemente:
                </p>
                <ul className="list-disc list-inside text-green-800 space-y-1">
                    <li>Solo recopilaremos datos de navegación anónimos</li>
                    <li>Implementaremos consentimiento explícito según GDPR</li>
                    <li>Proporcionaremos controles para opt-out</li>
                    <li>Actualizaremos esta política antes de la activación</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">Cookies Técnicas</h3>
              <p className="mb-6">
                Utilizamos únicamente cookies técnicas esenciales para el funcionamiento del sitio. Estas son completamente anónimas y no almacenan información personal identificable.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Programas de Afiliados y Enlaces a Terceros</h2>
              <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-8 rounded-r-lg">
                <h3 className="text-lg font-semibold text-orange-900 mb-3 flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5" />
                    Importante sobre Enlaces Externos
                </h3>
                <p className="text-orange-800 mb-3">
                    LinkerPro participa en los programas de afiliados de <strong>Amazon Associates</strong> y <strong>Mercado Libre Afiliados</strong>. Cuando haces clic en un enlace de afiliado, eres redirigido al sitio web correspondiente:
                </p>
                <ul className="list-disc list-inside text-orange-800 space-y-2 mb-3">
                  <li><strong>Amazon:</strong> amazon.com, amazon.com.mx, amazon.es y otros sitios de Amazon</li>
                  <li><strong>Mercado Libre:</strong> mercadolibre.com.mx, mercadolibre.com.ar y otros sitios de Mercado Libre</li>
                </ul>
                <p className="text-orange-800">
                    A partir de ese momento, la navegación se rige por las políticas de privacidad respectivas de cada plataforma, sobre las cuales no tenemos control. Te recomendamos leer sus políticas si tienes alguna duda.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Cumplimiento GDPR y Tus Derechos</h2>
              
              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mb-8 rounded-r-lg">
                <h3 className="text-lg font-semibold text-purple-900 mb-3">Derechos bajo GDPR (Reglamento General de Protección de Datos)</h3>
                <p className="text-purple-800 mb-3">
                    Aunque no recopilamos datos personales directamente, respetamos tus derechos según GDPR:
                </p>
                <ul className="list-disc list-inside text-purple-800 space-y-1">
                    <li><strong>Derecho de acceso:</strong> Puedes solicitar información sobre datos que pudieran procesarse</li>
                    <li><strong>Derecho de rectificación:</strong> Corrección de datos inexactos</li>
                    <li><strong>Derecho de supresión:</strong> Eliminación de datos personales</li>
                    <li><strong>Derecho de oposición:</strong> Oposición al procesamiento de datos</li>
                    <li><strong>Derecho a la portabilidad:</strong> Transferencia de datos a otros servicios</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">Control de Cookies y Seguimiento</h3>
              <p className="mb-4">
                Tienes control total sobre las herramientas de seguimiento:
              </p>
              <ul className="list-disc list-inside mb-6 space-y-2">
                <li><strong>Navegador:</strong> Configura tu navegador para bloquear cookies de terceros</li>
                <li><strong>Extensions:</strong> Usa uBlock Origin, AdBlock Plus o Privacy Badger</li>
                <li><strong>Do Not Track:</strong> Respetamos la señal "Do Not Track" del navegador</li>
                <li><strong>Opt-out de Meta:</strong> Visita la configuración de anuncios de Facebook</li>
              </ul>

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