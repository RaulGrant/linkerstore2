'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';
import { CookiesManager, type CookieConsent } from '@/lib/cookies-manager';

const META_PIXEL_ID = '2002160850545438';

const META_PIXEL_SCRIPT = `
  (function() {
    if (window.__META_PIXEL_INITIALIZED__) {
      try {
        if (typeof window.fbq === 'function') {
          window.fbq('track', 'PageView');
        }
      } catch (error) {
        console.warn('Meta Pixel track failed:', error);
      }
      return;
    }

    try {
      window.__META_PIXEL_INITIALIZED__ = true;

      !function(f,b,e,v,n,t,s){
        if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        if(s && s.parentNode){
          s.parentNode.insertBefore(t,s);
        }else{
          var target = b.head || b.body;
          if (target) {
            target.appendChild(t);
          }
        }
      }(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');

      if (typeof window.fbq === 'function') {
        window.fbq('init', '${META_PIXEL_ID}');
        window.fbq('track', 'PageView');
      }
    } catch (error) {
      window.__META_PIXEL_INITIALIZED__ = false;
      console.warn('Meta Pixel init failed:', error);
    }
  })();
`;

declare global {
  interface Window {
    __META_PIXEL_INITIALIZED__?: boolean;
    fbq?: (...args: unknown[]) => void;
  }
}

export default function MetaPixel() {
  const [shouldLoad, setShouldLoad] = useState<boolean>(false);

  useEffect(() => {
    const updateConsent = (consent?: CookieConsent) => {
      setShouldLoad(Boolean(consent?.marketing));
    };

    updateConsent(CookiesManager.getConsent() ?? undefined);

    const handler = (event: Event) => {
      updateConsent((event as CustomEvent<CookieConsent>).detail);
    };

    window.addEventListener('cookieConsentChanged', handler);
    return () => {
      window.removeEventListener('cookieConsentChanged', handler);
    };
  }, []);

  if (!shouldLoad) {
    return null;
  }

  return (
    <>
      <Script id="meta-pixel" strategy="afterInteractive">
        {META_PIXEL_SCRIPT}
      </Script>
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
    </>
  );
}
