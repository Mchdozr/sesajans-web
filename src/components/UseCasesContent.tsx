"use client";

import Link from "next/link";
import {
  Music,
  Sparkles,
  Tv,
  Presentation,
  Theater,
  Building2,
} from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/Reveal";
import { CTABanner } from "@/components/CTABanner";
import { useI18n } from "@/lib/i18n/context";

const icons = [Music, Sparkles, Tv, Presentation, Theater, Building2];

export function UseCasesContent() {
  const { t } = useI18n();
  const p = t.useCasesPage;

  return (
    <>
      <PageHeader
        eyebrow={p.eyebrow}
        title={p.title}
        description={p.description}
        breadcrumb={[{ name: t.nav.useCases, path: "/kullanim-alanlari" }]}
      />
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {p.items.map((uc, i) => {
              const Icon = icons[i] ?? Sparkles;
              return (
                <Reveal key={uc.title} delay={i * 0.06}>
                  <div className="glow-border h-full rounded-2xl border border-theme bg-surface-elevated/80 p-6">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand/15 text-brand">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h2 className="mt-4 font-display text-lg font-bold text-ink">{uc.title}</h2>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted">{uc.description}</p>
                    <Link
                      href={uc.href}
                      className="mt-4 inline-block text-sm font-semibold text-brand hover:underline"
                    >
                      {p.browseProducts}
                    </Link>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>
      <CTABanner />
    </>
  );
}
