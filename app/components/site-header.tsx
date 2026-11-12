
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

  const homeAnchor = (hash: string) =>
    pathname === "/" ? hash : `/${hash}`;

  // Updated navigation — Experiences and Gallery removed.
 const navLinks = [
  { label: "Our Story", href: homeAnchor("#story") },
  { label: "Members", href: homeAnchor("#members") },
  { label: "Sponsors", href: homeAnchor("#sponsors") },
  { label: "Events", href: homeAnchor("#events") },
];

  // Detect scrolling.
  useEffect(() => {
    const handleScroll = () => {
      const nextScrolled = window.scrollY > 12;

      setScrolled((current) =>
        current === nextScrolled ? current : nextScrolled
      );
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close menu whenever the route changes.
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Close mobile menu using Escape.
  useEffect(() => {
    if (!menuOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`site-header${scrolled ? " is-scrolled" : ""}`}
    >
      <div className="header-inner shell">

        {/* KWE Brand */}
        <Link
          href="/"
          className="header-brand"
          aria-label="Kurukshetra Women Entrepreneurs home"
          onClick={closeMenu}
        >
          <Image
            src="/images/kwe-logo-white.png"
            alt="Kurukshetra Women Entrepreneurs"
            width={420}
            height={90}
            priority
            sizes="(max-width: 600px) 170px, (max-width: 1100px) 185px, 230px"
          />
        </Link>

        {/* Main Navigation — Desktop and Mobile */}
        <nav
          id="primary-navigation"
          className={`desktop-nav${menuOpen ? " is-open" : ""}`}
          aria-label="Main navigation"
        >
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={closeMenu}
              aria-current={
                item.href === "/members" && pathname === "/members"
                  ? "page"
                  : undefined
              }
            >
              {item.label}
            </Link>
          ))}

          {/* Join CTA inside mobile menu */}
          <Link
            className="mobile-nav-cta"
            href={homeAnchor("#join")}
            onClick={closeMenu}
          >
            Join KWE
            <ArrowUpRight size={16} />
          </Link>
        </nav>

        {/* Desktop Join CTA */}
        <Link
          className="header-join"
          href={homeAnchor("#join")}
        >
          Join KWE
          <ArrowUpRight size={16} />
        </Link>

        {/* Mobile / Tablet Menu Toggle */}
        <button
          type="button"
          className="menu-toggle"
          aria-label={
            menuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? (
            <X size={22} />
          ) : (
            <Menu size={22} />
          )}
        </button>

      </div>
    </header>
  );
}
