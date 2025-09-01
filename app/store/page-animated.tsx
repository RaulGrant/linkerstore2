'use client';

import { useState, useEffect, useMemo, useRef } from 'react';
import { Suspense } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useScroll, useInView } from 'framer-motion';
import { Store, TrendingUp, Star, Shield, Home, Info, ShoppingBag, Filter, Grid, List } from 'lucide-react';
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
