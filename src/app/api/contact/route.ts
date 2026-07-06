import { NextResponse } from "next/server";
import { Resend } from "resend";
import { site } from "@/lib/site";
import { rateLimit } from "@/lib/rate-limit";

function getResendClient(): Resend | null {
  const key = process.env["RESEND_API_KEY"]?.trim();
  return key ? new Resend(key) : null;
}

function getClientIp(request: Request): string {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    request.headers.get("x-real-ip") ??
    "unknown"
  );
}

function contactRecipient(): string[] {
  const raw =
    process.env.CONTACT_TO?.trim() ||
    process.env.CONTACT_EMAIL?.trim() ||
    site.email;
  return raw
    .split(",")
    .map((entry) => entry.trim())
    .filter(Boolean);
}

function contactFrom(): string {
  return process.env.RESEND_FROM?.trim() || `${site.brand} <onboarding@resend.dev>`;
}

function isProductionResendMisconfigured(): boolean {
  return (
    process.env.VERCEL === "1" &&
    !process.env.RESEND_FROM?.trim() &&
    Boolean(process.env.RESEND_API_KEY?.trim())
  );
}

function buildEmailHtml(payload: {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  product?: string;
}) {
  const rows = [
    ["Ad Soyad", payload.name],
    ["E-posta", payload.email],
    ["Telefon", payload.phone || "-"],
    ["Konu", payload.subject],
    ...(payload.product ? [["Ürün", payload.product] as const] : []),
  ];

  const table = rows
    .map(
      ([label, value]) =>
        `<tr><td style="padding:8px 12px;border:1px solid #e5e7eb;font-weight:600;background:#f8fafc">${label}</td><td style="padding:8px 12px;border:1px solid #e5e7eb">${value}</td></tr>`,
    )
    .join("");

  return `
    <div style="font-family:Arial,sans-serif;color:#111827;max-width:600px">
      <h2 style="color:#F46F2C;margin:0 0 16px">${site.brand} — Yeni iletişim formu</h2>
      <table style="border-collapse:collapse;width:100%;font-size:14px">${table}</table>
      <p style="margin:20px 0 8px;font-weight:600">Mesaj</p>
      <p style="margin:0;padding:12px;background:#f8fafc;border:1px solid #e5e7eb;border-radius:8px;white-space:pre-wrap">${payload.message}</p>
      <p style="margin:24px 0 0;font-size:12px;color:#6b7280">Yanıtlamak için bu e-postaya doğrudan cevap verebilirsiniz (Reply-To: ${payload.email}).</p>
    </div>
  `;
}

export async function POST(request: Request) {
  try {
    const ip = getClientIp(request);
    if (!rateLimit(ip)) {
      return NextResponse.json({ error: "Çok fazla istek. Lütfen bir dakika bekleyin." }, { status: 429 });
    }

    const body = await request.json();
    const { name, email, phone, subject, message, product, kvkkConsent } = body;
    const honeypot = body._gotcha ?? body.website;

    if (honeypot) {
      console.info("[SESAJANS Contact Honeypot]", { ip });
      return NextResponse.json({ ok: true });
    }

    if (!name || !email || !subject || !message || !kvkkConsent) {
      return NextResponse.json({ error: "Eksik alan" }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Geçersiz e-posta" }, { status: 400 });
    }

    const payload = { name, email, phone, subject, message, product, ip };
    const resend = getResendClient();

    if (isProductionResendMisconfigured()) {
      console.error("[SESAJANS Contact] RESEND_FROM tanımlı değil — doğrulanmış domain gerekli");
    }

    if (resend) {
      const productLine = product ? `\nÜrün: ${product}` : "";
      const to = contactRecipient();
      const { data, error } = await resend.emails.send({
        from: contactFrom(),
        to,
        replyTo: email,
        subject: `[${site.brand}] ${subject} — ${name}`,
        text: `Ad Soyad: ${name}\nE-posta: ${email}\nTelefon: ${phone ?? "-"}\nKonu: ${subject}${productLine}\n\nMesaj:\n${message}`,
        html: buildEmailHtml({ name, email, phone, subject, message, product }),
      });
      if (error) {
        console.error("[SESAJANS Contact Resend]", error);
        const detail = typeof error.message === "string" ? error.message : "Bilinmeyen hata";
        return NextResponse.json(
          { error: `E-posta gönderilemedi: ${detail}` },
          { status: 502 },
        );
      }
      console.info("[SESAJANS Contact Sent]", { id: data?.id, to });
      return NextResponse.json({ ok: true, sent: true });
    } else if (process.env.VERCEL === "1") {
      return NextResponse.json(
        {
          error:
            "İletişim formu şu an e-posta gönderemiyor. Lütfen telefon veya WhatsApp ile ulaşın; site yöneticisi RESEND_API_KEY ortam değişkenini tanımlamalıdır.",
        },
        { status: 503 },
      );
    } else {
      console.log("[SESAJANS Contact]", payload);
      return NextResponse.json({ ok: true, sent: true });
    }
  } catch (error) {
    console.error("[SESAJANS Contact Error]", error);
    return NextResponse.json({ error: "Sunucu hatası" }, { status: 500 });
  }
}
