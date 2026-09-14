import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

const AI_CRAWLERS = [
  "GPTBot",
  "ChatGPT-User",
  "ClaudeBot",
  "anthropic-ai",
  "PerplexityBot",
  "Google-Extended",
] as const;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...AI_CRAWLERS.map((userAgent) => ({ userAgent, allow: "/" as const })),
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url.replace(/^https:\/\//, ""),
  };
}
