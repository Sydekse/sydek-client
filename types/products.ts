export interface ProductShowcaseItem {
  /** Stable key for emphasis / refs (defaults to title when omitted). */
  id?: string;
  title: string;
  description: string;
  image: string;
  category: string;
  /** Primary carousel link — often live URL unless you override mapping in page data. */
  link: string;
  /** When set, cards and grids should prefer `/company/case-studies/[id]` for this slug. */
  caseStudyId?: string;
  /** External demo URL shown when `selectionMode` splits primary select vs links (e.g. live app). */
  liveUrl?: string;
}
