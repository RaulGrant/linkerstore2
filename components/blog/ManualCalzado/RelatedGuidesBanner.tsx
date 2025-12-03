"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Shield, HardHat, Eye, Zap, Wrench } from "lucide-react";

const relatedGuides = [
  {
    title: "Manual de Cascos de Seguridad",
    description: "Protección craneal según normativas NOM-115-STPS-2009",
    icon: "🛡️",
    color: "from-blue-500 to-indigo-600",
    href: "/blog/manual-cascos-seguridad-proteccion-craneal",
    status: "Completo"
  },
  {
    title: "Guantes de Seguridad Industrial",
    description: "Protección de manos en el trabajo según normativas NOM",
    icon: "🧤",
    color: "from-green-500 to-emerald-600",
    href: "/blog/guia-completa-chalecos-seguridad",
    status: "Nuevo"
  },
  {
    title: "Equipos de Protección Respiratoria",
    description: "Mascarillas, respiradores y filtros industriales",
    icon: "😷",
    color: "from-teal-500 to-cyan-600",
    href: "/blog/proteccion-respiratoria-mascaras-respiradores",
    status: "Nuevo"
  },
  {
    title: "Protección Visual Industrial",
    description: "Lentes, gafas y caretas de seguridad para trabajo",
    icon: "🥽",
    color: "from-purple-500 to-violet-600",
    href: "/blog/proteccion-visual-lentes-seguridad",
    status: "Nuevo"
  },
  {
    title: "Normativas de Seguridad Industrial",
    description: "Cumplimiento de NOM y estándares internacionales en México",
    icon: "📋",
    color: "from-yellow-500 to-orange-600",
    href: "/blog/normativas-seguridad-industrial-mexico",
    status: "Nuevo"
  }
];

export default function RelatedGuidesBanner() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-orange-900 to-red-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-orange-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-red-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-orange-600/5 to-red-600/5 rounded-full blur-3xl"></div>
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
          
          <p className="text-xl md:text-2xl text-orange-100 leading-relaxed max-w-3xl mx-auto">
            Descubre nuestra colección completa de manuales técnicos especializados en 
            equipos de protección personal y seguridad laboral
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {relatedGuides.map((guide, index) => (
            <motion.a
              key={index}
              href={guide.href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                transition: { duration: 0.3 } 
              }}
              className="group block"
            >
              <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 h-full hover:bg-white/20 transition-all duration-300 overflow-hidden">
                {/* Status Badge */}
                <div className="absolute top-3 right-3">
                  <Badge 
                    className={`
                      text-xs px-2 py-1 font-medium
                      ${guide.status === 'Completo' 
                        ? 'bg-green-500/20 text-green-300 border border-green-400/30' 
                        : 'bg-orange-500/20 text-orange-300 border border-orange-400/30'
                      }
                    `}
                  >
                    {guide.status}
                  </Badge>
                </div>

                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${guide.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-2xl">{guide.icon}</span>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-white group-hover:text-orange-200 transition-colors leading-tight">
                    {guide.title}
                  </h3>
                  
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {guide.description}
                  </p>
                </div>

                {/* Arrow indicator */}
                <div className="flex items-center gap-2 mt-4 text-orange-200 group-hover:text-orange-100 transition-colors">
                  <span className="text-sm font-medium">Leer guía</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
              </div>
            </motion.a>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <motion.a
            href="/blog"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-orange-700 hover:to-red-700 transition-all duration-300 shadow-xl hover:shadow-2xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>📚</span>
            Ver Todas las Guías Técnicas
            <ExternalLink className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}