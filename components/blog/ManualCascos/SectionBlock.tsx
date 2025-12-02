"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Quote, ExternalLink, CheckCircle, AlertTriangle, Info, BookOpen } from "lucide-react";

interface SectionBlockProps {
  sectionNumber: number;
  title: string;
  subtitle: string;
  content: {
    introduction: string;
    expertQuote: {
      text: string;
      source: string;
    };
    keyPoints: string[];
    recommendations: string[];
    callToAction?: {
      text: string;
      link: string;
    };
  };
  icon: string;
  bgGradient: string;
  variant?: 'default' | 'alternate' | 'featured';
}

export default function SectionBlock({
  sectionNumber,
  title,
  subtitle,
  content,
  icon,
  bgGradient,
  variant = 'default'
}: SectionBlockProps) {
  
  const getVariantClasses = () => {
    switch (variant) {
      case 'alternate':
        return {
          section: 'py-16 bg-gradient-to-r from-gray-50 to-blue-50 border-b border-gray-200 relative',
          container: 'container mx-auto px-6',
          layout: 'max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'
        };
      case 'featured':
        return {
          section: 'py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white border-b border-blue-700 relative',
          container: 'container mx-auto px-6',
          layout: 'max-w-5xl mx-auto text-center'
        };
      default:
        return {
          section: 'py-20 border-b border-gray-200 relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50',
          container: 'container mx-auto px-6 relative',
          layout: 'max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start'
        };
    }
  };

  const classes = getVariantClasses();
  return (
    <section className={classes.section}>

      {/* Background elements for default variant */}
      {variant === 'default' && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 -left-20 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 -right-20 w-80 h-80 bg-green-100/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-yellow-100/40 rounded-full blur-2xl"></div>
        </div>
      )}

      <div className={classes.container}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={classes.layout}
        >
          
          {/* Section Header */}
          <div className={`${variant === 'default' ? 'lg:col-span-12 text-center mb-8' : 'text-center mb-12'}`}>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`inline-flex items-center justify-center w-20 h-20 rounded-full ${bgGradient} text-4xl mb-6 shadow-lg`}
            >
              {icon}
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className={`text-3xl md:text-4xl font-black mb-4 ${
                variant === 'featured' ? 'text-white' : 'text-gray-900'
              }`}>
                {title}
              </h2>
              <p className={`text-xl leading-relaxed ${
                variant === 'featured' ? 'text-blue-100' : 'text-gray-600'
              }`}>
                {subtitle}
              </p>
            </motion.div>
          </div>

          {/* Content Layout - Different for default variant */}
          {variant === 'default' ? (
            <>
              {/* Left Column - Introduction and Quote */}
              <div className="lg:col-span-7 space-y-8">
                {/* Introduction */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <div className={`w-3 h-8 ${bgGradient} rounded-full`}></div>
                    Introducción
                  </h3>
                  <p className="text-lg leading-relaxed text-gray-700">
                    {content.introduction}
                  </p>
                </motion.div>

                {/* Expert Quote */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-blue-500 hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <Quote className="w-8 h-8 flex-shrink-0 mt-1 text-blue-500" />
                    <div className="flex-1">
                      <p className="italic mb-4 text-lg leading-relaxed text-gray-800">
                        "{content.expertQuote.text}"
                      </p>
                      <div className="flex items-center gap-2 text-sm font-semibold text-blue-600">
                        <BookOpen className="w-4 h-4" />
                        Fuente: {content.expertQuote.source}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Right Column - Key Points and Recommendations */}
              <div className="lg:col-span-5 space-y-8">
                {/* Key Points Card */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 shadow-lg border border-green-100 hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <Info className="w-6 h-6 text-green-500" />
                    Puntos Clave
                  </h3>
                  <div className="space-y-4">
                    {content.keyPoints.map((point, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.7 + (index * 0.1) }}
                        className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                      >
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <p className="leading-relaxed text-gray-700 text-sm">{point}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Recommendations Card */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 shadow-lg border border-yellow-200 hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <AlertTriangle className="w-6 h-6 text-yellow-500" />
                    Recomendaciones
                  </h3>
                  <ul className="space-y-4">
                    {content.recommendations.map((recommendation, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.9 + (index * 0.1) }}
                        className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                      >
                        <div className="w-3 h-3 bg-yellow-500 rounded-full flex-shrink-0 mt-1.5"></div>
                        <p className="leading-relaxed text-gray-700 text-sm">{recommendation}</p>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              {/* Call to Action - Full Width for default variant */}
              {content.callToAction && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  className="lg:col-span-12 mt-12"
                >
                  <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 shadow-2xl text-white text-center">
                    <h4 className="text-2xl font-bold mb-4">¿Necesitas productos relacionados?</h4>
                    <p className="text-blue-100 mb-6 text-lg">{content.callToAction.text}</p>
                    <motion.a
                      href={content.callToAction.link}
                      className="inline-flex items-center gap-2 bg-white text-blue-600 font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:bg-blue-50 shadow-lg"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-5 h-5" />
                      Ver Productos Certificados
                    </motion.a>
                  </div>
                </motion.div>
              )}
            </>
          ) : (
            <>
              {/* Original layout for alternate and featured variants */}
              {/* Introduction */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-12"
              >
                <p className={`text-lg leading-relaxed ${
                  variant === 'featured' ? 'text-blue-100' : 'text-gray-700'
                }`}>
                  {content.introduction}
                </p>
              </motion.div>

              {/* Expert Quote */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mb-12"
              >
                <div className={`border-l-4 rounded-lg p-6 ${
                  variant === 'featured' 
                    ? 'bg-white/10 border-yellow-300' 
                    : 'bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-500'
                }`}>
                  <div className="flex items-start gap-4">
                    <Quote className={`w-8 h-8 flex-shrink-0 mt-1 ${
                      variant === 'featured' ? 'text-yellow-300' : 'text-blue-500'
                    }`} />
                    <div className="flex-1">
                      <p className={`italic mb-3 text-lg leading-relaxed ${
                        variant === 'featured' ? 'text-blue-100' : 'text-gray-800'
                      }`}>
                        "{content.expertQuote.text}"
                      </p>
                      <div className={`flex items-center gap-2 text-sm font-semibold ${
                        variant === 'featured' ? 'text-yellow-300' : 'text-blue-600'
                      }`}>
                        <BookOpen className="w-4 h-4" />
                        Fuente: {content.expertQuote.source}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Key Points */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mb-12"
              >
                <h3 className={`text-2xl font-bold mb-6 flex items-center gap-2 ${
                  variant === 'featured' ? 'text-white' : 'text-gray-900'
                }`}>
                  <Info className={`w-6 h-6 ${variant === 'featured' ? 'text-yellow-300' : 'text-blue-500'}`} />
                  Puntos Clave
                </h3>
                <div className="grid gap-4">
                  {content.keyPoints.map((point, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.7 + (index * 0.1) }}
                      className={`flex items-start gap-3 p-4 rounded-xl transition-colors duration-300 ${
                        variant === 'featured' 
                          ? 'bg-white/10 hover:bg-white/20' 
                          : 'bg-gray-50 hover:bg-gray-100'
                      }`}
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <p className={`leading-relaxed ${
                        variant === 'featured' ? 'text-blue-100' : 'text-gray-700'
                      }`}>{point}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Recommendations */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mb-12"
              >
                <h3 className={`text-2xl font-bold mb-6 flex items-center gap-2 ${
                  variant === 'featured' ? 'text-white' : 'text-gray-900'
                }`}>
                  <AlertTriangle className={`w-6 h-6 ${variant === 'featured' ? 'text-yellow-300' : 'text-yellow-500'}`} />
                  Recomendaciones Técnicas
                </h3>
                <div className={`rounded-xl p-6 ${
                  variant === 'featured' 
                    ? 'bg-white/10 border border-white/20' 
                    : 'bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200'
                }`}>
                  <ul className="space-y-3">
                    {content.recommendations.map((recommendation, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.9 + (index * 0.1) }}
                        className="flex items-start gap-3"
                      >
                        <div className="w-2 h-2 bg-yellow-500 rounded-full flex-shrink-0 mt-2"></div>
                        <p className={`leading-relaxed ${
                          variant === 'featured' ? 'text-blue-100' : 'text-gray-700'
                        }`}>{recommendation}</p>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* Call to Action */}
              {content.callToAction && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  className="text-center"
                >
                  <div className={`rounded-2xl p-8 shadow-lg ${
                    variant === 'featured' 
                      ? 'bg-white/10 border border-white/20' 
                      : 'bg-white border border-gray-200'
                  }`}>
                    <h4 className={`text-xl font-bold mb-4 ${
                      variant === 'featured' ? 'text-white' : 'text-gray-900'
                    }`}>
                      ¿Necesitas productos relacionados?
                    </h4>
                    <p className={`mb-6 ${
                      variant === 'featured' ? 'text-blue-200' : 'text-gray-600'
                    }`}>
                      {content.callToAction.text}
                    </p>
                    <motion.a
                      href={content.callToAction.link}
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-5 h-5" />
                      Ver Productos Certificados
                    </motion.a>
                  </div>
                </motion.div>
              )}
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}