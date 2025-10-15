'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { usePageAnalytics } from '@/hooks/usePageAnalytics';
import { trackArticleEngagement } from '@/lib/analytics/ga4';

interface ArticleAnalyticsWrapperProps {
  children: React.ReactNode;
  articleData: {
    title: string;
    category: string;
    slug: string;
    readTime?: string;
    author?: string;
  };
}

export default function ArticleAnalyticsWrapper({ 
  children, 
  articleData 
}: ArticleAnalyticsWrapperProps) {
  const pathname = usePathname();
  const { timeSpent } = usePageAnalytics(pathname, {
    trackTimeOnPage: true,
    trackScrollDepth: true,
    scrollThresholds: [25, 50, 75, 100],
    heartbeatInterval: 10, // Más frecuente para artículos
  });

  useEffect(() => {
    // Track article start reading
    trackArticleEngagement(
      'start_reading',
      articleData.title,
      articleData.category
    );

    // Track article finish reading when user has spent enough time
    const handleBeforeUnload = () => {
      if (timeSpent > 30) { // Si el usuario pasó más de 30 segundos
        trackArticleEngagement(
          'finish_reading',
          articleData.title,
          articleData.category,
          timeSpent
        );
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [articleData.title, articleData.category, timeSpent]);

  // Track scroll milestones for reading progress
  useEffect(() => {
    const trackReadingProgress = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = Math.round((scrollTop / documentHeight) * 100);
      
      // Track significant reading milestones
      if (scrollPercentage >= 75 && timeSpent >= 60) {
        trackArticleEngagement(
          'finish_reading',
          articleData.title,
          articleData.category,
          timeSpent
        );
      }
    };

    window.addEventListener('scroll', trackReadingProgress, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', trackReadingProgress);
    };
  }, [articleData.title, articleData.category, timeSpent]);

  return <>{children}</>;
}