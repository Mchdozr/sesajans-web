"use client";

import { PageHeader } from "@/components/PageHeader";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/Reveal";
import { CTABanner } from "@/components/CTABanner";
import { RelatedContent } from "@/components/RelatedContent";
import { aboutPageLinks } from "@/lib/internal-links";
import { VerticalBrandLogo } from "@/components/VerticalBrandLogo";
import { site } from "@/lib/site";
import { useI18n } from "@/lib/i18n/context";

export function AboutContent() {
  const { locale, t } = useI18n();
  const p = t.aboutPage;

  return (
    <>
      <PageHeader
        eyebrow={p.eyebrow}
        title={p.title}
        description={t.site.description}
        breadcrumb={[{ name: t.nav.about, path: "/hakkimizda" }]}
      />
      <section className="py-16 sm:py-20">
        <Container>
          <Reveal>
            <div className="mx-auto flex max-w-5xl flex-col items-center gap-10 lg:flex-row lg:items-start lg:gap-16">
              <div className="flex shrink-0 justify-center lg:sticky lg:top-28 lg:self-start">
                <VerticalBrandLogo />
              </div>
              <div className="min-w-0 flex-1 space-y-6 text-base leading-relaxed text-ink-muted">
                <p>
                  <strong className="text-ink">{site.brand}</strong>
                  {locale === "tr" ? (
                    <>
                      , {site.foundedYear} {p.p1}
                    </>
                  ) : (
                    <>
                      {" "}
                      {p.p1} {site.foundedYear}.
                    </>
                  )}
                </p>
                <p>{p.p2}</p>
                <p>{p.p3}</p>
                <p>{p.p4}</p>
              </div>
            </div>
          </Reveal>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {p.values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <div className="glow-border rounded-2xl border border-theme bg-surface-elevated/80 p-6 text-center">
                  <h3 className="font-display text-lg font-bold text-brand">{v.title}</h3>
                  <p className="mt-2 text-sm text-ink-muted">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
      <RelatedContent groups={aboutPageLinks} title="Keşfet" />
      <CTABanner />
    </>
  );
}
