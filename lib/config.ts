// Configuración de la tienda
export const STORE_CONFIG = {
  // Amazon Associate Tag
  AMAZON_ASSOCIATE_TAG: process.env.NEXT_PUBLIC_AMAZON_ASSOCIATE_TAG || 'linkerpro-20',
  
  // URLs base
  AMAZON_BASE_URL: 'https://www.amazon.com',
  
  // Configuración de productos
  PRODUCTS_PER_PAGE: 12,
  MAX_RELATED_PRODUCTS: 4,
  FEATURED_PRODUCTS_COUNT: 6,
  
  // Configuración de carrito
  CART_STORAGE_KEY: 'linkerpro_cart',
  CART_EXPIRY_DAYS: 7,
  
  // Límites de filtros
  MAX_PRICE_FILTER: 1000,
  MIN_PRICE_FILTER: 0,
  
  // Categorías disponibles
  PRODUCT_CATEGORIES: [
    'Todos',
    'Electronics',
    'Kitchen',
    'Furniture',
    'Books',
    'Clothing',
    'Sports',
    'Beauty',
    'Home',
    'Garden',
    'Tools',
    'Automotive',
  ],
} as const;

// Configuración de banners
export const BANNER_CONFIG = {
  // Hotmart configuración
  HOTMART_BASE_URL: 'https://go.hotmart.com',
  
  // Configuración de rotación
  DEFAULT_ROTATION_INTERVAL: 5000, // 5 segundos
  AUTO_PLAY_DEFAULT: true,
  
  // Límites
  MAX_BANNERS_PER_PAGE: 10,
  BANNER_CACHE_TTL: 300000, // 5 minutos
  
  // Ubicaciones donde mostrar banners
  BANNER_LOCATIONS: [
    'homepage',
    'dashboard',
    'portfolio',
    'map-freelancers',
    'map-empresas',
    'store',
  ],
  
  // Categorías de banners
  BANNER_CATEGORIES: [
    'Marketing',
    'Programación',
    'Finanzas',
    'Arte',
    'Educación',
    'Salud',
    'Negocios',
    'Idiomas',
    'Tecnología',
    'Diseño',
  ],
  
  // Tipos de banner
  BANNER_TYPES: [
    'horizontal',
    'vertical',
    'square',
    'hero',
    'compact',
  ],
} as const;

// Configuración de métricas
export const METRICS_CONFIG = {
  // Eventos que se trackean
  TRACKED_EVENTS: [
    'product_view',
    'product_click',
    'add_to_cart',
    'banner_click',
    'banner_view',
  ],
  
  // Configuración de analytics
  ANALYTICS_ENABLED: process.env.NODE_ENV === 'production',
  
  // Batch size para envío de métricas
  METRICS_BATCH_SIZE: 10,
  METRICS_FLUSH_INTERVAL: 30000, // 30 segundos
} as const;

// URLs de desarrollo vs producción
export const API_CONFIG = {
  BASE_URL: process.env.NODE_ENV === 'production' 
    ? 'https://linkerpro.com/api' 
    : 'http://localhost:3000/api',
    
  ENDPOINTS: {
    PRODUCTS: '/store/products',
    PRODUCT_DETAIL: '/store/products',
    BANNERS: '/banners',
    METRICS: '/metrics',
  },
  
  // Timeouts
  REQUEST_TIMEOUT: 10000, // 10 segundos
  RETRY_ATTEMPTS: 3,
} as const;

// Configuración de cache
export const CACHE_CONFIG = {
  // TTL por tipo de dato
  PRODUCTS_TTL: 3600000, // 1 hora
  BANNERS_TTL: 1800000, // 30 minutos
  USER_DATA_TTL: 900000, // 15 minutos
  
  // Keys de cache
  CACHE_KEYS: {
    PRODUCTS: 'products',
    BANNERS: 'banners',
    USER_CART: 'user_cart',
    FEATURED_PRODUCTS: 'featured_products',
  },
} as const;

// Mensajes de error
export const ERROR_MESSAGES = {
  PRODUCT_NOT_FOUND: 'Producto no encontrado',
  NETWORK_ERROR: 'Error de conexión. Verifica tu internet.',
  SERVER_ERROR: 'Error del servidor. Inténtalo más tarde.',
  INVALID_FILTERS: 'Filtros inválidos',
  CART_ERROR: 'Error al actualizar el carrito',
  BANNER_LOAD_ERROR: 'Error al cargar banners',
} as const;

// Configuración de validación
export const VALIDATION_CONFIG = {
  // Límites de entrada
  MAX_SEARCH_LENGTH: 100,
  MAX_CART_QUANTITY: 99,
  MIN_CART_QUANTITY: 1,
  
  // Patrones de validación
  ASIN_PATTERN: /^[A-Z0-9]{10}$/,
  PRICE_PATTERN: /^\d+(\.\d{1,2})?$/,
} as const;
