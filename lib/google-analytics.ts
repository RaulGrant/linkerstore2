// Google Analytics Utilities
// GA4 Measurement ID: G-405TQL3C9G

import { CookiesManager } from './cookies-manager';

declare global {
  interface Window {
    gtag: any;
    dataLayer: any;
  }
}

/**
 * Check if analytics cookies are allowed
 */
const canTrackAnalytics = (): boolean => {
  return CookiesManager.allowsAnalytics();
};

/**
 * Initialize Google Analytics
 */
export const initializeGA = () => {
  if (!canTrackAnalytics()) {
    console.log('🚫 Google Analytics blocked (cookies not accepted)');
    return;
  }

  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function() {
      window.dataLayer.push(arguments);
    };
    
    window.gtag('js', new Date());
    window.gtag('config', 'G-405TQL3C9G', {
      page_title: document.title,
      page_location: window.location.href
    });
    
    console.log('✅ Google Analytics initialized');
  }
};

/**
 * Track page view
 */
export const trackPageView = (pagePath: string, pageTitle?: string) => {
  if (!canTrackAnalytics()) {
    console.log(`🚫 GA PageView blocked: ${pagePath}`);
    return;
  }

  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'G-405TQL3C9G', {
      page_path: pagePath,
      page_title: pageTitle || document.title
    });
    console.log(`📊 GA PageView: ${pagePath}`);
  }
};

/**
 * Track custom event
 */
export const trackGAEvent = (
  eventName: string, 
  parameters?: {
    event_category?: string;
    event_label?: string;
    value?: number;
    [key: string]: any;
  }
) => {
  if (!canTrackAnalytics()) {
    console.log(`🚫 GA Event blocked: ${eventName}`);
    return;
  }

  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
    console.log(`📊 GA Event: ${eventName}`, parameters);
  }
};

/**
 * Track affiliate click for GA
 */
export const trackGAAffiliateClick = (
  platform: 'amazon' | 'mercadolibre',
  productId?: string,
  productName?: string
) => {
  trackGAEvent('affiliate_click', {
    event_category: 'affiliate',
    event_label: platform,
    custom_parameter_1: productId,
    custom_parameter_2: productName
  });
};

/**
 * Track blog article view
 */
export const trackGABlogView = (articleId: string, articleTitle: string) => {
  trackGAEvent('blog_view', {
    event_category: 'content',
    event_label: 'blog_article',
    custom_parameter_1: articleId,
    custom_parameter_2: articleTitle
  });
};

/**
 * Track guide view
 */
export const trackGAGuideView = (guideId: string, guideTitle: string) => {
  trackGAEvent('guide_view', {
    event_category: 'content',
    event_label: 'guide',
    custom_parameter_1: guideId,
    custom_parameter_2: guideTitle
  });
};

/**
 * Track search
 */
export const trackGASearch = (searchTerm: string, category?: string) => {
  trackGAEvent('search', {
    search_term: searchTerm,
    event_category: 'search',
    event_label: category || 'general'
  });
};

/**
 * Track scroll depth
 */
export const trackGAScrollDepth = (percentage: number) => {
  trackGAEvent('scroll', {
    event_category: 'engagement',
    event_label: `${percentage}%`,
    value: percentage
  });
};

/**
 * Track time on page
 */
export const trackGATimeOnPage = (seconds: number) => {
  trackGAEvent('time_on_page', {
    event_category: 'engagement',
    event_label: 'session_duration',
    value: seconds
  });
};

// Export default object
const GoogleAnalytics = {
  initializeGA,
  trackPageView,
  trackGAEvent,
  trackGAAffiliateClick,
  trackGABlogView,
  trackGAGuideView,
  trackGASearch,
  trackGAScrollDepth,
  trackGATimeOnPage
};

export default GoogleAnalytics;