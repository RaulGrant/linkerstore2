# Guía para Actualizar la Sección "¿Por qué elegir?" en la Vista Rápida de Producto

Esta guía detalla el proceso para personalizar la sección de "¿Por qué elegir?" que aparece en el modal de vista rápida de un producto. A diferencia de otros datos que se obtienen directamente del objeto del producto, esta sección se genera a partir de contenido semi-estático dentro de un componente de la interfaz de usuario.

## 1. Identificar el Archivo a Modificar

La lógica que controla el contenido de esta sección se encuentra en el siguiente archivo:

-   **Ruta del archivo**: `c:\ProyectosAlba\linkerstore\components\modals\ProductQuickViewModal.tsx`

Este componente es responsable de renderizar todo el contenido del modal de vista rápida.

## 2. Localizar la Función Relevante

Dentro de `ProductQuickViewModal.tsx`, busca la función llamada `getProductSpecificReasons`. Esta función contiene una estructura `switch` que determina qué conjunto de razones mostrar según el `id` del producto.

```javascript
// ... código del componente ...

  const getProductSpecificReasons = (product: AmazonProduct) => {
    const productId = product.id;
    
    switch(productId) {
      case "1": // Chaleco de seguridad
        return [
          // ... datos para el producto 1 ...
        ];
      
      // ... otros casos ...

      default:
        return [
          // ... datos genéricos por defecto ...
        ];
    }
  };

// ... resto del código del componente ...
```

## 3. Agregar un Nuevo Caso para tu Producto

Para añadir información personalizada para un nuevo producto, sigue estos pasos:

1.  **Identifica el `id` del producto** que deseas modificar. Puedes encontrarlo en el archivo de datos principal: `lib/data/real-amazon-products.ts`.
2.  Añade un nuevo bloque `case` dentro de la estructura `switch` utilizando el `id` del producto.

### Ejemplo de Implementación

Si quieres agregar razones específicas para un producto con `id: "30"`, añadirías el siguiente código antes del bloque `default`:

```javascript
// ... otros casos ...

      case "30": // Bosch Medidor Láser GLM 25-23
        return [
          {
            icon: Award, // Icono de lucide-react
            title: "Precisión Profesional Bosch",
            description: "Tecnología láser que garantiza mediciones con precisión de ±1.5mm hasta 25m.",
            score: 99 // Puntuación de 0 a 100 para la barra de progreso
          },
          {
            icon: Wrench,
            title: "Operación Intuitiva",
            description: "Interfaz de dos botones que simplifica su uso: encender, medir y cambiar de función fácilmente.",
            score: 96
          },
          {
            icon: Shield,
            title: "Durabilidad Garantizada",
            description: "Protección IP54 contra polvo y salpicaduras, con carcasa robusta que soporta caídas de 1 metro.",
            score: 95
          },
          {
            icon: TrendingUp,
            title: "Diseño Ultra-Compacto",
            description: "Cabe en cualquier bolsillo. Su diseño ergonómico y ligero lo hace ideal para cualquier trabajo.",
            score: 93
          }
        ];

      default:
// ...
```

### Estructura de los Datos

Cada objeto dentro del array que retornas debe tener la siguiente estructura:

-   `icon`: El componente de icono importado desde `lucide-react` (ej. `Award`, `Shield`, `Wrench`).
-   `title`: Un título corto y llamativo para la característica.
-   `description`: Una descripción breve que explique el beneficio.
-   `score`: Un número del 0 al 100 que se usará para la barra de progreso visual.

## 4. Guardar y Verificar

Una vez que hayas añadido el nuevo `case` y guardado el archivo, la aplicación se actualizará automáticamente. Abre la vista rápida del producto modificado para verificar que la sección "¿Por qué elegir?" ahora muestra la nueva información personalizada.
