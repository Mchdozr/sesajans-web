#!/usr/bin/env node
/**
 * LEDAJANS SEO audit script — checks live site health metrics.
 * Usage: node scripts/audit-site.mjs
 */

const SITE = "https://ledajans.com";
const PAGES = [
  { path: "/", name: "Ana Sayfa" },
  { path: "/led-ekran/", name: "Hub" },
  { path: "/led-ekran-nedir/", name: "Cornerstone" },
  { path: "/ic-mekan-led-ekran/", name: "İç Mekan" },
  { path: "/bursa-led-ekran/", name: "Bursa" },
];

const REDIRECT_CHECKS = [
  { from: "/blog/led-ekran-fiyatlari-2026/", expect: "/led-ekran/" },
  { from: "/blog/led-ekran-4/", expect: "/led-ekran/" },
];

async function fetchPage(path) {
  const url = `${SITE}${path}`;
  const res = await fetch(url, { redirect: "follow" });
  const html = await res.text();
  return { url, status: res.status, html, finalUrl: res.url };
}

function extractSeo(html) {
  const title = html.match(/<title[^>]*>([^<]*)</i)?.[1]?.trim() ?? "";
  const desc = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["']/i)?.[1] ?? "";
  const canonical = html.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']*)["']/i)?.[1] ?? "";
  const h1count = (html.match(/<h1[^>]*>/gi) ?? []).length;
  const schemaCount = (html.match(/application\/ld\+json/gi) ?? []).length;
  const hasFaq = html.includes("FAQPage");
  const hasLoading = html.includes("Yükleniyor");
  const ledEkranCount = (html.match(/led ekran/gi) ?? []).length;
  return { title, desc, canonical, h1count, schemaCount, hasFaq, hasLoading, ledEkranCount, size: html.length };
}

async function checkRedirect(from, expectPath) {
  const res = await fetch(`${SITE}${from}`, { redirect: "manual" });
  const location = res.headers.get("location") ?? "";
  const ok = res.status === 301 && location.includes(expectPath);
  return { from, status: res.status, location, ok };
}

async function main() {
  console.log(`\nLEDAJANS SEO Audit — ${new Date().toISOString()}\n`);

  for (const page of PAGES) {
    try {
      const { status, html, url } = await fetchPage(page.path);
      const seo = extractSeo(html);
      console.log(`## ${page.name} (${page.path})`);
      console.log(`   Status: ${status} | Size: ${(seo.size / 1024).toFixed(1)} KB`);
      console.log(`   Title: ${seo.title.slice(0, 70)}`);
      console.log(`   H1 count: ${seo.h1count} | Schema blocks: ${seo.schemaCount} | FAQ: ${seo.hasFaq}`);
      console.log(`   "led ekran" mentions: ${seo.ledEkranCount} | AJAX loading: ${seo.hasLoading}`);
      console.log(`   Canonical: ${seo.canonical}`);
      console.log("");
    } catch (err) {
      console.log(`## ${page.name} — ERROR: ${err.message}`);
    }
  }

  console.log("## Redirect Checks");
  for (const check of REDIRECT_CHECKS) {
    try {
      const result = await checkRedirect(check.from, check.expect);
      console.log(`   ${result.ok ? "✓" : "✗"} ${check.from} → ${result.status} ${result.location}`);
    } catch (err) {
      console.log(`   ✗ ${check.from} — ${err.message}`);
    }
  }

  console.log("\nAudit complete.\n");
}

main().catch(console.error);
