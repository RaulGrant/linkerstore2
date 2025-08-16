'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { 
  Plus, 
  Edit, 
  Trash2, 
  Save, 
  X, 
  Search,
  Filter,
  Upload,
  Eye,
  ExternalLink
} from 'lucide-react';
import Link from 'next/link';
import { AmazonProduct } from '@/lib/types/store';
import { realAmazonProducts } from '@/lib/data/real-amazon-products';

interface ProductFormData {
  asin: string;
  title: string;
  description: string;
  price: number;
  brand: string;
  category: string;
  sub_category: string;
  image_url: string;
  amazon_url: string;
  rating: number;
  review_count: number;
  is_prime: boolean;
  is_active: boolean;
}

export default function ProductsAdminPage() {
  const [products, setProducts] = useState<AmazonProduct[]>(realAmazonProducts);
  const [filteredProducts, setFilteredProducts] = useState<AmazonProduct[]>(realAmazonProducts);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<AmazonProduct | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const [formData, setFormData] = useState<ProductFormData>({
    asin: '',
    title: '',
    description: '',
    price: 0,
    brand: '',
    category: 'EPP',
    sub_category: '',
    image_url: '',
    amazon_url: '',
    rating: 5,
    review_count: 0,
    is_prime: false,
    is_active: true
  });

  // Filtrar productos
  useEffect(() => {
    let filtered = products;

    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.asin.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (filterCategory !== 'all') {
      filtered = filtered.filter(product => product.category === filterCategory);
    }

    setFilteredProducts(filtered);
  }, [products, searchTerm, filterCategory]);

  const categories = Array.from(new Set(products.map(p => p.category)));

  const resetForm = () => {
    setFormData({
      asin: '',
      title: '',
      description: '',
      price: 0,
      brand: '',
      category: 'EPP',
      sub_category: '',
      image_url: '',
      amazon_url: '',
      rating: 5,
      review_count: 0,
      is_prime: false,
      is_active: true
    });
    setEditingProduct(null);
    setIsFormOpen(false);
  };

  const handleEdit = (product: AmazonProduct) => {
    setEditingProduct(product);
    setFormData({
      asin: product.asin,
      title: product.title,
      description: product.description,
      price: product.price || 0,
      brand: product.brand,
      category: product.category,
      sub_category: product.sub_category || '',
      image_url: product.image_url,
      amazon_url: product.amazon_url,
      rating: product.rating || 5,
      review_count: product.review_count || 0,
      is_prime: product.is_prime || false,
      is_active: product.is_active !== false
    });
    setIsFormOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const newProduct: AmazonProduct = {
        ...formData,
        specifications: {}
      };

      if (editingProduct) {
        // Actualizar producto existente
        const updatedProducts = products.map(p => 
          p.asin === editingProduct.asin ? newProduct : p
        );
        setProducts(updatedProducts);
        setMessage('Producto actualizado exitosamente');
      } else {
        // Agregar nuevo producto
        if (products.find(p => p.asin === formData.asin)) {
          setMessage('Ya existe un producto con ese ASIN');
          setLoading(false);
          return;
        }
        setProducts([...products, newProduct]);
        setMessage('Producto agregado exitosamente');
      }

      resetForm();
    } catch (error) {
      console.error('Error:', error);
      setMessage('Error al guardar el producto');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = (asin: string) => {
    if (confirm('¿Estás seguro de que quieres eliminar este producto?')) {
      const updatedProducts = products.filter(p => p.asin !== asin);
      setProducts(updatedProducts);
      setMessage('Producto eliminado exitosamente');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Link href="/admin" className="text-blue-600 hover:text-blue-800">
                ← Panel Admin
              </Link>
              <h1 className="text-xl font-semibold text-gray-900">
                Gestión de Productos
              </h1>
            </div>
            <Button 
              onClick={() => setIsFormOpen(true)}
              className="bg-gradient-to-r from-blue-600 to-indigo-600"
            >
              <Plus className="w-4 h-4 mr-2" />
              Nuevo Producto
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {message && (
          <Alert className="mb-6">
            <AlertDescription>{message}</AlertDescription>
          </Alert>
        )}

        {/* Filtros y búsqueda */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder="Buscar por título, marca o ASIN..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="w-full md:w-48">
                <Select value={filterCategory} onValueChange={setFilterCategory}>
                  <SelectTrigger>
                    <Filter className="w-4 h-4 mr-2" />
                    <SelectValue placeholder="Categoría" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todas las categorías</SelectItem>
                    {categories.map(category => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="mt-4 text-sm text-gray-600">
              Mostrando {filteredProducts.length} de {products.length} productos
            </div>
          </CardContent>
        </Card>

        {/* Lista de productos */}
        <div className="grid gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.asin}>
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Imagen del producto */}
                  <div className="w-full lg:w-32 h-32 flex-shrink-0">
                    <img
                      src={product.image_url}
                      alt={product.title}
                      className="w-full h-full object-cover rounded-lg border"
                    />
                  </div>

                  {/* Información del producto */}
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {product.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                          {product.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mb-3">
                          <Badge variant="secondary">{product.category}</Badge>
                          <Badge variant="outline">{product.brand}</Badge>
                          {product.is_prime && (
                            <Badge className="bg-orange-500">Prime</Badge>
                          )}
                          {!product.is_active && (
                            <Badge variant="destructive">Inactivo</Badge>
                          )}
                        </div>

                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <span>ASIN: {product.asin}</span>
                          <span>⭐ {product.rating} ({product.review_count} reseñas)</span>
                          <span className="font-semibold text-green-600">
                            ${(product.price || 0).toLocaleString('es-MX')} MXN
                          </span>
                        </div>
                      </div>

                      {/* Acciones */}
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => window.open(`/store/${product.asin}`, '_blank')}
                        >
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => window.open(product.amazon_url, '_blank')}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleEdit(product)}
                        >
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleDelete(product.asin)}
                          className="text-red-600 hover:text-red-700"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <Card>
            <CardContent className="p-8 text-center">
              <p className="text-gray-500">No se encontraron productos con los filtros aplicados.</p>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Modal de formulario */}
      {isFormOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>
                  {editingProduct ? 'Editar Producto' : 'Nuevo Producto'}
                </CardTitle>
                <Button variant="ghost" size="sm" onClick={resetForm}>
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="asin">ASIN *</Label>
                    <Input
                      id="asin"
                      value={formData.asin}
                      onChange={(e) => setFormData({...formData, asin: e.target.value})}
                      placeholder="B000BQ0WY2"
                      required
                      disabled={!!editingProduct}
                    />
                  </div>
                  <div>
                    <Label htmlFor="brand">Marca *</Label>
                    <Input
                      id="brand"
                      value={formData.brand}
                      onChange={(e) => setFormData({...formData, brand: e.target.value})}
                      placeholder="3M, Truper, etc."
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="title">Título *</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                    placeholder="Título del producto"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="description">Descripción *</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    placeholder="Descripción detallada del producto"
                    rows={3}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="category">Categoría *</Label>
                    <Select 
                      value={formData.category} 
                      onValueChange={(value) => setFormData({...formData, category: value})}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="EPP">EPP</SelectItem>
                        <SelectItem value="Herramientas">Herramientas</SelectItem>
                        <SelectItem value="Seguridad">Seguridad</SelectItem>
                        <SelectItem value="Instrumentos">Instrumentos</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="sub_category">Subcategoría</Label>
                    <Input
                      id="sub_category"
                      value={formData.sub_category}
                      onChange={(e) => setFormData({...formData, sub_category: e.target.value})}
                      placeholder="Subcategoría"
                    />
                  </div>
                  <div>
                    <Label htmlFor="price">Precio (MXN) *</Label>
                    <Input
                      id="price"
                      type="number"
                      value={formData.price}
                      onChange={(e) => setFormData({...formData, price: parseFloat(e.target.value)})}
                      placeholder="0.00"
                      step="0.01"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="image_url">URL de Imagen *</Label>
                  <Input
                    id="image_url"
                    value={formData.image_url}
                    onChange={(e) => setFormData({...formData, image_url: e.target.value})}
                    placeholder="https://..."
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="amazon_url">URL de Amazon *</Label>
                  <Input
                    id="amazon_url"
                    value={formData.amazon_url}
                    onChange={(e) => setFormData({...formData, amazon_url: e.target.value})}
                    placeholder="https://amazon.com.mx/..."
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="rating">Rating (1-5)</Label>
                    <Input
                      id="rating"
                      type="number"
                      min="1"
                      max="5"
                      step="0.1"
                      value={formData.rating}
                      onChange={(e) => setFormData({...formData, rating: parseFloat(e.target.value)})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="review_count">Número de Reseñas</Label>
                    <Input
                      id="review_count"
                      type="number"
                      value={formData.review_count}
                      onChange={(e) => setFormData({...formData, review_count: parseInt(e.target.value)})}
                    />
                  </div>
                </div>

                <div className="flex gap-4">
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={formData.is_prime}
                      onChange={(e) => setFormData({...formData, is_prime: e.target.checked})}
                      className="rounded"
                    />
                    <span>Amazon Prime</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={formData.is_active}
                      onChange={(e) => setFormData({...formData, is_active: e.target.checked})}
                      className="rounded"
                    />
                    <span>Producto Activo</span>
                  </label>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600"
                    disabled={loading}
                  >
                    <Save className="w-4 h-4 mr-2" />
                    {loading ? 'Guardando...' : 'Guardar Producto'}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={resetForm}
                    disabled={loading}
                  >
                    Cancelar
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
