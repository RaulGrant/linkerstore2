'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { CheckCircle } from 'lucide-react';

const faqs = [
  {
    pregunta: '¿Los certificados tienen validez oficial?',
    respuesta: 'Sí, todos nuestros cursos cuentan con certificación oficial avalada por la STPS (Secretaría del Trabajo y Previsión Social) y son válidos para cumplir con las normativas mexicanas.'
  },
  {
    pregunta: '¿Cuánto dura cada curso?',
    respuesta: 'La duración varía según el curso: Extintores (8 horas), Seguridad en Alturas (16 horas), Seguridad en Construcción (12 horas), Corte y Soldadura (16 horas). Todos incluyen teoría y práctica.'
  },
  {
    pregunta: '¿Los cursos incluyen prácticas?',
    respuesta: 'Sí, todos nuestros cursos incluyen prácticas con equipo real. Creemos que la mejor forma de aprender es practicando en condiciones reales de trabajo.'
  },
  {
    pregunta: '¿Qué formas de pago aceptan?',
    respuesta: 'Aceptamos efectivo, transferencia bancaria, depósito y tarjetas de crédito/débito. También ofrecemos facturación para empresas.'
  },
  {
    pregunta: '¿Dónde se imparten los cursos?',
    respuesta: 'Contamos con instalaciones propias en Veracruz, Ver. También ofrecemos cursos in-company (en las instalaciones de tu empresa) para grupos de 10 personas o más.'
  },
  {
    pregunta: '¿Puedo llevar el curso en mi empresa?',
    respuesta: 'Sí, ofrecemos cursos in-company con descuentos especiales para grupos. El curso se adapta a los horarios y necesidades de tu empresa.'
  },
  {
    pregunta: '¿Qué pasa si no puedo asistir?',
    respuesta: 'Puedes reagendar tu curso sin costo adicional con 48 horas de anticipación. Si necesitas cancelar, aplicamos reembolso del 80% del pago.'
  }
];

export default function FAQSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ color: '#1A1A1A' }}>
            Preguntas Frecuentes
          </h2>
        </motion.div>

        {/* Accordion de preguntas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              >
                <AccordionItem 
                  value={`item-${index}`}
                  className="border-2 rounded-lg px-6 hover:border-green-500 transition-colors"
                  style={{ borderColor: '#E5E7EB' }}
                >
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <div className="flex items-start gap-3 pr-4">
                      <CheckCircle 
                        className="h-6 w-6 flex-shrink-0 mt-0.5" 
                        style={{ color: '#00A651' }} 
                      />
                      <span className="text-lg md:text-xl font-bold" style={{ color: '#1A1A1A' }}>
                        {faq.pregunta}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-base md:text-lg text-gray-600 pb-6 pl-9">
                    {faq.respuesta}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
