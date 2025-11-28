'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, ShoppingBag, Star, ExternalLink, Filter, Grid3X3, List, ChevronDown } from 'lucide-react';
// import { trackEvent, trackInteraction, generateTrackingId } from '@/lib/meta-pixel';
import Link from 'next/link';
import Image from 'next/image';

interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  subcategory: string;
  brand: string;
  price: string;
  rating: number;
  reviews: number;
  image: string;
  amazonUrl: string;
  mercadoLibreUrl?: string;
  features: string[];
  tags: string[];
  articleSource: string;
}

// Catálogo de productos extraídos ÚNICAMENTE de artículos del blog con enlaces reales
const productCatalog: Product[] = [
  // Kits de Herramientas (del artículo top-7-kits-herramientas-2025)
  {
    id: "dewalt-dwmt81535",
    name: "DEWALT DWMT81535 Kit de Mecánica",
    description: "Kit profesional de 247 piezas con matracas de 72 dientes y acabado de cromo pulido.",
    category: "Herramientas",
    subcategory: "Kits de Herramientas",
    brand: "DEWALT",
    price: "Consultar precio",
    rating: 4.8,
    reviews: 3200,
    image: "/images/products/herramientas 82 en 1/kit-herramientas-82.webp",
    amazonUrl: "https://mercadolibre.com/sec/2naVqQs",
    features: [
      "247 piezas de grado profesional",
      "Matracas de 72 dientes (5° arco)",
      "Material: Acero CR-V pulido",
      "Estuche plástico rígido moldeado",
      "Dados grabados con láser"
    ],
    tags: ["profesional", "mecánica", "alta calidad", "duradero"],
    articleSource: "Top 7 Kits de Herramientas 2025"
  },
  {
    id: "pretul-set-83",
    name: "Pretul SET-83 Kit de Herramientas",
    description: "Kit económico de 83 piezas con herramientas esenciales para mecánica básica.",
    category: "Herramientas",
    subcategory: "Kits de Herramientas",
    brand: "Pretul",
    price: "Consultar precio",
    rating: 4.2,
    reviews: 850,
    image: "/images/products/llaves pretul/llaves-pretul.webp",
    amazonUrl: "https://mercadolibre.com/sec/1GQ24Dg",
    features: [
      "83 piezas cuidadosamente seleccionadas",
      "Material: Acero al carbono",
      "Sistemas métrico e imperial",
      "Estuche de lona resistente",
      "Portátil y fácil de transportar"
    ],
    tags: ["económico", "básico", "portable", "confiable"],
    articleSource: "Top 7 Kits de Herramientas 2025"
  },
  {
    id: "cartman-238",
    name: "CARTMAN 238 Piezas Kit de Herramientas",
    description: "Kit versátil de 238 piezas ideal para bricolaje doméstico y proyectos variados.",
    category: "Herramientas",
    subcategory: "Kits de Herramientas",
    brand: "CARTMAN",
    price: "Consultar precio",
    rating: 4.5,
    reviews: 2100,
    image: "/images/products/juego_herramientas_218piezas/herramientas-218.webp",
    amazonUrl: "https://mercadolibre.com/sec/2Du7866",
    features: [
      "238 piezas para múltiples aplicaciones",
      "Puntas magnéticas incluidas",
      "Material: Acero aleado",
      "Estuche plástico rígido moldeado",
      "Perfecto para bricolaje"
    ],
    tags: ["versátil", "bricolaje", "magnético", "completo"],
    articleSource: "Top 7 Kits de Herramientas 2025"
  },
  {
    id: "kirogily-150",
    name: "KIROGILY 150 en 1 Kit de Precisión",
    description: "Kit especializado en electrónicos con 150 piezas de precisión para dispositivos modernos.",
    category: "Herramientas",
    subcategory: "Herramientas de Precisión",
    brand: "KIROGILY",
    price: "Consultar precio",
    rating: 5.0,
    reviews: 1800,
    image: "/images/products/destornilladores/destornilladores-precision.webp",
    amazonUrl: "https://mercadolibre.com/sec/1tT2HL7",
    features: [
      "150 piezas especializadas en electrónicos",
      "Acero CR-V con dureza HRC55",
      "Puntas para iPhone, MacBook y consolas",
      "Diseño plegable compacto",
      "Puntas magnéticas de alta calidad"
    ],
    tags: ["electrónicos", "precisión", "compacto", "magnético"],
    articleSource: "Top 7 Kits de Herramientas 2025"
  },
  {
    id: "kit-nanwei",
    name: "Kit Nanwei con Taladro Inalámbrico",
    description: "Kit híbrido que incluye taladro inalámbrico y herramientas manuales esenciales para el hogar.",
    category: "Herramientas",
    subcategory: "Kits Eléctricos",
    brand: "Nanwei",
    price: "Consultar precio",
    rating: 4.5,
    reviews: 500,
    image: "/images/products/herramientas 82 en 1/kit-herramientas-82.webp",
    amazonUrl: "https://mercadolibre.com/sec/1miMzDg",
    features: [
      "Taladro inalámbrico incluido",
      "Batería de litio recargable",
      "Herramientas manuales básicas",
      "Estuche compacto organizador",
      "Ideal para mudanza nueva"
    ],
    tags: ["eléctrico", "completo", "hogar", "versátil"],
    articleSource: "Top 7 Kits de Herramientas 2025"
  },
  {
    id: "juego-216-pcs",
    name: "Juego de Herramientas 216 Piezas",
    description: "Kit extenso de 216 piezas con múltiples matracas y amplia variedad de dados y puntas.",
    category: "Herramientas",
    subcategory: "Kits de Herramientas",
    brand: "Generic",
    price: "Consultar precio",
    rating: 4.0,
    reviews: 160,
    image: "/images/products/juego_herramientas_218piezas/herramientas-218.webp",
    amazonUrl: "https://mercadolibre.com/sec/2KHakLi",
    features: [
      "216 piezas completas",
      "3 matracas diferentes medidas",
      "Material acero cromo vanadio",
      "Maletín rígido organizado",
      "Excelente relación precio-cantidad"
    ],
    tags: ["extenso", "económico", "matracas", "organizado"],
    articleSource: "Top 7 Kits de Herramientas 2025"
  },
  {
    id: "kit-deppon-168",
    name: "Kit Deppon 168 Piezas + Primeros Auxilios",
    description: "Kit híbrido de 168 piezas que incluye herramientas y suministros de primeros auxilios.",
    category: "Herramientas",
    subcategory: "Kits de Emergencia",
    brand: "Deppon",
    price: "Consultar precio",
    rating: 4.0,
    reviews: 100,
    image: "/images/products/Botiquin/botiquin-industrial.webp",
    amazonUrl: "https://mercadolibre.com/sec/2tACX4Z",
    features: [
      "168 piezas incluye curitas y guantes",
      "Herramientas manuales básicas",
      "2 matracas (1/4\" y 1/2\")",
      "Estuche naranja alta visibilidad",
      "Ideal para kit de emergencia auto"
    ],
    tags: ["emergencia", "híbrido", "auto", "visible"],
    articleSource: "Top 7 Kits de Herramientas 2025"
  },

   // botiquines de emergencia

   {
    id: "jaloma-22",
    name: "Jaloma Botiquín en Caja Plástica (22 pzas)",
    description: "Botiquín básico y portátil en caja plástica de 22 piezas, ideal para oficinas pequeñas, hogar y auto. Contiene elementos esenciales de primeros auxilios en un estuche ligero con asa.",
    category: "Seguridad",
    subcategory: "Botiquines",
    brand: "Jaloma",
    price: "Consultar precio",
    rating: 4.8,
    reviews: 300,
    image: "/images/products/Botiquin/jaloma-22.webp",
    amazonUrl: "https://mercadolibre.com/sec/17VWdsg",
    features: [
      "22 piezas esenciales de primeros auxilios",
      "Estuche plástico ligero y portátil con asa",
      "Ideal para emergencias menores en oficina, hogar o auto",
      "Costo accesible"
    ],
    tags: ["botiquín", "primeros auxilios", "portátil", "económico"],
    articleSource: "Los Mejores Botiquines de Emergencia para el Trabajo en 2025"
  },
  {
    id: "gabinete-surtek-vacio",
    name: "Gabinete para Botiquín Surtek (Vacío)",
    description: "Gabinete metálico vacío para montar en pared, hecho en lámina calibre 24. Pensado como base resistente para armar un botiquín fijo personalizado según análisis de riesgo.",
    category: "Seguridad",
    subcategory: "Botiquines",
    brand: "Surtek",
    price: "Consultar precio",
    rating: 4.8,
    reviews: 220,
    image: "/images/products/Botiquin/gabinete-surtek.webp",
    amazonUrl: "https://mercadolibre.com/sec/2wiufhR",
    features: [
      "Gabinete metálico para montaje en pared",
      "Lámina calibre 24 (alta resistencia)",
      "Vendido vacío para personalizar contenido",
      "Punto de emergencia central y visible"
    ],
    tags: ["gabinete", "botiquín fijo", "metálico", "industrial"],
    articleSource: "Los Mejores Botiquines de Emergencia para el Trabajo en 2025"
  },
    {
    id: "redkap-ct10",
    name: "Overol Industrial Alta Visibilidad Reflejante Capucha (Red Kap CT10)",
    description: "Overol industrial con capucha y cintas reflectantes, resistente a suciedad y polvo. Diseñado para movilidad y trabajo en entornos con necesidad de protección contra partículas y visibilidad.",
    category: "EPP",
    subcategory: "Ropa de Seguridad",
    brand: "Red Kap",
    price: "Consultar precio",
    rating: 4.2,
    reviews: 150,
    image: "/images/products/overoles/redkap-ct10.webp",
    amazonUrl: "https://mercadolibre.com/sec/2fgbB41",
    features: [
      "Capucha integrada",
      "Cintas reflectantes para alta visibilidad",
      "Tela resistente a suciedad y polvo",
      "Diseño que facilita la movilidad",
      "Construcción duradera"
    ],
    tags: ["overol", "alta visibilidad", "capucha", "duradero"],
    articleSource: "Top 6 Overoles Más Destacados en México"
  },
  {
    id: "dickies-peto",
    name: "Overol Industrial Con Cintas Reflejantes Unisex (Dickies Peto)",
    description: "Overol unisex con cintas reflectantes y múltiples bolsillos seguros, pensado para trabajo con herramientas y almacenamiento de dispositivos como teléfono y reglas.",
    category: "EPP",
    subcategory: "Ropa de Seguridad",
    brand: "Dickies",
    price: "Consultar precio",
    rating: 4.0,
    reviews: 15,
    image: "/images/products/overoles/dickies-peto.webp",
    amazonUrl: "https://mercadolibre.com/sec/1sD7aUv",
    features: [
      "Cintas reflectantes",
      "Bolsillos seguros distribuidos en el cuerpo",
      "Bolsillo para teléfono y bolsillo para reglas",
      "Diseño cómodo y funcional",
      "Construcción resistente"
    ],
    tags: ["overol", "unisex", "reflejante", "bolsillos"],
    articleSource: "Top 6 Overoles Más Destacados en México"
  },
  {
    id: "guigua-mono-reparacion",
    name: "GUIGUA Mono de Reparación",
    description: "Mono ligero de poliéster económico, muy vendido en marketplaces; ideal para talleres pequeños que requieren protección básica contra suciedad.",
    category: "EPP",
    subcategory: "Ropa de Seguridad",
    brand: "GUIGUA",
    price: "Consultar precio",
    rating: 4.6,
    reviews: 450,
    image: "/images/products/overoles/guigua-mono-reparacion.webp",
    amazonUrl: "https://mercadolibre.com/sec/1z6GYqc",
    features: [
      "Poliéster ligero y económico",
      "Fácil mantenimiento y lavado",
      "Protección básica contra suciedad",
      "Buena relación precio-calidad"
    ],
    tags: ["mono", "económico", "poliéster", "taller"],
    articleSource: "Top 6 Overoles Más Destacados en México"
  },
  {
    id: "sanfu-multibolsillos",
    name: "Sanfu Uniforme De Trabajo De Una Sola Pieza Multibolsillos",
    description: "Overol/uniforme de una sola pieza con múltiples bolsillos, tela resistente y buen confort; pensado para usuarios que necesitan gran capacidad de almacenamiento en el puesto de trabajo.",
    category: "EPP",
    subcategory: "Ropa de Seguridad",
    brand: "Sanfu",
    price: "Consultar precio",
    rating: 4.3,
    reviews: 300,
    image: "/images/products/overoles/sanfu-multibolsillos.webp",
    amazonUrl: "https://mercadolibre.com/sec/1JKomB9",
    features: [
      "Múltiples bolsillos funcionales",
      "Tela resistente y cómoda",
      "Diseño pensado para carga de herramientas",
      "Buena capacidad de almacenamiento"
    ],
    tags: ["multibolsillos", "uniforme", "confort", "resistente"],
    articleSource: "Top 6 Overoles Más Destacados en México"
  },
  {
    id: "brisco-industrial-reflejante",
    name: "BRISCO INDUSTRIAL Overol Reflejante (Alta Visibilidad)",
    description: "Overol tipo gabardina poliéster/algodón con cintas reflectantes de 2\" para máxima visibilidad en carreteras y zonas de baja iluminación; construcción robusta para uso rudo.",
    category: "EPP",
    subcategory: "Ropa de Seguridad",
    brand: "BRISCO INDUSTRIAL",
    price: "Consultar precio",
    rating: 5.0,
    reviews: 5,
    image: "/images/products/overoles/brisco-industrial-reflejante.webp",
    amazonUrl: "https://mercadolibre.com/sec/2bXCQGF",
    features: [
      "Cintas reflectantes de 2 pulgadas",
      "Gabardina poliéster/algodón resistente",
      "Construcción robusta para uso en vías",
      "Alta visibilidad diurna y nocturna"
    ],
    tags: ["alta visibilidad", "gabardina", "reflejante", "carretera"],
    articleSource: "Top 6 Overoles Más Destacados en México"
  },
    {
    id: "berrendo-3017",
    name: "Botas Berrendo 3017 Dieléctricas Biotech",
    description: "Bota unisex de piel Napa con casquillo de policarbonato y certificación dieléctrica. Resistente a aceites, construida por inyección directa para mayor durabilidad. Recomendada para trabajos eléctricos y mantenimiento industrial.",
    category: "EPP",
    subcategory: "Calzado de Seguridad",
    brand: "Berrendo",
    price: "Consultar precio",
    rating: 4.7,
    reviews: 266,
    image: "/images/products/calzado/berrendo-3017.webp",
    amazonUrl: "https://mercadolibre.com/sec/2VaKvc7",
    features: [
      "Certificación NOM-113-STPS-2009 Tipo II y Tipo III (PP+D)",
      "Casquillo de policarbonato (no metálico)",
      "Construcción por inyección directa",
      "Piel Napa resistente y suela antiaceite",
      "Apta para trabajos con riesgo eléctrico (Dieléctrica)"
    ],
    tags: ["botas", "dieléctrica", "NOM-113", "poliéster", "resistente"],
    articleSource: "Top 7 Calzado de Seguridad Destacado en México 2025"
  },
  {
    id: "caterpillar-second-shift",
    name: "Caterpillar Second Shift Steel Toe WP",
    description: "Bota robusta con puntera de acero, construcción Goodyear Welt y caracterización waterproof (WP). Ofrece protección EH contra riesgos eléctricos y suela antideslizante para entornos de construcción y trabajo rudo.",
    category: "EPP",
    subcategory: "Calzado de Seguridad",
    brand: "Caterpillar",
    price: "Consultar precio",
    rating: 5.0,
    reviews: 3,
    image: "/images/products/calzado/caterpillar-second-shift.webp",
    amazonUrl: "https://mercadolibre.com/sec/1KmV8U4",
    features: [
      "Construcción Goodyear Welt (resuelable)",
      "Puntera de acero (ASTM F2413-18)",
      "Protección EH contra riesgo eléctrico",
      "Impermeable (WP)",
      "Suela de goma antideslizante de uso industrial"
    ],
    tags: ["goodyear", "steel-toe", "waterproof", "EH", "construcción"],
    articleSource: "Top 7 Calzado de Seguridad Destacado en México 2025"
  },
  {
    id: "timberland-pro-pit-boss",
    name: "Timberland PRO Pit Boss 6\" Steel Toe",
    description: "Bota de alto confort y protección con casquillo de acero, suela antideslizante y tecnología PRO 24/7 Comfort Suspension™ para reducir la fatiga durante largas jornadas de trabajo.",
    category: "EPP",
    subcategory: "Calzado de Seguridad",
    brand: "Timberland PRO",
    price: "Consultar precio",
    rating: 4.6,
    reviews: 10000,
    image: "/images/products/calzado/timberland-pro-pit-boss.webp",
    amazonUrl: "https://mercadolibre.com/sec/2hukoND",
    features: [
      "Casquillo de acero",
      "Tecnología PRO 24/7 Comfort Suspension™ (anti-fatiga)",
      "Forro antimicrobiano",
      "Suela de goma resistente a abrasión y aceites",
      "Construcción robusta y durable"
    ],
    tags: ["confort", "steel-toe", "anti-fatiga", "goodyear"],
    articleSource: "Top 7 Calzado de Seguridad Destacado en México 2025"
  },
  {
    id: "riverline-spyder-spyg2",
    name: "Riverline Spyder SPYG2",
    description: "Calzado ergonómico y ligero con casquillo de policarbonato y suela PU de doble densidad. Diseñado para industria ligera, logística y labores de supervisión que requieren comodidad durante largas jornadas.",
    category: "EPP",
    subcategory: "Calzado de Seguridad",
    brand: "Riverline",
    price: "Consultar precio",
    rating: 4.6,
    reviews: 235,
    image: "/images/products/calzado/riverline-spyder-spyg2.webp",
    amazonUrl: "https://mercadolibre.com/sec/1Tpzibx",
    features: [
      "Casquillo de policarbonato (ligero)",
      "Suela PU de doble densidad",
      "Protección dieléctrica y forros Airflow",
      "Cumple con NOM-113-STPS-2009",
      "Diseño moderno y deportivo"
    ],
    tags: ["ligero", "ergonómico", "policarbonato", "airflow"],
    articleSource: "Top 7 Calzado de Seguridad Destacado en México 2025"
  },
  {
    id: "timberland-pro-pit-6",
    name: "Timberland Pro Pit 6 Botas Industriales Dieléctricas",
    description: "Modelo tipo tenis industrial con casquillo no metálico (fibra de vidrio), protección dieléctrica y suela resistente al calor. Combina diseño moderno con características de seguridad para trabajadores activos.",
    category: "EPP",
    subcategory: "Calzado de Seguridad",
    brand: "Timberland PRO",
    price: "Consultar precio",
    rating: 4.9,
    reviews: 79,
    image: "/images/products/calzado/timberland-pro-pit-6.webp",
    amazonUrl: "https://mercadolibre.com/sec/2LrJRAz",
    features: [
      "Casquillo de fibra de vidrio (100% libre de metal)",
      "Protección dieléctrica (NOM-113)",
      "Suela resistente al calor hasta 250°C",
      "Plantilla ergonómica con amortiguación de gel",
      "Diseño ligero y flexible"
    ],
    tags: ["fibra-de-vidrio", "dieléctrica", "detalle-puma-tipo", "diseño"],
    articleSource: "Top 7 Calzado de Seguridad Destacado en México 2025"
  },
  {
    id: "nieion-tenis-safety",
    name: "Nieion Tenis de Seguridad Sport Industrial",
    description: "Calzado tipo tenis de seguridad, líder en ventas con miles de reseñas. Suele incluir casquillo de acero y entresuela de Kevlar antiperforación, con parte superior de malla transpirable para uso cotidiano.",
    category: "EPP",
    subcategory: "Calzado de Seguridad",
    brand: "Nieion",
    price: "Consultar precio",
    rating: 4.6,
    reviews: 23500,
    image: "/images/products/calzado/nieion-tenis-safety.webp",
    amazonUrl: "https://mercadolibre.com/sec/32PaSVu",
    features: [
      "Diseño tipo tenis casual y seguro",
      "Casquillo de acero y entresuela de Kevlar antiperforación",
      "Parte superior de malla transpirable",
      "Precio muy competitivo y alta disponibilidad",
      "Ligero y cómodo para uso diario"
    ],
    tags: ["tenis", "mas-ventas", "kevlar", "steel-toe"],
    articleSource: "Top 7 Calzado de Seguridad Destacado en México 2025"
  },
  {
    id: "ekinio-tenis-seguridad",
    name: "Ekinio Tenis de Seguridad Industrial",
    description: "Calzado tipo tenis con puntera de acero y suela antiperforación de Kevlar. Muy valorado por su relación calidad-precio, comodidad y ligereza para jornadas prolongadas.",
    category: "EPP",
    subcategory: "Calzado de Seguridad",
    brand: "Ekinio",
    price: "Consultar precio",
    rating: 4.7,
    reviews: 3800,
    image: "/images/products/calzado/ekinio-tenis-seguridad.webp",
    amazonUrl: "https://mercadolibre.com/sec/2jknq7Q",
    features: [
      "Puntera de acero (estándar europeo)",
      "Entresuela de Kevlar anti-pinchazos",
      "Parte superior de malla transpirable",
      "Muy cómodo y ligero",
      "Excelente relación calidad-precio según reseñas"
    ],
    tags: ["tenis", "kevlar", "comodidad", "valor"],
    articleSource: "Top 7 Calzado de Seguridad Destacado en México 2025"
  },
  {
    id: "pro-tex-bolsas-cargo",
    name: "Overol Industrial Bolsas Cargo Seguridad Uso Rudo (PRO-TEX)",
    description: "Overol con capucha, cremallera de dos vías y múltiples bolsillos (pecho, laterales, trasero). Diseñado para uso rudo con ajuste flexible y capacidad de carga diaria.",
    category: "EPP",
    subcategory: "Ropa de Seguridad",
    brand: "PRO-TEX",
    price: "Consultar precio",
    rating: 4.3,
    reviews: 60,
    image: "/images/products/overoles/pro-tex-bolsas-cargo.webp",
    amazonUrl: "https://mercadolibre.com/sec/1ugpCn6",
    features: [
      "Cremallera de dos vías",
      "Capucha y múltiples bolsillos (pecho, laterales, trasero)",
      "Ajuste flexible para uso diario",
      "Diseñado para uso rudo y carga de herramientas"
    ],
    tags: ["bolsas cargo", "uso rudo", "capucha", "cremallera 2 vías"],
    articleSource: "Top 6 Overoles Más Destacados en México"
  },
  {
    id: "botiquin-metalico-equipado",
    name: "Botiquín Metálico de Pared Mediano (Equipado)",
    description: "Gabinete metálico mediano ya equipado con material de curación básico. Solución lista para usar para oficinas y comercios que necesitan un botiquín de pared duradero.",
    category: "Seguridad",
    subcategory: "Botiquines",
    brand: "Generic",
    price: "Consultar precio",
    rating: 4.9,
    reviews: 69,
    image: "/images/products/Botiquin/botiquin-metalico-equipado.webp",
    amazonUrl: "https://mercadolibre.com/sec/1fCNzj2",
    features: [
      "Gabinete metálico mediano (equipado)",
      "Incluye material básico de curación",
      "Solución lista para usar para oficinas y comercios",
      "Acabado duradero y apariencia profesional"
    ],
    tags: ["equipado", "botiquín de pared", "oficina", "listo para usar"],
    articleSource: "Los Mejores Botiquines de Emergencia para el Trabajo en 2025"
  },
  {
    id: "matein-1233",
    name: "Botiquín Matein 1233 Multicompartimiento",
    description: "Maleta de tela impermeable de gran capacidad con múltiples compartimentos, divisores ajustables y correa para el hombro. Ideal para brigadistas y personal móvil que requiere organización y portabilidad.",
    category: "Seguridad",
    subcategory: "Botiquines",
    brand: "Matein",
    price: "Consultar precio",
    rating: 4.9,
    reviews: 284,
    image: "/images/products/Botiquin/matein-1233.webp",
    amazonUrl: "https://mercadolibre.com/sec/1GCdYb6",
    features: [
      "Maleta de tela impermeable con divisores ajustables",
      "Correa para el hombro y asa para transporte",
      "Múltiples compartimentos para organización",
      "Tiras reflectantes para mayor visibilidad"
    ],
    tags: ["portátil", "brigadas", "impermeable", "organizado"],
    articleSource: "Los Mejores Botiquines de Emergencia para el Trabajo en 2025"
  },
  {
    id: "blekrasi-ifak",
    name: "Blekrasi Kit Táctico de Primeros Auxilios (IFAK)",
    description: "Kit táctico tipo IFAK diseñado para control de hemorragias y trauma. Incluye torniquete de combate, vendajes de compresión y bolsa compacta compatible con MOLLE. Requiere capacitación para uso del torniquete.",
    category: "Seguridad",
    subcategory: "Botiquines",
    brand: "Blekrasi",
    price: "Consultar precio",
    rating: 4.8,
    reviews: 86,
    image: "/images/products/Botiquin/blekrasi-ifak.webp",
    amazonUrl: "https://mercadolibre.com/sec/2D1XM9U",
    features: [
      "Kit IFAK centrado en trauma y control de hemorragias",
      "Incluye torniquete de combate y vendajes de compresión",
      "Bolsa compacta con sistema MOLLE",
      "Componentes de alta calidad (requiere capacitación)"
    ],
    tags: ["IFAK", "trauma", "torniquete", "táctico"],
    articleSource: "Los Mejores Botiquines de Emergencia para el Trabajo en 2025"
  },
  {
    id: "botiquin-industrial-num5",
    name: "Botiquín Industrial Urgencias Medico Num.5",
    description: "Gabinete metálico de gran tamaño y construcción robusta pensado para entornos industriales. Ofrece gran capacidad y múltiples divisiones internas para almacenar insumos de urgencia.",
    category: "Seguridad",
    subcategory: "Botiquines",
    brand: "Generic",
    price: "Consultar precio",
    rating: 4.7,
    reviews: 43,
    image: "/images/products/Botiquin/botiquin-industrial-num5.webp",
    amazonUrl: "https://mercadolibre.com/sec/2yRYKpK",
    features: [
      "Gabinete metálico de gran tamaño (~51x41x11 cm)",
      "Multiples divisiones internas y manija para transporte",
      "Diseñado para industria pesada, talleres y fábricas",
      "Alta capacidad de almacenamiento"
    ],
    tags: ["industrial", "gran capacidad", "metálico", "urgencias"],
    articleSource: "Los Mejores Botiquines de Emergencia para el Trabajo en 2025"
  },
  

  // Chalecos añadidos desde recommendedProducts (mapeados a category "EPP")
  {
    id: "gabardina-elite",
    name: "Chaleco De Seguridad Radians SV46 OXL Clase 2 Extra",
    description: "Visibilidad máxima con 4 cintas reflectantes sobre tejido de punto poliéster, cierre frontal reforzado y bolsillo para identificación o celular.",
    category: "EPP",
    subcategory: "Ropa de Seguridad",
    brand: "Radians",
    price: "Consultar precio",
    rating: 4.5,
    reviews: 500,
    image: "/images/products/chaleco/gabardina-elite.webp",
    amazonUrl: "https://mercadolibre.com/sec/2RznHsW",
    features: [
      "4 líneas de cinta reflectante de alta ganancia",
      "Tejido de punto 100% poliéster (Tricot)",
      "Cierre central reforzado",
      "Bolsillo frontal para identificación o celular",
      "Secado rápido y fácil lavado"
    ],
    tags: ["alta visibilidad", "reflectante", "poliéster", "ligero"],
    articleSource: "Mejores Chalecos de Seguridad 2025"
  },
  {
    id: "bicolor-ansi",
    name: "Chaleco Alta Visibilidad Bicolor Clase 2 Brigadista",
    description: "Diseño Two-Tone para máximo contraste diurno, construido bajo especificaciones Clase 2 con bolsillos multifuncionales y porta radio.",
    category: "EPP",
    subcategory: "Ropa de Seguridad",
    brand: "Generic",
    price: "Consultar precio",
    rating: 4.7,
    reviews: 10,
    image: "/images/products/chaleco/bicolor-ansi.webp",
    amazonUrl: "https://mercadolibre.com/sec/26Kem4U",
    features: [
      "Cumple especificaciones Clase 2",
      "Malla de poliéster respirable Heavy Duty",
      "Bolsa porta radio y bolsas cargo inferiores",
      "Soporte para micrófono en hombros",
      "Diseño bicolor para contraste diurno"
    ],
    tags: ["certificado", "clase 2", "bicolor", "porta radio"],
    articleSource: "Mejores Chalecos de Seguridad 2025"
  },
  {
    id: "malla-economica",
    name: "Chaleco de Malla Económico con Reflejantes",
    description: "Opción ligera y muy ventilada para cuadrillas temporales y eventos. Malla abierta de poliéster con cintas reflectantes básicas y ajuste unitalla.",
    category: "EPP",
    subcategory: "Ropa de Seguridad",
    brand: "Generic",
    price: "Consultar precio",
    rating: 4.7,
    reviews: 720,
    image: "/images/products/chaleco/malla-economica.webp",
    amazonUrl: "https://mercadolibre.com/sec/23uTvh2",
    features: [
      "Malla abierta de poliéster ultra ventilada",
      "Elásticos laterales o velcro frontal para ajuste",
      "Peso ultra ligero (<100g)",
      "Ideal para compras masivas por bajo costo",
      "Variedad de colores para distinguir equipos"
    ],
    tags: ["económico", "ventilado", "unitalla", "eventos"],
    articleSource: "Mejores Chalecos de Seguridad 2025"
  },
  {
    id: "professional-max",
    name: "Chaleco Brigadista Reflejante Gabardina (Profesional)",
    description: "Gabardina resistente con distribución de peso ergonómica y bolsillos de brigadista. Ventilación ajustable y compatibilidad con arnés, diseñado para jornadas extensas.",
    category: "EPP",
    subcategory: "Ropa de Seguridad",
    brand: "Generic",
    price: "Consultar precio",
    rating: 4.6,
    reviews: 900,
    image: "/images/products/chaleco/professional-max.webp",
    amazonUrl: "https://mercadolibre.com/sec/26CEJyr",
    features: [
      "ANSI/ISEA 107 Tipo R Clase 2",
      "Gabardina poliéster-algodón 65/35",
      "Paneles acolchados y sistema de distribución de peso",
      "Bolsillos tipo cargo + porta radio",
      "Ventilación lateral ajustable"
    ],
    tags: ["profesional", "gabardina", "brigadista", "ergonómico"],
    articleSource: "Mejores Chalecos de Seguridad 2025"
  },
  {
    id: "microprismas-naranja",
    name: "Chaleco Seguridad Industrial Brigadista Reflectante",
    description: "Chaleco brigadista enfocado en funcionalidad diaria con cinta de alto rendimiento, refuerzos de cordura en hombros y recubrimiento repelente a líquidos.",
    category: "EPP",
    subcategory: "Ropa de Seguridad",
    brand: "Generic",
    price: "Consultar precio",
    rating: 4.7,
    reviews: 350,
    image: "/images/products/chaleco/microprismas-naranja.webp",
    amazonUrl: "https://mercadolibre.com/sec/1GK5aRk",
    features: [
      "ANSI/ISEA 107 Tipo R Clase 2",
      "Tela Poliéster/Algodón con recubrimiento repelente",
      "Tecnología reflectiva Scotchlite (plateado y naranja)",
      "Refuerzos de cordura en hombros y cuello",
      "Bolsillos cargo profundos y porta radio"
    ],
    tags: ["microprismas", "resistente", "nocturno", "brigadista"],
    articleSource: "Mejores Chalecos de Seguridad 2025"
  },
  {
    id: "breakaway-pro",
    name: "Chaleco Radians SV46 Heavy Duty Surveyor (Breakaway)",
    description: "Chaleco surveyor Heavy Duty importado Radians con frente sólido, espalda de malla, cierre #8, bolsillos para tablet y sistema magnético de liberación (breakaway).",
    category: "EPP",
    subcategory: "Ropa de Seguridad",
    brand: "Radians",
    price: "Consultar precio",
    rating: 4.7,
    reviews: 10,
    image: "/images/products/chaleco/breakaway-pro.webp",
    amazonUrl: "https://mercadolibre.com/sec/2Xzhw76",
    features: [
      "ANSI/ISEA 107 Tipo R Clase 2 con feature breakaway",
      "Frente sólido / Espalda de malla",
      "Bolsillo para iPad/tablet + bolsillo trasero para planos",
      "Sistema magnético de liberación rearmable",
      "Panel frontal con espuma EVA y velcros reemplazables"
    ],
    tags: ["breakaway", "survey", "importado", "Radians"],
    articleSource: "Mejores Chalecos de Seguridad 2025"
  },
  {
    id: "termico-invierno",
    name: "Chaleco Reflejante Ejecutivo Gabardina (Térmico/Invierno)",
    description: "Chaleco tipo brigadista en gabardina 100% algodón, resistente y con múltiples bolsillos frontales. Presentación profesional ideal para supervisión y uso en climas fríos (no impermeable).",
    category: "EPP",
    subcategory: "Ropa de Seguridad",
    brand: "Generic",
    price: "Consultar precio",
    rating: 4.8,
    reviews: 700,
    image: "/images/products/chaleco/termico-invierno.webp",
    amazonUrl: "https://mercadolibre.com/sec/16xjRYw",
    features: [
      "Gabardina 100% algodón de alta resistencia",
      "Cintas reflejantes textiles de 2 pulgadas (frente y espalda)",
      "Múltiples bolsillos frontales con cierre y velcro",
      "Cierre central reforzado",
      "Acabado profesional y resistente"
    ],
    tags: ["gabardina", "ejecutivo", "duradero", "algodón"],
    articleSource: "Mejores Chalecos de Seguridad 2025"
  },


  {
    "id": "uni-t-ut363",
    "name": "Mini Anemómetro Digital UNI-T UT363",
    "description": "Anemómetro portátil con impulsor de paletas y sensor de temperatura, ideal para mediciones de velocidad de aire y condiciones ambientales en campo.",
    "category": "Instrumentos",
    "subcategory": "Anemómetros",
    "brand": "UNI-T",
    "price": "Consultar precio",
    "rating": 4.8,
    "reviews": 95,
    "image": "/images/products/ANEMOMETRO/uni-t-ut363.webp",
    "amazonUrl": "https://mercadolibre.com/sec/2PnRGPZ",
    "features": [
      "Impulsor de paletas (fan impeller)",
      "Rango de velocidad 0 ~ 30 m/s",
      "Sensor de temperatura integrado",
      "Pantalla LCD con retroiluminación",
      "Funciones de retención de datos (Data Hold)",
      "Alimentación con 3 x AAA"
    ],
    "tags": ["portátil", "HVAC", "medición", "temperatura"],
    "articleSource": "Mini Anemometro Digital Uni-t Ut363, Velocidad Y Temperatura | Mercado Libre"
  },
  {
    "id": "surtek-cinta-barricada-100m",
    "name": "Cinta Barricada Precaución Surtek 100m",
    "description": "Cinta de señalización en polipropileno con aditivos UV, alta visibilidad para delimitación temporal en obras y áreas de riesgo.",
    "category": "Señalización",
    "subcategory": "Cintas Barricada",
    "brand": "Surtek",
    "price": "Consultar precio",
    "rating": 4.8,
    "reviews": 210,
    "image": "/images/products/SENALIZACION/cinta-barricada-surtek-100m.webp",
    "amazonUrl": "https://mercadolibre.com/sec/2eFk373",
    "features": [
      "Longitud 100 m",
      "Ancho 3 pulgadas (7.6 cm)",
      "Espesor 0.04 mm (40 micras)",
      "Material: Polipropileno con aditivos UV",
      "Leyenda 'PRECAUCION' y alta visibilidad"
    ],
    "tags": ["señalización", "alta visibilidad", "UV"],
    "articleSource": "Cinta Barricada Precaucion 100m Surtek | MercadoLibre"
  },
  {
    "id": "surtek-cono-45cm",
    "name": "Cono de Precaución Surtek 45 cm con Reflejantes",
    "description": "Cono vial de PVC flexible con dos bandas retrorreflectivas y base de goma, diseñado para visibilidad diurna y nocturna en entornos de bajo/medio tráfico.",
    "category": "Señalización",
    "subcategory": "Conos",
    "brand": "Surtek",
    "price": "Consultar precio",
    "rating": 4.6,
    "reviews": 119,
    "image": "/images/products/SENALIZACION/cono-surtek-45cm.webp",
    "amazonUrl": "https://mercadolibre.com/sec/1XHP4JG",
    "features": [
      "Altura 45 cm",
      "Cuerpo en PVC flexible con protección UV",
      "2 bandas retrorreflectivas de grado ingeniería",
      "Base de caucho pesada para estabilidad",
      "Diseño resistente a impactos menores (memoria elástica)"
    ],
    "tags": ["retroreflectante", "vial", "45cm"],
    "articleSource": "Surtek 137461 Cono Precaución con 2 Reflejantes | MercadoLibre"
  },
  {
    "id": "combyeo-arnes-cuerda-doble",
    "name": "Arnés de Seguridad Combyeo (Cuerda Doble y Gancho)",
    "description": "Arnés de cuerpo completo con configuración de doble línea (Y) para anclaje continuo; ideal para trabajos en altura que requieren tie-off 100%.",
    "category": "Protección Contra Caídas",
    "subcategory": "Arneses",
    "brand": "Combyeo (Genérico)",
    "price": "Consultar precio",
    "rating": 4.8,
    "reviews": 284,
    "image": "/images/products/ARNES/combyeo-arnes.webp",
    "amazonUrl": "https://mercadolibre.com/sec/1aR5CWc",
    "features": [
      "Arnés de cuerpo completo en poliéster de alta tenacidad",
      "Configuración de doble brazo (Y) para '100% tie-off'",
      "Ajustes en pecho y piernas",
      "Conectores tipo gancho (gran apertura)",
      "Capacidad estática declarada elevada (según ficha)"
    ],
    "tags": ["doble línea", "100% tie-off", "genérico", "riesgo-verificar-longitud"],
    "articleSource": "Combyeo Arnés Seguridad Contra Caídas C/ Cuerda Doble Y Gancho | MercadoLibre"
  },
  {
    "id": "lica-kit-arnes",
    "name": "Kit de Protección Contra Caídas Lica (Arnés, Amortiguador y Punto Fijo)",
    "description": "Kit integral certificado que incluye arnés, línea de vida con amortiguador de impacto y anclaje portátil; conformidad con normas ANSI/EN.",
    "category": "Protección Contra Caídas",
    "subcategory": "Kits Anticaídas",
    "brand": "Lica",
    "price": "Consultar precio",
    "rating": 4.7,
    "reviews": 142,
    "image": "/images/products/ARNES/lica-kit.webp",
    "amazonUrl": "https://mercadolibre.com/sec/18FXEdR",
    "features": [
      "Arnés ARN-L en poliéster (1¾\")",
      "Línea de vida 1.83 m (6 pies) con amortiguador",
      "Resistencia a tensión 13 kN",
      "Incluye adaptador de anclaje portátil y mochila",
      "Cumple ANSI Z359.1-2014, CE EN361, EN358"
    ],
    "tags": ["certificado", "ANSI", "EN", "amortiguador"],
    "articleSource": "Lica-kit (kit De Arnés, Amortiguador Y Punto Fijo) | MercadoLibre"
  },
  {
    "id": "infra-msa-casco-ala-ancha",
    "name": "Kit Casco Ala Ancha Infra con Barbiquejo MSA",
    "description": "Casco tipo ala ancha en HDPE con suspensión de matraca y barbiquejo MSA; diseñado para protección frente a radiación solar y golpes en trabajos exteriores.",
    "category": "Protección Personal",
    "subcategory": "Cascos de Seguridad",
    "brand": "Infra / MSA",
    "price": "Consultar precio",
    "rating": 5.0,
    "reviews": 500,
    "image": "/images/products/CASCOS/infra-msa-fullbrim.webp",
    "amazonUrl": "https://mercadolibre.com/sec/1yZQSU9",
    "features": [
      "Carcasa en HDPE (Ala ancha, protección 360°)",
      "Suspensión interna tipo matraca (ajuste rápido)",
      "Barbiquejo MSA para retención segura",
      "Protección UV y ergonomía térmica",
      "Adecuado para exteriores y trabajos con exposición solar"
    ],
    "tags": ["ala ancha", "barbiquejo", "HDPE", "MSA"],
    "articleSource": "Kit De Casco De Seguridad Ala Ancha Infra Y Barbiquejo Msa | MercadoLibre"
  },
  {
    "id": "malla-seguridad-1.2x30m",
    "name": "Malla de Seguridad Naranja 1.2 x 30 m (Genérica)",
    "description": "Malla de delimitación en HDPE de 1.2 m de alto por 30 m de largo, diseñada para demarcación de excavaciones y control de obra con orificios que reducen carga de viento.",
    "category": "Señalización",
    "subcategory": "Mallas de Seguridad",
    "brand": "CPRO / Genérica",
    "price": "Consultar precio",
    "rating": 4.8,
    "reviews": 100,
    "image": "/images/products/SENALIZACION/malla-seguridad-1-2x30m.webp",
    "amazonUrl": "https://mercadolibre.com/sec/27tsLrn",
    "features": [
      "Dimensiones 1.2 m x 30 m",
      "Material HDPE extruido",
      "Orificio 10 cm x 4 cm (reduce wind load)",
      "Peso aprox. 3.6 kg por rollo",
      "Color naranja de alta visibilidad"
    ],
    "tags": ["malla", "HDPE", "naranja", "delimitación"],
    "articleSource": "Malla De Seguridad 1.230m Orificio 10cm4cm 3.6kg/rollo | MercadoLibre"
  },
  {
    "id": "linea-vida-posicionamiento-1.8m",
    "name": "Línea de Vida de Posicionamiento 1.8 m",
    "description": "Línea de posicionamiento de 1.8 m con ganchos de acero; indicada para posicionamiento y restricción, no apta para detención de caídas por no incluir absorbedor de energía.",
    "category": "Protección Contra Caídas",
    "subcategory": "Líneas de Vida / Eslingas",
    "brand": "Genérica",
    "price": "Consultar precio",
    "rating": 4.8,
    "reviews": 120,
    "image": "/images/products/ARNES/linea-vida-1-8m.webp",
    "amazonUrl": "https://mercadolibre.com/sec/1zxq3ZX",
    "features": [
      "Longitud 1.8 m (6 pies)",
      "Construcción en cuerda trenzada (nylon/poliéster)",
      "Ganchos de acero forjado",
      "No incluye absorbedor de energía (NO para detención de caídas)",
      "Cubiertas termocontraíbles en empalmes para inspección"
    ],
    "tags": ["posicionamiento", "no-anti-caidas", "1.8m"],
    "articleSource": "Línea Cuerda Vida Posicionamiento 1.8mt Ganchos Caidas | MercadoLibre"
  },
  {
    "id": "hawk-anclaje-viga-av-f12",
    "name": "Anclaje Portátil para Viga Hawk AV-F12",
    "description": "Anclaje deslizante para vigas tipo I, diseñado para instalación sin herramientas y para mantener el punto de anclaje 'overhead' mientras el trabajador se desplaza.",
    "category": "Anclajes",
    "subcategory": "Anclajes Portátiles para Viga",
    "brand": "Hawk",
    "price": "Consultar precio",
    "rating": 5.0,
    "reviews": 50,
    "image": "/images/products/ANCLAJES/hawk-av-f12.webp",
    "amazonUrl": "https://mercadolibre.com/sec/2H47uQG",
    "features": [
      "Rango de apertura 3\" a 12\" (9 cm a 30.5 cm)",
      "Resistencia tensil 22.2 kN (5,000 lbs)",
      "Fabricado en aluminio y acero inoxidable",
      "Argolla giratoria para conexión",
      "Instalación rápida sin herramientas"
    ],
    "tags": ["viga", "portátil", "22.2kN", "overhead"],
    "articleSource": "Anclaje Portatil Para Viga 3 A 12 Pulgadas | MercadoLibre"
  },
  {
    "id": "zait-andamio-ligero-1-5x2-0x1-93m",
    "name": "Andamio Ligero Estándar Zait 1.5 x 2.0 x 1.93 m",
    "description": "Andamio modular de acero tubular para trabajos de bajo/medio alcance: pintura, instalación de tablaroca y mantenimiento ligero.",
    "category": "Acceso en Altura",
    "subcategory": "Andamios",
    "brand": "Zait",
    "price": "Consultar precio",
    "rating": 4.9,
    "reviews": 100,
    "image": "/images/products/ANDAMIOS/zait-andamio-1-5x2-0x1-93m.webp",
    "amazonUrl": "https://mercadolibre.com/sec/25LEiT4",
    "features": [
      "Dimensiones: 1.5 m x 2.0 m x 1.93 m",
      "Tubo de acero diámetro 4.2 cm",
      "Capacidad de carga 500 kg (distribuidos)",
      "Marcos modulares con escalera integrada",
      "Diseño apto para montaje manual (piezas 10-15 kg)"
    ],
    "tags": ["modular", "acero", "500kg"],
    "articleSource": "Andamio Ligero Estándar 1.5x2.0x1.93m Zait | Walmart / MercadoLibre"
  },
  {
    "id": "3m-dbi-sala-9501403",
    "name": "Cintas Anti-Trauma 3M DBI-SALA 9501403",
    "description": "Dispositivo para prevenir trauma por suspensión tras caída; se despliegan y forman un estribo para permitir al usuario soportar su propio peso mientras espera rescate.",
    "category": "Rescate y Primeros Auxilios",
    "subcategory": "Accesorios de Arneses",
    "brand": "3M DBI-SALA",
    "price": "Consultar precio",
    "rating": 5.0,
    "reviews": 45,
    "image": "/images/products/ACCESORIOS/3m-dbi-sala-9501403.webp",
    "amazonUrl": "https://mercadolibre.com/sec/1ZzRV5u",
    "features": [
      "Modelo 9501403",
      "Diseño para prevenir intolerancia ortostática (suspension trauma)",
      "Fácil despliegue y formación de estribo",
      "Compatible con la mayoría de arneses",
      "Ligero y de rápida instalación"
    ],
    "tags": ["trauma", "suspension", "rescate"],
    "articleSource": "3M DBI-SALA 9501403 Suspension Trauma Safety Straps"
  },
  {
    "id": "petzl-jag-rescue-kit",
    "name": "Petzl JAG Rescue Kit (Kit de Rescate Reversible)",
    "description": "Kit de rescate profesional pre-armado con sistema JAG (polipasto 4:1), descensor I'D EVAC y cuerda AXIS; diseñado para maniobras de rescate vertical y pick-off.",
    "category": "Rescate",
    "subcategory": "Kits de Rescate",
    "brand": "Petzl",
    "price": "Consultar precio",
    "rating": 5.0,
    "reviews": 150,
    "image": "/images/products/RESCATE/petzl-jag-rescue-kit.webp",
    "amazonUrl": "https://mercadolibre.com/sec/1e6m8NF",
    "features": [
      "JAG System (ventaja mecánica 4:1)",
      "Descensor I'D EVAC con función antipánico",
      "Cuerda AXIS 11 mm semiestática",
      "Pre-armado y reversible para levantar y descender",
      "Longitudes disponibles: 30, 60, 120 m"
    ],
    "tags": ["rescate", "JAG", "I'D EVAC", "4:1"],
    "articleSource": "Petzl Jag Rescue Kit - Petzl"
  },

  // Lentes de protección

   {
    id: "kleenguard-nemesis-v30",
    name: "Kleenguard Nemesis V30 (Mica Ahumada/Gris)",
    description: "Lentes deportivos de seguridad con diseño envolvente, protección certificada de alto impacto y estética moderna que favorece su uso constante.",
    category: "EPP",
    subcategory: "Protección Ocular",
    brand: "Kleenguard",
    price: "Consultar precio",
    rating: 4.6,
    reviews: 2300,
    image: "/images/products/lentes/kleenguard-nemesis-v30.webp",
    amazonUrl: "https://mercadolibre.com/sec/31zmde5",
    features: [
      "Diseño deportivo y envolvente que mejora la aceptación de uso",
      "Extremadamente ligeros con patillas flexibles",
      "Protección certificada de alto impacto (ANSI Z87.1+)",
      "Protección UV 99.9%",
      "Incluyen cordón para el cuello"
    ],
    tags: ["diseño", "envolvente", "UV", "alto-impacto"],
    articleSource: "Top 6 Lentes de Protección Destacados en México 2025"
  },
  {
    id: "milwaukee-antirayaduras-antiempanante",
    name: "Milwaukee Lentes de Seguridad Antirayaduras y Antiempañantes (Claros)",
    description: "Lentes profesionales con recubrimiento de capa dura antirayaduras y tratamiento antiempañante pensado para uso rudo en obra e industria.",
    category: "EPP",
    subcategory: "Protección Ocular",
    brand: "Milwaukee",
    price: "Consultar precio",
    rating: 4.8,
    reviews: 1270,
    image: "/images/products/lentes/milwaukee-antirayaduras.webp",
    amazonUrl: "https://mercadolibre.com/sec/2MKekSP",
    features: [
      "Recubrimiento de capa dura antirayaduras para uso intensivo",
      "Tratamiento antiempañante efectivo",
      "Puente nasal flexible y patillas cómodas",
      "Cumplen ANSI Z87.1+ y CSA Z94.3 (doble certificación)"
    ],
    tags: ["antirayaduras", "antiempañante", "ANSI", "CSA"],
    articleSource: "Top 6 Lentes de Protección Destacados en México 2025"
  },
  {
    id: "3m-securefit-400-scotchgard",
    name: "3M SecureFit Serie 400 con Recubrimiento Scotchgard",
    description: "Lentes con tecnología SecureFit que se autoajustan por difusión de presión, ultraligeros y con recubrimiento antiempañante Scotchgard™ de alto rendimiento.",
    category: "EPP",
    subcategory: "Protección Ocular",
    brand: "3M",
    price: "Consultar precio",
    rating: 4.7,
    reviews: 850,
    image: "/images/products/lentes/3m-securefit-400-scotchgard.webp",
    amazonUrl: "https://mercadolibre.com/sec/2DmnYrR",
    features: [
      "Tecnología PDT (difusión de presión) en patillas para autoajuste",
      "Recubrimiento antiempañante Scotchgard™",
      "Ultraligero (aprox. 19 g)",
      "Puente nasal ajustable para mejor ajuste"
    ],
    tags: ["SecureFit", "Scotchgard", "ultraligero", "PDT"],
    articleSource: "Top 6 Lentes de Protección Destacados en México 2025"
  },
  {
    id: "hexarmor-vs250-variomatic",
    name: "Hexarmor VS250 con Micas Fotocromáticas (Variomatic)",
    description: "Lentes con mica fotocromática que oscurece en presencia de UV y aclara en interiores; recubrimiento premium TruShield® contra empañamiento y rayaduras.",
    category: "EPP",
    subcategory: "Protección Ocular",
    brand: "Hexarmor",
    price: "Consultar precio",
    rating: 5.0,
    reviews: 45,
    image: "/images/products/lentes/hexarmor-vs250-variomatic.webp",
    amazonUrl: "https://mercadolibre.com/sec/14dSX7w",
    features: [
      "Micas fotocromáticas (Variomatic) que se adaptan a la luz",
      "Recubrimiento TruShield® premium contra empañamiento y rayaduras",
      "Diseño ergonómico con patillas suaves y puente nasal ajustable",
      "Certificaciones: ANSI Z87.1+, CE EN166 y CSA Z94.3"
    ],
    tags: ["fotocromático", "truShield", "variomatic", "adaptativo"],
    articleSource: "Top 6 Lentes de Protección Destacados en México 2025"
  },
  {
    id: "truper-sobrelente-101954",
    name: "Truper Sobrelente de Seguridad Antiempaño (Modelo 101954)",
    description: "Sobrelente OTG diseñado para usar sobre gafas graduadas; armazón amplio, antiempañante y buena cobertura frontal y lateral a bajo costo.",
    category: "EPP",
    subcategory: "Protección Ocular",
    brand: "Truper",
    price: "Consultar precio",
    rating: 4.7,
    reviews: 200,
    image: "/images/products/lentes/truper-sobrelente-101954.webp",
    amazonUrl: "https://mercadolibre.com/sec/1oqjT22",
    features: [
      "Diseño OTG (over-the-glass) para usar sobre gafas graduadas",
      "Tratamiento antiempañante incluido",
      "Armazón amplio que ofrece protección frontal y lateral",
      "Excelente relación calidad-precio"
    ],
    tags: ["OTG", "antiempañante", "soblente", "prescripción"],
    articleSource: "Top 6 Lentes de Protección Destacados en México 2025"
  },
  {
    id: "bolle-swift-otg-platinum-lite",
    name: "Bollé Safety SWIFT OTG con Recubrimiento PLATINUM Lite",
    description: "Sobrelente OTG premium, muy ligero y diseñado con materiales parcialmente reciclados; incorpora recubrimiento PLATINUM Lite de alta performance.",
    category: "EPP",
    subcategory: "Protección Ocular",
    brand: "Bollé Safety",
    price: "Consultar precio",
    rating: 4.8,
    reviews: 300,
    image: "/images/products/lentes/bolle-swift-otg-platinum-lite.webp",
    amazonUrl: "https://mercadolibre.com/sec/1MnYQJQ",
    features: [
      "Recubrimiento PLATINUM Lite (alto rendimiento antiempañante y anti-rayaduras)",
      "Diseño OTG superior, ligero y delgado",
      "33% de policarbonato reciclado; totalmente reciclable",
      "Cumple ANSI Z87.1-2020"
    ],
    tags: ["OTG", "ecológico", "PLATINUM-Lite", "reciclable"],
    articleSource: "Top 6 Lentes de Protección Destacados en México 2025"
  },

  //  Arneses destacados del mercado mexicano 

   {
    id: "combyeo-kit",
    name: "Combyeo Arnés de Seguridad con Cuerda Doble y Gancho",
    description: "Kit de ultra bajo costo que incluye arnés, cuerda doble y gancho. Comercializado como 'todo en uno' a precio muy bajo; no recomendable para uso profesional ya que sus certificaciones no son verificables.",
    category: "EPP",
    subcategory: "Arneses",
    brand: "Combyeo",
    price: "Consultar precio",
    rating: 4.8,
    reviews: 0,
    image: "/images/products/arnes/combyeo-kit.webp",
    amazonUrl: "https://mercadolibre.com/sec/1xH4X5C",
    features: [
      "Incluye arnés, línea de vida/cuerda doble y gancho",
      "Precio extremadamente accesible",
      "Kit 'todo en uno' orientado a consumo masivo",
      "Certificaciones no verificables (no recomendado para uso regulado)"
    ],
    tags: ["arnés", "kit", "bajo-costo", "doméstico"],
    articleSource: "Top 6 Arneses Destacados del Mercado Mexicano 2025"
  },
  {
    id: "jyrsa-jyr-10a",
    name: "Jyrsa JYR-10A (1 Anillo Dorsal)",
    description: "Arnés básico certificado de nivel de entrada, pensado para detención de caídas en trabajos de construcción y mantenimiento; fabricado por una marca mexicana con reputación sólida.",
    category: "EPP",
    subcategory: "Arneses",
    brand: "Jyrsa",
    price: "Consultar precio",
    rating: 4.8,
    reviews: 100,
    image: "/images/products/arnes/jyrsa-jyr-10a.webp",
    amazonUrl: "https://mercadolibre.com/sec/2wp8Rg7",
    features: [
      "1 anillo dorsal para detención de caídas",
      "Cintas bicolor de alta visibilidad",
      "Indicadores de caída integrados",
      "Capacidad de carga certificada: 140 kg",
      "Certificaciones: NOM-009-STPS-2011 y ANSI Z359.1-2007 (documentación transparente)"
    ],
    tags: ["certificado", "básico", "1-dorsal", "jyrsa"],
    articleSource: "Top 6 Arneses Destacados del Mercado Mexicano 2025"
  },
  {
    id: "truper-14434",
    name: "Truper 14434 (5 Anillos)",
    description: "Arnés multifuncional con cinco puntos de anclaje (dorsal, laterales y hombros). Versátil y popular por su relación precio-calidad; apto para detención de caídas, posicionamiento y rescate.",
    category: "EPP",
    subcategory: "Arneses",
    brand: "Truper",
    price: "Consultar precio",
    rating: 5.0,
    reviews: 200,
    image: "/images/products/arnes/truper-14434.webp",
    amazonUrl: "https://mercadolibre.com/sec/1KPATiG",
    features: [
      "5 anillos 'D' (dorsal + 2 laterales + 2 hombros)",
      "Apto para detención de caídas, posicionamiento y rescate",
      "Certificaciones: ANSI Z359.11 y EN 361",
      "Diseño versátil para múltiples aplicaciones industriales"
    ],
    tags: ["multifuncional", "5-anillos", "truper", "rescate"],
    articleSource: "Top 6 Arneses Destacados del Mercado Mexicano 2025"
  },
  {
    id: "lica-kit",
    name: "LICA-KIT (Arnés, Amortiguador y Punto Fijo)",
    description: "Sistema completo que incluye arnés certificado, amortiguador de impacto y punto de anclaje. Solución lista para usar y certificada bajo múltiples normas internacionales.",
    category: "EPP",
    subcategory: "Arneses",
    brand: "LICA",
    price: "Consultar precio",
    rating: 4.7,
    reviews: 58,
    image: "/images/products/arnes/lica-kit.webp",
    amazonUrl: "https://mercadolibre.com/sec/1KjyJwP",
    features: [
      "Kit completo: arnés + amortiguador + punto de anclaje",
      "Certificaciones: ANSI Z359.1-2014, CE EN361:2002, EN 358:1999",
      "Compatibilidad garantizada entre componentes",
      "Incluye mochila para transporte"
    ],
    tags: ["kit-completo", "certificado", "lica", "amortiguador"],
    articleSource: "Top 6 Arneses Destacados del Mercado Mexicano 2025"
  },
  {
    id: "msa-vform",
    name: "MSA V-Form (3 Anillos)",
    description: "Arnés profesional premium de MSA con diseño ergonómico RaceFORM; pensado para profesionales de altura que requieren detención de caídas y posicionamiento con máximo confort y certificaciones internacionales.",
    category: "EPP",
    subcategory: "Arneses",
    brand: "MSA",
    price: "Consultar precio",
    rating: 5.0,
    reviews: 85,
    image: "/images/products/arnes/msa-vform.webp",
    amazonUrl: "https://mercadolibre.com/sec/31fDL5v",
    features: [
      "Configuración 3 anillos (dorsal + 2 laterales)",
      "Diseño RaceFORM para ajuste atlético y movilidad",
      "Certificaciones: ANSI Z359.11, CSA Z259.10 y OSHA",
      "Alta capacidad (hasta 180 kg) y opciones de acolchado"
    ],
    tags: ["premium", "msa", "raceform", "profesional"],
    articleSource: "Top 6 Arneses Destacados del Mercado Mexicano 2025"
  },
  {
    id: "warthog-safety-5p",
    name: "Warthog Safety Arnés 5 Puntos de Ajuste",
    description: "Arnés competitivo de rango medio con 5 puntos de ajuste y certificación ANSI; opción económica frente a marcas premium, orientado a detención de caídas y posicionamiento.",
    category: "EPP",
    subcategory: "Arneses",
    brand: "Warthog Safety",
    price: "Consultar precio",
    rating: 4.8,
    reviews: 100,
    image: "/images/products/arnes/warthog-safety-5p.webp",
    amazonUrl: "https://mercadolibre.com/sec/2pRdC1u",
    features: [
      "5 puntos de ajuste y anclaje",
      "Certificación: ANSI Z359.1-2007",
      "Aplicaciones: detención de caídas, posicionamiento, espacios confinados",
      "Capacidad estándar: 140 kg"
    ],
    tags: ["5-puntos", "ansi", "competidor", "warthog"],
    articleSource: "Top 6 Arneses Destacados del Mercado Mexicano 2025"
  }, 

  // Escaleras industriales
{
    id: "cuprum-c-3217-06",
    name: "Cuprum C-3217-06 - Escalera de Tijera de Fibra de Vidrio",
    description: "Escalera de tijera de fibra de vidrio dieléctrica, diseñada para electricistas y técnicos de mantenimiento. Incluye Holster Top® con ranuras para herramientas y tirantes antipellizcos para seguridad y comodidad en uso rudo.",
    category: "Herramientas",
    subcategory: "Escaleras",
    brand: "Cuprum",
    price: "Consultar precio",
    rating: 4.9,
    reviews: 72,
    image: "/images/products/escaleras/cuprum-c-3217-06.webp",
    amazonUrl: "https://mercadolibre.com/sec/1UNJ4FY",
    features: [
      "Construcción dieléctrica en fibra de vidrio (no conductora)",
      "Holster Top® profesional con ranuras para herramientas",
      "Zapatas antiderrapantes y peldaños estriados",
      "Tirantes antipellizcos para mayor seguridad",
      "Diseñada para uso rudo industrial"
    ],
    tags: ["fibra-de-vidrio", "dieléctrica", "holster-top", "tijera"],
    articleSource: "Top 5 Escaleras Destacadas del Mercado Mexicano 2025"
  },
  {
    id: "truper-101906",
    name: "Truper 101906 - Escalera Multipropósito Plegable 16 Escalones",
    description: "Escalera multiposición plegable de aluminio con 16 peldaños y múltiples configuraciones (andamio, tijera, recta, escalinata). Versátil y popular para contratistas generales y talleres.",
    category: "Herramientas",
    subcategory: "Escaleras",
    brand: "Truper",
    price: "Consultar precio",
    rating: 4.7,
    reviews: 344,
    image: "/images/products/escaleras/truper-101906.webp",
    amazonUrl: "https://mercadolibre.com/sec/148UFBt",
    features: [
      "Múltiples configuraciones: andamio, tijera, recta, escalinata",
      "Estructura plegable para almacenamiento y transporte",
      "Fabricada en aluminio resistente",
      "Capacidad de carga listada hasta 150 kg",
      "Ideal para contratistas y uso multi-tarea"
    ],
    tags: ["multiposición", "plegable", "aluminio", "16-peldaños"],
    articleSource: "Top 5 Escaleras Destacadas del Mercado Mexicano 2025"
  },
  {
    id: "cuprum-494-24n",
    name: "Cuprum 494-24N - Escalera de Extensión de Aluminio 24 Peldaños",
    description: "Escalera de extensión de aluminio con 24 peldaños, sistema de polea profesional y zapatas giratorias antiderrapantes. Pensada para trabajos en gran altura como construcción y telecomunicaciones.",
    category: "Herramientas",
    subcategory: "Escaleras",
    brand: "Cuprum",
    price: "Consultar precio",
    rating: 5.0,
    reviews: 18,
    image: "/images/products/escaleras/cuprum-494-24n.webp",
    amazonUrl: "https://mercadolibre.com/sec/31nsUtj",
    features: [
      "24 peldaños y gran alcance (>7 m altura de trabajo)",
      "Sistema de polea y cuerda para extensión profesional",
      "Peldaños tipo 'D' para mayor comodidad de pisada",
      "Zapatas giratorias con superficie antiderrapante",
      "Construcción robusta para trabajos en altura"
    ],
    tags: ["extensión", "24-peldaños", "polea", "alto-alcance"],
    articleSource: "Top 5 Escaleras Destacadas del Mercado Mexicano 2025"
  },
  {
    id: "werner-platforma",
    name: "Werner - Escalera de Fibra de Vidrio con Plataforma (Uso Pesado)",
    description: "Escalera de fibra de vidrio con amplia plataforma y barandales de seguridad, Tipo IAA (170 kg). Diseñada para tareas prolongadas en almacenes, picking y mantenimiento de maquinaria donde se requiere máxima estabilidad.",
    category: "Herramientas",
    subcategory: "Escaleras",
    brand: "Werner",
    price: "Consultar precio",
    rating: 5.0,
    reviews: 0,
    image: "/images/products/escaleras/werner-platforma.webp",
    amazonUrl: "https://mercadolibre.com/sec/1YWK8fm",
    features: [
      "Plataforma amplia y barandales de protección",
      "Base extra ancha y soportes reforzados",
      "Clasificación Tipo IAA (170 kg / 375 lbs)",
      "Material dieléctrico (fibra de vidrio) para seguridad eléctrica",
      "Diseñada para uso pesado en almacenes y picking"
    ],
    tags: ["plataforma", "fibra-de-vidrio", "tipo-IAA", "almacenes"],
    articleSource: "Top 5 Escaleras Destacadas del Mercado Mexicano 2025"
  },
  {
    id: "escalera-convertible-economica",
    name: "Escalera Convertible Tipo Tijera/Extensión (Popular en Mercado Libre)",
    description: "Escalera convertible 2‑en‑1 de aluminio que funciona como tijera y extensión; opción económica y muy vendida, ideal para pintores, instaladores y mantenimiento con presupuesto ajustado.",
    category: "Herramientas",
    subcategory: "Escaleras",
    brand: "Generic",
    price: "Consultar precio",
    rating: 4.5,
    reviews: 84,
    image: "/images/products/escaleras/escalera-convertible-economica.webp",
    amazonUrl: "https://mercadolibre.com/sec/2SF8EY2",
    features: [
      "Funcionalidad 2-en-1: tijera y extensión",
      "Fabricada en aluminio ligera y portátil",
      "Buena relación calidad-precio para uso no intensivo",
      "Fácil transporte y almacenamiento",
      "Altamente vendida en marketplaces"
    ],
    tags: ["convertible", "tijera-extensión", "económica", "aluminio"],
    articleSource: "Top 5 Escaleras Destacadas del Mercado Mexicano 2025"
  }, 

// mejores multimetros destacados

  {
    id: "fluke-117",
    name: "Fluke 117 True-RMS para Electricistas",
    description: "Multímetro True RMS compacto y robusto, diseñado para electricistas comerciales y residenciales. Incluye VoltAlert™ (detección de voltaje sin contacto), entrada LoZ para evitar lecturas fantasma y pantalla retroiluminada para trabajo en baja iluminación.",
    category: "EPP",
    subcategory: "Multímetros",
    brand: "Fluke",
    price: "Consultar precio",
    rating: 4.9,
    reviews: 1500,
    image: "/images/products/multimetros/fluke-117.webp",
    amazonUrl: "https://mercadolibre.com/sec/1RmPMSC",
    features: [
      "True RMS para precisión en cargas complejas",
      "Detección de voltaje sin contacto (VoltAlert™)",
      "Entrada de baja impedancia (LoZ) para eliminar lecturas fantasma",
      "Categoría de seguridad CAT III 600V",
      "Pantalla retroiluminada y diseño compacto profesional"
    ],
    tags: ["true-rms", "voltalert", "LoZ", "CAT-III", "profesional"],
    articleSource: "Top 6 Multímetros Destacados en México 2025"
  },
  {
    id: "uni-t-ut204-plus",
    name: "UNI-T UT204+ Pinza Amperimétrica True RMS",
    description: "Pinza amperimétrica True RMS con excelente relación calidad-precio; mide corriente AC/DC hasta 600 A, voltaje, resistencia, capacitancia, frecuencia, temperatura y ofrece función NCV. Ideal para aplicaciones solares, automotrices y técnicos con presupuesto inteligente.",
    category: "EPP",
    subcategory: "Multímetros",
    brand: "UNI-T",
    price: "Consultar precio",
    rating: 4.8,
    reviews: 422,
    image: "/images/products/multimetros/uni-t-ut204-plus.webp",
    amazonUrl: "https://mercadolibre.com/sec/12VAjv4",
    features: [
      "Medición de corriente AC/DC hasta 600 A",
      "True RMS",
      "Mediciones de voltaje, resistencia, capacitancia, frecuencia y temperatura",
      "Detección de voltaje sin contacto (NCV)",
      "Pantalla de 6000 cuentas"
    ],
    tags: ["pinza", "true-rms", "NCV", "600A", "solar"],
    articleSource: "Top 6 Multímetros Destacados en México 2025"
  },
  {
    id: "kaiweets-ht118a",
    name: "Kaiweets HT118A True RMS 6000 Cuentas",
    description: "Multímetro True RMS con clasificación de seguridad elevada (CAT III 1000V / CAT IV 600V), auto-rango y funciones adicionales como medición de temperatura, NCV y linterna incorporada. Excelente opción 'alto valor' para técnicos y aficionados serios.",
    category: "EPP",
    subcategory: "Multímetros",
    brand: "Kaiweets",
    price: "Consultar precio",
    rating: 4.7,
    reviews: 10000,
    image: "/images/products/multimetros/kaiweets-ht118a.webp",
    amazonUrl: "https://mercadolibre.com/sec/2zf6CQZ",
    features: [
      "True RMS y auto-rango",
      "Clasificación de seguridad CAT III 1000V / CAT IV 600V",
      "Medición de temperatura, NCV y linterna integrada",
      "Pantalla grande de 6000 cuentas y protección con doble fusible cerámico",
      "Indicadores visuales y diseño inteligente para seguridad"
    ],
    tags: ["true-rms", "CAT-IV", "NCV", "6000-cuentas", "alto-valor"],
    articleSource: "Top 6 Multímetros Destacados en México 2025"
  },
  {
    id: "fluke-101",
    name: "Fluke 101 - Multímetro Digital de Bolsillo",
    description: "Multímetro de bolsillo básico y fiable de Fluke (CAT III 600V). Ideal como equipo de respaldo o para diagnósticos rápidos de voltaje, continuidad y resistencia. Ultraligero y fácil de usar.",
    category: "EPP",
    subcategory: "Multímetros",
    brand: "Fluke",
    price: "Consultar precio",
    rating: 4.8,
    reviews: 75,
    image: "/images/products/multimetros/fluke-101.webp",
    amazonUrl: "https://mercadolibre.com/sec/1zvfg2j",
    features: [
      "Formato de bolsillo, muy compacto",
      "Certificación CAT III 600V",
      "Mide voltaje AC/DC, resistencia y continuidad",
      "Fácil de usar para pruebas rápidas",
      "Excelente como multímetro de respaldo"
    ],
    tags: ["bolsillo", "básico", "CAT-III", "fiable"],
    articleSource: "Top 6 Multímetros Destacados en México 2025"
  },
  {
    id: "astroai-trms-6000",
    name: "AstroAI Pinza Amperimétrica Digital TRMS 6000 Cuentas",
    description: "Pinza amperimétrica True RMS y todo‑en‑uno económica, pensada para HVAC, mantenimiento general y técnicos con presupuesto ajustado. Incluye mediciones completas y buena resolución en pantalla.",
    category: "EPP",
    subcategory: "Multímetros",
    brand: "AstroAI",
    price: "Consultar precio",
    rating: 4.8,
    reviews: 514,
    image: "/images/products/multimetros/astroai-trms-6000.webp",
    amazonUrl: "https://mercadolibre.com/sec/2ZeSdgH",
    features: [
      "True RMS y auto-rango",
      "Medición AC/DC de corriente y voltaje, resistencia, capacitancia, frecuencia y temperatura",
      "Pantalla de 6000 cuentas",
      "Diseñado como herramienta todo-en-uno para HVAC y mantenimiento",
      "Excelente relación calidad-precio"
    ],
    tags: ["astroai", "trms", "6000-cuentas", "HVAC", "económico"],
    articleSource: "Top 6 Multímetros Destacados en México 2025"
  },
  {
    id: "klein-mm400",
    name: "Klein Tools MM400 - Multímetro Digital",
    description: "Multímetro robusto de Klein Tools diseñado para electricistas que buscan durabilidad en obra. Mide voltaje AC/DC, corriente, resistencia, temperatura y más. Importante: NO es True RMS, lo que limita su uso en cargas no lineales.",
    category: "EPP",
    subcategory: "Multímetros",
    brand: "Klein Tools",
    price: "Consultar precio",
    rating: 4.5,
    reviews: 625,
    image: "/images/products/multimetros/klein-mm400.webp",
    amazonUrl: "https://mercadolibre.com/sec/1aqEm5C",
    features: [
      "Construcción robusta y resistente a caídas (hasta 1 m)",
      "Mide voltaje AC/DC, corriente, resistencia, temperatura y capacitancia",
      "Interfaz diseñada para uso en campo",
      "Marca reconocida entre electricistas",
      "NO es True RMS (limitación para sistemas modernos)"
    ],
    tags: ["robusto", "klein-tools", "no-true-rms", "obra"],
    articleSource: "Top 6 Multímetros Destacados en México 2025"
  },

  // Rotomartillos y taladros 

  {
    id: "dewalt-dcd7781d2-b3",
    name: "DeWalt DCD7781D2-B3: Taladro-Rotomartillo Inalámbrico 20V MAX",
    description: "Taladro-rotomartillo inalámbrico brushless 20V MAX, compacto y versátil para uso doméstico avanzado y proyectos DIY. Permite taladrar, atornillar y percutir mampostería ligera.",
    category: "Herramientas",
    subcategory: "Taladros y Rotomartillos",
    brand: "DeWalt",
    price: "Consultar precio",
    rating: 4.6,
    reviews: 10,
    image: "/images/products/power-tools/dewalt-dcd7781d2-b3.webp",
    amazonUrl: "https://mercadolibre.com/sec/2Gqknap",
    features: [
      "Motor brushless 20V MAX para mayor autonomía y vida útil",
      "Función 3‑en‑1: taladro, atornillador y percutor",
      "Compacto para trabajar en espacios reducidos",
      "Percusión adecuada para mampostería ligera"
    ],
    tags: ["brushless", "20V", "rotomartillo", "inalámbrico", "DIY"],
    articleSource: "Top 6 Productos Destacados en el Mercado Mexicano 2025"
  },
  {
    id: "bosch-gsb-18v-50",
    name: "Bosch GSB 18V-50 Professional: Rotomartillo Inalámbrico",
    description: "Rotomartillo inalámbrico brushless de la línea Professional de Bosch, pensado para uso intensivo profesional con 50 Nm de torque y mandril metálico de apriete rápido.",
    category: "Herramientas",
    subcategory: "Taladros y Rotomartillos",
    brand: "Bosch",
    price: "Consultar precio",
    rating: 4.8,
    reviews: 100,
    image: "/images/products/power-tools/bosch-gsb-18v-50.webp",
    amazonUrl: "https://mercadolibre.com/sec/2tmyRVs",
    features: [
      "Motor brushless de alto rendimiento",
      "Torque de 50 Nm para tareas exigentes",
      "Mandril metálico de apriete rápido",
      "Compatible con ecosistema Bosch 18V Professional"
    ],
    tags: ["bosch", "18V", "brushless", "professional", "50Nm"],
    articleSource: "Top 6 Productos Destacados en el Mercado Mexicano 2025"
  },
  {
    id: "truper-roto-1-2a8",
    name: "Truper ROTO-1/2A8: Rotomartillo con Cable 750W",
    description: "Rotomartillo con cable orientado a uso rudo y gran aceptación en México; ofrece 750W de potencia y buen desempeño en mampostería ligera a precio accesible.",
    category: "Herramientas",
    subcategory: "Taladros y Rotomartillos",
    brand: "Truper",
    price: "Consultar precio",
    rating: 4.8,
    reviews: 115,
    image: "/images/products/power-tools/truper-roto-1-2a8.webp",
    amazonUrl: "https://mercadolibre.com/sec/2tmyRVs",
    features: [
      "Motor de 750W para trabajo rudo",
      "Herramienta con cable (alta potencia continua)",
      "Incluye mango auxiliar y guía de profundidad",
      "Excelente relación potencia‑precio y red de servicio nacional"
    ],
    tags: ["truper", "corded", "750W", "mampostería", "calidad-precio"],
    articleSource: "Top 6 Productos Destacados en el Mercado Mexicano 2025"
  },
  {
    id: "makita-hp1630",
    name: "Makita HP1630: Taladro Percutor con Cable 710W",
    description: "Taladro percutor con cable de 710W, reconocido por su fiabilidad y ligereza; estándar profesional para trabajos ligeros y jornadas prolongadas.",
    category: "Herramientas",
    subcategory: "Taladros y Rotomartillos",
    brand: "Makita",
    price: "Consultar precio",
    rating: 4.8,
    reviews: 866,
    image: "/images/products/power-tools/makita-hp1630.webp",
    amazonUrl: "https://mercadolibre.com/sec/2pX4k44",
    features: [
      "710W de potencia en formato con cable",
      "Diseño ligero y ergonómico para reducir fatiga",
      "Construcción durable y rendimiento constante",
      "Mandril con llave (mayor sujeción, menos conveniente)"
    ],
    tags: ["makita", "710W", "corded", "profesional", "fiable"],
    articleSource: "Top 6 Productos Destacados en el Mercado Mexicano 2025"
  },
  {
    id: "milwaukee-m18-fuel-2-tool",
    name: "Milwaukee M18 FUEL 2-Tool Combo Kit",
    description: "Kit combo profesional que incluye taladro-rotomartillo y atornillador de impacto con tecnología M18 FUEL; diseñado para profesionales que requieren potencia y seguridad avanzadas.",
    category: "Herramientas",
    subcategory: "Kits y Taladros Inalámbricos",
    brand: "Milwaukee",
    price: "Consultar precio",
    rating: 4.8,
    reviews: 410,
    image: "/images/products/power-tools/milwaukee-m18-fuel-2tool.webp",
    amazonUrl: "https://mercadolibre.com/sec/1VbykFr",
    features: [
      "Tecnología M18 FUEL para máxima potencia y eficiencia",
      "Incluye dos herramientas (taladro-rotomartillo + atornillador de impacto)",
      "Función de seguridad AutoStop™",
      "Ecosistema M18 con baterías y accesorios compatibles"
    ],
    tags: ["milwaukee", "M18", "combo", "AutoStop", "profesional"],
    articleSource: "Top 6 Productos Destacados en el Mercado Mexicano 2025"
  },
  {
    id: "dewalt-dch133m2",
    name: "DeWalt DCH133M2: Rotomartillo SDS Plus Inalámbrico",
    description: "Rotomartillo inalámbrico SDS Plus pensado para perforación y cincelado en concreto; mecanismo electroneumático que entrega ~2.6 J de energía de impacto y gran portabilidad.",
    category: "Herramientas",
    subcategory: "Taladros y Rotomartillos",
    brand: "DeWalt",
    price: "Consultar precio",
    rating: 4.8,
    reviews: 130,
    image: "/images/products/power-tools/dewalt-dch133m2.webp",
    amazonUrl: "https://mercadolibre.com/sec/1Dkr9c6",
    features: [
      "SDS Plus con mecanismo electroneumático para concreto",
      "Aproximadamente 2.6 Joules de energía de impacto",
      "Motor brushless y 3 modos: taladro, rotomartillo y cincelado",
      "Diseñado para portabilidad en trabajos en campo"
    ],
    tags: ["SDS-Plus", "2.6J", "brushless", "inalámbrico", "concreto"],
    articleSource: "Top 6 Productos Destacados en el Mercado Mexicano 2025"
  },

  // termometros industriales

   {
    id: "goxawee-ir-50-600",
    name: "GOXAWEE Termómetro Infrarrojo Digital (-50-600°C)",
    description: "Pirómetro infrarrojo económico y popular en México. Rango amplio (-50°C a 600°C) y operación 'apuntar y disparar', ideal para diagnósticos generales, talleres y uso doméstico avanzado.",
    category: "Instrumentos",
    subcategory: "Termómetros",
    brand: "GOXAWEE",
    price: "Consultar precio",
    rating: 4.7,
    reviews: 127,
    image: "/images/products/termometros/goxawee-ir.webp",
    amazonUrl: "https://mercadolibre.com/sec/1hXZobU",
    features: [
      "Rango de medición: -50°C a 600°C",
      "Relación D:S 12:1",
      "Operación simple tipo 'apuntar y disparar'",
      "Emisividad fija (0.95)",
      "Construcción plástica, sin protección IP"
    ],
    tags: ["infrarrojo", "pirómetro", "12:1", "-50-600C", "entrada"],
    articleSource: "Top 6 Termómetros Industriales Destacados 2025"
  },
  {
    id: "truper-mete-500-18229",
    name: "Truper 18229 (METE-500) - Termómetro Infrarrojo",
    description: "Termómetro infrarrojo de la marca Truper pensado para uso profesional en talleres y mantenimiento industrial. Ofrece rango amplio, D:S competitivo y respaldo local.",
    category: "Instrumentos",
    subcategory: "Termómetros",
    brand: "Truper",
    price: "Consultar precio",
    rating: 4.7,
    reviews: 313,
    image: "/images/products/termometros/truper-18229.webp",
    amazonUrl: "https://mercadolibre.com/sec/2RDXrZJ",
    features: [
      "Rango aproximado: -50°C a 550°C",
      "Relación D:S 12:1",
      "Diseño ergonómico, incluye estuche y baterías",
      "Buena consistencia y respaldo de marca nacional",
      "Adecuado para uso industrial y automotriz"
    ],
    tags: ["truper", "mete-500", "12:1", "taller"],
    articleSource: "Top 6 Termómetros Industriales Destacados 2025"
  },
  {
    id: "uni-t-ut300s",
    name: "UNI-T UT300S - Termómetro Infrarrojo con Emisividad Ajustable",
    description: "Termómetro IR profesional económico que incorpora emisividad ajustable (0.10–1.00), alarmas Hi/Lo y funciones de registro (MAX/MIN), pensado para profesionales que requieren precisión sin alto costo.",
    category: "Instrumentos",
    subcategory: "Termómetros",
    brand: "UNI-T",
    price: "Consultar precio",
    rating: 4.8,
    reviews: 5,
    image: "/images/products/termometros/uni-t-ut300s.webp",
    amazonUrl: "https://mercadolibre.com/sec/12o5LsV",
    features: [
      "Emisividad ajustable: 0.10 a 1.00",
      "Alarmas audibles de temperatura alta/baja",
      "Relación D:S 12:1",
      "Funciones MAX/MIN y retención de datos",
      "Rango típico para uso profesional (registro en pantalla)"
    ],
    tags: ["emisividad-ajustable", "uni-t", "ut300s", "pro"],
    articleSource: "Top 6 Termómetros Industriales Destacados 2025"
  },
  {
    id: "fluke-62-max",
    name: "Fluke 62 MAX - Termómetro Infrarrojo Industrial",
    description: "Pirómetro robusto diseñado para entornos industriales hostiles: precisión, repetibilidad y construcción de alta durabilidad (IP54, resistencia a caídas). Rango profesional y emisividad ajustable.",
    category: "Instrumentos",
    subcategory: "Termómetros",
    brand: "Fluke",
    price: "Consultar precio",
    rating: 4.7,
    reviews: 23,
    image: "/images/products/termometros/fluke-62-max.webp",
    amazonUrl: "https://mercadolibre.com/sec/29G733y",
    features: [
      "Rango de medición típ. -30°C a 500°C",
      "Emisividad ajustable",
      "Protección IP54 y resistencia a caídas (3 m)",
      "Alta precisión y repetibilidad de marca Fluke",
      "Funciones profesionales: alarmas Hi/Lo, ergonomía compacta"
    ],
    tags: ["fluke", "industrial", "IP54", "emisividad-ajustable"],
    articleSource: "Top 6 Termómetros Industriales Destacados 2025"
  },
  {
    id: "klein-ir07",
    name: "Klein Tools IR07 - Termómetro Híbrido IR/Sonda",
    description: "Termómetro híbrido de bolsillo que combina medición infrarroja y sonda de contacto desplegable; diseñado para técnicos HVAC, mantenimiento y Electricismo con requerimientos de portabilidad y versatilidad.",
    category: "Instrumentos",
    subcategory: "Termómetros",
    brand: "Klein Tools",
    price: "Consultar precio",
    rating: 4.7,
    reviews: 240,
    image: "/images/products/termometros/klein-ir07.webp",
    amazonUrl: "https://mercadolibre.com/sec/216huMe",
    features: [
      "2 en 1: medición IR + sonda de contacto desplegable",
      "Clasificación IP54 y resistencia a caídas de 2 m",
      "Relación D:S 10:1",
      "Cálculo de temperatura diferencial (T1‑T2)",
      "Formato de bolsillo específico para HVAC"
    ],
    tags: ["hybrid", "IR+sonda", "klein-tools", "HVAC"],
    articleSource: "Top 6 Termómetros Industriales Destacados 2025"
  },
  {
    id: "fluke-51-ii",
    name: "Fluke 51 II - Termómetro Digital de Contacto (Termopares)",
    description: "Termómetro de contacto de referencia para aplicaciones de laboratorio y control de calidad con precisión de nivel de laboratorio, compatibilidad con termopares J/K/T/E y larga autonomía de batería.",
    category: "Instrumentos",
    subcategory: "Termómetros",
    brand: "Fluke",
    price: "Consultar precio",
    rating: 4.8,
    reviews: 100,
    image: "/images/products/termometros/fluke-51-ii.webp",
    amazonUrl: "https://mercadolibre.com/sec/2p3xDDQ",
    features: [
      "Precisión de laboratorio: ±0.05% + 0.3°C",
      "Compatible con termopares tipo J, K, T y E",
      "Funda protectora absorbente de impactos",
      "Autonomía de batería típica ~1000 horas",
      "Diseño para aplicaciones críticas y calibración"
    ],
    tags: ["contacto", "termopares", "fluke-51ii", "laboratorio"],
    articleSource: "Top 6 Termómetros Industriales Destacados 2025"
  },

  // Selladores Industriales
   {
    id: "sika-sikaflex-1a-purform",
    name: "Sika Sikaflex-1a Purform",
    description: "Sellador poliuretano elástico monocomponente que cura con la humedad. Tecnología Purform que reduce diisocianatos y ofrece alto desempeño en juntas estructurales y aplicaciones de agua potable.",
    category: "Construcción",
    subcategory: "Selladores",
    brand: "Sika",
    price: "Consultar precio",
    rating: 4.8,
    reviews: 100,
    image: "/images/products/selladores/sika-sikaflex-1a-purform.webp",
    amazonUrl: "https://mercadolibre.com/sec/144sYAn",
    features: [
      "Monocomponente poliuretano que cura con humedad",
      "Tecnología Purform (diisocianato monomérico < 0.1%)",
      "Capacidad de movimiento ±35% (ASTM C719)",
      "Elongación a la rotura ~800%",
      "Dureza Shore A ~50 y tiempo de curado ~3 mm/24h",
      "Certificación NSF/ANSI 61 para agua potable"
    ],
    tags: ["poliuretano", "purform", "nsf-61", "juntas-estructurales", "alto-desempeño"],
    articleSource: "Top 6 Selladores Destacados del Mercado Mexicano 2025"
  },
  {
    id: "loctite-si-596-rtv-rojo",
    name: "Loctite SI 596 RTV Rojo",
    description: "Silicona acética (RTV) monocomponente formulada para altas temperaturas; ideal para sellado de motores, bombas, cajas de engranajes y hornos industriales.",
    category: "Construcción",
    subcategory: "Selladores",
    brand: "Loctite",
    price: "Consultar precio",
    rating: 4.7,
    reviews: 85,
    image: "/images/products/selladores/loctite-si-596-rtv-rojo.webp",
    amazonUrl: "https://mercadolibre.com/sec/1Lo35Ha",
    features: [
      "Resistencia térmica: servicio continuo hasta 260°C, picos intermitentes hasta 316°C",
      "Curado acético (olor a vinagre)",
      "Resistente a aceites y fluidos automotrices",
      "Consistencia tixotrópica (no escurre)",
      "Cumple especificación militar Mil-A-46106A"
    ],
    tags: ["rtv", "alta-temperatura", "mil-a-46106a", "silicona-acética"],
    articleSource: "Top 6 Selladores Destacados del Mercado Mexicano 2025"
  },
  {
    id: "sika-anchorfix-2-tropical",
    name: "Sika AnchorFix-2+ Tropical",
    description: "Adhesivo de anclaje de dos componentes a base de resina epoxi-acrilato, formulado para curado óptimo en climas cálidos; indicado para anclajes estructurales y fijación de maquinaria pesada.",
    category: "Construcción",
    subcategory: "Selladores",
    brand: "Sika",
    price: "Consultar precio",
    rating: 5.0,
    reviews: 45,
    image: "/images/products/selladores/sika-anchorfix-2-tropical.webp",
    amazonUrl: "https://mercadolibre.com/sec/2Zz4qFv",
    features: [
      "Adhesivo epoxi-acrilato bicomponente (sin estireno/solventes)",
      "Curado funcional rápido (resistencia en ~40 min a 25°C)",
      "Apto para concreto fisurado y no fisurado y mampostería",
      "Consistencia tixotrópica y cartucho automezclable"
    ],
    tags: ["anclaje", "epoxi-acrilato", "bicomponente", "tropical"],
    articleSource: "Top 6 Selladores Destacados del Mercado Mexicano 2025"
  },
  {
    id: "dap-alex-plus",
    name: "DAP Alex Plus (Acrílico con Silicona)",
    description: "Sellador látex acrílico mejorado con aditivos de silicona: pintable rápidamente, fácil de aplicar y limpiar. Ideal para juntas interiores, marcos y molduras.",
    category: "Construcción",
    subcategory: "Selladores",
    brand: "DAP",
    price: "Consultar precio",
    rating: 4.1,
    reviews: 880,
    image: "/images/products/selladores/dap-alex-plus.webp",
    amazonUrl: "https://mercadolibre.com/sec/1tjE5LE",
    features: [
      "Látex acrílico con aditivo de silicona para mayor flexibilidad",
      "Pintable en ~30 minutos con pinturas látex/aceite",
      "Fácil aplicación, alisado y limpieza con agua",
      "Menor encogimiento que acrílicos puros"
    ],
    tags: ["acrílico", "pintable", "dap-alex-plus", "acabado-rapido"],
    articleSource: "Top 6 Selladores Destacados del Mercado Mexicano 2025"
  },
  {
    id: "blanc-tekbond-poliuretano-310ml",
    name: "Sellador Poliuretano 310ml Blanc Tekbond (DOWSIL 732 antes)",
    description: "Silicona/RTV de curado acético un componente estándar industrial (DOW/DOWSIL history). Usado ampliamente en industrias alimentaria y de procesamiento por su certificación para contacto incidental con alimentos.",
    category: "Construcción",
    subcategory: "Selladores",
    brand: "Tekbond / DOW",
    price: "Consultar precio",
    rating: 4.8,
    reviews: 0,
    image: "/images/products/selladores/tekbond-poliuretano-310ml.webp",
    amazonUrl: "https://mercadolibre.com/sec/1uqNhFp",
    features: [
      "Curado acético (RTV) monocomponente",
      "Cumple FDA 21 CFR 177.2600 (contacto incidental con alimentos)",
      "Rango de temperatura: -45°C a +180°C",
      "Dureza Shore A ~25 (flexible)",
      "Cumple MIL-A-46106 en algunas formulaciones"
    ],
    tags: ["rtv", "fda", "industrial", "tekbond", "dowsil"],
    articleSource: "Top 6 Selladores Destacados del Mercado Mexicano 2025"
  },
  {
    id: "pennsylvania-duretan",
    name: "Pennsylvania Duretán",
    description: "Sellador de poliuretano monocomponente, muy popular en México por su disponibilidad y buena relación calidad-precio; apto para juntas en construcción, pisos industriales y losas.",
    category: "Construcción",
    subcategory: "Selladores",
    brand: "Pennsylvania",
    price: "Consultar precio",
    rating: 4.8,
    reviews: 0,
    image: "/images/products/selladores/pennsylvania-duretan.webp",
    amazonUrl: "https://mercadolibre.com/sec/2mfa3UR",
    features: [
      "Poliuretano monocomponente para juntas verticales y horizontales",
      "Pintable para acabados estéticos",
      "Disponible en múltiples colores y formatos (300ml, 600ml)",
      "Buena durabilidad y relación calidad-precio"
    ],
    tags: ["poliuretano", "local", "pennsylvania", "300ml", "600ml"],
    articleSource: "Top 6 Selladores Destacados del Mercado Mexicano 2025"
  }



  
];

const categories = ["Todas", "Herramientas", "EPP", "Instrumentos", "Seguridad"];
const sortOptions = [
  { value: "name", label: "Nombre A-Z" },
  { value: "rating", label: "Mejor calificados" },
  { value: "reviews", label: "Más reseñas" },
  { value: "category", label: "Categoría" }
];

export default function CatalogoPage() {
  const [mounted, setMounted] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todas');
  const [sortBy, setSortBy] = useState('name');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filteredProducts, setFilteredProducts] = useState(productCatalog);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Track page view - disabled temporarily
  // useEffect(() => {
  //   const pageId = generateTrackingId('page', 'catalogo');
  //   trackEvent('ViewContent', {
  //     content_type: 'page',
  //     content_ids: [pageId],
  //     content_name: 'Catálogo de Productos',
  //     content_category: 'catalog'
  //   });
  // }, []);

  // Filter and sort products
  useEffect(() => {
    let filtered = productCatalog;

    // Apply category filter
    if (selectedCategory !== 'Todas') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Apply sorting
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating;
        case 'reviews':
          return b.reviews - a.reviews;
        case 'category':
          return a.category.localeCompare(b.category);
        default:
          return a.name.localeCompare(b.name);
      }
    });

    setFilteredProducts(filtered);
  }, [searchTerm, selectedCategory, sortBy]);

  const handleProductClick = (product: Product) => {
    // trackInteraction('product_click', product.name, 'catalog');
    console.log('Product clicked:', product.name);
  };

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-2xl">Cargando catálogo...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-16 relative overflow-hidden">
        {/* Static background pattern */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 text-xl opacity-10">🛠️</div>
          <div className="absolute top-20 right-20 text-xl opacity-15">🔧</div>
          <div className="absolute bottom-20 left-20 text-xl opacity-10">🦺</div>
          <div className="absolute bottom-10 right-10 text-xl opacity-15">📊</div>
          <div className="absolute top-1/2 left-1/4 text-xl opacity-10">🛡️</div>
          <div className="absolute top-1/3 right-1/3 text-xl opacity-15">⚙️</div>
          <div className="absolute bottom-1/3 left-1/2 text-xl opacity-10">🔩</div>
          <div className="absolute top-2/3 right-1/4 text-xl opacity-15">🧰</div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Badge className="mb-4 bg-blue-600/30 text-blue-100 border-blue-400/50">
              Catálogo Completo
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              Catálogo de Productos Industriales
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Descubre {productCatalog.length} productos cuidadosamente seleccionados y reseñados en nuestros 
              artículos especializados. Solo productos reales con enlaces verificados de nuestros reviews.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-white shadow-sm border-b">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Buscar productos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-full"
              />
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="whitespace-nowrap"
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Sort and View Options */}
            <div className="flex gap-4 items-center">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 border rounded-md text-sm"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>

              <div className="flex gap-1 border rounded-md">
                <Button
                  variant={viewMode === 'grid' ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                >
                  <Grid3X3 className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode('list')}
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Results count */}
          <div className="mt-4 text-sm text-gray-600">
            Mostrando {filteredProducts.length} de {productCatalog.length} productos
            {selectedCategory !== 'Todas' && ` en ${selectedCategory}`}
            {searchTerm && ` que coinciden con "${searchTerm}"`}
          </div>
        </div>
      </section>

      {/* Products Grid/List */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No se encontraron productos</h3>
              <p className="text-gray-600 mb-6">
                Intenta ajustar los filtros o cambiar el término de búsqueda
              </p>
              <Button onClick={() => {
                setSearchTerm('');
                setSelectedCategory('Todas');
              }}>
                Limpiar filtros
              </Button>
            </div>
          ) : (
            <div className={
              viewMode === 'grid' 
                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
                : "space-y-6"
            }>
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className={viewMode === 'list' ? 'w-full' : ''}
                >
                  {viewMode === 'grid' ? (
                    // Grid View
                    <Card className="h-full hover:shadow-xl transition-all duration-300 border-gray-200">
                      <div className="relative overflow-hidden">
                        <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                          <div className="text-6xl">
                            {product.category === 'Herramientas' && '🔧'}
                            {product.category === 'EPP' && '🦺'}
                            {product.category === 'Instrumentos' && '📊'}
                            {product.category === 'Seguridad' && '🛡️'}
                          </div>
                        </div>
                        <Badge className="absolute top-2 right-2 bg-blue-600">
                          {product.category}
                        </Badge>
                      </div>
                      
                      <CardHeader className="pb-2">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <CardTitle className="text-lg line-clamp-2 leading-tight">
                              {product.name}
                            </CardTitle>
                            <p className="text-sm text-gray-600 mt-1">{product.brand}</p>
                          </div>
                        </div>
                      </CardHeader>
                      
                      <CardContent className="pt-0">
                        <CardDescription className="line-clamp-2 mb-4">
                          {product.description}
                        </CardDescription>
                        
                        <div className="flex items-center gap-2 mb-4">
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < Math.floor(product.rating) 
                                    ? 'text-yellow-400 fill-current' 
                                    : 'text-gray-300'
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-sm font-medium">{product.rating}</span>
                          <span className="text-sm text-gray-500">({product.reviews})</span>
                        </div>

                        <div className="mb-4">
                          <p className="text-xs text-gray-500 mb-1">Fuente:</p>
                          <Badge variant="outline" className="text-xs">
                            {product.articleSource}
                          </Badge>
                        </div>
                        
                        <Button 
                          asChild 
                          className="w-full"
                          onClick={() => handleProductClick(product)}
                        >
                          <a href={product.amazonUrl} target="_blank" rel="noopener noreferrer">
                            <ShoppingBag className="w-4 h-4 mr-2" />
                            Ver Producto
                            <ExternalLink className="w-4 h-4 ml-2" />
                          </a>
                        </Button>
                      </CardContent>
                    </Card>
                  ) : (
                    // List View
                    <Card className="hover:shadow-lg transition-all duration-300">
                      <div className="flex p-6">
                        <div className="w-32 h-32 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
                          <div className="text-4xl">
                            {product.category === 'Herramientas' && '🔧'}
                            {product.category === 'EPP' && '🦺'}
                            {product.category === 'Instrumentos' && '📊'}
                            {product.category === 'Seguridad' && '🛡️'}
                          </div>
                        </div>
                        
                        <div className="ml-6 flex-1">
                          <div className="flex items-start justify-between">
                            <div>
                              <div className="flex items-center gap-2 mb-2">
                                <Badge className="bg-blue-600">{product.category}</Badge>
                                <span className="text-sm text-gray-600">{product.brand}</span>
                              </div>
                              <h3 className="text-xl font-bold text-gray-900 mb-2">
                                {product.name}
                              </h3>
                              <p className="text-gray-600 mb-4 line-clamp-2">
                                {product.description}
                              </p>
                            </div>
                            
                            <Button 
                              asChild 
                              className="ml-4"
                              onClick={() => handleProductClick(product)}
                            >
                              <a href={product.amazonUrl} target="_blank" rel="noopener noreferrer">
                                Ver Producto
                                <ExternalLink className="w-4 h-4 ml-2" />
                              </a>
                            </Button>
                          </div>
                          
                          <div className="flex items-center gap-4 mb-3">
                            <div className="flex items-center gap-1">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-4 h-4 ${
                                    i < Math.floor(product.rating) 
                                      ? 'text-yellow-400 fill-current' 
                                      : 'text-gray-300'
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="font-medium">{product.rating}</span>
                            <span className="text-gray-500">({product.reviews} reseñas)</span>
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="flex flex-wrap gap-1">
                              {product.tags.slice(0, 3).map((tag) => (
                                <Badge key={tag} variant="secondary" className="text-xs">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                            <Badge variant="outline" className="text-xs">
                              {product.articleSource}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </Card>
                  )}
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-4">
              ¿Buscas más información sobre estos productos?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Lee nuestros artículos detallados con reseñas, comparativas y guías de compra 
              para tomar la mejor decisión.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
                <Link href="/blog">
                  Leer Artículos del Blog
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-blue-900 hover:bg-white hover:text-blue-900">
                <Link href="/guias">
                  Ver Guías Técnicas
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}