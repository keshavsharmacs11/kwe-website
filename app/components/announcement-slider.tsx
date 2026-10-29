"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { ArrowDownRight, ArrowLeft, ArrowRight, CalendarDays, MapPin, MessageCircle, Play, Radio } from "lucide-react";
import { announcements } from "@/lib/announcements";

const wa = (message: string) => `https://wa.me/918295398406?text=${encodeURIComponent(message)}`;

export default function AnnouncementSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const active = announcements[activeIndex];

  const next = useCallback(() => setActiveIndex((current) => (current + 1) % announcements.length), []);
  const previous = useCallback(() => setActiveIndex((current) => (current - 1 + announcements.length) % announcements.length), []);

  useEffect(() => {
    if (paused || announcements.length < 2) return;
    const timer = window.setInterval(next, 7000);
    return () => window.clearInterval(timer);
  }, [next, paused]);

  const isLive = active.status === "live" && Boolean(active.liveUrl);
  const badgeLabel = isLive ? "LIVE NOW" : active.status === "upcoming" ? "SAVE THE DATE" : "IN THE SPOTLIGHT";
  const actionUrl = isLive && active.liveUrl ? active.liveUrl : wa(active.whatsappMessage);
  const actionLabel = isLive ? "Watch live" : active.ctaLabel;

  return (
    <section id="events" className="hero-shell" aria-label="KWE announcements" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      {announcements.map((announcement, index) => (
        <div className={`hero-slide ${index === activeIndex ? "is-active" : ""}`} key={announcement.id} aria-hidden={index !== activeIndex}>
          <Image
            src={announcement.image}
            alt={index === 0 ? "Women entrepreneurs coming together at a KWE event" : "Women entrepreneurs in the KWE community"}
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
          <div className="eyebrow eyebrow-light"><span className={`status-dot ${isLive ? "status-live" : ""}`} />{badgeLabel}<span className="eyebrow-rule" />{active.eyebrow}</div>
          <p className="hero-kicker">CONNECT <span>/</span> COLLABORATE <span>/</span> GROW</p>
          <h1>{active.title}<br /><em>{active.titleAccent}</em></h1>
          <p className="hero-description">{active.description}</p>

          {active.date && active.venue && (
            <div className="hero-event-meta">
              <div className="meta-item">
                <span className="meta-icon"><CalendarDays size={20} /></span>
                <span><strong>{active.date}</strong><small>{active.day}</small></span>
              </div>
              <span className="meta-divider" />
              <div className="meta-item">
                <span className="meta-icon"><MapPin size={21} /></span>
                <span><strong>{active.venue}</strong><small>{active.city}</small></span>
              </div>
            </div>
          )}

          <div className="hero-actions">
            <a className="button button-gold" href={actionUrl} target="_blank" rel="noreferrer">
              {isLive ? <Radio size={18} /> : <MessageCircle size={18} />} {actionLabel} <ArrowDownRight size={17} />
            </a>
            <a className="hero-secondary" href="#moments"><span className="play-icon"><Play size={13} fill="currentColor" /></span> Explore KWE <ArrowRight size={15} /></a>
          </div>
        </div>

        <div className="hero-side-note" aria-hidden="true">
          <span className="side-note-line" />
          <span>Real women.<br />Remarkable impact.</span>
        </div>

        <div className="hero-controls" aria-label="Announcement slide controls">
          <button className="slide-arrow" type="button" onClick={previous} aria-label="Previous announcement"><ArrowLeft size={17} /></button>
          <div className="slide-dots">
            {announcements.map((announcement, index) => (
              <button type="button" key={announcement.id} className={`slide-dot ${index === activeIndex ? "active" : ""}`} aria-label={`Show announcement ${index + 1}`} aria-pressed={index === activeIndex} onClick={() => setActiveIndex(index)} />
            ))}
          </div>
          <span className="slide-count">0{activeIndex + 1} <span>/</span> 0{announcements.length}</span>
          <button className="slide-arrow" type="button" onClick={next} aria-label="Next announcement"><ArrowRight size={17} /></button>
        </div>
      </div>
      <div className="hero-bottom-glow" />
    </section>
  );
}
