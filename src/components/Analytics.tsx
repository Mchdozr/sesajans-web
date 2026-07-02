"use client";

import { useEffect } from "react";
import Script from "next/script";
import { useSyncExternalStore } from "react";
import { isCookieConsentAccepted, subscribeCookieConsent } from "@/lib/cookie-consent";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function grantAnalyticsConsent() {
  if (!GA_ID || typeof window === "undefined") return;
  window.gtag?.("consent", "update", {
    analytics_storage: "granted",
  });
}

export function Analytics() {
  const accepted = useSyncExternalStore(
    subscribeCookieConsent,
    isCookieConsentAccepted,
    () => false,
  );

  useEffect(() => {
    if (accepted) grantAnalyticsConsent();
  }, [accepted]);

  if (!GA_ID) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('consent', 'default', {
            analytics_storage: 'denied',
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied',
            wait_for_update: 500
          });
          gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  );
}

export function trackEvent(name: string, params?: Record<string, string>) {
  if (typeof window === "undefined" || !GA_ID) return;
  if (!isCookieConsentAccepted()) return;
  window.gtag?.("event", name, params);
}
