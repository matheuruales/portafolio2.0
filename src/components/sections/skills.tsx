"use client";

import Link from "next/link";
import React from "react";
import { BoxReveal } from "../reveal-animations";
import { useLang } from "@/contexts/language";

const SkillsSection = () => {
  const { t } = useLang();

  return (
    <section id="skills" className="w-full min-h-[105svh] md:min-h-[150dvh] px-4">
      <div className="top-20 md:top-[70px] sticky mb-40 md:mb-96">
        <Link href={"#skills"}>
          <BoxReveal width="100%">
            <div>
              <h2 className="section-title">{t.skills.title}</h2>
              <div className="section-title-line" />
            </div>
          </BoxReveal>
        </Link>
      </div>
    </section>
  );
};

export default SkillsSection;
