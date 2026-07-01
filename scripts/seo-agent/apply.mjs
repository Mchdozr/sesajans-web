import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import { fileURLToPath } from "url";
import { buildBlogMdx } from "./lib/blog-template.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "../..");
const config = JSON.parse(fs.readFileSync(path.join(root, "seo-agent/config.json"), "utf8"));
const queuePath = path.join(root, "seo-agent/queue/pending.json");
const blogDir = path.join(root, "content/blog");
const appliedLog = path.join(root, "seo-agent/queue/applied-log.json");

function loadPlan() {
  if (!fs.existsSync(queuePath)) throw new Error("Önce npm run seo:plan çalıştırın");
  return JSON.parse(fs.readFileSync(queuePath, "utf8"));
}

function loadApplied() {
  if (!fs.existsSync(appliedLog)) return [];
  return JSON.parse(fs.readFileSync(appliedLog, "utf8"));
}

function saveApplied(entries) {
  fs.writeFileSync(appliedLog, JSON.stringify(entries, null, 2));
}

function createBlogStub(topic) {
  const filePath = path.join(blogDir, `${topic.slug}.mdx`);
  if (fs.existsSync(filePath)) {
    return { slug: topic.slug, action: "skipped_exists" };
  }

  const content = buildBlogMdx(topic, config);

  fs.mkdirSync(blogDir, { recursive: true });
  fs.writeFileSync(filePath, content);
  return { slug: topic.slug, action: "created", path: filePath };
}

function main() {
  const tasks = loadPlan();
  const applied = loadApplied();
  const results = [];
  let createdBlogs = 0;
  const maxBlogs = config.autoApply?.maxBlogStubsPerRun ?? 2;

  for (const task of tasks) {
    if (!task.auto || !config.autoApply?.blogStubs) continue;
    if (task.type !== "blog_stub" || !task.topics?.length) continue;

    for (const topic of task.topics) {
      if (createdBlogs >= maxBlogs) break;
      const result = createBlogStub(topic);
      results.push({ taskId: task.id, ...result });
      if (result.action === "created") {
        createdBlogs += 1;
        applied.push({
          at: new Date().toISOString(),
          taskId: task.id,
          type: "blog_stub",
          slug: topic.slug,
        });
      }
    }
  }

  saveApplied(applied);

  if (config.autoApply?.requireBuildPass && createdBlogs > 0) {
    console.log("[seo:apply] Build doğrulanıyor...");
    execSync("npm run build", { cwd: root, stdio: "inherit", env: { ...process.env, NEXT_PUBLIC_SITE_URL: config.siteUrl } });
  }

  const summaryPath = path.join(root, "seo-agent/reports/latest-apply.json");
  fs.writeFileSync(
    summaryPath,
    JSON.stringify({ generatedAt: new Date().toISOString(), createdBlogs, results }, null, 2),
  );

  console.log(`[seo:apply] ${createdBlogs} yeni blog taslağı oluşturuldu`);
  for (const r of results) {
    console.log(`  - ${r.slug}: ${r.action}`);
  }
}

main();
