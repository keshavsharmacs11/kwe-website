/**
 * KWE homepage announcements.
 *
 * To feature a real livestream, update a slide's status to "live" and provide
 * the verified livestream URL in `liveUrl`. Never mark an event live before
 * the stream is actually running.
 */
export type AnnouncementStatus = "upcoming" | "announcement" | "live";

export type Announcement = {
  id: string;
  eyebrow: string;
  title: string;
  titleAccent?: string;
  description: string;
  image: string;
  status: AnnouncementStatus;
  date?: string;
  day?: string;
  venue?: string;
  city?: string;
  ctaLabel: string;
  whatsappMessage: string;
  liveUrl?: string;
};

export const announcements: Announcement[] = [
  {
    id: "spotlight-2026",
    eyebrow: "UPCOMING · KWE SUMMIT",
    title: "Own Your",
    titleAccent: "Spotlight 2026",
    description: "Leadership & Entrepreneurship Summit",
    image: "/images/kwe-event-photo.jpg",
    status: "upcoming",
    date: "13 DEC 2026",
    day: "Sunday",
    venue: "Divine Clarks Inn Suites",
    city: "Kurukshetra, Haryana",
    ctaLabel: "Join via WhatsApp",
    whatsappMessage:
      "Hi KWE team, I would like to know more about Own Your Spotlight 2026 and how to join.",
  },
  {
    id: "kwe-awards-2026",
    eyebrow: "KWE AWARDS 2026",
    title: "Celebrate Women.",
    titleAccent: "Recognise Impact.",
    description: "Discover the KWE Awards and opportunities to celebrate inspiring women entrepreneurs.",
    image: "/images/community-women-2.jpg",
    status: "announcement",
    ctaLabel: "Enquire about awards",
    whatsappMessage:
      "Hi KWE team, please share information about KWE Awards 2026 and nominations.",
  },
];
