"use client";

import Link from "next/link";
import { ArrowRight, Lightbulb, Wrench, Award, Users } from "lucide-react";
import { Hero } from "@/components/Hero";
import { Container, SectionHeading } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/Reveal";
import { StatsCounter } from "@/components/StatsCounter";
import { ProductCard } from "@/components/ProductCard";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CTABanner } from "@/components/CTABanner";
import { products } from "@/lib/products";
import { projects } from "@/lib/projects";
import { site } from "@/lib/site";
import { useI18n } from "@/lib/i18n/context";

const whyIcons = [Lightbulb, Wrench, Award, Users];

export function HomeContent() {
  const { t } = useI18n();

  return (
    <>
      <Hero />

      <section className="border-y border-theme bg-surface-deep/60 py-12">
        <Container>
          <StatsCounter
            stats={[
              { value: site.stats.experience, label: t.home.stats.experience },
              { value: site.stats.products, label: t.home.stats.products },
              { value: site.stats.projects, label: t.home.stats.projects },
              { value: site.stats.support, label: t.home.stats.support },
            ]}
          />
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow={t.home.productsEyebrow}
            title={t.home.productsTitle}
            description={t.home.productsDesc}
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.slice(0, 6).map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.06}>
                <ProductCard slug={p.slug} />
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <ButtonLink href="/urunler" variant="outline">
              {t.home.allProducts} <ArrowRight className="h-4 w-4" />
            </ButtonLink>
          </div>
        </Container>
      </section>

      <section className="border-y border-theme bg-surface-deep/40 py-20">
        <Container>
          <SectionHeading eyebrow={t.home.whyEyebrow} title={t.home.whyTitle} />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.whyUs.map((item, i) => {
              const Icon = whyIcons[i];
              return (
                <Reveal key={item.title} delay={i * 0.08}>
                  <div className="glow-border h-full rounded-2xl border border-theme bg-surface-elevated/80 p-6">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand/15 text-brand">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-4 font-display font-bold text-ink">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted">{item.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow={t.home.projectsEyebrow}
            title={t.home.projectsTitle}
            description={t.home.projectsDesc}
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 3).map((project, i) => (
              <Reveal key={project.slug} delay={i * 0.06}>
                <Link
                  href={`/projeler/${project.slug}`}
                  className="glow-border block overflow-hidden rounded-2xl border border-theme bg-surface-elevated/80 transition-colors hover:border-brand/40"
                >
                  <div className="p-5">
                    <p className="text-xs font-semibold text-brand">{project.year} · {project.city}</p>
                    <h3 className="mt-1 font-display font-bold text-ink">{project.title}</h3>
                    <p className="mt-2 line-clamp-2 text-sm text-ink-muted">{project.summary}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <ButtonLink href="/projeler">{t.home.browseProjects}</ButtonLink>
          </div>
        </Container>
      </section>

      <section className="border-t border-theme bg-surface-deep/40 py-20">
        <Container>
          <SectionHeading eyebrow={t.home.faqEyebrow} title={t.home.faqTitle} />
          <div className="mx-auto mt-10 max-w-3xl">
            <FAQAccordion items={t.homeFaqs} />
          </div>
          <p className="mt-6 text-center text-sm text-ink-muted">
            <Link href="/sss" className="text-brand hover:underline">
              {t.home.allFaqs}
            </Link>
          </p>
        </Container>
      </section>

      <CTABanner />
    </>
  );
}
