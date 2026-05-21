/** Extend this list when adding PNGs under public/assets/images/logos/ */
export type LogoMarqueeEntry = { src: string; name: string };

export const LOGO_MARQUEE_ITEMS: LogoMarqueeEntry[] = [
  { src: "/assets/images/logos/wegenie.png", name: "Wegenie" },
  { src: "/assets/images/logos/liyu.png", name: "Liyu" },
  { src: "/assets/images/logos/om.png", name: "Organic Millstone" },
  { src: "/assets/images/logos/fetan.png", name: "Fetan" },
  { src: "/assets/images/logos/post.png", name: "Post Gallery" },
  { src: "/assets/images/logos/diplomat.png", name: "Diplomat Corner" },
];
