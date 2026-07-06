# Proje Görselleri

Şu an proje kartları `public/products/` altındaki ürün görsellerini kullanıyor.
Gerçek saha/sahne fotoğrafları geldiğinde bu klasöre şu yapıyla ekleyin:

```
public/projects/<proje-slug>/image-01.jpg   (kapak, 4:3 veya 16:9, min 1200px genişlik)
public/projects/<proje-slug>/image-02.jpg
public/projects/<proje-slug>/image-03.jpg
```

Proje slug'ları `src/lib/projects.ts` dosyasındaki `slug` alanlarıdır
(ör. `harbiye-acikhava-konseri`).

Fotoğrafları ekledikten sonra `src/lib/projects.ts` içindeki ilgili projenin
`images` dizisini yeni yollarla güncelleyin:

```ts
images: [
  "/projects/harbiye-acikhava-konseri/image-01.jpg",
  "/projects/harbiye-acikhava-konseri/image-02.jpg",
],
```

Öneriler:

- Format: JPG veya WebP (WebP tercih edilir, daha küçük dosya)
- Boyut: uzun kenar 1600–2000px yeterli; 500KB altı hedefleyin
- İlk görsel (image-01) listeleme kartında kapak olarak kullanılır
