import { Button } from "@/components/ui/button";
import { TypographyP } from "@/components/ui/typography";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { FaJava } from "react-icons/fa";
import {
  SiCsharp,
  SiFastapi,
  SiMicrosoftazure,
  SiMeta,
  SiNextdotjs,
  SiOpenai,
  SiPostcss,
  SiPostgresql,
  SiPython,
  SiReact,
  SiSpringboot,
  SiTailwindcss,
  SiTiktok,
  SiTypescript,
  SiUnity,
  SiVite,
  SiWhatsapp,
} from "react-icons/si";

type Lang = "es" | "en";
type LocalizedString = { es: string; en: string };

const UI_TEXT = {
  repoFrontend: {
    es: "Repositorio Frontend",
    en: "Frontend repository",
  },
  repoBackend: {
    es: "Repositorio Backend",
    en: "Backend repository",
  },
  website: {
    es: "Sitio Web",
    en: "Website",
  },
  repoPrivateClient: {
    es: "Repositorio no disponible por seguridad del cliente",
    en: "Repository unavailable for client security",
  },
  reposPrivateClient: {
    es: "Repositorios no publicos por seguridad del cliente",
    en: "Repositories not public for client security",
  },
  reposPrivatePublic: {
    es: "Repositorios no abiertos al publico",
    en: "Repositories not open to the public",
  },
  reposPrivateServers: {
    es: "Repositorios en servidores privados y no abiertos al publico",
    en: "Repositories on private servers and not open to the public",
  },
  inDev: {
    es: "En desarrollo",
    en: "In development",
  },
  projectGallery: {
    es: "Galeria del proyecto",
    en: "Project gallery",
  },
};

const ProjectsLinks = ({
  frontendRepo,
  backendRepo,
  lang,
}: {
  frontendRepo: string;
  backendRepo: string;
  lang: Lang;
}) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link rel="noopener noreferrer" target="_blank" href={frontendRepo}>
        <Button variant="default" size="sm">
          {UI_TEXT.repoFrontend[lang]}
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      <Link rel="noopener noreferrer" target="_blank" href={backendRepo}>
        <Button variant="outline" size="sm">
          {UI_TEXT.repoBackend[lang]}
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
  wide?: boolean;
};

const PROJECT_SKILLS = {
  reactDom: {
    title: "React 18 + React DOM",
    bg: "black",
    fg: "white",
    icon: <SiReact />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vite: {
    title: "Vite",
    bg: "black",
    fg: "white",
    icon: <SiVite />,
  },
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <SiNextdotjs />,
  },
  tailwind: {
    title: "Tailwind CSS",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  postcssAutoprefixer: {
    title: "PostCSS + Autoprefixer",
    bg: "black",
    fg: "white",
    icon: <SiPostcss />,
  },
  javaMaven: {
    title: "Java 21 + Maven",
    bg: "black",
    fg: "white",
    wide: true,
    icon: (
      <span className="flex items-center gap-1">
        <FaJava />
        <span className="text-[10px] font-semibold">MVN</span>
      </span>
    ),
  },
  springBoot: {
    title: "Spring Boot 3.5.6",
    bg: "black",
    fg: "white",
    icon: <SiSpringboot />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  fastapi: {
    title: "FastAPI",
    bg: "black",
    fg: "white",
    icon: <SiFastapi />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  azureBlob: {
    title: "Azure Blob Storage",
    bg: "black",
    fg: "white",
    icon: <SiMicrosoftazure />,
  },
  n8n: {
    title: "n8n",
    bg: "black",
    fg: "white",
    icon: <span className="font-semibold text-xs">n8n</span>,
  },
  langgraph: {
    title: "LangGraph",
    bg: "black",
    fg: "white",
    icon: <span className="font-semibold text-xs">LG</span>,
  },
  openai: {
    title: "OpenAI API",
    bg: "black",
    fg: "white",
    icon: <SiOpenai />,
  },
  whatsappApi: {
    title: "WhatsApp API",
    bg: "black",
    fg: "white",
    icon: <SiWhatsapp />,
  },
  tiktokApi: {
    title: "TikTok API",
    bg: "black",
    fg: "white",
    icon: <SiTiktok />,
  },
  wompi: {
    title: "Wompi",
    bg: "black",
    fg: "white",
    icon: <span className="font-semibold text-xs">W</span>,
  },
  csharp: {
    title: "C#",
    bg: "black",
    fg: "white",
    icon: <SiCsharp />,
  },
  unity: {
    title: "Unity",
    bg: "black",
    fg: "white",
    icon: <SiUnity />,
  },
  metaQuestDevKit: {
    title: "Meta Quest Dev Kit",
    bg: "black",
    fg: "white",
    icon: <SiMeta />,
  },
};

export type Project = {
  id: string;
  category: string;
  title: string;
  problem: LocalizedString;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: ReactNode | any;
  github?: string;
  live?: string;
};

const anyPostFrontendRepo = "https://github.com/matheuruales/Front_AnyPost.git";
const anyPostBackendRepo = "https://github.com/matheuruales/back_AnyPost.git";
const anyPostLiveUrl =
  "https://any-post-frontend-rnnq4zzhh-matheus-projects-d0a163a3.vercel.app/login";
const anyPostGallery: { src: string; title: LocalizedString; description: LocalizedString }[] = [
  {
    src: "/assets/projects-screenshots/anypost/cover.png",
    title: { es: "Inicio de sesion", en: "Login" },
    description: {
      es: "Pantalla de acceso a la plataforma.",
      en: "Platform access screen.",
    },
  },
  {
    src: "/assets/projects-screenshots/anypost/anypost-landing-overview.png",
    title: { es: "Pagina de Inicio", en: "Home page" },
    description: {
      es: "Vista principal de inicio del proyecto.",
      en: "Main landing view of the project.",
    },
  },
  {
    src: "/assets/projects-screenshots/anypost/anypost-dashboard-panel.png",
    title: { es: "Panel principal", en: "Main dashboard" },
    description: {
      es: "Panel para gestionar contenido y estado de publicacion.",
      en: "Dashboard to manage content and publication status.",
    },
  },
  {
    src: "/assets/projects-screenshots/anypost/anypost-content-editor.png",
    title: { es: "Editor de Contenido", en: "Content editor" },
    description: {
      es: "Modulo para redactar y editar contenido.",
      en: "Module for writing and editing content.",
    },
  },
  {
    src: "/assets/projects-screenshots/anypost/anypost-publication-workflow.png",
    title: { es: "Generacion con IA", en: "AI generation" },
    description: {
      es: "Pantalla de generacion asistida por inteligencia artificial.",
      en: "AI-assisted generation screen.",
    },
  },
  {
    src: "/assets/projects-screenshots/anypost/anypost-automation-ai-tools.png",
    title: { es: "Pagina de aterrizaje", en: "Landing page" },
    description: {
      es: "Pantalla tipo landing de presentacion del producto.",
      en: "Product presentation landing view.",
    },
  },
];
const bilbaoVerseLiveUrl = "https://bilbaoverse.net/";
const bilbaoVerseGallery: { src: string; title: LocalizedString; description: LocalizedString }[] = [
  {
    src: "/assets/projects-screenshots/bilbaoverse/bilbaoverse-cover.png",
    title: { es: "BilbaoVerse", en: "BilbaoVerse" },
    description: {
      es: "Vista principal de la plataforma.",
      en: "Main platform view.",
    },
  },
];
const crmAIAgentLiveUrl = "https://30x.vercel.app/login";
const crmAIAgentGallery: { src: string; title: LocalizedString; description: LocalizedString }[] = [
  {
    src: "/assets/projects-screenshots/crm-ai-agent/crm-ai-agent-cover.png",
    title: { es: "CRM con Agente de IA", en: "CRM with AI agent" },
    description: {
      es: "Vista principal de la plataforma comercial.",
      en: "Main view of the commercial platform.",
    },
  },
];
const homaLiveUrl = "https://homa-frontend.vercel.app";
const homaGallery: { src: string; title: LocalizedString; description: LocalizedString }[] = [
  {
    src: "/assets/projects-screenshots/homa/homa-home.png",
    title: { es: "Homa Inicio", en: "Homa Home" },
    description: {
      es: "Vista principal de propiedades en venta y arriendo.",
      en: "Main view of properties for sale and rent.",
    },
  },
  {
    src: "/assets/projects-screenshots/homa/homa-login.png",
    title: { es: "Inicio de sesion", en: "Login" },
    description: {
      es: "Pantalla de acceso a la plataforma.",
      en: "Platform access screen.",
    },
  },
];
const ferreteriaEcommerceGallery: { src: string; title: LocalizedString; description: LocalizedString }[] = [
  {
    src: "/assets/projects-screenshots/ferreteria-ecommerce/ferreteria-storefront.png",
    title: { es: "Catalogo Comercial", en: "Store catalog" },
    description: {
      es: "Vista principal para explorar productos de ferreteria.",
      en: "Main view to explore hardware products.",
    },
  },
];
const ferreteriaEcommerceLiveUrl = "https://frontend-ferreteria-two.vercel.app/login";
const pulmoMedGallery: { src: string; title: LocalizedString; description: LocalizedString }[] = [
  {
    src: "/assets/projects-screenshots/pulmomed/pulmomed-overview-01.jpeg",
    title: { es: "Vista General 01", en: "Overview 01" },
    description: {
      es: "Vista inmersiva general del simulador.",
      en: "General immersive view of the simulator.",
    },
  },
  {
    src: "/assets/projects-screenshots/pulmomed/pulmomed-overview-02.jpeg",
    title: { es: "Vista General 02", en: "Overview 02" },
    description: {
      es: "Interaccion y navegacion del entorno de aprendizaje.",
      en: "Interaction and navigation of the learning environment.",
    },
  },
  {
    src: "/assets/projects-screenshots/pulmomed/pulmomed-overview-03.jpeg",
    title: { es: "Vista General 03", en: "Overview 03" },
    description: {
      es: "Escenarios educativos enfocados en cancer de pulmon.",
      en: "Educational scenarios focused on lung cancer.",
    },
  },
  {
    src: "/assets/projects-screenshots/pulmomed/pulmomed-overview-04.jpeg",
    title: { es: "Vista General 04", en: "Overview 04" },
    description: {
      es: "Modulo de experiencia virtual en contexto medico.",
      en: "Virtual experience module in a medical context.",
    },
  },
  {
    src: "/assets/projects-screenshots/pulmomed/pulmomed-overview-05.jpeg",
    title: { es: "Vista General 05", en: "Overview 05" },
    description: {
      es: "Recorrido de simulacion con enfoque en salud.",
      en: "Simulation walkthrough with a health focus.",
    },
  },
];

const getProjects = (lang: Lang): Project[] => [
  {
    id: "anypost",
    category:
      lang === "es"
        ? "Plataforma Fullstack con IA"
        : "Full-stack AI platform",
    title: lang === "es" ? "Any Post" : "Any Post",
    problem: {
      es: "Creadores con herramientas dispersas y procesos manuales para publicar en varias redes.",
      en: "Creators juggling fragmented tools and manual workflows to publish across multiple networks.",
    },
    src: "/assets/projects-screenshots/anypost/cover.png",
    screenshots: anyPostGallery.map((item) => item.src),
    live: anyPostLiveUrl,
    github: anyPostBackendRepo,
    skills: {
      frontend: [
        PROJECT_SKILLS.reactDom,
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.vite,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.postcssAutoprefixer,
      ],
      backend: [
        PROJECT_SKILLS.javaMaven,
        PROJECT_SKILLS.springBoot,
        PROJECT_SKILLS.azureBlob,
        PROJECT_SKILLS.n8n,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            {lang === "es"
              ? "Any Post es una plataforma web orientada a la creacion y gestion de contenido digital, pensada para centralizar el flujo de trabajo de los creadores en una experiencia moderna, intuitiva y escalable. Su enfoque combina usabilidad, automatizacion e inteligencia artificial para optimizar la produccion y publicacion de contenido."
              : "Any Post is a web platform focused on creating and managing digital content, designed to centralize creators' workflows in a modern, intuitive, and scalable experience. Its approach combines usability, automation, and AI to optimize content production and publishing."}
          </TypographyP>
          <ProjectsLinks
            frontendRepo={anyPostFrontendRepo}
            backendRepo={anyPostBackendRepo}
            lang={lang}
          />
          <div className="mt-6">
            <h5 className="text-lg md:text-xl font-semibold mb-4">
              {UI_TEXT.projectGallery[lang]}
            </h5>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {anyPostGallery.map((item) => (
                <figure
                  key={item.src}
                  className="rounded-xl overflow-hidden border border-white/15 bg-black/30 backdrop-blur-sm"
                >
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={item.src}
                      alt={item.title[lang]}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="p-3">
                    <p className="text-sm md:text-base font-semibold">
                      {item.title[lang]}
                    </p>
                    <p className="text-xs md:text-sm text-white/75">
                      {item.description[lang]}
                    </p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      );
    },
  },
  {
    id: "bilbaoverse",
    category:
      lang === "es"
        ? "Plataforma de Ecosistema Empresarial"
        : "Business ecosystem platform",
    title: lang === "es" ? "BilbaoVerse" : "BilbaoVerse",
    problem: {
      es: "Empresas y comunidad sin un punto unico para conectar, colaborar y crecer.",
      en: "Businesses and community lacked a single hub to connect, collaborate, and grow.",
    },
    src: "/assets/projects-screenshots/bilbaoverse/bilbaoverse-cover.png",
    screenshots: bilbaoVerseGallery.map((item) => item.src),
    live: bilbaoVerseLiveUrl,
    skills: {
      frontend: [PROJECT_SKILLS.tailwind, PROJECT_SKILLS.next, PROJECT_SKILLS.ts],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.fastapi,
        PROJECT_SKILLS.postgres,
        PROJECT_SKILLS.azureBlob,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            {lang === "es"
              ? "BilbaoVerse es una plataforma digital orientada a conectar negocios, comunidad y oportunidades de crecimiento en Latinoamerica, funcionando como un ecosistema para impulsar relaciones estrategicas, colaboracion y expansion empresarial."
              : "BilbaoVerse is a digital platform designed to connect businesses, community, and growth opportunities in Latin America, operating as an ecosystem to foster strategic relationships, collaboration, and business expansion."}
          </TypographyP>
          <div className="flex flex-wrap items-center gap-3 my-4 mb-8">
            <Link href={bilbaoVerseLiveUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="default" size="sm">
                {UI_TEXT.website[lang]}
                <ArrowUpRight className="ml-3 w-5 h-5" />
              </Button>
            </Link>
            <span className="text-xs md:text-sm text-white/70 border border-white/20 rounded-md px-3 py-2">
              {UI_TEXT.repoPrivateClient[lang]}
            </span>
          </div>
          <div className="mt-4 grid grid-cols-1 gap-4">
            {bilbaoVerseGallery.map((item) => (
              <figure
                key={item.src}
                className="rounded-xl overflow-hidden border border-white/15 bg-black/30 backdrop-blur-sm"
              >
                <div className="relative aspect-[16/10]">
                  <Image
                    src={item.src}
                    alt={item.title[lang]}
                    fill
                    className="object-cover"
                  />
                </div>
                <figcaption className="p-3">
                  <p className="text-sm md:text-base font-semibold">
                    {item.title[lang]}
                  </p>
                  <p className="text-xs md:text-sm text-white/75">
                    {item.description[lang]}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      );
    },
  },
  {
    id: "crm-agente-ia",
    category:
      lang === "es"
        ? "Plataforma Comercial con IA"
        : "AI-enabled commercial platform",
    title: lang === "es" ? "CRM con agente de IA" : "CRM with AI agent",
    problem: {
      es: "Equipos comerciales sin automatizacion inteligente para gestionar leads y seguimiento.",
      en: "Sales teams lacked smart automation for lead management and follow-up.",
    },
    src: "/assets/projects-screenshots/crm-ai-agent/crm-ai-agent-cover.png",
    screenshots: crmAIAgentGallery.map((item) => item.src),
    live: crmAIAgentLiveUrl,
    skills: {
      frontend: [PROJECT_SKILLS.next, PROJECT_SKILLS.tailwind, PROJECT_SKILLS.ts],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.fastapi,
        PROJECT_SKILLS.langgraph,
        PROJECT_SKILLS.openai,
        PROJECT_SKILLS.whatsappApi,
        PROJECT_SKILLS.tiktokApi,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            {lang === "es"
              ? "Plataforma comercial que integra un CRM con inteligencia artificial para gestionar leads, automatizar seguimiento y optimizar procesos de venta."
              : "Commercial platform that integrates a CRM with AI to manage leads, automate follow-up, and optimize sales processes."}
          </TypographyP>
          <div className="flex flex-wrap items-center gap-3 my-4 mb-8">
            <Link href={crmAIAgentLiveUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="default" size="sm">
                {UI_TEXT.website[lang]}
                <ArrowUpRight className="ml-3 w-5 h-5" />
              </Button>
            </Link>
            <span className="text-xs md:text-sm text-white/70 border border-white/20 rounded-md px-3 py-2">
              {UI_TEXT.reposPrivateClient[lang]}
            </span>
          </div>
          <div className="mt-4 grid grid-cols-1 gap-4">
            {crmAIAgentGallery.map((item) => (
              <figure
                key={item.src}
                className="rounded-xl overflow-hidden border border-white/15 bg-black/30 backdrop-blur-sm"
              >
                <div className="relative aspect-[16/10]">
                  <Image
                    src={item.src}
                    alt={item.title[lang]}
                    fill
                    className="object-cover"
                  />
                </div>
                <figcaption className="p-3">
                  <p className="text-sm md:text-base font-semibold">
                    {item.title[lang]}
                  </p>
                  <p className="text-xs md:text-sm text-white/75">
                    {item.description[lang]}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      );
    },
  },
  {
    id: "homa",
    category:
      lang === "es"
        ? "Plataforma Inmobiliaria · En desarrollo"
        : "Real estate platform · In development",
    title: lang === "es" ? "Homa" : "Homa",
    problem: {
      es: "Busqueda y gestion de inmuebles sin una experiencia digital clara y centralizada.",
      en: "Property search and management lacked a clear, centralized digital experience.",
    },
    src: "/assets/projects-screenshots/homa/homa-home.png",
    screenshots: homaGallery.map((item) => item.src),
    live: homaLiveUrl,
    skills: {
      frontend: [PROJECT_SKILLS.next, PROJECT_SKILLS.ts],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.fastapi,
        PROJECT_SKILLS.postgres,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            {lang === "es"
              ? "Plataforma web inmobiliaria disenada para la publicacion, busqueda y gestion de propiedades en venta y arriendo."
              : "Real estate web platform designed for publishing, searching, and managing properties for sale and rent."}
          </TypographyP>
          <div className="flex flex-wrap items-center gap-3 my-4 mb-8">
            <Link href={homaLiveUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="default" size="sm">
                {UI_TEXT.website[lang]}
                <ArrowUpRight className="ml-3 w-5 h-5" />
              </Button>
            </Link>
            <span className="text-xs md:text-sm text-amber-300 border border-amber-400/40 rounded-md px-3 py-2">
              {UI_TEXT.inDev[lang]}
            </span>
            <span className="text-xs md:text-sm text-white/70 border border-white/20 rounded-md px-3 py-2">
              {UI_TEXT.reposPrivatePublic[lang]}
            </span>
          </div>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            {homaGallery.map((item) => (
              <figure
                key={item.src}
                className="rounded-xl overflow-hidden border border-white/15 bg-black/30 backdrop-blur-sm"
              >
                <div className="relative aspect-[16/10]">
                  <Image
                    src={item.src}
                    alt={item.title[lang]}
                    fill
                    className="object-cover"
                  />
                </div>
                <figcaption className="p-3">
                  <p className="text-sm md:text-base font-semibold">
                    {item.title[lang]}
                  </p>
                  <p className="text-xs md:text-sm text-white/75">
                    {item.description[lang]}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      );
    },
  },
  {
    id: "ferreteria-ecommerce",
    category:
      lang === "es"
        ? "Comercio electronico · En desarrollo"
        : "E-commerce · In development",
    title: lang === "es" ? "E-commerce de ferreteria" : "Hardware store e-commerce",
    problem: {
      es: "Catalogos de ferreteria sin vitrina digital moderna ni proceso de compra agil.",
      en: "Hardware catalogs lacked a modern digital storefront and streamlined purchase flow.",
    },
    src: "/assets/projects-screenshots/ferreteria-ecommerce/ferreteria-storefront.png",
    screenshots: ferreteriaEcommerceGallery.map((item) => item.src),
    live: ferreteriaEcommerceLiveUrl,
    skills: {
      frontend: [PROJECT_SKILLS.next, PROJECT_SKILLS.tailwind, PROJECT_SKILLS.ts],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.fastapi,
        PROJECT_SKILLS.wompi,
        PROJECT_SKILLS.postgres,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            {lang === "es"
              ? "Tienda online disenada para la visualizacion, organizacion y exploracion de productos de ferreteria dentro de una experiencia moderna y comercial."
              : "Online store designed for browsing and organizing hardware products within a modern commercial experience."}
          </TypographyP>
          <div className="flex flex-wrap items-center gap-3 my-4 mb-8">
            <Link href={ferreteriaEcommerceLiveUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="default" size="sm">
                {UI_TEXT.website[lang]}
                <ArrowUpRight className="ml-3 w-5 h-5" />
              </Button>
            </Link>
            <span className="text-xs md:text-sm text-amber-300 border border-amber-400/40 rounded-md px-3 py-2">
              {UI_TEXT.inDev[lang]}
            </span>
            <span className="text-xs md:text-sm text-white/70 border border-white/20 rounded-md px-3 py-2">
              {UI_TEXT.reposPrivatePublic[lang]}
            </span>
          </div>
          <div className="mt-4 grid grid-cols-1 gap-4">
            {ferreteriaEcommerceGallery.map((item) => (
              <figure
                key={item.src}
                className="rounded-xl overflow-hidden border border-white/15 bg-black/30 backdrop-blur-sm"
              >
                <div className="relative aspect-[16/10]">
                  <Image
                    src={item.src}
                    alt={item.title[lang]}
                    fill
                    className="object-cover"
                  />
                </div>
                <figcaption className="p-3">
                  <p className="text-sm md:text-base font-semibold">
                    {item.title[lang]}
                  </p>
                  <p className="text-xs md:text-sm text-white/75">
                    {item.description[lang]}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      );
    },
  },
  {
    id: "pulmomed",
    category:
      lang === "es"
        ? "Educacion en Salud con RV · En desarrollo"
        : "Health Education in VR · In development",
    title: lang === "es" ? "PulmoMed" : "PulmoMed",
    problem: {
      es: "Aprendizaje de oncologia pulmonar sin experiencias practicas e inmersivas.",
      en: "Pulmonary oncology training lacked hands-on, immersive learning experiences.",
    },
    src: "/assets/projects-screenshots/pulmomed/pulmomed-overview-01.jpeg",
    screenshots: pulmoMedGallery.map((item) => item.src),
    skills: {
      frontend: [
        PROJECT_SKILLS.csharp,
        PROJECT_SKILLS.unity,
        PROJECT_SKILLS.metaQuestDevKit,
      ],
      backend: [PROJECT_SKILLS.openai],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            {lang === "es"
              ? "PulmoMed es un simulador de realidad virtual disenado para fortalecer el aprendizaje del cancer de pulmon mediante experiencias inmersivas e interactivas. El proyecto integra inteligencia artificial y un enfoque educativo en salud para apoyar la formacion de estudiantes y profesionales del area medica."
              : "PulmoMed is a virtual reality simulator designed to strengthen learning about lung cancer through immersive, interactive experiences. The project integrates AI and a health education approach to support training for medical students and professionals."}
          </TypographyP>
          <div className="flex flex-wrap items-center gap-3 my-4 mb-8">
            <span className="text-xs md:text-sm text-amber-300 border border-amber-400/40 rounded-md px-3 py-2">
              {UI_TEXT.inDev[lang]}
            </span>
            <span className="text-xs md:text-sm text-white/70 border border-white/20 rounded-md px-3 py-2">
              {UI_TEXT.reposPrivateServers[lang]}
            </span>
          </div>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            {pulmoMedGallery.map((item) => (
              <figure
                key={item.src}
                className="rounded-xl overflow-hidden border border-white/15 bg-black/30 backdrop-blur-sm"
              >
                <div className="relative aspect-[16/10]">
                  <Image
                    src={item.src}
                    alt={item.title[lang]}
                    fill
                    className="object-cover"
                  />
                </div>
                <figcaption className="p-3">
                  <p className="text-sm md:text-base font-semibold">
                    {item.title[lang]}
                  </p>
                  <p className="text-xs md:text-sm text-white/75">
                    {item.description[lang]}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      );
    },
  },
];

export default getProjects;
