'use client';

import { useEffect } from 'react';
import CookieBanner from './CookieBanner';
import { CookiesManager } from '@/lib/cookies-manager';
import { initializeGA } from '@/lib/google-analytics';

export default function CookieConsent() {
  useEffect(() => {
    // Listener para cambios en el consentimiento de cookies
    const handleConsentChange = (event: CustomEvent) => {
      const consent = event.detail;
      
      // Inicializar Google Analytics si se acepta
      if (consent.analytics) {
        initializeGA();
      }
      
      console.log('Cookie consent updated:', consent);
    };

    // Verificar consentimiento existente al cargar
    const existingConsent = CookiesManager.getConsent();
    if (existingConsent?.analytics) {
      initializeGA();
    }

    window.addEventListener('cookieConsentChanged', handleConsentChange as EventListener);

    return () => {
      window.removeEventListener('cookieConsentChanged', handleConsentChange as EventListener);
    };
  }, []);

  return <CookieBanner />;
}