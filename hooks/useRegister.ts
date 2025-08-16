import { createClient } from '@/lib/supabase-browser'
import { useState } from 'react'

interface RegisterData {
  email: string
  password: string
  fullName: string
  userType: 'freelancer' | 'company'
}

interface UseRegisterReturn {
  register: (data: RegisterData) => Promise<void>
  loading: boolean
  error: string | null
}

export function useRegister(): UseRegisterReturn {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const supabase = createClient()

  const register = async (data: RegisterData) => {
    try {
      setLoading(true)
      setError(null)

      console.log("🚀 Iniciando registro para:", data.email)

      // Verificar si el usuario ya existe
      const { data: existingUser, error: checkError } = await supabase
        .from('profiles')
        .select('id')
        .eq('email', data.email)
        .single()

      if (existingUser) {
        throw new Error("Este email ya está registrado. Intenta iniciar sesión.")
      }

      // URL de callback para producción y desarrollo
      const isDevelopment = process.env.NODE_ENV === 'development'
      const baseUrl = isDevelopment 
        ? 'http://localhost:3000' 
        : 'https://v0-linker-pro-platform.vercel.app'
      
      const callbackUrl = `${baseUrl}/auth/callback`
      console.log("🔗 URL de callback:", callbackUrl)

      // Registrar usuario en Supabase Auth
      const { data: authData, error: signUpError } = await supabase.auth.signUp({
        email: data.email,
        password: data.password,
        options: {
          data: {
            full_name: data.fullName,
            user_type: data.userType,
            email: data.email // Incluir email en metadata
          },
          emailRedirectTo: callbackUrl
        }
      })

      if (signUpError) {
        console.error("❌ Error en el registro:", signUpError)
        
        // Manejar errores específicos
        if (signUpError.message.includes('already registered')) {
          throw new Error("Este email ya está registrado. Intenta iniciar sesión.")
        } else if (signUpError.message.includes('Database error')) {
          throw new Error("Error de configuración de la base de datos. Por favor, contacta al administrador.")
        } else if (signUpError.message.includes('Invalid email')) {
          throw new Error("El formato del email no es válido.")
        } else if (signUpError.message.includes('Password')) {
          throw new Error("La contraseña debe tener al menos 6 caracteres.")
        } else {
          throw new Error(`Error de registro: ${signUpError.message}`)
        }
      }

      console.log("✅ Respuesta de registro:", authData)

      if (!authData.user) {
        throw new Error("No se pudo crear el usuario. Intenta nuevamente.")
      }

      // Verificar si necesita confirmación de email
      if (authData.user && !authData.user.email_confirmed_at) {
        console.log("📧 Usuario creado, requiere confirmación de email")
        
        // Opcional: intentar reenviar email si es necesario
        try {
          const { error: resendError } = await supabase.auth.resend({
            type: 'signup',
            email: data.email,
            options: {
              emailRedirectTo: callbackUrl
            }
          })
          
          if (resendError) {
            console.warn("⚠️ Error reenviando email:", resendError)
          }
        } catch (resendErr) {
          console.warn("⚠️ No se pudo reenviar email:", resendErr)
        }
      }

      console.log("🎉 Registro completado exitosamente")

    } catch (err: any) {
      const errorMessage = err.message || 'Error desconocido durante el registro'
      console.error("💥 Error en registro:", errorMessage)
      setError(errorMessage)
      throw err
    } finally {
      setLoading(false)
    }
  }

  return { register, loading, error }
}
