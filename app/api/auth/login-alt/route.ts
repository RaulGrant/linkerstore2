import { NextRequest, NextResponse } from 'next/server'
import { createServerClient } from '@supabase/ssr'

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()
    
    console.log('🔐 Alternative login API attempt for:', email)
    
    // Crear respuesta inicial
    let response = NextResponse.json({ success: true })
    
    // Intentar configuración de cookies alternativa para Vercel
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          get(name: string) {
            return request.cookies.get(name)?.value
          },
          set(name: string, value: string, options: any) {
            console.log(`🍪 Alt: Setting cookie: ${name}`)
            
            const isProduction = process.env.NODE_ENV === 'production'
            
            // Configuración alternativa para Vercel
            const cookieOptions = {
              name,
              value,
              ...options,
              // Intentar sin httpOnly para test
              httpOnly: false,  // TEMPORAL: para test
              secure: isProduction,
              sameSite: 'lax' as const,
              path: '/',
              // Sin dominio para maximizar compatibilidad
            }
            
            console.log(`🍪 Alt cookie options for ${name}:`, cookieOptions)
            
            response.cookies.set(cookieOptions)
            
            // También establecer en header manualmente
            const cookieString = `${name}=${value}; Path=/; SameSite=Lax${isProduction ? '; Secure' : ''}`
            
            const existingCookies = response.headers.get('Set-Cookie')
            if (existingCookies) {
              response.headers.set('Set-Cookie', `${existingCookies}, ${cookieString}`)
            } else {
              response.headers.set('Set-Cookie', cookieString)
            }
            
            console.log(`🍪 Alt cookie header: ${cookieString}`)
          },
          remove(name: string, options: any) {
            console.log(`🍪 Alt: Removing cookie: ${name}`)
            
            const cookieOptions = {
              name,
              value: '',
              ...options,
              httpOnly: false,
              secure: process.env.NODE_ENV === 'production',
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

    console.log('🔑 Alt: Attempting sign in with Supabase...')
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    })

    if (error) {
      console.error('❌ Alt: Login error:', error)
      return NextResponse.json({ error: error.message }, { status: 400 })
    }

    if (!data.user || !data.session) {
      console.error('❌ Alt: Login successful but no user or session returned')
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
    }

    console.log('✅ Alt: Login successful for user:', data.user.email)
    console.log('🔑 Alt: Session created with ID:', data.session.access_token.substring(0, 20) + '...')
    
    // Verificar que la sesión se puede obtener inmediatamente
    const { data: sessionData, error: sessionError } = await supabase.auth.getSession()
    console.log('🔍 Alt: Immediate session verification:', !!sessionData?.session)
    
    if (sessionError) {
      console.error('❌ Alt: Session verification error:', sessionError)
    }

    // Preparar respuesta con información detallada
    const responseData = {
      success: true,
      method: 'alternative',
      user: {
        id: data.user.id,
        email: data.user.email,
        created_at: data.user.created_at
      },
      session: {
        access_token: data.session.access_token.substring(0, 20) + '...',
        expires_at: data.session.expires_at,
        created_at: new Date().toISOString()
      },
      verification: {
        sessionVerified: !!sessionData?.session,
        cookiesSet: true,
        httpOnlyDisabled: true,
        timestamp: new Date().toISOString()
      }
    }

    // Actualizar la respuesta con los datos finales
    response = NextResponse.json(responseData)

    // Headers adicionales para Vercel
    response.headers.set('Cache-Control', 'no-cache, no-store, must-revalidate, private')
    response.headers.set('Pragma', 'no-cache')
    response.headers.set('Expires', '0')
    
    console.log('🍪 Alt: Response prepared with alternative cookie strategy')
    console.log('✅ Alt: Login API completed successfully')
    
    return response
    
  } catch (error) {
    console.error('❌ Alt: Login unexpected error:', error)
    return NextResponse.json({ 
      error: 'Internal server error',
      details: error instanceof Error ? error.message : 'Unknown error',
      timestamp: new Date().toISOString()
    }, { status: 500 })
  }
}
