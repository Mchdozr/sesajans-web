"use client";

import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/site";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { useI18n } from "@/lib/i18n/context";

export function ContactContent() {
  const { t } = useI18n();

  const cards = [
    { icon: Phone, title: t.contactPage.phone, value: site.phoneDisplay, href: `tel:${site.phone}` },
    {
      icon: WhatsAppIcon,
      title: t.contactPage.whatsapp,
      value: site.phoneDisplay,
      href: `https://wa.me/${site.whatsapp}`,
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
          <div className="grid gap-5 sm:grid-cols-3">
            {cards.map((c) => (
              <a
                key={c.title}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="glow-border rounded-2xl border border-theme bg-surface-elevated/80 p-6 transition-all hover:-translate-y-1"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand/15 text-brand">
                  <c.icon className="h-6 w-6" />
                </span>
                <h2 className="mt-4 font-display font-bold text-ink">{c.title}</h2>
                <p className="mt-1 text-sm text-ink-muted">{c.value}</p>
              </a>
            ))}
          </div>

          <div className="mt-12 grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-xl font-bold text-ink">{t.contactPage.sendMessage}</h2>
              <p className="mt-2 text-sm text-ink-muted">{t.contactPage.sendMessageDesc}</p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
            <div className="rounded-3xl border border-theme bg-surface-elevated/60 p-6 sm:p-8">
              <h2 className="font-display text-xl font-bold text-ink">{t.contactPage.officeInfo}</h2>
              <ul className="mt-4 space-y-3 text-sm text-ink-muted">
                <li>
                  <a
                    href={site.addressUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 transition-colors hover:text-brand"
                  >
                    <MapPin className="h-5 w-5 shrink-0 text-brand" /> {site.address}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-brand" /> {t.contactPage.officeHours}
                </li>
                <li>
                  <a href={`tel:${site.phone}`} className="flex items-center gap-3 transition-colors hover:text-brand">
                    <Phone className="h-5 w-5 shrink-0 text-brand" /> {site.phoneDisplay}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
