"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowRight, Languages, Menu, X } from "lucide-react";
import {
  localeLabels,
  localePath,
  locales,
  switchLocalePath,
  type Locale
} from "@/i18n/locales";
import type { Messages } from "@/i18n/types";

export function Header({
  locale,
  copy
}: {
  locale: Locale;
  copy: Messages["navigation"];
}) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const localizedHash = (hash: string) => `${localePath(locale)}${hash}`;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
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
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition ${
        scrolled
          ? "border-white/10 bg-ink-950/90 shadow-2xl shadow-black/30 backdrop-blur-xl"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <a
          href={localizedHash("#top")}
          className="group flex items-center gap-3"
          aria-label={copy.homeAria}
          onClick={() => setOpen(false)}
        >
          <span className="grid h-10 w-10 place-items-center rounded-md border border-white/15 bg-white/[0.06] text-sm font-bold text-white shadow-panel">
            W
          </span>
          <span className="text-lg font-semibold text-white">
            Web<span className="text-signal-blue">2</span>Go
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label={copy.mainAria}>
          {copy.items.map((item) => (
            <a
              key={item.href}
              href={localizedHash(item.href)}
              className="rounded-md px-1 py-2 text-sm font-medium text-slate-300 transition hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-signal-blue/45 focus-visible:ring-offset-4 focus-visible:ring-offset-ink-950"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher locale={locale} label={copy.languageLabel} />
          <a href={localizedHash("#contact")} className="btn-primary">
            <span>{copy.cta}</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-md border border-white/10 bg-white/[0.04] text-white transition hover:border-signal-blue/35 hover:bg-white/[0.08] focus:outline-none focus-visible:ring-2 focus-visible:ring-signal-blue/50 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950 lg:hidden"
          aria-label={open ? copy.closeMenu : copy.openMenu}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        id="mobile-menu"
        aria-hidden={!open}
        className={`lg:hidden ${
          open ? "block opacity-100" : "hidden opacity-0"
        } absolute inset-x-0 top-20 border-b border-white/10 bg-ink-950/95 px-5 pb-6 shadow-2xl shadow-black/40 backdrop-blur-xl transition`}
      >
        <nav className="grid gap-1 py-3" aria-label={copy.mobileAria}>
          {copy.items.map((item) => (
            <a
              key={item.href}
              href={localizedHash(item.href)}
              className="rounded-md px-3 py-3 text-base font-medium text-slate-200 transition hover:bg-white/[0.06] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-signal-blue/45"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="mt-2 grid gap-3">
          <div className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-3 text-sm text-slate-300">
            <div className="mb-3 flex items-center gap-2">
              <Languages className="h-4 w-4 text-signal-blue" aria-hidden="true" />
              <span>{copy.languageLabel}</span>
            </div>
            <LanguageSwitcher locale={locale} label={copy.languageLabel} compact onNavigate={() => setOpen(false)} />
          </div>
          <a href={localizedHash("#contact")} className="btn-primary justify-center" onClick={() => setOpen(false)}>
            <span>{copy.cta}</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </header>
  );
}

function LanguageSwitcher({
  locale,
  label,
  compact = false,
  onNavigate
}: {
  locale: Locale;
  label: string;
  compact?: boolean;
  onNavigate?: () => void;
}) {
  const pathname = usePathname() || localePath(locale);
  const [hash, setHash] = useState("");

  useEffect(() => {
    const updateHash = () => setHash(window.location.hash);
    updateHash();
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  return (
    <div
      aria-label={label}
      className={`flex items-center ${compact ? "gap-2" : "gap-2 rounded-md border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-slate-300"}`}
    >
      {!compact ? <Languages className="h-4 w-4 text-signal-blue" aria-hidden="true" /> : null}
      {locales.map((targetLocale, index) => {
        const isActive = targetLocale === locale;
        return (
          <span key={targetLocale} className="flex items-center gap-2">
            {index > 0 ? <span className="text-slate-600">/</span> : null}
            <a
              href={`${switchLocalePath(pathname, targetLocale)}${hash}`}
              aria-current={isActive ? "page" : undefined}
              onClick={onNavigate}
              className={`rounded px-1.5 py-1 text-xs font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-signal-blue/45 ${
                isActive
                  ? "bg-white/[0.08] text-white"
                  : "text-slate-500 hover:text-slate-200"
              }`}
            >
              {localeLabels[targetLocale]}
            </a>
          </span>
        );
      })}
    </div>
  );
}
