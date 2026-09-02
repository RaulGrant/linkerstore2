'use client';

import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, Mail, Phone, Youtube } from 'lucide-react';
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
    { name: 'Seguridad eléctrica', href: '#cursos' }, { name: 'Equipos de elevación', href: '#cursos' }, { name: 'Espacios confinados', href: '#cursos' }, { name: 'Corte y Soldadura', href: '#cursos' }, { name: 'LOTO', href: '#cursos' },
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
              <img src="/images/brands/cenacap-logo.webp" alt="Logo CENACAP" className="h-14 w-14 object-contain" />
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
                <span>+52 241 195 4096</span>
              </div>
              <div className="flex items-center text-gray-400 text-sm">
                <Mail className="w-4 h-4 mr-2 text-orange-400" />
                <span>emmanuelramirezfernandez15@gmail.com</span>
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

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
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

        <div className="mb-6 flex flex-col items-center gap-2 text-sm text-gray-300 sm:flex-row sm:justify-center sm:gap-8">
            <span><Phone className="mr-2 inline h-4 w-4 text-orange-400" />+52 241 195 4096</span>
          <span><Mail className="mr-2 inline h-4 w-4 text-orange-400" />emmanuelramirezfernandez15@gmail.com</span>
        </div>

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
