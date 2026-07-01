import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const standalone = path.join(root, ".next", "standalone");

if (!fs.existsSync(path.join(standalone, "server.js"))) {
  console.error("Önce standalone build alın: DEPLOY_STANDALONE=true npm run build");
  process.exit(1);
}

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const from = path.join(src, entry.name);
    const to = path.join(dest, entry.name);
    if (entry.isDirectory()) copyDir(from, to);
    else fs.copyFileSync(from, to);
  }
}

copyDir(path.join(root, "public"), path.join(standalone, "public"));
fs.mkdirSync(path.join(standalone, ".next"), { recursive: true });
copyDir(path.join(root, ".next", "static"), path.join(standalone, ".next", "static"));

console.log("Plesk hazır:", standalone);
console.log("Startup file: .next/standalone/server.js");
