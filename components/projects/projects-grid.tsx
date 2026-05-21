import React from "react";
import { Button } from "@/components/ui/button";
import ProjectCard from "./project-card";

export interface ProjectGridPayload {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  link: string;
}

export interface ProjectsGridProps {
  projects: ProjectGridPayload[];
  /** When set together with `onProjectSelect`, cards spotlight a project for detail sections above/below the grid. */
  selectionMode?: boolean;
  selectedProjectId?: string;
  onProjectSelect?: (id: string) => void;
  showLoadMore?: boolean;
  onLoadMore?: () => void;
  /** Unused when `selectionMode` is enabled. */
  projectLinkPrefix?: string;
}

const ProjectsGrid: React.FC<ProjectsGridProps> = ({
  projects,
  selectionMode = false,
  selectedProjectId,
  onProjectSelect,
  showLoadMore = false,
  onLoadMore,
  projectLinkPrefix = "#",
}) => {
  return (
    <div className="container mx-auto px-4 md:px-6">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => {
          const hasHttpLink = project.link.startsWith("http");

          return (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              description={project.description}
              category={project.category}
              image={project.image}
              selectionMode={selectionMode}
              selected={selectedProjectId === project.id}
              onSelect={onProjectSelect}
              websiteUrl={
                selectionMode
                  ? project.link
                  : hasHttpLink
                    ? project.link
                    : undefined
              }
              detailHref={
                selectionMode
                  ? undefined
                  : `${projectLinkPrefix}/${project.id}`
              }
            />
          );
        })}
      </div>

      {showLoadMore ? (
        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" onClick={onLoadMore}>
            Load More Projects
          </Button>
        </div>
      ) : null}
    </div>
  );
};

export default ProjectsGrid;
