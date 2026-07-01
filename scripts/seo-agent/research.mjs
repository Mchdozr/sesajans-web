import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { fetchText, extractSeoSignals, fetchSitemapStats } from "./lib/fetch-page.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "../..");
const config = JSON.parse(fs.readFileSync(path.join(root, "seo-agent/config.json"), "utf8"));
const reportsDir = path.join(root, "seo-agent/reports");

function readOurSiteSignals() {
  const productsTs = fs.readFileSync(path.join(root, "src/lib/products.ts"), "utf8");
  const productCount = (productsTs.match(/slug:/g) ?? []).length;
  const blogDir = path.join(root, "content/blog");
  const blogCount = fs.existsSync(blogDir)
    ? fs.readdirSync(blogDir).filter((f) => f.endsWith(".mdx")).length
    : 0;
  const sitemapTs = fs.readFileSync(path.join(root, "src/app/sitemap.ts"), "utf8");
  const hasBlogInSitemap = sitemapTs.includes("blog");
  const hasCategoryInSitemap = sitemapTs.includes("kategori");

  return {
    productCount,
    blogCount,
    hasBlogInSitemap,
    hasCategoryInSitemap,
    pages: {
      blog: fs.existsSync(path.join(root, "src/app/blog/page.tsx")),
      categories: fs.existsSync(path.join(root, "src/app/urunler/kategori")),
      faqSchema: fs.existsSync(path.join(root, "src/lib/sss-faqs.ts")),
    },
  };
}

async function analyzeCompetitor(competitor) {
  const base = competitor.url.replace(/\/$/, "");
  const result = {
    name: competitor.name,
    url: base,
    ok: false,
    error: null,
    homepage: null,
    sitemap: null,
  };

  try {
    const html = await fetchText(base);
    result.homepage = extractSeoSignals(html, base);
    result.sitemap = await fetchSitemapStats(base);
    result.ok = true;
  } catch (e) {
    result.error = e instanceof Error ? e.message : String(e);
  }

  return result;
}

async function main() {
  fs.mkdirSync(reportsDir, { recursive: true });
  const date = new Date().toISOString().slice(0, 10);

  console.log("[seo:research] Rakipler taranıyor...");
  const competitors = [];
  for (const c of config.competitors) {
    console.log(`  → ${c.url}`);
    competitors.push(await analyzeCompetitor(c));
  }

  const ourSite = readOurSiteSignals();
  const report = {
    generatedAt: new Date().toISOString(),
    date,
    ourSite: {
      url: config.siteUrl,
      brand: config.brand,
      ...ourSite,
    },
    competitors,
    seedKeywords: config.seedKeywords,
  };

  const outPath = path.join(reportsDir, `research-${date}.json`);
  fs.writeFileSync(outPath, JSON.stringify(report, null, 2));
  fs.writeFileSync(path.join(reportsDir, "latest-research.json"), JSON.stringify(report, null, 2));

  console.log(`[seo:research] Kaydedildi: ${path.relative(root, outPath)}`);
  return report;
}

main().catch((e) => {
  console.error("[seo:research] Hata:", e);
  process.exit(1);
});
