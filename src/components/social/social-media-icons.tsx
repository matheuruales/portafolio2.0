"use client";

import { useInView } from "framer-motion";
import React, { useRef } from "react";
import { Button } from "../ui/button";
import { SiGithub, SiInstagram, SiLinkedin } from "react-icons/si";
import type { IconType } from "react-icons";
import { config } from "@/data/config";
import Link from "next/link";

type SocialButton = {
  name: string;
  href: string;
  Icon: IconType;
};

const BUTTONS: SocialButton[] = [
  {
    name: "Github",
    href: config.social.github,
    Icon: SiGithub,
  },
  {
    name: "LinkedIn",
    href: config.social.linkedin,
    Icon: SiLinkedin,
  },
  {
    name: "Instagram",
    href: config.social.instagram,
    Icon: SiInstagram,
  },
];

const SocialMediaButtons = () => {
  const ref = useRef<HTMLDivElement>(null);
  const show = useInView(ref, { once: true });
  return (
    <div ref={ref} className="z-10">
      {show &&
        BUTTONS.map((button) => (
          <Link href={button.href} key={button.name} target="_blank">
            <Button
              variant={"ghost"}
              className="h-11 w-11 rounded-full border border-black/10 bg-white/80 text-black hover:bg-white hover:text-black dark:border-white/20 dark:bg-black/25 dark:text-white dark:hover:bg-black/40 dark:hover:text-white"
            >
              <button.Icon size={26} />
            </Button>
          </Link>
        ))}
    </div>
  );
};

export default SocialMediaButtons;
