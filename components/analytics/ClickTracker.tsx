'use client';

import React, { ReactNode, MouseEvent } from 'react';
import { trackClick, trackExternalLink, trackCTAClick } from '@/lib/analytics/ga4';

interface ClickTrackerProps {
  children: ReactNode;
  eventName?: string;
  category?: 'navigation' | 'cta' | 'external' | 'internal' | 'content' | 'social';
  label?: string;
  location?: string;
  value?: number;
  trackExternal?: boolean;
  className?: string;
  onClick?: (event: MouseEvent) => void;
  additionalData?: Record<string, any>;
}

export const ClickTracker: React.FC<ClickTrackerProps> = ({
  children,
  eventName = 'click',
  category = 'navigation',
  label,
  location,
  value,
  trackExternal = true,
  className,
  onClick,
  additionalData = {},
}) => {
  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    const target = event.currentTarget;
    const linkElement = target.querySelector('a') || (target as any);
    
    // Extract information from the clicked element
    const elementText = target.textContent?.trim() || label || 'Unknown';
    const href = linkElement.href || '';
    const currentLocation = location || window.location.pathname;
    
    // Determine if it's an external link
    const isExternal = href && (
      href.startsWith('http://') || 
      href.startsWith('https://') ||
      href.startsWith('mailto:') ||
      href.startsWith('tel:')
    ) && !href.includes(window.location.hostname);
    
    // Track the click based on type
    if (isExternal && trackExternal) {
      trackExternalLink(href, elementText);
    } else if (category === 'cta') {
      trackCTAClick(elementText, currentLocation, href);
    } else {
      trackClick(elementText, currentLocation, {
        category,
        label: label || elementText,
        value,
        href,
        is_external: isExternal,
        ...additionalData,
      });
    }
    
    // Call the original onClick handler if provided
    if (onClick) {
      onClick(event);
    }
  };

  return (
    <div 
      className={className}
      onClick={handleClick}
      style={{ cursor: 'pointer' }}
    >
      {children}
    </div>
  );
};

// Higher-order component for automatic link tracking
export const withClickTracking = <P extends object>(
  WrappedComponent: React.ComponentType<P>,
  defaultProps: Partial<ClickTrackerProps> = {}
) => {
  return React.forwardRef<any, P & ClickTrackerProps>((props, ref) => {
    const { children, onClick, ...trackerProps } = props;
    const mergedProps = { ...defaultProps, ...trackerProps };

    return (
      <ClickTracker {...mergedProps} onClick={onClick}>
        <WrappedComponent {...(props as P)} ref={ref}>
          {children}
        </WrappedComponent>
      </ClickTracker>
    );
  });
};

// Specialized components for common use cases
export const NavLinkTracker: React.FC<ClickTrackerProps> = (props) => (
  <ClickTracker {...props} category="navigation" />
);

export const CTATracker: React.FC<ClickTrackerProps> = (props) => (
  <ClickTracker {...props} category="cta" />
);

export const ContentLinkTracker: React.FC<ClickTrackerProps> = (props) => (
  <ClickTracker {...props} category="content" />
);

export const SocialLinkTracker: React.FC<ClickTrackerProps> = (props) => (
  <ClickTracker {...props} category="social" />
);

// Hook for manual click tracking
export const useClickTracker = () => {
  const trackElementClick = (
    element: HTMLElement,
    options: Partial<ClickTrackerProps> = {}
  ) => {
    const elementText = element.textContent?.trim() || 'Unknown Element';
    const href = (element as HTMLAnchorElement).href || '';
    const currentLocation = options.location || window.location.pathname;
    
    const isExternal = href && (
      href.startsWith('http://') || 
      href.startsWith('https://') ||
      href.startsWith('mailto:') ||
      href.startsWith('tel:')
    ) && !href.includes(window.location.hostname);
    
    if (isExternal && options.trackExternal !== false) {
      trackExternalLink(href, elementText);
    } else if (options.category === 'cta') {
      trackCTAClick(elementText, currentLocation, href);
    } else {
      trackClick(elementText, currentLocation, {
        category: options.category || 'manual',
        label: options.label || elementText,
        value: options.value,
        href,
        is_external: isExternal,
        ...options.additionalData,
      });
    }
  };

  return { trackElementClick };
};