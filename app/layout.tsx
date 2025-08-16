import type { Metadata } from 'next'
import './globals.css'
import { AuthProvider } from '@/hooks/useAuth'
import { Toaster } from '@/components/ui/toaster'
import { AuthTokenProvider } from '@/components/auth/AuthTokenProvider'
import { LoginRedirectHandler } from '@/components/auth/LoginRedirectHandler'
import PromoBanner from '@/components/banners/PromoBanner'

export const metadata: Metadata = {
  title: 'LinkerPro - Próximamente | Conectando Talento Industrial',
  description: 'Próximamente: La plataforma más justa para unir talento industrial con empresas. Explora nuestra tienda de productos industriales verificados en Amazon.',
  generator: 'v0.dev',
  keywords: 'LinkerPro, talento industrial, productos industriales, EPP, herramientas, Amazon afiliados',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <AuthTokenProvider>
            <PromoBanner />
            <LoginRedirectHandler />
            {children}
            <Toaster />
          </AuthTokenProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
