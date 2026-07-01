# sesajans.com.tr — Vercel Deploy Rehberi

## 1) GitHub’a yükle

PowerShell (proje klasöründe):

```powershell
cd "C:\Users\kacma\OneDrive\Masaüstü\SESAJANS\web"
git init
git add .
git commit -m "SESAJANS kurumsal site"
```

GitHub’da yeni repo oluştur (ör. `sesajans-web`), sonra:

```powershell
git branch -M main
git remote add origin https://github.com/KULLANICI/sesajans-web.git
git push -u origin main
```

---

## 2) Vercel’e bağla

1. [vercel.com](https://vercel.com) → GitHub ile giriş
2. **Add New → Project**
3. Repoyu seç
4. Ayarlar:

| Ayar | Değer |
|------|--------|
| Framework | Next.js (otomatik) |
| Root Directory | `.` (repo kökü `web` ise boş; repo `SESAJANS` ise `web`) |
| Build Command | `npm run build` |
| Output | (varsayılan) |

5. **Environment Variables:**

| Name | Value |
|------|--------|
| `NEXT_PUBLIC_SITE_URL` | `https://sesajans.com.tr` |
| `CONTACT_EMAIL` | `info@sesajans.com.tr` |

6. **Deploy** → `*.vercel.app` adresinde site açılır

---

## 3) Domain ekle (Vercel)

Proje → **Settings → Domains**

- `sesajans.com.tr`
- `www.sesajans.com.tr`

Vercel DNS kayıtlarını gösterir (örnek):

| Tip | Host | Değer |
|-----|------|--------|
| **A** | `@` | `76.76.21.21` |
| **CNAME** | `www` | `cname.vercel-dns.com` |

*(Paneldeki güncel değerleri kullanın.)*

---

## 4) Natro DNS güncelle

Natro → `sesajans.com.tr` → DNS:

1. **A** `@` → Vercel’in verdiği IP (şu an `194.36.84.221` yerine Vercel IP)
2. **www** → CNAME `cname.vercel-dns.com` (veya Vercel’in söylediği)
3. Eski `redirect.natrocdn.com` kaydını sil

SPF (TXT) e-posta için — dokunmayın.

Yayılma: 15 dk – 24 saat.

---

## 5) SSL

Vercel otomatik HTTPS verir. Natro/Plesk SSL’e gerek kalmaz.

---

## 6) Güncelleme

```powershell
git add .
git commit -m "Güncelleme"
git push
```

Vercel otomatik yeniden deploy eder.

---

## CLI ile deploy (GitHub olmadan)

```powershell
npm i -g vercel
cd web
vercel login
vercel --prod
```

Domain yine Vercel panelinden bağlanır.

---

## E-posta (Natro)

Site Vercel’de, mail Natro’da kalabilir:

- Natro → `info@sesajans.com.tr` kutusu
- MX kayıtları Natro’da kalsın

İletişim formu e-posta gönderimi için ileride `RESEND_API_KEY` eklenebilir.
