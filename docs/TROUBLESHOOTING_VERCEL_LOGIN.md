# Guía de Troubleshooting - Login en Vercel

## Problema
El login funciona en localhost pero no en Vercel. El usuario se queda en la página de login después de un login exitoso.

## Diagnóstico Paso a Paso

### 1. Verificar Variables de Entorno en Vercel
```bash
# Ir a Vercel Dashboard > Project > Settings > Environment Variables
# Verificar que estén configuradas:
- NEXT_PUBLIC_SUPABASE_URL
- NEXT_PUBLIC_SUPABASE_ANON_KEY
- SUPABASE_SERVICE_ROLE_KEY
- NEXT_PUBLIC_DOMAIN (nuevo para el fix)
```

### 2. Verificar Logs de Vercel
```bash
# En Vercel Dashboard > Project > Functions > Ver logs
# Buscar por estos mensajes:
- "🔑 Attempting login for:"
- "✅ Login successful via API"
- "🔄 Redirecting to:"
- "❌ Router redirect failed"
```

### 3. Verificar Logs del Navegador
```javascript
// Abrir DevTools > Console
// Buscar por estos mensajes:
- "✅ Login successful via API"
- "🔄 Redirecting to: /dashboard"
- "🔄 Fallback to hard redirect"
```

### 4. Verificar Cookies
```javascript
// En DevTools > Application > Storage > Cookies
// Verificar que existan cookies de Supabase:
- sb-[project-id]-auth-token
- sb-[project-id]-auth-token-code-verifier
```

## Soluciones Implementadas

### A. Estrategia de Redirección Múltiple
```typescript
// Si router.push falla, usa window.location.href
try {
  await router.push(redirectTo)
  router.refresh()
  
  setTimeout(() => {
    if (window.location.pathname !== redirectTo) {
      window.location.href = redirectTo
    }
  }, 1000)
} catch (error) {
  window.location.href = redirectTo
}
```

### B. Configuración de Cookies para Producción
```typescript
// Cookies con dominio específico para producción
const cookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'lax' as const,
  path: '/',
  ...(process.env.NODE_ENV === 'production' && {
    domain: process.env.NEXT_PUBLIC_DOMAIN || undefined
  })
}
```

## Pasos para Resolver

### 1. Configurar Variables de Entorno
```bash
# En Vercel Dashboard:
1. Ir a Project > Settings > Environment Variables
2. Agregar NEXT_PUBLIC_DOMAIN con tu dominio de Vercel
   Ejemplo: my-app.vercel.app (sin https://)
3. Verificar que las otras variables estén configuradas
```

### 2. Redeploy
```bash
# Hacer redeploy después de configurar variables
vercel --prod
```

### 3. Probar en Producción
```bash
# Ir a tu dominio de Vercel
1. Intentar login
2. Abrir DevTools > Console
3. Verificar logs de redirección
4. Verificar cookies en DevTools > Application
```

## Debugging Adicional

### Logs Útiles
```javascript
// En el navegador (DevTools > Console)
console.log('Current URL:', window.location.href)
console.log('Cookies:', document.cookie)
console.log('Local Storage:', localStorage.getItem('supabase.auth.token'))
```

### Verificar Supabase
```javascript
// En DevTools > Console
const supabase = createClient()
supabase.auth.getSession().then(({ data, error }) => {
  console.log('Session:', data.session)
  console.log('Error:', error)
})
```

## Problemas Comunes y Soluciones

### 1. "Cookies no se están estableciendo"
**Solución**: Verificar que `NEXT_PUBLIC_DOMAIN` esté configurado correctamente

### 2. "Redirección no funciona"
**Solución**: El hard redirect (`window.location.href`) debería funcionar como fallback

### 3. "Session no se mantiene"
**Solución**: Verificar configuración de cookies y que el dominio sea correcto

### 4. "CORS errors"
**Solución**: Verificar que el dominio esté autorizado en Supabase

## Contacto para Soporte
Si el problema persiste:
1. Revisar logs de Vercel
2. Verificar configuración de Supabase
3. Verificar que todas las variables de entorno estén configuradas
4. Probar con diferentes navegadores
