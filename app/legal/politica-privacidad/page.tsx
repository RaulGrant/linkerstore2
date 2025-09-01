'use client';

import { motion } from 'framer-motion';
import BlogLayout from '@/components/blog/BlogLayout';
import { Shield, FileText, AlertTriangle, Globe, Mail, Phone } from 'lucide-react';

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
                Protección de Datos Personales
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Política de Privacidad
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Comprometidos con la protección de su información personal conforme a la legislación mexicana
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
              {/* Información del Responsable */}
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
                <h2 className="text-xl font-semibold text-blue-900 mb-3 flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Responsable del Tratamiento de Datos Personales
                </h2>
                <div className="text-blue-800">
                  <p><strong>LinkerPro</strong></p>
                  <p className="flex items-center gap-2"><Mail className="h-4 w-4" /> contacto@linkerpro.com</p>
                  <p className="flex items-center gap-2"><Globe className="h-4 w-4" /> www.linkerpro.com</p>
                  <p><strong>Domicilio:</strong> Ciudad de México, México</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Marco Legal</h2>
              <p className="mb-6">
                Esta Política de Privacidad se elabora en cumplimiento de la <strong>Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP)</strong> y su Reglamento, así como los lineamientos emitidos por el Instituto Nacional de Transparencia, Acceso a la Información y Protección de Datos Personales (INAI).
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Datos Personales que Recabamos</h2>
              <p className="mb-4">Para brindar nuestros servicios de información especializada en seguridad industrial, podemos recabar los siguientes datos personales:</p>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Datos de Identificación:</h3>
              <ul className="list-disc list-inside mb-4 space-y-1">
                <li>Nombre completo</li>
                <li>Correo electrónico</li>
                <li>Número telefónico</li>
                <li>Empresa o lugar de trabajo</li>
                <li>Cargo o puesto</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Datos de Navegación:</h3>
              <ul className="list-disc list-inside mb-6 space-y-1">
                <li>Dirección IP</li>
                <li>Tipo de navegador</li>
                <li>Páginas visitadas</li>
                <li>Tiempo de permanencia</li>
                <li>Cookies técnicas y analíticas</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Finalidades del Tratamiento</h2>
              <p className="mb-4">Utilizamos sus datos personales para las siguientes finalidades:</p>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Finalidades Primarias (necesarias para el servicio):</h3>
              <ul className="list-disc list-inside mb-4 space-y-1">
                <li>Proporcionar contenido especializado en seguridad industrial</li>
                <li>Gestionar suscripciones al blog y newsletter</li>
                <li>Responder consultas y brindar soporte técnico</li>
                <li>Cumplir con obligaciones legales y fiscales</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Finalidades Secundarias (requieren consentimiento expreso):</h3>
              <ul className="list-disc list-inside mb-6 space-y-1">
                <li>Envío de información promocional sobre productos y servicios</li>
                <li>Análisis de comportamiento y preferencias para mejorar el servicio</li>
                <li>Estudios de mercado y estadísticas</li>
                <li>Prospección comercial</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Fundamento Legal</h2>
              <p className="mb-6">
                El tratamiento de sus datos personales se basa en:
              </p>
              <ul className="list-disc list-inside mb-6 space-y-1">
                <li><strong>Consentimiento:</strong> Otorgado al utilizar nuestros servicios</li>
                <li><strong>Ejecución contractual:</strong> Para cumplir con los servicios solicitados</li>
                <li><strong>Interés legítimo:</strong> Para mejorar nuestros servicios y contenido</li>
                <li><strong>Obligación legal:</strong> Para cumplir con la normatividad aplicable</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Transferencias de Datos</h2>
              <p className="mb-4">
                Podemos transferir sus datos personales a terceros en los siguientes casos:
              </p>
              <ul className="list-disc list-inside mb-6 space-y-1">
                <li>Proveedores de servicios tecnológicos (hosting, análisis web)</li>
                <li>Plataformas de afiliación de Amazon</li>
                <li>Autoridades competentes cuando sea requerido por ley</li>
                <li>Servicios de marketing digital y email marketing</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Sus Derechos ARCO</h2>
              <p className="mb-4">
                Conforme a la LFPDPPP, usted tiene derecho a:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Acceso</h4>
                  <p className="text-sm text-gray-600">Conocer qué datos personales tenemos de usted</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Rectificación</h4>
                  <p className="text-sm text-gray-600">Solicitar la corrección de datos inexactos</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Cancelación</h4>
                  <p className="text-sm text-gray-600">Solicitar la eliminación de sus datos</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Oposición</h4>
                  <p className="text-sm text-gray-600">Oponerse al tratamiento de sus datos</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Medidas de Seguridad</h2>
              <p className="mb-4">
                Implementamos medidas de seguridad técnicas, físicas y administrativas para proteger sus datos personales:
              </p>
              <ul className="list-disc list-inside mb-6 space-y-1">
                <li>Cifrado SSL/TLS para transmisión de datos</li>
                <li>Acceso restringido a personal autorizado</li>
                <li>Respaldos seguros y redundantes</li>
                <li>Monitoreo continuo de seguridad</li>
                <li>Capacitación en protección de datos</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Cookies y Tecnologías Similares</h2>
              <p className="mb-4">
                Utilizamos cookies para mejorar la experiencia del usuario:
              </p>
              <ul className="list-disc list-inside mb-6 space-y-1">
                <li><strong>Cookies técnicas:</strong> Necesarias para el funcionamiento del sitio</li>
                <li><strong>Cookies analíticas:</strong> Para analizar el uso del sitio web</li>
                <li><strong>Cookies de personalización:</strong> Para recordar preferencias</li>
                <li><strong>Cookies publicitarias:</strong> Para mostrar contenido relevante</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Conservación de Datos</h2>
              <p className="mb-6">
                Conservaremos sus datos personales durante el tiempo necesario para cumplir con las finalidades descritas, considerando los plazos legales aplicables y nuestras políticas de retención.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Cambios al Aviso de Privacidad</h2>
              <p className="mb-6">
                Nos reservamos el derecho de modificar este Aviso de Privacidad. Los cambios serán notificados a través de nuestro sitio web con al menos 5 días de anticipación.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contacto y Ejercicio de Derechos</h2>
              <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-6">
                <h3 className="font-semibold text-blue-900 mb-3">Para ejercer sus derechos ARCO o presentar consultas:</h3>
                <div className="space-y-2 text-blue-800">
                  <p className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    <strong>Email:</strong> privacidad@linkerpro.com
                  </p>
                  <p className="flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    <strong>Asunto:</strong> "Solicitud de Derechos ARCO"
                  </p>
                  <p><strong>Tiempo de respuesta:</strong> 20 días hábiles máximo</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Jurisdicción</h2>
              <p className="mb-6">
                Para la interpretación y cumplimiento de este Aviso de Privacidad, las partes se someten a la jurisdicción de los tribunales competentes en la Ciudad de México, México, renunciando expresamente a cualquier otro fuero que pudiera corresponderles.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Autoridad de Control</h2>
              <p className="mb-4">
                Si considera que sus derechos han sido vulnerados, puede presentar una denuncia ante:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <p><strong>Instituto Nacional de Transparencia, Acceso a la Información y Protección de Datos Personales (INAI)</strong></p>
                <p>Sitio web: www.inai.org.mx</p>
                <p>Teléfono: 55 5004 2400</p>
              </div>

              {/* Declaración de Amazon Afiliados */}
              <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg">
                <h2 className="text-xl font-semibold text-orange-900 mb-3 flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5" />
                  Programa de Afiliados de Amazon
                </h2>
                <p className="text-orange-800">
                  LinkerPro participa en el Programa de Afiliados de Amazon. Como afiliado de Amazon, ganamos comisiones por compras calificadas. Esta relación no afecta el precio que usted paga ni influye en nuestras recomendaciones, las cuales están basadas en criterios técnicos y de calidad independientes.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </BlogLayout>
  );
}
