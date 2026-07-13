import {
  ArrowRight,
  BarChart3,
  BrainCircuit,
  Building2,
  CalendarCheck,
  Check,
  CheckCircle2,
  Code2,
  DatabaseZap,
  FileJson2,
  Gauge,
  Globe2,
  Layers3,
  LineChart,
  MapPinned,
  MousePointerClick,
  PanelsTopLeft,
  Search,
  ShieldCheck,
  Target,
  Workflow
} from "lucide-react";
import { siteConfig } from "@/data/site";
import { localePath, type Locale } from "@/i18n/locales";
import { localizedUrl } from "@/i18n/seo";
import type { Messages } from "@/i18n/types";
import { ContactForm } from "@/components/contact-form";
import { FAQAccordion } from "@/components/faq-accordion";
import { Header } from "@/components/header";
import { HeroVisual } from "@/components/hero-visual";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

const problemIcons = [BrainCircuit, Search, ShieldCheck, MousePointerClick];
const solutionIcons = [Workflow, FileJson2, MousePointerClick];
const serviceIcons = [
  BrainCircuit,
  Workflow,
  Search,
  FileJson2,
  PanelsTopLeft,
  Globe2,
  Target,
  MapPinned,
  Gauge,
  Layers3,
  CalendarCheck,
  BarChart3
];
const contactIcons = [Code2, LineChart, DatabaseZap];

export function HomePage({ locale, messages }: { locale: Locale; messages: Messages }) {
  const sectionHref = (hash: string) => `${localePath(locale)}${hash}`;
  const pageHref = (pathname: string) => localePath(locale, pathname);

  return (
    <>
      <JsonLd locale={locale} messages={messages} />
      <Header locale={locale} copy={messages.navigation} />
      <main id="top" className="relative overflow-hidden">
        <div className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(127,167,230,0.10),transparent_30%),radial-gradient(circle_at_82%_22%,rgba(148,163,184,0.08),transparent_28%),linear-gradient(180deg,#050713_0%,#080b18_45%,#050713_100%)]" />
        </div>

        <section className="relative min-h-[92svh] px-5 pb-20 pt-32 sm:px-6 lg:px-8 lg:pt-36">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
            <Reveal className="max-w-3xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-slate-200 shadow-panel">
                <ShieldCheck className="h-4 w-4 text-signal-blue" aria-hidden="true" />
                {messages.hero.eyebrow}
              </div>
              <h1 className="text-balance text-4xl font-semibold leading-[1.04] tracking-tight text-white sm:text-6xl lg:text-7xl">
                {messages.hero.title}
              </h1>
              <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-slate-300 sm:text-xl">
                {messages.hero.description}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={sectionHref("#contact")} className="btn-primary justify-center">
                  <CalendarCheck className="h-4 w-4" aria-hidden="true" />
                  <span>{messages.hero.primaryCta}</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <a href={sectionHref("#services")} className="btn-secondary justify-center">
                  <Layers3 className="h-4 w-4" aria-hidden="true" />
                  <span>{messages.hero.secondaryCta}</span>
                </a>
              </div>
              <div className="mt-9 grid gap-3 border-t border-white/10 pt-6 sm:grid-cols-2">
                {messages.hero.trustPoints.map((point) => (
                  <div key={point} className="flex items-center gap-3 text-sm text-slate-300">
                    <span className="grid h-7 w-7 place-items-center rounded-md border border-white/10 bg-white/[0.04]">
                      <Check className="h-4 w-4 text-signal-blue" aria-hidden="true" />
                    </span>
                    {point}
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={120}>
              <HeroVisual copy={messages.heroVisual} />
            </Reveal>
          </div>
        </section>

        <section className="section-divider px-5 py-24 sm:px-6 lg:px-8" id="problem">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <SectionHeading
                eyebrow={messages.problem.eyebrow}
                title={messages.problem.title}
                description={messages.problem.description}
              />
            </Reveal>
            <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {messages.problem.items.map((item, index) => {
                const Icon = problemIcons[index] || ShieldCheck;
                return (
                  <Reveal key={item.title} delay={index * 70}>
                    <article className="h-full rounded-lg border border-white/10 bg-white/[0.032] p-5 shadow-panel transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05]">
                      <div className="mb-5 grid h-10 w-10 place-items-center rounded-md border border-white/10 bg-ink-800 text-signal-blue">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-slate-300">{item.description}</p>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section-divider px-5 py-24 sm:px-6 lg:px-8" id="solution">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
              <Reveal>
                <SectionHeading
                  eyebrow={messages.solution.eyebrow}
                  title={messages.solution.title}
                  description={messages.solution.description}
                  align="left"
                />
                <a href={sectionHref("#contact")} className="btn-primary mt-8 inline-flex">
                  <span>{messages.solution.cta}</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </Reveal>
              <div className="grid gap-4">
                {messages.solution.items.map((item, index) => {
                  const Icon = solutionIcons[index] || Workflow;
                  return (
                    <Reveal key={item.title} delay={index * 90}>
                      <article className="rounded-lg border border-white/10 bg-white/[0.04] p-6 shadow-panel transition hover:border-signal-blue/40 hover:bg-white/[0.06]">
                        <div className="flex flex-col gap-5 sm:flex-row">
                          <div className="grid h-12 w-12 shrink-0 place-items-center rounded-md border border-white/10 bg-ink-800 text-signal-blue">
                            <Icon className="h-6 w-6" aria-hidden="true" />
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                            <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </article>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="section-divider px-5 py-24 sm:px-6 lg:px-8" id="services">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <SectionHeading
                eyebrow={messages.services.eyebrow}
                title={messages.services.title}
                description={messages.services.description}
              />
            </Reveal>
            <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {messages.services.cards.map((service, index) => {
                const Icon = serviceIcons[index] || Layers3;
                return (
                  <Reveal key={service.title} delay={(index % 3) * 80}>
                    <article className="service-card group h-full min-h-[318px] rounded-lg border border-white/10 bg-white/[0.032] p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.052]">
                      <div className="flex items-start justify-between gap-4">
                        <div className="grid h-11 w-11 place-items-center rounded-md border border-white/10 bg-ink-800 text-signal-blue transition group-hover:text-white">
                          <Icon className="h-5 w-5" aria-hidden="true" />
                        </div>
                        <span className="rounded-md border border-white/10 bg-white/[0.035] px-2 py-1 text-xs font-medium text-slate-500">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <h3 className="mt-7 text-xl font-semibold text-white">{service.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-slate-300">{service.description}</p>
                      <ul className="mt-6 space-y-3 border-t border-white/10 pt-5">
                        {service.bullets.map((bullet) => (
                          <li key={bullet} className="flex items-center gap-3 text-sm text-slate-300">
                            <Check className="h-4 w-4 text-signal-blue" aria-hidden="true" />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-6 flex items-center gap-2 text-xs font-medium text-slate-500 transition group-hover:text-slate-300">
                        <span>{messages.services.includesLabel}</span>
                        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
                      </div>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section-divider px-5 py-24 sm:px-6 lg:px-8" id="ai-optimization">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <Reveal>
                <SectionHeading
                  eyebrow={messages.aiOptimization.eyebrow}
                  title={messages.aiOptimization.title}
                  description={messages.aiOptimization.description}
                  align="left"
                />
                <div className="mt-8 rounded-lg border border-white/10 bg-white/[0.035] p-5">
                  <div className="flex items-start gap-4">
                    <ShieldCheck className="mt-1 h-6 w-6 shrink-0 text-signal-blue" aria-hidden="true" />
                    <p className="text-sm leading-7 text-slate-300">{messages.aiOptimization.note}</p>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={120}>
                <div className="grid gap-3 sm:grid-cols-2">
                  {messages.aiOptimization.includes.map((item) => (
                    <div key={item} className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-slate-200 shadow-panel">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-signal-blue" aria-hidden="true" />
                      {item}
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="section-divider px-5 py-24 sm:px-6 lg:px-8" id="process">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <SectionHeading
                eyebrow={messages.process.eyebrow}
                title={messages.process.title}
                description={messages.process.description}
              />
            </Reveal>
            <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {messages.process.steps.map((step, index) => (
                <Reveal key={step.title} delay={(index % 3) * 80}>
                  <article className="h-full rounded-lg border border-white/10 bg-white/[0.032] p-6 shadow-panel transition hover:border-white/20 hover:bg-white/[0.05]">
                    <div className="flex items-center justify-between gap-4">
                      <p className="text-sm font-semibold text-signal-blue">{String(index + 1).padStart(2, "0")}</p>
                      <span className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs text-slate-400">
                        {messages.process.deliverableLabel}
                      </span>
                    </div>
                    <h3 className="mt-4 text-xl font-semibold text-white">{step.title}</h3>
                    <p className="mt-3 rounded-md border border-white/10 bg-white/[0.04] px-3 py-2 text-sm font-medium text-slate-200">
                      {step.deliverable}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-slate-300">{step.description}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section-divider px-5 py-24 sm:px-6 lg:px-8" id="work">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <SectionHeading
                eyebrow={messages.work.eyebrow}
                title={messages.work.title}
                description={messages.work.description}
              />
            </Reveal>
            <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {messages.work.projects.map((project, index) => (
                <Reveal key={project.title} delay={(index % 3) * 80}>
                  <article className="h-full rounded-lg border border-white/10 bg-white/[0.035] p-6 shadow-panel transition hover:border-signal-blue/40 hover:bg-white/[0.055]">
                    <div className="mb-5 flex items-center justify-between gap-3">
                      <span className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-1 text-sm text-slate-300">
                        {project.industry}
                      </span>
                      <Building2 className="h-5 w-5 text-slate-500" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                    <div className="mt-5 space-y-4 text-sm leading-7 text-slate-300">
                      <p>
                        <span className="font-semibold text-slate-100">{messages.work.problemLabel} </span>
                        {project.problem}
                      </p>
                      <p>
                        <span className="font-semibold text-slate-100">{messages.work.solutionLabel} </span>
                        {project.solution}
                      </p>
                      <p>
                        <span className="font-semibold text-slate-100">{messages.work.outcomeLabel} </span>
                        {project.outcome}
                      </p>
                    </div>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs text-slate-300">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section-divider px-5 py-24 sm:px-6 lg:px-8" id="pricing">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <SectionHeading
                eyebrow={messages.pricing.eyebrow}
                title={messages.pricing.title}
                description={messages.pricing.description}
              />
            </Reveal>
            <div className="mt-12 grid gap-4 lg:grid-cols-3">
              {messages.pricing.tiers.map((tier, index) => (
                <Reveal key={tier.name} delay={index * 90}>
                  <article
                    className={`relative h-full rounded-lg border p-6 shadow-card ${
                      index === 1
                        ? "border-signal-blue/35 bg-white/[0.055]"
                        : "border-white/10 bg-white/[0.035]"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-2xl font-semibold text-white">{tier.name}</h3>
                        <p className="mt-3 text-3xl font-semibold text-slate-100">{tier.price}</p>
                      </div>
                      {index === 1 ? (
                        <span className="rounded-md border border-signal-blue/25 bg-signal-blue/10 px-3 py-1 text-sm text-slate-200">
                          {messages.pricing.recommendedLabel}
                        </span>
                      ) : null}
                    </div>
                    <p className="mt-5 text-sm leading-7 text-slate-300">{tier.description}</p>
                    <ul className="mt-6 space-y-3">
                      {tier.includes.map((item) => (
                        <li key={item} className="flex gap-3 text-sm text-slate-300">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-signal-blue" aria-hidden="true" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <a href={sectionHref("#contact")} className="btn-secondary mt-7 w-full justify-center">
                      <span>{messages.pricing.cta}</span>
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                    <p className="mt-4 text-xs leading-6 text-slate-500">{messages.pricing.finePrint}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section-divider px-5 py-24 sm:px-6 lg:px-8" id="trust">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
              <Reveal>
                <SectionHeading
                  eyebrow={messages.trust.eyebrow}
                  title={messages.trust.title}
                  description={messages.trust.description}
                  align="left"
                />
              </Reveal>
              <Reveal delay={120}>
                <div className="grid gap-3 sm:grid-cols-2">
                  {messages.trust.items.map((item) => (
                    <div key={item} className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.04] p-4 text-sm text-slate-200 shadow-panel">
                      <ShieldCheck className="h-5 w-5 shrink-0 text-signal-blue" aria-hidden="true" />
                      {item}
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="section-divider px-5 py-24 sm:px-6 lg:px-8" id="faq">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <SectionHeading
                eyebrow={messages.faq.eyebrow}
                title={messages.faq.title}
                description={messages.faq.description}
              />
            </Reveal>
            <Reveal delay={100} className="mt-12">
              <FAQAccordion items={messages.faq.items} />
            </Reveal>
          </div>
        </section>

        <section className="section-divider px-5 py-24 sm:px-6 lg:px-8" id="contact">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <Reveal>
              <SectionHeading
                eyebrow={messages.contact.eyebrow}
                title={messages.contact.title}
                description={messages.contact.description}
                align="left"
              />
              <div className="mt-8 space-y-4 text-sm leading-7 text-slate-300">
                {messages.contact.points.map((point, index) => {
                  const Icon = contactIcons[index] || ShieldCheck;
                  return (
                    <p key={point} className="flex gap-3">
                      <Icon
                        className={`mt-1 h-5 w-5 shrink-0 ${index === 0 ? "text-signal-blue" : "text-slate-300"}`}
                        aria-hidden="true"
                      />
                      {point}
                    </p>
                  );
                })}
              </div>
            </Reveal>
            <Reveal delay={120}>
              <ContactForm locale={locale} copy={messages.form} />
            </Reveal>
          </div>
        </section>

        <section className="px-5 pb-24 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 rounded-lg border border-white/10 bg-white/[0.035] px-6 py-10 text-center shadow-card">
              <h2 className="max-w-3xl text-3xl font-semibold text-white sm:text-4xl">
                {messages.finalCta.title}
              </h2>
              <p className="max-w-2xl text-base leading-8 text-slate-300">
                {messages.finalCta.description}
              </p>
              <a href={sectionHref("#contact")} className="btn-primary">
                <span>{messages.finalCta.cta}</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="border-t border-white/10 px-5 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
          <div>
            <a href={sectionHref("#top")} className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-md border border-white/15 bg-white/[0.06] text-sm font-bold text-white">
                W
              </span>
              <span className="text-lg font-semibold text-white">
                Web<span className="text-signal-blue">2</span>Go
              </span>
            </a>
            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
              {messages.footer.description}
            </p>
          </div>
          {messages.footer.columns.map((column) => (
            <FooterColumn
              key={column.title}
              title={column.title}
              links={column.links.map((link) => ({
                label: link.label,
                href: sectionHref(link.href)
              }))}
            />
          ))}
          <div>
            <h3 className="text-sm font-semibold text-white">{messages.footer.contactTitle}</h3>
            {siteConfig.publicEmail ? (
              <a href={`mailto:${siteConfig.publicEmail}`} className="mt-4 block text-sm text-slate-400 transition hover:text-white">
                {siteConfig.publicEmail}
              </a>
            ) : (
              <p className="mt-4 text-sm leading-7 text-slate-400">{messages.footer.contactFallback}</p>
            )}
            <a href={sectionHref("#contact")} className="mt-5 inline-flex rounded-md border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-medium text-slate-300 transition hover:border-white/20 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-signal-blue/45">
              {messages.footer.requestLink}
            </a>
            <div className="mt-5 flex flex-wrap gap-3 text-xs text-slate-500">
              <a href={pageHref("/privacy")} className="hover:text-slate-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-signal-blue/45">
                {messages.footer.privacy}
              </a>
              <a href={pageHref("/terms")} className="hover:text-slate-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-signal-blue/45">
                {messages.footer.terms}
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

function JsonLd({ locale, messages }: { locale: Locale; messages: Messages }) {
  const organization: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: localizedUrl(locale),
    description: messages.metadata.description
  };

  if (siteConfig.publicEmail) {
    organization.email = siteConfig.publicEmail;
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: locale,
    mainEntity: messages.faq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };

  const structuredData = [
    organization,
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: siteConfig.name,
      url: localizedUrl(locale),
      inLanguage: locale
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: messages.jsonLd.serviceName,
      provider: {
        "@type": "Organization",
        name: siteConfig.name
      },
      areaServed: "Europe",
      inLanguage: locale,
      description: messages.jsonLd.serviceDescription
    },
    faqSchema
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

function FooterColumn({
  title,
  links
}: {
  title: string;
  links: Array<{ label: string; href: string }>;
}) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-white">{title}</h3>
      <div className="mt-4 grid gap-3">
        {links.map((link) => (
          <a key={link.label} href={link.href} className="text-sm text-slate-400 transition hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-signal-blue/45">
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}
