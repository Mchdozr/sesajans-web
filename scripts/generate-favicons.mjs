import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const source = path.join(root, "public/brand/sesajans-favicon-source.png");
const white = { r: 255, g: 255, b: 255, alpha: 1 };

const outputs = [
  { file: "public/brand/favicon-512.png", size: 512 },
  { file: "public/apple-touch-icon.png", size: 180 },
  { file: "public/favicon-48.png", size: 48 },
  { file: "src/app/icon.png", size: 48 },
  { file: "src/app/apple-icon.png", size: 180 },
  { file: "public/favicon.ico", size: 32 },
];

await mkdir(path.dirname(source), { recursive: true });

for (const { file, size } of outputs) {
  const out = path.join(root, file);
  await mkdir(path.dirname(out), { recursive: true });
  await sharp(source)
    .resize(size, size, { fit: "contain", background: white })
    .png()
    .toFile(out);
  console.log("wrote", file);
}
