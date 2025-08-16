# Plan de Acción Detallado - LinkerPro

## 1. Configuración Inicial (3-4 días)

### Día 1: Configuración del Proyecto
- Configuración de Supabase
  ```bash
  npm install @supabase/supabase-js @supabase/auth-helpers-nextjs
  ```
- Configuración de variables de entorno en `.env.local`
- Implementación de tipos TypeScript para Supabase

### Día 2-3: Configuración de Autenticación
- Implementación de middleware de autenticación
- Creación de contexto de autenticación
- Implementación de rutas protegidas

### Día 4: Configuración de OpenPay
- Configuración de OpenPay SDK
- Implementación de webhooks
- Configuración de variables de entorno para OpenPay

## 2. Desarrollo de Componentes Base (1 semana)

### Componentes de Autenticación
- `components/auth/LoginForm.tsx`
  - Formulario de inicio de sesión
  - Integración con proveedores sociales
  - Manejo de errores

- `components/auth/RegisterForm.tsx`
  - Formulario de registro
  - Validación de campos
  - Selección de tipo de usuario (freelancer/empresa)

### Componentes de Layout
- `components/layout/DashboardLayout.tsx`
  - Navegación principal
  - Sidebar responsivo
  - Menú de usuario

- `components/layout/ProfileLayout.tsx`
  - Estructura de perfil
  - Navegación de secciones

## 3. Desarrollo de Características Principales (2 semanas)

### Semana 1: Gestión de Usuarios y Perfiles

#### Día 1-2: Sistema de Usuarios
- `app/profile/page.tsx`
  - Edición de perfil
  - Carga de avatar
  - Gestión de información básica

#### Día 3-4: Perfiles Profesionales
- `app/portfolio/page.tsx`
  - Gestión de portafolio
  - Carga de proyectos
  - Gestión de habilidades

#### Día 5: Búsqueda y Filtros
- `app/map-empresas/page.tsx` y `app/map-freelancers/page.tsx`
  - Implementación de filtros
  - Sistema de búsqueda
  - Visualización de resultados

### Semana 2: Proyectos y Propuestas

#### Día 1-2: Sistema de Proyectos
- `app/projects/page.tsx`
  - Creación de proyectos
  - Listado de proyectos
  - Gestión de estados

#### Día 3-4: Sistema de Propuestas
- `app/proposals/page.tsx`
  - Creación de propuestas
  - Sistema de evaluación
  - Gestión de estados

#### Día 5: Dashboard
- `app/dashboard/page.tsx`
  - Métricas principales
  - Resumen de actividad
  - Notificaciones

## 4. Implementación del Sistema de Pagos (1 semana)

### Día 1-2: Integración de OpenPay y Gestión de Tarjetas

#### Configuración de OpenPay Client
- `lib/openpay.ts`
  ```typescript
  import Openpay from 'openpay';
  
  export const openpay = new Openpay(
    process.env.NEXT_PUBLIC_OPENPAY_MERCHANT_ID!,
    process.env.NEXT_PUBLIC_OPENPAY_PUBLIC_KEY!,
    process.env.NODE_ENV === 'production' ? false : true
  );
  ```

#### Componente de Formulario de Tarjeta
- `components/payment/PaymentForm.tsx`
  ```typescript
  interface CardFormData {
    card_number: string;
    holder_name: string;
    expiration_month: string;
    expiration_year: string;
    cvv2: string;
  }

  const PaymentForm = () => {
    const saveCard = async (cardData: CardFormData) => {
      // 1. Tokenizar tarjeta con OpenPay
      const tokenizedCard = await openpay.cards.create(
        user.openpay_customer_id,
        cardData
      );

      // 2. Guardar referencia segura en Supabase
      await supabase.from('stored_payment_methods').insert({
        user_id: user.id,
        openpay_token: tokenizedCard.id,
        payment_type: 'card',
        last_four_digits: cardData.card_number.slice(-4),
        card_brand: tokenizedCard.card_brand,
        holder_name: cardData.holder_name,
        expiration_month: cardData.expiration_month,
        expiration_year: cardData.expiration_year,
        is_default: true
      });
    };
    // ... resto del componente
  };
  ```

#### Componente de Selección de Tarjeta Guardada
- `components/payment/SavedCardsSelector.tsx`
  ```typescript
  const SavedCardsSelector = () => {
    // Obtener tarjetas guardadas del usuario
    const { data: savedCards } = await supabase
      .from('stored_payment_methods')
      .select('*')
      .eq('user_id', user.id);

    return (
      <Select>
        {savedCards.map(card => (
          <SelectItem key={card.id} value={card.id}>
            {card.card_brand} **** {card.last_four_digits}
          </SelectItem>
        ))}
      </Select>
    );
  };
  ```

### Día 3-4: Sistema de Pagos y Procesamiento

#### Modal de Pago con Métodos Guardados
- `components/payment/PaymentModal.tsx`
  ```typescript
  const PaymentModal = () => {
    const processPayment = async (
      amount: number,
      paymentMethodId: string
    ) => {
      // 1. Obtener token guardado
      const { data: paymentMethod } = await supabase
        .from('stored_payment_methods')
        .select('openpay_token')
        .eq('id', paymentMethodId)
        .single();

      // 2. Realizar cargo
      const charge = await openpay.charges.create({
        source_id: paymentMethod.openpay_token,
        method: 'card',
        amount: amount,
        currency: 'MXN',
        description: 'Pago de servicio',
        customer: { id: user.openpay_customer_id }
      });

      // 3. Registrar transacción
      await supabase.from('payments').insert({
        project_id: currentProject.id,
        payer_id: user.id,
        payee_id: projectOwner.id,
        amount: amount,
        status: charge.status,
        payment_method_id: paymentMethodId,
        transaction_id: charge.id
      });
    };
    // ... resto del componente
  };
  ```

#### API Routes para Webhooks
- `app/api/webhooks/openpay/route.ts`
  ```typescript
  export async function POST(req: Request) {
    const event = await req.json();
    
    // Actualizar estado de pago en base de datos
    await supabase
      .from('payments')
      .update({ status: event.type })
      .eq('transaction_id', event.transaction.id);

    return new Response('OK', { status: 200 });
  }
  ```

### Día 5: Historial y Gestión de Pagos

#### Vista de Métodos de Pago
- `app/payment-methods/page.tsx`
  - Listado de tarjetas guardadas
  - Opción para establecer tarjeta predeterminada
  - Eliminación segura de tarjetas

#### Historial de Transacciones
- `app/payments/page.tsx`
  - Historial detallado de pagos
  - Filtros por estado y fecha
  - Desglose de comisiones
  - Exportación de reportes

#### Componente de Estado de Cuenta
- `components/payment/AccountBalance.tsx`
  - Saldo actual
  - Pagos pendientes
  - Ingresos del mes

## 5. Sistema de Mensajería en Tiempo Real (1 semana)

### Día 1-2: Configuración de Tiempo Real
- Configuración de Supabase Realtime
- Implementación de suscripciones
- Gestión de conexiones

### Día 3-4: Interfaz de Mensajería
- `components/chat/ChatWindow.tsx`
  - Ventana de chat
  - Lista de conversaciones
  - Indicadores de estado

### Día 5: Notificaciones
- `components/notifications/NotificationCenter.tsx`
  - Notificaciones en tiempo real
  - Centro de notificaciones
  - Preferencias de notificaciones

## 6. Testing y Optimización (1 semana)

### Día 1-2: Testing
- Pruebas de integración
- Pruebas de componentes
- Pruebas de autenticación

### Día 2-3: Pruebas de Integración de Pago

#### Pruebas de Componentes
- Test del formulario de tarjeta (`PaymentForm`)
  ```typescript
  // components/__tests__/PaymentForm.test.tsx
  - Validación de campos requeridos
  - Formato correcto de tarjeta
  - Manejo de errores de OpenPay
  - Integración con Supabase
  ```

- Test del selector de tarjetas (`SavedCards`)
  ```typescript
  // components/__tests__/SavedCards.test.tsx
  - Carga de tarjetas guardadas
  - Selección de tarjeta predeterminada
  - Cambio de tarjeta seleccionada
  ```

- Test del modal de pago (`PaymentModal`)
  ```typescript
  // components/__tests__/PaymentModal.test.tsx
  - Flujo completo de pago con tarjeta guardada
  - Flujo de pago con tarjeta nueva
  - Manejo de errores en el proceso
  ```

#### Pruebas de Integración
- Test de flujo completo
  - Registro de usuario
  - Agregar tarjeta
  - Realizar pago
  - Verificar webhook
  - Confirmar actualización en base de datos

### Día 3-4: Optimización
- Optimización de rendimiento
- Lazy loading
- Optimización de imágenes

### Día 5: Documentación
- Documentación técnica
- Guías de usuario
- Manuales de administración

## Tiempo Total Estimado: 6-7 semanas

### Desglose de Tiempo
- Configuración Inicial: 3-4 días
- Componentes Base: 1 semana
- Características Principales: 2 semanas
- Sistema de Pagos: 1 semana
- Mensajería en Tiempo Real: 1 semana
- Testing y Optimización: 1 semana

## Consideraciones Técnicas Importantes

### Supabase
- Implementar Políticas RLS para cada tabla
- Configurar buckets para almacenamiento de archivos
- Optimizar consultas para tiempo real

### OpenPay
- Implementar sistema de retry para pagos fallidos
- Manejar webhooks de forma asíncrona
- Implementar sistema de reembolsos

### Arquitectura
- Implementar patrón de repositorio para acceso a datos
- Usar React Query para estado del servidor
- Implementar manejo de errores global

## 7. Integración de Embudo de Ventas de Afiliados Amazon (1 semana)

### Día 1: Configuración y Base de Datos

#### Configuración de Amazon Product Advertising API
- Registro y obtención de credenciales de Amazon Associates
- Configuración de variables de entorno:
  ```bash
  AMAZON_ACCESS_KEY=
  AMAZON_SECRET_KEY=
  AMAZON_ASSOCIATE_TAG=
  AMAZON_REGION=
  ```

#### Esquema de Supabase para productos y métricas
```sql
-- Tabla para cachear productos Amazon (evitar llamadas excesivas a la API)
CREATE TABLE amazon_products (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    asin VARCHAR(10) UNIQUE NOT NULL,
    title TEXT NOT NULL,
    description TEXT,
    price_amount DECIMAL(10,2),
    price_currency VARCHAR(3),
    image_url TEXT,
    amazon_url TEXT NOT NULL,
    category VARCHAR(100),
    last_updated TIMESTAMP DEFAULT NOW(),
    is_active BOOLEAN DEFAULT true
);

-- Tabla para métricas de clics
CREATE TABLE amazon_click_metrics (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    product_id UUID REFERENCES amazon_products(id),
    user_id UUID REFERENCES users(id),
    clicked_at TIMESTAMP DEFAULT NOW(),
    device_type VARCHAR(50),
    source_page VARCHAR(100)
);

-- Políticas RLS
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
```

### Día 2: Componentes Base y Rutas

#### Nuevas Rutas y Componentes
- `app/store/page.tsx` - Página principal de la tienda
- `app/store/[asin]/page.tsx` - Página de detalle de producto
- `components/store/ProductCard.tsx` - Tarjeta de producto reutilizable
- `components/store/ProductGrid.tsx` - Grid de productos con paginación
- `components/store/SearchFilters.tsx` - Buscador y filtros
- `components/store/CartSimulator.tsx` - Simulador de carrito
- `lib/amazon.ts` - Cliente de Amazon Product Advertising API

### Día 3-4: Implementación de Funcionalidades

#### Cliente de Amazon API
```typescript
// lib/amazon.ts
import { ProductAdvertisingAPIv1 } from 'amazon-paapi'

export const amazonClient = new ProductAdvertisingAPIv1({
    accessKey: process.env.AMAZON_ACCESS_KEY!,
    secretKey: process.env.AMAZON_SECRET_KEY!,
    tag: process.env.AMAZON_ASSOCIATE_TAG!,
    region: process.env.AMAZON_REGION!
});
```

#### API Routes para Productos
```typescript
// app/api/store/products/route.ts
export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const query = searchParams.get('query');
    
    // Buscar primero en caché (Supabase)
    let products = await supabase
        .from('amazon_products')
        .select('*')
        .eq('is_active', true)
        .order('last_updated', { ascending: false });
        
    // Si no hay resultados o están desactualizados, consultar API Amazon
    if (!products.data?.length) {
        const amazonProducts = await amazonClient.getProducts({...});
        // Guardar en caché
        await supabase.from('amazon_products').upsert([...]);
    }
    
    return Response.json(products);
}
```

### Día 5: Testing y Optimización

#### Pruebas y Validación
- Test de rendimiento de caché
- Validación de enlaces de afiliados
- Pruebas de usuario en móvil y desktop
- Verificación de políticas de Amazon Associates

## 8. Integración de Banners de Cursos Hotmart (1 semana)

### Día 1: Configuración y Base de Datos

#### Esquema de Supabase para Banners
```sql
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

-- Políticas RLS
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
```

### Día 2: Componentes y Lógica

#### Componentes de Banner
- `components/banners/BannerDisplay.tsx` - Componente principal
- `components/banners/BannerRotator.tsx` - Rotación aleatoria
- `lib/banners.ts` - Lógica de selección y rotación

### Día 3-4: Implementación y Storage

#### Configuración de Storage para Banners
```sql
-- Crear bucket para imágenes de banners
INSERT INTO storage.buckets (id, name)
VALUES ('banner-images', 'banner-images');

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
```

### Día 5: Integración y Testing

#### Sistema de Rotación
```typescript
// lib/banners.ts
export async function getRandomBanners(location: string, count: number = 1) {
    const { data: banners } = await supabase
        .from('hotmart_banners')
        .select('*')
        .eq('is_active', true)
        .gte('end_date', new Date().toISOString())
        .order('weight', { ascending: false });
        
    return weightedRandomSelection(banners, count);
}
```

## Consideraciones Técnicas Adicionales

### Amazon Associates
- Implementar cache con TTL para productos Amazon
- Respetar límites de API y políticas de precio
- Implementar sistema de fallback para cuando la API no responde
- Mantener registros de clics para análisis

### Hotmart
- Sistema de programación de banners (start/end dates)
- Rotación inteligente basada en CTR histórico
- Optimización de imágenes en Storage
- A/B testing de diseños de banner

### Seguridad y Compliance
- Avisos legales de afiliación Amazon
- Términos de uso actualizados
- GDPR/LGPD para métricas
- Políticas de caché y datos de productos

### Monitoreo
- Dashboard de métricas de afiliados
- Alertas de API limits
- Monitoreo de conversión
- Reportes de rendimiento

## 7. Integración de Embudo de Ventas de Afiliados Amazon (1 semana)

### Objetivo
Permitir a los usuarios navegar, ver detalles y simular un carrito de productos afiliados de Amazon desde la plataforma, con experiencia personalizada y checkout final en Amazon (modelo tipo Shopify pero como afiliados).

### Día 1: Diseño y navegación
- Crear ruta y sección "Tienda Amazon" en el menú principal, visible tras iniciar sesión y en la landing page.
- Diseñar vistas similares a tiendas modernas (Shopify-like): catálogo, detalle de producto, carrito simulado.
- Maquetar componentes reutilizables para tarjetas de producto, buscador y filtros.

### Día 2-3: Lógica y consumo de productos
- Integrar API de Amazon Product Advertising o utilizar un mock de productos para desarrollo.
- Modelar y mostrar catálogo de productos (imagen, precio, descripción, stock simulado).
- Implementar buscador y filtros (categorías, precio, etc).
- Vista de detalles de producto, con botón de "Comprar en Amazon" (enlace de afiliado).

### Día 4: Carrito y simulación de compra
- Implementar carrito simulado (productos agregados, resumen, total).
- Al hacer checkout, redirigir a Amazon con el enlace de afiliado correspondiente (por producto).
- Registrar clics y eventos para métricas internas (sin almacenar datos sensibles de Amazon).

### Día 5: Integración visual y usabilidad
- Integrar sección en la landing page y dashboard con acceso destacado a la tienda.
- Probar responsividad y experiencia móvil.
- Agregar avisos legales sobre afiliación Amazon según políticas.

---

## 8. Integración de Banners de Cursos Hotmart (1 semana)

### Objetivo
Mostrar banners promocionales de cursos de Hotmart en diferentes secciones de la plataforma, con varios diseños y contenidos, y rotación aleatoria.

### Día 1: Diseño de banners y componentes
- Crear varios diseños de banners (horizontal, vertical, cuadrado).
- Cada banner debe tener imagen, título, descripción corta, botón de "Ver curso" (enlace a Hotmart).

### Día 2: Lógica de banners y contenido
- Crear estructura de datos para definir los banners y sus contenidos.
- Implementar lógica de rotación aleatoria al cargar la página/sección (usando Math.random o similar).

### Día 3: Integración en vistas principales
- Mostrar los banners en:
  - Landing page (sección destacada)
  - Portafolio de freelancers (`app/portfolio/page.tsx`)
  - Portafolio de empresas (`app/map-empresas/page.tsx`)
  - Dashboard (`app/dashboard/page.tsx`)
- Asegurar que cada vez que el usuario acceda a la sección, los banners cambien de forma aleatoria.

### Día 4: Usabilidad y responsive
- Probar variantes de banners en desktop y móvil.
- Ajustar tamaños y posiciones según el layout.

### Día 5: Métricas y seguimiento
- Registrar eventos de clic en los banners para métricas internas.
- Validar que los enlaces a Hotmart funcionen correctamente y abran en nueva pestaña.

---

## Consideraciones técnicas adicionales

- Los componentes de banners deben ser reutilizables y configurables para nuevas campañas.
- Toda la lógica de catálogo y carrito de Amazon debe desacoplarse del backend de pagos propios (solo redirigir a Amazon como afiliados).
- Cumplir con los términos de uso y avisos legales de Amazon y Hotmart.
