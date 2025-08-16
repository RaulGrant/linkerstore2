import { NextRequest, NextResponse } from 'next/server'
import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()
    
    console.log('🔐 Login attempt for:', email)
    
    const cookieStore = await cookies()
    const requestUrl = new URL(request.url)
    
    // Create Supabase client with SSR for login
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
            } catch (error) {
              console.warn('Could not set cookie:', name, error)
            }
          },
          remove(name: string, options: any) {
            try {
              cookieStore.delete({ name, ...options })
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
      return NextResponse.json({ 
        success: false, 
        error: authError.message 
      }, { status: 401 })
    }

    if (!authData.user || !authData.session) {
      console.error('❌ No user or session returned')
      return NextResponse.json({ 
        success: false, 
        error: 'Invalid credentials' 
      }, { status: 401 })
    }

    console.log('✅ Authentication successful')
    
    // Get the domain info
    const domain = requestUrl.hostname
    const isProduction = domain.includes('vercel.app') || domain.includes('linkerpro.com')
    
    console.log('🌐 Domain info:', { domain, isProduction })

    // The SSR client should have automatically set the cookies
    // Let's verify by checking if they were set
    const allCookies = cookieStore.getAll()
    console.log('🍪 Cookies after login:', allCookies.map(c => c.name))

    // Create success response
    const response = NextResponse.json({
      success: true,
      message: 'Login successful',
      user: {
        id: authData.user.id,
        email: authData.user.email
      },
      verification: {
        sessionVerified: true,
        cookiesSet: allCookies.length > 0,
        timestamp: new Date().toISOString()
      },
      cookieInfo: {
        totalCookies: allCookies.length,
        cookieNames: allCookies.map(c => c.name)
      }
    })

    // Add debug headers
    response.headers.set('X-Set-Cookie-Count', allCookies.length.toString())
    response.headers.set('X-Domain', domain)
    response.headers.set('X-Secure', isProduction.toString())
    response.headers.set('X-Session-ID', authData.session.access_token.substring(0, 20) + '...')
    
    console.log('✅ Login completed successfully')
    
    return response

  } catch (error) {
    console.error('❌ Login error:', error)
    return NextResponse.json({ 
      success: false, 
      error: error instanceof Error ? error.message : 'Login failed' 
    }, { status: 500 })
  }
}
