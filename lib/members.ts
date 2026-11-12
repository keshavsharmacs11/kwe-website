
export type MemberSocialPlatform =
  | "instagram"
  | "linkedin"
  | "facebook"
  | "youtube";

export type MemberSocialLink = {
  platform: MemberSocialPlatform;
  label: string;
  href: string;
};

export type KweMember = {
  id: string;
  name: string;

  /** Use only a verified public role or designation. */
  role?: string;

  /** Use only a verified public business name. */
  business?: string;

  location?: string;
  image: string;
  imageAlt: string;

  /** Optional short profile text. Leave empty until verified. */
  bio?: string;

  socials: MemberSocialLink[];
};

/**
 * Public member profiles used by the homepage spotlight and member directory.
 * Add business details and public social links only after they are confirmed.
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

  {
    id: "dr-monika-rohilla",
    name: "Dr. Monika Rohilla",
    role: "KWE Member",
    image: "/images/members/dr-monika-rohilla.png",
    imageAlt: "Dr. Monika Rohilla, KWE community member",
    socials: [],
  },

  {
    id: "kavita-arora",
    name: "Kavita Arora",
    role: "KWE Member",
    image: "/images/members/kavita-arora.jpg",
    imageAlt: "Kavita Arora, KWE community member",
    socials: [],
  },

  {
    id: "yashika",
    name: "Yashika",
    role: "KWE Member",
    image: "/images/members/yashika.jpeg",
    imageAlt: "Yashika, KWE community member",
    socials: [],
  },
];
