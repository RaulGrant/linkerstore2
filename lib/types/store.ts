export interface AmazonProduct {
  id: string;
  asin: string;
  title: string;
  description: string;
  price: number;
  currency: string;
  image_url: string;
  amazon_url: string;
  category: string;
  sub_category?: string;
  brand?: string;
  rating?: number;
  review_count?: number;
  is_prime?: boolean;
  is_active: boolean;
  tags: string[];
  reviews?: ProductReview[];
  specifications?: Record<string, string>;
  created_at: string;
  updated_at: string;
}

export interface ProductReview {
  author: string;
  text: string;
  rating?: number;
}

export interface CartItem {
  product: AmazonProduct;
  quantity: number;
}

export interface Cart {
  items: CartItem[];
  total: number;
  itemCount: number;
}

export interface ProductFilters {
  category?: string;
  priceRange?: {
    min: number;
    max: number;
  };
  rating?: number;
  brand?: string;
  isPrime?: boolean;
  search?: string;
}

export interface HotmartBanner {
  id: string;
  title: string;
  description: string;
  image_url: string;
  banner_url: string;
  cta_text: string;
  category: string;
  is_active: boolean;
  priority: number;
  created_at: string;
  updated_at: string;
}

export interface BannerMetrics {
  id: string;
  banner_id: string;
  user_id?: string;
  clicked_at: string;
  user_agent?: string;
  ip_address?: string;
}
