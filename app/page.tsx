
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  Heart,
  Lightbulb,
  Mic2,
  Network,
  Sparkles,
  Trophy,
  UsersRound,
  WandSparkles, 
} from "lucide-react";

import EventAnnouncementBar from "@/app/components/event-announcement-bar";
import SiteHeader from "@/app/components/site-header";
import AnnouncementSlider from "@/app/components/announcement-slider";
import Gallery from "@/app/components/gallery";

const whatsapp = (message: string) =>
  `https://wa.me/918295398406?text=${encodeURIComponent(message)}`;

const experiences = [
  {
    icon: Mic2,
    number: "01",
    title: "Ideas that move you",
    description: "Conversations that open new ways of thinking.",
  },
  {
    icon: Network,
    number: "02",
    title: "Connections that matter",
    description: "Meet women building businesses and possibilities.",
  },
  {
    icon: Trophy,
    number: "03",
    title: "Women worth celebrating",
    description: "Bring remarkable work into the spotlight.",
  },
  {
    icon: Lightbulb,
    number: "04",
    title: "Room to grow",
    description: "Share knowledge, find support, keep moving.",
  },
];

export default function HomePage() {
  return (
    <main id="home">
      {/* Top sliding announcement bar */}
      <EventAnnouncementBar />

      {/* Main navigation */}
      <SiteHeader />

      {/* Main event hero carousel */}
      <AnnouncementSlider />

      {/* Community highlights */}
      <section
        className="value-strip"
        aria-label="What KWE brings together"
      >
        <div className="value-strip-inner shell">
          <div className="value-item">
            <span className="value-icon">
              <UsersRound size={20} />
            </span>
            <span>
              Powerful
              <br />
              <strong>conversations</strong>
            </span>
          </div>

          <span className="value-divider" />

          <div className="value-item">
            <span className="value-icon">
              <Network size={20} />
            </span>
            <span>
              Meaningful
              <br />
              <strong>connections</strong>
            </span>
          </div>

          <span className="value-divider" />

          <div className="value-item">
            <span className="value-icon">
              <Trophy size={20} />
            </span>
            <span>
              Celebrating
              <br />
              <strong>women</strong>
            </span>
          </div>

          <span className="value-divider" />

          <div className="value-item">
            <span className="value-icon">
              <Sparkles size={20} />
            </span>
            <span>
              Ideas into
              <br />
              <strong>impact</strong>
            </span>
          </div>
        </div>
      </section>

      {/* Our story */}
      <section id="story" className="story-section section-pad">
        <div className="shell story-layout">
          <div className="story-copy">
            <p className="eyebrow">
              <span className="eyebrow-mark" />
              THE KWE COMMUNITY
            </p>

            <h2>
              More than
              <br />
              an event. <em>A movement.</em>
            </h2>

            <p className="body-copy">
              A space for women entrepreneurs to connect, collaborate,
              share ideas and grow — together.
            </p>

            <a
              href="#community"
              className="button button-primary"
            >
              Discover KWE <ArrowUpRight size={16} />
            </a>

            <span className="story-handwritten">
              Make room
              <br />
              for more.
            </span>
          </div>

          <div className="story-visuals">
            <div className="story-image-main">
              <Image
                src="/images/community-women-2.jpg"
                alt="Women entrepreneurs connecting at a KWE event"
                fill
                sizes="(max-width: 720px) 90vw, 48vw"
              />
            </div>

            <div className="story-image-float">
              <Image
                src="/images/community-women-3.jpg"
                alt="A KWE community gathering"
                fill
                sizes="(max-width: 720px) 45vw, 20vw"
              />
            </div>

            <div className="story-sticker">
              <Heart size={15} fill="currentColor" />
              <span>
                Built on connection.
                <br />
                <strong>Powered by women.</strong>
              </span>
            </div>

            <div className="story-orbit" />
          </div>
        </div>
      </section>

      {/* Experiences */}
      <section
        id="experiences"
        className="experience-section section-pad"
      >
        <div className="experience-backdrop" />

        <div className="shell experience-content">
          <div className="experience-heading">
            <div>
              <p className="eyebrow eyebrow-light">
                <span className="eyebrow-mark" />
                THE EXPERIENCE
              </p>

              <h2>
                Come for the
                <br />
                <em>connection.</em> Leave with possibility.
              </h2>
            </div>

            <p className="experience-intro">
              Every gathering is a chance to learn something, meet
              someone, and see what could happen next.
            </p>
          </div>

          <div className="experience-grid">
            {experiences.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  className="experience-card"
                  key={item.number}
                >
                  <div className="experience-card-top">
                    <span className="experience-icon">
                      <Icon size={22} />
                    </span>

                    <span className="experience-number">
                      {item.number}
                    </span>
                  </div>

                  <h3>{item.title}</h3>
                  <p>{item.description}</p>

                  <span className="experience-card-line" />
                </article>
              );
            })}
          </div>

          <div className="experience-bottom">
            <span>
              CONNECT <i>•</i> INSPIRE <i>•</i> NETWORK
            </span>

            <a
              href="#join"
              className="button button-outline-light"
            >
              Be part of it <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Community */}
      <section
        id="community"
        className="community-section section-pad"
      >
        <div className="shell community-layout">
          <div className="community-photo">
            <Image
              src="/images/community-women-1.jpg"
              alt="Women in business at a KWE gathering"
              fill
              sizes="(max-width: 720px) 92vw, 54vw"
            />

            <div className="community-photo-label">
              <span className="photo-label-dot" />
              THE PEOPLE BEHIND THE POSSIBILITIES
            </div>
          </div>

          <div className="community-copy">
            <p className="eyebrow">
              <span className="eyebrow-mark" />
              WOMEN, WORK & WHAT'S NEXT
            </p>

            <h2>
              Real women.
              <br />
              <em>Remarkable</em>
              <br />
              journeys.
            </h2>

            <p className="body-copy">
              Meet the people building businesses, creating
              opportunities and shaping the future of our community.
            </p>

            <a
              className="text-link"
              href="https://www.instagram.com/kurukshetrawomenentrepreneurs/"
              target="_blank"
              rel="noreferrer"
            >
              Meet the community on Instagram
              <ArrowRight size={16} />
            </a>

            <div className="community-stamp">
              <WandSparkles size={18} />
              <span>
                Local roots.
                <br />
                <strong>Limitless ambition.</strong>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section
        id="moments"
        className="moments-section section-pad"
      >
        <div className="shell">
          <div className="section-heading-row">
            <div>
              <p className="eyebrow">
                <span className="eyebrow-mark" />
                A FEW GOOD MOMENTS
              </p>

              <h2>
                Connection looks
                <br />
                <em>good on us.</em>
              </h2>
            </div>

            <p className="section-aside">
              The faces, conversations and little moments that make
              a community feel like yours.
            </p>
          </div>

          <Gallery />
        </div>
      </section>

      {/* Join KWE — the primary WhatsApp destination */}
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
          <div className="join-copy">
            <p className="eyebrow eyebrow-light">
              <span className="eyebrow-mark" />
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

          <div className="join-action">
            <span className="join-panel-label">
              <span className="join-panel-dot" />
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

      {/* Footer */}
      <footer className="site-footer">
        <div className="shell footer-main">
          <a
            href="#home"
            className="footer-brand"
            aria-label="Kurukshetra Women Entrepreneurs home"
          >
            <Image
              src="/images/kwe-logo-white-website.png"
              alt="Kurukshetra Women Entrepreneurs"
              width={335}
              height={67}
            />
          </a>

          <p className="footer-tagline">
            Connect. Inspire. Network.
          </p>

          <nav
            className="footer-nav"
            aria-label="Footer navigation"
          >
            <a href="#story">Our story</a>
            <a href="#experiences">Experiences</a>
            <a href="#community">Community</a>
            <a href="#moments">Moments</a>
          </nav>

          <a
            className="footer-social"
            href="https://www.instagram.com/kurukshetrawomenentrepreneurs/"
            target="_blank"
            rel="noreferrer"
            aria-label="KWE on Instagram"
          >
            <ArrowUpRight size={18} />
          </a>
        </div>

        <div className="shell footer-bottom">
          <span>
            © {new Date().getFullYear()} Kurukshetra Women Entrepreneurs
          </span>

          <a href="#join">
            Join KWE <ArrowUpRight size={14} />
          </a>

          <span>Made for women who build.</span>
        </div>
      </footer>
    </main>
  );
}
