"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { site, socialLinks } from "@/lib/site";
import { useI18n } from "@/lib/i18n/context";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/Logo";

type SocialIconProps = { className?: string };

function InstagramIcon({ className }: SocialIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon({ className }: SocialIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const socialIcons = {
  Instagram: InstagramIcon,
  LinkedIn: LinkedinIcon,
  WhatsApp: MessageCircle,
} as const;

export function Footer() {
  const { t } = useI18n();

  const footerGroups = [
    {
      title: t.footer.products,
      links: [
        { label: "Beam King 380", href: "/urunler/beam-king-380" },
        { label: "Beam King IP", href: "/urunler/beam-king-ip" },
        { label: "Blinder 400 IP", href: "/urunler/blinder-400-ip" },
        { label: "Blinder 800 IP", href: "/urunler/blinder-800-ip" },
        { label: "Diamond Line 1240 Eco", href: "/urunler/diamond-line-1240-eco" },
        { label: "LED Beam Wash 150", href: "/urunler/led-beam-wash-150" },
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
        { label: t.nav.blog, href: "/blog" },
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
            <h3 className="mt-5 text-sm font-semibold uppercase tracking-wider text-ink">
              {t.nav.contact}
            </h3>
            <div className="mt-4 space-y-2 text-sm">
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
              <a
                href={site.addressUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-ink-muted hover:text-brand"
              >
                <MapPin className="h-4 w-4 shrink-0 text-brand" /> {site.address}
              </a>
            </div>
            <div className="mt-5 flex gap-3">
              {socialLinks.map((s) => {
                const Icon = socialIcons[s.label as keyof typeof socialIcons];
                return (
                  <a
                    key={s.href}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-theme text-ink-muted transition-colors hover:border-brand hover:text-brand"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
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
