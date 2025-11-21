import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog de Seguridad Industrial | LinkerStore',
  description: 'Guías completas, reseñas de productos y consejos de expertos en seguridad industrial y equipos de protección personal.',
  keywords: 'seguridad industrial, EPP, equipos protección personal, guías seguridad, reseñas productos',
  openGraph: {
    title: 'Blog de Seguridad Industrial | LinkerStore',
    description: 'Guías completas, reseñas de productos y consejos de expertos en seguridad industrial.',
    type: 'website',
    locale: 'es_ES',
  }
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}