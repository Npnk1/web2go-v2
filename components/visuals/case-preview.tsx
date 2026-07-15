import { Check, MapPin } from "lucide-react";

type Project = {
  industry: string;
  title: string;
  problem: string;
  solution: string;
  outcome: string;
  tags: string[];
};

export function CasePreview({ project }: { project: Project }) {
  return (
    <figure aria-label={project.title} className="overflow-hidden rounded-[14px] border border-ink-950/15 bg-white shadow-lift">
      <div className="flex h-10 items-center gap-2 border-b border-ink-950/10 bg-paper px-4">
        <span className="h-2.5 w-2.5 rounded-full bg-ink-950/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-ink-950/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-cobalt-500" />
        <span className="ml-3 h-5 flex-1 rounded bg-white" />
      </div>
      <div className="grid min-h-[390px] lg:grid-cols-[1.15fr_0.85fr]">
        <div className="relative overflow-hidden bg-ink-950 p-6 text-white sm:p-9">
          <div className="absolute inset-y-0 right-0 w-1/2 technical-grid opacity-20" />
          <div className="relative max-w-lg">
            <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-cobalt-200"><MapPin className="h-4 w-4" aria-hidden="true" />{project.industry}</p>
            <h3 className="mt-10 text-4xl font-semibold leading-tight sm:text-5xl">{project.title}</h3>
            <div className="mt-8 flex flex-wrap gap-2">
              {project.tags.map((tag) => <span key={tag} className="rounded-full border border-white/20 px-3 py-1.5 text-xs text-white/75">{tag}</span>)}
            </div>
          </div>
          <div className="relative mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {project.tags.map((tag, index) => (
              <div key={tag} className={`min-h-24 rounded-md p-3 ${index === 0 ? "bg-cobalt-500" : index === 1 ? "bg-acid text-ink-950" : "bg-white text-ink-950"}`}>
                <Check className="h-4 w-4" aria-hidden="true" />
                <p className="mt-5 text-xs font-bold">{tag}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-cobalt-50 p-5 sm:p-7">
          <div className="rounded-lg bg-white p-5 shadow-card">
            <div className="h-2 w-16 rounded bg-cobalt-500" />
            <div className="mt-5 h-4 w-4/5 rounded bg-ink-950" />
            <div className="mt-2 h-4 w-2/3 rounded bg-ink-950" />
            <div className="mt-6 aspect-[4/3] rounded-md bg-paper p-4">
              <div className="grid h-full grid-cols-2 gap-3">
                <div className="rounded bg-cobalt-100" />
                <div className="grid gap-3">
                  <div className="rounded bg-white" />
                  <div className="rounded bg-acid" />
                </div>
              </div>
            </div>
            <div className="mt-5 h-8 w-28 rounded bg-cobalt-500" />
          </div>
        </div>
      </div>
    </figure>
  );
}
