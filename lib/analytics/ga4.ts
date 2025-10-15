// Google Analytics 4 utilities for tracking events and metrics

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export const GA4_ID = 'G-405TQL3C9G';

// Initialize Google Analytics
export const initGA4 = () => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA4_ID, {
      page_title: document.title,
      page_location: window.location.href,
    });
  }
};

// Track page views
export const trackPageView = (path: string, title?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA4_ID, {
      page_path: path,
      page_title: title || document.title,
      page_location: window.location.href,
    });
  }
};

// Track custom events
export const trackEvent = (eventName: string, parameters?: any) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      event_category: parameters?.category || 'engagement',
      event_label: parameters?.label,
      value: parameters?.value,
      ...parameters,
    });
  }
};

// Track clicks on elements
export const trackClick = (elementName: string, location: string, additionalData?: any) => {
  trackEvent('click', {
    category: 'user_interaction',
    label: elementName,
    location: location,
    click_text: elementName,
    ...additionalData,
  });
};

// Track time spent on page (call this when user leaves)
export const trackTimeOnPage = (timeInSeconds: number, pagePath: string) => {
  trackEvent('page_engagement', {
    category: 'engagement',
    engagement_time_msec: timeInSeconds * 1000,
    page_path: pagePath,
    value: Math.round(timeInSeconds),
  });
};

// Track scroll depth
export const trackScrollDepth = (depth: number, pagePath: string) => {
  trackEvent('scroll', {
    category: 'engagement',
    scroll_depth: depth,
    page_path: pagePath,
    value: depth,
  });
};

// Track file downloads
export const trackDownload = (fileName: string, fileType: string) => {
  trackEvent('file_download', {
    category: 'downloads',
    file_name: fileName,
    file_extension: fileType,
    link_text: fileName,
  });
};

// Track external link clicks
export const trackExternalLink = (url: string, linkText: string) => {
  trackEvent('click', {
    category: 'external_links',
    link_url: url,
    link_text: linkText,
    outbound: true,
  });
};

// Track search queries
export const trackSearch = (searchTerm: string, resultsCount?: number) => {
  trackEvent('search', {
    category: 'site_search',
    search_term: searchTerm,
    search_results: resultsCount,
  });
};

// Track blog article engagement
export const trackArticleEngagement = (
  action: 'start_reading' | 'finish_reading' | 'share',
  articleTitle: string,
  articleCategory: string,
  timeSpent?: number
) => {
  trackEvent('article_engagement', {
    category: 'content',
    action: action,
    article_title: articleTitle,
    article_category: articleCategory,
    engagement_time: timeSpent,
  });
};

// Track CTA button clicks
export const trackCTAClick = (ctaName: string, location: string, destination: string) => {
  trackEvent('cta_click', {
    category: 'conversion',
    cta_name: ctaName,
    cta_location: location,
    cta_destination: destination,
  });
};

// Track form interactions
export const trackFormInteraction = (
  action: 'start' | 'complete' | 'abandon',
  formName: string,
  fieldName?: string
) => {
  trackEvent('form_interaction', {
    category: 'forms',
    form_action: action,
    form_name: formName,
    field_name: fieldName,
  });
};

// Track user engagement sessions
export const trackSessionEngagement = (sessionData: {
  pagesViewed: number;
  timeSpent: number;
  bounced: boolean;
  convertedGoal?: string;
}) => {
  trackEvent('session_summary', {
    category: 'engagement',
    pages_viewed: sessionData.pagesViewed,
    session_duration: sessionData.timeSpent,
    bounced: sessionData.bounced,
    converted_goal: sessionData.convertedGoal,
  });
};

// Track product/guide interactions
export const trackGuideInteraction = (
  action: 'view' | 'download' | 'share' | 'favorite',
  guideName: string,
  guideCategory: string
) => {
  trackEvent('guide_interaction', {
    category: 'content',
    guide_action: action,
    guide_name: guideName,
    guide_category: guideCategory,
  });
};

// Track error events
export const trackError = (errorType: string, errorMessage: string, pagePath: string) => {
  trackEvent('exception', {
    category: 'errors',
    description: errorMessage,
    fatal: false,
    error_type: errorType,
    page_path: pagePath,
  });
};