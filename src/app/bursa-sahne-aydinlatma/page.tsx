import type { Metadata } from "next";
import { CityLandingContent } from "@/components/CityLandingContent";
import { bursaLanding } from "@/lib/local-seo";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: bursaLanding.seoTitle,
  description: bursaLanding.seoDescription,
  path: bursaLanding.path,
  keywords: bursaLanding.keywords,
});

export default function BursaPage() {
  return <CityLandingContent data={bursaLanding} />;
}
