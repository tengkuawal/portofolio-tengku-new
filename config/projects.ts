import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ProjectInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

export const Projects: ProjectInterface[] = [
  {
    id: "portfolio",
    companyName: "Portfolio Website",
    type: "Personal",
    category: ["DevOps", "Frontend", "UI/UX"],
    shortDescription:
      "Sebuah website portofolio pribadi yang minimalis, responsif, dan berperforma tinggi untuk menampilkan proyek, keahlian, dan perjalanan karier saya.",
    websiteLink: "https://nbarkiya.xyz",
    githubLink: "https://github.com/namanbarkiya/minimal-next-portfolio",
    techStack: [
      "Next.js",
      "React",
      "Javascript",
      "Typescript",
      "Tailwind CSS",
      "Framer Motion",
      "Vercel",
    ],
    startDate: new Date("2026-07-08"),
    endDate: new Date("2027-09-01"),
    companyLogoImg: "/projects/portfolio/logo1.png",
    pagesInfoArr: [
      // {
      //   title: "Landing & Sections",
      //   description:
      //     "A clean, minimal landing page with sections for skills, projects, contributions, and experience.",
      //   imgArr: ["/profile-img.jpg"],
      // },
    ],
    descriptionDetails: {
      paragraphs: [
        "This personal portfolio website is a minimal, responsive, and high-performance platform designed to showcase my projects, skills, and career journey.",
      ],
      bullets: [
        "Developed a fast, SEO-friendly, and highly optimized frontend using Next.js and TypeScript.",
        "Designed a modern, responsive UI/UX from scratch and implemented smooth, interactive transitions using Framer Motion and Tailwind CSS.",
        "Integrated a seamless CI/CD pipeline using Vercel for automated, zero-downtime deployments directly from GitHub.",
        "Optimized asset loading and overall performance to achieve excellent Core Web Vitals scores across mobile and desktop devices.",
      ],
    },
  },
  {
    id: "Music",
    companyName: "Music-RPL",
    type: "Personal",
    category: ["Full Stack", "Backend", "Web Dev"],
    shortDescription:
      "Music-RPL is a production-ready AI chatbot platform designed to be embedded on any website with a single line widget. It features integrated analytics, secure multi-source ingestion and retrieval pipelines, and a focus on reliability and traceable answers.",
    techStack: ["Next.js", "Laravel", "Node.js", "PHP", "Python"],
    startDate: new Date("2026-07-08"),
    endDate: new Date("2027-09-01"),
    companyLogoImg: "/projects/murpl/music.jpg",
    pagesInfoArr: [
      // {
      //   title: "Ingestion & Retrieval",
      //   description:
      //     "Designed ingestion and retrieval pipelines to support multiple sources (PDFs, URLs, text) with tenant isolation.",
      //   imgArr: ["/logo.png"],
      // },
    ],
    descriptionDetails: {
      paragraphs: [
        "Music-RPL is a production-ready AI chatbot platform designed to be embedded on any website with a single line widget.",
      ],
      bullets: [
        "Designed ingestion and retrieval pipelines to support multiple sources (PDFs, URLs, text) with tenant isolation.",
        "Implemented integrated analytics to track user interactions and improve chatbot performance.",
        "Focused on reliability and traceable answers to ensure a high-quality user experience.",
      ],
    },
  },
  {
    id: "niya-saas-template",
    companyName: "Niya SaaS Template (30+ GitHub stars)",
    type: "Personal",
    category: ["Full Stack", "Web Dev", "UI/UX"],
    shortDescription:
      "Production-ready Next.js 15 template for developers and AI startups. Includes authentication, state management, beautiful UI components, and everything needed to build scalable SaaS applications.",
    websiteLink: "https://niya.nbarkiya.xyz",
    githubLink: "https://github.com/namanbarkiya/niya-saas-template",
    techStack: ["Next.js", "React", "Typescript", "Supabase", "Tailwind CSS"],
    startDate: new Date("2026-08-01"),
    endDate: new Date("2027-01-01"),
    companyLogoImg: "/projects/niya/logo.png",
    pagesInfoArr: [
      {
        title: "Landing Page",
        description:
          "Modern landing page showcasing the template features, tech stack, and pricing options.",
        imgArr: ["/logo.png"]
      },
      {
        title: "Authentication System",
        description:
          "Complete authentication system with Supabase, protected routes, and role-based access control.",
        imgArr: ["/logo.png"],
      },
      {
        title: "Dashboard & Components",
        description:
          "Beautiful UI components with Magic UI, Radix primitives, and comprehensive dashboard templates.",
        imgArr: ["/logo.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Niya is a production-ready Next.js 15 template designed for developers and AI startups. Built with modern best practices, it includes everything needed to build scalable SaaS applications.",
        "The template features a complete authentication system with Supabase, beautiful UI components with Magic UI and Radix primitives, state management with Zustand and React Query, and full TypeScript support with Zod validation.",
        "It's optimized for performance, includes SEO-friendly metadata, and provides a solid foundation for rapid prototyping and production deployment.",
      ],
      bullets: [
        "Created a production-ready Next.js 15 template with complete authentication system and protected routes.",
        "Integrated Supabase for database, authentication, and real-time features with full TypeScript support.",
        "Built comprehensive UI component library with Magic UI, Radix primitives, and Tailwind CSS styling.",
        "Implemented state management with Zustand for client state and React Query for server state management.",
        "Designed for developers and AI startups with all essential features to start building SaaS products.",
        "Achieved 30+ GitHub stars and recognition as a comprehensive starter template for modern web applications.",
      ],
    },
  },
];

export const featuredProjects = Projects.slice(0, 3);
