"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Shield, HardHat, Eye, Zap, Wrench } from "lucide-react";

const relatedGuides = [
  {
    title: "Guantes de Seguridad Industrial",
    description: "Protección de manos en el trabajo según normativas NOM",
    icon: "🧤",
    color: "from-green-500 to-emerald-600",
    href: "/blog/guia-completa-chalecos-seguridad",
    status: "Nuevo"
  },
  {
    title: "Calzado de Seguridad",
    description: "Protección podal y normativas de calzado industrial",
    icon: "👢",
    color: "from-brown-500 to-amber-600", 
    href: "/blog/guia-calzado-seguridad-proteccion-craneal",
    status: "Nuevo"
  },
  {
    title: "Equipos de Protección Respiratoria",
    description: "Mascarillas, respiradores y filtros industriales",
    icon: "😷",
    color: "from-blue-500 to-cyan-600",
    href: "/blog/proteccion-respiratoria-mascaras-respiradores",
    status: "Nuevo"
  },
  {
    title: "Guantes de Seguridad Industrial",
    description: "Protección de manos en el trabajo según normativas NOM",
    icon: "🧤",
    color: "from-purple-500 to-violet-600",
    href: "/blog/guantes-trabajo-seleccion-riesgo-aplicacion", 
    status: "Nuevo"
  },
    {
    title: "Normativas de seguridad industrial en México",
    description: "Cumplimiento de NOM y estándares internacionales",
    icon: "📋",
    color: "from-yellow-500 to-yellow-600",
    href: "/blog/normativas-seguridad-industrial-mexico",
    status: "Nuevo"
  },
];

export default function RelatedGuidesBanner() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-600/5 to-purple-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge className="bg-white/10 text-white border border-white/20 px-4 py-2 text-sm font-medium mb-6">
            📚 MÁS GUÍAS TÉCNICAS
          </Badge>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
            Explora Más Guías de{" "}
            <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
              Seguridad Industrial
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
            Descubre nuestra colección completa de manuales técnicos especializados en 
            equipos de protección personal y seguridad ocupacional.
          </p>
        </motion.div>

        {/* Grid de guías relacionadas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {relatedGuides.map((guide, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="group relative"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 h-full flex flex-col">
                {/* Status badge */}
                <div className="flex justify-between items-start mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${guide.color} flex items-center justify-center text-2xl shadow-lg`}>
                    {guide.icon}
                  </div>
                  <Badge className="bg-yellow-500/20 text-yellow-300 border border-yellow-500/30 text-xs px-2 py-1">
                    {guide.status}
                  </Badge>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-300 transition-colors duration-300">
                    {guide.title}
                  </h3>
                  <p className="text-blue-200 text-sm leading-relaxed mb-6">
                    {guide.description}
                  </p>
                </div>

                {/* Action */}
                <div className="pt-4 border-t border-white/10">
                  <div className="flex items-center gap-2 text-sm text-blue-300 font-medium">
                    <ExternalLink className="w-4 h-4" />
                    <span>Visitalo Ahora</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to actions */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <motion.a
            href="/guias"
            className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold px-8 py-4 rounded-full text-lg shadow-2xl hover:shadow-orange-500/25 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Shield className="w-6 h-6 mr-2 inline" />
            Ver Todas las Guías
          </motion.a>
          
          <motion.a
            href="/catalogo"
            className="bg-white/10 hover:bg-white/20 text-white border border-white/30 font-semibold px-8 py-4 rounded-full text-lg backdrop-blur-sm transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <HardHat className="w-6 h-6 mr-2 inline" />
            Explorar Tienda
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          {[
            { icon: "📚", number: "100+", label: "Guías Técnicas" },
            { icon: "🛡️", number: "100+", label: "Productos Certificados" },
            { icon: "⭐", number: "98%", label: "Satisfacción Cliente" },
            { icon: "🏆", number: "NOM", label: "Certificación Oficial" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-black text-white mb-1">{stat.number}</div>
              <div className="text-sm text-blue-300">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}