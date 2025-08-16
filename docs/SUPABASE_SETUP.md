# Configuración de Base de Datos Supabase para LinkerPro

## Error: "Database error saving new user"

Este error ocurre cuando Supabase no puede guardar el usuario en la base de datos. Aquí están las soluciones:

## 1. SQL para crear/actualizar el esquema de usuarios

```sql
-- 1. Verificar que existe la tabla auth.users (ya existe por defecto en Supabase)

-- 2. Crear tabla de perfiles públicos
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  full_name TEXT,
  user_type TEXT CHECK (user_type IN ('freelancer', 'company')),
  avatar_url TEXT,
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Habilitar RLS en la tabla profiles
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- 4. Políticas RLS para profiles
-- Permitir que los usuarios lean su propio perfil y perfiles públicos
CREATE POLICY "Public profiles are viewable by everyone." ON public.profiles
  FOR SELECT USING (true);

-- Permitir que los usuarios actualicen su propio perfil
CREATE POLICY "Users can update own profile." ON public.profiles
  FOR UPDATE USING (auth.uid() = id);

-- Permitir que los usuarios inserten su propio perfil
CREATE POLICY "Users can insert own profile." ON public.profiles
  FOR INSERT WITH CHECK (auth.uid() = id);

-- 5. Función para crear perfil automáticamente
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name, user_type)
  VALUES (
    new.id,
    new.raw_user_meta_data->>'full_name',
    new.raw_user_meta_data->>'user_type'
  );
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 6. Trigger para crear perfil automáticamente cuando se registra un usuario
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();

-- 7. Función para actualizar updated_at automáticamente
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- 8. Trigger para updated_at
CREATE TRIGGER handle_updated_at BEFORE UPDATE ON public.profiles
  FOR EACH ROW EXECUTE PROCEDURE public.handle_updated_at();
```

## 2. Verificar configuración de Auth en Supabase Dashboard

### En el Dashboard de Supabase:

1. **Authentication > Settings > Auth Policies**
   - Asegúrate de que esté habilitado "Enable email confirmations"
   - Configura "Site URL" como: `https://v0-linker-pro-platform.vercel.app`
   - Configura "Redirect URLs" como: `https://v0-linker-pro-platform.vercel.app/auth/callback`

2. **Authentication > URL Configuration**
   ```
   Site URL: https://v0-linker-pro-platform.vercel.app
   Redirect URLs: 
     - https://v0-linker-pro-platform.vercel.app/auth/callback
     - http://localhost:3000/auth/callback (para desarrollo)
   ```

3. **Database > Tables**
   - Verificar que existe la tabla `profiles`
   - Verificar que las políticas RLS estén activas

## 3. Variables de entorno requeridas

```env
NEXT_PUBLIC_SUPABASE_URL=https://apgllwqsfjmtsjtewhsf.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_anon_key_aqui
SUPABASE_SERVICE_ROLE_KEY=tu_service_role_key_aqui
```

## 4. Solución temporal (si el problema persiste)

Si las políticas RLS están causando problemas, puedes temporalmente:

```sql
-- SOLO PARA DEBUGGING - NO USAR EN PRODUCCIÓN
ALTER TABLE public.profiles DISABLE ROW LEVEL SECURITY;
```

## 5. Verificar el problema

Para diagnosticar específicamente:

```sql
-- Ver logs de errores en el Dashboard de Supabase
-- SQL Editor > Logs > Auth Logs

-- Verificar si la tabla profiles existe
SELECT * FROM information_schema.tables WHERE table_name = 'profiles';

-- Verificar políticas RLS
SELECT * FROM pg_policies WHERE tablename = 'profiles';

-- Verificar triggers
SELECT * FROM information_schema.triggers WHERE event_object_table = 'users';
```

## 6. Pasos para resolver

1. Ejecuta el SQL del punto 1 en el SQL Editor de Supabase
2. Verifica la configuración de Auth URLs
3. Revisa las variables de entorno
4. Prueba el registro nuevamente
5. Si falla, revisa los logs en Supabase Dashboard > Logs
