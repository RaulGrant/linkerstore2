-- Eliminar tipos ENUM existentes si existen
DROP TYPE IF EXISTS user_type_enum CASCADE;
DROP TYPE IF EXISTS payment_type_enum CASCADE;
DROP TYPE IF EXISTS project_status_enum CASCADE;
DROP TYPE IF EXISTS proposal_status_enum CASCADE;
DROP TYPE IF EXISTS payment_status_enum CASCADE;

-- Crear tipos ENUM
CREATE TYPE user_type_enum AS ENUM ('freelancer', 'company');
CREATE TYPE payment_type_enum AS ENUM ('card', 'clabe');
CREATE TYPE project_status_enum AS ENUM ('draft', 'active', 'in_progress', 'completed', 'cancelled');
CREATE TYPE proposal_status_enum AS ENUM ('pending', 'accepted', 'rejected');
CREATE TYPE payment_status_enum AS ENUM ('pending', 'completed', 'failed', 'refunded');

-- Users table
CREATE TABLE users (
    id UUID PRIMARY KEY,
    auth_id UUID NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    full_name VARCHAR(255),
    avatar_url TEXT,
    user_type user_type_enum NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    openpay_customer_id VARCHAR(255),
    is_verified BOOLEAN DEFAULT FALSE
);

-- Stored Payment Methods (Tokenized cards and bank accounts)
CREATE TABLE stored_payment_methods (
    id UUID PRIMARY KEY,
    user_id UUID REFERENCES users(id),
    openpay_token VARCHAR(255) NOT NULL,         -- Token seguro proporcionado por OpenPay
    payment_type payment_type_enum NOT NULL,     -- Tipo de método de pago
    last_four_digits VARCHAR(4) NOT NULL,        -- Últimos 4 dígitos (tarjeta) o últimos 4 de CLABE
    card_brand VARCHAR(50),                      -- Solo para tarjetas: Visa, Mastercard, etc.
    bank_name VARCHAR(100),                      -- Solo para CLABE: Nombre del banco
    holder_name VARCHAR(255) NOT NULL,           -- Nombre del titular
    expiration_month VARCHAR(2),                 -- Solo para tarjetas
    expiration_year VARCHAR(2),                  -- Solo para tarjetas
    is_default BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_used_at TIMESTAMP
);

-- User Profiles
CREATE TABLE user_profiles (
    user_id UUID PRIMARY KEY REFERENCES users(id),
    bio TEXT,
    location VARCHAR(255),
    skills TEXT[],
    hourly_rate DECIMAL(10,2),
    company_name VARCHAR(255),
    company_size VARCHAR(50),
    website_url VARCHAR(255),
    social_links JSONB,
    portfolio_items JSONB[]
);

-- Projects
CREATE TABLE projects (
    id UUID PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    company_id UUID REFERENCES users(id),
    budget_min DECIMAL(10,2),
    budget_max DECIMAL(10,2),
    status project_status_enum NOT NULL,
    skills_required TEXT[],
    deadline DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Proposals
CREATE TABLE proposals (
    id UUID PRIMARY KEY,
    project_id UUID REFERENCES projects(id),
    freelancer_id UUID REFERENCES users(id),
    cover_letter TEXT,
    proposed_amount DECIMAL(10,2),
    estimated_duration INTEGER,
    status proposal_status_enum NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Payments
CREATE TABLE payments (
    id UUID PRIMARY KEY,
    project_id UUID REFERENCES projects(id),
    payer_id UUID REFERENCES users(id),
    payee_id UUID REFERENCES users(id),
    amount DECIMAL(10,2) NOT NULL,
    status payment_status_enum NOT NULL,
    payment_method_id UUID,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    transaction_id VARCHAR(255)
);

-- Notifications
CREATE TABLE notifications (
    id VARCHAR(255) PRIMARY KEY,
    user_id VARCHAR(255) REFERENCES users(id),
    title VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    type VARCHAR(50) NOT NULL,
    is_read BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Reviews
CREATE TABLE reviews (
    id VARCHAR(255) PRIMARY KEY,
    project_id VARCHAR(255) REFERENCES projects(id),
    reviewer_id VARCHAR(255) REFERENCES users(id),
    reviewed_id VARCHAR(255) REFERENCES users(id),
    rating INTEGER CHECK (rating >= 1 AND rating <= 5),
    comment TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Messages
CREATE TABLE messages (
    id VARCHAR(255) PRIMARY KEY,
    sender_id VARCHAR(255) REFERENCES users(id),
    receiver_id VARCHAR(255) REFERENCES users(id),
    content TEXT NOT NULL,
    is_read BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Enable RLS
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;

-- Policies for user_profiles
CREATE POLICY "Users can view their own profile"
    ON user_profiles
    FOR SELECT
    USING (auth.uid() = user_id);

CREATE POLICY "Users can update their own profile"
    ON user_profiles
    FOR UPDATE
    USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own profile"
    ON user_profiles
    FOR INSERT
    WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Public profiles are viewable by everyone"
    ON user_profiles
    FOR SELECT
    USING (true);  -- Todos pueden ver los perfiles públicos

-- Enable RLS on stored_payment_methods
ALTER TABLE stored_payment_methods ENABLE ROW LEVEL SECURITY;

-- Policies for stored_payment_methods
CREATE POLICY "Users can view their own payment methods"
    ON stored_payment_methods
    FOR SELECT
    USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own payment methods"
    ON stored_payment_methods
    FOR INSERT
    WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own payment methods"
    ON stored_payment_methods
    FOR UPDATE
    USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own payment methods"
    ON stored_payment_methods
    FOR DELETE
    USING (auth.uid() = user_id);
