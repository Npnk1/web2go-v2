import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarCheck,
  Check,
  CheckCircle2,
  Code2,
  DatabaseZap,
  LineChart,
  ShieldCheck
} from "lucide-react";
import { BrandMark } from "@/components/brand-mark";
import { ContactForm } from "@/components/contact-form";
import { DiscoveryStats } from "@/components/discovery-stats";
import { EmphasisText } from "@/components/emphasis-text";
import { FAQAccordion } from "@/components/faq-accordion";
import { Header } from "@/components/header";
import { HeroVisual } from "@/components/hero-visual";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { CasePreview } from "@/components/visuals/case-preview";
import { ServiceScene } from "@/components/visuals/service-scenes";
import { Transformation } from "@/components/visuals/transformation";
import { VisibilityFlow } from "@/components/visuals/visibility-flow";
import { siteConfig } from "@/data/site";
import { serviceDefinitions } from "@/data/services";
import { localeLabels, localePath, locales, type Locale } from "@/i18n/locales";
import { localizedUrl } from "@/i18n/seo";
import type { Messages } from "@/i18n/types";

const contactIcons = [Code2, LineChart, DatabaseZap];

export function HomePage({ locale, messages }: { locale: Locale; messages: Messages }) {
  const sectionHref = (hash: string) => `${localePath(locale)}${hash}`;
  const pageHref = (pathname: string) => localePath(locale, pathname);
  const processSteps = [
    messages.process.steps[0],
    messages.process.steps[3],
    messages.process.steps[4],
    messages.process.steps[5]
  ];

  return (
    <>
      <JsonLd locale={locale} messages={messages} />
      <Header locale={locale} copy={messages.navigation} />
      <main id="top" className="overflow-x-clip bg-paper">
        <section className="px-5 pb-16 pt-32 sm:px-6 sm:pb-20 sm:pt-36 lg:px-8 lg:pb-16 lg:pt-32">
          <div className="mx-auto grid max-w-[var(--container)] items-center gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:gap-16">
            <Reveal className="max-w-3xl">
              <p className="eyebrow">{messages.hero.eyebrow}</p>
              <h1 className="mt-7 text-balance text-5xl font-semibold leading-[0.98] text-ink-950 sm:text-6xl lg:text-[4.75rem]">
                <EmphasisText text={messages.hero.title} emphasis={messages.emphasis.hero} />
              </h1>
              <p className="mt-7 max-w-xl text-pretty text-lg leading-8 text-ink-600 sm:text-xl">
                {messages.hero.description}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={sectionHref("#contact")} className="btn-primary">
                  <CalendarCheck className="h-4 w-4" aria-hidden="true" />
                  <span>{messages.hero.primaryCta}</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <a href={sectionHref("#services")} className="btn-secondary">
                  <span>{messages.hero.secondaryCta}</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
              <div className="mt-10 flex items-start gap-3 border-t border-ink-950/15 pt-5 text-sm leading-6 text-ink-600">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-cobalt-500" aria-hidden="true" />
                <span>{messages.aiOptimization.note}</span>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <HeroVisual copy={messages.heroVisual} />
            </Reveal>
          </div>
        </section>

        <section className="border-y border-ink-950/10 bg-canvas px-5 sm:px-6 lg:px-8" aria-label={messages.trust.eyebrow}>
          <div className="mx-auto grid max-w-[var(--container)] divide-y divide-ink-950/10 md:grid-cols-3 md:divide-x md:divide-y-0">
            {messages.trust.items.slice(0, 3).map((item, index) => (
              <div key={item} className="flex items-center gap-4 py-6 md:px-7 first:md:pl-0 last:md:pr-0">
                <span className="text-xs font-bold text-cobalt-500">0{index + 1}</span>
                <p className="text-sm font-semibold text-ink-700">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section-shell" id="services">
          <div className="mx-auto max-w-[var(--container)]">
            <Reveal>
              <SectionHeading eyebrow={messages.services.eyebrow} title={messages.services.title} description={messages.services.description} emphasis={messages.emphasis.services} align="left" number="01" />
            </Reveal>
            <div className="mt-12 border-t border-ink-950/15">
              {serviceDefinitions.map((definition, position) => {
                const service = messages.services.cards[definition.index];
                return (
                  <Reveal key={definition.slug}>
                    <article className="grid gap-8 border-b border-ink-950/15 py-10 lg:grid-cols-2 lg:items-center lg:gap-14 lg:py-14">
                      <div className={position % 2 === 1 ? "lg:order-2" : ""}>
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-cobalt-500">0{position + 1}</p>
                        <h3 className="mt-5 text-4xl font-semibold leading-tight text-ink-950 sm:text-5xl">{service.title}</h3>
                        <p className="mt-5 max-w-lg text-lg leading-8 text-ink-600">{service.description}</p>
                        <ul className="mt-7 grid gap-3">
                          {service.bullets.map((bullet) => (
                            <li key={bullet} className="flex items-center gap-3 text-sm font-semibold text-ink-700">
                              <span className="grid h-6 w-6 place-items-center rounded-full bg-cobalt-50 text-cobalt-600"><Check className="h-3.5 w-3.5" aria-hidden="true" /></span>
                              {bullet}
                            </li>
                          ))}
                        </ul>
                        <Link href={pageHref(`/services/${definition.slug}`)} className="mt-8 inline-flex items-center gap-2 rounded-sm text-sm font-bold text-cobalt-600 transition hover:gap-3 hover:text-cobalt-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-cobalt-500">
                          {messages.hero.secondaryCta}
                          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                        </Link>
                      </div>
                      <div className={position % 2 === 1 ? "lg:order-1" : ""}>
                        <ServiceScene service={service} type={definition.type} copy={messages.visuals} />
                      </div>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section-shell bg-canvas" id="transformation">
          <div className="mx-auto max-w-[var(--container)]">
            <Reveal>
              <SectionHeading eyebrow={messages.solution.eyebrow} title={messages.solution.title} description={messages.solution.description} emphasis={messages.emphasis.solution} align="left" number="02" />
            </Reveal>
            <Reveal delay={100} className="mt-10 sm:mt-12">
              <Transformation problem={messages.problem} solution={messages.solution} />
            </Reveal>
          </div>
        </section>

        <section className="section-shell bg-ink-900" id="ai-optimization">
          <div className="mx-auto max-w-[var(--container)]">
            <Reveal>
              <SectionHeading eyebrow={messages.aiOptimization.eyebrow} title={messages.aiOptimization.title} description={messages.aiOptimization.description} emphasis={messages.emphasis.aiOptimization} align="left" tone="dark" number="03" />
            </Reveal>
            <Reveal delay={100}>
              <VisibilityFlow visuals={messages.visuals} />
            </Reveal>
          </div>
        </section>

        <section className="section-shell py-20 sm:py-24 lg:py-28" id="work">
          <div className="mx-auto max-w-[var(--container)]">
            <Reveal>
              <SectionHeading eyebrow={messages.work.eyebrow} title={messages.work.title} description={messages.work.description} emphasis={messages.emphasis.work} align="left" number="04" />
            </Reveal>
            <div className="mt-14 grid grid-cols-[minmax(0,1fr)] gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
              <Reveal className="min-w-0">
                <article className="min-w-0">
                  <span className="inline-flex rounded-full border border-ink-950/15 bg-white px-3 py-1.5 text-xs font-semibold text-ink-700">{messages.work.projects[0].industry}</span>
                  <h3 className="mt-6 text-3xl font-semibold leading-tight text-ink-950">{messages.work.projects[0].title}</h3>
                  <dl className="mt-8 space-y-6 text-sm leading-7 text-ink-600">
                    <div><dt className="font-bold text-ink-950">{messages.work.problemLabel}</dt><dd>{messages.work.projects[0].problem}</dd></div>
                    <div><dt className="font-bold text-ink-950">{messages.work.solutionLabel}</dt><dd>{messages.work.projects[0].solution}</dd></div>
                    <div className="border-l-2 border-cobalt-500 pl-4"><dt className="font-bold text-ink-950">{messages.work.outcomeLabel}</dt><dd>{messages.work.projects[0].outcome}</dd></div>
                  </dl>
                </article>
              </Reveal>
              <Reveal delay={100} className="min-w-0">
                <CasePreview copy={messages.visuals.restaurant} />
              </Reveal>
            </div>
          </div>
        </section>

        <DiscoveryStats copy={messages.discoveryStats} />

        <section className="section-shell bg-canvas" id="process">
          <div className="mx-auto max-w-[var(--container)]">
            <Reveal>
              <SectionHeading eyebrow={messages.process.eyebrow} title={messages.process.title} description={messages.process.description} emphasis={messages.emphasis.process} align="left" number="05" />
            </Reveal>
            <div className="relative mt-12 grid gap-0 lg:grid-cols-4">
              <div className="absolute left-0 right-0 top-7 hidden h-px bg-ink-950/20 lg:block" aria-hidden="true" />
              {processSteps.map((step, index) => (
                <Reveal key={step.title} delay={index * 80}>
                  <article className="relative border-l border-ink-950/15 pb-10 pl-8 lg:border-l-0 lg:border-t lg:px-5 lg:pb-0 lg:pt-10 first:lg:pl-0 last:lg:pr-0">
                    <span className="absolute -left-4 top-0 z-10 grid h-8 w-8 place-items-center rounded-full border-4 border-canvas bg-cobalt-500 text-[10px] font-bold text-white lg:left-0 lg:top-[-17px]">0{index + 1}</span>
                    <h3 className="text-2xl font-semibold text-ink-950">{step.title}</h3>
                    <p className="mt-3 text-sm font-semibold text-cobalt-600">{step.deliverable}</p>
                    <p className="mt-3 text-sm leading-7 text-ink-600">{step.description}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell" id="collaboration">
          <div className="mx-auto grid max-w-[var(--container)] gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <Reveal>
              <div className="max-w-3xl">
                <p className="eyebrow">{messages.trust.eyebrow}</p>
                <h2 className="mt-7 text-balance text-4xl font-semibold leading-[1.05] text-ink-950 sm:text-6xl">{messages.trust.title}</h2>
                <p className="mt-6 text-lg leading-8 text-ink-600">{messages.trust.description}</p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="border-t border-ink-950/15">
                {messages.trust.items.slice(3).map((item, index) => (
                  <div key={item} className="flex items-center gap-4 border-b border-ink-950/15 py-5">
                    <span className="text-xs font-bold text-cobalt-500">0{index + 1}</span>
                    <p className="text-base font-semibold text-ink-700">{item}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section className="section-shell bg-canvas" id="pricing">
          <div className="mx-auto max-w-[var(--container)]">
            <Reveal>
              <SectionHeading eyebrow={messages.pricing.eyebrow} title={messages.pricing.title} description={messages.pricing.description} emphasis={messages.emphasis.pricing} align="left" number="06" />
            </Reveal>
            <div className="mt-14 grid gap-4 lg:grid-cols-3">
              {messages.pricing.tiers.map((tier, index) => (
                <Reveal key={tier.name} delay={index * 80}>
                  <article className={`flex h-full flex-col rounded-[12px] border p-6 sm:p-8 ${index === 1 ? "border-cobalt-500 bg-cobalt-500 text-white shadow-lift" : "border-ink-950/15 bg-white text-ink-950"}`}>
                    <div className="flex min-h-7 items-start justify-between gap-3">
                      <p className={`text-xs font-bold uppercase tracking-[0.16em] ${index === 1 ? "text-cobalt-100" : "text-cobalt-500"}`}>0{index + 1}</p>
                      {index === 1 ? <span className="rounded-full bg-acid px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-ink-950">{messages.pricing.recommendedLabel}</span> : null}
                    </div>
                    <h3 className="mt-7 text-2xl font-semibold">{tier.name}</h3>
                    <p className="mt-4 text-3xl font-semibold">{tier.price}</p>
                    <p className={`mt-5 text-sm leading-7 ${index === 1 ? "text-cobalt-100" : "text-ink-600"}`}>{tier.description}</p>
                    <ul className={`mt-7 grid gap-3 border-t pt-6 ${index === 1 ? "border-white/20" : "border-ink-950/10"}`}>
                      {tier.includes.slice(0, 4).map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm"><CheckCircle2 className={`mt-0.5 h-4 w-4 shrink-0 ${index === 1 ? "text-acid" : "text-cobalt-500"}`} aria-hidden="true" />{item}</li>
                      ))}
                    </ul>
                    <a href={sectionHref("#contact")} className={`mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-md border px-5 py-3 text-sm font-bold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${index === 1 ? "border-white bg-white text-ink-950 hover:bg-cobalt-50 focus-visible:ring-white focus-visible:ring-offset-cobalt-500" : "border-ink-950/15 text-ink-950 hover:border-cobalt-500 hover:text-cobalt-600 focus-visible:ring-cobalt-500"}`}>
                      {messages.pricing.cta}<ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </article>
                </Reveal>
              ))}
            </div>
            <p className="mt-5 text-xs text-ink-600">{messages.pricing.finePrint}</p>
          </div>
        </section>

        <section className="section-shell" id="faq">
          <div className="mx-auto grid max-w-[var(--container)] gap-12 lg:grid-cols-[0.68fr_1.32fr] lg:items-start">
            <Reveal><SectionHeading eyebrow={messages.faq.eyebrow} title={messages.faq.title} description={messages.faq.description} align="left" number="07" /></Reveal>
            <Reveal delay={80}><FAQAccordion items={messages.faq.items} /></Reveal>
          </div>
        </section>

        <section className="section-shell bg-canvas" id="contact">
          <div className="mx-auto grid max-w-[var(--container)] gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
            <Reveal>
              <SectionHeading eyebrow={messages.contact.eyebrow} title={messages.contact.title} description={messages.contact.description} align="left" number="08" />
              <div className="mt-9 grid gap-4 border-t border-ink-950/15 pt-6">
                {messages.contact.points.map((point, index) => {
                  const Icon = contactIcons[index] || ShieldCheck;
                  return <p key={point} className="flex gap-3 text-sm leading-7 text-ink-600"><Icon className="mt-1 h-5 w-5 shrink-0 text-cobalt-500" aria-hidden="true" />{point}</p>;
                })}
              </div>
            </Reveal>
            <Reveal delay={100}><ContactForm locale={locale} copy={messages.form} /></Reveal>
          </div>
        </section>

        <section className="bg-ink-900 px-5 py-20 text-white sm:px-6 sm:py-24 lg:px-8">
          <Reveal>
            <div className="technical-grid relative mx-auto overflow-hidden rounded-[14px] border border-white/15 px-6 py-14 sm:px-10 lg:px-16 lg:py-20">
              <span className="pointer-events-none absolute -bottom-14 right-4 text-[15rem] font-bold leading-none text-white/[0.035]" aria-hidden="true">W</span>
              <div className="relative max-w-3xl">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-cobalt-200">Web2Go</p>
                <h2 className="mt-6 text-balance text-4xl font-semibold leading-tight sm:text-6xl">{messages.finalCta.title}</h2>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">{messages.finalCta.description}</p>
                <a href={sectionHref("#contact")} className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-bold text-ink-950 transition hover:-translate-y-0.5 hover:bg-cobalt-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-ink-900">
                  {messages.finalCta.cta}<ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Reveal>
        </section>
      </main>

      <Footer locale={locale} messages={messages} />
    </>
  );
}

export function Footer({ locale, messages }: { locale: Locale; messages: Messages }) {
  const sectionHref = (hash: string) => `${localePath(locale)}${hash}`;
  const pageHref = (pathname: string) => localePath(locale, pathname);

  return (
    <footer className="border-t border-white/10 bg-ink-900 px-5 py-12 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-[var(--container)] gap-10 md:grid-cols-[1.25fr_0.75fr_0.75fr_0.75fr]">
        <div>
          <a href={sectionHref("#top")} aria-label={messages.navigation.homeAria}><BrandMark inverse /></a>
          <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">{messages.footer.description}</p>
          <div className="mt-6 flex gap-2" aria-label={messages.navigation.languageLabel}>
            {locales.map((targetLocale) => <Link key={targetLocale} href={localePath(targetLocale)} aria-current={targetLocale === locale ? "page" : undefined} className={`rounded px-2.5 py-2 text-xs font-bold transition ${targetLocale === locale ? "bg-white text-ink-950" : "border border-white/15 text-white/60 hover:text-white"}`}>{localeLabels[targetLocale]}</Link>)}
          </div>
        </div>
        {messages.footer.columns.map((column) => (
          <div key={column.title}>
            <h3 className="text-sm font-semibold text-white">{column.title}</h3>
            <div className="mt-4 grid gap-3">
              {column.links.map((link) => <a key={link.label} href={sectionHref(link.href)} className="text-sm text-slate-400 transition hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cobalt-200">{link.label}</a>)}
            </div>
          </div>
        ))}
        <div>
          <h3 className="text-sm font-semibold text-white">{messages.footer.contactTitle}</h3>
          {siteConfig.publicEmail ? <a href={`mailto:${siteConfig.publicEmail}`} className="mt-4 block text-sm text-slate-400 hover:text-white">{siteConfig.publicEmail}</a> : <p className="mt-4 text-sm leading-7 text-slate-400">{messages.footer.contactFallback}</p>}
          <a href={sectionHref("#contact")} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cobalt-200 hover:text-white">{messages.footer.requestLink}<ArrowRight className="h-4 w-4" aria-hidden="true" /></a>
          <div className="mt-6 flex flex-wrap gap-4 text-xs text-slate-500">
            <Link href={pageHref("/privacy")} className="hover:text-slate-300">{messages.footer.privacy}</Link>
            <Link href={pageHref("/terms")} className="hover:text-slate-300">{messages.footer.terms}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function JsonLd({ locale, messages }: { locale: Locale; messages: Messages }) {
  const organization: Record<string, unknown> = { "@context": "https://schema.org", "@type": "Organization", name: siteConfig.name, url: localizedUrl(locale), description: messages.metadata.description };
  if (siteConfig.publicEmail) organization.email = siteConfig.publicEmail;
  const structuredData = [
    organization,
    { "@context": "https://schema.org", "@type": "WebSite", name: siteConfig.name, url: localizedUrl(locale), inLanguage: locale },
    { "@context": "https://schema.org", "@type": "Service", name: messages.jsonLd.serviceName, provider: { "@type": "Organization", name: siteConfig.name }, areaServed: "Europe", inLanguage: locale, description: messages.jsonLd.serviceDescription },
    { "@context": "https://schema.org", "@type": "FAQPage", inLanguage: locale, mainEntity: messages.faq.items.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })) }
  ];
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />;
}
