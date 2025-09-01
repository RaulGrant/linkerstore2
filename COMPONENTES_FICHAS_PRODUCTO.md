# Componentes React para Fichas de Producto (Amazon Afiliados)

Este archivo contiene ejemplos de componentes React para las fichas de producto originales, siguiendo las recomendaciones y estructura del archivo `GUIA_FICHAS_PRODUCTO_AFILIADOS.md`. Cada ficha utiliza íconos en vez de imágenes y secciones amplias y originales.

---

```tsx
// ProductFicha.tsx
import React from 'react';

interface ProductFichaProps {
  customTitle: string;
  icon: string;
  technicalAnalysis: string;
  features: string[];
  usageGuide: string;
  whyChoose: string;
  originalReview: string;
  amazon_url: string;
}

export const ProductFicha: React.FC<ProductFichaProps> = ({
  customTitle,
  icon,
  technicalAnalysis,
  features,
  usageGuide,
  whyChoose,
  originalReview,
  amazon_url,
}) => (
  <section className="product-ficha max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8 my-8 space-y-8 border border-gray-200">
    <h1 className="text-3xl font-bold text-center mb-2">{customTitle}</h1>
    <div className="w-full flex justify-center mb-4">
      <div className="bg-gray-100 rounded-lg w-32 h-32 flex items-center justify-center text-gray-500 text-7xl border border-gray-300">
        <span role="img" aria-label="Ícono del producto">{icon}</span>
      </div>
    </div>
    <article>
      <h2 className="text-xl font-semibold mb-2 text-blue-800">Análisis técnico profesional</h2>
      <p className="text-gray-700 leading-relaxed">{technicalAnalysis}</p>
    </article>
    <article>
      <h2 className="text-xl font-semibold mb-2 text-green-800">Características principales</h2>
      <ul className="list-disc pl-6 text-gray-700">
        {features.map((f, i) => <li key={i}>{f}</li>)}
      </ul>
    </article>
    <article>
      <h2 className="text-xl font-semibold mb-2 text-orange-800">Guía de uso</h2>
      <p className="text-gray-700 leading-relaxed">{usageGuide}</p>
    </article>
    <article>
      <h2 className="text-xl font-semibold mb-2 text-purple-800">¿Por qué elegir este producto?</h2>
      <p className="text-gray-700 leading-relaxed">{whyChoose}</p>
    </article>
    <article>
      <h2 className="text-xl font-semibold mb-2 text-pink-800">Reseña original</h2>
      <p className="text-gray-700 leading-relaxed">{originalReview}</p>
    </article>
    <div className="mt-6 flex justify-center">
      <a
        href={amazon_url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-yellow-500 text-white px-8 py-3 rounded font-bold hover:bg-yellow-600 transition text-lg shadow"
      >
        Comprar en Amazon
      </a>
    </div>
  </section>
);
```

---

## Ejemplo de uso para cada producto

```tsx
// Ejemplo para el chaleco reflectante profesional
<ProductFicha
  customTitle="Chaleco reflectante profesional para seguridad industrial"
  icon="🦺"
  technicalAnalysis="El chaleco reflectante profesional es una prenda esencial ... (texto completo del análisis técnico)"
  features={[
    "Fabricado en tejido sintético de alta resistencia, que soporta el uso rudo y el lavado frecuente sin perder sus propiedades reflectantes.",
    "Bandas reflectantes anchas y de alta intensidad, visibles tanto de día como de noche, incluso bajo lluvia o niebla.",
    // ...más características
  ]}
  usageGuide="Para aprovechar al máximo las ventajas de este chaleco ... (texto completo de la guía de uso)"
  whyChoose="Elegir este chaleco reflectante profesional es optar por una solución integral ... (texto completo de por qué elegir)"
  originalReview="Tras analizar y probar este chaleco en diferentes escenarios ... (texto completo de la reseña)"
  amazon_url="https://a.co/d/1dVFtHu"
/>
```

---

Repite el mismo patrón para los demás productos, cambiando el `customTitle`, `icon`, y los textos de cada sección según la ficha ampliada correspondiente. Puedes crear un archivo por producto o un array de objetos para renderizar todas las fichas en una página de catálogo.

---

> **Nota:** Este diseño utiliza TailwindCSS para estilos modernos y responsivos. Si no usas Tailwind, puedes adaptar las clases a tu framework de estilos preferido.
