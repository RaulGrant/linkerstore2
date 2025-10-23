"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export function Footer() {

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 lg:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">LS</span>
              </div>
              <span className="text-xl font-bold">LinkerStore</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Tu fuente confiable de información sobre seguridad industrial y equipos de protección personal. 
              Ayudando a profesionales a crear ambientes de trabajo más seguros.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white p-2">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white p-2">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white p-2">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white p-2">
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Enlaces principales */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contenido</h3>
            <div className="space-y-2">
              <Link href="/blog" className="block text-gray-300 hover:text-white text-sm transition-colors">
                Blog de Seguridad
              </Link>
              <Link href="/guias" className="block text-gray-300 hover:text-white text-sm transition-colors">
                Guías Técnicas
              </Link>
              <Link href="/servicios" className="block text-gray-300 hover:text-white text-sm transition-colors">
                Servicios
              </Link>
              <Link href="/sobre-nosotros" className="block text-gray-300 hover:text-white text-sm transition-colors">
                Sobre Nosotros
              </Link>
              {/* Temporalmente oculto
              <Link href="/store" className="block text-gray-300 hover:text-white text-sm transition-colors">
                Catálogo de Productos
              </Link>
              */}
            </div>
          </div>

          {/* Enlaces legales */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Legal y Privacidad</h3>
            <div className="space-y-2">
              <Link href="/legal/politica-privacidad" className="block text-gray-300 hover:text-white text-sm transition-colors">
                Política de Privacidad
              </Link>
              <Link href="/legal/terminos-condiciones" className="block text-gray-300 hover:text-white text-sm transition-colors">
                Términos y Condiciones
              </Link>
              <Link href="/legal/divulgacion-afiliados" className="block text-gray-300 hover:text-white text-sm transition-colors">
                Divulgación de Afiliados
              </Link>
              <Link href="/legal/cookies" className="block text-gray-300 hover:text-white text-sm transition-colors">
                Política de Cookies
              </Link>
            </div>
          </div>

          {/* Contacto */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">soporte@linkerstore.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">+52 55 3486 3278</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">Ciudad de México, México</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Link href="/contacto" className="text-gray-300 hover:text-white transition-colors">
                  Contacto
                </Link>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Link href="/ayuda" className="text-gray-300 hover:text-white transition-colors">
                  Centro de Ayuda
                </Link>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-gray-700" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-gray-400">© 2025 LinkerStore. Todos los derechos reservados.</div>
          <div className="flex items-center space-x-6 text-sm text-gray-400">
            <Link href="/legal/politica-privacidad" className="hover:text-white transition-colors">
              Política de Privacidad
            </Link>
            <Link href="/legal/cookies" className="hover:text-white transition-colors">
              Cookies
            </Link>
            <Link href="/legal/terminos-condiciones" className="hover:text-white transition-colors">
              Términos y Condiciones
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}