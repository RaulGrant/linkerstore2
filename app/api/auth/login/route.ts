import { NextRequest, NextResponse } from 'next/server'
import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()
    
    console.log('🔐 Login attempt for:', email)
    
    const cookieStore = await cookies()
    
    // Create response object to handle cookies properly
    const response = NextResponse.json({ success: false })
    
    // Create Supabase client with proper cookie handling
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          get(name: string) {
            return cookieStore.get(name)?.value
          },
          set(name: string, value: string, options: any) {
            try {
              cookieStore.set({ name, value, ...options })
              response.cookies.set({ name, value, ...options })
            } catch (error) {
              console.warn('Could not set cookie:', name, error)
            }
          },
          remove(name: string, options: any) {
            try {
              cookieStore.delete({ name, ...options })
              response.cookies.delete({ name, ...options })
            } catch (error) {
              console.warn('Could not remove cookie:', name, error)
            }
          }
        }
      }
    )
    
    // Authenticate with Supabase
    const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
      email,
      password
    })

    if (authError) {
      console.error('❌ Auth error:', authError)
      
      // Handle specific auth errors
      let errorMessage = authError.message
      if (authError.message.includes('Invalid login credentials')) {
        errorMessage = 'Email o contraseña incorrectos'
      } else if (authError.message.includes('Email not confirmed')) {
        errorMessage = 'Por favor confirma tu email antes de iniciar sesión'
      } else if (authError.message.includes('Too many requests')) {
        errorMessage = 'Demasiados intentos. Espera unos minutos'
      }
      
      return NextResponse.json({ 
        success: false, 
        error: errorMessage 
      }, { status: 401 })
    }

    if (!authData.user || !authData.session) {
      console.error('❌ No user or session returned')
      return NextResponse.json({ 
        success: false, 
        error: 'No se pudo crear la sesión' 
      }, { status: 401 })
    }

    console.log('✅ Authentication successful for:', authData.user.email)
    console.log('🍪 Session created:', {
      sessionId: authData.session.access_token.substring(0, 20) + '...',
      expiresAt: authData.session.expires_at,
      refreshToken: authData.session.refresh_token ? 'present' : 'missing'
    })
    
    // Update the response with success data
    return NextResponse.json({
      success: true,
      message: 'Login successful',
      user: {
        id: authData.user.id,
        email: authData.user.email,
        email_confirmed_at: authData.user.email_confirmed_at
      },
      session: {
        access_token: authData.session.access_token,
        expires_at: authData.session.expires_at
      }
    }, {
      status: 200,
      headers: response.headers
    })

  } catch (error) {
    console.error('❌ Login error:', error)
    return NextResponse.json({ 
      success: false, 
      error: error instanceof Error ? error.message : 'Error interno del servidor' 
    }, { status: 500 })
  }
}
