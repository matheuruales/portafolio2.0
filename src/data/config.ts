const config = {
  title: "Johnatan Matheu Ruales Galvis | Fullstack AI Engineer",
  description: {
    long: "Portafolio de Johnatan Matheu Ruales Galvis, Fullstack AI Engineer en formacion. Desarrollo aplicaciones web modernas, plataformas escalables, automatizacion de procesos y agentes de inteligencia artificial orientados a resolver necesidades reales de negocio.",
    short:
      "Portafolio de Johnatan Matheu Ruales Galvis: Fullstack AI Engineer, desarrollo web, IA aplicada y automatizacion.",
  },
  keywords: [
    "Matheu Ruales",
    "Johnatan Matheu Ruales Galvis",
    "matheuruales",
    "Matheu Ruales portfolio",
    "portfolio",
    "Fullstack AI Engineer",
    "web development",
    "Next.js",
    "React",
    "TypeScript",
    "FastAPI",
    "Spring Boot",
    "LangGraph",
    "OpenAI API",
    "PostgreSQL",
    "automatizacion",
    "agentes de IA",
    "Azure",
  ],
  author: "Johnatan Matheu Ruales Galvis",
  email: "matheuruales2b2t@gmail.com",
  site: process.env.NEXT_PUBLIC_SITE_URL || "https://portfolio-matheu.vercel.app",

  get ogImg() {
    return "/assets/projects-screenshots/anypost/cover.png";
  },
  social: {
    twitter: "",
    linkedin: "https://www.linkedin.com/in/matheu-ruales-32221a331/",
    instagram: "https://www.instagram.com/matheu2b2t/",
    facebook: "",
    github: "https://github.com/matheuruales?tab=repositories",
  },
};
export { config };
