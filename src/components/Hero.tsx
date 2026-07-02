"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ShieldCheck, Headphones, Zap } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { site } from "@/lib/site";
import { useI18n } from "@/lib/i18n/context";

export function Hero() {
  const reduce = useReducedMotion();
  const { t } = useI18n();

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-surface-deep" aria-hidden />
      <div className="bg-radial-glow absolute inset-0" aria-hidden />
      <div
        className="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-brand/20 blur-[120px]"
        aria-hidden
      />

      <Container className="relative py-20 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <motion.span
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-surface-elevated/80 px-4 py-1.5 text-xs font-semibold text-brand backdrop-blur sm:text-sm"
          >
            {site.stats.experience} {t.home.experience}
          </motion.span>

          <motion.h1
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 font-display text-4xl font-bold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-6xl"
          >
            {t.home.heroTitle1}{" "}
            <span className="text-gradient">{t.home.heroTitle2}</span>
          </motion.h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12 }}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg"
          >
            {t.home.heroDesc}
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <ButtonLink href="/urunler" size="lg">
              {t.home.browseProducts}
              <ArrowRight className="h-5 w-5" />
            </ButtonLink>
            <ButtonLink href="/iletisim" variant="outline" size="lg">
              {t.nav.cta}
            </ButtonLink>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-ink-muted"
          >
            <span className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-brand" /> {t.home.guaranteed}
            </span>
            <span className="flex items-center gap-2">
              <Headphones className="h-4 w-4 text-brand" /> {t.home.support}
            </span>
            <span className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-brand" /> {t.home.fastDelivery}
            </span>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
