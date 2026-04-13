"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import { es } from "@/locales/es";
import { en } from "@/locales/en";
import type { Translations } from "@/locales/es";

type Lang = "es" | "en";
type LangContextType = { lang: Lang; t: Translations; toggle: () => void };

const LangContext = createContext<LangContextType>({
  lang: "es",
  t: es,
  toggle: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("es");

  useEffect(() => {
    const saved = localStorage.getItem("lang") as Lang | null;
    if (saved === "es" || saved === "en") setLang(saved);
  }, []);

  const toggle = () => {
    const next: Lang = lang === "es" ? "en" : "es";
    setLang(next);
    localStorage.setItem("lang", next);
  };

  return (
    <LangContext.Provider value={{ lang, t: lang === "es" ? es : en, toggle }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);
