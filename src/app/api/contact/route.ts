import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Eksik alan" }, { status: 400 });
    }

    // TODO: E-posta servisi (Resend, SMTP vb.) entegrasyonu
    console.log("[SESAJANS Contact]", { name, email, phone, subject, message });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Sunucu hatası" }, { status: 500 });
  }
}
