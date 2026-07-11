"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Languages, Menu, Sparkles, X } from "lucide-react";
import { navItems, siteConfig } from "@/data/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
          href="#top"
          className="group flex items-center gap-3"
          aria-label={`${siteConfig.name} home`}
          onClick={() => setOpen(false)}
        >
          <span className="grid h-10 w-10 place-items-center rounded-lg border border-white/15 bg-gradient-to-br from-signal-blue via-signal-cyan to-signal-mint text-sm font-bold text-white shadow-glow">
            W
          </span>
          <span className="text-lg font-semibold text-white">
            Web<span className="text-signal-blue">2</span>Go
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-1 py-2 text-sm font-medium text-slate-300 transition hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-signal-cyan/45 focus-visible:ring-offset-4 focus-visible:ring-offset-ink-950"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <div className="flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-slate-300">
            <Languages className="h-4 w-4 text-signal-cyan" aria-hidden="true" />
            <span>EN</span>
            <span className="text-slate-600">/</span>
            <span className="text-slate-500">NL</span>
            <span className="text-slate-600">/</span>
            <span className="text-slate-500">ES</span>
          </div>
          <a href="#contact" className="btn-primary">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            <span>Book Free Consultation</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-md border border-white/10 bg-white/[0.04] text-white transition hover:border-signal-cyan/35 hover:bg-white/[0.08] focus:outline-none focus-visible:ring-2 focus-visible:ring-signal-cyan/50 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
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
        <nav className="grid gap-1 py-3" aria-label="Mobile">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-3 text-base font-medium text-slate-200 transition hover:bg-white/[0.06] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-signal-cyan/45"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="mt-2 grid gap-3">
          <div className="flex items-center justify-between rounded-md border border-white/10 bg-white/[0.04] px-3 py-3 text-sm text-slate-300">
            <span className="flex items-center gap-2">
              <Languages className="h-4 w-4 text-signal-cyan" aria-hidden="true" />
              Language
            </span>
            <span>EN / NL / ES</span>
          </div>
          <a href="#contact" className="btn-primary justify-center" onClick={() => setOpen(false)}>
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            <span>Book Free Consultation</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </header>
  );
}
