"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronRight, BookOpen, Clock, CheckCircle } from "lucide-react";

interface TOCItem {
  id: string;
  title: string;
  subtitle: string;
  estimatedTime: number; // minutes
}

const tocItems: TOCItem[] = [
  {
    id: "introduccion",
    title: "1. Introducción",
    subtitle: "Importancia de la protección craneal",
    estimatedTime: 2
  },
  {
    id: "normativa-mexicana",
    title: "2. Normativa Mexicana",
    subtitle: "NOM-115-STPS-2009 y legislación",
    estimatedTime: 4
  },
  {
    id: "tipos-cascos",
    title: "3. Tipos de Cascos",
    subtitle: "Clasificación y aplicaciones",
    estimatedTime: 3
  },
  {
    id: "materiales-resistencia",
    title: "4. Materiales y Resistencia",
    subtitle: "Propiedades técnicas y durabilidad",
    estimatedTime: 3
  },
  {
    id: "uso-compatibilidad",
    title: "5. Uso y Compatibilidad",
    subtitle: "Ajuste correcto y accesorios",
    estimatedTime: 2
  },
  {
    id: "inspeccion-mantenimiento",
    title: "6. Inspección y Mantenimiento",
    subtitle: "Cuidado y vida útil",
    estimatedTime: 3
  },
  {
    id: "sanciones-responsabilidades",
    title: "7. Sanciones y Responsabilidades",
    subtitle: "Marco legal y consecuencias",
    estimatedTime: 1
  }
];

export default function TOCSticky() {
  const [activeSection, setActiveSection] = useState("");
  const [completedSections, setCompletedSections] = useState<Set<string>>(new Set());
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();
  
  // Control visibility based on scroll position
  const opacity = useTransform(scrollY, [300, 500], [0, 1]);
  const y = useTransform(scrollY, [300, 500], [50, 0]);

  useEffect(() => {
    const handleScroll = () => {
      // Show TOC after hero section
      setIsVisible(window.scrollY > 800);

      // Update active section based on scroll position
      const sections = tocItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(tocItems[i].id);
          
          // Mark previous sections as completed
          const newCompleted = new Set<string>();
          for (let j = 0; j < i; j++) {
            newCompleted.add(tocItems[j].id);
          }
          setCompletedSections(newCompleted);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  };

  if (!isVisible) return null;

  const totalTime = tocItems.reduce((sum, item) => sum + item.estimatedTime, 0);
  const completedTime = Array.from(completedSections).reduce((sum, sectionId) => {
    const item = tocItems.find(t => t.id === sectionId);
    return sum + (item?.estimatedTime || 0);
  }, 0);
  const progressPercentage = (completedTime / totalTime) * 100;

  return (
    <motion.div
      style={{ opacity, y }}
      className="fixed top-1/2 right-8 transform -translate-y-1/2 z-40 hidden xl:block"
    >
      <div className="bg-white/95 backdrop-blur-lg border border-gray-200 rounded-2xl shadow-2xl p-6 w-80 max-h-[80vh] overflow-y-auto">
        
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-3">
            <BookOpen className="w-5 h-5 text-blue-600" />
            <h3 className="font-bold text-gray-900">Tabla de Contenidos</h3>
          </div>
          
          {/* Progress bar */}
          <div className="mb-4">
            <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
              <span>Progreso de lectura</span>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{completedTime}/{totalTime} min</span>
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <motion.div
                className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                style={{ width: `${progressPercentage}%` }}
                initial={{ width: 0 }}
                animate={{ width: `${progressPercentage}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <p className="text-xs text-gray-500 mt-1">
              {Math.round(progressPercentage)}% completado
            </p>
          </div>
        </div>

        {/* Table of contents */}
        <nav>
          <ul className="space-y-2">
            {tocItems.map((item, index) => {
              const isActive = activeSection === item.id;
              const isCompleted = completedSections.has(item.id);
              
              return (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full text-left p-3 rounded-xl transition-all duration-300 hover:bg-gray-50 ${
                      isActive
                        ? 'bg-blue-50 border-l-4 border-blue-500 shadow-sm'
                        : isCompleted
                        ? 'bg-green-50'
                        : ''
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-1">
                        {isCompleted ? (
                          <CheckCircle className="w-5 h-5 text-green-500" />
                        ) : isActive ? (
                          <motion.div
                            animate={{ rotate: 90 }}
                            transition={{ duration: 0.3 }}
                          >
                            <ChevronRight className="w-5 h-5 text-blue-500" />
                          </motion.div>
                        ) : (
                          <ChevronRight className="w-5 h-5 text-gray-400" />
                        )}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <h4 className={`font-semibold text-sm leading-tight mb-1 ${
                          isActive
                            ? 'text-blue-900'
                            : isCompleted
                            ? 'text-green-900'
                            : 'text-gray-900'
                        }`}>
                          {item.title}
                        </h4>
                        <p className={`text-xs leading-tight ${
                          isActive
                            ? 'text-blue-700'
                            : isCompleted
                            ? 'text-green-700'
                            : 'text-gray-600'
                        }`}>
                          {item.subtitle}
                        </p>
                        <div className="flex items-center gap-1 mt-1">
                          <Clock className="w-3 h-3 text-gray-400" />
                          <span className="text-xs text-gray-500">
                            {item.estimatedTime} min
                          </span>
                        </div>
                      </div>
                    </div>
                  </button>
                </motion.li>
              );
            })}
          </ul>
        </nav>

        {/* Footer */}
        <div className="mt-6 pt-4 border-t border-gray-200">
          <div className="text-center">
            <p className="text-xs text-gray-500 mb-2">
              Manual basado en NOM-115-STPS-2009
            </p>
            <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>Sección actual</span>
              <div className="w-2 h-2 bg-green-500 rounded-full ml-3"></div>
              <span>Completado</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}