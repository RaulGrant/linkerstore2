'use client'

import { useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { getStoredToken } from '@/lib/auth-hybrid'

export function AuthTokenProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    // Add token to initial request if we have one and we're on a protected route
    const token = getStoredToken()
    if (token && pathname && isProtectedRoute(pathname)) {
      console.log('🔄 AuthTokenProvider: Adding token to protected route:', pathname)
      // Add token to URL if not already present
      const url = new URL(window.location.href)
      if (!url.searchParams.has('token')) {
        url.searchParams.set('token', token)
        console.log('🔄 AuthTokenProvider: Token added to URL')
        window.history.replaceState({}, '', url.toString())
      }
    }

    // Intercept fetch requests to add auth token
    const originalFetch = window.fetch
    
    window.fetch = async (input: RequestInfo | URL, init?: RequestInit) => {
      const token = getStoredToken()
      
      if (token) {
        const headers = new Headers(init?.headers)
        headers.set('x-sb-access-token', token)
        
        const newInit = {
          ...init,
          headers,
        }
        
        console.log('🔄 AuthTokenProvider: Adding token to fetch request')
        return originalFetch(input, newInit)
      }
      
      return originalFetch(input, init)
    }

    // Intercept router navigation
    const originalPush = router.push
    router.push = (href: string, options?: any) => {
      const token = getStoredToken()
      if (token && isProtectedRoute(href)) {
        const url = new URL(href, window.location.origin)
        if (!url.searchParams.has('token')) {
          url.searchParams.set('token', token)
          console.log('🔄 AuthTokenProvider: Token added to router navigation')
        }
        return originalPush(url.toString(), options)
      }
      return originalPush(href, options)
    }
    
    // Cleanup
    return () => {
      window.fetch = originalFetch
    }
  }, [router, pathname])
  
  return <>{children}</>
}

// Helper function to check if a route is protected
function isProtectedRoute(path: string): boolean {
  const protectedRoutes = [
    '/dashboard',
    '/profile',
    '/projects',
    '/proposals',
    '/map-empresas',
    '/map-freelancers',
  ]
  return protectedRoutes.some(route => path.startsWith(route))
}

// Hook to navigate with token
export function useAuthNavigation() {
  const router = useRouter()
  
  const navigate = (url: string) => {
    const token = getStoredToken()
    if (token && isProtectedRoute(url)) {
      const urlWithToken = new URL(url, window.location.origin)
      urlWithToken.searchParams.set('token', token)
      router.push(urlWithToken.toString())
    } else {
      router.push(url)
    }
  }
  
  return { navigate }
}
