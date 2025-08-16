import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { cookies } from 'next/headers'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()
    
    console.log('🔐 Login attempt for:', email)
    
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
    
    // Get the request URL for proper domain handling
    const requestUrl = new URL(request.url)
    const domain = requestUrl.hostname
    const isProduction = domain.includes('vercel.app') || domain.includes('linkerpro.com')
    
    console.log('🌐 Domain info:', { domain, isProduction })

    // Create response
    const response = NextResponse.json({
      success: true,
      message: 'Login successful',
      user: {
        id: authData.user.id,
        email: authData.user.email
      },
      verification: {
        sessionVerified: true,
        cookiesSet: true,
        timestamp: new Date().toISOString()
      }
    })

    // Strategy 1: Set cookies with multiple approaches
    const cookieOptions = {
      httpOnly: true,
      secure: isProduction,
      sameSite: isProduction ? 'none' as const : 'lax' as const,
      path: '/',
      maxAge: 60 * 60 * 24 * 7 // 7 days
    }

    // Set access token cookie
    response.cookies.set('sb-access-token', authData.session.access_token, cookieOptions)
    
    // Set refresh token cookie
    response.cookies.set('sb-refresh-token', authData.session.refresh_token, cookieOptions)

    // Strategy 2: Set session cookie with user info
    response.cookies.set('sb-user-session', JSON.stringify({
      user_id: authData.user.id,
      email: authData.user.email,
      expires_at: authData.session.expires_at
    }), cookieOptions)

    // Strategy 3: Set additional headers for debugging
    response.headers.set('X-Set-Cookie-Count', '3')
    response.headers.set('X-Domain', domain)
    response.headers.set('X-Secure', isProduction.toString())
    response.headers.set('X-SameSite', cookieOptions.sameSite)

    // Strategy 4: Also set via the cookies() API
    const cookieStore = await cookies()
    cookieStore.set('sb-access-token-alt', authData.session.access_token, cookieOptions)
    cookieStore.set('sb-refresh-token-alt', authData.session.refresh_token, cookieOptions)

    console.log('🍪 Cookies set with options:', cookieOptions)
    
    return response

  } catch (error) {
    console.error('❌ Login error:', error)
    return NextResponse.json({ 
      success: false, 
      error: error instanceof Error ? error.message : 'Login failed' 
    }, { status: 500 })
  }
}
