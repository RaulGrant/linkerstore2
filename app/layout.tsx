import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import Navigation from '@/components/navigation'
import ConditionalFooter from '@/components/ConditionalFooter'
import SchemaMarkup from '@/components/seo/SchemaMarkup'
import AnalyticsProvider from '@/components/analytics/AnalyticsProvider'

export const metadata: Metadata = {
  title: 'LinkerPro - Blog de Seguridad Industrial | Equipos de Protección Personal',
  description: 'Tu fuente confiable de información sobre seguridad industrial y EPP. Guías, reseñas y consejos de expertos para crear ambientes de trabajo más seguros.',
  generator: 'v0.dev',
  keywords: 'seguridad industrial, EPP, equipos protección personal, blog seguridad, guías seguridad laboral, LinkerPro',
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  authors: [{ name: 'LinkerPro Team' }],
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://linkerpro.com',
    title: 'LinkerPro - Blog de Seguridad Industrial',
    description: 'Tu fuente confiable de información sobre seguridad industrial y EPP.',
    siteName: 'LinkerPro',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LinkerPro - Blog de Seguridad Industrial',
    description: 'Tu fuente confiable de información sobre seguridad industrial y EPP.',
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        {/* Google Analytics 4 Script */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-405TQL3C9G"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-405TQL3C9G', {
                page_title: document.title,
                page_location: window.location.href,
                send_page_view: true
              });
            `,
          }}
        />
        
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
        {/* Schema Markup para Organization y WebSite */}
        <SchemaMarkup type="Organization" />
        <SchemaMarkup type="WebSite" />
        
        <AnalyticsProvider>
          <Navigation />
          {children}
          <ConditionalFooter />
        </AnalyticsProvider>
      </body>
    </html>
  )
}
