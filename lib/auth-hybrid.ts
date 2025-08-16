import { createClient } from '@supabase/supabase-js'
import type { Database } from '@/types/supabase'

// Alternative validation using regular Supabase client with token
export async function validateTokenSimple(token: string): Promise<{
  valid: boolean;
  user?: any;
  error?: string;
}> {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    
    console.log('🔑 Validating token (simple method):', {
      hasUrl: !!supabaseUrl,
      hasAnonKey: !!supabaseAnonKey,
      tokenPreview: token.substring(0, 20) + '...'
    })
    
    if (!supabaseUrl || !supabaseAnonKey) {
      console.error('🔴 Missing Supabase basic configuration')
      return { valid: false, error: 'Missing Supabase configuration' }
    }
    
    // Create client with anon key
    const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey)
    
    // Set the auth token manually
    await supabase.auth.setSession({
      access_token: token,
      refresh_token: '' // We don't have refresh token here, but it's not needed for validation
    })
    
    // Try to get current user
    const { data: { user }, error } = await supabase.auth.getUser()
    
    console.log('🔑 Simple validation result:', {
      hasUser: !!user,
      userId: user?.id,
      error: error?.message
    })
    
    if (error) {
      console.error('🔴 Simple token validation error:', error)
      return { valid: false, error: error.message }
    }
    
    if (!user) {
      console.error('🔴 No user found with simple validation')
      return { valid: false, error: 'No user found' }
    }
    
    console.log('✅ Simple token validated successfully for user:', user.id)
    return { valid: true, user }
    
  } catch (error) {
    console.error('🔴 Simple token validation exception:', error)
    return { 
      valid: false, 
      error: error instanceof Error ? error.message : 'Unknown error' 
    }
  }
}

// JWT parsing validation (fallback method)
export function validateTokenJWT(token: string): {
  valid: boolean;
  user?: any;
  error?: string;
} {
  try {
    console.log('🔑 Validating token (JWT parsing method):', token.substring(0, 20) + '...')
    
    // Basic JWT parsing (for debugging purposes)
    const parts = token.split('.')
    if (parts.length !== 3) {
      return { valid: false, error: 'Invalid JWT format' }
    }
    
    // Decode payload (base64url)
    const payload = JSON.parse(atob(parts[1].replace(/-/g, '+').replace(/_/g, '/')))
    
    console.log('🔑 JWT payload:', {
      sub: payload.sub,
      email: payload.email,
      exp: payload.exp,
      iat: payload.iat
    })
    
    // Check if token is expired
    const now = Math.floor(Date.now() / 1000)
    if (payload.exp && payload.exp < now) {
      console.error('🔴 Token is expired')
      return { valid: false, error: 'Token expired' }
    }
    
    // Create a minimal user object
    const user = {
      id: payload.sub,
      email: payload.email,
      user_metadata: payload.user_metadata || {},
      app_metadata: payload.app_metadata || {},
      aud: payload.aud,
      role: payload.role || 'authenticated',
      created_at: '',
      updated_at: '',
      is_anonymous: false
    }
    
    console.log('✅ JWT parsing successful for user:', user.id)
    return { valid: true, user }
    
  } catch (error) {
    console.error('🔴 JWT parsing error:', error)
    return { 
      valid: false, 
      error: error instanceof Error ? error.message : 'JWT parsing failed' 
    }
  }
}
export async function validateTokenDirectly(token: string): Promise<{
  valid: boolean;
  user?: any;
  error?: string;
}> {
  try {
    // Create a server client to validate the token
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!
    
    console.log('🔑 Validating token directly:', {
      hasUrl: !!supabaseUrl,
      hasServiceKey: !!supabaseServiceKey,
      serviceKeyPreview: supabaseServiceKey ? supabaseServiceKey.substring(0, 20) + '...' : 'undefined',
      tokenPreview: token.substring(0, 20) + '...'
    })
    
    if (!supabaseUrl) {
      console.error('🔴 Missing NEXT_PUBLIC_SUPABASE_URL')
      return { valid: false, error: 'Missing NEXT_PUBLIC_SUPABASE_URL' }
    }
    
    if (!supabaseServiceKey) {
      console.error('🔴 Missing SUPABASE_SERVICE_ROLE_KEY')
      return { valid: false, error: 'Missing SUPABASE_SERVICE_ROLE_KEY' }
    }
    
    const supabase = createClient<Database>(supabaseUrl, supabaseServiceKey)
    
    // Get user from token
    console.log('🔑 Calling supabase.auth.getUser...')
    const { data: { user }, error } = await supabase.auth.getUser(token)
    
    console.log('🔑 supabase.auth.getUser result:', {
      hasUser: !!user,
      userId: user?.id,
      error: error?.message
    })
    
    if (error) {
      console.error('🔴 Token validation error:', error)
      return { valid: false, error: error.message }
    }
    
    if (!user) {
      console.error('🔴 No user found for token')
      return { valid: false, error: 'No user found' }
    }
    
    console.log('✅ Token validated successfully for user:', user.id)
    return { valid: true, user }
    
  } catch (error) {
    console.error('🔴 Token validation exception:', error)
    return { 
      valid: false, 
      error: error instanceof Error ? error.message : 'Unknown error' 
    }
  }
}

// For client-side use
export function getStoredToken(): string | null {
  if (typeof window === 'undefined') return null
  return localStorage.getItem('sb-access-token')
}

export function getStoredUser(): { id: string; expiry: string } | null {
  if (typeof window === 'undefined') return null
  
  const userId = localStorage.getItem('sb-user-id')
  const expiry = localStorage.getItem('sb-token-expiry')
  
  if (!userId || !expiry) return null
  
  // Check if token is expired
  const expiryTime = new Date(expiry).getTime()
  const now = new Date().getTime()
  
  if (now >= expiryTime) {
    // Token expired, clear storage
    clearStoredAuth()
    return null
  }
  
  return { id: userId, expiry }
}

export function clearStoredAuth(): void {
  if (typeof window === 'undefined') return
  
  localStorage.removeItem('sb-access-token')
  localStorage.removeItem('sb-refresh-token')
  localStorage.removeItem('sb-user-id')
  localStorage.removeItem('sb-token-expiry')
}
