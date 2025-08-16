import { NextRequest, NextResponse } from 'next/server';
import { mockHotmartBanners } from '@/lib/data/mock-data';
import { getRandomBanners, getBannersByCategory, registerBannerClick } from '@/lib/banners';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    
    const category = searchParams.get('category');
    const location = searchParams.get('location');
    const count = parseInt(searchParams.get('count') || '3');
    
    // Simular delay de API
    await new Promise(resolve => setTimeout(resolve, 200));
    
    let banners = mockHotmartBanners;
    
    // Filtrar por categoría si se especifica
    if (category && category !== 'all') {
      banners = getBannersByCategory(banners, category);
    }
    
    // Obtener banners aleatorios
    const selectedBanners = getRandomBanners(banners, count);
    
    return NextResponse.json({
      banners: selectedBanners,
      total: banners.length,
      location,
      category,
    });
  } catch (error) {
    console.error('Error fetching banners:', error);
    return NextResponse.json(
      { error: 'Error fetching banners' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { action, bannerId, userId } = body;
    
    if (action === 'click') {
      // Registrar clic en banner
      await registerBannerClick(bannerId, userId);
      
      return NextResponse.json({
        message: 'Banner click registered successfully',
      });
    }
    
    return NextResponse.json(
      { error: 'Invalid action' },
      { status: 400 }
    );
  } catch (error) {
    console.error('Error processing banner action:', error);
    return NextResponse.json(
      { error: 'Error processing action' },
      { status: 500 }
    );
  }
}
