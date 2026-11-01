import EventAnnouncementBar from "@/app/components/event-announcement-bar";
import GalleryExplorer from "@/app/components/gallery-explorer";
import SiteFooter from "@/app/components/site-footer";
import SiteHeader from "@/app/components/site-header";

export const metadata = {
  title: "KWE Gallery | Kurukshetra Women Entrepreneurs",
  description: "Explore photographs and moments from the Kurukshetra Women Entrepreneurs community and events.",
};

export default function GalleryPage() {
  return (
    <main className="inner-page">
      <EventAnnouncementBar />
      <SiteHeader />

      <section className="directory-hero gallery-hero">
        <div className="shell directory-hero-content">
          <p className="eyebrow eyebrow-light"><span className="eyebrow-mark" /> KWE IN MOMENTS</p>
          <h1>Every connection <em>has a story.</em></h1>
          <p>A look back at the faces, conversations and shared moments that bring the KWE community together.</p>
          <span className="directory-hero-rule" />
        </div>
      </section>

      <section className="gallery-page-section section-pad">
        <div className="shell">
          <div className="directory-section-heading">
            <div>
              <p className="eyebrow"><span className="eyebrow-mark" /> THE KWE PHOTO JOURNAL</p>
              <h2>Moments worth <em>remembering.</em></h2>
            </div>
            <p>Choose a collection and open any photograph to view it in detail.</p>
          </div>
          <GalleryExplorer />
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
