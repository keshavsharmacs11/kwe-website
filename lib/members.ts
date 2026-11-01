export type MemberSocialPlatform = "instagram" | "linkedin" | "facebook" | "youtube";

export type MemberSocialLink = {
  platform: MemberSocialPlatform;
  label: string;
  href: string;
};

export type KweMember = {
  id: string;
  name: string;
  role: string;
  business: string;
  location?: string;
  image: string;
  imageAlt: string;
  bio: string;
  socials: MemberSocialLink[];
};

/**
 * Public member profiles shown on the KWE website.
 * Add a portrait and verified public social URLs before publishing a profile.
 */
export const members: KweMember[] = [
  {
    id: "bharti-sharma",
    name: "Bharti Sharma",
    role: "CEO",
    business: "Labelaado",
    location: "Kurukshetra, Haryana",
    image: "/images/bharti-sharma.webp",
    imageAlt: "Bharti Sharma, CEO of Labelaado",
    bio: "Founder and CEO of Labelaado, a clothing brand established in 2017 in Radaur and based in Kurukshetra. Labelaado creates customised clothing for men, women and children, bringing distinctive designs together with personal style for every occasion.",
    socials: [
      {
        platform: "instagram",
        label: "@labelaado_333",
        href: "https://www.instagram.com/labelaado_333/",
      },
    ],
  },
];
