import {
  ArrowRight,
  Building2,
  CalendarCheck,
  Check,
  CheckCircle2,
  ClipboardCheck,
  Code2,
  DatabaseZap,
  FileJson2,
  Gauge,
  Layers3,
  LineChart,
  MessageSquareText,
  MousePointerClick,
  PanelsTopLeft,
  Search,
  ShieldCheck,
  Sparkles,
  Workflow
} from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { FAQAccordion } from "@/components/faq-accordion";
import { Header } from "@/components/header";
import { HeroVisual } from "@/components/hero-visual";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { faqItems, siteConfig } from "@/data/site";

const proofPoints = [
  "Clearer service and entity signals",
  "Schema, metadata, and technical SEO",
  "Faster, more trusted customer journeys"
];

const visibilityDrivers = [
  {
    title: "Search is becoming answer-led",
    description:
      "Customers now compare businesses through AI answers, search summaries, maps, reviews, and traditional results. The website needs to explain the business consistently across all of those surfaces."
  },
  {
    title: "AI systems need structured context",
    description:
      "Unclear service pages, missing business facts, weak internal links, and thin FAQs make it harder for systems to understand what the company does and who it serves."
  },
  {
    title: "Trust signals influence every step",
    description:
      "Reviews, policies, credentials, examples, contact details, and page quality help customers and discovery systems evaluate whether the business is credible."
  }
];

const solvedAreas = [
  {
    icon: Search,
    title: "Discoverability gaps",
    description:
      "We identify where the website fails to explain services, locations, expertise, and commercial intent clearly."
  },
  {
    icon: FileJson2,
    title: "Machine-readable structure",
    description:
      "We add schema, metadata, answer blocks, internal links, sitemaps, and clean page hierarchy."
  },
  {
    icon: ShieldCheck,
    title: "Trust and conversion",
    description:
      "We make proof, risk reducers, CTAs, forms, and booking paths easier to find and act on."
  },
  {
    icon: Gauge,
    title: "Technical quality",
    description:
      "We improve performance, accessibility, crawlability, and maintainability so the foundation supports growth."
  }
];

const services = [
  {
    icon: ClipboardCheck,
    title: "AI Visibility Audit",
    description:
      "A practical review of what blocks AI readability, search clarity, technical quality, and conversion.",
    bullets: ["Visibility gaps", "Schema and content review", "Prioritized roadmap"]
  },
  {
    icon: Workflow,
    title: "AI Optimization Strategy",
    description:
      "A clear plan for service pages, location pages, internal links, FAQ depth, metadata, and trust signals.",
    bullets: ["Entity model", "Content architecture", "Implementation plan"]
  },
  {
    icon: FileJson2,
    title: "Structured Data & Schema",
    description:
      "Schema.org JSON-LD for organization, services, FAQs, local context, and important business details.",
    bullets: ["JSON-LD setup", "FAQPage markup", "Service schema"]
  },
  {
    icon: Search,
    title: "Technical SEO",
    description:
      "Search foundations that make the website easier to crawl, index, understand, and maintain.",
    bullets: ["Indexing signals", "Metadata cleanup", "Internal links"]
  },
  {
    icon: PanelsTopLeft,
    title: "Website Redesign",
    description:
      "A modern website structure that improves clarity, speed, trust, and lead generation without inflated claims.",
    bullets: ["UX structure", "Service pages", "SEO continuity"]
  },
  {
    icon: MousePointerClick,
    title: "Conversion Systems",
    description:
      "Forms, booking flows, analytics events, CTAs, and page sections designed around qualified inquiries.",
    bullets: ["Lead capture", "Booking UX", "Tracking plan"]
  }
];

const framework = [
  {
    label: "01",
    title: "Business Entity",
    description:
      "Clear company information, service definitions, locations, audience fit, credentials, and proof points."
  },
  {
    label: "02",
    title: "Content Structure",
    description:
      "Service pages, answer-style content, FAQs, internal links, metadata, Open Graph, and clean heading hierarchy."
  },
  {
    label: "03",
    title: "Technical Layer",
    description:
      "Schema.org JSON-LD, sitemap, robots.txt, llms.txt placeholder, performance, accessibility, and crawl paths."
  },
  {
    label: "04",
    title: "Trust & Conversion",
    description:
      "Reviews, policies, examples, risk reducers, contact clarity, consultation flow, and analytics."
  }
];

const processSteps = [
  {
    step: "01",
    title: "Discover",
    description:
      "Clarify the business model, services, audiences, locations, current website, and commercial priorities."
  },
  {
    step: "02",
    title: "Audit",
    description:
      "Review AI readability, search foundations, performance, content hierarchy, and conversion paths."
  },
  {
    step: "03",
    title: "Plan",
    description:
      "Define the highest-impact improvements, page structure, schema plan, and implementation scope."
  },
  {
    step: "04",
    title: "Build",
    description:
      "Design and implement the website improvements with clean code, responsive UI, and accessible patterns."
  },
  {
    step: "05",
    title: "Validate",
    description:
      "Check technical setup, metadata, structured data, performance, forms, and key user journeys."
  },
  {
    step: "06",
    title: "Improve",
    description:
      "Use analytics and search signals to keep refining structure, content, and conversion over time."
  }
];

const useCases = [
  {
    industry: "Restaurant",
    problem: "Menus, reservation paths, reviews, and location details are fragmented.",
    approach: "Menu and local schema, structured cuisine pages, reservation CTAs, and review proof."
  },
  {
    industry: "Hotel",
    problem: "Rooms, amenities, area content, and direct-booking reasons are not clear enough.",
    approach: "Property pages, amenity structure, local discovery content, FAQs, and direct booking UX."
  },
  {
    industry: "Dental Clinic",
    problem: "Treatment pages are thin and patient trust signals are hard to evaluate.",
    approach: "Treatment clusters, doctor credibility, patient FAQs, reviews, and appointment lead capture."
  },
  {
    industry: "Law Firm",
    problem: "Practice areas, expertise, and local relevance are mixed into generic pages.",
    approach: "Practice-area structure, attorney signals, FAQs, local schema, and clear consultation paths."
  },
  {
    industry: "Real Estate",
    problem: "Listings, service areas, valuation content, and lead routing do not connect.",
    approach: "Area pages, property UX, buyer/seller content, analytics, and inquiry routing."
  },
  {
    industry: "Local Services",
    problem: "Service coverage, proof, urgency, and quote flow are not obvious to buyers.",
    approach: "Service-area structure, proof sections, quote forms, trust blocks, and conversion tracking."
  }
];

const pricing = [
  {
    name: "AI Visibility Audit",
    price: "from EUR 490",
    description:
      "For businesses that already have a website and need a clear view of what blocks modern search visibility.",
    includes: ["AI/search readability review", "Technical SEO checks", "Schema and metadata review", "Prioritized action plan"]
  },
  {
    name: "AI-Ready Website",
    price: "from EUR 1,900",
    description:
      "For businesses that need a modern website built around structure, speed, trust, SEO, and conversion.",
    includes: ["Site strategy and content model", "Responsive premium design", "Next.js implementation", "Core SEO and schema setup"],
    featured: true
  },
  {
    name: "Growth System",
    price: "Custom / monthly",
    description:
      "For businesses that want ongoing improvements across content, analytics, GEO/SEO, performance, and conversion.",
    includes: ["Monthly optimization plan", "Content structure improvements", "Analytics and conversion review", "Technical maintenance"]
  }
];

const trustItems = [
  "Scope and priorities agreed before work starts",
  "No ranking or AI-recommendation guarantees",
  "Technical, content, and UX improvements together",
  "Performance and maintainability built into the process",
  "Clear handoff and documented next steps",
  "Ongoing support available when useful"
];

function JsonLd() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      email: siteConfig.email,
      description: siteConfig.description
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "AI Website Optimization",
      provider: {
        "@type": "Organization",
        name: siteConfig.name
      },
      areaServed: "Europe",
      description:
        "Website optimization for AI readability, search visibility, structured data, technical SEO, performance, trust, and conversion."
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

export default function Home() {
  return (
    <>
      <JsonLd />
      <Header />
      <main id="top" className="overflow-hidden bg-stone-50 text-slate-950">
        <section className="relative border-b border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f5f7fb_100%)] px-5 pb-20 pt-32 sm:px-6 lg:px-8 lg:pt-36">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_16%,rgba(37,99,235,0.08),transparent_34%),radial-gradient(circle_at_85%_12%,rgba(15,23,42,0.06),transparent_30%)]" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.94fr_1.06fr]">
            <Reveal immediate>
              <div className="mb-6 inline-flex items-center gap-2 rounded-md border border-blue-200 bg-blue-50 px-3 py-2 text-sm font-medium text-blue-800">
                <Sparkles className="h-4 w-4" aria-hidden="true" />
                AI website optimization for serious businesses
              </div>
              <h1 className="max-w-4xl text-balance text-5xl font-semibold leading-[1.02] tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
                Make your website easier to understand, trust, and choose
              </h1>
              <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-slate-600 sm:text-xl">
                Web2Go helps businesses strengthen AI readability, search discoverability, technical quality, and conversion without promising rankings or recommendations no one can guarantee.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#contact" className="btn-primary justify-center">
                  <CalendarCheck className="h-4 w-4" aria-hidden="true" />
                  <span>Book Free Consultation</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <a href="#framework" className="btn-secondary justify-center">
                  <Layers3 className="h-4 w-4" aria-hidden="true" />
                  <span>View Framework</span>
                </a>
              </div>
              <div className="mt-10 grid gap-3 border-t border-slate-200 pt-6 sm:grid-cols-3">
                {proofPoints.map((point) => (
                  <div key={point} className="flex gap-3 text-sm leading-6 text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" aria-hidden="true" />
                    {point}
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={120} immediate>
              <HeroVisual />
            </Reveal>
          </div>
        </section>

        <section className="px-5 py-24 sm:px-6 lg:px-8" id="ai-optimization">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <SectionHeading
                eyebrow="Why it matters"
                title="Visibility now depends on clarity, not just keywords"
                description="AI answers and search results draw from signals across your website and the wider web. A clear, technically sound site gives those systems and your customers a better foundation."
              />
            </Reveal>
            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {visibilityDrivers.map((item, index) => (
                <Reveal key={item.title} delay={index * 80}>
                  <article className="h-full border-l border-slate-200 bg-white p-7 shadow-sm">
                    <p className="text-sm font-semibold text-blue-700">0{index + 1}</p>
                    <h3 className="mt-5 text-2xl font-semibold tracking-tight text-slate-950">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-base leading-8 text-slate-600">{item.description}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-950 px-5 py-24 text-white sm:px-6 lg:px-8" id="solution">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
              <Reveal>
                <SectionHeading
                  eyebrow="What Web2Go solves"
                  title="A better foundation for discovery and demand"
                  description="We connect structure, content, technical SEO, trust signals, and conversion flow so the website communicates clearly to people and modern discovery systems."
                  align="left"
                  inverse
                />
                <div className="mt-8 rounded-lg border border-white/10 bg-white/[0.06] p-5 text-sm leading-7 text-slate-300">
                  The work improves your chances by strengthening the signals you control. It does not promise guaranteed rankings, traffic, or AI recommendations.
                </div>
              </Reveal>
              <div className="grid gap-4 sm:grid-cols-2">
                {solvedAreas.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <Reveal key={item.title} delay={index * 70}>
                      <article className="h-full rounded-lg border border-white/10 bg-white/[0.055] p-6">
                        <div className="grid h-11 w-11 place-items-center rounded-md bg-white text-blue-700">
                          <Icon className="h-5 w-5" aria-hidden="true" />
                        </div>
                        <h3 className="mt-6 text-xl font-semibold text-white">{item.title}</h3>
                        <p className="mt-3 text-sm leading-7 text-slate-300">{item.description}</p>
                      </article>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 py-24 sm:px-6 lg:px-8" id="services">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <SectionHeading
                eyebrow="Services"
                title="Focused improvements, not vague AI work"
                description="Each service is designed to make the website clearer, faster, easier to evaluate, and more likely to convert qualified visitors."
              />
            </Reveal>
            <div className="mt-12 grid overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm md:grid-cols-2 xl:grid-cols-3">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Reveal key={service.title} delay={(index % 3) * 60} className="h-full">
                    <article className="group h-full border-b border-slate-200 p-6 transition hover:bg-slate-50 md:border-r xl:min-h-72">
                      <div className="flex items-center justify-between gap-4">
                        <div className="grid h-11 w-11 place-items-center rounded-md bg-blue-50 text-blue-700">
                          <Icon className="h-5 w-5" aria-hidden="true" />
                        </div>
                        <ArrowRight className="h-5 w-5 text-slate-300 transition group-hover:translate-x-1 group-hover:text-blue-700" aria-hidden="true" />
                      </div>
                      <h3 className="mt-7 text-xl font-semibold tracking-tight text-slate-950">{service.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-slate-600">{service.description}</p>
                      <ul className="mt-6 grid gap-2">
                        {service.bullets.map((bullet) => (
                          <li key={bullet} className="flex gap-2 text-sm text-slate-700">
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" aria-hidden="true" />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-white px-5 py-24 sm:px-6 lg:px-8" id="framework">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
              <Reveal>
                <SectionHeading
                  eyebrow="Framework"
                  title="The AI Optimization Framework"
                  description="A practical model for business owners: make the website understandable, technically clean, trustworthy, and easy to act on."
                  align="left"
                />
                <a href="#contact" className="btn-primary mt-8 inline-flex">
                  <span>Assess my website</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </Reveal>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
                <div className="grid gap-3">
                  {framework.map((item, index) => (
                    <Reveal key={item.title} delay={index * 70}>
                      <article className="grid gap-4 rounded-md border border-slate-200 bg-white p-5 sm:grid-cols-[72px_1fr]">
                        <div className="flex h-14 w-14 items-center justify-center rounded-md bg-slate-950 text-sm font-semibold text-white">
                          {item.label}
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-slate-950">{item.title}</h3>
                          <p className="mt-2 text-sm leading-7 text-slate-600">{item.description}</p>
                        </div>
                      </article>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 py-24 sm:px-6 lg:px-8" id="process">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <SectionHeading
                eyebrow="Process"
                title="From unclear website to structured growth asset"
                description="The process is built around decisions, implementation, and validation. No bloated audit documents that never turn into action."
              />
            </Reveal>
            <div className="mt-12 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
              {processSteps.map((step, index) => (
                <Reveal key={step.title} delay={(index % 3) * 60}>
                  <article className="grid gap-5 border-b border-slate-200 p-6 last:border-b-0 md:grid-cols-[96px_0.55fr_1fr] md:items-start">
                    <p className="text-sm font-semibold text-blue-700">{step.step}</p>
                    <h3 className="text-xl font-semibold tracking-tight text-slate-950">{step.title}</h3>
                    <p className="text-sm leading-7 text-slate-600">{step.description}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-100 px-5 py-24 sm:px-6 lg:px-8" id="work">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <SectionHeading
                eyebrow="Example use cases"
                title="How the work changes by business model"
                description="These are example project concepts, not claimed client results. They show how Web2Go would structure AI readability, trust, and conversion for different industries."
              />
            </Reveal>
            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {useCases.map((item, index) => (
                <Reveal key={item.industry} delay={(index % 3) * 70}>
                  <article className="h-full rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                    <div className="mb-6 flex items-center justify-between">
                      <span className="rounded-md bg-slate-950 px-3 py-1 text-sm font-medium text-white">
                        {item.industry}
                      </span>
                      <Building2 className="h-5 w-5 text-slate-400" aria-hidden="true" />
                    </div>
                    <p className="text-sm font-semibold uppercase text-slate-500">Common issue</p>
                    <p className="mt-2 text-base leading-7 text-slate-800">{item.problem}</p>
                    <p className="mt-6 text-sm font-semibold uppercase text-slate-500">Web2Go approach</p>
                    <p className="mt-2 text-base leading-7 text-slate-800">{item.approach}</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {["AI SEO", "Schema", "UX", "Tracking"].map((tag) => (
                        <span key={tag} className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">
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

        <section className="px-5 py-24 sm:px-6 lg:px-8" id="pricing">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <SectionHeading
                eyebrow="Engagement models"
                title="Clear starting points with scope defined upfront"
                description="Every project starts by identifying what matters most: audit, rebuild, or ongoing improvement. Final pricing depends on scope and complexity."
              />
            </Reveal>
            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {pricing.map((tier, index) => (
                <Reveal key={tier.name} delay={index * 80}>
                  <article
                    className={`h-full rounded-lg border p-7 shadow-sm ${
                      tier.featured
                        ? "border-blue-700 bg-slate-950 text-white"
                        : "border-slate-200 bg-white text-slate-950"
                    }`}
                  >
                    <div className="flex min-h-28 flex-col justify-between gap-4">
                      <h3 className="text-2xl font-semibold tracking-tight">{tier.name}</h3>
                      <p className={tier.featured ? "text-3xl font-semibold text-blue-200" : "text-3xl font-semibold text-blue-700"}>
                        {tier.price}
                      </p>
                    </div>
                    <p className={`mt-5 text-sm leading-7 ${tier.featured ? "text-slate-300" : "text-slate-600"}`}>
                      {tier.description}
                    </p>
                    <ul className="mt-7 space-y-3">
                      {tier.includes.map((item) => (
                        <li key={item} className={`flex gap-3 text-sm ${tier.featured ? "text-slate-200" : "text-slate-700"}`}>
                          <Check className={`mt-0.5 h-4 w-4 shrink-0 ${tier.featured ? "text-blue-200" : "text-blue-600"}`} aria-hidden="true" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <a href="#contact" className={tier.featured ? "btn-light mt-8 w-full justify-center" : "btn-secondary mt-8 w-full justify-center"}>
                      <span>Discuss scope</span>
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                    <p className={`mt-4 text-xs leading-6 ${tier.featured ? "text-slate-400" : "text-slate-500"}`}>
                      Final price depends on pages, integrations, content, timeline, and technical requirements.
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-5 py-24 sm:px-6 lg:px-8" id="trust">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <Reveal>
              <SectionHeading
                eyebrow="Trust"
                title="Responsible optimization, not hype"
                description="Web2Go improves the controllable parts of your website: clarity, speed, structured data, trust, and lead paths."
                align="left"
              />
            </Reveal>
            <Reveal delay={120}>
              <div className="grid gap-3 sm:grid-cols-2">
                {trustItems.map((item) => (
                  <div key={item} className="flex gap-3 rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-700">
                    <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" aria-hidden="true" />
                    {item}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section className="px-5 py-24 sm:px-6 lg:px-8" id="faq">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <SectionHeading
                eyebrow="FAQ"
                title="Straight answers before the consultation"
                description="What AI website optimization means, what it can improve, and where honest limits matter."
              />
            </Reveal>
            <Reveal delay={100} className="mt-12">
              <FAQAccordion items={faqItems} />
            </Reveal>
          </div>
        </section>

        <section className="bg-slate-950 px-5 py-24 text-white sm:px-6 lg:px-8" id="contact">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <Reveal>
              <SectionHeading
                eyebrow="Contact"
                title="Start with a focused website review"
                description="Share your website, business type, and main goal. Web2Go will recommend the most useful next step: audit, rebuild, or ongoing improvement."
                align="left"
                inverse
              />
              <div className="mt-8 grid gap-4 text-sm leading-7 text-slate-300">
                <p className="flex gap-3">
                  <Code2 className="mt-1 h-5 w-5 shrink-0 text-blue-300" aria-hidden="true" />
                  Built around practical scope, maintainable implementation, and clear business value.
                </p>
                <p className="flex gap-3">
                  <LineChart className="mt-1 h-5 w-5 shrink-0 text-blue-300" aria-hidden="true" />
                  Strong fit for businesses that need better visibility, trust, conversion, and performance.
                </p>
                <p className="flex gap-3">
                  <DatabaseZap className="mt-1 h-5 w-5 shrink-0 text-blue-300" aria-hidden="true" />
                  The form is frontend-only until a production backend is connected.
                </p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <ContactForm />
            </Reveal>
          </div>
        </section>

        <section className="px-5 py-16 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mx-auto grid max-w-6xl gap-8 rounded-lg border border-slate-200 bg-white p-7 shadow-sm md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <p className="text-sm font-semibold uppercase text-blue-700">Next step</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
                  Know what your website needs before investing in more traffic.
                </h2>
                <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
                  A focused consultation can clarify where AI readability, search foundations, trust signals, and conversion paths are weakest.
                </p>
              </div>
              <a href="#contact" className="btn-primary justify-center">
                <MessageSquareText className="h-4 w-4" aria-hidden="true" />
                <span>Book Free Consultation</span>
              </a>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white px-5 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
          <div>
            <a href="#top" className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-md bg-slate-950 text-sm font-bold text-white">
                W
              </span>
              <span className="text-lg font-semibold text-slate-950">
                Web<span className="text-blue-700">2</span>Go
              </span>
            </a>
            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-600">
              A digital studio for businesses that need clearer websites, stronger AI readability, technical SEO, trust, performance, and conversion.
            </p>
          </div>
          <FooterColumn title="Services" links={["AI Optimization", "Technical SEO", "Structured Data", "Website Redesign"]} />
          <FooterColumn title="Company" links={["Process", "Example Work", "Pricing", "FAQ"]} />
          <div>
            <h3 className="text-sm font-semibold text-slate-950">Contact</h3>
            <a href={`mailto:${siteConfig.email}`} className="mt-4 block text-sm text-slate-600 transition hover:text-slate-950">
              {siteConfig.email}
            </a>
            <div className="mt-5 flex gap-2">
              {["LinkedIn", "X", "GitHub"].map((item) => (
                <a key={item} href="#contact" className="rounded-md border border-slate-200 bg-white px-3 py-2 text-xs text-slate-600 transition hover:border-slate-400 hover:text-slate-950">
                  {item}
                </a>
              ))}
            </div>
            <div className="mt-5 flex flex-wrap gap-3 text-xs text-slate-500">
              <a href="#contact" className="hover:text-slate-950">Privacy Policy</a>
              <a href="#contact" className="hover:text-slate-950">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

function FooterColumn({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-slate-950">{title}</h3>
      <div className="mt-4 grid gap-3">
        {links.map((link) => (
          <a key={link} href="#contact" className="text-sm text-slate-600 transition hover:text-slate-950">
            {link}
          </a>
        ))}
      </div>
    </div>
  );
}
