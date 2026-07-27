import type { Metadata } from "next";
import { KeywordHubContent } from "@/components/KeywordHubContent";
import { getKeywordHub } from "@/lib/keyword-hubs";
import { buildMetadata } from "@/lib/seo";

const hub = getKeywordHub("dj-aydinlatma")!;

export const metadata: Metadata = buildMetadata({
  title: hub.seoTitle,
  description: hub.seoDescription,
  path: hub.path,
  keywords: hub.keywords,
});

export default function DjAydinlatmaPage() {
  return <KeywordHubContent data={hub} />;
}
