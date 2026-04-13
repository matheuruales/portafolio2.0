"use client";
import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import SocialMediaButtons from "../social/social-media-icons";
import { config } from "@/data/config";
import { useLang } from "@/contexts/language";

function Footer() {
  const year = new Date().getFullYear();
  const { t } = useLang();

  const footerLinks = [
    { title: t.footer.cv_link, href: "/hoja-de-vida" },
    { title: t.footer.projects_link, href: "/#projects" },
  ];

  return (
    <footer className="flex w-full shrink-0 flex-col items-center gap-2 border-t border-border px-4 py-6 sm:flex-row md:px-6 sm:justify-between">
      <p className="text-xs text-gray-500 dark:text-gray-400">
        © {year} {config.author}. {t.footer.rights}
      </p>
      <SocialMediaButtons />
      <nav className="flex gap-4 sm:gap-6 z-10">
        {footerLinks.map((link, index) => (
          <Link
            className="text-xs underline-offset-4 hover:underline"
            href={link.href}
            key={`l_${index}`}
          >
            <Button variant={"link"}>{link.title}</Button>
          </Link>
        ))}
      </nav>
    </footer>
  );
}

export default Footer;
