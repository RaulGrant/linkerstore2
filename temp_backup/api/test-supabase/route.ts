import { NextRequest, NextResponse } from 'next/server'
import { createServerClient } from '@supabase/ssr'

export async function GET(request: NextRequest) {
  try {
    console.log('🧪 Testing Supabase connection...')
    
    // Verificar variables de entorno
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    
    if (!supabaseUrl || !supabaseKey) {
      return NextResponse.json({
        success: false,
        error: 'Missing environment variables',
        details: {
          hasUrl: !!supabaseUrl,
          hasKey: !!supabaseKey
        }
      })
    }
    
    // Crear cliente de Supabase
    const supabase = createServerClient(
      supabaseUrl,
      supabaseKey,
      {
        cookies: {
          get() { return undefined },
          set() {},
          remove() {}
        }
      }
    )
    
    // Test 1: Verificar conexión básica
    const { data: healthCheck, error: healthError } = await supabase
      .from('user_profiles')
      .select('count')
      .limit(1)
    
    // Test 2: Verificar que podemos hacer queries a auth
    const { data: { users }, error: usersError } = await supabase.auth.admin.listUsers()
    
    return NextResponse.json({
      success: true,
      tests: {
        connectionTest: {
          success: !healthError,
          error: healthError?.message
        },
        authTest: {
          success: !usersError,
          userCount: users?.length || 0,
          error: usersError?.message
        }
      },
      environment: {
        supabaseUrl: supabaseUrl.substring(0, 30) + '...',
        hasServiceKey: !!process.env.SUPABASE_SERVICE_ROLE_KEY
      }
    })
    
  } catch (error) {
    console.error('🧪 Test failed:', error)
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    })
  }
}
