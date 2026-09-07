import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

const aiCrawlers = [
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "ClaudeBot",
  "anthropic-ai",
  "PerplexityBot",
  "Google-Extended",
  "Applebot-Extended",
  "cohere-ai",
] as const;

export default function robots(): MetadataRoute.Robots {
  const allowAll = { userAgent: "*", allow: "/" };
  const allowAi = aiCrawlers.map((userAgent) => ({
    userAgent,
    allow: "/",
  }));

  return {
    rules: [allowAll, ...allowAi],
    sitemap: `${site.url}/sitemap.xml`,
  };
}
