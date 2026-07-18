"use client";

import type { CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { Messages } from "@/i18n/types";

const DESKTOP_QUERY = "(min-width: 1024px)";
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

export function DiscoveryStats({ copy }: { copy: Messages["discoveryStats"] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [sectionEntered, setSectionEntered] = useState(false);
  const [revealedRows, setRevealedRows] = useState<Set<number>>(() => new Set());
  const sectionNode = useRef<HTMLElement | null>(null);
  const rowNodes = useRef<Array<HTMLElement | null>>([]);
  const activeIndexRef = useRef(0);

  useEffect(() => {
    const node = sectionNode.current;
    if (!node) return;

    const reducedMotionQuery = window.matchMedia(REDUCED_MOTION_QUERY);
    let observer: IntersectionObserver | null = null;

    const observeSection = () => {
      observer?.disconnect();

      if (reducedMotionQuery.matches) {
        setSectionEntered(true);
        return;
      }

      observer = new IntersectionObserver(
        ([entry]) => {
          if (!entry?.isIntersecting) return;
          setSectionEntered(true);
          observer?.disconnect();
        },
        { rootMargin: "0px 0px -12% 0px", threshold: 0.12 }
      );
      observer.observe(node);
    };

    observeSection();
    reducedMotionQuery.addEventListener("change", observeSection);

    return () => {
      observer?.disconnect();
      reducedMotionQuery.removeEventListener("change", observeSection);
    };
  }, []);

  useEffect(() => {
    const desktopQuery = window.matchMedia(DESKTOP_QUERY);
    const reducedMotionQuery = window.matchMedia(REDUCED_MOTION_QUERY);
    let observer: IntersectionObserver | null = null;

    const observeDesktopRows = () => {
      observer?.disconnect();
      observer = null;

      if (!desktopQuery.matches || reducedMotionQuery.matches) return;

      const rowsInActiveZone = new Set<number>();
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const index = Number((entry.target as HTMLElement).dataset.statIndex ?? 0);
            if (entry.isIntersecting) rowsInActiveZone.add(index);
            else rowsInActiveZone.delete(index);
          });

          if (rowsInActiveZone.size === 0) return;

          const viewportCenter = window.innerHeight / 2;
          const rankedRows = Array.from(rowsInActiveZone).map((index) => {
            const rect = rowNodes.current[index]?.getBoundingClientRect();
            const center = rect ? (rect.top + rect.bottom) / 2 : viewportCenter;
            return { index, distance: Math.abs(center - viewportCenter) };
          }).sort((a, b) => a.distance - b.distance);

          const next = rankedRows[0];
          if (!next || next.index === activeIndexRef.current) return;

          const current = rankedRows.find((row) => row.index === activeIndexRef.current);
          if (current && next.distance + 40 >= current.distance) return;

          activeIndexRef.current = next.index;
          setActiveIndex(next.index);
        },
        { rootMargin: "-42% 0px -42% 0px", threshold: [0, 0.01, 0.25] }
      );

      rowNodes.current.forEach((row) => {
        if (row) observer?.observe(row);
      });
    };

    observeDesktopRows();
    desktopQuery.addEventListener("change", observeDesktopRows);
    reducedMotionQuery.addEventListener("change", observeDesktopRows);

    return () => {
      observer?.disconnect();
      desktopQuery.removeEventListener("change", observeDesktopRows);
      reducedMotionQuery.removeEventListener("change", observeDesktopRows);
    };
  }, []);

  useEffect(() => {
    const desktopQuery = window.matchMedia(DESKTOP_QUERY);
    const reducedMotionQuery = window.matchMedia(REDUCED_MOTION_QUERY);
    let observer: IntersectionObserver | null = null;

    const observeMobileRows = () => {
      observer?.disconnect();
      observer = null;

      if (desktopQuery.matches) return;

      if (reducedMotionQuery.matches) {
        setRevealedRows(new Set(copy.items.map((_, index) => index)));
        return;
      }

      observer = new IntersectionObserver(
        (entries) => {
          const entered = entries.filter((entry) => entry.isIntersecting);
          if (entered.length === 0) return;

          setRevealedRows((current) => {
            const next = new Set(current);
            entered.forEach((entry) => {
              const index = Number((entry.target as HTMLElement).dataset.statIndex ?? 0);
              next.add(index);
              observer?.unobserve(entry.target);
            });
            return next;
          });
        },
        { rootMargin: "0px 0px -8% 0px", threshold: 0.22 }
      );

      rowNodes.current.forEach((row) => {
        if (row) observer?.observe(row);
      });
    };

    observeMobileRows();
    desktopQuery.addEventListener("change", observeMobileRows);
    reducedMotionQuery.addEventListener("change", observeMobileRows);

    return () => {
      observer?.disconnect();
      desktopQuery.removeEventListener("change", observeMobileRows);
      reducedMotionQuery.removeEventListener("change", observeMobileRows);
    };
  }, [copy.items]);

  return (
    <section
      ref={sectionNode}
      className="discovery-stats-section section-shell bg-canvas"
      id="discovery-data"
      data-entered={sectionEntered}
    >
      <div className="mx-auto max-w-[var(--container)]">
        <div className="grid min-w-0 gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <div className="discovery-stats-heading-mask max-w-5xl">
            <div className="discovery-stats-heading min-w-0">
              <p className="eyebrow">{copy.eyebrow}</p>
              <h2 className="mt-6 whitespace-pre-line text-balance text-4xl font-semibold leading-[1.04] text-ink-950 sm:text-6xl">
                {copy.title}
              </h2>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-ink-600">{copy.description}</p>
            </div>
          </div>

          <div className="discovery-stats-progress hidden min-w-[132px] items-center justify-end gap-4 pb-1 lg:flex" aria-live="polite">
            <span className="tabular-nums text-xs font-black tracking-[0.16em] text-ink-700">
              {String(activeIndex + 1).padStart(2, "0")} / {String(copy.items.length).padStart(2, "0")}
            </span>
            <span className="grid w-12 grid-cols-5 gap-1" aria-hidden="true">
              {copy.items.map((item, index) => (
                <span key={item.metric} className="h-1 bg-ink-950/15">
                  <span className={`block h-full bg-cobalt-500 transition-transform duration-300 ${index <= activeIndex ? "scale-x-100" : "scale-x-0"}`} />
                </span>
              ))}
            </span>
          </div>
        </div>

        <div className="discovery-stats-grid relative mt-12">
          {copy.items.map((item, index) => {
            const active = index === activeIndex;
            const rowStyle = { "--stats-row-delay": `${index * 55}ms` } as CSSProperties;

            return (
              <article
                key={item.metric}
                ref={(node) => {
                  rowNodes.current[index] = node;
                }}
                data-stat-index={index}
                data-active={active}
                data-mobile-revealed={revealedRows.has(index)}
                style={rowStyle}
                className="discovery-stats-row grid h-[420px] min-w-0 grid-cols-[minmax(0,1fr)] content-center gap-6 overflow-hidden border-b px-5 sm:h-[360px] sm:px-8 md:h-[340px] lg:h-[clamp(240px,31vh,300px)] lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-14 lg:px-10"
                aria-current={active ? "step" : undefined}
              >
                <div className="discovery-stats-primary relative z-10 grid min-w-0 grid-cols-[44px_minmax(0,1fr)] items-start gap-4 sm:grid-cols-[54px_minmax(0,1fr)] sm:gap-6">
                  <span className="discovery-stats-index mt-2 text-sm font-black tabular-nums">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0">
                    <div className="discovery-stats-number-mask">
                      <p className="discovery-stats-metric text-5xl font-semibold leading-none sm:text-6xl lg:text-7xl">
                        {item.metric}
                      </p>
                    </div>
                    <p className="discovery-stats-label mt-4 min-h-12 max-w-md text-sm font-semibold leading-6 sm:text-base">
                      {item.label}
                    </p>
                    <span className="discovery-stats-line mt-5 block h-1 w-28 overflow-hidden sm:w-36" aria-hidden="true">
                      <span className="block h-full w-full origin-left" />
                    </span>
                  </div>
                </div>

                <div className="discovery-stats-copy relative z-10 min-w-0">
                  <div className="flex min-w-0 items-start gap-4">
                    <ArrowRight className="discovery-stats-marker mt-1.5 h-5 w-5 shrink-0" aria-hidden="true" />
                    <p className="discovery-stats-statement max-w-xl text-lg font-semibold leading-7 sm:text-xl sm:leading-8 lg:text-2xl lg:leading-9">
                      {item.statement}
                    </p>
                  </div>
                  {item.disclaimer ? (
                    <p className="discovery-stats-disclaimer mt-3 max-w-xl border-l-2 pl-4 text-xs font-semibold leading-5">
                      {item.disclaimer}
                    </p>
                  ) : null}
                  <a
                    href={item.sourceUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="discovery-stats-source mt-4 inline-flex min-h-7 items-center gap-2 text-xs font-bold underline underline-offset-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-cobalt-500"
                  >
                    {copy.sourceLabel}: {item.sourceName}
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
