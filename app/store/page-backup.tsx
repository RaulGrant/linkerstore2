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

      // Filtro por rango de precio
      if (filters.priceRange) {
        const price = product.price || 0;
        const [min, max] = filters.priceRange;
        if (price < min || price > max) return false;
      }

      // Filtro por rating
      if (filters.minRating) {
        const rating = product.rating || 0;
        if (rating < filters.minRating) return false;
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
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Partículas de fondo espectaculares */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => {
          const colors = [
            'from-blue-400 to-purple-400',
            'from-pink-400 to-rose-400', 
            'from-purple-400 to-indigo-400',
            'from-cyan-400 to-blue-400',
            'from-rose-400 to-pink-400',
            'from-indigo-400 to-purple-400',
            'from-emerald-400 to-cyan-400',
            'from-yellow-400 to-orange-400',
            'from-teal-400 to-cyan-400',
            'from-violet-400 to-purple-400'
          ];
          const colorClass = colors[i % colors.length];
          return (
            <motion.div
              key={i}
              className={`absolute w-4 h-4 bg-gradient-to-r ${colorClass} rounded-full opacity-30`}
              animate={{
                x: [0, 200, 0],
                y: [0, -200, 0],
                scale: [1, 2.5, 1],
                opacity: [0.1, 0.6, 0.1],
                rotate: 360
              }}
              transition={{
                duration: 2 + i * 0.1,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.05,
                type: "tween"
              }}
              style={{
                left: `${3 + i * 3.2}%`,
                top: `${3 + (i % 6) * 16}%`
              }}
            />
          );
        })}
      </div>

      {/* Cursor follower mágico */}
      <motion.div
        className="fixed w-10 h-10 pointer-events-none z-50 mix-blend-difference"
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%'
        }}
      >
        <motion.div
          className="w-full h-full rounded-full bg-gradient-to-r from-pink-500 to-purple-600"
          animate={{
            scale: [1, 1.5, 1],
            rotate: 360,
            opacity: [0.4, 0.8, 0.4]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            type: "tween"
          }}
        />
      </motion.div>

      <div className="flex min-h-screen relative z-10">
        {/* Sidebar de filtros */}
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

        {/* Overlay para móvil */}
        {showFilters && (
          <motion.div
            className="fixed inset-0 bg-black/50 z-20 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowFilters(false)}
          />
        )}

        {/* Contenido principal */}
        <div className="flex-1 lg:ml-0">
          {/* Header Section */}
          <motion.div 
            ref={headerRef}
            className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-16 px-6 overflow-hidden"
            initial={{ opacity: 0, y: -50 }}
            animate={{ 
              opacity: headerInView ? 1 : 0, 
              y: headerInView ? 0 : -50 
            }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Efectos de fondo */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(15)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-white/20 rounded-full"
                  animate={{
                    x: [0, 100, -100, 0],
                    y: [0, -100, 100, 0],
                    opacity: [0.2, 0.8, 0.2],
                    scale: [1, 2, 1]
                  }}
                  transition={{
                    duration: 4 + i * 0.2,
                    repeat: Infinity,
                    delay: i * 0.3,
                    type: "tween"
                  }}
                  style={{
                    left: `${i * 7}%`,
                    top: `${20 + (i % 3) * 30}%`
                  }}
                />
              ))}
            </div>

            <div className="container mx-auto text-center relative z-10">
              <motion.div
                initial={{ scale: 0, rotateY: 180 }}
                animate={{ scale: 1, rotateY: 0 }}
                transition={{ delay: 0.5, duration: 1, type: "spring" }}
                className="mb-6"
              >
                <motion.div
                  className="inline-block p-4 bg-white/20 backdrop-blur-sm rounded-2xl"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Store className="h-16 w-16 mx-auto" />
                </motion.div>
              </motion.div>

              <motion.h1 
                className="text-5xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                LinkerStore
              </motion.h1>

              <motion.p 
                className="text-xl opacity-90 mb-8 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                Descubre productos increíbles con la mejor tecnología de afiliados de Amazon
              </motion.p>

              {/* Botón de filtros móvil */}
              <motion.div
                className="lg:hidden"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
              >
                <Button
                  onClick={() => setShowFilters(true)}
                  className="bg-white/20 backdrop-blur-sm hover:bg-white/30 border border-white/30"
                  size="lg"
                >
                  <Filter className="h-5 w-5 mr-2" />
                  Mostrar Filtros
                </Button>
              </motion.div>

              {/* Estadísticas en header */}
              <motion.div 
                className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.8 }}
              >
                {[
                  { icon: ShoppingBag, label: 'Productos', value: stats.total, color: 'from-blue-400 to-blue-600' },
                  { icon: TrendingUp, label: 'Categorías', value: stats.categories, color: 'from-purple-400 to-purple-600' },
                  { icon: Star, label: 'Rating Promedio', value: stats.avgRating.toFixed(1), color: 'from-yellow-400 to-yellow-600' },
                  { icon: Shield, label: 'Marcas Verificadas', value: stats.brands, color: 'from-green-400 to-green-600' }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="text-center"
                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: 1.6 + index * 0.1, duration: 0.6 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <motion.div
                      className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${stat.color} shadow-lg mb-2`}
                      whileHover={{ rotate: 5 }}
                    >
                      <stat.icon className="h-6 w-6 text-white" />
                    </motion.div>
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="text-sm opacity-80">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Productos Section */}
          <motion.div 
            ref={productsRef}
            className="container mx-auto px-6 py-12"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: productsInView ? 1 : 0 
            }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Controles de vista */}
            <motion.div 
              className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div>
                <motion.h2 
                  className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent"
                  whileHover={{ scale: 1.05 }}
                >
                  Productos Destacados
                </motion.h2>
                <p className="text-gray-600 mt-1">
                  {stats.filtered} productos encontrados de {stats.total} disponibles
                </p>
              </div>

              <motion.div 
                className="flex items-center gap-3"
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                <motion.div 
                  className="flex bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.button
                    onClick={() => setViewMode('grid')}
                    className={`p-3 ${viewMode === 'grid' ? 'bg-blue-500 text-white' : 'text-gray-600 hover:bg-gray-50'}`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Grid className="h-4 w-4" />
                  </motion.button>
                  <motion.button
                    onClick={() => setViewMode('list')}
                    className={`p-3 ${viewMode === 'list' ? 'bg-blue-500 text-white' : 'text-gray-600 hover:bg-gray-50'}`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <List className="h-4 w-4" />
                  </motion.button>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Grid de productos */}
            <Suspense fallback={
              <motion.div 
                className="text-center py-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <motion.div
                  className="w-16 h-16 mx-auto mb-4 border-4 border-blue-500 border-t-transparent rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
                <p className="text-gray-600">Cargando productos...</p>
              </motion.div>
            }>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <ProductGrid 
                  products={filteredProducts}
                  loading={loading}
                  viewMode={viewMode}
                  onProductClick={setSelectedProduct}
                />
              </motion.div>
            </Suspense>
          </motion.div>
        </div>
      </div>

      {/* Modal de producto */}
      {selectedProduct && (
        <CartSimulator 
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </motion.div>
  );
}
      if (filters.brand && filters.brand !== 'all') {
        if (product.brand !== filters.brand) return false;
      }

      // Filtro por rango de precio
      if (filters.priceRange) {
        const price = product.price || 0;
        const [min, max] = filters.priceRange;
        if (price < min || price > max) return false;
      }

      // Filtro por rating
      if (filters.minRating) {
        const rating = product.rating || 0;
        if (rating < filters.minRating) return false;
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
      {/* Spectacular Cursor Follower */}
      <motion.div
        className="fixed w-8 h-8 pointer-events-none z-50 mix-blend-multiply"
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%'
        }}
      >
        <motion.div
          className="w-full h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-600"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
            opacity: [0.6, 0.8, 0.6]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>

      {/* Floating Particles Background */}
      <div className="absolute inset-0 overflow-hidden">
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
              ease: "easeInOut"
            }}
          >
            <motion.div
              className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 opacity-20"
              whileHover={{ scale: 2, opacity: 0.6 }}
            />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Header Section con animaciones espectaculares */}
        <motion.div 
          ref={headerRef}
          className="mb-8"
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
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <Store className="w-8 h-8 text-white" />
                </motion.div>
                <div>
                  <motion.h1 
                    className="text-4xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
                    animate={{
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                    }}
                    transition={{ duration: 5, repeat: Infinity }}
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
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: headerInView ? 1 : 0, rotate: headerInView ? 0 : -180 }}
                  transition={{ 
                    type: "spring", 
                    bounce: 0.6, 
                    delay: 0.6 + index * 0.1 
                  }}
                  whileHover={{ 
                    scale: 1.1, 
                    y: -5,
                    transition: { type: "spring", bounce: 0.4 }
                  }}
                >
                  <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                    <CardContent className="p-4 text-center">
                      <motion.div 
                        className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center mx-auto mb-2`}
                        animate={{
                          boxShadow: [
                            '0 5px 15px rgba(0,0,0,0.1)',
                            '0 10px 30px rgba(0,0,0,0.2)',
                            '0 5px 15px rgba(0,0,0,0.1)'
                          ]
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                      >
                        <stat.icon className="w-6 h-6 text-white" />
                      </motion.div>
                      <motion.div 
                        className="text-2xl font-bold text-gray-900"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                      >
                        {stat.value}
                      </motion.div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Filters Section con animaciones */}
        <motion.div 
          ref={filtersRef}
          className="mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: filtersInView ? 1 : 0, y: filtersInView ? 0 : 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            layout
            className="bg-white/70 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/20"
            whileHover={{
              boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15)',
              y: -2
            }}
            transition={{ type: "spring", bounce: 0.4 }}
          >
            <motion.div 
              className="flex items-center gap-3 mb-6"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: filtersInView ? 0 : -50, opacity: filtersInView ? 1 : 0 }}
              transition={{ delay: 0.4 }}
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Filter className="w-6 h-6 text-blue-600" />
              </motion.div>
              <h2 className="text-xl font-bold text-gray-900">Filtros de Búsqueda</h2>
              {filteredProducts.length !== products.length && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", bounce: 0.6 }}
                >
                  <Badge className="bg-blue-100 text-blue-800">
                    {filteredProducts.length} de {products.length} productos
                  </Badge>
                </motion.div>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: filtersInView ? 1 : 0 }}
              transition={{ delay: 0.6 }}
            >
              <SearchFilters 
                filters={filters} 
                onFiltersChange={setFilters}
                products={products}
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Products Section con animaciones espectaculares */}
        <motion.div 
          ref={productsRef}
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
    </motion.div>
  );
}
