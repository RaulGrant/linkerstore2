import { NextRequest, NextResponse } from 'next/server'
import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

export async function GET(request: NextRequest) {
  try {
    const cookieStore = await cookies()
    const requestUrl = new URL(request.url)
    
    // Create Supabase client with SSR
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          get(name: string) {
            return cookieStore.get(name)?.value
          },
          set(name: string, value: string, options: any) {
            cookieStore.set({ name, value, ...options })
          },
          remove(name: string, options: any) {
            cookieStore.delete({ name, ...options })
          }
        }
      }
    )
    
    // Get all cookies from multiple sources
    const allCookies = {
      fromHeader: request.headers.get('cookie') || '',
      fromCookieStore: cookieStore.getAll()
    }

    console.log('🔍 Session check - All cookies:', allCookies)

    // Try to get session from multiple cookie sources
    let accessToken = null
    let refreshToken = null
    let userSession = null

    // Strategy 1: Try NextResponse cookies
    accessToken = cookieStore.get('sb-access-token')?.value
    refreshToken = cookieStore.get('sb-refresh-token')?.value
    userSession = cookieStore.get('sb-user-session')?.value

    // Strategy 2: Try alternative cookies
    if (!accessToken) {
      accessToken = cookieStore.get('sb-access-token-alt')?.value
      refreshToken = cookieStore.get('sb-refresh-token-alt')?.value
    }

    // Strategy 3: Manual cookie parsing
    if (!accessToken && allCookies.fromHeader) {
      const cookieHeader = allCookies.fromHeader
      const accessMatch = cookieHeader.match(/sb-access-token=([^;]+)/)
      const refreshMatch = cookieHeader.match(/sb-refresh-token=([^;]+)/)
      
      if (accessMatch) accessToken = accessMatch[1]
      if (refreshMatch) refreshToken = refreshMatch[1]
    }

    console.log('🔍 Tokens found:', { 
      hasAccess: !!accessToken, 
      hasRefresh: !!refreshToken,
      hasUserSession: !!userSession
    })

    if (!accessToken) {
      return NextResponse.json({
        success: false,
        error: 'No session found',
        cookieCount: cookieStore.getAll().length,
        cookieNames: cookieStore.getAll().map(c => c.name),
        debug: {
          allCookies: cookieStore.getAll().length,
          timestamp: new Date().toISOString(),
          host: requestUrl.hostname,
          message: 'No access token found in any cookie source',
          cookieHeader: request.headers.get('cookie')?.slice(0, 100) + '...'
        }
      }, { status: 401 })
    }

    // Verify session with Supabase
    const { data: userData, error: userError } = await supabase.auth.getUser(accessToken)

    if (userError || !userData.user) {
      console.error('❌ Session verification failed:', userError)
      
      // If we have a refresh token, try to refresh
      if (refreshToken) {
        console.log('🔄 Attempting to refresh session...')
        const { data: refreshData, error: refreshError } = await supabase.auth.refreshSession({
          refresh_token: refreshToken
        })

        if (refreshError || !refreshData.session) {
          console.error('❌ Refresh failed:', refreshError)
          return NextResponse.json({
            success: false,
            error: 'Session expired and refresh failed',
            cookieCount: cookieStore.getAll().length,
            cookieNames: cookieStore.getAll().map(c => c.name),
            debug: {
              allCookies: cookieStore.getAll().length,
              timestamp: new Date().toISOString(),
              host: requestUrl.hostname,
              message: 'Session expired and refresh failed',
              refreshError: refreshError?.message
            }
          }, { status: 401 })
        }

        // Update cookies with refreshed session
        const response = NextResponse.json({
          success: true,
          session: {
            user: refreshData.user,
            expires_at: refreshData.session.expires_at
          },
          refreshed: true,
          cookieCount: cookieStore.getAll().length,
          cookieNames: cookieStore.getAll().map(c => c.name),
          debug: {
            allCookies: cookieStore.getAll().length,
            timestamp: new Date().toISOString(),
            host: requestUrl.hostname,
            message: 'Session refreshed successfully'
          }
        })

        // Set new cookies
        const domain = requestUrl.hostname
        const isProduction = domain.includes('vercel.app') || domain.includes('linkerpro.com')
        
        const cookieOptions = {
          httpOnly: true,
          secure: isProduction,
          sameSite: isProduction ? 'none' as const : 'lax' as const,
          path: '/',
          maxAge: 60 * 60 * 24 * 7
        }

        response.cookies.set('sb-access-token', refreshData.session.access_token, cookieOptions)
        response.cookies.set('sb-refresh-token', refreshData.session.refresh_token, cookieOptions)
        response.cookies.set('sb-user-session', JSON.stringify({
          user_id: refreshData.user.id,
          email: refreshData.user.email,
          expires_at: refreshData.session.expires_at
        }), cookieOptions)

        return response
      }

      return NextResponse.json({
        success: false,
        error: 'Invalid session',
        cookieCount: cookieStore.getAll().length,
        cookieNames: cookieStore.getAll().map(c => c.name),
        debug: {
          allCookies: cookieStore.getAll().length,
          timestamp: new Date().toISOString(),
          host: requestUrl.hostname,
          message: 'Session token invalid and no refresh token',
          userError: userError?.message
        }
      }, { status: 401 })
    }

    // Session is valid
    console.log('✅ Session verified for user:', userData.user.email)

    return NextResponse.json({
      success: true,
      session: {
        user: userData.user,
        expires_at: null // We don't have this from getUser
      },
      cookieCount: cookieStore.getAll().length,
      cookieNames: cookieStore.getAll().map(c => c.name),
      debug: {
        allCookies: cookieStore.getAll().length,
        timestamp: new Date().toISOString(),
        host: requestUrl.hostname,
        message: 'Session verified successfully'
      }
    })

  } catch (error) {
    console.error('❌ Session check error:', error)
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Session check failed',
      cookieCount: 0,
      cookieNames: [],
      debug: {
        allCookies: 0,
        timestamp: new Date().toISOString(),
        host: 'unknown',
        message: 'Session check threw an error',
        errorMessage: error instanceof Error ? error.message : 'Unknown error'
      }
    }, { status: 500 })
  }
}
