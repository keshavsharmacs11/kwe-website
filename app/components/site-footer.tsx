
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Instagram } from "lucide-react";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-main">
        {/* KWE Brand */}
        <Link
          href="/"
          className="footer-brand"
          aria-label="Kurukshetra Women Entrepreneurs home"
        >
          <Image
            src="/images/kwe-logo-white.png"
            alt="Kurukshetra Women Entrepreneurs"
            width={420}
            height={90}
            sizes="(max-width: 600px) 170px, 230px"
          />
        </Link>

        <p className="footer-tagline">
          Connect. Inspire. Network.
        </p>

        {/* Updated Footer Navigation */}
       <nav className="footer-nav"
        aria-label="Footer navigation">
          <Link href="/#story">Our Story</Link>
          <Link href="/#members">Members</Link>
          <Link href="/#sponsors">Sponsors</Link>
          <Link href="/#events">Events</Link>
      </nav>

        {/* Instagram */}
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

      {/* Footer Bottom */}
      <div className="shell footer-bottom">
        <span>
          © {new Date().getFullYear()} Kurukshetra Women Entrepreneurs
        </span>

        <Link href="/#join">
          Join KWE <ArrowUpRight size={14} />
        </Link>

        <span>Made for women who build.</span>
      </div>
    </footer>
  );
}
