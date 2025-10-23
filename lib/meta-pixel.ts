// Meta Pixel Tracking Utilities
// Pixel ID: 2002160850545438

import { CookiesManager } from './cookies-manager';

declare global {
  interface Window {
    fbq: any;
  }
}

/**
 * Check if marketing cookies are allowed
 */
const canTrack = (): boolean => {
  return CookiesManager.allowsMarketing();
};

/**
 * Track a standard Facebook event
 */
export const trackEvent = (eventName: string, parameters?: any) => {
  if (!canTrack()) {
    console.log(`🚫 Meta Pixel blocked (cookies not accepted): ${eventName}`);
    return;
  }
  
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, parameters);
    console.log(`🔵 Meta Pixel Event: ${eventName}`, parameters);
  }
};

/**
 * Track a custom Facebook event
 */
export const trackCustomEvent = (eventName: string, parameters?: any) => {
  if (!canTrack()) {
    console.log(`🚫 Meta Pixel Custom blocked (cookies not accepted): ${eventName}`);
    return;
  }
  
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('trackCustom', eventName, parameters);
    console.log(`🟣 Meta Pixel Custom Event: ${eventName}`, parameters);
  }
};

/**
 * Track affiliate link clicks (Amazon/Mercado Libre)
 * Generates Lead event for conversion tracking
 */
export const trackAffiliateClick = (
  platform: 'amazon' | 'mercadolibre', 
  productId?: string, 
  productName?: string,
  category?: string
) => {
  const eventData = {
    content_name: `${platform}_affiliate_click`,
    content_category: category || 'affiliate_link',
    content_ids: productId ? [productId] : undefined,
    value: platform === 'amazon' ? 1.0 : 0.8, // Amazon slightly higher value
    currency: 'USD',
    custom_parameter: {
      platform,
      product_name: productName,
      click_source: 'linker_store'
    }
  };

  trackEvent('Lead', eventData);
  
  // Also track custom event for detailed analytics
  trackCustomEvent('AffiliateClick', {
    platform,
    product_id: productId,
    product_name: productName,
    category
  });
};

/**
 * Track product view events
 * Used when users view product details
 */
export const trackProductView = (
  productId: string, 
  productName: string, 
  category?: string,
  price?: number
) => {
  const eventData = {
    content_type: 'product',
    content_ids: [productId],
    content_name: productName,
    content_category: category || 'product',
    value: price || 0,
    currency: 'USD'
  };

  trackEvent('ViewContent', eventData);
};

/**
 * Track blog article views
 * Used when users read blog content
 */
export const trackBlogView = (
  articleId: string, 
  articleTitle: string, 
  category: string = 'blog'
) => {
  const eventData = {
    content_type: 'article',
    content_ids: [articleId],
    content_name: articleTitle,
    content_category: category
  };

  trackEvent('ViewContent', eventData);
};

/**
 * Track guide/tutorial views
 * Used for educational content
 */
export const trackGuideView = (
  guideId: string, 
  guideTitle: string, 
  guideType: string = 'guide'
) => {
  const eventData = {
    content_type: 'guide',
    content_ids: [guideId],
    content_name: guideTitle,
    content_category: guideType
  };

  trackEvent('ViewContent', eventData);
};

/**
 * Track search events
 * When users search for products or content
 */
export const trackSearch = (searchTerm: string, category?: string) => {
  const eventData = {
    search_string: searchTerm,
    content_category: category || 'general'
  };

  trackEvent('Search', eventData);
};

/**
 * Track newsletter subscriptions and form completions
 */
export const trackLead = (leadType: string, value?: number) => {
  const eventData = {
    content_name: leadType,
    value: value || 1,
    currency: 'USD'
  };

  trackEvent('Lead', eventData);
};

/**
 * Track user registration/signup
 */
export const trackRegistration = (method: string = 'email') => {
  const eventData = {
    content_name: 'user_registration',
    method: method
  };

  trackEvent('CompleteRegistration', eventData);
};

/**
 * Track simulated "Add to Cart" for product interactions
 * Even though there's no real cart, this tracks intent
 */
export const trackAddToCart = (
  productId: string, 
  productName: string, 
  value?: number
) => {
  const eventData = {
    content_type: 'product',
    content_ids: [productId],
    content_name: productName,
    value: value || 1,
    currency: 'USD'
  };

  trackEvent('AddToCart', eventData);
};

/**
 * Track when users initiate checkout (redirect to affiliate)
 * This happens when clicking "Buy Now" type buttons
 */
export const trackInitiateCheckout = (
  platform: 'amazon' | 'mercadolibre',
  productId: string,
  productName: string,
  value?: number
) => {
  const eventData = {
    content_type: 'product',
    content_ids: [productId],
    content_name: productName,
    value: value || 1,
    currency: 'USD',
    custom_parameter: {
      platform,
      redirect_type: 'affiliate'
    }
  };

  trackEvent('InitiateCheckout', eventData);
};

/**
 * Track scroll depth for engagement metrics
 */
export const trackScrollDepth = (percentage: number, pageTitle?: string) => {
  trackCustomEvent('ScrollDepth', {
    percentage,
    page_title: pageTitle || document.title,
    timestamp: new Date().toISOString()
  });
};

/**
 * Track time spent on page
 */
export const trackTimeOnPage = (seconds: number, pageTitle?: string) => {
  trackCustomEvent('TimeOnPage', {
    seconds,
    page_title: pageTitle || document.title,
    timestamp: new Date().toISOString()
  });
};

/**
 * Track interactive element clicks (tabs, accordions, etc.)
 */
export const trackInteraction = (
  elementType: string, 
  elementId: string, 
  pageContext?: string
) => {
  trackCustomEvent('ElementInteraction', {
    element_type: elementType,
    element_id: elementId,
    page_context: pageContext || 'unknown',
    timestamp: new Date().toISOString()
  });
};

// Utility function to generate consistent IDs for tracking
export const generateTrackingId = (prefix: string, identifier: string): string => {
  return `${prefix}_${identifier.toLowerCase().replace(/[^a-z0-9]/g, '_')}`;
};

// Export default object with all functions
const MetaPixel = {
  trackEvent,
  trackCustomEvent,
  trackAffiliateClick,
  trackProductView,
  trackBlogView,
  trackGuideView,
  trackSearch,
  trackLead,
  trackRegistration,
  trackAddToCart,
  trackInitiateCheckout,
  trackScrollDepth,
  trackTimeOnPage,
  trackInteraction,
  generateTrackingId
};

export default MetaPixel;