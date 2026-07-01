"use client";

import { PageHeader } from "@/components/PageHeader";
import { Container } from "@/components/ui/Container";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CTABanner } from "@/components/CTABanner";
import { products } from "@/lib/products";
import { useI18n } from "@/lib/i18n/context";
import { getLocalizedProduct } from "@/lib/i18n/products";

export function SssContent() {
  const { locale, t } = useI18n();

  const productFaqs = products.flatMap((p) => {
    const lp = getLocalizedProduct(p.slug, locale);
    if (!lp) return [];
    return lp.localizedFaqs.slice(0, 1).map((f) => ({
      q: `${lp.name}: ${f.q}`,
      a: f.a,
    }));
  });

  const allFaqs = [...t.homeFaqs, ...productFaqs];

  return (
    <>
      <PageHeader
        eyebrow={t.sssPage.eyebrow}
        title={t.sssPage.title}
        description={t.sssPage.description}
        breadcrumb={[{ name: t.nav.faq, path: "/sss" }]}
      />
      <section className="py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <FAQAccordion items={allFaqs} />
          </div>
        </Container>
      </section>
      <CTABanner />
    </>
  );
}
