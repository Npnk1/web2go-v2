type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
  inverse?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  inverse = false
}: SectionHeadingProps) {
  return (
    <div
      className={`mx-auto max-w-3xl ${
        align === "center" ? "text-center" : "text-left"
      } ${align === "left" ? "mx-0" : ""}`}
    >
      <p
        className={`mb-4 text-sm font-semibold uppercase tracking-[0.14em] ${
          inverse ? "text-blue-300" : "text-blue-700"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl ${
          inverse ? "text-white" : "text-slate-950"
        }`}
      >
        {title}
      </h2>
      <p
        className={`mt-5 text-pretty text-base leading-8 sm:text-lg ${
          inverse ? "text-slate-300" : "text-slate-600"
        }`}
      >
        {description}
      </p>
    </div>
  );
}
