# Diagnóstico del Problema de Autenticación

## Problema Identificado

**Las cookies de autenticación de Supabase NO se están estableciendo después del login exitoso.**

## Evidencia del Problema

1. **Login exitoso**: El login funciona y devuelve session/user
2. **Cookies faltantes**: Solo se establecen:
   - `sb-apgllwqsfjmtsjtewhsf-auth-token-code-verifier`
   - `session` (Next.js)
   - `PHPSESSID` (PHP session)
   - `__next_hmr_refresh_hash__` (Next.js HMR)

3. **Cookies esperadas pero ausentes**:
   - `sb-apgllwqsfjmtsjtewhsf-auth-token` (cookie principal)
   - `sb-apgllwqsfjmtsjtewhsf-auth-token.0` (fragmento 0)
   - `sb-apgllwqsfjmtsjtewhsf-auth-token.1` (fragmento 1)
   - etc.

## Pruebas a Realizar

### 1. Test de Cookies (URGENTE)
1. Visita: `http://localhost:3002/cookie-test`
2. Ingresa credentials válidos
3. Haz clic en "Ejecutar Test"
4. Observa los resultados en tiempo real

### 2. Test de Login Debug
1. Visita: `http://localhost:3002/login-debug`
2. Revisa la información de sesión y cookies
3. Prueba los diferentes métodos de redirección

### 3. Test de Login Simple
1. Visita: `http://localhost:3002/simple-login`
2. Ingresa credentials válidos
3. Observa los logs en la consola del navegador
4. Revisa si se establecen las cookies después del login

### 4. Test de API Debug
1. Visita: `http://localhost:3002/api/debug`
2. Revisa la respuesta JSON con información del servidor

## Posibles Causas y Soluciones

### Causa 1: Configuración de Cookies en el Cliente
- **Problema**: El cliente de Supabase no está configurando las cookies correctamente
- **Solución**: Verificar la configuración de cookies en `lib/supabase-browser.ts`

### Causa 2: Configuración de Dominio/Puerto
- **Problema**: Las cookies no se establecen en localhost:3002
- **Solución**: Revisar configuración de dominio en Supabase

### Causa 3: Configuración de Supabase
- **Problema**: Site URL o configuración de auth incorrecta
- **Solución**: Verificar variables de entorno y configuración de Supabase

### Causa 4: Middleware Interferencia
- **Problema**: El middleware está interfiriendo con el establecimiento de cookies
- **Solución**: Temporalmente deshabilitar middleware para login

## Pruebas Adicionales Recomendadas

### Test 1: Verificar Variables de Entorno
```bash
# Verificar que las variables están configuradas
echo $NEXT_PUBLIC_SUPABASE_URL
echo $NEXT_PUBLIC_SUPABASE_ANON_KEY
```

### Test 2: Verificar Configuración de Supabase
1. Ir al dashboard de Supabase
2. Verificar Site URL: `http://localhost:3002`
3. Verificar Redirect URLs: `http://localhost:3002/auth/callback`

### Test 3: Test Manual de Cookies
1. Abrir DevTools → Network
2. Hacer login
3. Verificar headers de Set-Cookie en las respuestas
4. Verificar si las cookies se establecen en Application → Cookies

## Próximos Pasos

1. **EJECUTAR** las pruebas de cookie-test
2. **REVISAR** logs detallados en la consola del navegador
3. **VERIFICAR** headers de respuesta en Network tab
4. **COMPARAR** comportamiento esperado vs actual
5. **IDENTIFICAR** exactamente dónde falla el proceso de establecimiento de cookies

## Logs Útiles

- Terminal del servidor: Ver logs del middleware
- Consola del navegador: Ver logs del cliente
- Network tab: Ver headers de Set-Cookie
- Application tab: Ver cookies establecidas

El problema está claramente en que las cookies de autenticación no se están estableciendo después del login exitoso. Las pruebas revelarán exactamente por qué.
