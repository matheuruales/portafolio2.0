export enum SkillNames {
  AWS = "aws",
  LINUX = "linux",
  GIT = "git",
  DOCKER = "docker",
  HTML = "html",
  CSS = "css",
  JS = "js",
  POSTGRES = "postgres",
  TS = "ts",
  REACT = "react",
  VUE = "vue",
  NEXTJS = "nextjs",
  TAILWIND = "tailwind",
  NODEJS = "nodejs",
  EXPRESS = "express",
  MONGODB = "mongodb",
  GITHUB = "github",
  PRETTIER = "prettier",
  NPM = "npm",
  FIREBASE = "firebase",
  WORDPRESS = "wordpress",
  NGINX = "nginx",
  VIM = "vim",
  VERCEL = "vercel",
}

export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
};

// NOTE:
// `name` must match the object names inside the Spline keyboard scene.
// Labels/descriptions/colors/icons are mapped to the final stack order requested by the user.
export const SKILLS: Record<SkillNames, Skill> = {
  // Row 1
  [SkillNames.JS]: {
    id: 1,
    name: "js",
    label: "JavaScript",
    shortDescription: "Lenguaje base para aplicaciones web interactivas.",
    color: "#f7df1e",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  [SkillNames.TS]: {
    id: 2,
    name: "ts",
    label: "TypeScript",
    shortDescription: "Arquitectura tipada para productos escalables.",
    color: "#3178c6",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  [SkillNames.HTML]: {
    id: 3,
    name: "html",
    label: "HTML",
    shortDescription: "Estructura semantica y marcado enfocado en accesibilidad.",
    color: "#e34f26",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  [SkillNames.CSS]: {
    id: 4,
    name: "css",
    label: "CSS",
    shortDescription: "Layouts responsivos e interfaces visuales pulidas.",
    color: "#1572b6",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  [SkillNames.REACT]: {
    id: 5,
    name: "react",
    label: "React",
    shortDescription: "UI basada en componentes con gran rendimiento frontend.",
    color: "#61dafb",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  [SkillNames.VUE]: {
    id: 6,
    name: "vue",
    label: "Vercel",
    shortDescription: "Despliegue rapido y entrega en el borde para apps con Next.js.",
    color: "#ffffff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
  },

  // Row 2
  [SkillNames.NEXTJS]: {
    id: 7,
    name: "nextjs",
    label: "Next.js",
    shortDescription: "Marco de React listo para produccion en aplicaciones full stack.",
    color: "#ffffff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  [SkillNames.TAILWIND]: {
    id: 8,
    name: "tailwind",
    label: "Tailwind CSS",
    shortDescription: "Estilos utility-first para diseno rapido y consistente.",
    color: "#06b6d4",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  },
  [SkillNames.NODEJS]: {
    id: 9,
    name: "nodejs",
    label: "Node.js",
    shortDescription: "JavaScript del lado del servidor para APIs y servicios.",
    color: "#339933",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  [SkillNames.EXPRESS]: {
    id: 10,
    name: "express",
    label: "FastAPI",
    shortDescription: "APIs en Python de alto rendimiento con tipado limpio.",
    color: "#009688",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
  },
  [SkillNames.POSTGRES]: {
    id: 11,
    name: "postgres",
    label: "Python",
    shortDescription: "Lenguaje principal para IA, automatizacion y backend.",
    color: "#3776ab",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  [SkillNames.MONGODB]: {
    id: 12,
    name: "mongodb",
    label: "Git",
    shortDescription: "Flujos de control de versiones para colaborar con seguridad.",
    color: "#f05032",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },

  // Row 3
  [SkillNames.GIT]: {
    id: 13,
    name: "git",
    label: "PostgreSQL",
    shortDescription: "Modelado relacional, optimizacion SQL y confiabilidad.",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  [SkillNames.GITHUB]: {
    id: 14,
    name: "github",
    label: "Supabase",
    shortDescription:
      "Postgres + autenticacion + almacenamiento para desarrollo rapido de producto.",
    color: "#3ecf8e",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
  },
  [SkillNames.PRETTIER]: {
    id: 15,
    name: "prettier",
    label: "Docker",
    shortDescription: "Entornos portables y reproducibles en todas las etapas.",
    color: "#2496ed",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  [SkillNames.NPM]: {
    id: 16,
    name: "npm",
    label: "OpenAI",
    shortDescription: "Funciones con LLM, asistentes y flujos de generacion.",
    color: "#10a37f",
    icon: "/assets/icons/openai-svgrepo-com.svg",
  },
  [SkillNames.FIREBASE]: {
    id: 17,
    name: "firebase",
    label: "Firebase",
    shortDescription: "Backend en tiempo real, auth y prototipado rapido.",
    color: "#ffca28",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },
  [SkillNames.WORDPRESS]: {
    id: 18,
    name: "wordpress",
    label: "GitHub",
    shortDescription: "Colaboracion de codigo, revisiones PR y flujos CI.",
    color: "#181717",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },

  // Row 4
  [SkillNames.LINUX]: {
    id: 19,
    name: "linux",
    label: "LangGraph + LangChain",
    shortDescription:
      "Orquestacion de agentes con estado y cadenas componibles con LLM.",
    color: "#1c3c3c",
    icon: "https://cdn.simpleicons.org/langchain/1c3c3c",
  },
  [SkillNames.DOCKER]: {
    id: 20,
    name: "docker",
    label: "Java",
    shortDescription: "Desarrollo de servidor robusto para sistemas empresariales.",
    color: "#f89820",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  [SkillNames.NGINX]: {
    id: 21,
    name: "nginx",
    label: "Azure",
    shortDescription: "Infraestructura en la nube y servicios administrados en Azure.",
    color: "#0078d4",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
  },
  [SkillNames.AWS]: {
    id: 22,
    name: "aws",
    label: "AWS",
    shortDescription: "Arquitectura en la nube escalable y servicios de despliegue.",
    color: "#ff9900",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aws/aws-original.svg",
  },
  [SkillNames.VIM]: {
    id: 23,
    name: "vim",
    label: "n8n",
    shortDescription: "Automatizacion low-code e integracion de servicios.",
    color: "#ea4b71",
    icon: "https://cdn.simpleicons.org/n8n/ea4b71",
  },
  [SkillNames.VERCEL]: {
    id: 24,
    name: "vercel",
    label: "C#",
    shortDescription:
      "Lenguaje versatil para servidor, herramientas y desarrollo de juegos.",
    color: "#68217a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
  },
};

export const themeDisclaimers = {
  light: [
    "Advertencia: el modo claro emite una cantidad absurda de brillo.",
    "Precaucion: viene modo claro. No lo intentes en casa sin gafas.",
    "Solo profesionales entrenados soportan este nivel de luminosidad.",
    "Preparado: el modo claro esta por iluminar todo al maximo.",
    "Activando modo claro... confirma que tus ojos estan listos.",
  ],
  dark: [
    "Modo claro? Pense que te habias vuelto loco... bienvenido de nuevo al lado oscuro.",
    "Cambiando a modo oscuro... que tal la vida en el lado brillante?",
    "Modo oscuro activado. Gracias de parte de mis ojos.",
    "Bienvenido de nuevo a las sombras. Que tal afuera en la luz?",
    "Modo oscuro encendido. Por fin alguien con verdadero estilo.",
  ],
};
