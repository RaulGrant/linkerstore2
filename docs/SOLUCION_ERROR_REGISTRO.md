# Solución para el Error "Database error saving new user"

## Problema
El error "Database error saving new user" aparece cuando un usuario intenta registrarse en LinkerPro. Este error indica que Supabase no puede crear el perfil del usuario debido a una configuración incompleta de la base de datos.

## Causa del Error
El error se produce porque:
1. Falta la tabla `profiles` en la base de datos
2. Las políticas de Row Level Security (RLS) no están configuradas correctamente
3. El trigger para crear perfiles automáticamente no existe
4. Problemas de permisos en la base de datos

## Solución Implementada

### 1. Corrección del Import Faltante
**Archivo:** `components/auth/RegisterForm.tsx`
- Agregado: `import { getCallbackUrl } from "@/lib/utils/urls"`

### 2. Mejora del Manejo de Errores
**Archivo:** `components/auth/RegisterForm.tsx`
- Mejorado el manejo de errores específicos de Supabase
- Agregado logging adicional para debug
- Agregado enlace a página de instrucciones cuando ocurre el error de base de datos

### 3. Script SQL para Configuración Rápida
**Archivo:** `docs/SUPABASE_QUICK_FIX.sql`
- Script SQL completo para crear la tabla `profiles`
- Configuración de políticas RLS
- Creación de triggers para auto-creación de perfiles
- Manejo de errores en la función del trigger

### 4. Componente de Instrucciones
**Archivo:** `components/debug/SupabaseSetupInstructions.tsx`
- Componente React con instrucciones paso a paso
- Botón para copiar el script SQL
- Enlaces directos a Supabase Dashboard

### 5. Página de Debug
**Archivo:** `app/debug/supabase/page.tsx`
- Página dedicada para mostrar instrucciones de configuración
- Accesible desde el error de registro
- Información adicional sobre el problema

## Pasos para Resolver el Error

### Para el Administrador:
1. **Ir a Supabase Dashboard**
   - Visitar: https://supabase.com/dashboard
   - Seleccionar el proyecto LinkerPro

2. **Ejecutar el Script SQL**
   - Ir a "SQL Editor" en el menú lateral
   - Crear nueva consulta
   - Copiar y pegar el contenido de `docs/SUPABASE_QUICK_FIX.sql`
   - Ejecutar el script (botón "RUN")

3. **Verificar la Configuración**
   - Ir a "Table Editor" → verificar que existe la tabla `profiles`
   - Ir a "Authentication" → "Policies" → verificar las políticas RLS
   - Probar el registro de un usuario

### Para el Usuario:
1. Si aparece el error "Database error saving new user"
2. Hacer clic en "Ver instrucciones de configuración →"
3. Seguir las instrucciones en la página `/debug/supabase`
4. Contactar al administrador si el problema persiste

## Archivos Modificados

### Nuevos Archivos:
- `docs/SUPABASE_QUICK_FIX.sql` - Script SQL para configuración rápida
- `components/debug/SupabaseSetupInstructions.tsx` - Componente de instrucciones
- `app/debug/supabase/page.tsx` - Página de debug

### Archivos Modificados:
- `components/auth/RegisterForm.tsx` - Import corregido y mejor manejo de errores

## Configuración de Supabase Requerida

### URLs de Autenticación:
```
Site URL: https://v0-linker-pro-platform.vercel.app
Redirect URLs: 
  - https://v0-linker-pro-platform.vercel.app/auth/callback
  - http://localhost:3000/auth/callback
```

### Variables de Entorno (ya configuradas):
```bash
NEXT_PUBLIC_SUPABASE_URL=https://apgllwqsfjmtsjtewhsf.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

## Resultado
- ✅ Error de import corregido
- ✅ Manejo de errores mejorado
- ✅ Script SQL creado para configuración rápida
- ✅ Página de debug con instrucciones claras
- ✅ Proyecto compila sin errores
- ✅ Listo para deployment

## Próximos Pasos
1. Ejecutar el script SQL en Supabase Dashboard
2. Probar el registro de usuario
3. Verificar que el error se haya resuelto
4. Hacer deploy de los cambios a Vercel
