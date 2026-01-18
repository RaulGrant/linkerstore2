'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    title: 'Teléfono',
    value: '+52 (229) 123-4567',
    description: 'Línea directa disponible'
  },
  {
    icon: Mail,
    title: 'Email',
    value: 'contacto@ajrhindustrial.com',
    description: 'Respuesta en 24 horas'
  },
  {
    icon: Clock,
    title: 'Horario',
    value: 'Lun - Vie: 8:00 - 18:00',
    description: 'Sábados: 9:00 - 14:00'
  }
];

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
      setIsSuccess(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contacto" className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #e5e7eb 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            ¿Listo para iniciar tu proyecto industrial?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Contáctanos hoy y recibe una cotización sin compromiso
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-white p-8 rounded-2xl shadow-2xl border-2 border-gray-200"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Solicitar Cotización
            </h3>

            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-gray-900 mb-2">
                  ¡Mensaje Enviado!
                </h4>
                <p className="text-gray-600">
                  Nos pondremos en contacto contigo pronto.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-gray-700 font-semibold">
                    Nombre Completo *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-2 border-2 border-gray-200 focus:border-green-600"
                    placeholder="Juan Pérez"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-gray-700 font-semibold">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-2 border-2 border-gray-200 focus:border-green-600"
                    placeholder="juan@empresa.com"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-gray-700 font-semibold">
                    Teléfono *
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-2 border-2 border-gray-200 focus:border-green-600"
                    placeholder="229-123-4567"
                  />
                </div>

                <div>
                  <Label htmlFor="service" className="text-gray-700 font-semibold">
                    Servicio de Interés *
                  </Label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange as any}
                    className="mt-2 w-full px-3 py-2 border-2 border-gray-200 rounded-md focus:border-green-600 focus:outline-none"
                  >
                    <option value="">Selecciona un servicio</option>
                    <option value="supervision">Supervisión Industrial</option>
                    <option value="paileria">Pailería y Estructura</option>
                    <option value="electrica">Instalaciones Eléctricas</option>
                    <option value="montajes">Montajes Industriales</option>
                    <option value="tuberia">Tubería y Fibra Óptica</option>
                    <option value="obras">Obras Civiles</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="message" className="text-gray-700 font-semibold">
                    Mensaje
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-2 border-2 border-gray-200 focus:border-green-600 min-h-[120px]"
                    placeholder="Cuéntanos sobre tu proyecto..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-bold text-lg py-6 shadow-lg shadow-green-200 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>Enviando...</>
                  ) : (
                    <>
                      Enviar Solicitud
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="space-y-6"
          >
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                    className="bg-white p-6 rounded-xl shadow-lg border-2 border-gray-200 hover:border-green-600 transition-colors duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <IconComponent className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-1">
                          {info.title}
                        </h4>
                        <p className="text-green-600 font-semibold mb-1">
                          {info.value}
                        </p>
                        <p className="text-sm text-gray-600">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Quick Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="space-y-4 pt-6"
            >
              <Button
                size="lg"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold transition-all duration-300 hover:scale-105"
                onClick={() => window.location.href = 'tel:+522291234567'}
              >
                <Phone className="mr-2 h-5 w-5" />
                Llamar Ahora
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full border-2 border-green-600 text-green-600 hover:bg-green-50 font-bold transition-all duration-300 hover:scale-105"
                onClick={() => window.location.href = 'mailto:contacto@ajrhindustrial.com'}
              >
                <Mail className="mr-2 h-5 w-5" />
                Enviar Email
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
