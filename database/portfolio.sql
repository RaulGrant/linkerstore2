-- Tabla para proyectos de portafolio
CREATE TABLE portfolio_projects (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    image_url TEXT,
    project_url TEXT,
    technologies TEXT[],
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW())
);

-- Trigger para actualizar updated_at
CREATE TRIGGER set_timestamp
    BEFORE UPDATE ON portfolio_projects
    FOR EACH ROW
    EXECUTE FUNCTION trigger_set_timestamp();

-- Políticas RLS
ALTER TABLE portfolio_projects ENABLE ROW LEVEL SECURITY;

-- Política para leer proyectos (público)
CREATE POLICY "Proyectos visibles públicamente"
    ON portfolio_projects FOR SELECT
    USING (true);

-- Política para crear proyectos (usuario autenticado, solo sus propios proyectos)
CREATE POLICY "Los usuarios pueden crear sus propios proyectos"
    ON portfolio_projects FOR INSERT
    WITH CHECK (auth.uid() = user_id);

-- Política para actualizar proyectos (usuario autenticado, solo sus propios proyectos)
CREATE POLICY "Los usuarios pueden actualizar sus propios proyectos"
    ON portfolio_projects FOR UPDATE
    USING (auth.uid() = user_id);

-- Política para eliminar proyectos (usuario autenticado, solo sus propios proyectos)
CREATE POLICY "Los usuarios pueden eliminar sus propios proyectos"
    ON portfolio_projects FOR DELETE
    USING (auth.uid() = user_id);
