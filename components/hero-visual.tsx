import Image from "next/image";
import {
  Activity,
  Bot,
  Braces,
  Gauge,
  GitBranch,
  Network,
  SearchCheck,
  ShieldCheck
} from "lucide-react";

const signalNodes = [
  { label: "Entity clarity", icon: Network, tone: "text-signal-cyan" },
  { label: "Schema", icon: Braces, tone: "text-signal-blue" },
  { label: "Speed", icon: Gauge, tone: "text-signal-mint" },
  { label: "Trust", icon: ShieldCheck, tone: "text-signal-violet" }
];

export function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
      <div className="absolute -inset-4 rounded-lg bg-gradient-to-br from-signal-blue/20 via-signal-cyan/10 to-signal-violet/20 blur-2xl" />
      <div className="visual-frame relative overflow-hidden rounded-lg border border-white/10 bg-ink-850/70 shadow-card backdrop-blur">
        <Image
          src="/images/ai-visibility-dashboard.png"
          alt="Abstract AI visibility dashboard with structured website signals"
          width={1200}
          height={630}
          priority
          className="h-auto w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/20 to-transparent" />
        <div className="scan-line absolute inset-x-0 top-0 h-1/2" />

        <div className="absolute left-4 top-4 rounded-md border border-white/10 bg-ink-950/80 p-4 backdrop-blur-md sm:left-6 sm:top-6">
          <div className="mb-3 flex items-center gap-2 text-sm font-medium text-white">
            <SearchCheck className="h-4 w-4 text-signal-cyan" aria-hidden="true" />
            AI readiness map
          </div>
          <div className="grid gap-2">
            {signalNodes.map((node) => {
              const Icon = node.icon;
              return (
                <div key={node.label} className="flex items-center gap-3 text-xs text-slate-300">
                  <span className="grid h-7 w-7 place-items-center rounded-md border border-white/10 bg-white/[0.05]">
                    <Icon className={`h-4 w-4 ${node.tone}`} aria-hidden="true" />
                  </span>
                  <span>{node.label}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="absolute bottom-4 right-4 w-[min(74%,320px)] rounded-md border border-white/10 bg-ink-950/80 p-4 backdrop-blur-md sm:bottom-6 sm:right-6">
          <div className="mb-3 flex items-center justify-between gap-3">
            <span className="flex items-center gap-2 text-sm font-medium text-white">
              <Bot className="h-4 w-4 text-signal-violet" aria-hidden="true" />
              Answer structure
            </span>
            <Activity className="h-4 w-4 animate-pulseSoft text-signal-mint" aria-hidden="true" />
          </div>
          <div className="space-y-2">
            <div className="h-2 rounded bg-white/20" />
            <div className="h-2 w-10/12 rounded bg-white/10" />
            <div className="h-2 w-8/12 rounded bg-white/10" />
          </div>
          <div className="mt-4 flex items-center gap-2 text-xs text-slate-300">
            <GitBranch className="h-4 w-4 text-signal-cyan" aria-hidden="true" />
            Content, schema, links, and trust aligned
          </div>
        </div>
      </div>
    </div>
  );
}
