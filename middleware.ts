import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'
import { validateTokenDirectly, validateTokenSimple, validateTokenJWT } from '@/lib/auth-hybrid'

// Rutas que requieren autenticación
const protectedRoutes = [
  '/dashboard',
  '/profile',
  '/projects',
  '/proposals',
  '/map-empresas',
  '/map-freelancers',
  // '/admin' // Comentado temporalmente durante transformación a blog
]

// Rutas solo para visitantes (no autenticados)
const publicOnlyRoutes = ['/login', '/register']

// Rutas públicas que no requieren autenticación
const publicRoutes = ['/login-success']

// Rutas admin que no requieren autenticación (temporalmente durante transformación)
const adminRoutes = ['/admin', '/admin/analytics', '/admin/images', '/admin/products', '/admin/users', '/admin/login']

// Rutas de debug que no requieren autenticación (solo para desarrollo)
const debugRoutes = process.env.NODE_ENV === 'development' ? [
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
  '/login-comparison',
  '/auth-diagnostic'
] : []

export async function middleware(request: NextRequest) {
  try {
    const pathname = request.nextUrl.pathname
    console.log(`🔍 [${new Date().toISOString()}] Middleware executing for: ${pathname}`)
    
    // Log URL parameters for debugging
    const urlParams = request.nextUrl.searchParams
    const tokenParam = urlParams.get('token')
    console.log(`🔍 URL token parameter: ${tokenParam ? tokenParam.substring(0, 20) + '...' : 'none'}`)
    
    // Permitir rutas de admin sin autenticación (temporalmente durante transformación)
    if (adminRoutes.some(route => pathname.startsWith(route))) {
      console.log('🔧 Admin route detected, allowing access during blog transformation')
      return NextResponse.next()
    }
    
    // Permitir rutas de debug sin autenticación
    if (debugRoutes.some(route => pathname.startsWith(route))) {
      console.log('🚀 Debug route detected, allowing access')
      return NextResponse.next()
    }
    
    // Permitir rutas públicas sin autenticación
    if (publicRoutes.some(route => pathname.startsWith(route))) {
      console.log('🌐 Public route detected, allowing access')
      return NextResponse.next()
    }

    let response = NextResponse.next({
      request: {
        headers: request.headers,
      },
    })

    // HYBRID SOLUTION: Try to get token from localStorage via header
    let session = null
    let user = null
    
    // First, try standard Supabase session
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          get(name: string) {
            const value = request.cookies.get(name)?.value
            console.log(`🍪 Getting cookie ${name}:`, value ? value.substring(0, 20) + '...' : 'undefined')
            return value
          },
          set(name: string, value: string, options: CookieOptions) {
            console.log(`🍪 Setting cookie ${name}:`, value.substring(0, 20) + '...')
            const isProduction = process.env.NODE_ENV === 'production'
            
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
            const isProduction = process.env.NODE_ENV === 'production'
            
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

    console.log('🔐 Checking standard session...')
    console.log('🍪 Available cookies:', Object.fromEntries(request.cookies.getAll().map(c => [c.name, c.value.substring(0, 20) + '...'])))
    
    // Check specifically for Supabase cookies
    const supabaseCookies = request.cookies.getAll().filter(c => c.name.includes('sb-'))
    console.log('🍪 Supabase cookies:', supabaseCookies.map(c => c.name))
    
    const { data: { session: standardSession }, error } = await supabase.auth.getSession()
    
    if (error) {
      console.error('❌ Standard session error:', error)
    }

    if (standardSession) {
      console.log('✅ Standard session found')
      session = standardSession
      user = standardSession.user
    } else {
      console.log('❌ No standard session, trying hybrid solution...')
      
      // Try to get token from custom header (client will send it)
      const authHeader = request.headers.get('x-sb-access-token')
      const tokenFromQuery = request.nextUrl.searchParams.get('token')
      const token = authHeader || tokenFromQuery
      
      console.log('🔑 Hybrid solution check:', {
        hasAuthHeader: !!authHeader,
        hasTokenFromQuery: !!tokenFromQuery,
        tokenPreview: token ? token.substring(0, 20) + '...' : null
      })
      
      if (token) {
        console.log('🔑 Token found in header/query, validating...')
        console.log('🔑 Token preview:', token.substring(0, 30) + '...')
        
        let tokenValidation: any = { valid: false }
        
        try {
          // Method 1: Try service role validation first
          tokenValidation = await validateTokenDirectly(token)
          console.log('🔑 Service role validation result:', {
            valid: tokenValidation.valid,
            error: tokenValidation.error,
            hasUser: !!tokenValidation.user
          })
          
          // Method 2: If service role fails, try simple validation
          if (!tokenValidation.valid) {
            console.log('🔑 Service role validation failed, trying simple validation...')
            tokenValidation = await validateTokenSimple(token)
            console.log('🔑 Simple validation result:', {
              valid: tokenValidation.valid,
              error: tokenValidation.error,
              hasUser: !!tokenValidation.user
            })
          }
          
          // Method 3: If both fail, try JWT parsing (fallback)
          if (!tokenValidation.valid) {
            console.log('🔑 Simple validation failed, trying JWT parsing...')
            tokenValidation = validateTokenJWT(token)
            console.log('🔑 JWT validation result:', {
              valid: tokenValidation.valid,
              error: tokenValidation.error,
              hasUser: !!tokenValidation.user
            })
          }
          
          if (tokenValidation.valid && tokenValidation.user) {
            console.log('✅ Token validation successful (at least one method worked)')
            console.log('👤 Validated user:', tokenValidation.user.id)
            user = tokenValidation.user
            session = { user: tokenValidation.user }
          } else {
            console.log('❌ All validation methods failed:', tokenValidation.error)
          }
        } catch (validationError) {
          console.error('❌ Token validation exception:', validationError)
        }
      } else {
        console.log('❌ No token found in header or query')
      }
    }

    console.log('🔐 Final session status:', !!session)
    if (session && user) {
      console.log('👤 User ID:', user.id)
      console.log('👤 User email:', user.email)
    }

    // Redirigir usuarios autenticados fuera de rutas públicas solo si vienen de ciertos paths
    if (session && user && publicOnlyRoutes.some(route => pathname.startsWith(route))) {
      // Verifica que el usuario realmente existe en la tabla de perfiles
      const { data: profile } = await supabase
        .from('profiles')
        .select('user_type')
        .eq('id', user.id)
        .single();

      if (!profile) {
        // Si no hay perfil, limpiar cookies y redirigir a login
        response.cookies.delete('sb-access-token');
        response.cookies.delete('sb-refresh-token');
        return NextResponse.redirect(new URL('/login', request.url));
      }

      // Solo redirigir si NO hay un parámetro de redirect o si es una navegación directa
      const redirectTo = request.nextUrl.searchParams.get('redirectTo');
      if (!redirectTo) {
        return NextResponse.redirect(new URL('/dashboard', request.url));
      }
    }

    // Redirigir usuarios no autenticados fuera de rutas protegidas
    if (!session && protectedRoutes.some(route => pathname.startsWith(route))) {
      console.log('🔄 Redirecting unauthenticated user from protected route to login')
      console.log('🔄 Request details:', {
        pathname,
        hasSession: !!session,
        hasUser: !!user,
        hasToken: !!tokenParam,
        cookies: Object.keys(Object.fromEntries(request.cookies.getAll().map(c => [c.name, c.value])))
      })
      
      const redirectUrl = new URL('/login', request.url)
      redirectUrl.searchParams.set('redirectTo', pathname)
      redirectUrl.searchParams.set('reason', 'no-session')
      return NextResponse.redirect(redirectUrl)
    }

    // Verificar acceso a mapas específicos según tipo de usuario
    if (session && user && (pathname.startsWith('/map-empresas') || pathname.startsWith('/map-freelancers'))) {
      try {
        const { data: profile } = await supabase
          .from('profiles')
          .select('user_type')
          .eq('id', user.id)
          .single()

        if (profile) {
          // Freelancers solo pueden ver mapa de empresas
          if (profile.user_type === 'freelancer' && pathname.startsWith('/map-freelancers')) {
            console.log('🔄 Redirecting freelancer to empresas map')
            return NextResponse.redirect(new URL('/map-empresas', request.url))
          }
          // Empresas solo pueden ver mapa de freelancers
          if (profile.user_type === 'company' && pathname.startsWith('/map-empresas')) {
            console.log('🔄 Redirecting company to freelancers map')
            return NextResponse.redirect(new URL('/map-freelancers', request.url))
          }
        }
      } catch (error) {
        console.error('❌ Error checking user type:', error)
      }
    }

    console.log('✅ Middleware passed, continuing to route')
    return response
  } catch (e) {
    console.error('❌ Auth middleware error:', e)
    return NextResponse.redirect(new URL('/login', request.url))
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for:
     * - api/webhooks routes (webhook endpoints)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (assets)
     */
    '/((?!api/webhooks|_next/static|_next/image|favicon.ico|public/.*|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}
