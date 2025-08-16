-- Primero, eliminamos la tabla si existe (¡cuidado con esto en producción!)
DROP TABLE IF EXISTS users CASCADE;

-- Crear tipo enum para el tipo de usuario
DROP TYPE IF EXISTS user_type_enum CASCADE;
CREATE TYPE user_type_enum AS ENUM ('freelancer', 'company');

-- Crear la tabla users con la estructura correcta
CREATE TABLE users (
    id UUID PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    full_name VARCHAR(255),
    avatar_url TEXT,
    user_type user_type_enum NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    last_sign_in TIMESTAMP WITH TIME ZONE,
    is_verified BOOLEAN DEFAULT FALSE,
    openpay_customer_id VARCHAR(255)
);

-- Habilitar Row Level Security
ALTER TABLE users ENABLE ROW LEVEL SECURITY;

-- Política para permitir el registro inicial
CREATE POLICY "Permitir inserción durante registro"
ON users FOR INSERT
WITH CHECK (
    -- El usuario debe estar autenticado y el id debe coincidir
    auth.uid() IS NOT NULL AND
    id = auth.uid()
);

-- Política para permitir lectura de perfiles
CREATE POLICY "Permitir lectura de perfiles"
ON users FOR SELECT
USING (true);

-- Política para permitir actualización del propio perfil
CREATE POLICY "Permitir actualización del propio perfil"
ON users FOR UPDATE
USING (auth.uid() = id)
WITH CHECK (auth.uid() = id);

-- Crear trigger para actualizar updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_users_updated_at
    BEFORE UPDATE ON users
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();
