"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import SmoothScroll from "@/components/smooth-scroll";
import { cn } from "@/lib/utils";
import HeroSection from "@/components/sections/hero";
import AboutSection from "@/components/sections/about";
import ExperienceSection from "@/components/sections/experience";
import SkillsSection from "@/components/sections/skills";
import { useLang } from "@/contexts/language";
import { useMediaQuery } from "@/hooks/use-media-query";

// Secciones bajo el fold — se cargan de forma diferida
const ProjectsSection = dynamic(() => import("@/components/sections/projects"), { ssr: false });
const ServicesSection = dynamic(() => import("@/components/sections/services"), { ssr: false });
const TestimonialsSection = dynamic(() => import("@/components/sections/testimonials"), { ssr: false });
const ContactSection = dynamic(() => import("@/components/sections/contact"), { ssr: false });
const AnimatedBackground = dynamic(() => import("@/components/animated-background"), { ssr: false });

function MainPage() {
  const { lang } = useLang();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [showBg, setShowBg] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const show = () => {
      if (!cancelled) setShowBg(true);
    };
    if (typeof window !== "undefined" && "requestIdleCallback" in window) {
      const idleId = (window as Window & { requestIdleCallback?: Function }).requestIdleCallback?.(show, { timeout: 1500 });
      return () => {
        cancelled = true;
        if (idleId && "cancelIdleCallback" in window) {
          (window as Window & { cancelIdleCallback?: Function }).cancelIdleCallback?.(idleId);
        }
      };
    }
    const timer = setTimeout(show, 800);
    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <SmoothScroll>
        <main className={cn("bg-transparent overflow-x-hidden")}>
          {showBg && (
            <div className="top-0 z-0 fixed w-full h-screen">
              <AnimatedBackground />
            </div>
          )}
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <SkillsSection />
          <ProjectsSection />
          <ServicesSection key={`services-${lang}`} />
          <TestimonialsSection />
          <ContactSection />
        </main>
      </SmoothScroll>
    </>
  );
}

export default MainPage;
