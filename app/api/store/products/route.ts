import { NextRequest, NextResponse } from 'next/server';
import { mockAmazonProducts } from '@/lib/data/mock-data';
import { filterProducts, sortProducts } from '@/lib/store';
import { ProductFilters } from '@/lib/types/store';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    
    // Extraer parámetros de filtros
    const filters: ProductFilters = {
      search: searchParams.get('search') || undefined,
      category: searchParams.get('category') || undefined,
      rating: searchParams.get('rating') ? parseFloat(searchParams.get('rating')!) : undefined,
      isPrime: searchParams.get('isPrime') === 'true' || undefined,
      brand: searchParams.get('brand') || undefined,
    };

    const sortParam = searchParams.get('sortBy');
    const sortBy: Parameters<typeof sortProducts>[1] =
      sortParam === 'rating' || sortParam === 'name' || sortParam === 'newest'
        ? sortParam
        : 'newest';
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '12');
    
    // Simular delay de API
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Filtrar productos
    let filteredProducts = filterProducts(mockAmazonProducts, filters);
    
    // Ordenar productos
    filteredProducts = sortProducts(filteredProducts, sortBy);
    
    // Paginación
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedProducts = filteredProducts.slice(startIndex, endIndex);
    
    return NextResponse.json({
      products: paginatedProducts,
      pagination: {
        page,
        limit,
        total: filteredProducts.length,
        totalPages: Math.ceil(filteredProducts.length / limit),
        hasMore: endIndex < filteredProducts.length,
      },
      filters: filters,
    });
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json(
      { error: 'Error fetching products' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Simular agregar producto (solo mock)
    console.log('Adding product:', body);
    
    return NextResponse.json({
      message: 'Product added successfully',
      product: {
        id: Date.now().toString(),
        ...body,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      }
    });
  } catch (error) {
    console.error('Error adding product:', error);
    return NextResponse.json(
      { error: 'Error adding product' },
      { status: 500 }
    );
  }
}
