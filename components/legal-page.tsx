import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { BrandMark } from "@/components/brand-mark";
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
    <main className="min-h-screen bg-paper px-5 py-10 text-ink-950 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <Link href={localePath(locale)} aria-label={backLabel}><BrandMark /></Link>
        <Link href={localePath(locale)} className="mt-16 inline-flex items-center gap-2 text-sm font-bold text-cobalt-600 transition hover:gap-3 hover:text-cobalt-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-cobalt-500">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />{backLabel}
        </Link>
        <h1 className="mt-8 max-w-3xl text-5xl font-semibold leading-tight tracking-tight text-ink-950 sm:text-6xl">
          {content.title}
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-ink-600">
          {content.intro}
        </p>

        <div className="mt-12 border-t border-ink-950/15 text-sm leading-7 text-ink-600">
          {content.sections.map((section) => (
            <section key={section.title} className="grid gap-4 border-b border-ink-950/15 py-8 sm:grid-cols-[0.7fr_1.3fr] sm:gap-10">
              <h2 className="text-xl font-semibold text-ink-950">{section.title}</h2>
              <p>{section.body}</p>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
