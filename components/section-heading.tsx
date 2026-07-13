type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center"
}: SectionHeadingProps) {
  return (
    <div
      className={`mx-auto max-w-3xl ${
        align === "center" ? "text-center" : "text-left"
      }`}
    >
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.12em] text-signal-blue">
        {eyebrow}
      </p>
      <h2 className="text-balance text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-pretty text-base leading-8 text-slate-300 sm:text-lg">
        {description}
      </p>
    </div>
  );
}

