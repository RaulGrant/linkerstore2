import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Guías de Seguridad Industrial | LinkerStore',
  description: 'Guías completas y detalladas sobre seguridad industrial, equipos de protección personal y normativas laborales.',
  keywords: 'guías seguridad industrial, manuales EPP, normativas seguridad, protocolos trabajo',
  openGraph: {
    title: 'Guías de Seguridad Industrial | LinkerStore',
    description: 'Guías completas y detalladas sobre seguridad industrial y equipos de protección personal.',
    type: 'website',
    locale: 'es_ES',
  }
}

export default function GuiasLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}