'use client'

import { useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { getStoredToken } from '@/lib/auth-hybrid'

export function TokenNavigationHandler() {
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return

    const token = getStoredToken()
    
    // If we have a token and we're on a protected route, add it to URL
    if (token && isProtectedRoute(pathname)) {
      const url = new URL(window.location.href)
      
      // Only add token if not already present
      if (!url.searchParams.has('token')) {
        url.searchParams.set('token', token)
        
        // Use router.replace to avoid adding to history
        router.replace(url.toString())
      }
    }
  }, [pathname, router])

  return null
}

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
