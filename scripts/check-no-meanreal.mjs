import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const BLOCKED = [/meanreal/i, /mean-real/i, /mean_real/i];
const TEXT_EXT = new Set([".ts", ".tsx", ".mdx", ".md", ".json", ".html", ".css"]);
const SCAN_DIRS = ["src", "content", "public", "seo-agent"];
const skipDirs = new Set(["node_modules", ".next", ".git"]);

function walk(dir, files = []) {
  if (!fs.existsSync(dir)) return files;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (skipDirs.has(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, files);
    else files.push(full);
  }
  return files;
}

const hits = [];
for (const dir of SCAN_DIRS) {
  for (const file of walk(path.join(root, dir))) {
    const ext = path.extname(file).toLowerCase();
    if (!TEXT_EXT.has(ext)) continue;
    const text = fs.readFileSync(file, "utf8");
    for (const pattern of BLOCKED) {
      if (pattern.test(text)) {
        hits.push(path.relative(root, file));
        break;
      }
    }
  }
}

if (hits.length > 0) {
  console.error("[brand:check] Yasaklı marka metni bulundu:");
  for (const h of hits) console.error(`  - ${h}`);
  process.exit(1);
}

console.log("[brand:check] Yayın içeriğinde MEANReal yok. Spec PNG ve üretici PDF kapalı.");
process.exit(0);
