# SESAJANS Kurumsal Web Sitesi

Profesyonel sahne aydınlatma ürünleri için Next.js kurumsal web sitesi.

## Kurulum

```bash
cd web
npm install
npm run dev
```

Tarayıcı: http://localhost:3000

## Build

```bash
npm run build
npm start
```

## Yapı

- `src/lib/products.ts` — 9 ürün verisi
- `public/products/{slug}/` — ürün görselleri
- `public/downloads/{slug}/` — PDF kataloglar

## Ortam Değişkenleri

`.env.example` dosyasına bakın. İletişim formu şu an konsola log yazar; e-posta entegrasyonu eklenebilir.

## Deploy (sesajans.com.tr)

**Önerilen:** [DEPLOY-VERCEL.md](./DEPLOY-VERCEL.md)

**SEO kurulumu:** [SEO-SETUP.md](./SEO-SETUP.md)

Plesk (Node 20+ gerekir): [DEPLOY-PLESK.md](./DEPLOY-PLESK.md)
