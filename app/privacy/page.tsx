"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Shield, ExternalLink } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">LP</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">LinkerPro</span>
          </Link>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 lg:px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <Link href="/">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver al Inicio
            </Button>
          </Link>

          <div className="space-y-8">
            {/* Título principal */}
            <div className="text-center space-y-4">
              <Shield className="h-16 w-16 text-blue-600 mx-auto" />
              <h1 className="text-4xl font-bold text-gray-900">Política de Privacidad</h1>
              <p className="text-lg text-gray-600">Última actualización: 31 de Julio, 2025</p>
            </div>

            {/* Aviso importante sobre afiliados */}
            <Card className="border-2 border-orange-200 bg-orange-50">
              <CardHeader>
                <CardTitle className="flex items-center text-orange-800">
                  <ExternalLink className="h-6 w-6 mr-2" />
                  Aviso Importante - Programa de Afiliados Amazon
                </CardTitle>
              </CardHeader>
              <CardContent className="text-orange-700">
                <p className="mb-4">
                  <strong>LinkerStore</strong> es participante del Programa de Afiliados de Amazon Services LLC, 
                  un programa de publicidad de afiliados diseñado para proporcionar un medio para que los sitios web 
                  ganen tarifas de publicidad mediante la publicidad y los enlaces a Amazon.com.
                </p>
                <p className="mb-4">
                  Cuando haces clic en los enlaces de productos de Amazon en nuestro sitio web y realizas una compra, 
                  podemos recibir una pequeña comisión sin costo adicional para ti. Esto nos ayuda a mantener y mejorar 
                  nuestro servicio.
                </p>
                <p>
                  <strong>Importante:</strong> Los precios y la disponibilidad de los productos están sujetos a cambios. 
                  El precio y la disponibilidad de los productos en Amazon en el momento de la compra se aplicarán 
                  a la compra de este producto.
                </p>
              </CardContent>
            </Card>

            {/* Secciones de la política */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>1. Información que Recopilamos</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    En LinkerStore, respetamos tu privacidad y nos comprometemos a proteger tu información personal. 
                    Recopilamos la siguiente información:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Información de navegación y cookies técnicas necesarias para el funcionamiento del sitio</li>
                    <li>Datos de interacción con nuestros enlaces de afiliados de Amazon</li>
                    <li>Información voluntaria que proporcionas al contactarnos (formularios de contacto)</li>
                    <li>Datos de análisis web anónimos para mejorar la experiencia del usuario</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>2. Cómo Utilizamos tu Información</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Utilizamos la información recopilada para:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Mejorar la funcionalidad y experiencia de nuestro sitio web</li>
                    <li>Proporcionar recomendaciones de productos más relevantes</li>
                    <li>Analizar el rendimiento de nuestros enlaces de afiliados</li>
                    <li>Responder a tus consultas y proporcionar soporte al cliente</li>
                    <li>Cumplir con las obligaciones legales y regulatorias</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>3. Cookies y Tecnologías de Seguimiento</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Nuestro sitio web utiliza cookies y tecnologías similares para:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li><strong>Cookies esenciales:</strong> Necesarias para el funcionamiento básico del sitio</li>
                    <li><strong>Cookies de análisis:</strong> Para entender cómo los usuarios interactúan con el sitio</li>
                    <li><strong>Cookies de afiliados:</strong> Para rastrear las referencias a Amazon y calcular comisiones</li>
                  </ul>
                  <p className="text-gray-700 mt-4">
                    Puedes controlar el uso de cookies a través de la configuración de tu navegador.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>4. Compartir Información con Terceros</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    No vendemos, comercializamos ni transferimos tu información personal a terceros, excepto:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Con Amazon, como parte del programa de afiliados (solo datos de clics y compras)</li>
                    <li>Cuando sea requerido por ley o para proteger nuestros derechos legales</li>
                    <li>Con proveedores de servicios que nos ayudan a operar el sitio web (bajo estrictos acuerdos de confidencialidad)</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>5. Seguridad de los Datos</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger tu información 
                    personal contra el acceso no autorizado, la alteración, divulgación o destrucción. Sin embargo, 
                    ningún método de transmisión por Internet o almacenamiento electrónico es 100% seguro.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>6. Tus Derechos</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Tienes derecho a:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Acceder a la información personal que tenemos sobre ti</li>
                    <li>Rectificar información inexacta o incompleta</li>
                    <li>Solicitar la eliminación de tu información personal</li>
                    <li>Oponerte al procesamiento de tu información personal</li>
                    <li>Retirar el consentimiento cuando sea aplicable</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>7. Enlaces a Sitios Web de Terceros</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Nuestro sitio web contiene enlaces a Amazon y otros sitios web de terceros. No somos responsables 
                    de las prácticas de privacidad o el contenido de estos sitios externos. Te recomendamos leer las 
                    políticas de privacidad de cualquier sitio web de terceros que visites.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>8. Menores de Edad</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Nuestro sitio web no está dirigido a menores de 18 años. No recopilamos conscientemente información 
                    personal de menores de edad. Si descubrimos que hemos recopilado información personal de un menor, 
                    la eliminaremos de inmediato.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>9. Cambios a esta Política</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Podemos actualizar esta política de privacidad de vez en cuando. Te notificaremos sobre cualquier 
                    cambio publicando la nueva política en esta página y actualizando la fecha de "última actualización". 
                    Te recomendamos revisar esta política periódicamente.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>10. Contacto</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Si tienes preguntas sobre esta política de privacidad o nuestras prácticas de datos, puedes contactarnos:
                  </p>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Email:</strong> privacidad@linkerstore.com</p>
                    <p><strong>Dirección:</strong> Ciudad de México, México</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Separator />

            {/* Disclaimer adicional */}
            <div className="text-center text-sm text-gray-500 space-y-2">
              <p>
                LinkerStore - Programa de Afiliados de Amazon
              </p>
              <p>
                "Somos un participante en el Programa de Asociados de Amazon Services LLC, un programa de publicidad 
                de afiliados diseñado para proporcionar un medio para que ganemos tarifas al vincular a Amazon.com 
                y sitios afiliados."
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
