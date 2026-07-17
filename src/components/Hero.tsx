"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { StageBeamBackground } from "@/components/StageBeamBackground";
import { useI18n } from "@/lib/i18n/context";

export function Hero() {
  const reduce = useReducedMotion();
  const { t } = useI18n();

  return (
    <section className="relative overflow-hidden">
      <StageBeamBackground variant="adaptive" />
      <div className="bg-radial-glow absolute inset-0 hidden opacity-30 dark:block dark:opacity-55" aria-hidden />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-20 bg-gradient-to-t from-surface to-transparent dark:h-28 dark:from-surface dark:via-surface/80"
        aria-hidden
      />

      <Container className="relative z-[2] py-20 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm font-semibold tracking-wide text-brand"
          >
            SESAJANS
          </motion.p>

          <motion.h1
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 font-display text-4xl font-bold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-6xl"
          >
            {t.home.heroTitle1}{" "}
            <span className="text-brand">{t.home.heroTitle2}</span>
          </motion.h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg"
          >
            {t.home.heroDesc}
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18 }}
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
        </div>
      </Container>
    </section>
  );
}
