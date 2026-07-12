#!/usr/bin/env node
/**
 * Generate Elementor-ready HTML for city landing pages from city-landings.json
 * Usage: node scripts/generate-city-landings.mjs
 */

import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const data = JSON.parse(readFileSync(join(root, "data/city-landings.json"), "utf8"));
const outDir = join(root, "content/city-landings");
mkdirSync(outDir, { recursive: true });

for (const city of data) {
  const faqHtml = city.faqs
    .map(
      (f) => `  <details>
    <summary>${f.q}</summary>
    <p>${f.a}</p>
  </details>`
    )
    .join("\n");

  const sectionsHtml = city.sections
    .map(
      (s) => `  <h2>${s.title}</h2>
  <p>${s.body}</p>`
    )
    .join("\n\n");

  const html = `<!-- ${city.city} LED Ekran Landing — Elementor HTML Widget -->
<!-- SEO Title: ${city.seoTitle} -->
<!-- Meta Description: ${city.seoDescription} -->
<!-- Slug: ${city.slug} -->
<section class="ledajans-city-landing" aria-label="${city.city} LED Ekran">
  <h1>${city.city} LED Ekran Satış, Kiralama ve Kurulum</h1>
  <p class="city-intro">${city.intro}</p>

  <div class="city-cta">
    <a href="/iletisim/">${city.city} LED Ekran Teklifi Al</a>
    <a href="/led-ekran/">LED Ekran Fiyatları</a>
    <a href="tel:+902122204004">0212 220 40 04</a>
  </div>

${sectionsHtml}

  <h2>${city.city} LED Ekran Hizmet Bölgeleri</h2>
  <p>
    LEDAJANS olarak <a href="/">${city.city}</a> ve çevresinde iç mekan, dış mekan ve rental LED ekran
    projeleri için keşif, kurulum ve teknik destek sunuyoruz.
    <a href="/ic-mekan-led-ekran/">İç mekan</a>,
    <a href="/dis-mekan-led-ekran/">dış mekan</a> ve
    <a href="/rental-ekran/">rental</a> çözümlerimizi inceleyin.
  </p>

  <h2>${city.city} LED Ekran — Sık Sorulan Sorular</h2>
${faqHtml}

  <p class="city-keywords" hidden>${city.keywords.join(", ")}</p>
</section>
`;

  writeFileSync(join(outDir, `${city.slug}.html`), html, "utf8");
  console.log(`Generated: content/city-landings/${city.slug}.html`);
}

console.log(`Done — ${data.length} city landing pages.`);
