import type { Metadata } from 'next'
import Script from 'next/script'
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
      <head>
        {/* Meta Pixel Script */}
        <Script
          id="meta-pixel"
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
              fbq('track', 'PageView');
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
      </body>
    </html>
  )
}
