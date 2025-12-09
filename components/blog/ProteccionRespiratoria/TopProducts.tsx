"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Shield, Star, CheckCircle, ShoppingCart, ClipboardList, Info } from "lucide-react";

interface RespiratorProduct {
  id: number;
  name: string;
  brand: string;
  protection: string;
  efficiency: string;
  uses: string;
  certification: string;
  color?: string;
  link: string;
  features: string[];
  rating: number;
  bestseller?: boolean;
  image?: string; // permite agregar imágenes (ruta relativa o absoluta)
  reviews?: number;
}

const respiratorProducts: RespiratorProduct[] = [
  {
    id: 1,
    name: "Cubrebocas 3M 8210 de polipropileno y poliéster 1 CAJA CON 20 unidades color blanco",
    brand: "3M",
    protection: "Partículas y bacterias",
    efficiency: "95%",
    uses: "Polvo, polen, partículas de construcción",
    certification: "NOM-116 / NIOSH N95",
    color: "blanco",
    link: "https://mercadolibre.com/sec/2gB1yYe",
    features: ["Pack 20 unidades", "Ajuste cómodo", "Alta filtración"],
    rating: 4.7,
    reviews: 363,
    bestseller: true,
    image: "/images/catalogo/8210-3m.webp",
  },
  {
    id: 2,
    name: "Respirador N95 P100 3m Mascarilla 6300 6200 2 Cartuchos 7093",
    brand: "3M",
    protection: "gases, vapores y partículas peligrosas",
    efficiency: "99.97%",
    uses: "Lijado, Soldadura, Pintura, Cortado",
    certification: "NOM-116 / NIOSH P100 / MSHA",
    color: "Gris",
    link: "https://mercadolibre.com/sec/2wAtaBF",
    features: ["- 2 Filtros Modelo P100", "máxima eficiencia de filtrado", "Máxima protección"],
    rating: 4.9,
    reviews: 98,
    bestseller: true,
    image: "/images/catalogo/n95-p100-3m.webp",
  },
  {
    id: 3,
    name: "Respirador 3m R95 8247 P/partículas Y Vapores Orgánicos 20 Pzas.",
    brand: "3M",
    protection: "Partículas Y Vapores Orgánicos",
    efficiency: "95%",
    uses: "Fundición de Aluminio, Labores de Destilación, Manipulación de Productos Químicos en Seco, Manufactura Farmacéutica, Procesamiento de Papel, Producción Agrícola.",
    certification: "NOM-116 / NIOSH R95",
    color: "Gris",
    link: "https://mercadolibre.com/sec/2z7kZJQ",
    features: [" efectiva, confortable e higiénica protección respiratoria"],
    rating: 5.0,
    reviews: 1,
    bestseller: false,
    image: "/images/catalogo/r95-3m.webp",
  },
  {
    id: 4,
    name: "Máscara De Media Cara Máscara De Gas Con 8 Filtros Y Gafas",
    brand: "Anunu",
    protection: "Sustancias Nocivas, Químicos, Metales y Pinturas",
    efficiency: "95-99%",
    uses: "Pinturas, químicos, disolventes",
    certification: "NOM-116-STPS",
    color: "gris",
    link: "https://mercadolibre.com/sec/2JDa9EZ",
    features: ["Cartuchos intercambiables", "Reutilizable", "Ajuste ergonómico"],
    rating: 4.9,
    reviews: 142,
    bestseller: true,
    image: "/images/catalogo/media-cara.webp",
  },
  {
    id: 5,
    name: "6800 Mascara De Gas De Cara Completa Con Mascarilla Filtros",
    brand: "KUYEMO",
    protection: "Protección total respiratoria y ocular",
    efficiency: "99%",
    uses: "Químicos peligrosos, emergencias",
    certification: "NOM-116-STPS",
    color: "Negro",
    link: "https://mercadolibre.com/sec/1sg714D",
    features: ["Protección ocular incluida", "Visor panorámico", "Uso profesional"],
    rating: 4.9,
    reviews: 100,
    bestseller: false,
    image: "/images/catalogo/cara-completa-kuyemo.webp",
  },
 {
    id: 6,
    name: "Máscara de Gas 6200 + 10 Filtros de Algodón - Respirador de Media Cara, Protección contra Gases Tóxicos, Tallas Variadas, Segura y Confortable",
    brand: "JVHOME",
    protection: " vapores orgánicos y polvo",
    efficiency: "95%",
    uses: "Trabajos en Zonas Contaminadas o Emergencias",
    certification: "NOM-116 / NIOSH N95",
    color: "Blanco",
    link: "https://mercadolibre.com/sec/1wgyYd5",
    features: ["+ 10 Filtros de Algodón", "Tallas Variadas", "Alta filtración"],
    rating: 4.7,    
    reviews: 584,
    bestseller: false,
    image: "/images/catalogo/6200-jvhome.webp",
  },
 
];

function ProductImage({ product }: { product: RespiratorProduct }) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className="relative h-64 overflow-hidden rounded-3xl bg-gradient-to-br from-slate-800 to-slate-950">
      {!error && product.image && (
        <Image
          src={product.image}
          alt={`${product.name} ${product.brand}`}
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

      {(error || !product.image || !loaded) && (
        <div className="absolute inset-0 flex items-center justify-center text-6xl text-white/20">😷</div>
      )}

      <div className="absolute bottom-4 left-4">
        <Badge className="bg-emerald-100 text-emerald-800 text-xs font-semibold">
          <Shield className="mr-1 h-3 w-3" />
          {product.certification}
        </Badge>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/50 to-transparent" />
    </div>
  );
}

export default function TopProductsRespiradores() {
  return (
    <section id="top-respiradores" className="bg-gradient-to-b from-slate-50 via-white to-blue-50 py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <Badge className="mb-4 bg-green-100 text-green-800 px-4 py-2 text-sm font-semibold">
            🟢 PROTECCIÓN RESPIRATORIA CERTIFICADA
          </Badge>
          <h2 className="text-4xl font-black text-gray-900 md:text-5xl">
            Respiradores y Equipos de Filtrado
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Selección de respiradores certificados (NIOSH, NOM) para protecciones contra partículas, gases y vapores. Encuentra el equipo adecuado según la aplicación y la normativa.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {respiratorProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.08 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`group flex h-full flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg transition-shadow duration-500 hover:shadow-2xl ${
                index === 0 ? "border-green-300 shadow-green-100" : ""
              }`}
            >
              {product.bestseller && (
                <div className="absolute left-6 top-6 z-10">
                  <Badge className="bg-gradient-to-r from-yellow-400 to-amber-500 px-3 py-1 text-xs font-bold text-white">
                    MÁS VENDIDO
                  </Badge>
                </div>
              )}

              <ProductImage product={product} />

              <div className="flex flex-1 flex-col p-6">
                <div className="mb-4">
                  <Badge className="mb-3 bg-gray-100 text-gray-700 text-xs font-semibold">
                    {product.brand}
                  </Badge>
                  <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
                  <p className="mt-1 text-sm text-gray-600">{product.protection}</p>
                </div>

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
                  {typeof product.reviews === "number" && <span>({product.reviews} opiniones)</span>}
                </div>

                <ul className="mb-6 space-y-2 text-sm text-gray-600">
                  {product.features.slice(0, 4).map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 text-emerald-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mb-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Info className="h-4 w-4 text-blue-500" />
                    <span className="font-medium text-gray-700">Eficiencia:</span>
                    <span className="text-gray-600">{product.efficiency}</span>
                  </div>
                  <div className="mt-2">
                    <span className="text-sm font-medium text-gray-700">Usos principales:</span>
                    <p className="text-xs text-gray-500">{product.uses}</p>
                  </div>
                </div>

                <div className="mt-auto flex items-center justify-between gap-4 pb-2">
                  <div className="flex flex-wrap gap-2 items-center">
                    <Badge className="bg-gray-100 text-gray-800 text-xs">{product.certification}</Badge>
                    {product.color && (
                      <div
                        className={`w-8 h-8 rounded-full ${product.color === "blue" ? "bg-blue-100" : product.color === "yellow" ? "bg-yellow-100" : product.color === "red" ? "bg-red-100" : product.color === "green" ? "bg-green-100" : "bg-purple-100"} flex items-center justify-center`}
                      >
                        <Shield className={`${product.color === "blue" ? "text-blue-600" : product.color === "yellow" ? "text-yellow-600" : product.color === "red" ? "text-red-600" : product.color === "green" ? "text-green-600" : "text-purple-600"} w-4 h-4`} />
                      </div>
                    )}
                  </div>
                </div>

                <motion.a
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="mt-4 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 px-5 py-3 text-sm font-semibold text-white transition-all hover:from-green-700 hover:to-emerald-700"
                >
                  <ShoppingCart className="h-4 w-4" />
                  Comprar en Mercado Libre
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 rounded-3xl border border-green-200 bg-gradient-to-r from-green-50 via-white to-emerald-50 p-10 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900">¿No sabes qué respirador elegir?</h3>
          <p className="mt-4 text-gray-600 md:text-lg">
            Nuestro equipo técnico evalúa los riesgos específicos de tu operación (polvos, vapores, humos) y te entrega un plan de adquisición con recomendaciones de niveles de protección y accesorios.
          </p>
          <motion.a
            href="/contacto"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-green-600 to-purple-600 px-8 py-4 text-base font-bold text-white shadow-lg transition-all hover:from-green-700 hover:to-purple-700"
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