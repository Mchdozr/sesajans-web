import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

const aiCrawlers = [
  "GPTBot",
  "ChatGPT-User",
  "ClaudeBot",
  "anthropic-ai",
  "PerplexityBot",
  "Google-Extended",
  "Applebot-Extended",
  "cohere-ai",
] as const;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...aiCrawlers.map((userAgent) => ({ userAgent, allow: "/" as const })),
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
