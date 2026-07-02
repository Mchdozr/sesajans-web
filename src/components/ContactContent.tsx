"use client";

import type { ComponentType } from "react";
import { Phone, Mail, MapPin, Clock, ArrowUpRight } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/site";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { useI18n } from "@/lib/i18n/context";

type ContactChannel = {
  icon: ComponentType<{ className?: string }>;
  title: string;
  value: string;
  href: string;
  external?: boolean;
};

export function ContactContent() {
  const { t } = useI18n();

  const channels: ContactChannel[] = [
    { icon: Phone, title: t.contactPage.phone, value: site.phoneDisplay, href: `tel:${site.phone}` },
    {
      icon: WhatsAppIcon,
      title: t.contactPage.whatsapp,
      value: site.phoneDisplay,
      href: `https://wa.me/${site.whatsapp}`,
      external: true,
    },
    { icon: Mail, title: t.contactPage.email, value: site.email, href: `mailto:${site.email}` },
  ];

  return (
    <>
      <PageHeader
        eyebrow={t.contactPage.eyebrow}
        title={t.contactPage.title}
        description={t.contactPage.description}
        breadcrumb={[{ name: t.nav.contact, path: "/iletisim" }]}
      />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <h2 className="font-display text-xl font-bold text-ink">{t.contactPage.sendMessage}</h2>
              <p className="mt-2 text-sm text-ink-muted">{t.contactPage.sendMessageDesc}</p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>

            <div className="glow-border flex flex-col rounded-3xl border border-theme bg-surface-elevated/80 p-6 sm:p-8">
              <div>
                <h2 className="font-display text-xl font-bold text-ink">{t.contactPage.officeInfo}</h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{t.contactPage.officeInfoDesc}</p>
              </div>

              <div className="mt-6 grid gap-3">
                {channels.map((c) => (
                  <a
                    key={c.title}
                    href={c.href}
                    target={c.external ? "_blank" : undefined}
                    rel={c.external ? "noopener noreferrer" : undefined}
                    className="group flex items-center gap-4 rounded-2xl border border-theme bg-surface/60 p-4 transition-all hover:border-brand/40 hover:bg-brand/5"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand/15 text-brand">
                      <c.icon className="h-5 w-5" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-xs font-semibold uppercase tracking-wider text-ink-muted">
                        {c.title}
                      </span>
                      <span className="mt-0.5 block truncate font-medium text-ink">{c.value}</span>
                    </span>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-ink-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand" />
                  </a>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-theme bg-surface/40 p-5">
                <div className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand/15 text-brand">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm leading-relaxed text-ink">{site.address}</p>
                    <a
                      href={site.addressUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:underline"
                    >
                      {t.contactPage.openMaps}
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-3 rounded-2xl border border-dashed border-theme px-4 py-3 text-sm text-ink-muted">
                <Clock className="h-5 w-5 shrink-0 text-brand" />
                <span>{t.contactPage.officeHours}</span>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
