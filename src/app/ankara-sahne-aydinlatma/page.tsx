import type { Metadata } from "next";
import { CityLandingContent } from "@/components/CityLandingContent";
import { ankaraLanding } from "@/lib/local-seo";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: ankaraLanding.seoTitle,
  description: ankaraLanding.seoDescription,
  path: ankaraLanding.path,
  keywords: ankaraLanding.keywords,
});

export default function AnkaraPage() {
  return <CityLandingContent data={ankaraLanding} />;
}
