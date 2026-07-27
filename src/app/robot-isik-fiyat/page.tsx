import type { Metadata } from "next";
import { KeywordHubContent } from "@/components/KeywordHubContent";
import { getKeywordHub } from "@/lib/keyword-hubs";
import { buildMetadata } from "@/lib/seo";

const hub = getKeywordHub("robot-isik-fiyat")!;

export const metadata: Metadata = buildMetadata({
  title: hub.seoTitle,
  description: hub.seoDescription,
  path: hub.path,
  keywords: hub.keywords,
});

export default function RobotIsikFiyatPage() {
  return <KeywordHubContent data={hub} />;
}
