
"use client";

import { useEffect, useState } from "react";
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

const announcements = [
  {
    label: "UPCOMING EVENT",
    title: "Own Your Spotlight 2026",
    detail: "13 December · Kurukshetra",
    link: "#join",
    action: "Discover",
  },
  {
    label: "KWE SUMMIT",
    title: "A celebration of women who lead",
    detail: "Leadership & Entrepreneurship Summit",
    link: "#join",
    action: "Explore",
  },
  {
    label: "YOUR NEXT CHAPTER",
    title: "Meet. Connect. Grow.",
    detail: "Be part of the KWE community",
    link: "#join",
    action: "Join KWE",
  },
];

export default function AnnouncementSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % announcements.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [paused]);

  const previous = () => {
    setActiveIndex(
      (current) => (current - 1 + announcements.length) % announcements.length
    );
  };

  const next = () => {
    setActiveIndex((current) => (current + 1) % announcements.length);
  };

  const announcement = announcements[activeIndex];

  return (
    <section
      className="kwe-announcement"
      aria-label="KWE announcements"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setPaused(false);
        }
      }}
    >
      <div className="kwe-announcement-inner shell">
        <div className="kwe-announcement-brand">
          <span className="kwe-announcement-spark">
            <Sparkles size={14} />
          </span>
          <span>THE KWE EDIT</span>
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

          <span className="kwe-announcement-title" key={announcement.title}>
            {announcement.title}
          </span>

          <span className="kwe-announcement-detail">
            {announcement.detail}
          </span>
        </div>

        <div className="kwe-announcement-controls">
          <a
            className="kwe-announcement-link"
            href={announcement.link}
          >
            <span>{announcement.action}</span>
            <ArrowUpRight size={15} />
          </a>

          <div className="kwe-announcement-arrows">
            <button
              type="button"
              onClick={previous}
              aria-label="Previous announcement"
            >
              <ChevronLeft size={16} />
            </button>

            <span className="kwe-announcement-count">
              {String(activeIndex + 1).padStart(2, "0")}
              <span>/</span>
              {String(announcements.length).padStart(2, "0")}
            </span>

            <button
              type="button"
              onClick={next}
              aria-label="Next announcement"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
