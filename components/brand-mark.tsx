export function BrandMark({ inverse = false }: { inverse?: boolean }) {
  return (
    <span className="inline-flex items-center gap-3" aria-hidden="true">
      <span className={`relative grid h-9 w-9 place-items-center rounded-md border text-sm font-bold ${inverse ? "border-white/25 bg-white text-ink-950" : "border-ink-950/15 bg-ink-950 text-white"}`}>
        W
        <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full border-2 border-current bg-acid" />
      </span>
      <span className={`text-lg font-semibold tracking-tight ${inverse ? "text-white" : "text-ink-950"}`}>
        Web<span className={inverse ? "text-cobalt-200" : "text-cobalt-500"}>2</span>Go
      </span>
    </span>
  );
}
