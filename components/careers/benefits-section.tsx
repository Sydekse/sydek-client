import type { Benefit } from "./types";
import Image from "next/image";

interface BenefitsSectionProps {
  title: string;
  description: string;
  benefits: Benefit[];
  imageSrc: string;
  imageAlt: string;
}

export function BenefitsSection({
  title,
  description,
  benefits,
  imageSrc,
  imageAlt,
}: BenefitsSectionProps) {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {title.split(" ").map((word, i, arr) =>
                i === arr.length - 1 ? (
                  <span key={i} className="text-gradient">
                    {word}
                  </span>
                ) : (
                  <span key={i}>{word} </span>
                )
              )}
            </h2>
            <p className="text-lg mb-6">{description}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-muted/30 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl border shadow-xl">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-secondary rounded-lg p-4 shadow-lg">
              <p className="text-white font-bold">Join our growing team</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
