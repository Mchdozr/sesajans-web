"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
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

export function HomeContent() {
  const { t } = useI18n();

  return (
    <>
      <Hero />

      <section className="border-y border-theme py-10">
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
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-brand">
                {t.home.whyEyebrow}
              </p>
              <h2 className="mt-2 font-display text-3xl font-bold text-ink">{t.home.whyTitle}</h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-muted">
                Şişli merkezli stok, saha kurulumu ve proje bazlı fiyat teklifi ile
                Türkiye geneline hizmet veriyoruz.{" "}
                <Link href="/bayi" className="font-medium text-brand hover:underline">
                  Distribütör bilgisi
                </Link>
              </p>
            </div>
            <ul className="space-y-6 border-l border-theme pl-6">
              {t.whyUs.map((item) => (
                <li key={item.title}>
                  <h3 className="font-display font-bold text-ink">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-muted">{item.description}</p>
                </li>
              ))}
            </ul>
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
                  className="block border-b border-theme pb-5 transition-colors hover:border-brand/50"
                >
                  <p className="text-xs font-semibold text-brand">
                    {project.year} · {project.city}
                  </p>
                  <h3 className="mt-1 font-display font-bold text-ink">{project.title}</h3>
                  <p className="mt-2 line-clamp-2 text-sm text-ink-muted">{project.summary}</p>
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
