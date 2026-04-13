"use client";

import Link from "next/link";
import React, { useRef } from "react";
import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import {
  AppWindow,
  BrainCircuit,
  Layers3,
  Workflow,
  Gauge,
  LayoutDashboard,
  Rocket,
  Palette,
  Sparkles,
} from "lucide-react";
import { useLang } from "@/contexts/language";

const SERVICE_ICONS: React.ComponentType<{ className?: string }>[] = [
  AppWindow,
  BrainCircuit,
  Layers3,
  Workflow,
  Gauge,
  LayoutDashboard,
  Rocket,
  Palette,
];

const SERVICE_STYLES = [
  { gradient: "from-cyan-400/35 via-sky-400/18 to-transparent", borderGlow: "group-hover:border-cyan-300/55" },
  { gradient: "from-sky-400/35 via-blue-400/18 to-transparent", borderGlow: "group-hover:border-sky-300/55" },
  { gradient: "from-emerald-400/35 via-teal-400/18 to-transparent", borderGlow: "group-hover:border-emerald-300/55" },
  { gradient: "from-amber-400/35 via-orange-400/18 to-transparent", borderGlow: "group-hover:border-amber-300/55" },
  { gradient: "from-blue-400/35 via-indigo-400/18 to-transparent", borderGlow: "group-hover:border-blue-300/55" },
  { gradient: "from-cyan-400/35 via-slate-300/18 to-transparent", borderGlow: "group-hover:border-cyan-200/55" },
  { gradient: "from-lime-400/35 via-green-400/18 to-transparent", borderGlow: "group-hover:border-lime-300/55" },
  { gradient: "from-sky-400/35 via-cyan-400/18 to-transparent", borderGlow: "group-hover:border-sky-300/55" },
];

const ServicesSection = () => {
  const { t } = useLang();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { margin: "0px 0px -100px 0px" });

  return (
    <section id="services" ref={sectionRef} className="relative z-[2] min-h-screen w-full py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-slate-50/80 to-white/60 dark:from-black/45 dark:via-black/62 dark:to-black/45" />
        <div className="absolute -top-20 right-8 h-60 w-60 rounded-full bg-cyan-300/22 blur-3xl dark:hidden" />
        <div className="absolute -bottom-20 left-8 h-60 w-60 rounded-full bg-amber-200/24 blur-3xl dark:hidden" />
      </div>

      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Link href="#services">
          <div>
            <h2 className="section-title">{t.services.title}</h2>
            <div className="section-title-line" />
          </div>
        </Link>

        <p className="mx-auto mt-6 max-w-3xl text-center text-sm md:text-base text-zinc-700 dark:text-zinc-300 leading-7">
          {t.services.subtitle}
        </p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.08,
                delayChildren: 0.05,
              },
            },
          }}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5"
        >
          {t.services.items.map((service, idx) => {
            const Icon = SERVICE_ICONS[idx];
            const style = SERVICE_STYLES[idx];
            return (
            <motion.article
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 22, scale: 0.98 },
                visible: { opacity: 1, y: 0, scale: 1 },
              }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              whileHover={{ y: -8, scale: 1.01 }}
              className={cn(
                "group relative overflow-hidden rounded-2xl border border-cyan-200/45 dark:border-white/15 bg-white/90 dark:bg-zinc-950/65 backdrop-blur-xl p-5 md:p-6 shadow-[0_20px_42px_rgba(15,23,42,0.14)] dark:shadow-black/40 transition-colors duration-300",
                style.borderGlow
              )}
            >
              <div
                className={cn(
                  "pointer-events-none absolute inset-0 bg-gradient-to-br opacity-75 transition-opacity duration-500 group-hover:opacity-100",
                  style.gradient
                )}
              />
              <motion.div
                aria-hidden
                animate={isInView ? {
                  x: idx % 2 === 0 ? [0, 8, 0] : [0, -8, 0],
                  y: idx % 2 === 0 ? [0, -5, 0] : [0, 5, 0],
                } : false}
                transition={{
                  duration: 4.8 + idx * 0.3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-white/15 blur-2xl"
              />

              <div className="relative z-10">
                <motion.div
                  whileHover={{ rotate: [0, -6, 6, 0], scale: 1.08 }}
                  transition={{ duration: 0.45 }}
                  className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-black/10 dark:border-white/20 bg-white/70 dark:bg-black/35"
                >
                  <Icon className="h-5 w-5 text-zinc-900 dark:text-zinc-100" />
                </motion.div>

                <h3 className="text-base md:text-lg font-semibold text-zinc-900 dark:text-zinc-100 leading-snug">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm text-zinc-700 dark:text-zinc-300 leading-6">
                  {service.description}
                </p>

                <div className="mt-4 inline-flex items-center gap-1 rounded-full border border-black/10 dark:border-white/20 bg-white/65 dark:bg-black/30 px-3 py-1 text-[11px] text-zinc-600 dark:text-zinc-300">
                  <Sparkles className="h-3.5 w-3.5" />
                  {t.services.badge}
                </div>
              </div>
            </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
