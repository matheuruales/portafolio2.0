"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import styles from "./style.module.scss";
import { opacity, background } from "./anim";
import Nav from "./nav";
import { cn } from "@/lib/utils";
import FunnyThemeToggle from "../theme/funny-theme-toggle";
import { Button } from "../ui/button";
import { config } from "@/data/config";
import OnlineUsers from "../realtime/online-users";
import { links } from "./config";
import { useLang } from "@/contexts/language";

interface HeaderProps {
  loader?: boolean;
}

const NAV_KEYS = ["home", "about", "experience", "skills", "projects", "services", "testimonials", "contact"] as const;

const Header = ({ loader }: HeaderProps) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const { lang, t, toggle } = useLang();

  const navLinks = links.map((link, i) => ({
    ...link,
    title: t.nav[NAV_KEYS[i]],
  }));

  return (
    <motion.header
      className={cn(
        styles.header,
        "transition-colors delay-100 duration-500 ease-in"
      )}
      style={{
        background: isActive ? "hsl(var(--background) / .8)" : "transparent",
        // backgroundImage:
        //   "linear-gradient(0deg, rgba(0, 0, 0, 0), rgb(0, 0, 0))",
      }}
      initial={{
        y: -80,
      }}
      animate={{
        y: 0,
      }}
      transition={{
        delay: loader ? 3.5 : 0, // 3.5 for loading, .5 can be added for delay
        duration: 0.8,
      }}
    >
      {/* <div
        className="absolute inset-0 "
        style={{
          mask: "linear-gradient(rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 12.5%)",
        }}
      >
      </div> */}
      <div className={cn(styles.bar, "flex items-center justify-between")}>
        <Link href="/" className="flex items-center justify-center">
          <Button
            variant={"link"}
            className={cn("text-md normal-case no-underline", styles.brandBtn)}
          >
            {config.author}
          </Button>
        </Link>

        {/* Desktop nav links */}
        <nav className="hidden md:flex items-center gap-1 ml-auto mr-3">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <Button
                variant="ghost"
                size="sm"
                className="text-xs font-medium px-3 h-8 rounded-full hover:bg-black/5 dark:hover:bg-white/10"
              >
                {link.title}
              </Button>
            </Link>
          ))}
        </nav>

        <OnlineUsers />
        <button
          onClick={toggle}
          className="text-xs font-semibold px-2.5 py-1 rounded-full border border-black/15 dark:border-white/20 hover:bg-black/5 dark:hover:bg-white/10 transition-colors mr-2"
        >
          {lang === "es" ? "EN" : "ES"}
        </button>
        <FunnyThemeToggle className="w-6 h-6 mr-4" />

        {/* Mobile hamburger — hidden on desktop */}
        <Button
          variant={"ghost"}
          onClick={() => setIsActive(!isActive)}
          className={cn(
            styles.el,
            styles.menuButton,
            "md:!hidden m-0 bg-transparent flex items-center justify-center"
          )}
        >
          <div className={cn("relative flex items-center", styles.label)}>
            <motion.p
              className={styles.labelText}
              variants={opacity}
              animate={!isActive ? "open" : "closed"}
            >
              Menu
            </motion.p>
            <motion.p
              className={styles.labelText}
              variants={opacity}
              animate={isActive ? "open" : "closed"}
            >
              {t.nav.close}
            </motion.p>
          </div>
          <div
            className={`${styles.burger} ${
              isActive ? styles.burgerActive : ""
            }`}
          ></div>
        </Button>
      </div>
      <motion.div
        variants={background}
        initial="initial"
        animate={isActive ? "open" : "closed"}
        className={styles.background}
      ></motion.div>
      <div className="md:hidden">
        <AnimatePresence mode="wait">
          {isActive && <Nav setIsActive={setIsActive} />}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
