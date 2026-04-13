"use client";

import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { BriefcaseBusiness, GraduationCap, CalendarClock } from "lucide-react";
import { useLang } from "@/contexts/language";

type ExperienceKind = "work" | "academic";

const ITEM_STYLE: Record<
  ExperienceKind,
  {
    badge: string;
    border: string;
    glow: string;
    dot: string;
    dotRing: string;
    iconWrap: string;
    accent: string;
    cardGradient: string;
  }
> = {
  work: {
    badge:
      "border-emerald-400/45 bg-emerald-400/10 text-emerald-800 dark:text-emerald-200",
    border: "group-hover:border-emerald-300/55",
    glow:
      "from-emerald-400/24 via-emerald-300/8 to-transparent dark:from-emerald-400/20 dark:via-emerald-300/7",
    dot: "bg-emerald-400 border-emerald-200/90",
    dotRing: "shadow-[0_0_0_4px_rgba(52,211,153,0.22)] md:shadow-[0_0_0_6px_rgba(52,211,153,0.25)]",
    iconWrap:
      "border-emerald-300/55 bg-emerald-300/16 text-emerald-800 dark:border-emerald-400/35 dark:bg-emerald-400/14 dark:text-emerald-200",
    accent: "from-emerald-400/0 via-emerald-400/45 to-emerald-400/0",
    cardGradient:
      "from-emerald-300/26 via-white/65 to-cyan-200/16 dark:from-emerald-700/22 dark:via-zinc-950/70 dark:to-cyan-900/12",
  },
  academic: {
    badge: "border-sky-400/45 bg-sky-400/10 text-sky-800 dark:text-sky-200",
    border: "group-hover:border-sky-300/55",
    glow:
      "from-sky-400/24 via-cyan-300/8 to-transparent dark:from-sky-400/20 dark:via-cyan-300/7",
    dot: "bg-cyan-400 border-cyan-200/90",
    dotRing: "shadow-[0_0_0_4px_rgba(34,211,238,0.22)] md:shadow-[0_0_0_6px_rgba(34,211,238,0.25)]",
    iconWrap:
      "border-cyan-300/55 bg-cyan-300/16 text-cyan-800 dark:border-cyan-400/35 dark:bg-cyan-400/14 dark:text-cyan-200",
    accent: "from-cyan-400/0 via-cyan-400/45 to-cyan-400/0",
    cardGradient:
      "from-cyan-300/26 via-white/66 to-sky-200/16 dark:from-cyan-700/22 dark:via-zinc-950/70 dark:to-sky-900/12",
  },
};

const ExperienceSection = () => {
  const { t } = useLang();

  return (
    <section id="experience" className="relative z-[2] min-h-screen w-full py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-white/62 via-slate-50/82 to-white/62 dark:from-black/45 dark:via-black/64 dark:to-black/45" />
        <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl dark:bg-cyan-400/15" />
        <div className="absolute -bottom-24 left-0 h-72 w-72 rounded-full bg-emerald-200/24 blur-3xl dark:bg-emerald-400/10" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-10">
        <Link href="#experience">
          <div>
            <h2 className="section-title">{t.experience.title}</h2>
            <div className="section-title-line" />
          </div>
        </Link>

        <p className="mx-auto mt-6 max-w-3xl text-center text-sm md:text-base text-zinc-700 dark:text-zinc-300 leading-7">
          {t.experience.subtitle}
        </p>

        {/* Mobile-only layout */}
        <div className="mt-10 space-y-5 md:hidden">
          {t.experience.timeline.map((item, index) => {
            const style = ITEM_STYLE[item.kind as ExperienceKind];
            const kindLabel = item.kind === "work" ? t.experience.kind.work : t.experience.kind.academic;
            return (
              <motion.article
                key={`mobile-${item.title}-${index}`}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.04 }}
                className="group"
              >
                <div className={cn("rounded-[1.15rem] bg-gradient-to-br p-[1px]", style.cardGradient)}>
                  <div
                    className={cn(
                      "relative overflow-hidden rounded-[1.05rem] border border-cyan-200/45 dark:border-white/15 bg-white/92 dark:bg-zinc-950/76 backdrop-blur-xl p-5 shadow-[0_18px_40px_-26px_rgba(15,23,42,0.35)] dark:shadow-[0_24px_55px_-30px_rgba(0,0,0,0.85)] transition-all duration-300",
                      style.border
                    )}
                  >
                    <div
                      className={cn(
                        "pointer-events-none absolute inset-0 bg-gradient-to-br opacity-80 transition-opacity duration-300 group-hover:opacity-100",
                        style.glow
                      )}
                    />
                    <div className="relative z-10 flex flex-col items-center text-center">
                      <div
                        className={cn(
                          "inline-flex h-10 w-10 items-center justify-center rounded-2xl border mb-3",
                          style.iconWrap
                        )}
                      >
                        {item.kind === "work" ? (
                          <BriefcaseBusiness className="h-5 w-5" />
                        ) : (
                          <GraduationCap className="h-5 w-5" />
                        )}
                      </div>
                      <div className="flex flex-wrap items-center justify-center gap-2">
                        <span
                          className={cn(
                            "inline-flex items-center gap-1 rounded-full border px-3 py-1 text-[11px]",
                            style.badge
                          )}
                        >
                          {item.kind === "work" ? (
                            <BriefcaseBusiness className="h-3.5 w-3.5" />
                          ) : (
                            <GraduationCap className="h-3.5 w-3.5" />
                          )}
                          {kindLabel}
                        </span>
                        <span className="inline-flex items-center gap-1 rounded-full border border-black/10 dark:border-white/20 bg-white/70 dark:bg-black/35 px-3 py-1 text-[11px] text-zinc-700 dark:text-zinc-300">
                          <CalendarClock className="h-3.5 w-3.5" />
                          {item.period}
                        </span>
                      </div>
                      <h3 className="mt-4 text-base font-semibold leading-snug text-zinc-900 dark:text-zinc-100 text-balance">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-zinc-700 dark:text-zinc-300">
                        {item.org}
                      </p>
                      <p className="mt-3 text-sm leading-7 text-zinc-800 dark:text-zinc-200">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Desktop timeline */}
        <div className="relative mt-12 md:mt-14 hidden md:block">
          <div className="pointer-events-none absolute left-[10px] sm:left-5 md:left-1/2 md:-translate-x-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-cyan-300/85 via-cyan-400/45 via-emerald-300/35 to-transparent" />

          <div className="space-y-5 sm:space-y-6 md:space-y-8">
            {t.experience.timeline.map((item, index) => {
              const isRight = index % 2 !== 0;
              const style = ITEM_STYLE[item.kind as ExperienceKind];
              const kindLabel = item.kind === "work" ? t.experience.kind.work : t.experience.kind.academic;
              return (
                <motion.article
                  key={`${item.title}-${index}`}
                  initial={{ opacity: 0, x: isRight ? 24 : -24, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -8, scale: 1.012 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.48, delay: index * 0.05 }}
                  className={cn(
                    "group relative pl-7 sm:pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-10",
                    isRight ? "md:[&>div:first-child]:order-2" : ""
                  )}
                >
                  <div className={cn("pr-1 sm:pr-0 md:px-4", isRight ? "md:pl-10" : "md:pr-10")}>
                    <div className={cn("rounded-[1.15rem] bg-gradient-to-br p-[1px]", style.cardGradient)}>
                      <div
                        className={cn(
                          "relative overflow-hidden rounded-[1.05rem] sm:rounded-[1.1rem] border border-cyan-200/45 dark:border-white/15 bg-white/92 dark:bg-zinc-950/76 backdrop-blur-xl p-3.5 sm:p-5 md:p-6 shadow-[0_20px_44px_-28px_rgba(15,23,42,0.35)] dark:shadow-[0_24px_55px_-30px_rgba(0,0,0,0.85)] transition-all duration-300",
                          style.border
                        )}
                      >
                        <div
                          className={cn(
                            "pointer-events-none absolute inset-0 bg-gradient-to-br opacity-80 transition-opacity duration-300 group-hover:opacity-100",
                            style.glow
                          )}
                        />
                        <div className="pointer-events-none absolute right-0 top-0 h-20 w-20 rounded-full bg-white/20 blur-2xl" />
                        <div className={cn("pointer-events-none absolute inset-y-4 sm:inset-y-6 left-0 w-[2px] rounded-full bg-gradient-to-b", style.accent)} />

                        <div className="relative z-10">
                          <div className="mb-2.5 sm:mb-3 flex items-center justify-between">
                            <div
                              className={cn(
                                "inline-flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-lg sm:rounded-xl border",
                                style.iconWrap
                              )}
                            >
                              {item.kind === "work" ? (
                                <BriefcaseBusiness className="h-4 w-4" />
                              ) : (
                                <GraduationCap className="h-4 w-4" />
                              )}
                            </div>
                          </div>

                          <div className="flex flex-wrap max-[420px]:flex-col max-[420px]:items-start items-center gap-2">
                            <span
                              className={cn(
                                "inline-flex items-center gap-1 rounded-full border px-2.5 sm:px-3 py-1 text-[10px] sm:text-[11px]",
                                style.badge
                              )}
                            >
                              {item.kind === "work" ? (
                                <BriefcaseBusiness className="h-3.5 w-3.5" />
                              ) : (
                                <GraduationCap className="h-3.5 w-3.5" />
                              )}
                              {kindLabel}
                            </span>
                            <span className="inline-flex items-center gap-1 rounded-full border border-black/10 dark:border-white/20 bg-white/70 dark:bg-black/35 px-2.5 sm:px-3 py-1 text-[10px] sm:text-[11px] text-zinc-700 dark:text-zinc-300">
                              <CalendarClock className="h-3.5 w-3.5" />
                              {item.period}
                            </span>
                          </div>

                          <h3 className="mt-3.5 sm:mt-4 text-base sm:text-lg md:text-xl font-semibold leading-snug text-zinc-900 dark:text-zinc-100 text-balance">
                            {item.title}
                          </h3>
                          <p className="mt-1 text-sm font-medium text-zinc-700 dark:text-zinc-300">
                            {item.org}
                          </p>
                          <p className="mt-2.5 sm:mt-3 text-sm md:text-base leading-6 sm:leading-7 text-zinc-800 dark:text-zinc-200">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="hidden md:block" />

                  <div
                    className={cn(
                      "pointer-events-none absolute left-[2px] sm:left-[13px] md:left-1/2 md:-translate-x-1/2 top-6 sm:top-7 md:top-8 h-4 w-4 rounded-full border-2",
                      style.dot,
                      style.dotRing
                    )}
                  />
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
