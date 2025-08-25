'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle 
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { 
  Star, 
  ExternalLink, 
  Check, 
  X, 
  ThumbsUp,
  ThumbsDown,
  Award,
  Users,
  Shield,
  TrendingUp,
  Eye,
  Heart,
  Clock,
  Truck,
  BarChart3,
  PieChart,
  Zap,
  ChevronLeft,
  ChevronRight,
  Info,
  CheckCircle,
  Wrench,
  Scale,
  Cog,
  Briefcase,
  Siren,
  Beaker,
  BatteryCharging
} from 'lucide-react';
import { AmazonProduct } from '@/lib/types/store';
import { getProductImageUrls, hasMultipleImages } from '@/lib/utils/productImageMapping';

interface ProductQuickViewModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: AmazonProduct | null;
}

interface ProductImage {
  url: string;
  alt: string;
}

interface ProductQuickViewModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: AmazonProduct | null;
}

export default function ProductQuickViewModal({ isOpen, onClose, product }: ProductQuickViewModalProps) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [selectedTab, setSelectedTab] = useState('overview');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [productImages, setProductImages] = useState<ProductImage[]>([]);
  const [isZoomed, setIsZoomed] = useState(false);

  // Cargar imágenes del producto cuando cambie el product
  useEffect(() => {
    if (product) {
      const images = getProductImageUrls(product.asin);
      setProductImages(images);
      setCurrentImageIndex(0);
      setIsZoomed(false);
    }
  }, [product]);

  // Funciones para navegación del carrusel
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % productImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + productImages.length) % productImages.length);
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  // Función para manejar el cierre del modal
  const handleClose = () => {
    setCurrentImageIndex(0);
    setIsZoomed(false);
    setSelectedTab('overview');
    onClose();
  };

  if (!product) return null;

  // Usar datos reales del producto
  const productReviews = product.reviews || [];
  
  // Datos para gráficas de calificaciones desde el producto
  const ratingData = (product as any).rating_distribution ? [
    { stars: 5, count: Math.round((product.reviews?.length || 0) * ((product as any).rating_distribution["5"] / 100)), percentage: (product as any).rating_distribution["5"] },
    { stars: 4, count: Math.round((product.reviews?.length || 0) * ((product as any).rating_distribution["4"] / 100)), percentage: (product as any).rating_distribution["4"] },
    { stars: 3, count: Math.round((product.reviews?.length || 0) * ((product as any).rating_distribution["3"] / 100)), percentage: (product as any).rating_distribution["3"] },
    { stars: 2, count: Math.round((product.reviews?.length || 0) * ((product as any).rating_distribution["2"] / 100)), percentage: (product as any).rating_distribution["2"] },
    { stars: 1, count: Math.round((product.reviews?.length || 0) * ((product as any).rating_distribution["1"] / 100)), percentage: (product as any).rating_distribution["1"] }
  ] : [
    { stars: 5, count: 245, percentage: 65 },
    { stars: 4, count: 89, percentage: 24 },
    { stars: 3, count: 28, percentage: 7 },
    { stars: 2, count: 11, percentage: 3 },
    { stars: 1, count: 4, percentage: 1 }
  ];

  // Razones detalladas para elegir este producto - específicas por producto
  const getProductSpecificReasons = (product: AmazonProduct) => {
    const productId = product.id;
    
    switch(productId) {
      case "1": // Chaleco de seguridad
        return [
          {
            icon: Award,
            title: "Material Premium de Alta Visibilidad",
            description: "Cumple y supera normativas ANSI/ISEA 107-2020. Material reflectante 3M de grado comercial",
            score: 98
          },
          {
            icon: Users,
            title: "Aprobado por + de 400 Profesionales", 
            description: `${product.review_count || 377}+ reseñas positivas de trabajadores de construcción verificados`,
            score: 94
          },
          {
            icon: TrendingUp,
            title: "Relación Calidad-Precio Excepcional",
            description: `Por solo $${product.price} obtienes protección profesional. 35% mejor valor que competidores`,
            score: 91
          },
          {
            icon: Shield,
            title: "Resistente y Lavable",
            description: "Material duradero que mantiene propiedades reflectantes después de 100+ lavados",
            score: 96
          }
        ];
      
      case "2": // Overol industrial
        return [
          {
            icon: Award,
            title: "100% Algodón Industrial Mexicano",
            description: "Gabardina premium fabricada en México. Resistente y transpirable para largas jornadas",
            score: 97
          },
          {
            icon: Shield,
            title: "Cierre Doble Dieléctrico",
            description: "Tecnología única que permite abrir desde arriba o abajo. Material plástico antieléctrico",
            score: 95
          },
          {
            icon: Users,
            title: "Preferido en Industria Petrolera", 
            description: "Bandas reflejantes de alta visibilidad. Ideal para construcción y mantenimiento industrial",
            score: 92
          },
          {
            icon: TrendingUp,
            title: "Diseño Ergonómico Mexicano",
            description: "Cintura elástica trasera y corte anatómico. Hecho en México con estándares internacionales",
            score: 94
          }
        ];
      
      case "3": // LICA Botas
        return [
          {
            icon: Award,
            title: "Certificación NOM-113-STPS-2009",
            description: "Casquillo de poliamida resiste impactos de 101.7 J. Certificación oficial mexicana",
            score: 99
          },
          {
            icon: Shield,
            title: "Protección Dieléctrica 14,000V",
            description: "Resistencia eléctrica certificada hasta 14,000 voltios. Ideal para electricistas",
            score: 98
          },
          {
            icon: Users,
            title: "89 Reseñas Verificadas Positivas", 
            description: "4.5/5 estrellas promedio. Preferidas por electricistas y trabajadores industriales",
            score: 95
          },
          {
            icon: TrendingUp,
            title: "Ultraligeras y Cómodas",
            description: "Solo 0.785g por bota. Plantilla PU conformado y forro antimicótico para comodidad",
            score: 93
          }
        ];
      
      case "4": // Lubardy Tenis
        return [
          {
            icon: Award,
            title: "Tecnología Antideslizante Avanzada",
            description: "Suela especializada para superficies húmedas y aceitosas. Adherencia superior",
            score: 96
          },
          {
            icon: Shield,
            title: "Protección Integral del Pie",
            description: "Casquillo reforzado y protección lateral. Resistente a aceites y químicos industriales",
            score: 94
          },
          {
            icon: Users,
            title: "Recomendado por Chefs y Operarios", 
            description: "Ideal para cocinas industriales y plantas de producción. Fácil limpieza",
            score: 92
          },
          {
            icon: TrendingUp,
            title: "Precio Competitivo $599",
            description: "Calzado profesional a precio accesible. 40% más económico que marcas importadas",
            score: 90
          }
        ];
      
      case "5": // ThreeH Guantes
        return [
          {
            icon: Award,
            title: "Recubrimiento Antideslizante",
            description: "Tecnología de agarre superior en superficies húmedas y secas. Durabilidad extendida",
            score: 97
          },
          {
            icon: Shield,
            title: "Protección Nivel A3",
            description: "Resistencia al corte nivel A3. Protege contra objetos punzocortantes en construcción",
            score: 95
          },
          {
            icon: Users,
            title: "Preferidos por Constructores", 
            description: "Flexibilidad y destreza manual sin sacrificar protección. Cómodos por horas",
            score: 93
          },
          {
            icon: TrendingUp,
            title: "Mejor Precio $299",
            description: "Pack de guantes profesionales. 50% más económicos que competidores europeos",
            score: 91
          }
        ];
      
      case "6": // DEWALT Gafas de Seguridad DPG82-11
        return [
          {
            icon: Award,
            title: "Tecnología Anti-Empañamiento DEWALT Xtra",
            description: "Revestimiento antivaho avanzado y canales de ventilación integrados para máxima claridad visual",
            score: 98
          },
          {
            icon: Shield,
            title: "Protección Superior Contra Impactos",
            description: "Lente de policarbonato resistente que cumple normas ANSI Z87.1+ con protección UVA/UVB del 99.9%",
            score: 96
          },
          {
            icon: Users,
            title: "Confianza de Profesionales en Carpintería", 
            description: "Ideales para amoladoras, sierras de mesa y routers. Cómodas por horas de trabajo continuo",
            score: 94
          },
          {
            icon: TrendingUp,
            title: "Marca Líder en Herramientas - DEWALT",
            description: `Por $${product.price} obtienes calidad profesional DEWALT. Nº8 en ventas de Lentes de Seguridad`,
            score: 92
          }
        ];
      
      case "7": // ZSKEUR Lentes de Seguridad Kit 3 Piezas
        return [
          {
            icon: Award,
            title: "Kit Completo de 3 Piezas Económico",
            description: "Por solo $199 obtienes 3 pares de lentes de seguridad profesionales para uso diario prolongado",
            score: 95
          },
          {
            icon: Shield,
            title: "Material Acrílico Transparente Duro",
            description: "Plástico acrílico resistente que no afecta reconocimiento de color. Uso interior y exterior",
            score: 92
          },
          {
            icon: Users,
            title: "Calificación Perfecta de Usuarios", 
            description: "5/5 estrellas con 100% de satisfacción. 'Prácticos y de buena calidad para el precio'",
            score: 88
          },
          {
            icon: TrendingUp,
            title: "Devolución Gratuita Amazon",
            description: "30 días de devolución sin costo. Vendido por LIBIN-1144 con transacción segura",
            score: 90
          }
        ];
      
      case "8": // RTUMENG Lentes para Soldar Kit 11pzs
        return [
          {
            icon: Award,
            title: "Tecnología Solar Automática",
            description: "Oscurecimiento automático con paneles solares. No requiere cambio frecuente de baterías",
            score: 98
          },
          {
            icon: Shield,
            title: "Kit Industrial de 11 Piezas",
            description: "Gafas con tapa abatible + 10 láminas protectoras de repuesto. Máximo valor profesional",
            score: 96
          },
          {
            icon: Users,
            title: "Calificación Perfecta 5/5 Estrellas", 
            description: "100% de satisfacción en soldadura profesional. Filtros UV avanzados para máxima protección",
            score: 93
          },
          {
            icon: TrendingUp,
            title: "Devolución Sin Costo 30 Días",
            description: "Vendido por RTUMENG oficial con transacción segura Amazon. Pago protegido",
            score: 91
          }
        ];
      
      case "9": // AdooAdii Arnés de Seguridad Cuerpo Completo
        return [
          {
            icon: Award,
            title: "Construcción Profesional 3500 Hilos",
            description: "Cintas de poliéster ultra-resistentes con aleación de acero. Peso robusto de 2.0KG",
            score: 97
          },
          {
            icon: Shield,
            title: "Diseño Ergonómico de Seguridad Integral",
            description: "Trabillas espalda, pecho, laterales con correas 6.2cm. Máxima estabilidad y sujeción",
            score: 95
          },
          {
            icon: Users,
            title: "Satisfacción Total 5/5 Estrellas", 
            description: "100% de calificaciones perfectas. Almohadillas transpirables para comodidad extrema",
            score: 92
          },
          {
            icon: TrendingUp,
            title: "Devolución Amazon 30 Días",
            description: "Vendido por AdooAdii-MX con opciones de regalo. Devolución sin costo garantizada",
            score: 89
          }
        ];
      
      case "10": // GLOROUSCHU Arnés OSHA/ANSI Certificado
        return [
          {
            icon: Award,
            title: "Certificación OSHA/ANSI Completa",
            description: "Cumple ANSI/ASSE Z359.11-2014 y Z359.13-2013. Mosquetón certificado ASTM F1774",
            score: 99
          },
          {
            icon: Shield,
            title: "Respaldado por 1,354 Usuarios Reales",
            description: "4.6/5 estrellas. 'Excelente calidad', 'Seguro para podar nogales', 'Fácil de colocar'",
            score: 96
          },
          {
            icon: Users,
            title: "Testimonios Verificados de Profesionales", 
            description: "'Pintar fachadas ya no es problema', 'Muy seguro', 'Cumplen todas mis expectativas'",
            score: 94
          },
          {
            icon: TrendingUp,
            title: "Garantía Extendida Premium",
            description: "45 días devolución + 2 años garantía. Cordón absorción 6 pies. Ajuste 80-140cm",
            score: 91
          }
        ];
      
      case "11": // Yostyle Tapones de Silicona 12 Pares
        return [
          {
            icon: Award,
            title: "Reducción de Ruido Profesional 32dB",
            description: "Clasificación NRR de 32dB que bloquea efectivamente todo tipo de ruidos molestos",
            score: 96
          },
          {
            icon: Shield,
            title: "Material Premium de Silicona",
            description: "Gel de sílice duradero, suave y flexible. Diseño único de árbol de Navidad ergonómico",
            score: 94
          },
          {
            icon: Users,
            title: "Respaldado por 122 Usuarios Reales",
            description: "4.5/5 estrellas. 'Excelentes, lo mejor de tapones', 'Funcionales y cómodos', 'Ya no me despiertan'",
            score: 93
          },
          {
            icon: TrendingUp,
            title: "Pack Completo Premium",
            description: "12 pares con cordón anti-pérdida + 12 cajas individuales. Impermeables para nadar",
            score: 89
          }
        ];

      case "12": // Loop Quiet 2 Tapones Auditivos
        return [
          {
            icon: Award,
            title: "Reducción de Ruido de 24 dB Certificada",
            description: "Tecnología Loop con silicona flexible para máxima reducción de ruido sin perder comodidad",
            score: 98
          },
          {
            icon: Shield,
            title: "4 Tallas de Almohadillas Incluidas",
            description: "Incluye tallas XS, S, M, L para ajuste perfecto en cualquier oído + Carry Case portátil",
            score: 96
          },
          {
            icon: Users,
            title: "12,321+ Usuarios Satisfechos",
            description: "4.3/5 estrellas. Nº1 en Tapones para Oídos. 'Muy cómodos', 'Excelentes para dormir'",
            score: 94
          },
          {
            icon: TrendingUp,
            title: "Versátiles para Múltiples Usos",
            description: "Ideales para descanso, concentración, viajes, trabajo y sensibilidad al ruido",
            score: 92
          }
        ];

      case "13": // ProCase Orejeras contra Ruido
        return [
          {
            icon: Award,
            title: "Cancelación Profesional NRR 28 dB",
            description: "Certificación ANSI S3.19 (EE.UU.) con tecnología de difusor de presión avanzada",
            score: 97
          },
          {
            icon: Shield,
            title: "Construcción Premium ABS + Acero",
            description: "Material duradero ABS con banda de acero inoxidable retráctil y esponja acústica",
            score: 95
          },
          {
            icon: Users,
            title: "19,490+ Reviews Positivas",
            description: "4.5/5 estrellas. Nº1 en Orejeras de Caza. 'Muy resistentes', 'Bloquean bien el ruido'",
            score: 94
          },
          {
            icon: TrendingUp,
            title: "Diseño Plegable Compacto",
            description: "Fácil almacenamiento y portabilidad. Ajustable desde niños hasta adultos",
            score: 91
          }
        ];

      case "14": // Respirador 6200 con Gafas de Seguridad
        return [
          {
            icon: Award,
            title: "Sistema de Filtración Dual Profesional",
            description: "Bloquea eficazmente polen, polvo y partículas. Incluye 10 filtros de algodón",
            score: 98
          },
          {
            icon: Shield,
            title: "Silicona de Calidad Alimentaria",
            description: "Gel de sílice premium con diademas elásticas dobles. Cómodo y duradero",
            score: 96
          },
          {
            icon: Users,
            title: "158+ Profesionales lo Recomiendan",
            description: "4.7/5 estrellas. Nº1 en Respiradores. 'Excelente para carpintería', 'Se ajusta perfecto'",
            score: 94
          },
          {
            icon: TrendingUp,
            title: "Kit Completo con Gafas Incluidas",
            description: "Máscara + 10 filtros + 2 tapas + gafas de seguridad. Ideal para múltiples trabajos",
            score: 92
          }
        ];

      case "15": // Truper Gabardina Impermeable
        return [
          {
            icon: Award,
            title: "Protección PVC Total contra Lluvia",
            description: "Material PVC con forro de poliéster 100% y refuerzo interior resistente",
            score: 95
          },
          {
            icon: Shield,
            title: "Diseño Funcional Profesional",
            description: "Ventilación en axilas, cordón ajustable, cremallera + broches. Repele líquidos",
            score: 93
          },
          {
            icon: Users,
            title: "197+ Trabajadores Satisfechos",
            description: "4.5/5 estrellas. 'Muy resistente', 'Excelente para lluvias', 'Buena calidad'",
            score: 91
          },
          {
            icon: TrendingUp,
            title: "Marca TRUPER Confiable",
            description: "Calidad industrial comprobada. Ideal para construcción y trabajo exterior",
            score: 89
          }
        ];

      case "17": // Truper Protector facial de malla PF-500M
        return [
          {
            icon: Award,
            title: "Malla de Acero Aleación Resistente",
            description: "Máxima ventilación en condiciones de humedad. Material duradero que no compromete la visibilidad",
            score: 96
          },
          {
            icon: Shield,
            title: "Sistema de Ajuste Profesional",
            description: "Ajuste de profundidad personalizable y abatimiento de 90° para facilidad de uso",
            score: 94
          },
          {
            icon: Users,
            title: "Preferido por Jardineros Profesionales",
            description: "4.5/5 estrellas. Nº1 en Protectores Faciales. 'Excelente para desbrozadora', 'Muy cómodo'",
            score: 92
          },
          {
            icon: TrendingUp,
            title: "Marca TRUPER Confiable",
            description: "Reusable con mantenimiento adecuado. Especialmente recomendado para uso forestal",
            score: 90
          }
        ];

      case "18": // Truper BOT-I Botas industriales
        return [
          {
            icon: Award,
            title: "Material PVC de Alta Resistencia",
            description: "Construcción robusta que resiste abrasión, flexión y descarre en entornos industriales",
            score: 97
          },
          {
            icon: Shield,
            title: "Suela Antiderrapante Especializada",
            description: "Diseño que impide acumulación de residuos con tracción superior en superficies húmedas",
            score: 95
          },
          {
            icon: Users,
            title: "205+ Trabajadores las Recomiendan",
            description: "4.6/5 estrellas. Nº2 en Calzado Industrial. 'Súper buenas', 'Excelente calidad-precio'",
            score: 93
          },
          {
            icon: TrendingUp,
            title: "Resistente a Químicos y Aceites",
            description: "Fácil limpieza y mantenimiento. Disponible en tallas 25-30 cm con forro sintético",
            score: 91
          }
        ];

      case "19": // AKRON Escalera De Extensión Fibra De Vidrio
        return [
          {
            icon: Award,
            title: "Fibra de Vidrio Aislante Eléctrico",
            description: "Material que cumple normas de seguridad obligatorias. Aislamiento eléctrico para trabajos especializados",
            score: 99
          },
          {
            icon: Shield,
            title: "Capacidad Industrial de 175kg",
            description: "24 escalones robustos hasta 7.32m de altura total. Máxima seguridad laboral hasta 5.46m",
            score: 97
          },
          {
            icon: Users,
            title: "Calificación Perfecta 5/5 Estrellas",
            description: "100% satisfacción. 'Muy útil para pintar', 'Incluso para cortar ramas de árbol'",
            score: 95
          },
          {
            icon: TrendingUp,
            title: "Uso Obligatorio por Norma",
            description: "Requerida en empresas, fábricas e instalaciones. Inversión en seguridad profesional",
            score: 93
          }
        ];

      case "20": // Truper EST-35 Escalera de tijera
        return [
          {
            icon: Award,
            title: "Estructura de Aluminio Profesional",
            description: "5 escalones antiderrapantes de 8cm con bandeja retráctil para herramientas",
            score: 98
          },
          {
            icon: Shield,
            title: "Doble Refuerzo y Estabilidad",
            description: "Refuerzo en peldaños inferiores y separadores externos. Capacidad 90.72kg",
            score: 96
          },
          {
            icon: Users,
            title: "1,888+ Usuarios Satisfechos",
            description: "4.8/5 estrellas. Nº3 en Escaleras de Tijera. 'Ligera y resistente', 'Muy estable'",
            score: 94
          },
          {
            icon: TrendingUp,
            title: "Diseño Plegable Compacto",
            description: "Fácil almacenamiento. Tacones antiderrapantes protegen suelo. Marca TRUPER confiable",
            score: 92
          }
        ];

      case "21": // Crescent Juego de llaves combinadas
        return [
          {
            icon: Award,
            title: "Acero Cromo Vanadio Premium",
            description: "Durabilidad excepcional con tecnología Surface Drive que elimina redondeo de sujetadores",
            score: 97
          },
          {
            icon: Shield,
            title: "Tratamiento Térmico Profesional",
            description: "Máxima resistencia con acabado níquel cromado anticorrosión y pulido espejo",
            score: 95
          },
          {
            icon: Users,
            title: "1,105+ Profesionales Confían",
            description: "4.6/5 estrellas. Nº82 en Llaves Mixtas. 'Excelente para suspensión', 'Gran calidad'",
            score: 93
          },
          {
            icon: TrendingUp,
            title: "Marca Crescent desde 1907",
            description: "Especificaciones ANSI y ASME. Tamaños 8-19mm estampados ambos lados para identificación",
            score: 91
          }
        ];

      case "22": // YIYITOOLS - Juego de llaves hexagonales
        return [
          {
            icon: Award,
            title: "Acero S2 Tratado Térmicamente", 
            description: "30 piezas métricas e imperiales. Mejor dureza y torsión que cromo vanadio estándar",
            score: 94
          },
          {
            icon: Shield,
            title: "Diseño de Brazo Largo/Corto",
            description: "Alcance extendido + apalancamiento adicional. Acabado óxido negro anticorrosión",
            score: 92
          },
          {
            icon: Users,
            title: "4,301+ Usuarios Satisfechos",
            description: "4.7/5 estrellas. Ranking #5 Llaves Hexagonales. 'Excelente calidad por el precio'",
            score: 90
          },
          {
            icon: TrendingUp,
            title: "Kit Completo Profesional",
            description: "Changzhou Yiyi Tools 20 años experiencia. Estuche organizado con medidas marcadas",
            score: 88
          }
        ];

      case "24": // Caja de Herramientas 100 en 1
        return [
          {
            icon: Award,
            title: "Kit Completo 100 Piezas",
            description: "Incluye destornilladores, alicates, cinta métrica, martillo sacaclavos y más",
            score: 88
          },
          {
            icon: Shield,
            title: "Acero Forjado Galvanizado",
            description: "Protección contra oxidación y larga vida útil. Caja moldeo por soplado resistente",
            score: 86
          },
          {
            icon: Users,
            title: "61 Reseñas Verificadas",
            description: "4.4/5 estrellas. Ranking #3 Juegos Herramientas. 'Excelente relación calidad-precio'",
            score: 84
          },
          {
            icon: TrendingUp,
            title: "Perfecto para el Hogar",
            description: "Ideal bricolaje, reparaciones básicas, oficina y garaje. Fácil almacenamiento",
            score: 82
          }
        ];

      case "25": // Pretul J-2032MPG
        return [
          {
            icon: Award,
            title: "Acero Cromo Vanadio Premium",
            description: "32 llaves combinadas. 2X más resistente al desgaste que acero al carbono",
            score: 96
          },
          {
            icon: Shield,
            title: "Acabado Níquel Negro",
            description: "2X más resistencia a corrosión. Incluye llaves cortas para espacios reducidos",
            score: 94
          },
          {
            icon: Users,
            title: "38 Usuarios Profesionales",
            description: "4.8/5 estrellas. Ranking #4 Juegos Llaves. 'Excelente calidad, muy completo'",
            score: 92
          },
          {
            icon: TrendingUp,
            title: "Garantía Truper Extendida",
            description: "177 centros servicio México/Latinoamérica. Sin nota compra requerida",
            score: 90
          }
        ];

      case "26": // CRAFTSMAN Taladro
        return [
          {
            icon: Award,
            title: "Potencia Industrial 800W",
            description: "3,100 RPM + 52,700 IPM. Portabrocas con llave para máxima retención",
            score: 98
          },
          {
            icon: Shield,
            title: "Construcción Uso Pesado",
            description: "Diseño robusto CRAFTSMAN. Botón bloqueo para operación continua segura",
            score: 96
          },
          {
            icon: Users,
            title: "697+ Profesionales Aprueban",
            description: "4.8/5 estrellas. 'El mejor taladro', 'Potencia excepcional para concreto'",
            score: 94
          },
          {
            icon: TrendingUp,
            title: "Marca de Confianza",
            description: "CRAFTSMAN tradición calidad. Incluye llave mandril, porta llaves, mango lateral",
            score: 92
          }
        ];

      case "27": // Bosch Rotomartillo
        return [
          {
            icon: Award,
            title: "Tecnología Bosch 18V",
            description: "60 Nm torque + Electronic Cell Protection. Mandril metálico robusto",
            score: 97
          },
          {
            icon: Shield,
            title: "Sistema Tres en Uno",
            description: "Destornillador + Taladro + Percutor. LED integrado sin sombras",
            score: 95
          },
          {
            icon: Users,
            title: "427+ Usuarios Satisfechos",
            description: "4.7/5 estrellas. Ranking #1 Martillos Perforadores. '10+ horas una batería'",
            score: 93
          },
          {
            icon: TrendingUp,
            title: "Kit Completo Premium",
            description: "2 baterías + cargador + maletín. Tradición Bosch desde 1886",
            score: 91
          }
        ];
      
      case "30": // Bosch Medidor Láser GLM 25-23
        return [
          {
            icon: Award,
            title: "Precisión Profesional Bosch",
            description: "Tecnología láser que garantiza mediciones con precisión de ±1.5mm hasta 25m.",
            score: 99
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

      case "31": // MOYAC Linterna
        return [
          {
            icon: Zap,
            title: "Potencia Inigualable de 2400 Lúmenes",
            description: "Equipada con un chip LED P70.2, ilumina objetos a 1000 metros de distancia, superando a las linternas convencionales.",
            score: 99
          },
          {
            icon: Clock,
            title: "Batería de Larga Duración (5000mAh)",
            description: "Ofrece hasta 12 horas de autonomía. Recargable vía USB-C y funciona como power bank para tus dispositivos.",
            score: 97
          },
          {
            icon: Shield,
            title: "Construcción de Grado Militar",
            description: "Fabricada con aleación de aluminio aeroespacial, con resistencia al agua IPX6 y a impactos severos.",
            score: 95
          },
          {
            icon: Award,
            title: "Versatilidad Táctica Total",
            description: "Cuenta con 5 modos de luz (Alto, Medio, Bajo, SOS, Estroboscópico) y zoom telescópico para cualquier situación.",
            score: 94
          }
        ];

      case "32": // ZAWELIYO Tijeras para Cables
        return [
          {
            icon: Wrench,
            title: "Mecanismo de Trinquete Eficiente",
            description: "Corta cables de Cobre/Aluminio de 300mm² con una mano, reduciendo el esfuerzo en un 60%.",
            score: 98
          },
          {
            icon: Award,
            title: "Cuchillas de Acero de Alto Carbono",
            description: "Filo duradero con tratamiento térmico para cortes limpios y precisos en más de 5,000 ciclos.",
            score: 96
          },
          {
            icon: Shield,
            title: "Diseño Seguro y Ergonómico",
            description: "Mangos antideslizantes de PVC y bloqueo de seguridad para un manejo cómodo y seguro.",
            score: 94
          },
          {
            icon: Users,
            title: "Calificación Perfecta de 4.6 Estrellas",
            description: "Respaldado por usuarios profesionales, ideal para electricistas e instaladores.",
            score: 92
          }
        ];

      case "33": // ANMIEN Cinturón Portaherramientas
        return [
          {
            icon: Briefcase,
            title: "Construcción de Grado Militar",
            description: "Fabricado con tela Oxford 1680D, ofrece una resistencia superior al desgarro y la abrasión, superando a los materiales estándar 600D.",
            score: 98
          },
          {
            icon: Scale,
            title: "Distribución Ergonómica del Peso",
            description: "Los tirantes acolchados y ajustables distribuyen el peso de las herramientas, reduciendo la tensión en la espalda y las caderas para mayor comodidad durante todo el día.",
            score: 96
          },
          {
            icon: Wrench,
            title: "Máxima Organización y Acceso",
            description: "Con 27 bolsillos, 2 bolsas desmontables y soportes específicos para martillo y cinta métrica, cada herramienta tiene su lugar para un acceso rápido.",
            score: 95
          },
          {
            icon: Cog,
            title: "Diseño Totalmente Personalizable",
            description: "Su sistema modular permite quitar, reposicionar o usar las bolsas de forma independiente, adaptándose perfectamente a cualquier tarea o preferencia.",
            score: 94
          }
        ];
      
      case "34": // CARTMAN Juego 218 piezas
        return [
          {
            icon: Wrench,
            title: "Kit Todo en Uno Definitivo",
            description: "Con 218 piezas, este juego cubre casi cualquier necesidad mecánica, desde automoción hasta reparaciones domésticas, eliminando la necesidad de comprar herramientas por separado.",
            score: 98
          },
          {
            icon: Shield,
            title: "Calidad Profesional (Estándar ANSI)",
            description: "Fabricado en acero al cromo vanadio y cumpliendo con los estándares ANSI, garantiza durabilidad, resistencia y un rendimiento fiable a largo plazo.",
            score: 96
          },
          {
            icon: Cog,
            title: "Trinquetes de Alto Rendimiento",
            description: "Los trinquetes de 72 dientes permiten trabajar en espacios reducidos con un arco de giro de solo 5 grados, una característica de herramientas de gama alta.",
            score: 95
          },
          {
            icon: Briefcase,
            title: "Organización y Portabilidad Superior",
            description: "El robusto maletín moldeado mantiene cada pieza en su lugar, facilitando el transporte y la localización rápida de la herramienta correcta.",
            score: 94
          }
        ];
      
      case "35": // AKSTEST Monitor de 4 Gases
        return [
          {
            icon: Shield,
            title: "Seguridad 4 en 1 Crítica",
            description: "Detecta simultáneamente O₂, CO, H₂S y gases combustibles (LEL), proporcionando una protección completa contra las amenazas atmosféricas más comunes y peligrosas.",
            score: 99
          },
          {
            icon: Siren,
            title: "Alerta Triple Infalible",
            description: "Combina alarmas sonoras fuertes (≥85dB), luces LED parpadeantes y vibración para garantizar que las alertas de peligro nunca pasen desapercibidas, incluso en entornos ruidosos.",
            score: 97
          },
          {
            icon: Beaker,
            title: "Sensores de Alta Precisión",
            description: "Equipado con sensores electroquímicos y catalíticos de grado industrial para una detección rápida (T90 <30s) y precisa, asegurando lecturas fiables cuando más importa.",
            score: 96
          },
          {
            icon: BatteryCharging,
            title: "Listo para el Trabajo Duro",
            description: "Con una clasificación IP65 a prueba de polvo y agua y una batería de larga duración (+12h), está construido para soportar las condiciones más exigentes del campo.",
            score: 95
          }
        ];
      
      case "36": // Bitwo Detector de Gas
        return [
          {
            icon: Shield,
            title: "Detección Rápida y Precisa",
            description: "Sensor de alta sensibilidad que detecta fugas de Gas LP y Natural de forma casi instantánea, protegiendo tu hogar o negocio.",
            score: 98
          },
          {
            icon: BarChart3,
            title: "Indicador Visual Intuitivo",
            description: "La barra de 8 LEDs muestra claramente la concentración del gas, permitiendo localizar la fuente de la fuga con facilidad.",
            score: 95
          },
          {
            icon: BatteryCharging,
            title: "Portátil y Recargable por USB-C",
            description: "Diseño ultraligero con hasta 6 horas de autonomía y la comodidad de la carga moderna vía USB-C.",
            score: 94
          },
          {
            icon: Cog,
            title: "Operación Simplificada",
            description: "Con un solo botón y calibración automática, es la herramienta de seguridad perfecta para cualquier persona, sin necesidad de conocimientos técnicos.",
            score: 96
          }
        ];

      case "37": // ThermoPro TP30 Termómetro
        return [
          {
            icon: Zap,
            title: "Precisión y Rapidez Profesional",
            description: "Obtén lecturas de temperatura ultra rápidas (<500ms) con una precisión de ±1.5% gracias a su avanzada tecnología de sensor.",
            score: 98
          },
          {
            icon: Cog,
            title: "Emisividad Ajustable",
            description: "Ajusta la emisividad de 0.1 a 1.0 para una precisión inigualable en cualquier tipo de superficie, desde alimentos hasta motores.",
            score: 96
          },
          {
            icon: BarChart3,
            title: "Versatilidad para Múltiples Usos",
            description: "Con un amplio rango de -50°C a 550°C, es la herramienta perfecta para cocina, mecánica, HVAC y reparaciones del hogar.",
            score: 95
          },
          {
            icon: Award,
            title: "Líder en Ventas y Confianza",
            description: "Respaldado por más de 7,400 reseñas positivas, es una de las pistolas de temperatura más confiables y mejor valoradas del mercado.",
            score: 97
          }
        ];

      default:
        return [
          {
            icon: Award,
            title: "Calidad Certificada",
            description: "Cumple normativas internacionales de seguridad laboral",
            score: 98
          },
          {
            icon: Users,
            title: "Aprobado por Profesionales", 
            description: `${product.review_count || 100}+ reseñas positivas de usuarios verificados`,
            score: 94
          },
          {
            icon: TrendingUp,
            title: "Mejor Relación Calidad-Precio",
            description: "Análisis comparativo confirma mejor valor que competidores",
            score: 91
          },
          {
            icon: Shield,
            title: "Garantía Extendida",
            description: "Garantía completa + soporte técnico especializado",
            score: 96
          }
        ];
    }
  };

  const reasons = getProductSpecificReasons(product);

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent 
        className="max-w-7xl max-h-[95vh] overflow-y-auto p-0"
        onEscapeKeyDown={handleClose}
        onPointerDownOutside={handleClose}
      >
        {/* Botón de cierre mejorado */}
        <div className="absolute top-4 right-4 z-[100]">
          <Button
            variant="ghost"
            size="sm"
            className="h-10 w-10 p-0 bg-white/95 hover:bg-white shadow-lg rounded-full border border-gray-200"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              handleClose();
            }}
          >
            <X className="h-5 w-5 text-gray-700" />
          </Button>
        </div>

        {/* Header simplificado */}
        <DialogHeader className="p-6 pb-4 border-b">
          <div className="pr-12">
            <DialogTitle className="text-3xl font-bold text-gray-900 mb-3">
              {product.title}
            </DialogTitle>
            <div className="flex items-center gap-4 mb-2">
              <div className="flex items-center gap-1">
                <Star className="h-5 h-5 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold text-lg">{product.rating || '4.5'}</span>
                <span className="text-gray-500">({product.review_count || 377} reseñas)</span>
              </div>
              <Badge variant="secondary" className="text-sm">{product.category}</Badge>
              <Badge className="bg-green-600 text-sm">En stock</Badge>
            </div>
          </div>
        </DialogHeader>

        {/* Sección principal: Carrusel + Información */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 p-6">
          
          {/* Carrusel de imágenes - Más espacio */}
          <div className="lg:col-span-3">
            {/* Imagen principal más grande */}
            <div className="aspect-square relative bg-white rounded-xl border overflow-hidden shadow-sm mb-4">
              <Image
                src={productImages[currentImageIndex]?.url || product.image_url || '/images/placeholder-product.webp'}
                alt={productImages[currentImageIndex]?.alt || product.title}
                fill
                className={`object-contain transition-transform duration-300 ${
                  isZoomed ? 'scale-150 cursor-zoom-out' : 'cursor-zoom-in'
                }`}
                onClick={() => setIsZoomed(!isZoomed)}
                priority
              />
              
              {/* Controles de navegación - Solo si hay múltiples imágenes */}
              {productImages.length > 1 && (
                <>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg h-12 w-12"
                    onClick={prevImage}
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg h-12 w-12"
                    onClick={nextImage}
                  >
                    <ChevronRight className="w-6 h-6" />
                  </Button>
                  
                  {/* Indicador de posición mejorado */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white text-sm px-3 py-1 rounded-full">
                    {currentImageIndex + 1} / {productImages.length}
                  </div>
                </>
              )}
            </div>

            {/* Miniaturas mejoradas - Solo si hay múltiples imágenes */}
            {productImages.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {productImages.map((image, index) => (
                  <button
                    key={index}
                    className={`relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-3 transition-all ${
                      index === currentImageIndex
                        ? 'border-blue-500 shadow-lg'
                        : 'border-gray-200 hover:border-gray-400'
                    }`}
                    onClick={() => goToImage(index)}
                  >
                    <Image
                      src={image.url}
                      alt={image.alt}
                      fill
                      className="object-contain bg-white"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Información del producto */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Precio destacado */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl border border-green-200">
              <div className="text-4xl font-bold text-green-700 mb-2">
                ${product.price.toFixed(2)} {product.currency}
              </div>
              <div className="text-green-600 font-medium mb-4">✓ Envío gratis incluido</div>
              <div className="flex items-center gap-2 text-sm text-green-600">
                <Truck className="h-4 w-4" />
                <span>Entrega rápida disponible</span>
              </div>
            </div>

            {/* Acciones principales */}
            <div className="space-y-3">
              <Button variant="outline" className="w-full h-12 text-lg" size="lg">
                <ExternalLink className="h-5 w-5 mr-2" />
                Ver en Amazon
              </Button>
              <Link href={`/store/${product.asin}`} className="block">
                <Button variant="ghost" className="w-full h-12">
                  <Eye className="h-4 w-4 mr-2" />
                  Ver página completa
                </Button>
              </Link>
            </div>

            {/* Información destacada */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-yellow-500" />
                  Información del Producto
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Marca:</span>
                  <span className="font-medium">{product.brand || 'Premium Industrial'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Categoría:</span>
                  <span className="font-medium">{product.category}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Modelo:</span>
                  <span className="font-medium">
                    {(product as any).product_details?.['Número de modelo'] || 
                     (product as any).specifications?.['Modelo'] || 
                     'Modelo Industrial'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Disponibilidad:</span>
                  <span className="font-medium text-green-600">
                    ✓ En stock
                  </span>
                </div>
              </CardContent>
            </Card>

            {/* Botón de favoritos */}
            <Button
              variant="outline"
              className="w-full"
              onClick={() => setIsWishlisted(!isWishlisted)}
            >
              <Heart className={`h-4 w-4 mr-2 ${isWishlisted ? 'fill-red-500 text-red-500' : ''}`} />
              {isWishlisted ? 'En favoritos' : 'Agregar a favoritos'}
            </Button>

          </div>
        </div>

        {/* Sección de tabs - Movida abajo para darle más espacio al carrusel */}
        <div className="border-t bg-gray-50">
          <div className="p-6">
            <Tabs value={selectedTab} onValueChange={setSelectedTab}>
              <TabsList className="grid grid-cols-6 w-full mb-6">
                <TabsTrigger value="overview">Resumen</TabsTrigger>
                <TabsTrigger value="about">Acerca de</TabsTrigger>
                <TabsTrigger value="details">Detalles</TabsTrigger>
                <TabsTrigger value="additional">Info Adicional</TabsTrigger>
                <TabsTrigger value="reviews">Reseñas</TabsTrigger>
                <TabsTrigger value="why-choose">¿Por qué elegir?</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BarChart3 className="h-5 w-5" />
                      Distribución de Calificaciones
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {ratingData.map((item) => (
                        <div key={item.stars} className="flex items-center gap-3">
                          <div className="flex items-center gap-1 w-16">
                            <span className="text-sm">{item.stars}</span>
                            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          </div>
                          <Progress value={item.percentage} className="flex-1" />
                          <span className="text-sm text-gray-600 w-12">{item.count}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-green-600">92%</div>
                        <div className="text-sm text-gray-600">Satisfacción</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-blue-600">4.8/5</div>
                        <div className="text-sm text-gray-600">Calidad</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-purple-600">95%</div>
                        <div className="text-sm text-gray-600">Recomprarían</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-blue-500 bg-gradient-to-r from-blue-50 to-white">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-3 text-blue-800">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <Info className="h-5 w-5 text-blue-600" />
                      </div>
                      Acerca de este artículo
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {(product as any).features && (
                      <div className="space-y-4">
                        {Object.entries((product as any).features).map(([key, value]) => (
                          <div key={key} className="bg-white rounded-lg p-4 border border-blue-100 shadow-sm">
                            <div className="flex items-start gap-3">
                              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                              <div className="flex-1">
                                <span className="font-semibold text-gray-800 block mb-1 text-sm uppercase tracking-wide">{key}</span>
                                <span className="text-gray-600 leading-relaxed">{String(value)}</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-green-500 bg-gradient-to-r from-green-50 to-white">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-3 text-green-800">
                      <div className="p-2 bg-green-100 rounded-lg">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                      </div>
                      Información adicional
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {(product as any).additional_info && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {Object.entries((product as any).additional_info).map(([key, value]) => (
                          <div key={key} className="bg-white rounded-lg p-4 border border-green-100 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center gap-3 mb-2">
                              {key === "País de origen" && <div className="w-3 h-3 bg-blue-500 rounded-full"></div>}
                              {key === "Envío" && <div className="w-3 h-3 bg-orange-500 rounded-full"></div>}
                              {key === "Vendido por" && <div className="w-3 h-3 bg-purple-500 rounded-full"></div>}
                              {key === "Devolución" && <div className="w-3 h-3 bg-red-500 rounded-full"></div>}
                              {key === "Pago" && <div className="w-3 h-3 bg-green-500 rounded-full"></div>}
                              <span className="font-semibold text-gray-800 text-sm uppercase tracking-wide">{key}</span>
                            </div>
                            <span className="text-gray-600 font-medium">{String(value)}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-purple-500 bg-gradient-to-r from-purple-50 to-white">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-3 text-purple-800">
                      <div className="p-2 bg-purple-100 rounded-lg">
                        <Eye className="h-5 w-5 text-purple-600" />
                      </div>
                      Detalles del producto
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {(product as any).product_details && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {Object.entries((product as any).product_details).map(([key, value]) => (
                          <div key={key} className="bg-white rounded-lg p-4 border border-purple-100 shadow-sm hover:shadow-md transition-all duration-200">
                            <div className="flex items-start gap-3">
                              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                              <div className="flex-1">
                                <span className="font-semibold text-gray-800 block mb-1 text-sm uppercase tracking-wide">{key}</span>
                                <span className="text-gray-600 leading-relaxed">{String(value)}</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-orange-500 bg-gradient-to-r from-orange-50 to-white">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-3 text-orange-800">
                      <div className="p-2 bg-orange-100 rounded-lg">
                        <Wrench className="h-5 w-5 text-orange-600" />
                      </div>
                      Especificaciones Técnicas
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {(product as any).specifications ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {Object.entries((product as any).specifications).map(([key, value]) => (
                          <div key={key} className="bg-white rounded-lg p-4 border border-orange-100 shadow-sm hover:shadow-md transition-all duration-200">
                            <div className="flex items-center justify-between">
                              <span className="font-semibold text-gray-800 text-sm uppercase tracking-wide flex items-center gap-2">
                                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                                {key}
                              </span>
                              <span className="text-gray-600 font-medium text-right">{String(value)}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-white rounded-lg p-4 border border-orange-100 shadow-sm">
                          <div className="flex items-center justify-between">
                            <span className="font-semibold text-gray-800 text-sm uppercase tracking-wide flex items-center gap-2">
                              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                              Marca
                            </span>
                            <span className="text-gray-600 font-medium">{product.brand || 'Premium Industrial'}</span>
                          </div>
                        </div>
                        <div className="bg-white rounded-lg p-4 border border-orange-100 shadow-sm">
                          <div className="flex items-center justify-between">
                            <span className="font-semibold text-gray-800 text-sm uppercase tracking-wide flex items-center gap-2">
                              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                              Modelo
                            </span>
                            <span className="text-gray-600 font-medium">{product.asin}</span>
                          </div>
                        </div>
                        <div className="bg-white rounded-lg p-4 border border-orange-100 shadow-sm">
                          <div className="flex items-center justify-between">
                            <span className="font-semibold text-gray-800 text-sm uppercase tracking-wide flex items-center gap-2">
                              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                              Categoría
                            </span>
                            <span className="text-gray-600 font-medium">{product.category}</span>
                          </div>
                        </div>
                        <div className="bg-white rounded-lg p-4 border border-orange-100 shadow-sm">
                          <div className="flex items-center justify-between">
                            <span className="font-semibold text-gray-800 text-sm uppercase tracking-wide flex items-center gap-2">
                              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              Certificación
                            </span>
                            <span className="text-gray-600 font-medium">OSHA/ANSI Compliant</span>
                          </div>
                        </div>
                        <div className="bg-white rounded-lg p-4 border border-orange-100 shadow-sm">
                          <div className="flex items-center justify-between">
                            <span className="font-semibold text-gray-800 text-sm uppercase tracking-wide flex items-center gap-2">
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                              Garantía
                            </span>
                            <span className="text-gray-600 font-medium">24 meses</span>
                          </div>
                        </div>
                        <div className="bg-white rounded-lg p-4 border border-orange-100 shadow-sm">
                          <div className="flex items-center justify-between">
                            <span className="font-semibold text-gray-800 text-sm uppercase tracking-wide flex items-center gap-2">
                              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                              Origen
                            </span>
                            <span className="text-gray-600 font-medium">Fabricado en USA</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="reviews" className="space-y-4">
                {productReviews.map((review: any, index: number) => (
                  <Card key={`review-${index}-${review.author}`} className="border-l-4 border-l-yellow-400 bg-gradient-to-r from-yellow-50 to-white hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                              {review.author.charAt(0).toUpperCase()}
                            </div>
                            <div>
                              <span className="font-bold text-gray-900 text-lg">{review.author}</span>
                              {review.verified && (
                                <Badge variant="outline" className="ml-2 text-xs border-green-500 text-green-700 bg-green-50">
                                  <Check className="h-3 w-3 mr-1" />
                                  Compra verificada
                                </Badge>
                              )}
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star 
                                  key={i} 
                                  className={`h-5 w-5 ${
                                    i < (review.rating || 0)
                                      ? 'fill-yellow-400 text-yellow-400' 
                                      : 'text-gray-300'
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-sm text-gray-500 font-medium bg-gray-100 px-2 py-1 rounded-full">{review.date}</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-2 text-sm text-gray-500 bg-blue-50 px-3 py-1 rounded-full">
                            <ThumbsUp className="h-4 w-4 text-blue-600" />
                            <span className="font-medium text-blue-700">{review.helpful_count || 0}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm">
                        <h4 className="font-bold text-gray-900 mb-3 text-lg">{review.title}</h4>
                        <p className="text-gray-700 leading-relaxed">{review.text || review.content}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="about" className="space-y-4">
                <Card className="border-blue-100 shadow-sm">
                  <CardHeader className="bg-gradient-to-r from-blue-50 to-cyan-50">
                    <CardTitle className="flex items-center gap-2 text-blue-800">
                      <Info className="h-5 w-5" />
                      Acerca de este artículo
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      {product.features && Object.entries(product.features).map(([feature, description], index) => (
                        <div key={index} className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border-l-4 border-green-400">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="font-semibold text-green-800">{feature}:</span>
                            <p className="text-gray-700 mt-1">{description}</p>
                          </div>
                        </div>
                      ))}
                      {product.pros && product.pros.slice(0, 4).map((pro, index) => (
                        <div key={index} className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                          <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{pro}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="details" className="space-y-4">
                <Card className="border-purple-100 shadow-sm">
                  <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50">
                    <CardTitle className="flex items-center gap-2 text-purple-800">
                      <Wrench className="h-5 w-5" />
                      Detalles del producto
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 gap-4">
                      {product.product_details && Object.entries(product.product_details).map(([key, value], index) => (
                        <div key={index} className="flex justify-between items-center py-3 px-4 bg-purple-50 rounded-lg border border-purple-200">
                          <span className="font-semibold text-purple-900">{key}:</span>
                          <span className="text-gray-700 text-right max-w-xs font-medium">{value}</span>
                        </div>
                      ))}
                      {product.specifications && Object.entries(product.specifications).slice(0, 6).map(([spec, value], index) => (
                        <div key={index} className="flex justify-between items-center py-3 px-4 bg-gray-50 rounded-lg border border-gray-200">
                          <span className="font-semibold text-gray-900">{spec}:</span>
                          <span className="text-gray-700 text-right max-w-xs">{value}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="additional" className="space-y-4">
                <Card className="border-amber-100 shadow-sm">
                  <CardHeader className="bg-gradient-to-r from-amber-50 to-yellow-50">
                    <CardTitle className="flex items-center gap-2 text-amber-800">
                      <Shield className="h-5 w-5" />
                      Información adicional
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      {product.additional_info && Object.entries(product.additional_info).map(([key, value], index) => (
                        <div key={index} className="flex justify-between items-center py-3 px-4 bg-amber-50 rounded-lg border border-amber-200">
                          <span className="font-semibold text-amber-900 flex items-center gap-2">
                            <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                            {key}:
                          </span>
                          <span className="text-gray-700 text-right max-w-xs font-medium">{value}</span>
                        </div>
                      ))}
                      {product.usage_guide && (
                        <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200">
                          <h4 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
                            <Eye className="h-4 w-4" />
                            Guía de uso:
                          </h4>
                          <ul className="space-y-2">
                            {(() => {
                              const guideData = product.usage_guide;
                              if (!guideData) return null;
                              
                              // Si es string, convertir a array
                              const guides = Array.isArray(guideData) 
                                ? guideData 
                                : [guideData];
                              
                              return guides.slice(0, 4).map((guide, index) => (
                                <li key={index} className="flex items-start gap-2">
                                  <Check className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                                  <span className="text-gray-700 text-sm">{guide}</span>
                                </li>
                              ));
                            })()}
                          </ul>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="why-choose" className="space-y-4">
                {reasons.map((reason, i) => (
                  <Card key={i}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-blue-100 rounded-lg">
                          <reason.icon className="h-6 w-6 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg mb-2">{reason.title}</h3>
                          <p className="text-gray-700 mb-3">{reason.description}</p>
                          <div className="flex items-center gap-3">
                            <Progress value={reason.score} className="flex-1" />
                            <span className="font-semibold text-blue-600">{reason.score}%</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
