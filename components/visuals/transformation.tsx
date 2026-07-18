import { ArrowDown, ArrowRight, Check, X } from "lucide-react";
import type { Messages } from "@/i18n/types";

export function Transformation({ problem, solution }: { problem: Messages["problem"]; solution: Messages["solution"] }) {
  return (
    <div className="overflow-hidden rounded-[14px] border border-ink-950/15 bg-white shadow-card">
      <div className="grid lg:grid-cols-2">
        <header className="bg-paper p-6 sm:p-8 lg:p-10">
          <p className="text-lg font-black uppercase tracking-[0.12em] text-ink-700">
            01 <span className="mx-2 text-ink-400">—</span> {problem.eyebrow}
          </p>
          <h3 className="mt-5 max-w-lg text-3xl font-semibold leading-tight text-ink-950 sm:text-4xl">{problem.title}</h3>
        </header>
        <header className="relative overflow-hidden bg-cobalt-500 p-6 text-white sm:p-8 lg:p-10">
          <div className="technical-grid absolute inset-y-0 right-0 w-1/3 opacity-[0.15]" aria-hidden="true" />
          <div className="relative">
            <p className="text-lg font-black uppercase tracking-[0.12em] text-white">
              02 <span className="mx-2 text-cobalt-200">—</span> {solution.eyebrow}
            </p>
            <h3 className="mt-5 max-w-lg text-3xl font-semibold leading-tight sm:text-4xl">{solution.title}</h3>
          </div>
        </header>
      </div>

      <div>
        {problem.items.map((problemItem, index) => {
          const solutionItem = solution.items[index];
          if (!solutionItem) return null;

          return (
            <div
              key={problemItem.title}
              className="match-row grid border-t border-ink-950/10 lg:grid-cols-[minmax(0,1fr)_56px_minmax(0,1fr)]"
              style={{ transitionDelay: `${index * 90}ms` }}
            >
              <div className="flex gap-4 bg-paper p-6 sm:p-8">
                <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full border border-ink-950/15 text-ink-600">
                  <X className="h-4 w-4" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-bold text-ink-950">{problemItem.title}</p>
                  <p className="mt-2 text-sm leading-6 text-ink-600">{problemItem.description}</p>
                </div>
              </div>
              <div className="relative z-10 grid place-items-center bg-[linear-gradient(to_bottom,#f5f3ec_0_50%,#2457f5_50%)] text-cobalt-600 lg:bg-[linear-gradient(to_right,#f5f3ec_0_50%,#2457f5_50%)]">
                <span className="grid h-9 w-9 place-items-center rounded-full border border-cobalt-500/25 bg-white shadow-crisp">
                  <ArrowDown className="h-4 w-4 lg:hidden" aria-hidden="true" />
                  <ArrowRight className="hidden h-4 w-4 lg:block" aria-hidden="true" />
                </span>
              </div>
              <div className="flex gap-4 bg-cobalt-500 p-6 text-white sm:p-8">
                <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-acid text-ink-950">
                  <Check className="h-4 w-4" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-bold">{solutionItem.title}</p>
                  <p className="mt-2 text-sm leading-6 text-cobalt-100">{solutionItem.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
