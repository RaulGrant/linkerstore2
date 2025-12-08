"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Wrench, Eye, HardHat, ExternalLink } from "lucide-react";
import Link from "next/link";

const relatedGuides = [
  {
    id: 1,
    title: "Manual de Cascos de Seguridad",
    description: "Guía completa sobre protección craneal y normativas NOM-115",
    icon: HardHat,
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    textColor: "text-blue-800",
    href: "/blog/manual-cascos-seguridad-proteccion-craneal",
    badge: "Protección Craneal",
    readTime: "12 min",
    isFeatured: true
  },
  {
    id: 2,
    title: "Protección Respiratoria Industrial",
    description: "Todo sobre máscaras y respiradores certificados",
    icon: Shield,
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
    textColor: "text-green-800",
    href: "/blog/proteccion-respiratoria-mascaras-respiradores",
    badge: "Respiradores",
    readTime: "15 min"
  },
  {
    id: 3,
    title: "Calzado de Seguridad Industrial",
    description: "Selección y mantenimiento de calzado protectivo",
    icon: Wrench,
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
    textColor: "text-purple-800",
    href: "/blog/guia-calzado-seguridad-proteccion-pies",
    badge: "Calzado",
    readTime: "10 min"
  },
  {
    id: 4,
    title: "Protección Visual y Ocular",
    description: "Lentes y equipos de protección para los ojos",
    icon: Eye,
    color: "from-teal-500 to-teal-600",
    bgColor: "bg-teal-50",
    borderColor: "border-teal-200",
    textColor: "text-teal-800",
    href: "/blog/proteccion-ocular-lentes-seguridad",
    badge: "Protección Visual",
    readTime: "8 min"
  }
];

export default function RelatedGuidesBanner() {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge className="bg-orange-100 text-orange-800 px-4 py-2 text-sm font-semibold mb-4">
            📚 RECURSOS RELACIONADOS
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Otras Guías de Protección Personal
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explora nuestras guías técnicas especializadas para una protección integral 
            en el lugar de trabajo.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {relatedGuides.map((guide, index) => (
            <motion.div
              key={guide.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <Link href={guide.href}>
                <Card className={`h-full hover:shadow-xl transition-all duration-300 ${guide.bgColor} ${guide.borderColor} border-2 hover:scale-[1.02] ${
                  guide.isFeatured ? 'ring-2 ring-orange-400 ring-offset-2' : ''
                }`}>
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-2">
                      <Badge className={`text-xs font-medium ${guide.textColor} bg-white/50`}>
                        {guide.badge}
                      </Badge>
                      {guide.isFeatured && (
                        <Badge className="bg-orange-500 text-white text-xs">
                          Destacado
                        </Badge>
                      )}
                    </div>
                    
                    <div className={`w-12 h-12 bg-gradient-to-br ${guide.color} rounded-xl flex items-center justify-center mb-3`}>
                      <guide.icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <CardTitle className={`text-lg font-bold ${guide.textColor} leading-tight mb-2`}>
                      {guide.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">
                      {guide.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">
                        ⏱️ {guide.readTime}
                      </span>
                      <motion.div
                        className={`flex items-center gap-1 ${guide.textColor} text-sm font-semibold`}
                        whileHover={{ x: 3 }}
                      >
                        Leer más
                        <ExternalLink className="w-3 h-3" />
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-orange-500 to-amber-600 rounded-2xl p-8 text-white shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              ¿Necesitas Capacitación Especializada?
            </h3>
            <p className="text-orange-100 mb-6 max-w-2xl mx-auto text-lg">
              Accede a nuestro programa completo de capacitación en EPP y normativas de seguridad industrial.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/guias"
                className="inline-flex items-center gap-2 bg-white text-orange-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-orange-50 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Shield className="w-6 h-6" />
                Ver Todas las Guías
              </motion.a>
              <motion.a
                href="/catalogo"
                className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-orange-600 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink className="w-6 h-6" />
                Ver Productos
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}