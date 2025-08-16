// Cookie utility functions for manual session management
export const setCookie = (name: string, value: string, options: {
  maxAge?: number
  expires?: Date
  path?: string
  domain?: string
  secure?: boolean
  sameSite?: 'strict' | 'lax' | 'none'
} = {}) => {
  if (typeof document === 'undefined') return

  const defaultOptions = {
    path: '/',
    sameSite: 'lax' as const,
    secure: process.env.NODE_ENV === 'production',
    ...options
  }

  let cookieString = `${name}=${value}`

  if (defaultOptions.maxAge) {
    cookieString += `; max-age=${defaultOptions.maxAge}`
  }

  if (defaultOptions.expires) {
    cookieString += `; expires=${defaultOptions.expires.toUTCString()}`
  }

  if (defaultOptions.path) {
    cookieString += `; path=${defaultOptions.path}`
  }

  if (defaultOptions.domain) {
    cookieString += `; domain=${defaultOptions.domain}`
  }

  if (defaultOptions.secure) {
    cookieString += `; secure`
  }

  if (defaultOptions.sameSite) {
    cookieString += `; samesite=${defaultOptions.sameSite}`
  }

  console.log(`🍪 Setting manual cookie: ${cookieString}`)
  document.cookie = cookieString
}

export const getCookie = (name: string): string | undefined => {
  if (typeof document === 'undefined') return undefined

  const value = document.cookie
    .split('; ')
    .find(row => row.startsWith(`${name}=`))
    ?.split('=')[1]

  return value
}

export const deleteCookie = (name: string, options: {
  path?: string
  domain?: string
} = {}) => {
  if (typeof document === 'undefined') return

  const defaultOptions = {
    path: '/',
    ...options
  }

  let cookieString = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT`

  if (defaultOptions.path) {
    cookieString += `; path=${defaultOptions.path}`
  }

  if (defaultOptions.domain) {
    cookieString += `; domain=${defaultOptions.domain}`
  }

  console.log(`🍪 Deleting cookie: ${cookieString}`)
  document.cookie = cookieString
}

// Function to manually save session to cookies after successful login
export const saveSessionToCookies = (session: any) => {
  if (!session) {
    console.log('🍪 No session to save')
    return
  }

  try {
    console.log('🍪 Saving session to cookies manually...')
    
    // Calculate expiry time (1 hour from now, or use session expiry)
    const expiryTime = session.expires_at 
      ? new Date(session.expires_at * 1000)
      : new Date(Date.now() + 60 * 60 * 1000) // 1 hour from now

    // Save access token
    if (session.access_token) {
      // For large tokens, we might need to split them
      const accessToken = session.access_token
      const maxCookieSize = 4000 // Safe cookie size limit
      
      if (accessToken.length > maxCookieSize) {
        // Split large token into chunks
        const chunks = Math.ceil(accessToken.length / maxCookieSize)
        for (let i = 0; i < chunks; i++) {
          const chunk = accessToken.slice(i * maxCookieSize, (i + 1) * maxCookieSize)
          setCookie(`sb-apgllwqsfjmtsjtewhsf-auth-token.${i}`, chunk, {
            expires: expiryTime,
            path: '/',
            sameSite: 'lax'
          })
        }
        // Set a metadata cookie to know how many chunks we have
        setCookie('sb-apgllwqsfjmtsjtewhsf-auth-token-chunks', chunks.toString(), {
          expires: expiryTime,
          path: '/',
          sameSite: 'lax'
        })
      } else {
        setCookie('sb-apgllwqsfjmtsjtewhsf-auth-token', accessToken, {
          expires: expiryTime,
          path: '/',
          sameSite: 'lax'
        })
      }
    }

    // Save refresh token
    if (session.refresh_token) {
      setCookie('sb-apgllwqsfjmtsjtewhsf-refresh-token', session.refresh_token, {
        expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days
        path: '/',
        sameSite: 'lax'
      })
    }

    // Save user info
    if (session.user) {
      setCookie('sb-apgllwqsfjmtsjtewhsf-user', JSON.stringify({
        id: session.user.id,
        email: session.user.email,
        created_at: session.user.created_at
      }), {
        expires: expiryTime,
        path: '/',
        sameSite: 'lax'
      })
    }

    console.log('✅ Session saved to cookies successfully!')
    
    // Verify cookies were set
    setTimeout(() => {
      const accessCookie = getCookie('sb-apgllwqsfjmtsjtewhsf-auth-token')
      const refreshCookie = getCookie('sb-apgllwqsfjmtsjtewhsf-refresh-token')
      const userCookie = getCookie('sb-apgllwqsfjmtsjtewhsf-user')
      
      console.log('🔍 Cookie verification:')
      console.log('  Access token:', accessCookie ? 'SET ✅' : 'NOT SET ❌')
      console.log('  Refresh token:', refreshCookie ? 'SET ✅' : 'NOT SET ❌')
      console.log('  User info:', userCookie ? 'SET ✅' : 'NOT SET ❌')
    }, 500)

  } catch (error) {
    console.error('❌ Error saving session to cookies:', error)
  }
}

// Function to clear all session cookies
export const clearSessionCookies = () => {
  console.log('🍪 Clearing all session cookies...')
  
  // Clear main cookies
  deleteCookie('sb-apgllwqsfjmtsjtewhsf-auth-token')
  deleteCookie('sb-apgllwqsfjmtsjtewhsf-refresh-token')
  deleteCookie('sb-apgllwqsfjmtsjtewhsf-user')
  
  // Clear chunked tokens
  const chunks = getCookie('sb-apgllwqsfjmtsjtewhsf-auth-token-chunks')
  if (chunks) {
    const chunkCount = parseInt(chunks)
    for (let i = 0; i < chunkCount; i++) {
      deleteCookie(`sb-apgllwqsfjmtsjtewhsf-auth-token.${i}`)
    }
    deleteCookie('sb-apgllwqsfjmtsjtewhsf-auth-token-chunks')
  }
  
  console.log('✅ All session cookies cleared!')
}
