import Image from "next/image";
import { ArrowRight, Bot, Check, Clock3, MapPin, Search, Star } from "lucide-react";
import type { Messages } from "@/i18n/types";

export function CasePreview({ copy }: { copy: Messages["visuals"]["restaurant"] }) {
  return (
    <figure aria-label={copy.label} className="w-full min-w-0 overflow-hidden rounded-[14px] border border-ink-950/15 bg-white shadow-lift">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-ink-950/10 bg-paper px-4 py-3">
        <figcaption className="min-w-0 text-xs font-black uppercase tracking-[0.14em] text-cobalt-600">{copy.label}</figcaption>
        <span className="rounded-full border border-ink-950/15 bg-white px-2.5 py-1 text-[10px] font-bold text-ink-600">{copy.exampleBadge}</span>
      </div>

      <div className="grid w-full min-w-0 grid-cols-[minmax(0,1fr)] lg:grid-cols-[1.18fr_0.82fr]">
        <div className="min-w-0 border-b border-ink-950/10 lg:border-b-0 lg:border-r">
          <div className="relative aspect-[4/3] min-h-0 overflow-hidden bg-ink-950 sm:aspect-[16/8.3] sm:min-h-52">
            <Image
              src="/images/example-restaurant.webp"
              alt={copy.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/15 to-transparent" aria-hidden="true" />
            <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-6">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-acid">{copy.cuisine}</p>
              <h3 className="mt-2 text-3xl font-semibold">{copy.business}</h3>
              <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-xs text-white/85">
                <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" aria-hidden="true" />{copy.location}</span>
                <span className="flex items-center gap-1.5"><Star className="h-3.5 w-3.5 fill-acid text-acid" aria-hidden="true" />{copy.rating}</span>
                <span className="flex items-center gap-1.5"><Clock3 className="h-3.5 w-3.5" aria-hidden="true" />{copy.hours}</span>
              </div>
            </div>
          </div>

          <div className="grid gap-4 p-5 sm:grid-cols-[1fr_auto] sm:items-end sm:p-6">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.12em] text-ink-600">{copy.menuTitle}</p>
              <ul className="mt-3 grid gap-2">
                {copy.menu.map((item) => (
                  <li key={item.name} className="flex items-center justify-between gap-4 border-b border-ink-950/10 pb-2 text-xs">
                    <span className="font-semibold text-ink-800">{item.name}</span>
                    <span className="font-bold text-ink-950">{item.price}</span>
                  </li>
                ))}
              </ul>
            </div>
            <span className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-cobalt-500 px-4 py-2 text-xs font-bold text-white">
              {copy.reserve}<ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </span>
          </div>
        </div>

        <div className="min-w-0 bg-cobalt-50 p-5 sm:p-6">
          <div className="rounded-[12px] border border-cobalt-500/15 bg-white p-4 shadow-card">
            <p className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.12em] text-cobalt-600"><Bot className="h-4 w-4" aria-hidden="true" />{copy.discoveryTitle}</p>
            <div className="mt-4 rounded-md bg-canvas p-3 text-xs leading-5 text-ink-600">
              <Search className="mb-2 h-4 w-4 text-cobalt-600" aria-hidden="true" />
              “{copy.query}”
            </div>
            <div className="mt-3 border-l-2 border-cobalt-500 pl-3">
              <p className="font-bold text-ink-950">{copy.business}</p>
              <p className="mt-1 text-xs leading-5 text-ink-600">{copy.result}</p>
            </div>
          </div>

          <ul className="mt-4 grid gap-2">
            {copy.understood.map((item) => (
              <li key={item} className="flex items-center gap-2 rounded-md border border-cobalt-500/15 bg-white px-3 py-2.5 text-xs font-semibold text-ink-700">
                <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-acid text-ink-950"><Check className="h-3 w-3" aria-hidden="true" /></span>
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-4 rounded-md bg-ink-950 px-4 py-3 text-xs font-bold text-white">{copy.outcome}</p>
        </div>
      </div>

      <a href="https://unsplash.com/photos/restaurant-interior-xpzICNSaVUs" target="_blank" rel="noreferrer" className="block border-t border-ink-950/10 bg-canvas px-4 py-2 text-right text-[10px] text-ink-500 hover:text-cobalt-600">
        {copy.photoCredit}
      </a>
    </figure>
  );
}
