'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin, Clock } from 'lucide-react';

const quickLinks = [
  { name: 'Yeso', href: '#servicios' },
  { name: 'Pintura', href: '#servicios' },
  { name: 'Tablaroca', href: '#servicios' },
  { name: 'Plomería', href: '#servicios' },
  { name: 'Instalaciones Eléctricas', href: '#servicios' }
];

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Youtube, href: '#', label: 'YouTube' }
];

const contactDetails = [
  {
    icon: MapPin,
    text: 'Veracruz, Ver. México'
  },
  {
    icon: Phone,
    text: '+52 (229) 123-4567'
  },
  {
    icon: Mail,
    text: 'contacto@interioresgrevel.com'
  },
  {
    icon: Clock,
    text: 'Lun - Vie: 8:00 - 18:00 | Sáb: 9:00 - 14:00'
  }
];

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const scrollToServices = () => {
  const servicesSection = document.getElementById('servicios');
  if (servicesSection) {
    servicesSection.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#1A1A1A' }}>
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Column 1: Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6 cursor-pointer" onClick={scrollToTop}>
              <Image
                src="/images/brands/grevel.jpg"
                alt="Interiores Grevel"
                width={150}
                height={60}
                className="object-contain"
              />
            </div>
            <p className="text-gray-400 mb-6">
              Empresa líder en servicios de remodelación, mantenimiento, instalaciones y construcción con más de 10 años transformando espacios en Veracruz.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
                    style={{ backgroundColor: '#2D2D2D' }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#2D8CFF'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#2D2D2D'}
                    aria-label={social.label}
                  >
                    <IconComponent className="h-5 w-5 text-white" />
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h3 className="text-white text-lg font-bold mb-6">
              Servicios Principales
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={scrollToServices}
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-left"
                    style={{ 
                      transition: 'color 0.3s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#2D8CFF'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#9CA3AF'}
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h3 className="text-white text-lg font-bold mb-6">
              Contacto
            </h3>
            <ul className="space-y-4">
              {contactDetails.map((detail, index) => (
                <li key={index} className="flex items-start gap-3">
                  <detail.icon 
                    className="h-5 w-5 flex-shrink-0 mt-0.5" 
                    style={{ color: '#2D8CFF' }}
                  />
                  <span className="text-gray-400 text-sm">
                    {detail.text}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-12 pt-8"
          style={{ borderTop: '1px solid #2D2D2D' }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Interiores Grevel. Todos los derechos reservados.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-gray-500 hover:text-white text-sm transition-colors duration-300"
                onMouseEnter={(e) => e.currentTarget.style.color = '#2D8CFF'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#6B7280'}
              >
                Aviso de Privacidad
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-white text-sm transition-colors duration-300"
                onMouseEnter={(e) => e.currentTarget.style.color = '#2D8CFF'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#6B7280'}
              >
                Términos y Condiciones
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
