# Logos de Marcas - Trusted Brands Banner

Esta carpeta contiene los logos de las marcas asociadas que se muestran en el banner de marcas de confianza.

## Ubicación
`/public/images/brands/`

## Especificaciones de los Logos

### Formato
- **Tipo de archivo**: PNG con fondo transparente (recomendado)
- **Formato alternativo**: JPG, WebP
- **Fondo**: Transparente o blanco

### Dimensiones Recomendadas
- **Ancho**: 200-400px
- **Alto**: 100-200px
- **Ratio**: Mantener proporciones originales del logo
- **Tamaño de archivo**: Máximo 100KB por logo

### Nombres de Archivo
Los nombres deben coincidir con los especificados en `TrustedBrandsBanner.tsx`:

```
3m-logo.png
msa-logo.png
honeywell-logo.png
ansell-logo.png
dupont-logo.png
uvex-logo.png
dewalt-logo.png
milwaukee-logo.png
truper-logo.png
libus-logo.png
north-logo.png
steelpro-logo.png
```

## Optimización

### Antes de subir los logos:
1. **Comprimir imágenes**: Usa herramientas como TinyPNG o ImageOptim
2. **Remover metadata**: Elimina información EXIF innecesaria
3. **Convertir a WebP**: Para mejor rendimiento (opcional)

### Herramientas Recomendadas
- [TinyPNG](https://tinypng.com/) - Comprimir PNG/JPG
- [Squoosh](https://squoosh.app/) - Convertir y optimizar
- [SVGOMG](https://jakearchibald.github.io/svgomg/) - Para logos SVG

## Agregar Nuevas Marcas

Para agregar una nueva marca al banner:

1. **Añadir el logo** en esta carpeta con el nombre apropiado
2. **Actualizar el array** en `components/home/TrustedBrandsBanner.tsx`:

```typescript
{
  id: '13',
  name: 'Nueva Marca',
  logo: '/images/brands/nueva-marca-logo.png',
  url: 'https://www.nuevamarca.com',
  description: 'Descripción de la marca'
}
```

## Fallback

Si un logo no se encuentra o falla al cargar:
- Se muestra automáticamente un placeholder con la inicial de la marca
- El componente sigue siendo funcional

## Derechos de Uso

⚠️ **Importante**: Asegúrate de tener los derechos y permisos necesarios para usar los logos de las marcas antes de publicarlos en producción.

### Mejores Prácticas
- Descargar logos de las páginas oficiales de prensa/media kits
- Respetar las guías de marca de cada empresa
- No modificar los colores o proporciones de los logos
- Incluir atribución cuando sea requerido

## Estructura de Carpetas

```
public/
└── images/
    └── brands/
        ├── 3m-logo.png
        ├── msa-logo.png
        ├── honeywell-logo.png
        ├── ansell-logo.png
        ├── dupont-logo.png
        ├── uvex-logo.png
        ├── dewalt-logo.png
        ├── milwaukee-logo.png
        ├── truper-logo.png
        ├── libus-logo.png
        ├── north-logo.png
        └── steelpro-logo.png
```

## Notas Adicionales

- Los logos se renderizan usando el componente `next/image` de Next.js para optimización automática
- El tamaño de visualización es responsive y se adapta automáticamente
- Los logos tienen efectos hover y son clickeables
- Todos los logos incluyen texto alternativo para accesibilidad
