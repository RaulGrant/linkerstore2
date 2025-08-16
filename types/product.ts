// Tipos para el modal de productos
export interface Product {
  id: string;
  asin: string;
  title: string;
  description: string;
  price: number;
  currency: string;
  image_url: string;
  amazon_url: string;
  category: string;
  sub_category: string;
  brand: string;
  rating: number;
  review_count: number;
  is_prime: boolean;
  is_active: boolean;
  tags: string[];
  created_at: string;
  updated_at: string;
}

// Alias para compatibilidad con el sistema existente
export type AmazonProduct = Product;
