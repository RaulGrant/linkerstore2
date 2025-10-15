// Archivo de exportaciones centralizadas para Analytics

// Core utilities
export * from './ga4';
export * from './config';

// React hooks
export { usePageAnalytics } from '../../hooks/usePageAnalytics';

// React components  
export { default as AnalyticsProvider } from '../../components/analytics/AnalyticsProvider';
export { default as PerformanceTracker, usePerformanceTracker } from '../../components/analytics/PerformanceTracker';
export { default as FormTracker, useFormTracker } from '../../components/analytics/FormTracker';
export { default as ArticleAnalyticsWrapper } from '../../components/analytics/ArticleAnalyticsWrapper';
export { 
  ClickTracker, 
  NavLinkTracker, 
  CTATracker, 
  ContentLinkTracker, 
  SocialLinkTracker,
  useClickTracker 
} from '../../components/analytics/ClickTracker';

// Type definitions
export type { AnalyticsEvent, AnalyticsCategory } from './config';