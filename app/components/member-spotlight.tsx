
"use client";

import Image from "next/image";
import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Instagram,
  MapPin,
} from "lucide-react";

import { members } from "@/lib/members";

type CardPosition = "side-left" | "featured" | "side-right";

export default function MemberSpotlight() {
  const [activeIndex, setActiveIndex] = useState(0);
  const memberCount = members.length;

  if (memberCount === 0) return null;

  const previousMember = () => {
    setActiveIndex(
      (current) => (current - 1 + memberCount) % memberCount
    );
  };

  const nextMember = () => {
    setActiveIndex((current) => (current + 1) % memberCount);
  };

  const visibleCards: {
    member: (typeof members)[number];
    position: CardPosition;
  }[] = [
    {
      member: members[(activeIndex - 1 + memberCount) % memberCount],
      position: "side-left",
    },
    {
      member: members[activeIndex],
      position: "featured",
    },
    {
      member: members[(activeIndex + 1) % memberCount],
      position: "side-right",
    },
  ];

  const activeMember = members[activeIndex];

  return (
    <section
      id="community"
      className="kwe-member-showcase section-pad"
    >
      <div className="shell kwe-member-showcase-inner">

        {/* Section Heading */}
        <div className="kwe-member-heading">
          <div className="kwe-member-heading-main">
            <p className="kwe-member-eyebrow">
              <span aria-hidden="true" />
              MEET THE KWE COMMUNITY
            </p>

            <h2 className="kwe-member-title">
              Women with stories.
              <br />
              <em>Ideas with impact.</em>
            </h2>
          </div>

          <p className="kwe-member-intro">
            Get to know the women who make the KWE community stronger.
            Every journey has a story worth sharing.
          </p>
        </div>

        {/* Member Carousel */}
        <div
          className="kwe-member-carousel"
          aria-label="Featured KWE member profiles"
        >
          <span
            className="kwe-member-watermark"
            aria-hidden="true"
          >
            KWE
          </span>

          {/* Previous Member */}
          <button
            type="button"
            className="kwe-member-arrow kwe-member-arrow--previous"
            onClick={previousMember}
            aria-label="Show previous member"
            disabled={memberCount < 2}
          >
            <ArrowLeft size={21} strokeWidth={2.1} />
          </button>

          {/* Member Cards */}
          <div
            className="kwe-member-card-grid"
            aria-live="polite"
          >
            {visibleCards.map(({ member, position }) => {
              const instagram = member.socials.find(
                (social) => social.platform === "instagram"
              );

              const profileLine = [
                member.role,
                member.business,
              ]
                .filter(Boolean)
                .join(" · ");

              return (
                <article
                  className={`kwe-member-card kwe-member-card--${position}`}
                  key={`${member.id}-${position}`}
                  aria-label={`${member.name}${
                    position === "featured"
                      ? ", featured member"
                      : ""
                  }`}
                >
                  {/* Member Image */}
                  <div className="kwe-member-card-photo">
                    <Image
                      src={member.image}
                      alt={member.imageAlt}
                      fill
                      priority={position === "featured"}
                      sizes="(max-width: 760px) 82vw, (max-width: 1050px) 42vw, 29vw"
                    />

                    <span className="kwe-member-photo-label">
                      KWE MEMBER
                    </span>
                  </div>

                  {/* Member Details */}
                  <div className="kwe-member-card-info">
                    <div className="kwe-member-card-copy">

                      <span className="kwe-member-card-kicker">
                        {position === "featured"
                          ? "FEATURED MEMBER"
                          : "MEMBER SPOTLIGHT"}
                      </span>

                      {/* Member Name and Business Logo */}
                      <div className="kwe-member-name-row">
                        {member.businessLogo && (
                          <Image
                            src={member.businessLogo}
                            alt={
                              member.businessLogoAlt ||
                              `${member.business || member.name} logo`
                            }
                            width={40}
                            height={40}
                            className="kwe-member-business-logo"
                          />
                        )}

                        <h3>{member.name}</h3>
                      </div>

                      {/* Role and Business */}
                      {profileLine && (
                        <p className="kwe-member-role">
                          {profileLine}
                        </p>
                      )}

                      {/* Location */}
                      {member.location && (
                        <span className="kwe-member-location">
                          <MapPin
                            size={13}
                            aria-hidden="true"
                          />
                          {member.location}
                        </span>
                      )}

                      {/* Instagram Handle */}
                      {instagram && (
                        <a
                          className="kwe-member-handle"
                          href={instagram.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${member.name} ${instagram.label} on Instagram`}
                        >
                          {instagram.label}
                        </a>
                      )}
                    </div>

                    {/* Instagram Icon — No Generic Arrow */}
                    {instagram && (
                      <a
                        href={instagram.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="kwe-member-profile-link"
                        aria-label={`Visit ${member.name}'s Instagram`}
                        title={instagram.label}
                      >
                        <Instagram
                          size={19}
                          strokeWidth={2}
                        />
                      </a>
                    )}
                  </div>
                </article>
              );
            })}
          </div>

          {/* Next Member */}
          <button
            type="button"
            className="kwe-member-arrow kwe-member-arrow--next"
            onClick={nextMember}
            aria-label="Show next member"
            disabled={memberCount < 2}
          >
            <ArrowRight size={21} strokeWidth={2.1} />
          </button>
        </div>

        {/* Carousel Footer — Indicators Only */}
        <div className="kwe-member-carousel-footer">

          <div
            className="kwe-member-dots"
            aria-label="Choose a featured member"
          >
            {members.map((member, index) => (
              <button
                type="button"
                key={member.id}
                className={`kwe-member-dot${
                  index === activeIndex ? " is-active" : ""
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Feature ${member.name}`}
                aria-current={
                  index === activeIndex ? "true" : undefined
                }
              />
            ))}
          </div>

          <p
            className="kwe-member-current"
            aria-live="polite"
          >
            <span>
              {String(activeIndex + 1).padStart(2, "0")}
            </span>

            <span className="kwe-member-current-divider" />

            {activeMember.name}
          </p>
        </div>

      </div>
    </section>
  );
}
