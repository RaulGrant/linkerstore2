'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { initGA4, trackPageView } from '@/lib/analytics/ga4';
import { usePageAnalytics } from '@/hooks/usePageAnalytics';
import PerformanceTracker from '@/components/analytics/PerformanceTracker';

interface AnalyticsProviderProps {
  children: React.ReactNode;
}

export default function AnalyticsProvider({ children }: AnalyticsProviderProps) {
  const pathname = usePathname();
  
  // Initialize page analytics tracking
  const { timeSpent, maxScrollDepth } = usePageAnalytics(pathname, {
    trackTimeOnPage: true,
    trackScrollDepth: true,
    scrollThresholds: [25, 50, 75, 100],
    heartbeatInterval: 15,
  });

  useEffect(() => {
    // Initialize Google Analytics
    initGA4();
  }, []);

  useEffect(() => {
    // Track page views on route changes
    if (pathname) {
      trackPageView(pathname, document.title);
    }
  }, [pathname]);

  // Global error boundary for analytics
  useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'exception', {
          description: event.error?.message || 'Unknown error',
          fatal: false,
          error_type: 'javascript_error',
          page_path: pathname,
        });
      }
    };

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'exception', {
          description: `Promise rejection: ${event.reason}`,
          fatal: false,
          error_type: 'promise_rejection',
          page_path: pathname,
        });
      }
    };

    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);

    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
  }, [pathname]);

  // Track performance metrics
  useEffect(() => {
    const trackPerformance = () => {
      if (typeof window !== 'undefined' && window.gtag && 'performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        
        if (navigation) {
          // Track page load time
          const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
          if (loadTime > 0) {
            window.gtag('event', 'page_load_time', {
              event_category: 'performance',
              value: Math.round(loadTime),
              custom_parameter_load_time: Math.round(loadTime),
            });
          }

          // Track DOM content loaded time
          const domTime = navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart;
          if (domTime > 0) {
            window.gtag('event', 'dom_content_loaded', {
              event_category: 'performance',
              value: Math.round(domTime),
            });
          }

          // Track first contentful paint
          const fcpEntries = performance.getEntriesByName('first-contentful-paint');
          if (fcpEntries.length > 0) {
            window.gtag('event', 'first_contentful_paint', {
              event_category: 'performance',
              value: Math.round(fcpEntries[0].startTime),
            });
          }
        }
      }
    };

    // Wait for page to fully load before tracking performance
    if (document.readyState === 'complete') {
      trackPerformance();
    } else {
      window.addEventListener('load', trackPerformance);
      return () => window.removeEventListener('load', trackPerformance);
    }
  }, []);

  return (
    <>
      <PerformanceTracker 
        trackWebVitals={true}
        trackNavigationTiming={true}
        trackResourceTiming={false}
      />
      {children}
    </>
  );
}