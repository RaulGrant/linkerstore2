'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  FileText,
  Shield,
  Users,
  Mail,
  Phone,
  ExternalLink,
  ChevronRight,
  ShoppingBag,
  HelpCircle
} from 'lucide-react';

export default function BlogFooter() {
  const router = useRouter();

  const handleNavigation = (href: string) => {
    router.push(href);
  };

  const quickLinks = [
    { name: 'Inicio', href: '/', icon: FileText },
    { name: 'Tienda', href: '/catalogo', icon: ShoppingBag },
    { name: 'Blog', href: '/blog', icon: FileText },
    { name: 'Guías Técnicas', href: '/guias', icon: Shield },
    //{ name: 'Servicios', href: '/servicios', icon: Users },
    { name: 'Contacto', href: '/contacto', icon: Users },
    { name: 'Sobre Nosotros', href: '/sobre-nosotros', icon: Users },
    { name: 'Ayuda', href: '/ayuda', icon: HelpCircle }
  ];

  const categories = [
    { name: 'Equipos de Protección', href: '/blog?category=EPP' },
    { name: 'Seguridad Industrial', href: '/blog?category=Seguridad' },
    { name: 'Herramientas de Trabajo', href: '/blog?category=Herramientas' },
    { name: 'Guías de Compra', href: '/blog?category=Guias' }
  ];

  const legalPages = [
    { name: 'Política de Privacidad', href: '/legal/politica-privacidad' },
    { name: 'Términos y Condiciones', href: '/legal/terminos-condiciones' },
    { name: 'Divulgación de Afiliados', href: '/legal/divulgacion-afiliados' },
    { name: 'Cookies', href: '/legal/cookies' }
  ];

  return (
    <footer className="bg-slate-900 text-white mt-16 relative z-20">
      <div className="container mx-auto px-4 py-12">
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
          </div>

          {/* Accesos rápidos */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <ChevronRight className="h-4 w-4 text-blue-400" />
              Accesos Rápidos
            </h3>
            <div className="space-y-3">
              {quickLinks.map(({ name, href, icon: Icon }) => (
                <div
                  key={name}
                  onClick={() => handleNavigation(href)}
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors group cursor-pointer"
                >
                  <Icon className="h-4 w-4 text-blue-400 group-hover:text-blue-300" />
                  <span className="text-sm">{name}</span>
                </div>
              ))}
            </div>
            
            {/* Contacto rápido */}
            <div className="mt-6 pt-4 border-t border-gray-700">
              <h4 className="text-sm font-medium text-gray-200 mb-2">Contacto</h4>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <Mail className="h-3 w-3" />
                  <span>linkerpro.notifications@gmail.com</span>
                </div>
              </div>
            </div>
          </div>

          {/* Categorías del blog */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <ChevronRight className="h-4 w-4 text-blue-400" />
              Categorías
            </h3>
            <div className="space-y-2">
              {categories.map((category) => (
                <div
                  key={category.name}
                  onClick={() => handleNavigation(category.href)}
                  className="block text-gray-300 hover:text-white text-sm transition-colors hover:pl-2 duration-200 cursor-pointer"
                >
                  {category.name}
                </div>
              ))}
            </div>
            
            {/* Estadísticas rápidas */}
            <div className="mt-6 pt-4 border-t border-gray-700">
              <h4 className="text-sm font-medium text-gray-200 mb-3">En LinkerStore</h4>
              <div className="grid grid-cols-2 gap-3">
                <div className="text-center">
                  <div className="text-lg font-bold text-blue-400">200+</div>
                  <div className="text-xs text-gray-400">Artículos</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-green-400">100+</div>
                  <div className="text-xs text-gray-400">Guías</div>
                </div>
              </div>
            </div>
          </div>

          {/* Legal y soporte */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <ChevronRight className="h-4 w-4 text-blue-400" />
              Legal y Soporte
            </h3>
            <div className="space-y-2">
              {legalPages.map((page) => (
                <div
                  key={page.name}
                  onClick={() => handleNavigation(page.href)}
                  className="block text-gray-300 hover:text-white text-sm transition-colors hover:pl-2 duration-200 cursor-pointer"
                >
                  {page.name}
                </div>
              ))}
            </div>
            
            {/* CTA para más información */}
            <div className="mt-6 p-4 bg-blue-600 rounded-lg">
              <h4 className="text-sm font-bold mb-2">¿Necesitas ayuda específica?</h4>
              <p className="text-xs text-blue-100 mb-3">
                Nuestros expertos pueden crear contenido personalizado para tu empresa.
              </p>
              <Button 
                size="sm" 
                variant="secondary" 
                className="w-full bg-white text-blue-600 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleNavigation('/contacto')}
              >
                <div className="flex items-center justify-center gap-1">
                  <span>Contactar Expertos</span>
                  <ExternalLink className="h-3 w-3" />
                </div>
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-gray-700" />

        {/* Footer bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-gray-400">
            © 2025 LinkerStore. Todos los derechos reservados. 
            <span className="block md:inline md:ml-2">
              Información verificada por expertos certificados en seguridad industrial.
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-xs text-gray-500">
              Contenido actualizado: Octubre 2025
            </div>
          </div>
        </div>

        {/* Disclaimer sobre afiliados */}
        <div className="mt-6 p-4 bg-gray-800 rounded-lg">
          <p className="text-xs text-gray-400 text-center">
            <strong>Divulgación:</strong> LinkerStore participa en los programas de afiliados de  Mercado Libre Afiliados. 
            Podemos recibir comisiones por compras realizadas a través de nuestros enlaces, sin costo adicional para ti. 
            Esto nos ayuda a mantener nuestro contenido gratuito y de calidad.
          </p>
        </div>
      </div>
    </footer>
  );
}
