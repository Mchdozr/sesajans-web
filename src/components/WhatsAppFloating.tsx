"use client";

import { MessageCircle } from "lucide-react";
import { site } from "@/lib/site";

export function WhatsAppFloating() {
  const href = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    "Merhaba, SESAJANS web sitesinden yazıyorum. Aydınlatma teklifi almak istiyorum.",
  )}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp ile yazın"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
