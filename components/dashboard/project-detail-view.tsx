import type { ProjectDetail, Task } from "@/types/dashboard"
import { TaskCard } from "@/components/shared/task-card"
import { UserAvatar } from "@/components/shared/user-avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertCircle, Calendar, CheckCircle2, Clock, Edit, FileText, Plus, Users } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"

export interface ProjectDetailViewProps {
  project: ProjectDetail
  className?: string
}

export function ProjectDetailView({ project, className }: ProjectDetailViewProps) {
  const statusIcon = {
    "on-track": <CheckCircle2 className="h-5 w-5 text-green-500" />,
    "at-risk": <AlertCircle className="h-5 w-5 text-amber-500" />,
    delayed: <AlertCircle className="h-5 w-5 text-red-500" />,
    completed: <CheckCircle2 className="h-5 w-5 text-blue-500" />,
  }

  const statusText = {
    "on-track": "On Track",
    "at-risk": "At Risk",
    delayed: "Delayed",
    completed: "Completed",
  }

  const getTasksByStatus = (tasks: Task[], status: Task["status"]) => {
    return tasks.filter((task) => task.status === status)
  }

  return (
    <div className={className}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-2xl">{project.name}</CardTitle>
                  <CardDescription>
                    <span className="font-medium">{project.client}</span> • Project #{project.id}
                  </CardDescription>
                </div>
                <Button variant="outline">
                  <Edit className="h-4 w-4 mr-2" />
                  Edit Project
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <p className="mb-6">{project.description}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="flex flex-col items-center justify-center p-4 bg-muted/50 rounded-lg">
                  <div className="mb-2">{statusIcon[project.status]}</div>
                  <h3 className="text-sm font-medium">{statusText[project.status]}</h3>
                  <p className="text-xs text-muted-foreground">Status</p>
                </div>

                <div className="flex flex-col items-center justify-center p-4 bg-muted/50 rounded-lg">
                  <div className="mb-2">
                    <Calendar className="h-5 w-5 text-blue-500" />
                  </div>
                  <h3 className="text-sm font-medium">{project.dueDate}</h3>
                  <p className="text-xs text-muted-foreground">Due Date</p>
                </div>

                <div className="flex flex-col items-center justify-center p-4 bg-muted/50 rounded-lg">
                  <div className="mb-2">
                    <Users className="h-5 w-5 text-purple-500" />
                  </div>
                  <h3 className="text-sm font-medium">{project.teamSize} Members</h3>
                  <p className="text-xs text-muted-foreground">Team Size</p>
                </div>

                <div className="flex flex-col items-center justify-center p-4 bg-muted/50 rounded-lg">
                  <div className="mb-2">
                    <FileText className="h-5 w-5 text-green-500" />
                  </div>
                  <h3 className="text-sm font-medium">{project.tasks.length} Tasks</h3>
                  <p className="text-xs text-muted-foreground">Total Tasks</p>
                </div>
              </div>

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
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>Started {project.startDate}</span>
                  </div>

                  <div className="flex items-center text-sm text-muted-foreground">
                    <span>Due {project.dueDate}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Team</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {project.teamMembers.map((member, index) => {
                  const displayName =
                    typeof member === "string" ? member : member.name;
                  const displayRole =
                    typeof member === "string" ? "Team" : member.role;
                  const memberId =
                    typeof member === "string" ? String(index) : member.id;
                  return (
                  <div key={memberId} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <UserAvatar user={member} />
                      <div>
                        <p className="font-medium">{displayName}</p>
                        <p className="text-xs text-muted-foreground">{displayRole}</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={`/dashboard/messages?user=${encodeURIComponent(memberId)}`}>Message</Link>
                    </Button>
                  </div>
                );
                })}
              </div>

              <Button variant="outline" className="w-full mt-4" asChild>
                <Link href="/dashboard/team">
                  <Users className="h-4 w-4 mr-2" />
                  Manage Team
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <Tabs defaultValue="tasks">
        <TabsList className="mb-6">
          <TabsTrigger value="tasks">Tasks</TabsTrigger>
          <TabsTrigger value="milestones">Milestones</TabsTrigger>
          <TabsTrigger value="files">Files</TabsTrigger>
          <TabsTrigger value="notes">Notes</TabsTrigger>
          {project.budget && <TabsTrigger value="budget">Budget</TabsTrigger>}
        </TabsList>

        <TabsContent value="tasks">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm">To Do</CardTitle>
                  <Button variant="ghost" size="icon" asChild>
                    <Link href={`/dashboard/projects/${project.id}/tasks/new`}>
                      <Plus className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {getTasksByStatus(project.tasks, "todo").map((task, index) => (
                  <TaskCard key={index} task={task} />
                ))}

                {getTasksByStatus(project.tasks, "todo").length === 0 && (
                  <div className="text-center py-4">
                    <p className="text-sm text-muted-foreground">No tasks</p>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">In Progress</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {getTasksByStatus(project.tasks, "in-progress").map((task, index) => (
                  <TaskCard key={index} task={task} />
                ))}

                {getTasksByStatus(project.tasks, "in-progress").length === 0 && (
                  <div className="text-center py-4">
                    <p className="text-sm text-muted-foreground">No tasks</p>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Review</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {getTasksByStatus(project.tasks, "review").map((task, index) => (
                  <TaskCard key={index} task={task} />
                ))}

                {getTasksByStatus(project.tasks, "review").length === 0 && (
                  <div className="text-center py-4">
                    <p className="text-sm text-muted-foreground">No tasks</p>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Completed</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {getTasksByStatus(project.tasks, "completed").map((task, index) => (
                  <TaskCard key={index} task={task} />
                ))}

                {getTasksByStatus(project.tasks, "completed").length === 0 && (
                  <div className="text-center py-4">
                    <p className="text-sm text-muted-foreground">No tasks</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="milestones">
          <Card>
            <CardContent className="p-6">
              <div className="space-y-6">
                {project.milestones.map((milestone, index) => (
                  <div key={index} className="flex items-start">
                    <div
                      className={cn(
                        "w-6 h-6 rounded-full flex items-center justify-center mr-4 flex-shrink-0",
                        milestone.completed
                          ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
                          : "bg-muted",
                      )}
                    >
                      {milestone.completed ? (
                        <CheckCircle2 className="h-4 w-4" />
                      ) : (
                        <span className="text-xs">{index + 1}</span>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium">{milestone.title}</h3>
                        <span className="text-sm text-muted-foreground">{milestone.dueDate}</span>
                      </div>
                      {milestone.description && (
                        <p className="text-sm text-muted-foreground mt-1">{milestone.description}</p>
                      )}
                    </div>
                  </div>
                ))}

                <Button variant="outline" className="w-full" asChild>
                  <Link href={`/dashboard/projects/${project.id}/milestones/new`}>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Milestone
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="files">
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                {project.files.map((file, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-md">
                    <div className="flex items-center">
                      <div className="p-2 bg-muted rounded-md mr-3">
                        <FileText className="h-5 w-5 text-blue-500" />
                      </div>
                      <div>
                        <p className="font-medium">{file.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {file.size} • Uploaded by {file.uploadedBy.name} on {file.uploadedAt}
                        </p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Download
                    </Button>
                  </div>
                ))}

                {project.files.length === 0 && (
                  <div className="text-center py-8">
                    <p className="text-muted-foreground">No files uploaded yet</p>
                  </div>
                )}

                <Button variant="outline" className="w-full" asChild>
                  <Link href={`/dashboard/projects/${project.id}/files/upload`}>
                    <Plus className="h-4 w-4 mr-2" />
                    Upload File
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notes">
          <Card>
            <CardContent className="p-6">
              <div className="space-y-6">
                {project.notes.map((note, index) => (
                  <div key={index} className="border rounded-md p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium">{note.title}</h3>
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4 mr-2" />
                        Edit
                      </Button>
                    </div>
                    <p className="text-sm whitespace-pre-wrap">{note.content}</p>
                    <div className="flex items-center mt-4 text-xs text-muted-foreground">
                      <UserAvatar user={note.createdBy} size="sm" className="mr-2" />
                      <span>
                        Created by {note.createdBy.name} on {note.createdAt}
                        {note.updatedAt !== note.createdAt && ` • Updated on ${note.updatedAt}`}
                      </span>
                    </div>
                  </div>
                ))}

                {project.notes.length === 0 && (
                  <div className="text-center py-8">
                    <p className="text-muted-foreground">No notes added yet</p>
                  </div>
                )}

                <Button variant="outline" className="w-full" asChild>
                  <Link href={`/dashboard/projects/${project.id}/notes/new`}>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Note
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {project.budget && (
          <TabsContent value="budget">
            <Card>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="p-4 border rounded-md">
                      <h3 className="text-sm text-muted-foreground mb-1">Total Budget</h3>
                      <p className="text-2xl font-bold">
                        {project.budget.currency} {project.budget.total.toLocaleString()}
                      </p>
                    </div>

                    <div className="p-4 border rounded-md">
                      <h3 className="text-sm text-muted-foreground mb-1">Spent</h3>
                      <p className="text-2xl font-bold">
                        {project.budget.currency} {project.budget.spent.toLocaleString()}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Budget Usage</span>
                      <span className="font-medium">
                        {Math.round((project.budget.spent / project.budget.total) * 100)}%
                      </span>
                    </div>

                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className={cn(
                          "h-2 rounded-full",
                          project.budget.spent / project.budget.total > 0.9
                            ? "bg-red-500"
                            : project.budget.spent / project.budget.total > 0.7
                              ? "bg-amber-500"
                              : "bg-green-500",
                        )}
                        style={{ width: `${Math.min(100, (project.budget.spent / project.budget.total) * 100)}%` }}
                      ></div>
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <span>
                          Remaining: {project.budget.currency}{" "}
                          {(project.budget.total - project.budget.spent).toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full" asChild>
                    <Link href={`/dashboard/projects/${project.id}/budget`}>
                      <Edit className="h-4 w-4 mr-2" />
                      Manage Budget
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        )}
      </Tabs>
    </div>
  )
}

