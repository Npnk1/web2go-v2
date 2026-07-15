"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Languages, Menu, X } from "lucide-react";
import { BrandMark } from "@/components/brand-mark";
import {
  localeLabels,
  localePath,
  locales,
  switchLocalePath,
  type Locale
} from "@/i18n/locales";
import type { Messages } from "@/i18n/types";

export function Header({ locale, copy }: { locale: Locale; copy: Messages["navigation"] }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const localizedHash = (hash: string) => `${localePath(locale)}${hash}`;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b transition duration-300 ${scrolled || open ? "border-ink-950/10 bg-paper/95 shadow-crisp backdrop-blur-xl" : "border-transparent bg-paper/80"}`}>
      <div className="mx-auto flex h-[76px] max-w-[var(--container)] items-center justify-between px-5 sm:px-6 lg:px-8">
        <a href={localizedHash("#top")} aria-label={copy.homeAria} onClick={() => setOpen(false)} className="rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-cobalt-500 focus-visible:ring-offset-4 focus-visible:ring-offset-paper">
          <BrandMark />
        </a>

        <nav className="hidden items-center gap-6 xl:flex" aria-label={copy.mainAria}>
          {copy.items.slice(0, 6).map((item) => (
            <a key={item.href} href={localizedHash(item.href)} className="rounded-sm py-2 text-sm font-medium text-ink-700 transition hover:text-cobalt-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-cobalt-500">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher locale={locale} label={copy.languageLabel} />
          <a href={localizedHash("#contact")} className="btn-primary">
            <span>{copy.cta}</span>
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        <button type="button" className="grid h-11 w-11 place-items-center rounded-md border border-ink-950/15 bg-white text-ink-950 transition hover:border-cobalt-500 hover:text-cobalt-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-cobalt-500 lg:hidden" aria-label={open ? copy.closeMenu : copy.openMenu} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen((value) => !value)}>
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div id="mobile-menu" aria-hidden={!open} className={`absolute inset-x-0 top-[76px] min-h-[calc(100svh-76px)] max-h-[calc(100svh-76px)] overflow-y-auto border-b border-ink-950/10 bg-paper px-5 pb-7 shadow-lift transition lg:hidden ${open ? "block" : "hidden"}`}>
        <nav className="grid py-4" aria-label={copy.mobileAria}>
          {copy.items.map((item) => (
            <a key={item.href} href={localizedHash(item.href)} className="border-b border-ink-950/10 px-1 py-3.5 text-lg font-medium text-ink-950 transition hover:text-cobalt-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-cobalt-500" onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="grid gap-4 pt-2">
          <LanguageSwitcher locale={locale} label={copy.languageLabel} compact onNavigate={() => setOpen(false)} />
          <a href={localizedHash("#contact")} className="btn-primary" onClick={() => setOpen(false)}>
            <span>{copy.cta}</span>
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </header>
  );
}

function LanguageSwitcher({ locale, label, compact = false, onNavigate }: { locale: Locale; label: string; compact?: boolean; onNavigate?: () => void }) {
  const pathname = usePathname() || localePath(locale);
  const [hash, setHash] = useState("");

  useEffect(() => {
    const updateHash = () => setHash(window.location.hash);
    updateHash();
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  return (
    <div aria-label={label} className={`flex items-center ${compact ? "justify-between border-y border-ink-950/10 py-3" : "rounded-md border border-ink-950/10 bg-white p-1"}`}>
      {compact ? <span className="flex items-center gap-2 text-sm font-medium text-ink-700"><Languages className="h-4 w-4 text-cobalt-500" aria-hidden="true" />{label}</span> : null}
      <div className="flex items-center gap-1">
        {locales.map((targetLocale) => {
          const isActive = targetLocale === locale;
          return (
            <a key={targetLocale} href={`${switchLocalePath(pathname, targetLocale)}${hash}`} aria-current={isActive ? "page" : undefined} onClick={onNavigate} className={`rounded px-2.5 py-2 text-xs font-bold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-cobalt-500 ${isActive ? "bg-ink-950 text-white" : "text-ink-600 hover:bg-cobalt-50 hover:text-cobalt-600"}`}>
              {localeLabels[targetLocale]}
            </a>
          );
        })}
      </div>
    </div>
  );
}
