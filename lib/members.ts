
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
  role?: string;
  business?: string;
  location?: string;
  image: string;
  imageAlt: string;
  bio?: string;
  socials: MemberSocialLink[];
};

/**
 * Public member profiles used by the homepage spotlight
 * and complete members directory.
 */

export const members: KweMember[] = [
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
    socials: [
      {
        platform: "instagram",
        label: "@yritsolutions2025",
        href: "https://www.instagram.com/yritsolutions2025/",
      },
    ],
  },
];
