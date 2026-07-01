import type { Metadata } from "next";
import { ProjectsContent } from "@/components/ProjectsContent";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Aydınlatma Projeleri ve Referanslar",
  description:
    "Konser, festival, fuar ve kurumsal etkinlik aydınlatma uygulama örnekleri.",
  path: "/projeler",
});

export default function ProjelerPage() {
  return <ProjectsContent />;
}
