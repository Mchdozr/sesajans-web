import type { Metadata } from "next";
import { KeywordHubContent } from "@/components/KeywordHubContent";
import { getKeywordHub } from "@/lib/keyword-hubs";
import { buildMetadata, faqJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";

const hub = getKeywordHub("satin-al")!;

export const metadata: Metadata = buildMetadata({
  title: hub.seoTitle,
  description: hub.seoDescription,
  path: hub.path,
  keywords: hub.keywords,
});

export default function SatinAlPage() {
  return (
    <>
      <JsonLd data={faqJsonLd(hub.faqs)} />
      <KeywordHubContent data={hub} />
    </>
  );
}
