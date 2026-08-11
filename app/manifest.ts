import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Tengku Awaluddin F | Backend & Frontend Engineer",
    short_name: "Tengku Awaluddin F",
    description:
      "Tengku Awaluddin F - Backend & Frontend Engineer working across software development, APIs, and modern user interfaces.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "64x64",
        type: "image/png",
      },
      {
        src: "/favicon.ico",
        sizes: "64x64",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    categories: [
      "portfolio",
      "ai",
      "software engineering",
      "machine learning",
      "developer",
      "web development",
    ],
    lang: "en",
    dir: "ltr",
    scope: "/",
  };
}
