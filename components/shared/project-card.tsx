import type { Project } from "@/types/dashboard"
import { UserAvatar } from "./user-avatar"
import { cn } from "@/lib/utils"
import { AlertCircle, CheckCircle2, Clock } from "lucide-react"
import Link from "next/link"

export interface ProjectCardProps {
  project: Project
  className?: string
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  const statusIcon = {
    "on-track": <CheckCircle2 className="h-4 w-4 text-green-500" />,
    "at-risk": <AlertCircle className="h-4 w-4 text-amber-500" />,
    delayed: <AlertCircle className="h-4 w-4 text-red-500" />,
    completed: <CheckCircle2 className="h-4 w-4 text-blue-500" />,
  }

  const statusText = {
    "on-track": "On Track",
    "at-risk": "At Risk",
    delayed: "Delayed",
    completed: "Completed",
  }

  return (
    <Link
      href={`/dashboard/projects/${project.id}`}
      className={cn("block border rounded-lg p-4 hover:bg-muted/50 transition-colors", className)}
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium">{project.client}</span>
        <div className="flex items-center">
          {statusIcon[project.status]}
          <span className="text-xs ml-1">{statusText[project.status]}</span>
        </div>
      </div>

      <h3 className="font-medium mb-1">{project.name}</h3>

      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{project.description}</p>

      <div className="space-y-3">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Progress</span>
          <span className="font-medium">{project.progress}%</span>
        </div>

        <div className="w-full bg-muted rounded-full h-2">
          <div
            className={cn(
              "h-2 rounded-full",
              project.status === "on-track"
                ? "bg-green-500"
                : project.status === "at-risk"
                  ? "bg-amber-500"
                  : project.status === "delayed"
                    ? "bg-red-500"
                    : "bg-blue-500",
            )}
            style={{ width: `${project.progress}%` }}
          ></div>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center text-xs text-muted-foreground">
            <Clock className="h-3 w-3 mr-1" />
            <span>Due {project.dueDate}</span>
          </div>

          <div className="flex -space-x-2">
            {project.teamMembers.slice(0, 3).map((member, index) => (
              <UserAvatar key={index} user={member} size="sm" className="border-2 border-background" />
            ))}
            {project.teamMembers.length > 3 && (
              <div className="w-6 h-6 rounded-full bg-muted border-2 border-background flex items-center justify-center text-xs">
                +{project.teamMembers.length - 3}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="mt-3 flex flex-wrap gap-1">
        {(project.tags ?? []).map((tag, index) => (
          <span key={index} className="text-xs px-1.5 py-0.5 bg-muted rounded-sm">
            {tag}
          </span>
        ))}
      </div>
    </Link>
  )
}

