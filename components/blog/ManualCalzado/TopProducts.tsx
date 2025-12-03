"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Star, Shield, CheckCircle, ExternalLink, Heart } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const topProducts = [
  {
    id: 1,
    name: "Berrendo 3017",
    model: "Zapato de Seguridad Industrial",
    rating: 4.7,
    reviews: 1542,
    image: "/images/calzado/berrendo-3017.webp",
    certification: "NOM-113-STPS-2009",
    features: [
      "Casquillo de Policarbonato ultraligero",
      "Protección Dieléctrica (Tipo III)",
      "Suela de Poliuretano antideslizante",
      "Piel vacuna nobuck resistente",
      "Sistema de inyección directa"
    ],
    highlights: [
      "Ideal para electricistas",
      "Ultraligero y cómodo",
      "Máxima protección eléctrica"
    ],
    amazonLink: "https://mercadolibre.com/sec/1KmV8U4",
    category: "Tipo III - Dieléctrico"
  },
  {
    id: 2,
    name: "CAT Second Shift",
    model: "Bota de Trabajo Industrial 6 pulgadas",
    rating: 4.8,
    reviews: 923,
    image: "/images/calzado/cat-second-shift.webp",
    certification: "NOM-113-STPS-2009",
    features: [
      "Casquillo de Acero reforzado",
      "Protección contra impactos (Tipo II)",
      "Construcción Goodyear Welt",
      "Piel Full-Grain resistente",
      "Plantilla anti-fatiga"
    ],
    highlights: [
      "Construcción robusta",
      "Máxima durabilidad",
      "Ideal para construcción"
    ],
    amazonLink: "https://mercadolibre.com/sec/1KmV8U4",
    category: "Tipo II - Impacto"
  },
  {
    id: 3,
    name: "Timberland PRO Pit Boss 6\"",
    model: "Bota de Seguridad con Anti-Fatiga",
    rating: 4.6,
    reviews: 687,
    image: "/images/calzado/timberland-pit-boss.webp",
    certification: "NOM-113-STPS-2009",
    features: [
      "Casquillo de Acero tradicional",
      "Tecnología Anti-Fatiga PRO 24/7",
      "Suela de goma resistente al aceite",
      "Piel nubuck premium",
      "Plantilla ortopédica removible"
    ],
    highlights: [
      "Tecnología Anti-Fatiga",
      "Comodidad para largas jornadas",
      "Equilibrio protección-comfort"
    ],
    amazonLink: "https://mercadolibre.com/sec/2hukoND",
    category: "Tipo II - Confort"
  },
  {
    id: 4,
    name: "Riverline Spyder SPYG2",
    model: "Zapato Deportivo de Seguridad",
    rating: 4.6,
    reviews: 235,
    image: "/images/calzado/riverline-spyder.webp",
    certification: "NOM-113-STPS-2009",
    features: [
      "Casquillo de Policarbonato ligero",
      "Diseño deportivo tipo tenis",
      "Malla transpirable superior",
      "Suela de EVA antideslizante",
      "Peso reducido (menos de 500g)"
    ],
    highlights: [
      "Extremadamente ligero",
      "Diseño ergonómico",
      "Ideal para logística"
    ],
    amazonLink: "https://mercadolibre.com/sec/1Tpzibx",
    category: "Tipo II - Ligereza"
  },
  {
    id: 5,
    name: "Timberland Pro Pit 6",
    model: "Estilo Deportivo Libre de Metal",
    rating: 4.9,
    reviews: 79,
    image: "/images/calzado/timberland-deportivo.webp",
    certification: "NOM-113-STPS-2009",
    features: [
      "Casquillo de Fibra de Vidrio",
      "100% libre de metal",
      "Diseño deportivo moderno",
      "Plantilla EVA anti-impacto",
      "Suela de poliuretano"
    ],
    highlights: [
      "Sin detectores de metal",
      "Estética superior",
      "Diseño deportivo"
    ],
    amazonLink: "https://mercadolibre.com/sec/2LrJRAz",
    category: "Tipo II - Diseño"
  }
];

export default function TopProducts() {
  const [selectedProduct, setSelectedProduct] = useState(topProducts[0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="productos-recomendados" className="py-20 bg-gradient-to-br from-gray-50 to-orange-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Badge className="bg-orange-100 text-orange-800 px-4 py-2 text-sm font-medium mb-4">
            Top 5 Recomendados
          </Badge>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Mejor Calzado de Seguridad 2024
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Selección curada de los mejores zapatos y botas de seguridad certificados NOM-113, 
            basada en calidad, certificaciones y opiniones de usuarios reales.
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div 
          className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {topProducts.map((product, index) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
              whileHover={{ y: -8 }}
            >
              {/* Ranking Badge */}
              <div className="absolute top-0 right-0 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 text-xs font-bold rounded-bl-lg">
                #{index + 1}
              </div>

              {/* Category Badge */}
              <Badge className="mb-4 bg-orange-50 text-orange-700 border-orange-200">
                {product.category}
              </Badge>

              {/* Product Image - Placeholder */}
              <div className="w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl mb-6 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
                <div className="text-6xl opacity-50">👞</div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Product Info */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {product.model}
                  </p>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2">
                  <div className="flex text-yellow-400">
                    {[1,2,3,4,5].map(i => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">
                    {product.rating}/5 ({product.reviews.toLocaleString()}+ reseñas)
                  </span>
                </div>

                {/* Certification */}
                <div className="flex items-center gap-2 p-2 bg-green-50 rounded-lg">
                  <Shield className="w-4 h-4 text-green-600" />
                  <span className="text-sm font-medium text-green-800">
                    {product.certification}
                  </span>
                </div>

                {/* Key Features */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-gray-900">
                    Características Técnicas:
                  </h4>
                  <ul className="space-y-1">
                    {product.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-gray-600">
                        <CheckCircle className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Highlights */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-gray-900">
                    Destacado por:
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {product.highlights.map((highlight, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs bg-orange-50 text-orange-700">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <motion.a
                  href={product.amazonLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-orange-600 to-red-600 text-white py-3 px-4 rounded-xl font-bold text-sm hover:from-orange-700 hover:to-red-700 transition-all duration-300 shadow-md hover:shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ExternalLink className="w-4 h-4" />
                  Ver Precio en MercadoLibre
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          className="mt-16 bg-white rounded-2xl shadow-lg border border-gray-200 p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Comparación Técnica Rápida
          </h3>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gradient-to-r from-orange-50 to-red-50">
                <tr>
                  <th className="px-4 py-3 text-left font-bold text-gray-900 rounded-tl-lg">Característica</th>
                  <th className="px-4 py-3 text-center font-bold text-orange-700">Berrendo 3017</th>
                  <th className="px-4 py-3 text-center font-bold text-yellow-700">CAT Second</th>
                  <th className="px-4 py-3 text-center font-bold text-green-700">Timberland PRO</th>
                  <th className="px-4 py-3 text-center font-bold text-purple-700 rounded-tr-lg">Riverline</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-900">Casquillo</td>
                  <td className="px-4 py-3 text-center">Policarbonato</td>
                  <td className="px-4 py-3 text-center">Acero</td>
                  <td className="px-4 py-3 text-center">Acero</td>
                  <td className="px-4 py-3 text-center">Policarbonato</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-900">Peso Aproximado</td>
                  <td className="px-4 py-3 text-center">Ligero</td>
                  <td className="px-4 py-3 text-center">Medio</td>
                  <td className="px-4 py-3 text-center">Medio</td>
                  <td className="px-4 py-3 text-center">Muy Ligero</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-900">Protección Eléctrica</td>
                  <td className="px-4 py-3 text-center text-green-600">✓ Tipo III</td>
                  <td className="px-4 py-3 text-center text-green-600">✓ EH Rated</td>
                  <td className="px-4 py-3 text-center text-red-600">✗</td>
                  <td className="px-4 py-3 text-center text-red-600">✗</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-900">Ideal para</td>
                  <td className="px-4 py-3 text-center">Electricistas</td>
                  <td className="px-4 py-3 text-center">Construcción</td>
                  <td className="px-4 py-3 text-center">Largas jornadas</td>
                  <td className="px-4 py-3 text-center">Logística</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Expert Recommendation */}
        <motion.div
          className="mt-12 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-2xl p-8 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              💡 Recomendación del Experto
            </h3>
            <p className="text-orange-100 text-lg leading-relaxed mb-6">
              Para la mayoría de industrias, recomendamos el <strong>Berrendo 3017</strong> por su excelente 
              balance entre protección, comodidad y precio. Si trabajas con electricidad, es la opción ideal 
              por su certificación dieléctrica Tipo III.
            </p>
            <motion.a
              href="/catalogo?categoria=calzado-seguridad"
              className="inline-flex items-center gap-2 bg-white text-orange-700 px-6 py-3 rounded-xl font-bold hover:bg-orange-50 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Ver Catálogo Completo
              <ExternalLink className="w-4 h-4" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}