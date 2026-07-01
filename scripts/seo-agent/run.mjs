import { execSync } from "child_process";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "../..");

const steps = [
  { name: "research", script: "research.mjs" },
  { name: "plan", script: "plan.mjs" },
  { name: "apply", script: "apply.mjs" },
];

for (const step of steps) {
  console.log(`\n========== seo:${step.name} ==========\n`);
  execSync(`node scripts/seo-agent/${step.script}`, { cwd: root, stdio: "inherit" });
}

console.log("\n[seo:run] Tamamlandı. seo-agent/reports/latest-plan.md dosyasını inceleyin.");
