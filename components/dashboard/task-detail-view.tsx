"use client"

import type { TaskDetail } from "@/types/dashboard"
import type { User } from "@/types/user"
import { CommentItem } from "@/components/shared/comment-item"
import { UserAvatar } from "@/components/shared/user-avatar"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  AlertCircle,
  Calendar,
  CheckCircle2,
  Clock,
  Edit,
  FileText,
  MessageSquare,
  Paperclip,
  Timer,
  UserIcon,
} from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { format } from "date-fns"

export interface TaskDetailViewProps {
  task: TaskDetail
  currentUser: User
  onAddComment: (content: string) => void
  onUpdateTask?: (task: Partial<TaskDetail>) => void
  className?: string
}

export function TaskDetailView({ task, currentUser, onAddComment, onUpdateTask, className }: TaskDetailViewProps) {
  const [newComment, setNewComment] = useState("")

  const handleAddComment = () => {
    if (newComment.trim()) {
      onAddComment(newComment)
      setNewComment("")
    }
  }

  const priorityClasses = {
    high: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300",
    medium: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300",
    low: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
  }

  const statusIcon = {
    todo: <AlertCircle className="h-4 w-4 text-amber-500 mr-2" />,
    "in-progress": <Timer className="h-4 w-4 text-blue-500 mr-2" />,
    review: <FileText className="h-4 w-4 text-purple-500 mr-2" />,
    completed: <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />,
  }

  const formatTimeSpent = (minutes: number) => {
    const hours = Math.floor(minutes / 60)
    const mins = minutes % 60
    return `${hours}h ${mins}m`
  }

  return (
    <div className={className}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-xl">{task.title}</CardTitle>
                  <CardDescription>
                    <span className="font-medium">{task.projectName}</span> • Task #{task.id}
                  </CardDescription>
                </div>
                <Button variant="outline" size="sm">
                  <Edit className="h-4 w-4 mr-2" />
                  Edit
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-6">{task.description}</p>

              {task.subtasks && task.subtasks.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-sm font-medium mb-2">Subtasks</h3>
                  <div className="space-y-2">
                    {task.subtasks.map((subtask, index) => (
                      <div key={index} className="flex items-center">
                        <Checkbox
                          id={`subtask-${index}`}
                          checked={subtask.completed}
                          onCheckedChange={() => {
                            if (onUpdateTask) {
                              const updatedSubtasks = [...task.subtasks!]
                              updatedSubtasks[index] = {
                                ...subtask,
                                completed: !subtask.completed,
                              }
                              onUpdateTask({ subtasks: updatedSubtasks })
                            }
                          }}
                        />
                        <label
                          htmlFor={`subtask-${index}`}
                          className={cn("ml-2 text-sm", subtask.completed && "line-through text-muted-foreground")}
                        >
                          {subtask.title}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {task.attachments && task.attachments.length > 0 && (
                <div>
                  <h3 className="text-sm font-medium mb-2">Attachments</h3>
                  <div className="space-y-2">
                    {task.attachments.map((attachment, index) => (
                      <div key={index} className="flex items-center justify-between p-2 border rounded-md">
                        <div className="flex items-center">
                          <Paperclip className="h-4 w-4 mr-2 text-muted-foreground" />
                          <div>
                            <p className="text-sm font-medium">{attachment.name}</p>
                            <p className="text-xs text-muted-foreground">
                              {attachment.size} • Uploaded by {attachment.uploadedBy.name}
                            </p>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">
                          Download
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          <Tabs defaultValue="comments">
            <TabsList className="mb-4">
              <TabsTrigger value="comments">
                <MessageSquare className="h-4 w-4 mr-2" />
                Comments
              </TabsTrigger>
              <TabsTrigger value="history">
                <Clock className="h-4 w-4 mr-2" />
                History
              </TabsTrigger>
            </TabsList>

            <TabsContent value="comments">
              <Card>
                <CardContent className="p-4 space-y-4">
                  {task.comments.map((comment, index) => (
                    <CommentItem key={index} comment={comment} />
                  ))}

                  <div className="pt-4 border-t">
                    <Textarea
                      placeholder="Add a comment..."
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      className="mb-2"
                    />
                    <div className="flex justify-end">
                      <Button onClick={handleAddComment} disabled={!newComment.trim()}>
                        Add Comment
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="history">
              <Card>
                <CardContent className="p-4">
                  <div className="space-y-4">
                    {task.history.map((item, index) => (
                      <div key={index} className="flex space-x-3">
                        <UserAvatar user={item.user} size="sm" className="flex-shrink-0 mt-1" />
                        <div>
                          <div className="flex items-center">
                            <span className="font-medium mr-2">{item.user.name}</span>
                            <span className="text-xs text-muted-foreground">
                              {format(new Date(item.timestamp), "MMM d, yyyy 'at' h:mm a")}
                            </span>
                          </div>
                          <p className="text-sm">{item.action}</p>
                          {item.details && <p className="text-sm text-muted-foreground">{item.details}</p>}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-sm text-muted-foreground mb-1">Status</h3>
                <div className="flex items-center">
                  {statusIcon[task.status]}
                  <span className="font-medium">
                    {task.status
                      .split("-")
                      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                      .join(" ")}
                  </span>
                </div>
              </div>

              <div>
                <h3 className="text-sm text-muted-foreground mb-1">Priority</h3>
                <span className={cn("text-xs px-2 py-0.5 rounded-full", priorityClasses[task.priority])}>
                  {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
                </span>
              </div>

              <div>
                <h3 className="text-sm text-muted-foreground mb-1">Due Date</h3>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span>{task.dueDate}</span>
                </div>
              </div>

              <div>
                <h3 className="text-sm text-muted-foreground mb-1">Assignee</h3>
                {task.assignee ? (
                  <div className="flex items-center">
                    <UserAvatar user={task.assignee} size="sm" className="mr-2" />
                    <span>{task.assignee.name}</span>
                  </div>
                ) : (
                  <div className="flex items-center text-muted-foreground">
                    <UserIcon className="h-4 w-4 mr-2" />
                    <span>Unassigned</span>
                  </div>
                )}
              </div>

              {task.timeTracking && (
                <div>
                  <h3 className="text-sm text-muted-foreground mb-1">Time Tracking</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Spent</span>
                      <span className="font-medium">{formatTimeSpent(task.timeTracking.spent)}</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="h-2 rounded-full bg-blue-500"
                        style={{
                          width: `${Math.min(100, (task.timeTracking.spent / task.timeTracking.estimated) * 100)}%`,
                        }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Estimated</span>
                      <span>{formatTimeSpent(task.timeTracking.estimated)}</span>
                    </div>
                  </div>
                </div>
              )}

              <div>
                <h3 className="text-sm text-muted-foreground mb-1">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {task.tags.map((tag, index) => (
                    <span key={index} className="text-xs px-2 py-0.5 bg-muted rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                <Edit className="h-4 w-4 mr-2" />
                Edit Details
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}

