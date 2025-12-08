"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, ShieldCheck, ShoppingCart } from "lucide-react";

const relatedGuides = [
  {
    title: "Manual de Cascos de Seguridad",
    description: "Guía técnica completa sobre protección craneal conforme a NOM-115-STPS-2009. Aprende a seleccionar cascos certificados.",
    icon: "🪖",
    gradient: "from-blue-500 to-cyan-600",
    href: "/blog/manual-cascos-seguridad-proteccion-craneal",
    status: "Popular",
  },
  {
    title: "Guía Completa de Chalecos de Seguridad",
    description: "Clasificación ANSI/ISEA 107 de chalecos de alta visibilidad: Clase 1, 2 y 3 según velocidad vehicular. Materiales fluorescentes.",
    icon: "🦺",
    gradient: "from-orange-500 to-amber-600",
    href: "/blog/guia-completa-chalecos-seguridad",
    status: "Nuevo",
  },
  {
    title: "Guía de Calzado de Seguridad",
    description: "Manual técnico de protección podal bajo NOM-113-STPS-2009. Los 7 tipos de calzado certificado: impacto, compresión, penetración, dieléctrico.",
    icon: "👢",
    gradient: "from-emerald-500 to-green-600",
    href: "/blog/guia-calzado-seguridad-proteccion-pies",
    status: "Top",
  },
  {
    title: "Protección Respiratoria",
    description: "Guía exhaustiva NOM-116-STPS-2009: máscaras, respiradores y filtros certificados. Factores de protección asignados (APF).",
    icon: "😷",
    gradient: "from-purple-500 to-violet-600",
    href: "/blog/proteccion-respiratoria-mascaras-respiradores",
    status: "Nuevo",
  },
  {
    title: "Guantes de Trabajo",
    description: "Manual integral NOM-017-STPS-2008 sobre protección manual industrial. Clasificación por riesgo: mecánico (EN 388), químico (EN 374), térmico (EN 407).",
    icon: "🧤",
    gradient: "from-rose-500 to-red-600",
    href: "/blog/guantes-trabajo-seleccion-riesgo-aplicacion",
    status: "Popular",
  },
];

export default function RelatedGuidesBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-900 py-16">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-10 top-10 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute -right-12 bottom-10 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-cyan-500/10 to-indigo-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto mb-12 max-w-4xl text-center"
        >
          <Badge className="mb-5 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
            Guías recomendadas
          </Badge>
          <h2 className="text-3xl font-black text-white sm:text-4xl md:text-5xl">
            Constrúye un programa de cumplimiento integral con estas guías relacionadas
          </h2>
          <p className="mt-4 text-base sm:text-lg text-blue-100">
            Amplía tu biblioteca de recursos normativos con manuales de EPP que cubren desde protección craneal hasta respiratoria.
          </p>
        </motion.div>

        {/* Responsive container:
            - mobile: horizontal scroll (snap) so cards remain readable
            - md+: grid layout; lg: 5 columns to show all 5 in a row
        */}
        <div className="mx-auto max-w-7xl">
          <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-5 gap-8 place-items-stretch">
            {relatedGuides.map((guide, index) => (
              <motion.a
                key={guide.title}
                href={guide.href}
                aria-label={`Ir a la guía ${guide.title}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="group relative flex w-full h-[360px] flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 text-white backdrop-blur transition-transform duration-300 hover:-translate-y-2 hover:bg-white/10"
              >
                <div className="flex items-start justify-between">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${guide.gradient} text-2xl shadow-lg`}>{guide.icon}</div>
                  <Badge className="bg-emerald-500/20 text-emerald-200 text-xs font-semibold">{guide.status}</Badge>
                </div>
                <h3 className="mt-6 text-xl font-bold leading-6 text-white transition-colors duration-300 group-hover:text-emerald-200">
                  {guide.title}
                </h3>
                <p className="mt-3 flex-1 text-sm text-blue-100">
                  {guide.description}
                </p>
                <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-blue-200 transition-colors group-hover:text-white">
                  <ExternalLink className="h-4 w-4" />
                  <span>Explorar guía</span>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Mobile/Small screens: horizontal scroll with snap to items */}
          <div className="md:hidden -mx-4 px-4">
            <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory touch-pan-x py-2">
              {relatedGuides.map((guide, index) => (
                <motion.a
                  key={guide.title}
                  href={guide.href}
                  aria-label={`Ir a la guía ${guide.title}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.06 }}
                  className="snap-start shrink-0 w-[280px] sm:w-[320px] group relative flex flex-col h-[360px] overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-5 text-white backdrop-blur transition-transform duration-300 hover:-translate-y-1 hover:bg-white/10"
                >
                  <div className="flex items-start justify-between">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${guide.gradient} text-2xl shadow-lg`}>{guide.icon}</div>
                    <Badge className="bg-emerald-500/20 text-emerald-200 text-xs font-semibold">{guide.status}</Badge>
                  </div>
                  <h3 className="mt-4 text-lg sm:text-xl font-bold leading-6 text-white transition-colors duration-300 group-hover:text-emerald-200">
                    {guide.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm text-blue-100">
                    {guide.description}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-blue-200 transition-colors group-hover:text-white">
                    <ExternalLink className="h-4 w-4" />
                    <span>Explorar guía</span>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 flex flex-col items-center justify-center gap-4 text-center"
        >
          <motion.a
            href="/guias"
            className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-emerald-400 to-blue-500 px-6 py-3 text-sm sm:text-base font-bold text-slate-900 shadow-lg transition-transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ShieldCheck className="h-5 w-5" />
            Ver biblioteca completa de guías
          </motion.a>
          <motion.a
            href="/catalogo"
            className="inline-flex items-center gap-3 rounded-full border border-white/20 px-6 py-3 text-sm sm:text-base font-semibold text-white transition-transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ShoppingCart className="h-5 w-5" />
            Ver los mejores productos en tienda
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4"
          >
            {[
              { label: "Guías especializadas", value: "60+", icon: "" },
              { label: "Consultores aliados", value: "25", icon: "" },
              { label: "Empresas asistidas", value: "180", icon: "" },
              { label: "Sanciones evitadas", value: "$9.2M", icon: "" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-white backdrop-blur">
                <div className="text-2xl">{stat.icon}</div>
                <div className="mt-2 text-2xl font-bold">{stat.value}</div>
                <div className="text-xs text-blue-100">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}