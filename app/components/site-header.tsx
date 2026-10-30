
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Our Story", href: "#story" },
  { label: "Experiences", href: "#experiences" },
  { label: "Community", href: "#community" },
  { label: "Moments", href: "#moments" },
  { label: "Events", href: "#events" },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`site-header${scrolled ? " is-scrolled" : ""}`}
    >
      <div
        className="header-inner shell"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "24px",
        }}
      >
        <a
          href="#home"
          className="header-brand"
          aria-label="Kurukshetra Women Entrepreneurs home"
          onClick={closeMenu}
          style={{
            display: "flex",
            alignItems: "center",
            flexShrink: 0,
          }}
        >
          <Image
            src="/images/kwe-logo-white.png"
            alt="Kurukshetra Women Entrepreneurs"
            width={250}
            height={50}
            priority
            style={{
              display: "block",
              width: "min(250px, 24vw)",
              height: "auto",
              objectFit: "contain",
            }}
          />
        </a>

        <nav
          id="primary-navigation"
          className={`desktop-nav${menuOpen ? " is-open" : ""}`}
          aria-label="Main navigation"
        >
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}

          <a
            className="mobile-nav-cta"
            href="#join"
            onClick={closeMenu}
          >
            Join KWE <ArrowUpRight size={16} />
          </a>
        </nav>

        <a className="header-join" href="#join">
          Join KWE <ArrowUpRight size={16} />
        </a>

        <button
          type="button"
          className="menu-toggle"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>
    </header>
  );
}
