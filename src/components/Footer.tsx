"use client";

import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { site } from "@/lib/site";
import { useI18n } from "@/lib/i18n/context";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/Logo";

export function Footer() {
  const { t } = useI18n();

  const footerGroups = [
    {
      title: t.footer.products,
      links: [
        { label: "Beam King 380", href: "/urunler/beam-king-380" },
        { label: "Beam King IP", href: "/urunler/beam-king-ip" },
        { label: "Wash 3715", href: "/urunler/wash-3715" },
        { label: "Strike Pro IP", href: "/urunler/strike-pro-ip" },
        { label: "Tornado IP", href: "/urunler/tornado-ip" },
        { label: t.footer.allProducts, href: "/urunler" },
      ],
    },
    {
      title: t.footer.corporate,
      links: [
        { label: t.nav.about, href: "/hakkimizda" },
        { label: t.nav.projects, href: "/projeler" },
        { label: t.nav.useCases, href: "/kullanim-alanlari" },
        { label: t.nav.contact, href: "/iletisim" },
      ],
    },
    {
      title: t.footer.support,
      links: [
        { label: t.footer.faq, href: "/sss" },
        { label: t.nav.cta, href: "/iletisim" },
      ],
    },
    {
      title: t.footer.legal,
      links: [
        { label: t.footer.privacy, href: "/gizlilik-politikasi" },
        { label: t.footer.kvkk, href: "/kvkk-aydinlatma-metni" },
        { label: t.footer.cookies, href: "/cerez-politikasi" },
        { label: t.footer.terms, href: "/kullanim-kosullari" },
      ],
    },
  ];

  return (
    <footer className="relative mt-24 border-t border-theme bg-surface-deep">
      <div className="bg-grid absolute inset-0 opacity-30" aria-hidden />
      <Container className="relative py-14">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-muted">
              {t.footer.description}
            </p>
            <div className="mt-5 space-y-2 text-sm">
              <a
                href={`tel:${site.phone}`}
                className="flex items-center gap-2 text-ink-muted hover:text-brand"
              >
                <Phone className="h-4 w-4 text-brand" /> {site.phoneDisplay}
              </a>
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-2 text-ink-muted hover:text-brand"
              >
                <Mail className="h-4 w-4 text-brand" /> {site.email}
              </a>
              <span className="flex items-center gap-2 text-ink-muted">
                <MapPin className="h-4 w-4 text-brand" /> {site.address}
              </span>
            </div>
          </div>

          {footerGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-ink">
                {group.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.href + link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-ink-muted transition-colors hover:text-brand"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-theme pt-6 text-center text-sm text-ink-muted">
          <p>
            © {new Date().getFullYear()} {site.brand}. {t.common.rights}
          </p>
        </div>
      </Container>
    </footer>
  );
}
