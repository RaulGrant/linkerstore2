"use server"

import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function serverLogin(formData: FormData) {
  const email = formData.get('email') as string
  const password = formData.get('password') as string
  
  console.log('🔐 Server Action Login attempt for:', email)
  
  const cookieStore = await cookies()
  
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value
        },
        set(name: string, value: string, options: any) {
          console.log(`🍪 Setting cookie: ${name}`)
          cookieStore.set({ name, value, ...options })
        },
        remove(name: string, options: any) {
          console.log(`🍪 Removing cookie: ${name}`)
          cookieStore.set({ name, value: '', ...options })
        },
      },
    }
  )

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  })

  if (error) {
    console.error('❌ Server Action Login error:', error)
    return { error: error.message }
  }

  console.log('✅ Server Action Login successful:', !!data.user)
  console.log('🔑 Session created:', !!data.session)
  
  // Verificar que la sesión se puede obtener
  const { data: sessionData, error: sessionError } = await supabase.auth.getSession()
  console.log('🔍 Session verification:', !!sessionData?.session)
  
  if (sessionError) {
    console.error('❌ Session verification error:', sessionError)
    return { error: 'Session verification failed' }
  }

  if (sessionData?.session) {
    console.log('🔄 Redirecting to dashboard...')
    redirect('/dashboard')
  }

  return { success: true, user: data.user }
}
