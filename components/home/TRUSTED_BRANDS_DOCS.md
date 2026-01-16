# TrustedBrandsBanner Component

Componente para mostrar logos de marcas asociadas con animaciones y efectos interactivos.

## 📍 Ubicación
`components/home/TrustedBrandsBanner.tsx`

## 🎨 Características

### ✅ Funcionalidades Implementadas
- ✨ Logos en formato grid responsive (2-3-4-6 columnas)
- 🖱️ Cada logo es clickeable (abre en nueva pestaña)
- 🎭 Animaciones suaves con Framer Motion
- 📱 Totalmente responsive
- ♿ Accesible (keyboard navigation, ARIA labels)
- 🖼️ Fallback automático si imagen no carga
- ⚡ Optimización con Next.js Image
- 🎯 Hover effects (scale, glow, shadow)

### 🎨 Diseño Visual
- **Fondo**: Gradiente azul oscuro (`from-slate-900 via-blue-900 to-indigo-900`)
- **Cards**: Fondo blanco con bordes hover azules
- **Animaciones**: Fade-in + slide-up con stagger
- **Hover**: Scale 1.05 + sombra intensa

## 📐 Props

```typescript
interface TrustedBrandsBannerProps {
  variant?: 'grid' | 'carousel';  // Default: 'grid'
}
```

## 🚀 Uso

### Uso Básico
```tsx
import TrustedBrandsBanner from '@/components/home/TrustedBrandsBanner';

export default function HomePage() {
  return (
    <div>
      {/* Otros componentes */}
      <TrustedBrandsBanner />
      {/* Más componentes */}
    </div>
  );
}
```

### Con Variante
```tsx
<TrustedBrandsBanner variant="grid" />
```

## 🏗️ Estructura de Datos

### Interfaz TrustedBrand
```typescript
interface TrustedBrand {
  id: string;           // ID único de la marca
  name: string;         // Nombre de la marca
  logo: string;         // Ruta del logo (ej: '/images/brands/3m-logo.png')
  url: string;          // URL del sitio web de la marca
  description?: string; // Descripción opcional (se muestra al hover)
}
```

### Marcas Incluidas (12)
1. **3M** - Líder mundial en EPP
2. **MSA Safety** - Expertos en seguridad industrial
3. **Honeywell** - Innovación en protección personal
4. **Ansell** - Guantes de protección premium
5. **DuPont** - Materiales de seguridad avanzados
6. **Uvex** - Protección ocular y facial
7. **DeWalt** - Herramientas profesionales
8. **Milwaukee** - Herramientas de alto rendimiento
9. **Truper** - Herramientas mexicanas de calidad
10. **Libus** - Equipos de protección certificados
11. **North Safety** - Protección respiratoria
12. **Steelpro** - Calzado de seguridad industrial

## ➕ Agregar Nueva Marca

1. **Agregar logo** en `/public/images/brands/`
2. **Actualizar array** en el componente:

```typescript
const trustedBrands: TrustedBrand[] = [
  // ... marcas existentes
  {
    id: '13',
    name: 'Nueva Marca',
    logo: '/images/brands/nueva-marca-logo.png',
    url: 'https://www.nuevamarca.com',
    description: 'Descripción breve de la marca'
  }
];
```

## 🎭 Animaciones

### Container (Stagger Children)
- **Delay inicial**: 0.2s
- **Delay entre items**: 0.1s
- **Efecto**: Los logos aparecen secuencialmente

### Items (Logos)
- **Entrada**: Fade-in (opacity 0→1) + Slide-up (y: 20→0)
- **Duración**: 0.5s
- **Easing**: easeOut

### Hover Effects
- **Scale**: 1 → 1.05
- **Translate Y**: 0 → -5px
- **Border**: transparent → blue-400
- **Shadow**: lg → 2xl
- **Logo**: scale 1 → 1.1

## 📱 Responsive Breakpoints

| Breakpoint | Columnas | Ancho de Card |
|-----------|----------|---------------|
| Mobile (<640px) | 2 | ~48% |
| Tablet (640px-1024px) | 3 | ~33% |
| Desktop (1024px-1280px) | 4 | ~25% |
| XL (>1280px) | 6 | ~16.66% |

## ♿ Accesibilidad

### Implementado
- ✅ `role="button"` en cards clickeables
- ✅ `aria-label` descriptivos
- ✅ `tabIndex={0}` para navegación por teclado
- ✅ `onKeyDown` handler (Enter/Space)
- ✅ `alt` text en todas las imágenes
- ✅ Estados de focus visibles

### Navegación por Teclado
- **Tab**: Navegar entre logos
- **Enter/Space**: Abrir link de marca
- **Shift+Tab**: Navegar hacia atrás

## ⚡ Performance

### Optimizaciones
- ✅ `next/image` con lazy loading automático
- ✅ Imágenes responsive automáticas
- ✅ `viewport={{ once: true }}` para animaciones (solo una vez)
- ✅ Fallback eficiente si imagen falla
- ✅ `target="_blank" rel="noopener noreferrer"` seguro

### Recomendaciones
- Comprimir logos antes de subir (máx 100KB)
- Usar formato WebP cuando sea posible
- Mantener dimensiones consistentes (200-400px ancho)

## 🎨 Personalización

### Cambiar Colores
```tsx
// Fondo del banner
className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900"

// Fondo de cards
className="bg-white/95 hover:bg-white"

// Borde hover
className="border-transparent hover:border-blue-400"

// Badge
className="bg-gradient-to-r from-green-500 to-blue-500"
```

### Cambiar Grid Layout
```tsx
// En el motion.div del grid
className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6"

// Ejemplo: 3 columnas en desktop
className="grid grid-cols-2 md:grid-cols-3 gap-6"
```

### Modificar Animaciones
```tsx
const itemVariants = {
  hidden: { opacity: 0, y: 20 },  // Estado inicial
  visible: {
    opacity: 1,                   // Estado final
    y: 0,
    transition: {
      duration: 0.5,              // Duración
      ease: "easeOut"             // Curva de animación
    }
  }
};
```

## 🐛 Troubleshooting

### Problema: Logo no se muestra
**Solución**: 
- Verificar que el archivo existe en `/public/images/brands/`
- Revisar la ruta en el array (debe empezar con `/images/brands/`)
- Asegurarse de que el formato sea soportado (PNG, JPG, WebP, SVG)

### Problema: Link no abre
**Solución**:
- Verificar que la URL sea válida y comience con `http://` o `https://`
- Revisar la configuración de `window.open` en `handleBrandClick`

### Problema: Animaciones no funcionan
**Solución**:
- Verificar que Framer Motion esté instalado: `npm install framer-motion`
- Asegurarse de que el componente use `'use client'`

## 📦 Dependencias

```json
{
  "dependencies": {
    "react": "^18.x",
    "next": "^14.x",
    "framer-motion": "^10.x",
    "lucide-react": "^0.x"
  }
}
```

## 🔄 Futuras Mejoras

- [ ] Implementar variante carousel infinito
- [ ] Agregar filtros por categoría de marca
- [ ] Modal con información detallada de cada marca
- [ ] Integración con CMS para gestión dinámica
- [ ] Estadísticas de clicks por marca
- [ ] Lazy loading más agresivo para mejor performance

## 📝 Notas

- Los logos son solo placeholders - reemplazar con logos reales
- Asegurarse de tener permisos para usar los logos de las marcas
- Respetar las guías de marca de cada empresa
- Mantener logos en alta calidad pero optimizados
