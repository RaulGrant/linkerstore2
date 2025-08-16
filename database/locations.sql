-- Agregar campos de ubicación a la tabla users
ALTER TABLE users 
ADD COLUMN IF NOT EXISTS latitude double precision,
ADD COLUMN IF NOT EXISTS longitude double precision,
ADD COLUMN IF NOT EXISTS location_name text;

-- Crear índice para búsquedas geoespaciales
CREATE INDEX IF NOT EXISTS users_location_idx 
ON users USING gist (point(longitude, latitude));

-- Política RLS para ver ubicaciones
CREATE POLICY "Users can see locations"
ON public.users
FOR SELECT
TO authenticated
USING (true);

-- Política RLS para actualizar su propia ubicación
CREATE POLICY "Users can update their own location"
ON public.users
FOR UPDATE
TO authenticated
USING (auth.uid() = id)
WITH CHECK (auth.uid() = id);
