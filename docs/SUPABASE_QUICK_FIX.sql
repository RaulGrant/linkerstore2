-- SCRIPT RÁPIDO PARA SOLUCIONAR EL ERROR "Database error saving new user"
-- Ejecutar en el SQL Editor de Supabase Dashboard

-- 1. Crear tabla de perfiles si no existe
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  full_name TEXT,
  user_type TEXT CHECK (user_type IN ('freelancer', 'company')),
  avatar_url TEXT,
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Habilitar RLS en la tabla profiles
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- 3. Crear políticas RLS básicas
-- Eliminar políticas existentes si existen
DROP POLICY IF EXISTS "Public profiles are viewable by everyone." ON public.profiles;
DROP POLICY IF EXISTS "Users can update own profile." ON public.profiles;
DROP POLICY IF EXISTS "Users can insert own profile." ON public.profiles;

-- Crear nuevas políticas
CREATE POLICY "Public profiles are viewable by everyone." ON public.profiles
  FOR SELECT USING (true);

CREATE POLICY "Users can update own profile." ON public.profiles
  FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Users can insert own profile." ON public.profiles
  FOR INSERT WITH CHECK (auth.uid() = id);

-- 4. Crear función para manejar nuevos usuarios
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
EXCEPTION
  WHEN others THEN
    -- Log del error pero continuar con el proceso
    RAISE LOG 'Error creating profile for user %: %', new.id, SQLERRM;
    RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 5. Crear trigger para auto-creación de perfiles
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();

-- 6. Función para actualizar updated_at
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- 7. Trigger para updated_at
DROP TRIGGER IF EXISTS handle_updated_at ON public.profiles;
CREATE TRIGGER handle_updated_at 
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW EXECUTE PROCEDURE public.handle_updated_at();

-- 8. Verificar que todo está configurado correctamente
SELECT 
  'profiles table exists' as status,
  table_name 
FROM information_schema.tables 
WHERE table_schema = 'public' AND table_name = 'profiles';

SELECT 
  'RLS policies count' as status,
  count(*) as policy_count
FROM pg_policies 
WHERE schemaname = 'public' AND tablename = 'profiles';

SELECT 
  'Triggers count' as status,
  count(*) as trigger_count
FROM information_schema.triggers 
WHERE event_object_schema = 'auth' AND event_object_table = 'users';
