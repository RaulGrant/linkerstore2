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
    
    // Get session using Supabase SSR client
    const { data: { session }, error: sessionError } = await supabase.auth.getSession()
    
    console.log('🔍 Session check result:', { 
      hasSession: !!session, 
      sessionError: sessionError?.message,
      cookieCount: cookieStore.getAll().length
    })
    
    if (sessionError) {
      console.error('❌ Session error:', sessionError)
      return NextResponse.json({
        success: false,
        error: sessionError.message,
        cookieCount: cookieStore.getAll().length,
        cookieNames: cookieStore.getAll().map(c => c.name),
        debug: {
          allCookies: cookieStore.getAll().length,
          timestamp: new Date().toISOString(),
          host: requestUrl.hostname,
          message: 'Session error from Supabase',
          sessionError: sessionError.message
        }
      }, { status: 401 })
    }
    
    if (!session) {
      // Try to get user directly if no session
      const { data: { user }, error: userError } = await supabase.auth.getUser()
      
      if (userError || !user) {
        console.log('❌ No session and no user found')
        return NextResponse.json({
          success: false,
          error: 'No session found',
          cookieCount: cookieStore.getAll().length,
          cookieNames: cookieStore.getAll().map(c => c.name),
          debug: {
            allCookies: cookieStore.getAll().length,
            timestamp: new Date().toISOString(),
            host: requestUrl.hostname,
            message: 'No session or user found',
            userError: userError?.message
          }
        }, { status: 401 })
      }
      
      // User found but no session - this is unusual
      console.log('⚠️ User found but no session')
      return NextResponse.json({
        success: true,
        session: {
          user: user,
          expires_at: null
        },
        cookieCount: cookieStore.getAll().length,
        cookieNames: cookieStore.getAll().map(c => c.name),
        debug: {
          allCookies: cookieStore.getAll().length,
          timestamp: new Date().toISOString(),
          host: requestUrl.hostname,
          message: 'User found but no session object'
        }
      })
    }
    
    // Session found successfully
    console.log('✅ Session verified for user:', session.user.email)
    
    return NextResponse.json({
      success: true,
      session: {
        user: session.user,
        expires_at: session.expires_at
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
