'use client'

import { useEffect, Suspense } from 'react'
import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import { getStoredToken } from '@/lib/auth-hybrid'

function LoginRedirectHandlerContent() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return

    // Check if we're on a protected route
    const protectedRoutes = ['/dashboard', '/profile', '/projects', '/proposals', '/map-empresas', '/map-freelancers']
    const isProtectedRoute = protectedRoutes.some(route => pathname.startsWith(route))

    if (isProtectedRoute) {
      const token = getStoredToken()
      const hasTokenInUrl = searchParams.has('token')
      
      console.log('🔄 LoginRedirectHandler:', {
        pathname,
        hasStoredToken: !!token,
        hasTokenInUrl,
        tokenPreview: token ? token.substring(0, 20) + '...' : null
      })
      
      // If we have a stored token but no token in URL, add it
      if (token && !hasTokenInUrl) {
        const url = new URL(window.location.href)
        url.searchParams.set('token', token)
        
        console.log('🔄 Adding token to URL:', url.toString())
        
        // Use window.location.replace to avoid adding to history
        window.location.replace(url.toString())
        return
      }
    }
  }, [pathname, searchParams, router])

  return null
}

export function LoginRedirectHandler() {
  return (
    <Suspense fallback={null}>
      <LoginRedirectHandlerContent />
    </Suspense>
  )
}
