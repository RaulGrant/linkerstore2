'use client';

import { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import BlogLayout from "@/components/blog/BlogLayout";
import RelatedArticles from '@/components/blog/RelatedArticles';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Calendar, 
  Clock, 
  Shield, 
  AlertTriangle, 
  CheckCircle, 
  Sun,
  Info,
  ChevronDown,
  ExternalLink,
  Star,
  ShoppingCart,
  Sparkles,
  TrendingUp,
  Glasses,
  Wind,
  Eye,
  Zap,
  Target
} from 'lucide-react';
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { trackAffiliateClick, trackBlogView, generateTrackingId } from '@/lib/meta-pixel';

ChartJS.register(ArcElement, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function GuiaChalecosSeguridadArticle() {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visibleSection, setVisibleSection] = useState('');

  useEffect(() => {
    const articleId = generateTrackingId('article', 'guia-completa-chalecos-seguridad');
    trackBlogView(articleId, 'Guía Completa de Chalecos de Seguridad 2025', 'chaleco_seguridad');
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      const sections = ['header', 'caracteristicas', 'productos', 'faq', 'conclusion'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setVisibleSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const visibilityChartData = {
    labels: ['Clase 1', 'Clase 2', 'Clase 3'],
    datasets: [{
      label: 'Área de Material Reflectante (m²)',
      data: [0.10, 0.13, 0.20],
      backgroundColor: ['#FEF3C7', '#FED7AA', '#FECACA'],
      borderColor: ['#F59E0B', '#EA580C', '#DC2626'],
      borderWidth: 2
    }]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          padding: 15,
          color: '#1F2937',
          font: { family: "'Inter', sans-serif", size: 12 }
        }
      }
    }
  };

  const faqs = [
    {
      question: '¿Qué significa que un chaleco sea "Clase 2" según ANSI?',
      answer: 'Que un chaleco sea "Clase 2" según la norma ANSI/ISEA 107 significa que está diseñado y certificado para ofrecer un nivel de visibilidad adecuado en entornos de trabajo con riesgo moderado. Específicamente, es para zonas donde los trabajadores están expuestos a tráfico vehicular con velocidades que oscilan entre 40 km/h y 80 km/h. Para obtener esta certificación, el chaleco debe cumplir con requisitos mínimos de área para sus materiales: al menos 0.50 metros cuadrados de material de fondo fluorescente (para visibilidad diurna) y 0.13 metros cuadrados de material retrorreflectante (para visibilidad nocturna). En resumen, es una garantía de que la prenda proporciona un nivel de visibilidad sustancialmente mayor que un chaleco no certificado.'
    },
    {
      question: '¿Cuál es la diferencia entre un chaleco de poliéster y uno de gabardina?',
      answer: 'La principal diferencia radica en el balance entre ligereza/confort y durabilidad/resistencia. Un chaleco de poliéster es ligero, económico y a menudo se presenta en formato de malla, lo que lo hace muy transpirable e ideal para climas cálidos o húmedos en México. Es perfecto para tareas que no implican un alto desgaste físico del material. Por otro lado, un chaleco de gabardina, que usualmente es de 100% algodón o una mezcla de algodón-poliéster, es significativamente más grueso, pesado y resistente. Está diseñado para el uso rudo, soportando la abrasión y los enganches del trabajo diario en construcción o industria pesada, y a menudo se asocia con roles de supervisión por su apariencia más robusta y profesional.'
    },
    {
      question: '¿Es obligatorio usar chalecos de seguridad en México?',
      answer: 'Sí, en México el uso de chalecos de seguridad está regulado principalmente por la NOM-017-STPS-2008 (Equipo de protección personal) y complementado por normas internacionales como ANSI/ISEA 107. La obligatoriedad depende del sector y nivel de riesgo: es mandatorio en construcción, trabajos viales, aeropuertos, puertos, y cualquier actividad donde exista tráfico vehicular o maquinaria pesada. Las empresas que no proporcionen EPP adecuado enfrentan multas significativas de la STPS (Secretaría del Trabajo y Previsión Social). Además, muchos contratos gubernamentales y proyectos de infraestructura exigen certificación específica de los chalecos utilizados.'
    },
    {
      question: '¿Cada cuánto tiempo debo cambiar mi chaleco de seguridad?',
      answer: 'No existe una fecha de vencimiento fija, pero la efectividad se deteriora con el tiempo. Debe reemplazarse cuando: 1) El color fluorescente esté desvanecido (prueba: compáralo con uno nuevo bajo luz solar), 2) Las cintas reflectantes estén agrietadas, despegadas o hayan perdido brillo (prueba con linterna en oscuridad), 3) La tela tenga rasgaduras que comprometan la integridad, 4) Después de un accidente o enganche severo, 5) Si ha estado expuesto frecuentemente a químicos o altas temperaturas. En uso industrial intenso, típicamente duran 6-12 meses. Para uso ocasional o de oficina, pueden durar 2-3 años. La regla de oro: si dudas de su efectividad, reemplázalo. Tu seguridad no tiene precio.'
    },
    {
      question: '¿Puedo lavar mi chaleco de seguridad en lavadora?',
      answer: 'Sí, pero siguiendo ciertas precauciones para preservar las propiedades de alta visibilidad. Recomendaciones: 1) Usa agua fría o tibia (máximo 40°C), 2) Detergente suave sin blanqueador ni suavizante de telas, 3) Ciclo delicado o normal (evita centrifugado intenso), 4) Sécar al aire libre, nunca en secadora térmica, 5) No usar plancha sobre las cintas reflectantes, 6) Lavar por separado las primeras veces para evitar transferencia de color. Los chalecos de gabardina toleran mejor el lavado que los de malla. Si se lava incorrectamente, el color fluorescente se desvanece prematuramente y las cintas reflectantes pueden despegarse o agrietarse.'
    },
    {
      question: '¿Qué diferencia hay entre cintas reflectantes textiles y microprismáticas?',
      answer: 'Las cintas textiles (más comunes y económicas) utilizan microesferas de vidrio embebidas en una matriz adhesiva. Son adecuadas para la mayoría de aplicaciones, pero pierden efectividad cuando se ensucian o mojan. Las cintas microprismáticas (premium) usan prismas microscópicos de acrílico que actúan como espejos, ofreciendo reflexión superior, especialmente en ángulos amplios. Son más duraderas, mantienen efectividad aunque estén húmedas o ligeramente sucias, y son obligatorias en aplicaciones de muy alto riesgo. Para trabajo general, las textiles son suficientes. Para trabajo nocturno intenso, carreteras de alta velocidad o condiciones climáticas adversas, vale la pena invertir en microprismáticas.'
    },
    {
      question: '¿Puedo personalizar un chaleco con el logo de mi empresa?',
      answer: 'Sí, la personalización de chalecos de seguridad es una práctica muy común y ofrecida por muchos proveedores en México, especialmente en plataformas como Mercado Libre. El método más habitual es el bordado. Esto permite a las empresas uniformar a su personal, mejorar la identificación en el sitio de trabajo y reforzar la imagen de marca. Sin embargo, es crucial asegurarse de que el logo o nombre bordado no se coloque sobre las cintas reflectantes, ya que esto podría obstruir el material de alta visibilidad y potencialmente anular el cumplimiento de la norma ANSI/ISEA 107.'
    },
    {
      question: '¿Cada cuánto tiempo se debe cambiar un chaleco de seguridad?',
      answer: 'No existe una fecha de caducidad estricta, ya que la vida útil de un chaleco depende de la frecuencia de uso, el tipo de trabajo y la exposición a elementos como el sol y los productos químicos. Sin embargo, su efectividad protectora es limitada. La regla general es reemplazarlo cuando presente signos claros de desgaste que comprometan su función. Debes cambiar tu chaleco si: 1) El color fluorescente de fondo está visiblemente desvanecido o sucio de forma permanente, reduciendo su visibilidad diurna. 2) Las cintas reflectantes están rotas, despegadas, agrietadas o han perdido su capacidad de reflejar la luz (puedes probarlo en un lugar oscuro apuntando con una linterna desde varios metros de distancia). 3) La tela del chaleco tiene rasgaduras o agujeros que podrían causar que se enganche en maquinaria. Un chaleco dañado ya no es un equipo de protección, sino un riesgo.'
    }
  ];

  // Productos recomendados con enlaces de afiliados - Expandido a 7 productos
  const recommendedProducts = [
    {
      id: 'gabardina-elite',
      rank: 1,
      emoji: '🥇',
      category: 'Alta Visibilidad',
      name: 'Chaleco De Seguridad Radians Sv46oxl Clase 2 Extra, Naranja Fluorescente',
      tagline: 'Visibilidad máxima con doble banda reflectante para turnos nocturnos.',
      rating: 4.5,
      reviewCount: '500+ reseñas verificadas',
      url: 'https://mercadolibre.com/sec/2RznHsW',
      bestFor: 'Supervisores de obra civil, brigadas de protección civil, cuadrillas eléctricas con jornadas superiores a 10 horas, Guardias de seguridad, personal de almacén nocturno y control de tráfico.',
      summary: [
        'A diferencia de los chalecos básicos, este modelo "Superbrillante" incorpora 4 bandas reflectantes (2 en pecho y 2 en abdomen) sobre un tejido de punto de poliéster de alta visibilidad.',
       'Es un chaleco ligero y funcional con cierre frontal, diseñado para cumplir con la función principal: ser visto a larga distancia bajo la luz de los faros.'
      ],
      highlights: [
       '4 líneas de cinta reflectante de alta ganancia.',
      'Tejido de punto 100% poliéster (más duradero que la malla simple).',
      'Bolsillo frontal para identificación o celular.'
      ],
   specs: [
      { label: 'Material', value: 'Poliéster tejido de punto (Tricot)' },
      { label: 'Cintas', value: '4 Cintas horizontales plateadas' },
      { label: 'Cierre', value: 'Cremallera central reforzada' },
      { label: 'Bolsillos', value: '1 bolsillo superior básico' }
    ],
      pros: [
        'Mayor área reflectante que el promedio gracias a sus 4 cintas.',
      'Secado rápido y fácil lavado.',
      'Precio accesible para la cantidad de material reflectante que ofrece.'
      ],
      cons: [
        'No es de gabardina, por lo que no se recomienda para soldadura.',
      'Bolsillos limitados en comparación con modelos brigadista.'
      ],
      availabilityNote: 'Alta disponibilidad en colores neón (Naranja/Amarillo).',
      theme: {
        gradient: 'from-amber-50 via-orange-50 to-yellow-50',
        border: 'border-amber-200',
        badge: 'bg-orange-500',
        button: 'from-orange-500 to-amber-500'
      }
    },
    {
      id: 'bicolor-ansi',
      rank: 2,
      emoji: '🥈',
      category: 'Certificado',
      name: 'Chaleco Alta Visibilidad Bicolor Clase 2 Brigadista C Bolsas',
      tagline: 'Cumplimiento normativo impecable con diseño bicolor pensado para tráfico vehicular intenso.',
      rating: 4.7,
      reviewCount: '10+ reseñas verificadas',
      url: 'https://mercadolibre.com/sec/26Kem4U',
      bestFor: 'Contratistas de obra pública, cuadrillas de señalización vial y personal aeroportuario expuesto a tráfico constante.',
      summary: [
      'Este modelo destaca por su diseño "Two-Tone" (Bicolor), que utiliza un contraste entre el color neón de fondo y las cintas para mejorar la definición de la silueta humana a distancia.',
      'Fabricado bajo estándares Clase 2, ofrece bolsillos multifuncionales y una apariencia mucho más ejecutiva y profesional que los chalecos estándar.'
      ],
      highlights: [
       'Diseño Bicolor para máximo contraste diurno.',
      'Bolsa porta radio y bolsas cargo inferiores.',
      'Soporte para micrófono en hombros.'
      ],
      specs: [
   { label: 'Norma', value: 'Cumple especificaciones Clase 2' },
      { label: 'Material', value: 'Malla de poliéster respirable Heavy Duty' },
      { label: 'Visibilidad', value: 'Cinta reflectante sobre base de contraste' },
      { label: 'Extras', value: 'Porta radio y bolsillos con solapa' }
      ],
      pros: [
        'Excelente ventilación gracias a su construcción en malla premium.',
        'Apariencia jerárquica superior para mandos.',
        'Cierre reforzado de alta durabilidad.'
      ],
      cons: [
       'Al ser de malla, permite el paso de viento frío en invierno.',
      'Tallas suelen venir amplias para usar sobre ropa.'
      ],
      availabilityNote: 'Revisar guía de tallas antes de comprar.',
      theme: {
        gradient: 'from-emerald-50 via-green-50 to-teal-50',
        border: 'border-emerald-200',
        badge: 'bg-emerald-500',
        button: 'from-emerald-500 to-teal-500'
      }
    },
    {
      id: 'malla-economica',
      rank: 3,
      emoji: '🥉',
      category: 'Económico',
      name: 'Chaleco de Malla Económico con Reflejantes',
      tagline: 'La opción ligera para cuadrillas temporales, promotores y tareas urbanas en clima cálido.',
      rating: 4.7,
      reviewCount: '720+ reseñas verificadas',
      url: 'https://mercadolibre.com/sec/23uTvh2',
      bestFor: 'Programas temporales, voluntariado, brigadas escolares, personal de apoyo en eventos masivos, eventos, visitas a obra, brigadas escolares y uso temporal.',
      summary: [
        'Un chaleco de batalla. Simple, extremadamente ligero y muy ventilado. Es la prenda ideal para tener en stock para visitas o para trabajadores temporales donde la inversión debe ser mínima.',
        'Fabricado en malla abierta de poliéster con cintas reflectantes básicas cosidas.'
      ],
      highlights: [
        'El precio más bajo del mercado.',
        'Máxima frescura, es básicamente pura ventilación.',
        'Elásticos laterales para ajuste universal.'
      ],
      specs: [
        { label: 'Material', value: 'Malla abierta de poliéster' },
      { label: 'Ajuste', value: 'Elásticos laterales o velcro frontal' },
      { label: 'Peso', value: 'Ultra ligero (< 100g)' },
      { label: 'Talla', value: 'Unitalla adaptable' }
      ],
      pros: [
        'Excelente ventilación para climas húmedos o tareas de verano.',
        'Costo unitario accesible para compras masivas o programas de voluntariado.',
        'Velcros laterales que permiten compartir tallas entre diferentes usuarios.',
        'Entrega rápida gracias a stock constante en Ciudad de México.',
        'Extremadamente barato.',
      'No ocupa espacio al guardarse.',
      'Variedad de colores para distinguir equipos.'
      ],
      cons: [
        'No sustituye a una prenda Clase 2 cuando existe tráfico vehicular veloz.',
        'Las cintas textiles pierden brillo más rápido que las microprismáticas, exige reemplazo anual.',
        'Poca durabilidad ante rasgaduras.',
      'Cintas reflectantes básicas (no alto desempeño).'
      ],
      availabilityNote: 'Ideal para mantener inventario de emergencia o rotar cada temporada a bajo costo.',
      theme: {
        gradient: 'from-teal-50 via-cyan-50 to-sky-50',
        border: 'border-teal-200',
        badge: 'bg-teal-500',
        button: 'from-teal-500 to-cyan-500'
      }
    },
    {
      id: 'professional-max',
      rank: 4,
      emoji: '🔧',
      category: 'Profesional',
      name: 'Chaleco Brigadista Reflejante Gabardina',
      tagline: 'Organización ergonómica con distribución de peso inteligente para jornadas extensas.',
      rating: 4.6,
      reviewCount: '900+ reseñas verificadas',
      url: 'https://mercadolibre.com/sec/26CEJyr',
      bestFor: 'Residentes de obra, topógrafos, ingenieros de campo,  jefes de mantenimiento en planta, jefes de brigada, almacén industrial y construcción.',
      summary: [
        'El Profesional toma la robustez de la gabardina y la mezcla con ergonomía moderna. Los bolsillos están escalonados para distribuir mejor el peso y evitar que todo recaiga en la parte frontal, lo que reduce la fatiga en espalda y hombros.',
        'Integra canales de ventilación verticales con cierres ocultos; puedes abrirlos durante el día y cerrarlos cuando cae la tarde para conservar calor. Además, los ribetes reflejantes segmentados ofrecen visibilidad mientras se flexionan junto con tu cuerpo.',
        'Fabricado en tela de Gabardina (mezcla algodón/poliéster), este chaleco ofrece una resistencia muy superior a las mallas plásticas. Es capaz de soportar roces, lavados frecuentes y carga de herramientas.',
      'Su diseño incluye el clásico set de bolsillos de brigadista, permitiendo llevar radio, plumas y libreta de forma segura.'
      ],
      highlights: [
        'Sistema de distribución de peso con paneles acolchados internos.',
        'Bolsillos inferiores tipo cargo con fuelle expandible para herramientas voluminosas.',
        'Zonas reforzadas con cinta de nylon anti desgarre en hombros y cuello.',
        'Tela Gabardina resistente y lavable.',
      'Bolsa porta radio ajustable.',
      'Cierre reforzado.'
      ],
      specs: [
        { label: 'Certificación', value: 'ANSI/ISEA 107 Tipo R Clase 2' },
        { label: 'Material principal', value: 'Gabardina poliéster-algodón 65/35 con ventilación lateral' },
        { label: 'Bolsillos', value: '5 bolsillos funcionales + compartimento trasero horizontal' },
        { label: 'Extras', value: 'Ojales para arnés, porta radio doble, correas modulares en la parte trasera' }, 
        { label: 'Reflejante', value: 'Cinta textil 2 pulgadas' },
      { label: 'Bolsillos', value: 'Frontales con cierre + Porta radio' },
      { label: 'Cierre', value: 'Cremallera completa' }
      ],
      pros: [
        'Sensación de equilibrio incluso con herramientas pesadas gracias a la distribución escalonada.',
        'Ventilación ajustable que se abre o se cierra según la temperatura ambiente.',
        'Compatibilidad con arnés de seguridad sin interferir con las cintas reflectantes.',
        'Acabado profesional que ayuda a distinguir al personal de supervisión.',
        'Tela robusta que protege la ropa.',
      'Apariencia profesional y limpia.',
      'Bolsillos seguros con cierre.'
      ],
      cons: [
        'El ajuste entallado puede sentirse justo en usuarios de complexión robusta, verifica tabla de tallas.',
        'Los paneles acolchados requieren secado a la sombra para conservar su forma.',
        'Más caluroso que la malla en verano.',
      'Requiere planchado para verse impecable.'
      ],
      availabilityNote: 'Modelo con alta disponibilidad, disponible en tallas CH a XL.',
      theme: {
        gradient: 'from-purple-50 via-violet-50 to-amber-50',
        border: 'border-purple-200',
        badge: 'bg-purple-500',
        button: 'from-purple-500 to-violet-500'
      }
    },
    {
      id: 'microprismas-naranja',
      rank: 5,
      emoji: '✨',
      category: 'Alta Visibilidad',
      name: 'Chaleco Seguridad Trabajo Industrial Brigadista Reflectante',
      tagline: 'Visibilidad nocturna sobresaliente que resaltan bajo niebla o lluvia ligera.',
      rating: 4.7,
      reviewCount: '350+ reseñas verificadas',
      url: 'https://mercadolibre.com/sec/1GK5aRk',
      bestFor: 'Ingenieros, topógrafos, ideal para uso diario en aeropuertos, cuadrillas nocturnas de mantenimiento urbano y seguridad vial en carreteras, uso general en planta, brigadas de emergencia y contratistas.',
      summary: [
        'Similar al modelo anterior pero enfocado en la funcionalidad operativa diaria. Ofrece una configuración clásica de brigadista con cintas reflejantes textiles sobre tela resistente.',
      'Ideal para uniformar cuadrillas completas con una prenda duradera que ofrece visibilidad tanto diurna (por el color de la tela) como nocturna.',
      'Su punto fuerte es la cinta de alto rendimiento que rebota la luz incluso cuando está sucia o húmeda. El fondo naranja fluorescente cumple con los requerimientos de visibilidad diurna y resiste 50 ciclos de lavado manteniendo el tono intenso.',
        'Incluye refuerzos de cordura en hombros y cuello, evitando la abrasión causada por mochilas, arneses o chalecos antibalas, algo crucial para brigadas de seguridad privada.'
      ],
      highlights: [
        'Cinta segmentada que se adapta al movimiento sin romperse.',
        'Bolsillo porta tablet en la espalda con cierre velcro.',
        'Recubrimiento repelente a líquidos que facilita limpieza rápida en campo.',
        'Colores sólidos y resistentes al deslavado.',
      'Refuerzos en costuras críticas.',
      'Bolsillos de fácil acceso.'
      ],
      specs: [
        { label: 'Certificación', value: 'ANSI/ISEA 107 Tipo R Clase 2' },
       { label: 'Material', value: 'Tela Poliéster/Algodón' },
        { label: 'Tecnología reflectiva', value: ' Scotchlite plateados y naranja neón' },
        { label: 'Extras', value: 'Porta radio, porta credencial y bolsillos cargo profundos' }
      ],
      pros: [
        'Desempeño nocturno sobresaliente incluso con lluvia ligera.',
        'Refuerzos de cordura que extienden la vida útil en hombros y cuello.',
        'El fondo fluorescente conserva su tono tras múltiples lavadas.',
        'Muy resistente al uso diario.',
      'Fácil de lavar.',
      'Bolsillos funcionales.'
      ],
      cons: [
        'El recubrimiento repelente puede sentirse rígido las primeras semanas; se suaviza con el uso.',
        'No incluye ventilación lateral, por lo que en climas muy cálidos conviene alternarlo.',
        'Rigidez inicial de la tela.',
      'Peso medio.'
      ],
      availabilityNote: 'Verificar colores disponibles en la publicación.',
      theme: {
        gradient: 'from-orange-50 via-amber-50 to-red-50',
        border: 'border-orange-200',
        badge: 'bg-orange-600',
        button: 'from-orange-600 to-red-500'
      }
    },
    {
      id: 'breakaway-pro',
      rank: 6,
      emoji: '⚙️',
      category: 'Innovación',
      name: 'Chaleco Radians SV46 Heavy Duty Surveyor',
      tagline: 'Calidad americana importada para topógrafos y exigencia máxima.',
      rating: 4.7,
      reviewCount: '10+ reseñas verificadas',
      url: 'https://mercadolibre.com/sec/2Xzhw76',
      bestFor: 'Operadores de centros de distribución, líneas de ensamble automotriz, cuadrillas con maquinaria de arrastre, ingenieros topógrafos, directores de proyecto y usuarios que conocen la marca Radians.',
      summary: [
        'El Radians SV46 no es un chaleco común; es un chaleco tipo "Surveyor" (Topógrafo) de grado industrial importado. Cuenta con una estructura Heavy Duty con frente sólido para durabilidad y espalda de malla para ventilación.',
      'Incorpora un cierre "Heavy Duty" #8, bolsillos grandes para planos o tablets, y ojales para cinta de señalización. Es una prenda de nivel superior a lo nacional promedio.',
        'Integra cinco puntos de ruptura estratégicamente ubicados (hombros, laterales y centro) que se liberan ante tirones bruscos, minimizando el riesgo de atrapamiento en bandas transportadoras o montacargas.',
        'La cinta reflectante está cosida sobre paneles independientes que permanecen unidos incluso después de un desprendimiento, facilitando rearmar el chaleco sin perder alineación.'
      ],
      highlights: [
        'Marca Radians (Líder en EPP en USA).',
      'Frente sólido / Espalda de malla (Lo mejor de dos mundos).',
      'Bolsillo trasero pasante para planos/documentos.',
        'Sistema magnético de liberación que puedes rearmar en menos de 30 segundos.',
        'Panel frontal con espuma EVA para amortiguar golpes ligeros.',
        'Velcros laterales reemplazables, ideal para programas de mantenimiento preventivo.'
      ],
      specs: [
        { label: 'Modelo', value: 'Radians SV46-2ZOD (o similar)' },
        { label: 'Certificación', value: 'ANSI/ISEA 107 Tipo R Clase 2 con feature breakaway' },
      { label: 'Material', value: 'Frente Poliéster Sólido / Espalda Malla' },
      { label: 'Bolsillos', value: 'iPad/Tablet pocket + Bolsillo trasero planos' }
      ],
      pros: [
        'Reduce drásticamente el riesgo de atrapamiento en maquinaria de arrastre.',
        'Sistema magnético intuitivo que el personal puede volver a armar sin herramientas.',
        'Paneles acolchados frontales que protegen contra golpes leves en pecho.',
        'Incluye kit de velcros de repuesto para mantenimiento anual.',
        'Calidad de construcción muy superior a lo genérico.',
      'Bolsillo trasero enorme ideal para planos.',
      'Cierre gigante resistente a la tierra y polvo.'
      ],
      cons: [
        'No recomendable para tareas con chispa abierta; el material es inflamable.',
        'El precio es más alto que un chaleco estándar sin breakaway.',
        'Precio elevado por ser importado.',
      'Tallas americanas (suelen ser más grandes que las nacionales).'
      ],
      availabilityNote: 'Producto importado, stock limitado.',
      theme: {
        gradient: 'from-slate-50 via-blue-50 to-sky-50',
        border: 'border-blue-200',
        badge: 'bg-blue-500',
        button: 'from-blue-500 to-sky-500'
      }
    },
    {
      id: 'termico-invierno',
      rank: 7,
      emoji: '❄️',
      category: 'Uso Rudo / Ejecutivo',
      name: 'Chaleco Reflejante Seguridad Industrial Ejecutivo Gabardina',
      tagline: 'Durabilidad superior y presentación profesional con tela de gabardina 100% algodón.',
      rating: 4.8,
      reviewCount: '700+ reseñas verificadas',
      url: 'https://mercadolibre.com/sec/16xjRYw',
      bestFor: 'Supervisores, arquitectos, ingenieros de campo y brigadistas que requieren resistencia y bolsillos funcionales.',
      summary: [
        'Confeccionado en gabardina 100% algodón, este chaleco ofrece una resistencia superior a rasgaduras comparado con los de malla, manteniendo la frescura gracias a su tejido natural.',
        'Diseño tipo brigadista con cintas reflejantes textiles de alta visibilidad (incluso en la espalda) y cierre reforzado, ideal para quienes necesitan portar herramientas ligeras y documentos.'
      ],
      highlights: [
        'Tela Gabardina 100% Algodón de alta resistencia.',
        'Múltiples bolsillos frontales con cierre y velcro para herramientas.',
        'Cintas reflejantes textiles de 2 pulgadas para máxima visibilidad.'
      ],
      specs: [
        { label: 'Material', value: 'Gabardina 100% Algodón' },
        { label: 'Visibilidad', value: 'Cintas reflejantes textiles (frente y espalda)' },
        { label: 'Cierre', value: 'Cierre central reforzado' },
        { label: 'Tallas', value: 'Ajuste estándar (Unitalla o por tallas según stock)' }
      ],
      pros: [
        'Material mucho más duradero y elegante que la malla simple.',
        'El algodón permite que la piel respire, reduciendo la sudoración.',
        'Bolsas funcionales para radio, celular y libreta.',
        'Acabado profesional ideal para mandos medios y altos.'
      ],
      cons: [
        'No es impermeable (absorbe agua si llueve fuerte).',
        'Es más pesado que un chaleco de malla simple.'
      ],
      availabilityNote: 'Stock constante, verifique colores disponibles (Azul, Naranja, Kaki, etc).',
      theme: {
        gradient: 'from-blue-50 via-indigo-50 to-slate-100',
        border: 'border-indigo-200',
        badge: 'bg-indigo-500',
        button: 'from-indigo-500 to-slate-500'
      }
    }
  ];

  const relatedArticles = [
    {
      id: '1',
      title: 'Los Mejores Arneses de Seguridad para Trabajo en Altura 2025',
      excerpt: 'Guía definitiva sobre normativas mexicanas NOM-009-STPS y los mejores productos disponibles en el mercado para trabajo en altura.',
      category: 'EPP',
      publishDate: '4 Oct 2025',
      readTime: '25 min',
      slug: 'mejores-arneses-seguridad-trabajo-altura',
      isPopular: true
    },
    {
      id: '2',
      title: 'El Mejor Calzado de Seguridad Industrial para México 2025',
      excerpt: 'Análisis completo de normativas NOM-113 y los mejores productos del mercado mexicano para protección de pies.',
      category: 'Calzado',
      publishDate: '3 Oct 2025',
      readTime: '25 min',
      slug: 'mejor-calzado-industrial-botas-seguridad',
      isPopular: true
    },
    {
      id: '3',
      title: 'Guía Completa: Los Mejores Overoles de Trabajo de 2025',
      excerpt: 'Ropa de protección integral para diferentes industrias. Materiales, ajustes y características de seguridad evaluadas.',
      category: 'EPP',
      publishDate: '20 Ago 2025',
      readTime: '20 min',
      slug: 'guia-completa-mejores-overoles-trabajo-2025'
    },
    {
      id: '4',
      title: '¿Ya Conocías Estos Lentes de Protección Innovadores?',
      excerpt: 'Descubre las últimas innovaciones en protección ocular. Tecnología antiempañante, UV y resistencia a impactos.',
      category: 'Seguridad',
      publishDate: '16 Ago 2025',
      readTime: '15 min',
      slug: 'lentes-proteccion-innovadores'
    },
    {
      id: '5',
      title: 'Guía NOM-009-STPS-2011: Trabajos en Alturas',
      excerpt: 'Los 7 puntos clave que todo supervisor debe dominar para garantizar la seguridad en trabajos de altura.',
      category: 'Seguridad Industrial',
      publishDate: '1 Oct 2025',
      readTime: '15 min',
      slug: 'guia-nom-009-stps-2011-trabajos-altura'
    },
    {
      id: '6',
      title: 'Los Mejores Botiquines de Emergencia para el Lugar de Trabajo',
      excerpt: 'Equipos de primeros auxilios especializados para diferentes entornos laborales. Normativas y contenido recomendado.',
      category: 'Primeros Auxilios',
      publishDate: '22 Ago 2025',
      readTime: '18 min',
      slug: 'mejores-botiquines-emergencia-trabajo'
    }
  ];

  const handleAffiliateClick = (productName: string, url: string) => {
    const productId = generateTrackingId('product', productName);
    trackAffiliateClick('mercadolibre', productId, productName, 'chaleco_seguridad');
    window.open(url, '_blank');
  };

  return (
    <BlogLayout>
      <div className="min-h-screen">
        {/* Hero Section con partículas animadas */}
        <section className="bg-gradient-to-br from-orange-900 via-yellow-900 to-green-900 text-white py-8 sm:py-10 md:py-12 sm:py-10 sm:py-12 md:py-16 md:py-20 relative overflow-hidden">
          {/* Sistema masivo de partículas extendido por toda la sección */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Partículas grandes flotantes (80 partículas - distribuidas por toda la sección) */}
            {Array.from({ length: 80 }, (_, i) => (
              <motion.div
                key={`section-large-particle-${i}`}
                className="absolute rounded-full opacity-70"
                style={{
                  width: 4 + (i % 6),
                  height: 4 + (i % 6),
                  backgroundColor: `hsl(${45 + (i * 8)}, 85%, ${65 + (i % 25)}%)`,
                  left: `${(i * 2.5) % 100}%`,
                  top: `${(i * 3.7) % 100}%`,
                }}
                animate={{
                  x: [0, 100 + (i % 50), -80 + (i % 30), 0],
                  y: [0, -120 + (i % 40), 100 + (i % 35), 0],
                  scale: [0.3, 1.2, 0.5, 1],
                  opacity: [0.2, 0.8, 0.3, 0.7],
                  rotate: [0, 180 + (i % 180), 360]
                }}
                transition={{
                  duration: 12 + (i % 8),
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "easeInOut"
                }}
              />
            ))}

            {/* Partículas medianas rápidas (120 partículas) */}
            {Array.from({ length: 120 }, (_, i) => (
              <motion.div
                key={`section-medium-particle-${i}`}
                className="absolute rounded-full opacity-60"
                style={{
                  width: 2 + (i % 4),
                  height: 2 + (i % 4),
                  backgroundColor: `hsl(${200 + (i * 4)}, 75%, ${70 + (i % 20)}%)`,
                  left: `${(i * 1.67) % 100}%`,
                  top: `${(i * 2.33) % 100}%`,
                }}
                animate={{
                  x: [0, 60 + (i % 30), -40 + (i % 20)],
                  y: [0, -80 + (i % 25), 60 + (i % 30)],
                  scale: [0, 1, 0.2, 1, 0],
                  opacity: [0, 0.9, 0.1, 0.6, 0]
                }}
                transition={{
                  duration: 6 + (i % 4),
                  repeat: Infinity,
                  delay: i * 0.15,
                  ease: "linear"
                }}
              />
            ))}

            {/* Micropartículas súper rápidas (160 partículas) */}
            {Array.from({ length: 160 }, (_, i) => (
              <motion.div
                key={`section-micro-particle-${i}`}
                className="absolute rounded-full opacity-50"
                style={{
                  width: 1 + (i % 2),
                  height: 1 + (i % 2),
                  backgroundColor: `hsl(${280 + (i * 3)}, 80%, ${75 + (i % 15)}%)`,
                  left: `${(i * 1.25) % 100}%`,
                  top: `${(i * 1.75) % 100}%`,
                }}
                animate={{
                  x: [0, 30 + (i % 15), -20 + (i % 10)],
                  y: [0, -40 + (i % 12), 30 + (i % 15)],
                  scale: [0, 0.8, 0.1, 1, 0],
                  opacity: [0, 0.7, 0.05, 0.5, 0],
                  rotate: [0, 360 + (i % 180)]
                }}
                transition={{
                  duration: 3 + (i % 2),
                  repeat: Infinity,
                  delay: i * 0.05,
                  ease: "easeInOut"
                }}
              />
            ))}

            {/* Líneas conectoras con gradientes (40 líneas) */}
            {Array.from({ length: 40 }, (_, i) => (
              <motion.div
                key={`section-line-particle-${i}`}
                className="absolute h-px bg-gradient-to-r from-transparent via-yellow-300 to-transparent opacity-40"
                style={{
                  width: 80 + (i * 15),
                  left: `${(i * 5) % 100}%`,
                  top: `${(i * 4.5) % 100}%`,
                  transformOrigin: 'center center'
                }}
                animate={{
                  scale: [0.2, 1.5, 0.3, 1],
                  rotate: [0, 360 + (i % 90)],
                  opacity: [0.1, 0.6, 0.05, 0.4]
                }}
                transition={{
                  duration: 10 + (i % 5),
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>

          <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <motion.h1 
                className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl sm:text-4xl md:text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{
                  backgroundSize: "200% 200%"
                }}
              >
                Los 7 Mejores Chalecos de Seguridad 2025
              </motion.h1>
              <motion.p 
                className="text-xl md:text-lg sm:text-xl md:text-2xl mb-4 sm:mb-6 md:mb-8 text-orange-100 max-w-4xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.5 }}
              >
                Guía completa para elegir el chaleco de alta visibilidad perfecto según tu trabajo y presupuesto en México.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.7 }}
              >
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                  <Calendar className="w-5 h-5 text-yellow-300" />
                  <span className="text-sm font-medium">Actualizado: Enero 2025</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                  <Clock className="w-5 h-5 text-green-300" />
                  <span className="text-sm font-medium">Lectura: 15-20 min</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                  <Shield className="w-5 h-5 text-orange-300" />
                  <span className="text-sm font-medium">Normativa ANSI</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Contenido principal */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-yellow-50 to-amber-50"></div>
          
          {/* Sistema masivo de partículas mejorado para el artículo */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Partículas flotantes principales (120 partículas) */}
            {Array.from({ length: 120 }, (_, i) => (
              <motion.div
                key={`main-particle-${i}`}
                className="absolute rounded-full"
                style={{
                  width: `${3 + (i % 8)}px`,
                  height: `${3 + (i % 8)}px`,
                  backgroundColor: `hsl(${45 + (i * 3)}, 65%, ${65 + (i % 20)}%)`,
                  left: `${(i * 8.33) % 100}%`,
                  top: `${(i * 12.5) % 100}%`,
                  opacity: 0.4 + (i % 4) * 0.1,
                }}
                animate={{
                  y: [0, -25, 0],
                  x: [0, 12, 0],
                  scale: [1, 1.3, 1],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 18 + (i % 12),
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.05,
                }}
              />
            ))}
            
            {/* Partículas medianas orbitales (80 partículas) */}
            {Array.from({ length: 80 }, (_, i) => (
              <motion.div
                key={`orbital-particle-${i}`}
                className="absolute rounded-full"
                style={{
                  width: `${6 + (i % 5)}px`,
                  height: `${6 + (i % 5)}px`,
                  backgroundColor: `hsl(${25 + (i * 4)}, 70%, ${55 + (i % 25)}%)`,
                  left: `${(i * 12.5) % 100}%`,
                  top: `${(i * 18.75) % 100}%`,
                  opacity: 0.25,
                }}
                animate={{
                  y: [0, 40, 0],
                  x: [0, -15, 0],
                  scale: [1.2, 0.8, 1.2],
                  rotate: [0, -360],
                }}
                transition={{
                  duration: 25 + (i % 15),
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.1,
                }}
              />
            ))}
          </div>

          {/* Introducción completa sobre normativas ANSI */}
          <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-12 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="w-full">
                <motion.article
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="prose prose-lg max-w-none bg-white/95 backdrop-blur-md rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-2xl border border-white/50"
                >
                  {/* Header del artículo */}
                  <motion.div
                    className="text-center mb-8 sm:mb-10 md:mb-12"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                      🦺 Los 7 Mejores Chalecos de Seguridad para 2025
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-700 mb-6 sm:mb-8 leading-relaxed">
                      La guía definitiva para elegir el chaleco de alta visibilidad perfecto según tu trabajo, presupuesto y las normativas mexicanas de seguridad industrial.
                    </p>
                    
                    <div className="flex flex-wrap gap-3 justify-center mb-6 sm:mb-8">
                      <Badge className="bg-orange-100 text-orange-800 px-4 py-2 text-sm font-medium">
                        📋 Normativa ANSI/ISEA 107
                      </Badge>
                      <Badge className="bg-blue-100 text-blue-800 px-4 py-2 text-sm font-medium">
                        🏗️ Construcción e Industria
                      </Badge>
                      <Badge className="bg-green-100 text-green-800 px-4 py-2 text-sm font-medium">
                        🇲🇽 Mercado Mexicano
                      </Badge>
                    </div>

                    <div className="flex items-center justify-center gap-4 sm:gap-6 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>Actualizado: Enero 2025</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>Lectura: 18-22 min</span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Introducción completa */}
                  <motion.section
                    className="mb-8 sm:mb-10 md:mb-12"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-2xl p-6 sm:p-8 border-l-4 border-orange-400 mb-8">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-orange-100 rounded-xl">
                          <Shield className="w-8 h-8 text-orange-600" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-3">
                            🎯 ¿Por Qué es Crucial Elegir Bien Tu Chaleco de Seguridad?
                          </h3>
                          <p className="text-gray-700 leading-relaxed">
                            En México, la industria de la construcción y los servicios representan millones de empleos donde la <strong>visibilidad del trabajador puede ser la diferencia entre la vida y la muerte</strong>. Un chaleco de seguridad no es solo un accesorio obligatorio; es tu <strong>primera línea de defensa</strong> contra accidentes laborales causados por falta de visibilidad.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-8">
                      <div className="space-y-4">
                        <h4 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                          <Info className="w-6 h-6 text-blue-600" />
                          La Ciencia de la Alta Visibilidad
                        </h4>
                        <p className="text-gray-700 leading-relaxed">
                          Los chalecos de alta visibilidad funcionan mediante dos principios científicos fundamentales: 
                          la <strong>conspicuidad diurna</strong> (mediante colores fluorescentes que absorben radiación UV 
                          invisible y la convierten en luz visible) y la <strong>retrorreflectividad nocturna</strong> (donde 
                          microesferas de vidrio o prismas devuelven la luz directamente hacia su fuente).
                        </p>
                      </div>
                      
                      <div className="space-y-4">
                        <h4 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                          <Sparkles className="w-6 h-6 text-purple-600" />
                          El Estándar ANSI/ISEA 107
                        </h4>
                        <p className="text-gray-700 leading-relaxed">
                          Esta norma estadounidense (adoptada mundialmente) clasifica los chalecos en tres clases según 
                          el <strong>área mínima de material de fondo fluorescente</strong> y <strong>material retrorreflectante</strong>. 
                          Cada clase está diseñada para diferentes niveles de riesgo vehicular y condiciones de trabajo.
                        </p>
                      </div>
                    </div>

                    {/* Clasificación ANSI visual */}
                    <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 mb-8">
                      <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                        📊 Clasificación ANSI/ISEA 107: Niveles de Protección
                      </h4>
                      
                      <div className="grid md:grid-cols-3 gap-6">
                        <div className="text-center p-6 bg-yellow-50 rounded-xl border-2 border-yellow-200">
                          <div className="w-16 h-16 bg-yellow-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                            <span className="text-2xl font-bold text-white">1</span>
                          </div>
                          <h5 className="text-xl font-bold text-yellow-800 mb-3">Clase 1</h5>
                          <p className="text-sm text-gray-700 mb-3">Tráfico &lt; 40 km/h</p>
                          <div className="space-y-2 text-xs">
                            <div className="bg-yellow-100 p-2 rounded">
                              <strong>Material de fondo:</strong> 0.14 m²
                            </div>
                            <div className="bg-yellow-100 p-2 rounded">
                              <strong>Material reflectante:</strong> 0.10 m²
                            </div>
                          </div>
                        </div>

                        <div className="text-center p-6 bg-orange-50 rounded-xl border-2 border-orange-200">
                          <div className="w-16 h-16 bg-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                            <span className="text-2xl font-bold text-white">2</span>
                          </div>
                          <h5 className="text-xl font-bold text-orange-800 mb-3">Clase 2</h5>
                          <p className="text-sm text-gray-700 mb-3">Tráfico 40-80 km/h</p>
                          <div className="space-y-2 text-xs">
                            <div className="bg-orange-100 p-2 rounded">
                              <strong>Material de fondo:</strong> 0.50 m²
                            </div>
                            <div className="bg-orange-100 p-2 rounded">
                              <strong>Material reflectante:</strong> 0.13 m²
                            </div>
                          </div>
                        </div>

                        <div className="text-center p-6 bg-red-50 rounded-xl border-2 border-red-200">
                          <div className="w-16 h-16 bg-red-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                            <span className="text-2xl font-bold text-white">3</span>
                          </div>
                          <h5 className="text-xl font-bold text-red-800 mb-3">Clase 3</h5>
                          <p className="text-sm text-gray-700 mb-3">Tráfico &gt; 80 km/h</p>
                          <div className="space-y-2 text-xs">
                            <div className="bg-red-100 p-2 rounded">
                              <strong>Material de fondo:</strong> 0.80 m²
                            </div>
                            <div className="bg-red-100 p-2 rounded">
                              <strong>Material reflectante:</strong> 0.20 m²
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 sm:p-8 border-l-4 border-blue-400">
                      <h4 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
                        <AlertTriangle className="w-6 h-6" />
                        Recomendación para México
                      </h4>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        En la mayoría de los entornos laborales mexicanos (construcción, industria, logística), 
                        recomendamos <strong>Clase 2 como estándar mínimo</strong>. Aunque los chalecos Clase 1 
                        son más económicos, la diferencia de precio no justifica el riesgo reducido de protección.
                      </p>
                      <p className="text-sm text-blue-800 font-medium">
                        💡 <strong>Tip profesional:</strong> Si tu presupuesto es muy ajustado, es mejor un chaleco Clase 2 
                        básico que un Clase 1 premium. La clase siempre prevalece sobre las características adicionales.
                      </p>
                    </div>
                  </motion.section>

                  {/* Clasificación de Visibilidad ANSI */}
                  <motion.section
                    className="mb-8 sm:mb-10 md:mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <Card className="border-2 border-orange-200 shadow-lg">
                      <CardHeader className="bg-gradient-to-r from-orange-50 to-yellow-50">
                        <CardTitle className="flex items-center gap-2 text-2xl">
                          <Eye className="h-6 w-6 text-orange-600" />
                          Clasificación de Visibilidad: La Norma ANSI/ISEA 107
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-6">
                        <div className="space-y-6">
                          <p className="text-gray-700 leading-relaxed">
                            La norma más importante que rige la ropa de alta visibilidad es la <strong>ANSI/ISEA 107</strong>. 
                            Este es un estándar desarrollado por el Instituto Nacional Estadounidense de Estándares (ANSI) 
                            y la Asociación Internacional de Equipos de Seguridad (ISEA) que especifica los requisitos de 
                            diseño, materiales y rendimiento de las prendas de alta visibilidad. Aunque es una norma 
                            estadounidense, es la referencia de facto para la calidad y seguridad en México.
                          </p>

                          {/* Tipos de Chalecos */}
                          <div className="grid md:grid-cols-3 gap-4">
                            <Card className="border-2 border-blue-200">
                              <CardHeader className="bg-blue-50">
                                <CardTitle className="text-lg">Tipo O (Off-Road)</CardTitle>
                              </CardHeader>
                              <CardContent className="pt-4">
                                <p className="text-sm text-gray-600 mb-3">
                                  Para trabajadores en entornos controlados, lejos de la vía pública y con tráfico 
                                  de vehículos que no supera los 40 km/h.
                                </p>
                                <div className="flex items-start gap-2 text-sm text-gray-600">
                                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                                  <span>Almacenes, minería subterránea, estacionamientos</span>
                                </div>
                              </CardContent>
                            </Card>

                            <Card className="border-2 border-green-200">
                              <CardHeader className="bg-green-50">
                                <CardTitle className="text-lg">Tipo R (Roadway)</CardTitle>
                              </CardHeader>
                              <CardContent className="pt-4">
                                <p className="text-sm text-gray-600 mb-3">
                                  La categoría más común y relevante para la mayoría de los usuarios en México. 
                                  Diseñada para trabajadores expuestos al tráfico vehicular.
                                </p>
                                <div className="flex items-start gap-2 text-sm text-gray-600">
                                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                                  <span>Carreteras, construcción, maquinaria pesada</span>
                                </div>
                              </CardContent>
                            </Card>

                            <Card className="border-2 border-purple-200">
                              <CardHeader className="bg-purple-50">
                                <CardTitle className="text-lg">Tipo P (Public Safety)</CardTitle>
                              </CardHeader>
                              <CardContent className="pt-4">
                                <p className="text-sm text-gray-600 mb-3">
                                  Específica para personal de emergencia y seguridad pública que requieren 
                                  visibilidad superior.
                                </p>
                                <div className="flex items-start gap-2 text-sm text-gray-600">
                                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                                  <span>Policías, bomberos, paramédicos</span>
                                </div>
                              </CardContent>
                            </Card>
                          </div>

                          {/* Clases de Rendimiento */}
                          <div className="mt-8">
                            <h4 className="text-xl font-semibold mb-4 text-gray-900">Clases de Rendimiento</h4>
                            
                            <div className="space-y-4">
                              <Card className="border-l-4 border-l-yellow-400">
                                <CardContent className="pt-6">
                                  <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0">
                                      <Badge className="bg-yellow-100 text-yellow-800">Clase 1</Badge>
                                    </div>
                                    <div>
                                      <h5 className="font-semibold text-gray-900 mb-2">Nivel Más Bajo de Visibilidad</h5>
                                      <p className="text-gray-600 text-sm mb-3">
                                        Requiere una cantidad mínima de material fluorescente (0.14 m²) y material 
                                        reflectante (0.10 m²). Adecuada únicamente para entornos de bajo riesgo Tipo O, 
                                        donde los trabajadores están bien separados del tráfico lento.
                                      </p>
                                      <div className="bg-yellow-50 p-3 rounded-lg">
                                        <p className="text-sm text-yellow-800">
                                          <AlertTriangle className="h-4 w-4 inline mr-1" />
                                          No recomendado para la mayoría de aplicaciones industriales en México.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </CardContent>
                              </Card>

                              <Card className="border-l-4 border-l-orange-500">
                                <CardContent className="pt-6">
                                  <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0">
                                      <Badge className="bg-orange-100 text-orange-800">Clase 2</Badge>
                                    </div>
                                    <div>
                                      <h5 className="font-semibold text-gray-900 mb-2">Estándar de Oro para México</h5>
                                      <p className="text-gray-600 text-sm mb-3">
                                        Ofrece una visibilidad muy superior a la Clase 1 y es obligatoria para 
                                        trabajadores expuestos a tráfico con velocidades entre 40 km/h y 80 km/h. 
                                        Requiere mayor cantidad de material de fondo fluorescente (0.50 m²) y material 
                                        retrorreflectante (0.13 m²).
                                      </p>
                                      <div className="bg-orange-50 p-3 rounded-lg">
                                        <p className="text-sm text-orange-800">
                                          <CheckCircle className="h-4 w-4 inline mr-1" />
                                          Personal de construcción, servicios públicos, aeropuertos y directores de 
                                          tráfico deben usar, como mínimo, prendas de Clase 2.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </CardContent>
                              </Card>

                              <Card className="border-l-4 border-l-red-500">
                                <CardContent className="pt-6">
                                  <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0">
                                      <Badge className="bg-red-100 text-red-800">Clase 3</Badge>
                                    </div>
                                    <div>
                                      <h5 className="font-semibold text-gray-900 mb-2">Nivel Más Alto de Visibilidad</h5>
                                      <p className="text-gray-600 text-sm mb-3">
                                        Indispensable para trabajadores en entornos de muy alto riesgo, como carreteras 
                                        con velocidades superiores a 80 km/h, condiciones climáticas inclementes o 
                                        trabajos nocturnos complejos.
                                      </p>
                                      <div className="bg-red-50 p-3 rounded-lg">
                                        <p className="text-sm text-red-800">
                                          <Info className="h-4 w-4 inline mr-1" />
                                          Para cumplir con la Clase 3, la prenda debe tener material reflectante en 
                                          las mangas y pantalones, garantizando una silueta humana completa y 
                                          visibilidad de 360 grados. Un chaleco por sí solo no puede ser Clase 3.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </CardContent>
                              </Card>
                            </div>
                          </div>

                          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mt-6">
                            <div className="flex items-start gap-3">
                              <Info className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                              <div>
                                <h4 className="font-semibold text-blue-900 mb-2">Importante para Compradores</h4>
                                <p className="text-blue-800 text-sm leading-relaxed">
                                  Al analizar las plataformas de comercio electrónico en México, existe una tendencia 
                                  clara: muchos chalecos robustos tipo "Brigadista" de gabardina se comercializan 
                                  destacando su durabilidad y cantidad de bolsillos, pero omiten cualquier mención 
                                  a su certificación o clase de visibilidad. Es fundamental que los compradores 
                                  busquen activamente la etiqueta que certifique el cumplimiento con 
                                  <strong> "ANSI/ISEA 107 Tipo R Clase 2"</strong> como mínimo para la mayoría de 
                                  los trabajos de riesgo.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.section>

                  {/* Materiales y Construcción */}
                  <motion.section
                    className="mb-8 sm:mb-10 md:mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    <Card className="border-2 border-green-200 shadow-lg">
                      <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50">
                        <CardTitle className="flex items-center gap-2 text-2xl">
                          <Sparkles className="h-6 w-6 text-green-600" />
                          Materiales y Construcción: Durabilidad vs. Comodidad Climática
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-6">
                        <div className="space-y-6">
                          <p className="text-gray-700 leading-relaxed">
                            El material del chaleco no solo define su durabilidad, sino también la comodidad del 
                            trabajador, un factor clave para la seguridad y la productividad, especialmente en los 
                            diversos climas de México.
                          </p>

                          {/* Comparación Poliéster vs Gabardina */}
                          <div className="grid md:grid-cols-2 gap-6">
                            <Card className="border-2 border-blue-200">
                              <CardHeader className="bg-blue-50">
                                <CardTitle className="text-lg flex items-center gap-2">
                                  <Sun className="h-5 w-5 text-blue-600" />
                                  Poliéster
                                </CardTitle>
                              </CardHeader>
                              <CardContent className="pt-4">
                                <p className="text-sm text-gray-600 mb-4">
                                  Es el tejido más utilizado en chalecos de seguridad por su ligereza, bajo costo, 
                                  resistencia a las arrugas y secado rápido. Su naturaleza sintética le confiere un 
                                  brillo que realza los colores fluorescentes, haciéndolo ideal para la alta visibilidad.
                                </p>
                                <div className="space-y-2">
                                  <div className="flex items-start gap-2">
                                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                                    <span className="text-sm text-gray-600">Peso ligero y transpirable</span>
                                  </div>
                                  <div className="flex items-start gap-2">
                                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                                    <span className="text-sm text-gray-600">Económico</span>
                                  </div>
                                  <div className="flex items-start gap-2">
                                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                                    <span className="text-sm text-gray-600">Ideal para climas cálidos</span>
                                  </div>
                                  <div className="flex items-start gap-2">
                                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                                    <span className="text-sm text-gray-600">Secado rápido</span>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>

                            <Card className="border-2 border-amber-200">
                              <CardHeader className="bg-amber-50">
                                <CardTitle className="text-lg flex items-center gap-2">
                                  <Shield className="h-5 w-5 text-amber-700" />
                                  Gabardina
                                </CardTitle>
                              </CardHeader>
                              <CardContent className="pt-4">
                                <p className="text-sm text-gray-600 mb-4">
                                  Típicamente una mezcla de algodón y poliéster o 100% algodón, la gabardina es 
                                  sinónimo de resistencia y uso rudo. Es un tejido más grueso, pesado y notablemente 
                                  más duradero, ideal para entornos de trabajo exigentes.
                                </p>
                                <div className="space-y-2">
                                  <div className="flex items-start gap-2">
                                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                                    <span className="text-sm text-gray-600">Durabilidad superior</span>
                                  </div>
                                  <div className="flex items-start gap-2">
                                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                                    <span className="text-sm text-gray-600">Resistente a abrasión y enganches</span>
                                  </div>
                                  <div className="flex items-start gap-2">
                                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                                    <span className="text-sm text-gray-600">Apariencia profesional</span>
                                  </div>
                                  <div className="flex items-start gap-2">
                                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                                    <span className="text-sm text-gray-600">Ideal para supervisores</span>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          </div>

                          {/* Malla vs Tela Sólida */}
                          <div className="mt-8">
                            <h4 className="text-xl font-semibold mb-4 text-gray-900">Malla vs. Tela Sólida</h4>
                            
                            <div className="grid md:grid-cols-2 gap-6">
                              <Card className="border-2 border-cyan-200">
                                <CardHeader className="bg-cyan-50">
                                  <CardTitle className="text-lg">Malla (de Poliéster)</CardTitle>
                                </CardHeader>
                                <CardContent className="pt-4">
                                  <p className="text-sm text-gray-600 mb-3">
                                    La principal ventaja de la construcción en malla es su excepcional transpirabilidad. 
                                    El tejido abierto permite una circulación de aire constante, lo que reduce 
                                    significativamente el estrés por calor y la fatiga en los climas cálidos y húmedos 
                                    predominantes en gran parte de México.
                                  </p>
                                  <div className="bg-cyan-50 p-3 rounded-lg">
                                    <p className="text-sm text-cyan-800">
                                      <CheckCircle className="h-4 w-4 inline mr-1" />
                                      Chalecos muy ligeros y cómodos, ideales para largas jornadas bajo el sol.
                                    </p>
                                  </div>
                                </CardContent>
                              </Card>

                              <Card className="border-2 border-slate-200">
                                <CardHeader className="bg-slate-50">
                                  <CardTitle className="text-lg">Tela Sólida</CardTitle>
                                </CardHeader>
                                <CardContent className="pt-4">
                                  <p className="text-sm text-gray-600 mb-3">
                                    Ofrece una mayor durabilidad estructural y protección contra el viento. La 
                                    superficie sólida es más resistente a los desgarros y proporciona una base más 
                                    estable para múltiples bolsillos cargados con herramientas o dispositivos.
                                  </p>
                                  <div className="bg-slate-50 p-3 rounded-lg">
                                    <p className="text-sm text-slate-800">
                                      <AlertTriangle className="h-4 w-4 inline mr-1" />
                                      Su capacidad para retener el calor es mayor, lo que puede ser una desventaja 
                                      en climas muy calurosos.
                                    </p>
                                  </div>
                                </CardContent>
                              </Card>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.section>

                  {/* Funcionalidad y Diseño Ergonómico */}
                  <motion.section
                    className="mb-8 sm:mb-10 md:mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.0 }}
                  >
                    <Card className="border-2 border-purple-200 shadow-lg">
                      <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50">
                        <CardTitle className="flex items-center gap-2 text-2xl">
                          <Zap className="h-6 w-6 text-purple-600" />
                          Funcionalidad y Diseño Ergonómico
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-6">
                        <div className="space-y-6">
                          <p className="text-gray-700 leading-relaxed">
                            Un chaleco de seguridad moderno es una herramienta de trabajo portátil. La disposición 
                            y el tipo de bolsillos, así como los sistemas de cierre y ajuste, son factores 
                            determinantes en su practicidad diaria.
                          </p>

                          {/* Funcionalidad de Bolsillos */}
                          <div>
                            <h4 className="text-xl font-semibold mb-4 text-gray-900">Funcionalidad de Bolsillos</h4>
                            <p className="text-gray-600 mb-4">
                              La demanda en México muestra una alta valoración por los chalecos multibolsillos, 
                              que permiten al trabajador llevar consigo sus herramientas y dispositivos de forma 
                              organizada y accesible.
                            </p>
                            
                            <div className="grid md:grid-cols-2 gap-4">
                              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                                <div>
                                  <h5 className="font-semibold text-gray-900 mb-1">Bolsillo Transparente</h5>
                                  <p className="text-sm text-gray-600">
                                    Para identificación (porta-gafete), esencial para el acceso a zonas de trabajo 
                                    controladas.
                                  </p>
                                </div>
                              </div>

                              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                                <div>
                                  <h5 className="font-semibold text-gray-900 mb-1">Bolsillos para Radio/Celular</h5>
                                  <p className="text-sm text-gray-600">
                                    Diseñados con las dimensiones adecuadas para mantener los dispositivos de 
                                    comunicación seguros.
                                  </p>
                                </div>
                              </div>

                              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                                <div>
                                  <h5 className="font-semibold text-gray-900 mb-1">Bolsillos Frontales Tipo Cargo</h5>
                                  <p className="text-sm text-gray-600">
                                    Bolsas amplias, a menudo con solapa y cierre de velcro o cremallera, para 
                                    guardar herramientas, guantes o notas.
                                  </p>
                                </div>
                              </div>

                              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                                <div>
                                  <h5 className="font-semibold text-gray-900 mb-1">Bolsillo Trasero para Planos</h5>
                                  <p className="text-sm text-gray-600">
                                    Una característica distintiva de los chalecos tipo "Brigadista", gran bolsa en 
                                    la espalda para llevar documentos, planos o tabletas.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Tipos de Cierre */}
                          <div>
                            <h4 className="text-xl font-semibold mb-4 text-gray-900">Tipo de Cierre</h4>
                            
                            <div className="space-y-3">
                              <Card className="border-l-4 border-l-blue-500">
                                <CardContent className="pt-4">
                                  <h5 className="font-semibold text-gray-900 mb-2">Cremallera (Zipper)</h5>
                                  <p className="text-sm text-gray-600">
                                    Ofrece un cierre más seguro y es generalmente más duradero, preferido para el 
                                    uso rudo y diario. Las cremalleras de nylon o plástico reforzado son comunes 
                                    y resistentes.
                                  </p>
                                </CardContent>
                              </Card>

                              <Card className="border-l-4 border-l-purple-500">
                                <CardContent className="pt-4">
                                  <h5 className="font-semibold text-gray-900 mb-2">Velcro</h5>
                                  <p className="text-sm text-gray-600 mb-2">
                                    Permite ponerse y quitarse el chaleco con gran rapidez. Algunos diseños incorporan 
                                    velcro en los hombros y costados para una función de seguridad "breakaway" 
                                    (desprendible).
                                  </p>
                                </CardContent>
                              </Card>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.section>

                  {/* Top 7 Productos Destacados */}
                  <section id="productos" className="mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-8 md:mb-12 md:mb-16">
                    <motion.h2 
                      className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 text-center"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <span className="bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
                        🏆 Top 7 Chalecos de Seguridad Destacados en México 2025
                      </span>
                    </motion.h2>

                    {/* Nota importante sobre calificaciones */}
                    <motion.div 
                      className="bg-blue-50 border-l-4 border-blue-400 p-3 sm:p-4 md:p-6 rounded-r-lg mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                    >
                      <div className="flex items-start">
                        <Info className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5 mr-3" />
                        <div>
                          <p className="text-sm text-blue-800">
                            <strong>Nota importante:</strong> Las calificaciones y número de reseñas mostradas corresponden 
                            a la información disponible en las plataformas al momento de la publicación (Enero 2025). 
                            Te recomendamos visitar el enlace del producto para ver la información más actualizada, 
                            incluyendo disponibilidad y reseñas recientes de compradores verificados.
                          </p>
                        </div>
                      </div>
                    </motion.div>

                    <div className="space-y-12">
                      {recommendedProducts.map((product, index) => (
                        <motion.div 
                          key={product.id}
                          className={`bg-gradient-to-br ${product.theme.gradient} p-4 sm:p-6 md:p-8 rounded-3xl shadow-2xl border-2 ${product.theme.border}`}
                          initial={{ opacity: 0, y: 50 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 + (index * 0.1) }}
                        >
                          <div className="flex items-center gap-4 mb-6">
                            <Badge className={`${product.theme.badge} text-white font-bold text-lg px-4 sm:px-6 py-3`}>
                              {product.emoji} #{product.rank}
                            </Badge>
                            <Badge className={`bg-${product.theme.badge.split('-')[1]}-100 text-${product.theme.badge.split('-')[1]}-800 px-4 py-2 font-bold`}>
                              {product.category}
                            </Badge>
                          </div>

                          <h3 className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                            {product.name}
                          </h3>

                          <div className="flex items-center mb-4">
                            <div className="flex text-yellow-400">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-gray-300'}`} />
                              ))}
                            </div>
                            <span className="ml-2 text-gray-600">({product.reviewCount}) - {product.rating}/5</span>
                          </div>

                          <div className={`bg-${product.theme.badge.split('-')[1]}-50 p-4 rounded-xl mb-6`}>
                            <p className={`text-${product.theme.badge.split('-')[1]}-800 font-semibold`}>
                              <strong>🎯 Ideal para:</strong> {product.bestFor}
                            </p>
                          </div>

                          <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                            {product.tagline}
                          </p>

                          {product.summary && (
                            <div className="mb-6">
                              {product.summary.map((paragraph, idx) => (
                                <p key={idx} className="text-gray-700 leading-relaxed mb-3 text-base">
                                  {paragraph}
                                </p>
                              ))}
                            </div>
                          )}

                          {/* Especificaciones Técnicas */}
                          {product.specs && (
                            <div className="bg-white p-4 sm:p-6 rounded-xl border border-gray-200 mb-6">
                              <h4 className="font-bold text-gray-800 mb-4 flex items-center gap-2 text-lg">
                                <Shield className="h-6 w-6 text-blue-600" />
                                Especificaciones Técnicas
                              </h4>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {product.specs.map((spec, specIdx) => (
                                  <div key={specIdx} className="bg-gray-50 p-3 rounded-lg">
                                    <div className="text-sm font-semibold text-gray-800 mb-1">{spec.label}</div>
                                    <div className="text-sm text-gray-600">{spec.value}</div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Destacados */}
                          {product.highlights && (
                            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 sm:p-6 rounded-xl mb-6 border-2 border-green-200">
                              <h4 className="font-bold text-green-800 mb-4 text-lg flex items-center gap-2">
                                <Sparkles className="h-6 w-6" />
                                Características Destacadas
                              </h4>
                              <ul className="space-y-2">
                                {product.highlights.map((highlight, hlIdx) => (
                                  <li key={hlIdx} className="flex items-start gap-2 text-sm text-gray-700">
                                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                    <span><strong>{highlight.split(':')[0]}:</strong> {highlight.split(':')[1]}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          <div className="grid md:grid-cols-2 gap-3 mb-6">
                            <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl border border-gray-200">
                              <h4 className="font-bold text-green-800 mb-4 flex items-center gap-2">
                                <CheckCircle className="h-5 w-5" />
                                Ventajas
                              </h4>
                              <ul className="space-y-2 text-sm text-gray-700">
                                {product.pros.map((pro, proIdx) => (
                                  <li key={proIdx} className="flex items-start gap-2">
                                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                    <span>{pro}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div className="bg-red-50 p-3 sm:p-4 md:p-6 rounded-xl border border-red-200">
                              <h4 className="font-bold text-red-800 mb-4 flex items-center gap-2">
                                <AlertTriangle className="h-5 w-5" />
                                Contras
                              </h4>
                              <ul className="space-y-2 text-sm text-gray-700">
                                {product.cons.map((con, conIdx) => (
                                  <li key={conIdx} className="flex items-start gap-2">
                                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                    <span>{con}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          {/* Disponibilidad */}
                          {product.availabilityNote && (
                            <div className="bg-blue-50 p-4 rounded-xl mb-6">
                              <p className="text-sm text-blue-800">
                                <strong>📦 Disponibilidad:</strong> {product.availabilityNote}
                              </p>
                            </div>
                          )}

                          <div className={`bg-gradient-to-r ${product.theme.button} p-3 sm:p-4 md:p-6 rounded-xl border-2 border-gray-300`}>
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="text-xl font-bold text-white mb-2">💰 Disponible en Mercado Libre</p>
                                <p className="text-sm text-gray-100">* Ver disponibilidad y ofertas actuales en la plataforma</p>
                              </div>
                              <button 
                                onClick={() => handleAffiliateClick(product.name, product.url)}
                                className="bg-white hover:bg-gray-100 text-gray-800 font-bold py-3 px-4 sm:px-6 rounded-lg transition-all hover:scale-105 shadow-lg flex items-center gap-2"
                              >
                                <ShoppingCart className="w-5 h-5" />
                                Ver en Mercado Libre
                                <ExternalLink className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </section>

                  {/* Preguntas Frecuentes */}
                  <section className="mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-8 md:mb-12 md:mb-16">
                    <motion.h2 
                      className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 text-center"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        ❓ Preguntas Frecuentes
                      </span>
                    </motion.h2>

                    <div className="space-y-6">
                      {faqs.map((faq, index) => (
                        <motion.div
                          key={index}
                          className={`border-2 transition-all duration-300 cursor-pointer rounded-xl ${
                            expandedFAQ === index 
                              ? 'border-blue-400 shadow-2xl bg-gradient-to-r from-blue-50 to-purple-50' 
                              : 'border-gray-200 hover:border-blue-300 hover:shadow-lg bg-white'
                          }`}
                          onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <div className="p-4 sm:p-6">
                            <div className="flex items-start justify-between gap-4">
                              <h3 className={`text-lg font-semibold transition-colors ${
                                expandedFAQ === index ? 'text-blue-700' : 'text-gray-900'
                              }`}>
                                <span className="text-blue-500 font-bold mr-2">Q{index + 1}:</span>
                                {faq.question}
                              </h3>
                              
                              <div className={`p-1 rounded-full transition-all duration-300 ${
                                expandedFAQ === index 
                                  ? 'bg-blue-100 text-blue-600 rotate-180' 
                                  : 'bg-gray-100'
                              }`}>
                                <ChevronDown className={`h-5 w-5 ${
                                  expandedFAQ === index ? 'text-blue-600' : 'text-gray-400'
                                }`} />
                              </div>
                            </div>
                            
                            {expandedFAQ === index && (
                              <div className="border-t border-blue-100 pt-4 mt-4">
                                <div className="flex items-start gap-3">
                                  <span className="text-blue-500 font-bold text-lg">A:</span>
                                  <p className="text-gray-700 leading-relaxed">
                                    {faq.answer}
                                  </p>
                                </div>
                              </div>
                            )}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </section>

                  {/* Conclusión */}
                  <motion.section 
                    className="mb-8 sm:mb-10 md:mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    <div className="bg-gradient-to-br from-orange-500 via-red-500 to-pink-600 text-white p-6 sm:p-8 md:p-10 rounded-3xl shadow-2xl">
                      <div className="text-center">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8">
                          Tu Seguridad, Tu Responsabilidad, Tu Futuro
                        </h2>
                        
                        <div className="space-y-4 sm:space-y-6 text-lg leading-relaxed mb-6 sm:mb-8">
                          <p>
                            En el mundo laboral mexicano, donde la construcción, la industria y los servicios crecen cada día, 
                            <span className="font-semibold text-yellow-300"> un chaleco de seguridad no es solo un accesorio</span>, sino 
                            <span className="font-semibold text-orange-300"> una herramienta vital</span> que puede salvar tu vida.
                          </p>
                          
                          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 my-6 sm:my-8">
                            <p className="text-xl font-semibold mb-4">
                              <span className="text-yellow-300">💡 Recuerda:</span> No compras un chaleco, 
                              <span className="text-green-300"> inviertes en tu protección</span>.
                            </p>
                            
                            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 text-sm">
                              <div className="bg-white/5 rounded-lg p-3">
                                <p><strong>✅ Elige Clase 2</strong> para tráfico vehicular</p>
                              </div>
                              <div className="bg-white/5 rounded-lg p-3">
                                <p><strong>✅ Prioriza</strong> marcas con garantía</p>
                              </div>
                              <div className="bg-white/5 rounded-lg p-3">
                                <p><strong>✅ Verifica</strong> cintas reflectantes de calidad</p>
                              </div>
                              <div className="bg-white/5 rounded-lg p-3">
                                <p><strong>✅ Considera</strong> tu tipo de trabajo diario</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="text-center">
                          <p className="text-xl sm:text-2xl font-bold mb-4">
                            🛡️ <span className="text-yellow-300">Protégete hoy</span>, 
                            <span className="text-green-300"> trabaja seguro mañana</span> 🛡️
                          </p>
                          <p className="text-lg opacity-90">
                            Tu familia te espera en casa. Haz que cada día laboral termine con tu regreso seguro.
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.section>
                </motion.article>
              </div>
            </div>
          </div>
        </div>

        <RelatedArticles 
          articles={relatedArticles}
          title="Artículos Relacionados sobre Seguridad Industrial"
        />
      </div>
    </BlogLayout>
  );
}
