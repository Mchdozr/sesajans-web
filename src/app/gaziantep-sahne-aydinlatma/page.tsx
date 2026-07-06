import type { Metadata } from "next";
import { CityLandingContent } from "@/components/CityLandingContent";
import { gaziantepLanding } from "@/lib/local-seo";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: gaziantepLanding.seoTitle,
  description: gaziantepLanding.seoDescription,
  path: gaziantepLanding.path,
  keywords: gaziantepLanding.keywords,
});

export default function GaziantepPage() {
  return <CityLandingContent data={gaziantepLanding} />;
}
