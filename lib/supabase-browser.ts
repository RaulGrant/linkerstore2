import { createBrowserClient } from '@supabase/ssr'

export const createClient = () => {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          if (typeof document === 'undefined') return undefined
          
          const value = document.cookie
            .split('; ')
            .find(row => row.startsWith(`${name}=`))
            ?.split('=')[1]
          
          console.log(`🍪 Browser getting cookie ${name}:`, value ? value.substring(0, 20) + '...' : 'undefined')
          return value
        },
        set(name: string, value: string, options: any) {
          if (typeof document === 'undefined') return
          
          console.log(`🍪 Browser setting cookie ${name}:`, value.substring(0, 20) + '...')
          console.log(`🍪 Cookie options:`, options)
          
          let cookieString = `${name}=${value}; path=/; samesite=lax`
          
          if (options?.maxAge) {
            cookieString += `; max-age=${options.maxAge}`
          }
          
          if (options?.expires) {
            const expires = options.expires instanceof Date ? options.expires : new Date(options.expires)
            cookieString += `; expires=${expires.toUTCString()}`
          }
          
          // Only set secure in production
          if (process.env.NODE_ENV === 'production') {
            cookieString += `; secure`
          }
          
          console.log(`🍪 Setting cookie string:`, cookieString)
          document.cookie = cookieString
          
          // Verify cookie was set
          setTimeout(() => {
            const checkValue = document.cookie
              .split('; ')
              .find(row => row.startsWith(`${name}=`))
              ?.split('=')[1]
            console.log(`🍪 Cookie verification for ${name}:`, checkValue ? 'SET ✅' : 'NOT SET ❌')
          }, 100)
        },
        remove(name: string, options: any) {
          if (typeof document === 'undefined') return
          
          console.log(`🍪 Browser removing cookie ${name}`)
          document.cookie = `${name}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; samesite=lax`
        }
      }
    }
  )
}

export const supabase = createClient()

// Debug logging para desarrollo
if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
  console.log('🔍 Supabase client configured for browser')
  console.log('🔍 NEXT_PUBLIC_SUPABASE_URL:', process.env.NEXT_PUBLIC_SUPABASE_URL)
  console.log('🔍 NEXT_PUBLIC_SUPABASE_ANON_KEY:', process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.substring(0, 20) + '...')
  
  // Listen to auth state changes for debugging
  supabase.auth.onAuthStateChange((event, session) => {
    console.log('🔐 Auth state change:', event, session ? 'Session exists' : 'No session')
    if (event === 'SIGNED_IN') {
      console.log('✅ User signed in:', session?.user?.email)
    } else if (event === 'SIGNED_OUT') {
      console.log('🚪 User signed out')
    }
  })
}
