import { NextRequest, NextResponse } from 'next/server';
import { mockAmazonProducts } from '@/lib/data/mock-data';
import { findSimilarProducts, registerProductClick } from '@/lib/store';

export async function GET(
  request: NextRequest,
  { params }: { params: { asin: string } }
) {
  try {
    const { asin } = params;
    
    // Simular delay de API
    await new Promise(resolve => setTimeout(resolve, 300));
    
    // Buscar producto por ASIN
    const product = mockAmazonProducts.find(p => p.asin === asin);
    
    if (!product) {
      return NextResponse.json(
        { error: 'Product not found' },
        { status: 404 }
      );
    }
    
    // Buscar productos similares
    const similarProducts = findSimilarProducts(product, mockAmazonProducts);
    
    return NextResponse.json({
      product,
      similarProducts,
    });
  } catch (error) {
    console.error('Error fetching product:', error);
    return NextResponse.json(
      { error: 'Error fetching product' },
      { status: 500 }
    );
  }
}

export async function POST(
  request: NextRequest,
  { params }: { params: { asin: string } }
) {
  try {
    const { asin } = params;
    const body = await request.json();
    const { action, userId } = body;
    
    if (action === 'click') {
      // Registrar clic
      await registerProductClick(asin, userId);
      
      return NextResponse.json({
        message: 'Click registered successfully',
      });
    }
    
    return NextResponse.json(
      { error: 'Invalid action' },
      { status: 400 }
    );
  } catch (error) {
    console.error('Error processing product action:', error);
    return NextResponse.json(
      { error: 'Error processing action' },
      { status: 500 }
    );
  }
}
