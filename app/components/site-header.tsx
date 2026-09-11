"use client";

import { useRef, useState } from "react";

const links = [
  { href: "#commercial-real-estate", label: "Real estate" },
  { href: "#technology", label: "Technology" },
  { href: "#consulting", label: "Consulting" },
  { href: "#selected-work", label: "Selected work" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  return (
    <header
      className="site-header"
      onKeyDown={(event) => {
        if (event.key === "Escape" && menuOpen) {
          setMenuOpen(false);
          menuButton.current?.focus();
        }
      }}
    >
      <div className="site-shell header-inner">
        <a
          className="wordmark"
          href="#top"
          aria-label="Operon Group home"
          onClick={() => setMenuOpen(false)}
        >
          Operon Group
        </a>
        <button
          className="menu-toggle"
          type="button"
          ref={menuButton}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "Close" : "Menu"}
          <span aria-hidden="true">{menuOpen ? "−" : "+"}</span>
        </button>
        <nav
          id="primary-navigation"
          className={`primary-navigation${menuOpen ? " is-open" : ""}`}
          aria-label="Main navigation"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            className="nav-founder"
            href="#founder"
            onClick={() => setMenuOpen(false)}
          >
            Meet the founder <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
