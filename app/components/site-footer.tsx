import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Instagram } from "lucide-react";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-main">
        <Link href="/" className="footer-brand" aria-label="KWE home">
          <Image
            src="/images/kwe-logo.png"
            alt="Kurukshetra Women Entrepreneurs"
            width={3656}
            height={1200}
          />
        </Link>

        <p className="footer-tagline">Connect. Inspire. Network.</p>

        <nav className="footer-nav" aria-label="Footer navigation">
          <Link href="/#story">Our story</Link>
          <Link href="/#experiences">Experiences</Link>
          <Link href="/members">Members</Link>
          <Link href="/#sponsors">Sponsors</Link>
          <Link href="/gallery">Gallery</Link>
        </nav>

        <a
          className="footer-social"
          href="https://www.instagram.com/kurukshetrawomenentrepreneurs/"
          target="_blank"
          rel="noreferrer"
          aria-label="KWE on Instagram"
        >
          <Instagram size={18} />
          <ArrowUpRight size={14} />
        </a>
      </div>

      <div className="shell footer-bottom">
        <span>© {new Date().getFullYear()} Kurukshetra Women Entrepreneurs</span>
        <Link href="/#join">Join KWE <ArrowUpRight size={14} /></Link>
        <span>Made for women who build.</span>
      </div>
    </footer>
  );
}
