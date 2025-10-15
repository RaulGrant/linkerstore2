'use client';

import { useEffect, useRef, useCallback } from 'react';
import { trackEngagementEvents, trackPerformanceEvents } from '../analytics/gtag';

interface UsePageTrackingProps {
  pageType: string;
  contentTitle?: string;
  trackScrollDepth?: boolean;
  trackTimeOnPage?: boolean;
}

export const usePageTracking = ({
  pageType,
  contentTitle,
  trackScrollDepth = true,
  trackTimeOnPage = true,
}: UsePageTrackingProps) => {
  const startTime = useRef<number>(Date.now());
  const lastScrollDepth = useRef<number>(0);
  const scrollDepthIntervals = useRef<Set<number>>(new Set());

  // Track time on page
  const trackTimeSpent = useCallback(() => {
    if (trackTimeOnPage) {
      const timeSpent = Math.round((Date.now() - startTime.current) / 1000);
      trackEngagementEvents.timeOnPage(timeSpent, pageType);
      
      // Track bounce if user leaves quickly (less than 30 seconds)
      if (timeSpent < 30) {
        trackEngagementEvents.bounce(timeSpent);
      }
    }
  }, [pageType, trackTimeOnPage]);

  // Track scroll depth
  const handleScroll = useCallback(() => {
    if (!trackScrollDepth) return;

    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    
    const scrollPercentage = Math.round(
      (scrollTop / (documentHeight - windowHeight)) * 100
    );

    // Track at 25%, 50%, 75%, and 100% intervals
    const intervals = [25, 50, 75, 90, 100];
    
    intervals.forEach(interval => {
      if (scrollPercentage >= interval && 
          !scrollDepthIntervals.current.has(interval) &&
          scrollPercentage > lastScrollDepth.current) {
        
        scrollDepthIntervals.current.add(interval);
        
        if (contentTitle) {
          // Import scroll tracking from blog events if available
          const { trackBlogEvents } = require('../analytics/gtag');
          trackBlogEvents.scrollDepth(interval, contentTitle);
        } else {
          trackEngagementEvents.timeOnPage(interval, `${pageType}_scroll_${interval}`);
        }
      }
    });

    lastScrollDepth.current = scrollPercentage;
  }, [trackScrollDepth, contentTitle, pageType]);

  // Track page load performance
  useEffect(() => {
    const measurePageLoad = () => {
      if ('performance' in window && 'getEntriesByType' in performance) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        
        if (navigation) {
          const loadTime = navigation.loadEventEnd - navigation.navigationStart;
          trackPerformanceEvents.pageLoadTime(loadTime, pageType);
        }
      }
    };

    // Wait for page to fully load
    if (document.readyState === 'complete') {
      measurePageLoad();
    } else {
      window.addEventListener('load', measurePageLoad);
      return () => window.removeEventListener('load', measurePageLoad);
    }
  }, [pageType]);

  // Add scroll listener
  useEffect(() => {
    if (trackScrollDepth) {
      const throttledScroll = throttle(handleScroll, 250);
      window.addEventListener('scroll', throttledScroll, { passive: true });
      
      return () => {
        window.removeEventListener('scroll', throttledScroll);
      };
    }
  }, [handleScroll, trackScrollDepth]);

  // Track time on page when component unmounts or page unloads
  useEffect(() => {
    const handleUnload = () => trackTimeSpent();
    
    // Track on page unload
    window.addEventListener('beforeunload', handleUnload);
    
    // Track on visibility change (tab switch, minimize)
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        trackTimeSpent();
      }
    };
    
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    return () => {
      window.removeEventListener('beforeunload', handleUnload);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      trackTimeSpent(); // Track when component unmounts
    };
  }, [trackTimeSpent]);

  return {
    trackTimeSpent,
    currentScrollDepth: lastScrollDepth.current,
  };
};

// Hook for tracking clicks on elements
export const useClickTracking = () => {
  const trackClick = useCallback((
    element: string, 
    category: string, 
    label?: string,
    customData?: Record<string, any>
  ) => {
    const { trackEvent } = require('../analytics/gtag');
    trackEvent(`${element}_click`, category, label);
    
    // Log additional data if needed for debugging
    if (process.env.NODE_ENV === 'development' && customData) {
      console.log('Analytics Click Tracked:', {
        element,
        category,
        label,
        customData
      });
    }
  }, []);

  return { trackClick };
};

// Hook for form tracking
export const useFormTracking = () => {
  const trackFormStart = useCallback((formName: string) => {
    const { trackEvent } = require('../analytics/gtag');
    trackEvent('form_start', 'Forms', formName);
  }, []);

  const trackFormSubmit = useCallback((formName: string, success: boolean = true) => {
    const { trackConversionEvents } = require('../analytics/gtag');
    if (success) {
      trackConversionEvents.contactFormSubmit(formName);
    } else {
      const { trackEvent } = require('../analytics/gtag');
      trackEvent('form_error', 'Forms', formName);
    }
  }, []);

  const trackFieldInteraction = useCallback((fieldName: string, formName: string) => {
    const { trackEvent } = require('../analytics/gtag');
    trackEvent('form_field_interaction', 'Forms', `${formName}_${fieldName}`);
  }, []);

  return {
    trackFormStart,
    trackFormSubmit,
    trackFieldInteraction,
  };
};

// Hook for content interaction tracking
export const useContentTracking = () => {
  const trackContentView = useCallback((contentType: string, contentTitle: string) => {
    const { trackEvent } = require('../analytics/gtag');
    trackEvent('content_view', 'Content', `${contentType}: ${contentTitle}`);
  }, []);

  const trackContentInteraction = useCallback((
    interactionType: 'like' | 'share' | 'comment' | 'bookmark' | 'copy',
    contentTitle: string,
    contentType: string = 'article'
  ) => {
    const { trackEvent } = require('../analytics/gtag');
    trackEvent(`content_${interactionType}`, 'Content', `${contentType}: ${contentTitle}`);
  }, []);

  const trackMediaInteraction = useCallback((
    mediaType: 'image' | 'video' | 'audio',
    mediaName: string,
    action: 'view' | 'click' | 'play' | 'pause' | 'complete'
  ) => {
    const { trackEvent } = require('../analytics/gtag');
    trackEvent(`media_${action}`, 'Media', `${mediaType}: ${mediaName}`);
  }, []);

  return {
    trackContentView,
    trackContentInteraction,
    trackMediaInteraction,
  };
};

// Utility function to throttle scroll events
function throttle<T extends (...args: any[]) => void>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: NodeJS.Timeout | null = null;
  let lastExecTime = 0;

  return (...args: Parameters<T>) => {
    const currentTime = Date.now();

    if (currentTime - lastExecTime > delay) {
      func(...args);
      lastExecTime = currentTime;
    } else {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func(...args);
        lastExecTime = Date.now();
      }, delay - (currentTime - lastExecTime));
    }
  };
}

export default {
  usePageTracking,
  useClickTracking,
  useFormTracking,
  useContentTracking,
};