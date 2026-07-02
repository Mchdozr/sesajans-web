import type { Metadata } from "next";
import { ComparisonIndexContent } from "@/components/GlossaryTermContent";
import { RelatedContent } from "@/components/RelatedContent";
import { buildMetadata } from "@/lib/seo";
import { comparisons } from "@/lib/comparisons";
import { seoHubLinks } from "@/lib/internal-links";

export const metadata: Metadata = buildMetadata({
  title: "Ürün Karşılaştırmaları",
  description:
    "SESAJANS beam, wash ve blinder modelleri arasında teknik karşılaştırma rehberleri.",
  path: "/karsilastirma",
  keywords: ["moving head karşılaştırma", "beam karşılaştırma", "wash karşılaştırma"],
});

export default function ComparisonIndexPage() {
  return (
    <>
      <ComparisonIndexContent
        items={comparisons.map((c) => ({
          slug: c.slug,
          path: c.path,
          title: c.title,
          description: c.description,
        }))}
      />
      <RelatedContent groups={seoHubLinks} title="Diğer rehberler" />
    </>
  );
}
