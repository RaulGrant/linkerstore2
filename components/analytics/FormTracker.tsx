'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { trackFormInteraction, trackEvent } from '@/lib/analytics/ga4';

interface FormTrackerProps {
  children: React.ReactNode;
  formName: string;
  trackFields?: boolean;
  trackSubmission?: boolean;
  trackAbandon?: boolean;
  className?: string;
}

export default function FormTracker({
  children,
  formName,
  trackFields = true,
  trackSubmission = true,
  trackAbandon = true,
  className,
}: FormTrackerProps) {
  const [formStarted, setFormStarted] = useState(false);
  const [fieldsInteracted, setFieldsInteracted] = useState<Set<string>>(new Set());
  const [startTime, setStartTime] = useState<number>(0);

  // Track form start
  const handleFormStart = useCallback(() => {
    if (!formStarted) {
      setFormStarted(true);
      setStartTime(Date.now());
      trackFormInteraction('start', formName);
    }
  }, [formStarted, formName]);

  // Track form submission
  const handleFormSubmit = useCallback((event: React.FormEvent<HTMLFormElement>) => {
    const completionTime = Date.now() - startTime;
    
    trackFormInteraction('complete', formName);
    trackEvent('form_submission', {
      category: 'conversion',
      form_name: formName,
      completion_time: Math.round(completionTime / 1000),
      fields_interacted: fieldsInteracted.size,
    });
  }, [formName, startTime, fieldsInteracted.size]);

  // Track field interactions
  const handleFieldInteraction = useCallback((fieldName: string) => {
    if (!fieldsInteracted.has(fieldName)) {
      setFieldsInteracted(prev => new Set([...prev, fieldName]));
      
      if (trackFields) {
        trackFormInteraction('start', formName, fieldName);
      }
    }
  }, [fieldsInteracted, trackFields, formName]);

  // Track form abandonment
  useEffect(() => {
    const handleBeforeUnload = () => {
      if (formStarted && trackAbandon) {
        const timeSpent = Date.now() - startTime;
        trackFormInteraction('abandon', formName);
        trackEvent('form_abandon', {
          category: 'engagement',
          form_name: formName,
          time_spent: Math.round(timeSpent / 1000),
          fields_interacted: fieldsInteracted.size,
        });
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [formStarted, trackAbandon, formName, startTime, fieldsInteracted.size]);

  // Clone children and add event handlers
  const enhancedChildren = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      const childProps = child.props as any;
      return React.cloneElement(child as any, {
        onFocus: (e: React.FocusEvent) => {
          handleFormStart();
          const target = e.target as HTMLInputElement;
          if (trackFields && target.name) {
            handleFieldInteraction(target.name);
          }
          // Call original onFocus if it exists
          if (childProps.onFocus) {
            childProps.onFocus(e);
          }
        },
        onChange: (e: React.ChangeEvent) => {
          handleFormStart();
          const target = e.target as HTMLInputElement;
          if (trackFields && target && target.name) {
            handleFieldInteraction(target.name);
          }
          // Call original onChange if it exists
          if (childProps.onChange) {
            childProps.onChange(e);
          }
        },
      });
    }
    return child;
  });

  return (
    <form
      className={className}
      onSubmit={handleFormSubmit}
      onFocus={handleFormStart}
    >
      {enhancedChildren}
    </form>
  );
}

// Hook para tracking manual de formularios
export const useFormTracker = (formName: string) => {
  const [formData, setFormData] = useState({
    started: false,
    startTime: 0,
    fieldsInteracted: new Set<string>(),
  });

  const startTracking = useCallback(() => {
    if (!formData.started) {
      setFormData({
        started: true,
        startTime: Date.now(),
        fieldsInteracted: new Set(),
      });
      trackFormInteraction('start', formName);
    }
  }, [formData.started, formName]);

  const trackField = useCallback((fieldName: string) => {
    if (!formData.fieldsInteracted.has(fieldName)) {
      setFormData(prev => ({
        ...prev,
        fieldsInteracted: new Set([...prev.fieldsInteracted, fieldName]),
      }));
      trackFormInteraction('start', formName, fieldName);
    }
  }, [formData.fieldsInteracted, formName]);

  const trackSubmission = useCallback((success: boolean = true) => {
    const completionTime = Date.now() - formData.startTime;
    
    if (success) {
      trackFormInteraction('complete', formName);
      trackEvent('form_submission', {
        category: 'conversion',
        form_name: formName,
        completion_time: Math.round(completionTime / 1000),
        fields_interacted: formData.fieldsInteracted.size,
      });
    } else {
      trackEvent('form_submission_failed', {
        category: 'conversion',
        form_name: formName,
        completion_time: Math.round(completionTime / 1000),
        fields_interacted: formData.fieldsInteracted.size,
      });
    }
  }, [formName, formData.startTime, formData.fieldsInteracted.size]);

  const trackAbandonment = useCallback(() => {
    if (formData.started) {
      const timeSpent = Date.now() - formData.startTime;
      trackFormInteraction('abandon', formName);
      trackEvent('form_abandon', {
        category: 'engagement',
        form_name: formName,
        time_spent: Math.round(timeSpent / 1000),
        fields_interacted: formData.fieldsInteracted.size,
      });
    }
  }, [formData.started, formName, formData.startTime, formData.fieldsInteracted.size]);

  return {
    startTracking,
    trackField,
    trackSubmission,
    trackAbandonment,
    isStarted: formData.started,
    fieldsCount: formData.fieldsInteracted.size,
  };
};