import { NextRequest, NextResponse } from 'next/server'
import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

export async function POST(request: NextRequest) {
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
    
    // Sign out from Supabase
    const { error } = await supabase.auth.signOut()

    // Limpiar cookies manualmente
    cookieStore.delete({ name: 'sb-access-token', path: '/' })
    cookieStore.delete({ name: 'sb-refresh-token', path: '/' })

    if (error) {
      console.error('❌ Logout error:', error)
      return NextResponse.json({ 
        success: false, 
        error: error.message 
      }, { status: 500 })
    }

    console.log('✅ Logout successful')
    
    return NextResponse.json({
      success: true,
      message: 'Logout successful'
    })

  } catch (error) {
    console.error('❌ Logout error:', error)
    return NextResponse.json({ 
      success: false, 
      error: error instanceof Error ? error.message : 'Logout failed' 
    }, { status: 500 })
  }
}
