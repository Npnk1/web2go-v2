import { ArrowRight, CircleAlert, MapPin, Search, ShieldCheck, Sparkles } from "lucide-react";
import { StructuredProfile } from "@/components/visuals/structured-profile";
import type { Messages } from "@/i18n/types";

type Service = {
  title: string;
  description: string;
  bullets: string[];
};

export function ServiceScene({
  service,
  type,
  copy
}: {
  service: Service;
  type: "visibility" | "website" | "schema";
  copy: Messages["visuals"];
}) {
  if (type === "website") {
    return <WebsiteScene copy={copy.website} />;
  }

  if (type === "schema") {
    return <SchemaScene service={service} copy={copy.profile} />;
  }

  return <VisibilityAudit copy={copy.audit} />;
}

function SceneShell({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <figure aria-label={label} className="technical-grid relative min-h-[330px] min-w-0 rounded-[14px] border border-ink-950/15 bg-white p-4 shadow-card sm:p-6">
      {children}
    </figure>
  );
}

function VisibilityAudit({ copy }: { copy: Messages["visuals"]["audit"] }) {
  return (
    <SceneShell label={copy.summary}>
      <div className="mx-auto max-w-xl overflow-hidden rounded-[12px] border border-ink-950/15 bg-canvas shadow-lift">
        <header className="flex flex-wrap items-start justify-between gap-3 border-b border-ink-950/10 p-4 sm:p-5">
          <div>
            <p className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.14em] text-cobalt-600">
              <Search className="h-4 w-4" aria-hidden="true" />
              {copy.title}
            </p>
            <p className="mt-2 text-xs text-ink-600">{copy.exampleLabel}</p>
          </div>
          <div className="rounded-md bg-ink-950 px-3 py-2 text-right text-white">
            <p className="text-[10px] uppercase tracking-[0.12em] text-slate-300">{copy.scoreLabel}</p>
            <p className="mt-1 text-2xl font-semibold">72<span className="text-sm text-slate-400">/100</span></p>
          </div>
        </header>

        <div className="grid gap-4 p-4 sm:grid-cols-[1fr_0.86fr] sm:p-5">
          <div>
            <div className="grid grid-cols-2 gap-2">
              <div className="rounded-md border border-ink-950/10 bg-white p-3">
                <p className="text-2xl font-semibold text-ink-950">8</p>
                <p className="mt-1 text-xs text-ink-600">{copy.issuesLabel}</p>
              </div>
              <div className="rounded-md border border-ink-950/10 bg-white p-3">
                <p className="text-2xl font-semibold text-cobalt-600">5</p>
                <p className="mt-1 text-xs text-ink-600">{copy.opportunitiesLabel}</p>
              </div>
            </div>
            <p className="mt-4 text-xs font-black uppercase tracking-[0.12em] text-ink-600">{copy.findingsTitle}</p>
            <ul className="mt-2 divide-y divide-ink-950/10 rounded-md border border-ink-950/10 bg-white px-3">
              {copy.findings.map((finding) => (
                <li key={finding} className="flex gap-2 py-2.5 text-xs font-semibold text-ink-700">
                  <CircleAlert className="h-4 w-4 shrink-0 text-amber-600" aria-hidden="true" />
                  {finding}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-md bg-ink-950 p-4 text-white">
            <p className="text-xs font-black uppercase tracking-[0.12em] text-cobalt-200">{copy.recommendationTitle}</p>
            <p className="mt-3 text-sm font-semibold leading-6">{copy.recommendation}</p>
            <div className="mt-5 border-t border-white/15 pt-4">
              <div className="flex items-center justify-between text-xs text-slate-300"><span>{copy.beforeLabel}</span><strong className="text-white">72/100</strong></div>
              <div className="mt-2 h-2 rounded-full bg-white/15"><span className="block h-2 w-[72%] rounded-full bg-slate-400" /></div>
              <div className="mt-4 flex items-center justify-between text-xs text-cobalt-100"><span>{copy.afterLabel}</span><strong className="text-acid">91/100</strong></div>
              <div className="mt-2 h-2 rounded-full bg-white/15"><span className="block h-2 w-[91%] rounded-full bg-cobalt-400" /></div>
            </div>
          </div>
        </div>
      </div>
    </SceneShell>
  );
}

function WebsiteScene({ copy }: { copy: Messages["visuals"]["website"] }) {
  return (
    <SceneShell label={copy.label}>
      <div className="mx-auto overflow-hidden rounded-[12px] border border-ink-950/15 bg-white shadow-lift">
        <div className="flex min-h-10 items-center gap-2 border-b border-ink-950/10 bg-paper px-4 text-[10px] text-ink-600">
          <span className="h-2.5 w-2.5 rounded-full bg-ink-950/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-ink-950/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-cobalt-500" />
          <span className="ml-3 rounded bg-white px-3 py-1 shadow-crisp">northline.example</span>
        </div>
        <div className="grid min-h-[270px] lg:grid-cols-[1.08fr_0.92fr]">
          <div className="bg-ink-950 p-5 text-white sm:p-7">
            <p className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.14em] text-cobalt-200"><ShieldCheck className="h-4 w-4" aria-hidden="true" />{copy.label}</p>
            <p className="mt-8 text-xs font-semibold text-acid">{copy.business}</p>
            <h3 className="mt-3 text-3xl font-semibold leading-tight">{copy.headline}</h3>
            <p className="mt-4 text-sm leading-6 text-slate-300">{copy.description}</p>
            <span className="mt-6 inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-xs font-bold text-ink-950">{copy.cta}<ArrowRight className="h-3.5 w-3.5" aria-hidden="true" /></span>
          </div>
          <div className="bg-cobalt-50 p-5 sm:p-6">
            <p className="text-xs font-black uppercase tracking-[0.12em] text-cobalt-600">{copy.servicesTitle}</p>
            <div className="mt-3 grid gap-2">
              {copy.services.map((item) => <div key={item} className="rounded-md border border-cobalt-500/15 bg-white px-3 py-2.5 text-xs font-bold text-ink-700 shadow-crisp">{item}</div>)}
            </div>
            <p className="mt-5 flex gap-2 text-xs leading-5 text-ink-600"><MapPin className="h-4 w-4 shrink-0 text-cobalt-600" aria-hidden="true" />{copy.proof}</p>
            <p className="mt-3 flex gap-2 text-xs leading-5 text-ink-600"><Sparkles className="h-4 w-4 shrink-0 text-cobalt-600" aria-hidden="true" />{copy.outcome}</p>
          </div>
        </div>
      </div>
    </SceneShell>
  );
}

function SchemaScene({ service, copy }: { service: Service; copy: Messages["visuals"]["profile"] }) {
  return (
    <SceneShell label={`${service.title}: ${copy.summary}`}>
      <div className="min-w-0">
        <StructuredProfile copy={copy} compact />
      </div>
    </SceneShell>
  );
}
