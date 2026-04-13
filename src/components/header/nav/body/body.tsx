import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./style.module.scss";
import { blur, translate } from "../../anim";
import { Link as LinkType } from "@/types";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface SelectedLink {
  isActive: boolean;
  index: number;
}

interface BodyProps {
  links: LinkType[];
  selectedLink: SelectedLink;
  setSelectedLink: (selectedLink: SelectedLink) => void;
  setIsActive: (isActive: boolean) => void;
}

export default function Body({
  links,
  selectedLink,
  setSelectedLink,
  setIsActive,
}: BodyProps) {
  const [currentHref, setCurrentHref] = useState("/");
  useEffect(() => {
    if (typeof window === "undefined") return;
    const updateHref = () => {
      const { pathname, hash } = window.location;
      setCurrentHref(pathname + hash);
    };
    updateHref();
    window.addEventListener("hashchange", updateHref);
    window.addEventListener("popstate", updateHref);
    return () => {
      window.removeEventListener("hashchange", updateHref);
      window.removeEventListener("popstate", updateHref);
    };
  }, []);

  const getChars = (word: string) => {
    let chars: JSX.Element[] = [];
    word.split("").forEach((char, i) => {
      chars.push(
        <motion.span
          className="pointer-events-none"
          custom={[i * 0.02, (word.length - i) * 0.01]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
          key={char + i}
        >
          {char}
        </motion.span>
      );
    });
    return chars;
  };

  return (
    <div className={cn(styles.body, "flex flex-col items-stretch")}>
      {links.map((link, index) => {
        const { title, href, target } = link;
        const isCurrent = currentHref === href;

        return (
          <Link
            key={`l_${index}`}
            href={href}
            target={target}
            className={cn("cursor-can-hover", styles.linkWrap)}
          >
            <motion.p
              className={cn(
                styles.linkItem,
                isCurrent ? styles.active : styles.inactive
              )}
              onClick={() => setIsActive(false)}
              onMouseOver={() => setSelectedLink({ isActive: true, index })}
              onMouseLeave={() => setSelectedLink({ isActive: false, index })}
              variants={blur}
              animate={
                selectedLink.isActive && selectedLink.index !== index
                  ? "open"
                  : "closed"
              }
            >
              <span className={styles.linkIndex}>
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className={styles.linkTitle}>{getChars(title)}</span>
            </motion.p>
          </Link>
        );
      })}
    </div>
  );
}
