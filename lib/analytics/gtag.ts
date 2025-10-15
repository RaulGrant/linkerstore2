// Google Analytics 4 event tracking
export const GA_TRACKING_ID = 'G-405TQL3C9G';

// Declare gtag function for TypeScript
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string | Date,
      config?: any
    ) => void;
    dataLayer: any[];
  }
}

// Initialize gtag if not available
const initGtag = () => {
  if (typeof window !== 'undefined' && !window.gtag) {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function() {
      window.dataLayer.push(arguments);
    };
  }
};

// Page view tracking
export const trackPageView = (url: string, title?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_location: url,
      page_title: title || document.title,
    });
  }
};

// Custom event tracking
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Blog-specific events
export const trackBlogEvents = {
  // Article engagement
  articleView: (articleTitle: string, category: string) => {
    trackEvent('view_article', 'Blog', `${category} - ${articleTitle}`);
  },
  
  articleComplete: (articleTitle: string, timeSpent: number) => {
    trackEvent('article_complete', 'Blog', articleTitle, timeSpent);
  },
  
  scrollDepth: (depth: number, articleTitle: string) => {
    trackEvent('scroll_depth', 'Blog', `${articleTitle} - ${depth}%`, depth);
  },
  
  // Content interactions
  tocClick: (section: string, articleTitle: string) => {
    trackEvent('toc_click', 'Navigation', `${articleTitle} - ${section}`);
  },
  
  relatedArticleClick: (targetArticle: string, sourceArticle: string) => {
    trackEvent('related_article_click', 'Blog', `From: ${sourceArticle} To: ${targetArticle}`);
  },
  
  // Search and filtering
  blogSearch: (searchTerm: string) => {
    trackEvent('search', 'Blog', searchTerm);
  },
  
  categoryFilter: (category: string) => {
    trackEvent('category_filter', 'Blog', category);
  },
};

// Navigation events
export const trackNavigationEvents = {
  menuClick: (menuItem: string) => {
    trackEvent('menu_click', 'Navigation', menuItem);
  },
  
  logoClick: () => {
    trackEvent('logo_click', 'Navigation', 'Header Logo');
  },
  
  footerLinkClick: (linkText: string) => {
    trackEvent('footer_link_click', 'Navigation', linkText);
  },
  
  breadcrumbClick: (breadcrumb: string, position: number) => {
    trackEvent('breadcrumb_click', 'Navigation', breadcrumb, position);
  },
};

// CTA and conversion events
export const trackConversionEvents = {
  ctaClick: (ctaText: string, location: string) => {
    trackEvent('cta_click', 'Conversion', `${location} - ${ctaText}`);
  },
  
  contactFormSubmit: (formType: string) => {
    trackEvent('form_submit', 'Conversion', formType);
  },
  
  newsletterSignup: (location: string) => {
    trackEvent('newsletter_signup', 'Conversion', location);
  },
  
  affiliateClick: (product: string, platform: 'Amazon' | 'MercadoLibre') => {
    trackEvent('affiliate_click', 'Monetization', `${platform} - ${product}`);
  },
};

// User engagement events
export const trackEngagementEvents = {
  timeOnPage: (seconds: number, pageType: string) => {
    trackEvent('time_on_page', 'Engagement', pageType, seconds);
  },
  
  bounce: (timeSpent: number) => {
    trackEvent('bounce', 'Engagement', 'Quick Exit', timeSpent);
  },
  
  modalOpen: (modalType: string) => {
    trackEvent('modal_open', 'Engagement', modalType);
  },
  
  modalClose: (modalType: string, timeOpen: number) => {
    trackEvent('modal_close', 'Engagement', modalType, timeOpen);
  },
  
  tabSwitch: (tabName: string, contentType: string) => {
    trackEvent('tab_switch', 'Engagement', `${contentType} - ${tabName}`);
  },
  
  imageView: (imageName: string, articleTitle: string) => {
    trackEvent('image_view', 'Content', `${articleTitle} - ${imageName}`);
  },
};

// Performance events
export const trackPerformanceEvents = {
  pageLoadTime: (loadTime: number, pageType: string) => {
    trackEvent('page_load_time', 'Performance', pageType, Math.round(loadTime));
  },
  
  errorOccurred: (errorType: string, errorMessage: string) => {
    trackEvent('error_occurred', 'Performance', `${errorType}: ${errorMessage}`);
  },
};

// Guide-specific events
export const trackGuideEvents = {
  guideView: (guideTitle: string, guideType: string) => {
    trackEvent('guide_view', 'Guides', `${guideType} - ${guideTitle}`);
  },
  
  stepComplete: (stepNumber: number, guideTitle: string) => {
    trackEvent('guide_step_complete', 'Guides', guideTitle, stepNumber);
  },
  
  guideComplete: (guideTitle: string, timeSpent: number) => {
    trackEvent('guide_complete', 'Guides', guideTitle, timeSpent);
  },
  
  checklistItemCheck: (itemText: string, guideTitle: string) => {
    trackEvent('checklist_item_check', 'Guides', `${guideTitle} - ${itemText}`);
  },
  
  downloadResource: (resourceName: string, guideTitle: string) => {
    trackEvent('download_resource', 'Guides', `${guideTitle} - ${resourceName}`);
  },
};

// Initialize gtag when this module is imported
if (typeof window !== 'undefined') {
  initGtag();
}

export default {
  trackPageView,
  trackEvent,
  trackBlogEvents,
  trackNavigationEvents,
  trackConversionEvents,
  trackEngagementEvents,
  trackPerformanceEvents,
  trackGuideEvents,
};