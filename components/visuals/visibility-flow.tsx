import { ArrowDown, ArrowRight, Bot, Building2, Braces, Search, Users } from "lucide-react";
import type { Messages } from "@/i18n/types";

export function VisibilityFlow({ copy, heroVisual }: { copy: Messages["aiOptimization"]; heroVisual: Messages["heroVisual"] }) {
  const stages = [
    { label: heroVisual.title, Icon: Building2 },
    { label: copy.includes[1], Icon: Braces },
    { label: heroVisual.channels.slice(0, 3).join(" / "), Icon: Bot },
    { label: heroVisual.channels[3], Icon: Users }
  ];

  return (
    <div className="relative mt-14 grid gap-3 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] lg:items-center">
      {stages.map(({ label, Icon }, index) => (
        <div key={label} className="contents">
          <div className={`min-h-40 rounded-[12px] border p-5 ${index === 1 ? "border-cobalt-200 bg-cobalt-500" : "border-white/15 bg-white/[0.06]"}`}>
            <span className={`grid h-10 w-10 place-items-center rounded-md ${index === 1 ? "bg-white text-cobalt-600" : "bg-white/10 text-cobalt-200"}`}>
              <Icon className="h-5 w-5" aria-hidden="true" />
            </span>
            <p className="mt-8 text-lg font-semibold text-white">{label}</p>
            <p className={`mt-2 text-xs font-medium uppercase tracking-[0.14em] ${index === 1 ? "text-cobalt-100" : "text-white/50"}`}>{String(index + 1).padStart(2, "0")}</p>
          </div>
          {index < stages.length - 1 ? (
            <div className="grid place-items-center text-cobalt-200" aria-hidden="true">
              <ArrowDown className="h-5 w-5 lg:hidden" />
              <ArrowRight className="hidden h-5 w-5 lg:block" />
            </div>
          ) : null}
        </div>
      ))}
      <Search className="pointer-events-none absolute -bottom-8 right-0 h-24 w-24 text-white/[0.035]" aria-hidden="true" />
    </div>
  );
}
