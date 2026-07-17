"use client";

import Link from "next/link";
import { useState, useEffect, useMemo, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ChevronDown, Search } from "lucide-react";
import { site } from "@/lib/site";
import { products } from "@/lib/products";
import { categorySlugs, type ProductCategory } from "@/lib/categories";
import { useI18n } from "@/lib/i18n/context";
import { getLocalizedProduct } from "@/lib/i18n/products";
import { ButtonLink } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LocaleToggle } from "@/components/LocaleToggle";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/Logo";

type NavLink = { label: string; href: string };

const productCategoryHeadingClass =
  "text-[#f46f2c] font-bold uppercase tracking-wider";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function isGroupActive(pathname: string, links: NavLink[]) {
  return links.some((link) => isActive(pathname, link.href));
}

function NavLinkItem({
  href,
  label,
  active,
  className,
  onClick,
}: {
  href: string;
  label: string;
  active?: boolean;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "rounded-lg px-2.5 py-2 text-sm font-medium transition-colors whitespace-nowrap",
        active ? "text-brand" : "text-ink-muted hover:text-ink",
        className,
      )}
    >
      {label}
    </Link>
  );
}

function DesktopDropdown({
  label,
  active,
  open,
  onOpen,
  onClose,
  panelClassName,
  children,
}: {
  label: string;
  active?: boolean;
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
  panelClassName?: string;
  children: ReactNode;
}) {
  return (
    <div
      className="relative"
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
    >
      <button
        type="button"
        onClick={() => (open ? onClose() : onOpen())}
        className={cn(
          "flex items-center gap-1 rounded-lg px-2.5 py-2 text-sm font-medium transition-colors whitespace-nowrap",
          active ? "text-brand" : "text-ink-muted hover:text-ink",
        )}
        aria-haspopup="true"
        aria-expanded={open}
      >
        {label}
        <ChevronDown
          className={cn(
            "h-3.5 w-3.5 opacity-70 transition-transform duration-200",
            open && "rotate-180",
          )}
        />
      </button>
      <div
        className={cn(
          "absolute left-0 top-full z-50 pt-2 transition-all duration-200",
          open ? "visible opacity-100" : "invisible pointer-events-none opacity-0",
        )}
      >
        <div
          className={cn(
            "rounded-xl border border-theme bg-surface/95 p-3 shadow-xl backdrop-blur-xl",
            panelClassName,
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

function MobileAccordion({
  label,
  open,
  onToggle,
  children,
}: {
  label: string;
  open: boolean;
  onToggle: () => void;
  children: ReactNode;
}) {
  return (
    <div className="rounded-lg border border-theme/60 bg-surface-elevated/40">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between px-3 py-3 text-sm font-semibold text-ink"
        aria-expanded={open}
      >
        {label}
        <ChevronDown className={cn("h-4 w-4 transition-transform", open && "rotate-180")} />
      </button>
      {open ? <div className="space-y-1 border-t border-theme px-2 py-2">{children}</div> : null}
    </div>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileSection, setMobileSection] = useState<"products" | "guides" | null>(null);
  const [desktopDropdown, setDesktopDropdown] = useState<"products" | "guides" | null>(null);
  const pathname = usePathname();
  const { locale, t } = useI18n();

  const guideLinks = useMemo(
    (): NavLink[] => [
      { label: t.nav.blog, href: "/blog" },
      { label: t.nav.comparison, href: "/karsilastirma" },
      { label: t.nav.glossary, href: "/sozluk" },
      { label: t.nav.useCases, href: "/kullanim-alanlari" },
      { label: "Bayi", href: "/bayi" },
      { label: t.nav.faq, href: "/sss" },
    ],
    [t],
  );

  const primaryLinks = useMemo(
    (): NavLink[] => [
      { label: t.nav.home, href: "/" },
      { label: t.nav.projects, href: "/projeler" },
      { label: t.nav.about, href: "/hakkimizda" },
      { label: t.nav.contact, href: "/iletisim" },
    ],
    [t],
  );

  const productGroups = useMemo(
    () =>
      categorySlugs.map((category) => ({
        category,
        label: t.categories[category as ProductCategory].label,
        items: products
          .filter((product) => product.category === category)
          .map((product) => ({
            href: `/urunler/${product.slug}`,
            name: getLocalizedProduct(product.slug, locale)?.name ?? product.name,
          })),
      })),
    [locale, t.categories],
  );

  const productsActive =
    pathname.startsWith("/urunler") || isGroupActive(pathname, [{ label: "", href: "/urunler" }]);
  const guidesActive = isGroupActive(pathname, guideLinks);

  useEffect(() => {
    setDesktopDropdown(null);
  }, [pathname]);

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
    if (!desktopDropdown) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setDesktopDropdown(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [desktopDropdown]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const closeMenu = () => {
    setOpen(false);
    setMobileSection(null);
  };

  const closeDesktopDropdown = () => setDesktopDropdown(null);

  const dropdownLinkClass =
    "block rounded-lg px-3 py-2 text-sm whitespace-nowrap text-ink-muted transition-colors hover:bg-surface-elevated hover:text-ink";

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
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
          <Link href="/" className="flex shrink-0 items-center gap-2" aria-label={site.brand}>
            <Logo />
          </Link>

          <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Ana menü">
            <NavLinkItem
              href="/"
              label={t.nav.home}
              active={isActive(pathname, "/")}
            />

            <DesktopDropdown
              label={t.nav.products}
              active={productsActive}
              open={desktopDropdown === "products"}
              onOpen={() => setDesktopDropdown("products")}
              onClose={closeDesktopDropdown}
              panelClassName="w-[40rem]"
            >
              <Link
                href="/urunler"
                onClick={closeDesktopDropdown}
                className={cn(dropdownLinkClass, "font-semibold text-brand")}
              >
                {t.footer.allProducts} →
              </Link>
              <div className="mt-3 grid grid-cols-2 gap-x-10 gap-y-4 border-t border-theme pt-3">
                {productGroups.map((group) => (
                  <div key={group.category}>
                    <p
                      className={cn("px-3 py-1 text-[11px]", productCategoryHeadingClass)}
                    >
                      {group.label}
                    </p>
                    {group.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={closeDesktopDropdown}
                        className={dropdownLinkClass}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            </DesktopDropdown>

            <DesktopDropdown
              label={t.nav.guides}
              active={guidesActive}
              open={desktopDropdown === "guides"}
              onOpen={() => setDesktopDropdown("guides")}
              onClose={closeDesktopDropdown}
              panelClassName="min-w-56"
            >
              {guideLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeDesktopDropdown}
                  className={cn(
                    dropdownLinkClass,
                    isActive(pathname, item.href) && "bg-surface-elevated text-brand",
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </DesktopDropdown>

            {primaryLinks.slice(1).map((item) => (
              <NavLinkItem
                key={item.href}
                href={item.href}
                label={item.label}
                active={isActive(pathname, item.href)}
              />
            ))}
          </nav>

          <div className="hidden shrink-0 items-center gap-2 lg:flex">
            <Link
              href="/ara"
              aria-label={t.search.label}
              className={cn(
                "rounded-lg p-2 transition-colors",
                isActive(pathname, "/ara")
                  ? "text-brand"
                  : "text-ink-muted hover:text-ink",
              )}
            >
              <Search className="h-[18px] w-[18px]" />
            </Link>
            <LocaleToggle />
            <ThemeToggle />
            <a
              href={`tel:${site.phone}`}
              className="hidden items-center gap-1.5 whitespace-nowrap text-sm text-ink-muted hover:text-brand xl:flex"
            >
              <Phone className="h-4 w-4 shrink-0" />
              <span>{site.phoneDisplay}</span>
            </a>
            <ButtonLink href="/iletisim" size="sm" className="ml-1 whitespace-nowrap">
              {t.nav.cta}
            </ButtonLink>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <Link
              href="/ara"
              aria-label={t.search.label}
              className="rounded-lg p-2 text-ink-muted hover:text-ink"
              onClick={closeMenu}
            >
              <Search className="h-5 w-5" />
            </Link>
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

          <nav className="flex flex-1 flex-col gap-2 overflow-y-auto px-4 py-4" aria-label="Mobil menü">
            <NavLinkItem
              href="/"
              label={t.nav.home}
              active={isActive(pathname, "/")}
              className="px-3 py-3"
              onClick={closeMenu}
            />

            <MobileAccordion
              label={t.nav.products}
              open={mobileSection === "products"}
              onToggle={() =>
                setMobileSection((current) => (current === "products" ? null : "products"))
              }
            >
              <Link
                href="/urunler"
                onClick={closeMenu}
                className="block rounded-lg px-3 py-2 text-sm font-semibold text-brand hover:bg-surface-elevated"
              >
                {t.footer.allProducts}
              </Link>
              {productGroups.map((group) => (
                <div key={group.category} className="pt-1">
                  <p
                    className={cn("px-3 py-1 text-[11px]", productCategoryHeadingClass)}
                  >
                    {group.label}
                  </p>
                  {group.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={closeMenu}
                      className="block rounded-lg px-3 py-2 text-sm text-ink-muted hover:bg-surface-elevated hover:text-ink"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              ))}
            </MobileAccordion>

            <MobileAccordion
              label={t.nav.guides}
              open={mobileSection === "guides"}
              onToggle={() =>
                setMobileSection((current) => (current === "guides" ? null : "guides"))
              }
            >
              {guideLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className={cn(
                    "block rounded-lg px-3 py-2 text-sm text-ink-muted hover:bg-surface-elevated hover:text-ink",
                    isActive(pathname, item.href) && "bg-surface-elevated text-brand",
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </MobileAccordion>

            {primaryLinks.slice(1).map((item) => (
              <NavLinkItem
                key={item.href}
                href={item.href}
                label={item.label}
                active={isActive(pathname, item.href)}
                className="px-3 py-3"
                onClick={closeMenu}
              />
            ))}
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
