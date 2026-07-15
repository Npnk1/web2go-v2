import { Braces, Check, FileText, Search, Sparkles } from "lucide-react";

type Service = {
  title: string;
  description: string;
  bullets: string[];
};

export function ServiceScene({ service, type }: { service: Service; type: "visibility" | "website" | "schema" }) {
  if (type === "website") {
    return <WebsiteScene service={service} />;
  }

  if (type === "schema") {
    return <SchemaScene service={service} />;
  }

  return <VisibilityScene service={service} />;
}

function SceneShell({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <figure aria-label={label} className="technical-grid relative min-h-[330px] overflow-hidden rounded-[14px] border border-ink-950/15 bg-white p-5 shadow-card sm:p-7">
      {children}
    </figure>
  );
}

function VisibilityScene({ service }: { service: Service }) {
  return (
    <SceneShell label={service.title}>
      <div className="mx-auto max-w-md">
        <div className="rounded-lg border border-ink-950/10 bg-canvas p-4 shadow-card">
          <div className="flex items-center gap-2 border-b border-ink-950/10 pb-3 text-xs font-semibold text-ink-600">
            <Search className="h-4 w-4 text-cobalt-500" aria-hidden="true" />
            {service.bullets[0]}
          </div>
          <p className="mt-4 text-sm font-bold text-cobalt-600">web2go.eu / services</p>
          <p className="mt-1 text-lg font-semibold text-ink-950">{service.title}</p>
          <p className="mt-2 text-xs leading-5 text-ink-600">{service.description}</p>
        </div>
        <div className="ml-auto mt-4 w-[86%] rounded-lg bg-ink-950 p-4 text-white shadow-lift">
          <div className="flex items-center gap-2 text-xs font-semibold text-cobalt-200">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            {service.bullets[1]}
          </div>
          <div className="mt-4 space-y-2">
            <div className="h-2 w-full rounded bg-white/20" />
            <div className="h-2 w-5/6 rounded bg-white/20" />
            <div className="h-2 w-2/3 rounded bg-white/20" />
          </div>
          <div className="mt-4 flex items-center gap-2 border-t border-white/15 pt-3 text-[11px] text-white/70">
            <Check className="h-3.5 w-3.5 text-acid" aria-hidden="true" />
            {service.bullets[2]}
          </div>
        </div>
      </div>
    </SceneShell>
  );
}

function WebsiteScene({ service }: { service: Service }) {
  return (
    <SceneShell label={service.title}>
      <div className="mx-auto overflow-hidden rounded-lg border border-ink-950/15 bg-white shadow-lift">
        <div className="flex h-10 items-center gap-2 border-b border-ink-950/10 bg-paper px-4">
          <span className="h-2.5 w-2.5 rounded-full bg-ink-950/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-ink-950/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-cobalt-500" />
          <span className="ml-3 h-5 flex-1 rounded bg-white" />
        </div>
        <div className="grid min-h-[240px] grid-cols-[1.1fr_0.9fr]">
          <div className="p-5 sm:p-7">
            <div className="h-2 w-20 rounded bg-cobalt-500" />
            <div className="mt-5 h-5 w-full max-w-56 rounded bg-ink-950" />
            <div className="mt-2 h-5 w-4/5 rounded bg-ink-950" />
            <div className="mt-5 h-2 w-full rounded bg-ink-950/15" />
            <div className="mt-2 h-2 w-3/4 rounded bg-ink-950/15" />
            <div className="mt-6 h-9 w-28 rounded bg-cobalt-500" />
          </div>
          <div className="m-3 grid place-items-center rounded-md bg-cobalt-50 p-4">
            <div className="grid w-full gap-2">
              {service.bullets.map((bullet) => (
                <div key={bullet} className="flex items-center gap-2 rounded bg-white px-3 py-2 text-[10px] font-semibold text-ink-700 shadow-crisp">
                  <Check className="h-3 w-3 text-cobalt-500" aria-hidden="true" />
                  {bullet}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SceneShell>
  );
}

function SchemaScene({ service }: { service: Service }) {
  return (
    <SceneShell label={service.title}>
      <div className="mx-auto max-w-md rounded-lg bg-ink-950 p-5 text-white shadow-lift">
        <div className="flex items-center justify-between border-b border-white/15 pb-4">
          <span className="flex items-center gap-2 text-xs font-semibold text-cobalt-200"><Braces className="h-4 w-4" aria-hidden="true" />JSON-LD</span>
          <span className="rounded-full bg-acid px-2 py-1 text-[10px] font-bold text-ink-950">VALID</span>
        </div>
        <div className="mt-5 space-y-3 font-mono text-[11px] leading-5 text-white/75">
          <p><span className="text-cobalt-200">@type</span>: <span className="text-acid">&quot;Organization&quot;</span></p>
          <p className="pl-4"><span className="text-cobalt-200">service</span>: <span className="text-acid">&quot;{service.title}&quot;</span></p>
          <p className="pl-4"><span className="text-cobalt-200">areaServed</span>: <span className="text-acid">&quot;Europe&quot;</span></p>
          <p className="pl-4"><span className="text-cobalt-200">url</span>: <span className="text-acid">&quot;web2go.eu&quot;</span></p>
        </div>
        <div className="mt-6 grid gap-2 border-t border-white/15 pt-4 sm:grid-cols-3">
          {service.bullets.map((bullet) => (
            <span key={bullet} className="flex items-center gap-1.5 text-[10px] text-white/65"><FileText className="h-3 w-3 text-cobalt-200" aria-hidden="true" />{bullet}</span>
          ))}
        </div>
      </div>
    </SceneShell>
  );
}
