"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ContactForm from "../ContactForm";
import Link from "next/link";
import { config } from "@/data/config";
import { useLang } from "@/contexts/language";
const ContactSection = () => {
  const { t } = useLang();
  return (
    <section id="contact" className="min-h-screen max-w-7xl mx-auto px-4 md:px-8 pb-16">
      <Link href={"#contact"}>
        <div className="pt-16">
          <h2 className="section-title">
            {t.contact.title_1} <br />
            {t.contact.title_2}
          </h2>
          <div className="section-title-line" />
        </div>
      </Link>
      <div className="grid grid-cols-1 z-[9999] mt-10 md:mt-14">
        <Card className="w-full max-w-4xl mx-auto bg-white/80 dark:bg-black/75 backdrop-blur-sm rounded-xl">
          <CardHeader>
            <CardTitle className="text-2xl md:text-4xl">{t.contact.card_title}</CardTitle>
            <CardDescription>
              {t.contact.description_1}{" "}
              <a
                target="_blank"
                href={`mailto:${config.email}`}
                className="text-zinc-700 dark:text-zinc-300 cursor-can-hover rounded-lg underline underline-offset-2"
              >
                {config.email.replace(/@/g, "(arroba)")}
              </a>{" "}
              {t.contact.description_2}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ContactForm />
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
export default ContactSection;
