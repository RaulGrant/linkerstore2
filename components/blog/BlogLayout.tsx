'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import BlogFooter from './BlogFooter';

interface BlogLayoutProps {
  children: ReactNode;
  className?: string;
}

export default function BlogLayout({ children, className = '' }: BlogLayoutProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative ${className}`}
    >
      {/* Patrón de fondo estático simple */}
      <div className="fixed inset-0 opacity-30 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(99, 102, 241, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 50% 10%, rgba(168, 85, 247, 0.05) 0%, transparent 40%),
            radial-gradient(circle at 10% 80%, rgba(34, 197, 94, 0.05) 0%, transparent 40%)
          `
        }} />
      </div>

      {/* Contenido principal */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Footer específico del blog */}
      <div className="relative z-20">
        <BlogFooter />
      </div>
    </motion.div>
  );
}
