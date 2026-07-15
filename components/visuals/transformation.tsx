import { Check, Minus, X } from "lucide-react";
import type { Messages } from "@/i18n/types";

export function Transformation({ problem, solution }: { problem: Messages["problem"]; solution: Messages["solution"] }) {
  return (
    <div className="grid overflow-hidden rounded-[14px] border border-ink-950/15 bg-white shadow-card lg:grid-cols-2">
      <article className="bg-paper p-6 sm:p-8 lg:p-10">
        <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-ink-600"><Minus className="h-4 w-4" aria-hidden="true" />{problem.eyebrow}</p>
        <h3 className="mt-5 max-w-md text-3xl font-semibold leading-tight text-ink-950">{problem.title}</h3>
        <div className="mt-8 grid gap-3">
          {problem.items.map((item) => (
            <div key={item.title} className="flex items-start gap-3 border-t border-ink-950/10 py-3">
              <X className="mt-0.5 h-4 w-4 shrink-0 text-ink-600" aria-hidden="true" />
              <span className="text-sm font-medium text-ink-700">{item.title}</span>
            </div>
          ))}
        </div>
      </article>
      <article className="relative overflow-hidden bg-cobalt-500 p-6 text-white sm:p-8 lg:p-10">
        <div className="absolute right-0 top-0 h-full w-1/3 border-l border-white/15 bg-[linear-gradient(90deg,transparent_49%,rgba(255,255,255,0.12)_50%,transparent_51%)] bg-[length:18px_18px]" aria-hidden="true" />
        <div className="relative">
          <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-cobalt-100"><Check className="h-4 w-4" aria-hidden="true" />{solution.eyebrow}</p>
          <h3 className="mt-5 max-w-md text-3xl font-semibold leading-tight">{solution.title}</h3>
          <div className="mt-8 grid gap-3">
            {solution.items.map((item) => (
              <div key={item.title} className="flex items-start gap-3 border-t border-white/20 py-3">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-acid text-ink-950"><Check className="h-3 w-3" aria-hidden="true" /></span>
                <span className="text-sm font-semibold text-white">{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}
