'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight, List, X } from 'lucide-react';

interface TocItem {
  id: string;
  title: string;
  level: number;
}

interface TocNavigationProps {
  items: TocItem[];
  className?: string;
}

export default function TocNavigation({ items, className = '' }: TocNavigationProps) {
  const [activeSection, setActiveSection] = useState<string>('');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-80px 0px -80% 0px',
        threshold: 0.1,
      }
    );

    // Observar todos los headings
    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [items]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 100; // Offset para el header fijo
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
    setIsOpen(false); // Cerrar el menú móvil después de hacer clic
  };

  const getIndentation = (level: number) => {
    return `ml-${(level - 1) * 4}`;
  };

  return (
    <>
      {/* Botón flotante para móvil */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="fixed bottom-6 right-6 z-50 md:hidden"
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          size="sm"
          className="rounded-full shadow-lg bg-blue-600 hover:bg-blue-700"
        >
          {isOpen ? <X className="h-4 w-4" /> : <List className="h-4 w-4" />}
        </Button>
      </motion.div>

      {/* Overlay para móvil */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Tabla de contenidos */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          x: isOpen ? 0 : 20,
          pointerEvents: isOpen ? 'auto' : 'none'
        }}
        transition={{ duration: 0.3 }}
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 md:relative md:opacity-100 md:pointer-events-auto md:translate-x-0 md:w-full md:h-auto md:shadow-none md:bg-transparent ${className}`}
      >
        <Card className="h-full md:h-auto border-0 md:border shadow-none md:shadow-lg">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-lg">
              <List className="h-5 w-5 text-blue-600" />
              Tabla de Contenidos
            </CardTitle>
          </CardHeader>

          <CardContent className="p-0">
            <nav className="px-6 pb-6">
              <ul className="space-y-2">
                {items.map((item, index) => (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className={`${getIndentation(item.level)}`}
                  >
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full text-left py-2 px-3 rounded-lg transition-all duration-200 group ${
                        activeSection === item.id
                          ? 'bg-blue-100 text-blue-700 font-medium'
                          : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <ChevronRight
                          className={`h-3 w-3 transition-transform duration-200 ${
                            activeSection === item.id
                              ? 'text-blue-600 rotate-90'
                              : 'text-gray-400 group-hover:text-gray-600'
                          }`}
                        />
                        <span className="text-sm leading-tight">{item.title}</span>
                      </div>
                    </button>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </CardContent>
        </Card>
      </motion.div>
    </>
  );
}
