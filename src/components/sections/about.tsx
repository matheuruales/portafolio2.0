"use client";

import Link from "next/link";
import React, { useRef } from "react";
import { BoxReveal } from "../reveal-animations";
import Image from "next/image";
import { useLang } from "@/contexts/language";

const AboutSection = () => {
  const { t } = useLang();
  const cardRef = useRef<HTMLDivElement>(null);

  const resetCardInteraction = () => {
    if (!cardRef.current) return;
    cardRef.current.style.setProperty("--card-rotate-x", "8deg");
    cardRef.current.style.setProperty("--card-rotate-y", "0deg");
    cardRef.current.style.setProperty("--card-translate-y", "0px");
    cardRef.current.style.setProperty("--shine-x", "12%");
    cardRef.current.style.setProperty("--shine-y", "0%");
  };

  const handleCardPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    if (e.pointerType !== "mouse") return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    const rotateY = (x - 0.5) * 14;
    const rotateX = 10 - (y - 0.5) * 12;
    const translateY = -2;

    cardRef.current.style.setProperty("--card-rotate-x", `${rotateX.toFixed(2)}deg`);
    cardRef.current.style.setProperty("--card-rotate-y", `${rotateY.toFixed(2)}deg`);
    cardRef.current.style.setProperty("--card-translate-y", `${translateY}px`);
    cardRef.current.style.setProperty("--shine-x", `${(x * 100).toFixed(2)}%`);
    cardRef.current.style.setProperty("--shine-y", `${(y * 100).toFixed(2)}%`);
  };

  return (
    <section id="about" className="relative z-[2] min-h-screen w-full py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/85 via-white/90 to-slate-100/85 dark:from-[#04050b]/95 dark:via-[#070913]/92 dark:to-[#05060d]/95" />
        <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl dark:bg-cyan-400/10" />
        <div className="absolute -bottom-28 left-0 h-72 w-72 rounded-full bg-amber-200/30 blur-3xl dark:bg-sky-400/10" />
      </div>
      <div className="mx-auto max-w-7xl px-4 md:px-10">
        <Link href={"#about"}>
          <BoxReveal width="100%">
            <div>
              <h2 className="section-title">
                {t.about.title}
              </h2>
              <div className="section-title-line" />
            </div>
          </BoxReveal>
        </Link>

        <div className="mt-10 md:mt-14 w-full rounded-3xl border-[2px] border-cyan-300/45 shadow-[0_18px_46px_rgba(14,116,144,0.18)] dark:shadow-[0_0_38px_rgba(56,189,248,0.28)] bg-gradient-to-br from-white/94 via-cyan-50/82 to-slate-100/88 dark:from-[#07070d]/95 dark:via-[#0b1421]/93 dark:to-[#0f1b2f]/95 backdrop-blur-[3px] p-5 md:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 lg:pr-8 lg:border-r border-cyan-300/25 dark:border-cyan-300/20">
              <div className="space-y-6 text-zinc-800 dark:text-zinc-100">
                <p className="text-base leading-8 md:text-lg md:leading-8 font-medium text-zinc-800 dark:text-zinc-200">
                  {t.about.p1}
                </p>
                <p className="text-base leading-8 md:text-lg md:leading-8 font-medium text-zinc-700 dark:text-zinc-300">
                  {t.about.p2}
                </p>
                <p className="text-base leading-8 md:text-lg md:leading-8 font-medium text-zinc-700 dark:text-zinc-300">
                  {t.about.p3}
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4">
                {t.about.stats.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-cyan-300/40 dark:border-cyan-300/30 bg-white/78 dark:bg-cyan-400/[0.06] px-4 py-3 text-center"
                  >
                    <p className="text-2xl md:text-3xl font-semibold text-zinc-900 dark:text-white">
                      {item.value}
                    </p>
                    <p className="text-xs md:text-sm text-zinc-600 dark:text-zinc-300 mt-1">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                {t.about.pills.map((pill) => (
                  <span
                    key={pill}
                    className="rounded-full border border-cyan-300/45 dark:border-cyan-300/35 bg-cyan-100/75 dark:bg-cyan-400/10 px-4 py-2 text-xs md:text-sm tracking-wide text-cyan-900 dark:text-cyan-100 backdrop-blur-sm"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center mt-6 lg:mt-0">
              <div className="about-lanyard-anchor">
                <div className="about-lanyard-string" />
                <div className="about-lanyard-pin" />
                <div
                  ref={cardRef}
                  className="about-lanyard-card"
                  onPointerMove={handleCardPointerMove}
                  onPointerLeave={resetCardInteraction}
                >
                  <div className="about-lanyard-shine" />
                  <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl">
                    <Image
                      src="/assets/profile/matheu-hero.jpg"
                      alt="Foto de Johnatan Matheu Ruales Galvis"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="px-3 py-2 text-center">
                    <p className="text-[11px] sm:text-xs font-semibold tracking-wide text-zinc-900 dark:text-zinc-100">
                      JOHNATAN MATHEU
                    </p>
                    <p className="text-[11px] sm:text-xs font-semibold tracking-wide text-zinc-900 dark:text-zinc-100">
                      RUALES GALVIS
                    </p>
                    <p className="text-[11px] sm:text-xs text-cyan-700 dark:text-amber-200">
                      Fullstack AI Engineer
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
