// Tipos para el modal de productos
export interface ProductReview {
  id: string;
  author: string;
  rating: number;
  date: string;
  title: string;
  content: string;
  verified: boolean;
  helpful_count: number;
}

export interface RatingDistribution {
  "5": number;
  "4": number;
  "3": number;
  "2": number;
  "1": number;
}

export interface SentimentAnalysis {
  positive_aspects: string[];
  negative_aspects: string[];
  overall_sentiment: string;
}

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
  reviews?: ProductReview[];
  rating_distribution?: RatingDistribution;
  features?: Record<string, string>;
  additional_info?: Record<string, string>;
  product_details?: Record<string, string>;
  sentiment_analysis?: SentimentAnalysis;
  pros?: string[];
  cons?: string[];
  use_guide?: string[];
  specifications?: Record<string, string>;
  created_at: string;
  updated_at: string;
}

// Alias para compatibilidad con el sistema existente
export type AmazonProduct = Product;
