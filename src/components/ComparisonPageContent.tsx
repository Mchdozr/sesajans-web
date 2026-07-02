"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/PageHeader";
import { CTABanner } from "@/components/CTABanner";
import { products } from "@/lib/products";
import type { Comparison } from "@/lib/comparisons";

export function ComparisonPageContent({ comparison }: { comparison: Comparison }) {
  const productA = products.find((p) => p.slug === comparison.productASlug)!;
  const productB = products.find((p) => p.slug === comparison.productBSlug)!;

  return (
    <>
      <PageHeader
        eyebrow="Karşılaştırma"
        title={comparison.title}
        description={comparison.description}
        breadcrumb={[
          { name: "Karşılaştırma", path: "/karsilastirma" },
          { name: comparison.title, path: comparison.path },
        ]}
      />
      <section className="py-12 sm:py-16">
        <Container>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-ink-muted">
            {comparison.intro}
          </p>
          <div className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-2xl border border-theme">
            <table className="w-full text-left text-sm">
              <thead className="bg-surface-elevated/80">
                <tr>
                  <th className="px-4 py-3 font-semibold text-ink">Özellik</th>
                  <th className="px-4 py-3 font-semibold text-brand">
                    <Link href={`/urunler/${productA.slug}`}>{productA.name}</Link>
                  </th>
                  <th className="px-4 py-3 font-semibold text-brand">
                    <Link href={`/urunler/${productB.slug}`}>{productB.name}</Link>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparison.rows.map(([label, a, b]) => (
                  <tr key={label} className="border-t border-theme">
                    <td className="px-4 py-3 font-medium text-ink">{label}</td>
                    <td className="px-4 py-3 text-ink-muted">{a}</td>
                    <td className="px-4 py-3 text-ink-muted">{b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mx-auto mt-8 max-w-3xl text-sm text-ink-muted">
            Detaylı teknik özellikler için ürün sayfalarını inceleyin veya{" "}
            <Link href="/iletisim" className="font-medium text-brand hover:underline">
              teklif alın
            </Link>
            .
          </p>
        </Container>
      </section>
      <CTABanner />
    </>
  );
}
