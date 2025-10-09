// hooks/useScrollTracking.ts
import { useEffect } from 'react';
import { trackScrollDepth, trackTimeOnPage } from '@/lib/meta-pixel';

interface ScrollTrackingOptions {
  pageTitle?: string;
  trackTimeOnPage?: boolean;
}

export const useScrollTracking = (options: ScrollTrackingOptions = {}) => {
  useEffect(() => {
    const { pageTitle, trackTimeOnPage: shouldTrackTime = true } = options;
    
    // Variables para tracking de scroll depth
    const scrollMilestones = { 25: false, 50: false, 75: false, 100: false };
    let startTime = Date.now();
    
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.round((scrollTop / docHeight) * 100);
      
      // Track scroll milestones
      Object.keys(scrollMilestones).forEach(milestone => {
        const percent = parseInt(milestone);
        if (scrollPercent >= percent && !scrollMilestones[percent as keyof typeof scrollMilestones]) {
          scrollMilestones[percent as keyof typeof scrollMilestones] = true;
          trackScrollDepth(percent, pageTitle);
        }
      });
    };
    
    // Track time on page when user leaves
    const handleBeforeUnload = () => {
      if (shouldTrackTime) {
        const timeSpent = Math.round((Date.now() - startTime) / 1000);
        trackTimeOnPage(timeSpent, pageTitle);
      }
    };
    
    // Track time on page periodically (every 30 seconds for active users)
    let timeInterval: NodeJS.Timeout;
    if (shouldTrackTime) {
      timeInterval = setInterval(() => {
        const timeSpent = Math.round((Date.now() - startTime) / 1000);
        if (timeSpent > 0 && timeSpent % 30 === 0) { // Every 30 seconds
          trackTimeOnPage(timeSpent, pageTitle);
        }
      }, 30000);
    }
    
    // Add event listeners
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('beforeunload', handleBeforeUnload);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('beforeunload', handleBeforeUnload);
      if (timeInterval) clearInterval(timeInterval);
    };
  }, [options.pageTitle, options.trackTimeOnPage]);
};