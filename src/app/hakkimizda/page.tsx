import type { Metadata } from "next";
import { AboutContent } from "@/components/AboutContent";
import { site } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Hakkımızda",
  description: `${site.brand} — profesyonel sahne ve etkinlik aydınlatma çözümleri.`,
  path: "/hakkimizda",
});

export default function HakkimizdaPage() {
  return <AboutContent />;
}
