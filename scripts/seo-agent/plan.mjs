import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { slugify } from "./lib/fetch-page.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "../..");
const reportsDir = path.join(root, "seo-agent/reports");
const queueDir = path.join(root, "seo-agent/queue");

function loadResearch() {
  const latest = path.join(reportsDir, "latest-research.json");
  if (!fs.existsSync(latest)) throw new Error("Önce npm run seo:research çalıştırın");
  return JSON.parse(fs.readFileSync(latest, "utf8"));
}

function avg(nums) {
  const v = nums.filter((n) => typeof n === "number" && n > 0);
  return v.length ? Math.round(v.reduce((a, b) => a + b, 0) / v.length) : 0;
}

function buildTasks(report) {
  const tasks = [];
  const okCompetitors = report.competitors.filter((c) => c.ok && c.homepage);

  const avgTitle = avg(okCompetitors.map((c) => c.homepage.titleLength));
  const avgDesc = avg(okCompetitors.map((c) => c.homepage.descriptionLength));
  const avgSitemap = avg(okCompetitors.map((c) => c.sitemap?.urlCount ?? 0));
  const competitorBlogPaths = okCompetitors.flatMap((c) => c.homepage.blogPathSamples ?? []);
  const hasCompetitorFaq = okCompetitors.some((c) => c.homepage.hasFaqSchema);
  const maxJsonLd = Math.max(0, ...okCompetitors.map((c) => c.homepage.jsonLdCount ?? 0));

  if (report.ourSite.blogCount < 8) {
    tasks.push({
      id: "grow-blog",
      priority: "high",
      type: "blog_stub",
      auto: true,
      title: "Blog içerik hacmini artır",
      reason: `Sitede ${report.ourSite.blogCount} blog yazısı var; rakipler blog/rehber URL yapısı kullanıyor.`,
      topics: report.seedKeywords.slice(0, 5).map((kw) => ({
        keyword: kw,
        slug: slugify(`${kw}-rehberi`),
        title: `${kw.charAt(0).toUpperCase() + kw.slice(1)} rehberi`,
      })),
    });
  }

  if (!report.ourSite.pages.categories) {
    tasks.push({
      id: "category-landing",
      priority: "high",
      type: "manual",
      auto: false,
      title: "Kategori landing sayfalarını genişlet",
      reason: "Rakipler ürün kategorisi URL derinliği kullanıyor.",
    });
  }

  if (hasCompetitorFaq && !report.ourSite.pages.faqSchema) {
    tasks.push({
      id: "faq-schema",
      priority: "medium",
      type: "manual",
      auto: false,
      title: "SSS FAQ schema güçlendir",
      reason: "Rakiplerde FAQPage schema tespit edildi.",
    });
  }

  if (maxJsonLd > 2) {
    tasks.push({
      id: "rich-schema",
      priority: "medium",
      type: "manual",
      auto: false,
      title: "Ürün ve makale schema zenginleştir",
      reason: `Rakip ortalama JSON-LD yoğunluğu yüksek (max ${maxJsonLd}).`,
    });
  }

  if (avgDesc > 140) {
    tasks.push({
      id: "meta-descriptions",
      priority: "medium",
      type: "manual",
      auto: false,
      title: "Meta description uzunluklarını optimize et",
      reason: `Rakip ortalama meta uzunluğu ~${avgDesc} karakter.`,
      targetLength: "140-160",
    });
  }

  if (avgSitemap > report.ourSite.productCount + report.ourSite.blogCount + 10) {
    tasks.push({
      id: "indexable-pages",
      priority: "high",
      type: "manual",
      auto: false,
      title: "İndekslenebilir sayfa sayısını artır",
      reason: `Rakip sitemap ortalaması ~${avgSitemap} URL; iç link ve landing sayfaları ekle.`,
    });
  }

  for (const kw of report.seedKeywords) {
    const covered = fs.existsSync(path.join(root, "content/blog"))
      ? fs
          .readdirSync(path.join(root, "content/blog"))
          .some((f) => f.includes(slugify(kw).slice(0, 12)))
      : false;
    if (!covered) {
      tasks.push({
        id: `kw-blog-${slugify(kw)}`,
        priority: "low",
        type: "blog_stub",
        auto: true,
        title: `Long-tail blog: ${kw}`,
        reason: "Anahtar kelime için özel içerik yok.",
        topics: [
          {
            keyword: kw,
            slug: slugify(`${kw}-sesajans-rehber`),
            title: `${kw.charAt(0).toUpperCase() + kw.slice(1)} — SESAJANS rehberi`,
          },
        ],
      });
    }
  }

  if (competitorBlogPaths.length > 0) {
    tasks.push({
      id: "competitor-blog-structure",
      priority: "low",
      type: "manual",
      auto: false,
      title: "Rakip blog URL yapısını incele",
      reason: `Örnek rakip blog yolları: ${competitorBlogPaths.slice(0, 3).join(", ")}`,
    });
  }

  return {
    generatedAt: new Date().toISOString(),
    benchmarks: { avgTitle, avgDesc, avgSitemap },
    tasks: tasks.sort((a, b) => {
      const p = { high: 0, medium: 1, low: 2 };
      return (p[a.priority] ?? 9) - (p[b.priority] ?? 9);
    }),
  };
}

function toMarkdown(plan, report) {
  const lines = [
    `# SESAJANS SEO Planı — ${plan.generatedAt.slice(0, 10)}`,
    "",
    "## Özet",
    `- Site: ${report.ourSite.url}`,
    `- Ürün: ${report.ourSite.productCount} | Blog: ${report.ourSite.blogCount}`,
    `- Rakip benchmark meta uzunluğu: ~${plan.benchmarks.avgDesc} karakter`,
    `- Rakip benchmark sitemap: ~${plan.benchmarks.avgSitemap} URL`,
    "",
    "## Görevler",
    "",
  ];

  for (const t of plan.tasks) {
    lines.push(`### [${t.priority.toUpperCase()}] ${t.title}`);
    lines.push(`- **Tür:** ${t.type} | **Otomatik:** ${t.auto ? "evet" : "hayır"}`);
    lines.push(`- **Neden:** ${t.reason}`);
    if (t.topics?.length) {
      lines.push("- **Konular:**");
      for (const topic of t.topics) {
        lines.push(`  - \`${topic.slug}\` — ${topic.title}`);
      }
    }
    lines.push("");
  }

  lines.push("## Cursor Agent sonraki adım");
  lines.push("1. `npm run seo:apply` ile otomatik görevleri uygula");
  lines.push("2. `manual` görevleri kodda uygula");
  lines.push("3. `npm run build` doğrula");
  lines.push("4. `git push` → Vercel deploy");
  return lines.join("\n");
}

function main() {
  fs.mkdirSync(queueDir, { recursive: true });
  fs.mkdirSync(reportsDir, { recursive: true });

  const report = loadResearch();
  const plan = buildTasks(report);
  const date = new Date().toISOString().slice(0, 10);

  const planJson = path.join(reportsDir, `plan-${date}.json`);
  const planMd = path.join(reportsDir, `plan-${date}.md`);

  fs.writeFileSync(planJson, JSON.stringify(plan, null, 2));
  fs.writeFileSync(planMd, toMarkdown(plan, report));
  fs.writeFileSync(path.join(reportsDir, "latest-plan.json"), JSON.stringify(plan, null, 2));
  fs.writeFileSync(path.join(reportsDir, "latest-plan.md"), toMarkdown(plan, report));
  fs.writeFileSync(path.join(queueDir, "pending.json"), JSON.stringify(plan.tasks, null, 2));

  console.log(`[seo:plan] ${plan.tasks.length} görev oluşturuldu`);
  console.log(`[seo:plan] ${path.relative(root, planMd)}`);
}

main();
