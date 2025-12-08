"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, Shield, ExternalLink, Hand } from "lucide-react";

const topProducts = [
  {
    id: 1,
    name: "Guantes de Nitrilo Industriales",
    description: "Protección química superior resistente a aceites e hidrocarburos",
    rating: 4.8,
    reviews: 234,
    price: "Desde $185 MXN",
    image: "/images/guantes/nitrilo-industrial.jpg",
    features: [
      "Resistencia química amplia",
      "Sin látex - hipoalergénico", 
      "Certificación EN 374",
      "Durabilidad superior"
    ],
    certifications: ["NOM-017", "EN 374", "ANSI 105"],
    link: "https://articulo.mercadolibre.com.mx/MLM-1234567890-guantes-nitrilo-industrial",
    category: "Químico",
    applications: "Industria automotriz, química, petroquímica"
  },
  {
    id: 2,
    name: "Guantes Anti-Corte Nivel A5",
    description: "Máxima protección contra cortes y laceración con fibra HPPE",
    rating: 4.9,
    reviews: 189,
    price: "Desde $420 MXN",
    image: "/images/guantes/anticorte-a5.jpg",
    features: [
      "Nivel de corte A5 (máximo)",
      "Fibra HPPE reforzada",
      "Recubrimiento PU",
      "Lavable y reutilizable"
    ],
    certifications: ["ANSI/ISEA 105", "EN 388", "NOM-017"],
    link: "https://articulo.mercadolibre.com.mx/MLM-2345678901-guantes-anticorte-nivel-a5",
    category: "Mecánico",
    applications: "Manipulación vidrio, metal, herramientas cortantes"
  },
  {
    id: 3,
    name: "Guantes de Cuero para Soldadura",
    description: "Protección térmica y mecánica para trabajos de soldadura",
    rating: 4.7,
    reviews: 156,
    price: "Desde $320 MXN",
    image: "/images/guantes/cuero-soldadura.jpg",
    features: [
      "Cuero bovino resistente",
      "Forrado interior algodón",
      "Costuras reforzadas",
      "Resistencia térmica"
    ],
    certifications: ["EN 407", "EN 388", "NOM-017"],
    link: "https://articulo.mercadolibre.com.mx/MLM-3456789012-guantes-cuero-soldadura",
    category: "Térmico",
    applications: "Soldadura, fundición, manipulación materiales calientes"
  },
  {
    id: 4,
    name: "Guantes de PVC Químico Resistentes",
    description: "Impermeables con excelente resistencia a ácidos y álcalis",
    rating: 4.6,
    reviews: 278,
    price: "Desde $165 MXN",
    image: "/images/guantes/pvc-quimico.jpg",
    features: [
      "100% impermeables",
      "Resistencia ácidos/álcalis",
      "Interior afelpado",
      "Fácil descontaminación"
    ],
    certifications: ["EN 374", "NOM-017", "ANSI 105"],
    link: "https://articulo.mercadolibre.com.mx/MLM-4567890123-guantes-pvc-quimico",
    category: "Químico",
    applications: "Limpieza industrial, manipulación químicos, pesca"
  },
  {
    id: 5,
    name: "Guantes Térmicos Criogénicos",
    description: "Protección extrema contra temperaturas de -40°C a +250°C",
    rating: 4.9,
    reviews: 92,
    price: "Desde $750 MXN",
    image: "/images/guantes/termicos-criogenicos.jpg",
    features: [
      "Rango térmico extremo",
      "Aislamiento multicapa",
      "Resistencia a vapores",
      "Certificación criogénica"
    ],
    certifications: ["EN 407", "EN 511", "ANSI/ISEA 105"],
    link: "https://articulo.mercadolibre.com.mx/MLM-5678901234-guantes-termicos-criogenicos",
    category: "Térmico",
    applications: "Criogenia, hornos industriales, fundición"
  }
];

export default function TopProducts() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge className="bg-orange-100 text-orange-800 px-4 py-2 text-sm font-semibold mb-4">
            🧤 TOP 5 PRODUCTOS DESTACADOS
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Guantes de Protección Más Vendidos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Selección premium de guantes certificados para diferentes tipos de riesgo industrial, 
            con las mejores calificaciones de nuestros clientes profesionales.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6">
          {topProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <Card className="h-full hover:shadow-xl transition-shadow duration-300 border-2 hover:border-orange-200">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <Badge 
                      className={`text-xs font-medium ${
                        product.category === 'Químico' 
                          ? 'bg-blue-100 text-blue-800'
                          : product.category === 'Mecánico'
                          ? 'bg-red-100 text-red-800'
                          : 'bg-orange-100 text-orange-800'
                      }`}
                    >
                      {product.category}
                    </Badge>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-semibold text-gray-700">
                        {product.rating}
                      </span>
                    </div>
                  </div>
                  
                  <CardTitle className="text-lg font-bold text-gray-900 leading-tight mb-2">
                    {product.name}
                  </CardTitle>
                  
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {product.description}
                  </p>
                </CardHeader>

                <CardContent className="pt-0">
                  {/* Features */}
                  <div className="space-y-2 mb-4">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <Shield className="w-3 h-3 text-orange-500 flex-shrink-0" />
                        <span className="text-xs text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Certifications */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {product.certifications.map((cert, idx) => (
                      <Badge 
                        key={idx} 
                        variant="outline" 
                        className="text-xs px-2 py-1 bg-green-50 text-green-700 border-green-200"
                      >
                        {cert}
                      </Badge>
                    ))}
                  </div>

                  {/* Applications */}
                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-gray-700 mb-1">Aplicaciones:</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      {product.applications}
                    </p>
                  </div>

                  {/* Price and Reviews */}
                  <div className="border-t pt-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-lg font-bold text-orange-600">
                        {product.price}
                      </span>
                      <span className="text-xs text-gray-500">
                        {product.reviews} reseñas
                      </span>
                    </div>
                    
                    <motion.a
                      href={product.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-amber-600 text-white px-4 py-3 rounded-lg font-semibold text-sm hover:from-orange-600 hover:to-amber-700 transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Hand className="w-4 h-4" />
                      Ver en MercadoLibre
                      <ExternalLink className="w-3 h-3" />
                    </motion.a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-8 border border-orange-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              ¿Necesitas asesoría especializada?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Nuestros expertos en protección personal te ayudan a seleccionar los guantes correctos 
              según tu industria específica y tipo de riesgo laboral.
            </p>
            <motion.a
              href="/catalogo"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-amber-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-orange-600 hover:to-amber-700 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Hand className="w-6 h-6" />
              Ver Catálogo Completo
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}