// Función para obtener la URL base correcta
export function getBaseUrl(): string {
  // En el servidor (durante SSR/SSG)
  if (typeof window === 'undefined') {
    // En producción, usar la URL de Vercel
    if (process.env.VERCEL_URL) {
      return `https://${process.env.VERCEL_URL}`
    }
    // En desarrollo local
    return 'http://localhost:3000'
  }
  
  // En el cliente, usar la URL actual
  return window.location.origin
}

// Función específica para obtener la URL de callback
export function getCallbackUrl(): string {
  return `${getBaseUrl()}/auth/callback`
}

// Función para obtener la URL del sitio (para Supabase)
export function getSiteUrl(): string {
  if (process.env.NODE_ENV === 'production') {
    return 'https://v0-linker-pro-platform.vercel.app'
  }
  return 'http://localhost:3000'
}
