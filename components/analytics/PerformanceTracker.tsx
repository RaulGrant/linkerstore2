'use client';

import { useEffect, useRef } from 'react';
import { trackEvent } from '@/lib/analytics/ga4';
import { ANALYTICS_CONFIG } from '@/lib/analytics/config';

interface PerformanceTrackerProps {
  trackWebVitals?: boolean;
  trackResourceTiming?: boolean;
  trackNavigationTiming?: boolean;
}

export default function PerformanceTracker({
  trackWebVitals = true,
  trackResourceTiming = false,
  trackNavigationTiming = true,
}: PerformanceTrackerProps) {
  const isTracked = useRef(false);

  useEffect(() => {
    if (isTracked.current || typeof window === 'undefined') return;
    
    isTracked.current = true;

    // Track Web Vitals
    if (trackWebVitals) {
      trackWebVitalsMetrics();
    }

    // Track Navigation Timing
    if (trackNavigationTiming) {
      trackNavigationMetrics();
    }

    // Track Resource Timing
    if (trackResourceTiming) {
      trackResourceMetrics();
    }

    // Track Core Web Vitals using the web-vitals library pattern
    if ('PerformanceObserver' in window) {
      trackCoreWebVitals();
    }

  }, [trackWebVitals, trackResourceTiming, trackNavigationTiming]);

  const trackWebVitalsMetrics = () => {
    // First Contentful Paint (FCP)
    const fcpObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.name === 'first-contentful-paint') {
          trackEvent('web_vital', {
            category: ANALYTICS_CONFIG.CATEGORIES.PERFORMANCE,
            metric_name: 'FCP',
            metric_value: Math.round(entry.startTime),
            metric_delta: Math.round(entry.startTime),
          });
        }
      }
    });
    
    try {
      fcpObserver.observe({ entryTypes: ['paint'] });
    } catch (e) {
      // Browser doesn't support paint timing
    }

    // Largest Contentful Paint (LCP)
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      
      trackEvent('web_vital', {
        category: ANALYTICS_CONFIG.CATEGORIES.PERFORMANCE,
        metric_name: 'LCP',
        metric_value: Math.round(lastEntry.startTime),
        metric_delta: Math.round(lastEntry.startTime),
      });
    });

    try {
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
    } catch (e) {
      // Browser doesn't support LCP
    }

    // Cumulative Layout Shift (CLS)
    let clsValue = 0;
    const clsObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (!(entry as any).hadRecentInput) {
          clsValue += (entry as any).value;
        }
      }
    });

    try {
      clsObserver.observe({ entryTypes: ['layout-shift'] });
      
      // Send CLS value when the page is hidden
      const sendCLS = () => {
        trackEvent('web_vital', {
          category: ANALYTICS_CONFIG.CATEGORIES.PERFORMANCE,
          metric_name: 'CLS',
          metric_value: Math.round(clsValue * 1000), // Convert to integer
          metric_delta: Math.round(clsValue * 1000),
        });
      };

      window.addEventListener('visibilitychange', () => {
        if (document.hidden) sendCLS();
      });
      window.addEventListener('beforeunload', sendCLS);
    } catch (e) {
      // Browser doesn't support layout shift
    }
  };

  const trackNavigationMetrics = () => {
    window.addEventListener('load', () => {
      setTimeout(() => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        
        if (navigation) {
          // Page Load Time
          const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
          if (loadTime > 0) {
            trackEvent('page_load_time', {
              category: ANALYTICS_CONFIG.CATEGORIES.PERFORMANCE,
              value: Math.round(loadTime),
              page_path: window.location.pathname,
            });
          }

          // DOM Content Loaded Time
          const domTime = navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart;
          if (domTime > 0) {
            trackEvent('dom_content_loaded', {
              category: ANALYTICS_CONFIG.CATEGORIES.PERFORMANCE,
              value: Math.round(domTime),
              page_path: window.location.pathname,
            });
          }

          // Time to First Byte (TTFB)
          const ttfb = navigation.responseStart - navigation.requestStart;
          if (ttfb > 0) {
            trackEvent('ttfb', {
              category: ANALYTICS_CONFIG.CATEGORIES.PERFORMANCE,
              value: Math.round(ttfb),
              page_path: window.location.pathname,
            });
          }

          // DNS Lookup Time
          const dnsTime = navigation.domainLookupEnd - navigation.domainLookupStart;
          if (dnsTime > 0) {
            trackEvent('dns_lookup_time', {
              category: ANALYTICS_CONFIG.CATEGORIES.PERFORMANCE,
              value: Math.round(dnsTime),
              page_path: window.location.pathname,
            });
          }
        }
      }, 0);
    });
  };

  const trackResourceMetrics = () => {
    window.addEventListener('load', () => {
      setTimeout(() => {
        const resources = performance.getEntriesByType('resource') as PerformanceResourceTiming[];
        
        // Track slow resources (> 1 second)
        const slowResources = resources.filter(resource => resource.duration > 1000);
        
        if (slowResources.length > 0) {
          trackEvent('slow_resources', {
            category: ANALYTICS_CONFIG.CATEGORIES.PERFORMANCE,
            value: slowResources.length,
            slow_resource_count: slowResources.length,
            page_path: window.location.pathname,
          });
        }

        // Track total resources loaded
        trackEvent('resources_loaded', {
          category: ANALYTICS_CONFIG.CATEGORIES.PERFORMANCE,
          value: resources.length,
          total_resources: resources.length,
          page_path: window.location.pathname,
        });
      }, 1000);
    });
  };

  const trackCoreWebVitals = () => {
    // First Input Delay (FID)
    const fidObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        const fid = entry.processingStart - entry.startTime;
        trackEvent('web_vital', {
          category: ANALYTICS_CONFIG.CATEGORIES.PERFORMANCE,
          metric_name: 'FID',
          metric_value: Math.round(fid),
          metric_delta: Math.round(fid),
        });
      }
    });

    try {
      fidObserver.observe({ entryTypes: ['first-input'] });
    } catch (e) {
      // Browser doesn't support first-input timing
    }

    // Interaction to Next Paint (INP) - experimental
    if ('PerformanceEventTiming' in window) {
      let maxINP = 0;
      const inpObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const inp = entry.processingStart - entry.startTime;
          maxINP = Math.max(maxINP, inp);
        }
      });

      try {
        inpObserver.observe({ entryTypes: ['event'] });
        
        // Send INP when page becomes hidden
        const sendINP = () => {
          if (maxINP > 0) {
            trackEvent('web_vital', {
              category: ANALYTICS_CONFIG.CATEGORIES.PERFORMANCE,
              metric_name: 'INP',
              metric_value: Math.round(maxINP),
              metric_delta: Math.round(maxINP),
            });
          }
        };

        window.addEventListener('visibilitychange', () => {
          if (document.hidden) sendINP();
        });
        window.addEventListener('beforeunload', sendINP);
      } catch (e) {
        // Browser doesn't support event timing
      }
    }
  };

  // This component doesn't render anything
  return null;
}

// Hook for manual performance tracking
export const usePerformanceTracker = () => {
  const trackCustomMetric = (metricName: string, value: number, additionalData?: Record<string, any>) => {
    trackEvent('custom_performance_metric', {
      category: ANALYTICS_CONFIG.CATEGORIES.PERFORMANCE,
      metric_name: metricName,
      metric_value: Math.round(value),
      page_path: window.location.pathname,
      ...additionalData,
    });
  };

  const trackUserTiming = (name: string, startMark?: string, endMark?: string) => {
    if (!performance.mark || !performance.measure) return;

    try {
      if (startMark && endMark) {
        performance.measure(name, startMark, endMark);
      }

      const measures = performance.getEntriesByName(name, 'measure');
      if (measures.length > 0) {
        const measure = measures[measures.length - 1];
        trackCustomMetric(`user_timing_${name}`, measure.duration);
      }
    } catch (e) {
      console.warn('Failed to track user timing:', e);
    }
  };

  const markStart = (name: string) => {
    if (performance.mark) {
      performance.mark(`${name}_start`);
    }
  };

  const markEnd = (name: string) => {
    if (performance.mark) {
      performance.mark(`${name}_end`);
      trackUserTiming(name, `${name}_start`, `${name}_end`);
    }
  };

  return {
    trackCustomMetric,
    trackUserTiming,
    markStart,
    markEnd,
  };
};