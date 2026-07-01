# SESAJANS SEO Ajanı

Rakip sahne aydınlatma sitelerini tarar, SEO planı üretir, güvenli değişiklikleri koda uygular.

## Kurulum

1. `seo-agent/config.json` → rakip URL'lerini ekle
2. Terminal: `npm run seo:run`

## Komutlar

| Komut | Açıklama |
|-------|----------|
| `npm run seo:research` | Rakip + site analizi |
| `npm run seo:plan` | Görev planı (MD + JSON) |
| `npm run seo:apply` | Otomatik blog taslakları |
| `npm run seo:run` | Üçünü sırayla çalıştırır |

## Çıktı dosyaları

```
seo-agent/
  config.json          # Rakipler, anahtar kelimeler
  reports/
    latest-research.json
    latest-plan.md     # İnsan okunur plan
  queue/
    pending.json       # Uygulanacak görevler
    applied-log.json   # Otomatik uygulama geçmişi
```

## Cursor ile kullanım

Chat'te: **"SEO ajanını çalıştır"** veya skill: `sesajans-seo-agent`

Agent şunları yapar:
1. `npm run seo:run`
2. `latest-plan.md` görevlerini uygular
3. Build + push

## Haftalık Cursor Automation

1. Cursor → **Automations** → Yeni
2. **Trigger:** Her Pazartesi 09:00 (cron)
3. **Repo:** `Mchdozr/sesajans-web`, branch `main`
4. **Prompt özeti:**

```
SESAJANS SEO Ajanı skill'ini uygula.
1) npm run seo:run (web klasörü)
2) seo-agent/reports/latest-plan.md oku
3) high priority manual görevleri koda uygula
4) Blog taslaklarını zenginleştir
5) npm run build doğrula
6) commit + push origin main
Rapor özeti yazma; sadece yapılan değişiklikleri listele.
```

## Güvenlik

- Otomatik apply sadece yeni blog taslağı oluşturur
- Mevcut dosyaların üzerine yazmaz (slug varsa atlar)
- `requireBuildPass: true` → apply sonrası build zorunlu
