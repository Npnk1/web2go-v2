import { ArrowDown, ArrowRight, Bot, Building2, Check, FileText, Search } from "lucide-react";
import type { Messages } from "@/i18n/types";

type StructuredProfileProps = {
  copy: Messages["visuals"]["profile"];
  tone?: "light" | "dark";
  compact?: boolean;
};

export function StructuredProfile({ copy, tone = "light", compact = false }: StructuredProfileProps) {
  const dark = tone === "dark";

  return (
    <figure aria-label={copy.summary} className={`min-w-0 ${compact ? "" : "mt-12"}`}>
      <div className={`grid min-w-0 gap-3 ${compact ? "sm:grid-cols-2 sm:items-stretch" : "lg:grid-cols-[minmax(0,0.78fr)_auto_minmax(0,1.12fr)_auto_minmax(0,0.9fr)] lg:items-stretch"} ${dark ? "text-white" : "text-ink-950"}`}>
        <Stage className={`${compact ? "sm:col-start-1 sm:row-start-1" : ""} ${dark ? "border-white/15 bg-white/[0.06]" : "border-ink-950/15 bg-white"}`}>
          <StageIcon dark={dark}><FileText className="h-5 w-5" aria-hidden="true" /></StageIcon>
          <p className={`mt-5 text-xs font-black uppercase tracking-[0.14em] ${dark ? "text-cobalt-200" : "text-cobalt-500"}`}>01</p>
          <h3 className="mt-2 text-xl font-semibold">{copy.inputTitle}</h3>
          <ul className={`mt-5 divide-y ${dark ? "divide-white/10" : "divide-ink-950/10"}`}>
            {copy.inputItems.map((item) => <li key={item} className={`min-w-0 break-words py-2.5 text-sm leading-6 ${dark ? "text-slate-300" : "text-ink-600"}`}>{item}</li>)}
          </ul>
        </Stage>

        {compact ? null : <FlowArrow dark={dark} />}

        <Stage className={`${compact ? "sm:col-span-2 sm:row-start-2" : ""} ${dark ? "border-cobalt-300/40 bg-cobalt-500" : "border-cobalt-500 bg-cobalt-50"}`}>
          <StageIcon dark={false}><Building2 className="h-5 w-5" aria-hidden="true" /></StageIcon>
          <p className={`mt-5 text-xs font-black uppercase tracking-[0.14em] ${dark ? "text-cobalt-100" : "text-cobalt-600"}`}>02</p>
          <h3 className={`mt-2 text-xl font-semibold ${dark ? "text-white" : "text-ink-950"}`}>{copy.profileTitle}</h3>
          <dl className={`mt-5 min-w-0 divide-y rounded-md border px-4 sm:px-5 ${dark ? "divide-white/15 border-white/20 bg-white/10" : "divide-ink-950/10 border-cobalt-500/15 bg-white"}`}>
            {copy.fields.map((field) => (
              <div key={field.label} className="grid min-w-0 gap-1 py-3 text-sm sm:grid-cols-[minmax(7.5rem,0.78fr)_minmax(0,1.22fr)] sm:gap-4">
                <dt className={`min-w-0 leading-5 ${dark ? "text-cobalt-100" : "text-ink-600"}`}>{field.label}</dt>
                <dd className="min-w-0 break-words font-bold leading-5">{field.value}</dd>
              </div>
            ))}
          </dl>
        </Stage>

        {compact ? null : <FlowArrow dark={dark} />}

        <Stage className={`${compact ? "sm:col-start-2 sm:row-start-1" : ""} ${dark ? "border-white/15 bg-white/[0.06]" : "border-ink-950/15 bg-white"}`}>
          <div className="flex min-w-0 gap-2">
            <StageIcon dark={dark}><Search className="h-5 w-5" aria-hidden="true" /></StageIcon>
            <StageIcon dark={dark}><Bot className="h-5 w-5" aria-hidden="true" /></StageIcon>
          </div>
          <p className={`mt-5 text-xs font-black uppercase tracking-[0.14em] ${dark ? "text-cobalt-200" : "text-cobalt-500"}`}>03</p>
          <h3 className="mt-2 text-xl font-semibold">{copy.outputTitle}</h3>
          <ul className="mt-5 grid gap-2.5">
            {copy.outcomes.map((item) => (
              <li key={item} className={`flex min-w-0 gap-2 break-words text-sm leading-6 ${dark ? "text-slate-200" : "text-ink-700"}`}>
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-acid text-ink-950"><Check className="h-3 w-3" aria-hidden="true" /></span>
                {item}
              </li>
            ))}
          </ul>
        </Stage>
      </div>

      <div className={`mt-3 grid min-w-0 gap-3 ${compact ? "" : "lg:grid-cols-[minmax(0,1fr)_auto] lg:items-start"} ${dark ? "text-slate-300" : "text-ink-600"}`}>
        <figcaption className="min-w-0 break-words text-sm leading-6">{copy.summary}</figcaption>
        <details className={`min-w-0 rounded-md border px-3 py-2 text-xs ${dark ? "border-white/15 bg-white/[0.04]" : "border-ink-950/15 bg-white"}`}>
          <summary className="cursor-pointer font-semibold">{copy.codeLabel}</summary>
          <code className="mt-2 block whitespace-pre-wrap break-words font-mono text-[10px] leading-5 opacity-75">{copy.code}</code>
        </details>
      </div>
    </figure>
  );
}

function Stage({ children, className }: { children: React.ReactNode; className: string }) {
  return <div className={`min-h-60 min-w-0 rounded-[12px] border p-5 sm:p-6 shadow-crisp ${className}`}>{children}</div>;
}

function StageIcon({ children, dark }: { children: React.ReactNode; dark: boolean }) {
  return <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-md ${dark ? "bg-white/10 text-cobalt-200" : "bg-white text-cobalt-600 shadow-crisp"}`}>{children}</span>;
}

function FlowArrow({ dark }: { dark: boolean }) {
  return (
    <div className={`grid place-items-center py-1 ${dark ? "text-cobalt-200" : "text-cobalt-500"}`} aria-hidden="true">
      <ArrowDown className="h-5 w-5 lg:hidden" />
      <ArrowRight className="hidden h-5 w-5 lg:block" />
    </div>
  );
}
