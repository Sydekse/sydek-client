declare module "*.svg" {
  import type { StaticImageData } from "next/image";

  /** Next bundles SVG as a static asset with width/height in dev; may be plain string depending on toolchain. */
  const content: StaticImageData | string;
  export default content;
}
