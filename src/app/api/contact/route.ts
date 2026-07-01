import { NextResponse } from "next/server";
import { Resend } from "resend";
import { site } from "@/lib/site";
import { rateLimit } from "@/lib/rate-limit";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

function getClientIp(request: Request): string {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    request.headers.get("x-real-ip") ??
    "unknown"
  );
}

export async function POST(request: Request) {
  try {
    const ip = getClientIp(request);
    if (!rateLimit(ip)) {
      return NextResponse.json({ error: "Çok fazla istek. Lütfen bir dakika bekleyin." }, { status: 429 });
    }

    const body = await request.json();
    const { name, email, phone, subject, message, product, website, kvkkConsent } = body;

    if (website) {
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

    if (resend) {
      const productLine = product ? `\nÜrün: ${product}` : "";
      await resend.emails.send({
        from: process.env.RESEND_FROM ?? `${site.brand} <onboarding@resend.dev>`,
        to: site.email,
        replyTo: email,
        subject: `[${site.brand}] ${subject} — ${name}`,
        text: `Ad Soyad: ${name}\nE-posta: ${email}\nTelefon: ${phone ?? "-"}\nKonu: ${subject}${productLine}\n\nMesaj:\n${message}`,
      });
    } else {
      console.log("[SESAJANS Contact]", payload);
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[SESAJANS Contact Error]", error);
    return NextResponse.json({ error: "Sunucu hatası" }, { status: 500 });
  }
}
