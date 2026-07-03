import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.brand} — Profesyonel Sahne Aydınlatma`,
    short_name: site.brand,
    description: site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0f",
    theme_color: "#F46F2C",
    lang: "tr",
    icons: [
      {
        src: "/icon.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/favicon-48.png",
        sizes: "48x48",
        type: "image/png",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
      {
        src: "/brand/favicon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
