'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react';
import { useState } from 'react';

export default function CTASection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', course: '', message: '' });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const courses = [
    'Uso y Manejo de Extintores',
    'Trabajo en Alturas',
    'Primeros Auxilios',
    'Manejo de Sustancias Peligrosas',
    'Prevención de Incendios',
    'Espacios Confinados',
    'Otro',
  ];

  return (
    <section id="contacto" className="py-20 bg-gradient-to-br from-blue-900 via-slate-900 to-blue-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Badge className="bg-orange-500/20 text-orange-400 border border-orange-500/50 mb-4">
            ¡Inscríbete Hoy!
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Comienza Tu
            <span className="block bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Capacitación Ahora
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Completa el formulario y nos pondremos en contacto contigo en menos de 24 horas
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="bg-slate-800/50 backdrop-blur-lg border-2 border-slate-700 shadow-2xl">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <Label htmlFor="name" className="text-white mb-2 block">
                      Nombre Completo *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-orange-500 focus:ring-orange-500"
                      placeholder="Ej: Juan Pérez López"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <Label htmlFor="email" className="text-white mb-2 block">
                      Correo Electrónico *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-orange-500 focus:ring-orange-500"
                      placeholder="tu@email.com"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <Label htmlFor="phone" className="text-white mb-2 block">
                      Teléfono *
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-orange-500 focus:ring-orange-500"
                      placeholder="55 1234 5678"
                    />
                  </div>

                  {/* Course Selection */}
                  <div>
                    <Label htmlFor="course" className="text-white mb-2 block">
                      Curso de Interés *
                    </Label>
                    <select
                      id="course"
                      name="course"
                      required
                      value={formData.course}
                      onChange={handleChange as any}
                      className="w-full bg-slate-700/50 border border-slate-600 text-white rounded-md px-3 py-2 focus:border-orange-500 focus:ring-orange-500 focus:outline-none"
                    >
                      <option value="">Selecciona un curso</option>
                      {courses.map((course) => (
                        <option key={course} value={course}>
                          {course}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <Label htmlFor="message" className="text-white mb-2 block">
                      Mensaje (Opcional)
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-orange-500 focus:ring-orange-500 resize-none"
                      placeholder="Cuéntanos sobre tus necesidades de capacitación..."
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting || isSubmitted}
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-6 text-lg shadow-lg shadow-orange-500/50 hover:shadow-orange-500/70 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        />
                        Enviando...
                      </>
                    ) : isSubmitted ? (
                      <>
                        <CheckCircle className="mr-2" />
                        ¡Enviado Exitosamente!
                      </>
                    ) : (
                      <>
                        Enviar Solicitud
                        <Send className="ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="space-y-4">
              <Card className="bg-slate-800/50 backdrop-blur-lg border-2 border-slate-700 hover:border-orange-500/50 transition-all duration-300 group">
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Teléfono</h4>
                    <p className="text-gray-400">+52 55 1234 5678</p>
                    <p className="text-gray-400">+52 55 8765 4321</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 backdrop-blur-lg border-2 border-slate-700 hover:border-orange-500/50 transition-all duration-300 group">
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Email</h4>
                    <p className="text-gray-400">contacto@cenacap.com.mx</p>
                    <p className="text-gray-400">capacitacion@cenacap.com.mx</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 backdrop-blur-lg border-2 border-slate-700 hover:border-orange-500/50 transition-all duration-300 group">
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MapPin className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Dirección</h4>
                    <p className="text-gray-400">
                      Av. Revolución 123,
                      <br />
                      Col. Centro, CDMX 06000
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Business Hours */}
            <Card className="bg-gradient-to-br from-orange-500 to-orange-600 border-0 shadow-2xl shadow-orange-500/50">
              <CardContent className="p-8">
                <h4 className="text-white font-bold text-2xl mb-4">
                  Horario de Atención
                </h4>
                <div className="space-y-2 text-white">
                  <div className="flex justify-between">
                    <span>Lunes - Viernes:</span>
                    <span className="font-semibold">8:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sábados:</span>
                    <span className="font-semibold">9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Domingos:</span>
                    <span className="font-semibold">Cerrado</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <div className="bg-slate-800/50 backdrop-blur-lg border-2 border-slate-700 rounded-2xl overflow-hidden h-64">
              <div className="w-full h-full bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-orange-400 mx-auto mb-3" />
                  <p className="text-gray-400">
                    Mapa de ubicación
                    <br />
                    <span className="text-sm">(Próximamente)</span>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
