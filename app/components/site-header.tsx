"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

export default function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const homeAnchor = (hash: string) => (pathname === "/" ? hash : `/${hash}`);

  const navLinks = [
    { label: "Our Story", href: homeAnchor("#story") },
    { label: "Experiences", href: homeAnchor("#experiences") },
    { label: "Members", href: "/members" },
    { label: "Sponsors", href: homeAnchor("#sponsors") },
    { label: "Gallery", href: "/gallery" },
    { label: "Events", href: homeAnchor("#events") },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [pathname]);

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="header-inner shell">
        <Link
          href="/"
          className="header-brand"
          aria-label="Kurukshetra Women Entrepreneurs home"
        >
          <Image
            src="/images/kwe-logo-white.png"
            alt="Kurukshetra Women Entrepreneurs"
            width={420}
            height={90}
            priority
            sizes="(max-width: 600px) 180px, (max-width: 1100px) 200px, 235px"
          />
        </Link>

        <nav
          id="primary-navigation"
          className={`desktop-nav${menuOpen ? " is-open" : ""}`}
          aria-label="Main navigation"
        >
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              aria-current={
                (item.href === "/members" && pathname === "/members") ||
                (item.href === "/gallery" && pathname === "/gallery")
                  ? "page"
                  : undefined
              }
            >
              {item.label}
            </Link>
          ))}
          <Link
            className="mobile-nav-cta"
            href={homeAnchor("#join")}
            onClick={() => setMenuOpen(false)}
          >
            Join KWE <ArrowUpRight size={16} />
          </Link>
        </nav>

        <Link className="header-join" href={homeAnchor("#join")}>
          Join KWE <ArrowUpRight size={16} />
        </Link>

        <button
          type="button"
          className="menu-toggle"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  );
}
