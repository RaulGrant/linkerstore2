import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()
    
    // Authenticate with Supabase
    const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
      email,
      password
    })

    if (authError) {
      return NextResponse.json({ 
        success: false, 
        error: authError.message 
      }, { status: 401 })
    }

    if (!authData.user || !authData.session) {
      return NextResponse.json({ 
        success: false, 
        error: 'Invalid credentials' 
      }, { status: 401 })
    }
    
    const requestUrl = new URL(request.url)
    const domain = requestUrl.hostname
    const isProduction = domain.includes('vercel.app') || domain.includes('linkerpro.com')

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

    const cookieOptions = {
      httpOnly: true,
      secure: isProduction,
      sameSite: isProduction ? 'none' as const : 'lax' as const,
      path: '/',
      maxAge: 60 * 60 * 24 * 7 // 7 days
    }

    // Set access/refresh token cookies
    response.cookies.set('sb-access-token', authData.session.access_token, cookieOptions)
    response.cookies.set('sb-refresh-token', authData.session.refresh_token, cookieOptions)
    response.cookies.set('sb-user-session', JSON.stringify({
      user_id: authData.user.id,
      email: authData.user.email,
      expires_at: authData.session.expires_at
    }), cookieOptions)

    response.headers.set('X-Set-Cookie-Count', '3')
    response.headers.set('X-Domain', domain)
    response.headers.set('X-Secure', isProduction.toString())
    response.headers.set('X-SameSite', cookieOptions.sameSite)

    return response

  } catch (error) {
    return NextResponse.json({ 
      success: false, 
      error: error instanceof Error ? error.message : 'Login failed' 
    }, { status: 500 })
  }
}