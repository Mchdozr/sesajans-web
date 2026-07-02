import type { Metadata } from "next";
import { CityLandingContent } from "@/components/CityLandingContent";
import { antalyaLanding } from "@/lib/local-seo";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: antalyaLanding.seoTitle,
  description: antalyaLanding.seoDescription,
  path: antalyaLanding.path,
  keywords: antalyaLanding.keywords,
});

export default function AntalyaPage() {
  return <CityLandingContent data={antalyaLanding} />;
}
