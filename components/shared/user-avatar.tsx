import type { User } from "@/types/user"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

export interface UserAvatarProps {
  user: User | string
  size?: "sm" | "md"
  showStatus?: boolean
  className?: string
}

function toUser(user: User | string): User {
  if (typeof user !== "string") return user
  return { id: user, name: user, email: "", role: "Team", status: "offline" }
}

function getInitials(name: string): string {
  return name
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase()
}

const statusColors: Record<User["status"], string> = {
  online: "bg-green-500",
  away: "bg-amber-500",
  offline: "bg-muted-foreground",
}

export function UserAvatar({ user, size = "md", showStatus = true, className }: UserAvatarProps) {
  const resolved = toUser(user)

  return (
    <div className={cn("relative inline-flex", className)}>
      <Avatar className={cn(size === "sm" ? "h-6 w-6" : "h-10 w-10")}>
        <AvatarFallback className={cn("text-xs font-medium", size === "sm" && "text-[10px]")}>
          {getInitials(resolved.name)}
        </AvatarFallback>
      </Avatar>
      {showStatus && (
        <span
          className={cn(
            "absolute bottom-0 right-0 rounded-full border-2 border-background",
            statusColors[resolved.status],
            size === "sm" ? "h-2 w-2" : "h-2.5 w-2.5",
          )}
          aria-label={resolved.status}
        />
      )}
    </div>
  )
}
