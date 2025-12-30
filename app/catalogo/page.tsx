'use client';

import { useState, useEffect, useMemo, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useScroll, useInView } from 'framer-motion';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Search, ShoppingBag, Star, ExternalLink, Filter, Grid3X3, List, ChevronDown, Heart, Sparkles, TrendingUp, Award, Shield, X, SlidersHorizontal, Users, ChevronLeft, ChevronRight, Share2, Eye } from 'lucide-react';
// import { trackEvent, trackInteraction, generateTrackingId } from '@/lib/meta-pixel';
import Link from 'next/link';
import Image from 'next/image';

// Datos fijos para las animaciones de partículas
const CATALOG_PARTICLES = [
  { left: 12.5, top: 20.3, delay: 0.4, duration: 6.8 },
  { left: 88.7, top: 65.1, delay: 1.1, duration: 5.3 },
  { left: 35.2, top: 18.9, delay: 0.7, duration: 7.2 },
  { left: 75.8, top: 82.4, delay: 1.6, duration: 4.7 },
  { left: 18.9, top: 55.7, delay: 0.2, duration: 6.1 },
  { left: 92.3, top: 28.8, delay: 1.9, duration: 5.8 },
  { left: 42.1, top: 78.2, delay: 0.9, duration: 6.5 },
  { left: 68.4, top: 15.3, delay: 1.3, duration: 5.9 },
  { left: 8.7, top: 68.9, delay: 0.5, duration: 6.7 },
  { left: 85.6, top: 42.1, delay: 1.7, duration: 5.1 },
  { left: 58.3, top: 85.6, delay: 0.8, duration: 6.3 },
  { left: 25.7, top: 12.8, delay: 1.2, duration: 5.6 },
];

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
    image: "/images/catalogo/kit-herramientas-82.webp",
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
    image: "/images/catalogo/llaves-pretul.webp",
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
    image: "/images/catalogo/herramientas-218.webp",
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
    image: "/images/catalogo/destornilladores-precision.webp",
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
    image: "/images/catalogo/kit-herramientas-82.webp",
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
    image: "/images/catalogo/herramientas-218.webp",
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
    image: "/images/catalogo/botiquin-industrial.webp",
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


  // TRABAJOS EN ALTURA
  {
  "id": "jostein-jth9420-6m",
  "name": "Línea de Vida Auto Retráctil 6m Jostein JTH-9420",
  "description": "Cable retráctil de 20 pies (6 m) con cable de acero galvanizado y carcasa termoplástica. Incluye sistema interno de absorción de impactos y conector giratorio con indicador de caída.",
  "category": "Trabajos en Alturas",
  "subcategory": "Retráctiles",
  "brand": "Jostein",
  "price": "Consultar precio",
  "rating": 5.0,
  "reviews": 2,
  "image": "/images/catalogo/linea-vida-jostein/linea-vida-jostein.webp",
  "amazonUrl": "https://mercadolibre.com/sec/2iso2WJ",
  "features": [
    "Cable de acero galvanizado de 3/16\" (4.8 mm)",
    "Longitud máxima: 6 metros (20 pies)",
    "Capacidad de carga: 140 kg (310 lbs)",
    "Certificación ANSI Z359.14-2021 Clase 1",
    "Fuerza máxima de detención: 616.88 kg"
  ],
  "tags": ["jostein", "retráctil", "acero", "seguridad industrial", "alturas", "JTH-9420"],
  "articleSource": "Top Equipos de Seguridad 2025"
},
 {
    "id": "urrea-uslv2-7ft",
    "name": "Línea Vida Auto Retráctil 7ft Urrea USLV2",
    "description": "Línea de vida auto retráctil de 7 pies (2.1m) con banda dynema, diseñada para limitar la distancia de caída y la fuerza de detención.",
    "category": "Trabajos en Alturas",
    "subcategory": "Retráctiles",
    "brand": "Urrea",
    "price": "Consultar precio",
    "rating": 5.0,
    "reviews": 4,
    "image": "/images/catalogo/linea-vida-urrea/linea-vida-urreaa.webp",
    "amazonUrl": "https://mercadolibre.com/sec/14u4hhR",
    "features": [
      "Banda dynema de 1 pulgada",
      "Capacidad total: 140 kg",
      "Desplazamiento máximo: 60 cm",
      "Carcasa resistente a impactos",
      "Longitud: 7 pies (2.1 metros)"
    ],
    "tags": ["urrea", "retráctil", "dynema", "seguridad industrial", "alturas"],
    "articleSource": "Top Equipos de Seguridad 2025"
  },
  {
    "id": "lica-lrl-6m",
    "name": "Línea De Vida Retráctil 6 Metros Lica Certificada",
    "description": "Dispositivo retráctil con cable de 6 metros y carcasa de ABS de alta resistencia. Certificación CE EN360-2002.",
    "category": "Trabajos en Alturas",
    "subcategory": "Retráctiles",
    "brand": "Lica",
    "price": "Consultar precio",
    "rating": 5.0,
    "reviews": 4,
    "image": "/images/catalogo/linea-vida-retractil-Lica/linea-vida-retractil-Lica.webp",
    "amazonUrl": "https://mercadolibre.com/sec/2RT9Ek7",
    "features": [
      "Longitud de trabajo: 6 metros",
      "Certificación CE EN360-2002",
      "Fuerza máxima de detención: 4Kn",
      "Carcasa de alta resistencia (ABS)",
      "Resistencia estática: 12kN"
    ],
    "tags": ["lica", "6 metros", "certificada", "abs", "trabajo en alturas"],
    "articleSource": "Top Equipos de Seguridad 2025"
  },
  {
    "id": "arnes-kit-doble-gancho",
    "name": "Kit Arnés Seguridad Contra Caídas con Amortiguador y Doble Gancho",
    "description": "Arnés de cuerpo completo de 5 puntos con línea de vida de doble gancho y amortiguador, ideal para construcción y escalada.",
    "category": "Trabajos en Alturas",
    "subcategory": "Arneses y Kits",
    "brand": "Genérica",
    "price": "Consultar precio",
    "rating": 4.5,
    "reviews": 75,
    "image": "/images/catalogo/arnes-seguridad-gancho-doble/arnes-seguridad-gancho-doble.webp",
    "amazonUrl": "https://mercadolibre.com/sec/23nX4na",
    "features": [
      "Sistema de ajuste de 5 puntos",
      "Incluye línea de vida con doble gancho",
      "Amortiguador de impacto integrado",
      "Material: Poliéster y aleación",
      "Diseño ergonómico y ligero"
    ],
    "tags": ["arnés", "kit alturas", "doble gancho", "construcción", "seguridad"],
    "articleSource": "Top Equipos de Seguridad 2025"
  },
  {
    "id": "freno-anticaidas-acero-3-8",
    "name": "Dispositivo Freno Anticaídas para Línea de Vida Vertical 3/8\"",
    "description": "Carrito freno de acero aleado para cable de 9.5mm. Bloqueo automático inercial para líneas de vida verticales.",
    "category": "Trabajos en Alturas",
    "subcategory": "Accesorios y Anclajes",
    "brand": "Genérica",
    "price": "Consultar precio",
    "rating": 0.0,
    "reviews": 0,
    "image": "/images/catalogo/linea-vida-carrito-freno-anticaidas/linea-vida-carrito-freno-anticaidas.webp",
    "amazonUrl": "https://mercadolibre.com/sec/1XdBFbd",
    "features": [
      "Material: Acero aleado de alta resistencia",
      "Compatible con cable de acero de 9.5mm (3/8\")",
      "Incluye mosquetón ovalado de 25kN",
      "Sistema de bloqueo automático por gravedad",
      "Carga longitudinal mosquetón: 2500 kg"
    ],
    "tags": ["freno cable", "carrito", "línea vertical", "acero", "anticaídas"],
    "articleSource": "Top Equipos de Seguridad 2025"
  },
  {
    id: "alto-a1p-arnes",
    name: "Alto A1P Arnés Contra Caídas",
    description: "Equipo ligero diseñado específicamente para contrarrestar caídas, con 1 anillo dorsal forjado tipo D.",
    category: "Trabajos en Alturas",
    subcategory: "Arneses",
    brand: "Alto",
    price: "Consultar precio",
    rating: 5.0,
    reviews: 1,
    image: "/images/catalogo/arnes-alto/arnes-alto.webp",
    amazonUrl: "https://mercadolibre.com/sec/2wVCv5M",
    features: [
      "Material: Poliéster de alta resistencia",
      "1 anillo dorsal tipo D",
      "Certificación ANSI Z359.11-2021",
      "Diseño ligero y confortable",
      "Distribución de carga de impacto"
    ],
    tags: ["seguridad", "arnés", "trabajo en alturas", "ligero"],
    articleSource: "Top Equipos de Seguridad 2025"
  },
  {
    id: "jostein-jth-a001",
    name: "Jostein JTH-A001 Punto Fijo de Anclaje",
    description: "Punto fijo de 1.20 metros hecho de poliéster y aro en D de acero con aleación de aluminio.",
    category: "Trabajos en Alturas",
    subcategory: "Puntos de Anclaje",
    brand: "Jostein",
    price: "Consultar precio",
    rating: 4.9,
    reviews: 89,
    image: "/images/catalogo/punto-fijo-jostein/PuntoAnclajeOriginal.webp",
    amazonUrl: "https://mercadolibre.com/sec/19fNskH",
    features: [
      "Longitud: 1.20 metros",
      "Material: Poliéster y acero/aluminio",
      "Certificación Z359.1-2007",
      "Aro en D en un extremo",
      "Vuelta cosida resistente"
    ],
    tags: ["anclaje", "seguridad", "construcción", "certificado"],
    articleSource: "Top Equipos de Seguridad 2025"
  },
  {
  "id": "argos-8730030-posicionamiento",
  "name": "Cable de Posicionamiento Argos 8730030 2.2m",
  "description": "Cable de posicionamiento de 2.2 metros fabricado en poliéster tubular ajustable. Diseñado para sujeción y prevención de caídas, cuenta con ganchos de acero forjado con mecanismo de doble bloqueo.",
  "category": "Trabajos en Alturas",
  "subcategory": "Cables de Posicionamiento",
  "brand": "Argos",
  "price": "Consultar precio",
  "rating": 4.6,
  "reviews": 47,
  "image": "/images/catalogo/argos/argos-8730030.webp",
  "amazonUrl": "https://mercadolibre.com/sec/33zDDGg",
  "features": [
    "Resistencia a la tensión: 2,268 kgf",
    "Longitud total: 2.2 m (7.2 ft)",
    "Material: Poliéster tubular de 17mm",
    "Ganchos de acero forjado con doble bloqueo",
    "Cumple normas ANSI Z359.1-2007 y CSA"
  ],
  "tags": ["argos", "posicionamiento", "poliéster", "seguridad industrial", "alturas", "8730030"],
  "articleSource": "Top Equipos de Seguridad 2025"
},
{
  "id": "jostein-jth-c2p-185m",
  "name": "Línea de Vida con Amortiguador 1.85m Jostein JTH-C2P",
  "description": "Línea de vida de poliéster de 1.85 metros diseñada para protección anticaídas. Cuenta con un sistema de absorción de impacto mediante desgarre progresivo y dos ganchos de alta resistencia.",
  "category": "Trabajos en Alturas",
  "subcategory": "Líneas de Vida con Amortiguador",
  "brand": "Jostein",
  "price": "Consultar precio",
  "rating": 4.5,
  "reviews": 42,
  "image": "/images/catalogo/jostein/jth-c2p.webp",
  "amazonUrl": "https://mercadolibre.com/sec/31Dy8X4",
  "features": [
    "Longitud total: 1.85 metros",
    "Material: Poliéster de alta visibilidad",
    "Incluye 2 ganchos con resistencia de 32 KN",
    "Sistema de absorción de impacto por desgarre progresivo",
    "Diseño de colores sólidos visibles a distancia"
  ],
  "tags": ["jostein", "línea de vida", "amortiguador", "poliéster", "seguridad industrial", "alturas", "JTH-C2P"],
  "articleSource": "Top Equipos de Seguridad 2025"
},
{
  "id": "truper-cab-5488-18a-posicionamiento",
  "name": "Cable de Posicionamiento Poliéster Truper CAB-5488-18-A",
  "description": "Cable de posicionamiento fabricado en 100% poliéster color naranja de alta visibilidad. Cuenta con ganchos de acero forjado con doble bloqueo para mayor seguridad. Ideal para trabajos de posicionamiento (no apto para escalar).",
  "category": "Trabajos en Alturas",
  "subcategory": "Cables de Posicionamiento",
  "brand": "Truper",
  "price": "Consultar precio",
  "rating": 5.0,
  "reviews": 1,
  "image": "/images/catalogo/truper/cab-5488-18-a.webp",
  "amazonUrl": "https://mercadolibre.com/sec/2JEeNNW",
  "features": [
    "Resistencia a la tensión: 5,000 lb (2,268 kg)",
    "Material: 100% Poliéster de 30 mm de ancho",
    "Ganchos de acero forjado con doble bloqueo",
    "Certificación ANSI Z359.3",
    "Color naranja de alta visibilidad"
  ],
  "tags": ["truper", "posicionamiento", "poliéster", "seguridad industrial", "alturas", "CAB-5488-18-A"],
  "articleSource": "Top Equipos de Seguridad 2025"
},
{
  "id": "alto-c92y-std-cadena",
  "name": "Eslinga de Posicionamiento de Cadena 60cm Alto C92Y-STD",
  "description": "Elemento de posicionamiento de doble brazo fabricado en cadena de acero forjado. Diseñado para ofrecer alta durabilidad y resistencia al corte, permitiendo al usuario trabajar con manos libres.",
  "category": "Trabajos en Alturas",
  "subcategory": "Eslingas de Posicionamiento",
  "brand": "Alto",
  "price": "Consultar precio",
  "rating": 5.0,
  "reviews": 1,
  "image": "/images/catalogo/alto/c92y-std.webp",
  "amazonUrl": "https://mercadolibre.com/sec/1X9DxZ7",
  "features": [
    "Material: Cadena de acero forjado resistente al corte",
    "Diseño de doble brazo (tipo Y) para anclaje en 2 puntos",
    "2 ganchos pequeños (apertura 21 mm)",
    "1 gancho grande para conexión al arnés (apertura 60 mm)",
    "Función exclusiva de posicionamiento (no es un sistema anticaídas)"
  ],
  "tags": ["alto", "cadena", "posicionamiento", "acero", "seguridad industrial", "alturas", "C92Y-STD"],
  "articleSource": "Top Equipos de Seguridad 2025"
},
{
  "id": "generica-retractil-5m-doble-bloqueo",
  "name": "Línea de Vida Retráctil 5m con Doble Bloqueo (Genérica)",
  "description": "Dispositivo anticaídas retráctil de 5 metros con sistema de frenado rápido y doble bloqueo. Cuenta con cable de acero grado aeronáutico ignífugo y carcasa doble (acero aleado y plástico) para mayor durabilidad.",
  "category": "Trabajos en Alturas",
  "subcategory": "Retráctiles",
  "brand": "Genérica",
  "price": "Consultar precio",
  "rating": 5.0,
  "reviews": 1,
  "image": "/images/catalogo/generica/retractil-5m-doble-bloqueo.webp",
  "amazonUrl": "https://mercadolibre.com/sec/1mN8r6P",
  "features": [
    "Longitud del cable: 5 metros (16.4 pies)",
    "Capacidad de carga: 150 kg",
    "Cable de acero grado aeronáutico (ignífugo hasta 200°C)",
    "Mecanismo de doble bloqueo para frenado rápido",
    "Carcasa doble: Acero aleado y plástico resistente"
  ],
  "tags": ["genérica", "retráctil", "acero", "seguridad industrial", "alturas", "doble bloqueo"],
  "articleSource": "Top Equipos de Seguridad 2025"
},
{
  "id": "generica-linea-vida-elastica-154m",
  "name": "Línea de Vida Elástica con Amortiguador 1.54m (Genérica)",
  "description": "Línea de vida elástica con paquete amortiguador de energía diseñado para reducir el impacto de caídas. Fabricada en poliéster y acero, ideal para construcción en altura y trabajos aéreos.",
  "category": "Trabajos en Alturas",
  "subcategory": "Líneas de Vida con Amortiguador",
  "brand": "Genérica",
  "price": "Consultar precio",
  "rating": 5.0,
  "reviews": 1,
  "image": "/images/catalogo/generica-linea-vida/linea-vida-elastica-154m.webp",
  "amazonUrl": "https://mercadolibre.com/sec/2E949xz",
  "features": [
    "Longitud extendida: 1.54 metros (5.1 ft)",
    "Resistencia a la tensión: 25 KN",
    "Incluye paquete amortiguador de energía",
    "Material: Poliéster, acero y EVA",
    "Hebilla de acero aleado en forma de O con bloqueo"
  ],
  "tags": ["genérica", "línea de vida", "amortiguador", "elástica", "seguridad industrial", "alturas", "25KN"],
  "articleSource": "Top Equipos de Seguridad 2025"
},
{
  "id": "sterkman-ask-la2g-acero",
  "name": "Línea de Vida Doble de Acero con Amortiguador Sterkman ASK-LA2G",
  "description": "Línea de vida doble fabricada en cable de acero con ganchos grandes y amortiguador de impactos. Ideal para trabajos de soldadura y torres de telecomunicaciones. Producto hecho en México con fabricación 2025.",
  "category": "Trabajos en Alturas",
  "subcategory": "Líneas de Vida con Amortiguador",
  "brand": "Sterkman",
  "price": "Consultar precio",
  "rating": 5.0,
  "reviews": 1,
  "image": "/images/catalogo/sterkman/ask-la2g.webp",
  "amazonUrl": "https://mercadolibre.com/sec/2Wk6SYr",
  "features": [
    "Material: Cable de acero (ideal para soldadura)",
    "Longitud: 1.83 metros",
    "Doble brazo con ganchos grandes recubiertos de Zinc",
    "Incluye amortiguador de impactos",
    "Fabricación 2025 (Hecho en México) con etiquetas de inspección"
  ],
  "tags": ["sterkman", "línea de vida", "acero", "soldadura", "amortiguador", "ASK-LA2G", "mexico"],
  "articleSource": "Top Equipos de Seguridad 2025"
},
{
  "id": "generica-safety-harness-m",
  "name": "Arnés de Seguridad Safety Harness Talla M (Correas Gabinetes Móviles)",
  "description": "Arnés de seguridad modelo General fabricado en nailon de alta resistencia. Cuenta con 2 puntos de anclaje y certificación NBR, diseñado para ofrecer soporte en trabajos de altura.",
  "category": "Trabajos en Alturas",
  "subcategory": "Arneses de Seguridad",
  "brand": "Genérica",
  "price": "Consultar precio",
  "rating": 5.0,
  "reviews": 1,
  "image": "/images/catalogo/generica-correa/safety-harness-m.webp",
  "amazonUrl": "https://mercadolibre.com/sec/2t5VvXf",
  "features": [
    "Material: Nailon",
    "Cantidad de puntos de anclaje: 2",
    "Incluye línea de vida: Sí",
    "Certificación: NBR",
    "Talla: M (Ajuste Fix)"
  ],
  "tags": ["genérica", "arnés", "nailon", "seguridad industrial", "alturas", "safety harness"],
  "articleSource": "Top Equipos de Seguridad 2025"
},
{
  "id": "generica-tool-lanyard-2pack",
  "name": "Juego de 2 Cuerdas de Seguridad para Herramientas (Tool Lanyard)",
  "description": "Set de 2 correas elásticas ajustables para la sujeción de herramientas en altura. Diseñadas para prevenir la caída accidental de equipos (no apto para personas), con capacidad de carga de hasta 15 kg.",
  "category": "Trabajos en Alturas",
  "subcategory": "Sujeción de Herramientas",
  "brand": "Genérica",
  "price": "Consultar precio",
  "rating": 5.0,
  "reviews": 1,
  "image": "/images/catalogo/generica-correa-htas/tool-lanyard-orange.webp",
  "amazonUrl": "https://mercadolibre.com/sec/2651DzU",
  "features": [
    "Incluye: 2 correas de seguridad",
    "Capacidad de carga máxima: 15 kg",
    "Material: Nylon y poliéster resistente",
    "Diseño elástico y retráctil",
    "Color naranja de alta visibilidad"
  ],
  "tags": ["genérica", "porta herramientas", "tool lanyard", "seguridad industrial", "anticaída objetos"],
  "articleSource": "Top Equipos de Seguridad 2025"
},
{
  "id": "generica-clpb1-007-medio-cuerpo",
  "name": "Arnés de Medio Cuerpo para Escalada y Rescate CLPB1-007",
  "description": "Arnés de medio cuerpo fabricado en poliéster de alta resistencia engrosado. Diseño ergonómico que distribuye el peso, con hebillas de ajuste rápido. Ideal para montañismo, rescate y trabajos aéreos.",
  "category": "Trabajos en Alturas",
  "subcategory": "Arneses de Seguridad",
  "brand": "Genérica",
  "price": "Consultar precio",
  "rating": 5.0,
  "reviews": 22,
  "image": "/images/catalogo/generica-arnes/arnes-medio-cuerpo-clpb1-007.webp",
  "amazonUrl": "https://mercadolibre.com/sec/1ZVtcgw",
  "features": [
    "Material: Poliéster de alta resistencia",
    "Tensión de rotura: 2000 kg (25 KN)",
    "Ajuste de cintura: 70-140 cm",
    "Ajuste de pierna: 50-70 cm",
    "Hebillas de aleación de aluminio con refuerzo multipunto"
  ],
  "tags": ["genérica", "arnés medio cuerpo", "escalada", "rescate", "poliéster", "seguridad industrial"],
  "articleSource": "Top Equipos de Seguridad 2025"
},
{
  "id": "generica-kc-0006-correas-carga",
  "name": "Correas Multifuncionales para Levantar Carga KC-0006",
  "description": "Correas de diseño ergonómico diseñadas para facilitar el movimiento y levantamiento de objetos pesados como muebles y electrodomésticos. Ayudan a reducir la tensión en la espalda y mejorar la técnica de carga.",
  "category": "Ergonomía y Carga",
  "subcategory": "Correas de Mudanza",
  "brand": "Genérica",
  "price": "Consultar precio",
  "rating": 5.0,
  "reviews": 2,
  "image": "/images/catalogo/correas-para-mover/correas-para-mover.webp",
  "amazonUrl": "https://mercadolibre.com/sec/14kf5qS",
  "features": [
    "Diseño multifuncional para mover objetos pesados",
    "Talla única ajustable",
    "Color naranja de alta visibilidad",
    "Material resistente para carga",
    "Facilita la técnica de levantamiento ergonómico"
  ],
  "tags": ["genérica", "correas de carga", "mudanza", "ergonomía", "levantamiento", "KC-0006"],
  "articleSource": "Top Equipos de Seguridad 2025"
},
{
  "id": "jostein-jth-a001-anclaje",
  "name": "Punto Fijo de Anclaje 1.20m Jostein JTH-A001",
  "description": "Conector de anclaje temporal (Tie-off) fabricado en cinta de poliéster de alta resistencia. Cuenta con un anillo en 'D' de acero con aleación de aluminio en un extremo y una vuelta cosida en el otro para una sujeción segura.",
  "category": "Trabajos en Alturas",
  "subcategory": "Puntos de Anclaje",
  "brand": "Jostein",
  "price": "Consultar precio",
  "rating": 4.9,
  "reviews": 35,
  "image": "/images/catalogo/punto-fijo-anclaje-seguridad-jostein-negro/punto-fijo-anclaje-seguridad-jostein-negro.webp",
  "amazonUrl": "https://mercadolibre.com/sec/19fNskH",
  "features": [
    "Longitud: 1.20 metros (Medida estándar)",
    "Material de la cinta: Poliéster reforzado",
    "Herraje: Anillo en 'D' de acero con aleación de aluminio",
    "Diseño: Anillo en D + Vuelta cosida resistente",
    "Función: Punto fijo anticaída / Anclaje temporal"
  ],
  "tags": ["jostein", "punto de anclaje", "tie off", "seguridad industrial", "alturas", "JTH-A001"],
  "articleSource": "Top Equipos de Seguridad 2025"
},
{
  "id": "surtek-anclaje-punto-fijo-argolla",
  "name": "Anclaje de Seguridad Punto Fijo con Argolla Surtek",
  "description": "Punto fijo de anclaje fabricado en cinta de nylon de alta resistencia a la abrasión, químicos y rayos UV. Equipado con un anillo en D de acero forjado para garantizar una conexión segura en trabajos de altura.",
  "category": "Trabajos en Alturas",
  "subcategory": "Puntos de Anclaje",
  "brand": "Surtek",
  "price": "Consultar precio",
  "rating": 0.0,
  "reviews": 0,
  "image": "/images/catalogo/anclaje-punto-fijo-surtek/anclaje-punto-fijo-surtek.webp",
  "amazonUrl": "https://mercadolibre.com/sec/1fR5ks7",
  "features": [
    "Material de cinta: Nylon resistente a abrasión y UV",
    "Herraje: Anillo D de acero forjado",
    "Medida de cinta: 1 3/4 pulgadas",
    "Cumple normas: ANSI A10.14 y ANSI Z359.1",
    "Garantía de fábrica: 1 año"
  ],
  "tags": ["surtek", "punto de anclaje", "nylon", "acero forjado", "seguridad industrial", "alturas"],
  "articleSource": "Top Equipos de Seguridad 2025"
},
{
  "id": "generica-anclaje-punto-fijo-reflejante-108m",
  "name": "Línea de Anclaje Punto Fijo Certificado Naranja con Reflejante 1.08m",
  "description": "Línea de anclaje de punto fijo (Tie-off) fabricada en cinta rígida de poliéster con acabado Teflón de 44mm. Diseñada para ajustarse a perfiles estructurales, limitar movimiento y conectar líneas de vida. Incluye herrajes de acero forjado.",
  "category": "Trabajos en Alturas",
  "subcategory": "Puntos de Anclaje",
  "brand": "Genérica",
  "price": "Consultar precio",
  "rating": 0.0,
  "reviews": 0,
  "image": "/images/catalogo/generica/anclaje-punto-fijo-reflejante.webp",
  "amazonUrl": "https://mercadolibre.com/sec/1AUweG7",
  "features": [
    "Longitud: 1.08 metros",
    "Material: Cinta de poliéster rígido con acabado Teflón (44mm)",
    "Herrajes: Argolla de acero forjado",
    "Color: Naranja con cinta reflejante para alta visibilidad",
    "Función: Ajuste a estructuras y limitación de movimiento"
  ],
  "tags": ["punto de anclaje", "tie off", "reflejante", "poliéster", "seguridad industrial", "telecomunicaciones"],
  "articleSource": "Top Equipos de Seguridad 2025"
},
{
  "id": "generica-cinturon-liniero-xl-azul",
  "name": "Cinturón de Seguridad para Liniero Certificado Talla XL Azul",
  "description": "Cinturón de seguridad para liniero con diseño ergonómico y almohadilla lumbar de espuma EVA transpirable. Incluye cinturón de barandilla (eslinga de posicionamiento) y bolsa de herramientas. Alta resistencia y confort para trabajos en postes y árboles.",
  "category": "Trabajos en Alturas",
  "subcategory": "Cinturones para Liniero",
  "brand": "Genérica",
  "price": "Consultar precio",
  "rating": 4.8,
  "reviews": 26,
  "image": "/images/catalogo/cinturon-liniero-xl-azul/cinturon-liniero-xl-azul.webp",
  "amazonUrl": "https://mercadolibre.com/sec/2ycPAi1",
  "features": [
    "Incluye: Cinturón, eslinga de posicionamiento y bolsa de herramientas",
    "Material: Poliéster resistente y hebillas de acero aleado",
    "Resistencia a la tensión: 22,540 N (5,000 lbs)",
    "Soporte lumbar ergonómico de espuma EVA y malla transpirable",
    "Ideal para electricistas, poda de árboles y construcción"
  ],
  "tags": ["liniero", "cinturón seguridad", "electricista", "posicionamiento", "azul", "XL", "ergonómico"],
  "articleSource": "Top Equipos de Seguridad 2025"
},
{
  "id": "generica-anclaje-punto-fijo-mosqueton",
  "name": "Línea de Anclaje Punto Fijo con Gancho Mosquetón",
  "description": "Línea de anclaje de punto fijo diseñada para telecomunicaciones y seguridad industrial. Cuenta con un gancho tipo mosquetón para una conexión rápida y segura a estructuras.",
  "category": "Trabajos en Alturas",
  "subcategory": "Puntos de Anclaje",
  "brand": "Genérica",
  "price": "Consultar precio",
  "rating": 5.0,
  "reviews": 2,
  "image": "/images/catalogo/anclaje-punto-fijo-mosqueton/anclaje-punto-fijo-mosqueton.webp",
  "amazonUrl": "https://mercadolibre.com/sec/22EDtmy",
  "features": [
    "Tipo: Punto de anclaje fijo (Tie-off)",
    "Conexión: Gancho tipo mosquetón",
    "Ideal para telecomunicaciones y seguridad industrial",
    "Diseño robusto para sujeción a estructuras"
  ],
  "tags": ["punto de anclaje", "mosquetón", "tie off", "seguridad industrial", "telecomunicaciones"],
  "articleSource": "Top Equipos de Seguridad 2025"
},
{
  "id": "generica-44038-bandola-1-4",
  "name": "Bandola Mosquetón de Acero 1/4\" para Cuerdas (Código 44038)",
  "description": "Bandola de acero al carbono con acabado en zinc para conexiones rápidas de cables y cuerdas. Diseñada para usos generales de carga ligera (NO apta para escalar ni seguridad humana).",
  "category": "Ferretería y Carga Ligera",
  "subcategory": "Mosquetones y Conectores",
  "brand": "Genérica",
  "price": "Consultar precio",
  "rating": 5.0,
  "reviews": 1,
  "image": "/images/catalogo/bandola-44038/bandola-44038.webp",
  "amazonUrl": "https://mercadolibre.com/sec/2ECxd1F",
  "features": [
    "Material: Acero al carbono con acabado en zinc",
    "Límite de carga: 120 Kg",
    "Medida: 1/4 pulgada (6 mm) x 2-1/2 pulgadas (64 mm)",
    "Sistema de cierre rápido",
    "ADVERTENCIA: No usar para escalar (No es EPP)"
  ],
  "tags": ["bandola", "mosquetón", "acero", "ferretería", "carga ligera", "44038"],
  "articleSource": "Top Equipos de Seguridad 2025"
},
{
  "id": "fiero-bma-1-4-bandola",
  "name": "Bandola Mosquetón de Acero 1/4\" Fiero BMA-1/4",
  "description": "Bandola mosquetón fabricada en acero al carbono con acabado en zinc resistente a la corrosión. Diseñada para conexiones rápidas e instantáneas de cables y cuerdas. Uso exclusivo para carga ligera (No apto para seguridad humana).",
  "category": "Ferretería y Carga Ligera",
  "subcategory": "Mosquetones y Conectores",
  "brand": "Fiero",
  "price": "Consultar precio",
  "rating": 5.0,
  "reviews": 2,
  "image": "/images/catalogo/fiero/bma-1-4.webp",
  "amazonUrl": "https://mercadolibre.com/sec/2bwPUP2",
  "features": [
    "Material: Acero al carbono con acabado en zinc",
    "Límite de carga: 120 Kg",
    "Dimensiones: 1/4\" (6 mm) de espesor x 2-1/2\" (64 mm) de largo",
    "Peso: 26 g",
    "Uso: Conexión de cables y cuerdas (No para escalada)"
  ],
  "tags": ["fiero", "mosquetón", "acero", "ferretería", "carga ligera", "BMA-1/4"],
  "articleSource": "Top Equipos de Seguridad 2025"
},
{
  "id": "generica-bandola-fija-25mm-50pz",
  "name": "Pack 50 Bandolas Gancho Fijo Metálico 25mm (#25)",
  "description": "Paquete de 50 ganchos fijos metálicos (bandolas) medida #25. Accesorios ligeros y resistentes, ideales para marroquinería, correas de bolsos, mochilas y cinturones.",
  "category": "Manufactura y Marroquinería",
  "subcategory": "Herrajes Metálicos",
  "brand": "Genérica",
  "price": "Consultar precio",
  "rating": 4.7,
  "reviews": 7,
  "image": "/images/catalogo/bandola-fija-25mm-pack50/bandola-fija-25mm-pack50.webp",
  "amazonUrl": "https://mercadolibre.com/sec/2FedBHa",
  "features": [
    "Contenido: 50 piezas",
    "Paso de cinta (Diámetro interno): 25.5 mm",
    "Largo externo: 48 mm",
    "Peso por pieza: 7.5 g (Ligero)",
    "Material: Metal / Acero y Latón",
    "Uso: Marroquinería y confección (No apto para carga pesada)"
  ],
  "tags": ["genérica", "bandola fija", "marroquinería", "herrajes", "costura", "25mm"],
  "articleSource": "Top Equipos de Seguridad 2025"
},
{
  "id": "generica-mosqueton-aluminio-85mm",
  "name": "Mosquetón de Aluminio 85mm Tipo D (Uso Ligero)",
  "description": "Mosquetón ligero fabricado en aleación de aluminio con acabado anodizado. Ideal para uso recreativo como llavero, sujeción de mochilas, botellas y camping. NO APTO para escalada ni seguridad industrial.",
  "category": "Camping y Accesorios",
  "subcategory": "Mosquetones Ligeros",
  "brand": "Genérica",
  "price": "Consultar precio",
  "rating": 5.0,
  "reviews": 2,
  "image": "/images/catalogo/mosqueton-aluminio-85mm/mosqueton-aluminio-85mm.webp",
  "amazonUrl": "https://mercadolibre.com/sec/13tNchK",
  "features": [
    "Material: Aleación de aluminio ligera (anodizado)",
    "Dimensiones: 85mm x 45mm",
    "Peso ultraligero: 22 gramos",
    "Uso: Llavero, mochilas, camping (Carga auxiliar)",
    "ADVERTENCIA: NO USAR PARA ESCALAR O SEGURIDAD"
  ],
  "tags": ["mosquetón", "aluminio", "camping", "llavero", "uso ligero", "no escalada"],
  "articleSource": "Top Equipos de Seguridad 2025"
},
{
  "id": "generica-clavijas-deck-rojo-10pz",
  "name": "Set 10 Clavijas de Anclaje para Deck Tipo Espina de Pez (Rojo)",
  "description": "Juego de 10 estacas de anclaje con diseño de espina de pez y resorte de compresión. Fabricadas en acero inoxidable, son ideales para fijar tiendas de campaña y toldos en plataformas de madera (decks) aprovechando los espacios entre tablas sin dañarlas.",
  "category": "Camping y Exteriores",
  "subcategory": "Estacas y Anclajes",
  "brand": "Genérica",
  "price": "Consultar precio",
  "rating": 5.0,
  "reviews": 2,
  "image": "/images/catalogo/clavijas-deck-rojo-10pz/clavijas-deck-rojo-10pz.webp",
  "amazonUrl": "https://mercadolibre.com/sec/1dwNppY",
  "features": [
    "Material: Acero inoxidable duradero",
    "Incluye: 10 anclajes + 10 mosquetones",
    "Diseño con resorte ajustable para grietas en madera",
    "Dimensiones: 7.6 cm x 3.4 cm (Compacto)",
    "Uso: Fijación en tarimas y decks (No daña la madera)"
  ],
  "tags": ["camping", "estacas", "deck", "anclaje", "tienda de campaña", "outdoor", "fishbone"],
  "articleSource": "Top Equipos de Seguridad 2025"
},
{
  "id": "generica-kit-anclaje-expansion-2pack",
  "name": "Juego de 2 Placas de Anclaje con Pernos de Expansión (Acero Inoxidable)",
  "description": "Set de herrajes para anclaje permanente en roca o concreto. Incluye 2 placas de suspensión (chapas) y 2 pernos de expansión. Fabricados en acero inoxidable para alta durabilidad y resistencia a la intemperie, ideales para escalada y trabajos verticales.",
  "category": "Escalada y Trabajos Verticales",
  "subcategory": "Anclajes Fijos",
  "brand": "Genérica",
  "price": "Consultar precio",
  "rating": 5.0,
  "reviews": 2,
  "image": "/images/catalogo/kit-anclaje-expansion-2pack/kit-anclaje-expansion-2pack.webp",
  "amazonUrl": "https://mercadolibre.com/sec/1nkVxBX",
  "features": [
    "Material: Acero inoxidable resistente al desgaste",
    "Dimensiones del perno: 8mm x 80mm",
    "Resistencia de carga: 25 KN (Según descripción técnica)",
    "Incluye: 2 placas + 2 pernos con tuercas y arandelas",
    "Uso: Escalada, rapel, hamacas, trabajos y construcción"
  ],
  "tags": ["anclaje", "escalada", "pernos", "acero inoxidable", "parabolt", "chapa", "outdoor"],
  "articleSource": "Top Equipos de Seguridad 2025"
},
{
  "id": "generica-anclaje-cuna-m8",
  "name": "Perno de Anclaje de Cuña M8 para Escalada (Acero Inoxidable)",
  "description": "Perno de expansión tipo cuña fabricado en acero inoxidable 304 de alta resistencia. Diseñado para crear estaciones de protección estables en roca para escalada, espeleología y montañismo.",
  "category": "Escalada y Trabajos Verticales",
  "subcategory": "Anclajes y Fijaciones",
  "brand": "Genérica",
  "price": "Consultar precio",
  "rating": 5.0,
  "reviews": 2,
  "image": "/images/catalogo/anclaje-cuna-m8/anclaje-cuna-m8.webp",
  "amazonUrl": "https://mercadolibre.com/sec/1S1nXPA",
  "features": [
    "Material: Acero inoxidable 304 (Resistente al desgaste)",
    "Medida: M8 (8mm diámetro x 80mm largo)",
    "Tipo: Anclaje de cuña / Perno de expansión",
    "Aplicación: Escalada en roca, espeleología, hamacas",
    "Diseño compacto y de instalación rápida"
  ],
  "tags": ["anclaje", "perno m8", "escalada", "acero inoxidable", "espeleología", "outdoor"],
  "articleSource": "Top Equipos de Seguridad 2025"
},
{
  "id": "isop-anchor-bolt-set-10mm",
  "name": "Set de 2 Pernos de Anclaje de Escalada ISOP 10mm (Acero Inoxidable 316)",
  "description": "Juego profesional de anclaje que incluye 2 placas y 2 pernos de expansión de 10mm. Fabricados en acero inoxidable 316 de alta calidad, ofrecen una resistencia de 25 KN. Ideales para escalada en roca, hamacas, yoga aéreo y puntos de anclaje permanentes.",
  "category": "Escalada y Trabajos Verticales",
  "subcategory": "Anclajes Fijos",
  "brand": "ISOP",
  "price": "Consultar precio",
  "rating": 5.0,
  "reviews": 2,
  "image": "/images/catalogo/anchor-bolt-set-10mm/anchor-bolt-set-10mm.webp",
  "amazonUrl": "https://mercadolibre.com/sec/2j1aHYg",
  "features": [
    "Incluye: 2 Placas de anclaje + 2 Pernos de expansión completos",
    "Material: Acero inoxidable 316 (Grado marino/Alta corrosión)",
    "Resistencia máxima de carga: 25 KN",
    "Diámetro del perno: 10 mm",
    "Longitud: 10.8 cm"
  ],
  "tags": ["ISOP", "anclaje", "escalada", "acero inoxidable 316", "pernos", "outdoor", "25KN"],
  "articleSource": "Top Equipos de Seguridad 2025"
},
{
  "id": "generica-anclaje-30kn-9cm",
  "name": "Perno y Colgador de Anclaje para Escalada 30KN (Acero Inoxidable)",
  "description": "Set de anclaje individual compuesto por perno de expansión y placa (chapa). Fabricado en acero inoxidable de alta resistencia, soporta una carga de hasta 30 KN, ideal para crear estaciones de protección robustas en escalada en roca.",
  "category": "Escalada y Trabajos Verticales",
  "subcategory": "Anclajes Fijos",
  "brand": "Genérica",
  "price": "Consultar precio",
  "rating": 5.0,
  "reviews": 2,
  "image": "/images/catalogo/anclaje-escalada-30kn/anclaje-escalada-30kn.webp",
  "amazonUrl": "https://mercadolibre.com/sec/2SZnxfz",
  "features": [
    "Resistencia a la tracción: 30 KN (Alta capacidad)",
    "Material: Acero inoxidable resistente al desgaste",
    "Longitud: 9 cm (3.54 pulgadas)",
    "Incluye: 1 Perno de expansión + 1 Colgador (Chapa)",
    "Peso: 163g (Diseño robusto)"
  ],
  "tags": ["anclaje", "escalada", "30KN", "acero inoxidable", "perno", "outdoor", "seguridad"],
  "articleSource": "Top Equipos de Seguridad 2025"
},
{
  "id": "generica-set-8-anclajes-316",
  "name": "Set 8 Colgadores y Pernos de Anclaje para Escalada (Acero Inoxidable 316)",
  "description": "Paquete de 8 juegos de anclaje (chapa + perno) fabricados en acero inoxidable 316 de grado marino. Diseñados para soportar condiciones exteriores adversas con una resistencia de carga de 25 KN. Ideal para equipar rutas de escalada y espeleología.",
  "category": "Escalada y Trabajos Verticales",
  "subcategory": "Anclajes Fijos",
  "brand": "Genérica",
  "price": "Consultar precio",
  "rating": 5.0,
  "reviews": 2,
  "image": "/images/catalogo/set-8-anclajes-316/set-8-anclajes-316.webp",
  "amazonUrl": "https://mercadolibre.com/sec/22x4yXT",
  "features": [
    "Contenido: 8 Colgadores (Chapas) + 8 Pernos de expansión",
    "Material: Acero inoxidable 316 (Alta resistencia a corrosión)",
    "Resistencia de carga: 25 KN",
    "Dimensiones Perno: 10 mm (diámetro) x 90 mm (largo)",
    "Dimensiones Colgador: 5.4 cm x 2.7 cm"
  ],
  "tags": ["anclaje", "escalada", "pack 8", "acero inoxidable 316", "25KN", "pernos", "outdoor"],
  "articleSource": "Top Equipos de Seguridad 2025"
},
{
  "id": "shield-electron-retractil-2m",
  "name": "Línea de Vida Retráctil 2m Nylon con Mosquetón Shield Electron",
  "description": "Dispositivo retráctil ligero de 2 metros con cinta de nylon y carcasa de polímero de alta resistencia. Cuenta con gancho y mosquetón de aluminio para evitar corrosión. Certificado bajo la nueva normativa ANSI Z359.14-2021 Clase 1, incluyendo amortiguador externo para mayor control de fuerzas de impacto.",
  "category": "Trabajos en Alturas",
  "subcategory": "Retráctiles",
  "brand": "Shield Fall Protection",
  "price": "Consultar precio",
  "rating": 5.0,
  "reviews": 3,
  "image": "/images/catalogo/retractil-electron-2m/retractil-electron-2m.webp",
  "amazonUrl": "https://mercadolibre.com/sec/2Wuisk4",
  "features": [
    "Longitud: 2.00 Metros (Cinta de Nylon)",
    "Material de conectores: Aluminio (Gancho y Mosquetón)",
    "Resistencia: 25 KN",
    "Certificación: ANSI Z359.14-2021 Clase 1 / EN 360:2002",
    "Incluye indicador de impacto y amortiguador externo"
  ],
  "tags": ["shield", "retráctil", "nylon", "aluminio", "ANSI Z359.14", "seguridad industrial", "alturas"],
  "articleSource": "Top Equipos de Seguridad 2025"
},
{
  "id": "golden-eagle-ec6030-ss-9m",
  "name": "Línea de Vida Retráctil 9m Golden Eagle EC6030-SS",
  "description": "Línea de vida retráctil de cable de 9 metros (30 ft) diseñada bajo la certificación ANSI Z359.14-2021 Clase 1. Incorpora tecnología innovadora para mayor ligereza y cuenta con un asa ergonómica que facilita su transporte.",
  "category": "Trabajos en Alturas",
  "subcategory": "Retráctiles",
  "brand": "Golden Eagle",
  "price": "Consultar precio",
  "rating": 5.0,
  "reviews": 1,
  "image": "/images/catalogo/golden-eagle-ec6030-ss/golden-eagle-ec6030-ss.webp",
  "amazonUrl": "https://mercadolibre.com/sec/16WfKpi",
  "features": [
    "Longitud del cable: 9 metros (30 ft)",
    "Capacidad de carga: 140 kg (310 lb)",
    "Certificación: ANSI Z359.14-2021 CLASE 1",
    "Dimensiones compactas: 21.1 cm x 12.1 cm",
    "Equipado con asa ergonómica de transporte"
  ],
  "tags": ["golden eagle", "retráctil", "cable", "ANSI Z359.14", "seguridad industrial", "alturas", "EC6030-SS"],
  "articleSource": "Top Equipos de Seguridad 2025"
},
{
  "id": "shield-srl-9m-inox",
  "name": "Línea de Vida Retráctil 9m Cable Acero Inoxidable Shield SRL",
  "description": "Dispositivo retráctil con cable de acero inoxidable de 9 metros y carcasa de polímero de alta resistencia. Cuenta con gancho y mosquetón de aluminio, anclaje superior giratorio y protector de goma. Certificado bajo ANSI Z359.14-2014 Clase B.",
  "category": "Trabajos en Alturas",
  "subcategory": "Retráctiles",
  "brand": "Shield Fall Protection",
  "price": "Consultar precio",
  "rating": 5.0,
  "reviews": 2,
  "image": "/images/catalogo/retractil-srl-9m-inox/retractil-srl-9m-inox.webp",
  "amazonUrl": "https://mercadolibre.com/sec/23n8Vbz",
  "features": [
    "Longitud: 9 metros (Cable de Acero Inoxidable)",
    "Carcasa de polímero prácticamente indestructible",
    "Gancho y mosquetón de aluminio (apertura 22.6 mm)",
    "Capacidad de carga: 140 Kg",
    "Certificación: ANSI Z359.14-2014 Clase B"
  ],
  "tags": ["shield", "retráctil", "acero inoxidable", "ANSI Z359.14", "seguridad industrial", "alturas", "SRL"],
  "articleSource": "Top Equipos de Seguridad 2025"
},
{
  "id": "generica-placa-anclaje-5x5-500kg",
  "name": "Placa de Anclaje Especial 5\" x 5\" para Piso, Muro o Techo",
  "description": "Placa de acero al carbón de 5x5 pulgadas con acabado en pintura electrostática negra anticorrosiva. Diseñada para montajes especiales en concreto (piso, techo o muro) utilizando anclaje químico. Ideal para suspensión de equipos y cargas medias.",
  "category": "Carga y Suspensión",
  "subcategory": "Placas de Anclaje",
  "brand": "Genérica",
  "price": "Consultar precio",
  "rating": 5.0,
  "reviews": 2,
  "image": "/images/catalogo/placa-anclaje-5x5/placa-anclaje-5x5.webp",
  "amazonUrl": "https://mercadolibre.com/sec/1gDiirc",
  "features": [
    "Dimensiones: 5\" x 5\" (Espesor 1/4\")",
    "Carga Máxima: 500 kg",
    "Material: Acero al carbón",
    "Acabado: Pintura electrostática negra",
    "Instalación: 4 barrenos de 7/16\" (Requiere taquetes químicos)"
  ],
  "tags": ["placa anclaje", "montaje", "acero", "suspensión", "500kg", "multiuso"],
  "articleSource": "Top Equipos de Seguridad 2025"
},
{
  "id": "generica-placa-rigging-4-orificios",
  "name": "Placa de Anclaje Multiusos (Rigging Plate) 4 Orificios",
  "description": "Placa de aparejo tipo 'Paw' fabricada en metal resistente y ligero. Diseñada con 4 orificios (1 punto de carga principal y 3 de distribución) para organizar conectores y crear sistemas de anclaje múltiples de manera ordenada y segura.",
  "category": "Escalada y Trabajos Verticales",
  "subcategory": "Placas Multianclaje",
  "brand": "Genérica",
  "price": "Consultar precio",
  "rating": 5.0,
  "reviews": 2,
  "image": "/images/catalogo/placa-rigging-4-orificios-negro/placa-rigging-4-orificios-negro.webp",
  "amazonUrl": "https://mercadolibre.com/sec/1P3ap8M",
  "features": [
    "Diseño: 4 orificios (1 grande de carga + 3 de distribución)",
    "Dimensiones: 9 cm x 8.4 cm",
    "Material: Metal de alta calidad y ligero",
    "Color: Negro",
    "Uso: Sistemas de aparejo, escalada, rescate y puentes de cuerda"
  ],
  "tags": ["rigging plate", "placa anclaje", "escalada", "rescate", "4 orificios", "paw", "outdoor"],
  "articleSource": "Top Equipos de Seguridad 2025"
},
{
  "id": "generica-conector-poste-3.8cm-4pz",
  "name": "Set 4 Conectores de Anclaje para Postes 3.8 cm (Poste a Viga)",
  "description": "Juego de 4 placas de fijación metálicas diseñadas para conectar postes a vigas en estructuras de madera estándar. Ideales para la construcción de pérgolas, barandillas, cercas y muebles de jardín, ofreciendo resistencia a la corrosión y estabilidad estructural.",
  "category": "Construcción y Estructuras",
  "subcategory": "Conectores para Madera",
  "brand": "Genérica",
  "price": "Consultar precio",
  "rating": 5.0,
  "reviews": 2,
  "image": "/images/catalogo/conector-poste-3.8cm/conector-poste-3.8cm.webp",
  "amazonUrl": "https://mercadolibre.com/sec/1eHWp7Q",
  "features": [
    "Ancho interior: 3.8 cm (1.50 pulgadas)",
    "Dimensiones: 3.81 cm x 5.08 cm",
    "Material: Metal sólido resistente al óxido",
    "Contenido: 4 soportes de anclaje",
    "Uso: Pérgolas, decks, barandillas y cobertizos"
  ],
  "tags": ["conector madera", "soporte poste", "pérgola", "construcción", "bricolaje", "herrajes"],
  "articleSource": "Top Equipos de Seguridad 2025"
},
{
  "id": "generica-kit-terminales-cobre-64pz",
  "name": "Kit de 64 Terminales de Cobre y Tubo Termoencogible (AWG 12-2)",
  "description": "Juego completo de terminales de anillo fabricados en 100% cobre puro para máxima conductividad y resistencia a la corrosión. Incluye surtido de conectores (Serie SC) y tubos termorretráctiles para cables desde calibre AWG 12 hasta AWG 2. Ideal para baterías, sistemas solares y automotrices.",
  "category": "Electricidad y Mantenimiento",
  "subcategory": "Conectores y Terminales",
  "brand": "Genérica",
  "price": "Consultar precio",
  "rating": 4.8,
  "reviews": 5,
  "image": "/images/catalogo/kit-terminales-cobre-64pz/kit-terminales-cobre-64pz.webp",
  "amazonUrl": "https://mercadolibre.com/sec/2qaXM8S",
  "features": [
    "Material: 100% Cobre puro (Alta conductividad)",
    "Contenido: 64 piezas (Terminales SC y Termoencogible)",
    "Compatibilidad de Cable: AWG 12, 10, 8, 6, 4, 2",
    "Variedad de medidas: SC6-6 hasta SC35-10",
    "Uso: Automotriz, Marina, Paneles Solares, Distribución"
  ],
  "tags": ["terminales", "cobre", "conectores", "electricidad", "AWG", "mantenimiento", "baterías"],
  "articleSource": "Top Equipos de Seguridad 2025"
},
{
  "id": "generica-sc6-6-terminales-cobre-50pz",
  "name": "Pack 50 Terminales de Anillo de Cobre SC6-6",
  "description": "Paquete de 50 terminales tubulares de cobre modelo SC6-6. Diseñados para ofrecer una fuerte conductividad y larga vida útil en conexiones eléctricas de baterías, inversores y aplicaciones automotrices. Aptos para instalación por prensado o soldadura.",
  "category": "Electricidad y Mantenimiento",
  "subcategory": "Conectores y Terminales",
  "brand": "Genérica",
  "price": "Consultar precio",
  "rating": 5.0,
  "reviews": 2,
  "image": "/images/catalogo/terminales-cobre-sc6-6/terminales-cobre-sc6-6.webp",
  "amazonUrl": "https://mercadolibre.com/sec/2JiunzX",
  "features": [
    "Modelo: SC6-6",
    "Material: Cobre de alta conductividad",
    "Contenido: 50 piezas",
    "Método de fijación: Prensado (Crimping) y Soldadura",
    "Aplicaciones: Inversores, baterías, automotriz y tableros de distribución"
  ],
  "tags": ["terminales", "cobre", "SC6-6", "electricidad", "batería", "automotriz", "conector"],
  "articleSource": "Top Equipos de Seguridad 2025"
},

{
  "id": "jyrsa-jyr-moch01k-kit-3pz",
  "name": "Kit Contra Caídas 3 Pzas Arnés + Línea de Vida Jyrsa JYR-MOCH01K",
  "description": "Kit integral de protección contra caídas que incluye un arnés de cuerpo completo (JYR-10A), una línea de vida con amortiguador de impacto (JYR-AMC1 de 1.83m) y una mochila resistente. Diseñado para trabajos en construcción, andamios y mantenimiento, cumpliendo con normativas nacionales e internacionales.",
  "category": "Trabajos en Alturas",
  "subcategory": "Kits de Altura",
  "brand": "Jyrsa",
  "price": "Consultar precio",
  "rating": 0.0,
  "reviews": 0,
  "image": "/images/catalogo/jyrsa/kit-jyr-moch01k.webp",
  "amazonUrl": "https://mercadolibre.com/sec/2MLKzWT",
  "features": [
    "Incluye: Arnés JYR-10A + Amortiguador JYR-AMC1 + Mochila",
    "Normativas: NOM-009-STPS-2011, ANSI Z359.1-2007, OSHA 1926",
    "Material: Herrajes de acero con recubrimiento de zinc y bicromato",
    "Aplicación: Construcción, andamios y rescate",
    "Ventaja: Solución portátil y lista para usar"
  ],
  "tags": ["jyrsa", "kit altura", "arnés", "línea de vida", "amortiguador", "seguridad industrial", "JYR-MOCH01K"],
  "articleSource": "Top Equipos de Seguridad 2025"
},

{
  "id": "alto-kc-h03a-30m",
  "name": "Kit Línea de Vida Horizontal Temporal 30m Cuerda Sintética ALTO",
  "description": "Sistema de línea de vida horizontal temporal (HLL) de 30 metros (100 pies) fabricado en cuerda sintética de alta resistencia. Kit completo reutilizable que incluye tensor, absorbedores de energía y anclajes. Diseñado para ofrecer seguridad continua a múltiples usuarios con una resistencia estándar de 5,000 lbs por persona.",
  "category": "Trabajos en Alturas",
  "subcategory": "Líneas de Vida Horizontales",
  "brand": "ALTO",
  "price": "Consultar precio",
  "rating": 0.0,
  "reviews": 0,
  "image": "/images/catalogo/alto/linea-vida-temporal-30m-sintetica.webp",
  "amazonUrl": "https://mercadolibre.com/sec/2SrTY6L",
  "features": [
    "Longitud: 30 metros (100 pies)",
    "Modelo: KC H03A",
    "Material: Cuerda sintética de alta resistencia",
    "Componentes: Línea, tensor/ajustador, absorbedores y anclajes",
    "Resistencia: 5,000 lbs (22.2 KN) por usuario",
    "Tipo: Temporal y reutilizable"
  ],
  "tags": ["ALTO", "línea de vida horizontal", "cuerda sintética", "30m", "KC H03A", "seguridad industrial", "temporal"],
  "articleSource": "Top Equipos de Seguridad 2025"
},

{
  "id": "generica-freno-cable-3-8-mosqueton",
  "name": "Freno Anticaídas para Cable de Acero 3/8\" con Mosquetón (EN 353-2)",
  "description": "Dispositivo deslizador anticaídas (carrito) diseñado para líneas de vida verticales de cable de acero de 3/8\". Fabricado en aleación de acero de alta resistencia, cuenta con bloqueo instantáneo inercial y sistema de seguridad por gravedad que impide su instalación invertida. Incluye mosquetón con resistencia de 2500kg.",
  "category": "Trabajos en Alturas",
  "subcategory": "Frenos y Deslizadores",
  "brand": "Genérica",
  "price": "Consultar precio",
  "rating": 0.0,
  "reviews": 0,
  "image": "/images/catalogo/generica/freno-cable-3-8.webp",
  "amazonUrl": "https://mercadolibre.com/sec/2Qum1Ud",
  "features": [
    "Compatibilidad: Cable de acero de 3/8\" (aprox. 9.5mm)",
    "Certificación: EN 353-2",
    "Material: Aleación de acero de alta resistencia",
    "Mosquetón incluido: Carga de ruptura 2500kg (25 KN)",
    "Sistema de seguridad: Bloqueo instantáneo y anti-inversión",
    "Uso: Torres, escaleras fijas, exploración y rescate"
  ],
  "tags": ["freno cable", "anticaídas", "3/8", "EN 353-2", "seguridad industrial", "carrito", "línea vertical"],
  "articleSource": "Top Equipos de Seguridad 2025"
},

{
  "id": "generica-freno-cable-9.5mm-25kn",
  "name": "Freno Anticaídas para Cable 3/8\" (9.5mm) con Mosquetón 25KN",
  "description": "Dispositivo anticaídas deslizante para líneas de vida verticales de cable de acero de 9.5mm. Fabricado en acero aleado para alta durabilidad. Incluye un mosquetón ovalado con cierre de rosca certificado a 25KN. Cuenta con sistema de seguridad por gravedad que impide la instalación invertida.",
  "category": "Trabajos en Alturas",
  "subcategory": "Frenos y Deslizadores",
  "brand": "Genérica",
  "price": "Consultar precio",
  "rating": 0.0,
  "reviews": 0,
  "image": "/images/catalogo/generica/freno-cable-9.5mm-25kn.webp",
  "amazonUrl": "https://mercadolibre.com/sec/1XdBFbd",
  "features": [
    "Compatibilidad: Cable de acero de 9.5 mm (3/8\")",
    "Material: Acero aleado de alta resistencia",
    "Mosquetón incluido: Ovalado con cierre de rosca (25 KN / 2500 kg)",
    "Seguridad: Bloqueo por leva y sistema anti-inversión",
    "Uso: Torres, escaleras fijas, rescate y pozos"
  ],
  "tags": ["freno cable", "anticaídas", "3/8", "9.5mm", "25KN", "seguridad industrial", "carrito"],
  "articleSource": "Top Equipos de Seguridad 2025"
},
{
  "id": "generica-freno-cable-3-8-inox-en353",
  "name": "Freno Anticaídas para Cable 3/8\" Certificado EN 353-2 + Mosquetón",
  "description": "Dispositivo anticaídas deslizante certificado bajo norma EN 353-2 para líneas de vida de cable de 3/8\". Fabricado en acero inoxidable de alta resistencia para máxima durabilidad. Incluye mosquetón ovalado de 25KN. Cuenta con sistema de bloqueo por leva instantáneo y seguro gravitatorio que impide la instalación invertida.",
  "category": "Trabajos en Alturas",
  "subcategory": "Frenos y Deslizadores",
  "brand": "Genérica",
  "price": "Consultar precio",
  "rating": 0.0,
  "reviews": 0,
  "image": "/images/catalogo/generica/freno-cable-3-8-inox-en353.webp",
  "amazonUrl": "https://mercadolibre.com/sec/2k1wmWw",
  "features": [
    "Certificación: EN 353-2 (Norma europea)",
    "Compatibilidad: Cable de 3/8 pulgadas",
    "Material: Acero inoxidable / Aleación reforzada",
    "Mosquetón incluido: Ovalado con seguro de rosca (2500 kg)",
    "Seguridad: Bloqueo instantáneo y sistema anti-inversión",
    "Uso: Rescate, industria, mantenimiento y escalada"
  ],
  "tags": ["freno cable", "anticaídas", "3/8", "EN 353-2", "seguridad industrial", "acero inoxidable", "rescate"],
  "articleSource": "Top Equipos de Seguridad 2025"
},

{
  "id": "generica-freno-cable-3-8-en353-v2",
  "name": "Freno Anticaídas para Cable 3/8\" (9.5mm) Certificado EN 353-2 + Mosquetón",
  "description": "Dispositivo anticaídas deslizante certificado para líneas de vida verticales de cable de acero de 3/8\" (9.5 mm). Fabricado en acero de alta resistencia (aleación/inoxidable). Cuenta con sistema de bloqueo por leva instantáneo y seguro gravitatorio anti-inversión. Incluye mosquetón ovalado con seguro de rosca de 2500kg.",
  "category": "Trabajos en Alturas",
  "subcategory": "Frenos y Deslizadores",
  "brand": "Genérica",
  "price": "Consultar precio",
  "rating": 0.0,
  "reviews": 0,
  "image": "/images/catalogo/generica/freno-cable-3-8-en353-v2.webp",
  "amazonUrl": "https://mercadolibre.com/sec/31zx2YR",
  "features": [
    "Compatibilidad: Cable de acero de 3/8\" (aprox. 9.5mm)",
    "Certificación: Cumple con EN 353-2",
    "Material: Aleación de acero / Acero inoxidable",
    "Mosquetón incluido: Ovalado con cierre de rosca (25 KN / 2500 kg)",
    "Seguridad: Seguro gravitatorio (impide instalación inversa)",
    "Uso: Rescate, industria, torres y espacios confinados"
  ],
  "tags": ["freno cable", "anticaídas", "3/8", "EN 353-2", "seguridad industrial", "mosquetón 25kn"],
  "articleSource": "Top Equipos de Seguridad 2025"
},

{
  "id": "generica-kit-cable-acero-30m-3mm",
  "name": "Kit de Cable de Acero Inoxidable 30m (3mm) con Tensores y Accesorios",
  "description": "Kit completo de instalación con 30 metros de cable de acero inoxidable 304 recubierto de PVC (3mm de espesor total). Incluye 117 piezas de hardware (tensores, abrazaderas, taquetes, ganchos) ideales para jardinería, guías de luces, barandillas ligeras y decoración exterior. Resistente a la corrosión.",
  "category": "Ferretería y Exteriores",
  "subcategory": "Cables y Sujeción",
  "brand": "Genérica",
  "price": "Consultar precio",
  "rating": 0.0,
  "reviews": 0,
  "image": "/images/catalogo/generica/kit-cable-acero-30m-3mm.webp",
  "amazonUrl": "https://mercadolibre.com/sec/1LDDUKS",
  "features": [
    "Cable: 30 metros de acero inoxidable 304 con recubrimiento plástico (3mm)",
    "Resistencia: Anticorrosión y abrasión (Ideal intemperie)",
    "Contenido del Kit: 5 tensores, 10 taquetes, 6 abrazaderas, 20 casquillos, ganchos y bridas",
    "Total piezas: 117 accesorios",
    "Uso: Luces colgantes, plantas trepadoras, decoración (No apto para carga humana)"
  ],
  "tags": ["cable acero", "tensores", "kit instalación", "jardín", "bricolaje", "3mm", "outdoor"],
  "articleSource": "Top Equipos de Seguridad 2025"
},

{
  "id": "generica-kit-cable-acero-100m-50kg",
  "name": "Kit de Cable de Acero Inoxidable 100m (Uso Ligero 50kg)",
  "description": "Kit de 100 metros de cable de acero inoxidable 304 con recubrimiento plástico. Construcción 7x7 hilos flexible y resistente a la intemperie. Diseñado para cargas ligeras (máximo 50 kg) como colgar luces de exterior, tendederos y guías para plantas.",
  "category": "Ferretería y Exteriores",
  "subcategory": "Cables y Sujeción",
  "brand": "Genérica",
  "price": "Consultar precio",
  "rating": 4.1,
  "reviews": 10,
  "image": "/images/catalogo/generica/kit-cable-acero-100m.webp",
  "amazonUrl": "https://mercadolibre.com/sec/2Ci5ycF",
  "features": [
    "Longitud: 100 metros",
    "Material: Acero Inoxidable 304 (Recubierto)",
    "Diámetro: 1/16\" (núcleo) - 3/32\" (recubierto)",
    "Carga de rotura: 50 kg (Solo cargas ligeras)",
    "Construcción: 7x7 hilos (Flexible)",
    "Uso: Jardinería, decoración, luces colgantes"
  ],
  "tags": ["cable acero", "100m", "jardín", "luces", "decoración", "bricolaje", "uso ligero"],
  "articleSource": "Top Equipos de Seguridad 2025"
},

{
  "id": "generica-kit-cable-acero-50m-50kg",
  "name": "Kit de Cable de Acero Inoxidable 50m (Uso Ligero 50kg)",
  "description": "Kit de instalación con 50 metros de cable de acero inoxidable 304 recubierto de PVC. Incluye tensores M5, ganchos y accesorios de fijación. Diseñado para cargas ligeras (máximo 50 kg) como colgar luces de exterior, tendederos y guías para plantas trepadoras.",
  "category": "Ferretería y Exteriores",
  "subcategory": "Cables y Sujeción",
  "brand": "Genérica",
  "price": "Consultar precio",
  "rating": 4.8,
  "reviews": 12,
  "image": "/images/catalogo/generica/kit-cable-acero-50m.webp",
  "amazonUrl": "https://mercadolibre.com/sec/191Agec",
  "features": [
    "Longitud: 50 metros",
    "Material: Acero Inoxidable 304 (Recubierto PVC)",
    "Contenido: 4 tensores M5, 8 ganchos, 8 guardacabos, 16 casquillos",
    "Carga de rotura: 50 kg (Solo cargas ligeras)",
    "Diámetro: 1/16\" (núcleo) - 3/32\" (recubierto)",
    "Uso: Jardinería, decoración, luces colgantes"
  ],
  "tags": ["cable acero", "50m", "jardín", "luces", "decoración", "kit instalación", "uso ligero"],
  "articleSource": "Top Equipos de Seguridad 2025"
},

{
  "id": "generica-kit-cable-acero-50m-completo",
  "name": "Kit de Cable de Acero Inoxidable 50m con Tensores (Recubierto de PVC)",
  "description": "Kit completo de 50 metros de cable de acero inoxidable 304 con recubrimiento de vinilo/PVC resistente a la corrosión. Incluye tensores M5, ganchos y accesorios de aluminio. Ideal para colgar luces exteriores, barandillas de cable, guías para enredaderas y tendederos.",
  "category": "Ferretería y Exteriores",
  "subcategory": "Cables y Sujeción",
  "brand": "Genérica",
  "price": "Consultar precio",
  "rating": 4.8,
  "reviews": 8,
  "image": "/images/catalogo/generica/kit-cable-acero-50m-completo.webp",
  "amazonUrl": "https://mercadolibre.com/sec/31qAKAo",
  "features": [
    "Longitud: 50 metros (Recubierto de PVC)",
    "Material: Acero Inoxidable 304 (Alta resistencia a corrosión)",
    "Incluye: 4 Tensores M5, 8 Ganchos, 8 Guardacabos, 16 Casquillos",
    "Uso: Jardinería, luces colgantes, barandillas ligeras, tendederos",
    "Instalación: Fácil montaje con herramientas básicas"
  ],
  "tags": ["cable acero", "50m", "tensores", "jardín", "luces exterior", "bricolaje", "kit completo"],
  "articleSource": "Top Equipos de Seguridad 2025"
},

{
  "id": "creator-tensores-m4-6pz",
  "name": "Set 6 Ganchos Tensores M4 Acero Inoxidable 304 (Gancho y Ojo)",
  "description": "Paquete de 6 tensores de acero inoxidable 304 tipo gancho y ojo (M4). Resistentes al agua y la corrosión. Ideales para tensar cables ligeros, tendederos, antenas y cadenas en interiores o exteriores. Diseñados para cargas ligeras.",
  "category": "Ferretería y Exteriores",
  "subcategory": "Tensores y Sujeción",
  "brand": "Creator",
  "price": "Consultar precio",
  "rating": 4.6,
  "reviews": 19,
  "image": "/images/catalogo/creator/tensores-m4-6pz.webp",
  "amazonUrl": "https://mercadolibre.com/sec/2qjYxuk",
  "features": [
    "Modelo: M4 OC (Gancho y Ojo)",
    "Material: Acero Inoxidable 304",
    "Carga Máxima: 20 kg (Uso ligero)",
    "Contenido: 6 Piezas",
    "Extensión máxima: 14.5 cm",
    "Uso: Tendederos, antenas, decoración, cables domésticos"
  ],
  "tags": ["tensores", "M4", "acero inoxidable", "gancho y ojo", "hardware", "bricolaje", "20kg"],
  "articleSource": "Top Equipos de Seguridad 2025"
},

{
  "id": "sihpac-linea-posicionamiento-cuerda-1.8m",
  "name": "Línea de Posicionamiento (Estrobo) Cuerda Trenzada 1.83m con Ganchos",
  "description": "Línea de vida simple fabricada en cuerda trenzada de alta resistencia color naranja/gris. Equipada con ganchos de acero en ambos extremos. Diseñada específicamente para labores de posicionamiento y restricción de movimiento, permitiendo al usuario trabajar con manos libres o limitando su acceso a zonas de riesgo de caída.",
  "category": "Trabajos en Alturas",
  "subcategory": "Líneas de Posicionamiento (Estrobos)",
  "brand": "SIHPAC / Genérica",
  "price": "Consultar precio",
  "rating": 4.8,
  "reviews": 2,
  "image": "/images/catalogo/sihpac/linea-posicionamiento-cuerda-1.8m.webp",
  "amazonUrl": "https://mercadolibre.com/sec/1zxq3ZX",
  "features": [
    "Longitud: 1.83 metros",
    "Material: Cuerda trenzada",
    "Ganchos: Acero (Resistencia 2267 Kgs / 5000 lbs)",
    "Capacidad de Carga: 140 Kgs",
    "Uso: Posicionamiento y Restricción (No para detención de caídas libres)",
    "Normativa mencionada: CE EN-361 (Verificar etiqueta)"
  ],
  "tags": ["posicionamiento", "estrobo", "cuerda", "1.8m", "ganchos acero", "seguridad industrial", "restricción"],
  "articleSource": "Top Equipos de Seguridad 2025"
},

{
  "id": "alto-c1t-180-cuerda-18m",
  "name": "Cuerda de Vida Vertical 1/2\" x 18m ALTO (Modelo C1T-180)",
  "description": "Línea de vida vertical flexible fabricada en cuerda trenzada de alta tenacidad de 1/2 pulgada (aprox. 13mm). Longitud total de 18 metros. Diseñada para servir como línea de anclaje segura para el ascenso y descenso de trabajadores, utilizando un dispositivo anticaídas deslizante (freno). Incluye gancho de acero forjado en un extremo.",
  "category": "Trabajos en Alturas",
  "subcategory": "Líneas de Vida Verticales",
  "brand": "ALTO",
  "price": "Consultar precio",
  "rating": 0.0,
  "reviews": 0,
  "image": "/images/catalogo/alto/cuerda-vida-c1t-180.webp",
  "amazonUrl": "https://mercadolibre.com/sec/1bv8hKS",
  "features": [
    "Longitud: 18 metros",
    "Diámetro: 1/2\" (13 mm)",
    "Modelo: C1T-180",
    "Material: Cuerda sintética de alta resistencia",
    "Conexión: Gancho de acero en un extremo",
    "Uso: Sistema de protección vertical (requiere freno de cuerda)"
  ],
  "tags": ["ALTO", "línea vertical", "cuerda vida", "1/2", "18m", "C1T-180", "seguridad industrial"],
  "articleSource": "Top Equipos de Seguridad 2025"
},

{
  "id": "generica-dispositivo-anti-asfixia-kit",
  "name": "Kit Dispositivo de Emergencia Anti-Asfixia y Rescate (Niños y Adultos)",
  "description": "Dispositivo de primeros auxilios basado en succión no invasiva para liberar obstrucciones en las vías respiratorias (atragantamiento). El kit combinado incluye versiones para hogar y viaje, con mascarillas intercambiables para adultos y niños. Cuenta con un sistema de válvula unidireccional que evita empujar el objeto hacia adentro.",
  "category": "Primeros Auxilios y Emergencias",
  "subcategory": "Equipos de Rescate y RCP",
  "brand": "Genérica",
  "price": "Consultar precio",
  "rating": 4.2,
  "reviews": 48,
  "image": "/images/catalogo/generica/dispositivo-anti-asfixia.webp",
  "amazonUrl": "https://mercadolibre.com/sec/19Lh5hK",
  "features": [
    "Sistema: Succión con válvula unidireccional patentada",
    "Kit Combinado: Incluye equipo para Hogar y Kit de Viaje",
    "Mascarillas incluidas: Adulto, Pediátrica y de Práctica",
    "Vida útil: El dispositivo no caduca (Mascarillas reemplazables cada 2-3 años)",
    "Uso: Fácil operación, apto para auto-aplicación en emergencia"
  ],
  "tags": ["anti-asfixia", "atragantamiento", "primeros auxilios", "rescate", "succión", "heimlich", "seguridad hogar"],
  "articleSource": "Top Equipos de Seguridad 2025"
},

{
  "id": "generica-dispositivo-anti-asfixia-basico",
  "name": "Dispositivo de Emergencia Anti-Asfixia y Rescate (Kit Básico)",
  "description": "Dispositivo de succión no invasivo diseñado para liberar obstrucciones de las vías respiratorias en emergencias de atragantamiento. Sistema patentado fácil de usar que permite la auto-aplicación si se está solo. El dispositivo principal no tiene caducidad y es seguro para niños y adultos.",
  "category": "Primeros Auxilios y Emergencias",
  "subcategory": "Equipos de Rescate y RCP",
  "brand": "Genérica",
  "price": "Consultar precio",
  "rating": 4.8,
  "reviews": 13,
  "image": "/images/catalogo/generica/dispositivo-anti-asfixia-basico.webp",
  "amazonUrl": "https://mercadolibre.com/sec/1M61FJ5",
  "features": [
    "Mecanismo: Succión por vacío no invasiva",
    "Contenido: 1 Dispositivo de succión + 1 Máscara adulto + 1 Máscara niño",
    "Versatilidad: Apto para niños y adultos",
    "Durabilidad: Dispositivo sin caducidad (Mascarillas reemplazables cada 2-3 años)",
    "Uso: Diseño intuitivo apto para auto-rescate"
  ],
  "tags": ["anti-asfixia", "atragantamiento", "primeros auxilios", "succión", "rescate", "seguridad familiar"],
  "articleSource": "Top Equipos de Seguridad 2025"
},

{
  "id": "generica-dispositivo-anti-asfixia-basico",
  "name": "Dispositivo de Emergencia Anti-Asfixia y Rescate (Kit Básico)",
  "description": "Dispositivo de succión no invasivo diseñado para liberar obstrucciones de las vías respiratorias en emergencias de atragantamiento. Sistema patentado fácil de usar que permite la auto-aplicación si se está solo. El dispositivo principal no tiene caducidad y es seguro para niños y adultos.",
  "category": "Primeros Auxilios y Emergencias",
  "subcategory": "Equipos de Rescate y RCP",
  "brand": "Genérica",
  "price": "Consultar precio",
  "rating": 4.8,
  "reviews": 13,
  "image": "/images/catalogo/generica/dispositivo-anti-asfixia-basicoo.webp",
  "amazonUrl": "https://mercadolibre.com/sec/1M61FJ5",
  "features": [
    "Mecanismo: Succión por vacío no invasiva",
    "Contenido: 1 Dispositivo de succión + 1 Máscara adulto + 1 Máscara niño",
    "Versatilidad: Apto para niños y adultos",
    "Durabilidad: Dispositivo sin caducidad (Mascarillas reemplazables cada 2-3 años)",
    "Uso: Diseño intuitivo apto para auto-rescate"
  ],
  "tags": ["anti-asfixia", "atragantamiento", "primeros auxilios", "succión", "rescate", "seguridad familiar"],
  "articleSource": "Top Equipos de Seguridad 2025"
},

{
  "id": "generica-dispositivo-anti-asfixia-combo-v2",
  "name": "Kit Completo Dispositivo Anti-Asfixia (Hogar + Viaje) Niños y Adultos",
  "description": "Kit combinado de emergencia para atragantamiento que incluye dos sets: uno para el hogar y otro portátil para viaje. Utiliza un sistema de succión patentado con válvula unidireccional para liberar obstrucciones en las vías respiratorias. Incluye mascarillas de diferentes tamaños (adulto, pediátrica y práctica) y bolsa de transporte.",
  "category": "Primeros Auxilios y Emergencias",
  "subcategory": "Equipos de Rescate y RCP",
  "brand": "Genérica",
  "price": "Consultar precio",
  "rating": 4.4,
  "reviews": 33,
  "image": "/images/catalogo/generica/dispositivo-anti-asfixia-combo.webp",
  "amazonUrl": "https://mercadolibre.com/sec/2eUsxP4",
  "features": [
    "Contenido: Kit Hogar + Kit de Viaje",
    "Mascarillas incluidas: Adulto, Pediátrica y Práctica",
    "Mecanismo: Succión no invasiva con válvula unidireccional",
    "Portabilidad: Incluye bolsa de viaje duradera",
    "Durabilidad: Unidad de succión sin caducidad",
    "Uso: Apto para auto-rescate en caso de estar solo"
  ],
  "tags": ["anti-asfixia", "atragantamiento", "primeros auxilios", "kit viaje", "succión", "rescate", "seguridad familiar"],
  "articleSource": "Top Equipos de Seguridad 2025"
},

{
  "id": "msa-kit-rescate-4a1-15m",
  "name": "Kit de Rescate en Alturas MSA 15 Metros (Sistema 4:1)",
  "description": "Sistema de rescate y descenso con ventaja mecánica 4:1, diseñado para subir o bajar personal y equipos en espacios confinados o situaciones industriales. Las poleas cuentan con bloqueo antirretroceso para mayor seguridad. El kit ofrece un despliegue rápido y soporta carga para dos personas.",
  "category": "Trabajos en Alturas",
  "subcategory": "Rescate y Espacios Confinados",
  "brand": "MSA",
  "price": "Consultar precio",
  "rating": 0.0,
  "reviews": 0,
  "image": "/images/catalogo/msa/kit-rescate-15m.webp",
  "amazonUrl": "https://mercadolibre.com/sec/1szsEjo",
  "features": [
    "Sistema: Polipasto con ventaja mecánica 4:1",
    "Recorrido efectivo: 15 metros",
    "Longitud de cuerda: 200 pies (aprox. 60m)",
    "Componentes: Poleas con bloqueo, puño ascensor, mosquetón y cuerda",
    "Capacidad de carga: Clasificado para 2 personas",
    "Uso: Rescate industrial y espacios confinados"
  ],
  "tags": ["rescate", "espacios confinados", "MSA", "sistema 4:1", "poleas", "polipasto", "seguridad industrial"],
  "articleSource": "Top Equipos de Seguridad 2025"
},

{
  "id": "b4-arnes-escalada-rescate",
  "name": "Arnés de Escalada y Rescate Ajustable B4 (Certificado UIAA/CE)",
  "description": "Arnés de medio cuerpo ligero y totalmente ajustable fabricado en poliéster de alta resistencia. Diseñado con acolchado ergonómico en cintura y perneras para máxima comodidad. Cuenta con certificación internacional UIAA y CE (EN 12277) para escalada en roca, alpinismo técnico y rescate.",
  "category": "Escalada y Trabajos Verticales",
  "subcategory": "Arneses",
  "brand": "B4 / Genérica",
  "price": "Consultar precio",
  "rating": 0.0,
  "reviews": 0,
  "image": "/images/catalogo/generica/arnes-b4-escalada.webp",
  "amazonUrl": "https://mercadolibre.com/sec/2ZihX8J",
  "features": [
    "Certificaciones: CE0082, EN 12277, UIAA",
    "Material: Poliéster de alta tenacidad con costuras reforzadas",
    "Comodidad: Cinturón y perneras acolchados y transpirables",
    "Organización: 4 bucles portamateriales (2 rígidos delanteros, 2 suaves traseros)",
    "Ajuste: Hebillas rápidas para centrado perfecto",
    "Uso: Escalada, rescate, arborismo y alpinismo"
  ],
  "tags": ["arnés", "escalada", "rescate", "UIAA", "EN 12277", "arborismo", "seguridad vertical"],
  "articleSource": "Top Equipos de Seguridad 2025"
},

{
  "id": "sihpac-chaleco-elastico-reflejante",
  "name": "Chaleco Arnés Elástico Reflejante Alta Visibilidad (Tipo Carrillero)",
  "description": "Chaleco ligero tipo arnés fabricado con cintas elásticas ajustables y bandas reflejantes textiles de alta visibilidad. Diseño ergonómico con broche plástico de seguridad y configuración en 'X' en la espalda. Ideal para ciclistas, motociclistas, personal de construcción y seguridad vial.",
  "category": "Ropa de Trabajo",
  "subcategory": "Alta Visibilidad",
  "brand": "SIHPAC",
  "price": "Consultar precio",
  "rating": 4.8,
  "reviews": 28,
  "image": "/images/catalogo/sihpac/chaleco-elastico-reflejante.webp",
  "amazonUrl": "https://mercadolibre.com/sec/2LS7D4N",
  "features": [
    "Material: Cintas elásticas con reflejante textil",
    "Talla: Unitalla (Totalmente ajustable a cualquier complexión)",
    "Cierre: Broche de plástico de liberación rápida",
    "Diseño: Ligero y no obstructivo (Tipo Carrillero)",
    "Colores disponibles: Naranja, Amarillo, Verde, Azul, Rosa, Negro",
    "Uso: Seguridad vial, ciclismo, running, minería y construcción"
  ],
  "tags": ["chaleco reflejante", "alta visibilidad", "seguridad vial", "ciclismo", "arnés elástico", "correr", "señalización"],
  "articleSource": "Top Equipos de Seguridad 2025"
},

{
  "id": "generica-chaleco-arnes-reflectante-deportivo",
  "name": "Chaleco Arnés Reflectante de Alta Visibilidad (Moto, Bici, Correr)",
  "description": "Chaleco tipo arnés ultraligero y transpirable diseñado para ofrecer máxima visibilidad nocturna (detectable a más de 450 metros / 500 yardas). Cuenta con cintas elásticas ajustables con 4 hebillas y bandas reflectantes de 360 grados. Ideal para deportes al aire libre, motociclismo y seguridad vial en cualquier clima.",
  "category": "Ropa de Trabajo",
  "subcategory": "Alta Visibilidad",
  "brand": "Genérica",
  "price": "Consultar precio",
  "rating": 4.5,
  "reviews": 29,
  "image": "/images/catalogo/generica/chaleco-arnes-reflectante-deportivo.webp",
  "amazonUrl": "https://mercadolibre.com/sec/1zquyAz",
  "features": [
    "Visibilidad: Detectable a +500 yardas (Reflectante 360°)",
    "Ajuste: Cintura 70-98 cm | Largo 38-50 cm (4 hebillas)",
    "Material: Tejido elástico de alta intensidad (Ancho 4cm)",
    "Peso: 120g (Ultraligero y ventilado)",
    "Resistencia: A prueba de agua",
    "Uso: Running, Ciclismo, Motociclismo, Construcción"
  ],
  "tags": ["chaleco reflectante", "alta visibilidad", "ciclismo", "running", "seguridad vial", "arnés deportivo", "360 grados"],
  "articleSource": "Top Equipos de Seguridad 2025"
}, 

{
  "id": "generica-chaleco-arnes-reflectante-v2",
  "name": "Chaleco Arnés Reflectante Ajustable (Alta Visibilidad 360°)",
  "description": "Chaleco tipo arnés de alta visibilidad con franjas plateadas ultrabrillantes. Ofrece visibilidad de 360° a una distancia de 200 a 300 metros en condiciones de oscuridad, lluvia o niebla. Fabricado con hilo elástico importado y totalmente ajustable mediante 4 hebillas para adaptarse a cualquier ropa y estación.",
  "category": "Ropa de Trabajo",
  "subcategory": "Alta Visibilidad",
  "brand": "Genérica",
  "price": "Consultar precio",
  "rating": 4.8,
  "reviews": 570,
  "image": "/images/catalogo/generica/chaleco-arnes-reflectante-v2.webp",
  "amazonUrl": "https://mercadolibre.com/sec/1zquyAz",
  "features": [
    "Visibilidad: 200 a 300 metros (360 grados)",
    "Ajuste: Cintura 70-98 cm | Largo 38-50 cm",
    "Material: Hilo elástico importado con película térmica de alto brillo",
    "Condiciones: Visible en lluvia, niebla y oscuridad total",
    "Diseño: 4 hebillas ajustables, ligero y plegable (cabe en el bolsillo)",
    "Uso: Motociclismo, ciclismo, running, pasear mascotas"
  ],
  "tags": ["chaleco reflectante", "alta visibilidad", "arnés elástico", "seguridad vial", "moto", "running", "impermeable"],
  "articleSource": "Top Equipos de Seguridad 2025"
},

{
  "id": "generica-chaleco-arnes-reflectante-2pcs-verde",
  "name": "Set 2 Chalecos Arnés Reflectante Ajustable (Verde) - Alta Visibilidad",
  "description": "Paquete de 2 chalecos tipo arnés de alta visibilidad en color verde. Diseñados con tiras reflectantes de plata ultra brillantes para garantizar seguridad 360° en condiciones de poca luz. Sistema elástico totalmente ajustable mediante 4 hebillas, apto para usar sobre cualquier tipo de ropa en invierno o verano.",
  "category": "Ropa de Trabajo",
  "subcategory": "Alta Visibilidad",
  "brand": "Genérica",
  "price": "Consultar precio",
  "rating": 0.0,
  "reviews": 0,
  "image": "/images/catalogo/generica/chaleco-arnes-reflectante-2pcs-verde.webp",
  "amazonUrl": "https://mercadolibre.com/sec/23BNczH",
  "features": [
    "Contenido: 2 Piezas",
    "Color: Verde (Alta visibilidad)",
    "Ajuste: Cintura 70-98 cm | Largo 38-50 cm",
    "Visibilidad: 360 grados (Tiras reflectantes plata)",
    "Material: Polímero resistente y bandas elásticas transpirables",
    "Uso: Motociclismo, ciclismo, running, peatones"
  ],
  "tags": ["chaleco reflectante", "2 piezas", "alta visibilidad", "verde", "seguridad vial", "arnés deportivo", "moto"],
  "articleSource": "Top Equipos de Seguridad 2025"
},

{
  "id": "advancare-guantes-nitrilo-azul-1000pz",
  "name": "Caja Master Guantes de Nitrilo Advancare Azul (1000 pzas) - Grado Médico",
  "description": "Paquete mayorista de 1000 guantes de nitrilo azul (10 cajas de 100 unidades). Libres de polvo y no estériles. Cuentan con formulación avanzada probada para resistir más de 60 productos químicos y aprobada para la manipulación de medicamentos de quimioterapia. Ofrecen ajuste cómodo y alta sensibilidad táctil.",
  "category": "Protección Manual",
  "subcategory": "Guantes Desechables",
  "brand": "Advancare",
  "price": "Consultar precio",
  "rating": 0.0,
  "reviews": 0,
  "image": "/images/catalogo/advancare/guantes-nitrilo-1000pz.webp",
  "amazonUrl": "https://mercadolibre.com/sec/1SGZfkE",
  "features": [
    "Contenido: 1000 Guantes (10 cajas x 100)",
    "Material: Nitrilo avanzado (Sin polvo)",
    "Resistencia: +60 productos químicos y medicamentos de quimioterapia",
    "Textura: Antideslizante con alta sensibilidad táctil",
    "Uso: Médico, Laboratorio, Industrial, Limpieza",
    "Grado: Profesional / Examen"
  ],
  "tags": ["guantes nitrilo", "1000 piezas", "advancare", "grado médico", "quimioterapia", "sin polvo", "azul", "EPP"],
  "articleSource": "Top Equipos de Seguridad 2025"
},

{
  "id": "bluelander-guantes-nitrilo-azul-200pz-m",
  "name": "Guantes de Nitrilo Azul Bluelander Talla Mediana (200 Pzas) - Sin Polvo",
  "description": "Paquete de 200 guantes desechables de nitrilo azul, libres de látex y polvo. Diseñados especialmente para personas con alergias o piel sensible (hipoalergénicos). Ofrecen una barrera resistente contra productos químicos, virus y bacterias. Ideales para aplicaciones médicas, industria alimentaria, limpieza y tareas generales.",
  "category": "Protección Manual",
  "subcategory": "Guantes Desechables",
  "brand": "Bluelander",
  "price": "Consultar precio",
  "rating": 4.7,
  "reviews": 2375,
  "image": "/images/catalogo/bluelander/guantes-nitrilo-200pz-m.webp",
  "amazonUrl": "https://mercadolibre.com/sec/1EfnvUQ",
  "features": [
    "Contenido: 200 Piezas",
    "Talla: Mediana",
    "Material: Nitrilo (Libre de látex y polvo)",
    "Propiedad: Hipoalergénicos",
    "Protección: Resistente a químicos, virus y bacterias",
    "Uso: Salud, alimentos, industria y limpieza"
  ],
  "tags": ["guantes nitrilo", "bluelander", "sin latex", "hipoalergénico", "200 piezas", "azul", "examen", "seguridad sanitaria"],
  "articleSource": "Top Equipos de Seguridad 2025"
},

{
  "id": "ambiderm-soft-nitrilo-negro-100pz-g",
  "name": "Guantes de Nitrilo Negro Ambiderm Soft Talla G (100 Pzas) - Antideslizantes",
  "description": "Caja de 100 guantes desechables de nitrilo color negro, modelo Ambiderm Soft. Diseño con textura antideslizante para un agarre seguro. Fabricados libres de látex y polvo, ideales para prevenir alergias. Ofrecen una barrera resistente contra productos químicos, virus y bacterias. Marca mexicana líder en el sector médico y dental.",
  "category": "Protección Manual",
  "subcategory": "Guantes Desechables",
  "brand": "Ambiderm",
  "price": "Consultar precio",
  "rating": 4.8,
  "reviews": 4582,
  "image": "/images/catalogo/ambiderm/guantes-nitrilo-negro-soft.webp",
  "amazonUrl": "https://mercadolibre.com/sec/32ThShR",
  "features": [
    "Contenido: 100 Unidades (Talla G / Grande)",
    "Material: Nitrilo (Sin látex ni polvo)",
    "Color: Negro (Ideal para uso estético, tatuajes y alimentos)",
    "Textura: Antideslizante",
    "Protección: Alta resistencia a químicos y biológicos",
    "Origen: Marca Mexicana (Visión Eco-friendly)"
  ],
  "tags": ["guantes nitrilo", "negro", "ambiderm", "sin latex", "antideslizante", "tatuaje", "medico", "100 piezas", "soft"],
  "articleSource": "Top Equipos de Seguridad 2025"
}, 

{
  "id": "msa-10219290-linea-temporal-30m",
  "name": "Línea de Vida Temporal Horizontal MSA 30m (Cable de Acero) 2 Usuarios",
  "description": "Sistema de línea de vida horizontal temporal de cable de acero galvanizado ajustable hasta 30 metros (100 pies). Diseñada para soportar hasta 2 trabajadores simultáneamente. Incluye sistema de desplazadores (bypass shuttles) que permiten el paso por los puntos intermedios sin desconectarse, anclajes de brazo cruzado y absorbedor de impactos.",
  "category": "Trabajos en Alturas",
  "subcategory": "Líneas de Vida Horizontales",
  "brand": "MSA",
  "price": "Consultar precio",
  "rating": 0.0,
  "reviews": 0,
  "image": "/images/catalogo/msa/linea-vida-temporal-10219290.webp",
  "amazonUrl": "https://mercadolibre.com/sec/2Y29wRG",
  "features": [
    "Longitud máxima: 30 metros (100 pies)",
    "Capacidad: 2 Trabajadores simultáneos",
    "Material: Cable de acero galvanizado (Alta resistencia)",
    "Sistema Bypass: Incluye 2 desplazadores para paso continuo",
    "Componentes: Tensor, indicador de tensión, absorbedor y 2 anclajes de brazo cruzado",
    "Normativa: Cumple OSHA 29 CFR 1910.140 / 1926.502"
  ],
  "tags": ["MSA", "línea de vida horizontal", "cable acero", "10219290", "bypass", "2 usuarios", "OSHA", "seguridad industrial"],
  "articleSource": "Top Equipos de Seguridad 2025"
},

  {
    id: "lica-kit-seguridad",
    name: "Lica Kit de Seguridad (Arnés + Línea + Punto Fijo)",
    description: "Kit completo de protección en alturas que incluye arnés, línea de vida con amortiguador, punto fijo y mochila.",
    category: "Trabajos en Alturas",
    subcategory: "Kits de Altura",
    brand: "Lica",
    price: "Consultar precio",
    rating: 4.7,
    reviews: 78,
    image: "/images/catalogo/kit-arnes-lica/kit-arnes.webp",
    amazonUrl: "https://mercadolibre.com/sec/18FXEdR",
    features: [
      "Arnés de 1 anillo",
      "Línea de vida con amortiguador (1.83m)",
      "Certificaciones ANSI Z359.1-2014 y CE",
      "Incluye mochila de transporte",
      "Punto fijo incluido"
    ],
    tags: ["kit", "completo", "certificada", "económico"],
    articleSource: "Top Equipos de Seguridad 2025"
  },
  {
    id: "golden-eagle-pf0090",
    name: "Golden Eagle PF0090 Punto Fijo con Argolla",
    description: "Dispositivo de anclaje de 90cm diseñado para resistir hasta 2,268 kgs (5,000 lbs).",
    category: "Trabajos en Alturas",
    subcategory: "Puntos de Anclaje",
    brand: "Golden Eagle",
    price: "Consultar precio",
    rating: 4.8,
    reviews: 54,
    image: "/images/catalogo/punto-anclaje-golden-eagle/punto-anclaje-golden-eagle.webp",
    amazonUrl: "https://mercadolibre.com/sec/1imPnS7",
    features: [
      "Longitud: 90cm / 2.9ft",
      "Norma ANSI Z359.18-2017",
      "Capacidad: 140Kg/310lbs",
      "Banda poliéster alta tenacidad 1 3/4\"",
      "Anillo D de Acero"
    ],
    tags: ["profesional", "alta resistencia", "certificado", "duradero"],
    articleSource: "Top Equipos de Seguridad 2025"
  },
  {
    id: "sterkman-ask-pf",
    name: "Sterkman ASK-PF Punto Fijo de Seguridad",
    description: "Punto de anclaje fabricado en México con poliéster de alta calidad para máxima seguridad.",
    category: "Trabajos en Alturas",
    subcategory: "Puntos de Anclaje",
    brand: "Sterkman",
    price: "Consultar precio",
    rating: 4.5,
    reviews: 1,
    image: "/images/catalogo/punto-anclaje/punto-anclaje.webp",
    amazonUrl: "https://mercadolibre.com/sec/1ecBr5H",
    features: [
      "Certificación ANSI Z359.11.2021",
      "Material: Poliéster resistente",
      "Fabricado en México",
      "Color Amarillo alta visibilidad",
      "1 punto de anclaje"
    ],
    tags: ["nacional", "básico", "seguro", "industrial"],
    articleSource: "Top Equipos de Seguridad 2025"
  },
{
  "id": "warthog-safety-ws-50wdg",
  "name": "Línea De Vida Doble Gancho Grande Con Amortiguador 1.83",
  "description": "Línea de vida modelo WS-50WDG con sistema de amortiguación y doble gancho grande, diseñada para reducir el impacto de caídas y ofrecer seguridad continua sin vencimiento.",
  "category": "Trabajos en Alturas",
  "subcategory": "Líneas de Vida",
  "brand": "Warthog Safety Golden Eagle",
  "price": "Consultar precio",
  "rating": 4.8,
  "reviews": 19,
  "image": "/images/catalogo/Linea-vida-doble-gancho-grande-amortiguador-183/Linea-vida-doble-gancho-grande-amortiguador-183.webp",
  "amazonUrl": "https://mercadolibre.com/sec/1Mnnaiv",
  "features": [
    "Doble gancho grande para anclaje versátil",
    "Sistema de amortiguación de impacto",
    "Sin fecha de vencimiento (uso continuo)",
    "Longitud de 1.83 metros",
    "Modelo robusto WS-50WDG"
  ],
  "tags": [
    "amortiguador",
    "seguridad industrial",
    "doble gancho",
    "construcción",
    "protección caídas"
  ],
  "articleSource": "Top Equipos de Seguridad 2025"
},
  {
    id: "infra-ala-ancha",
    name: "Infra Casco Ala Ancha con Matraca",
    description: "Casco de protección Clase E tipo Ala Ancha con suspensión de 4 puntos.",
    category: "Trabajos en Alturas",
    subcategory: "Protección Cabeza",
    brand: "Infra",
    price: "Consultar precio",
    rating: 4.8,
    reviews: 425,
    image: "/images/catalogo/casco-ala-ancha/casco-ala-anchaaa.webp",
    amazonUrl: "https://mercadolibre.com/sec/2rtyiCD",
    features: [
      "Material: Polietileno de alta densidad",
      "Ajuste de Matraca",
      "Norma ANSI/SEA Z89.1-2014",
      "Protección Clase E",
      "Cómodo y ligero (420g)"
    ],
    tags: ["casco", "protección", "infra", "obra"],
    articleSource: "Top Equipos de Seguridad 2025"
  },
  {
    id: "truper-cas-bi",
    name: "Truper CAS-BI Casco Ventilado",
    description: "Casco estilo cachucha ventilado, fabricado en polietileno virgen de alta densidad.",
    category: "Trabajos en Alturas",
    subcategory: "Protección Cabeza",
    brand: "Truper",
    price: "Consultar precio",
    rating: 4.9,
    reviews: 293,
    image: "/images/catalogo/casco-seguridad-ventilado-ajuste-matraca-blanco/casco-seguridad-ventilado-ajuste-matraca-blanco.webp",
    amazonUrl: "https://mercadolibre.com/sec/1agV3fs",
    features: [
      "Clase C (contra impacto vertical)",
      "Ajuste de matraca",
      "Diseño ventilado para frescura",
      "Color blanco refleja calor",
      "Sin arnés metálico"
    ],
    tags: ["ventilado", "truper", "ligero", "económico"],
    articleSource: "Top Equipos de Seguridad 2025"
  },
 {
  "id": "infra-ala-ancha-ylw",
  "name": "Casco Seguridad Tipo Ala Ancha Ajuste Matraca Infra Color Amarillo",
  "description": "Casco de protección Clase E modelo Ala Ancha con suspensión de 4 puntos y sistema de ajuste tipo matraca.",
  "category": "Seguridad Industrial",
  "subcategory": "Protección Cabeza",
  "brand": "Infra",
  "price": "Consultar precio",
  "rating": 4.8,
  "reviews": 1282,
  "image": "/images/catalogo/casco-seguridad-infra-ala-ancha-matraca-amarillo/casco-seguridad-infra-ala-ancha-matraca-amarillo.webp",
  "amazonUrl": "https://mercadolibre.com/sec/2rtyiCD",
  "features": [
    "Suspensión de 4 puntos con matraca",
    "Material: Polietileno de alta densidad",
    "Certificación NOM-115-STPS-2009 y ANSI/SEA Z89.1",
    "Peso ligero (420 g)",
    "Diseño Clase E Tipo Ala Ancha"
  ],
  "tags": ["infra", "ala ancha", "matraca", "norma stps", "polietileno"],
  "articleSource": "Top Equipos de Seguridad 2025"
},
  {
    id: "msa-v-gard-kit",
    name: "MSA V-Gard Kit Casco + Barbiquejo",
    description: "Kit de casco ala ancha V-Gard con barbiquejo de 4 puntos incluido.",
    category: "Trabajos en Alturas",
    subcategory: "Protección Cabeza",
    brand: "MSA",
    price: "Consultar precio",
    rating: 4.4,
    reviews: 3,
    image: "/images/catalogo/casco-con-barbiquejp/casco-con-barbiquejo.webp",
    amazonUrl: "https://mercadolibre.com/sec/11JXe5c",
    features: [
      "Cumple NOM-115-STPS-2009 y NRF-058",
      "Suspensión con Matraca",
      "Incluye barbiquejo de 4 puntos",
      "Protección contra tensión eléctrica",
      "Polietileno de alta densidad"
    ],
    tags: ["msa", "premium", "eléctrico", "kit"],
    articleSource: "Top Equipos de Seguridad 2025"
  },
  {
    id: "generic-casco-visera",
    name: "Casco de Seguridad con Visera y Orejeras",
    description: "Casco industrial multifuncional con ranuras para accesorios, ideal para rescate y minería.",
    category: "Trabajos en Alturas",
    subcategory: "Protección Cabeza",
    brand: "Genérico",
    price: "Consultar precio",
    rating: 5.0,
    reviews: 1,
    image: "/images/catalogo/kit-casco/kit-cascos.webp",
    amazonUrl: "https://mercadolibre.com/sec/12czggY",
    features: [
      "Visor y orejeras integrables",
      "Material ABS resistente",
      "Elementos reflectivos",
      "Cumplimiento estándares internacionales",
      "Diseño versátil y ligero"
    ],
    tags: ["multifuncional", "rescate", "minería", "completo"],
    articleSource: "Top Equipos de Seguridad 2025"
  },
  {
    id: "sfp-shield-doble",
    name: "SFP Shield Línea Retráctil Doble Brazo",
    description: "Retráctil doble brazo de 6 pies (1.80m) cumpliendo normativa ANSI Z359.14-2021.",
    category: "Trabajos en Alturas",
    subcategory: "Líneas de Vida",
    brand: "SFP SHIELD FALL PROTECTION",
    price: "Consultar precio",
    rating: 5.0,
    reviews: 4,
    image: "/images/catalogo/linea-vida-doble-ganchol/linea-vida-doble-gancho.webp",
    amazonUrl: "https://mercadolibre.com/sec/2y6ydc2",
    features: [
      "Doble brazo independiente (1.80m c/u)",
      "Ganchos grandes (2.36\" apertura)",
      "Carcasa de aluminio indestructible",
      "ANSI Z359.14-2021 Clase 1",
      "Extremadamente ligero (7 Lbs)"
    ],
    tags: ["retráctil", "doble brazo", "normativa 2021", "premium"],
    articleSource: "Top Equipos de Seguridad 2025"
  },
  {
    id: "sfp-shield-2m",
    name: "SFP Shield Línea Retráctil 2 Metros",
    description: "Retráctil personal liviano con cinta de nylon y gancho de aluminio anticorrosión.",
    category: "Trabajos en Alturas",
    subcategory: "Líneas de Vida",
    brand: "SFP SHIELD FALL PROTECTION",
    price: "Consultar precio",
    rating: 5.0,
    reviews: 3,
    image: "/images/catalogo/linea-vida-retractil/linea-vida-retractil.webp",
    amazonUrl: "https://mercadolibre.com/sec/2Wuisk4",
    features: [
      "Cinta de Nylon de 2.00 Metros",
      "Gancho y mosquetón de aluminio",
      "Indicador de impactos",
      "ANSI Z359.14-2021 Clase 1",
      "Carcasa polímero alta resistencia"
    ],
    tags: ["retráctil", "personal", "ligero", "aluminio"],
    articleSource: "Top Equipos de Seguridad 2025"
  },
  {
    id: "alto-rwtr-6ft",
    name: "Alto Línea Retráctil Doble 1.80m",
    description: "Línea de seguridad de conexión permanente con cinta Dyneema de alta resistencia.",
    category: "Trabajos en Alturas",
    subcategory: "Líneas de Vida",
    brand: "Alto",
    price: "Consultar precio",
    rating: 5.0,
    reviews: 1,
    image: "/images/catalogo/linea-retractil/linea-retractil.webp",
    amazonUrl: "https://mercadolibre.com/sec/19YTWv8",
    features: [
      "Cinta material Dyneema (1 pulgada)",
      "Doble gancho acero con doble seguro",
      "ANSI Z359.14-2014 (Clase 1)",
      "Resistencia ganchos 2,268 kg",
      "Longitud 6 pies (1.80m)"
    ],
    tags: ["dyneema", "doble", "resistencia", "altura"],
    articleSource: "Top Equipos de Seguridad 2025"
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
    image: "/images/catalogo/jaloma-22.webp",
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
    image: "/images/catalogo/gabinete-surtek.webp",
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
    image: "/images/catalogo/redkap-ct10.webp",
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
    image: "/images/catalogo/dickies-peto.webp",
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
    image: "/images/catalogo/guigua-mono-reparacion.webp",
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
    image: "/images/catalogo/sanfu-multibolsillos.webp",
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
    image: "/images/catalogo/brisco-industrial-reflejante.webp",
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
    image: "/images/catalogo/berrendo-3017.webp",
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
    image: "/images/catalogo/caterpillar-second-shift.webp",
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
    image: "/images/catalogo/timberland-pro-pit-boss.webp",
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
    image: "/images/catalogo/riverline-spyder-spyg2.webp",
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
    image: "/images/catalogo/timberland-pro-pit-6.webp",
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
    image: "/images/catalogo/nieion-tenis-safety.webp",
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
    image: "/images/catalogo/ekinio-tenis-seguridad.webp",
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
    image: "/images/catalogo/pro-tex-bolsas-cargo.webp",
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
    image: "/images/catalogo/botiquin-metalico-equipado.webp",
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
    image: "/images/catalogo/matein-1233.webp",
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
    image: "/images/catalogo/blekrasi-ifak.webp",
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
    image: "/images/catalogo/botiquin-industrial-num5.webp",
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


  // Chalecos añadidos desde recommendedcatalogo (mapeados a category "EPP")
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
    image: "/images/catalogo/gabardina-elite.webp",
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
    image: "/images/catalogo/bicolor-ansi.webp",
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
    image: "/images/catalogo/malla-economica.webp",
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
    image: "/images/catalogo/professional-max.webp",
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
    image: "/images/catalogo/microprismas-naranja.webp",
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
    image: "/images/catalogo/breakaway-pro.webp",
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
    image: "/images/catalogo/termico-invierno.webp",
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
    "image": "/images/catalogo/uni-t-ut363.webp",
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
    "image": "/images/catalogo/cinta-barricada-surtek-100m.webp",
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
    "image": "/images/catalogo/cono-surtek-45cm.webp",
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
    "image": "/images/catalogo/combyeo-arnes.webp",
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
    "image": "/images/catalogo/lica-kit.webp",
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
    "image": "/images/catalogo/infra-msa-fullbrim.webp",
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
    "image": "/images/catalogo/malla-seguridad-1-2x30m.webp",
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
    "image": "/images/catalogo/linea-vida-1-8m.webp",
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
    "image": "/images/catalogo/hawk-av-f12.webp",
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
    "image": "/images/catalogo/zait-andamio-1-5x2-0x1-93m.webp",
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
    "image": "/images/catalogo/3m-dbi-sala-9501403.webp",
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
    "image": "/images/catalogo/petzl-jag-rescue-kit.webp",
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
    image: "/images/catalogo/kleenguard-nemesis-v30.webp",
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
    image: "/images/catalogo/milwaukee-antirayaduras.webp",
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
    image: "/images/catalogo/3m-securefit-400-scotchgard.webp",
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
    image: "/images/catalogo/hexarmor-vs250-variomatic.webp",
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
    image: "/images/catalogo/truper-sobrelente-101954.webp",
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
    image: "/images/catalogo/bolle-swift-otg-platinum-lite.webp",
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
    image: "/images/catalogo/combyeo-kit-F.webp",
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
    image: "/images/catalogo/jyrsa-jyr-10a.webp",
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
    image: "/images/catalogo/truper-14434.webp",
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
    image: "/images/catalogo/lica-kit.webp",
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
    image: "/images/catalogo/msa-vform.webp",
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
    image: "/images/catalogo/warthog-safety-5p.webp",
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
    image: "/images/catalogo/cuprum-c-3217-06.webp",
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
    image: "/images/catalogo/truper-101906.webp",
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
    image: "/images/catalogo/cuprum-494-24n.webp",
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
    image: "/images/catalogo/werner-platforma.webp",
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
    image: "/images/catalogo/escalera-convertible-economica.webp",
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
    image: "/images/catalogo/fluke-117.webp",
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
    image: "/images/catalogo/uni-t-ut204-plus.webp",
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
    image: "/images/catalogo/kaiweets-ht118a.webp",
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
    image: "/images/catalogo/fluke-101.webp",
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
    image: "/images/catalogo/astroai-trms-6000.webp",
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
    image: "/images/catalogo/klein-mm400.webp",
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
    image: "/images/catalogo/dewalt-dcd7781d2-b3.webp",
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
    image: "/images/catalogo/bosch-gsb-18v-50.webp",
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
    image: "/images/catalogo/truper-roto-1-2a8.webp",
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
    image: "/images/catalogo/makita-hp1630.webp",
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
    image: "/images/catalogo/milwaukee-m18-fuel-2tool.webp",
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
    image: "/images/catalogo/dewalt-dch133m2.webp",
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
    image: "/images/catalogo/goxawee-ir.webp",
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
    image: "/images/catalogo/truper-18229.webp",
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
    image: "/images/catalogo/uni-t-ut300s.webp",
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
    image: "/images/catalogo/fluke-62-max.webp",
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
    image: "/images/catalogo/klein-ir07.webp",
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
    image: "/images/catalogo/fluke-51-ii.webp",
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
    image: "/images/catalogo/sika-sikaflex-1a-purform.webp",
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
    image: "/images/catalogo/loctite-si-596-rtv-rojo.webp",
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
    image: "/images/catalogo/sika-anchorfix-2-tropical.webp",
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
    image: "/images/catalogo/dap-alex-plus.webp",
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
    image: "/images/catalogo/tekbond-poliuretano-310ml.webp",
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
    image: "/images/catalogo/pennsylvania-duretan.webp",
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

// Componente para manejar imágenes en las tarjetas con fallback a emojis
function ProductCardImage({ product }: { product: Product }) {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const getEmojiByCategory = (category: string) => {
    switch (category) {
      case 'Herramientas': return '🔧';
      case 'EPP': return '🦺';
      case 'Instrumentos': return '📊';
      case 'Seguridad': return '🛡️';
      default: return '📦';
    }
  };

  return (
    <>
      {product.image && !imageError && (
        <Image
          src={product.image}
          alt={product.name}
          fill
          className={`object-cover transition-all duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          onLoad={() => setImageLoaded(true)}
          onError={() => {
            setImageError(true);
            setImageLoaded(false);
          }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      )}

      {/* Fallback emoji cuando no hay imagen o error de carga */}
      {(!product.image || imageError || !imageLoaded) && (
        <div className="text-7xl group-hover:text-8xl transition-all duration-300 filter drop-shadow-lg">
          {getEmojiByCategory(product.category)}
        </div>
      )}
    </>
  );
}

export default function CatalogoPage() {
  const [mounted, setMounted] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todas');
  const [selectedSubcategory, setSelectedSubcategory] = useState('all');
  const [selectedBrand, setSelectedBrand] = useState('all');
  const [ratingFilter, setRatingFilter] = useState(0);
  const [sortBy, setSortBy] = useState('name');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [loading, setLoading] = useState(false);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [filteredProducts, setFilteredProducts] = useState(productCatalog);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [showModal, setShowModal] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Mouse tracking for spectacular effects
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { damping: 25, stiffness: 150 });
  const springY = useSpring(mouseY, { damping: 25, stiffness: 150 });

  // Scroll and view animations
  const { scrollY } = useScroll();
  const headerRef = useRef<HTMLDivElement>(null);
  const filtersRef = useRef<HTMLDivElement>(null);
  const productsRef = useRef<HTMLDivElement>(null);

  const headerInView = useInView(headerRef, { once: true });
  const filtersInView = useInView(filtersRef, { once: true });
  const productsInView = useInView(productsRef, { once: true });

  // Mouse movement handler
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

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

  // Advanced filter and sort products
  useEffect(() => {
    setLoading(true);

    let filtered = productCatalog;

    // Apply category filter
    if (selectedCategory !== 'Todas') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Apply subcategory filter
    if (selectedSubcategory !== 'all') {
      filtered = filtered.filter(product => product.subcategory === selectedSubcategory);
    }

    // Apply brand filter
    if (selectedBrand !== 'all') {
      filtered = filtered.filter(product => product.brand === selectedBrand);
    }

    // Apply rating filter
    if (ratingFilter > 0) {
      filtered = filtered.filter(product => product.rating >= ratingFilter);
    }

    // Apply search filter
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchLower) ||
        product.description.toLowerCase().includes(searchLower) ||
        product.brand.toLowerCase().includes(searchLower) ||
        product.category.toLowerCase().includes(searchLower) ||
        product.subcategory.toLowerCase().includes(searchLower) ||
        product.tags.some(tag => tag.toLowerCase().includes(searchLower)) ||
        product.features.some(feature => feature.toLowerCase().includes(searchLower))
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
        case 'brand':
          return a.brand.localeCompare(b.brand);
        case 'newest':
          // Simular ordenación por más nuevo basado en el ID
          return b.id.localeCompare(a.id);
        default:
          return a.name.localeCompare(b.name);
      }
    });

    // Simular delay de carga
    setTimeout(() => {
      setFilteredProducts(filtered);
      setLoading(false);
    }, 300);
  }, [searchTerm, selectedCategory, selectedSubcategory, selectedBrand, ratingFilter, sortBy]);

  // Utility functions
  const toggleFavorite = (productId: string) => {
    setFavorites(prev =>
      prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const clearAllFilters = () => {
    setSearchTerm('');
    setSelectedCategory('Todas');
    setSelectedSubcategory('all');
    setSelectedBrand('all');
    setRatingFilter(0);
    setSortBy('name');
  };

  const getActiveFiltersCount = () => {
    let count = 0;
    if (selectedCategory !== 'Todas') count++;
    if (selectedSubcategory !== 'all') count++;
    if (selectedBrand !== 'all') count++;
    if (ratingFilter > 0) count++;
    return count;
  };

  // Get unique values for filters
  const categories = ['Todas', ...Array.from(new Set(productCatalog.map(p => p.category)))];
  const subcategories = ['all', ...Array.from(new Set(productCatalog.map(p => p.subcategory)))];
  const brands = ['all', ...Array.from(new Set(productCatalog.map(p => p.brand)))];

  const handleProductClick = (product: Product) => {
    // trackInteraction('product_click', product.name, 'catalog');
    console.log('Product clicked:', product.name);
  };

  // Mouse-tracking background transform (must be declared before JSX)
  const backgroundTransform = useTransform(
    [springX, springY],
    ([x, y]) =>
      `radial-gradient(600px at ${x}px ${y}px, rgba(59, 130, 246, 0.15), transparent 70%)`
  );

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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-950 relative overflow-hidden">
      {/* Mouse-tracking background effects */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-transparent to-purple-600/5"
        style={{
          background: backgroundTransform,
        }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0">
        {CATALOG_PARTICLES.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/20 rounded-full"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: particle.delay,
            }}
          />
        ))}
      </div>

      {/* Spectacular Hero Section */}
      <motion.section
        ref={headerRef}
        className="relative py-24 md:py-32 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Dynamic background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />

          {/* Floating industry icons */}
          {['🛠️', '🔧', '🦺', '📊', '🛡️', '⚙️', '🔩', '🧰', '📏', '🪛', '🔨', '⚡'].map((icon, i) => (
            <motion.div
              key={i}
              className="absolute text-2xl text-white/10"
              style={{
                left: `${(i * 8.33 + 10) % 90}%`,
                top: `${(i * 7.14 + 15) % 70 + 15}%`,
              }}
              animate={{
                y: [0, -30, 0],
                rotate: [0, 360],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 15 + (i % 5),
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
            >
              {icon}
            </motion.div>
          ))}
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1
            }}
            transition={{ duration: 1, type: "spring", bounce: 0.4 }}
          >
            <motion.div
              className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", bounce: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
            >
              <Sparkles className="h-5 w-5 text-yellow-300" />
              <span className="text-white font-medium">Catálogo Premium</span>
              <Badge className="bg-yellow-500 text-black text-xs font-bold">
                {productCatalog.length} Productos
              </Badge>
            </motion.div>

            <motion.h1
              className="text-5xl lg:text-7xl font-black mb-8 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent leading-tight"
              initial={{ y: 50, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1
              }}
              transition={{ duration: 1, delay: 0.5 }}
              whileHover={{
                scale: 1.02,
                textShadow: '0 0 30px rgba(59, 130, 246, 0.8)'
              }}
            >
              Catálogo Industrial<br />
              <span className="text-4xl lg:text-5xl bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
                Productos Verificados
              </span>
            </motion.h1>

            <motion.p
              className="text-xl lg:text-2xl mb-12 text-blue-100 max-w-4xl mx-auto leading-relaxed"
              initial={{ y: 30, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1
              }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              Explora <span className="font-bold text-white">{productCatalog.length} productos industriales</span> cuidadosamente
              seleccionados y <span className="font-bold text-yellow-300">reseñados por expertos</span> en nuestros artículos especializados.
              <br />
              <motion.span
                className="inline-block mt-4 text-lg font-semibold text-green-300"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Solo productos reales con enlaces verificados ✓
              </motion.span>
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center items-center gap-6 mb-8"
              initial={{ y: 40, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1
              }}
              transition={{ duration: 1, delay: 0.9 }}
            >
              {[
                { icon: Shield, text: "Productos Verificados", color: "from-green-400 to-emerald-500" },
                { icon: Award, text: "Reseñas Profesionales", color: "from-yellow-400 to-orange-500" },
                { icon: TrendingUp, text: "Mejor Calidad-Precio", color: "from-blue-400 to-cyan-500" }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className={`flex items-center gap-3 bg-gradient-to-r ${item.color} text-black px-4 py-2 rounded-full font-semibold text-sm shadow-lg`}
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{
                    scale: 1,
                    rotate: 0
                  }}
                  transition={{
                    type: "spring",
                    bounce: 0.6,
                    delay: 1.1 + (i * 0.1)
                  }}
                  whileHover={{ scale: 1.05, rotate: 5 }}
                >
                  <item.icon className="h-4 w-4" />
                  {item.text}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Advanced Search & Filters Section */}
      <motion.section
        ref={filtersRef}
        className="py-8 bg-gradient-to-r from-white via-gray-50 to-white shadow-lg border-b relative overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={{
          opacity: 1,
          y: 0
        }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Subtle background pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-purple-500/5" />

        <div className="container mx-auto px-6 relative z-10">
          {/* Enhanced Search Bar - Store Style */}
          <motion.div
            className="max-w-4xl mx-auto mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="relative group">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                animate={{
                  scale: [1, 1.02, 1],
                  opacity: [0.2, 0.3, 0.2]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              <div className="relative bg-white/90 backdrop-blur-sm border-2 border-gray-200 rounded-3xl p-2 shadow-xl group-hover:border-blue-300 transition-all duration-300">
                <div className="flex items-center">
                  <div className="flex-1 relative">
                    <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400 group-hover:text-blue-500 transition-colors duration-300" />
                    <Input
                      type="text"
                      placeholder="Buscar herramientas, EPP, instrumentos..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-14 pr-4 py-4 text-lg bg-transparent border-0 focus:ring-0 placeholder:text-gray-400 text-gray-800 font-medium"
                    />
                  </div>

                  <div className="flex items-center gap-2 pr-2">
                    {searchTerm && (
                      <motion.button
                        onClick={() => setSearchTerm('')}
                        className="h-10 w-10 rounded-full bg-gray-100 hover:bg-red-100 flex items-center justify-center transition-colors group/btn"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <X className="h-4 w-4 text-gray-600 group-hover/btn:text-red-500" />
                      </motion.button>
                    )}

                    <motion.button
                      className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Search className="h-5 w-5" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Advanced Filters */}
          <div className="space-y-6">
            {/* Desktop Filters */}
            <div className="hidden lg:block">
              <motion.div
                className="flex items-center justify-between mb-6"
                initial={{ opacity: 0, x: -30 }}
                animate={{
                  opacity: 1,
                  x: 0
                }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <SlidersHorizontal className="h-5 w-5 text-blue-600" />
                    <span className="text-lg font-semibold text-gray-800">Filtros</span>
                    {getActiveFiltersCount() > 0 && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full"
                      >
                        {getActiveFiltersCount()}
                      </motion.div>
                    )}
                  </div>
                  {getActiveFiltersCount() > 0 && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={clearAllFilters}
                      className="text-red-600 hover:text-red-700 hover:bg-red-50"
                    >
                      <X className="h-4 w-4 mr-1" />
                      Limpiar filtros
                    </Button>
                  )}
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-600">
                    <span className="font-semibold text-blue-600">{filteredProducts.length}</span> de{' '}
                    <span className="font-semibold">{productCatalog.length}</span> productos
                  </span>
                </div>
              </motion.div>

              <motion.div
                className="grid lg:grid-cols-12 gap-4 items-center mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0
                }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {/* Category Filter */}
                <div className="lg:col-span-3">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="relative"
                  >
                    <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                      <SelectTrigger className="h-12 text-base border-2 border-gray-200 rounded-2xl bg-white/90 backdrop-blur-sm hover:border-blue-300 focus:border-blue-500 transition-all duration-300 shadow-sm hover:shadow-md">
                        <SelectValue placeholder="📂 Categoría" />
                      </SelectTrigger>
                      <SelectContent className="rounded-2xl border-2 shadow-2xl bg-white/95 backdrop-blur-sm">
                        {categories.map((category) => (
                          <SelectItem key={category} value={category} className="text-base py-3 hover:bg-blue-50">
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </motion.div>
                </div>

                {/* Brand Filter */}
                <div className="lg:col-span-3">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="relative"
                  >
                    <Select value={selectedBrand} onValueChange={setSelectedBrand}>
                      <SelectTrigger className="h-12 text-base border-2 border-gray-200 rounded-2xl bg-white/90 backdrop-blur-sm hover:border-blue-300 focus:border-blue-500 transition-all duration-300 shadow-sm hover:shadow-md">
                        <SelectValue placeholder="🏢 Marca" />
                      </SelectTrigger>
                      <SelectContent className="rounded-2xl border-2 shadow-2xl bg-white/95 backdrop-blur-sm">
                        <SelectItem value="all" className="text-base py-3 hover:bg-blue-50">Todas las marcas</SelectItem>
                        {brands.filter(b => b !== 'all').map((brand) => (
                          <SelectItem key={brand} value={brand} className="text-base py-3 hover:bg-blue-50">
                            {brand}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </motion.div>
                </div>

                {/* Rating Filter */}
                <div className="lg:col-span-3">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white/90 backdrop-blur-sm border-2 border-gray-200 rounded-2xl px-4 py-3 hover:border-blue-300 transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">⭐ Rating mínimo</span>
                      <span className="text-sm font-bold text-blue-600">
                        {ratingFilter > 0 ? `${ratingFilter}+` : 'Cualquiera'}
                      </span>
                    </div>
                    <Slider
                      value={[ratingFilter]}
                      onValueChange={([value]) => setRatingFilter(value)}
                      max={5}
                      min={0}
                      step={0.5}
                      className="w-full"
                    />
                  </motion.div>
                </div>

                {/* View Controls and Sort */}
                <div className="lg:col-span-3 flex items-center justify-end gap-3">
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-40 h-12 text-base border-2 border-gray-200 rounded-2xl bg-white/90 backdrop-blur-sm hover:border-blue-300 focus:border-blue-500 transition-all duration-300 shadow-sm hover:shadow-md">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="rounded-2xl border-2 shadow-2xl bg-white/95 backdrop-blur-sm">
                      <SelectItem value="name" className="text-base py-3 hover:bg-blue-50">Nombre A-Z</SelectItem>
                      <SelectItem value="rating" className="text-base py-3 hover:bg-blue-50">Mejor calificados</SelectItem>
                      <SelectItem value="reviews" className="text-base py-3 hover:bg-blue-50">Más reseñas</SelectItem>
                      <SelectItem value="category" className="text-base py-3 hover:bg-blue-50">Por categoría</SelectItem>
                      <SelectItem value="brand" className="text-base py-3 hover:bg-blue-50">Por marca</SelectItem>
                      <SelectItem value="newest" className="text-base py-3 hover:bg-blue-50">Más recientes</SelectItem>
                    </SelectContent>
                  </Select>

                  <div className="flex items-center gap-2 text-sm font-medium text-gray-600 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-2xl px-4 py-2">
                    <span>{filteredProducts.length}</span>
                    <span>productos</span>
                  </div>

                  <div className="flex border-2 border-gray-200 rounded-2xl bg-white/90 backdrop-blur-sm overflow-hidden">
                    <motion.button
                      onClick={() => setViewMode('grid')}
                      className={`p-3 transition-all duration-300 ${viewMode === 'grid'
                          ? 'bg-blue-500 text-white shadow-inner'
                          : 'text-gray-600 hover:text-blue-500 hover:bg-blue-50'
                        }`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Grid3X3 className="h-5 w-5" />
                    </motion.button>
                    <motion.button
                      onClick={() => setViewMode('list')}
                      className={`p-3 transition-all duration-300 border-l-2 border-gray-200 ${viewMode === 'list'
                          ? 'bg-blue-500 text-white shadow-inner'
                          : 'text-gray-600 hover:text-blue-500 hover:bg-blue-50'
                        }`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <List className="h-5 w-5" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>

              {/* Active Filters Pills - Store Style */}
              {(searchTerm || selectedCategory !== 'Todas' || selectedBrand !== 'all' || ratingFilter > 0) && (
                <motion.div
                  className="flex flex-wrap items-center gap-3 p-4 bg-blue-50 rounded-2xl border border-blue-200"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-sm font-medium text-blue-800">Filtros activos:</span>

                  {searchTerm && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      className="flex items-center gap-2 bg-blue-500 text-white px-3 py-1.5 rounded-full text-sm font-medium"
                    >
                      <Search className="h-3 w-3" />
                      <span>{searchTerm}</span>
                      <button
                        onClick={() => setSearchTerm('')}
                        className="hover:bg-blue-600 rounded-full p-0.5 transition-colors"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </motion.div>
                  )}

                  {selectedCategory !== 'Todas' && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      className="flex items-center gap-2 bg-green-500 text-white px-3 py-1.5 rounded-full text-sm font-medium"
                    >
                      <span>{selectedCategory}</span>
                      <button
                        onClick={() => setSelectedCategory('Todas')}
                        className="hover:bg-green-600 rounded-full p-0.5 transition-colors"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </motion.div>
                  )}

                  {selectedBrand !== 'all' && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      className="flex items-center gap-2 bg-purple-500 text-white px-3 py-1.5 rounded-full text-sm font-medium"
                    >
                      <span>{selectedBrand}</span>
                      <button
                        onClick={() => setSelectedBrand('all')}
                        className="hover:bg-purple-600 rounded-full p-0.5 transition-colors"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </motion.div>
                  )}

                  {ratingFilter > 0 && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      className="flex items-center gap-2 bg-yellow-500 text-white px-3 py-1.5 rounded-full text-sm font-medium"
                    >
                      <Star className="h-3 w-3" />
                      <span>{ratingFilter}+</span>
                      <button
                        onClick={() => setRatingFilter(0)}
                        className="hover:bg-yellow-600 rounded-full p-0.5 transition-colors"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </motion.div>
                  )}

                  <motion.button
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedCategory('Todas');
                      setSelectedBrand('all');
                      setRatingFilter(0);
                    }}
                    className="ml-auto text-sm font-medium text-red-600 hover:text-red-700 hover:bg-red-50 px-3 py-1.5 rounded-full transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <X className="h-4 w-4 mr-1 inline" />
                    Limpiar todo
                  </motion.button>
                </motion.div>
              )}
            </div>

            {/* Mobile Filters */}
            <div className="lg:hidden">
              <div className="flex items-center justify-between mb-4">
                <Sheet open={showFilters} onOpenChange={setShowFilters}>
                  <SheetTrigger asChild>
                    <Button variant="outline" className="flex items-center gap-2">
                      <Filter className="h-4 w-4" />
                      Filtros
                      {getActiveFiltersCount() > 0 && (
                        <Badge variant="secondary" className="text-xs">
                          {getActiveFiltersCount()}
                        </Badge>
                      )}
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-80">
                    <SheetHeader>
                      <SheetTitle>Filtros de búsqueda</SheetTitle>
                    </SheetHeader>
                    <div className="py-6 space-y-6">
                      {/* Mobile Search */}
                      <div className="space-y-2">
                        <Label className="text-sm font-medium text-gray-700">Buscar productos</Label>
                        <div className="relative">
                          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input
                            placeholder="Buscar productos..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-9 bg-white/80 backdrop-blur-sm border-gray-200 focus:border-blue-400"
                          />
                        </div>
                      </div>

                      {/* Mobile Category Filter */}
                      <div className="space-y-2">
                        <Label className="text-sm font-medium text-gray-700">Categoría</Label>
                        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                          <SelectTrigger className="bg-white/80 backdrop-blur-sm border-gray-200 focus:border-blue-400">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {categories.map((category) => (
                              <SelectItem key={category} value={category}>
                                {category}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Mobile Brand Filter */}
                      <div className="space-y-2">
                        <Label className="text-sm font-medium text-gray-700">Marca</Label>
                        <Select value={selectedBrand} onValueChange={setSelectedBrand}>
                          <SelectTrigger className="bg-white/80 backdrop-blur-sm border-gray-200 focus:border-blue-400">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">Todas las marcas</SelectItem>
                            {brands.filter(b => b !== 'all').map((brand) => (
                              <SelectItem key={brand} value={brand}>
                                {brand}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Mobile Rating Filter */}
                      <div className="space-y-2">
                        <Label className="text-sm font-medium text-gray-700">Calificación mínima</Label>
                        <Select value={ratingFilter.toString()} onValueChange={(v) => setRatingFilter(parseFloat(v))}>
                          <SelectTrigger className="bg-white/80 backdrop-blur-sm border-gray-200 focus:border-blue-400">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="0">Cualquier calificación</SelectItem>
                            <SelectItem value="4.5">4.5+ estrellas</SelectItem>
                            <SelectItem value="4">4+ estrellas</SelectItem>
                            <SelectItem value="3.5">3.5+ estrellas</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Mobile Sort Filter */}
                      <div className="space-y-2">
                        <Label className="text-sm font-medium text-gray-700">Ordenar por</Label>
                        <Select value={sortBy} onValueChange={setSortBy}>
                          <SelectTrigger className="bg-white/80 backdrop-blur-sm border-gray-200 focus:border-blue-400">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="name">Nombre A-Z</SelectItem>
                            <SelectItem value="rating">Mejor calificados</SelectItem>
                            <SelectItem value="reviews">Más reseñas</SelectItem>
                            <SelectItem value="category">Por categoría</SelectItem>
                            <SelectItem value="brand">Por marca</SelectItem>
                            <SelectItem value="newest">Más recientes</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Mobile Active Filters */}
                      {(selectedCategory !== 'Todas' || selectedBrand !== 'all' || ratingFilter > 0 || searchTerm) && (
                        <div className="pt-4 border-t">
                          <Label className="text-sm font-medium text-gray-700 mb-3 block">Filtros activos</Label>
                          <div className="flex flex-wrap gap-2">
                            {searchTerm && (
                              <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                                "{searchTerm}"
                                <button
                                  onClick={() => setSearchTerm('')}
                                  className="ml-2 hover:bg-blue-200 rounded-full p-0.5"
                                >
                                  <X className="h-3 w-3" />
                                </button>
                              </Badge>
                            )}
                            {selectedCategory !== 'Todas' && (
                              <Badge variant="secondary" className="bg-green-100 text-green-800">
                                {selectedCategory}
                                <button
                                  onClick={() => setSelectedCategory('Todas')}
                                  className="ml-2 hover:bg-green-200 rounded-full p-0.5"
                                >
                                  <X className="h-3 w-3" />
                                </button>
                              </Badge>
                            )}
                            {selectedBrand !== 'all' && (
                              <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                                {selectedBrand}
                                <button
                                  onClick={() => setSelectedBrand('all')}
                                  className="ml-2 hover:bg-purple-200 rounded-full p-0.5"
                                >
                                  <X className="h-3 w-3" />
                                </button>
                              </Badge>
                            )}
                            {ratingFilter > 0 && (
                              <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                                {ratingFilter}+ estrellas
                                <button
                                  onClick={() => setRatingFilter(0)}
                                  className="ml-2 hover:bg-yellow-200 rounded-full p-0.5"
                                >
                                  <X className="h-3 w-3" />
                                </button>
                              </Badge>
                            )}
                          </div>

                          <Button
                            variant="outline"
                            size="sm"
                            className="mt-3 w-full"
                            onClick={() => {
                              setSearchTerm('');
                              setSelectedCategory('Todas');
                              setSelectedBrand('all');
                              setRatingFilter(0);
                            }}
                          >
                            <X className="w-4 h-4 mr-2" />
                            Limpiar todos los filtros
                          </Button>
                        </div>
                      )}
                    </div>
                  </SheetContent>
                </Sheet>

                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">
                    {filteredProducts.length} productos
                  </span>
                  <div className="flex border rounded-md">
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
            </div>

            {/* Active filters display */}
            {(selectedCategory !== 'Todas' || selectedBrand !== 'all' || ratingFilter > 0 || searchTerm) && (
              <motion.div
                className="flex flex-wrap gap-2"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.3 }}
              >
                {searchTerm && (
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                    Búsqueda: "{searchTerm}"
                    <button
                      onClick={() => setSearchTerm('')}
                      className="ml-2 hover:bg-blue-200 rounded-full p-0.5"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                )}
                {selectedCategory !== 'Todas' && (
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    {selectedCategory}
                    <button
                      onClick={() => setSelectedCategory('Todas')}
                      className="ml-2 hover:bg-green-200 rounded-full p-0.5"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                )}
                {selectedBrand !== 'all' && (
                  <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                    Marca: {selectedBrand}
                    <button
                      onClick={() => setSelectedBrand('all')}
                      className="ml-2 hover:bg-purple-200 rounded-full p-0.5"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                )}
                {ratingFilter > 0 && (
                  <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                    {ratingFilter}+ estrellas
                    <button
                      onClick={() => setRatingFilter(0)}
                      className="ml-2 hover:bg-yellow-200 rounded-full p-0.5"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                )}
              </motion.div>
            )}
          </div>
        </div>
      </motion.section>

      {/* Products Grid/List */}
      <section className="py-12 relative">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        </div>

        <div className="container mx-auto px-6 relative">
          {/* Enhanced Results Counter */}
          {filteredProducts.length > 0 && (
            <motion.div
              className="flex items-center justify-between mb-8 p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-blue-100"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Award className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Productos encontrados</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {filteredProducts.length}
                    <span className="text-sm text-gray-500 font-normal ml-1">
                      de {productCatalog.length} total
                    </span>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                {/* Quality indicators */}
                <div className="hidden sm:flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1 text-green-600">
                    <Shield className="w-4 h-4" />
                    <span className="font-medium">
                      {filteredProducts.filter(p => p.rating >= 4.5).length} premium
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-blue-600">
                    <TrendingUp className="w-4 h-4" />
                    <span className="font-medium">
                      {filteredProducts.filter(p => p.reviews > 100).length} populares
                    </span>
                  </div>
                </div>

                {/* View mode indicators - enhanced */}
                <div className="flex items-center gap-1 bg-gray-100 rounded-lg p-1">
                  <Button
                    variant={viewMode === 'grid' ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode('grid')}
                    className={`px-3 ${viewMode === 'grid' ? 'bg-blue-600 text-white' : ''}`}
                  >
                    <Grid3X3 className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode('list')}
                    className={`px-3 ${viewMode === 'list' ? 'bg-blue-600 text-white' : ''}`}
                  >
                    <List className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
          {loading ? (
            // Loading State with Spectacular Animation
            <div className="text-center py-20">
              <motion.div
                className="inline-flex items-center justify-center space-x-2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  className="w-8 h-8 bg-blue-500 rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: 0,
                  }}
                />
                <motion.div
                  className="w-8 h-8 bg-indigo-500 rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: 0.2,
                  }}
                />
                <motion.div
                  className="w-8 h-8 bg-purple-500 rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: 0.4,
                  }}
                />
              </motion.div>
              <motion.h3
                className="text-2xl font-bold text-gray-900 mb-2 mt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                Cargando productos increíbles...
              </motion.h3>
              <motion.p
                className="text-gray-600"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                Preparando la mejor selección para ti
              </motion.p>
            </div>
          ) : filteredProducts.length === 0 ? (
            // Enhanced Empty State
            <motion.div
              className="text-center py-20"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="relative inline-block mb-8"
                animate={{
                  rotate: [0, -10, 10, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3
                }}
              >
                <div className="text-8xl mb-4 filter drop-shadow-lg">🔍</div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">0</span>
                </div>
              </motion.div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                ¡Ups! No encontramos productos
              </h3>
              <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
                Intenta ajustar los filtros o cambiar el término de búsqueda para descubrir productos increíbles
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold"
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('Todas');
                    setSelectedBrand('all');
                    setRatingFilter(0);
                  }}
                >
                  <X className="w-5 h-5 mr-2" />
                  Limpiar todos los filtros
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-200 text-blue-600 hover:bg-blue-50"
                  onClick={() => setSearchTerm('')}
                >
                  <Search className="w-5 h-5 mr-2" />
                  Nueva búsqueda
                </Button>
              </div>

              {/* Suggested actions */}
              <div className="mt-12 p-6 bg-blue-50 rounded-xl max-w-lg mx-auto">
                <h4 className="font-semibold text-gray-900 mb-3">💡 Sugerencias:</h4>
                <div className="space-y-2 text-sm text-gray-700">
                  <p>• Prueba palabras clave más generales</p>
                  <p>• Revisa la ortografía de tu búsqueda</p>
                  <p>• Explora diferentes categorías</p>
                  <p>• Reduce los filtros de calificación</p>
                </div>
              </div>
            </motion.div>
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
                  whileHover={{ y: -8, scale: 1.03 }}
                  className={`group cursor-pointer ${viewMode === 'list' ? 'w-full' : ''}`}
                  onMouseEnter={() => handleProductClick(product)}
                  onClick={() => {
                    setSelectedProduct(product);
                    setShowModal(true);
                    setCurrentImageIndex(0);
                  }}
                >
                  {viewMode === 'grid' ? (
                    // Enhanced Grid View - Inspired by Store Design
                    <Card className="h-full hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm group-hover:bg-white group-hover:shadow-blue-200/50">
                      <div className="relative overflow-hidden">
                        {/* Enhanced Product Image Area */}
                        <div className="relative aspect-square bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-500">
                          <ProductCardImage product={product} />

                          {/* Gradient overlay on hover */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                          {/* Enhanced badges */}
                          <div className="absolute top-3 left-3 flex flex-col gap-1">
                            <Badge className="bg-blue-600/90 text-white text-xs font-semibold backdrop-blur-sm">
                              {product.category}
                            </Badge>
                            {product.rating >= 4.5 && (
                              <Badge className="bg-green-500/90 text-white text-xs font-semibold backdrop-blur-sm">
                                ⭐ Top Rated
                              </Badge>
                            )}
                          </div>

                          {/* Hover Actions */}
                          <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                            <Button
                              size="sm"
                              variant="secondary"
                              className="h-9 w-9 p-0 bg-white/90 hover:bg-white shadow-lg backdrop-blur-sm"
                              onClick={(e) => {
                                e.stopPropagation();
                                window.open(product.amazonUrl, '_blank');
                              }}
                            >
                              <ExternalLink className="h-4 w-4 text-blue-600" />
                            </Button>
                          </div>

                          {/* Premium floating badge */}
                          <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                            <Badge variant="outline" className="bg-white/90 text-xs font-medium backdrop-blur-sm border-gray-300">
                              {product.articleSource}
                            </Badge>
                          </div>
                        </div>
                      </div>

                      {/* Enhanced Content Area */}
                      <div className="p-5">
                        <div className="space-y-3">
                          {/* Brand and Title */}
                          <div>
                            <p className="text-xs font-medium text-blue-600 uppercase tracking-wider mb-1">
                              {product.brand}
                            </p>
                            <h3 className="font-bold text-lg line-clamp-2 leading-tight text-gray-900 group-hover:text-blue-900 transition-colors">
                              {product.name}
                            </h3>
                          </div>

                          {/* Description */}
                          <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">
                            {product.description}
                          </p>

                          {/* Enhanced Rating */}
                          <div className="flex items-center gap-3">
                            <div className="flex items-center gap-1">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-4 h-4 transition-all duration-200 ${i < Math.floor(product.rating)
                                      ? 'text-yellow-400 fill-current'
                                      : 'text-gray-300'
                                    }`}
                                />
                              ))}
                            </div>
                            <span className="text-sm font-bold text-gray-900">{product.rating}</span>
                            <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                              {product.reviews} reseñas
                            </span>
                          </div>
                        </div>

                        {/* Enhanced CTA Button */}
                        <div className="mt-6">
                          <Button
                            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleProductClick(product);
                              window.open(product.amazonUrl, '_blank');
                            }}
                          >
                            <ShoppingBag className="w-5 h-5 mr-2" />
                            Ver Producto
                            <ExternalLink className="w-4 h-4 ml-2" />
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ) : (
                    // Enhanced List View - Premium Design
                    <Card className="hover:shadow-xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm group-hover:bg-white overflow-hidden">
                      <div className="flex p-6 relative">
                        {/* Enhanced Image Area */}
                        <div className="relative w-40 h-40 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden group-hover:scale-105 transition-all duration-300">
                          <div className="text-5xl group-hover:text-6xl transition-all duration-300 filter drop-shadow-lg">
                            {product.category === 'Herramientas' && '🔧'}
                            {product.category === 'EPP' && '🦺'}
                            {product.category === 'Instrumentos' && '📊'}
                            {product.category === 'Seguridad' && '🛡️'}
                          </div>

                          {/* Category Badge */}
                          <Badge className="absolute top-2 left-2 bg-blue-600/90 text-white text-xs font-semibold backdrop-blur-sm">
                            {product.category}
                          </Badge>

                          {/* Top rated badge */}
                          {product.rating >= 4.5 && (
                            <Badge className="absolute top-2 right-2 bg-green-500/90 text-white text-xs font-semibold backdrop-blur-sm">
                              ⭐ Top
                            </Badge>
                          )}
                        </div>

                        {/* Enhanced Content Area */}
                        <div className="ml-8 flex-1 flex flex-col justify-between">
                          <div>
                            {/* Brand and Title Section */}
                            <div className="mb-4">
                              <div className="flex items-center gap-3 mb-2">
                                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider bg-blue-50 px-2 py-1 rounded-full">
                                  {product.brand}
                                </span>
                                <Badge variant="outline" className="text-xs bg-white/80 backdrop-blur-sm">
                                  {product.articleSource}
                                </Badge>
                              </div>
                              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-900 transition-colors line-clamp-2">
                                {product.name}
                              </h3>
                              <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed text-base">
                                {product.description}
                              </p>
                            </div>
                          </div>

                          {/* Bottom Section - Rating and Tags */}
                          <div className="space-y-4">
                            {/* Enhanced Rating */}
                            <div className="flex items-center gap-4">
                              <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`w-5 h-5 transition-all duration-200 ${i < Math.floor(product.rating)
                                        ? 'text-yellow-400 fill-current'
                                        : 'text-gray-300'
                                      }`}
                                  />
                                ))}
                              </div>
                              <span className="font-bold text-lg text-gray-900">{product.rating}</span>
                              <span className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                                {product.reviews} reseñas
                              </span>
                            </div>

                            {/* Tags and CTA Section */}
                            <div className="flex items-center justify-between">
                              <div className="flex flex-wrap gap-2">
                                {product.tags.slice(0, 4).map((tag) => (
                                  <Badge key={tag} variant="secondary" className="text-xs bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors">
                                    {tag}
                                  </Badge>
                                ))}
                              </div>

                              {/* Enhanced CTA Button */}
                              <div className="flex justify-end">
                                <Button
                                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold px-6 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleProductClick(product);
                                    window.open(product.amazonUrl, '_blank');
                                  }}
                                >
                                  <ShoppingBag className="w-4 h-4 mr-2" />
                                  Ver Producto
                                  <ExternalLink className="w-4 h-4 ml-2" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Decorative gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-blue-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                      </div>
                    </Card>
                  )}
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Enhanced CTA Section with Spectacular Effects */}
      <section className="relative py-20 overflow-hidden">
        {/* Enhanced Background with Moving Gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900"></div>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.3),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.2),transparent_50%)]"></div>
        </div>

        {/* Animated Background Particles */}
        <div className="absolute inset-0">
          {CATALOG_PARTICLES.slice(0, 6).map((particle, index) => (
            <motion.div
              key={index}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
              }}
              animate={{
                y: [-20, 20, -20],
                x: [-10, 10, -10],
                opacity: [0.2, 0.5, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                delay: particle.delay,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            {/* Enhanced Heading */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                ¿Buscas más información?
              </h2>
              <div className="flex items-center justify-center gap-4 mb-6">
                <motion.div
                  className="w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: 64 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
                <motion.div
                  className="text-3xl"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                >
                  📚
                </motion.div>
                <motion.div
                  className="w-16 h-1 bg-gradient-to-l from-blue-400 to-purple-400 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: 64 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </div>
            </motion.div>

            {/* Enhanced Description */}
            <motion.p
              className="text-xl md:text-2xl text-blue-100 mb-12 leading-relaxed max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Descubre nuestros artículos detallados con reseñas expertas, comparativas profundas
              y guías de compra especializadas para tomar siempre la mejor decisión.
            </motion.p>

            {/* Enhanced CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-blue-50 font-bold py-4 px-8 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300">
                  <Link href="/blog" className="flex items-center gap-3">
                    <Award className="w-6 h-6" />
                    Leer Artículos del Blog
                    <ExternalLink className="w-5 h-5" />
                  </Link>
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button asChild size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 font-bold py-4 px-8 rounded-2xl backdrop-blur-sm transition-all duration-300">
                  <Link href="/guias" className="flex items-center gap-3">
                    <Shield className="w-6 h-6" />
                    Ver Guías Técnicas
                    <TrendingUp className="w-5 h-5" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Enhanced Feature Highlights */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {[
                { icon: Users, title: "Reseñas Expertas", desc: "Análisis profesionales de cada producto" },
                { icon: TrendingUp, title: "Comparativas", desc: "Comparaciones detalladas para tu decisión" },
                { icon: Shield, title: "Guías Técnicas", desc: "Información especializada y confiable" }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="text-center group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1 + index * 0.2 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="p-4 bg-white/10 backdrop-blur-sm rounded-2xl group-hover:bg-white/20 transition-all duration-300 mb-4">
                    <feature.icon className="w-12 h-12 text-white mx-auto group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-blue-100 text-sm">{feature.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Product Modal */}
      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className="max-w-4xl h-[100vh] sm:h-auto sm:max-h-[90vh] overflow-hidden p-0 mx-0 sm:mx-4 w-full sm:w-auto rounded-none sm:rounded-lg">
          {selectedProduct && (
            <div className="flex flex-col h-full">
              {/* Modal Header */}
              <DialogHeader className="p-3 sm:p-6 pb-2 sm:pb-4 border-b">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                    <Badge className="bg-blue-100 text-blue-800 text-xs sm:text-sm font-semibold">
                      {selectedProduct.category}
                    </Badge>
                    <Badge variant="outline" className="text-xs sm:text-sm">
                      {selectedProduct.brand}
                    </Badge>
                  </div>

                </div>
                <DialogTitle className="text-base sm:text-2xl font-bold text-left mt-1 sm:mt-2 leading-tight">
                  {selectedProduct.name}
                </DialogTitle>
              </DialogHeader>

              <div className="flex-1 overflow-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                <div className="flex flex-col lg:grid lg:grid-cols-2 gap-2 sm:gap-6 p-2 sm:p-6">
                  {/* Image Carousel */}
                  <div className="order-1 lg:order-none space-y-2 sm:space-y-4 flex flex-col items-center lg:items-start">
                    <div className="relative bg-gray-50 rounded-lg sm:rounded-2xl overflow-hidden aspect-[3/2] sm:aspect-[4/3] lg:aspect-square max-h-[200px] sm:max-h-[300px] lg:max-h-none w-full max-w-sm sm:max-w-none">
                      <Image
                        src={selectedProduct.images?.[currentImageIndex] || selectedProduct.image || '/api/placeholder/400/400'}
                        alt={selectedProduct.name}
                        fill
                        className="object-cover"
                      />

                      {/* Navigation arrows */}
                      {selectedProduct.images && selectedProduct.images.length > 1 && (
                        <>
                          <button
                            onClick={() => setCurrentImageIndex(prev =>
                              prev === 0 ? selectedProduct.images.length - 1 : prev - 1
                            )}
                            className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-1.5 sm:p-2 shadow-lg transition-all"
                          >
                            <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
                          </button>
                          <button
                            onClick={() => setCurrentImageIndex(prev =>
                              prev === selectedProduct.images.length - 1 ? 0 : prev + 1
                            )}
                            className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-1.5 sm:p-2 shadow-lg transition-all"
                          >
                            <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
                          </button>
                        </>
                      )}

                      {/* Image indicators */}
                      {selectedProduct.images && selectedProduct.images.length > 1 && (
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                          {(selectedProduct.images as string[]).map((_: string, index: number) => (
                            <button
                              key={index}
                              onClick={() => setCurrentImageIndex(index)}
                              className={`w-2 h-2 rounded-full transition-all ${index === currentImageIndex
                                  ? 'bg-white scale-125'
                                  : 'bg-white/50 hover:bg-white/75'
                                }`}
                            />
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Thumbnail strip */}
                    {selectedProduct.images && selectedProduct.images.length > 1 && (
                      <div className="flex gap-2 overflow-x-auto pb-2 justify-center lg:justify-start">
                        {(selectedProduct.images as string[]).map((img: string, index: number) => (
                          <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${index === currentImageIndex
                                ? 'border-blue-500 scale-105'
                                : 'border-gray-200 hover:border-blue-300'
                              }`}
                          >
                            <Image
                              src={img}
                              alt={`${selectedProduct.name} - ${index + 1}`}
                              width={64}
                              height={64}
                              className="object-cover w-full h-full"
                            />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Product Details */}
                  <div className="order-2 lg:order-none space-y-2 sm:space-y-6 text-center lg:text-left">
                    {/* Price */}
                    {selectedProduct.price && selectedProduct.price !== "Consultar precio" && (
                      <div className="bg-gradient-to-r from-green-50 to-blue-50 p-3 sm:p-4 rounded-lg border border-green-200">
                        <div className="text-xl sm:text-3xl font-bold text-green-700">
                          ${selectedProduct.price}
                        </div>
                        {selectedProduct.originalPrice && (
                          <div className="text-xs sm:text-sm text-gray-500 line-through">
                            Antes: ${selectedProduct.originalPrice}
                          </div>
                        )}
                      </div>
                    )}

                    {/* Rating and Reviews */}
                    <div className="flex items-center justify-center lg:justify-start gap-2 sm:gap-4">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 sm:w-5 sm:h-5 ${i < Math.floor(selectedProduct.rating)
                                ? 'text-yellow-400 fill-yellow-400'
                                : i < selectedProduct.rating
                                  ? 'text-yellow-400 fill-yellow-400 opacity-50'
                                  : 'text-gray-300'
                              }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm sm:text-lg font-semibold">{selectedProduct.rating}</span>
                      <span className="text-gray-600 text-xs sm:text-base">({selectedProduct.reviews} reseñas)</span>
                    </div>

                    {/* Description */}
                    <div>
                      <h3 className="text-sm sm:text-lg font-semibold mb-1 sm:mb-2">Descripción</h3>
                      <p className="text-gray-700 leading-relaxed text-xs sm:text-base max-h-20 sm:max-h-none overflow-y-auto">
                        {selectedProduct.description || "Producto de alta calidad seleccionado por nuestros expertos."}
                      </p>
                    </div>

                    {/* Features */}
                    {selectedProduct.features && (
                      <div>
                        <h3 className="text-sm sm:text-lg font-semibold mb-1 sm:mb-2">Características</h3>
                        <ul className="space-y-0.5 sm:space-y-1 max-h-24 sm:max-h-40 lg:max-h-none overflow-y-auto">
                          {(selectedProduct.features as string[]).map((feature: string, index: number) => (
                            <li key={index} className="flex items-start justify-center lg:justify-start gap-2 text-gray-700 text-xs sm:text-base">
                              <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-blue-500 rounded-full flex-shrink-0 mt-1.5 sm:mt-2" />
                              <span className="leading-tight text-center lg:text-left">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Price and CTA */}
                    <div className="space-y-2 sm:space-y-4 pt-2 sm:pt-4 border-t">
                      {selectedProduct.originalPrice && (
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-xs sm:text-sm text-gray-500 line-through">
                            ${selectedProduct.originalPrice}
                          </span>
                          <Badge className="bg-green-100 text-green-800 text-xs">
                            {Math.round(((selectedProduct.originalPrice - selectedProduct.price) / selectedProduct.originalPrice) * 100)}% OFF
                          </Badge>
                        </div>
                      )}

                      <div className="w-full">
                        <div className="group relative w-full overflow-hidden rounded-xl">
                          {/* Resplandor de fondo */}
                          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl blur-md opacity-40 group-hover:opacity-70 transition-opacity duration-300 scale-110" />

                          <Button
                            size="lg"
                            className="relative w-full h-12 sm:h-16 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:from-yellow-500 hover:via-yellow-600 hover:to-orange-500 text-black font-bold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] border-2 sm:border-3 border-yellow-300 hover:border-blue-400 z-10 text-base sm:text-lg"
                            onClick={() => window.open(selectedProduct.amazonUrl, '_blank')}
                          >
                            {/* Efecto de destello principal */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl overflow-hidden">
                              <div
                                className="absolute inset-0 rounded-xl"
                                style={{
                                  background: 'linear-gradient(90deg, transparent 0%, rgba(59, 130, 246, 0.4) 30%, rgba(147, 197, 253, 0.6) 50%, rgba(59, 130, 246, 0.4) 70%, transparent 100%)',
                                  animation: 'shimmer 1.5s infinite',
                                }}
                              />
                            </div>

                            {/* Bordes destellantes */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none">
                              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-blue-400 to-transparent">
                                <div
                                  className="h-full bg-gradient-to-r from-transparent via-blue-500 to-transparent"
                                  style={{ animation: 'shimmer 2s infinite' }}
                                />
                              </div>
                              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-blue-400 to-transparent">
                                <div
                                  className="h-full bg-gradient-to-r from-transparent via-blue-500 to-transparent"
                                  style={{ animation: 'shimmer 2s infinite 0.5s' }}
                                />
                              </div>
                              <div className="absolute top-0 bottom-0 left-0 w-[3px] bg-gradient-to-b from-transparent via-blue-400 to-transparent">
                                <div
                                  className="w-full bg-gradient-to-b from-transparent via-blue-500 to-transparent"
                                  style={{ animation: 'shimmer 2s infinite 1s' }}
                                />
                              </div>
                              <div className="absolute top-0 bottom-0 right-0 w-[3px] bg-gradient-to-b from-transparent via-blue-400 to-transparent">
                                <div
                                  className="w-full bg-gradient-to-b from-transparent via-blue-500 to-transparent"
                                  style={{ animation: 'shimmer 2s infinite 1.5s' }}
                                />
                              </div>
                            </div>

                            {/* Icono y texto */}
                            <div className="relative flex items-center justify-center z-10">
                              <ShoppingBag className="w-5 h-5 sm:w-7 sm:h-7 mr-2 sm:mr-3 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110" />
                              <span className="relative text-sm sm:text-lg md:text-xl font-extrabold">
                                <span className="group-hover:opacity-0 transition-opacity duration-200">
                                  <span className="hidden sm:inline">Comprar en Mercado Libre</span>
                                  <span className="sm:hidden">Comprar en ML</span>
                                </span>
                                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 font-black whitespace-nowrap">
                                  <span className="hidden sm:inline">¡Comprar ahora mismo!</span>
                                  <span className="sm:hidden">¡Comprar ya!</span>
                                </span>
                              </span>
                              <Sparkles className="w-4 h-4 sm:w-6 sm:h-6 ml-2 sm:ml-3 opacity-0 group-hover:opacity-100 transition-all duration-300 text-blue-600 animate-pulse" />
                            </div>
                          </Button>
                        </div>
                      </div>
                    </div>

                    {/* Additional Info */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 text-xs sm:text-sm text-gray-600 text-center lg:text-left">
                      <div>
                        <span className="font-medium">Marca:</span> {selectedProduct.brand}
                      </div>
                      <div>
                        <span className="font-medium">Categoría:</span> {selectedProduct.category}
                      </div>
                      {selectedProduct.model && (
                        <div className="col-span-1 sm:col-span-2">
                          <span className="font-medium">Modelo:</span> {selectedProduct.model}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}