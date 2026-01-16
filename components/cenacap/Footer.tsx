'use client';

import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Cursos', href: '#cursos' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Contacto', href: '#contacto' },
  ];

  const courses = [
    { name: 'Uso de Extintores', href: '#cursos' },
    { name: 'Trabajo en Alturas', href: '#cursos' },
    { name: 'Primeros Auxilios', href: '#cursos' },
    { name: 'Prevención de Incendios', href: '#cursos' },
    { name: 'Espacios Confinados', href: '#cursos' },
  ];

  const certifications = [
    'STPS',
    'CONOCER',
    'Cruz Roja Mexicana',
    'OSHA',
    'Bomberos CDMX',
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 border-t border-orange-500/20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative">
                <div className="absolute inset-0 bg-orange-500 blur-xl opacity-50"></div>
                <div className="relative w-12 h-12 bg-gradient-to-br from-blue-600 to-orange-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">C</span>
                </div>
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">CENACAP</h3>
                <p className="text-orange-400 text-xs">Centro de Capacitación</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Formamos profesionales en seguridad industrial con más de 15 años de experiencia y certificaciones oficiales.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-center text-gray-400 text-sm">
                <Phone className="w-4 h-4 mr-2 text-orange-400" />
                <span>+52 55 1234 5678</span>
              </div>
              <div className="flex items-center text-gray-400 text-sm">
                <Mail className="w-4 h-4 mr-2 text-orange-400" />
                <span>contacto@cenacap.com.mx</span>
              </div>
              <div className="flex items-start text-gray-400 text-sm">
                <MapPin className="w-4 h-4 mr-2 text-orange-400 mt-0.5" />
                <span>Av. Revolución 123, Centro, CDMX</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-white font-bold text-lg mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-orange-400 transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Courses */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-white font-bold text-lg mb-4">Cursos Populares</h4>
            <ul className="space-y-2">
              {courses.map((course) => (
                <li key={course.name}>
                  <button
                    onClick={() => scrollToSection(course.href)}
                    className="text-gray-400 hover:text-orange-400 transition-colors text-sm"
                  >
                    {course.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Certifications & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-white font-bold text-lg mb-4">Certificaciones</h4>
            <div className="flex flex-wrap gap-2 mb-6">
              {certifications.map((cert) => (
                <span
                  key={cert}
                  className="bg-slate-800/50 text-gray-300 px-3 py-1 rounded-full text-xs border border-slate-700"
                >
                  {cert}
                </span>
              ))}
            </div>

            <h4 className="text-white font-bold text-lg mb-4">Síguenos</h4>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-800/50 border border-slate-700 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-orange-500 hover:border-orange-500 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 mb-8"></div>

        {/* Bottom Footer */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-gray-500 text-sm text-center md:text-left">
            © {currentYear} CENACAP - Centro de Capacitación en Seguridad Industrial. Todos los derechos reservados.
          </p>

          <div className="flex space-x-6 text-sm">
            <button className="text-gray-500 hover:text-orange-400 transition-colors">
              Política de Privacidad
            </button>
            <button className="text-gray-500 hover:text-orange-400 transition-colors">
              Términos y Condiciones
            </button>
          </div>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500 rounded-full blur-3xl opacity-5"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-5"></div>
      </div>
    </footer>
  );
}
