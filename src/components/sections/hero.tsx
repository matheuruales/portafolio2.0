"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { File } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import { usePreloader } from "../preloader";
import { BlurIn, BoxReveal } from "../reveal-animations";
import ScrollDownIcon from "../scroll-down-icon";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { config } from "@/data/config";
import { useLang } from "@/contexts/language";

const HeroSection = () => {
  const { isLoading } = usePreloader();
  const { t } = useLang();
  const authorParts = config.author.split(" ");
  const heroNameTop = authorParts.slice(0, 2).join(" ");
  const heroNameBottom = authorParts.slice(2).join(" ");

  return (
    <section id="hero" className={cn("relative w-full min-h-[100svh]")}>
      <div className="grid md:grid-cols-2 min-h-[100svh]">
        <div
          className={cn(
            "min-h-[calc(100svh-3rem)] md:min-h-[calc(100svh-4rem)] z-[2]",
            "col-span-1",
            "flex flex-col justify-start md:justify-center items-center md:items-start",
            "px-5 sm:px-8 md:px-24 lg:px-32 xl:px-40",
            "pt-28 sm:pt-24 md:pt-0 sm:pb-16 md:pb-0"
          )}
        >
          {!isLoading && (
            <>
              <div className="w-full max-w-2xl">
                <BlurIn delay={0.7}>
                  <p
                    className={cn(
                      "md:self-start mt-2 text-xs sm:text-sm uppercase tracking-[0.22em]",
                      "cursor-default text-cyan-800/85 dark:text-cyan-300/80"
                    )}
                  >
                    {t.hero.greeting}
                  </p>
                </BlurIn>
                <BlurIn delay={1}>
                  <Tooltip delayDuration={300}>
                    <TooltipTrigger asChild>
                      <h1
                        className={cn(
                          "cursor-default text-left leading-[0.9] tracking-tight"
                        )}
                      >
                        <span className="block text-[clamp(1.95rem,4.8vw,3.75rem)] font-semibold bg-gradient-to-r from-zinc-900 via-slate-700 to-cyan-700 bg-clip-text text-transparent dark:from-zinc-100 dark:via-zinc-200 dark:to-cyan-200 drop-shadow-[0_8px_20px_rgba(15,23,42,0.18)]">
                          {heroNameTop}
                        </span>
                        <span className="block -mt-1 text-[clamp(1.95rem,4.8vw,3.75rem)] font-semibold bg-gradient-to-r from-zinc-900 via-slate-700 to-cyan-700 bg-clip-text text-transparent dark:from-zinc-100 dark:via-zinc-200 dark:to-cyan-200 drop-shadow-[0_10px_22px_rgba(14,116,144,0.22)] dark:drop-shadow-[0_8px_20px_rgba(15,23,42,0.18)]">
                          {heroNameBottom}
                        </span>
                        {/* PLEASE hello??

                        <br className="md:block hiidden" />
                        UNMUTE ME 😢😢 */}
                      </h1>
                    </TooltipTrigger>
                    <TooltipContent
                      side="top"
                      className="dark:bg-white dark:text-black"
                    >
                      {t.hero.tooltip_name}
                    </TooltipContent>
                  </Tooltip>
                </BlurIn>
                {/* <div className="md:block hidden bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 w-screen h-px animate-fade-right animate-glow" /> */}
                <BlurIn delay={1.2}>
                  <p
                    className={cn(
                      "md:self-start md:mt-3 font-normal text-sm sm:text-base md:text-lg text-slate-700 dark:text-zinc-400",
                      "cursor-default"
                  )}
                  >
                    {t.hero.subtitle}
                  </p>
                </BlurIn>
              </div>
              <div className="mt-8 md:ml-2 flex w-full max-w-sm flex-col gap-3">
                <Link
                  href={"/hoja-de-vida"}
                  className="block w-full"
                >
                  <BoxReveal delay={2} width="100%" >
                    <Button className="flex items-center gap-2 w-full">
                      <File size={24} />
                      <p>{t.hero.cta_cv}</p>
                    </Button>
                  </BoxReveal>
                </Link>
                <div className="md:self-start flex flex-wrap gap-3">
                  <Tooltip delayDuration={300}>
                    <TooltipTrigger asChild>
                      <Link href={"#contact"}>
                        <Button
                          variant={"outline"}
                          className="block w-full overflow-hidden"
                        >
                          {t.hero.cta_hire}
                        </Button>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent side="bottom">
                      <p>{t.hero.tooltip_hire}</p>
                    </TooltipContent>
                  </Tooltip>
                  <Link
                    href={config.social.github}
                    target="_blank"
                  >
                    <Button variant={"outline"}>
                      <SiGithub size={24} className="text-black dark:text-white" />
                    </Button>
                  </Link>
                  <Link
                    href={config.social.linkedin}
                    target="_blank"
                  >
                    <Button variant={"outline"}>
                      <SiLinkedin size={24} className="text-black dark:text-white" />
                    </Button>
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
        <div className="hidden md:flex col-span-1 min-h-[100svh] items-center justify-center z-[2]">
          {!isLoading && (
            <BlurIn delay={1.5}>
              <motion.div
                animate={{ y: [0, -14, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                {/* Glow pulsante */}
                <motion.div
                  animate={{ opacity: [0.15, 0.35, 0.15], scale: [1, 1.08, 1] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                  className="pointer-events-none absolute inset-0 rounded-3xl bg-cyan-400/25 blur-3xl"
                />
                <div className="relative w-72 lg:w-80 xl:w-[22rem] rounded-3xl overflow-hidden border border-cyan-300/30 dark:border-white/10 shadow-[0_24px_60px_rgba(14,116,144,0.22)] dark:shadow-[0_24px_60px_rgba(0,0,0,0.5)]">
                  <Image
                    src="/assets/profile/matheu-hero.jpg"
                    alt="Johnatan Matheu Ruales Galvis"
                    width={380}
                    height={500}
                    className="object-cover w-full"
                    priority
                  />
                </div>
              </motion.div>
            </BlurIn>
          )}
        </div>
      </div>
      <div className="absolute bottom-8 left-[50%] translate-x-[-50%] hidden sm:block">
        <ScrollDownIcon />
      </div>
    </section>
  );
};

export default HeroSection;
