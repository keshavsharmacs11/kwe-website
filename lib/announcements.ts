/**
 * KWE homepage announcements
 */

export type AnnouncementStatus = "upcoming" | "announcement" | "live";

export type Announcement = {
  id: string;
  eyebrow: string;
  title: string;
  titleAccent?: string;
  image: string;
  status: AnnouncementStatus;
  date?: string;
  day?: string;
  venue?: string;
  city?: string;
  registrationUrl?: string;
  nominationUrl?: string;
  liveUrl?: string;
  details: string[];
};

const EVENT_REGISTRATION_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScul_h17DSTdHmEE-byHKw0V5-jknehYbfzlTjViBTbmzXUgg/viewform";

const NOMINATION_URL = "https://forms.gle/P84qGexNcJHAX9Tu6";

export const announcements: Announcement[] = [
  {
    id: "she-leads-kurukshetra-2026",
    eyebrow: "UPCOMING · KWE SUMMIT",
    title: "She Leads",
    titleAccent: "Kurukshetra 2026",
    image: "/images/kwe-event-photo.jpg",
    status: "upcoming",
    date: "13 DEC 2026",
    day: "Sunday",
    venue: "Divine Clarks Inn Suites",
    city: "Kurukshetra, Haryana",
    registrationUrl: EVENT_REGISTRATION_URL,
    nominationUrl: NOMINATION_URL,
    details: [
      "Join Kurukshetra Women Entrepreneurs for She Leads Kurukshetra 2026 — a celebration of women who lead, connect and grow.",
      "The Leadership & Entrepreneurship Summit brings together inspiring women, entrepreneurs and professionals to celebrate leadership, collaboration and impact.",
      "KWE Awards 2026 nominations are also open. Nominate yourself or an inspiring woman whose journey deserves recognition.",
      "Event date: 13 December 2026",
      "Time: 12:00 PM – 4:00 PM",
      "Venue: Divine Clarks Inn Suites, Kurukshetra",
      "Contact: +91 82953 98406",
    ],
  },
  {
    id: "kwe-awards-2026",
    eyebrow: "KWE AWARDS 2026 · NOMINATIONS OPEN",
    title: "Celebrate Women.",
    titleAccent: "Recognise Impact.",
    image: "/images/community-women-2.jpg",
    status: "announcement",
    registrationUrl: EVENT_REGISTRATION_URL,
    nominationUrl: NOMINATION_URL,
    details: [
      "🏆 KWE AWARDS 2026 | NOMINATIONS ARE NOW OPEN! 💜",
      "Every woman's journey deserves recognition.",
      "Kurukshetra Women Entrepreneurs (KWE) proudly invites you to nominate yourself or an inspiring woman for the KWE Awards 2026, where we celebrate excellence, leadership, and impact across diverse industries.",
      "✨ Nomination Categories",
      "🏥 Healthcare  ·  ⚖️ Legal  ·  💻 Engineering  ·  🎨 Designing  ·  📈 Commerce  ·  ⭐ Others",
      "Why Nominate?",
      "✔ Get recognized for your achievements",
      "✔ Build credibility and visibility",
      "✔ Showcase your impact",
      "✔ Inspire more women through your journey",
      "📅 13 December 2026",
      "⏰ 12:00 PM – 4:00 PM",
      "📍 Divine Clarks Inn Suites, Kurukshetra",
      "📞 Contact: +91 82953 98406",
      "Let's celebrate the women who are leading with purpose and creating change.",
      "She Leads Kurukshetra — Where Women Lead, Connect & Grow. 💜",
    ],
  },
];