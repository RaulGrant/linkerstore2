-- Eliminar políticas existentes si las hay
DROP POLICY IF EXISTS "Users can insert their own profile during registration" ON users;
DROP POLICY IF EXISTS "Profiles are viewable by everyone" ON users;
DROP POLICY IF EXISTS "Users can update own profile" ON users;
DROP POLICY IF EXISTS "Users can delete own profile" ON users;

-- Deshabilitar temporalmente RLS para la inserción inicial
ALTER TABLE users DISABLE ROW LEVEL SECURITY;

-- Crear una función para verificar si un usuario está en proceso de registro
CREATE OR REPLACE FUNCTION is_registration_email(reg_email TEXT)
RETURNS BOOLEAN AS $$
BEGIN
    -- Verificar si el email existe en auth.users pero no en public.users
    RETURN EXISTS (
        SELECT 1 FROM auth.users u
        WHERE u.email = reg_email 
        AND u.id = auth.uid()
        AND NOT EXISTS (
            SELECT 1 FROM public.users 
            WHERE email = reg_email
        )
    );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Habilitar RLS en la tabla users
ALTER TABLE users ENABLE ROW LEVEL SECURITY;

-- Política para permitir inserción durante el registro (más permisiva)
CREATE POLICY "Enable insert during registration"
ON users FOR INSERT
WITH CHECK (
    -- Permitir la inserción si el email está en proceso de registro y el auth_id coincide
    is_registration_email(email) AND
    auth_id = (auth.uid())::text
);

-- Política para permitir lectura de perfiles públicos
CREATE POLICY "Enable read access for all users"
ON users FOR SELECT
USING (true);

-- Política para permitir actualización del propio perfil
CREATE POLICY "Enable update for users based on id"
ON users FOR UPDATE
USING (auth.uid() = id)
WITH CHECK (auth.uid() = id);

-- Política para permitir eliminación del propio perfil
CREATE POLICY "Enable delete for users based on id"
ON users FOR DELETE
USING (auth.uid() = id);
