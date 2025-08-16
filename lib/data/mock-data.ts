import { AmazonProduct, HotmartBanner } from '../types/store';
import { realAmazonProducts } from './real-amazon-products';

// Usar productos reales como productos mock para pruebas
export const mockAmazonProducts: AmazonProduct[] = realAmazonProducts;

export const mockHotmartBanners: HotmartBanner[] = [
  {
    id: '1',
    title: 'Curso Completo de Seguridad Industrial',
    description: 'Domina los fundamentos de la seguridad industrial, normativas OSHA y técnicas de prevención de accidentes laborales',
    image_url: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop',
    banner_url: 'https://go.hotmart.com/Y12345678',
    cta_text: 'Comenzar Curso',
    category: 'Seguridad Industrial',
    is_active: true,
    priority: 1,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z',
  },
  {
    id: '2',
    title: 'Especialización en Salud Ocupacional',
    description: 'Conviértete en experto en salud ocupacional y prevención de riesgos laborales con certificación internacional',
    image_url: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop',
    banner_url: 'https://go.hotmart.com/Y23456789',
    cta_text: 'Especialízate Ahora',
    category: 'Salud Ocupacional',
    is_active: true,
    priority: 2,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z',
  }
];

export const categories = [
  'Todos',
  'EPP',
  'Herramientas',
  'Seguridad'
];

export const bannerCategories = [
  'Seguridad Industrial',
  'Salud Ocupacional'
];
