import { useEffect, useRef, useState } from 'react';
import { trackTimeOnPage, trackScrollDepth } from '@/lib/analytics/ga4';

interface UsePageAnalyticsOptions {
  trackTimeOnPage?: boolean;
  trackScrollDepth?: boolean;
  scrollThresholds?: number[]; // Percentages: [25, 50, 75, 100]
  heartbeatInterval?: number; // Seconds between heartbeat events
}

export const usePageAnalytics = (
  pagePath: string,
  options: UsePageAnalyticsOptions = {}
) => {
  const {
    trackTimeOnPage: enableTimeTracking = true,
    trackScrollDepth: enableScrollTracking = true,
    scrollThresholds = [25, 50, 75, 100],
    heartbeatInterval = 15,
  } = options;

  const startTime = useRef<number>(Date.now());
  const isActive = useRef<boolean>(true);
  const lastHeartbeat = useRef<number>(Date.now());
  const scrollDepthReported = useRef<Set<number>>(new Set());
  const heartbeatInterval_ref = useRef<NodeJS.Timeout | null>(null);
  
  const [timeSpent, setTimeSpent] = useState(0);
  const [maxScrollDepth, setMaxScrollDepth] = useState(0);

  // Calculate time spent on page
  const calculateTimeSpent = () => {
    const now = Date.now();
    const totalTime = Math.floor((now - startTime.current) / 1000);
    setTimeSpent(totalTime);
    return totalTime;
  };

  // Handle scroll depth tracking
  const handleScroll = () => {
    if (!enableScrollTracking) return;

    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercentage = Math.round((scrollTop / documentHeight) * 100);
    
    if (scrollPercentage > maxScrollDepth) {
      setMaxScrollDepth(scrollPercentage);
    }

    // Track scroll milestones
    scrollThresholds.forEach(threshold => {
      if (scrollPercentage >= threshold && !scrollDepthReported.current.has(threshold)) {
        scrollDepthReported.current.add(threshold);
        trackScrollDepth(threshold, pagePath);
      }
    });
  };

  // Handle visibility changes (tab switching, etc.)
  const handleVisibilityChange = () => {
    if (document.hidden) {
      isActive.current = false;
      if (heartbeatInterval_ref.current) {
        clearInterval(heartbeatInterval_ref.current);
        heartbeatInterval_ref.current = null;
      }
    } else {
      isActive.current = true;
      lastHeartbeat.current = Date.now();
      startHeartbeat();
    }
  };

  // Heartbeat to track active time
  const startHeartbeat = () => {
    if (heartbeatInterval_ref.current) {
      clearInterval(heartbeatInterval_ref.current);
    }

    heartbeatInterval_ref.current = setInterval(() => {
      if (isActive.current) {
        const currentTime = calculateTimeSpent();
        // Send heartbeat every interval to track engagement
        if (enableTimeTracking && currentTime % heartbeatInterval === 0) {
          trackTimeOnPage(currentTime, pagePath);
        }
      }
    }, heartbeatInterval * 1000);
  };

  // Track page leave
  const handlePageLeave = () => {
    const finalTimeSpent = calculateTimeSpent();
    
    if (enableTimeTracking && finalTimeSpent > 5) { // Only track if spent more than 5 seconds
      trackTimeOnPage(finalTimeSpent, pagePath);
    }

    // Clean up
    if (heartbeatInterval_ref.current) {
      clearInterval(heartbeatInterval_ref.current);
    }
  };

  useEffect(() => {
    // Reset tracking state for new page
    startTime.current = Date.now();
    lastHeartbeat.current = Date.now();
    scrollDepthReported.current.clear();
    setTimeSpent(0);
    setMaxScrollDepth(0);
    isActive.current = true;

    // Set up event listeners
    if (enableScrollTracking) {
      window.addEventListener('scroll', handleScroll, { passive: true });
    }

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('beforeunload', handlePageLeave);
    window.addEventListener('unload', handlePageLeave);

    // Start heartbeat tracking
    if (enableTimeTracking) {
      startHeartbeat();
    }

    // Cleanup function
    return () => {
      handlePageLeave();
      
      if (enableScrollTracking) {
        window.removeEventListener('scroll', handleScroll);
      }
      
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('beforeunload', handlePageLeave);
      window.removeEventListener('unload', handlePageLeave);
      
      if (heartbeatInterval_ref.current) {
        clearInterval(heartbeatInterval_ref.current);
      }
    };
  }, [pagePath]); // Re-run when page path changes

  // Provide manual tracking functions
  const trackCurrentTime = () => {
    const currentTime = calculateTimeSpent();
    if (enableTimeTracking) {
      trackTimeOnPage(currentTime, pagePath);
    }
    return currentTime;
  };

  const forceScrollTracking = () => {
    if (enableScrollTracking) {
      handleScroll();
    }
  };

  return {
    timeSpent,
    maxScrollDepth,
    isActive: isActive.current,
    trackCurrentTime,
    forceScrollTracking,
  };
};

// Hook for tracking specific interactions on a page
export const useInteractionTracking = () => {
  const trackInteraction = (
    interactionType: string,
    elementName: string,
    additionalData?: any
  ) => {
    // Implementation will depend on your analytics setup
    console.log('Interaction tracked:', { interactionType, elementName, additionalData });
  };

  return { trackInteraction };
};
