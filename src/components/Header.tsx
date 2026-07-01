"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { site } from "@/lib/site";
import { useI18n } from "@/lib/i18n/context";
import { ButtonLink } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LocaleToggle } from "@/components/LocaleToggle";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/Logo";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { t } = useI18n();

  const navItems = [
    { label: t.nav.home, href: "/" },
    { label: t.nav.products, href: "/urunler" },
    { label: t.nav.useCases, href: "/kullanim-alanlari" },
    { label: t.nav.projects, href: "/projeler" },
    { label: t.nav.about, href: "/hakkimizda" },
    { label: t.nav.faq, href: "/sss" },
    { label: t.nav.contact, href: "/iletisim" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300",
          scrolled
            ? "border-b border-theme bg-surface/90 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-5 sm:h-18 sm:px-8">
          <Link href="/" className="flex shrink-0 items-center gap-2" aria-label={site.brand}>
            <Logo />
          </Link>

          <nav className="hidden items-center gap-0.5 xl:flex" aria-label="Ana menü">
            {navItems.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-lg px-2.5 py-2 text-sm font-medium transition-colors",
                    active ? "text-brand" : "text-ink-muted hover:text-ink",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <LocaleToggle />
            <ThemeToggle />
            <a
              href={`tel:${site.phone}`}
              className="hidden items-center gap-2 text-sm text-ink-muted hover:text-brand xl:flex"
            >
              <Phone className="h-4 w-4" />
              <span>{site.phoneDisplay}</span>
            </a>
            <ButtonLink href="/iletisim" size="sm" className="ml-3">
              {t.nav.cta}
            </ButtonLink>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <LocaleToggle />
            <ThemeToggle />
            <button
              type="button"
              className="rounded-lg p-2 text-ink"
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-nav-drawer"
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-[60] lg:hidden",
          open ? "pointer-events-auto" : "pointer-events-none",
        )}
        aria-hidden={!open}
      >
        <div
          className={cn(
            "absolute inset-0 bg-black/50 backdrop-blur-[2px] transition-opacity duration-300 ease-out motion-reduce:transition-none",
            open ? "opacity-100" : "opacity-0",
          )}
          onClick={closeMenu}
          aria-hidden="true"
        />

        <aside
          id="mobile-nav-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Mobil menü"
          className={cn(
            "absolute top-0 right-0 flex h-full w-[min(100%,20rem)] flex-col border-l border-theme bg-surface shadow-2xl transition-transform duration-300 ease-out motion-reduce:transition-none",
            open ? "translate-x-0" : "translate-x-full",
          )}
          inert={!open ? true : undefined}
        >
          <div className="flex items-center justify-between border-b border-theme px-5 py-4">
            <Link
              href="/"
              onClick={closeMenu}
              className="flex shrink-0 items-center"
              aria-label={site.brand}
            >
              <Logo />
            </Link>
            <button
              type="button"
              className="rounded-lg p-2 text-ink-muted transition-colors hover:bg-surface-elevated hover:text-ink"
              onClick={closeMenu}
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-4 py-4" aria-label="Mobil menü">
            {navItems.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className={cn(
                    "rounded-lg px-3 py-3 text-sm font-medium transition-colors",
                    active
                      ? "bg-surface-elevated text-brand"
                      : "text-ink-muted hover:bg-surface-elevated hover:text-ink",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="border-t border-theme px-4 py-4">
            <ButtonLink href="/iletisim" className="w-full" onClick={closeMenu}>
              {t.nav.cta}
            </ButtonLink>
          </div>
        </aside>
      </div>
    </>
  );
}
