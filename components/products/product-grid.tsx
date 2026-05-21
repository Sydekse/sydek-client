import type { StaticImageData } from "next/image";

import reactOriginal from "devicon/icons/react/react-original.svg";
import nextjsOriginal from "devicon/icons/nextjs/nextjs-original.svg";
import typescriptOriginal from "devicon/icons/typescript/typescript-original.svg";
import tailwindcssOriginal from "devicon/icons/tailwindcss/tailwindcss-original.svg";
import nodejsOriginal from "devicon/icons/nodejs/nodejs-original.svg";
import goOriginal from "devicon/icons/go/go-original.svg";
import nestjsOriginal from "devicon/icons/nestjs/nestjs-original.svg";
import postgresqlOriginal from "devicon/icons/postgresql/postgresql-original.svg";
import prismaOriginal from "devicon/icons/prisma/prisma-original.svg";
import turboOriginal from "devicon/icons/turbo/turbo-original.svg";
import bunOriginal from "devicon/icons/bun/bun-original.svg";
import axiosPlain from "devicon/icons/axios/axios-plain.svg";
import grpcPlain from "devicon/icons/grpc/grpc-plain.svg";
import mongooseOriginal from "devicon/icons/mongoose/mongoose-original.svg";
import oauthOriginal from "devicon/icons/oauth/oauth-original.svg";
import datatablesOriginal from "devicon/icons/datatables/datatables-original.svg";
import veevalidateOriginal from "devicon/icons/veevalidate/veevalidate-original.svg";
import jsonOriginal from "devicon/icons/json/json-original.svg";
import elasticsearchOriginal from "devicon/icons/elasticsearch/elasticsearch-original.svg";
import pytorchOriginal from "devicon/icons/pytorch/pytorch-original.svg";
import css3Original from "devicon/icons/css3/css3-original.svg";
import feathersOriginal from "devicon/icons/feathersjs/feathersjs-original.svg";
import awsOriginalWordmark from "devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg";
import supabaseOriginal from "devicon/icons/supabase/supabase-original.svg";
import firebaseOriginal from "devicon/icons/firebase/firebase-plain.svg";
import mongodbOriginal from "devicon/icons/mongodb/mongodb-original.svg";
import graphqlPlain from "devicon/icons/graphql/graphql-plain.svg";
import vercelOriginal from "devicon/icons/vercel/vercel-original.svg";
import slackOriginal from "devicon/icons/slack/slack-original.svg";
import openapiOriginal from "devicon/icons/openapi/openapi-original.svg";

import { cn } from "@/lib/utils";
import ProductCard, {
  type ProductBentoCardProps,
  type ProductBentoLogosProps,
  type ProductBentoTechProps,
} from "./product-card";

/** `devicon` SVG assets imported inside this grid (resolved at bundle time). */
const DEVICON_BUNDLES: Record<string, StaticImageData | string> = {
  react: reactOriginal as StaticImageData,
  nextjs: nextjsOriginal as StaticImageData,
  typescript: typescriptOriginal as StaticImageData,
  tailwindcss: tailwindcssOriginal as StaticImageData,
  nodejs: nodejsOriginal as StaticImageData,
  go: goOriginal as StaticImageData,
  nestjs: nestjsOriginal as StaticImageData,
  postgresql: postgresqlOriginal as StaticImageData,
  prisma: prismaOriginal as StaticImageData,
  turbo: turboOriginal as StaticImageData,
  bun: bunOriginal as StaticImageData,
  axios: axiosPlain as StaticImageData,
  grpc: grpcPlain as StaticImageData,
  /** No separate Protobuf sprite in Devicon — gRPC tooling pair. */
  protobuf: grpcPlain as StaticImageData,
  mongoose: mongooseOriginal as StaticImageData,
  oauth: oauthOriginal as StaticImageData,
  datatables: datatablesOriginal as StaticImageData,
  veevalidate: veevalidateOriginal as StaticImageData,
  json: jsonOriginal as StaticImageData,
  elasticsearch: elasticsearchOriginal as StaticImageData,
  pytorch: pytorchOriginal as StaticImageData,
  css3: css3Original as StaticImageData,
  feathersjs: feathersOriginal as StaticImageData,
  aws: awsOriginalWordmark as StaticImageData,
  supabase: supabaseOriginal as StaticImageData,
  firebase: firebaseOriginal as StaticImageData,
  mongodb: mongodbOriginal as StaticImageData,
  graphql: graphqlPlain as StaticImageData,
  vercel: vercelOriginal as StaticImageData,
  slack: slackOriginal as StaticImageData,
  openapi: openapiOriginal as StaticImageData,
};

export type ProductGridTile = ProductBentoCardProps & {
  id: string;
  gridClassName?: string;
};

const DEVICON_SCHEME = /^devicon:([a-z0-9-]+)$/i;

function finalizeAssetUrl(asset: StaticImageData | string): string {
  return typeof asset === "string" ? asset : asset.src;
}

/** Resolve `"devicon:slug"` tokens to hashed asset URLs consumed by `next/image`. */
export function resolveDeviconSrc(src: string): string {
  const match = DEVICON_SCHEME.exec(src.trim());
  if (!match) return src;

  const key = match[1].toLowerCase();
  const mod = DEVICON_BUNDLES[key];
  return mod !== undefined ? finalizeAssetUrl(mod) : src;
}

function hydrateTiles(tiles: ProductGridTile[]): ProductGridTile[] {
  return tiles.map((tile): ProductGridTile => {
    if (tile.variant === "tech") {
      const t = tile as ProductBentoTechProps;
      return {
        ...tile,
        technologies: t.technologies.map((tech) =>
          tech.logoSrc
            ? { ...tech, logoSrc: resolveDeviconSrc(tech.logoSrc) }
            : tech
        ),
      };
    }

    if (tile.variant === "logos") {
      const g = tile as ProductBentoLogosProps;
      return {
        ...tile,
        logos: g.logos.map((logo) => ({
          ...logo,
          src: resolveDeviconSrc(logo.src),
        })),
      };
    }

    return tile;
  });
}

interface ProductGridProps {
  tiles: ProductGridTile[];
  className?: string;
}

export default function ProductGrid({ tiles, className }: ProductGridProps) {
  const ready = hydrateTiles(tiles);

  return (
    <section className={cn("w-full py-14 md:py-24", className)}>
      <div className="mx-auto max-w-terrava px-[clamp(1rem,4vw,4rem)]">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:auto-rows-auto md:gap-5">
          {ready.map(({ id, gridClassName, ...card }) => (
            <div key={id} className={cn("min-h-0 md:min-h-0", gridClassName)}>
              <ProductCard {...card} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
