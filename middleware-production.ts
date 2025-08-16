import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'
import { validateTokenProduction } from '@/lib/auth-hybrid-production'

// Production configuration
const isProduction = process.env.NODE_ENV === 'production'

// Enhanced logging for production
const log = (message: string, data?: any) => {
  if (!isProduction) {
    console.log(message, data)
  }
  // In production, you might want to send to a logging service
}

const logError = (message: string, error?: any) => {
  if (!isProduction) {
    console.error(message, error)
  }
  // In production, send errors to monitoring service
}

// Rutas que requieren autenticación
const protectedRoutes = [
  '/dashboard',
  '/profile',
  '/projects',
  '/proposals',
  '/map-empresas',
  '/map-freelancers',
]

// Rutas solo para visitantes (no autenticados)
const publicOnlyRoutes = ['/login', '/register']

// Rutas públicas que no requieren autenticación
const publicRoutes = ['/login-success', '/']

// Rutas de debug (solo para desarrollo)
const debugRoutes = !isProduction ? [
  '/debug-cookies', 
  '/debug-auth', 
  '/session-test', 
  '/cookie-test', 
  '/hybrid-debug',
  '/dashboard-test',
  '/profile-test',
  '/login-test',
  '/login-flow-test',
  '/dashboard-direct-test',
  '/dashboard-auth-test',
  '/login-nav-test',
  '/login-comparison'
] : []

// Rate limiting for production (simple implementation)
const requestCounts = new Map<string, { count: number; resetTime: number }>()

function isRateLimited(ip: string): boolean {
  if (!isProduction) return false // No rate limiting in development
  
  const now = Date.now()
  const windowMs = 60 * 1000 // 1 minute
  const maxRequests = 100 // 100 requests per minute per IP
  
  const current = requestCounts.get(ip) || { count: 0, resetTime: now + windowMs }
  
  if (now > current.resetTime) {
    current.count = 1
    current.resetTime = now + windowMs
  } else {
    current.count++
  }
  
  requestCounts.set(ip, current)
  
  return current.count > maxRequests
}

export async function middleware(request: NextRequest) {
  const startTime = Date.now()
  
  try {
    const pathname = request.nextUrl.pathname
    const ip = request.ip || request.headers.get('x-forwarded-for') || 'unknown'
    
    log(`🔍 [${new Date().toISOString()}] Middleware executing for: ${pathname}`)
    
    // Rate limiting check
    if (isRateLimited(ip)) {
      log(`🚫 Rate limit exceeded for IP: ${ip}`)
      return new NextResponse('Too Many Requests', { status: 429 })
    }
    
    // Skip middleware for static files and API routes
    if (pathname.startsWith('/_next/') || 
        pathname.startsWith('/api/') || 
        pathname.includes('.')) {
      return NextResponse.next()
    }
    
    // Log URL parameters for debugging (only in development)
    if (!isProduction) {
      const urlParams = request.nextUrl.searchParams
      const tokenParam = urlParams.get('token')
      log(`🔍 URL token parameter: ${tokenParam ? tokenParam.substring(0, 20) + '...' : 'none'}`)
    }
    
    // Permitir rutas de debug sin autenticación (solo desarrollo)
    if (debugRoutes.length > 0 && debugRoutes.some(route => pathname.startsWith(route))) {
      log('🚀 Debug route detected, allowing access')
      return NextResponse.next()
    }
    
    // Permitir rutas públicas sin autenticación
    if (publicRoutes.some(route => pathname === route || pathname.startsWith(route))) {
      log('🌐 Public route detected, allowing access')
      return NextResponse.next()
    }

    let response = NextResponse.next({
      request: {
        headers: request.headers,
      },
    })

    // HYBRID SOLUTION: Try to get token from multiple sources
    let session = null
    let user = null
    let authMethod = 'none'
    
    // Create Supabase client
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          get(name: string) {
            const value = request.cookies.get(name)?.value
            if (!isProduction) {
              log(`🍪 Getting cookie ${name}:`, value ? value.substring(0, 20) + '...' : 'undefined')
            }
            return value
          },
          set(name: string, value: string, options: CookieOptions) {
            if (!isProduction) {
              log(`🍪 Setting cookie ${name}:`, value.substring(0, 20) + '...')
            }
            
            const cookieOptions = {
              name,
              value,
              ...options,
              httpOnly: true,
              secure: isProduction,
              sameSite: 'lax' as const,
              path: '/',
            }
            response.cookies.set(cookieOptions)
          },
          remove(name: string, options: CookieOptions) {
            const cookieOptions = {
              name,
              value: '',
              ...options,
              httpOnly: true,
              secure: isProduction,
              sameSite: 'lax' as const,
              path: '/',
              maxAge: 0,
              expires: new Date(0)
            }
            response.cookies.set(cookieOptions)
          },
        },
      }
    )

    // First, try standard Supabase session
    log('🔐 Checking standard session...')
    
    const { data: { session: standardSession }, error } = await supabase.auth.getSession()
    
    if (error) {
      logError('❌ Standard session error:', error)
    }

    if (standardSession) {
      log('✅ Standard session found')
      session = standardSession
      user = standardSession.user
      authMethod = 'standard'
    } else {
      log('❌ No standard session, trying hybrid solution...')
      
      // Try to get token from header or query parameter
      const authHeader = request.headers.get('x-sb-access-token')
      const tokenFromQuery = request.nextUrl.searchParams.get('token')
      const token = authHeader || tokenFromQuery
      
      if (!isProduction) {
        log('🔑 Hybrid solution check:', {
          hasAuthHeader: !!authHeader,
          hasTokenFromQuery: !!tokenFromQuery,
          tokenPreview: token ? token.substring(0, 20) + '...' : null
        })
      }
      
      if (token) {
        log('🔑 Token found, validating...')
        
        const tokenValidation = await validateTokenProduction(token)
        
        if (tokenValidation.valid && tokenValidation.user) {
          log(`✅ Token validation successful (method: ${tokenValidation.method})`)
          user = tokenValidation.user
          session = { user: tokenValidation.user }
          authMethod = `hybrid-${tokenValidation.method}`
        } else {
          log('❌ Token validation failed:', tokenValidation.error)
        }
      } else {
        log('❌ No token found in header or query')
      }
    }

    // Log final auth status
    if (!isProduction) {
      log('🔐 Final auth status:', {
        hasSession: !!session,
        hasUser: !!user,
        method: authMethod,
        userId: user?.id
      })
    }

    // Handle authenticated users on public-only routes
    if (session && user && publicOnlyRoutes.some(route => pathname.startsWith(route))) {
      // Verify user exists in database (optional but recommended)
      try {
        const { data: profile } = await supabase
          .from('profiles')
          .select('user_type')
          .eq('id', user.id)
          .single()

        if (!profile) {
          log('❌ User not found in profiles table, clearing auth')
          response.cookies.delete('sb-access-token')
          response.cookies.delete('sb-refresh-token')
          return NextResponse.redirect(new URL('/login', request.url))
        }

        // Redirect to dashboard if no specific redirect target
        const redirectTo = request.nextUrl.searchParams.get('redirectTo')
        if (!redirectTo) {
          log('🔄 Redirecting authenticated user to dashboard')
          return NextResponse.redirect(new URL('/dashboard', request.url))
        }
      } catch (error) {
        logError('❌ Error checking user profile:', error)
      }
    }

    // Handle unauthenticated users on protected routes
    if (!session && protectedRoutes.some(route => pathname.startsWith(route))) {
      log('🔄 Redirecting unauthenticated user to login')
      
      const redirectUrl = new URL('/login', request.url)
      redirectUrl.searchParams.set('redirectTo', pathname)
      
      if (!isProduction) {
        redirectUrl.searchParams.set('reason', 'no-session')
      }
      
      return NextResponse.redirect(redirectUrl)
    }

    // User type-based route restrictions
    if (session && user && (pathname.startsWith('/map-empresas') || pathname.startsWith('/map-freelancers'))) {
      try {
        const { data: profile } = await supabase
          .from('profiles')
          .select('user_type')
          .eq('id', user.id)
          .single()

        if (profile) {
          // Freelancers -> empresas map, Companies -> freelancers map
          if (profile.user_type === 'freelancer' && pathname.startsWith('/map-freelancers')) {
            log('🔄 Redirecting freelancer to empresas map')
            return NextResponse.redirect(new URL('/map-empresas', request.url))
          }
          if (profile.user_type === 'company' && pathname.startsWith('/map-empresas')) {
            log('🔄 Redirecting company to freelancers map')
            return NextResponse.redirect(new URL('/map-freelancers', request.url))
          }
        }
      } catch (error) {
        logError('❌ Error checking user type for map access:', error)
      }
    }

    // Add performance headers in development
    if (!isProduction) {
      const processingTime = Date.now() - startTime
      response.headers.set('x-middleware-time', `${processingTime}ms`)
      response.headers.set('x-auth-method', authMethod)
    }

    log(`✅ Middleware completed (${Date.now() - startTime}ms)`)
    return response
    
  } catch (error) {
    logError('❌ Middleware error:', error)
    
    // In production, provide generic error page
    if (isProduction) {
      return NextResponse.redirect(new URL('/login?error=server', request.url))
    }
    
    return NextResponse.redirect(new URL('/login', request.url))
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for:
     * - api routes (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (public assets)
     * - file extensions
     */
    '/((?!api|_next/static|_next/image|favicon.ico|public/.*|.*\\.(?:svg|png|jpg|jpeg|gif|webp|js|css|woff|woff2|ttf|eot|ico|json|xml|txt)$).*)',
  ],
}
