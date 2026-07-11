import {
  ArrowRight,
  BarChart3,
  Bot,
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
  Rocket,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  Workflow
} from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { FAQAccordion } from "@/components/faq-accordion";
import { Header } from "@/components/header";
import { HeroVisual } from "@/components/hero-visual";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { faqItems, siteConfig } from "@/data/site";

const trustPoints = [
  "AI-readable structure",
  "Technical SEO",
  "Conversion-focused UX",
  "Fast performance"
];

const problemItems = [
  {
    icon: BrainCircuit,
    title: "AI systems cannot read the business clearly",
    description:
      "Services, locations, proof, and company details are often buried in vague pages or inconsistent layouts."
  },
  {
    icon: Search,
    title: "Search foundations are weak",
    description:
      "Missing schema, unclear metadata, thin service pages, and poor internal links make discovery harder."
  },
  {
    icon: ShieldCheck,
    title: "Trust signals are scattered",
    description:
      "Reviews, expertise, policies, team details, examples, and contact paths need a clearer structure."
  },
  {
    icon: MousePointerClick,
    title: "Visitors do not know what to do next",
    description:
      "Slow pages, generic copy, and weak lead capture leave qualified visitors without a strong next step."
  }
];

const solutionItems = [
  {
    icon: Workflow,
    title: "Structure the business",
    description:
      "Clarify services, audiences, locations, entities, proof points, and page hierarchy so the website has a clean information model."
  },
  {
    icon: FileJson2,
    title: "Expose machine-readable signals",
    description:
      "Add Schema.org JSON-LD, metadata, FAQ blocks, answer-style content, internal links, sitemaps, and clean crawl paths."
  },
  {
    icon: MousePointerClick,
    title: "Turn clarity into leads",
    description:
      "Improve page flow, calls to action, trust sections, booking paths, forms, analytics, and conversion tracking."
  }
];

const services = [
  {
    icon: BrainCircuit,
    title: "AI Website Optimization",
    description:
      "Make the business easier for AI systems and search engines to interpret without making unsafe promises.",
    bullets: ["AI visibility audit", "Entity signals", "Answer-ready pages"]
  },
  {
    icon: Bot,
    title: "GEO / LLM Optimization",
    description:
      "Prepare website content for modern discovery across AI answers, assistants, and search experiences.",
    bullets: ["LLM-friendly structure", "FAQ depth", "Clear business facts"]
  },
  {
    icon: Search,
    title: "Technical SEO",
    description:
      "Fix crawlability, metadata, redirects, page structure, indexing signals, and on-page foundations.",
    bullets: ["Indexing review", "Metadata cleanup", "Internal links"]
  },
  {
    icon: FileJson2,
    title: "Structured Data & Schema",
    description:
      "Add clear machine-readable context for organizations, services, FAQs, local pages, and website entities.",
    bullets: ["JSON-LD setup", "Service schema", "FAQPage markup"]
  },
  {
    icon: PanelsTopLeft,
    title: "Website Redesign",
    description:
      "Rebuild outdated pages into a premium, fast, trustworthy site without losing core SEO value.",
    bullets: ["UX overhaul", "Content migration", "SEO continuity"]
  },
  {
    icon: Globe2,
    title: "Business Websites",
    description:
      "Create sharp websites that explain what the business does, why it matters, and how to contact it.",
    bullets: ["Service pages", "Trust sections", "Lead paths"]
  },
  {
    icon: Target,
    title: "Landing Pages",
    description:
      "Build focused pages for campaigns, offers, launches, and local services with one clear action.",
    bullets: ["Campaign message", "Lead capture", "Analytics events"]
  },
  {
    icon: MapPinned,
    title: "Local SEO",
    description:
      "Strengthen location pages, service areas, local intent, map signals, and business information clarity.",
    bullets: ["Location structure", "Local schema", "Review signals"]
  },
  {
    icon: Gauge,
    title: "Performance Optimization",
    description:
      "Improve loading speed, Core Web Vitals, image delivery, script weight, and perceived responsiveness.",
    bullets: ["Core Web Vitals", "Asset cleanup", "Fast interactions"]
  },
  {
    icon: Layers3,
    title: "Content Architecture",
    description:
      "Organize pages and copy so humans and machines can understand services, proof, and relevance faster.",
    bullets: ["Content hierarchy", "Service clusters", "Clear answers"]
  },
  {
    icon: CalendarCheck,
    title: "Booking & Lead Capture Systems",
    description:
      "Add forms, booking flows, routing logic, and confirmation states that reduce friction for serious leads.",
    bullets: ["Consultation forms", "Booking UX", "Reminder-ready flow"]
  },
  {
    icon: BarChart3,
    title: "Analytics & Conversion Tracking",
    description:
      "Set up practical measurement so decisions are based on visits, actions, form starts, and completed leads.",
    bullets: ["Event tracking", "Funnels", "Reporting setup"]
  }
];

const aiIncludes = [
  "AI visibility audit",
  "Entity structure",
  "Service and location pages",
  "Structured content",
  "Schema.org JSON-LD",
  "FAQ content",
  "Answer-style content blocks",
  "Metadata and Open Graph",
  "Internal linking",
  "Sitemap and robots.txt",
  "llms.txt placeholder",
  "Core Web Vitals",
  "Reviews and trust signals",
  "Clear company information",
  "Parseable content hierarchy"
];

const processSteps = [
  {
    step: "01",
    title: "Discover",
    deliverable: "Business and website brief",
    description:
      "Clarify the business, services, audience, locations, competitors, existing content, and commercial goals."
  },
  {
    step: "02",
    title: "Audit",
    deliverable: "Prioritized issue map",
    description:
      "Review AI readability, SEO foundations, page structure, performance, conversion paths, and trust signals."
  },
  {
    step: "03",
    title: "Strategy",
    deliverable: "Page, schema, and lead-flow plan",
    description:
      "Define the site map, priority pages, schema plan, messaging angle, lead flow, and launch scope."
  },
  {
    step: "04",
    title: "Structure",
    deliverable: "Content and entity model",
    description:
      "Build the content hierarchy, internal links, service blocks, FAQ logic, metadata, and structured data model."
  },
  {
    step: "05",
    title: "Design & Build",
    deliverable: "Responsive website implementation",
    description:
      "Create a fast, responsive website with premium UI, clean code, accessibility, and clear conversion paths."
  },
  {
    step: "06",
    title: "Launch & Improve",
    deliverable: "Validation checklist and next actions",
    description:
      "Ship the site, verify technical setup, connect measurement, and keep improving based on real signals."
  }
];

const exampleProjects = [
  {
    industry: "Restaurant",
    title: "Local dining discovery concept",
    problem: "Menu, location, reservations, and reviews are spread across disconnected pages.",
    solution: "A structured site with menu schema, local pages, reservation CTAs, and clear cuisine positioning.",
    outcome: "Intended outcome: easier discovery and a clearer path from search to booking.",
    tags: ["Local SEO", "Menu schema", "Booking UX"]
  },
  {
    industry: "Hotel",
    title: "Boutique stay visibility concept",
    problem: "Room types, amenities, local attractions, and direct booking value are unclear.",
    solution: "A fast hotel site with structured amenities, local intent content, FAQs, and direct booking flow.",
    outcome: "Intended outcome: better understanding of the property and less reliance on vague brochure pages.",
    tags: ["Amenities", "Direct booking", "Performance"]
  },
  {
    industry: "Dental Clinic",
    title: "Clinic trust and service concept",
    problem: "Treatment pages are thin and the patient journey does not build confidence.",
    solution: "Service pages, FAQ answers, doctor trust signals, review structure, and appointment lead capture.",
    outcome: "Intended outcome: stronger patient confidence and clearer appointment requests.",
    tags: ["Trust signals", "FAQs", "Appointments"]
  },
  {
    industry: "Law Firm",
    title: "Practice-area clarity concept",
    problem: "Practice areas are mixed together and expertise signals are difficult to parse.",
    solution: "Structured practice pages, clear attorney information, FAQs, internal links, and local schema.",
    outcome: "Intended outcome: more understandable expertise without exaggerated legal marketing.",
    tags: ["Practice pages", "Local schema", "Authority"]
  },
  {
    industry: "Real Estate Agency",
    title: "Property trust system concept",
    problem: "Listings, areas served, valuation content, and contact paths do not connect.",
    solution: "Area pages, listing UX, analytics, lead routing, and content blocks for buyers and sellers.",
    outcome: "Intended outcome: better local relevance and smoother inquiry paths.",
    tags: ["Area pages", "Lead routing", "Analytics"]
  },
  {
    industry: "Local Service Business",
    title: "Service-area growth concept",
    problem: "The site does not explain services, coverage areas, proof, or urgency clearly.",
    solution: "Service clusters, service-area pages, trust sections, quote forms, and conversion tracking.",
    outcome: "Intended outcome: clearer relevance for customers searching by service and location.",
    tags: ["Service clusters", "Quote forms", "Tracking"]
  }
];

const pricing = [
  {
    name: "AI Visibility Audit",
    price: "from EUR 490",
    description:
      "For businesses that already have a website and want to understand what blocks AI and search visibility.",
    includes: ["AI/search readability review", "Technical SEO checks", "Schema and metadata review", "Prioritized action plan", "Implementation estimate"]
  },
  {
    name: "AI-Ready Website",
    price: "from EUR 1,900",
    description:
      "For businesses that need a modern website built with AI readability, SEO, speed, and conversion in mind.",
    includes: ["Site strategy and structure", "Responsive premium design", "Next.js build", "Core SEO and schema setup", "Lead capture flow"],
    featured: true
  },
  {
    name: "Growth System",
    price: "Custom / monthly",
    description:
      "For businesses that want ongoing optimization, content structure, analytics, SEO/GEO improvements, and conversion work.",
    includes: ["Monthly optimization plan", "New content architecture", "Analytics review", "Conversion improvements", "Technical maintenance"]
  }
];

const trustItems = [
  "Clear scope before work starts",
  "No ranking guarantees",
  "Technical and content improvements",
  "Performance-focused build",
  "Transparent process",
  "Built for long-term maintainability"
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
      url: siteConfig.url,
      potentialAction: {
        "@type": "SearchAction",
        target: `${siteConfig.url}/?q={search_term_string}`,
        "query-input": "required name=search_term_string"
      }
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
      <main id="top" className="relative overflow-hidden">
        <div className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(91,141,239,0.16),transparent_30%),radial-gradient(circle_at_82%_22%,rgba(53,201,214,0.10),transparent_28%),linear-gradient(180deg,#050713_0%,#080b18_45%,#050713_100%)]" />
          <div className="absolute inset-0 bg-grid opacity-45" />
        </div>

        <section className="relative min-h-[92svh] px-5 pb-20 pt-32 sm:px-6 lg:px-8 lg:pt-36">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
            <Reveal className="max-w-3xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.045] px-3 py-2 text-sm text-slate-200 shadow-panel">
                <Sparkles className="h-4 w-4 text-signal-cyan" aria-hidden="true" />
                AI/search optimization for serious business websites
              </div>
              <h1 className="text-balance text-5xl font-semibold leading-[1.04] tracking-tight text-white sm:text-6xl lg:text-7xl">
                Make your website clearer for AI, search, and customers
              </h1>
              <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-slate-300 sm:text-xl">
                Web2Go turns unclear business websites into structured, fast, trustworthy digital assets that are easier for people, search engines, and AI systems to understand.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#contact" className="btn-primary justify-center">
                  <CalendarCheck className="h-4 w-4" aria-hidden="true" />
                  <span>Book Free Consultation</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <a href="#services" className="btn-secondary justify-center">
                  <Layers3 className="h-4 w-4" aria-hidden="true" />
                  <span>Explore Services</span>
                </a>
              </div>
              <div className="mt-9 grid gap-3 border-t border-white/10 pt-6 sm:grid-cols-2">
                {trustPoints.map((point) => (
                  <div key={point} className="flex items-center gap-3 text-sm text-slate-300">
                    <span className="grid h-7 w-7 place-items-center rounded-md border border-signal-cyan/30 bg-signal-cyan/10">
                      <Check className="h-4 w-4 text-signal-cyan" aria-hidden="true" />
                    </span>
                    {point}
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={120}>
              <HeroVisual />
            </Reveal>
          </div>
        </section>

        <section className="section-divider px-5 py-24 sm:px-6 lg:px-8" id="problem">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <SectionHeading
                eyebrow="The problem"
                title="Most websites were not built for modern discovery"
                description="A site can look acceptable and still fail to explain the business clearly to search engines, AI systems, and serious buyers."
              />
            </Reveal>
            <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {problemItems.map((item, index) => {
                const Icon = item.icon;
                return (
                <Reveal key={item.title} delay={index * 70}>
                  <article className="h-full rounded-lg border border-white/10 bg-white/[0.035] p-5 shadow-panel transition hover:-translate-y-1 hover:border-signal-cyan/30 hover:bg-white/[0.055]">
                    <div className="mb-5 grid h-10 w-10 place-items-center rounded-md border border-white/10 bg-ink-800 text-signal-cyan">
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
                  eyebrow="The solution"
                  title="Clear structure for humans, search, and AI systems"
                  description="Web2Go improves website structure, content, performance, schema, internal linking, service pages, and conversion flow so the business is easier to understand, trust, find, and contact."
                  align="left"
                />
                <a href="#contact" className="btn-primary mt-8 inline-flex">
                  <span>Plan my optimization</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </Reveal>
              <div className="grid gap-4">
                {solutionItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <Reveal key={item.title} delay={index * 90}>
                      <article className="rounded-lg border border-white/10 bg-white/[0.04] p-6 shadow-panel transition hover:border-signal-blue/40 hover:bg-white/[0.06]">
                        <div className="flex flex-col gap-5 sm:flex-row">
                          <div className="grid h-12 w-12 shrink-0 place-items-center rounded-md border border-white/10 bg-ink-800 text-signal-cyan">
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
                eyebrow="Services"
                title="Everything your website needs to become clearer and more useful"
                description="Focused website, search, AI readability, performance, and conversion services for businesses that need practical outcomes."
              />
            </Reveal>
            <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Reveal key={service.title} delay={(index % 3) * 80}>
                    <article className="service-card group h-full min-h-[318px] rounded-lg border border-white/10 bg-white/[0.035] p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:border-signal-cyan/40 hover:bg-white/[0.055]">
                      <div className="flex items-start justify-between gap-4">
                        <div className="grid h-11 w-11 place-items-center rounded-md border border-white/10 bg-ink-800 text-signal-cyan transition group-hover:text-signal-mint">
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
                      <div className="mt-6 flex items-center gap-2 text-xs font-medium text-slate-500 transition group-hover:text-signal-cyan">
                        <span>Client output</span>
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
                  eyebrow="AI Optimization"
                  title="What AI website optimization includes"
                  description="The goal is not to manipulate AI tools. The goal is to make the business easier to understand by improving structure, facts, content, speed, and trust."
                  align="left"
                />
                <div className="mt-8 rounded-lg border border-white/10 bg-white/[0.035] p-5">
                  <div className="flex items-start gap-4">
                    <ShieldCheck className="mt-1 h-6 w-6 shrink-0 text-signal-mint" aria-hidden="true" />
                    <p className="text-sm leading-7 text-slate-300">
                      Web2Go uses careful wording and avoids guaranteed ranking claims. The work strengthens AI readability and improves your chances across modern discovery channels.
                    </p>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={120}>
                <div className="grid gap-3 sm:grid-cols-2">
                  {aiIncludes.map((item) => (
                    <div key={item} className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-slate-200 shadow-panel">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-signal-cyan" aria-hidden="true" />
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
                eyebrow="Process"
                title="A clear path from audit to launch"
                description="Each step has a practical output, so the project stays focused on business clarity, technical quality, and conversion."
              />
            </Reveal>
            <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {processSteps.map((step, index) => (
                <Reveal key={step.title} delay={(index % 3) * 80}>
                  <article className="h-full rounded-lg border border-white/10 bg-white/[0.035] p-6 shadow-panel transition hover:border-signal-cyan/30 hover:bg-white/[0.05]">
                    <div className="flex items-center justify-between gap-4">
                      <p className="text-sm font-semibold text-signal-cyan">{step.step}</p>
                      <span className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs text-slate-400">
                        Deliverable
                      </span>
                    </div>
                    <h3 className="mt-4 text-xl font-semibold text-white">{step.title}</h3>
                    <p className="mt-3 rounded-md border border-signal-cyan/20 bg-signal-cyan/[0.08] px-3 py-2 text-sm font-medium text-signal-cyan">
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
                eyebrow="Example concepts"
                title="Demo case studies without fake client claims"
                description="These are example project concepts showing how Web2Go would think through different industries. They are not presented as real client results."
              />
            </Reveal>
            <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {exampleProjects.map((project, index) => (
                <Reveal key={project.title} delay={(index % 3) * 80}>
                  <article className="h-full rounded-lg border border-white/10 bg-white/[0.035] p-6 shadow-panel transition hover:border-signal-blue/40 hover:bg-white/[0.055]">
                    <div className="mb-5 flex items-center justify-between gap-3">
                      <span className="rounded-md border border-signal-cyan/25 bg-signal-cyan/10 px-3 py-1 text-sm text-signal-cyan">
                        {project.industry}
                      </span>
                      <Building2 className="h-5 w-5 text-slate-500" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                    <div className="mt-5 space-y-4 text-sm leading-7 text-slate-300">
                      <p>
                        <span className="font-semibold text-slate-100">Problem: </span>
                        {project.problem}
                      </p>
                      <p>
                        <span className="font-semibold text-slate-100">Solution: </span>
                        {project.solution}
                      </p>
                      <p>
                        <span className="font-semibold text-slate-100">Example outcome: </span>
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
                eyebrow="Pricing"
                title="Practical starting points, scoped before work begins"
                description="Final pricing depends on page count, integrations, content depth, technical complexity, and ongoing support needs."
              />
            </Reveal>
            <div className="mt-12 grid gap-4 lg:grid-cols-3">
              {pricing.map((tier, index) => (
                <Reveal key={tier.name} delay={index * 90}>
                  <article
                    className={`relative h-full rounded-lg border p-6 shadow-card ${
                      tier.featured
                        ? "border-signal-cyan/45 bg-signal-cyan/[0.085]"
                        : "border-white/10 bg-white/[0.035]"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-2xl font-semibold text-white">{tier.name}</h3>
                        <p className="mt-3 text-3xl font-semibold text-signal-cyan">{tier.price}</p>
                      </div>
                      {tier.featured ? (
                        <span className="rounded-md border border-signal-mint/30 bg-signal-mint/10 px-3 py-1 text-sm text-signal-mint">
                          Recommended
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
                    <a href="#contact" className="btn-secondary mt-7 w-full justify-center">
                      <span>Discuss this scope</span>
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                    <p className="mt-4 text-xs leading-6 text-slate-500">
                      Final price depends on scope, timeline, content, integrations, and technical requirements.
                    </p>
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
                  eyebrow="Trust"
                  title="No inflated promises, just the work that improves the foundation"
                  description="Modern discovery is complex. Web2Go focuses on the parts a business can responsibly improve: clarity, structure, speed, trust, and conversion."
                  align="left"
                />
              </Reveal>
              <Reveal delay={120}>
                <div className="grid gap-3 sm:grid-cols-2">
                  {trustItems.map((item) => (
                    <div key={item} className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.04] p-4 text-sm text-slate-200 shadow-panel">
                      <ShieldCheck className="h-5 w-5 shrink-0 text-signal-mint" aria-hidden="true" />
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
                eyebrow="FAQ"
                title="Straight answers before you book"
                description="A practical overview of what Web2Go does, what it does not promise, and how a project starts."
              />
            </Reveal>
            <Reveal delay={100} className="mt-12">
              <FAQAccordion items={faqItems} />
            </Reveal>
          </div>
        </section>

        <section className="section-divider px-5 py-24 sm:px-6 lg:px-8" id="contact">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <Reveal>
              <SectionHeading
                eyebrow="Contact"
                title="Book a focused consultation"
                description="Share your website, business type, and main goal. Web2Go will use that context to recommend the most useful next step."
                align="left"
              />
              <div className="mt-8 space-y-4 text-sm leading-7 text-slate-300">
                <p className="flex gap-3">
                  <Code2 className="mt-1 h-5 w-5 shrink-0 text-signal-cyan" aria-hidden="true" />
                  Built around clear scope, maintainable code, and practical business outcomes.
                </p>
                <p className="flex gap-3">
                  <LineChart className="mt-1 h-5 w-5 shrink-0 text-signal-mint" aria-hidden="true" />
                  Strong fit for businesses that need better visibility, trust, leads, and performance.
                </p>
                <p className="flex gap-3">
                  <DatabaseZap className="mt-1 h-5 w-5 shrink-0 text-signal-violet" aria-hidden="true" />
                  The form is frontend-only until a production backend is connected.
                </p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <ContactForm />
            </Reveal>
          </div>
        </section>

        <section className="px-5 pb-24 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 rounded-lg border border-white/10 bg-gradient-to-br from-signal-blue/10 via-white/[0.04] to-signal-cyan/10 px-6 py-10 text-center shadow-card">
              <Rocket className="h-9 w-9 text-signal-cyan" aria-hidden="true" />
              <h2 className="max-w-3xl text-3xl font-semibold text-white sm:text-4xl">
                Ready to make your website clearer for AI, search, and customers?
              </h2>
              <p className="max-w-2xl text-base leading-8 text-slate-300">
                Start with a focused conversation about where your website is unclear and what would create the most leverage.
              </p>
              <a href="#contact" className="btn-primary">
                <span>Book Free Consultation</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="border-t border-white/10 px-5 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
          <div>
            <a href="#top" className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-lg border border-white/15 bg-gradient-to-br from-signal-blue via-signal-cyan to-signal-mint text-sm font-bold text-white">
                W
              </span>
              <span className="text-lg font-semibold text-white">
                Web<span className="text-signal-blue">2</span>Go
              </span>
            </a>
            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
              A digital studio for businesses that need clearer websites, stronger AI readability, technical SEO, trust, performance, and conversion.
            </p>
          </div>
          <FooterColumn
            title="Services"
            links={[
              { label: "AI Optimization", href: "#ai-optimization" },
              { label: "Technical SEO", href: "#services" },
              { label: "Structured Data", href: "#services" },
              { label: "Website Redesign", href: "#services" }
            ]}
          />
          <FooterColumn
            title="Company"
            links={[
              { label: "Process", href: "#process" },
              { label: "Example Work", href: "#work" },
              { label: "Pricing", href: "#pricing" },
              { label: "FAQ", href: "#faq" }
            ]}
          />
          <div>
            <h3 className="text-sm font-semibold text-white">Contact</h3>
            <a href={`mailto:${siteConfig.email}`} className="mt-4 block text-sm text-slate-400 transition hover:text-white">
              {siteConfig.email}
            </a>
            <a href="#contact" className="mt-5 inline-flex rounded-md border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-medium text-slate-300 transition hover:border-signal-cyan/35 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-signal-cyan/45">
              Request consultation
            </a>
            <div className="mt-5 flex flex-wrap gap-3 text-xs text-slate-500">
              <a href="/privacy" className="hover:text-slate-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-signal-cyan/45">Privacy Policy</a>
              <a href="/terms" className="hover:text-slate-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-signal-cyan/45">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </>
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
          <a key={link.label} href={link.href} className="text-sm text-slate-400 transition hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-signal-cyan/45">
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}
