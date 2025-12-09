"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, HardHat, Footprints, Eye, Shield } from "lucide-react";

const relatedGuides = [
  {
    id: 1,
    title: "Manual de Cascos de Seguridad",
    description: "Guía completa sobre normativas ANSI/ISEA, tipos de cascos y criterios de selección para protección craneal.",
    category: "Protección Craneal",
    readTime: "15 min",
    slug: "/blog/manual-cascos-seguridad-proteccion-craneal",
    icon: HardHat,
    color: "bg-blue-100 text-blue-600",
    featured: true
  },
  {
    id: 2,
    title: "Protección Ocular Industrial",
    description: "Todo sobre lentes de seguridad, gafas protectoras y normativas para protección visual en el trabajo.",
    category: "Protección Visual",
    readTime: "12 min",
    slug: "/guias",
    icon: Eye,
    color: "bg-purple-100 text-purple-600",
    featured: false
  },
  {
    id: 3,
    title: "Manual de Calzado de Seguridad",
    description: "Normativa NOM-113, tipos de protección y criterios de selección para calzado industrial.",
    category: "Protección de Pies",
    readTime: "18 min",
    slug: "/guias",
    icon: Footprints,
    color: "bg-orange-100 text-orange-600",
    featured: false
  },
  {
    id: 4,
    title: "EPP Integral: Sistemas de Protección",
    description: "Cómo combinar diferentes equipos de protección personal para máxima seguridad industrial.",
    category: "EPP General",
    readTime: "20 min",
    slug: "/guias",
    icon: Shield,
    color: "bg-green-100 text-green-600",
    featured: false
  }
];

export default function RelatedGuidesBanner() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="bg-green-100 text-green-800 px-4 py-2 mb-4 text-sm font-medium">
            Guías Relacionadas
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Otras Guías de Seguridad Industrial
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Complementa tu conocimiento con nuestras guías especializadas en diferentes 
            equipos de protección personal
          </p>
        </motion.div>

        {/* Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedGuides.map((guide, index) => {
            const IconComponent = guide.icon;
            return (
              <motion.div
                key={guide.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <Card className="h-full bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 group cursor-pointer">
                  {guide.featured && (
                    <div className="absolute -top-3 -right-3 z-10">
                      <Badge className="bg-green-500 text-white px-2 py-1 text-xs font-bold rounded-full">
                        DESTACADO
                      </Badge>
                    </div>
                  )}
                  
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${guide.color} bg-opacity-20`}>
                        <IconComponent className={`w-6 h-6 ${guide.color.split(' ')[1]}`} />
                      </div>
                      <Badge variant="outline" className="text-xs text-gray-300 border-gray-600">
                        {guide.readTime}
                      </Badge>
                    </div>
                    
                    <CardTitle className="text-lg font-bold text-white group-hover:text-green-400 transition-colors line-clamp-2">
                      {guide.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <div className="space-y-4">
                      <Badge className="bg-gray-700 text-gray-200 text-xs">
                        {guide.category}
                      </Badge>
                      
                      <p className="text-sm text-gray-300 line-clamp-3 leading-relaxed">
                        {guide.description}
                      </p>

                      <Button 
                        asChild 
                        variant="outline"
                        className="w-full bg-transparent border-green-500 text-green-400 hover:bg-green-500 hover:text-white group-hover:scale-105 transition-all duration-200"
                      >
                        <a 
                          href={guide.slug}
                          className="inline-flex items-center justify-center gap-2"
                        >
                          Leer Guía
                          <ArrowRight className="w-4 h-4" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              ¿Buscas Más Información?
            </h3>
            <p className="text-green-100 mb-6 max-w-2xl mx-auto">
              Explora todas nuestras guías técnicas y mantente actualizado con las últimas normativas de seguridad
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                variant="secondary"
                className="bg-white text-green-700 hover:bg-gray-100"
              >
                <a href="/guias">
                  Ver Todas las Guías
                </a>
              </Button>
              <Button 
                asChild
                variant="outline"
                className="border-white text-green-700 hover:bg-gray-100 hover:text-green-700"
              >
                <a href="/contacto">
                  Consulta Técnica
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}