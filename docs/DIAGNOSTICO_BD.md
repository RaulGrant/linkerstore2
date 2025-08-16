# 🛠️ Diagnóstico: Error de Esquema de Base de Datos

## ❌ Problema Detectado
```
Error: "Could not find the 'name' column of 'user_profiles' in the schema cache"
```

## 🔍 Análisis
- La tabla `user_profiles` existe en Supabase
- Pero **NO tiene** la columna `name` que el código está intentando insertar
- Esto significa que nuestros scripts SQL no se han ejecutado correctamente

## 🎯 Solución Requerida

### Opción 1: Ejecutar Script SQL en Supabase Dashboard
1. **Ir a Supabase Dashboard**
2. **Abrir SQL Editor**
3. **Ejecutar el siguiente SQL**:

```sql
-- Verificar estructura actual
SELECT column_name, data_type, is_nullable 
FROM information_schema.columns 
WHERE table_name = 'user_profiles' 
ORDER BY ordinal_position;

-- Agregar columnas faltantes si no existen
ALTER TABLE user_profiles 
ADD COLUMN IF NOT EXISTS name VARCHAR(255),
ADD COLUMN IF NOT EXISTS user_type VARCHAR(50) DEFAULT 'freelancer';

-- Verificar nueva estructura
SELECT column_name, data_type, is_nullable 
FROM information_schema.columns 
WHERE table_name = 'user_profiles' 
ORDER BY ordinal_position;
```

### Opción 2: Solución Temporal (Mientras se arregla la BD)
Modificar el código para usar solo campos que existen:

```typescript
// En dashboard layout, cambiar:
const { error: insertError } = await supabase
  .from("user_profiles")
  .insert({
    user_id: session.user.id,
    // NO incluir 'name' y 'user_type' hasta que se agreguen a la BD
  })
```

## 🧪 Testing Después del Fix

### 1. Verificar que la inserción funcione
- Recargar `/dashboard`
- No debería mostrar error de creación de usuario

### 2. Probar el formulario de perfil
- Ir a `/profile`
- Llenar datos
- Guardar cambios
- Verificar que se guarden correctamente

## 📋 Estado Actual
- ✅ **Autenticación**: Funcionando (sesión encontrada)
- ✅ **Dashboard**: Carga correctamente
- ❌ **Creación automática de perfil**: Falla por esquema
- ❓ **Formulario de perfil**: Por verificar tras fix de BD

## 🚨 Siguiente Paso
**EJECUTAR SQL EN SUPABASE DASHBOARD INMEDIATAMENTE**
