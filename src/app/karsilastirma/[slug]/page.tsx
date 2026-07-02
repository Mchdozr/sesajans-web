import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ComparisonPageContent } from "@/components/ComparisonPageContent";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata, faqJsonLd } from "@/lib/seo";
import { comparisonSlugs, getComparison } from "@/lib/comparisons";

export function generateStaticParams() {
  return comparisonSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const comparison = getComparison(slug);
  if (!comparison) return {};
  return buildMetadata({
    title: comparison.seoTitle,
    description: comparison.seoDescription,
    path: comparison.path,
    keywords: comparison.keywords,
  });
}

export default async function ComparisonSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const comparison = getComparison(slug);
  if (!comparison) notFound();

  return (
    <>
      <JsonLd data={faqJsonLd(comparison.faqs)} />
      <ComparisonPageContent comparison={comparison} />
    </>
  );
}
