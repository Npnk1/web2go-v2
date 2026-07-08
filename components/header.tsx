"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Languages, Menu, X } from "lucide-react";
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
          ? "border-slate-200 bg-white/[0.92] shadow-sm backdrop-blur-xl"
          : "border-transparent bg-white/80 backdrop-blur-xl"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <a
          href="#top"
          className="group flex items-center gap-3"
          aria-label={`${siteConfig.name} home`}
          onClick={() => setOpen(false)}
        >
          <span className="grid h-10 w-10 place-items-center rounded-md bg-slate-950 text-sm font-bold text-white">
            W
          </span>
          <span className="text-lg font-semibold text-slate-950">
            Web<span className="text-blue-700">2</span>Go
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition hover:text-slate-950"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <div className="flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-600">
            <Languages className="h-4 w-4 text-blue-700" aria-hidden="true" />
            <span>EN</span>
            <span className="text-slate-300">/</span>
            <span className="text-slate-400">NL</span>
            <span className="text-slate-300">/</span>
            <span className="text-slate-400">ES</span>
          </div>
          <a href="#contact" className="btn-primary">
            <span>Book Free Consultation</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-md border border-slate-200 bg-white text-slate-950 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={`lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        } absolute inset-x-0 top-20 border-b border-slate-200 bg-white px-5 pb-6 shadow-xl transition`}
      >
        <nav className="grid gap-1 py-3" aria-label="Mobile">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-3 text-base font-medium text-slate-700 transition hover:bg-slate-50 hover:text-slate-950"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="mt-2 grid gap-3">
          <div className="flex items-center justify-between rounded-md border border-slate-200 bg-slate-50 px-3 py-3 text-sm text-slate-600">
            <span className="flex items-center gap-2">
              <Languages className="h-4 w-4 text-blue-700" aria-hidden="true" />
              Language
            </span>
            <span>EN / NL / ES</span>
          </div>
          <a href="#contact" className="btn-primary justify-center" onClick={() => setOpen(false)}>
            <span>Book Free Consultation</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </header>
  );
}
