
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
  businessLogo?: string;
  businessLogoAlt?: string;
  location?: string;
  image: string;
  imageAlt: string;
  bio?: string;
  socials: MemberSocialLink[];
};

export const members: KweMember[] = [
  {
    id: "dr-monika-rohilla",
    name: "Dr. Monika Rohilla",
    role: "KWE Member",
    business: "Advance Study Sector",
    image: "/images/members/dr-monika-rohilla.png",
    imageAlt: "Dr. Monika Rohilla, KWE community member",
    socials: [
      {
        platform: "instagram",
        label: "@advancestudysectorkkr",
        href: "https://www.instagram.com/advancestudysectorkkr/",
      },
    ],
  },

  {
    id: "kavita-arora",
    name: "Kavita Arora",
    role: "KWE Member",
    business: "Kavi's Makeup Studio",
    businessLogo: "/images/sponsors/kavis-makeup-studio.png",
    businessLogoAlt: "Kavi's Makeup Studio logo",
    image: "/images/members/kavita-arora.jpg",
    imageAlt: "Kavita Arora, KWE community member",
    socials: [
      {
        platform: "instagram",
        label: "@kavismakeupstudiokkr",
        href: "https://www.instagram.com/kavismakeupstudiokkr/",
      },
    ],
  },

  {
    id: "yashika",
    name: "Yashika",
    role: "KWE Member",
    business: "YR IT Solutions",
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
