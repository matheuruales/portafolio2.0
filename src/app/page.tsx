"use client";

import React from "react";
import dynamic from "next/dynamic";
import SmoothScroll from "@/components/smooth-scroll";
import { cn } from "@/lib/utils";
import AnimatedBackground from "@/components/animated-background";
import HeroSection from "@/components/sections/hero";
import AboutSection from "@/components/sections/about";
import ExperienceSection from "@/components/sections/experience";
import SkillsSection from "@/components/sections/skills";
import { useLang } from "@/contexts/language";

// Secciones bajo el fold — se cargan de forma diferida
const ProjectsSection = dynamic(() => import("@/components/sections/projects"), { ssr: false });
const ServicesSection = dynamic(() => import("@/components/sections/services"), { ssr: false });
const TestimonialsSection = dynamic(() => import("@/components/sections/testimonials"), { ssr: false });
const ContactSection = dynamic(() => import("@/components/sections/contact"), { ssr: false });

function MainPage() {
  const { lang } = useLang();

  return (
    <>
      <SmoothScroll>
        <main className={cn("bg-transparent overflow-x-hidden")}>
          <div className="top-0 z-0 fixed w-full h-screen">
            <AnimatedBackground />
          </div>
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
