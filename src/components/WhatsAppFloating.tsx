"use client";

import { useSyncExternalStore } from "react";
import { site } from "@/lib/site";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { getCookieConsent, subscribeCookieConsent } from "@/lib/cookie-consent";

export function WhatsAppFloating() {
  const href = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    "Merhaba, SESAJANS web sitesinden yazıyorum. Aydınlatma teklifi almak istiyorum.",
  )}`;

  // Çerez banner'ı açıkken buton bannerla çakışmasın diye gizlenir.
  const consentPending = useSyncExternalStore(
    subscribeCookieConsent,
    () => !getCookieConsent(),
    () => true,
  );

  if (consentPending) return null;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp ile yazın"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
