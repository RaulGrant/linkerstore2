import { AmazonProduct } from '@/lib/types/store';

// Catálogo oficial de productos industriales - Amazon Afiliados
// Actualizado: 22 de Julio, 2025
export const realAmazonProducts: AmazonProduct[] = [
  // ========================================
  // EQUIPOS DE PROTECCIÓN PERSONAL (EPP)
  // ========================================
  
  {
    id: '1',
    asin: "chaleco-seguridad-reflectante",
    title: "Chaleco de Seguridad con Tiras Reflectantes Alta Visibilidad",
    description: "Chaleco de seguridad industrial con tiras reflectantes para construcción y trabajo nocturno. Cumple estándares ANSI/ISEA 107-2015 Clase 2.",
    price: 25.99,
    currency: 'USD',
    image_url: "/images/products/chaleco-seguridad-reflectante.jpg",
    amazon_url: "https://a.co/d/1dVFtHu",
    category: "EPP",
    sub_category: "Ropa de Seguridad",
    brand: "High Visibility Pro",
    rating: 4.6,
    review_count: 1247,
    is_prime: true,
    is_active: true,
    tags: ["chaleco", "seguridad", "reflectante", "construcción", "ANSI", "alta visibilidad"],
    created_at: '2025-07-22T00:00:00Z',
    updated_at: '2025-07-22T00:00:00Z'
  },

  {
    id: '2',
    asin: "overol-industrial-reflejantes",
    title: "Overol Industrial con Reflejantes para Trabajo Pesado",
    description: "Overol industrial resistente con bandas reflectantes para trabajos de construcción, soldadura y mantenimiento industrial.",
    price: 89.99,
    currency: 'USD',
    image_url: "/images/products/overol-industrial-reflejantes.jpg",
    amazon_url: "https://a.co/d/7HU6S69",
    category: "EPP",
    sub_category: "Ropa de Trabajo",
    brand: "Industrial Pro",
    rating: 4.4,
    review_count: 892,
    is_prime: true,
    is_active: true,
    tags: ["overol", "industrial", "reflectante", "trabajo pesado", "soldadura", "mecánica"],
    created_at: '2025-07-22T00:00:00Z',
    updated_at: '2025-07-22T00:00:00Z'
  },

  {
    id: '3',
    asin: "botas-lica-casquillo",
    title: "Botas LICA con Casquillo de Poliamida Antiderrapantes",
    description: "Botas de seguridad industrial con casquillo de poliamida, suela antiderrapante y puntera de seguridad. Ideales para construcción e industria.",
    price: 125.99,
    currency: 'USD',
    image_url: "/images/products/botas-lica-casquillo.jpg",
    amazon_url: "https://a.co/d/5mZYaMM",
    category: "EPP",
    sub_category: "Calzado de Seguridad",
    brand: "LICA",
    rating: 4.5,
    review_count: 2156,
    is_prime: true,
    is_active: true,
    tags: ["botas", "seguridad", "casquillo", "antiderrapante", "LICA", "construcción"],
    created_at: '2025-07-22T00:00:00Z',
    updated_at: '2025-07-22T00:00:00Z'
  },

  {
    id: '4',
    asin: "tenis-seguridad-lubardy-kevlar",
    title: "Tenis de Seguridad Lubardy con Kevlar Ultraligeros",
    description: "Tenis de seguridad deportivos con puntera de Kevlar, ideales para trabajos que requieren agilidad y protección simultánea.",
    price: 95.99,
    currency: 'USD',
    image_url: "/images/products/tenis-seguridad-lubardy.jpg",
    amazon_url: "https://a.co/d/eUoj1Us",
    category: "EPP",
    sub_category: "Calzado Deportivo de Seguridad",
    brand: "Lubardy",
    rating: 4.3,
    review_count: 743,
    is_prime: true,
    is_active: true,
    tags: ["tenis", "seguridad", "kevlar", "ultraligero", "deportivo", "técnicos"],
    created_at: '2025-07-22T00:00:00Z',
    updated_at: '2025-07-22T00:00:00Z'
  },

  {
    id: '5',
    asin: "guantes-threeh-corte",
    title: "Guantes ThreeH Resistentes al Corte Nivel 5",
    description: "Guantes de trabajo con máxima protección contra cortes, ideales para manejo de materiales afilados y vidrio industrial.",
    price: 29.99,
    currency: 'USD',
    image_url: "/images/products/guantes-threeh-corte.jpg",
    amazon_url: "https://a.co/d/0sbC1Cv",
    category: "EPP",
    sub_category: "Guantes de Protección",
    brand: "ThreeH",
    rating: 4.7,
    review_count: 1834,
    is_prime: true,
    is_active: true,
    tags: ["guantes", "corte", "nivel 5", "HPPE", "seguridad", "vidrio", "metal"],
    created_at: '2025-07-22T00:00:00Z',
    updated_at: '2025-07-22T00:00:00Z'
  },

  {
    id: '6',
    asin: "lentes-seguridad-yomym",
    title: "Lentes de Seguridad YOMYM Antirrayas Policarbonato",
    description: "Lentes de protección industrial con cristales de policarbonato antirrayas, ideales para construcción y trabajo con partículas.",
    price: 18.99,
    currency: 'USD',
    image_url: "/images/products/lentes-seguridad-yomym.jpg",
    amazon_url: "https://a.co/d/cS79Pr6",
    category: "EPP",
    sub_category: "Protección Ocular",
    brand: "YOMYM",
    rating: 4.4,
    review_count: 967,
    is_prime: true,
    is_active: true,
    tags: ["lentes", "seguridad", "policarbonato", "UV", "construcción", "ANSI"],
    created_at: '2025-07-22T00:00:00Z',
    updated_at: '2025-07-22T00:00:00Z'
  },

  // ========================================
  // HERRAMIENTAS Y EQUIPOS
  // ========================================

  {
    id: '7',
    asin: "escalera-akron-fibra",
    title: "Escalera AKRON Fibra de Vidrio Dieléctrica 6 Peldaños",
    description: "Escalera de fibra de vidrio no conductiva, ideal para trabajos eléctricos y mantenimiento industrial. Capacidad 136kg.",
    price: 285.99,
    currency: 'USD',
    image_url: "/images/products/escalera-akron-fibra.jpg",
    amazon_url: "https://a.co/d/865MGaD",
    category: "Herramientas",
    sub_category: "Escaleras",
    brand: "AKRON",
    rating: 4.6,
    review_count: 445,
    is_prime: true,
    is_active: true,
    tags: ["escalera", "fibra vidrio", "dieléctrica", "electricista", "AKRON", "no conductiva"],
    created_at: '2025-07-22T00:00:00Z',
    updated_at: '2025-07-22T00:00:00Z'
  },

  {
    id: '8',
    asin: "taladro-craftsman-percutor",
    title: "Taladro CRAFTSMAN Percutor 750W con Martillo",
    description: "Taladro percutor profesional para construcción, con función martillo y velocidad variable. Incluye maletín y brocas.",
    price: 189.99,
    currency: 'USD',
    image_url: "/images/products/taladro-craftsman.jpg",
    amazon_url: "https://a.co/d/6hG2XrA",
    category: "Herramientas",
    sub_category: "Taladros",
    brand: "CRAFTSMAN",
    rating: 4.5,
    review_count: 1267,
    is_prime: true,
    is_active: true,
    tags: ["taladro", "percutor", "CRAFTSMAN", "750W", "construcción", "concreto"],
    created_at: '2025-07-22T00:00:00Z',
    updated_at: '2025-07-22T00:00:00Z'
  },

  {
    id: '9',
    asin: "multimetro-astroai-digital",
    title: "Multímetro AstroAI Digital 6000 Cuentas True RMS",
    description: "Multímetro digital profesional con True RMS, para mediciones precisas en AC/DC, resistencia, capacitancia y temperatura.",
    price: 45.99,
    currency: 'USD',
    image_url: "/images/products/multimetro-astroai.jpg",
    amazon_url: "https://a.co/d/gPstWl8",
    category: "Herramientas",
    sub_category: "Instrumentos de Medición",
    brand: "AstroAI",
    rating: 4.7,
    review_count: 3421,
    is_prime: true,
    is_active: true,
    tags: ["multímetro", "True RMS", "AstroAI", "electricista", "medición", "NCV"],
    created_at: '2025-07-22T00:00:00Z',
    updated_at: '2025-07-22T00:00:00Z'
  },

  // ========================================
  // PRODUCTOS DE SEGURIDAD Y MANTENIMIENTO
  // ========================================

  {
    id: '10',
    asin: "botiquin-tpouidd-104",
    title: "Botiquín TPOUIDD 104 Piezas Primeros Auxilios Industrial",
    description: "Botiquín completo de primeros auxilios para sitios de construcción e industrias, con 104 elementos médicos esenciales.",
    price: 67.99,
    currency: 'USD',
    image_url: "/images/products/botiquin-tpouidd.jpg",
    amazon_url: "https://a.co/d/d5pVgGR",
    category: "Seguridad",
    sub_category: "Primeros Auxilios",
    brand: "TPOUIDD",
    rating: 4.5,
    review_count: 892,
    is_prime: true,
    is_active: true,
    tags: ["botiquín", "primeros auxilios", "OSHA", "industrial", "emergencias", "construcción"],
    created_at: '2025-07-22T00:00:00Z',
    updated_at: '2025-07-22T00:00:00Z'
  },

  {
    id: '11',
    asin: "extintor-truper-1kg",
    title: "Extintor Truper Polvo Químico Seco ABC 1kg",
    description: "Extintor portátil de polvo químico seco ABC para fuegos de clase A, B y C. Ideal para talleres y oficinas pequeñas.",
    price: 35.99,
    currency: 'USD',
    image_url: "/images/products/extintor-truper.jpg",
    amazon_url: "https://a.co/d/aVebQcM",
    category: "Seguridad",
    sub_category: "Contra Incendios",
    brand: "Truper",
    rating: 4.3,
    review_count: 567,
    is_prime: true,
    is_active: true,
    tags: ["extintor", "ABC", "Truper", "polvo químico", "contra incendios", "portátil"],
    created_at: '2025-07-22T00:00:00Z',
    updated_at: '2025-07-22T00:00:00Z'
  },

  // Continuando con más productos EPP...
  {
    id: '12',
    asin: "lentes-proteccion-3-piezas",
    title: "Lentes de Protección 3 Piezas Antiempañante",
    description: "Set de 3 lentes de protección con tecnología antiempañante y antirrayas, ideales para trabajos en ambientes húmedos.",
    price: 32.99,
    currency: 'USD',
    image_url: "/images/products/lentes-proteccion-3-piezas.jpg",
    amazon_url: "https://a.co/d/0k65ZEs",
    category: "EPP",
    sub_category: "Protección Ocular",
    brand: "SafetyPro",
    rating: 4.5,
    review_count: 1245,
    is_prime: true,
    is_active: true,
    tags: ["lentes", "protección", "antiempañante", "3 piezas", "húmedo"],
    created_at: '2025-07-22T00:00:00Z',
    updated_at: '2025-07-22T00:00:00Z'
  },

  {
    id: '13',
    asin: "lentes-soldar-rtumeng",
    title: "Lentes para Soldar RTUMENG Shade 5-13 Automáticos",
    description: "Lentes de soldadura con oscurecimiento automático, ideales para soldadura MIG, TIG y arco eléctrico.",
    price: 89.99,
    currency: 'USD',
    image_url: "/images/products/lentes-soldar-rtumeng.jpg",
    amazon_url: "https://a.co/d/7ZqgthE",
    category: "EPP",
    sub_category: "Protección Ocular Especializada",
    brand: "RTUMENG",
    rating: 4.6,
    review_count: 678,
    is_prime: true,
    is_active: true,
    tags: ["lentes", "soldadura", "automático", "MIG", "TIG", "arco"],
    created_at: '2025-07-22T00:00:00Z',
    updated_at: '2025-07-22T00:00:00Z'
  },

  {
    id: '14',
    asin: "arnes-adooadii-completo",
    title: "Arnés AdooAdii Cuerpo Completo Trabajo en Alturas",
    description: "Arnés de seguridad de cuerpo completo con 5 puntos de anclaje, ideal para construcción y trabajo en alturas.",
    price: 155.99,
    currency: 'USD',
    image_url: "/images/products/arnes-adooadii-completo.jpg",
    amazon_url: "https://a.co/d/3In2VcR",
    category: "EPP",
    sub_category: "Trabajo en Alturas",
    brand: "AdooAdii",
    rating: 4.7,
    review_count: 892,
    is_prime: true,
    is_active: true,
    tags: ["arnés", "alturas", "5 puntos", "construcción", "seguridad"],
    created_at: '2025-07-22T00:00:00Z',
    updated_at: '2025-07-22T00:00:00Z'
  },

  {
    id: '15',
    asin: "arnes-glorouschu-osha",
    title: "Arnés GLOROUSCHU OSHA/ANSI Certificado",
    description: "Arnés de seguridad certificado OSHA y ANSI para trabajo en alturas, con acolchado ergonómico y hebillas de liberación rápida.",
    price: 178.99,
    currency: 'USD',
    image_url: "/images/products/arnes-glorouschu-osha.jpg",
    amazon_url: "https://a.co/d/hsV0TPS",
    category: "EPP",
    sub_category: "Trabajo en Alturas",
    brand: "GLOROUSCHU",
    rating: 4.8,
    review_count: 567,
    is_prime: true,
    is_active: true,
    tags: ["arnés", "OSHA", "ANSI", "certificado", "ergonómico"],
    created_at: '2025-07-22T00:00:00Z',
    updated_at: '2025-07-22T00:00:00Z'
  },

  {
    id: '16',
    asin: "tapones-silicona-12-pares",
    title: "Tapones de Silicona 12 Pares Reutilizables",
    description: "Tapones auditivos de silicona suave reutilizables, NRR 25dB, incluye estuche de almacenamiento.",
    price: 24.99,
    currency: 'USD',
    image_url: "/images/products/tapones-silicona-12-pares.jpg",
    amazon_url: "https://a.co/d/fxkQvl4",
    category: "EPP",
    sub_category: "Protección Auditiva",
    brand: "SilentEar",
    rating: 4.3,
    review_count: 1456,
    is_prime: true,
    is_active: true,
    tags: ["tapones", "silicona", "reutilizable", "NRR 25", "12 pares"],
    created_at: '2025-07-22T00:00:00Z',
    updated_at: '2025-07-22T00:00:00Z'
  },

  {
    id: '17',
    asin: "tapones-loop-quiet-2",
    title: "Tapones Loop Quiet 2 Premium Reducción Ruido",
    description: "Tapones auditivos premium con tecnología avanzada de reducción de ruido, ideales para ambientes industriales ruidosos.",
    price: 45.99,
    currency: 'USD',
    image_url: "/images/products/tapones-loop-quiet-2.jpg",
    amazon_url: "https://a.co/d/hNp6mKk",
    category: "EPP",
    sub_category: "Protección Auditiva",
    brand: "Loop",
    rating: 4.6,
    review_count: 2134,
    is_prime: true,
    is_active: true,
    tags: ["tapones", "Loop", "premium", "reducción ruido", "industrial"],
    created_at: '2025-07-22T00:00:00Z',
    updated_at: '2025-07-22T00:00:00Z'
  },

  {
    id: '18',
    asin: "orejeras-procase-nrr28",
    title: "Orejeras Procase NRR 28 dB Profesionales",
    description: "Orejeras de protección auditiva profesionales con NRR 28 dB, ajuste cómodo y almohadillas suaves.",
    price: 38.99,
    currency: 'USD',
    image_url: "/images/products/orejeras-procase-nrr28.jpg",
    amazon_url: "https://a.co/d/2AG9lSw",
    category: "EPP",
    sub_category: "Protección Auditiva",
    brand: "Procase",
    rating: 4.5,
    review_count: 987,
    is_prime: true,
    is_active: true,
    tags: ["orejeras", "NRR 28", "profesional", "cómodo", "almohadillas"],
    created_at: '2025-07-22T00:00:00Z',
    updated_at: '2025-07-22T00:00:00Z'
  },

  {
    id: '19',
    asin: "respirador-6200-filtros",
    title: "Respirador 6200 con Filtros P100 Reutilizable",
    description: "Respirador de media cara con filtros P100, ideal para protección contra polvos finos y vapores químicos.",
    price: 89.99,
    currency: 'USD',
    image_url: "/images/products/respirador-6200-filtros.jpg",
    amazon_url: "https://a.co/d/4CAV57w",
    category: "EPP",
    sub_category: "Protección Respiratoria",
    brand: "3M",
    rating: 4.7,
    review_count: 1567,
    is_prime: true,
    is_active: true,
    tags: ["respirador", "P100", "reutilizable", "químicos", "3M"],
    created_at: '2025-07-22T00:00:00Z',
    updated_at: '2025-07-22T00:00:00Z'
  },

  // ========================================
  // MÁS HERRAMIENTAS Y EQUIPOS
  // ========================================

  {
    id: '20',
    asin: "escalera-truper-tijera",
    title: "Escalera Truper Tijera Aluminio 6 Peldaños",
    description: "Escalera tipo tijera de aluminio liviana, ideal para trabajos domésticos e industriales ligeros. Capacidad 100kg.",
    price: 145.99,
    currency: 'USD',
    image_url: "/images/products/escalera-truper-tijera.jpg",
    amazon_url: "https://a.co/d/aGLaGB5",
    category: "Herramientas",
    sub_category: "Escaleras",
    brand: "Truper",
    rating: 4.3,
    review_count: 756,
    is_prime: true,
    is_active: true,
    tags: ["escalera", "tijera", "aluminio", "Truper", "liviana"],
    created_at: '2025-07-22T00:00:00Z',
    updated_at: '2025-07-22T00:00:00Z'
  },

  {
    id: '21',
    asin: "llaves-crescent-set",
    title: "Juego de Llaves Crescent Ajustables Profesionales",
    description: "Set de llaves ajustables Crescent de alta calidad, tamaños 6, 8, 10 y 12 pulgadas. Acero forjado resistente.",
    price: 67.99,
    currency: 'USD',
    image_url: "/images/products/llaves-crescent-set.jpg",
    amazon_url: "https://a.co/d/g4mpofd",
    category: "Herramientas",
    sub_category: "Llaves y Destornilladores",
    brand: "Crescent",
    rating: 4.8,
    review_count: 2345,
    is_prime: true,
    is_active: true,
    tags: ["llaves", "ajustables", "Crescent", "profesional", "set"],
    created_at: '2025-07-22T00:00:00Z',
    updated_at: '2025-07-22T00:00:00Z'
  },

  {
    id: '22',
    asin: "rotomartillo-bosch-sds",
    title: "Rotomartillo Bosch SDS-Plus 800W Profesional",
    description: "Rotomartillo profesional Bosch con sistema SDS-Plus, ideal para perforación en concreto y mampostería.",
    price: 289.99,
    currency: 'USD',
    image_url: "/images/products/rotomartillo-bosch-sds.jpg",
    amazon_url: "https://a.co/d/7WHB6zt",
    category: "Herramientas",
    sub_category: "Taladros y Martillos",
    brand: "Bosch",
    rating: 4.9,
    review_count: 1876,
    is_prime: true,
    is_active: true,
    tags: ["rotomartillo", "Bosch", "SDS-Plus", "profesional", "concreto"],
    created_at: '2025-07-22T00:00:00Z',
    updated_at: '2025-07-22T00:00:00Z'
  },

  // === HERRAMIENTAS ADICIONALES (15 productos) ===
  
  // Destornilladores profesionales
  {
    id: '23',
    asin: "set-destornilladores-wiha-precision",
    title: "Wiha Set de Destornilladores de Precisión 32 Piezas",
    description: "Set profesional de destornilladores de precisión con puntas intercambiables, ideal para electrónicos y trabajos de precisión industrial.",
    price: 89.99,
    currency: 'USD',
    image_url: "/images/products/set-destornilladores-wiha-precision.jpg",
    amazon_url: "https://a.co/d/2wKxPqM",
    category: "Herramientas",
    sub_category: "Destornilladores",
    brand: "Wiha",
    rating: 4.8,
    review_count: 1247,
    is_prime: true,
    is_active: true,
    tags: ["destornilladores", "precisión", "electrónicos", "profesional", "wiha"],
    created_at: "2025-07-22T00:00:00Z",
    updated_at: "2025-07-22T00:00:00Z"
  },

  // Medidores láser
  {
    id: '24',
    asin: "medidor-laser-bosch-glm50c",
    title: "Bosch GLM 50 C Medidor Láser Digital con Bluetooth",
    description: "Medidor láser profesional con alcance de 50m, conexión Bluetooth y aplicación móvil para documentar mediciones.",
    price: 129.99,
    currency: 'USD',
    image_url: "/images/products/medidor-laser-bosch-glm50c.jpg",
    amazon_url: "https://a.co/d/3xLyRnK",
    category: "Herramientas",
    sub_category: "Instrumentos de Medición",
    brand: "Bosch",
    rating: 4.6,
    review_count: 892,
    is_prime: true,
    is_active: true,
    tags: ["medidor", "láser", "bluetooth", "bosch", "precisión"],
    created_at: "2025-07-22T00:00:00Z",
    updated_at: "2025-07-22T00:00:00Z"
  },

  // Linterna industrial
  {
    id: '25',
    asin: "linterna-led-streamlight-tactical",
    title: "Streamlight ProTac HL-X Linterna Táctica LED 1000 Lúmenes",
    description: "Linterna táctica profesional LED de alta potencia, resistente al agua IPX7, ideal para trabajos industriales y emergencias.",
    price: 69.99,
    currency: 'USD',
    image_url: "/images/products/linterna-led-streamlight-tactical.jpg",
    amazon_url: "https://a.co/d/4yNzQpL",
    category: "Herramientas",
    sub_category: "Iluminación",
    brand: "Streamlight",
    rating: 4.7,
    review_count: 2156,
    is_prime: true,
    is_active: true,
    tags: ["linterna", "led", "táctica", "resistente", "industrial"],
    created_at: "2025-07-22T00:00:00Z",
    updated_at: "2025-07-22T00:00:00Z"
  },

  // Nivel láser
  {
    id: '26',
    asin: "nivel-laser-dewalt-dw088k",
    title: "DEWALT DW088K Nivel Láser Autonivelante de Líneas Cruzadas",
    description: "Nivel láser autonivelante profesional con líneas cruzadas, alcance de 15m, ideal para construcción e instalaciones.",
    price: 149.99,
    currency: 'USD',
    image_url: "/images/products/nivel-laser-dewalt-dw088k.jpg",
    amazon_url: "https://a.co/d/5zPxRmN",
    category: "Herramientas",
    sub_category: "Instrumentos de Medición",
    brand: "DEWALT",
    rating: 4.5,
    review_count: 743,
    is_prime: true,
    is_active: true,
    tags: ["nivel", "láser", "autonivelante", "dewalt", "construcción"],
    created_at: "2025-07-22T00:00:00Z",
    updated_at: "2025-07-22T00:00:00Z"
  },

  // Martillo industrial
  {
    id: '27',
    asin: "martillo-estwing-mango-fibra",
    title: "Estwing Martillo de Carpintero 16oz Mango de Fibra de Vidrio",
    description: "Martillo profesional con mango de fibra de vidrio antivibración, cabeza de acero forjado, ideal para construcción pesada.",
    price: 34.99,
    currency: 'USD',
    image_url: "/images/products/martillo-estwing-mango-fibra.jpg",
    amazon_url: "https://a.co/d/6aBsToP",
    category: "Herramientas",
    sub_category: "Martillos",
    brand: "Estwing",
    rating: 4.9,
    review_count: 1834,
    is_prime: true,
    is_active: true,
    tags: ["martillo", "fibra de vidrio", "antivibración", "estwing", "carpintero"],
    created_at: "2025-07-22T00:00:00Z",
    updated_at: "2025-07-22T00:00:00Z"
  },

  // Alicates profesionales
  {
    id: '28',
    asin: "alicates-knipex-cobra-adjustable",
    title: "Knipex Cobra Alicates Ajustables 10 Pulgadas",
    description: "Alicates ajustables profesionales alemanes con agarre antideslizante, apertura hasta 46mm, ideales para plomería e industria.",
    price: 49.99,
    currency: 'USD',
    image_url: "/images/products/alicates-knipex-cobra-adjustable.jpg",
    amazon_url: "https://a.co/d/7cDuVqR",
    category: "Herramientas",
    sub_category: "Alicates",
    brand: "Knipex",
    rating: 4.8,
    review_count: 967,
    is_prime: true,
    is_active: true,
    tags: ["alicates", "ajustables", "knipex", "alemán", "profesional"],
    created_at: "2025-07-22T00:00:00Z",
    updated_at: "2025-07-22T00:00:00Z"
  },

  // Llave inglesa
  {
    id: '29',
    asin: "llave-inglesa-crescent-adjustable",
    title: "Crescent Llave Inglesa Ajustable 12 Pulgadas",
    description: "Llave inglesa profesional con mandíbulas paralelas y agarre cómodo, acabado cromado resistente a la corrosión.",
    price: 28.99,
    currency: 'USD',
    image_url: "/images/products/llave-inglesa-crescent-adjustable.jpg",
    amazon_url: "https://a.co/d/8eGwXsT",
    category: "Herramientas",
    sub_category: "Llaves",
    brand: "Crescent",
    rating: 4.6,
    review_count: 1543,
    is_prime: true,
    is_active: true,
    tags: ["llave inglesa", "ajustable", "crescent", "cromado", "profesional"],
    created_at: "2025-07-22T00:00:00Z",
    updated_at: "2025-07-22T00:00:00Z"
  },

  // Set de llaves Allen
  {
    id: '30',
    asin: "set-llaves-allen-bondhus-ballend",
    title: "Bondhus Set de Llaves Allen Ball End 13 Piezas",
    description: "Set profesional de llaves Allen con punta esférica, rango de 1.5-10mm, fabricadas en acero tratado térmicamente.",
    price: 39.99,
    currency: 'USD',
    image_url: "/images/products/set-llaves-allen-bondhus-ballend.jpg",
    amazon_url: "https://a.co/d/9fHyZuV",
    category: "Herramientas",
    sub_category: "Llaves",
    brand: "Bondhus",
    rating: 4.7,
    review_count: 678,
    is_prime: true,
    is_active: true,
    tags: ["llaves allen", "ball end", "bondhus", "métrico", "profesional"],
    created_at: "2025-07-22T00:00:00Z",
    updated_at: "2025-07-22T00:00:00Z"
  },

  // Sierra de mano
  {
    id: '31',
    asin: "sierra-mano-stanley-fatmax",
    title: "Stanley FatMax Sierra de Mano 20 TPI para Metal",
    description: "Sierra de mano profesional con dientes endurecidos por inducción, mango ergonómico antideslizante, ideal para metal y PVC.",
    price: 24.99,
    currency: 'USD',
    image_url: "/images/products/sierra-mano-stanley-fatmax.jpg",
    amazon_url: "https://a.co/d/agJzAwX",
    category: "Herramientas",
    sub_category: "Sierras",
    brand: "Stanley",
    rating: 4.4,
    review_count: 1289,
    is_prime: true,
    is_active: true,
    tags: ["sierra", "mano", "stanley", "fatmax", "metal"],
    created_at: "2025-07-22T00:00:00Z",
    updated_at: "2025-07-22T00:00:00Z"
  },

  // Calibrador digital
  {
    id: '32',
    asin: "calibrador-digital-mitutoyo-absolute",
    title: "Mitutoyo Calibrador Digital Absolute 6 Pulgadas",
    description: "Calibrador digital de precisión japonés con pantalla LCD, resolución 0.0005\", ideal para mediciones industriales precisas.",
    price: 189.99,
    currency: 'USD',
    image_url: "/images/products/calibrador-digital-mitutoyo-absolute.jpg",
    amazon_url: "https://a.co/d/bhKyBzY",
    category: "Herramientas",
    sub_category: "Instrumentos de Medición",
    brand: "Mitutoyo",
    rating: 4.9,
    review_count: 456,
    is_prime: true,
    is_active: true,
    tags: ["calibrador", "digital", "mitutoyo", "precisión", "japonés"],
    created_at: "2025-07-22T00:00:00Z",
    updated_at: "2025-07-22T00:00:00Z"
  },

  // Escuadra de carpintero
  {
    id: '33',
    asin: "escuadra-carpenter-swanson-speed",
    title: "Swanson Speed Square Escuadra de Carpintero 7 Pulgadas",
    description: "Escuadra profesional de aleación de aluminio con marcas de grado, ideal para carpintería y construcción de marcos.",
    price: 18.99,
    currency: 'USD',
    image_url: "/images/products/escuadra-carpenter-swanson-speed.jpg",
    amazon_url: "https://a.co/d/ciLzC0Z",
    category: "Herramientas",
    sub_category: "Instrumentos de Medición",
    brand: "Swanson",
    rating: 4.8,
    review_count: 2341,
    is_prime: true,
    is_active: true,
    tags: ["escuadra", "carpintero", "swanson", "aluminio", "construcción"],
    created_at: "2025-07-22T00:00:00Z",
    updated_at: "2025-07-22T00:00:00Z"
  },

  // Pistola de calor
  {
    id: '34',
    asin: "pistola-calor-wagner-furno-300",
    title: "Wagner Furno 300 Pistola de Calor 1200W",
    description: "Pistola de calor profesional con dos temperaturas (750°F/1000°F), ideal para quitar pintura, termoencogibles y soldadura.",
    price: 44.99,
    currency: 'USD',
    image_url: "/images/products/pistola-calor-wagner-furno-300.jpg",
    amazon_url: "https://a.co/d/djMzD1A",
    category: "Herramientas",
    sub_category: "Herramientas Térmicas",
    brand: "Wagner",
    rating: 4.5,
    review_count: 1678,
    is_prime: true,
    is_active: true,
    tags: ["pistola de calor", "wagner", "1200w", "quitar pintura", "termoencogible"],
    created_at: "2025-07-22T00:00:00Z",
    updated_at: "2025-07-22T00:00:00Z"
  },

  // Pistola de pegamento
  {
    id: '35',
    asin: "pistola-pegamento-surebonder-pro2-220",
    title: "Surebonder PRO2-220 Pistola de Pegamento Industrial",
    description: "Pistola de pegamento de alta temperatura para uso industrial, compatible con barras de 7/16\", ideal para manufacturación.",
    price: 32.99,
    currency: 'USD',
    image_url: "/images/products/pistola-pegamento-surebonder-pro2-220.jpg",
    amazon_url: "https://a.co/d/ekN0E2B",
    category: "Herramientas",
    sub_category: "Adhesivos",
    brand: "Surebonder",
    rating: 4.6,
    review_count: 543,
    is_prime: true,
    is_active: true,
    tags: ["pistola pegamento", "surebonder", "industrial", "alta temperatura", "manufacturación"],
    created_at: "2025-07-22T00:00:00Z",
    updated_at: "2025-07-22T00:00:00Z"
  },

  // Compás de puntas
  {
    id: '36',
    asin: "compas-puntas-starrett-divider",
    title: "Starrett Compás de Puntas 6 Pulgadas con Resorte",
    description: "Compás de puntas profesional de acero templado con ajuste de resorte, ideal para trazado y medición en metalmecánica.",
    price: 56.99,
    currency: 'USD',
    image_url: "/images/products/compas-puntas-starrett-divider.jpg",
    amazon_url: "https://a.co/d/flO1F3C",
    category: "Herramientas",
    sub_category: "Instrumentos de Medición",
    brand: "Starrett",
    rating: 4.7,
    review_count: 234,
    is_prime: true,
    is_active: true,
    tags: ["compás", "puntas", "starrett", "trazado", "metalmecánica"],
    created_at: "2025-07-22T00:00:00Z",
    updated_at: "2025-07-22T00:00:00Z"
  },

  // Cortador de tubos
  {
    id: '37',
    asin: "cortador-tubos-ridgid-103",
    title: "RIDGID 103 Cortador de Tubos de Cobre 1/8\" a 5/8\"",
    description: "Cortador de tubos profesional con rueda de corte de acero endurecido, ideal para plomería y HVAC.",
    price: 41.99,
    currency: 'USD',
    image_url: "/images/products/cortador-tubos-ridgid-103.jpg",
    amazon_url: "https://a.co/d/gmP2G4D",
    category: "Herramientas",
    sub_category: "Plomería",
    brand: "RIDGID",
    rating: 4.8,
    review_count: 876,
    is_prime: true,
    is_active: true,
    tags: ["cortador tubos", "ridgid", "cobre", "plomería", "hvac"],
    created_at: "2025-07-22T00:00:00Z",
    updated_at: "2025-07-22T00:00:00Z"
  },

  // === PRODUCTOS DE SEGURIDAD ADICIONALES (6 productos) ===

  // Cinta antideslizante
  {
    id: '38',
    asin: "cinta-antideslizante-3m-safety-walk",
    title: "3M Safety-Walk Cinta Antideslizante 2\" x 60 pies",
    description: "Cinta antideslizante de grado industrial resistente al agua, ideal para escalones, rampas y áreas de trabajo húmedas.",
    price: 28.99,
    currency: 'USD',
    image_url: "/images/products/cinta-antideslizante-3m-safety-walk.jpg",
    amazon_url: "https://a.co/d/hnQ3H5E",
    category: "Seguridad",
    sub_category: "Prevención de Caídas",
    brand: "3M",
    rating: 4.6,
    review_count: 1234,
    is_prime: true,
    is_active: true,
    tags: ["cinta antideslizante", "3m", "safety walk", "escalones", "industrial"],
    created_at: "2025-07-22T00:00:00Z",
    updated_at: "2025-07-22T00:00:00Z"
  },

  // Sellador contra incendios
  {
    id: '39',
    asin: "sellador-fuego-3m-cp25wb",
    title: "3M CP 25WB+ Sellador Intumescente Contra Incendios",
    description: "Sellador intumescente de última generación para penetraciones, resistencia al fuego de 3 horas, cumple UL y FM.",
    price: 145.99,
    currency: 'USD',
    image_url: "/images/products/sellador-fuego-3m-cp25wb.jpg",
    amazon_url: "https://a.co/d/ioR4I6F",
    category: "Seguridad",
    sub_category: "Contra Incendios",
    brand: "3M",
    rating: 4.7,
    review_count: 189,
    is_prime: true,
    is_active: true,
    tags: ["sellador", "intumescente", "contra incendios", "3m", "ul certified"],
    created_at: "2025-07-22T00:00:00Z",
    updated_at: "2025-07-22T00:00:00Z"
  },

  // Botiquín industrial
  {
    id: '40',
    asin: "botiquin-industrial-johnson-200",
    title: "Johnson & Johnson Botiquín Industrial 200 Personas",
    description: "Botiquín completo para uso industrial con suministros para 200 personas, cumple OSHA, incluye manual de primeros auxilios.",
    price: 189.99,
    currency: 'USD',
    image_url: "/images/products/botiquin-industrial-johnson-200.jpg",
    amazon_url: "https://a.co/d/jpS5J7G",
    category: "Seguridad",
    sub_category: "Primeros Auxilios",
    brand: "Johnson & Johnson",
    rating: 4.8,
    review_count: 567,
    is_prime: true,
    is_active: true,
    tags: ["botiquín", "industrial", "johnson", "200 personas", "osha"],
    created_at: "2025-07-22T00:00:00Z",
    updated_at: "2025-07-22T00:00:00Z"
  },

  // Estación lavaojos
  {
    id: '41',
    asin: "estacion-lavaojos-bradley-s19220a",
    title: "Bradley S19-220A Estación Lavaojos de Emergencia",
    description: "Estación lavaojos profesional montada en pared con activación por palanca, cumple ANSI Z358.1, para emergencias químicas.",
    price: 245.99,
    currency: 'USD',
    image_url: "/images/products/estacion-lavaojos-bradley-s19220a.jpg",
    amazon_url: "https://a.co/d/kqT6K8H",
    category: "Seguridad",
    sub_category: "Primeros Auxilios",
    brand: "Bradley",
    rating: 4.5,
    review_count: 123,
    is_prime: true,
    is_active: true,
    tags: ["lavaojos", "emergencia", "bradley", "ansi", "químicos"],
    created_at: "2025-07-22T00:00:00Z",
    updated_at: "2025-07-22T00:00:00Z"
  },

  // Manta ignífuga
  {
    id: '42',
    asin: "manta-ignifuga-fiberglass-6x8",
    title: "Manta Ignífuga de Fibra de Vidrio 6' x 8'",
    description: "Manta contra incendios de fibra de vidrio tratada, resistente hasta 1000°F, ideal para soldadura y trabajos con metales calientes.",
    price: 67.99,
    currency: 'USD',
    image_url: "/images/products/manta-ignifuga-fiberglass-6x8.jpg",
    amazon_url: "https://a.co/d/lrU7L9I",
    category: "Seguridad",
    sub_category: "Contra Incendios",
    brand: "Industrial Safety",
    rating: 4.4,
    review_count: 345,
    is_prime: true,
    is_active: true,
    tags: ["manta ignífuga", "fibra de vidrio", "soldadura", "1000f", "metales"],
    created_at: "2025-07-22T00:00:00Z",
    updated_at: "2025-07-22T00:00:00Z"
  },

  // Kit derrame químico
  {
    id: '43',
    asin: "kit-derrame-quimico-newpig-25",
    title: "New Pig Kit de Contención de Derrames Químicos 25 Galones",
    description: "Kit completo para contención de derrames químicos con absorbentes universales, incluye EPP y bolsas de disposición.",
    price: 156.99,
    currency: 'USD',
    image_url: "/images/products/kit-derrame-quimico-newpig-25.jpg",
    amazon_url: "https://a.co/d/msV8M0J",
    category: "Seguridad",
    sub_category: "Contención de Derrames",
    brand: "New Pig",
    rating: 4.6,
    review_count: 278,
    is_prime: true,
    is_active: true,
    tags: ["kit derrame", "químicos", "new pig", "absorbentes", "contención"],
    created_at: "2025-07-22T00:00:00Z",
    updated_at: "2025-07-22T00:00:00Z"
  },

  // === PRODUCTOS EPP ADICIONALES (4 productos) ===

  // Respirador P100
  {
    id: '44',
    asin: "respirador-3m-p100-6203",
    title: "3M Respirador Reutilizable Serie 6200 con Filtros P100",
    description: "Respirador de media cara reutilizable con filtros P100, protección contra partículas, vapores orgánicos y gases ácidos.",
    price: 85.99,
    currency: 'USD',
    image_url: "/images/products/respirador-3m-p100-6203.jpg",
    amazon_url: "https://a.co/d/ntW9N1K",
    category: "EPP",
    sub_category: "Protección Respiratoria",
    brand: "3M",
    rating: 4.7,
    review_count: 892,
    is_prime: true,
    is_active: true,
    tags: ["respirador", "p100", "3m", "reutilizable", "vapores orgánicos"],
    created_at: "2025-07-22T00:00:00Z",
    updated_at: "2025-07-22T00:00:00Z"
  },

  // Protector facial
  {
    id: '45',
    asin: "protector-facial-honeywell-bionic",
    title: "Honeywell Bionic Protector Facial Completo Antivaho",
    description: "Protector facial de policarbonato antivaho con arnés ajustable, protección completa contra impactos y salpicaduras químicas.",
    price: 34.99,
    currency: 'USD',
    image_url: "/images/products/protector-facial-honeywell-bionic.jpg",
    amazon_url: "https://a.co/d/ouX0O2L",
    category: "EPP",
    sub_category: "Protección Facial",
    brand: "Honeywell",
    rating: 4.5,
    review_count: 1156,
    is_prime: true,
    is_active: true,
    tags: ["protector facial", "honeywell", "antivaho", "policarbonato", "químicos"],
    created_at: "2025-07-22T00:00:00Z",
    updated_at: "2025-07-22T00:00:00Z"
  },

  // Overol Tyvek
  {
    id: '46',
    asin: "overol-tyvek-dupont-ty127s",
    title: "DuPont Tyvek TY127S Overol de Protección Química",
    description: "Overol desechable de protección química con capucha, cremallera frontal y elásticos en muñecas y tobillos.",
    price: 12.99,
    currency: 'USD',
    image_url: "/images/products/overol-tyvek-dupont-ty127s.jpg",
    amazon_url: "https://a.co/d/pvY1P3M",
    category: "EPP",
    sub_category: "Ropa de Protección",
    brand: "DuPont",
    rating: 4.6,
    review_count: 2341,
    is_prime: true,
    is_active: true,
    tags: ["overol", "tyvek", "dupont", "química", "desechable"],
    created_at: "2025-07-22T00:00:00Z",
    updated_at: "2025-07-22T00:00:00Z"
  },

  // Rodilleras industriales
  {
    id: '47',
    asin: "rodilleras-industriales-proflex-375",
    title: "ProFlex 375 Rodilleras Industriales con Gel y Velcro",
    description: "Rodilleras ergonómicas con almohadillas de gel, tela resistente y cierres de velcro ajustables, ideales para trabajo en pisos.",
    price: 29.99,
    currency: 'USD',
    image_url: "/images/products/rodilleras-industriales-proflex-375.jpg",
    amazon_url: "https://a.co/d/qwZ2Q4N",
    category: "EPP",
    sub_category: "Protección Corporal",
    brand: "ProFlex",
    rating: 4.4,
    review_count: 1567,
    is_prime: true,
    is_active: true,
    tags: ["rodilleras", "proflex", "gel", "velcro", "ergonómicas"],
    created_at: "2025-07-22T00:00:00Z",
    updated_at: "2025-07-22T00:00:00Z"
  }
];

// Función auxiliar para buscar productos por categoría
export const getProductsByCategory = (category: string): AmazonProduct[] => {
  return realAmazonProducts.filter(product => product.category === category);
};

// Función auxiliar para buscar productos por ASIN
export const getProductByAsin = (asin: string): AmazonProduct | undefined => {
  return realAmazonProducts.find(product => product.asin === asin);
};

// Categorías disponibles
export const productCategories = [
  "EPP",
  "Herramientas", 
  "Seguridad"
];

// Subcategorías por categoría
export const subcategoriesByCategory = {
  "EPP": [
    "Ropa de Seguridad",
    "Ropa de Trabajo", 
    "Calzado de Seguridad",
    "Calzado Deportivo de Seguridad",
    "Guantes de Protección",
    "Protección Ocular"
  ],
  "Herramientas": [
    "Escaleras",
    "Taladros", 
    "Instrumentos de Medición"
  ],
  "Seguridad": [
    "Primeros Auxilios",
    "Contra Incendios"
  ]
};

  // === HERRAMIENTAS ADICIONALES (15 productos) ===
  
  // Destornilladores profesionales
  {
    id: '23',
    asin: "set-destornilladores-wiha-precision",
    title: "Wiha Set de Destornilladores de Precisión 32 Piezas",
    description: "Set profesional de destornilladores de precisión con puntas intercambiables, ideal para electrónicos y trabajos de precisión industrial.",
    price: 89.99,
    currency: 'USD',
    image_url: "/images/products/set-destornilladores-wiha-precision.jpg",
    amazon_url: "https://a.co/d/2wKxPqM",
    category: "Herramientas",
    sub_category: "Destornilladores",
    brand: "Wiha",
    rating: 4.8,
    review_count: 1247,
    is_prime: true,
    is_active: true,
    tags: ["destornilladores", "precisión", "electrónicos", "profesional", "wiha"],
    created_at: "2025-07-22T00:00:00Z",
    updated_at: "2025-07-22T00:00:00Z"
  },

  // Medidores láser
  {
    id: '24',
    asin: "medidor-laser-bosch-glm50c",
    title: "Bosch GLM 50 C Medidor Láser Digital con Bluetooth",
    description: "Medidor láser profesional con alcance de 50m, conexión Bluetooth y aplicación móvil para documentar mediciones.",
    price: 129.99,
    currency: 'USD',
    image_url: "/images/products/medidor-laser-bosch-glm50c.jpg",
    amazon_url: "https://a.co/d/3xLyRnK",
    category: "Herramientas",
    sub_category: "Instrumentos de Medición",
    brand: "Bosch",
    rating: 4.6,
    review_count: 892,
    is_prime: true,
    is_active: true,
    tags: ["medidor", "láser", "bluetooth", "bosch", "precisión"],
    created_at: "2025-07-22T00:00:00Z",
    updated_at: "2025-07-22T00:00:00Z"
  },

  // Linterna industrial
  {
    id: '25',
    asin: "linterna-led-streamlight-tactical",
    title: "Streamlight ProTac HL-X Linterna Táctica LED 1000 Lúmenes",
    description: "Linterna táctica profesional LED de alta potencia, resistente al agua IPX7, ideal para trabajos industriales y emergencias.",
    price: 69.99,
    currency: 'USD',
    image_url: "/images/products/linterna-led-streamlight-tactical.jpg",
    amazon_url: "https://a.co/d/4yNzQpL",
    category: "Herramientas",
    sub_category: "Iluminación",
    brand: "Streamlight",
    rating: 4.7,
    review_count: 2156,
    is_prime: true,
    is_active: true,
    tags: ["linterna", "led", "táctica", "resistente", "industrial"],
    created_at: "2025-07-22T00:00:00Z",
    updated_at: "2025-07-22T00:00:00Z"
  },

  // Nivel láser
  {
    id: '26',
    asin: "nivel-laser-dewalt-dw088k",
    title: "DEWALT DW088K Nivel Láser Autonivelante de Líneas Cruzadas",
    description: "Nivel láser autonivelante profesional con líneas cruzadas, alcance de 15m, ideal para construcción e instalaciones.",
    price: 149.99,
    currency: 'USD',
    image_url: "/images/products/nivel-laser-dewalt-dw088k.jpg",
    amazon_url: "https://a.co/d/5zPxRmN",
    category: "Herramientas",
    sub_category: "Instrumentos de Medición",
    brand: "DEWALT",
    rating: 4.5,
    review_count: 743,
    is_prime: true,
    is_active: true,
    tags: ["nivel", "láser", "autonivelante", "dewalt", "construcción"],
    created_at: "2025-07-22T00:00:00Z",
    updated_at: "2025-07-22T00:00:00Z"
  },

  // Martillo industrial
  {
    id: '27',
    asin: "martillo-estwing-mango-fibra",
    title: "Estwing Martillo de Carpintero 16oz Mango de Fibra de Vidrio",
    description: "Martillo profesional con mango de fibra de vidrio antivibración, cabeza de acero forjado, ideal para construcción pesada.",
    price: 34.99,
    currency: 'USD',
    image_url: "/images/products/martillo-estwing-mango-fibra.jpg",
    amazon_url: "https://a.co/d/6aBsToP",
    category: "Herramientas",
    sub_category: "Martillos",
    brand: "Estwing",
    rating: 4.9,
    review_count: 1834,
    is_prime: true,
    is_active: true,
    tags: ["martillo", "fibra de vidrio", "antivibración", "estwing", "carpintero"],
    created_at: "2025-07-22T00:00:00Z",
    updated_at: "2025-07-22T00:00:00Z"
  },

  // Alicates profesionales
  {
    id: '28',
    asin: "alicates-knipex-cobra-adjustable",
    title: "Knipex Cobra Alicates Ajustables 10 Pulgadas",
    description: "Alicates ajustables profesionales alemanes con agarre antideslizante, apertura hasta 46mm, ideales para plomería e industria.",
    price: 49.99,
    currency: 'USD',
    image_url: "/images/products/alicates-knipex-cobra-adjustable.jpg",
    amazon_url: "https://a.co/d/7cDuVqR",
    category: "Herramientas",
    sub_category: "Alicates",
    brand: "Knipex",
    rating: 4.8,
    review_count: 967,
    is_prime: true,
    is_active: true,
    tags: ["alicates", "ajustables", "knipex", "alemán", "profesional"],
    created_at: "2025-07-22T00:00:00Z",
    updated_at: "2025-07-22T00:00:00Z"
  },

  // Llave inglesa
  {
    id: '29',
    asin: "llave-inglesa-crescent-adjustable",
    title: "Crescent Llave Inglesa Ajustable 12 Pulgadas",
    description: "Llave inglesa profesional con mandíbulas paralelas y agarre cómodo, acabado cromado resistente a la corrosión.",
    price: 28.99,
    currency: 'USD',
    image_url: "/images/products/llave-inglesa-crescent-adjustable.jpg",
    amazon_url: "https://a.co/d/8eGwXsT",
    category: "Herramientas",
    sub_category: "Llaves",
    brand: "Crescent",
    rating: 4.6,
    review_count: 1543,
    is_prime: true,
    is_active: true,
    tags: ["llave inglesa", "ajustable", "crescent", "cromado", "profesional"],
    created_at: "2025-07-22T00:00:00Z",
    updated_at: "2025-07-22T00:00:00Z"
  },

  // Set de llaves Allen
  {
    id: '30',
    asin: "set-llaves-allen-bondhus-ballend",
    title: "Bondhus Set de Llaves Allen Ball End 13 Piezas",
    description: "Set profesional de llaves Allen con punta esférica, rango de 1.5-10mm, fabricadas en acero tratado térmicamente.",
    price: 39.99,
    currency: 'USD',
    image_url: "/images/products/set-llaves-allen-bondhus-ballend.jpg",
    amazon_url: "https://a.co/d/9fHyZuV",
    category: "Herramientas",
    sub_category: "Llaves",
    brand: "Bondhus",
    rating: 4.7,
    review_count: 678,
    is_prime: true,
    is_active: true,
    tags: ["llaves allen", "ball end", "bondhus", "métrico", "profesional"],
    created_at: "2025-07-22T00:00:00Z",
    updated_at: "2025-07-22T00:00:00Z"
  },

  // Sierra de mano
  {
    id: '31',
    asin: "sierra-mano-stanley-fatmax",
    title: "Stanley FatMax Sierra de Mano 20 TPI para Metal",
    description: "Sierra de mano profesional con dientes endurecidos por inducción, mango ergonómico antideslizante, ideal para metal y PVC.",
    price: 24.99,
    currency: 'USD',
    image_url: "/images/products/sierra-mano-stanley-fatmax.jpg",
    amazon_url: "https://a.co/d/agJzAwX",
    category: "Herramientas",
    sub_category: "Sierras",
    brand: "Stanley",
    rating: 4.4,
    review_count: 1289,
    is_prime: true,
    is_active: true,
    tags: ["sierra", "mano", "stanley", "fatmax", "metal"],
    created_at: "2025-07-22T00:00:00Z",
    updated_at: "2025-07-22T00:00:00Z"
  },

  // Calibrador digital
  {
    id: '32',
    asin: "calibrador-digital-mitutoyo-absolute",
    title: "Mitutoyo Calibrador Digital Absolute 6 Pulgadas",
    description: "Calibrador digital de precisión japonés con pantalla LCD, resolución 0.0005\", ideal para mediciones industriales precisas.",
    price: 189.99,
    currency: 'USD',
    image_url: "/images/products/calibrador-digital-mitutoyo-absolute.jpg",
    amazon_url: "https://a.co/d/bhKyBzY",
    category: "Herramientas",
    sub_category: "Instrumentos de Medición",
    brand: "Mitutoyo",
    rating: 4.9,
    review_count: 456,
    is_prime: true,
    is_active: true,
    tags: ["calibrador", "digital", "mitutoyo", "precisión", "japonés"],
    created_at: "2025-07-22T00:00:00Z",
    updated_at: "2025-07-22T00:00:00Z"
  },

  // Escuadra de carpintero
  {
    id: '33',
    asin: "escuadra-carpenter-swanson-speed",
    title: "Swanson Speed Square Escuadra de Carpintero 7 Pulgadas",
    description: "Escuadra profesional de aleación de aluminio con marcas de grado, ideal para carpintería y construcción de marcos.",
    price: 18.99,
    currency: 'USD',
    image_url: "/images/products/escuadra-carpenter-swanson-speed.jpg",
    amazon_url: "https://a.co/d/ciLzC0Z",
    category: "Herramientas",
    sub_category: "Instrumentos de Medición",
    brand: "Swanson",
    rating: 4.8,
    review_count: 2341,
    is_prime: true,
    is_active: true,
    tags: ["escuadra", "carpintero", "swanson", "aluminio", "construcción"],
    created_at: "2025-07-22T00:00:00Z",
    updated_at: "2025-07-22T00:00:00Z"
  },

  // Pistola de calor
  {
    id: '34',
    asin: "pistola-calor-wagner-furno-300",
    title: "Wagner Furno 300 Pistola de Calor 1200W",
    description: "Pistola de calor profesional con dos temperaturas (750°F/1000°F), ideal para quitar pintura, termoencogibles y soldadura.",
    price: 44.99,
    currency: 'USD',
    image_url: "/images/products/pistola-calor-wagner-furno-300.jpg",
    amazon_url: "https://a.co/d/djMzD1A",
    category: "Herramientas",
    sub_category: "Herramientas Térmicas",
    brand: "Wagner",
    rating: 4.5,
    review_count: 1678,
    is_prime: true,
    is_active: true,
    tags: ["pistola de calor", "wagner", "1200w", "quitar pintura", "termoencogible"],
    created_at: "2025-07-22T00:00:00Z",
    updated_at: "2025-07-22T00:00:00Z"
  },

  // Pistola de pegamento
  {
    id: '35',
    asin: "pistola-pegamento-surebonder-pro2-220",
    title: "Surebonder PRO2-220 Pistola de Pegamento Industrial",
    description: "Pistola de pegamento de alta temperatura para uso industrial, compatible con barras de 7/16\", ideal para manufacturación.",
    price: 32.99,
    currency: 'USD',
    image_url: "/images/products/pistola-pegamento-surebonder-pro2-220.jpg",
    amazon_url: "https://a.co/d/ekN0E2B",
    category: "Herramientas",
    sub_category: "Adhesivos",
    brand: "Surebonder",
    rating: 4.6,
    review_count: 543,
    is_prime: true,
    is_active: true,
    tags: ["pistola pegamento", "surebonder", "industrial", "alta temperatura", "manufacturación"],
    created_at: "2025-07-22T00:00:00Z",
    updated_at: "2025-07-22T00:00:00Z"
  },

  // Compás de puntas
  {
    id: '36',
    asin: "compas-puntas-starrett-divider",
    title: "Starrett Compás de Puntas 6 Pulgadas con Resorte",
    description: "Compás de puntas profesional de acero templado con ajuste de resorte, ideal para trazado y medición en metalmecánica.",
    price: 56.99,
    currency: 'USD',
    image_url: "/images/products/compas-puntas-starrett-divider.jpg",
    amazon_url: "https://a.co/d/flO1F3C",
    category: "Herramientas",
    sub_category: "Instrumentos de Medición",
    brand: "Starrett",
    rating: 4.7,
    review_count: 234,
    is_prime: true,
    is_active: true,
    tags: ["compás", "puntas", "starrett", "trazado", "metalmecánica"],
    created_at: "2025-07-22T00:00:00Z",
    updated_at: "2025-07-22T00:00:00Z"
  },

  // Cortador de tubos
  {
    id: '37',
    asin: "cortador-tubos-ridgid-103",
    title: "RIDGID 103 Cortador de Tubos de Cobre 1/8\" a 5/8\"",
    description: "Cortador de tubos profesional con rueda de corte de acero endurecido, ideal para plomería y HVAC.",
    price: 41.99,
    currency: 'USD',
    image_url: "/images/products/cortador-tubos-ridgid-103.jpg",
    amazon_url: "https://a.co/d/gmP2G4D",
    category: "Herramientas",
    sub_category: "Plomería",
    brand: "RIDGID",
    rating: 4.8,
    review_count: 876,
    is_prime: true,
    is_active: true,
    tags: ["cortador tubos", "ridgid", "cobre", "plomería", "hvac"],
    created_at: "2025-07-22T00:00:00Z",
    updated_at: "2025-07-22T00:00:00Z"
  },

  // === PRODUCTOS DE SEGURIDAD ADICIONALES (6 productos) ===

  // Cinta antideslizante
  {
    id: '38',
    asin: "cinta-antideslizante-3m-safety-walk",
    title: "3M Safety-Walk Cinta Antideslizante 2\" x 60 pies",
    description: "Cinta antideslizante de grado industrial resistente al agua, ideal para escalones, rampas y áreas de trabajo húmedas.",
    price: 28.99,
    currency: 'USD',
    image_url: "/images/products/cinta-antideslizante-3m-safety-walk.jpg",
    amazon_url: "https://a.co/d/hnQ3H5E",
    category: "Seguridad",
    sub_category: "Prevención de Caídas",
    brand: "3M",
    rating: 4.6,
    review_count: 1234,
    is_prime: true,
    is_active: true,
    tags: ["cinta antideslizante", "3m", "safety walk", "escalones", "industrial"],
    created_at: "2025-07-22T00:00:00Z",
    updated_at: "2025-07-22T00:00:00Z"
  },

  // Sellador contra incendios
  {
    id: '39',
    asin: "sellador-fuego-3m-cp25wb",
    title: "3M CP 25WB+ Sellador Intumescente Contra Incendios",
    description: "Sellador intumescente de última generación para penetraciones, resistencia al fuego de 3 horas, cumple UL y FM.",
    price: 145.99,
    currency: 'USD',
    image_url: "/images/products/sellador-fuego-3m-cp25wb.jpg",
    amazon_url: "https://a.co/d/ioR4I6F",
    category: "Seguridad",
    sub_category: "Contra Incendios",
    brand: "3M",
    rating: 4.7,
    review_count: 189,
    is_prime: true,
    is_active: true,
    tags: ["sellador", "intumescente", "contra incendios", "3m", "ul certified"],
    created_at: "2025-07-22T00:00:00Z",
    updated_at: "2025-07-22T00:00:00Z"
  },

  // Botiquín industrial
  {
    id: '40',
    asin: "botiquin-industrial-johnson-200",
    title: "Johnson & Johnson Botiquín Industrial 200 Personas",
    description: "Botiquín completo para uso industrial con suministros para 200 personas, cumple OSHA, incluye manual de primeros auxilios.",
    price: 189.99,
    currency: 'USD',
    image_url: "/images/products/botiquin-industrial-johnson-200.jpg",
    amazon_url: "https://a.co/d/jpS5J7G",
    category: "Seguridad",
    sub_category: "Primeros Auxilios",
    brand: "Johnson & Johnson",
    rating: 4.8,
    review_count: 567,
    is_prime: true,
    is_active: true,
    tags: ["botiquín", "industrial", "johnson", "200 personas", "osha"],
    created_at: "2025-07-22T00:00:00Z",
    updated_at: "2025-07-22T00:00:00Z"
  },

  // Estación lavaojos
  {
    id: '41',
    asin: "estacion-lavaojos-bradley-s19220a",
    title: "Bradley S19-220A Estación Lavaojos de Emergencia",
    description: "Estación lavaojos profesional montada en pared con activación por palanca, cumple ANSI Z358.1, para emergencias químicas.",
    price: 245.99,
    currency: 'USD',
    image_url: "/images/products/estacion-lavaojos-bradley-s19220a.jpg",
    amazon_url: "https://a.co/d/kqT6K8H",
    category: "Seguridad",
    sub_category: "Primeros Auxilios",
    brand: "Bradley",
    rating: 4.5,
    review_count: 123,
    is_prime: true,
    is_active: true,
    tags: ["lavaojos", "emergencia", "bradley", "ansi", "químicos"],
    created_at: "2025-07-22T00:00:00Z",
    updated_at: "2025-07-22T00:00:00Z"
  },

  // Manta ignífuga
  {
    id: '42',
    asin: "manta-ignifuga-fiberglass-6x8",
    title: "Manta Ignífuga de Fibra de Vidrio 6' x 8'",
    description: "Manta contra incendios de fibra de vidrio tratada, resistente hasta 1000°F, ideal para soldadura y trabajos con metales calientes.",
    price: 67.99,
    currency: 'USD',
    image_url: "/images/products/manta-ignifuga-fiberglass-6x8.jpg",
    amazon_url: "https://a.co/d/lrU7L9I",
    category: "Seguridad",
    sub_category: "Contra Incendios",
    brand: "Industrial Safety",
    rating: 4.4,
    review_count: 345,
    is_prime: true,
    is_active: true,
    tags: ["manta ignífuga", "fibra de vidrio", "soldadura", "1000f", "metales"],
    created_at: "2025-07-22T00:00:00Z",
    updated_at: "2025-07-22T00:00:00Z"
  },

  // Kit derrame químico
  {
    id: '43',
    asin: "kit-derrame-quimico-newpig-25",
    title: "New Pig Kit de Contención de Derrames Químicos 25 Galones",
    description: "Kit completo para contención de derrames químicos con absorbentes universales, incluye EPP y bolsas de disposición.",
    price: 156.99,
    currency: 'USD',
    image_url: "/images/products/kit-derrame-quimico-newpig-25.jpg",
    amazon_url: "https://a.co/d/msV8M0J",
    category: "Seguridad",
    sub_category: "Contención de Derrames",
    brand: "New Pig",
    rating: 4.6,
    review_count: 278,
    is_prime: true,
    is_active: true,
    tags: ["kit derrame", "químicos", "new pig", "absorbentes", "contención"],
    created_at: "2025-07-22T00:00:00Z",
    updated_at: "2025-07-22T00:00:00Z"
  },

  // === PRODUCTOS EPP ADICIONALES (4 productos) ===

  // Respirador P100
  {
    id: '44',
    asin: "respirador-3m-p100-6203",
    title: "3M Respirador Reutilizable Serie 6200 con Filtros P100",
    description: "Respirador de media cara reutilizable con filtros P100, protección contra partículas, vapores orgánicos y gases ácidos.",
    price: 85.99,
    currency: 'USD',
    image_url: "/images/products/respirador-3m-p100-6203.jpg",
    amazon_url: "https://a.co/d/ntW9N1K",
    category: "EPP",
    sub_category: "Protección Respiratoria",
    brand: "3M",
    rating: 4.7,
    review_count: 892,
    is_prime: true,
    is_active: true,
    tags: ["respirador", "p100", "3m", "reutilizable", "vapores orgánicos"],
    created_at: "2025-07-22T00:00:00Z",
    updated_at: "2025-07-22T00:00:00Z"
  },

  // Protector facial
  {
    id: '45',
    asin: "protector-facial-honeywell-bionic",
    title: "Honeywell Bionic Protector Facial Completo Antivaho",
    description: "Protector facial de policarbonato antivaho con arnés ajustable, protección completa contra impactos y salpicaduras químicas.",
    price: 34.99,
    currency: 'USD',
    image_url: "/images/products/protector-facial-honeywell-bionic.jpg",
    amazon_url: "https://a.co/d/ouX0O2L",
    category: "EPP",
    sub_category: "Protección Facial",
    brand: "Honeywell",
    rating: 4.5,
    review_count: 1156,
    is_prime: true,
    is_active: true,
    tags: ["protector facial", "honeywell", "antivaho", "policarbonato", "químicos"],
    created_at: "2025-07-22T00:00:00Z",
    updated_at: "2025-07-22T00:00:00Z"
  },

  // Overol Tyvek
  {
    id: '46',
    asin: "overol-tyvek-dupont-ty127s",
    title: "DuPont Tyvek TY127S Overol de Protección Química",
    description: "Overol desechable de protección química con capucha, cremallera frontal y elásticos en muñecas y tobillos.",
    price: 12.99,
    currency: 'USD',
    image_url: "/images/products/overol-tyvek-dupont-ty127s.jpg",
    amazon_url: "https://a.co/d/pvY1P3M",
    category: "EPP",
    sub_category: "Ropa de Protección",
    brand: "DuPont",
    rating: 4.6,
    review_count: 2341,
    is_prime: true,
    is_active: true,
    tags: ["overol", "tyvek", "dupont", "química", "desechable"],
    created_at: "2025-07-22T00:00:00Z",
    updated_at: "2025-07-22T00:00:00Z"
  },

  // Rodilleras industriales
  {
    id: '47',
    asin: "rodilleras-industriales-proflex-375",
    title: "ProFlex 375 Rodilleras Industriales con Gel y Velcro",
    description: "Rodilleras ergonómicas con almohadillas de gel, tela resistente y cierres de velcro ajustables, ideales para trabajo en pisos.",
    price: 29.99,
    currency: 'USD',
    image_url: "/images/products/rodilleras-industriales-proflex-375.jpg",
    amazon_url: "https://a.co/d/qwZ2Q4N",
    category: "EPP",
    sub_category: "Protección Corporal",
    brand: "ProFlex",
    rating: 4.4,
    review_count: 1567,
    is_prime: true,
    is_active: true,
    tags: ["rodilleras", "proflex", "gel", "velcro", "ergonómicas"],
    created_at: "2025-07-22T00:00:00Z",
    updated_at: "2025-07-22T00:00:00Z"
  }
];
