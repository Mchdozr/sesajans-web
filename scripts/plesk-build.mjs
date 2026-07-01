import { spawnSync } from "child_process";
import path from "path";
import { fileURLToPath } from "url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");

const env = {
  ...process.env,
  DEPLOY_STANDALONE: "true",
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL ?? "https://sesajans.com.tr",
};

const build = spawnSync("npm", ["run", "build"], {
  cwd: root,
  env,
  stdio: "inherit",
  shell: true,
});

if (build.status !== 0) process.exit(build.status ?? 1);

const prepare = spawnSync("node", ["scripts/prepare-standalone.mjs"], {
  cwd: root,
  stdio: "inherit",
  shell: true,
});

process.exit(prepare.status ?? 1);
