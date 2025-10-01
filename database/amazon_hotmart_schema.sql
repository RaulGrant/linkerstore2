-- Esquema para Amazon Products y Hotmart Banners
-- Ejecutar después del esquema principal

-- Tabla para cachear productos Amazon (evitar llamadas excesivas a la API)
CREATE TABLE amazon_products (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    asin VARCHAR(10) UNIQUE NOT NULL,
    title TEXT NOT NULL,
    description TEXT,
    image_url TEXT,
    amazon_url TEXT NOT NULL,
    category VARCHAR(100),
    last_updated TIMESTAMP DEFAULT NOW(),
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT NOW()
);

-- Tabla para métricas de clics Amazon
CREATE TABLE amazon_click_metrics (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    product_id UUID REFERENCES amazon_products(id),
    user_id UUID REFERENCES users(id),
    clicked_at TIMESTAMP DEFAULT NOW(),
    device_type VARCHAR(50),
    source_page VARCHAR(100)
);

-- Tabla para banners de Hotmart
CREATE TABLE hotmart_banners (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR(255) NOT NULL,
    description TEXT,
    image_url TEXT NOT NULL,
    hotmart_url TEXT NOT NULL,
    banner_type VARCHAR(50) NOT NULL, -- 'horizontal', 'vertical', 'square'
    weight INTEGER DEFAULT 1, -- Para probabilidad de aparición
    is_active BOOLEAN DEFAULT true,
    start_date TIMESTAMP,
    end_date TIMESTAMP,
    created_at TIMESTAMP DEFAULT NOW()
);

-- Tabla para métricas de banners
CREATE TABLE banner_metrics (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    banner_id UUID REFERENCES hotmart_banners(id),
    user_id UUID REFERENCES users(id),
    clicked_at TIMESTAMP DEFAULT NOW(),
    page_location VARCHAR(100),
    device_type VARCHAR(50)
);

-- Políticas RLS para Amazon Products
ALTER TABLE amazon_products ENABLE ROW LEVEL SECURITY;
ALTER TABLE amazon_click_metrics ENABLE ROW LEVEL SECURITY;

-- Permitir lectura pública de productos
CREATE POLICY "Productos visibles para todos" ON amazon_products
    FOR SELECT USING (true);

-- Solo admins pueden modificar productos
CREATE POLICY "Solo admins modifican productos" ON amazon_products
    FOR ALL USING (auth.uid() IN (SELECT id FROM users WHERE is_admin = true));

-- Usuario puede ver sus propios clics
CREATE POLICY "Ver propios clics" ON amazon_click_metrics
    FOR SELECT USING (auth.uid() = user_id);

-- Cualquier usuario autenticado puede registrar clics
CREATE POLICY "Registrar clics" ON amazon_click_metrics
    FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Políticas RLS para Hotmart Banners
ALTER TABLE hotmart_banners ENABLE ROW LEVEL SECURITY;
ALTER TABLE banner_metrics ENABLE ROW LEVEL SECURITY;

-- Permitir lectura pública de banners activos
CREATE POLICY "Banners activos visibles" ON hotmart_banners
    FOR SELECT USING (
        is_active = true AND
        (start_date IS NULL OR start_date <= NOW()) AND
        (end_date IS NULL OR end_date >= NOW())
    );

-- Solo admins pueden gestionar banners
CREATE POLICY "Gestión de banners por admins" ON hotmart_banners
    FOR ALL USING (auth.uid() IN (SELECT id FROM users WHERE is_admin = true));

-- Registrar métricas de clics
CREATE POLICY "Registrar clics en banners" ON banner_metrics
    FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Configuración de Storage para Banners
INSERT INTO storage.buckets (id, name, public)
VALUES ('banner-images', 'banner-images', true);

-- Política para acceso público a imágenes
CREATE POLICY "Imágenes públicas"
ON storage.objects FOR SELECT
USING (bucket_id = 'banner-images');

-- Política para upload por admins
CREATE POLICY "Upload por admins"
ON storage.objects FOR INSERT
WITH CHECK (
    bucket_id = 'banner-images' AND
    auth.uid() IN (SELECT id FROM users WHERE is_admin = true)
);

-- Datos de ejemplo para desarrollo
INSERT INTO amazon_products (asin, title, description, image_url, amazon_url, category) VALUES
('B08N5WRWNW', 'Echo Dot (4th Gen)', 'Smart speaker with Alexa', 'https://m.media-amazon.com/images/I/714Rq4k05UL._AC_SL1500_.jpg', 'https://amazon.com/dp/B08N5WRWNW', 'Electronics'),
('B07FZ8S74R', 'Fire TV Stick 4K', 'Streaming device with Alexa Voice Remote', 'https://m.media-amazon.com/images/I/51TjJOTfslL._AC_SL1000_.jpg', 'https://amazon.com/dp/B07FZ8S74R', 'Electronics'),
('B0833PFGML', 'Kindle Paperwhite', 'Waterproof e-reader', 'https://m.media-amazon.com/images/I/61T4CrwCANL._AC_SL1000_.jpg', 'https://amazon.com/dp/B0833PFGML', 'Books');

INSERT INTO hotmart_banners (title, description, image_url, hotmart_url, banner_type, weight) VALUES
('Curso de Programación Web', 'Aprende desarrollo web desde cero', 'https://via.placeholder.com/800x200/4A90E2/FFFFFF?text=Curso+Programacion+Web', 'https://hotmart.com/curso-programacion-web', 'horizontal', 3),
('Marketing Digital Avanzado', 'Domina las estrategias digitales', 'https://via.placeholder.com/300x600/E24A4A/FFFFFF?text=Marketing+Digital', 'https://hotmart.com/marketing-digital', 'vertical', 2),
('Diseño Gráfico Profesional', 'Crea diseños impactantes', 'https://via.placeholder.com/400x400/4AE24A/FFFFFF?text=Diseño+Grafico', 'https://hotmart.com/diseno-grafico', 'square', 1);
