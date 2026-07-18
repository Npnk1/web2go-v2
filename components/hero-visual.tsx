import { ArrowDown, ArrowRight, Bot, Building2, Check, Search, Sparkles, Users } from "lucide-react";
import type { Messages } from "@/i18n/types";

const channelIcons = [Search, Bot, Sparkles, Users];

export function HeroVisual({ copy }: { copy: Messages["heroVisual"] }) {
  return (
    <figure aria-label={copy.eyebrow} className="technical-grid relative mx-auto w-full max-w-2xl overflow-hidden rounded-[14px] border border-ink-950/15 bg-canvas p-4 shadow-lift sm:p-5">
      <div className="mb-4 flex items-center justify-between gap-4 border-b border-ink-950/10 pb-4">
        <figcaption className="text-xs font-bold uppercase tracking-[0.18em] text-cobalt-500">{copy.eyebrow}</figcaption>
        <span className="flex shrink-0 items-center gap-2 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-ink-700 shadow-crisp">
          <span className="h-2 w-2 rounded-full bg-acid" />
          {copy.reviewLabel}
        </span>
      </div>

      <div className="hidden min-h-[420px] grid-cols-[minmax(0,0.76fr)_28px_minmax(0,1.14fr)_28px_minmax(0,0.82fr)] grid-rows-[repeat(4,minmax(0,1fr))] gap-y-2 sm:grid">
        {copy.rows.map((row, index) => (
          <div key={row.label} className="relative z-10 flex min-w-0 items-center rounded-md border border-ink-950/10 bg-white px-3 py-3 shadow-crisp" style={{ gridColumn: 1, gridRow: index + 1 }}>
            <div className="min-w-0">
              <p className="text-xs font-semibold leading-4 text-ink-950">{row.label}</p>
              <p className="mt-1 flex items-center gap-1.5 text-[11px] font-medium text-cobalt-600">
                <Check className="h-3 w-3 shrink-0" aria-hidden="true" />
                {row.value}
              </p>
            </div>
          </div>
        ))}

        {copy.rows.map((row, index) => (
          <ConnectorLane key={`input-${row.label}`} gridColumn={2} gridRow={index + 1} />
        ))}

        <div className="relative z-10" style={{ gridColumn: 3, gridRow: "1 / 5" }}>
          <BusinessPreview copy={copy.preview} />
        </div>

        {copy.channels.map((channel, index) => (
          <ConnectorLane key={`output-${channel}`} gridColumn={4} gridRow={index + 1} />
        ))}

        {copy.channels.map((channel, index) => {
          const Icon = channelIcons[index] || Search;
          return (
            <div key={channel} className="relative z-10 flex min-w-0 items-center gap-2 rounded-md border border-ink-950/10 bg-white px-2.5 py-3 shadow-crisp" style={{ gridColumn: 5, gridRow: index + 1 }}>
              <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-cobalt-50 text-cobalt-600">
                <Icon className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
              <span className="min-w-0 text-xs font-semibold leading-4 text-ink-950">{channel}</span>
            </div>
          );
        })}
      </div>

      <div className="grid gap-4 sm:hidden">
        <div className="grid grid-cols-2 gap-2">
          {copy.rows.map((row) => (
            <div key={row.label} className="rounded-md border border-ink-950/10 bg-white px-3 py-3 shadow-crisp">
              <p className="text-xs font-semibold leading-4 text-ink-950">{row.label}</p>
              <p className="mt-1 flex items-center gap-1.5 text-[11px] font-medium text-cobalt-600"><Check className="h-3 w-3" aria-hidden="true" />{row.value}</p>
            </div>
          ))}
        </div>
        <ArrowDown className="mx-auto h-5 w-5 text-cobalt-500" aria-hidden="true" />
        <BusinessPreview copy={copy.preview} />
        <ArrowDown className="mx-auto h-5 w-5 text-cobalt-500" aria-hidden="true" />
        <div className="grid grid-cols-2 gap-2">
          {copy.channels.map((channel, index) => {
            const Icon = channelIcons[index] || Search;
            return (
              <div key={channel} className="flex min-w-0 items-center gap-2 rounded-md border border-ink-950/10 bg-white px-3 py-3 shadow-crisp">
                <Icon className="h-4 w-4 shrink-0 text-cobalt-600" aria-hidden="true" />
                <span className="text-xs font-semibold leading-4 text-ink-950">{channel}</span>
              </div>
            );
          })}
        </div>
      </div>
    </figure>
  );
}

function BusinessPreview({ copy }: { copy: Messages["heroVisual"]["preview"] }) {
  return (
    <div className="h-full rounded-[12px] border border-ink-950 bg-ink-950 p-3 shadow-card sm:p-4">
      <div className="flex h-full flex-col rounded-lg bg-white p-3 sm:p-4">
        <div className="flex items-center gap-3 border-b border-ink-950/10 pb-3">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-md bg-cobalt-500 text-white">
            <Building2 className="h-5 w-5" aria-hidden="true" />
          </span>
          <div className="min-w-0">
            <p className="text-xs font-bold leading-4 text-ink-950">{copy.business}</p>
            <p className="mt-0.5 text-[9px] uppercase leading-4 tracking-[0.12em] text-ink-600">{copy.category}</p>
          </div>
        </div>
        <div className="flex flex-1 flex-col pt-4">
          <p className="text-lg font-semibold leading-tight text-ink-950">{copy.headline}</p>
          <p className="mt-2 text-[11px] leading-5 text-ink-600">{copy.description}</p>
          <div className="mt-3 grid gap-1.5">
            {copy.services.map((service) => (
              <span key={service} className="rounded-sm bg-cobalt-50 px-2 py-1.5 text-[10px] font-bold text-cobalt-700">{service}</span>
            ))}
          </div>
          <span className="mt-3 inline-flex w-fit items-center gap-1.5 rounded-sm bg-cobalt-500 px-3 py-2 text-[10px] font-bold text-white">
            {copy.cta}<ArrowRight className="h-3 w-3" aria-hidden="true" />
          </span>
          <span className="mt-auto pt-3 text-[9px] font-medium leading-4 text-ink-500">{copy.outcome}</span>
        </div>
      </div>
    </div>
  );
}

function ConnectorLane({ gridColumn, gridRow }: { gridColumn: number; gridRow: number }) {
  return (
    <svg
      className="relative z-0 block h-full w-full overflow-visible"
      style={{ gridColumn, gridRow }}
      viewBox="0 0 100 32"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path d="M 0 16 C 34 16, 66 16, 100 16" fill="none" stroke="#2457f5" strokeDasharray="5 6" strokeWidth="1.5" vectorEffect="non-scaling-stroke" opacity="0.55" />
      <circle cx="2" cy="16" r="2.5" fill="#2457f5" opacity="0.65" vectorEffect="non-scaling-stroke" />
      <circle cx="98" cy="16" r="2.5" fill="#2457f5" opacity="0.65" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}
