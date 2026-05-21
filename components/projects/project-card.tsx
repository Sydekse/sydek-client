import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  /** Public site URL — shown as "Live site" when present. Internal routes (/) are rendered as Next links without target=_blank */
  websiteUrl?: string;
  /** When omitted and `selectionMode` is false, "View detail" stays in-page to `#`. */
  detailHref?: string;
  selectionMode?: boolean;
  selected?: boolean;
  onSelect?: (id: string) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  title,
  description,
  category,
  image,
  websiteUrl,
  detailHref,
  selectionMode,
  selected,
  onSelect,
}) => {
  const rootProps = selectionMode
    ? {
        role: "button" as const,
        tabIndex: 0,
        onClick: () => onSelect?.(id),
        onKeyDown: (e: React.KeyboardEvent<HTMLDivElement>) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onSelect?.(id);
          }
        },
      }
    : {};

  const outerSiteIsHttp = Boolean(websiteUrl?.startsWith("http"));

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl border bg-card transition-all duration-300 hover:shadow-lg",
        selectionMode && "cursor-pointer outline-none hover:border-secondary/50",
        selected && "ring-2 ring-secondary ring-offset-2 ring-offset-background"
      )}
      {...rootProps}
    >
      {!selectionMode ? null : (
        <span className="sr-only">
          Select {title} as the spotlight project for details below
        </span>
      )}
      <div className="relative">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            width={800}
            height={600}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute left-4 top-4 rounded-full bg-secondary/90 px-2 py-1 text-xs font-medium text-white">
            {category}
          </div>
        </div>
        <div className="p-6">
          <h3 className="mb-2 text-xl font-bold transition-colors group-hover:text-secondary">
            {title}
          </h3>
          <p className="mb-4 text-muted-foreground">{description}</p>

          <div className="flex flex-wrap items-center gap-3">
            {!selectionMode && detailHref ? (
              <Link
                href={detailHref}
                className="inline-flex items-center text-secondary hover:underline"
              >
                View Project
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            ) : null}

            {!selectionMode && !detailHref ? (
              <span className="text-sm text-muted-foreground">
                Detailed view coming soon
              </span>
            ) : null}

            {selectionMode ? (
              <span className="text-sm font-medium text-secondary">
                {selected ? "Spotlight selected" : "Click to spotlight"}
              </span>
            ) : null}

            {websiteUrl ? (
              outerSiteIsHttp ? (
                <a
                  href={websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full border border-border/70 px-3 py-1 text-sm text-muted-foreground transition-colors hover:border-secondary hover:text-secondary"
                  onClick={(e) => e.stopPropagation()}
                >
                  Live site
                  <ExternalLink className="ml-1 h-3.5 w-3.5" />
                </a>
              ) : (
                <Link
                  href={websiteUrl}
                  className="inline-flex items-center rounded-full border border-border/70 px-3 py-1 text-sm text-muted-foreground transition-colors hover:border-secondary hover:text-secondary"
                  onClick={(e) => e.stopPropagation()}
                >
                  Learn more
                  <ArrowRight className="ml-1 h-3.5 w-3.5" />
                </Link>
              )
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
