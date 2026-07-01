export async function fetchText(url, timeoutMs = 15000) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetch(url, {
      signal: controller.signal,
      headers: {
        "User-Agent": "SESAJANS-SEO-Agent/1.0 (+https://sesajans.com.tr)",
        Accept: "text/html,application/xml,text/xml,*/*",
      },
      redirect: "follow",
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.text();
  } finally {
    clearTimeout(timer);
  }
}

export function extractSeoSignals(html, baseUrl) {
  const title = html.match(/<title[^>]*>([^<]*)<\/title>/i)?.[1]?.trim() ?? "";
  const description =
    html.match(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']*)["']/i)?.[1]?.trim() ??
    html.match(/<meta[^>]+content=["']([^"']*)["'][^>]+name=["']description["']/i)?.[1]?.trim() ??
    "";
  const h1 = html.match(/<h1[^>]*>([^<]*)<\/h1>/i)?.[1]?.replace(/<[^>]+>/g, "").trim() ?? "";
  const ogTitle =
    html.match(/<meta[^>]+property=["']og:title["'][^>]+content=["']([^"']*)["']/i)?.[1]?.trim() ?? "";
  const canonical =
    html.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']*)["']/i)?.[1]?.trim() ?? "";

  const internalLinks = new Set();
  const blogHints = [];
  const productHints = [];

  for (const m of html.matchAll(/<a[^>]+href=["']([^"'#]+)["']/gi)) {
    let href = m[1];
    try {
      const abs = new URL(href, baseUrl);
      if (abs.hostname === new URL(baseUrl).hostname) {
        internalLinks.add(abs.pathname);
        const p = abs.pathname.toLowerCase();
        if (/\/(blog|rehber|haber|yazi|makale)/.test(p)) blogHints.push(p);
        if (/\/(urun|product|urunler|products)/.test(p)) productHints.push(p);
      }
    } catch {
      /* ignore bad urls */
    }
  }

  const jsonLdCount = (html.match(/application\/ld\+json/gi) ?? []).length;
  const hasFaqSchema = /FAQPage/i.test(html);

  return {
    title,
    titleLength: title.length,
    description,
    descriptionLength: description.length,
    h1,
    ogTitle,
    canonical,
    internalLinkCount: internalLinks.size,
    blogPathSamples: [...new Set(blogHints)].slice(0, 8),
    productPathSamples: [...new Set(productHints)].slice(0, 8),
    jsonLdCount,
    hasFaqSchema,
  };
}

export async function fetchSitemapStats(siteUrl) {
  const candidates = ["/sitemap.xml", "/sitemap_index.xml"];
  for (const path of candidates) {
    try {
      const xml = await fetchText(new URL(path, siteUrl).href);
      const urls = (xml.match(/<loc>/gi) ?? []).length;
      if (urls > 0) return { found: true, path, urlCount: urls };
    } catch {
      /* try next */
    }
  }
  return { found: false, path: null, urlCount: 0 };
}

export function slugify(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ğ/g, "g")
    .replace(/ü/g, "u")
    .replace(/ş/g, "s")
    .replace(/ı/g, "i")
    .replace(/ö/g, "o")
    .replace(/ç/g, "c")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 80);
}
