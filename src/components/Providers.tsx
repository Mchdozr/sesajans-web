"use client";

import { ThemeProvider } from "next-themes";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { I18nProvider } from "@/lib/i18n/context";
import { Analytics } from "@/components/Analytics";
import { CookieBanner } from "@/components/CookieBanner";
import { WhatsAppFloating } from "@/components/WhatsAppFloating";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <I18nProvider>
        {children}
        <Analytics />
        <SpeedInsights />
        <CookieBanner />
        <WhatsAppFloating />
      </I18nProvider>
    </ThemeProvider>
  );
}
