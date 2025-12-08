"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, AlertTriangle, Info, Zap, Shield, Eye, ExternalLink } from "lucide-react";

interface SectionData {
  id: string;
  title: string;
  subtitle?: string;
  content: string[];
  highlights?: string[];
  warnings?: string[];
  tips?: string[];
  subsections?: {
    title: string;
    content: string[];
    items?: string[];
  }[];
  badges?: {
    text: string;
    variant: 'default' | 'secondary' | 'destructive' | 'outline';
    color?: string;
  }[];
  callToAction?: {
    text: string;
    link: string;
  };
}

interface SectionBlockProps {
  section: SectionData;
  index: number;
}

export default function SectionBlock({ section, index }: SectionBlockProps) {
  const getIcon = (type: string) => {
    switch (type) {
      case 'highlight':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'warning':
        return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
      case 'tip':
        return <Zap className="w-5 h-5 text-blue-500" />;
      default:
        return <Info className="w-5 h-5 text-gray-500" />;
    }
  };

  return (
    <section id={section.id} className={`py-16 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          {/* Section Header */}
          <div className="text-center mb-8">
            {section.badges && (
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {section.badges.map((badge, idx) => (
                  <Badge 
                    key={idx} 
                    variant={badge.variant}
                    className={badge.color ? `${badge.color}` : ''}
                  >
                    {badge.text}
                  </Badge>
                ))}
              </div>
            )}
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {section.title}
            </h2>
            
            {section.subtitle && (
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {section.subtitle}
              </p>
            )}
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Content Column */}
            <div className="lg:col-span-2">
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="prose prose-gray max-w-none">
                    {section.content.map((paragraph, idx) => (
                      <p key={idx} className="text-gray-700 leading-relaxed mb-4">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {/* Subsections */}
                  {section.subsections && (
                    <div className="mt-8 space-y-6">
                      {section.subsections.map((subsection, idx) => (
                        <div key={idx} className="border-l-4 border-green-500 pl-6">
                          <h3 className="text-xl font-bold text-gray-900 mb-3">
                            {subsection.title}
                          </h3>
                          {subsection.content.map((paragraph, pIdx) => (
                            <p key={pIdx} className="text-gray-700 leading-relaxed mb-3">
                              {paragraph}
                            </p>
                          ))}
                          {subsection.items && (
                            <ul className="space-y-2 mt-4">
                              {subsection.items.map((item, iIdx) => (
                                <li key={iIdx} className="flex items-start gap-3">
                                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                  <span className="text-gray-700">{item}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Highlights */}
              {section.highlights && section.highlights.length > 0 && (
                <Card className="bg-green-50 border-green-200">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg font-bold text-green-800 flex items-center gap-2">
                      <Shield className="w-5 h-5" />
                      Puntos Clave
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="space-y-3">
                      {section.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          {getIcon('highlight')}
                          <span className="text-sm text-green-800">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}

              {/* Warnings */}
              {section.warnings && section.warnings.length > 0 && (
                <Card className="bg-yellow-50 border-yellow-200">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg font-bold text-yellow-800 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5" />
                      Advertencias
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="space-y-3">
                      {section.warnings.map((warning, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          {getIcon('warning')}
                          <span className="text-sm text-yellow-800">{warning}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}

              {/* Tips */}
              {section.tips && section.tips.length > 0 && (
                <Card className="bg-blue-50 border-blue-200">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg font-bold text-blue-800 flex items-center gap-2">
                      <Zap className="w-5 h-5" />
                      Consejos Profesionales
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="space-y-3">
                      {section.tips.map((tip, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          {getIcon('tip')}
                          <span className="text-sm text-blue-800">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>

          {/* Call to Action Banner */}
          {section.callToAction && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8"
            >
              <div className="bg-gradient-to-r from-green-600 to-emerald-700 rounded-2xl p-8 shadow-2xl text-white text-center">
                <h4 className="text-2xl font-bold mb-4">¿Necesitas productos relacionados?</h4>
                <p className="text-green-100 mb-6 text-lg">{section.callToAction.text}</p>
                <motion.a
                  href={section.callToAction.link}
                  className="inline-flex items-center gap-2 bg-white text-green-700 font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:bg-green-50 shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink className="w-5 h-5" />
                  Ver Productos Certificados
                </motion.a>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}