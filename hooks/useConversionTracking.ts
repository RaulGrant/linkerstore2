// hooks/useConversionTracking.ts
import { useEffect, useCallback } from 'react';
import { trackEvent, trackLead, trackRegistration } from '@/lib/meta-pixel';

interface ConversionTrackingOptions {
  enableFunnelTracking?: boolean;
  enableFormTracking?: boolean;
  enableDownloadTracking?: boolean;
}

export const useConversionTracking = (options: ConversionTrackingOptions = {}) => {
  const { 
    enableFunnelTracking = true, 
    enableFormTracking = true, 
    enableDownloadTracking = true 
  } = options;

  // Track form submissions
  const trackFormSubmission = useCallback((formType: string, formData?: any) => {
    if (enableFormTracking) {
      trackLead(`form_${formType}`, 1);
      if (formType === 'newsletter') {
        trackRegistration('email');
      }
    }
  }, [enableFormTracking]);

  // Track downloads
  const trackDownload = useCallback((downloadType: string, fileName: string) => {
    if (enableDownloadTracking) {
      trackLead(`download_${downloadType}`, 0.5);
      trackEvent('Lead', {
        content_name: `download_${downloadType}`,
        content_category: 'resource_download',
        value: 0.5,
        currency: 'USD',
        custom_parameter: {
          file_name: fileName,
          download_type: downloadType
        }
      });
    }
  }, [enableDownloadTracking]);

  // Track funnel steps
  const trackFunnelStep = useCallback((step: string, value?: number) => {
    if (enableFunnelTracking) {
      trackEvent('Lead', {
        content_name: `funnel_${step}`,
        content_category: 'conversion_funnel',
        value: value || 0.1,
        currency: 'USD'
      });
    }
  }, [enableFunnelTracking]);

  // Auto-track outbound link clicks (for affiliate tracking enhancement)
  useEffect(() => {
    const handleLinkClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const link = target.closest('a');
      
      if (link && link.hostname !== window.location.hostname) {
        // External link detected
        const href = link.href;
        if (href.includes('amazon.com') || href.includes('mercadolibre.com')) {
          // This is handled by our specific affiliate tracking
          return;
        }
        
        // Track other external links as potential conversions
        trackEvent('Lead', {
          content_name: 'external_link_click',
          content_category: 'outbound_traffic',
          value: 0.2,
          currency: 'USD',
          custom_parameter: {
            destination_domain: link.hostname,
            link_text: link.textContent?.slice(0, 100) || 'Unknown'
          }
        });
      }
    };

    if (enableFunnelTracking) {
      document.addEventListener('click', handleLinkClick);
      return () => document.removeEventListener('click', handleLinkClick);
    }
  }, [enableFunnelTracking]);

  return {
    trackFormSubmission,
    trackDownload,
    trackFunnelStep
  };
};