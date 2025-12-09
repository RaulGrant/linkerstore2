"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Shield, Star, CheckCircle, ShoppingCart, ClipboardList } from "lucide-react";

/**
 * Unificación del diseño:
 * - Mantiene la estructura visual y tamaños del componente EPP (top_products_epp.tsx)
 * - Contenido y datos enfocados a guantes (top_products_guantes)
 * - Imagen con manejo de carga/errores, badges de certificación, ratings, features, highlights y CTAs
 */

interface GloveProduct {
  id: number;
  name: string;
  model?: string;
  rating: number;
  reviews: number;
  image: string;
  certification: string[]; // lista para mostrar en badge y meta
  features: string[];
  highlights: string[];
  productLink: string;
  category: string;
  price?: string;
  applications?: string;
}

const gloveProducts: GloveProduct[] = [
  {
    id: 1,
    name: "Guantes Industrial Seguridad Anti Impacto Anticorte Nivel 5",
    model: "JianYi-M",
    rating: 4.8,
    reviews: 17,
    image: "/images/catalogo/guante-industrial.webp",
    certification: ["NOM-017-STPS-2008", "EN 374"],
"features": [
    "Máxima resistencia al corte (Nivel 5) material HPPE",
    "Protección contra impactos en dorso y dedos (TPR)",
    "Recubrimiento de nitrilo arenoso para mejor agarre",
    "Resistente a la abrasión, desgarro y perforación",
    "Diseño antivibración"
  ],
  "highlights": [
    "Anticorte Nivel 5",
    "Anti-Impacto TPR",
    "Agarre Nitrilo"
  ],
    productLink: "https://mercadolibre.com/sec/1zFa7v7",
    category: "EPP",
    price: "",
    applications: "Construcción, manipulación de vidrio, minería, automotriz, petroquímica, uso rudo.",
  },
  {
    id: 2,
    name: "5 Pares Guantes Anticorte Nivel 5 Hppe",
    model: "HPPE + PU - Reutilizable",
    rating: 4.7,
    reviews: 261,
    image: "/images/catalogo/anticorte-a5.webp",
    certification: ["EN 388 (Nivel 5)"],
    features: [
     "Pack Mayoreo: 5 pares incluidos",
      "Protección Nivel 5: Fibra HPPE (86%) de alto rendimiento",
      "Recubrimiento PU (16%): Agarre antideslizante y resistente a aceites",
      "Alta sensibilidad táctil y flexibilidad",
      "Transpirable y resistente a la abrasión/desgarro",
    ],
    highlights: ["Anticorte Nivel 5", "Resistente a Aceite", "Pack 5 Pares", "HPPE Tech"],
    productLink: "https://mercadolibre.com/sec/1mFrjKE",
    category: "EPP",
    price: "",
    applications: "Automotriz, manipulación de vidrio ligero, metalmecánica fina, almacén.",
  },
  {
    id: 3,
    name: "Guantes De Carnaza Cortos Pretul 23262 Para Soldadura",
    model: "Cuero bovino – Forro algodón",
    rating: 4.7,
    reviews: 157,
    image: "/images/catalogo/guantes-soldadura.webp",
    certification: ["EN 407", "EN 388"],
    features: [
    "Fabricados en cuero vacuno (carnaza) de alta calidad",
    "Totalmente forrado para mayor comodidad, protección y calidez",
    "Resistencia eficaz a la llama, chispas y calor al soldar",
    "Protección mecánica contra abrasión y cortes",
    "Superficie antideslizante para mejor agarre",
    "Costuras reforzadas para mayor durabilidad"
    ],
    highlights: ["Cuero Vacuno Premium",
    "Interior Forrado",
    "Térmico y Resistente",
    "Antideslizante",
    "Certificado EN407/EN388"],
    productLink: "https://mercadolibre.com/sec/1M3BfCa",
    category: "EPP",
    price: "",
    applications: "Soldadura, metalistería, construcción, automoción, manejo de herramientas manuales y eléctricas, fundición y trabajos generales de bricolaje con riesgo térmico.",
  },
  {
    id: 4,
    name: "Guante Para Manejo De Químicos Y Solventes De Pvc Con Forro Negro",
    model: "PVC – Largo industrial",
    rating: 4.3,
    reviews: 3,
    image: "/images/catalogo/pvc-quimico.webp",
    certification: ["EN 374", "NOM-017-STPS-2008"],
    features: [
      "100% impermeables",
      "Resistencia a ácidos y álcalis",
      "Interior afelpado para confort",
      "Fácil limpieza y descontaminación",
    ],
    highlights: ["Impermeable", "Químico", "NOM-017"],
    productLink: "https://mercadolibre.com/sec/2dYojo9",
    category: "EPP",
    price: "",
    applications: "Limpieza industrial, manejo de químicos",
  },
  {
    id: 5,
    name: "Guantes Criogénicos Térmicos Para Bajas Temperaturas -20",
    model: "Multicapa – Criogénico",
    rating: 4.9,
    reviews: 92,
    image: "/images/catalogo/termicos-criogenicos.webp",
    certification: ["EN 407", "EN 511"],
    features: [
      "Protección extrema -40°C a +250°C",
      "Aislamiento multicapa",
      "Resistencia a vapor y salpicaduras",
      "Uso en ambientes extremos",
    ],
    highlights: ["Criogénico", "Aislamiento", "EN511"],
    productLink: "https://mercadolibre.com/sec/1uYCk4H",
    category: "Térmico",
    price: "",
    applications: "Criogenia, hornos, fundición",
  },
  {
    id: 6,
    name: "Guante Nylon Recubiertos Nitrilo Seguridad Resistente 24 Par",
    model: "Nylon - Nitrilo",
    rating: 4.9,
    reviews: 92,
    image: "/images/catalogo/nylon.webp",
    certification: ["Uso General", "Riesgos Menores"],
    features: [
      "Pack mayoreo: 24 pares incluidos",
      "Tejido nailon calibre 13 ultra transpirable",
      "Recubrimiento de PU/Nitrilo antideslizante",
      "Diseño lavable y reutilizable",
    ],
    highlights: ["Pack 24 Pares", "Económico", "Multiusos"],
    productLink: "https://mercadolibre.com/sec/1uYCk4H",
    category: "Térmico",
    price: "",
    applications: "Carpintería, jardinería, construcción, automotriz",
  },
];

function ProductImage({ product }: { product: GloveProduct }) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className="relative h-64 overflow-hidden rounded-3xl bg-gradient-to-br from-slate-800 to-slate-950">
      {!error && (
        <Image
          src={product.image}
          alt={`${product.name} ${product.model ?? ""}`}
          fill
          className={`object-cover transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
          onLoad={() => setLoaded(true)}
          onError={() => {
            setError(true);
            setLoaded(false);
          }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      )}

      {(error || !loaded) && (
        <div className="absolute inset-0 flex items-center justify-center text-6xl text-white/20">🧤</div>
      )}

      <div className="absolute bottom-4 left-4">
        <Badge className="bg-emerald-100 text-emerald-800 text-xs font-semibold">
          <Shield className="mr-1 h-3 w-3" />
          {product.certification[0] ?? "Certificado"}
        </Badge>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/50 to-transparent" />
    </div>
  );
}

export default function TopProductsGuantes() {
  return (
    <section id="top-guantes" className="bg-gradient-to-b from-gray-50 via-white to-amber-50 py-20">
      <div className="container mx-auto px-6">
        {/* Header (estilo EPP) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <Badge className="mb-4 bg-orange-100 text-orange-800 px-4 py-2 text-sm font-semibold">
            🧤 GUANTES DE PROTECCIÓN CERTIFICADOS
          </Badge>
          <h2 className="text-4xl font-black text-gray-900 md:text-5xl">
            Guantes Certificados para Cumplimiento y Seguridad Laboral
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Selección de guantes industriales certificados para riesgos químicos, mecánicos y térmicos — diseñados para proteger tus manos y cumplir con normas nacionales e internacionales.
          </p>
        </motion.div>

        {/* Grid de tarjetas (estilo EPP: tarjetas grandes con imagen superior) */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {gloveProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.08 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`group flex h-full flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg transition-shadow duration-500 hover:shadow-2xl ${
                index === 0 ? "border-amber-300 shadow-amber-100" : ""
              }`}
            >
              {/* Badge recomendado para primer item */}
              {index === 0 && (
                <div className="absolute left-6 top-6 z-10">
                  <Badge className="bg-gradient-to-r from-amber-500 to-orange-600 px-3 py-1 text-xs font-bold text-white">
                    #1 RECOMENDADO
                  </Badge>
                </div>
              )}

              {/* Imagen con loader/placeholder */}
              <ProductImage product={product} />

              {/* Contenido */}
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-4">
                  <Badge className="mb-3 bg-gray-100 text-gray-700 text-xs font-semibold">
                    {product.category}
                  </Badge>
                  <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
                  {product.model && <p className="mt-1 text-sm text-gray-600">{product.model}</p>}
                </div>

                {/* Rating */}
                <div className="mb-4 flex items-center gap-2 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <Star
                        key={starIndex}
                        className={`h-4 w-4 ${
                          starIndex < Math.round(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="font-semibold text-gray-900">{product.rating.toFixed(1)}</span>
                  <span>({product.reviews} opiniones)</span>
                </div>

                {/* Features */}
                <ul className="mb-6 space-y-2 text-sm text-gray-600">
                  {product.features.slice(0, 4).map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 text-emerald-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Highlights */}
                <div className="mt-auto flex flex-wrap gap-2 pb-4">
                  {product.highlights.map((item) => (
                    <Badge key={item} className="bg-amber-50 text-amber-700 text-xs font-semibold">
                      {item}
                    </Badge>
                  ))}
                </div>

                {/* Precio / Certificaciones / CTA */}
                <div className="border-t pt-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-lg font-bold text-amber-600">{product.price ?? ""}</span>
                    <div className="flex items-center gap-2 text-xs">
                      {product.certification.map((c) => (
                        <Badge key={c} className="bg-green-50 text-green-700 text-xs px-2 py-1">
                          {c}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <motion.a
                    href={product.productLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="mt-2 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-600 to-orange-600 px-5 py-3 text-sm font-semibold text-white transition-all hover:from-amber-700 hover:to-orange-700"
                  >
                    <ShoppingCart className="h-4 w-4" />
                    Comprar en MercadoLibre
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA final (estilo EPP) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 rounded-3xl border border-amber-200 bg-gradient-to-r from-amber-50 via-white to-orange-50 p-10 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900">¿No sabes qué guante elegir para tu riesgo?</h3>
          <p className="mt-4 text-gray-600 md:text-lg">
            Nuestro equipo técnico y legal prepara un roadmap personalizado con diagnóstico inicial, priorización de normas aplicables y plan de trabajo a 90 días para tu industria.
          </p>
          <motion.a
            href="/contacto"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-600 to-purple-600 px-8 py-4 text-base font-bold text-white shadow-lg transition-all hover:from-amber-700 hover:to-purple-700"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ClipboardList className="h-5 w-5" />
            Solicitar Plan Personalizado
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}