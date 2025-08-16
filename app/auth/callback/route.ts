import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get('code')
  const error = requestUrl.searchParams.get('error')
  const error_description = requestUrl.searchParams.get('error_description')

  console.log('Callback recibido:', { code: !!code, error, error_description })

  if (error || !code) {
    console.error('Error en callback:', error, error_description)
    return NextResponse.redirect(
      new URL(
        `/login?error=${encodeURIComponent(
          error_description || 'Error al verificar el email'
        )}`,
        request.url
      )
    )
  }

  try {
    const cookieStore = await cookies()
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          async get(name: string) {
            return cookieStore.get(name)?.value
          },
          async set(name: string, value: string, options: any) {
            try {
              cookieStore.set(name, value, options)
            } catch (e) {
              console.error('Error setting cookie:', e)
            }
          },
          async remove(name: string, options: any) {
            try {
              cookieStore.delete(name)
            } catch (e) {
              console.error('Error removing cookie:', e)
            }
          },
        },
      }
    )

    console.log('Intercambiando código por sesión...')
    const { data, error: sessionError } = await supabase.auth.exchangeCodeForSession(code)

    if (sessionError) {
      console.error('Error al intercambiar código:', sessionError)
      throw sessionError
    }

    console.log('Sesión creada exitosamente:', !!data.user)

    // El trigger automáticamente actualizará is_verified cuando se confirme el email
    // Pero podemos forzar la actualización para asegurar consistencia
    if (data?.user) {
      console.log('Actualizando estado de verificación...')
      const { error: updateError } = await supabase
        .from('users')
        .update({
          is_verified: true,
          updated_at: new Date().toISOString(),
        })
        .eq('id', data.user.id)

      if (updateError) {
        console.error('Error updating user verification status:', updateError)
      } else {
        console.log('Usuario verificado exitosamente')
      }
    }

    console.log('Redirigiendo al dashboard...')
    return NextResponse.redirect(
      new URL('/dashboard?verified=true', request.url)
    )
  } catch (error) {
    console.error('Error en el proceso de verificación:', error)
    return NextResponse.redirect(
      new URL('/login?error=Error al verificar el email', request.url)
    )
  }
}
