// Configuración centralizada de Google Analytics

export const ANALYTICS_CONFIG = {
  // Google Analytics 4 Configuration
  GA4_MEASUREMENT_ID: 'G-405TQL3C9G',
  
  // Meta Pixel Configuration  
  META_PIXEL_ID: '2002160850545438',
  
  // Tracking Settings
  ENABLE_DEBUG: process.env.NODE_ENV === 'development',
  
  // Custom Events Configuration
  EVENTS: {
    // Page Events
    PAGE_VIEW: 'page_view',
    SCROLL_DEPTH: 'scroll',
    TIME_ON_PAGE: 'page_engagement',
    
    // User Interaction Events
    CLICK: 'click',
    CTA_CLICK: 'cta_click',
    EXTERNAL_LINK: 'external_link_click',
    
    // Content Events
    ARTICLE_VIEW: 'article_view',
    ARTICLE_READ_START: 'article_read_start',
    ARTICLE_READ_COMPLETE: 'article_read_complete',
    ARTICLE_SHARE: 'article_share',
    
    // Navigation Events
    NAVIGATION_CLICK: 'navigation_click',
    SEARCH: 'search',
    
    // Form Events
    FORM_START: 'form_start',
    FORM_SUBMIT: 'form_submit',
    FORM_ABANDON: 'form_abandon',
    
    // E-commerce Events (para futuro uso)
    VIEW_ITEM: 'view_item',
    ADD_TO_CART: 'add_to_cart',
    PURCHASE: 'purchase',
    
    // Error Events
    EXCEPTION: 'exception',
    
    // Performance Events
    PAGE_LOAD_TIME: 'page_load_time',
    FIRST_CONTENTFUL_PAINT: 'first_contentful_paint',
  },
  
  // Event Categories
  CATEGORIES: {
    ENGAGEMENT: 'engagement',
    CONVERSION: 'conversion',
    CONTENT: 'content',
    NAVIGATION: 'navigation',
    PERFORMANCE: 'performance',
    ERRORS: 'errors',
    FORMS: 'forms',
  },
  
  // Scroll Depth Thresholds
  SCROLL_THRESHOLDS: [25, 50, 75, 100],
  
  // Time Tracking Configuration
  TIME_TRACKING: {
    HEARTBEAT_INTERVAL: 15, // seconds
    MIN_TIME_FOR_ENGAGEMENT: 5, // seconds
    READING_COMPLETION_THRESHOLD: 30, // seconds
  },
  
  // Custom Dimensions (si se configuran en GA4)
  CUSTOM_DIMENSIONS: {
    USER_TYPE: 'user_type',
    CONTENT_CATEGORY: 'content_category',
    PAGE_TYPE: 'page_type',
  },
  
  // Enhanced Measurement Settings
  ENHANCED_MEASUREMENT: {
    TRACK_SCROLLS: true,
    TRACK_OUTBOUND_CLICKS: true,
    TRACK_SITE_SEARCH: true,
    TRACK_VIDEO_ENGAGEMENT: false,
    TRACK_FILE_DOWNLOADS: true,
  },
} as const;

// Utility types for type safety
export type AnalyticsEvent = keyof typeof ANALYTICS_CONFIG.EVENTS;
export type AnalyticsCategory = keyof typeof ANALYTICS_CONFIG.CATEGORIES;

// Helper functions
export const getEventName = (event: AnalyticsEvent) => ANALYTICS_CONFIG.EVENTS[event];
export const getCategoryName = (category: AnalyticsCategory) => ANALYTICS_CONFIG.CATEGORIES[category];

// Debug logging function
export const debugLog = (message: string, data?: any) => {
  if (ANALYTICS_CONFIG.ENABLE_DEBUG) {
    console.log(`[Analytics Debug] ${message}`, data);
  }
};

// Validate tracking environment
export const isTrackingEnabled = () => {
  return typeof window !== 'undefined' && 
         (window.gtag || window.fbq) && 
         !navigator.doNotTrack;
};