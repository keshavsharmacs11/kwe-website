
export type KweSponsor = {
  id: string;
  name: string;
  logo: string;
  website?: string;
  tier?: string;
};

/**
 * KWE sponsors and collaboration partners.
 * Logo files are stored in public/images/sponsors/
 */
export const sponsors: KweSponsor[] = [
  {
  id: "kwe",
  name: "Kurukshetra Women Entrepreneurs",
  logo: "/images/sponsors/kurukshetra-women-entrepreneurs.png", 
  },
  {
    id: "advance-study-sector",
    name: "Advance Study Sector",
    logo: "/images/sponsors/advance-study-sector.png",
  },
  {
    id: "kavis-makeup-studio",
    name: "Kavi's Makeup Studio",
    logo: "/images/sponsors/kavis-makeup-studio.png",
  },
  {
    id: "yr-it-solutions",
    name: "YR IT Solutions",
    logo: "/images/sponsors/yr-it-solutions.png",
  },
];
