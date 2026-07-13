import {
  Braces,
  CheckCircle2,
  FileText,
  Gauge,
  GitBranch,
  Network,
  SearchCheck,
  ShieldCheck
} from "lucide-react";
import type { Messages } from "@/i18n/types";

const rowIcons = [Network, Braces, Gauge, ShieldCheck];

export function HeroVisual({ copy }: { copy: Messages["heroVisual"] }) {
  return (
    <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
      <div className="rounded-xl border border-white/10 bg-ink-850/95 p-4 shadow-card sm:p-5">
        <div className="rounded-lg border border-white/10 bg-ink-950/65">
          <div className="flex items-center justify-between gap-4 border-b border-white/10 px-4 py-3 sm:px-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                {copy.eyebrow}
              </p>
              <h2 className="mt-1 text-lg font-semibold text-white">{copy.title}</h2>
            </div>
            <div className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-2 text-right">
              <p className="text-xs text-slate-500">{copy.scoreLabel}</p>
              <p className="text-lg font-semibold text-slate-100">82/100</p>
            </div>
          </div>

          <div className="grid gap-0 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="border-b border-white/10 p-4 lg:border-b-0 lg:border-r sm:p-5">
              <div className="mb-4 flex items-center gap-2 text-sm font-medium text-slate-100">
                <SearchCheck className="h-4 w-4 text-signal-blue" aria-hidden="true" />
                {copy.readabilityTitle}
              </div>
              <div className="space-y-3">
                {copy.rows.map((row, index) => {
                  const Icon = rowIcons[index] || ShieldCheck;
                  return (
                    <div
                      key={row.label}
                      className="flex items-center justify-between gap-3 rounded-md border border-white/10 bg-white/[0.035] px-3 py-2.5"
                    >
                      <span className="flex items-center gap-3 text-sm text-slate-300">
                        <Icon className="h-4 w-4 text-signal-blue" aria-hidden="true" />
                        {row.label}
                      </span>
                      <span className="text-xs font-medium text-slate-400">{row.value}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="p-4 sm:p-5">
              <div className="mb-4 flex items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-sm font-medium text-slate-100">
                  <GitBranch className="h-4 w-4 text-signal-blue" aria-hidden="true" />
                  {copy.discoveryTitle}
                </div>
                <span className="rounded-md border border-white/10 bg-white/[0.035] px-2 py-1 text-xs text-slate-500">
                  {copy.reviewLabel}
                </span>
              </div>

              <div className="space-y-3">
                {copy.metrics.map((metric) => (
                  <MetricBar
                    key={metric.label}
                    label={metric.label}
                    value={metric.value}
                    width={metric.width}
                  />
                ))}
              </div>

              <div className="mt-5 rounded-md border border-white/10 bg-white/[0.035] p-4">
                <div className="mb-3 flex items-center gap-2 text-sm font-medium text-slate-100">
                  <FileText className="h-4 w-4 text-signal-blue" aria-hidden="true" />
                  {copy.nextActionsTitle}
                </div>
                <ul className="space-y-2">
                  {copy.auditItems.map((item) => (
                    <li key={item} className="flex gap-2 text-xs leading-5 text-slate-400">
                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-signal-blue" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MetricBar({ label, value, width }: { label: string; value: string; width: string }) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between gap-3 text-xs">
        <span className="text-slate-400">{label}</span>
        <span className="font-medium text-slate-300">{value}</span>
      </div>
      <div className="h-2 overflow-hidden rounded bg-white/10">
        <div className={`h-full rounded bg-signal-blue/75 ${width}`} />
      </div>
    </div>
  );
}
