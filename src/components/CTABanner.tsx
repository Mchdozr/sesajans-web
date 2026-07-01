"use client";

import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { useI18n } from "@/lib/i18n/context";

export function CTABanner() {
  const { t } = useI18n();

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-brand/25 bg-gradient-to-br from-brand/20 via-surface-elevated to-surface p-8 text-center sm:p-12">
          <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">{t.cta.title}</h2>
          <p className="mx-auto mt-3 max-w-xl text-ink-muted">{t.cta.description}</p>
          <ButtonLink href="/iletisim" size="lg" className="mt-6">
            {t.cta.button}
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
