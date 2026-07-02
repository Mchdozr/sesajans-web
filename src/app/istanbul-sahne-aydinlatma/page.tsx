import type { Metadata } from "next";
import { IstanbulLandingContent } from "@/components/IstanbulLandingContent";
import { istanbulLanding } from "@/lib/local-seo";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: istanbulLanding.seoTitle,
  description: istanbulLanding.seoDescription,
  path: istanbulLanding.path,
  keywords: istanbulLanding.keywords,
});

export default function IstanbulPage() {
  return <IstanbulLandingContent />;
}
