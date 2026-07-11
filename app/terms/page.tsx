import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms information for Web2Go website visitors and consultation requests."
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-ink-950 px-5 py-20 text-slate-200 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl rounded-lg border border-white/10 bg-white/[0.04] p-6 shadow-card sm:p-8">
        <Link href="/" className="text-sm font-medium text-signal-cyan transition hover:text-white">
          Back to Web2Go
        </Link>
        <h1 className="mt-8 text-4xl font-semibold tracking-tight text-white">
          Terms
        </h1>
        <p className="mt-5 text-sm leading-7 text-slate-300">
          These placeholder terms describe the intended business boundaries until final legal text is approved.
        </p>

        <div className="mt-8 space-y-7 text-sm leading-7 text-slate-300">
          <section>
            <h2 className="text-lg font-semibold text-white">No guaranteed rankings</h2>
            <p className="mt-2">
              Web2Go can improve website structure, clarity, technical quality, and conversion paths, but no result in search engines or AI recommendation systems is guaranteed.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-white">Scope and pricing</h2>
            <p className="mt-2">
              Website work, audits, optimization, and ongoing support are scoped before work begins. Final pricing depends on content, integrations, timeline, technical requirements, and maintenance needs.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-white">Production setup</h2>
            <p className="mt-2">
              Replace this placeholder with final terms for the real Web2Go business entity, jurisdiction, payment rules, cancellation policy, and data processing requirements before production launch.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
