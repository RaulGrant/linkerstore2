'use client'

import { useState, useEffect, useMemo } from "react";
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShoppingBag, Target, Timer, FileText, Star, Search } from "lucide-react";
import { trackEvent, generateTrackingId } from '@/lib/meta-pixel';
import { useScrollTracking } from '@/hooks/useScrollTracking';
import TrustedBrandsBanner from '@/components/home/TrustedBrandsBanner';


interface CountdownProps {
  targetDate: Date;
}

function CountdownTimer({ targetDate }: CountdownProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 40,
    hours: 6,
    minutes: 7,
    seconds: 40
  });

  // Calcular tiempo inicial del lado del servidor
  useEffect(() => {
    setIsMounted(true);
    
    // Calcular tiempo inicial inmediatamente
    const now = new Date().getTime();
    const distance = targetDate.getTime() - now;

    if (distance > 0) {
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  // No renderizar hasta que el componente esté montado
  if (!isMounted) {
    return (
      <div className="flex justify-center gap-2 sm:gap-4 mt-8 px-4 sm:px-0">
        {[
          { label: "Días", value: 51 },
          { label: "Horas", value: 0 },
          { label: "Minutos", value: 0 },
          { label: "Segundos", value: 0 }
        ].map((item, index) => (
          <div key={index} className="text-center">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2 sm:p-4 min-w-[60px] sm:min-w-[80px] border border-white/30">
              <div className="text-xl sm:text-3xl font-bold text-white">
                {item.value.toString().padStart(2, '0')}
              </div>
              <div className="text-xs sm:text-sm text-blue-100 font-medium">
                {item.label}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex justify-center gap-2 sm:gap-4 mt-8 px-4 sm:px-0">
      {[
        { label: "Días", value: timeLeft.days },
        { label: "Horas", value: timeLeft.hours },
        { label: "Minutos", value: timeLeft.minutes },
        { label: "Segundos", value: timeLeft.seconds }
      ].map((item, index) => (
        <motion.div 
          key={index} 
          className="text-center"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: index * 0.1, type: "spring", bounce: 0.4 }}
          whileHover={{ scale: 1.05 }}
        >
          <motion.div 
            className="bg-white/20 backdrop-blur-sm rounded-lg p-2 sm:p-4 min-w-[60px] sm:min-w-[80px] border border-white/30"
            animate={{
              boxShadow: [
                "0 0 20px rgba(59, 130, 246, 0.3)",
                "0 0 30px rgba(30, 144, 255, 0.4)",
                "0 0 20px rgba(59, 130, 246, 0.3)"
              ]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              type: "tween"
            }}
          >
            <motion.div 
              className="text-xl sm:text-3xl font-bold text-white"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: "easeInOut",
                type: "tween"
              }}
            >
              {item.value.toString().padStart(2, '0')}
            </motion.div>
            <div className="text-xs sm:text-sm text-blue-100 font-medium">
              {item.label}
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}

interface CatalogProduct {
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

// Importar productos del catálogo
async function getAllCatalogProducts(): Promise<CatalogProduct[]> {
  try {
    const response = await fetch('https://linkerstore.com.mx/catalogo', {
      cache: 'no-store'
    });
    if (!response.ok) return [];
    // Aquí iríamos a extraer los productos, pero por ahora retornamos un array vacío
    return [];
  } catch (error) {
    console.error('Error fetching catalog:', error);
    return [];
  }
}

function ProductCatalogSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [products, setProducts] = useState<CatalogProduct[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showMoreProducts, setShowMoreProducts] = useState(false);

  // Todos los productos del catálogo
  const allCatalogProducts: CatalogProduct[] = [
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
      features: ["247 piezas", "Acero CR-V", "Matracas 72 dientes"],
      tags: ["profesional", "mecánica"],
      articleSource: "Top 7 Kits",
    },
    {
      id: "pretul-set-83",
      name: "Pretul SET-83 Kit de Herramientas",
      description: "Kit económico de 83 piezas con herramientas esenciales.",
      category: "Herramientas",
      subcategory: "Kits de Herramientas",
      brand: "Pretul",
      price: "Consultar precio",
      rating: 4.2,
      reviews: 850,
      image: "/images/catalogo/llaves-pretul.webp",
      amazonUrl: "https://mercadolibre.com/sec/1GQ24Dg",
      features: ["83 piezas", "Acero al carbono", "Métrico e imperial"],
      tags: ["económico", "básico"],
      articleSource: "Top 7 Kits",
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
      features: ["238 piezas", "Puntas magnéticas", "Acero aleado"],
      tags: ["versátil", "bricolaje", "completo"],
      articleSource: "Top 7 Kits",
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
      features: ["150 piezas", "Electrónicos", "Compacto"],
      tags: ["electrónicos", "precisión", "compacto"],
      articleSource: "Top 7 Kits",
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
      features: ["Taladro inalámbrico", "Batería litio", "Completo"],
      tags: ["eléctrico", "completo", "hogar"],
      articleSource: "Top 7 Kits",
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
      features: ["216 piezas", "3 matracas", "Maletín rígido"],
      tags: ["extenso", "económico", "matracas"],
      articleSource: "Top 7 Kits",
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
      features: ["168 piezas", "Curitas", "Guantes"],
      tags: ["emergencia", "híbrido", "auto"],
      articleSource: "Top 7 Kits",
    },
    {
      id: "jaloma-22",
      name: "Jaloma Botiquín en Caja Plástica (22 pzas)",
      description: "Botiquín básico y portátil en caja plástica de 22 piezas, ideal para oficinas pequeñas, hogar y auto.",
      category: "Seguridad",
      subcategory: "Botiquines",
      brand: "Jaloma",
      price: "Consultar precio",
      rating: 4.8,
      reviews: 300,
      image: "/images/catalogo/jaloma-22.webp",
      amazonUrl: "https://mercadolibre.com/sec/17VWdsg",
      features: ["22 piezas", "Portátil", "Económico"],
      tags: ["botiquín", "primeros auxilios", "portátil"],
      articleSource: "Botiquines",
    },
    {
      id: "gabinete-surtek-vacio",
      name: "Gabinete para Botiquín Surtek (Vacío)",
      description: "Gabinete metálico vacío para montar en pared, hecho en lámina calibre 24.",
      category: "Seguridad",
      subcategory: "Botiquines",
      brand: "Surtek",
      price: "Consultar precio",
      rating: 4.8,
      reviews: 220,
      image: "/images/catalogo/gabinete-surtek.webp",
      amazonUrl: "https://mercadolibre.com/sec/2wiufhR",
      features: ["Metálico", "Calibre 24", "Montaje en pared"],
      tags: ["gabinete", "botiquín fijo", "metálico"],
      articleSource: "Botiquines",
    },
    {
      id: "redkap-ct10",
      name: "Overol Industrial Alta Visibilidad Reflejante Capucha (Red Kap CT10)",
      description: "Overol industrial con capucha y cintas reflectantes, resistente a suciedad y polvo.",
      category: "EPP",
      subcategory: "Ropa de Seguridad",
      brand: "Red Kap",
      price: "Consultar precio",
      rating: 4.2,
      reviews: 150,
      image: "/images/catalogo/redkap-ct10.webp",
      amazonUrl: "https://mercadolibre.com/sec/2fgbB41",
      features: ["Capucha integrada", "Cintas reflectantes", "Duradero"],
      tags: ["overol", "alta visibilidad", "capucha"],
      articleSource: "Overoles",
    },
    {
      id: "dickies-peto",
      name: "Overol Industrial Con Cintas Reflejantes Unisex (Dickies Peto)",
      description: "Overol unisex con cintas reflectantes y múltiples bolsillos seguros.",
      category: "EPP",
      subcategory: "Ropa de Seguridad",
      brand: "Dickies",
      price: "Consultar precio",
      rating: 4.0,
      reviews: 15,
      image: "/images/catalogo/dickies-peto.webp",
      amazonUrl: "https://mercadolibre.com/sec/1sD7aUv",
      features: ["Cintas reflectantes", "Bolsillos seguros", "Cómodo"],
      tags: ["overol", "unisex", "reflejante"],
      articleSource: "Overoles",
    },
    {
      id: "guigua-mono-reparacion",
      name: "GUIGUA Mono de Reparación",
      description: "Mono ligero de poliéster económico, ideal para talleres pequeños.",
      category: "EPP",
      subcategory: "Ropa de Seguridad",
      brand: "GUIGUA",
      price: "Consultar precio",
      rating: 4.6,
      reviews: 450,
      image: "/images/catalogo/guigua-mono-reparacion.webp",
      amazonUrl: "https://mercadolibre.com/sec/1z6GYqc",
      features: ["Poliéster ligero", "Económico", "Fácil mantenimiento"],
      tags: ["mono", "económico", "poliéster"],
      articleSource: "Overoles",
    },
    {
      id: "sanfu-multibolsillos",
      name: "Sanfu Uniforme De Trabajo De Una Sola Pieza Multibolsillos",
      description: "Overol/uniforme de una sola pieza con múltiples bolsillos y tela resistente.",
      category: "EPP",
      subcategory: "Ropa de Seguridad",
      brand: "Sanfu",
      price: "Consultar precio",
      rating: 4.3,
      reviews: 300,
      image: "/images/catalogo/sanfu-multibolsillos.webp",
      amazonUrl: "https://mercadolibre.com/sec/1JKomB9",
      features: ["Múltiples bolsillos", "Tela resistente", "Cómodo"],
      tags: ["multibolsillos", "uniforme", "confort"],
      articleSource: "Overoles",
    },
    {
      id: "brisco-industrial-reflejante",
      name: "BRISCO INDUSTRIAL Overol Reflejante (Alta Visibilidad)",
      description: "Overol tipo gabardina poliéster/algodón con cintas reflectantes de 2\" para máxima visibilidad.",
      category: "EPP",
      subcategory: "Ropa de Seguridad",
      brand: "BRISCO INDUSTRIAL",
      price: "Consultar precio",
      rating: 5.0,
      reviews: 5,
      image: "/images/catalogo/brisco-industrial-reflejante.webp",
      amazonUrl: "https://mercadolibre.com/sec/2bXCQGF",
      features: ["Cintas reflectantes", "Gabardina", "Robusta"],
      tags: ["alta visibilidad", "gabardina", "reflejante"],
      articleSource: "Overoles",
    },
    {
      id: "berrendo-3017",
      name: "Botas Berrendo 3017 Dieléctricas Biotech",
      description: "Bota unisex de piel Napa con casquillo de policarbonato y certificación dieléctrica.",
      category: "EPP",
      subcategory: "Calzado de Seguridad",
      brand: "Berrendo",
      price: "Consultar precio",
      rating: 4.7,
      reviews: 266,
      image: "/images/catalogo/berrendo-3017.webp",
      amazonUrl: "https://mercadolibre.com/sec/2VaKvc7",
      features: ["Dieléctrica", "Policarbonato", "NOM-113"],
      tags: ["botas", "dieléctrica", "resistente"],
      articleSource: "Calzado",
    },
    {
      id: "caterpillar-second-shift",
      name: "Caterpillar Second Shift Steel Toe WP",
      description: "Bota robusta con puntera de acero, construcción Goodyear Welt y caracterización waterproof.",
      category: "EPP",
      subcategory: "Calzado de Seguridad",
      brand: "Caterpillar",
      price: "Consultar precio",
      rating: 5.0,
      reviews: 3,
      image: "/images/catalogo/caterpillar-second-shift.webp",
      amazonUrl: "https://mercadolibre.com/sec/1KmV8U4",
      features: ["Goodyear Welt", "Steel Toe", "Waterproof"],
      tags: ["goodyear", "steel-toe", "waterproof"],
      articleSource: "Calzado",
    },
    {
      id: "timberland-pro-pit-boss",
      name: "Timberland PRO Pit Boss 6\" Steel Toe",
      description: "Bota de alto confort y protección con casquillo de acero y tecnología PRO 24/7.",
      category: "EPP",
      subcategory: "Calzado de Seguridad",
      brand: "Timberland PRO",
      price: "Consultar precio",
      rating: 4.6,
      reviews: 10000,
      image: "/images/catalogo/timberland-pro-pit-boss.webp",
      amazonUrl: "https://mercadolibre.com/sec/2hukoND",
      features: ["Steel Toe", "Anti-fatiga", "Confort"],
      tags: ["confort", "steel-toe", "anti-fatiga"],
      articleSource: "Calzado",
    },
    {
      id: "riverline-spyder-spyg2",
      name: "Riverline Spyder SPYG2",
      description: "Calzado ergonómico y ligero con casquillo de policarbonato y suela PU de doble densidad.",
      category: "EPP",
      subcategory: "Calzado de Seguridad",
      brand: "Riverline",
      price: "Consultar precio",
      rating: 4.6,
      reviews: 235,
      image: "/images/catalogo/riverline-spyder-spyg2.webp",
      amazonUrl: "https://mercadolibre.com/sec/1Tpzibx",
      features: ["Policarbonato", "Suela PU", "Ligero"],
      tags: ["ligero", "ergonómico", "policarbonato"],
      articleSource: "Calzado",
    },
    {
      id: "timberland-pro-pit-6",
      name: "Timberland Pro Pit 6 Botas Industriales Dieléctricas",
      description: "Modelo tipo tenis industrial con casquillo no metálico y protección dieléctrica.",
      category: "EPP",
      subcategory: "Calzado de Seguridad",
      brand: "Timberland PRO",
      price: "Consultar precio",
      rating: 4.9,
      reviews: 79,
      image: "/images/catalogo/timberland-pro-pit-6.webp",
      amazonUrl: "https://mercadolibre.com/sec/2LrJRAz",
      features: ["Fibra de vidrio", "Dieléctrica", "Moderno"],
      tags: ["fibra-de-vidrio", "dieléctrica", "diseño"],
      articleSource: "Calzado",
    },
    {
      id: "nieion-tenis-safety",
      name: "Nieion Tenis de Seguridad Sport Industrial",
      description: "Calzado tipo tenis de seguridad, líder en ventas con miles de reseñas.",
      category: "EPP",
      subcategory: "Calzado de Seguridad",
      brand: "Nieion",
      price: "Consultar precio",
      rating: 4.6,
      reviews: 23500,
      image: "/images/catalogo/nieion-tenis-safety.webp",
      amazonUrl: "https://mercadolibre.com/sec/32PaSVu",
      features: ["Steel Toe", "Kevlar", "Transpirable"],
      tags: ["tenis", "mas-ventas", "kevlar"],
      articleSource: "Calzado",
    },
  ];

  // Inicializar productos
  useEffect(() => {
    setProducts(allCatalogProducts);
    setIsLoading(false);
  }, []);

  // Extraer todas las categorías únicas
  const categories = useMemo(() => {
    const cats = ['Todos'];
    const uniqueCats = new Set(allCatalogProducts.map(p => p.category));
    return [...cats, ...Array.from(uniqueCats)];
  }, []);

  // Filtrar y ordenar productos
  const filteredProducts = useMemo(() => {
    let filtered = allCatalogProducts;

    // Filtrar por categoría
    if (selectedCategory !== 'Todos') {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    // Filtrar por búsqueda
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        p.brand.toLowerCase().includes(query) ||
        p.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }

    // Ordenar por rating (mejor valorado primero)
    return filtered.sort((a, b) => b.rating - a.rating);
  }, [selectedCategory, searchQuery]);

  // Productos a mostrar (solo 21 inicialmente o todos si se clickea "Ver más")
  const productsToDisplay = useMemo(() => {
    return showMoreProducts ? filteredProducts : filteredProducts.slice(0, 21);
  }, [filteredProducts, showMoreProducts]);

  const handleCTAClick = (action: string) => {
    trackEvent(action, {
      source: 'homepage_catalog',
      timestamp: new Date().toISOString(),
    });
  };

  return (
    <motion.section
      className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-gray-900 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
            Catálogo de Productos
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Explora los mejores productos de seguridad industrial seleccionados por nuestros expertos
          </p>
        </motion.div>

        {/* Barra de búsqueda */}
        <motion.div
          className="mb-8"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar productos por nombre, marca o categoría..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-6 py-3 rounded-lg border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white placeholder-blue-200 focus:outline-none focus:border-white/60 transition-all"
            />
          </div>
        </motion.div>

        {/* Filtros por categoría */}
        <motion.div
          className="mb-12 flex flex-wrap gap-3 justify-center"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 border-2 ${
                selectedCategory === category
                  ? 'bg-orange-500 text-white border-orange-600 shadow-lg'
                  : 'bg-white/10 text-white border-white/30 hover:border-white/60 backdrop-blur-sm'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Grid de productos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {productsToDisplay.map((product, index) => (
            <motion.button
              key={product.id}
              onClick={() => {
                handleCTAClick(`product_${product.name}`);
                window.open(product.amazonUrl, '_blank');
              }}
              initial={{ y: 100, opacity: 0, scale: 0.8 }}
              whileInView={{ y: 0, opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.05,
                type: "spring",
                bounce: 0.4
              }}
              whileHover={{
                scale: 1.05,
                y: -10,
                transition: { type: "spring", bounce: 0.4 }
              }}
              whileTap={{ scale: 0.95 }}
              className="group relative overflow-hidden bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 h-80 flex flex-col border border-gray-200 hover:border-orange-400 text-center"
            >
              {/* Image container */}
              <div className="relative w-full h-40 bg-gray-100 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover object-center group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>

              {/* Product content */}
              <div className="relative z-10 flex-1 flex flex-col justify-between p-3 items-center">
                <div className="w-full">
                  <Badge className="mb-2 bg-blue-100 text-blue-700 border-blue-300 text-xs inline-block">
                    {product.subcategory}
                  </Badge>

                  <h3 className="text-sm font-bold text-gray-900 mb-2 leading-tight line-clamp-2">
                    {product.name}
                  </h3>

                  <div className="flex items-center gap-1 mb-3 justify-center">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3 h-3 ${
                            i < Math.floor(product.rating)
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-gray-500">
                      ({product.reviews})
                    </span>
                  </div>
                </div>

                <div className="relative overflow-hidden w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-2 px-3 rounded-lg transition-all duration-300 text-sm">
                  <span className="relative z-10 flex items-center justify-center gap-1">
                    Comprar 🛒
                  </span>

                  {/* Efecto shine */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                    initial={{ x: '-100%' }}
                    animate={{ x: '200%' }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      repeatDelay: 3,
                      ease: "linear"
                    }}
                  />
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Botón "Ver más" cuando hay más productos disponibles */}
        {filteredProducts.length > 21 && !showMoreProducts && (
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.button
              onClick={() => setShowMoreProducts(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 text-lg"
            >
              <span className="relative z-10 flex items-center gap-2 justify-center">
                Ver {filteredProducts.length - 21} productos más
                <ArrowRight className="w-5 h-5" />
              </span>
              
              {/* Efecto shine */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                initial={{ x: '-100%' }}
                animate={{ x: '200%' }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  repeatDelay: 3,
                  ease: "linear"
                }}
              />
            </motion.button>
          </motion.div>
        )}

        {/* Mensaje cuando no hay productos */}
        {filteredProducts.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-xl text-blue-100">
              No se encontraron productos que coincidan con tu búsqueda.
            </p>
          </motion.div>
        )}

        {/* CTA Final */}
        <motion.div
          className="text-center mt-20"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.button
            onClick={() => {
              handleCTAClick('see_all_products');
              window.location.href = '/catalogo';
            }}
            className="relative overflow-hidden bg-gradient-to-r from-white text-blue-900 hover:from-gray-100 border-2 border-white font-semibold px-8 py-4 rounded-full transition-all duration-300 group shadow-lg hover:shadow-2xl"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center gap-3">
              <span className="text-2xl group-hover:animate-bounce">🛠️</span>
              Ver Todo el Catálogo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>

            {/* Glow effect */}
            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-300 blur-xl bg-white" />
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default function HomePage() {
  
  // Enable scroll and time tracking for homepage
  useScrollTracking({ 
    pageTitle: 'LinkerStore Homepage',
    trackTimeOnPage: true 
  });

  // Track homepage view on component mount
  useEffect(() => {
    const pageId = generateTrackingId('page', 'homepage');
    trackEvent('ViewContent', {
      content_type: 'page',
      content_ids: [pageId],
      content_name: 'LinkerStore Homepage',
      content_category: 'homepage'
    });
  }, []);

  // Function to track button clicks
  const handleCTAClick = async (ctaName: string) => {
    if (typeof window !== 'undefined') {
      try {
        const { trackInteraction } = await import('@/lib/meta-pixel');
        trackInteraction('button_click', ctaName, 'homepage');
      } catch (error) {
        console.warn('Failed to load tracking:', error);
      }
    }
  };

  // Fecha objetivo: 15 de enero de 2026
  const targetDate = new Date('2026-01-15T00:00:00');

  return (
    <motion.div 
      className="min-h-screen relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Hero Section LinkerStore */}
      <motion.section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Banner Carousel Background */}
        {(() => {
          const [currentImageIndex, setCurrentImageIndex] = useState(0);
          
          const images = [
            {
              src: '/images/catalogo/banners/banner1.webp',
              title: 'Herramientas Industriales de',
              subtitle: 'Calidad Superior',
              description: 'Equipos de protección, herramientas y soluciones industriales para profesionales que exigen lo mejor'
            },
            {
              src: '/images/catalogo/banners/banner2.webp',
              title: 'Equipos de Seguridad',
              subtitle: 'Certificados',
              description: 'Protección personal y equipos industriales con certificaciones internacionales de calidad'
            },
            {
              src: '/images/catalogo/banners/banner3.webp',
              title: 'Herramientas Profesionales',
              subtitle: 'de Alto Rendimiento',
              description: 'Las mejores marcas en herramientas industriales para trabajos de precisión y durabilidad'
            },
            {
              src: '/images/catalogo/banners/banner4.webp',
              title: 'Soluciones Integrales',
              subtitle: 'para la Industria',
              description: 'Todo lo que necesitas para proyectos industriales y de construcción en un solo lugar'
            },
            {
              src: '/images/catalogo/banners/banner5.webp',
              title: 'Tecnología Avanzada',
              subtitle: 'para Profesionales',
              description: 'Innovación y calidad en cada producto para maximizar tu productividad y seguridad'
            }
          ];

          // Auto-advance carousel
          useEffect(() => {
            const interval = setInterval(() => {
              setCurrentImageIndex((prevIndex) => 
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
              );
            }, 7000);

            return () => clearInterval(interval);
          }, [images.length]);

          const goToImage = (index) => {
            setCurrentImageIndex(index);
          };

          const goToPrevious = () => {
            setCurrentImageIndex(currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1);
          };

          const goToNext = () => {
            setCurrentImageIndex(currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1);
          };

          return (
            <>
              {/* Background Images with Transitions */}
              {images.map((image, index) => (
                <motion.div
                  key={index}
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url(${image.src})`,
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: index === currentImageIndex ? 1 : 0,
                    scale: index === currentImageIndex ? 1.05 : 1
                  }}
                  transition={{ 
                    duration: 1,
                    ease: "easeInOut"
                  }}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                </motion.div>
              ))}

              {/* Navigation Arrows */}
              <motion.button
                onClick={goToPrevious}
                className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white hover:text-black p-3 rounded-full transition-all duration-300 group"
                whileHover={{ scale: 1.1, x: -5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.5 }}
              >
                <svg 
                  className="w-6 h-6 group-hover:animate-pulse" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </motion.button>

              <motion.button
                onClick={goToNext}
                className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white hover:text-black p-3 rounded-full transition-all duration-300 group"
                whileHover={{ scale: 1.1, x: 5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.5 }}
              >
                <svg 
                  className="w-6 h-6 group-hover:animate-pulse" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.button>

              {/* Dot Indicators */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
                {images.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => goToImage(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentImageIndex 
                        ? 'bg-white scale-125 shadow-lg' 
                        : 'bg-white/50 hover:bg-white/75'
                    }`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.7 + index * 0.1 }}
                  />
                ))}
              </div>

              {/* Progress Bar */}
              <div className="absolute bottom-0 left-0 h-1 bg-white/30 w-full z-20">
                <motion.div
                  className="h-full bg-gradient-to-r from-orange-400 to-yellow-400"
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  key={currentImageIndex}
                  transition={{ duration: 7, ease: "linear" }}
                />
              </div>
            </>
          );
        })()}

        <div className="container mx-auto px-6 text-center relative z-30">
          <motion.div
            initial={{ y: 100, opacity: 0, scale: 0.8 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="max-w-6xl mx-auto"
          >
          
             

            <motion.h1 
              className="text-5xl lg:text-7xl font-black mb-8 bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent leading-tight"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              whileHover={{ 
                scale: 1.02,
                textShadow: '0 0 30px rgba(59, 130, 246, 0.8)'
              }}
            >
              Explora los mejores productos<br />
              <span className="text-4xl lg:text-6xl">para la industria</span>
            </motion.h1>

            <motion.p 
              className="text-xl lg:text-2xl mb-12 text-blue-100 max-w-4xl mx-auto leading-relaxed"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              Descubre más de <span className="font-bold text-white">200 artículos especializados</span> en nuestro blog, 
              accede a <span className="font-bold text-blue-300">100 guías técnicas detalladas</span> y explora 
              los <span className="font-bold text-white">mejores productos</span> seleccionados para ti.
              <br />
              <motion.span 
                className="inline-block mt-4 text-lg font-semibold text-yellow-300"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                LinkerStore, tu aliado en la seguridad industrial 🛡️
              </motion.span>
            </motion.p>

            {/* CTA Buttons con efectos especiales */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              {[
                { 
                  href: "/catalogo", 
                  text: "Ver Tienda", 
                  hoverText: "Tienda 🏭", 
                  primary: false,
                  icon: "🛠️"
                },
                { 
                  href: "/guias", 
                  text: "Ver Guías", 
                  hoverText: "Guías ✨", 
                  primary: true,
                  icon: "📚"
                },
                { 
                  href: "/blog", 
                  text: "Leer Blog", 
                  hoverText: "Blog 🚀", 
                  primary: false,
                  icon: "📖"
                }
                
              ].map((button, index) => (
                <motion.div
                  key={index}
                  className="relative group"
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    asChild 
                    size="lg" 
                    className={`
                      relative overflow-hidden px-8 py-4 text-lg font-semibold rounded-full shadow-xl transition-all duration-500 group
                      ${button.primary 
                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white border-2 border-transparent hover:border-white/30' 
                        : 'bg-white/10 border-2 border-white/30 text-white hover:bg-white hover:text-blue-900 backdrop-blur-sm'
                      }
                    `}
                    style={{ clipPath: 'inset(0 round 9999px)' }}
                  >
                    <Link href={button.href} className="flex items-center gap-3 relative z-10">
                      <span className="text-xl group-hover:opacity-0 transition-opacity duration-300">{button.icon}</span>
                      <span className="group-hover:opacity-0 transition-opacity duration-300">
                        {button.text}
                      </span>
                      <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-base">
                        {button.hoverText}
                      </span>
                      
                      {/* Línea diagonal rápida al cambiar texto */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent -skew-x-12"
                        initial={{ x: '-100%', opacity: 0 }}
                        animate={{ 
                          x: ['100%', '200%'],
                          opacity: [0, 1, 0]
                        }}
                        transition={{ 
                          duration: 0.4,
                          ease: "easeOut",
                          delay: 0
                        }}
                        style={{ 
                          display: 'none'
                        }}
                        className="group-hover:block"
                      />
                    </Link>
                  </Button>
                  
                  {/* Efecto reluciente diagonal contenido en botón */}
                  <div className="absolute inset-0 rounded-full overflow-hidden">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 group-hover:opacity-100 -skew-x-12"
                      initial={{ x: '-100%' }}
                      animate={{ x: '200%' }}
                      transition={{ 
                        duration: 0.8, 
                        repeat: Infinity, 
                        repeatDelay: 2.5,
                        ease: "linear"
                      }}
                    />
                  </div>
                  
                  {/* Glow effect más contenido */}
                  <div className={`
                    absolute inset-0 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-lg -z-10
                    ${button.primary ? 'bg-blue-400' : 'bg-white'}
                  `} />
                </motion.div>
              ))}
            </motion.div>
            {/* Carrusel de Productos en Hero */}
            <motion.div 
              className="mt-20 w-full mb-20"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.4 }}
            >
              <h3 className="text-3xl font-bold mb-12 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                Productos Destacados
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  {
                    name: "DEWALT DWMT81535",
                    category: "Kits Herramientas",
                    image: "/images/catalogo/kit-herramientas-82.webp",
                    link: "https://mercadolibre.com/sec/2naVqQs",
                    rating: 4.8,
                    reviews: 3200,
                  },
                  {
                    name: "Berrendo 3017",
                    category: "Calzado Seguridad",
                    image: "/images/catalogo/berrendo-3017.webp",
                    link: "https://mercadolibre.com/sec/2VaKvc7",
                    rating: 4.7,
                    reviews: 266,
                  },
                  {
                    name: "Jaloma Botiquín",
                    category: "Primeros Auxilios",
                    image: "/images/catalogo/jaloma-22.webp",
                    link: "https://mercadolibre.com/sec/17VWdsg",
                    rating: 4.8,
                    reviews: 300,
                  },
                  {
                    name: "Dickies Overol",
                    category: "Ropa Seguridad",
                    image: "/images/catalogo/dickies-peto.webp",
                    link: "https://mercadolibre.com/sec/1sD7aUv",
                    rating: 4.0,
                    reviews: 15,
                  }
                ].map((product, index) => (
                  <motion.button
                    key={index}
                    onClick={() => {
                      handleCTAClick(`hero_product_${product.name}`);
                      window.open(product.link, '_blank');
                    }}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.6 + index * 0.1 }}
                    whileHover={{ y: -10, scale: 1.05 }}
                    className="group relative bg-white rounded-xl border border-gray-200 hover:border-orange-400 transition-all duration-300 overflow-hidden h-full flex flex-col shadow-lg hover:shadow-2xl text-center"
                  >
                    {/* Image */}
                    <div className="relative h-40 bg-gray-100 overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1 p-4 flex flex-col justify-between items-center">
                      <div className="bg-white -mx-4 -mt-4 px-4 pt-4 pb-3 w-full">
                        <Badge className="mb-2 bg-blue-100 text-blue-700 border-blue-300 text-xs inline-block">
                          {product.category}
                        </Badge>
                        <h4 className="text-sm font-bold text-gray-900 mb-2 line-clamp-2">
                          {product.name}
                        </h4>
                      </div>
                      <div className="flex items-center gap-1 mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-2.5 h-2.5 ${
                              i < Math.floor(product.rating)
                                ? 'fill-yellow-400 text-yellow-400'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                        <span className="text-xs text-gray-500 ml-1">
                          ({product.reviews})
                        </span>
                      </div>

                      <div className="relative overflow-hidden w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-2 px-3 rounded-lg transition-all duration-300 text-sm">
                        <span className="relative z-10 flex items-center justify-center gap-1">
                          Comprar 🛒
                        </span>
                        
                        {/* Efecto shine */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                          initial={{ x: '-100%' }}
                          animate={{ x: '200%' }}
                          transition={{ 
                            duration: 0.8, 
                            repeat: Infinity, 
                            repeatDelay: 3,
                            ease: "linear"
                          }}
                        />
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Trusted Brands Banner - Justo después del Hero */}
      <TrustedBrandsBanner />

       {/* Banner Carrusel de Productos */}
      <ProductCatalogSection />

 {/* Banner de Video Promocional */}
      <motion.section 
        className="py-20 bg-gradient-to-b from-blue-800 to-blue-900 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
         
            <h2 className="text-4xl font-bold text-white mb-6">
              Conoce LinkerStore en Acción
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Descubre cómo nuestros productos y servicios pueden transformar tu trabajo industrial
            </p>
          </motion.div>

          {/* Banner de Video Simple */}
          <motion.div 
            className="relative w-full max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-r from-blue-900/90 to-blue-600/90"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative aspect-video bg-gradient-to-r from-blue-900 via-blue-800 to-blue-600">
              {/* Animated Background Fallback */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-blue-800/90 to-blue-600/95">
                <div className="absolute inset-0 bg-[url('/images/seucrity.webp')] bg-cover bg-center opacity-30"></div>
                {/* Animated particles */}
                <div className="absolute inset-0">
                  {[...Array(15)].map((_, i) => {
                    const leftPos = (i * 6.67) % 100;
                    const topPos = ((i * 13.3) % 80) + 10;
                    const duration = 3 + (i % 4);
                    const delay = (i % 5) * 0.4;
                    
                    return (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-blue-300 rounded-full opacity-40"
                        style={{
                          left: `${leftPos}%`,
                          top: `${topPos}%`,
                        }}
                        animate={{
                          y: [0, -80, 0],
                          opacity: [0.2, 0.8, 0.2],
                          scale: [0.5, 1.5, 0.5],
                        }}
                        transition={{
                          duration: duration,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: delay,
                        }}
                      />
                    );
                  })}
                </div>
              </div>

              {/* Video Implementation with controls and muted by default */}
              <video
                className="absolute inset-0 w-full h-full object-cover z-10"
                controls
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                onCanPlay={(e) => {
                  console.log('✅ Video cargado correctamente');
                  // Intentar reproducir el video
                  e.currentTarget.play().catch(console.log);
                }}
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  console.log('❌ Error cargando video, usando fondo animado');
                }}
                onLoadedData={(e) => {
                  console.log('📹 Video data cargado');
                }}
              >
                <source src="/videos/hero-banner.webm" type="video/webm" />
                <source src="/videos/hero-banner.webm" type="video/webm" />
              </video>
            </div>
          </motion.div>
          
          {/* Contenido debajo del video para mejor énfasis */}
          <motion.div 
            className="mt-12 max-w-4xl mx-auto px-8 text-center bg-gradient-to-b from-gray-900/95 via-gray-800/90 to-gray-900/95 rounded-3xl py-16 shadow-2xl border border-gray-700/50"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h2 
              className="text-5xl md:text-6xl font-bold mb-6 text-white drop-shadow-2xl"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 1.2, 
                delay: 0.3,
                type: "spring",
                bounce: 0.4
              }}
              whileHover={{ 
                scale: 1.02,
                textShadow: "0px 0px 20px rgba(255,255,255,0.8)"
              }}
            >
              LinkerStore - Seguridad Industrial
            </motion.h2>
            
            <motion.p 
              className="text-2xl mb-6 text-white/90 font-medium drop-shadow-lg"
              initial={{ opacity: 0, x: -50, rotateX: 90 }}
              whileInView={{ opacity: 1, x: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 1, 
                delay: 0.6,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.05,
                color: "#ffffff"
              }}
            >
              Tu aliado en protección y herramientas industriales
            </motion.p>
            
            <motion.p 
              className="text-lg mb-10 text-white/80 leading-relaxed max-w-3xl mx-auto drop-shadow-md"
              initial={{ opacity: 0, y: 30, blur: 10 }}
              whileInView={{ opacity: 1, y: 0, blur: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 1.2, 
                delay: 0.9,
                ease: "easeOut"
              }}
              whileHover={{ 
                scale: 1.02,
                color: "#ffffff"
              }}
            >
              Explora nuestra amplia gama de productos industriales, equipos de protección personal y herramientas especializadas para profesionales que exigen calidad y confianza.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <a
                href="/catalogo"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-10 py-5 rounded-full text-xl font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <span>Ir a la tienda</span>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="text-2xl"
                >
                  →
                </motion.span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {false && (
        <motion.section 
          className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="container mx-auto px-6 text-center relative z-10">
            <motion.div
              initial={{ y: 100, opacity: 0, scale: 0.8 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="max-w-4xl mx-auto"
            >
              <motion.div 
                className="relative inline-block mb-8"
                whileHover={{ scale: 1.2 }}
                animate={{ 
                  rotate: [0, 5, -5, 0],
                  y: [0, -10, 0]
                }}
                transition={{ 
                  rotate: { duration: 4, repeat: Infinity, type: "tween" },
                  y: { duration: 2, repeat: Infinity, type: "tween" }
                }}
              >
                <motion.div
                  className="text-8xl relative z-10"
                  animate={{
                    filter: [
                      'drop-shadow(0 0 20px rgba(59, 130, 246, 0.8))',
                      'drop-shadow(0 0 30px rgba(147, 51, 234, 0.8))',
                      'drop-shadow(0 0 20px rgba(219, 39, 119, 0.8))',
                      'drop-shadow(0 0 30px rgba(59, 130, 246, 0.8))'
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity, type: "tween" }}
                >
                  🏭
                </motion.div>
              </motion.div>

              <motion.h1 
                className="text-6xl lg:text-8xl font-black mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                whileHover={{ 
                  scale: 1.05,
                  textShadow: '0 0 30px rgba(147, 51, 234, 0.8)'
                }}
              >
                LinkerStore
              </motion.h1>

              <motion.p 
                className="text-xl lg:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                La plataforma más avanzada para equipos industriales y de protección personal. 
                Calidad premium, precios competitivos y entregas confiables.
              </motion.p>

              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="bg-white/10 border border-white/20 text-blue-100 px-6 py-4 rounded-full backdrop-blur-sm">
                    Catálogo disponible próximamente.
                  </div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    asChild
                    variant="outline" 
                    size="lg"
                    className="border-2 border-purple-400 bg-purple-400 text-purple-900 hover:bg-purple-500 hover:text-white px-8 py-4 text-lg font-bold"
                  >
                    <Link href="/guias" className="flex items-center gap-2">
                      <Target className="mr-2 h-5 w-5" />
                      Ver Guías
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>
      )}

{/* Hero Image Banner Section with Carousel */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Carousel State */}
        {(() => {
          const [currentImageIndex, setCurrentImageIndex] = useState(0);
          
          const images = [
            {
              src: '/images/catalogo/banners/banner1.webp',
              title: 'Herramientas Industriales de',
              subtitle: 'Calidad Superior',
              description: 'Equipos de protección, herramientas y soluciones industriales para profesionales que exigen lo mejor'
            },
            {
              src: '/images/catalogo/banners/banner2.webp',
              title: 'Equipos de Seguridad',
              subtitle: 'Certificados',
              description: 'Protección personal y equipos industriales con certificaciones internacionales de calidad'
            },
            {
              src: '/images/catalogo/banners/banner3.webp',
              title: 'Herramientas Profesionales',
              subtitle: 'de Alto Rendimiento',
              description: 'Las mejores marcas en herramientas industriales para trabajos de precisión y durabilidad'
            },
            {
              src: '/images/catalogo/banners/banner4.webp',
              title: 'Soluciones Integrales',
              subtitle: 'para la Industria',
              description: 'Todo lo que necesitas para proyectos industriales y de construcción en un solo lugar'
            },
            {
              src: '/images/catalogo/banners/banner5.webp',
              title: 'Tecnología Avanzada',
              subtitle: 'para Profesionales',
              description: 'Innovación y calidad en cada producto para maximizar tu productividad y seguridad'
            }
          ];

          // Auto-advance carousel
          useEffect(() => {
            const interval = setInterval(() => {
              setCurrentImageIndex((prevIndex) => 
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
              );
            }, 7000);

            return () => clearInterval(interval);
          }, [images.length]);

          const goToImage = (index) => {
            setCurrentImageIndex(index);
          };

          const goToPrevious = () => {
            setCurrentImageIndex(currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1);
          };

          const goToNext = () => {
            setCurrentImageIndex(currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1);
          };

          return (
            <>
              {/* Background Images with Transitions */}
              {images.map((image, index) => (
                <motion.div
                  key={index}
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url(${image.src})`,
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: index === currentImageIndex ? 1 : 0,
                    scale: index === currentImageIndex ? 1.05 : 1
                  }}
                  transition={{ 
                    duration: 1,
                    ease: "easeInOut"
                  }}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                </motion.div>
              ))}

              {/* Navigation Arrows */}
              <motion.button
                onClick={goToPrevious}
                className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white hover:text-black p-3 rounded-full transition-all duration-300 group"
                whileHover={{ scale: 1.1, x: -5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.5 }}
              >
                <svg 
                  className="w-6 h-6 group-hover:animate-pulse" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </motion.button>

              <motion.button
                onClick={goToNext}
                className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white hover:text-black p-3 rounded-full transition-all duration-300 group"
                whileHover={{ scale: 1.1, x: 5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.5 }}
              >
                <svg 
                  className="w-6 h-6 group-hover:animate-pulse" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.button>

              {/* Dot Indicators */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
                {images.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => goToImage(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentImageIndex 
                        ? 'bg-white scale-125 shadow-lg' 
                        : 'bg-white/50 hover:bg-white/75'
                    }`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.7 + index * 0.1 }}
                  />
                ))}
              </div>
              
              {/* Content */}
              <div className="relative z-10 container mx-auto px-6 text-center text-white">
                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="max-w-4xl mx-auto"
                >
                  <motion.h1 
                    className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    {images[currentImageIndex].title}
                    <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                      {' '}{images[currentImageIndex].subtitle}
                    </span>
                  </motion.h1>
                  
                  <motion.p 
                    className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    {images[currentImageIndex].description}
                  </motion.p>
                  
                  <motion.div 
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button 
                        asChild
                        size="lg" 
                        className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
                      >
                        <Link href="/catalogo">
                          <span className="relative z-10">Ver Tienda</span>
                          {/* Shine effect */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                            initial={{ x: '-100%' }}
                            animate={{ x: '200%' }}
                            transition={{ 
                              duration: 0.6,
                              repeat: Infinity,
                              repeatDelay: 3,
                              ease: "linear"
                            }}
                          />
                        </Link>
                      </Button>
                    </motion.div>
                    
                   
                  </motion.div>
                </motion.div>
              </div>

              {/* Progress Bar */}
              <div className="absolute bottom-0 left-0 h-1 bg-white/30 w-full z-20">
                <motion.div
                  className="h-full bg-gradient-to-r from-orange-400 to-yellow-400"
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  key={currentImageIndex}
                  transition={{ duration: 8, ease: "linear" }}
                />
              </div>
            </>
          );
        })()}
      </section>
      {/* Galería de navegación */}
      <motion.section 
        className="py-20 bg-gradient-to-b from-blue-600 to-blue-800 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
          
            <h2 className="text-4xl font-bold text-white mb-6">
              Explora Nuestra Galería Industrial
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Descubre imágenes, guías y productos especializados para la industria
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                emoji: "🏭",
                title: "Seguridad Industrial",
                description: "Explora los artículos especializados y guías completas que hemos preparado especialmente para tí",
                cta: "Ver Blog",
                href: "/blog",
                bgGradient: "from-blue-500 to-cyan-500",
                image: "industrial-safety"
              },
              {
                emoji: "📚",
                title: "Guías Técnicas",
                description: "Visita los manuales detallados paso a paso",
                cta: "Explorar Guías",
                href: "/guias",
                bgGradient: "from-green-500 to-emerald-500",
                image: "technical-guides"
              },
              {
                emoji: "🛠️",
                title: "Equipos EPP",
                description: "Compra del catálogo de productos industriales",
                cta: "Ver Productos",
                href: "/catalogo",
                bgGradient: "from-purple-500 to-indigo-500",
                image: "epp-equipment"
              },
              {
                emoji: "🔧",
                title: "Herramientas",
                description: "Explora las Reseñas y comparativas de herramientas industriales",
                cta: "Leer Reseñas",
                href: "/blog",
                bgGradient: "from-orange-500 to-red-500",
                image: "tools-review"
              },
              {
                emoji: "📋",
                title: "Normativas",
                description: "Enterate de las regulaciones y estándares industriales de México",
                cta: "Ver Normativas",
                href: "/blog/normativas-seguridad-industrial-mexico",
                bgGradient: "from-teal-500 to-blue-500",
                image: "regulations"
              },
              {
                emoji: "🤝",
                title: "¿Tienes una consulta especial?",
                description: "Estamos aquí para ayudarte con cualquier consulta o necesidad específica que tengas",
                cta: "Contactanos",
                href: "/contacto",
                bgGradient: "from-yellow-500 to-orange-500",
                image: "training"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ y: 100, opacity: 0, scale: 0.8 }}
                whileInView={{ y: 0, opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: "spring",
                  bounce: 0.4
                }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  rotateY: 5,
                  transition: { type: "spring", bounce: 0.4 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href={item.href} className="group block">
                  <motion.div 
                    className="relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-80"
                    whileHover={{
                      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                    }}
                  >
                    {/* Imagen de fondo simulada con gradiente */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.bgGradient} opacity-90`}>
                      <div className="absolute inset-0 bg-black/20"></div>
                      
                      {/* Patrón decorativo */}
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
                      
                      {/* Emoji grande de fondo */}
                      <div className="absolute top-4 right-4 text-6xl opacity-20 group-hover:opacity-30 transition-opacity">
                        {item.emoji}
                      </div>
                    </div>

                    <div className="relative z-10 p-6 h-full flex flex-col justify-between text-white">
                      <div>
                        <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                          {item.emoji}
                        </div>
                        
                        <h3 className="text-2xl font-bold mb-3 group-hover:text-yellow-200 transition-colors">
                          {item.title}
                        </h3>
                        
                        <p className="text-white/90 mb-4 leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      <motion.div 
                        className="flex items-center text-white font-semibold group-hover:text-yellow-200 transition-colors"
                        whileHover={{ x: 5 }}
                      >
                        <span className="mr-2">{item.cta}</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </motion.div>
                    </div>

                    {/* Efecto hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

     


{/* CTA Final 
      <motion.section 
        className="py-20 bg-gradient-to-r from-blue-900 to-indigo-900 text-white relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 2.2 }}
          >
            ¿Listo para mejorar la seguridad en tu trabajo?
          </motion.h2>
          
          <motion.p 
            className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 2.4 }}
          >
            Descubre nuestras guías especializadas, reseñas de equipos EPP y consejos 
            de expertos para crear ambientes laborales más seguros.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 2.6 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
                <Link href="/blog" className="flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Explorar Blog
                </Link>
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button asChild size="lg" variant="outline" className="border-white text-blue-900 hover:bg-white hover:text-blue-900">
                <Link href="/guias" className="flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  Ver Guías
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>*/}

     

      {/* Simple Categories Section 
      <motion.section 
        className="py-20 bg-gradient-to-b from-blue-700 to-blue-900 relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
          
            <h2 className="text-4xl font-bold text-white mb-6">
              Explora Nuestro Blog de Seguridad Industrial
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Información confiable y actualizada sobre equipos de protección personal, 
              guías técnicas y mejores prácticas en seguridad laboral
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.4 }}
          >
            {[
              {
                name: "Artículos del Blog",
                description: "Contenido actualizado sobre seguridad industrial y EPP",
                count: "200+ artículos",
                href: "/blog",
                color: "bg-gradient-to-r from-green-500 to-emerald-600"
              },
              {
                name: "Guías Técnicas",
                description: "Manuales detallados y guías paso a paso",
                count: "100+ guías",
                href: "/guias",
                color: "bg-gradient-to-r from-blue-500 to-cyan-600"
              },
              {
                name: "Sobre Nosotros",
                description: "Conoce a nuestro equipo de expertos certificados",
                count: "Nuestro equipo",
                href: "/sobre-nosotros",
                color: "bg-gradient-to-r from-purple-500 to-indigo-600"
              }
            ].map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ y: 100, opacity: 0, scale: 0.8 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 1.6 + index * 0.2,
                  type: "spring",
                  bounce: 0.4
                }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  transition: { type: "spring", bounce: 0.4 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href={category.href} className="group block">
                  <motion.div 
                    className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 relative overflow-hidden"
                    whileHover={{
                      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                    }}
                  >
                    <div className="relative z-10">
                      <div className={`${category.color} p-4 rounded-xl w-16 h-16 flex items-center justify-center shadow-lg mb-6`}>
                        <FileText className="w-8 h-8 text-white" />
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-white transition-colors">
                        {category.name}
                      </h3>
                      
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {category.description}
                      </p>

                      <Badge variant="secondary" className="bg-gray-100 text-gray-700 mb-4">
                        {category.count}
                      </Badge>
                      
                      <div className="flex items-center text-blue-600 group-hover:text-blue-800 font-semibold">
                        <span>Explorar sección</span>
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section> */}

      

     

      {/* Newsletter Subscription Banner */}
      <motion.section 
        className="py-20 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-800 relative overflow-hidden"
        data-newsletter-section
        id="newsletter-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        {/* Background animated elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          
          {/* Floating icons */}
          {[...Array(8)].map((_, i) => {
            const leftPos = (i * 12.5) % 100;
            const topPos = ((i * 15.7) % 80) + 10;
            const duration = 4 + (i % 3);
            const delay = (i % 4) * 0.5;
            const iconType = i % 3;
            
            return (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  left: `${leftPos}%`,
                  top: `${topPos}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.3, 0.8, 0.3],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: duration,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: delay,
                }}
              >
                {iconType === 0 ? (
                  <span className="text-2xl opacity-30">📧</span>
                ) : iconType === 1 ? (
                  <span className="text-xl opacity-30">🔔</span>
                ) : (
                  <span className="text-lg opacity-30">✨</span>
                )}
              </motion.div>
            );
          })}
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-6 py-3 mb-8"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", bounce: 0.4, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.span
                className="text-2xl"
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                📧
              </motion.span>
              <span className="text-white font-semibold">Newsletter LinkerStore</span>
            </motion.div>

            <motion.h2 
              className="text-4xl lg:text-5xl font-bold mb-6 leading-tight"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              ¡Sé el primero en enterarte!
            </motion.h2>
            
            <motion.p 
              className="text-xl lg:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed text-white/90"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Recibe <span className="font-bold">nuevos artículos del blog</span>, 
              <span className="font-bold"> novedades exclusivas</span> y 
              <span className="font-bold"> ofertas especiales</span> directamente en tu bandeja de entrada.
              <br />
              <span className="text-lg font-medium text-yellow-100 inline-block mt-2">
                ¡Únete a más de 1,000 profesionales industriales! 🚀
              </span>
            </motion.p>

            {/* Newsletter Signup Form */}
            <motion.div 
              className="max-w-2xl mx-auto"
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch">
                <motion.input
                  type="email"
                  placeholder="Tu correo electrónico profesional"
                  className="flex-1 px-6 py-4 text-lg rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white placeholder-white/70 focus:outline-none focus:ring-4 focus:ring-white/30 focus:border-white transition-all duration-300"
                  whileFocus={{ scale: 1.02 }}
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                />
                
                <motion.button
                  onClick={() => {
                    handleCTAClick('newsletter_signup');
                    // Aquí puedes agregar la lógica de suscripción
                    alert('¡Gracias por suscribirte! Te mantendremos informado sobre las últimas novedades.');
                  }}
                  className="relative overflow-hidden bg-white text-blue-700 hover:bg-blue-50 font-bold px-8 py-4 text-lg rounded-full transition-all duration-300 group shadow-xl hover:shadow-2xl"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <span>Suscribirme Gratis</span>
                    <motion.span
                      className="text-xl"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      ✨
                    </motion.span>
                  </span>
                  
                  {/* Shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 rounded-full"
                    initial={{ x: '-100%' }}
                    animate={{ x: '200%' }}
                    transition={{ 
                      duration: 1.5, 
                      repeat: Infinity, 
                      repeatDelay: 3,
                      ease: "linear"
                    }}
                  />
                </motion.button>
              </div>
              
              <motion.p 
                className="text-sm text-white/70 mt-4 max-w-md mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1.3 }}
              >
                📧 Sin spam, solo contenido valioso | 🔒 Tu email está seguro | 
                ✌️ Cancela cuando quieras
              </motion.p>
            </motion.div>

            {/* Benefits */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.5 }}
            >
              {[
                {
                  icon: "📰",
                  title: "Artículos Exclusivos",
                  description: "Contenido especializado antes que nadie"
                },
                {
                  icon: "🎯",
                  title: "Ofertas Especiales",
                  description: "Descuentos exclusivos para suscriptores"
                },
                {
                  icon: "🔔",
                  title: "Novedades Inmediatas",
                  description: "Entérate de nuevos productos al instante"
                }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1.7 + index * 0.2 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                  <p className="text-white/80 text-sm">{benefit.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Banner Countdown Timer - Movido al Final */}
      <motion.section 
        className="py-16 sm:py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        {/* Background animated particles */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => {
            const leftPos = (i * 8.33) % 100;
            const topPos = ((i * 11.7) % 90) + 5;
            const duration = 4 + (i % 3);
            const delay = (i % 6) * 0.33;
            
            return (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white rounded-full opacity-20"
                style={{
                  left: `${leftPos}%`,
                  top: `${topPos}%`,
                }}
                animate={{
                  y: [0, -100, 0],
                  opacity: [0.2, 0.8, 0.2],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: duration,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: delay,
                  type: "tween"
                }}
              />
            );
          })}
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            {/* Badge "Próximamente" */}
            <motion.div 
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6"
              initial={{ scale: 0, rotateY: 180 }}
              whileInView={{ scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", bounce: 0.4, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <Timer className="w-4 h-4 text-blue-300" />
              <span className="text-blue-100 font-medium">Próximamente</span>
            </motion.div>

            {/* Título principal con animaciones espectaculares */}
            <motion.h1 
              className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent"
              initial={{ y: 100, opacity: 0, scale: 0.8 }}
              whileInView={{ y: 0, opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4, type: "spring", bounce: 0.4 }}
              whileHover={{ 
                scale: 1.05,
                textShadow: '0 0 50px rgba(147, 51, 234, 0.8)',
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              LinkerPro
            </motion.h1>
            
            {/* Subtítulo impactante */}
            <motion.div 
              className="max-w-4xl mx-auto mb-8"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <p className="text-xl md:text-2xl text-blue-100 font-light leading-relaxed">
                Mientras preparamos LinkerPro, descubre nuestro{" "}
                <motion.span 
                  className="font-bold text-white"
                  whileHover={{ scale: 1.1, color: "#60a5fa" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  blog especializado en seguridad industrial
                </motion.span>{" "}
                con guías expertas,{" "}
                <motion.span 
                  className="font-bold text-yellow-300"
                  whileHover={{ scale: 1.1, color: "#fbbf24" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  reseñas de equipos EPP
                </motion.span>{" "}
                y consejos para crear ambientes laborales más seguros
              </p>
            </motion.div>

            {/* Cuenta regresiva espectacular */}
            <motion.div 
              className="mb-8"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <motion.p 
                className="text-lg text-blue-200 mb-4 font-medium"
                animate={{ 
                  scale: [1, 1.05, 1],
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  type: "tween"
                }}
              >
                🚀 Lanzamiento oficial en:
              </motion.p>
              <CountdownTimer targetDate={targetDate} />
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 1 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => handleCTAClick('blog_cta')}
                >
                  <Link href="/blog" className="flex items-center gap-2">
                    <FileText className="w-5 h-5" />
                    Explorar Blog
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  asChild 
                  variant="secondary" 
                  size="lg" 
                  className="bg-white/15 border-2 border-white/50 text-white hover:bg-white/25 hover:border-white font-semibold px-8 py-4 rounded-full backdrop-blur-sm transition-all duration-300"
                >
                  <Link href="/guias" className="flex items-center gap-2">
                    <Target className="w-5 h-5" />
                    Ver Guías
                  </Link>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => handleCTAClick('tienda_cta')}
                >
                  <Link href="/catalogo" className="flex items-center gap-2">
                    <ShoppingBag className="w-5 h-5" />
                    Ver Tienda
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Estadísticas impresionantes animadas */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              {[
                { value: "200+", label: "Artículos Especializados" },
                { value: "100+", label: "Guías Técnicas Detalladas" },
                { value: "100%", label: "Contenido Verificado por Expertos" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0, rotateY: 180 }}
                  whileInView={{ scale: 1, rotateY: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: 1.4 + index * 0.1, 
                    type: "spring", 
                    bounce: 0.4 
                  }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -5,
                    boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
                  }}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20"
                >
                  <motion.div 
                    className="text-3xl font-bold text-white"
                    animate={{ 
                      textShadow: [
                        "0 0 10px rgba(59, 130, 246, 0.5)",
                        "0 0 20px rgba(147, 51, 234, 0.5)",
                        "0 0 10px rgba(59, 130, 246, 0.5)"
                      ]
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      type: "tween"
                    }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-blue-200">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
}
