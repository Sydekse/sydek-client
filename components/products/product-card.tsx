import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type CardShellProps = {
  children: ReactNode;
  className?: string;
};

function CardShell({ children, className }: CardShellProps) {
  return (
    <div
      className={cn(
        "relative flex h-full min-h-0 flex-col overflow-hidden rounded-3xl border border-border/60 bg-background shadow-[0_18px_48px_-28px_rgba(15,23,42,0.35)] dark:bg-card dark:shadow-[0_18px_48px_-28px_rgba(0,0,0,0.6)]",
        className
      )}
    >
      {children}
    </div>
  );
}

export type ProductBentoFeaturedProps = {
  variant: "featured";
  title: string;
  description: string;
  imageUrl: string;
  tag?: string;
  href?: string;
  external?: boolean;
  features?: string[];
  ctaLabel?: string;
};

export type ProductBentoStatProps = {
  variant: "stat";
  value: string;
  label: string;
  description?: string;
};

export type ProductBentoLogosProps = {
  variant: "logos";
  eyebrow?: string;
  logos: { name: string; src: string }[];
};

export type ProductBentoQuoteProps = {
  variant: "quote";
  productLabel: string;
  quote: string;
  attribution: string;
  role?: string;
};

export type ProductBentoTechProps = {
  variant: "tech";
  title: string;
  technologies: { name: string; logoSrc?: string }[];
};

export type ProductBentoCardProps =
  | ProductBentoFeaturedProps
  | ProductBentoStatProps
  | ProductBentoLogosProps
  | ProductBentoQuoteProps
  | ProductBentoTechProps;

export type ProductCardProps = ProductBentoCardProps & {
  className?: string;
};

function FeaturedCard({
  title,
  description,
  imageUrl,
  tag,
  href,
  external,
  features = [],
  ctaLabel = "Visit product",
  className,
}: ProductBentoFeaturedProps & { className?: string }) {
  const body = (
    <>
      <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden bg-muted/40 dark:bg-muted/25">
        <Image
          src={imageUrl}
          alt={title}
          fill
          sizes="(max-width:768px) 100vw, 600px"
          className="object-cover object-top"
        />
      </div>
      <div className="flex flex-1 flex-col p-6 md:p-8">
        {tag ? (
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-secondary">
            {tag}
          </p>
        ) : null}
        <h3 className="text-xl font-semibold tracking-tight md:text-2xl">
          {title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
          {description}
        </p>
        {features.length > 0 ? (
          <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
            {features.slice(0, 4).map((f) => (
              <li key={f} className="flex gap-2">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-secondary" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        ) : null}
        <div className="mt-auto pt-6">
          {href ? (
            <Button
              asChild
              variant="secondary"
              className="w-full rounded-full sm:w-auto"
            >
              <Link
                href={href}
                {...(external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {ctaLabel}
                {external ? (
                  <ExternalLink className="ml-2 h-4 w-4" aria-hidden />
                ) : (
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                )}
              </Link>
            </Button>
          ) : (
            <Button
              variant="secondary"
              className="w-full rounded-full sm:w-auto"
              disabled
            >
              {ctaLabel}
            </Button>
          )}
        </div>
      </div>
    </>
  );

  return <CardShell className={className}>{body}</CardShell>;
}

function StatCard({
  value,
  label,
  description,
  className,
}: ProductBentoStatProps & { className?: string }) {
  return (
    <CardShell
      className={cn(
        "justify-between bg-muted/25 p-6 md:p-8 dark:bg-muted/15",
        className
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35] dark:opacity-25"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--border) / 0.35) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--border) / 0.35) 1px, transparent 1px)
          `,
          backgroundSize: "18px 18px",
        }}
      />
      <div className="relative">
        <p className="font-display text-5xl font-semibold tracking-tight text-foreground md:text-6xl">
          {value}
        </p>
        <p className="mt-3 text-base font-medium text-foreground">{label}</p>
      </div>
      {description ? (
        <p className="relative mt-8 text-sm leading-relaxed text-muted-foreground md:mt-auto">
          {description}
        </p>
      ) : null}
    </CardShell>
  );
}

function LogosCard({
  eyebrow,
  logos,
  className,
}: ProductBentoLogosProps & { className?: string }) {
  return (
    <CardShell className={cn("p-5 md:p-6", className)}>
      {eyebrow ? (
        <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          {eyebrow}
        </p>
      ) : null}
      <div className="flex flex-wrap items-center gap-x-5 gap-y-4">
        {logos.map((logo) => (
          <div
            key={logo.name}
            className="relative h-9 w-[4.5rem] shrink-0 opacity-90 grayscale transition-opacity hover:opacity-100 hover:grayscale-0 dark:opacity-80"
          >
            <Image
              src={logo.src}
              alt={logo.name}
              fill
              sizes="72px"
              className="object-contain object-left"
            />
          </div>
        ))}
      </div>
    </CardShell>
  );
}

function QuoteCard({
  productLabel,
  quote,
  attribution,
  role,
  className,
}: ProductBentoQuoteProps & { className?: string }) {
  return (
    <CardShell className={cn("justify-between p-6 md:p-7", className)}>
      <div
        className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full bg-gradient-to-br from-orange-400/35 via-rose-400/25 to-transparent blur-3xl dark:from-orange-500/25 dark:via-rose-500/15"
        aria-hidden
      />
      <div className="relative">
        <p className="text-sm font-semibold text-foreground">{productLabel}</p>
        <blockquote className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
          &ldquo;{quote}&rdquo;
        </blockquote>
      </div>
      <footer className="relative mt-6 text-sm text-muted-foreground">
        <span className="font-medium text-foreground">— {attribution}</span>
        {role ? (
          <>
            {" "}
            <span className="text-muted-foreground">{role}</span>
          </>
        ) : null}
      </footer>
    </CardShell>
  );
}

function TechCard({
  title,
  technologies,
  className,
}: ProductBentoTechProps & { className?: string }) {
  return (
    <CardShell
      className={cn(
        "flex-row flex-wrap items-center gap-6 p-6 md:p-8",
        className
      )}
    >
      <h3 className="max-w-[11rem] text-lg font-semibold tracking-tight md:text-xl">
        {title}
      </h3>
      <div className="flex min-w-0 flex-1 flex-wrap items-center justify-start gap-x-5 gap-y-4 md:justify-end md:gap-x-8">
        {technologies.map((t) => (
          <div
            key={t.name}
            className="flex items-center justify-center text-muted-foreground"
            title={t.name}
          >
            {t.logoSrc ? (
              <span className="relative block h-10 w-10 shrink-0 md:h-11 md:w-11">
                <Image
                  src={t.logoSrc}
                  alt={t.name}
                  fill
                  sizes="44px"
                  className="object-contain"
                />
              </span>
            ) : (
              <span
                aria-label={t.name}
                className="flex h-10 min-w-[2.5rem] items-center justify-center rounded-lg border border-border/70 bg-muted/40 px-2 text-xs font-semibold uppercase tracking-wide text-foreground dark:bg-muted/20"
              >
                {t.name.slice(0, 2)}
              </span>
            )}
          </div>
        ))}
      </div>
    </CardShell>
  );
}

export default function ProductCard(props: ProductCardProps) {
  const { className, ...rest } = props;

  switch (rest.variant) {
    case "featured":
      return <FeaturedCard {...rest} className={className} />;
    case "stat":
      return <StatCard {...rest} className={className} />;
    case "logos":
      return <LogosCard {...rest} className={className} />;
    case "quote":
      return <QuoteCard {...rest} className={className} />;
    case "tech":
      return <TechCard {...rest} className={className} />;
    default:
      return null;
  }
}
