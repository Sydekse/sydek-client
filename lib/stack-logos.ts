/**
 * Tokens for logos used in ProductGrid bento tiles. Entries prefixed `devicon:`
 * are resolved to bundled SVGs from the `devicon` package inside
 * `@/components/products/product-grid.tsx`. Plain paths ship from `/public` or CDN.
 */
export const STACK_LOGOS = {
  react: "devicon:react",
  nextjs: "devicon:nextjs",
  typescript: "devicon:typescript",
  tailwindcss: "devicon:tailwindcss",
  nodejs: "devicon:nodejs",
  go: "devicon:go",
  nestjs: "devicon:nestjs",
  postgresql: "devicon:postgresql",
  prisma: "devicon:prisma",
  turbo: "devicon:turbo",
  bun: "devicon:bun",
  axios: "devicon:axios",
  grpc: "devicon:grpc",
  protobuf: "devicon:protobuf",
  mongoose: "devicon:mongoose",
  oauth: "devicon:oauth",
  datatables: "devicon:datatables",
  veevalidate: "devicon:veevalidate",
  json: "devicon:json",
  elasticsearch: "devicon:elasticsearch",
  pytorch: "devicon:pytorch",
  css3: "devicon:css3",
  feathersjs: "devicon:feathersjs",
  openai: "/assets/images/stack/openai.svg",
  aws: "devicon:aws",
  supabase: "devicon:supabase",
  firebase: "devicon:firebase",
  mongodb: "devicon:mongodb",
  graphql: "devicon:graphql",
  vercel: "devicon:vercel",
  slack: "devicon:slack",
  openapi: "devicon:openapi",
  stripe: "/assets/images/products/stripe.png",
} as const;

export type StackLogoKey = keyof typeof STACK_LOGOS;
