import fs from "fs";

const comparisonsPath = "src/lib/comparisons.ts";
let c = fs.readFileSync(comparisonsPath, "utf8");
c = c.replace(
  /seoTitle: "([^"]+) — Karşılaştırma"/g,
  'seoTitle: "$1 — Hangisini Almalısınız? | Ücretsiz Teklif"',
);
fs.writeFileSync(comparisonsPath, c);

const localPath = "src/lib/local-seo.ts";
let l = fs.readFileSync(localPath, "utf8");
const cityMap = [
  ['seoTitle: "İstanbul Sahne Aydınlatma — SESAJANS Şişli"', 'seoTitle: "İstanbul Sahne Aydınlatma Distribütörü | Teklif"'],
  ['seoTitle: "Ankara Sahne Aydınlatma — SESAJANS"', 'seoTitle: "Ankara Sahne Aydınlatma Distribütörü | Teklif"'],
  ['seoTitle: "İzmir Sahne Aydınlatma — SESAJANS"', 'seoTitle: "İzmir Sahne Aydınlatma Distribütörü | Teklif"'],
  ['seoTitle: "Antalya Sahne Aydınlatma — SESAJANS"', 'seoTitle: "Antalya Sahne Aydınlatma Distribütörü | Teklif"'],
  ['seoTitle: "Bursa Sahne Aydınlatma — SESAJANS"', 'seoTitle: "Bursa Sahne Aydınlatma Distribütörü | Teklif"'],
  ['seoTitle: "Adana Sahne Aydınlatma — SESAJANS"', 'seoTitle: "Adana Sahne Aydınlatma Distribütörü | Teklif"'],
  ['seoTitle: "Gaziantep Sahne Aydınlatma — SESAJANS"', 'seoTitle: "Gaziantep Sahne Aydınlatma Distribütörü | Teklif"'],
  ['seoTitle: "Kocaeli Sahne Aydınlatma — SESAJANS"', 'seoTitle: "Kocaeli Sahne Aydınlatma Distribütörü | Teklif"'],
];
for (const [from, to] of cityMap) {
  if (!l.includes(from)) console.warn("missing", from);
  l = l.replace(from, to);
}
fs.writeFileSync(localPath, l);
console.log("patched");
