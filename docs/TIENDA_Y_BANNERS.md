# Tienda LinkerPro y Sistema de Banners

Este documento describe la implementación de la tienda Amazon y el sistema de banners Hotmart en LinkerPro.

## 🏪 Tienda Amazon

### Características Implementadas

- **Catálogo de productos** con filtros avanzados
- **Carrito de compras simulado** con persistencia en localStorage
- **Página de detalles** de producto con información completa
- **Sistema de búsqueda** por título, descripción, marca y tags
- **Filtros por:**
  - Categoría
  - Rango de precios
  - Calificación mínima
  - Prime/No Prime
  - Marca
- **Productos relacionados** y recomendaciones
- **Responsivo** para mobile y desktop

### Estructura de Archivos

```
app/store/
├── page.tsx              # Página principal de la tienda
├── [asin]/
│   └── page.tsx          # Página de detalle de producto
├── loading.tsx           # Loading state
└── error.tsx             # Error boundary

components/store/
├── ProductCard.tsx       # Tarjeta de producto
├── ProductGrid.tsx       # Grid de productos con paginación
├── SearchFilters.tsx     # Filtros de búsqueda
└── CartSimulator.tsx     # Carrito simulado

lib/
├── hooks/
│   └── useCart.ts        # Hook para manejo del carrito
├── types/
│   └── store.ts          # Tipos TypeScript
├── data/
│   └── mock-data.ts      # Datos de ejemplo
└── store.ts              # Utilidades de la tienda
```

### Uso del Carrito

```tsx
import { useCart } from '@/lib/hooks/useCart';

function ProductPage() {
  const { cart, addToCart, removeFromCart, updateQuantity } = useCart();
  
  const handleAddToCart = () => {
    addToCart(product, 1);
  };
  
  return (
    <button onClick={handleAddToCart}>
      Agregar al carrito ({cart.itemCount})
    </button>
  );
}
```

### Filtros de Productos

```tsx
import { filterProducts } from '@/lib/store';

const filteredProducts = filterProducts(products, {
  search: 'laptop',
  category: 'Electronics',
  priceRange: { min: 100, max: 500 },
  rating: 4.0,
  isPrime: true
});
```

## 🎯 Sistema de Banners Hotmart

### Características Implementadas

- **Rotación automática** de banners con controles manuales
- **Múltiples variantes**: default, compact, hero
- **Sistema de peso** para probabilidad de aparición
- **Responsive design** para diferentes tamaños
- **Métricas de clicks** (simuladas)
- **Integración en múltiples páginas**

### Componentes de Banners

```tsx
// Banner individual
<BannerDisplay 
  banner={banner}
  variant="default" // default | compact | hero
  onBannerClick={(banner) => console.log('Clicked:', banner.title)}
/>

// Rotador de banners
<BannerRotator 
  banners={banners}
  autoPlay={true}
  interval={5000}
  showControls={true}
  variant="hero"
/>
```

### Ubicaciones de Banners

- **Landing Page**: Banner hero rotativo + sección de cursos
- **Dashboard**: Productos y cursos recomendados + banner compacto
- **Portfolio**: Grid de banners de cursos
- **Mapa de Empresas**: Banners compactos al final
- **Tienda**: Integración con productos relacionados

## 🔧 Configuración

### Variables de Entorno

```bash
# Amazon Associates (futuro)
AMAZON_ACCESS_KEY=your_access_key
AMAZON_SECRET_KEY=your_secret_key
AMAZON_ASSOCIATE_TAG=linkerpro-20
AMAZON_REGION=US

# Hotmart (futuro)
HOTMART_API_KEY=your_api_key
HOTMART_PARTNER_ID=your_partner_id
```

### Configuración en `lib/config.ts`

```typescript
export const STORE_CONFIG = {
  AMAZON_ASSOCIATE_TAG: 'linkerpro-20',
  PRODUCTS_PER_PAGE: 12,
  MAX_RELATED_PRODUCTS: 4,
  // ...
};

export const BANNER_CONFIG = {
  DEFAULT_ROTATION_INTERVAL: 5000,
  MAX_BANNERS_PER_PAGE: 10,
  // ...
};
```

## 📊 Datos Mock vs API Real

### Estado Actual (Mock)

Actualmente todo funciona con datos simulados para desarrollo:

- `mockAmazonProducts` en `lib/data/mock-data.ts`
- `mockHotmartBanners` en `lib/data/mock-data.ts`
- APIs simuladas en `app/api/store/` y `app/api/banners/`

### Migración a APIs Reales

Para conectar con APIs reales:

1. **Amazon Product Advertising API**:
   ```typescript
   // lib/amazon.ts
   import { ProductAdvertisingAPIv1 } from 'amazon-paapi';
   
   export const amazonClient = new ProductAdvertisingAPIv1({
     accessKey: process.env.AMAZON_ACCESS_KEY!,
     secretKey: process.env.AMAZON_SECRET_KEY!,
     tag: process.env.AMAZON_ASSOCIATE_TAG!,
     region: process.env.AMAZON_REGION!
   });
   ```

2. **Supabase para métricas**:
   ```sql
   -- Ya implementado en database/amazon_hotmart_schema.sql
   ```

## 🎨 Personalización

### Temas y Estilos

Los componentes usan Tailwind CSS y siguen el design system existente:

- Colores primarios: azul para la plataforma, verde para tienda, púrpura para cursos
- Componentes de shadcn/ui para consistencia
- Responsive breakpoints: sm, md, lg, xl

### Agregar Nuevos Tipos de Banner

```typescript
// En lib/types/store.ts
export type BannerVariant = 'default' | 'compact' | 'hero' | 'sidebar' | 'floating';

// En components/banners/BannerDisplay.tsx
if (variant === 'sidebar') {
  return <SidebarBannerComponent />;
}
```

## 📱 Funcionalidades Móviles

- **Carrito accesible** desde navegación móvil
- **Filtros en sheet lateral** para móviles
- **Banners responsivos** que se adaptan al tamaño
- **Touch gestures** en el rotador de banners
- **Performance optimizada** con lazy loading

## 🚀 Próximos Pasos

### Fase 1: Backend Real
- [ ] Conectar con Amazon Product Advertising API
- [ ] Implementar cache en Redis/Supabase
- [ ] Sistema de métricas real
- [ ] Webhook para actualizaciones de productos

### Fase 2: Características Avanzadas
- [ ] Wishlist de productos
- [ ] Comparador de productos
- [ ] Recomendaciones personalizadas
- [ ] A/B testing de banners

### Fase 3: Optimización
- [ ] CDN para imágenes
- [ ] Service Worker para cache
- [ ] Analytics avanzados
- [ ] SEO optimization

## 🐛 Troubleshooting

### Problemas Comunes

1. **Carrito no persiste**:
   - Verificar que localStorage esté disponible
   - Comprobar configuración de CART_STORAGE_KEY

2. **Imágenes no cargan**:
   - Configurar dominio en next.config.js
   - Verificar URLs de imágenes mock

3. **Banners no rotan**:
   - Verificar que banners tengan is_active: true
   - Comprobar interval configuration

### Debug Mode

```typescript
// Activar logs detallados
localStorage.setItem('debug_store', 'true');
localStorage.setItem('debug_banners', 'true');
```

## 📚 Recursos

- [Amazon Product Advertising API](https://webservices.amazon.com/paapi5/documentation/)
- [Hotmart API](https://developers.hotmart.com/)
- [Next.js 14 Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui Components](https://ui.shadcn.com/)

---

**Nota**: Esta implementación está lista para desarrollo y testing. Para producción, se necesita configurar las APIs reales y ajustar las políticas de seguridad.
