import { NextRequest, NextResponse } from 'next/server'
import { createServerClient } from '@supabase/ssr'

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()
    
    if (process.env.NODE_ENV !== 'development') {
      return NextResponse.json({
        success: false,
        error: 'Esta función solo está disponible en desarrollo'
      })
    }
    
    console.log('🔧 Auto-confirming email for development:', email)
    
    // Usar la service role key para operaciones admin
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!,
      {
        cookies: {
          get() { return undefined },
          set() {},
          remove() {}
        }
      }
    )
    
    // Buscar el usuario por email
    const { data: users, error: fetchError } = await supabase.auth.admin.listUsers()
    
    if (fetchError) {
      return NextResponse.json({
        success: false,
        error: `Error fetching users: ${fetchError.message}`
      })
    }
    
    const user = users.users.find(u => u.email === email)
    
    if (!user) {
      return NextResponse.json({
        success: false,
        error: 'Usuario no encontrado'
      })
    }
    
    // Confirmar el email del usuario
    const { data, error } = await supabase.auth.admin.updateUserById(
      user.id,
      { 
        email_confirm: true,
        email_confirmed_at: new Date().toISOString()
      }
    )
    
    if (error) {
      return NextResponse.json({
        success: false,
        error: `Error confirmando email: ${error.message}`
      })
    }
    
    return NextResponse.json({
      success: true,
      message: 'Email confirmado exitosamente',
      user: {
        id: data.user.id,
        email: data.user.email,
        email_confirmed_at: data.user.email_confirmed_at
      }
    })
    
  } catch (error) {
    console.error('🔧 Error auto-confirming email:', error)
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Error desconocido'
    })
  }
}
