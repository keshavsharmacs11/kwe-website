export default function CommunityStory() {
  return (
    <section id="story" className="community-story">
      <div className="shell">
        {/* Section heading */}
        <div className="community-story-heading">
          <p className="community-story-eyebrow">
            <span />
            OUR STORY
            <span />
          </p>

          <h2>
            About The <em>Community</em>
          </h2>
        </div>

        {/* Video and community introduction */}
        <div className="community-story-grid">
          {/* YouTube video */}
          <div className="community-story-video-column">
            <div className="community-story-video-frame">
              <iframe
                src="https://www.youtube.com/embed/qQmIu5YLzHY?rel=0&playsinline=1"
                title="Kurukshetra Women Entrepreneurs - About Our Community"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>

            <span className="community-story-video-caption">
              <span className="community-story-video-dot" />
              A glimpse into the KWE community
            </span>
          </div>

          {/* Community introduction */}
          <div className="community-story-copy">
            <div className="community-story-founder-label">
              <span>♥</span>
              THE SPIRIT OF KWE
            </div>

            <p className="community-story-intro">
              <strong>Kurukshetra Women Entrepreneurs (KWE)</strong> is a
              platform that brings women entrepreneurs together to connect,
              collaborate and grow.
            </p>

            <blockquote className="community-story-quote">
              Because when women support women, possibilities grow.
            </blockquote>

            <p className="community-story-description">
              It is about creating meaningful connections, sharing ideas,
              discovering opportunities and supporting women who are building
              something of their own.

              <br />
              <br />

              From emerging entrepreneurs to established business owners, KWE
              celebrates the ambition, creativity and determination of women
              across different fields.
            </p>

            {/* Community signature */}
            <div className="community-story-signature">
              <span className="community-story-signature-line" />

              <div>
                <strong>Kurukshetra Women Entrepreneurs</strong>
                <span>Connect. Collaborate. Grow.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}