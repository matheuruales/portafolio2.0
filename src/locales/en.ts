import type { Translations } from "./es";

export const en: Translations = {
  nav: {
    home: "Home",
    about: "About",
    experience: "Experience",
    skills: "Skills",
    projects: "Projects",
    services: "Services",
    testimonials: "Testimonials",
    contact: "Contact",
    cv: "Resume",
    hire: "Hire me",
    close: "Close",
  },
  hero: {
    greeting: "Hi, I'm",
    subtitle: "Fullstack AI Engineer",
    cta_cv: "Resume",
    cta_hire: "Hire me",
    tooltip_hire: "let's talk 🥹 🙏",
    tooltip_name: "something's waiting for you in devtools",
  },
  about: {
    title: "ABOUT ME.",
    p1: "I'm a fifth-semester Software Engineering student currently working as a Fullstack AI Engineer, focused on building modern web applications, scalable digital products, and artificial intelligence agents that solve real-world problems.",
    p2: "I'm interested in participating in the entire development process, from idea and solution definition to building functional, well-thought-out products oriented toward impact.",
    p3: "I'm defined by a mindset of constant learning, discipline, and continuous improvement to build technology with real value.",
    stats: [
      { value: "8+", label: "Real Projects" },
      { value: "5th", label: "Current Semester" },
      { value: "24+", label: "Key Technologies" },
    ],
    pills: [
      "Fullstack AI Engineer",
      "Modern Web Apps",
      "AI Agents",
      "Scalable Products",
    ],
  },
  experience: {
    title: "ACADEMIC & WORK EXPERIENCE",
    subtitle:
      "Professional experience and academic background, organized as a timeline.",
    kind: { work: "Work", academic: "Academic" },
    timeline: [
      {
        kind: "work" as const,
        title: "AI Engineer / Full Stack Developer",
        org: "Depxus IA y 30X",
        period: "2025 - Present",
        description:
          "Design, development and implementation of AI-powered solutions, automation and full stack development. Focus on AI agents, tool integration and scalable business-oriented platforms.",
      },
      {
        kind: "work" as const,
        title: "Academic Monitor & Developer",
        org: "Universidad Cooperativa de Colombia",
        period: "February 2025 – August 2025",
        description:
          "Academic and technical support in institutional processes, event logistics management, and development of digital solutions to optimize records and internal operations.",
      },
      {
        kind: "academic" as const,
        title: "Software Engineering",
        org: "Universidad Cooperativa de Colombia",
        period: "In progress (fifth semester)",
        description:
          "Professional training in software development, architecture, databases, requirements engineering, and technology product building.",
      },
      {
        kind: "academic" as const,
        title: "Technical certification in computer systems",
        org: "Idetec de Nariño",
        period: "Completed",
        description:
          "Practical foundations of computer systems, technical support, and tools for implementing digital solutions.",
      },
      {
        kind: "academic" as const,
        title: "Computer systems operator assistant",
        org: "Idetec de Nariño",
        period: "Completed",
        description:
          "Training in systems operation, basic infrastructure management, and technical support in work environments.",
      },
      {
        kind: "academic" as const,
        title: "Diploma in web 2.0 tools and computer networks",
        org: "Idetec de Nariño",
        period: "Completed",
        description:
          "Training in web tools, connectivity, and networking concepts to strengthen digital service deployment.",
      },
    ],
  },
  skills: { title: "SKILLS" },
  projects: {
    title: "PROJECTS",
    live: "Live Site",
    private_demo: "Private demo",
    close: "Close",
    no_repo: "Repository unavailable for client security",
    gallery: "Project gallery",
    in_dev: "In development",
  },
  services: {
    title: "SERVICES",
    subtitle:
      "Technology solutions I build with a focus on product, artificial intelligence, and scalability.",
    badge: "Premium service",
    items: [
      {
        title: "Web application development",
        description: "Modern, responsive, and scalable applications.",
      },
      {
        title: "AI-powered systems",
        description: "Model integration, APIs, and AI-first features.",
      },
      {
        title: "Full stack development",
        description: "Frontend, backend, databases, and business logic.",
      },
      {
        title: "APIs & integrations",
        description: "Service connectivity and digital workflow automation.",
      },
      {
        title: "Process automation",
        description: "Task and operation optimization through technology.",
      },
      {
        title: "CRM, dashboards & internal platforms",
        description: "Management tools for business and operations.",
      },
      {
        title: "MVPs for startups",
        description: "Products ready to validate ideas and grow.",
      },
      {
        title: "UI/UX interfaces",
        description: "Design and implementation of clear, functional experiences.",
      },
    ],
  },
  testimonials: {
    title: "TESTIMONIALS",
    subtitle:
      "Real feedback on results, technical support, and value delivered in projects and conferences.",
    context_label: "Context",
    items: [
      {
        name: "Ivonne Barcos",
        quote:
          "Thank you, Matt. It was truly a pleasure to learn from you and have the opportunity to accompany you in this BilbaoVerse development journey.",
        context: "BilbaoVerse Development",
        image: "/assets/testimonials/ivonne-barcos.jpg",
        glow: "from-cyan-400/22 via-blue-400/12 to-transparent",
      },
      {
        name: "Juan Carlos Reyes Guerrero",
        quote:
          "Matheu, the team really loved your talk; you received many compliments for the clarity and value of what you shared. There was even interest in inviting you again for another talk, this time showing live how you develop or program a model, because you generated a lot of interest in your way of explaining and your technical knowledge.",
        context: "KATARY Software Factory Conference",
        profileUrl:
          "https://www.linkedin.com/in/juan-carlos-reyes-guerrero-0494ab63/?originalSubdomain=co",
        glow: "from-sky-400/22 via-cyan-400/12 to-transparent",
      },
      {
        name: "Jefferson Arcos",
        quote:
          "Mat is doing excellent work. His level, technical ability, and the speed at which he's advancing are very noticeable. He's really flying.",
        context: "AI Agent Creation",
        image: "/assets/testimonials/jefferson-arcos.jpg",
        glow: "from-emerald-400/22 via-teal-400/12 to-transparent",
      },
    ],
  },
  contact: {
    title_1: "LET'S WORK",
    title_2: "TOGETHER",
    card_title: "Contact form",
    description_1: "You can write to me directly at",
    description_2: "or leave your details here.",
  },
  form: {
    name_label: "Full name",
    name_placeholder: "Your name",
    email_label: "Email address",
    email_placeholder: "you@email.com",
    message_label: "Your message",
    message_placeholder: "Tell me about your project",
    privacy: "I'll never share your data with third parties.",
    loading: "Please wait",
    submit: "Send message",
    success_title: "Thank you",
    success_desc: "I'll get back to you as soon as possible.",
    error_title: "Error",
    error_desc: "Something went wrong. Check the fields and try again.",
  },
  footer: {
    rights: "All rights reserved.",
    cv_link: "Resume",
    projects_link: "Projects",
  },
  cv: {
    badge: "Resume",
    seeking: "Open to new opportunities",
    contact: {
      email_label: "Email",
      phone_label: "Phone",
      linkedin_label: "LinkedIn",
      send_email: "Send email",
      call: "Call",
      view_linkedin: "View LinkedIn",
    },
    sections: {
      profile: "Professional profile",
      work_exp: "Work experience",
      project_exp: "Project experience",
      tech_skills: "Technical skills",
      soft_skills: "Soft skills",
      education: "Academic background",
      languages: "Languages",
      interests: "Interests",
      work_refs: "Work performance references",
      personal_refs: "Personal references",
    },
    ref_labels: { role: "Role", phone: "Phone", email: "Email" },
    pdf_link: "Want a PDF version? Write to me",
    in_dev: "In development",
    repo_private: "Repositories unavailable for client security.",
    repo_private_alt: "Repositories not open to the public.",
    profile_text:
      "Software Engineering student with experience in web application development, process automation, artificial intelligence, and immersive technologies. I'm known for learning quickly, adapting easily to new tools, and delivering practical solutions to real problems. I've participated in academic projects, hackathons, and technology developments focused on software, AI agents, data management, XR simulators, and workflow automation. I have strong skills in teamwork, assertive communication, problem-solving, and building technical, functional, and scalable solutions.",
    work: [
      {
        title: "AI Engineer / Full Stack Developer",
        org: "Depxus IA y 30X",
        period: "2025 - Present",
        description:
          "I currently work as an AI Engineer and Full Stack Developer at Depxus IA y 30X, involved in the design, development, and implementation of solutions based on artificial intelligence, automation, and software development across both frontend and backend. My work focuses on building AI agents, tool integration, workflow automation, and developing scalable technology platforms oriented toward solving real business needs.",
      },
      {
        title: "Academic Monitor & Developer",
        org: "Universidad Cooperativa de Colombia",
        period: "February 2025 – August 2025",
        description:
          "I served as an academic monitor at Universidad Cooperativa de Colombia, supporting institutional and technological activities related to event organization, operational management, and development of digital solutions for the university. My responsibilities included logistical and technical support for academic events, as well as developing an attendance platform that optimized the registration and tracking of participant attendance.",
      },
    ],
    projects: [
      {
        title: "AnyPost – Social media publishing automation platform",
        subtitle: "",
        in_dev: false,
        description:
          "I developed a platform that allows entrepreneurs and companies to manage and automate social media posts from a single place, schedule content, and organize campaigns, using artificial intelligence to support text and image creation. I worked with React and TypeScript on the frontend, Java with Spring Boot and PostgreSQL on the backend, and integrated n8n and external services to automate workflows and connect the app to different social platforms.",
        url: "https://any-post-frontend-rnnq4zzhh-matheus-projects-d0a163a3.vercel.app/login",
        url_label: "URL",
        repo: "",
      },
      {
        title: "BilbaoVerse",
        subtitle: "Business ecosystem platform",
        in_dev: false,
        description:
          "BilbaoVerse is a digital platform aimed at connecting businesses, community, and growth opportunities in Latin America, functioning as an ecosystem to foster strategic relationships, collaboration, and business expansion.",
        stack: "Next.js, TypeScript, Tailwind CSS, Python, FastAPI, PostgreSQL, Azure.",
        url: "https://bilbaoverse.net/",
        url_label: "URL",
        repo: "Repositories unavailable for client security.",
      },
      {
        title: "CRM with AI agent",
        subtitle: "Commercial platform with intelligent automation",
        in_dev: false,
        description:
          "Commercial platform that integrates a CRM with artificial intelligence to manage leads, automate follow-up, and optimize sales processes in real operating environments.",
        stack: "Next.js, TypeScript, Tailwind CSS, Python, FastAPI, LangGraph, OpenAI API, WhatsApp API and TikTok API.",
        url: "https://30x.vercel.app/login",
        url_label: "URL",
        repo: "Repositories not public for client security.",
      },
      {
        title: "Homa",
        subtitle: "",
        in_dev: true,
        description:
          "Real estate web platform designed for the publication, search, and management of properties for sale and rent.",
        stack: "Next.js, TypeScript, Python, FastAPI and PostgreSQL.",
        url: "https://homa-frontend.vercel.app",
        url_label: "URL",
        repo: "Repositories not open to the public.",
      },
      {
        title: "Hardware store e-commerce",
        subtitle: "",
        in_dev: true,
        description:
          "Online store designed for the display, organization, and exploration of hardware products within a modern commercial experience.",
        stack: "Next.js, TypeScript, Tailwind CSS, Python, FastAPI, PostgreSQL and payments with Wompi.",
        url: "https://frontend-ferreteria-two.vercel.app/login",
        url_label: "URL",
        repo: "Repositories not open to the public.",
      },
      {
        title: "PulmoMed",
        subtitle: "Immersive simulator for pulmonary oncology education",
        in_dev: false,
        description:
          "Project developed in Unity for Meta Quest 2, 3, and Pro headsets, aimed at teaching pulmonary oncology. It allows users to explore 3D environments of the respiratory system, visualize tumor progression, and understand clinical processes related to lung cancer, integrating logic and interaction in C# alongside collaboration with healthcare professionals to adapt content to educational needs.",
        stack: "",
        url: "",
        url_label: "",
        repo: "",
      },
      {
        title: "Full House",
        subtitle: "Hackathon winner – Intelligent real estate lead management system",
        in_dev: false,
        description:
          "Web system that uses artificial intelligence to analyze and prioritize real estate leads, automates property publication on social media via n8n, and integrates a functional WhatsApp chat to centralize customer communication. The solution reduces repetitive tasks, improves potential client follow-up, and increases commercial effectiveness for real estate agencies.",
        stack: "",
        url: "",
        url_label: "",
        repo: "",
      },
      {
        title: "QR code attendance registration system",
        subtitle: "Universidad Cooperativa de Colombia",
        in_dev: false,
        description:
          "I developed attendance registration software that replaces Excel spreadsheets or paper with unique QR codes for each participant, automating check-in and check-out at academic events. The solution allows real-time code scanning, secure attendance recording, and better data organization for the administrative area.",
        stack: "",
        url: "",
        url_label: "",
        repo: "",
      },
    ],
    tech_skill_groups: [
      { group: "Programming languages", items: ["Python", "Java", "JavaScript", "TypeScript", "C#"] },
      { group: "Frameworks & libraries", items: ["React", "React 18 + React DOM", "Next.js", "Vite", "FastAPI", "Django", "Spring Boot", "Unity", "Chart.js", "Firebase", "Tailwind CSS", "PostCSS + Autoprefixer"] },
      { group: "Databases", items: ["PostgreSQL", "MongoDB", "Supabase", "Firebase"] },
      { group: "Artificial intelligence & automation", items: ["LangGraph", "OpenAI API", "n8n"] },
      { group: "APIs & integrations", items: ["REST APIs", "WhatsApp API", "TikTok API", "Wompi"] },
      { group: "Version control", items: ["Git", "GitHub"] },
      { group: "Web development", items: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React.js", "Tailwind CSS"] },
      { group: "Data analysis", items: ["Python with Pandas & NumPy", "Jupyter Notebook", "scikit-learn", "Matplotlib"] },
      { group: "Project management tools", items: ["GitHub Projects", "GitLab Issues"] },
      { group: "Platforms & tools", items: ["Unity", "Meta Quest Dev Kit", "Firebase", "Azure", "Azure Blob Storage", "Railway", "Vercel", "Docker", "Java 21 + Maven", "Spring Boot 3.5.6"] },
      { group: "3D Modeling", items: ["Blender"] },
      { group: "Hardware & complementary technologies", items: ["Leap Motion", "ML Kit", "Oculus Rift", "Meta Quest 3", "ESP32"] },
    ],
    soft_skills: [
      "Collaborative teamwork on projects",
      "Quick adaptation to new technologies and work environments",
      "Independent resolution of technical problems",
      "Responsibility and commitment to project goals",
      "Proactiveness in proposing solutions and implementing improvements",
    ],
    education: [
      { title: "Software Engineering", institution: "Universidad Cooperativa de Colombia", note: "Completed fourth semester." },
      { title: "Academic High School Diploma", institution: "Institución Educativa Municipio de Mallama" },
      { title: "Technical certification in computer systems", institution: "Idetec de Nariño" },
      { title: "Computer systems operator assistant", institution: "Idetec de Nariño" },
      { title: "Diploma in web 2.0 tools and computer networks", institution: "Idetec de Nariño" },
    ],
    languages: ["Spanish: native language", "English: intermediate (B2)"],
    interests: ["Software development", "Video games", "Gym training"],
    work_refs: [
      { name: "Luis Carlos Revelo Tovar", role: "Software Engineering Director UCC", phone: "3155904324", email: "luis.revelot@campusucc.edu.co" },
      { name: "Daniel Fernando Arteaga Fajardo", role: "Mixed reality project lead", phone: "3016889827", email: "daniel.arteagafajar@campusucc.edu.co" },
      { name: "Oscar Andrés Osorio", role: "Software Engineering program lecturer", phone: "3147170398" },
    ],
    personal_refs: [
      { name: "Juan Carlos Reyes Guerrero", phone: "3015267740" },
      { name: "Alejandro España Meza", phone: "3154613867" },
    ],
  },
};
