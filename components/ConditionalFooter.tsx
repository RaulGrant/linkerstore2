'use client';

import { usePathname } from 'next/navigation';
import { Footer } from '@/components/footer';

export default function ConditionalFooter() {
  const pathname = usePathname();
  
  // No mostrar el footer general en páginas del blog que ya tienen BlogFooter
  const blogPages = ['/blog', '/guias', '/sobre-nosotros', '/legal', '/contacto', '/servicios', '/ayuda', '/cenacap'];
  const isBlogPage = blogPages.some(page => pathname.startsWith(page));
  
  if (isBlogPage) {
    return null;
  }
  
  return <Footer />;
}
