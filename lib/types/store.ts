export interface AmazonProduct {
  id: string;
  asin: string;
  title: string;
  description: string;
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
  features?: Record<string, string>;
  additional_info?: Record<string, string>;
  product_details?: Record<string, string>;
  review_banners?: Array<string | Record<string, any>>;
  related_products?: string[];
  technical_analysis?: string;
  user_profiles?: string[] | Array<{profile: string; notes: string}>;
  usage_guide?: string | string[];
  is_bestseller?: boolean;
  rating_distribution?: Record<string, number>;
  sentiment_analysis?: Record<string, any>;
  pros?: string[];
  cons?: string[];
  use_guide?: string[];
  created_at: string;
  updated_at: string;
}

export interface ProductReview {
  id?: string;
  author: string;
  text?: string;
  rating?: number;
  date?: string;
  comment?: string;
  content?: string;
  verified?: boolean;
  title?: string;
  helpful_count?: number;
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
