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
              <span className="text-white font-bold text-sm">LS</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">LinkerStore</span>
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
              <p className="text-lg text-gray-600">Última actualización: 22 de Julio, 2025</p>
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
                <p className="font-medium text-lg mb-2">
                  LinkerStore es participante del Programa de Afiliados de Amazon.
                </p>
                <p>
                  Como afiliado de Amazon, obtenemos ingresos por las compras que califican realizadas 
                  a través de nuestros enlaces. Esto no afecta el precio que pagas por los productos, 
                  pero nos ayuda a mantener el sitio web y continuar proporcionando reseñas de calidad.
                </p>
              </CardContent>
            {/* Contenido principal */}
            <div className="grid gap-8">
              
              {/* Sección 1: Información que Recopilamos */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">1. Información que Recopilamos</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">En LinkerStore, recopilamos la siguiente información:</p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li><strong>Información de navegación:</strong> Productos que visualizas, tiempo en el sitio, páginas visitadas.</li>
                    <li><strong>Información de cuenta (opcional):</strong> Email, nombre, preferencias de productos.</li>
                    <li><strong>Datos de uso:</strong> Búsquedas realizadas, categorías de interés, productos favoritos.</li>
                    <li><strong>Información técnica:</strong> Dirección IP, tipo de navegador, dispositivo usado.</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Sección 2: Programa de Afiliados Amazon */}
              <Card className="border-blue-200">
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-800">2. Programa de Afiliados Amazon</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="font-semibold text-blue-800 mb-2">Declaración de Afiliación</p>
                    <p className="text-blue-700">
                      "LinkerStore Industrial Store es participante del Programa de Afiliados de Amazon Services LLC, 
                      un programa de publicidad de afiliados diseñado para proporcionar un medio para que los sitios 
                      web ganen tarifas de publicidad mediante la publicidad y enlaces a Amazon.com."
                    </p>
                  </div>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li><strong>Ingresos por comisión:</strong> Ganamos una comisión cuando realizas una compra a través de nuestros enlaces de Amazon.</li>
                    <li><strong>Sin costo adicional:</strong> Esto no afecta el precio que pagas por los productos.</li>
                    <li><strong>Uso de cookies:</strong> Amazon puede usar cookies para rastrear las compras realizadas a través de nuestros enlaces.</li>
                    <li><strong>Independencia editorial:</strong> Nuestras reseñas y recomendaciones son independientes y honestas.</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Sección 3: Uso de la Información */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">3. Uso de la Información</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">Utilizamos la información recopilada para:</p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Proporcionar recomendaciones personalizadas de productos industriales.</li>
                    <li>Mejorar nuestras reseñas y guías de compra.</li>
                    <li>Recordar tus productos favoritos y historial de navegación.</li>
                    <li>Enviar newsletters con nuevos productos (solo si te suscribes).</li>
                    <li>Generar estadísticas anónimas para mejorar el sitio web.</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Sección 4: Cookies y Rastreo */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">4. Cookies y Rastreo</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">Utilizamos diferentes tipos de cookies:</p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li><strong>Cookies esenciales:</strong> Necesarias para el funcionamiento básico del sitio.</li>
                    <li><strong>Cookies de preferencias:</strong> Guardan tus configuraciones y productos favoritos.</li>
                    <li><strong>Cookies de analytics:</strong> Nos ayudan a entender cómo usas el sitio.</li>
                    <li><strong>Cookies de afiliados:</strong> Utilizadas por Amazon para rastrear compras a través de nuestros enlaces.</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Sección 5: Compartir Información */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">5. Compartir Información</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">Tu información personal no se comparte con terceros, excepto:</p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li><strong>Amazon:</strong> Cuando haces clic en nuestros enlaces afiliados.</li>
                    <li><strong>Proveedores de servicios:</strong> Solo para funciones esenciales del sitio (hosting, analytics).</li>
                    <li><strong>Cumplimiento legal:</strong> Cuando sea requerido por ley.</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Sección 6: Tus Derechos */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">6. Tus Derechos</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">Tienes derecho a:</p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Acceder a tu información personal almacenada.</li>
                    <li>Rectificar datos incorrectos en tu perfil.</li>
                    <li>Solicitar la eliminación de tu cuenta y datos.</li>
                    <li>Oponerte al procesamiento de tus datos.</li>
                    <li>Exportar tus datos en formato legible.</li>
                    <li>Deshabilitar cookies (puede afectar la funcionalidad).</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Sección 7: Seguridad */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">7. Seguridad de Datos</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">Implementamos medidas de seguridad apropiadas:</p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Encriptación SSL/TLS para todas las transmisiones.</li>
                    <li>Almacenamiento seguro en servidores protegidos.</li>
                    <li>Acceso restringido a datos personales.</li>
                    <li>Actualizaciones regulares de seguridad.</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Contacto */}
              <Card className="border-green-200 bg-green-50">
                <CardHeader>
                  <CardTitle className="text-2xl text-green-800">Contacto</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-green-700">
                    Si tienes preguntas sobre esta política de privacidad o quieres ejercer tus derechos, 
                    puedes contactarnos a través de nuestro formulario de contacto o enviando un email a 
                    linkerpro.notifications@gmail.com
                  </p>
                </CardContent>
              </Card>

            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Contacto</h2>
              <p className="mb-4">
                Para cualquier consulta sobre nuestra política de privacidad, puede contactarnos en:
              </p>
              <ul className="list-none mb-4">
                <li>Email: linkerpro.notifications@gmail.com</li>
                <li>Teléfono: +52 246 793 4968</li>
                <li>Dirección: Ciudad de México, México</li>
              </ul>
            </section>
          </div>

          <Separator className="my-8" />

          <div className="text-sm text-gray-600">
            <p className="mb-4">
              Esta política de privacidad puede ser actualizada periódicamente. La fecha de última actualización se
              encuentra al inicio de este documento.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
