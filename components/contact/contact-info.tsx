import type { ReactNode } from "react";
import Link from "next/link";
import { MapPin, MessageCircle, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/** Primary listing line (`tel:` must be digits/+ only). */
const PHONE_PRIMARY = {
  tel: "+251912983759",
  display: "+251 91 · 298 · 3759",
};

const PHONE_MORE = ["+251 91 197 1885", "+251 71 278 5587"];

const EMAIL_PRIMARY = "info@sydek.dev";
const EMAIL_SECONDARY = "contact@sydek.dev";

const OFFICE_LINES = [
  "Dembel, Haile Kebede Building, 3rd floor, office 302",
  "Addis Ababa, Ethiopia",
];

const MAPS_DIRECTIONS_URL =
  "https://maps.app.goo.gl/4ayQTJ4fuUrXAkES8";

function ContactDirectCard({
  label,
  value,
  belowValue,
  valueClassName,
  icon,
  className,
  iconBoxClassName,
  labelClassName,
  children,
}: {
  label: string;
  value: ReactNode;
  belowValue?: ReactNode;
  valueClassName?: string;
  icon: ReactNode;
  className?: string;
  iconBoxClassName?: string;
  labelClassName?: string;
  children?: ReactNode;
}) {
  return (
    <article
      className={cn(
        "flex flex-col rounded-[1.375rem] p-8 shadow-sm md:p-9",
        className
      )}
    >
      <div className="mb-6 flex items-start gap-3 md:gap-4">
        <div
          className={cn(
            "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-background shadow-[0_1px_3px_rgba(0,0,0,.08)]",
            iconBoxClassName
          )}
        >
          {icon}
        </div>
        <p
          className={cn(
            "font-display pt-2 text-[0.9375rem] font-medium tracking-tight",
            labelClassName
          )}
        >
          {label}
        </p>
      </div>
      <div
        className={cn(
          "font-display text-[clamp(1.625rem,4.5vw,2.375rem)] font-semibold leading-tight tracking-[var(--tracking-tight)]",
          valueClassName
        )}
      >
        {value}
      </div>
      {belowValue ? <div className="mt-3">{belowValue}</div> : null}
      {children !== undefined ? <div className="mt-8">{children}</div> : null}
    </article>
  );
}

export default function ContactInfo() {
  return (
    <div className="space-y-5">
      <ContactDirectCard
        className="bg-secondary text-secondary-foreground ring-1 ring-black/5 dark:ring-white/10"
        labelClassName="text-secondary-foreground/95"
        valueClassName="text-secondary-foreground"
        label="Call Us Directly At"
        value={<span>{PHONE_PRIMARY.display}</span>}
        belowValue={
          PHONE_MORE.length ? (
            <p className="text-sm text-secondary-foreground/75">
              {PHONE_MORE.join(" · ")}
            </p>
          ) : undefined
        }
        icon={
          <Phone className="h-[1.35rem] w-[1.35rem] text-secondary" strokeWidth={2} aria-hidden />
        }
      >
        <Button
          asChild
          size="lg"
          variant="outline"
          className="h-12 w-full rounded-full border-0 bg-white/25 text-secondary-foreground shadow-none hover:bg-white/35 hover:text-secondary-foreground"
        >
          <a href={`tel:${PHONE_PRIMARY.tel}`}>Contact Us</a>
        </Button>
      </ContactDirectCard>

      <ContactDirectCard
        className="bg-muted text-foreground ring-1 ring-border/80 dark:bg-muted/40 dark:ring-border"
        labelClassName="text-foreground"
        valueClassName="text-foreground"
        iconBoxClassName="border border-border/60 bg-background shadow-sm"
        label="Chat With Our Team"
        value={
          <a
            className="inline-block underline-offset-4 hover:underline hover:opacity-90"
            href={`mailto:${EMAIL_PRIMARY}`}
          >
            {EMAIL_PRIMARY}
          </a>
        }
        belowValue={
          <p className="text-sm text-muted-foreground">{EMAIL_SECONDARY}</p>
        }
        icon={
          <MessageCircle
            className="h-[1.35rem] w-[1.35rem] text-foreground"
            strokeWidth={2}
            aria-hidden
          />
        }
      >
      
      </ContactDirectCard>

      <ContactDirectCard
        className="bg-muted text-foreground ring-1 ring-border/80 dark:bg-muted/40 dark:ring-border"
        labelClassName="text-foreground"
        iconBoxClassName="border border-border/60 bg-background shadow-sm"
        label="Visit Our Office"
        valueClassName="contents"
        value={
          <address className="not-italic">
            <span className="block font-display text-[clamp(1.25rem,3.25vw,1.85rem)] font-semibold leading-tight tracking-[var(--tracking-tight)] text-pretty">
              {OFFICE_LINES[0]}
            </span>
            <span className="mt-3 block font-display text-base font-medium text-muted-foreground">
              {OFFICE_LINES[1]}
            </span>
          </address>
        }
        icon={
          <MapPin
            className="h-[1.35rem] w-[1.35rem] text-foreground"
            strokeWidth={2}
            aria-hidden
          />
        }
      >
        <Button
          asChild
          size="lg"
          className="h-12 w-full rounded-full bg-foreground/12 text-foreground shadow-none hover:bg-foreground/[0.16] hover:text-foreground dark:bg-background/70 dark:hover:bg-background/85"
        >
          <Link
            href={MAPS_DIRECTIONS_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Get directions
          </Link>
        </Button>
      </ContactDirectCard>
    </div>
  );
}
