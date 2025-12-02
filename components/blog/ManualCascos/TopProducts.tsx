"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Star, Shield, CheckCircle, ExternalLink, Heart } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const topProducts = [
  {
    id: 1,
    name: "MSA V-Gard",
    model: "Casco de Seguridad Industrial Clase E",
    rating: 4.9,
    reviews: 847,
    image: "/images/cascos/msa-v-gard.webp",
    certification: "NOM-115-STPS-2009",
    features: [
      "Protección Dieléctrica Clase E (20,000V)",
      "Polietileno (HDPE) 100% virgen",
      "Suspensión Fas-Trac III (Matraca)",
      "Ranuras para accesorios universales",
      "Peso ligero y balanceado"
    ],
    highlights: [
      "El estándar de la industria",
      "Suspensión ultra cómoda",
      "Máxima protección eléctrica"
    ],
    amazonLink: "https://mercadolibre.com/sec/1m3Jf7S",
    category: "Clase E - Eléctrico"
  },
  {
    id: 2,
    name: "3M H-700",
    model: "Casco Industrial con Barboquejo",
    rating: 4.8,
    reviews: 623,
    image: "/images/cascos/3m-h700.webp",
    certification: "NOM-115-STPS-2009",
    features: [
      "Clase C (Conductivo - Ventilado)", // CORREGIDO: Vented no es dieléctrico
      "Material HDPE de alto impacto",     // CORREGIDO: No es ABS
      "Tecnología de difusión de presión",
      "Sensor Uvicator (indica desgaste por sol)", // Feature clave de 3M
      "Suspensión de 4 puntos"
    ],
    highlights: [
      "Tecnología Uvicator",
      "Máxima frescura",
      "Diseño de perfil bajo"
    ],
    amazonLink: "https://mercadolibre.com/sec/2GyWAAB",
    category: "Clase C - Conductivo - Ventilado"
  },
  {
    id: 3,
    name: "Honeywell Fibre-Metal",
    model: "SuperEight E2 Hard Hat",
    rating: 4.9,
    reviews: 492,
    image: "/images/cascos/honeywell-fibre.webp",
    certification: "NOM-115-STPS-2009",
    features: [
      "Compuesto de Fibra de Vidrio", // Más preciso que 'reforzada'
      "Protección térmica superior (calor)",
      "Suspensión de 8 puntos de apoyo",
      "Clase E (hasta 20,000V)",
      "Mayor vida útil que el plástico"
    ],
    highlights: [
      "Resiste altas temperaturas",
      "Suspensión de 8 puntos",
      "Calidad Premium"
    ],
    amazonLink: "https://mercadolibre.com/sec/1Kc5Dm2",
    category: "Clase E - Premium"
  },
  {
    id: 4,
    name: "Casco Seguridad Tipo 2 Clase C Naranja",
    model: " Milwaukee 48731312",
    rating: 5.0,
    reviews: 384,
    image: "/images/cascos/Milwaukee.webp",
    certification: "NOM-115-STPS-2009",
    features: [
        "Protección contra impactos LATERALES y SUPERIORES (Tipo 2)",
      "Sistema BOLT para accesorios",
      "Suspensión acolchada anti-microbiana",
      "Incluye barboquejo",
      "Clase C (Ventilado)"
    ],
    highlights: [
     "Protección Golpes Laterales",
      "Compatible lámparas BOLT",
      "Interior acolchado"
    ],
    amazonLink: "https://mercadolibre.com/sec/1rC9AE8",
    category: "Clase C - Construcción"
  },
  {
    id: 5,
    name: "Casco Ala Delantera Clase-C Ventilado ",
    model: "48731200 Milwaukee",
    rating: 4.9,
    reviews: 59,
    image: "/images/cascos/Milwaukee2.webp",
    certification: "NOM-115-STPS-2009",
   features: [
      "Soportes directos para lámpara y pluma", // Feature única de Milwaukee
      "Suspensión de matraca ajustable",
      "Clase C (Ventilado)",
      "Compatible con accesorios BOLT"
    ],
    highlights: [
      "Montura para lámpara",
      "Clip para marcador",
      "Ajuste rápido"
    ],
    amazonLink: "https://mercadolibre.com/sec/1jrh5ma",
    category: "Clase C - Ajustable"
  },
  {
    id: 6,
    name: "Casco de Seguridad Industrial Plagosur Clase E Matraca",
    model: "Plagosur PE-3000E",
    rating: 5.0,
    reviews: 260,
    image: "/images/cascos/Plagosur.webp",
    certification: "NOM-115-STPS-2009",
    features: [
      "Polietileno de Alto Impacto",
      "Clase E (Dieléctrico 20,000V)",
      "Suspensión de matraca intercambiable",
      "Canal para desagüe de lluvia", // Característica común en este diseño
      "Económico y cumplidor"
    ],
    highlights: [
      "Mejor relación calidad-precio",
      "Hecho en México",
      "Dieléctrico certificado"
    ],
    amazonLink: "https://mercadolibre.com/sec/1cMYDDZ",
    category: "Clase E - Eléctrico" 
  }
];

// Componente para manejar imágenes con fallback
function ProductImage({ product }: { product: typeof topProducts[0] }) {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
      {!imageError && (
        <Image
          src={product.image}
          alt={`${product.name} - ${product.model}`}
          fill
          className={`object-cover transition-opacity duration-500 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
          onError={() => {
            setImageError(true);
            setImageLoaded(false);
          }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      )}
      
      {/* Fallback emoji cuando no hay imagen o error */}
      {(imageError || !imageLoaded) && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-6xl opacity-20">🪖</div>
        </div>
      )}
      
      {/* Badge de certificación */}
      <div className="absolute bottom-4 left-4">
        <Badge className="bg-green-100 text-green-800 text-xs px-2 py-1">
          <Shield className="w-3 h-3 mr-1" />
          {product.certification}
        </Badge>
      </div>
      
      {/* Overlay para mejor legibilidad del badge */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/20 to-transparent" />
    </div>
  );
}

export default function TopProducts() {
  return (
    <section id="top-productos" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge className="bg-yellow-100 text-yellow-800 px-4 py-2 text-sm font-semibold mb-4">
            🏆 TOP 6 PRODUCTOS RECOMENDADOS
          </Badge>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Mejores Cascos de Seguridad{" "}
            <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
              Certificados NOM
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Selección de cascos industriales que cumplen con la{" "}
            <span className="font-semibold text-blue-600">NOM-115-STPS-2009</span>
            {" "}y ofrecen la mejor protección para trabajadores mexicanos.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`relative bg-white rounded-3xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-500 ${
                index === 0 ? 'lg:col-span-1 lg:row-span-1 border-yellow-300 shadow-yellow-100' : ''
              }`}
            >
              {/* Highlight badges */}
              {index === 0 && (
                <div className="absolute top-4 left-4 z-10">
                  <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold px-3 py-1">
                    #1 MÁS VENDIDO
                  </Badge>
                </div>
              )}

              <div className="absolute top-4 right-4 z-10 flex gap-2">
                {product.highlights.map((highlight, idx) => (
                  <Badge
                    key={idx}
                    className="bg-blue-100 text-blue-800 text-xs px-2 py-1"
                  >
                    {highlight}
                  </Badge>
                ))}
              </div>

              {/* Product Image */}
              <ProductImage product={product} />

              {/* Product Info */}
              <div className="p-6">
                <div className="mb-3">
                  <Badge className="bg-gray-100 text-gray-700 text-xs px-2 py-1 mb-2">
                    {product.category}
                  </Badge>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-600">{product.model}</p>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center">
                    {Array.from({ length: 5 }).map((_, i) => (
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
                  <span className="text-sm font-semibold text-gray-900">
                    {product.rating}
                  </span>
                  <span className="text-sm text-gray-500">
                    ({product.reviews} reseñas)
                  </span>
                </div>

                {/* Features */}
                <ul className="space-y-1 mb-6">
                  {product.features.slice(0, 3).map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Actions */}
                <div className="flex gap-3">
                  <motion.a
                    href={product.amazonLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-4 rounded-xl text-center text-sm transition-all duration-300 flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Ver en Mercado Libre
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8 border border-blue-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              ¿Necesitas asesoría especializada?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Nuestros expertos te ayudan a seleccionar el casco ideal según tu industria, 
              riesgos específicos y presupuesto. Consulta gratuita incluida.
            </p>
            <motion.a
              href="/contacto"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold px-8 py-4 rounded-full transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Shield className="w-5 h-5" />
              Consulta Gratuita
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}