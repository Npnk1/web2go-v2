import Image from "next/image";
import {
  BarChart3,
  CheckCircle2,
  FileJson2,
  Gauge,
  Link2,
  SearchCheck,
  ShieldCheck
} from "lucide-react";

const readinessRows = [
  { label: "Service clarity", value: "Strong", icon: SearchCheck },
  { label: "Schema coverage", value: "Mapped", icon: FileJson2 },
  { label: "Performance base", value: "Fast", icon: Gauge },
  { label: "Trust signals", value: "Visible", icon: ShieldCheck }
];

const tasks = [
  "Clarify service pages",
  "Add FAQPage schema",
  "Tighten internal links",
  "Improve consultation path"
];

export function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-2xl">
      <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-xl shadow-slate-200/60">
        <div className="rounded-md border border-slate-200 bg-slate-950 p-4 text-white">
          <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-300">
                Web2Go Readiness Console
              </p>
              <h2 className="mt-2 text-xl font-semibold">Website visibility review</h2>
            </div>
            <div className="rounded-md bg-blue-500 px-3 py-1 text-xs font-semibold text-white">
              In progress
            </div>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {readinessRows.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="rounded-md border border-white/10 bg-white/[0.06] p-4">
                  <div className="flex items-center justify-between gap-3">
                    <Icon className="h-5 w-5 text-blue-300" aria-hidden="true" />
                    <span className="text-sm font-semibold text-white">{item.value}</span>
                  </div>
                  <p className="mt-4 text-sm text-slate-300">{item.label}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-4 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-md border border-slate-200 bg-slate-50 p-4">
            <div className="flex items-center justify-between gap-3">
              <p className="text-sm font-semibold text-slate-950">Priority work</p>
              <BarChart3 className="h-5 w-5 text-blue-700" aria-hidden="true" />
            </div>
            <div className="mt-4 grid gap-3">
              {tasks.map((task) => (
                <div key={task} className="flex items-center gap-3 text-sm text-slate-700">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-blue-700" aria-hidden="true" />
                  {task}
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-md border border-slate-200 bg-white">
            <div className="flex items-center justify-between gap-4 border-b border-slate-200 px-4 py-3">
              <p className="text-sm font-semibold text-slate-950">Audit snapshot</p>
              <Link2 className="h-4 w-4 text-slate-400" aria-hidden="true" />
            </div>
            <div className="relative h-44 bg-slate-100">
              <Image
                src="/images/ai-visibility-dashboard.png"
                alt="Muted website audit dashboard preview"
                fill
                priority
                className="object-cover opacity-55 saturate-50"
                sizes="(min-width: 1024px) 360px, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-white via-white/40 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 rounded-md border border-slate-200 bg-white/90 p-3 shadow-sm backdrop-blur">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                  Recommendation
                </p>
                <p className="mt-1 text-sm font-medium text-slate-950">
                  Strengthen structure before scaling traffic.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
