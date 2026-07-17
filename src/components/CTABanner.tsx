"use client";

import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { useI18n } from "@/lib/i18n/context";

export function CTABanner() {
  const { t } = useI18n();

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="rounded-2xl bg-brand px-8 py-10 text-center sm:px-12 sm:py-12">
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">{t.cta.title}</h2>
          <p className="mx-auto mt-3 max-w-xl text-white/85">{t.cta.description}</p>
          <ButtonLink
            href="/iletisim"
            size="lg"
            variant="outline"
            className="mt-6 border-white/40 bg-white text-brand hover:border-white hover:bg-white/95"
          >
            {t.cta.button}
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
