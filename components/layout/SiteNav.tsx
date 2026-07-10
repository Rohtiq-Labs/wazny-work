"use client";

import { useCallback, useEffect, useState } from "react";
import ArrowIcon from "@/components/shared/ArrowIcon";

const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#showcase", label: "Showcase" },
  { href: "#contact", label: "Contact" },
  { href: "#book", label: "Book" },
];

const SiteNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  const toggleMenu = useCallback(() => {
    setIsOpen((open) => !open);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [closeMenu]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 860) closeMenu();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [closeMenu]);

  return (
    <>
      <header className={`nav${isOpen ? " nav--menu-open" : ""}`}>
        <a href="#hero" className="nav-brand" onClick={closeMenu}>
          <span className="nav-logo">Wazny Works</span>
          <span className="nav-tagline">Automotive Films &amp; Coatings</span>
        </a>

        <nav className="nav-links" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className={`nav-toggle${isOpen ? " open" : ""}`}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
          onClick={toggleMenu}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      <div
        id="mobile-nav"
        className={`nav-overlay${isOpen ? " open" : ""}`}
        aria-hidden={!isOpen}
      >
        <div className="grain" />
        <div className="nav-overlay-glow" />
        <div className="nav-overlay-mark" aria-hidden="true">
          W
        </div>

        <div className="nav-overlay-inner">
          <p className="nav-overlay-eyebrow">Navigation</p>

          <nav className="nav-overlay-links" aria-label="Mobile navigation">
            {NAV_LINKS.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-overlay-link"
                style={{ transitionDelay: `${0.08 + index * 0.07}s` }}
                onClick={closeMenu}
              >
                <span className="nav-overlay-link-num">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="nav-overlay-link-label">{link.label}</span>
              </a>
            ))}
          </nav>

          <div className="nav-overlay-foot">
            <div className="nav-overlay-contact">
              <span className="eyebrow">Studio</span>
              <a href="tel:+12242880242" onClick={closeMenu}>
                +1 224-288-0242
              </a>
              <span>Bartlett, IL 60103</span>
            </div>
            <a href="#book" className="btn on-dark" onClick={closeMenu}>
              Book an appointment
              <ArrowIcon />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default SiteNav;
