import Link from "next/link";
import { Container, SectionHeading } from "@/components/ui/Container";
import { PageHeaderStatic } from "@/components/PageHeaderStatic";
import { CTABanner } from "@/components/CTABanner";
import type { GlossaryTerm } from "@/lib/glossary";

export function GlossaryTermContent({ term }: { term: GlossaryTerm }) {
  return (
    <>
      <PageHeaderStatic
        eyebrow="Sözlük"
        title={term.title}
        description={term.definition}
        breadcrumb={[
          { name: "Sözlük", path: "/sozluk" },
          { name: term.title, path: `/sozluk/${term.slug}` },
        ]}
      />
      <section className="py-12 sm:py-16">
        <Container>
          <div className="mx-auto max-w-3xl space-y-10">
            {term.sections.map((section) => (
              <div key={section.title}>
                <h2 className="font-display text-xl font-bold text-ink">{section.title}</h2>
                <p className="mt-3 leading-relaxed text-ink-muted">{section.body}</p>
              </div>
            ))}
            <div className="rounded-2xl border border-theme bg-surface-elevated/60 p-6">
              <h2 className="font-display text-lg font-bold text-ink">İlgili içerikler</h2>
              <ul className="mt-4 space-y-2 text-sm">
                {term.relatedLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="font-medium text-brand hover:underline">
                      {link.label} →
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>
      <CTABanner />
    </>
  );
}

export function GlossaryIndexContent({
  terms,
}: {
  terms: { slug: string; title: string; definition: string }[];
}) {
  return (
    <>
      <PageHeaderStatic
        eyebrow="Rehber"
        title="Aydınlatma Sözlüğü"
        description="DMX, moving head, IP koruma ve sahne aydınlatma terimlerinin kısa açıklamaları."
        breadcrumb={[{ name: "Sözlük", path: "/sozluk" }]}
      />
      <section className="py-12 sm:py-16">
        <Container>
          <div className="grid gap-4 sm:grid-cols-2">
            {terms.map((term) => (
              <Link
                key={term.slug}
                href={`/sozluk/${term.slug}`}
                className="glow-border rounded-2xl border border-theme bg-surface-elevated/80 p-5 transition-colors hover:border-brand/40"
              >
                <h2 className="font-display font-bold text-ink">{term.title}</h2>
                <p className="mt-2 line-clamp-3 text-sm text-ink-muted">{term.definition}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>
      <CTABanner />
    </>
  );
}

export function ComparisonIndexContent({
  items,
}: {
  items: { slug: string; path: string; title: string; description: string }[];
}) {
  return (
    <>
      <PageHeaderStatic
        eyebrow="Rehber"
        title="Ürün Karşılaştırmaları"
        description="SESAJANS moving head, wash ve blinder modelleri arasında doğru seçimi yapın."
        breadcrumb={[{ name: "Karşılaştırma", path: "/karsilastirma" }]}
      />
      <section className="py-12 sm:py-16">
        <Container>
          <div className="grid gap-4 sm:grid-cols-2">
            {items.map((item) => (
              <Link
                key={item.slug}
                href={item.path}
                className="glow-border rounded-2xl border border-theme bg-surface-elevated/80 p-5 transition-colors hover:border-brand/40"
              >
                <h2 className="font-display font-bold text-ink">{item.title}</h2>
                <p className="mt-2 text-sm text-ink-muted">{item.description}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>
      <CTABanner />
    </>
  );
}
