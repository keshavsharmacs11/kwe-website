
import {
  ArrowUpRight,
  Network,
  Sparkles,
  Trophy,
  UsersRound,
} from "lucide-react";

import EventAnnouncementBar from "@/app/components/event-announcement-bar";
import SiteHeader from "@/app/components/site-header";
import AnnouncementSlider from "@/app/components/announcement-slider";
import SponsorCarousel from "@/app/components/sponsor-carousel";
import CommunityStory from "@/app/components/community-story";
import MemberSpotlight from "@/app/components/member-spotlight";
import SiteFooter from "@/app/components/site-footer";

const whatsapp = (message: string) =>
  `https://wa.me/918295398406?text=${encodeURIComponent(message)}`;

const communityHighlights = [
  {
    icon: UsersRound,
    lead: "Powerful",
    emphasis: "conversations",
  },
  {
    icon: Network,
    lead: "Meaningful",
    emphasis: "connections",
  },
  {
    icon: Trophy,
    lead: "Celebrating",
    emphasis: "women",
  },
  {
    icon: Sparkles,
    lead: "Ideas into",
    emphasis: "impact",
  },
];

export default function HomePage() {
  return (
    <main id="home" className="kwe-homepage">
      {/* Top Sliding Announcement Bar */}
      <EventAnnouncementBar />

      {/* Main Navigation */}
      <SiteHeader />

      {/* Main Event Hero Carousel */}
      <AnnouncementSlider />

      {/* Sponsors and Collaboration Partners */}
      <SponsorCarousel />

      {/* Community Highlights */}
      <section
        className="value-strip mobile-community-highlights"
        aria-label="What KWE brings together"
      >
        <div className="value-strip-inner shell value-strip-panel">
          {communityHighlights.map((item) => {
            const Icon = item.icon;

            return (
              <div className="value-item" key={item.emphasis}>
                <span className="value-icon" aria-hidden="true">
                  <Icon size={20} />
                </span>

                <span className="value-item-copy">
                  <span className="value-item-phrase">
                    <span className="value-item-lead">
                      {item.lead}
                    </span>

                    <strong>{item.emphasis}</strong>
                  </span>
                </span>
              </div>
            );
          })}
        </div>
      </section>

      {/* Our Story — YouTube Video and Founder Message */}
      <CommunityStory />

      {/* Complete KWE Members Directory */}
      <MemberSpotlight />

      {/* Join KWE — Primary WhatsApp Destination */}
      <section id="join" className="join-section">
        <div
          className="join-orb join-orb-one"
          aria-hidden="true"
        />

        <div
          className="join-orb join-orb-two"
          aria-hidden="true"
        />

        <div className="shell join-layout">
          {/* Join Section Introduction */}
          <div className="join-copy">
            <p className="eyebrow eyebrow-light">
              <span className="eyebrow-mark" aria-hidden="true" />
              KURUKSHETRA WOMEN ENTREPRENEURS
            </p>

            <h2>
              Your next chapter.
              <br />
              <em>Your community.</em>
            </h2>

            <p className="join-description">
              Meet women who understand the journey.
              <br />
              Make connections that move you forward.
            </p>
          </div>

          {/* WhatsApp Join Card */}
          <div className="join-action">
            <span className="join-panel-label">
              <span
                className="join-panel-dot"
                aria-hidden="true"
              />
              THE KWE COMMUNITY
            </span>

            <h3>Let's make it happen.</h3>

            <p>
              Interested in joining KWE?
              <br />
              Start a conversation with our team.
            </p>

            <a
              className="button button-gold button-large join-primary-cta"
              href={whatsapp(
                "Hi KWE team, I would like to join Kurukshetra Women Entrepreneurs. Please share the next steps."
              )}
              target="_blank"
              rel="noreferrer"
            >
              Join KWE on WhatsApp
              <ArrowUpRight size={18} />
            </a>

            <span className="join-note">
              +91 82953 98406
            </span>
          </div>
        </div>
      </section>

      {/* Shared Site Footer */}
      <SiteFooter />
    </main>
  );
}
