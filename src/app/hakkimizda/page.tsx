import type { Metadata } from "next";
import { AboutContent } from "@/components/AboutContent";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/lib/site";
import { buildMetadata, missionJsonLd } from "@/lib/seo";
import { companyMission } from "@/lib/ai-discovery";

export const metadata: Metadata = buildMetadata({
  title: "Hakkımızda",
  description: `${site.brand} — ${companyMission.mission}`,
  path: "/hakkimizda",
});

export default function HakkimizdaPage() {
  return (
    <>
      <JsonLd
        data={missionJsonLd({
          mission: companyMission.mission,
          values: companyMission.values,
          services: companyMission.services,
        })}
      />
      <AboutContent />
    </>
  );
}
