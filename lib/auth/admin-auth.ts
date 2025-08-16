import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function checkAdminAuth() {
  const supabase = createServerComponentClient({ cookies })
  
  try {
    const { data: { session }, error } = await supabase.auth.getSession()
    
    if (error || !session) {
      redirect('/admin/login')
    }

    // Verificar si el usuario es admin
    const { data: profile, error: profileError } = await supabase
      .from('profiles')
      .select('role')
      .eq('id', session.user.id)
      .single()

    if (profileError || !profile || profile.role !== 'admin') {
      redirect('/admin/login')
    }

    return session.user
  } catch (error) {
    console.error('Error checking admin auth:', error)
    redirect('/admin/login')
  }
}

export async function getAdminUser() {
  const supabase = createServerComponentClient({ cookies })
  
  try {
    const { data: { session } } = await supabase.auth.getSession()
    return session?.user || null
  } catch (error) {
    console.error('Error getting admin user:', error)
    return null
  }
}
