"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { cn } from "@/lib/utils";
import { products } from "@/lib/products";
import { useI18n } from "@/lib/i18n/context";
import { trackEvent } from "@/components/Analytics";

type FormData = {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  product?: string;
  message: string;
  website?: string;
  kvkkConsent: boolean;
};

export function ContactForm() {
  const { t } = useI18n();
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const schema = z.object({
    name: z.string().min(2, t.contactForm.errors.name),
    email: z.string().email(t.contactForm.errors.email),
    phone: z.string().optional(),
    subject: z.string().min(1, t.contactForm.errors.subject),
    product: z.string().optional(),
    message: z.string().min(10, t.contactForm.errors.message),
    website: z.string().max(0).optional(),
    kvkkConsent: z.boolean().refine((v) => v === true, { message: t.contactForm.errors.kvkk }),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  async function onSubmit(data: FormData) {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("fail");
      trackEvent("contact_submit", { subject: data.subject });
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full rounded-xl border border-theme bg-surface-elevated/60 px-4 py-3 text-sm text-ink placeholder:text-ink-muted focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden
        {...register("website")}
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink-muted">
            {t.contactForm.name} *
          </label>
          <input className={inputClass} {...register("name")} />
          {errors.name && (
            <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>
          )}
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink-muted">
            {t.contactForm.email} *
          </label>
          <input type="email" className={inputClass} {...register("email")} />
          {errors.email && (
            <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>
          )}
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink-muted">
            {t.contactForm.phone}
          </label>
          <input className={inputClass} {...register("phone")} />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink-muted">
            {t.contactForm.subject} *
          </label>
          <select className={cn(inputClass, "appearance-none")} {...register("subject")}>
            <option value="">{t.contactForm.selectSubject}</option>
            {t.contactForm.subjects.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          {errors.subject && (
            <p className="mt-1 text-xs text-red-400">{errors.subject.message}</p>
          )}
        </div>
      </div>
      <div>
        <label className="mb-1.5 block text-sm font-medium text-ink-muted">
          {t.contactForm.product}
        </label>
        <select className={cn(inputClass, "appearance-none")} {...register("product")}>
          <option value="">{t.contactForm.selectProduct}</option>
          {products.map((p) => (
            <option key={p.slug} value={p.name}>
              {p.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="mb-1.5 block text-sm font-medium text-ink-muted">
          {t.contactForm.message} *
        </label>
        <textarea rows={5} className={inputClass} {...register("message")} />
        {errors.message && (
          <p className="mt-1 text-xs text-red-400">{errors.message.message}</p>
        )}
      </div>

      <label className="flex items-start gap-3 text-sm text-ink-muted">
        <input
          type="checkbox"
          className="mt-1 h-4 w-4 rounded border-theme accent-brand"
          {...register("kvkkConsent")}
        />
        <span>
          {t.contactForm.kvkkPrefix}{" "}
          <Link href="/kvkk-aydinlatma-metni" className="font-medium text-brand hover:underline">
            {t.footer.kvkk}
          </Link>
          {t.contactForm.kvkkSuffix}
        </span>
      </label>
      {errors.kvkkConsent && (
        <p className="text-xs text-red-400">{errors.kvkkConsent.message}</p>
      )}

      {status === "success" && (
        <p className="text-sm text-green-500">{t.contactForm.success}</p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-400">{t.contactForm.error}</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex h-11 w-full items-center justify-center rounded-xl bg-brand px-6 text-sm font-semibold text-white hover:bg-brand-dark disabled:opacity-50 sm:w-auto"
      >
        {status === "loading" ? t.contactForm.sending : t.contactForm.send}
      </button>
    </form>
  );
}
