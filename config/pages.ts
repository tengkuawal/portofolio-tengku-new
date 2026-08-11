import { ValidPages } from "./constants";

type PagesConfig = {
  [key in ValidPages]: {
    title: string;
    description: string;
    metadata: {
      title: string;
      description: string;
    };
    // featuredDescription: string;
  };
};

export const pagesConfig: PagesConfig = {
  home: {
    title: "Home",
    description: "Welcome to my portfolio website.",
    metadata: {
      title: "Home",
      description: "Tengku Awaluddin F's portfolio website.",
    },
  },
  skills: {
    title: "Skills",
    description: "Key skills that define my professional identity.",
    metadata: {
      title: "Skills",
      description:
        "Tengku Awaluddin F's key skills that define his professional identity.",
    },
  },
  projects: {
    title: "Projects",
    description: "Showcasing impactful projects and technical achievements.",
    metadata: {
      title: "Projects",
      description: "Tengku Awaluddin F's projects in building web applications.",
    },
  },
  contact: {
    title: "Contact",
    description: "Let's connect and explore collaborations.",
    metadata: {
      title: "Contact",
      description: "Contact Tengku Awaluddin F.",
    },
  },
  contributions: {
    title: "Contributions",
    description: "Open-source contributions and community involvement.",
    metadata: {
      title: "Contributions",
      description:
        "Tengku Awaluddin F's open-source contributions and community involvement.",
    },
  },
  resume: {
    title: "Resume",
    description: "Tengku Awaluddin F's resume.",
    metadata: {
      title: "Resume",
      description: "Tengku Awaluddin F's resume.",
    },
  },
  blogs: {
    title: "Blogs",
    description:
      "Thoughts on software engineering, web development, and building in public.",
    metadata: {
      title: "Blogs",
      description:
        "Tengku Awaluddin F's blog — thoughts on web development, software engineering, and building in public.",
    },
  },
  experience: {
    title: "Experience",
    description: "Professional journey and career timeline.",
    metadata: {
      title: "Experience",
      description:
        "Tengku Awaluddin F's professional journey and experience timeline.",
    },
  },
};
