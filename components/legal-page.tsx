import Link from "next/link";
import { localePath, type Locale } from "@/i18n/locales";
import type { Messages } from "@/i18n/types";

type LegalContent = Messages["legal"]["privacy"] | Messages["legal"]["terms"];

export function LegalPage({
  locale,
  backLabel,
  content
}: {
  locale: Locale;
  backLabel: string;
  content: LegalContent;
}) {
  return (
    <main className="min-h-screen bg-ink-950 px-5 py-20 text-slate-200 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl rounded-lg border border-white/10 bg-white/[0.04] p-6 shadow-card sm:p-8">
        <Link href={localePath(locale)} className="text-sm font-medium text-signal-blue transition hover:text-white">
          {backLabel}
        </Link>
        <h1 className="mt-8 text-4xl font-semibold tracking-tight text-white">
          {content.title}
        </h1>
        <p className="mt-5 text-sm leading-7 text-slate-300">
          {content.intro}
        </p>

        <div className="mt-8 space-y-7 text-sm leading-7 text-slate-300">
          {content.sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-lg font-semibold text-white">{section.title}</h2>
              <p className="mt-2">{section.body}</p>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
