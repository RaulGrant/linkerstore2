'use client';

export interface CookieConsent {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp: number;
}

const COOKIE_CONSENT_KEY = 'linkerstore_cookie_consent';
const COOKIE_EXPIRY_DAYS = 365;

export class CookiesManager {
  static getConsent(): CookieConsent | null {
    if (typeof window === 'undefined') return null;
    
    try {
      const stored = localStorage.getItem(COOKIE_CONSENT_KEY);
      if (!stored) return null;
      
      const consent = JSON.parse(stored) as CookieConsent;
      const now = Date.now();
      const oneYear = 365 * 24 * 60 * 60 * 1000;
      
      // Verificar si el consentimiento ha expirado
      if (now - consent.timestamp > oneYear) {
        this.clearConsent();
        return null;
      }
      
      return consent;
    } catch {
      return null;
    }
  }

  static setConsent(consent: Omit<CookieConsent, 'timestamp'>): void {
    if (typeof window === 'undefined') return;
    
    const consentWithTimestamp: CookieConsent = {
      ...consent,
      timestamp: Date.now()
    };
    
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(consentWithTimestamp));
    
    // Disparar evento personalizado para notificar cambios
    window.dispatchEvent(new CustomEvent('cookieConsentChanged', {
      detail: consentWithTimestamp
    }));
  }

  static clearConsent(): void {
    if (typeof window === 'undefined') return;
    
    localStorage.removeItem(COOKIE_CONSENT_KEY);
    
    // Limpiar cookies de terceros si existen
    this.clearThirdPartyCookies();
  }

  static hasConsent(): boolean {
    return this.getConsent() !== null;
  }

  static allowsAnalytics(): boolean {
    const consent = this.getConsent();
    return consent?.analytics ?? false;
  }

  static allowsMarketing(): boolean {
    const consent = this.getConsent();
    return consent?.marketing ?? false;
  }

  static allowsNecessary(): boolean {
    const consent = this.getConsent();
    return consent?.necessary ?? false;
  }

  private static clearThirdPartyCookies(): void {
    // Limpiar cookies de Google Analytics
    const gaCookies = document.cookie.split(';')
      .map(cookie => cookie.trim())
      .filter(cookie => cookie.startsWith('_ga') || cookie.startsWith('_gid'));
    
    gaCookies.forEach(cookie => {
      const cookieName = cookie.split('=')[0];
      document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.${window.location.hostname}`;
      document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
    });

    // Limpiar cookies de Meta Pixel
    const fbCookies = document.cookie.split(';')
      .map(cookie => cookie.trim())
      .filter(cookie => cookie.startsWith('_fb'));
    
    fbCookies.forEach(cookie => {
      const cookieName = cookie.split('=')[0];
      document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.${window.location.hostname}`;
      document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
    });
  }
}