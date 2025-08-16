-- Crear función para manejar nuevos usuarios automáticamente
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.users (id, email, full_name, user_type, is_verified)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'full_name', ''),
    COALESCE(NEW.raw_user_meta_data->>'user_type', 'freelancer')::user_type_enum,
    CASE WHEN NEW.email_confirmed_at IS NOT NULL THEN true ELSE false END
  )
  ON CONFLICT (id) DO UPDATE SET
    is_verified = CASE WHEN NEW.email_confirmed_at IS NOT NULL THEN true ELSE false END,
    email = NEW.email,
    updated_at = NOW();
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Crear trigger para ejecutar la función cuando se crea o actualiza un usuario en auth.users
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT OR UPDATE ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Actualizar políticas para permitir que el trigger funcione
DROP POLICY IF EXISTS "Permitir inserción durante registro" ON users;
CREATE POLICY "Permitir inserción por trigger y usuario autenticado"
ON users FOR INSERT
WITH CHECK (
    -- Permitir inserción por el trigger del sistema o por usuario autenticado
    auth.uid() IS NULL OR auth.uid() = id
);
