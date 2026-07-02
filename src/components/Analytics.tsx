"use client";

import { useSyncExternalStore } from "react";
import Script from "next/script";
import { isCookieConsentAccepted, subscribeCookieConsent } from "@/lib/cookie-consent";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export function Analytics() {
  const enabled = useSyncExternalStore(
    subscribeCookieConsent,
    isCookieConsentAccepted,
    () => false,
  );

  if (!GA_ID || !enabled) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  );
}

export function trackEvent(name: string, params?: Record<string, string>) {
  if (typeof window === "undefined" || !GA_ID) return;
  if (!isCookieConsentAccepted()) return;
  // @ts-expect-error gtag global
  window.gtag?.("event", name, params);
}
