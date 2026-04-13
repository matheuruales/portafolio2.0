export const es = {
  nav: {
    home: "Inicio",
    about: "Acerca",
    experience: "Experiencia",
    skills: "Habilidades",
    projects: "Proyectos",
    services: "Servicios",
    testimonials: "Testimonios",
    contact: "Contacto",
    cv: "Hoja de vida",
    hire: "Contrátame",
    close: "Cerrar",
  },
  hero: {
    greeting: "Hola, soy",
    subtitle: "Ingeniero Fullstack de IA",
    cta_cv: "Hoja de vida",
    cta_hire: "Contrátame",
    tooltip_hire: "hablemos 🥹 🙏",
    tooltip_name: "hay algo esperandote en devtools",
  },
  about: {
    title: "ACERCA DE MI.",
    p1: "Soy estudiante de quinto semestre de Ingeniería de Software y actualmente me desempeño como Ingeniero Fullstack de IA, enfocado en crear aplicaciones web modernas, productos digitales escalables y agentes de inteligencia artificial que resuelvan problemas reales.",
    p2: "Me interesa participar en todo el proceso de desarrollo, desde la idea y la definición de la solución hasta la construcción de productos funcionales, bien pensados y orientados al impacto.",
    p3: "Me caracterizo por una mentalidad de aprendizaje constante, disciplina y mejora continua para construir tecnología con valor real.",
    stats: [
      { value: "8+", label: "Proyectos Reales" },
      { value: "5°", label: "Semestre Actual" },
      { value: "24+", label: "Tecnologías Clave" },
    ],
    pills: [
      "Ingeniero Fullstack de IA",
      "Web Apps Modernas",
      "Agentes de IA",
      "Productos Escalables",
    ],
  },
  experience: {
    title: "EXPERIENCIA ACADÉMICA Y LABORAL",
    subtitle:
      "Recorrido de experiencia profesional y formación académica, organizado como línea de tiempo.",
    kind: { work: "Laboral", academic: "Académica" },
    timeline: [
      {
        kind: "work" as const,
        title: "AI Engineer / Full Stack Developer",
        org: "Depxus IA y 30X",
        period: "2025 - Actualidad",
        description:
          "Diseño, desarrollo e implementación de soluciones con inteligencia artificial, automatización y desarrollo full stack. Enfoque en agentes de IA, integración de herramientas y plataformas escalables orientadas a negocio.",
      },
      {
        kind: "work" as const,
        title: "Monitor académico y desarrollador",
        org: "Universidad Cooperativa de Colombia",
        period: "Febrero 2025 – Agosto 2025",
        description:
          "Apoyo académico y técnico en procesos institucionales, gestión operativa de eventos y desarrollo de soluciones digitales para optimizar registros y operaciones internas.",
      },
      {
        kind: "academic" as const,
        title: "Ingeniería de Software",
        org: "Universidad Cooperativa de Colombia",
        period: "En curso (quinto semestre)",
        description:
          "Formación profesional en desarrollo de software, arquitectura, bases de datos, ingeniería de requisitos y construcción de productos tecnológicos.",
      },
      {
        kind: "academic" as const,
        title: "Técnico laboral por competencias en sistemas informáticos",
        org: "Idetec de Nariño",
        period: "Finalizado",
        description:
          "Fundamentos prácticos de sistemas informáticos, soporte técnico y herramientas para implementación de soluciones digitales.",
      },
      {
        kind: "academic" as const,
        title: "Auxiliar operador en sistemas informáticos",
        org: "Idetec de Nariño",
        period: "Finalizado",
        description:
          "Formación orientada a operación de sistemas, gestión básica de infraestructura y apoyo técnico en entornos de trabajo.",
      },
      {
        kind: "academic" as const,
        title: "Diplomado en herramientas web 2.0 y redes informáticas",
        org: "Idetec de Nariño",
        period: "Finalizado",
        description:
          "Capacitación en herramientas web, conectividad y conceptos de redes para fortalecer el despliegue de servicios digitales.",
      },
    ],
  },
  skills: { title: "HABILIDADES" },
  projects: {
    title: "PROYECTOS",
    live: "Sitio Web",
    private_demo: "Demo privada",
    close: "Cerrar",
    no_repo: "Repositorio no disponible por seguridad del cliente",
    gallery: "Galería del proyecto",
    in_dev: "En desarrollo",
  },
  services: {
    title: "SERVICIOS",
    subtitle:
      "Soluciones tecnológicas que desarrollo con enfoque en producto, inteligencia artificial y escalabilidad.",
    badge: "Servicio premium",
    items: [
      {
        title: "Desarrollo de aplicaciones web",
        description: "Aplicaciones modernas, responsivas y escalables.",
      },
      {
        title: "Sistemas con inteligencia artificial",
        description: "Integración de modelos, APIs y funcionalidades AI-first.",
      },
      {
        title: "Desarrollo full stack",
        description: "Frontend, backend, bases de datos y lógica de negocio.",
      },
      {
        title: "APIs e integraciones",
        description: "Conexión de servicios y automatización de flujos digitales.",
      },
      {
        title: "Automatización de procesos",
        description: "Optimización de tareas y operaciones mediante tecnología.",
      },
      {
        title: "CRM, dashboards y plataformas internas",
        description: "Herramientas de gestión para negocio y operación.",
      },
      {
        title: "MVPs para startups",
        description: "Productos listos para validar ideas y crecer.",
      },
      {
        title: "Interfaces y experiencia de usuario",
        description: "Diseño e implementación de experiencias claras y funcionales.",
      },
    ],
  },
  testimonials: {
    title: "TESTIMONIOS",
    subtitle:
      "Comentarios reales sobre resultados, acompañamiento técnico y valor entregado en proyectos y conferencias.",
    context_label: "Contexto",
    items: [
      {
        name: "Ivonne Barcos",
        quote:
          "Gracias, Matt. Para mí fue un verdadero gusto aprender de ti y tener la oportunidad de acompañarte en este proceso de desarrollo de BilbaoVerse.",
        context: "Desarrollo BilbaoVerse",
        image: "/assets/testimonials/ivonne-barcos.jpg",
        glow: "from-cyan-400/22 via-blue-400/12 to-transparent",
      },
      {
        name: "Juan Carlos Reyes Guerrero",
        quote:
          "Matheu, al equipo le gustó mucho tu charla; recibiste muchas felicitaciones por la claridad y el valor de lo que compartiste. Incluso surgió el interés de invitarte nuevamente dentro de un tiempo para otra charla, esta vez mostrando en vivo cómo desarrollas o programas un modelo, porque generaste mucho interés en tu forma de explicar y en tu conocimiento técnico.",
        context: "Conferencia KATARY Software Factory",
        profileUrl:
          "https://www.linkedin.com/in/juan-carlos-reyes-guerrero-0494ab63/?originalSubdomain=co",
        glow: "from-sky-400/22 via-cyan-400/12 to-transparent",
      },
      {
        name: "Jefferson Arcos",
        quote:
          "Mat está haciendo un trabajo excelente. Se nota mucho su nivel, su capacidad técnica y la velocidad con la que está avanzando. Realmente está volando.",
        context: "Creación de agente de IA",
        image: "/assets/testimonials/jefferson-arcos.jpg",
        glow: "from-emerald-400/22 via-teal-400/12 to-transparent",
      },
    ],
  },
  contact: {
    title_1: "TRABAJEMOS",
    title_2: "JUNTOS",
    card_title: "Formulario de contacto",
    description_1: "Puedes escribirme directamente a",
    description_2: "o dejar tus datos aquí.",
  },
  form: {
    name_label: "Nombre completo",
    name_placeholder: "Tu nombre",
    email_label: "Correo electrónico",
    email_placeholder: "tu@correo.com",
    message_label: "Tu mensaje",
    message_placeholder: "Cuéntame sobre tu proyecto",
    privacy: "Nunca compartiré tus datos con terceros.",
    loading: "Espera un momento",
    submit: "Enviar mensaje",
    success_title: "Gracias",
    success_desc: "Te responderé lo antes posible.",
    error_title: "Error",
    error_desc: "Algo salió mal. Revisa los campos e intenta de nuevo.",
  },
  footer: {
    rights: "Todos los derechos reservados.",
    cv_link: "Hoja de vida",
    projects_link: "Proyectos",
  },
  cv: {
    badge: "Hoja de vida",
    seeking: "En búsqueda de nuevos retos",
    contact: {
      email_label: "Correo",
      phone_label: "Teléfono",
      linkedin_label: "LinkedIn",
      send_email: "Enviar correo",
      call: "Llamar",
      view_linkedin: "Ver LinkedIn",
    },
    sections: {
      profile: "Perfil profesional",
      work_exp: "Experiencia laboral",
      project_exp: "Experiencia en proyectos",
      tech_skills: "Habilidades técnicas",
      soft_skills: "Habilidades blandas",
      education: "Formación académica",
      languages: "Idiomas",
      interests: "Intereses",
      work_refs: "Referencias de desempeño laboral",
      personal_refs: "Referencias personales",
    },
    ref_labels: { role: "Cargo", phone: "Teléfono", email: "Correo" },
    pdf_link: "¿Quieres una versión en PDF? Escríbeme",
    in_dev: "En desarrollo",
    repo_private: "Repositorios no disponibles por seguridad del cliente.",
    repo_private_alt: "Repositorios no abiertos al público.",
    profile_text:
      "Estudiante de Ingeniería de Software con experiencia en desarrollo de aplicaciones web, automatización de procesos, inteligencia artificial y tecnologías inmersivas. Me caracterizo por aprender rápido, adaptarme con facilidad a nuevas herramientas y aportar soluciones prácticas a problemas reales. He participado en proyectos académicos, hackatones y desarrollos tecnológicos enfocados en software, agentes de IA, gestión de datos, simuladores XR y automatización de flujos de trabajo. Tengo habilidades para el trabajo en equipo, la comunicación asertiva, la resolución de problemas y el desarrollo de soluciones con enfoque técnico, funcional y escalable.",
    work: [
      {
        title: "AI Engineer / Full Stack Developer",
        org: "Depxus IA y 30X",
        period: "2025 - Actualidad",
        description:
          "Actualmente me desempeño como AI Engineer y Full Stack Developer en Depxus IA y 30X, participando en el diseño, desarrollo e implementación de soluciones basadas en inteligencia artificial, automatización y desarrollo de software tanto en frontend como en backend. Mi trabajo se enfoca en la construcción de agentes de IA, integración de herramientas, automatización de flujos y desarrollo de plataformas tecnológicas escalables orientadas a resolver necesidades reales de negocio.",
      },
      {
        title: "Monitor académico y desarrollador",
        org: "Universidad Cooperativa de Colombia",
        period: "Febrero 2025 – Agosto 2025",
        description:
          "Me desempeñé como monitor académico en la Universidad Cooperativa de Colombia, apoyando actividades institucionales y tecnológicas relacionadas con la organización de eventos, la gestión operativa y el desarrollo de soluciones digitales para la universidad. Dentro de mis funciones, participé en el apoyo logístico y técnico de eventos académicos, así como en el desarrollo de una plataforma de asistencias que permitió optimizar el registro y control de participación de los asistentes.",
      },
    ],
    projects: [
      {
        title: "AnyPost – Plataforma de automatización de publicaciones en redes sociales",
        subtitle: "",
        in_dev: false,
        description:
          "Desarrollé una plataforma que permite a emprendedores y empresas gestionar y automatizar publicaciones en varias redes sociales desde un solo lugar, programar contenido y organizar campañas, usando inteligencia artificial para apoyar la creación de textos e imágenes. Trabajé con React y TypeScript en el frontend, Java con Spring Boot y PostgreSQL en el backend, e integré n8n y servicios externos para automatizar flujos y conectar la aplicación con distintas plataformas sociales.",
        url: "https://any-post-frontend-rnnq4zzhh-matheus-projects-d0a163a3.vercel.app/login",
        url_label: "URL",
        repo: "",
      },
      {
        title: "BilbaoVerse",
        subtitle: "Plataforma de ecosistema empresarial",
        in_dev: false,
        description:
          "BilbaoVerse es una plataforma digital orientada a conectar negocios, comunidad y oportunidades de crecimiento en Latinoamérica, funcionando como un ecosistema para impulsar relaciones estratégicas, colaboración y expansión empresarial.",
        stack: "Next.js, TypeScript, Tailwind CSS, Python, FastAPI, PostgreSQL, Azure.",
        url: "https://bilbaoverse.net/",
        url_label: "URL",
        repo: "Repositorios no disponibles por seguridad del cliente.",
      },
      {
        title: "CRM con agente de IA",
        subtitle: "Plataforma comercial con automatización inteligente",
        in_dev: false,
        description:
          "Plataforma comercial que integra un CRM con inteligencia artificial para gestionar leads, automatizar seguimiento y optimizar procesos de venta en entornos de operación real.",
        stack: "Next.js, TypeScript, Tailwind CSS, Python, FastAPI, LangGraph, OpenAI API, WhatsApp API y TikTok API.",
        url: "https://30x.vercel.app/login",
        url_label: "URL",
        repo: "Repositorios no públicos por seguridad del cliente.",
      },
      {
        title: "Homa",
        subtitle: "",
        in_dev: true,
        description:
          "Plataforma web inmobiliaria diseñada para la publicación, búsqueda y gestión de propiedades en venta y arriendo.",
        stack: "Next.js, TypeScript, Python, FastAPI y PostgreSQL.",
        url: "https://homa-frontend.vercel.app",
        url_label: "URL",
        repo: "Repositorios no abiertos al público.",
      },
      {
        title: "E-commerce de ferretería",
        subtitle: "",
        in_dev: true,
        description:
          "Tienda online diseñada para la visualización, organización y exploración de productos de ferretería dentro de una experiencia moderna y comercial.",
        stack: "Next.js, TypeScript, Tailwind CSS, Python, FastAPI, PostgreSQL y pagos con Wompi.",
        url: "https://frontend-ferreteria-two.vercel.app/login",
        url_label: "URL",
        repo: "Repositorios no abiertos al público.",
      },
      {
        title: "PulmoMed",
        subtitle: "Simulador inmersivo para enseñanza de oncología pulmonar",
        in_dev: false,
        description:
          "Proyecto desarrollado en Unity para gafas Meta Quest 2, 3 y Pro, orientado a la enseñanza de oncología pulmonar. Permite explorar entornos 3D del sistema respiratorio, visualizar la evolución de tumores y comprender procesos clínicos relacionados con el cáncer de pulmón, integrando lógica e interacción en C# y trabajo conjunto con profesionales de la salud para adaptar contenidos a necesidades formativas.",
        stack: "",
        url: "",
        url_label: "",
        repo: "",
      },
      {
        title: "Full House",
        subtitle: "Proyecto ganador de hackatón – Sistema inteligente para gestión de leads inmobiliarios",
        in_dev: false,
        description:
          "Sistema web que utiliza inteligencia artificial para analizar y priorizar leads inmobiliarios, automatiza la publicación de propiedades en redes sociales mediante n8n e integra un chat funcional con WhatsApp para centralizar la atención. La solución permite reducir tareas repetitivas, mejorar el seguimiento de clientes potenciales y aumentar la efectividad comercial de agencias inmobiliarias.",
        stack: "",
        url: "",
        url_label: "",
        repo: "",
      },
      {
        title: "Sistema de registro de asistencia con códigos QR",
        subtitle: "Universidad Cooperativa de Colombia",
        in_dev: false,
        description:
          "Desarrollé un software de registro de asistencia que reemplaza planillas de Excel o papel por códigos QR únicos para cada participante, automatizando el ingreso y salida a eventos académicos. La solución permite escanear los códigos en tiempo real, registrar asistencia de forma segura y organizar mejor la información para el área administrativa.",
        stack: "",
        url: "",
        url_label: "",
        repo: "",
      },
    ],
    tech_skill_groups: [
      { group: "Lenguajes de programación", items: ["Python", "Java", "JavaScript", "TypeScript", "C#"] },
      { group: "Frameworks y librerías", items: ["React", "React 18 + React DOM", "Next.js", "Vite", "FastAPI", "Django", "Spring Boot", "Unity", "Chart.js", "Firebase", "Tailwind CSS", "PostCSS + Autoprefixer"] },
      { group: "Bases de datos", items: ["PostgreSQL", "MongoDB", "Supabase", "Firebase"] },
      { group: "Inteligencia artificial y automatización", items: ["LangGraph", "OpenAI API", "n8n"] },
      { group: "APIs e integraciones", items: ["REST APIs", "WhatsApp API", "TikTok API", "Wompi"] },
      { group: "Control de versiones", items: ["Git", "GitHub"] },
      { group: "Desarrollo web", items: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React.js", "Tailwind CSS"] },
      { group: "Análisis de datos", items: ["Python con Pandas y NumPy", "Jupyter Notebook", "scikit-learn", "Matplotlib"] },
      { group: "Herramientas de gestión de proyectos", items: ["GitHub Projects", "GitLab Issues"] },
      { group: "Plataformas y herramientas", items: ["Unity", "Meta Quest Dev Kit", "Firebase", "Azure", "Azure Blob Storage", "Railway", "Vercel", "Docker", "Java 21 + Maven", "Spring Boot 3.5.6"] },
      { group: "Modelado", items: ["Blender"] },
      { group: "Hardware y tecnologías complementarias", items: ["Leap Motion", "ML Kit", "Oculus Rift", "Meta Quest 3", "ESP32"] },
    ],
    soft_skills: [
      "Trabajo en equipo colaborativo en proyectos",
      "Adaptación rápida a nuevas tecnologías y entornos de trabajo",
      "Resolución de problemas técnicos de forma autónoma",
      "Responsabilidad y compromiso con los objetivos del proyecto",
      "Proactividad para proponer soluciones e implementar mejoras",
    ],
    education: [
      { title: "Ingeniería de Software", institution: "Universidad Cooperativa de Colombia", note: "Terminado cuarto semestre." },
      { title: "Bachillerato Académico", institution: "Institución Educativa Municipio de Mallama" },
      { title: "Técnico laboral por competencias en sistemas informáticos", institution: "Idetec de Nariño" },
      { title: "Auxiliar operador en sistemas informáticos", institution: "Idetec de Nariño" },
      { title: "Diplomado en herramientas web 2.0 y redes informáticas", institution: "Idetec de Nariño" },
    ],
    languages: ["Español: lengua materna", "Inglés: medio (B2)"],
    interests: ["Desarrollo de software", "Videojuegos", "Entrenamiento en gimnasio"],
    work_refs: [
      { name: "Luis Carlos Revelo Tovar", role: "Director de Ingeniería de Software UCC", phone: "3155904324", email: "luis.revelot@campusucc.edu.co" },
      { name: "Daniel Fernando Arteaga Fajardo", role: "Encargado de proyecto de realidad mixta", phone: "3016889827", email: "daniel.arteagafajar@campusucc.edu.co" },
      { name: "Oscar Andrés Osorio", role: "Docente programa Ingeniería de Software", phone: "3147170398" },
    ],
    personal_refs: [
      { name: "Juan Carlos Reyes Guerrero", phone: "3015267740" },
      { name: "Alejandro España Meza", phone: "3154613867" },
    ],
  },
};

export type Translations = typeof es;
