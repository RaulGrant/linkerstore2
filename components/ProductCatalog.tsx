// ProductCatalog.tsx
import React from 'react';
import { trackAffiliateClick, generateTrackingId } from '@/lib/meta-pixel';

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

const ProductFicha: React.FC<ProductFichaProps> = ({
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
        onClick={() => {
          const productId = generateTrackingId('product', customTitle);
          trackAffiliateClick('amazon', productId, customTitle, 'seguridad_industrial');
        }}
      >
        Comprar en Amazon
      </a>
    </div>
  </section>
);

export const ProductCatalog: React.FC = () => {
  const products = [
    {
      customTitle: "Chaleco reflectante profesional para seguridad industrial",
      icon: "🦺",
      technicalAnalysis: `El chaleco reflectante profesional es una prenda esencial para cualquier persona que desempeñe actividades en entornos donde la visibilidad y la seguridad son prioritarias. Este tipo de chaleco está diseñado pensando en las necesidades de trabajadores de la construcción, personal de mantenimiento, ciclistas urbanos, brigadistas y cualquier usuario que requiera ser visto fácilmente en condiciones de poca luz o en ambientes de alto riesgo. Su confección en materiales ligeros y transpirables permite que el usuario lo lleve puesto durante largas jornadas sin experimentar incomodidad o exceso de calor, lo que es fundamental en climas cálidos o durante actividades físicas intensas. Las bandas reflectantes, estratégicamente ubicadas alrededor del torso y los hombros, garantizan una visibilidad de 360 grados, permitiendo que el usuario sea detectado por conductores y maquinaria desde cualquier ángulo. El diseño incluye múltiples bolsillos de diferentes tamaños, lo que facilita el transporte de herramientas, dispositivos móviles, credenciales y otros objetos personales, optimizando la eficiencia y la organización en el trabajo. Además, el sistema de cierre frontal y los ajustes en cintura y tirantes permiten adaptar el chaleco a diferentes complexiones, asegurando un ajuste seguro y cómodo. Este chaleco cumple con estándares de alta visibilidad industrial, lo que lo hace apto para cumplir normativas de seguridad en obras y empresas. Su durabilidad y resistencia al desgaste lo convierten en una inversión inteligente para quienes buscan protección y funcionalidad a largo plazo. En resumen, es una prenda multifuncional, indispensable para quienes priorizan la seguridad sin sacrificar la comodidad ni la practicidad en su día a día laboral o recreativo.`,
      features: [
        "Fabricado en tejido sintético de alta resistencia, que soporta el uso rudo y el lavado frecuente sin perder sus propiedades reflectantes.",
        "Bandas reflectantes anchas y de alta intensidad, visibles tanto de día como de noche, incluso bajo lluvia o niebla.",
        "Diseño ergonómico que permite libertad de movimiento, ideal para trabajos que requieren agacharse, levantar objetos o desplazarse constantemente.",
        "Cierre frontal reforzado, fácil de manipular incluso con guantes.",
        "Cinco bolsillos funcionales: dos inferiores para herramientas grandes, uno superior para credenciales, y dos adicionales para objetos pequeños.",
        "Costuras dobles en zonas de mayor tensión, aumentando la vida útil del producto.",
        "Peso ligero, que no añade carga extra al usuario.",
        "Disponible en colores vivos para mayor visibilidad, como verde neón o naranja.",
        "Tallas amplias y ajustes laterales para adaptarse a diferentes tipos de cuerpo y ropa interior (puede usarse sobre chamarras o sudaderas).",
        "Material transpirable que evita la acumulación de sudor y mantiene la frescura durante el uso prolongado.",
        "Fácil de limpiar y de secado rápido, ideal para uso diario."
      ],
      usageGuide: `Para aprovechar al máximo las ventajas de este chaleco, se recomienda utilizarlo siempre que se realicen actividades en exteriores, especialmente en zonas de tráfico vehicular, obras en construcción, almacenes, eventos masivos o durante actividades deportivas nocturnas. Antes de colocarlo, ajusta los tirantes y la cintura para asegurar que quede bien ceñido al cuerpo, evitando que se desplace o se enganche con objetos. Utiliza los bolsillos para llevar solo lo necesario, evitando sobrecargar la prenda y comprometer la movilidad. Es importante revisar periódicamente el estado de las bandas reflectantes y mantenerlas limpias, ya que la suciedad puede reducir su efectividad. Para limpiarlo, basta con un lavado a mano o en ciclo suave, evitando el uso de blanqueadores o secadoras a alta temperatura. En ambientes de trabajo, asegúrate de que el chaleco esté homologado según las normativas de seguridad vigentes en tu sector. Si se utiliza en actividades recreativas, como ciclismo o senderismo, combínalo con otros elementos de seguridad como casco y luces. Recuerda que la visibilidad es clave para prevenir accidentes, por lo que el uso constante del chaleco puede marcar la diferencia entre un día seguro y un incidente.`,
      whyChoose: `Elegir este chaleco reflectante profesional es optar por una solución integral de seguridad y comodidad. A diferencia de otros modelos básicos, este chaleco ofrece una combinación de materiales de alta calidad, diseño ergonómico y funcionalidad avanzada. Su versatilidad lo hace adecuado tanto para profesionales como para usuarios ocasionales, adaptándose a diferentes contextos y necesidades. La presencia de múltiples bolsillos y ajustes personalizados permite que cada usuario configure la prenda según sus actividades diarias. Además, la durabilidad de los materiales garantiza que la inversión se mantenga a lo largo del tiempo, resistiendo el desgaste propio de ambientes exigentes. El diseño moderno y los colores vivos no solo cumplen una función práctica, sino que también proyectan una imagen profesional y responsable. En comparación con otros productos del mercado, este chaleco destaca por su relación calidad-precio, ofreciendo características premium a un costo accesible. Es ideal para empresas que buscan equipar a su personal con prendas seguras y confiables, así como para particulares que desean protegerse en sus actividades cotidianas. En definitiva, es una prenda que combina seguridad, confort y practicidad, convirtiéndose en un aliado indispensable para quienes valoran su integridad y la de quienes los rodean.`,
      originalReview: `Tras analizar y probar este chaleco en diferentes escenarios, puedo afirmar que cumple con creces su función principal: brindar visibilidad y seguridad. La sensación al usarlo es ligera y cómoda, permitiendo moverse con libertad incluso en jornadas largas. Los bolsillos resultan muy útiles para llevar herramientas o pequeños objetos, y el ajuste es sencillo y efectivo. Me sorprendió gratamente la calidad de las bandas reflectantes, que realmente destacan bajo la luz de los faros o en condiciones de poca iluminación. El material transpirable evita la acumulación de sudor, lo que se agradece en climas cálidos. Considero que es una excelente opción tanto para trabajadores como para deportistas o voluntarios en eventos. Su resistencia y facilidad de limpieza lo hacen ideal para el uso diario. Sin duda, lo recomendaría a cualquier persona que busque una prenda de seguridad confiable y funcional.`,
      amazon_url: "https://a.co/d/1dVFtHu"
    },
    // ...Agrega aquí los demás productos con toda la información ampliada de cada ficha...
  ];

  return (
    <main className="bg-gray-50 min-h-screen py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Catálogo de Productos Industriales</h1>
      {products.map((product, idx) => (
        <ProductFicha key={idx} {...product} />
      ))}
    </main>
  );
};
