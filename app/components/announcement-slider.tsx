
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  CalendarDays,
  ExternalLink,
  MapPin,
  X,
  ArrowLeft,
} from "lucide-react";

import { announcements } from "@/lib/announcements";

export default function AnnouncementSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [detailsOpen, setDetailsOpen] = useState(false);

  const active = announcements[activeIndex];

  // Automatically rotate every 2 seconds.
  // Pause while the details popup is open.
  useEffect(() => {
    if (detailsOpen || announcements.length < 2) return;

    const timer = window.setInterval(() => {
      setActiveIndex(
        (current) => (current + 1) % announcements.length
      );
    }, 2000);

    return () => window.clearInterval(timer);
  }, [detailsOpen]);

  // Close popup using Escape key.
  useEffect(() => {
    if (!detailsOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setDetailsOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [detailsOpen]);

  // Lock background scrolling while popup is open.
  useEffect(() => {
    if (!detailsOpen) return;

    const scrollY = window.scrollY;
    const body = document.body;
    const html = document.documentElement;

    const originalBodyStyles = {
      position: body.style.position,
      top: body.style.top,
      left: body.style.left,
      right: body.style.right,
      width: body.style.width,
      overflow: body.style.overflow,
    };

    const originalHtmlOverflow = html.style.overflow;

    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";
    body.style.overflow = "hidden";
    html.style.overflow = "hidden";

    return () => {
      body.style.position = originalBodyStyles.position;
      body.style.top = originalBodyStyles.top;
      body.style.left = originalBodyStyles.left;
      body.style.right = originalBodyStyles.right;
      body.style.width = originalBodyStyles.width;
      body.style.overflow = originalBodyStyles.overflow;

      html.style.overflow = originalHtmlOverflow;

      window.scrollTo(0, scrollY);
    };
  }, [detailsOpen]);

  const isLive =
    active.status === "live" && Boolean(active.liveUrl);

  const badgeLabel = isLive
    ? "LIVE NOW"
    : active.status === "upcoming"
      ? "SAVE THE DATE"
      : "IN THE SPOTLIGHT";

  return (
    <section
      id="events"
      className="hero-shell"
      aria-label="KWE announcements"
    >
      {/* Background slides */}
      {announcements.map((announcement, index) => (
        <div
          className={`hero-slide ${
            index === activeIndex ? "is-active" : ""
          }`}
          key={announcement.id}
          aria-hidden={index !== activeIndex}
        >
          <Image
            src={announcement.image}
            alt="Women entrepreneurs at a KWE event"
            fill
            priority={index === 0}
            sizes="100vw"
            className="hero-photo"
          />
        </div>
      ))}

      <div className="hero-overlay" />

      <div className="hero-content shell">
        <div className="hero-copy" key={active.id}>
          <div className="eyebrow eyebrow-light">
            <span
              className={`status-dot ${
                isLive ? "status-live" : ""
              }`}
            />

            {badgeLabel}

            <span className="eyebrow-rule" />

            {active.eyebrow}
          </div>

          <p className="hero-kicker">
            CONNECT <span>/</span> COLLABORATE <span>/</span> GROW
          </p>

          <h1>
            {active.title}
            <br />
            <em>{active.titleAccent}</em>
          </h1>

          {/* Event information */}
          {active.date && active.venue && (
            <div className="hero-event-meta">
              <div className="meta-item">
                <span className="meta-icon">
                  <CalendarDays size={20} />
                </span>

                <span>
                  <strong>{active.date}</strong>
                  <small>{active.day}</small>
                </span>
              </div>

              <span className="meta-divider" />

              <div className="meta-item">
                <span className="meta-icon">
                  <MapPin size={21} />
                </span>

                <span>
                  <strong>{active.venue}</strong>
                  <small>{active.city}</small>
                </span>
              </div>
            </div>
          )}

          {/* Main action buttons */}
          <div className="hero-actions hero-actions-updated">
            {active.registrationUrl && (
              <a
                className="hero-form-button hero-form-primary"
                href={active.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Event Registration
                <ArrowUpRight size={17} />
              </a>
            )}

            {active.nominationUrl && (
              <a
                className="hero-form-button hero-form-secondary"
                href={active.nominationUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Submit Nomination
                <ArrowUpRight size={17} />
              </a>
            )}

            <button
              type="button"
              className="hero-details-button"
              onClick={() => setDetailsOpen(true)}
            >
              View Details
              <ArrowDownRight size={17} />
            </button>
          </div>
        </div>

        {/* Side text */}
        <div className="hero-side-note" aria-hidden="true">
          <span className="side-note-line" />

          <span>
            Real women.
            <br />
            Remarkable impact.
          </span>
        </div>
      </div>

      <div className="hero-bottom-glow" />

      {/* Event details popup */}
      {detailsOpen && (
        <div
          className="kwe-details-backdrop"
          onClick={() => setDetailsOpen(false)}
        >
          <div
            className="kwe-details-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="kwe-details-title"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Popup header */}
            <div className="kwe-details-header">
              <button
                type="button"
                className="kwe-details-back"
                onClick={() => setDetailsOpen(false)}
              >
                <ArrowLeft size={17} />
                <span>Back</span>
              </button>

              <button
                type="button"
                className="kwe-details-close"
                onClick={() => setDetailsOpen(false)}
                aria-label="Close details"
              >
                <X size={21} />
              </button>
            </div>

            <div className="kwe-details-eyebrow">
              KURUKSHETRA WOMEN ENTREPRENEURS
            </div>

            <h2 id="kwe-details-title">
              {active.title}{" "}
              <em>{active.titleAccent}</em>
            </h2>

            <div className="kwe-details-content">
              {active.details.map((paragraph, index) => {
                const isHeading =
                  paragraph === "✨ Nomination Categories" ||
                  paragraph === "Why Nominate?";

                const isChecklist =
                  paragraph.startsWith("✔");

                return (
                  <p
                    key={`${active.id}-detail-${index}`}
                    className={[
                      isHeading ? "detail-subheading" : "",
                      isChecklist ? "detail-checklist" : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                  >
                    {paragraph}
                  </p>
                );
              })}
            </div>

            {/* Popup action buttons */}
            <div className="kwe-details-actions">
              {active.registrationUrl && (
                <a
                  href={active.registrationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-form-button hero-form-primary"
                >
                  Event Registration
                  <ExternalLink size={16} />
                </a>
              )}

              {active.nominationUrl && (
                <a
                  href={active.nominationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-form-button hero-form-secondary"
                >
                  Submit Nomination
                  <ExternalLink size={16} />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
