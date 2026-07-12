#!/usr/bin/env node
/**
 * KPI monitoring template — paste GSC export data or run weekly.
 * Usage: node scripts/monitor-kpi.mjs
 */

import { readFileSync, writeFileSync, existsSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const kpiFile = join(root, "monitoring/kpi-log.json");
const targetsDir = join(root, "monitoring");
mkdirSync(targetsDir, { recursive: true });

const TARGETS = {
  keyword: "led ekran",
  rank: { current: 5, day30: 3, day90: 1 },
  ctr: { day30: "+20%", day90: "+40%" },
  organicClicks: { day30: "+30%", day90: "+80%" },
  lcp: { current: ">4s", day30: "<3s", day90: "<2.5s" },
  indexedPages: { current: 210, day30: 190, day90: 200 },
};

const QUERIES_TO_TRACK = [
  "led ekran",
  "led ekran fiyatları",
  "led ekran kiralama",
  "iç mekan led ekran",
  "dış mekan led ekran",
  "rental led ekran",
  "led ekran kurulum",
  "led ekran istanbul",
];

const WEEKLY_ROUTINE = [
  { day: "Pazartesi", task: "GSC performans raporu — 'led ekran' sorgusu pozisyon ve CTR" },
  { day: "Çarşamba", task: "1 içerik güncelleme veya yeni blog yayını" },
  { day: "Cuma", task: "PageSpeed Insights — Core Web Vitals kontrol" },
  { day: "Ay sonu", task: "Rakip SERP snapshot + backlink raporu" },
];

let log = [];
if (existsSync(kpiFile)) {
  log = JSON.parse(readFileSync(kpiFile, "utf8"));
}

const entry = {
  date: new Date().toISOString().slice(0, 10),
  targets: TARGETS,
  queries: QUERIES_TO_TRACK,
  routine: WEEKLY_ROUTINE,
  notes: "GSC verisi manuel girilmeli — search.google.com/search-console",
  gsc: {
    clicks: null,
    impressions: null,
    ctr: null,
    position: null,
  },
  pagespeed: {
    lcp: null,
    inp: null,
    cls: null,
    htmlSizeKb: null,
  },
};

log.push(entry);
writeFileSync(kpiFile, JSON.stringify(log, null, 2));

console.log("KPI log updated:", kpiFile);
console.log("\nTargets:");
console.log(JSON.stringify(TARGETS, null, 2));
console.log("\nWeekly routine:");
WEEKLY_ROUTINE.forEach((r) => console.log(`  ${r.day}: ${r.task}`));
console.log("\nGSC setup:");
console.log("  1. https://search.google.com/search-console → ledajans.com");
console.log("  2. Sitemap: https://ledajans.com/sitemap_index.xml");
console.log("  3. Track queries:", QUERIES_TO_TRACK.join(", "));
