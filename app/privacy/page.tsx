import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy information for Web2Go consultation requests and website use."
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-ink-950 px-5 py-20 text-slate-200 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl rounded-lg border border-white/10 bg-white/[0.04] p-6 shadow-card sm:p-8">
        <Link href="/" className="text-sm font-medium text-signal-cyan transition hover:text-white">
          Back to Web2Go
        </Link>
        <h1 className="mt-8 text-4xl font-semibold tracking-tight text-white">
          Privacy Policy
        </h1>
        <p className="mt-5 text-sm leading-7 text-slate-300">
          This placeholder privacy page explains the intended data handling for the Web2Go website until final legal text is approved.
        </p>

        <div className="mt-8 space-y-7 text-sm leading-7 text-slate-300">
          <section>
            <h2 className="text-lg font-semibold text-white">Information submitted</h2>
            <p className="mt-2">
              The consultation form may collect name, business details, website URL, email, phone, country, business type, budget range, preferred contact method, and project message.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-white">How it is used</h2>
            <p className="mt-2">
              Submitted information should only be used to review the request, respond to the business, estimate scope, and provide relevant Web2Go services.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-white">Production setup</h2>
            <p className="mt-2">
              The current form is frontend-only. Before launch, connect an approved email or CRM backend and replace this placeholder with final policy text for the real business entity and region.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
