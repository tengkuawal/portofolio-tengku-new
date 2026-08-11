import Image from "next/image";
import Link from "next/link";

import { Icons } from "@/components/common/icons";
import { Button } from "@/components/ui/button";
import ChipContainer from "@/components/ui/chip-container";
import { ProjectInterface } from "@/config/projects";

interface ProjectCardProps {
  project: ProjectInterface;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="relative p-6 w-full bg-background border border-border rounded-lg h-full flex flex-col">
      <div className="relative w-full h-[200px] flex-shrink-0">
        <Image
          className="rounded-lg border border-border object-cover"
          src={project.companyLogoImg}
          alt="img"
          fill
        />
      </div>
      <div className="pt-5 space-y-3 flex flex-col flex-grow">
        <div className="flex items-start justify-between gap-2">
          <h5 className="text-2xl font-bold tracking-tight text-foreground">
            {project.companyName}
          </h5>
          <div className="flex items-center space-x-1 shrink-0 mt-0.5">
            {project.githubLink && (
              <Link
                href={project.githubLink}
                target="_blank"
                rel="noreferrer"
                className="p-1.5 text-muted-foreground hover:text-foreground rounded-md hover:bg-accent transition-colors"
                title="GitHub Repository"
                aria-label="GitHub Repository"
              >
                <Icons.gitHub className="w-5 h-5" />
              </Link>
            )}
            {project.websiteLink && (
              <Link
                href={project.websiteLink}
                target="_blank"
                rel="noreferrer"
                className="p-1.5 text-muted-foreground hover:text-foreground rounded-md hover:bg-accent transition-colors"
                title="Live Project Website"
                aria-label="Live Project Website"
              >
                <Icons.externalLink className="w-5 h-5" />
              </Link>
            )}
          </div>
        </div>
        <p className="line-clamp-3 font-normal text-muted-foreground flex-grow">
          {project.shortDescription}
        </p>
        <div className="flex gap-2 flex-wrap">
          <ChipContainer textArr={project.category} />
        </div>
        <div className="mt-auto pt-2">
          <Link href={`/projects/${project.id}`}>
            <Button variant={"default"} className="w-full sm:w-auto">
              Read more
              <Icons.chevronRight className="w-4 ml-1" />
            </Button>
          </Link>
        </div>
      </div>
      <div className="absolute bottom-4 right-4 p-3 rounded-full bg-background border border-border hidden md:block">
        {project.type === "Personal" ? (
          <Icons.userFill className="h-4 w-4" />
        ) : (
          <Icons.work className="h-4 w-4" />
        )}
      </div>
    </div>
  );
}
