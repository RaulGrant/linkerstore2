'use client';

import { useState } from 'react';
import { Search, Filter, SlidersHorizontal, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Badge } from '@/components/ui/badge';
import { ProductFilters } from '@/lib/types/store';
import { categories } from '@/lib/data/mock-data';

interface SearchFiltersProps {
  filters: ProductFilters;
  onFiltersChange: (filters: ProductFilters) => void;
  onClearFilters: () => void;
  resultsCount?: number;
}

export default function SearchFilters({ 
  filters, 
  onFiltersChange, 
  onClearFilters,
  resultsCount = 0
}: SearchFiltersProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [priceRange, setPriceRange] = useState<[number, number]>([
    filters.priceRange?.min || 0,
    filters.priceRange?.max || 500
  ]);

  const handleSearchChange = (value: string) => {
    onFiltersChange({
      ...filters,
      search: value || undefined
    });
  };

  const handleCategoryChange = (category: string) => {
    onFiltersChange({
      ...filters,
      category: category === 'Todos' ? undefined : category
    });
  };

  const handlePriceRangeChange = (value: [number, number]) => {
    setPriceRange(value);
    onFiltersChange({
      ...filters,
      priceRange: { min: value[0], max: value[1] }
    });
  };

  const handleRatingChange = (rating: string) => {
    onFiltersChange({
      ...filters,
      rating: rating === 'all' ? undefined : parseFloat(rating)
    });
  };

  const handlePrimeChange = (isPrime: boolean) => {
    onFiltersChange({
      ...filters,
      isPrime: isPrime || undefined
    });
  };

  const handleBrandChange = (brand: string) => {
    onFiltersChange({
      ...filters,
      brand: brand || undefined
    });
  };

  const getActiveFiltersCount = () => {
    let count = 0;
    if (filters.category) count++;
    if (filters.priceRange) count++;
    if (filters.rating) count++;
    if (filters.isPrime) count++;
    if (filters.brand) count++;
    return count;
  };

  const FiltersContent = () => (
    <div className="space-y-6">
      {/* Categoría */}
      <div className="space-y-2">
        <Label className="text-sm font-medium">Categoría</Label>
        <Select value={filters.category || 'Todos'} onValueChange={handleCategoryChange}>
          <SelectTrigger>
            <SelectValue placeholder="Selecciona una categoría" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Rango de precios */}
      <div className="space-y-3">
        <Label className="text-sm font-medium">
          Precio: ${priceRange[0]} - ${priceRange[1]}
        </Label>
        <Slider
          value={priceRange}
          onValueChange={handlePriceRangeChange}
          max={500}
          min={0}
          step={10}
          className="w-full"
        />
        <div className="flex justify-between text-xs text-gray-500">
          <span>$0</span>
          <span>$500+</span>
        </div>
      </div>

      {/* Calificación */}
      <div className="space-y-2">
        <Label className="text-sm font-medium">Calificación mínima</Label>
        <Select value={filters.rating?.toString() || 'all'} onValueChange={handleRatingChange}>
          <SelectTrigger>
            <SelectValue placeholder="Cualquier calificación" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Cualquier calificación</SelectItem>
            <SelectItem value="4.5">4.5 estrellas o más</SelectItem>
            <SelectItem value="4">4 estrellas o más</SelectItem>
            <SelectItem value="3.5">3.5 estrellas o más</SelectItem>
            <SelectItem value="3">3 estrellas o más</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Prime */}
      <div className="flex items-center justify-between">
        <Label className="text-sm font-medium">Solo Prime</Label>
        <Switch
          checked={filters.isPrime || false}
          onCheckedChange={handlePrimeChange}
        />
      </div>

      {/* Marca */}
      <div className="space-y-2">
        <Label className="text-sm font-medium">Marca</Label>
        <Input
          placeholder="Buscar por marca..."
          value={filters.brand || ''}
          onChange={(e) => handleBrandChange(e.target.value)}
        />
      </div>

      {/* Limpiar filtros */}
      <Button
        variant="outline"
        onClick={onClearFilters}
        className="w-full"
        disabled={getActiveFiltersCount() === 0}
      >
        <X className="h-4 w-4 mr-2" />
        Limpiar filtros
      </Button>
    </div>
  );

  return (
    <div className="space-y-4">
      {/* Barra de búsqueda */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
        <Input
          placeholder="Buscar productos..."
          value={filters.search || ''}
          onChange={(e) => handleSearchChange(e.target.value)}
          className="pl-10 pr-4"
        />
      </div>

      {/* Filtros en desktop */}
      <div className="hidden lg:block">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="h-4 w-4" />
            <span className="text-sm font-medium">Filtros</span>
            {getActiveFiltersCount() > 0 && (
              <Badge variant="secondary" className="text-xs">
                {getActiveFiltersCount()}
              </Badge>
            )}
          </div>
          {resultsCount > 0 && (
            <span className="text-sm text-gray-500">
              {resultsCount} productos encontrados
            </span>
          )}
        </div>
        <FiltersContent />
      </div>

      {/* Filtros en mobile */}
      <div className="lg:hidden">
        <div className="flex items-center justify-between mb-4">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filtros
                {getActiveFiltersCount() > 0 && (
                  <Badge variant="secondary" className="ml-2 text-xs">
                    {getActiveFiltersCount()}
                  </Badge>
                )}
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-80">
              <SheetHeader>
                <SheetTitle>Filtros de búsqueda</SheetTitle>
              </SheetHeader>
              <div className="mt-6">
                <FiltersContent />
              </div>
            </SheetContent>
          </Sheet>
          
          {resultsCount > 0 && (
            <span className="text-sm text-gray-500">
              {resultsCount} productos
            </span>
          )}
        </div>
      </div>

      {/* Filtros activos */}
      {getActiveFiltersCount() > 0 && (
        <div className="flex flex-wrap gap-2">
          {filters.category && (
            <Badge variant="secondary" className="text-xs">
              {filters.category}
              <X 
                className="h-3 w-3 ml-1 cursor-pointer" 
                onClick={() => handleCategoryChange('Todos')}
              />
            </Badge>
          )}
          {filters.priceRange && (
            <Badge variant="secondary" className="text-xs">
              ${filters.priceRange.min} - ${filters.priceRange.max}
              <X 
                className="h-3 w-3 ml-1 cursor-pointer" 
                onClick={() => onFiltersChange({ ...filters, priceRange: undefined })}
              />
            </Badge>
          )}
          {filters.rating && (
            <Badge variant="secondary" className="text-xs">
              {filters.rating}+ estrellas
              <X 
                className="h-3 w-3 ml-1 cursor-pointer" 
                onClick={() => handleRatingChange('all')}
              />
            </Badge>
          )}
          {filters.isPrime && (
            <Badge variant="secondary" className="text-xs">
              Prime
              <X 
                className="h-3 w-3 ml-1 cursor-pointer" 
                onClick={() => handlePrimeChange(false)}
              />
            </Badge>
          )}
          {filters.brand && (
            <Badge variant="secondary" className="text-xs">
              {filters.brand}
              <X 
                className="h-3 w-3 ml-1 cursor-pointer" 
                onClick={() => handleBrandChange('')}
              />
            </Badge>
          )}
        </div>
      )}
    </div>
  );
}
