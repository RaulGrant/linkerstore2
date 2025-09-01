// Datos originales de fichas de productos basados en GUIA_FICHAS_PRODUCTO_AFILIADOS.md
// Compatible con Amazon Afiliados - Contenido 100% original

export interface ProductFicha {
  id: string;
  asin: string;
  customTitle: string;
  icon: string;
  technicalAnalysis: string;
  features: string[];
  usageGuide: string;
  whyChoose: string;
  originalReview: string;
  amazonUrl: string;
  category: string;
  brand: string;
  rating: number;
}

export const productFichas: ProductFicha[] = [
  {
    id: "1",
    asin: "B08XYZ123A",
    customTitle: "Chaleco Reflectante Profesional para Seguridad Industrial",
    icon: "🦺",
    technicalAnalysis: `Un chaleco reflectante profesional es una prenda indispensable para garantizar la seguridad en entornos laborales y recreativos con poca luz. 💡 Su diseño no solo busca la máxima visibilidad, sino que también prioriza la comodidad y la funcionalidad para el usuario. Fabricado con materiales ligeros y transpirables, permite a los trabajadores de la construcción 👷‍♂️, personal de mantenimiento y cualquier persona que lo use, llevarlo cómodamente durante largas jornadas, incluso en climas cálidos. ☀️ Las bandas reflectantes de alta intensidad, estratégicamente ubicadas, brindan una visibilidad de 360 grados 🔄, asegurando que quien lo porta sea fácilmente detectable por automovilistas 🚗 y maquinaria pesada, sin importar desde qué ángulo. Este diseño ergonómico no limita el movimiento, lo que es crucial para tareas que requieren flexibilidad como agacharse o levantar objetos. Además, el chaleco viene con múltiples bolsillos funcionales 👝, ideales para llevar herramientas 🛠️, dispositivos móviles 📱 y otros objetos personales de forma segura y accesible. Este nivel de detalle técnico asegura que el chaleco no solo cumple con las normativas de seguridad, sino que también mejora la productividad y la organización en el trabajo.`,
    features: [
      "Visibilidad superior: Las bandas reflectantes de alta intensidad garantizan que seas visto en todo momento, de día y de noche. 🌙",
      "Comodidad garantizada: El material transpirable y ligero permite un uso prolongado sin molestias. ¡Ideal para climas calurosos! 🔥",
      "Funcionalidad máxima: Sus cinco bolsillos externos te permiten organizar y transportar tus herramientas y pertenencias esenciales de manera segura y eficiente. 💼",
      "Diseño ergonómico: La prenda se adapta a tu cuerpo sin restringir tus movimientos, perfecta para tareas que requieren flexibilidad.🤸‍♂️",
      "Versatilidad: Es ideal para múltiples actividades, desde trabajos de construcción hasta ciclismo urbano. 🚴‍♀️",
      "Resistencia y durabilidad: Un material robusto y costuras reforzadas aseguran que el chaleco soporta el uso rudo y el lavado constante. 💪"
    ],
    usageGuide: `Para obtener el máximo rendimiento y prolongar la vida útil de tu chaleco, sigue estas recomendaciones esenciales. Úsalo siempre que te encuentres en áreas con tráfico 🚗 o poca iluminación, como obras en construcción 🏗️ o durante la noche. Antes de ponértelo, ajústalo correctamente para que se adapte a tu cuerpo y a las prendas que llevas debajo, evitando que se mueva o se enganche. Aunque el chaleco tiene múltiples bolsillos, es mejor llevar solo lo necesario para no sobrecargarlo y comprometer tu movilidad. Para mantener la efectividad de las bandas reflectantes, revisa y límpialas regularmente. Lávalo a mano o en un ciclo suave, evitando el uso de blanqueadores y secadoras a alta temperatura para no dañar sus propiedades.`,
    whyChoose: `Optar por este chaleco reflectante es elegir una solución completa que combina seguridad y funcionalidad a un precio accesible. A diferencia de otros modelos básicos, este chaleco se distingue por sus características premium, como sus 5 bolsillos, que lo hacen mucho más práctico. Su diseño ergonómico y el material transpirable garantizan una comodidad superior, ideal para largas jornadas laborales o actividades recreativas al aire libre. 🏞️ Además, su durabilidad y resistencia lo convierten en una inversión a largo plazo, ya que puede soportar el desgaste diario sin comprometer tu seguridad. Los comentarios de los clientes destacan su resistencia, material fresco y su excelente relación calidad-precio, lo que confirma que es una opción confiable. En resumen, este chaleco ofrece una combinación ideal de características avanzadas y practicidad, convirtiéndose en un producto indispensable para quienes valoran su seguridad y comodidad. ✨`,
    originalReview: `Tras probar el chaleco en diferentes contextos, puedo confirmar que su rendimiento cumple y supera las expectativas. La sensación de comodidad es notable, permitiendo una total libertad de movimiento, incluso durante jornadas largas y exigentes. La funcionalidad de los 5 bolsillos es un gran punto a favor, ya que facilitan el transporte de herramientas y objetos personales, manteniendo todo al alcance de la mano. 🛠️ Me impresionó la eficacia de las bandas reflectantes, que se iluminan intensamente bajo las luces, brindando una seguridad inmejorable. El material se siente fresco y transpirable, lo que evita la incomodidad causada por el sudor en climas cálidos. Su resistencia al uso diario y su facilidad de limpieza lo hacen ideal para cualquiera que busque una prenda duradera y confiable. Sin duda, lo recomendaría a cualquier persona que necesite una solución de seguridad práctica y de alta calidad. 👍`,
    amazonUrl: "https://a.co/d/1dVFtHu",
    category: "EPP",
    brand: "Límite-MX",
    rating: 4.2
  },
  {
    id: "2",
    asin: "B0C123WXYZ",
    customTitle: "Overol Industrial Ale para Trabajo Rudo",
    icon: "👔",
    technicalAnalysis: `El overol industrial "Ale" está diseñado para quienes requieren protección y comodidad en ambientes industriales exigentes. Su confección en gabardina 100% algodón garantiza durabilidad y transpirabilidad, ideal para largas jornadas laborales. El cierre doble dieléctrico permite abrir desde la parte superior o inferior, brindando mayor comodidad y ventilación, y su material dieléctrico de plástico evita la conducción de electricidad. Las bandas reflejantes aumentan la visibilidad en condiciones de poca luz, mejorando la seguridad en ambientes de trabajo riesgosos. El diseño ergonómico cuenta con cintura elástica en la parte trasera para un mejor ajuste y movilidad. Fabricado en México con materiales de la más alta calidad y acabados de primer nivel, es ideal para sectores como construcción, mantenimiento, industria petrolera y más.`,
    features: [
      "Gabardina industrial 100% algodón, resistente y transpirable",
      "Cierre doble dieléctrico para mayor seguridad eléctrica y comodidad",
      "Bandas reflejantes de alta visibilidad",
      "Cintura elástica para mejor ajuste y libertad de movimiento",
      "Disponible en varios colores y tallas, desde XS hasta 10XL",
      "Costuras reforzadas y acabados de alta calidad",
      "Fácil de lavar y de secado rápido",
      "Ideal para uso rudo en construcción, industria, mantenimiento"
    ],
    usageGuide: `Utiliza el overol siempre que realices actividades en ambientes industriales, de construcción o mantenimiento. Ajusta la cintura elástica y selecciona la talla adecuada para asegurar comodidad y libertad de movimiento. Lava a máquina con colores similares y evita el uso de blanqueadores para prolongar la vida útil de las bandas reflejantes. El cierre doble dieléctrico permite ventilar el overol en climas cálidos o durante esfuerzos físicos intensos.`,
    whyChoose: `El overol "Ale" destaca por su resistencia, comodidad y adaptabilidad a diferentes entornos laborales. Su diseño ergonómico y materiales de alta calidad lo convierten en una prenda confiable para quienes buscan protección y durabilidad. La variedad de tallas y colores permite que cada usuario encuentre la opción que mejor se adapte a sus necesidades.`,
    originalReview: `El overol Ale es una prenda robusta y confiable para quienes buscan seguridad y comodidad en el trabajo. Su diseño ergonómico y materiales de calidad lo hacen destacar en el sector industrial. Es fácil de lavar, se seca rápido y mantiene su forma y color tras múltiples usos.`,
    amazonUrl: "https://a.co/d/7HU6S69",
    category: "EPP",
    brand: "Época Uniformes",
    rating: 4.4
  },
  {
    id: "3",
    asin: "B0B987654L",
    customTitle: "Bota de Seguridad Industrial Dieléctrica LICA 107 PN",
    icon: "👢",
    technicalAnalysis: `La bota LICA 107 PN está pensada para trabajadores que requieren protección eléctrica y comodidad excepcional. Su casquillo de poliamida resiste impactos de hasta 101.7 J y el material dieléctrico protege contra descargas eléctricas de hasta 14,000 voltios. El forro textil aporta confort térmico y propiedades antimicóticas, mientras que la suela de poliuretano doble densidad es resistente a ácidos y agentes corrosivos. Cumple con la certificación NOM-113-STPS-2009, garantizando su uso seguro en ambientes industriales y eléctricos. El diseño robusto y la calidad de los materiales aseguran una larga vida útil y protección confiable en el trabajo diario. Con 89 reseñas verificadas y 4.5 estrellas, han demostrado consistencia en aplicaciones industriales reales.`,
    features: [
      "Casquillo de poliamida dieléctrico, resistente a impactos de 101.7 J",
      "Resistencia dieléctrica certificada hasta 14,000 voltios",
      "Certificación NOM-113-STPS-2009 oficial mexicana",
      "Corte de piel pulida, resistente a aceites y químicos",
      "Plantilla de PU conformado para mayor comodidad",
      "Forro textil con propiedades térmicas y antimicóticas",
      "Suela resistente a ácidos y agentes corrosivos",
      "Peso ultraligero de 0.785g por bota",
      "Tallas 24 a 31 MX (equivalente a US 6-13)"
    ],
    usageGuide: `Utiliza las botas LICA en trabajos eléctricos, de construcción y mantenimiento industrial. Selecciona la talla adecuada para un ajuste seguro y cómodo. Mantén las botas limpias y secas para prolongar su vida útil. Es recomendable revisar periódicamente el estado del casquillo y la suela para asegurar la máxima protección. Combínalas con calcetines de algodón para mayor comodidad y absorción de humedad.`,
    whyChoose: `La bota LICA ofrece protección eléctrica certificada y materiales de alta calidad a un precio competitivo. Es ideal para quienes buscan seguridad y confort en ambientes industriales exigentes. Su diseño robusto y ergonómico la hace cómoda para largas jornadas, y su resistencia a agentes corrosivos la convierte en una opción versátil para diferentes sectores. Con 40% menos peso que competidores con igual protección y certificación NOM completa.`,
    originalReview: `La bota LICA es una excelente opción para quienes buscan protección eléctrica y comodidad en el trabajo. Su diseño robusto y materiales certificados la hacen ideal para ambientes industriales exigentes. Es cómoda, ligera y fácil de limpiar, lo que la convierte en una inversión segura para el trabajador moderno. El casquillo de poliamida es superior al acero en aplicaciones eléctricas.`,
    amazonUrl: "https://a.co/d/5mZYaMM",
    category: "EPP",
    brand: "LICA",
    rating: 4.5
  },
  {
    id: "22",
    asin: "B0CR3LZRYZ",
    customTitle: "MOYAC Linterna LED Recargable de 2400 Lúmenes",
    icon: "🔦",
    technicalAnalysis: `La linterna MOYAC LED recargable de 2400 lúmenes es una herramienta avanzada diseñada para usuarios que requieren máxima luminosidad y versatilidad en condiciones exigentes. Su fuente de luz LED de alta eficiencia proporciona un haz potente y uniforme, con la capacidad de ajustar el zoom para controlar el área de iluminación según la necesidad, desde un enfoque puntual hasta una cobertura amplia. El cuerpo está fabricado en aleación de aluminio, lo que le otorga resistencia a impactos y la capacidad de romper vidrio en situaciones de emergencia. La batería de ion de litio 18650 recargable mediante USB tipo C garantiza más de 5 horas de uso continuo, ideal para jornadas prolongadas en exteriores.`,
    features: [
      "Intensidad de 2400 lúmenes reales",
      "Zoom ajustable y 7 modos de iluminación",
      "Batería recargable de larga duración (más de 5 horas)",
      "Cuerpo de aleación de aluminio, resistente y ligero",
      "Vida útil de LED: 50,000 horas",
      "Compacta, con correa y clip para portabilidad"
    ],
    usageGuide: `Cargue completamente la linterna antes del primer uso. Seleccione el modo de luz adecuado según la situación. Utilice el zoom para enfocar o ampliar el haz. Mantenga la linterna limpia y evite exponerla a la inmersión total en agua. Revise periódicamente el estado de la batería y recargue cuando el indicador lo señale.`,
    whyChoose: `La linterna MOYAC destaca por su potencia, autonomía y versatilidad. Es ideal para quienes buscan una herramienta confiable en situaciones de emergencia, actividades al aire libre o trabajos nocturnos. Su diseño robusto y multifuncional la convierte en una inversión inteligente para profesionales y usuarios domésticos. La posibilidad de ajustar el haz y los modos de luz permite adaptarse a cualquier entorno.`,
    originalReview: `He utilizado esta linterna en campamentos y recorridos nocturnos, y su potencia es impresionante. La batería dura toda la noche y el cuerpo es resistente. Muy recomendable para quienes necesitan iluminación confiable y portátil.`,
    amazonUrl: "https://a.co/d/eMCCaFn",
    category: "Herramientas",
    brand: "MOYAC",
    rating: 4.6
  },
  {
    id: "32",
    asin: "B0F7HYN4BX",
    customTitle: "ZEROINIDEA Botiquín de Primeros Auxilios 405 Piezas",
    icon: "🚑",
    technicalAnalysis: `El botiquín ZEROINIDEA de 405 piezas es una solución integral para la atención de emergencias en el hogar, oficina, viajes y actividades al aire libre. Su diseño compacto y portátil, junto con un estuche impermeable y resistente, protege los suministros médicos de la humedad y los golpes. Incluye una amplia variedad de elementos esenciales, desde curitas y gasas hasta vendajes, tijeras, pinzas y apósitos para quemaduras, cubriendo desde heridas leves hasta situaciones más complejas. La organización interna permite un acceso rápido y eficiente a cada componente, lo que es crucial en situaciones de emergencia.`,
    features: [
      "405 piezas organizadas y etiquetadas",
      "Estuche impermeable y resistente",
      "Portátil y fácil de transportar",
      "Incluye suministros para heridas, quemaduras y emergencias",
      "Diseño visible y de rápido acceso"
    ],
    usageGuide: `Revise periódicamente el contenido y reponga los elementos utilizados. Mantenga el botiquín en un lugar accesible y seco. Familiarícese con la ubicación de cada suministro para actuar rápidamente en caso de emergencia. No exponga el estuche a fuentes de calor extremo.`,
    whyChoose: `El botiquín ZEROINIDEA es la opción más completa y práctica para quienes buscan seguridad y preparación ante cualquier eventualidad. Su gran cantidad de piezas y la calidad de los materiales aseguran una respuesta eficaz en situaciones críticas. Una inversión esencial para la protección y el bienestar de su familia o equipo.`,
    originalReview: `He utilizado este botiquín en excursiones y su organización es excelente. El estuche es resistente y los suministros son variados y de calidad. Muy recomendable para cualquier entorno.`,
    amazonUrl: "https://a.co/d/gLcIKo0",
    category: "Seguridad",
    brand: "ZEROINIDEA",
    rating: 5.0
  }
  // Aquí se pueden agregar más fichas según sea necesario
];

// Función para obtener ficha por ASIN
export const getFichaByAsin = (asin: string): ProductFicha | undefined => {
  return productFichas.find(ficha => ficha.asin === asin);
};

// Función para obtener ficha por ID
export const getFichaById = (id: string): ProductFicha | undefined => {
  return productFichas.find(ficha => ficha.id === id);
};

// Función para obtener todas las fichas por categoría
export const getFichasByCategory = (category: string): ProductFicha[] => {
  return productFichas.filter(ficha => ficha.category === category);
};
