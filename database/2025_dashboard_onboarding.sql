-- Tabla de vacantes (si se requiere separar de projects)
CREATE TABLE IF NOT EXISTS vacancies (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    company_id UUID REFERENCES users(id) ON DELETE CASCADE,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    skills_required TEXT[],
    salary_min DECIMAL(10,2),
    salary_max DECIMAL(10,2),
    location VARCHAR(255),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW())
);

-- Políticas RLS para vacancies
ALTER TABLE vacancies ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Empresas pueden gestionar sus vacantes"
    ON vacancies FOR ALL
    USING (auth.uid() = company_id);

-- Mejorar user_profiles: agregar campos si faltan
ALTER TABLE user_profiles
    ADD COLUMN IF NOT EXISTS photo_url TEXT,
    ADD COLUMN IF NOT EXISTS sector VARCHAR(255),
    ADD COLUMN IF NOT EXISTS facilities TEXT;

-- Políticas para portfolio_projects ya existen y son correctas

-- Storage: buckets y políticas ya existen y son correctas
