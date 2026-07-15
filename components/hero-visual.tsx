import { Bot, Building2, Check, Search, Sparkles, Users } from "lucide-react";
import type { Messages } from "@/i18n/types";

const channelIcons = [Search, Bot, Sparkles, Users];

export function HeroVisual({ copy }: { copy: Messages["heroVisual"] }) {
  return (
    <figure aria-label={copy.eyebrow} className="technical-grid relative mx-auto w-full max-w-2xl overflow-hidden rounded-[14px] border border-ink-950/15 bg-canvas p-4 shadow-lift sm:p-6">
      <div className="mb-5 flex items-center justify-between border-b border-ink-950/10 pb-4">
        <figcaption className="text-xs font-bold uppercase tracking-[0.18em] text-cobalt-500">{copy.eyebrow}</figcaption>
        <span className="flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-ink-700 shadow-crisp">
          <span className="h-2 w-2 rounded-full bg-acid" />
          {copy.reviewLabel}
        </span>
      </div>

      <div className="relative grid gap-4 sm:grid-cols-[0.78fr_1.08fr_0.78fr] sm:items-center sm:gap-5">
        <ConnectionLines />

        <div className="relative z-10 grid grid-cols-2 gap-2 sm:grid-cols-1">
          {copy.rows.map((row) => (
            <div key={row.label} className="min-w-0 rounded-md border border-ink-950/10 bg-white px-3 py-3 shadow-crisp">
              <p className="truncate text-xs font-semibold text-ink-950">{row.label}</p>
              <p className="mt-1 flex items-center gap-1.5 text-[11px] font-medium text-cobalt-600">
                <Check className="h-3 w-3" aria-hidden="true" />
                {row.value}
              </p>
            </div>
          ))}
        </div>

        <div className="relative z-10 rounded-[12px] border border-ink-950 bg-ink-950 p-3 shadow-card sm:p-4">
          <div className="rounded-lg bg-white p-3 sm:p-4">
            <div className="flex items-center gap-3 border-b border-ink-950/10 pb-3">
              <span className="grid h-9 w-9 place-items-center rounded-md bg-cobalt-500 text-white">
                <Building2 className="h-5 w-5" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <p className="truncate text-xs font-bold text-ink-950">{copy.title}</p>
                <p className="mt-0.5 text-[10px] uppercase tracking-[0.14em] text-ink-600">Web2Go</p>
              </div>
            </div>
            <div className="mt-3 grid gap-2">
              <div className="h-2.5 w-4/5 rounded-sm bg-ink-950" />
              <div className="h-1.5 w-full rounded-sm bg-ink-950/15" />
              <div className="h-1.5 w-5/6 rounded-sm bg-ink-950/15" />
              <div className="mt-2 grid grid-cols-3 gap-2">
                <span className="h-10 rounded-sm bg-cobalt-50" />
                <span className="h-10 rounded-sm bg-cobalt-50" />
                <span className="h-10 rounded-sm bg-cobalt-50" />
              </div>
              <div className="mt-1 h-7 w-24 rounded-sm bg-cobalt-500" />
            </div>
          </div>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {copy.auditItems.slice(0, 3).map((item) => (
              <span key={item} className="rounded-full border border-white/15 px-2 py-1 text-[9px] font-medium text-white/75">
                {item.split(" ").slice(0, 2).join(" ")}
              </span>
            ))}
          </div>
        </div>

        <div className="relative z-10 grid grid-cols-2 gap-2 sm:grid-cols-1">
          {copy.channels.map((channel, index) => {
            const Icon = channelIcons[index] || Search;
            return (
              <div key={channel} className="flex min-w-0 items-center gap-2.5 rounded-md border border-ink-950/10 bg-white px-3 py-3 shadow-crisp">
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-cobalt-50 text-cobalt-600">
                  <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
                <span className="truncate text-xs font-semibold text-ink-950">{channel}</span>
              </div>
            );
          })}
        </div>
      </div>
    </figure>
  );
}

function ConnectionLines() {
  return (
    <svg className="pointer-events-none absolute inset-0 hidden h-full w-full sm:block" viewBox="0 0 720 420" preserveAspectRatio="none" aria-hidden="true">
      {[70, 165, 255, 350].map((y) => (
        <path key={`in-${y}`} className="flow-line" d={`M 185 ${y} C 240 ${y}, 245 210, 310 210`} fill="none" stroke="#2457f5" strokeWidth="1.5" opacity="0.55" />
      ))}
      {[70, 165, 255, 350].map((y) => (
        <path key={`out-${y}`} className="flow-line" d={`M 410 210 C 475 210, 480 ${y}, 535 ${y}`} fill="none" stroke="#2457f5" strokeWidth="1.5" opacity="0.55" />
      ))}
    </svg>
  );
}
