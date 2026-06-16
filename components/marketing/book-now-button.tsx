import Link from "next/link";
import Image from "next/image";
import { SCHEDULE_PAGE_PATH } from "@/lib/booking";
import { cn } from "@/lib/utils";

const MEET_ICON = "/assets/images/icons/google_meet.png";

export interface BookNowButtonProps {
  href?: string;
  className?: string;
  /** Compact sizing for the navbar pill */
  size?: "sm" | "md";
  onClick?: () => void;
}

export function BookNowButton({
  href = SCHEDULE_PAGE_PATH,
  className,
  size = "sm",
  onClick,
}: BookNowButtonProps) {
  const iconSize = size === "sm" ? 18 : 20;

  const inner = (
    <>
      <span
        className={cn(
          "flex shrink-0 items-center justify-center rounded-full bg-white shadow-sm",
          size === "sm" ? "h-8 w-8" : "h-9 w-9"
        )}
        aria-hidden
      >
        <Image
          src={MEET_ICON}
          alt=""
          width={iconSize}
          height={iconSize}
          className="object-contain"
        />
      </span>
      <span>Book now</span>
    </>
  );

  const classes = cn(
    "inline-flex items-center gap-2.5 rounded-full border border-secondary/20 bg-secondary font-medium text-secondary-foreground shadow-[0_4px_14px_hsl(var(--secondary)/0.28)] transition-all hover:bg-secondary/90 hover:shadow-[0_6px_18px_hsl(var(--secondary)/0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2",
    size === "sm" ? "py-1 pl-1.5 pr-4 text-sm" : "py-1.5 pl-2 pr-5 text-base",
    className
  );

  return (
    <Link href={href} className={classes} onClick={onClick}>
      {inner}
    </Link>
  );
}
