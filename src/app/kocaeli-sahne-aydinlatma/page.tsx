import type { Metadata } from "next";
import { CityLandingContent } from "@/components/CityLandingContent";
import { kocaeliLanding } from "@/lib/local-seo";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: kocaeliLanding.seoTitle,
  description: kocaeliLanding.seoDescription,
  path: kocaeliLanding.path,
  keywords: kocaeliLanding.keywords,
});

export default function KocaeliPage() {
  return <CityLandingContent data={kocaeliLanding} />;
}
