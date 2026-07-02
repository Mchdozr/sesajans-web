import type { Metadata } from "next";
import { CityLandingContent } from "@/components/CityLandingContent";
import { izmirLanding } from "@/lib/local-seo";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: izmirLanding.seoTitle,
  description: izmirLanding.seoDescription,
  path: izmirLanding.path,
  keywords: izmirLanding.keywords,
});

export default function IzmirPage() {
  return <CityLandingContent data={izmirLanding} />;
}
