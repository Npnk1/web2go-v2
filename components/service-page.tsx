import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, ShieldCheck } from "lucide-react";
import { Footer } from "@/components/home-page";
import { Header } from "@/components/header";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ServiceScene } from "@/components/visuals/service-scenes";
import { VisibilityFlow } from "@/components/visuals/visibility-flow";
import { serviceDefinitions, type ServiceDefinition } from "@/data/services";
import { localePath, type Locale } from "@/i18n/locales";
import type { Messages } from "@/i18n/types";

export function ServicePage({ locale, messages, definition }: { locale: Locale; messages: Messages; definition: ServiceDefinition }) {
  const service = messages.services.cards[definition.index];
  const homeHash = (hash: string) => `${localePath(locale)}${hash}`;
  const processSteps = [messages.process.steps[0], messages.process.steps[3], messages.process.steps[4], messages.process.steps[5]];

  return (
    <>
      <Header locale={locale} copy={messages.navigation} />
      <main className="overflow-hidden bg-paper">
        <section className="px-5 pb-20 pt-32 sm:px-6 sm:pt-40 lg:px-8 lg:pb-28">
          <div className="mx-auto grid max-w-[var(--container)] gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:gap-16">
            <Reveal>
              <p className="eyebrow">{messages.services.eyebrow}</p>
              <h1 className="mt-7 text-balance text-5xl font-semibold leading-[1] text-ink-950 sm:text-6xl lg:text-7xl">{service.title}</h1>
              <p className="mt-7 max-w-xl text-lg leading-8 text-ink-600 sm:text-xl">{service.description}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={homeHash("#contact")} className="btn-primary">{messages.solution.cta}<ArrowRight className="h-4 w-4" aria-hidden="true" /></a>
                <a href={homeHash("#services")} className="btn-secondary">{messages.hero.secondaryCta}</a>
              </div>
            </Reveal>
            <Reveal delay={100}><ServiceScene service={service} type={definition.type} /></Reveal>
          </div>
        </section>

        <section className="section-shell bg-canvas">
          <div className="mx-auto grid max-w-[var(--container)] gap-10 lg:grid-cols-[0.72fr_1.28fr]">
            <Reveal><SectionHeading eyebrow={messages.services.includesLabel} title={messages.aiOptimization.title} description={messages.aiOptimization.description} align="left" number="01" /></Reveal>
            <Reveal delay={80}>
              <div className="border-t border-ink-950/15">
                {[...service.bullets, ...messages.aiOptimization.includes.slice(definition.index % 4, definition.index % 4 + 3)].map((item, index) => (
                  <div key={`${item}-${index}`} className="flex items-center gap-4 border-b border-ink-950/15 py-5">
                    <span className="grid h-7 w-7 place-items-center rounded-full bg-cobalt-50 text-cobalt-600"><Check className="h-4 w-4" aria-hidden="true" /></span>
                    <p className="text-base font-semibold text-ink-700">{item}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section className="section-shell bg-ink-900">
          <div className="mx-auto max-w-[var(--container)]">
            <Reveal><SectionHeading eyebrow={messages.aiOptimization.eyebrow} title={messages.solution.title} description={messages.solution.description} align="left" tone="dark" number="02" /></Reveal>
            <Reveal delay={80}><VisibilityFlow copy={messages.aiOptimization} heroVisual={messages.heroVisual} /></Reveal>
          </div>
        </section>

        <section className="section-shell">
          <div className="mx-auto max-w-[var(--container)]">
            <Reveal><SectionHeading eyebrow={messages.process.eyebrow} title={messages.process.title} description={messages.process.description} align="left" number="03" /></Reveal>
            <div className="mt-14 grid border-y border-ink-950/15 lg:grid-cols-4">
              {processSteps.map((step, index) => (
                <Reveal key={step.title} delay={index * 70}>
                  <article className="h-full border-b border-ink-950/15 p-6 last:border-b-0 lg:border-b-0 lg:border-r lg:p-7 lg:last:border-r-0">
                    <p className="text-xs font-bold text-cobalt-500">0{index + 1}</p>
                    <h3 className="mt-6 text-2xl font-semibold text-ink-950">{step.title}</h3>
                    <p className="mt-3 text-sm font-semibold text-cobalt-600">{step.deliverable}</p>
                    <p className="mt-4 text-sm leading-7 text-ink-600">{step.description}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell bg-cobalt-500 text-white">
          <div className="mx-auto grid max-w-[var(--container)] gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-cobalt-100">{messages.trust.eyebrow}</p>
              <h2 className="mt-6 text-balance text-4xl font-semibold leading-tight sm:text-6xl">{messages.trust.title}</h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-cobalt-100">{messages.trust.description}</p>
            </Reveal>
            <Reveal delay={80}>
              <div className="border-t border-white/25">
                {messages.trust.items.slice(0, 4).map((item) => <p key={item} className="flex items-center gap-3 border-b border-white/25 py-5 text-sm font-semibold"><ShieldCheck className="h-5 w-5 text-acid" aria-hidden="true" />{item}</p>)}
              </div>
            </Reveal>
          </div>
        </section>

        <section className="section-shell bg-canvas">
          <div className="mx-auto max-w-[var(--container)]">
            <Reveal><SectionHeading eyebrow={messages.services.eyebrow} title={messages.services.title} description={messages.services.description} align="left" number="04" /></Reveal>
            <div className="mt-12 grid gap-4 md:grid-cols-3">
              {serviceDefinitions.filter((item) => item.slug !== definition.slug).map((item) => {
                const related = messages.services.cards[item.index];
                return (
                  <Link key={item.slug} href={localePath(locale, `/services/${item.slug}`)} className="group rounded-[12px] border border-ink-950/15 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-cobalt-500 hover:shadow-card focus:outline-none focus-visible:ring-2 focus-visible:ring-cobalt-500">
                    <p className="text-xl font-semibold text-ink-950">{related.title}</p>
                    <p className="mt-3 text-sm leading-7 text-ink-600">{related.description}</p>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-cobalt-600">{messages.hero.secondaryCta}<ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" /></span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer locale={locale} messages={messages} />
    </>
  );
}
