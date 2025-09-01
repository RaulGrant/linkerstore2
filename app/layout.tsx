import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/navigation'
import ConditionalFooter from '@/components/ConditionalFooter'

export const metadata: Metadata = {
  title: 'LinkerPro - Blog de Seguridad Industrial | Equipos de Protección Personal',
  description: 'Tu fuente confiable de información sobre seguridad industrial y EPP. Guías, reseñas y consejos de expertos para crear ambientes de trabajo más seguros.',
  generator: 'v0.dev',
  keywords: 'seguridad industrial, EPP, equipos protección personal, blog seguridad, guías seguridad laboral, LinkerPro',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body>
        <Navigation />
        {children}
        <ConditionalFooter />
      </body>
    </html>
  )
}
