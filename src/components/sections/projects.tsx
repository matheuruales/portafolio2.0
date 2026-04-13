"use client";
import Image from "next/image";
import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
  useModal,
} from "../ui/animated-modal";
import { FloatingDock } from "../ui/floating-dock";
import Link from "next/link";

import projects, { Project } from "@/data/projects";
import { useLang } from "@/contexts/language";

const ProjectsSection = () => {
  const { t } = useLang();
  return (
    <section id="projects" className="relative max-w-7xl mx-auto px-4 md:px-8 pb-16 md:pb-24">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-white/45 via-slate-50/65 to-white/45 dark:from-transparent dark:via-transparent dark:to-transparent" />
        <div className="absolute -top-10 right-0 h-56 w-56 rounded-full bg-cyan-300/20 blur-3xl dark:hidden" />
      </div>
      <Link href={"#projects"}>
        <div className="pt-16 mb-12 md:mb-24">
          <h2 className="section-title">{t.projects.title}</h2>
          <div className="section-title-line" />
        </div>
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6">
        {projects.map((project) => (
          <Modall key={project.src} project={project} />
        ))}
      </div>
    </section>
  );
};
const Modall = ({ project }: { project: Project }) => {
  const { t } = useLang();
  return (
    <div className="flex items-center justify-center w-full">
      <Modal>
        <ModalTrigger className="bg-transparent flex justify-center group/modal-btn w-full">
          <div
            className="relative w-full max-w-[420px] rounded-xl overflow-hidden border border-cyan-300/25 dark:border-white/10 shadow-[0_16px_38px_rgba(15,23,42,0.18)] dark:shadow-[0_16px_38px_rgba(0,0,0,0.42)]"
            style={{ aspectRatio: "3/2" }}
          >
            <Image
              className="absolute w-full h-full top-0 left-0 hover:scale-[1.05] transition-all duration-300"
              src={project.src}
              alt={project.title}
              width={300}
              height={300}
              loading="lazy"
              sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 420px"
            />
            <div className="absolute w-full h-1/2 bottom-0 left-0 bg-gradient-to-t from-slate-950 via-slate-950/85 to-transparent pointer-events-none">
              <div className="flex flex-col h-full items-start justify-end p-6">
                <div className="text-lg text-left text-white drop-shadow-sm">{project.title}</div>
                <div className="text-xs bg-cyan-100 text-cyan-900 rounded-lg w-fit px-2 border border-cyan-200/70">
                  {project.category}
                </div>
              </div>
            </div>
          </div>
        </ModalTrigger>
        <ModalBody className="w-[94vw] max-w-4xl">
          <ModalContent className="p-0 md:p-0">
            <ProjectContents project={project} />
          </ModalContent>
          <ModalFooter className="gap-3 flex-wrap">
            <CloseModalButton />
            {project.live ? (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-cyan-600 hover:bg-cyan-700 text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-cyan-700 dark:border-white w-28 transition-colors"
              >
                {t.projects.live}
              </a>
            ) : (
              <span className="inline-flex items-center justify-center bg-zinc-700 text-zinc-300 text-sm px-2 py-1 rounded-md border border-zinc-600 w-28">
                {t.projects.private_demo}
              </span>
            )}
          </ModalFooter>
        </ModalBody>
      </Modal>
    </div>
  );
};
export default ProjectsSection;

const CloseModalButton = () => {
  const { setOpen } = useModal();
  const { t } = useLang();

  return (
    <button
      type="button"
      onClick={() => setOpen(false)}
      className="px-2 py-1 bg-slate-100 text-slate-900 dark:bg-black dark:border-black dark:text-white border border-slate-300 dark:border-zinc-700 rounded-md text-sm w-28"
    >
      {t.projects.close}
    </button>
  );
};

const ProjectContents = ({ project }: { project: Project }) => {
  return (
    <div className="flex flex-col">
      {/* Hero cover */}
      <div className="relative w-full aspect-[21/9] shrink-0 overflow-hidden">
        <Image
          src={project.src}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
        <div className="absolute bottom-0 left-0 p-4 md:p-6">
          <span className="text-xs bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 rounded-full px-2.5 py-0.5 mb-2 inline-block">
            {project.category}
          </span>
          <h4 className="text-xl md:text-3xl font-bold text-white mt-1">
            {project.title}
          </h4>
        </div>
      </div>

      {/* Skills + Content */}
      <div className="p-4 md:p-8 flex flex-col gap-6">
        {/* Skills row */}
        <div className="flex flex-col sm:flex-row gap-4">
          {project.skills.frontend?.length > 0 && (
            <div className="flex-1 min-w-0">
              <p className="text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mb-2">
                Frontend
              </p>
              <FloatingDock items={project.skills.frontend} />
            </div>
          )}
          {project.skills.backend?.length > 0 && (
            <div className="flex-1 min-w-0">
              <p className="text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mb-2">
                Backend
              </p>
              <FloatingDock items={project.skills.backend} />
            </div>
          )}
        </div>

        {/* Project content */}
        <div>{project.content}</div>
      </div>
    </div>
  );
};
