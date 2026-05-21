import Image from "next/image";
import Link from "next/link";

export interface ShowcaseCardProps {
  tag: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
  href?: string;
  external?: boolean;
  className?: string;
  /** Override default portrait showcase dimensions (e.g. featured strip). */
  frameClassName?: string;
}

export function ShowcaseCard({
  tag,
  title,
  description,
  imageSrc,
  imageAlt = "",
  href,
  external,
  className = "",
  frameClassName,
}: ShowcaseCardProps) {
  const inner = (
    <>
      <div className="absolute inset-0 -z-10">
        <Image
          src={imageSrc}
          alt={imageAlt || title}
          fill
          className="object-cover transition-transform duration-300 terrava-ease-out group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 85vw, 320px"
        />
      </div>
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ background: "var(--overlay-showcase)" }}
      />
      <span className="absolute left-4 top-4 z-10 rounded-[var(--radius-terrava-pill)] bg-white/85 px-2.5 py-1 font-body text-[0.65rem] font-medium tracking-[var(--tracking-eyebrow)] text-zinc-900">
        {tag}
      </span>
      <div className="relative z-10 mt-auto flex flex-col gap-2 p-4 pt-16 md:p-5 md:pt-20">
        <h3
          className="font-display text-[length:var(--text-card-title)] font-medium leading-[1.15] text-white"
        >
          {title}
        </h3>
        <p className="line-clamp-2 font-body text-[length:var(--text-card-body)] leading-normal text-white/[0.82]">
          {description}
        </p>
      </div>
    </>
  );

  const frame =
    frameClassName ??
    "aspect-[4/5] w-[min(85vw,320px)] shrink-0 md:w-[280px]";

  const cardClassName = `group relative flex snap-center flex-col overflow-hidden rounded-[1rem] shadow-[var(--shadow-terrava-card)] transition-transform duration-200 terrava-ease-out hover:-translate-y-1 ${frame} ${className}`;

  if (href) {
    return (
      <Link
        href={href}
        className={cardClassName}
        {...(external
          ? { target: "_blank" as const, rel: "noopener noreferrer" }
          : {})}
      >
        {inner}
      </Link>
    );
  }

  return <div className={cardClassName}>{inner}</div>;
}
