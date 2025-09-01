'use client';

import { useState, useEffect, useMemo, useRef } from 'react';
import { Suspense } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useScroll, useInView } from 'framer-motion';
import { Store, TrendingUp, Star, Shield, Home, Info, ShoppingBag, Filter, Grid, List, X } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import SearchFilters from '@/components/store/SearchFilters';
import ProductGrid from '@/components/store/ProductGrid';
import CartSimulator from '@/components/store/CartSimulator';
import { AmazonProduct, ProductFilters } from '@/lib/types/store';
import { mockAmazonProducts } from '@/lib/data/mock-data';
import { getFichaByAsin } from '@/lib/data/product-fichas';

// Datos fijos para las animaciones de partículas
const STORE_PARTICLES = [
  { left: 15.2, top: 25.8, delay: 0.5, duration: 6.2 },
  { left: 85.4, top: 70.3, delay: 1.2, duration: 5.8 },
  { left: 45.7, top: 15.6, delay: 0.8, duration: 7.1 },
  { left: 70.1, top: 85.9, delay: 1.5, duration: 4.9 },
  { left: 25.3, top: 50.4, delay: 0.3, duration: 6.7 },
  { left: 90.8, top: 35.2, delay: 1.8, duration: 5.4 },
  { left: 35.6, top: 75.7, delay: 0.9, duration: 6.3 },
  { left: 60.2, top: 20.1, delay: 1.1, duration: 5.6 },
  { left: 10.5, top: 60.8, delay: 0.6, duration: 6.9 },
  { left: 80.3, top: 45.5, delay: 1.4, duration: 5.2 },
];

export default function StorePage() {
  const [products, setProducts] = useState<AmazonProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState<ProductFilters>({});
  const [selectedProduct, setSelectedProduct] = useState<AmazonProduct | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);
  const router = useRouter();

  // Mouse tracking for spectacular effects
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { damping: 25, stiffness: 150 });
  const springY = useSpring(mouseY, { damping: 25, stiffness: 150 });
  
  // Scroll and view animations
  const { scrollY } = useScroll();
  const headerRef = useRef<HTMLDivElement>(null);
  const filtersRef = useRef<HTMLDivElement>(null);
  const productsRef = useRef<HTMLDivElement>(null);
  
  const headerInView = useInView(headerRef, { once: true });
  const filtersInView = useInView(filtersRef, { once: true });
  const productsInView = useInView(productsRef, { once: true });

  // Mouse movement handler
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Simular carga de productos
  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      // Simular delay de API
      await new Promise(resolve => setTimeout(resolve, 1000));
      setProducts(mockAmazonProducts);
      setLoading(false);
    };

    loadProducts();
  }, []);

  // Filtrar productos
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      // Filtro por búsqueda
      if (filters.search) {
        const searchLower = filters.search.toLowerCase();
        const matchesSearch = 
          product.title.toLowerCase().includes(searchLower) ||
          product.description.toLowerCase().includes(searchLower) ||
          product.brand?.toLowerCase().includes(searchLower) ||
          product.category.toLowerCase().includes(searchLower) ||
          product.tags.some(tag => tag.toLowerCase().includes(searchLower));
        
        if (!matchesSearch) return false;
      }

      // Filtro por categoría
      if (filters.category && filters.category !== 'all') {
        if (product.category !== filters.category) return false;
      }

      // Filtro por marca
      if (filters.brand && filters.brand !== 'all') {
        if (product.brand !== filters.brand) return false;
      }

      // Filtro por rating
      if (filters.minRating) {
        if ((product.rating || 0) < filters.minRating) return false;
      }

      // Filtro por precio
      if (filters.priceRange) {
        const [min, max] = filters.priceRange;
        if (product.price < min || product.price > max) return false;
      }

      // Filtro por disponibilidad
      if (filters.inStock && product.availability !== 'In Stock') {
        return false;
      }

      // Filtro por Prime
      if (filters.primeOnly && !product.is_prime) {
        return false;
      }

      return true;
    });
  }, [products, filters]);

  // Obtener estadísticas
  const stats = {
    total: products.length,
    filtered: filteredProducts.length,
    categories: [...new Set(products.map(p => p.category))].length,
    brands: [...new Set(products.map(p => p.brand).filter(Boolean))].length,
    avgRating: products.reduce((acc, p) => acc + (p.rating || 0), 0) / products.length
  };

  return (
    <motion.div 
      className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden"
    >
      {/* Partículas flotantes de fondo */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {STORE_PARTICLES.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
            }}
            animate={{
              x: [0, 60, 0],
              y: [0, -60, 0],
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.6, 0.2],
              rotate: [0, 360, 0]
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
              type: "tween"
            }}
          />
        ))}
      </div>

      {/* Efectos de ondas en el fondo */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {STORE_PARTICLES.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
            }}
            animate={{
              y: [-30, 30, -30],
              x: [-15, 15, -15],
              rotate: [0, 360],
              scale: [0.6, 1.4, 0.6],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
              type: "tween"
            }}
          >
            <motion.div
              className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 opacity-20"
              whileHover={{ scale: 2, opacity: 0.6 }}
            />
          </motion.div>
        ))}
      </div>

      <div className="flex min-h-screen relative z-10">
        {/* Sidebar de filtros lateral izquierdo */}
        <motion.div 
          ref={filtersRef}
          className={`fixed lg:relative inset-y-0 left-0 z-30 w-80 bg-white/90 backdrop-blur-md shadow-xl border-r border-white/50 transform transition-transform duration-300 ${
            showFilters ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
          }`}
          initial={{ x: -320, opacity: 0 }}
          animate={{ 
            x: filtersInView ? 0 : -320, 
            opacity: filtersInView ? 1 : 0 
          }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        >
          <div className="p-6 h-full overflow-y-auto">
            {/* Header de filtros */}
            <motion.div 
              className="flex items-center justify-between mb-6"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className="flex items-center gap-3">
                <motion.div
                  className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Filter className="h-5 w-5 text-white" />
                </motion.div>
                <h2 className="text-xl font-bold bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent">
                  Filtros
                </h2>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden"
                onClick={() => setShowFilters(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </motion.div>

            {/* Componente de filtros */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <SearchFilters
                filters={filters}
                onFiltersChange={setFilters}
                products={products}
                className="space-y-6"
              />
            </motion.div>

            {/* Estadísticas animadas */}
            <motion.div 
              className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-200"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="font-semibold text-gray-800 mb-3">Estadísticas</h3>
              <div className="space-y-2 text-sm">
                <motion.div 
                  className="flex justify-between"
                  whileHover={{ x: 5 }}
                >
                  <span>Productos encontrados:</span>
                  <span className="font-medium text-blue-600">{stats.filtered}</span>
                </motion.div>
                <motion.div 
                  className="flex justify-between"
                  whileHover={{ x: 5 }}
                >
                  <span>Total disponible:</span>
                  <span className="font-medium text-purple-600">{stats.total}</span>
                </motion.div>
                <motion.div 
                  className="flex justify-between"
                  whileHover={{ x: 5 }}
                >
                  <span>Categorías:</span>
                  <span className="font-medium text-indigo-600">{stats.categories}</span>
                </motion.div>
                <motion.div 
                  className="flex justify-between"
                  whileHover={{ x: 5 }}
                >
                  <span>Rating promedio:</span>
                  <span className="font-medium text-yellow-600">{stats.avgRating.toFixed(1)} ⭐</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Contenido principal */}
        <div className="flex-1 lg:ml-0">
          {/* Header Section con animaciones espectaculares */}
          <motion.div 
            ref={headerRef}
            className="container mx-auto px-4 py-8"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: headerInView ? 1 : 0, y: headerInView ? 0 : -50 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6"
              layout
            >
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: headerInView ? 0 : -100, opacity: headerInView ? 1 : 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <motion.div 
                  className="flex items-center gap-3 mb-4"
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg"
                    animate={{
                      rotate: [0, 5, -5, 0],
                      boxShadow: [
                        '0 10px 30px rgba(59, 130, 246, 0.3)',
                        '0 20px 40px rgba(147, 51, 234, 0.4)',
                        '0 10px 30px rgba(59, 130, 246, 0.3)'
                      ]
                    }}
                    transition={{ duration: 4, repeat: Infinity, type: "tween" }}
                  >
                    <Store className="w-8 h-8 text-white" />
                  </motion.div>
                  <div>
                    <motion.h1 
                      className="text-4xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
                      animate={{
                        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                      }}
                      transition={{ duration: 5, repeat: Infinity, type: "tween" }}
                    >
                      LinkerStore
                    </motion.h1>
                    <motion.p 
                      className="text-gray-600 text-lg"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      Equipos industriales premium
                    </motion.p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Botón para mostrar filtros en móvil */}
              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  className="lg:hidden"
                  onClick={() => setShowFilters(true)}
                >
                  <Filter className="w-4 h-4 mr-2" />
                  Mostrar Filtros
                </Button>

                {/* Stats animadas */}
                <motion.div 
                  className="flex flex-wrap gap-4"
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: headerInView ? 0 : 100, opacity: headerInView ? 1 : 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  {[
                    { label: 'Productos', value: stats.total, icon: ShoppingBag, color: 'from-blue-500 to-cyan-500' },
                    { label: 'Categorías', value: stats.categories, icon: Grid, color: 'from-purple-500 to-pink-500' },
                    { label: 'Marcas', value: stats.brands, icon: Shield, color: 'from-green-500 to-emerald-500' },
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-white/30 shadow-lg"
                      initial={{ scale: 0, rotate: -10 }}
                      animate={{ 
                        scale: headerInView ? 1 : 0, 
                        rotate: headerInView ? 0 : -10 
                      }}
                      transition={{ 
                        delay: 0.6 + index * 0.1, 
                        type: "spring", 
                        bounce: 0.5 
                      }}
                      whileHover={{ 
                        scale: 1.05, 
                        y: -5,
                        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)'
                      }}
                    >
                      <motion.div
                        className={`p-2 rounded-lg bg-gradient-to-r ${stat.color} mb-2`}
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 5 + index, repeat: Infinity, type: "tween" }}
                      >
                        <stat.icon className="w-5 h-5 text-white" />
                      </motion.div>
                      <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Products Section con animaciones espectaculares */}
          <motion.div 
            ref={productsRef}
            className="container mx-auto px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: productsInView ? 1 : 0 }}
            transition={{ duration: 1 }}
          >
            {/* View Mode Toggle con animaciones */}
            <motion.div 
              className="flex justify-between items-center mb-6"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: productsInView ? 0 : 30, opacity: productsInView ? 1 : 0 }}
              transition={{ delay: 0.2 }}
            >
              <motion.h3 
                className="text-2xl font-bold text-gray-900"
                whileHover={{ scale: 1.05 }}
              >
                {loading ? 'Cargando productos...' : `${filteredProducts.length} Productos Encontrados`}
              </motion.h3>
              
              <motion.div 
                className="flex items-center gap-2"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: productsInView ? 0 : 50, opacity: productsInView ? 1 : 0 }}
                transition={{ delay: 0.4 }}
              >
                <motion.div
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setViewMode('grid')}
                    className="relative overflow-hidden"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500"
                      initial={{ x: '-100%' }}
                      animate={{ x: viewMode === 'grid' ? '0%' : '-100%' }}
                      transition={{ duration: 0.3 }}
                    />
                    <Grid className="w-4 h-4 relative z-10" />
                  </Button>
                </motion.div>
                <motion.div
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setViewMode('list')}
                    className="relative overflow-hidden"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500"
                      initial={{ x: '-100%' }}
                      animate={{ x: viewMode === 'list' ? '0%' : '-100%' }}
                      transition={{ duration: 0.3 }}
                    />
                    <List className="w-4 h-4 relative z-10" />
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Product Grid/List con animaciones */}
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: productsInView ? 1 : 0, scale: productsInView ? 1 : 0.9 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <ProductGrid 
                products={filteredProducts}
                loading={loading}
                onProductSelect={setSelectedProduct}
                viewMode={viewMode}
              />
            </motion.div>
          </motion.div>

          {/* Cart Simulator con animaciones */}
          <motion.div
            className="fixed bottom-4 right-4 z-40"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              type: "spring", 
              bounce: 0.6, 
              delay: 1,
              duration: 0.8 
            }}
            whileHover={{ 
              scale: 1.1,
              transition: { type: "spring", bounce: 0.4 }
            }}
          >
            <CartSimulator selectedProduct={selectedProduct} />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
