"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { Footer } from "@/components/footer"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">LP</span>
            </div>
            <span className="text-xl font-bold text-gray-900">LinkerPro</span>
          </Link>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 lg:px-6 py-8">
        <div className="max-w-3xl mx-auto">
          <Link href="/">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver al Inicio
            </Button>
          </Link>

          <h1 className="text-3xl font-bold mb-6">Política de Privacidad</h1>
          <p className="text-gray-600 mb-4">Última actualización: 20 de Junio de 2025</p>

          <div className="prose max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Información que Recopilamos</h2>
              <p className="mb-4">En LinkerPro, recopilamos la siguiente información:</p>
              <ul className="list-disc pl-6 mb-4">
                <li className="mb-2">
                  <strong>Información de perfil:</strong> Nombre, foto, experiencia profesional, habilidades técnicas,
                  certificaciones.
                </li>
                <li className="mb-2">
                  <strong>Información de contacto:</strong> Correo electrónico, número de teléfono, ubicación.
                </li>
                <li className="mb-2">
                  <strong>Información profesional:</strong> Historial laboral, portafolio de proyectos, especialidades
                  técnicas.
                </li>
                <li className="mb-2">
                  <strong>Información de la empresa:</strong> Nombre de la empresa, sector industrial, tamaño, ubicación.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Uso de la Información</h2>
              <p className="mb-4">Utilizamos la información recopilada para:</p>
              <ul className="list-disc pl-6 mb-4">
                <li className="mb-2">Facilitar conexiones entre empresas y freelancers del sector industrial.</li>
                <li className="mb-2">Procesar pagos y gestionar el sistema de escrow.</li>
                <li className="mb-2">Verificar identidades y credenciales profesionales.</li>
                <li className="mb-2">Mejorar nuestros servicios y la experiencia del usuario.</li>
                <li className="mb-2">Enviar notificaciones relevantes sobre proyectos y oportunidades.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. Protección de Datos</h2>
              <p className="mb-4">
                Implementamos medidas de seguridad robustas para proteger su información, incluyendo:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li className="mb-2">Encriptación SSL/TLS para todas las transmisiones de datos.</li>
                <li className="mb-2">Almacenamiento seguro de datos en servidores protegidos.</li>
                <li className="mb-2">Acceso restringido a la información personal.</li>
                <li className="mb-2">Monitoreo regular de seguridad y auditorías.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Compartir Información</h2>
              <p className="mb-4">Compartimos información únicamente en los siguientes casos:</p>
              <ul className="list-disc pl-6 mb-4">
                <li className="mb-2">Entre empresas y freelancers que han acordado conectarse.</li>
                <li className="mb-2">Con proveedores de servicios de pago para procesar transacciones.</li>
                <li className="mb-2">Cuando sea requerido por ley o autoridades competentes.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Sus Derechos</h2>
              <p className="mb-4">Usted tiene derecho a:</p>
              <ul className="list-disc pl-6 mb-4">
                <li className="mb-2">Acceder a su información personal.</li>
                <li className="mb-2">Rectificar datos incorrectos.</li>
                <li className="mb-2">Solicitar la eliminación de sus datos.</li>
                <li className="mb-2">Oponerse al procesamiento de sus datos.</li>
                <li className="mb-2">Exportar sus datos en un formato común.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Contacto</h2>
              <p className="mb-4">
                Para cualquier consulta sobre nuestra política de privacidad, puede contactarnos en:
              </p>
              <ul className="list-none mb-4">
                <li>Email: privacidad@linkerpro.com</li>
                <li>Teléfono: +52 55 1234 5678</li>
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
