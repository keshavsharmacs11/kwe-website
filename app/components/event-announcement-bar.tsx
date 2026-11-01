
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowUpRight, Sparkles } from "lucide-react";

const announcements = [
  {
    label: "KWE SUMMIT",
    title: "Own Your Spotlight 2026",
    detail: "13 December · Kurukshetra",
    href: "/#events",
    action: "Explore",
  },
  {
    label: "MEMBER STORIES",
    title: "Meet the women building what’s next",
    detail: "Discover the KWE member community",
    href: "/members",
    action: "Meet members",
  },
  {
    label: "KWE MOMENTS",
    title: "The people, conversations and connections",
    detail: "Explore photographs from our community",
    href: "/gallery",
    action: "View gallery",
  },
  {
    label: "PARTNER WITH KWE",
    title: "Support women-led enterprise",
    detail: "Explore sponsorship opportunities",
    href: "/#sponsors",
    action: "Partner with us",
  },
];

export default function EventAnnouncementBar() {
  const [activeIndex, setActiveIndex] = useState(0);

  const announcement = announcements[activeIndex];

  // Automatically change updates every 2 seconds.
  useEffect(() => {
    if (announcements.length < 2) return;

    const timer = window.setInterval(() => {
      setActiveIndex(
        (current) => (current + 1) % announcements.length
      );
    }, 2000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section
      className="kwe-announcement"
      aria-label="KWE updates"
    >
      <div className="kwe-announcement-inner shell">
        <div className="kwe-announcement-brand">
          <span className="kwe-announcement-spark">
            <Sparkles size={14} />
          </span>
          <span>KWE UPDATES</span>
        </div>

        <div
          className="kwe-announcement-content"
          aria-live="polite"
          aria-atomic="true"
        >
          <span className="kwe-announcement-label">
            {announcement.label}
          </span>

          <span className="kwe-announcement-divider" />

          <span
            className="kwe-announcement-title"
            key={announcement.title}
          >
            {announcement.title}
          </span>

          <span className="kwe-announcement-detail">
            {announcement.detail}
          </span>
        </div>

        <div className="kwe-announcement-controls">
          <Link
            className="kwe-announcement-link"
            href={announcement.href}
          >
            <span>{announcement.action}</span>
            <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
