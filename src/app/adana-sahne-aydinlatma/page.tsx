import type { Metadata } from "next";
import { CityLandingContent } from "@/components/CityLandingContent";
import { adanaLanding } from "@/lib/local-seo";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: adanaLanding.seoTitle,
  description: adanaLanding.seoDescription,
  path: adanaLanding.path,
  keywords: adanaLanding.keywords,
});

export default function AdanaPage() {
  return <CityLandingContent data={adanaLanding} />;
}
