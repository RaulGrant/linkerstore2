"use client"

import { createContext, useContext, useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase-browser'
import { useRouter } from 'next/navigation'
import { getStoredToken, getStoredUser, clearStoredAuth } from '@/lib/auth-hybrid'
import type { User } from '@supabase/supabase-js'

interface AuthContextType {
  user: User | null
  profile: any | null
  loading: boolean
  configError: string | null
  signOut: () => Promise<void>
  refreshProfile: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [profile, setProfile] = useState<any | null>(null)
  const [loading, setLoading] = useState(true)
  const [configError, setConfigError] = useState<string | null>(null)
  const router = useRouter()
  
  // Verificar configuración de Supabase al momento de inicialización
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  
  console.log('🔍 AuthProvider: Environment check', {
    hasUrl: !!supabaseUrl,
    hasKey: !!supabaseKey,
    url: supabaseUrl ? `${supabaseUrl.substring(0, 20)}...` : 'undefined'
  })
  
  let supabase: any = null
  
  try {
    if (!supabaseUrl || !supabaseKey) {
      setConfigError('Variables de entorno de Supabase no configuradas')
    } else {
      supabase = createClient()
      console.log('✅ AuthProvider: Supabase client created successfully')
    }
  } catch (error) {
    console.error('❌ AuthProvider: Error creating Supabase client:', error)
    setConfigError('Error al crear cliente de Supabase')
  }

  useEffect(() => {
    // Si no hay cliente de Supabase, no podemos hacer nada
    if (!supabase) {
      setLoading(false)
      return
    }

    // Obtener sesión inicial
    const getSession = async () => {
      console.log('🔍 AuthProvider: Checking initial session...')
      try {
        // HYBRID SOLUTION: Try standard session first, then fallback to hybrid
        const { data: { session }, error } = await supabase.auth.getSession()
        console.log('🔍 AuthProvider: Session data:', session ? `Found user ${session.user.id}` : 'Not found')
        
        if (error) {
          console.error('🔍 AuthProvider: Session error:', error)
        }
        
        let currentUser = session?.user ?? null
        
        // If no standard session, try hybrid solution
        if (!currentUser) {
          console.log('🔍 AuthProvider: No standard session, checking hybrid storage...')
          const storedToken = getStoredToken()
          const storedUser = getStoredUser()
          
          if (storedToken && storedUser) {
            console.log('✅ AuthProvider: Found hybrid token, parsing user data...')
            
            try {
              // Parse JWT token to get user data
              const tokenParts = storedToken.split('.')
              if (tokenParts.length === 3) {
                const payload = JSON.parse(atob(tokenParts[1].replace(/-/g, '+').replace(/_/g, '/')))
                console.log('🔍 AuthProvider: Parsed JWT payload:', payload)
                
                // Create user object from JWT data
                currentUser = {
                  id: payload.sub || storedUser.id,
                  email: payload.email || '',
                  user_metadata: payload.user_metadata || {},
                  app_metadata: payload.app_metadata || {},
                  aud: payload.aud || 'authenticated',
                  role: payload.role || 'authenticated',
                  created_at: payload.iat ? new Date(payload.iat * 1000).toISOString() : '',
                  updated_at: payload.iat ? new Date(payload.iat * 1000).toISOString() : '',
                  is_anonymous: false,
                  email_confirmed_at: payload.email_verified ? new Date().toISOString() : undefined,
                  phone_confirmed_at: undefined,
                  confirmation_sent_at: undefined,
                  recovery_sent_at: undefined,
                  email_change_sent_at: undefined,
                  new_email: undefined,
                  invited_at: undefined,
                  action_link: undefined,
                  phone: payload.phone || undefined
                } as User
                
                console.log('✅ AuthProvider: Created hybrid user session from JWT:', currentUser.id)
              } else {
                console.error('❌ AuthProvider: Invalid JWT format')
                // Fallback to minimal user object
                currentUser = {
                  id: storedUser.id,
                  email: '',
                  user_metadata: {},
                  app_metadata: {},
                  aud: 'authenticated',
                  role: 'authenticated',
                  created_at: '',
                  updated_at: '',
                  is_anonymous: false,
                  email_confirmed_at: undefined,
                  phone_confirmed_at: undefined,
                  confirmation_sent_at: undefined,
                  recovery_sent_at: undefined,
                  email_change_sent_at: undefined,
                  new_email: undefined,
                  invited_at: undefined,
                  action_link: undefined,
                  phone: undefined
                } as User
              }
            } catch (error) {
              console.error('❌ AuthProvider: Error parsing JWT token:', error)
              // Fallback to minimal user object
              currentUser = {
                id: storedUser.id,
                email: '',
                user_metadata: {},
                app_metadata: {},
                aud: 'authenticated',
                role: 'authenticated',
                created_at: '',
                updated_at: '',
                is_anonymous: false,
                email_confirmed_at: undefined,
                phone_confirmed_at: undefined,
                confirmation_sent_at: undefined,
                recovery_sent_at: undefined,
                email_change_sent_at: undefined,
                new_email: undefined,
                invited_at: undefined,
                action_link: undefined,
                phone: undefined
              } as User
            }
          }
        }
        
        setUser(currentUser)
        
        if (currentUser) {
          console.log('👤 AuthProvider: User found:', currentUser.id)
          console.log('👤 AuthProvider: User metadata:', currentUser.user_metadata)
          
          // Crear perfil temporal inmediatamente para evitar estados null
          const tempProfile = {
            user_id: currentUser.id,
            name: currentUser.user_metadata?.full_name || currentUser.user_metadata?.name || currentUser.email?.split('@')[0] || 'Usuario',
            user_type: currentUser.user_metadata?.user_type || 'freelancer',
            bio: '',
            skills: [],
            company_name: currentUser.user_metadata?.company_name || '',
            sector: currentUser.user_metadata?.sector || '',
            facilities: '',
            photo_url: null
          }
          
          // Establecer perfil temporal inmediatamente
          setProfile(tempProfile)
          console.log('📋 AuthProvider: Set temporary profile immediately:', tempProfile)
          
          // Obtener perfil del usuario desde la base de datos
          try {
            console.log('🔍 AuthProvider: Fetching profile from database...')
            const { data: profile, error } = await supabase
              .from('user_profiles')
              .select('*')
              .eq('user_id', currentUser.id)
              .single()
            
            console.log('🔍 AuthProvider: DB query result:', { profile, error })
            
            if (!error && profile) {
              // Reemplazar con perfil real si existe
              setProfile(profile)
              console.log('📋 AuthProvider: Profile loaded from DB:', profile)
            } else {
              console.log('📝 AuthProvider: No profile in DB, keeping temporary profile')
            }
          } catch (dbError) {
            console.warn('⚠️ AuthProvider: Profile fetch failed, keeping temporary profile:', dbError)
          }
        } else {
          console.log('❌ AuthProvider: No user session found')
        }
        
        setLoading(false)
        console.log('✅ AuthProvider: Initial check complete')
      } catch (error) {
        console.error('❌ AuthProvider: Error in getSession:', error)
        setLoading(false)
      }
    }

    getSession()

    // Solo configurar listeners si tenemos cliente de Supabase
    if (!supabase) {
      return
    }

    // Escuchar cambios de autenticación
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event: any, session: any) => {
        console.log('🔄 AuthProvider: Auth state changed:', event, session?.user?.id)
        
        setUser(session?.user ?? null)
        
        if (session?.user) {
          // Crear perfil temporal inmediatamente para evitar estados null
          const tempProfile = {
            user_id: session.user.id,
            name: session.user.user_metadata?.full_name || session.user.user_metadata?.name || 'Usuario',
            user_type: session.user.user_metadata?.user_type || 'freelancer',
            bio: '',
            skills: [],
            company_name: session.user.user_metadata?.company_name || '',
            sector: session.user.user_metadata?.sector || '',
            facilities: '',
            photo_url: null
          }
          
          // Establecer perfil temporal inmediatamente
          setProfile(tempProfile)
          console.log('📋 AuthProvider: Set temporary profile on auth change:', tempProfile)
          
          // Obtener perfil del usuario desde la base de datos
          try {
            let { data: profile, error } = await supabase
              .from('user_profiles')
              .select('*')
              .eq('user_id', session.user.id)
              .single()
            
            if (!error && profile) {
              // Reemplazar con perfil real si existe
              setProfile(profile)
              console.log('📋 AuthProvider: Profile updated from DB:', profile?.user_type)
            }
            // Si hay error o no hay perfil, mantener el temporal que ya se estableció
          } catch (error) {
            console.warn('⚠️ AuthProvider: Profile fetch failed on auth change, keeping temporary profile:', error)
            // Mantener el perfil temporal que ya se estableció
          }
        } else {
          setProfile(null)
        }
        
        setLoading(false)
        
        // Solo manejar SIGNED_OUT aquí, no redirecciones automáticas
        if (event === 'SIGNED_OUT') {
          console.log('🚪 AuthProvider: User signed out')
          // No redirigir automáticamente, dejar que el middleware maneje
        }
      }
    )

    return () => subscription?.unsubscribe()
  }, [supabase, router])

  const refreshProfile = async () => {
    if (!user || !supabase) return
    
    console.log('🔄 AuthProvider: Refreshing profile...')
    
    try {
      let { data: profile, error } = await supabase
        .from('user_profiles')
        .select('*')
        .eq('user_id', user.id)
        .single()
      
      if (!error && profile) {
        setProfile(profile)
        console.log('📋 AuthProvider: Profile refreshed from DB:', profile?.user_type)
      } else {
        console.log('📝 AuthProvider: No profile found in DB, keeping temporary')
      }
    } catch (error) {
      console.warn('⚠️ AuthProvider: Profile refresh failed:', error)
    }
  }

  const signOut = async () => {
    if (!supabase) return
    
    try {
      if (process.env.NODE_ENV === 'development') {
        console.log('🚪 Starting logout process...')
      }
      
      // HYBRID SOLUTION: Clear localStorage tokens
      clearStoredAuth()
      
      // Llamar al endpoint de logout para limpiar cookies del servidor
      await fetch('/api/auth/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      
      // Limpiar sesión en Supabase
      await supabase.auth.signOut()
      
      // Limpiar estado local
      setUser(null)
      setProfile(null)
      
      if (process.env.NODE_ENV === 'development') {
        console.log('✅ Logout successful, redirecting to login...')
      }
      
      // Redirigir al login
      router.push('/login')
      
    } catch (error) {
      if (process.env.NODE_ENV === 'development') {
        console.error('❌ Logout error:', error)
      }
      // Incluso si hay error, intentar limpiar estado y redirigir
      setUser(null)
      setProfile(null)
      router.push('/login')
    }
  }

  return (
    <AuthContext.Provider value={{ user, profile, loading, configError, signOut, refreshProfile }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
