"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type FAQItem = {
  question: string;
  answer: string;
};

export function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="mx-auto grid max-w-4xl gap-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const buttonId = `faq-button-${index}`;
        const panelId = `faq-panel-${index}`;

        return (
          <div
            key={item.question}
            className="rounded-lg border border-white/10 bg-white/[0.035] shadow-panel transition hover:border-white/20 hover:bg-white/[0.045]"
          >
            <button
              type="button"
              id={buttonId}
              className="flex w-full items-center justify-between gap-5 rounded-lg px-5 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-signal-blue/45 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
            >
              <span className="text-base font-semibold text-white">{item.question}</span>
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-signal-blue transition ${
                  isOpen ? "rotate-180" : ""
                }`}
                aria-hidden="true"
              />
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              aria-hidden={!isOpen}
              className={`grid transition-all duration-300 ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 text-sm leading-7 text-slate-300 sm:text-base">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
