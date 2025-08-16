import { createClient } from '@supabase/supabase-js'
import type { Database } from '@/types/supabase'

// Production-ready configuration
const isProduction = process.env.NODE_ENV === 'production'

// Enhanced logging for production
const log = (message: string, data?: any) => {
  if (!isProduction) {
    console.log(message, data)
  }
  // In production, you might want to send to a logging service
  // logToService(message, data)
}

const logError = (message: string, error?: any) => {
  if (!isProduction) {
    console.error(message, error)
  }
  // In production, send errors to monitoring service
  // errorToService(message, error)
}

// Enhanced token validation with production considerations
export async function validateTokenProduction(token: string): Promise<{
  valid: boolean;
  user?: any;
  error?: string;
  method?: string;
}> {
  const methods = [
    { name: 'service-role', fn: validateTokenDirectly },
    { name: 'simple', fn: validateTokenSimple },
    { name: 'jwt', fn: validateTokenJWT }
  ]

  for (const method of methods) {
    try {
      log(`🔑 Trying ${method.name} validation...`)
      
      const result = await method.fn(token)
      
      if (result.valid && result.user) {
        log(`✅ Token validated successfully with ${method.name}`)
        return { ...result, method: method.name }
      } else {
        log(`❌ ${method.name} validation failed: ${result.error}`)
      }
    } catch (error) {
      logError(`❌ ${method.name} validation exception:`, error)
    }
  }

  return { valid: false, error: 'All validation methods failed' }
}

// Enhanced token validation with service role (secure method)
export async function validateTokenDirectly(token: string): Promise<{
  valid: boolean;
  user?: any;
  error?: string;
}> {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!
    
    log('🔑 Validating token (service role method):', {
      hasUrl: !!supabaseUrl,
      hasServiceKey: !!supabaseServiceKey,
      tokenPreview: token.substring(0, 20) + '...'
    })
    
    if (!supabaseUrl || !supabaseServiceKey) {
      const error = 'Missing Supabase service role configuration'
      logError('🔴 ' + error)
      return { valid: false, error }
    }
    
    // Create admin client with service role key
    const supabase = createClient<Database>(supabaseUrl, supabaseServiceKey)
    
    // Verify the JWT token
    const { data: { user }, error } = await supabase.auth.getUser(token)
    
    if (error) {
      logError('🔴 Service role token validation error:', error)
      return { valid: false, error: error.message }
    }
    
    if (!user) {
      logError('🔴 No user found with service role validation')
      return { valid: false, error: 'No user found' }
    }
    
    log('✅ Service role token validated successfully for user:', user.id)
    return { valid: true, user }
    
  } catch (error) {
    logError('🔴 Service role token validation exception:', error)
    return { 
      valid: false, 
      error: error instanceof Error ? error.message : 'Unknown error' 
    }
  }
}

// Alternative validation using regular Supabase client
export async function validateTokenSimple(token: string): Promise<{
  valid: boolean;
  user?: any;
  error?: string;
}> {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    
    log('🔑 Validating token (simple method):', {
      hasUrl: !!supabaseUrl,
      hasAnonKey: !!supabaseAnonKey,
      tokenPreview: token.substring(0, 20) + '...'
    })
    
    if (!supabaseUrl || !supabaseAnonKey) {
      const error = 'Missing Supabase basic configuration'
      logError('🔴 ' + error)
      return { valid: false, error }
    }
    
    // Create client with anon key
    const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey)
    
    // Set the auth token manually
    await supabase.auth.setSession({
      access_token: token,
      refresh_token: '' // Not needed for validation
    })
    
    // Try to get current user
    const { data: { user }, error } = await supabase.auth.getUser()
    
    if (error) {
      logError('🔴 Simple token validation error:', error)
      return { valid: false, error: error.message }
    }
    
    if (!user) {
      logError('🔴 No user found with simple validation')
      return { valid: false, error: 'No user found' }
    }
    
    log('✅ Simple token validated successfully for user:', user.id)
    return { valid: true, user }
    
  } catch (error) {
    logError('🔴 Simple token validation exception:', error)
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
    log('🔑 Validating token (JWT parsing method):', token.substring(0, 20) + '...')
    
    // Basic JWT parsing
    const parts = token.split('.')
    if (parts.length !== 3) {
      return { valid: false, error: 'Invalid JWT format' }
    }
    
    // Decode payload (base64url)
    const payload = JSON.parse(atob(parts[1].replace(/-/g, '+').replace(/_/g, '/')))
    
    log('🔑 JWT payload:', {
      sub: payload.sub,
      email: payload.email,
      exp: payload.exp,
      iat: payload.iat
    })
    
    // Check if token is expired
    const now = Math.floor(Date.now() / 1000)
    if (payload.exp && payload.exp < now) {
      logError('🔴 Token is expired')
      return { valid: false, error: 'Token expired' }
    }
    
    // Create a minimal user object
    const user = {
      id: payload.sub,
      email: payload.email,
      user_metadata: payload.user_metadata || {},
      app_metadata: payload.app_metadata || {},
      aud: payload.aud || 'authenticated',
      role: payload.role || 'authenticated',
      created_at: '',
      updated_at: '',
      is_anonymous: false
    }
    
    log('✅ JWT token validated successfully for user:', user.id)
    return { valid: true, user }
    
  } catch (error) {
    logError('🔴 JWT token validation exception:', error)
    return { 
      valid: false, 
      error: error instanceof Error ? error.message : 'Unknown error' 
    }
  }
}

// Token storage utilities
export function getStoredToken(): string | null {
  if (typeof window === 'undefined') return null
  
  try {
    return localStorage.getItem('sb-access-token')
  } catch (error) {
    logError('Error getting stored token:', error)
    return null
  }
}

export function getStoredUser(): any | null {
  if (typeof window === 'undefined') return null
  
  try {
    const userId = localStorage.getItem('sb-user-id')
    if (!userId) return null
    
    return {
      id: userId,
      // Add other stored user data if needed
    }
  } catch (error) {
    logError('Error getting stored user:', error)
    return null
  }
}

export function storeAuthData(token: string, refreshToken: string, user: any, expiresAt?: string) {
  if (typeof window === 'undefined') return
  
  try {
    localStorage.setItem('sb-access-token', token)
    localStorage.setItem('sb-refresh-token', refreshToken)
    localStorage.setItem('sb-user-id', user.id)
    
    if (expiresAt) {
      localStorage.setItem('sb-token-expiry', expiresAt)
    }
    
    log('✅ Auth data stored successfully')
  } catch (error) {
    logError('Error storing auth data:', error)
  }
}

export function clearStoredAuth() {
  if (typeof window === 'undefined') return
  
  try {
    localStorage.removeItem('sb-access-token')
    localStorage.removeItem('sb-refresh-token')
    localStorage.removeItem('sb-user-id')
    localStorage.removeItem('sb-token-expiry')
    
    log('✅ Auth data cleared')
  } catch (error) {
    logError('Error clearing auth data:', error)
  }
}

// Token refresh utility for production
export async function refreshTokenIfNeeded(): Promise<string | null> {
  if (typeof window === 'undefined') return null
  
  try {
    const token = getStoredToken()
    const expiryStr = localStorage.getItem('sb-token-expiry')
    
    if (!token || !expiryStr) {
      log('No token or expiry found')
      return null
    }
    
    const expiry = parseInt(expiryStr)
    const now = Date.now() / 1000
    
    // If token expires in less than 5 minutes, refresh it
    if (expiry - now < 300) {
      log('Token expires soon, attempting refresh...')
      
      const refreshToken = localStorage.getItem('sb-refresh-token')
      if (!refreshToken) {
        log('No refresh token found')
        return null
      }
      
      const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
      const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
      
      const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey)
      
      const { data, error } = await supabase.auth.refreshSession({
        refresh_token: refreshToken
      })
      
      if (error || !data.session) {
        logError('Token refresh failed:', error)
        clearStoredAuth()
        return null
      }
      
      // Store new tokens
      storeAuthData(
        data.session.access_token,
        data.session.refresh_token,
        data.session.user,
        data.session.expires_at?.toString()
      )
      
      log('✅ Token refreshed successfully')
      return data.session.access_token
    }
    
    return token
  } catch (error) {
    logError('Error refreshing token:', error)
    return null
  }
}
