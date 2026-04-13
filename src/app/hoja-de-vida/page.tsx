"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Briefcase,
  FolderKanban,
  GraduationCap,
  Heart,
  Languages,
  Mail,
  Phone,
  Linkedin,
  Wrench,
  UserRound,
  Sparkles,
} from "lucide-react";
import { useLang } from "@/contexts/language";

const SectionTitle = ({
  icon,
  title,
}: {
  icon: JSX.Element;
  title: string;
}) => (
  <div className="flex flex-col gap-2">
    <div className="flex items-center gap-3">
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 dark:border-white/20 bg-white/70 dark:bg-black/30">
        {icon}
      </span>
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
        {title}
      </h2>
    </div>
    <div className="section-title-line ml-[52px]" style={{ width: "80px" }} />
  </div>
);

export default function HojaDeVidaPage() {
  const { t } = useLang();
  const cv = t.cv;

  return (
    <main className="relative min-h-screen px-4 md:px-10 pt-28 pb-16">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-32 -left-32 h-[600px] w-[600px] rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute top-1/3 -right-32 h-[500px] w-[500px] rounded-full bg-amber-400/8 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl space-y-8">
        {/* Header */}
        <section className="relative overflow-hidden rounded-3xl border border-black/10 dark:border-white/15 bg-white/85 dark:bg-zinc-950/70 backdrop-blur-xl p-6 md:p-10 shadow-2xl shadow-black/10 dark:shadow-black/40">
          <div className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-amber-400/15 blur-3xl" />

          <div className="relative">
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              <div>
                <p className="inline-flex items-center rounded-full border border-black/10 dark:border-white/20 bg-white/75 dark:bg-black/30 px-3 py-1 text-xs md:text-sm uppercase tracking-[0.2em] text-zinc-700 dark:text-zinc-300">
                  {cv.badge}
                </p>
                <h1 className="mt-4 text-3xl md:text-5xl font-semibold leading-tight text-zinc-900 dark:text-zinc-100">
                  JOHNATAN MATHEU RUALES GALVIS
                </h1>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-xs md:text-sm text-emerald-900 dark:text-emerald-100">
                  <Sparkles className="h-4 w-4" /> {cv.seeking}
                </span>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="rounded-xl border border-black/10 dark:border-white/15 bg-white/70 dark:bg-black/25 p-4">
                <p className="text-xs uppercase tracking-wide text-zinc-600 dark:text-zinc-400">{cv.contact.email_label}</p>
                <p className="mt-1 text-sm md:text-base font-medium break-all text-zinc-900 dark:text-zinc-100">
                  matheuruales2b2t@gmail.com
                </p>
              </div>
              <div className="rounded-xl border border-black/10 dark:border-white/15 bg-white/70 dark:bg-black/25 p-4">
                <p className="text-xs uppercase tracking-wide text-zinc-600 dark:text-zinc-400">{cv.contact.phone_label}</p>
                <p className="mt-1 text-sm md:text-base font-medium text-zinc-900 dark:text-zinc-100">
                  +57 314 624 9791
                </p>
              </div>
              <div className="rounded-xl border border-black/10 dark:border-white/15 bg-white/70 dark:bg-black/25 p-4">
                <p className="text-xs uppercase tracking-wide text-zinc-600 dark:text-zinc-400">{cv.contact.linkedin_label}</p>
                <p className="mt-1 text-sm md:text-base font-medium break-all text-zinc-900 dark:text-zinc-100">
                  linkedin.com/in/matheu-ruales-32221a331
                </p>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              <Button asChild size="sm" className="rounded-full px-5">
                <a href="mailto:matheuruales2b2t@gmail.com">
                  <Mail className="h-4 w-4 mr-2" />
                  {cv.contact.send_email}
                </a>
              </Button>
              <Button asChild size="sm" variant="outline" className="rounded-full px-5">
                <a href="tel:+573146249791">
                  <Phone className="h-4 w-4 mr-2" />
                  {cv.contact.call}
                </a>
              </Button>
              <Button asChild size="sm" variant="secondary" className="rounded-full px-5">
                <a
                  href="https://www.linkedin.com/in/matheu-ruales-32221a331/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-4 w-4 mr-2" />
                  {cv.contact.view_linkedin}
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Professional profile */}
        <section className="rounded-3xl border border-black/10 dark:border-white/15 bg-white/85 dark:bg-zinc-950/70 backdrop-blur-xl p-6 md:p-10 shadow-xl shadow-black/10 dark:shadow-black/35">
          <SectionTitle icon={<UserRound className="h-5 w-5" />} title={cv.sections.profile} />
          <p className="mt-5 text-sm md:text-base leading-8 text-zinc-800 dark:text-zinc-200">
            {cv.profile_text}
          </p>
        </section>

        {/* Work experience */}
        <section className="rounded-3xl border border-black/10 dark:border-white/15 bg-white/85 dark:bg-zinc-950/70 backdrop-blur-xl p-6 md:p-10 shadow-xl shadow-black/10 dark:shadow-black/35">
          <SectionTitle icon={<Briefcase className="h-5 w-5" />} title={cv.sections.work_exp} />
          {cv.work.map((job) => (
            <article key={job.title} className="mt-6 rounded-2xl border border-black/10 dark:border-white/15 bg-white/65 dark:bg-black/25 p-5 md:p-6">
              <p className="text-lg md:text-xl font-semibold">{job.title}</p>
              <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">{job.org}</p>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">{job.period}</p>
              <p className="mt-4 text-sm md:text-base leading-8 text-zinc-800 dark:text-zinc-200">
                {job.description}
              </p>
            </article>
          ))}
        </section>

        {/* Project experience */}
        <section className="rounded-3xl border border-black/10 dark:border-white/15 bg-white/85 dark:bg-zinc-950/70 backdrop-blur-xl p-6 md:p-10 shadow-xl shadow-black/10 dark:shadow-black/35">
          <SectionTitle icon={<FolderKanban className="h-5 w-5" />} title={cv.sections.project_exp} />
          <div className="mt-6 grid grid-cols-1 gap-4">
            {cv.projects.map((project) => (
              <article key={project.title} className="rounded-2xl border border-black/10 dark:border-white/15 bg-white/65 dark:bg-black/25 p-5 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold">{project.title}</h3>
                {project.subtitle && (
                  <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">{project.subtitle}</p>
                )}
                {project.in_dev && (
                  <p className="mt-1 text-sm text-amber-600 dark:text-amber-300 font-medium">{cv.in_dev}</p>
                )}
                <p className="mt-3 text-sm md:text-base leading-8 text-zinc-800 dark:text-zinc-200">
                  {project.description}
                </p>
                {"stack" in project && project.stack && (
                  <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Stack: {project.stack}</p>
                )}
                {project.url && (
                  <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                    {project.url_label}: {project.url}
                  </p>
                )}
                {project.repo && (
                  <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{project.repo}</p>
                )}
              </article>
            ))}
          </div>
        </section>

        {/* Technical skills */}
        <section className="rounded-3xl border border-black/10 dark:border-white/15 bg-white/85 dark:bg-zinc-950/70 backdrop-blur-xl p-6 md:p-10 shadow-xl shadow-black/10 dark:shadow-black/35">
          <SectionTitle icon={<Wrench className="h-5 w-5" />} title={cv.sections.tech_skills} />
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            {cv.tech_skill_groups.map(({ group, items }) => (
              <article
                key={group}
                className="rounded-2xl border border-black/10 dark:border-white/15 bg-white/65 dark:bg-black/25 p-5"
              >
                <h3 className="text-base md:text-lg font-semibold">{group}</h3>
                <ul className="mt-3 space-y-2 list-disc pl-5 text-sm md:text-base text-zinc-800 dark:text-zinc-200">
                  {items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* Soft skills */}
        <section className="rounded-3xl border border-black/10 dark:border-white/15 bg-white/85 dark:bg-zinc-950/70 backdrop-blur-xl p-6 md:p-10 shadow-xl shadow-black/10 dark:shadow-black/35">
          <SectionTitle icon={<Sparkles className="h-5 w-5" />} title={cv.sections.soft_skills} />
          <ul className="mt-6 space-y-3 list-disc pl-5 text-sm md:text-base text-zinc-800 dark:text-zinc-200">
            {cv.soft_skills.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        {/* Education */}
        <section className="rounded-3xl border border-black/10 dark:border-white/15 bg-white/85 dark:bg-zinc-950/70 backdrop-blur-xl p-6 md:p-10 shadow-xl shadow-black/10 dark:shadow-black/35">
          <SectionTitle icon={<GraduationCap className="h-5 w-5" />} title={cv.sections.education} />
          <div className="mt-6 grid grid-cols-1 gap-4">
            {cv.education.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-black/10 dark:border-white/15 bg-white/65 dark:bg-black/25 p-5"
              >
                <h3 className="text-base md:text-lg font-semibold">{item.title}</h3>
                <p className="text-sm md:text-base text-zinc-700 dark:text-zinc-300 mt-1">{item.institution}</p>
                {"note" in item && item.note && (
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">{item.note}</p>
                )}
              </article>
            ))}
          </div>
        </section>

        {/* Languages & Interests */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <article className="rounded-3xl border border-black/10 dark:border-white/15 bg-white/85 dark:bg-zinc-950/70 backdrop-blur-xl p-6 md:p-10 shadow-xl shadow-black/10 dark:shadow-black/35">
            <SectionTitle icon={<Languages className="h-5 w-5" />} title={cv.sections.languages} />
            <ul className="mt-6 space-y-3 list-disc pl-5 text-sm md:text-base text-zinc-800 dark:text-zinc-200">
              {cv.languages.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="rounded-3xl border border-black/10 dark:border-white/15 bg-white/85 dark:bg-zinc-950/70 backdrop-blur-xl p-6 md:p-10 shadow-xl shadow-black/10 dark:shadow-black/35">
            <SectionTitle icon={<Heart className="h-5 w-5" />} title={cv.sections.interests} />
            <ul className="mt-6 space-y-3 list-disc pl-5 text-sm md:text-base text-zinc-800 dark:text-zinc-200">
              {cv.interests.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </section>

        {/* Work references */}
        <section className="rounded-3xl border border-black/10 dark:border-white/15 bg-white/85 dark:bg-zinc-950/70 backdrop-blur-xl p-6 md:p-10 shadow-xl shadow-black/10 dark:shadow-black/35">
          <SectionTitle icon={<Briefcase className="h-5 w-5" />} title={cv.sections.work_refs} />
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            {cv.work_refs.map((item) => (
              <article
                key={item.name}
                className="rounded-2xl border border-black/10 dark:border-white/15 bg-white/65 dark:bg-black/25 p-5"
              >
                <h3 className="text-base md:text-lg font-semibold">{item.name}</h3>
                <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">{cv.ref_labels.role}: {item.role}</p>
                <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">{cv.ref_labels.phone}: {item.phone}</p>
                {"email" in item && item.email && (
                  <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300 break-all">
                    {cv.ref_labels.email}: {item.email}
                  </p>
                )}
              </article>
            ))}
          </div>
        </section>

        {/* Personal references */}
        <section className="rounded-3xl border border-black/10 dark:border-white/15 bg-white/85 dark:bg-zinc-950/70 backdrop-blur-xl p-6 md:p-10 shadow-xl shadow-black/10 dark:shadow-black/35">
          <SectionTitle icon={<UserRound className="h-5 w-5" />} title={cv.sections.personal_refs} />
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            {cv.personal_refs.map((item) => (
              <article
                key={item.name}
                className="rounded-2xl border border-black/10 dark:border-white/15 bg-white/65 dark:bg-black/25 p-5"
              >
                <h3 className="text-base md:text-lg font-semibold">{item.name}</h3>
                <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">{cv.ref_labels.phone}: {item.phone}</p>
              </article>
            ))}
          </div>
        </section>

        <div className="flex justify-center">
          <Link
            href="/#contact"
            className="inline-flex items-center rounded-full border border-black/10 dark:border-white/20 bg-white/75 dark:bg-zinc-900/70 px-6 py-3 text-sm md:text-base"
          >
            {cv.pdf_link}
          </Link>
        </div>
      </div>
    </main>
  );
}
