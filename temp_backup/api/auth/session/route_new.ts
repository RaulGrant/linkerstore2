import { NextRequest, NextResponse } from 'next/server'
import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

export async function GET(request: NextRequest) {
  try {
    const cookieStore = await cookies()
    
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
    
    if (sessionError || !session) {
      return NextResponse.json({
        success: false,
        error: 'No session found'
      }, { status: 401 })
    }

    // Session found successfully
    return NextResponse.json({
      success: true,
      session: {
        user: session.user,
        expires_at: session.expires_at
      }
    })

  } catch (error) {
    console.error('❌ Session check error:', error)
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Session check failed'
    }, { status: 500 })
  }
}
