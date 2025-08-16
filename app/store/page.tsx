'use client';

import { useState, useEffect, useMemo } from 'react';
import { Suspense } from 'react';
import { Store, TrendingUp, Star, Shield, Home } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import SearchFilters from '@/components/store/SearchFilters';
import ProductGrid from '@/components/store/ProductGrid';
import CartSimulator from '@/components/store/CartSimulator';
import { AmazonProduct, ProductFilters } from '@/lib/types/store';
import { mockAmazonProducts } from '@/lib/data/mock-data';

export default function StorePage() {
  const [products, setProducts] = useState<AmazonProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState<ProductFilters>({});
  const [selectedProduct, setSelectedProduct] = useState<AmazonProduct | null>(null);
  const router = useRouter();

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
      if (filters.category && product.category !== filters.category) {
        return false;
      }

      // Filtro por rango de precios
      if (filters.priceRange) {
        if (product.price < filters.priceRange.min || product.price > filters.priceRange.max) {
          return false;
        }
      }

      // Filtro por calificación
      if (filters.rating && (!product.rating || product.rating < filters.rating)) {
        return false;
      }

      // Filtro por Prime
      if (filters.isPrime && !product.is_prime) {
        return false;
      }

      // Filtro por marca
      if (filters.brand && (!product.brand || !product.brand.toLowerCase().includes(filters.brand.toLowerCase()))) {
        return false;
      }

      return true;
    });
  }, [products, filters]);

  const handleFiltersChange = (newFilters: ProductFilters) => {
    setFilters(newFilters);
  };

  const handleClearFilters = () => {
    setFilters({});
  };

  const handleViewDetails = (product: AmazonProduct) => {
    setSelectedProduct(product);
    // En el futuro, esto navegará a la página de detalles
    // router.push(`/store/${product.asin}`);
  };

  const handleLoadMore = () => {
    // Simular cargar más productos
    console.log('Cargar más productos...');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Back to Home Button */}
          <div className="mb-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => router.push("/")}
              className="text-muted-foreground hover:text-primary"
            >
              <Home className="h-4 w-4 mr-2" />
              Volver al inicio
            </Button>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Store className="h-8 w-8 text-blue-600" />
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  Tienda LinkerPro
                </h1>
                <p className="text-gray-600 mt-1">
                  Productos seleccionados con las mejores ofertas de Amazon
                </p>
              </div>
            </div>
            <CartSimulator />
          </div>
        </div>
      </div>

      {/* Características destacadas */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="p-6 text-center">
              <TrendingUp className="h-8 w-8 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Productos Seleccionados</h3>
              <p className="text-sm text-gray-600">
                Curados especialmente para freelancers y empresas
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Star className="h-8 w-8 text-yellow-500 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Mejor Calificación</h3>
              <p className="text-sm text-gray-600">
                Solo productos con excelentes reseñas
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Shield className="h-8 w-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Compra Segura</h3>
              <p className="text-sm text-gray-600">
                Redirigimos a Amazon para tu seguridad
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Contenido principal */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filtros */}
          <div className="lg:col-span-1">
            <div className="sticky top-4">
              <SearchFilters
                filters={filters}
                onFiltersChange={handleFiltersChange}
                onClearFilters={handleClearFilters}
                resultsCount={filteredProducts.length}
              />
            </div>
          </div>

          {/* Productos */}
          <div className="lg:col-span-3">
            <div className="mb-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">
                  {filteredProducts.length} productos encontrados
                </h2>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">
                    Actualizado hoy
                  </Badge>
                </div>
              </div>
            </div>

            <Suspense fallback={<div>Cargando productos...</div>}>
              <ProductGrid
                products={filteredProducts}
                loading={loading}
                onLoadMore={handleLoadMore}
                hasMore={false}
              />
            </Suspense>
          </div>
        </div>
      </div>

      {/* Footer de información */}
      <div className="bg-white border-t mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center space-y-2">
            <p className="text-sm text-gray-600">
              <strong>Nota:</strong> Al hacer clic en "Agregar al carrito" o "Ver en Amazon", 
              serás redirigido a Amazon para completar tu compra.
            </p>
            <p className="text-xs text-gray-500">
              LinkerPro puede recibir una comisión por compras realizadas a través de nuestros enlaces.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
