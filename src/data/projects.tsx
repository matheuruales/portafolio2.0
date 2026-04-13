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

const ProjectsLinks = ({
  frontendRepo,
  backendRepo,
}: {
  frontendRepo: string;
  backendRepo: string;
}) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link rel="noopener noreferrer" target="_blank" href={frontendRepo}>
        <Button variant="default" size="sm">
          Repositorio Frontend
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      <Link rel="noopener noreferrer" target="_blank" href={backendRepo}>
        <Button variant="outline" size="sm">
          Repositorio Backend
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
const anyPostGallery = [
  {
    src: "/assets/projects-screenshots/anypost/cover.png",
    title: "Inicio de sesion",
    description: "Pantalla de acceso a la plataforma.",
  },
  {
    src: "/assets/projects-screenshots/anypost/anypost-landing-overview.png",
    title: "Pagina de Inicio",
    description: "Vista principal de inicio del proyecto.",
  },
  {
    src: "/assets/projects-screenshots/anypost/anypost-dashboard-panel.png",
    title: "Panel principal",
    description: "Panel para gestionar contenido y estado de publicacion.",
  },
  {
    src: "/assets/projects-screenshots/anypost/anypost-content-editor.png",
    title: "Editor de Contenido",
    description: "Modulo para redactar y editar contenido.",
  },
  {
    src: "/assets/projects-screenshots/anypost/anypost-publication-workflow.png",
    title: "Generacion con IA",
    description: "Pantalla de generacion asistida por inteligencia artificial.",
  },
  {
    src: "/assets/projects-screenshots/anypost/anypost-automation-ai-tools.png",
    title: "Pagina de aterrizaje",
    description: "Pantalla tipo landing de presentacion del producto.",
  },
];
const bilbaoVerseLiveUrl = "https://bilbaoverse.net/";
const bilbaoVerseGallery = [
  {
    src: "/assets/projects-screenshots/bilbaoverse/bilbaoverse-cover.png",
    title: "BilbaoVerse",
    description: "Vista principal de la plataforma.",
  },
];
const crmAIAgentLiveUrl = "https://30x.vercel.app/login";
const crmAIAgentGallery = [
  {
    src: "/assets/projects-screenshots/crm-ai-agent/crm-ai-agent-cover.png",
    title: "CRM con Agente de IA",
    description: "Vista principal de la plataforma comercial.",
  },
];
const homaLiveUrl = "https://homa-frontend.vercel.app";
const homaGallery = [
  {
    src: "/assets/projects-screenshots/homa/homa-home.png",
    title: "Homa Inicio",
    description: "Vista principal de propiedades en venta y arriendo.",
  },
  {
    src: "/assets/projects-screenshots/homa/homa-login.png",
    title: "Inicio de sesion",
    description: "Pantalla de acceso a la plataforma.",
  },
];
const ferreteriaEcommerceGallery = [
  {
    src: "/assets/projects-screenshots/ferreteria-ecommerce/ferreteria-storefront.png",
    title: "Catalogo Comercial",
    description: "Vista principal para explorar productos de ferreteria.",
  },
];
const ferreteriaEcommerceLiveUrl = "https://frontend-ferreteria-two.vercel.app/login";
const pulmoMedGallery = [
  {
    src: "/assets/projects-screenshots/pulmomed/pulmomed-overview-01.jpeg",
    title: "Vista General 01",
    description: "Vista inmersiva general del simulador.",
  },
  {
    src: "/assets/projects-screenshots/pulmomed/pulmomed-overview-02.jpeg",
    title: "Vista General 02",
    description: "Interaccion y navegacion del entorno de aprendizaje.",
  },
  {
    src: "/assets/projects-screenshots/pulmomed/pulmomed-overview-03.jpeg",
    title: "Vista General 03",
    description: "Escenarios educativos enfocados en cancer de pulmon.",
  },
  {
    src: "/assets/projects-screenshots/pulmomed/pulmomed-overview-04.jpeg",
    title: "Vista General 04",
    description: "Modulo de experiencia virtual en contexto medico.",
  },
  {
    src: "/assets/projects-screenshots/pulmomed/pulmomed-overview-05.jpeg",
    title: "Vista General 05",
    description: "Recorrido de simulacion con enfoque en salud.",
  },
];

const projects: Project[] = [
  {
    id: "anypost",
    category: "Plataforma Fullstack con IA",
    title: "Any Post",
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
            Any Post es una plataforma web orientada a la creacion y gestion de
            contenido digital, pensada para centralizar el flujo de trabajo de
            los creadores en una experiencia moderna, intuitiva y escalable. Su
            enfoque combina usabilidad, automatizacion e inteligencia artificial
            para optimizar la produccion y publicacion de contenido.
          </TypographyP>
          <ProjectsLinks
            frontendRepo={anyPostFrontendRepo}
            backendRepo={anyPostBackendRepo}
          />
          <div className="mt-6">
            <h5 className="text-lg md:text-xl font-semibold mb-4">
              Galeria del proyecto
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
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="p-3">
                    <p className="text-sm md:text-base font-semibold">
                      {item.title}
                    </p>
                    <p className="text-xs md:text-sm text-white/75">
                      {item.description}
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
    category: "Plataforma de Ecosistema Empresarial",
    title: "BilbaoVerse",
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
            BilbaoVerse es una plataforma digital orientada a conectar
            negocios, comunidad y oportunidades de crecimiento en Latinoamerica,
            funcionando como un ecosistema para impulsar relaciones
            estrategicas, colaboracion y expansion empresarial.
          </TypographyP>
          <div className="flex flex-wrap items-center gap-3 my-4 mb-8">
            <Link href={bilbaoVerseLiveUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="default" size="sm">
                Sitio Web
                <ArrowUpRight className="ml-3 w-5 h-5" />
              </Button>
            </Link>
            <span className="text-xs md:text-sm text-white/70 border border-white/20 rounded-md px-3 py-2">
              Repositorio no disponible por seguridad del cliente
            </span>
          </div>
          <div className="mt-4 grid grid-cols-1 gap-4">
            {bilbaoVerseGallery.map((item) => (
              <figure
                key={item.src}
                className="rounded-xl overflow-hidden border border-white/15 bg-black/30 backdrop-blur-sm"
              >
                <div className="relative aspect-[16/10]">
                  <Image src={item.src} alt={item.title} fill className="object-cover" />
                </div>
                <figcaption className="p-3">
                  <p className="text-sm md:text-base font-semibold">{item.title}</p>
                  <p className="text-xs md:text-sm text-white/75">{item.description}</p>
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
    category: "Plataforma Comercial con IA",
    title: "CRM con agente de IA",
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
            Plataforma comercial que integra un CRM con inteligencia artificial
            para gestionar leads, automatizar seguimiento y optimizar procesos
            de venta.
          </TypographyP>
          <div className="flex flex-wrap items-center gap-3 my-4 mb-8">
            <Link href={crmAIAgentLiveUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="default" size="sm">
                Sitio Web
                <ArrowUpRight className="ml-3 w-5 h-5" />
              </Button>
            </Link>
            <span className="text-xs md:text-sm text-white/70 border border-white/20 rounded-md px-3 py-2">
              Repositorios no publicos por seguridad del cliente
            </span>
          </div>
          <div className="mt-4 grid grid-cols-1 gap-4">
            {crmAIAgentGallery.map((item) => (
              <figure
                key={item.src}
                className="rounded-xl overflow-hidden border border-white/15 bg-black/30 backdrop-blur-sm"
              >
                <div className="relative aspect-[16/10]">
                  <Image src={item.src} alt={item.title} fill className="object-cover" />
                </div>
                <figcaption className="p-3">
                  <p className="text-sm md:text-base font-semibold">{item.title}</p>
                  <p className="text-xs md:text-sm text-white/75">{item.description}</p>
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
    category: "Plataforma Inmobiliaria · En desarrollo",
    title: "Homa",
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
            Plataforma web inmobiliaria disenada para la publicacion, busqueda y
            gestion de propiedades en venta y arriendo.
          </TypographyP>
          <div className="flex flex-wrap items-center gap-3 my-4 mb-8">
            <Link href={homaLiveUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="default" size="sm">
                Sitio Web
                <ArrowUpRight className="ml-3 w-5 h-5" />
              </Button>
            </Link>
            <span className="text-xs md:text-sm text-amber-300 border border-amber-400/40 rounded-md px-3 py-2">
              En desarrollo
            </span>
            <span className="text-xs md:text-sm text-white/70 border border-white/20 rounded-md px-3 py-2">
              Repositorios no abiertos al publico
            </span>
          </div>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            {homaGallery.map((item) => (
              <figure
                key={item.src}
                className="rounded-xl overflow-hidden border border-white/15 bg-black/30 backdrop-blur-sm"
              >
                <div className="relative aspect-[16/10]">
                  <Image src={item.src} alt={item.title} fill className="object-cover" />
                </div>
                <figcaption className="p-3">
                  <p className="text-sm md:text-base font-semibold">{item.title}</p>
                  <p className="text-xs md:text-sm text-white/75">{item.description}</p>
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
    category: "Comercio electronico · En desarrollo",
    title: "E-commerce de ferreteria",
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
            Tienda online disenada para la visualizacion, organizacion y
            exploracion de productos de ferreteria dentro de una experiencia
            moderna y comercial.
          </TypographyP>
          <div className="flex flex-wrap items-center gap-3 my-4 mb-8">
            <Link href={ferreteriaEcommerceLiveUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="default" size="sm">
                Sitio Web
                <ArrowUpRight className="ml-3 w-5 h-5" />
              </Button>
            </Link>
            <span className="text-xs md:text-sm text-amber-300 border border-amber-400/40 rounded-md px-3 py-2">
              En desarrollo
            </span>
            <span className="text-xs md:text-sm text-white/70 border border-white/20 rounded-md px-3 py-2">
              Repositorios no abiertos al publico
            </span>
          </div>
          <div className="mt-4 grid grid-cols-1 gap-4">
            {ferreteriaEcommerceGallery.map((item) => (
              <figure
                key={item.src}
                className="rounded-xl overflow-hidden border border-white/15 bg-black/30 backdrop-blur-sm"
              >
                <div className="relative aspect-[16/10]">
                  <Image src={item.src} alt={item.title} fill className="object-cover" />
                </div>
                <figcaption className="p-3">
                  <p className="text-sm md:text-base font-semibold">{item.title}</p>
                  <p className="text-xs md:text-sm text-white/75">{item.description}</p>
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
    category: "Educacion en Salud con RV · En desarrollo",
    title: "PulmoMed",
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
            PulmoMed es un simulador de realidad virtual disenado para
            fortalecer el aprendizaje del cancer de pulmon mediante
            experiencias inmersivas e interactivas. El proyecto integra
            inteligencia artificial y un enfoque educativo en salud para apoyar
            la formacion de estudiantes y profesionales del area medica.
          </TypographyP>
          <div className="flex flex-wrap items-center gap-3 my-4 mb-8">
            <span className="text-xs md:text-sm text-amber-300 border border-amber-400/40 rounded-md px-3 py-2">
              En desarrollo
            </span>
            <span className="text-xs md:text-sm text-white/70 border border-white/20 rounded-md px-3 py-2">
              Repositorios en servidores privados y no abiertos al publico
            </span>
          </div>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            {pulmoMedGallery.map((item) => (
              <figure
                key={item.src}
                className="rounded-xl overflow-hidden border border-white/15 bg-black/30 backdrop-blur-sm"
              >
                <div className="relative aspect-[16/10]">
                  <Image src={item.src} alt={item.title} fill className="object-cover" />
                </div>
                <figcaption className="p-3">
                  <p className="text-sm md:text-base font-semibold">{item.title}</p>
                  <p className="text-xs md:text-sm text-white/75">{item.description}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      );
    },
  },
];

export default projects;
