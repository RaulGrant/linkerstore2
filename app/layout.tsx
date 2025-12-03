import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import Navigation from '@/components/navigation'
import ConditionalFooter from '@/components/ConditionalFooter'
import CookieConsent from '@/components/cookies/CookieConsent'
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
        
        {/* Meta Pixel Script - Conditional loading handled by CookieConsent */}
        <Script
          id="meta-pixel-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '2002160850545438');
            `,
          }}
        />
        {/* Meta Pixel NoScript Fallback */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=2002160850545438&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </head>
      <body>
        <Navigation />
        {children}
        <ConditionalFooter />
        <CookieConsent />
      </body>
    </html>
  )
}
