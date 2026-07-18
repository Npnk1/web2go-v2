import { EmphasisText } from "@/components/emphasis-text";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  emphasis?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  number?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  emphasis,
  align = "center",
  tone = "light",
  number
}: SectionHeadingProps) {
  return (
    <div
      className={`mx-auto max-w-3xl ${
        align === "center" ? "text-center" : "text-left"
      }`}
    >
      <div className={`mb-5 flex items-center gap-3 ${align === "center" ? "justify-center" : "justify-start"}`}>
        {number ? (
          <span className={`rounded-full px-2.5 py-1 text-[11px] font-bold ${tone === "dark" ? "bg-acid text-ink-950" : "bg-cobalt-500 text-white"}`}>
            {number}
          </span>
        ) : null}
        <p className={`text-xs font-bold uppercase tracking-[0.18em] ${tone === "dark" ? "text-cobalt-200" : "text-cobalt-500"}`}>
          {eyebrow}
        </p>
      </div>
      <h2 className={`text-balance text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl ${tone === "dark" ? "text-white" : "text-ink-950"}`}>
        <EmphasisText text={title} emphasis={emphasis} className={tone === "dark" ? "text-acid" : "text-cobalt-600"} />
      </h2>
      <p className={`mt-5 text-pretty text-base leading-7 sm:text-lg sm:leading-8 ${tone === "dark" ? "text-slate-300" : "text-ink-600"}`}>
        {description}
      </p>
    </div>
  );
}

