export interface SectionSplitHeaderProps {
  eyebrow: string;
  title: string;
  description: string;
  className?: string;
}

export function SectionSplitHeader({
  eyebrow,
  title,
  description,
  className = "",
}: SectionSplitHeaderProps) {
  return (
    <div
      className={`mx-auto mb-12 max-w-terrava px-[clamp(1.5rem,5vw,5rem)] md:mb-16 ${className}`}
    >
      <div className="grid gap-8 lg:grid-cols-12 lg:gap-12 lg:items-start">
        <div className="lg:col-span-5">
          <p className="font-body mb-4 inline-block rounded-[var(--radius-terrava-pill)] bg-muted px-3 py-1 text-[length:var(--text-eyebrow)] font-normal tracking-[var(--tracking-eyebrow)] text-muted-foreground">
            {eyebrow}
          </p>
          <h2
            className="font-display text-foreground text-[length:var(--text-h1)] font-normal leading-[1.05] tracking-[var(--tracking-tight)]"
          >
            {title}
          </h2>
        </div>
        <p className="font-body lg:col-span-4 lg:col-start-8 text-[length:var(--text-body-sm)] leading-[var(--leading-body)] text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  );
}
