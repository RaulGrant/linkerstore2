import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import Navigation from '@/components/navigation'
import ConditionalFooter from '@/components/ConditionalFooter'
import CookieConsent from '@/components/cookies/CookieConsent'
import MetaPixel from '@/components/MetaPixel'
// import ChunkErrorProvider from '@/components/ChunkErrorProvider'

export const metadata: Metadata = {
  title: 'LinkerStore - Tu Tienda de Equipos Industriales y Seguridad | EPP y Herramientas',
  description: 'LinkerStore es tu tienda especializada en equipos industriales, herramientas profesionales y equipos de protección personal. Encuentra los mejores productos con guías expertas y reseñas detalladas.',
  generator: 'v0.dev',
  keywords: 'LinkerStore, equipos industriales, herramientas profesionales, EPP, seguridad industrial, tienda online, equipos protección personal, blog seguridad',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-405TQL3C9G"
          strategy="afterInteractive"
        />
      </head>
      <body>
        <Navigation />
        {children}
        <ConditionalFooter />
        <CookieConsent />
        <MetaPixel />
      </body>
    </html>
  )
}
