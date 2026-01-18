'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Facebook, Instagram, Linkedin, Youtube, Phone, Mail, MapPin } from 'lucide-react';

const footerLinks = {
  services: [
    { name: 'Supervisión Industrial', href: '#' },
    { name: 'Pailería', href: '#' },
    { name: 'Instalaciones Eléctricas', href: '#' },
    { name: 'Tubería', href: '#' },
    { name: 'Obras Civiles', href: '#' }
  ],
  legal: [
    { name: 'Aviso de Privacidad', href: '#' },
    { name: 'Términos y Condiciones', href: '#' }
  ]
};

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Youtube, href: '#', label: 'YouTube' }
];

const contactDetails = [
  {
    icon: MapPin,
    text: 'Av. Industrial #123, Col. Industrial, Veracruz, Ver. C.P. 91697'
  },
  {
    icon: Phone,
    text: '+52 (229) 123-4567'
  },
  {
    icon: Mail,
    text: 'contacto@ajrhindustrial.com'
  },
  {
    icon: null,
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
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Column 1: Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6">
              <Image
                src="/images/brands/ajrh.jpg"
                alt="AJRH Industrial"
                width={150}
                height={60}
                className="object-contain cursor-pointer"
                onClick={scrollToTop}
              />
            </div>
            <p className="text-gray-400 mb-6">
              Empresa líder en servicios industriales especializados con más de 10 años de experiencia. Comprometidos con la seguridad, calidad y cumplimiento normativo.
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
                    className="w-10 h-10 bg-gray-800 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors duration-300"
                    aria-label={social.label}
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Column 2: Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h3 className="text-white text-lg font-bold mb-6">
              Servicios Rápidos
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={scrollToServices}
                    className="hover:text-green-500 transition-colors duration-300 text-left"
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
                  {detail.icon && (
                    <detail.icon className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  )}
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
          className="border-t border-gray-800 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © {new Date().getFullYear()} AJRH Industrial. Todos los derechos reservados.
            </p>
            <div className="flex gap-6">
              {footerLinks.legal.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-500 hover:text-green-500 text-sm transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
