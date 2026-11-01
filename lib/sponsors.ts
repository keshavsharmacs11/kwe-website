export type KweSponsor = {
  id: string;
  name: string;
  logo: string;
  website?: string;
  tier?: string;
};

/**
 * Add approved sponsor/partner logos here. Use transparent SVG, WebP or PNG
 * files placed in public/images/sponsors/ and provide a real website URL when
 * one has been confirmed. The carousel intentionally renders no invented logos.
 */
export const sponsors: KweSponsor[] = [
  {
    id: "brand-one",
    name: "hotstar",
    logo: "/images/sponsors/jio.png",
    website: "hotstar.com/in ",
  },
  {
    id: "brand-two",
    name: "Nivea",
    logo: "/images/sponsors/nivea.png",
    website: "https://www.nivea.in/",
  },
  {
    id: "brand-three",
    name: "adidas",
    logo: "/images/sponsors/adidas.png",
    website: "https://www.nivea.in/",
  },
  {
    id: "brand-four",
    name: "Amazon",
    logo: "/images/sponsors/amazon.png",
    website: "https://www.nivea.in/",
  },
];