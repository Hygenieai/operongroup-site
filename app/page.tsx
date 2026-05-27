"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

// ── Data ─────────────────────────────────────────────────────
const ALL_VENTURES = [
  {
    name: "Spark Consulting, LLC",
    tag: "Healthcare Consulting & Technology",
    year: "2022",
    status: "Live · Revenue",
    description:
      "Helps dermatology practices optimize revenue, operations, and performance through data-driven consulting and technology infrastructure.",
    url: "sparkhealthcareconsulting.com",
    href: "https://sparkhealthcareconsulting.com",
  },
  {
    name: "Hygenie.ai",
    tag: "Sales Execution & Intelligence",
    year: "2023",
    status: "In Development",
    description:
      "Real-time AI coaching overlay for founder-led B2B demos. Detects failure patterns live and surfaces exact corrective language during the call.",
    url: "hygenieai.com",
    href: "https://hygenieai.com",
  },
  {
    name: "Replaunch.io",
    tag: "Career Intelligence Platform",
    year: "2024",
    status: "Live Beta",
    description:
      "Job search intelligence platform. AI-powered resume and job match engine for candidates re-entering or repositioning in the market.",
    url: "replaunch.io",
    href: "https://replaunch.io",
  },
  {
    name: "Qube",
    tag: "Productivity & Workflow",
    year: "2024",
    status: "In Development",
    description:
      "Intelligent workspace infrastructure for modern operators. Structured execution environments built for teams that move fast.",
    url: "",
    href: "",
  },
  {
    name: "Bloqworx",
    tag: "Business Infrastructure",
    year: "2024",
    status: "In Development",
    description:
      "Modular business infrastructure platform. Operational building blocks for companies that need to scale without rebuilding from scratch.",
    url: "bloqworx.com",
    href: "https://www.bloqworx.com",
  },
  {
    name: "Ascendra Consulting Collective",
    tag: "Management Consulting",
    year: "2022",
    status: "Live · Revenue",
    description:
      "High-performance consulting collective for growth-stage companies. Strategy, operations, and execution architecture for businesses at the inflection point.",
    url: "ascendracollective.com",
    href: "https://ascendracollective.com",
  },
];

const NAV_LINKS = [
  { label: "Ventures", href: "#ventures" },
  { label: "Leadership", href: "#leadership" },
  { label: "Contact", href: "#contact" },
];

// ── Helpers ───────────────────────────────────────────────────
function scrollTo(id: string) {
  const el = document.getElementById(id.replace("#", ""));
  if (!el) return;
  const offset = 72;
  const top = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: "smooth" });
}

function statusColor(status: string): string {
  const s = status.toLowerCase();
  if (s.includes("live") || s.includes("revenue")) return "#22C55E";
  if (s.includes("beta")) return "#22C55E";
  if (s.includes("active")) return "#22C55E";
  return "#8C6A3F";
}

// ── useReveal hook ────────────────────────────────────────────
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

// ── Bronze Divider ────────────────────────────────────────────
function BronzeDivider() {
  return (
    <div style={{ height: 2, backgroundColor: "#8C6A3F", width: "100%" }} />
  );
}

// ── Nav ───────────────────────────────────────────────────────
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backgroundColor: scrolled ? "#F2EDE4" : "transparent",
        borderBottom: scrolled ? "1px solid #D9D3C8" : "1px solid transparent",
        transition: "background-color 300ms ease-out, border-color 300ms ease-out",
        padding: "0 2rem",
        height: 64,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <a
        href="#"
        onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
        style={{
          fontFamily: "'Courier New', Courier, monospace",
          fontSize: 13,
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: scrolled ? "#1C2333" : "#F2EDE4",
          textDecoration: "none",
          transition: "color 300ms ease-out",
          fontWeight: "normal",
        }}
      >
        OPERON GROUP
      </a>

      {/* Desktop links */}
      <div style={{ display: "flex", gap: "2.5rem", alignItems: "center" }}>
        {NAV_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
            style={{
              fontFamily: "'Courier New', Courier, monospace",
              fontSize: 11,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: scrolled ? "#6B7280" : "rgba(242,237,228,0.7)",
              textDecoration: "none",
              transition: "color 180ms ease-out",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = scrolled ? "#1C2333" : "#F2EDE4")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = scrolled ? "#6B7280" : "rgba(242,237,228,0.7)")}
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Mobile hamburger */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        style={{
          display: "none",
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: 4,
        }}
        className="md:hidden"
        aria-label="Toggle menu"
      >
        <div style={{ width: 22, height: 1, backgroundColor: scrolled ? "#1C2333" : "#F2EDE4", marginBottom: 6 }} />
        <div style={{ width: 22, height: 1, backgroundColor: scrolled ? "#1C2333" : "#F2EDE4" }} />
      </button>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          style={{
            position: "absolute",
            top: 64,
            left: 0,
            right: 0,
            backgroundColor: "#F2EDE4",
            borderBottom: "1px solid #D9D3C8",
            padding: "1.5rem 2rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem",
          }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => { e.preventDefault(); scrollTo(link.href); setMobileOpen(false); }}
              style={{
                fontFamily: "'Courier New', Courier, monospace",
                fontSize: 12,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#6B7280",
                textDecoration: "none",
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

// ── Hero ──────────────────────────────────────────────────────
function Hero() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        paddingTop: "clamp(120px, 18vh, 200px)",
        overflow: "hidden",
      }}
    >
      {/* Background image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('/hero-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.38)",
          zIndex: 0,
        }}
      />
      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom, rgba(28,35,51,0.55) 0%, rgba(28,35,51,0.2) 60%, rgba(28,35,51,0.7) 100%)",
          zIndex: 1,
        }}
      />

      <div
        style={{ position: "relative", zIndex: 2, maxWidth: 1440, margin: "0 auto", width: "100%" }}
        className="px-6 md:px-16"
      >
        <h1
          className="reveal reveal-delay-1"
          style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontSize: "clamp(42px, 6vw, 76px)",
            fontWeight: "normal",
            color: "#F2EDE4",
            maxWidth: 820,
            lineHeight: 1.1,
            letterSpacing: "-0.025em",
            marginBottom: "1.75rem",
          }}
        >
          A venture and operational infrastructure company that scales execution and revenue for founders and operators.
        </h1>

        <p
          className="reveal reveal-delay-2"
          style={{
            fontFamily: "'Courier New', Courier, monospace",
            fontSize: "clamp(13px, 1.4vw, 16px)",
            color: "rgba(242,237,228,0.75)",
            maxWidth: 580,
            lineHeight: 1.85,
            marginBottom: "3rem",
          }}
        >
          Operon Group converts strategic signals into governed frameworks, coordinated operations, and execution environments built for long-term growth and leverage.
        </p>

      </div>

      {/* Bottom rule */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 2,
          backgroundColor: "#8C6A3F",
          zIndex: 3,
        }}
      />
    </section>
  );
}

// ── Definition Strip ──────────────────────────────────────────
function DefinitionStrip() {
  return (
    <section
      style={{
        backgroundColor: "#111827",
        padding: "5rem 0",
      }}
    >
      <div
        style={{ maxWidth: 1440, margin: "0 auto" }}
        className="px-6 md:px-16"
      >
        {/* Top rule */}
        <div style={{ height: 1, backgroundColor: "#2E3545", marginBottom: "3.5rem" }} />

        {/* Word + phonetic */}
        <div style={{ display: "flex", alignItems: "baseline", gap: "1.25rem", marginBottom: "1.75rem", flexWrap: "wrap" }}>
          <span
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "clamp(52px, 7vw, 96px)",
              fontWeight: "normal",
              color: "#F2EDE4",
              lineHeight: 1,
              letterSpacing: "-0.03em",
            }}
          >
            Operon
          </span>
          <span
            style={{
              fontFamily: "'Courier New', Courier, monospace",
              fontSize: 14,
              color: "#8FA3B1",
              letterSpacing: "0.04em",
            }}
          >
            /ˈɒp.ə.rɒn/
          </span>
          <span
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: 15,
              color: "#8C6A3F",
              fontStyle: "italic",
            }}
          >
            n.
          </span>
        </div>

        {/* Definition body */}
        <p
          style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontSize: "clamp(18px, 2.2vw, 28px)",
            color: "#E8E3DA",
            lineHeight: 1.5,
            maxWidth: 680,
            marginBottom: "2.5rem",
            fontWeight: "normal",
          }}
        >
          A coordinated operational structure where multiple functions operate together under shared governance to produce efficient, adaptive outcomes.
        </p>

        {/* Etymology blockquote */}
        <blockquote
          style={{
            borderLeft: "3px solid #2E3545",
            paddingLeft: "1.5rem",
            margin: 0,
            maxWidth: 560,
          }}
        >
          <p
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "clamp(13px, 1.3vw, 15px)",
              color: "#6B7280",
              fontStyle: "italic",
              lineHeight: 1.75,
              margin: 0,
            }}
          >
            From molecular biology. Adopted because the metaphor is exact — ventures, infrastructure, and execution layers operate together as one regulated unit, not as isolated efforts.
          </p>
        </blockquote>
      </div>
    </section>
  );
}

// ── Ventures Ticker ───────────────────────────────────────────
function VenturesTicker() {
  const [active, setActive] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % ALL_VENTURES.length);
    }, 3800);
  };

  useEffect(() => {
    startTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  const goTo = (i: number) => {
    setActive(i);
    if (timerRef.current) clearInterval(timerRef.current);
    startTimer();
  };

  const v = ALL_VENTURES[active];
  const tickerItems = [...ALL_VENTURES, ...ALL_VENTURES];

  return (
    <>
      <section
        id="ventures"
        style={{ backgroundColor: "#1C2333", padding: "7rem 0 4rem" }}
      >
        <div
          style={{ maxWidth: 1440, margin: "0 auto" }}
          className="px-6 md:px-16"
        >
          {/* Header */}
          <div style={{ marginBottom: "4rem", display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "1rem" }}>
            <div>
              <div className="section-label" style={{ marginBottom: "0.75rem" }}>Portfolio in Motion</div>
              <h2
                className="reveal"
                style={{
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  fontSize: "clamp(28px, 3.5vw, 48px)",
                  fontWeight: "normal",
                  color: "#F2EDE4",
                  lineHeight: 1.15,
                  letterSpacing: "-0.02em",
                  margin: 0,
                }}
              >
                Companies we&apos;re building.
              </h2>
            </div>
            <div style={{ display: "flex", gap: "0.5rem" }}>
              {ALL_VENTURES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  style={{
                    width: i === active ? 24 : 8,
                    height: 8,
                    backgroundColor: i === active ? "#8C6A3F" : "#2E3545",
                    border: "none",
                    cursor: "pointer",
                    transition: "all 300ms ease-out",
                    padding: 0,
                  }}
                  aria-label={`Go to ${ALL_VENTURES[i].name}`}
                />
              ))}
            </div>
          </div>

          {/* Main card */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "3rem",
              marginBottom: "3rem",
            }}
            className="md:grid-cols-[1fr_1fr]"
          >
            {/* Left — company info */}
            <div
              style={{
                borderTop: "2px solid #8C6A3F",
                paddingTop: "2.5rem",
              }}
            >
              <div
                style={{
                  fontFamily: "'Courier New', Courier, monospace",
                  fontSize: 11,
                  letterSpacing: "0.18em",
                  color: "#8FA3B1",
                  textTransform: "uppercase",
                  marginBottom: "0.5rem",
                }}
              >
                {v.year} · {v.tag}
              </div>

              <h3
                style={{
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  fontSize: "clamp(32px, 4vw, 56px)",
                  fontWeight: "normal",
                  color: "#F2EDE4",
                  lineHeight: 1.05,
                  letterSpacing: "-0.025em",
                  marginBottom: "1.5rem",
                  transition: "all 400ms ease-out",
                }}
              >
                {v.href ? (
                  <a
                    href={v.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "inherit",
                      textDecoration: "none",
                      transition: "color 200ms ease-out",
                    }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#8C6A3F")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#F2EDE4")}
                  >
                    {v.name} <span style={{ fontSize: "0.5em", verticalAlign: "super" }}>↗</span>
                  </a>
                ) : v.name}
              </h3>

              <p
                style={{
                  fontFamily: "'Courier New', Courier, monospace",
                  fontSize: 14,
                  color: "#8FA3B1",
                  lineHeight: 1.85,
                  maxWidth: 440,
                  marginBottom: "2.5rem",
                }}
              >
                {v.description}
              </p>

              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <span
                  style={{
                    fontFamily: "'Courier New', Courier, monospace",
                    fontSize: 10,
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: statusColor(v.status),
                    border: `1px solid ${statusColor(v.status)}`,
                    padding: "3px 10px",
                  }}
                >
                  {v.status}
                </span>
                {v.url && (
                  <span
                    style={{
                      fontFamily: "'Courier New', Courier, monospace",
                      fontSize: 11,
                      color: "#4B5563",
                      letterSpacing: "0.06em",
                    }}
                  >
                    {v.url}
                  </span>
                )}
              </div>
            </div>

            {/* Right — nav arrows + all names */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                paddingTop: "2.5rem",
                borderTop: "1px solid #2E3545",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {ALL_VENTURES.map((venture, i) => (
                  <button
                    key={venture.name}
                    onClick={() => goTo(i)}
                    style={{
                      background: "none",
                      border: "none",
                      textAlign: "left",
                      cursor: "pointer",
                      padding: "0.6rem 0",
                      borderBottom: "1px solid #2E3545",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      transition: "all 180ms ease-out",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "Georgia, 'Times New Roman', serif",
                        fontSize: i === active ? 17 : 14,
                        color: i === active ? "#F2EDE4" : "#4B5563",
                        transition: "all 180ms ease-out",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {venture.name}
                    </span>
                    <span
                      style={{
                        fontFamily: "'Courier New', Courier, monospace",
                        fontSize: 9,
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: statusColor(venture.status),
                        opacity: i === active ? 1 : 0.4,
                      }}
                    >
                      {venture.status}
                    </span>
                  </button>
                ))}
              </div>

              <div style={{ display: "flex", gap: "0.75rem", marginTop: "2rem" }}>
                <button
                  onClick={() => goTo((active - 1 + ALL_VENTURES.length) % ALL_VENTURES.length)}
                  style={{
                    width: 44,
                    height: 44,
                    border: "1px solid #2E3545",
                    backgroundColor: "transparent",
                    color: "#8FA3B1",
                    fontSize: 18,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 180ms ease-out",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = "#8C6A3F"; (e.currentTarget as HTMLButtonElement).style.color = "#8C6A3F"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = "#2E3545"; (e.currentTarget as HTMLButtonElement).style.color = "#8FA3B1"; }}
                  aria-label="Previous venture"
                >
                  ←
                </button>
                <button
                  onClick={() => goTo((active + 1) % ALL_VENTURES.length)}
                  style={{
                    width: 44,
                    height: 44,
                    border: "1px solid #2E3545",
                    backgroundColor: "transparent",
                    color: "#8FA3B1",
                    fontSize: 18,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 180ms ease-out",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = "#8C6A3F"; (e.currentTarget as HTMLButtonElement).style.color = "#8C6A3F"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = "#2E3545"; (e.currentTarget as HTMLButtonElement).style.color = "#8FA3B1"; }}
                  aria-label="Next venture"
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Ticker */}
        <div
          style={{
            borderTop: "1px solid #2E3545",
            borderBottom: "1px solid #2E3545",
            overflow: "hidden",
            padding: "0.85rem 0",
            marginTop: "2rem",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "3rem",
              animation: "ticker-scroll 28s linear infinite",
              width: "max-content",
            }}
          >
            {tickerItems.map((item, i) => (
              <span
                key={i}
                style={{
                  fontFamily: "'Courier New', Courier, monospace",
                  fontSize: 11,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#4B5563",
                  whiteSpace: "nowrap",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                }}
              >
                {item.name}
                <span style={{ color: "#2E3545" }}>·</span>
              </span>
            ))}
          </div>
        </div>
      </section>
      <BronzeDivider />
    </>
  );
}

// ── Leadership ────────────────────────────────────────────────
function Leadership() {
  return (
    <>
      <section
        id="leadership"
        style={{ backgroundColor: "#F2EDE4", padding: "7rem 0" }}
      >
        <div
          style={{ maxWidth: 1440, margin: "0 auto" }}
          className="px-6 md:px-16"
        >
          <div style={{ marginBottom: "4rem" }}>
            <h2
              className="reveal"
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "clamp(28px, 3.5vw, 48px)",
                fontWeight: "normal",
                color: "#1C2333",
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
              }}
            >
              The people behind the work.
            </h2>
          </div>

          {/* Jake Weber card */}
          <div
            style={{
              backgroundColor: "#EDE8DF",
              border: "1px solid #D9D3C8",
              padding: "3rem",
              display: "flex",
              gap: "2.5rem",
              alignItems: "flex-start",
              flexWrap: "wrap",
            }}
          >
            {/* Portrait */}
            <div
              className="reveal"
              style={{
                width: 180,
                height: 220,
                flexShrink: 0,
                overflow: "hidden",
                border: "1px solid #D9D3C8",
                position: "relative",
              }}
            >
              <Image
                src="/jake-weber.png"
                alt="Jake Weber — Founder & CEO, Operon Group"
                fill
                style={{ objectFit: "cover", objectPosition: "center 10%" }}
                sizes="180px"
                priority
              />
            </div>

            {/* Bio */}
            <div
              style={{
                flex: 1,
                minWidth: 260,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <div
                  className="reveal reveal-delay-1"
                  style={{
                    fontFamily: "'Courier New', Courier, monospace",
                    fontSize: 11,
                    letterSpacing: "0.18em",
                    color: "#8FA3B1",
                    textTransform: "uppercase",
                    marginBottom: "0.35rem",
                  }}
                >
                  Founder & CEO
                </div>
                <div
                  className="reveal reveal-delay-2"
                  style={{
                    fontFamily: "Georgia, 'Times New Roman', serif",
                    fontSize: 28,
                    color: "#1C2333",
                    letterSpacing: "-0.01em",
                    marginBottom: "1.25rem",
                  }}
                >
                  Jake Weber
                </div>
                <p
                  className="reveal reveal-delay-3"
                  style={{
                    fontFamily: "'Courier New', Courier, monospace",
                    fontSize: 13,
                    color: "#6B7280",
                    lineHeight: 1.9,
                    marginBottom: "2rem",
                    maxWidth: 520,
                  }}
                >
                  Operator and founder. Built revenue-generating businesses across sales, AI, and technology. Operon is the infrastructure layer for what gets built next.
                </p>
              </div>

              <div>
                <div
                  className="reveal reveal-delay-4"
                  style={{
                    display: "flex",
                    gap: "2.5rem",
                    borderTop: "1px solid #D9D3C8",
                    paddingTop: "1.5rem",
                    marginTop: "2rem",
                    marginBottom: "1.5rem",
                  }}
                >
                  {[
                    { label: "Ventures Led", value: "6" },
                    { label: "Years Building", value: "10+" },
                    { label: "Est.", value: "2024" },
                  ].map((stat) => (
                    <div key={stat.label}>
                      <div
                        style={{
                          fontFamily: "Georgia, 'Times New Roman', serif",
                          fontSize: 26,
                          color: "#1C2333",
                        }}
                      >
                        {stat.value}
                      </div>
                      <div
                        style={{
                          fontFamily: "'Courier New', Courier, monospace",
                          fontSize: 11,
                          letterSpacing: "0.12em",
                          color: "#8FA3B1",
                          textTransform: "uppercase",
                        }}
                      >
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                <a
                  className="reveal reveal-delay-5"
                  href="https://www.linkedin.com/in/jake-weber-b03625135/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: "'Courier New', Courier, monospace",
                    fontSize: 11,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "#8FA3B1",
                    textDecoration: "none",
                    borderBottom: "1px solid #8FA3B1",
                    paddingBottom: 2,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="#0A66C2" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn — Jake Weber
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <BronzeDivider />
    </>
  );
}

// ── Contact ───────────────────────────────────────────────────
function Contact() {
  const [form, setForm] = useState({ name: "", company: "", email: "", building: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      style={{ backgroundColor: "#F2EDE4", padding: "8rem 0" }}
    >
      <div
        style={{ maxWidth: 1440, margin: "0 auto" }}
        className="px-6 md:px-16"
      >
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr", gap: "5rem" }}
          className="md:grid-cols-[1fr_1fr]"
        >
          {/* Left */}
          <div>
            <h2
              className="reveal"
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "clamp(32px, 4vw, 58px)",
                fontWeight: "normal",
                color: "#1C2333",
                lineHeight: 1.1,
                letterSpacing: "-0.025em",
                marginBottom: "2rem",
              }}
            >
              If the execution gap is the problem,
              <br />
              we&apos;re the conversation.
            </h2>
            <p
              className="reveal reveal-delay-1"
              style={{
                fontFamily: "'Courier New', Courier, monospace",
                fontSize: 14,
                color: "#6B7280",
                lineHeight: 1.85,
                maxWidth: 460,
                marginBottom: "2.5rem",
              }}
            >
              We talk to founders, operators, and investors who are serious about building companies that run on systems — not personalities. We move quickly and speak plainly.
            </p>
          </div>

          {/* Right — form */}
          <div className="reveal reveal-delay-2">
            {submitted ? (
              <div
                style={{
                  padding: "3rem",
                  border: "1px solid #D9D3C8",
                  backgroundColor: "#EDE8DF",
                }}
              >
                <div style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontSize: 22, color: "#1C2333", marginBottom: "0.75rem" }}>
                  Message received.
                </div>
                <div style={{ fontFamily: "'Courier New', Courier, monospace", fontSize: 13, color: "#6B7280", lineHeight: 1.8 }}>
                  We&apos;ll be in touch shortly.
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                {[
                  { id: "name", label: "Name", type: "text", placeholder: "Your name" },
                  { id: "company", label: "Company", type: "text", placeholder: "Company name" },
                  { id: "email", label: "Email", type: "email", placeholder: "your@email.com" },
                ].map((field) => (
                  <div key={field.id} style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                    <label
                      htmlFor={field.id}
                      style={{ fontFamily: "'Courier New', Courier, monospace", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "#8FA3B1" }}
                    >
                      {field.label}
                    </label>
                    <input
                      id={field.id}
                      type={field.type}
                      required
                      placeholder={field.placeholder}
                      value={(form as Record<string, string>)[field.id]}
                      onChange={(e) => setForm({ ...form, [field.id]: e.target.value })}
                      style={{
                        fontFamily: "'Courier New', Courier, monospace",
                        fontSize: 13,
                        color: "#1C2333",
                        backgroundColor: "transparent",
                        border: "none",
                        borderBottom: "1px solid #D9D3C8",
                        padding: "0.6rem 0",
                        outline: "none",
                        width: "100%",
                        transition: "border-color 180ms ease-out",
                      }}
                      onFocus={(e) => (e.target.style.borderBottomColor = "#1C2333")}
                      onBlur={(e) => (e.target.style.borderBottomColor = "#D9D3C8")}
                    />
                  </div>
                ))}
                <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                  <label htmlFor="building" style={{ fontFamily: "'Courier New', Courier, monospace", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "#8FA3B1" }}>
                    What are you building?
                  </label>
                  <textarea
                    id="building"
                    required
                    rows={4}
                    placeholder="Describe what you're working on..."
                    value={form.building}
                    onChange={(e) => setForm({ ...form, building: e.target.value })}
                    style={{
                      fontFamily: "'Courier New', Courier, monospace",
                      fontSize: 13,
                      color: "#1C2333",
                      backgroundColor: "transparent",
                      border: "1px solid #D9D3C8",
                      padding: "0.75rem",
                      outline: "none",
                      width: "100%",
                      resize: "vertical",
                      transition: "border-color 180ms ease-out",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#1C2333")}
                    onBlur={(e) => (e.target.style.borderColor = "#D9D3C8")}
                  />
                </div>
                <button
                  type="submit"
                  style={{
                    fontFamily: "'Courier New', Courier, monospace",
                    fontSize: 12,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    padding: "14px 32px",
                    backgroundColor: "#1C2333",
                    color: "#F2EDE4",
                    border: "1px solid #1C2333",
                    cursor: "pointer",
                    transition: "all 180ms ease-out",
                    alignSelf: "flex-start",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#8C6A3F"; (e.currentTarget as HTMLButtonElement).style.borderColor = "#8C6A3F"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#1C2333"; (e.currentTarget as HTMLButtonElement).style.borderColor = "#1C2333"; }}
                >
                  Start the Conversation
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Footer ────────────────────────────────────────────────────
function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#0F1520",
        borderTop: "1px solid #2E3545",
        padding: "2rem 0",
      }}
    >
      <div
        style={{
          maxWidth: 1440,
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1rem",
        }}
        className="px-6 md:px-16"
      >
        <div style={{ fontFamily: "'Courier New', Courier, monospace", fontSize: 11, letterSpacing: "0.1em", color: "#4B5563" }}>
          © 2024 The Operon Group LLC. All rights reserved.
        </div>
        <a
          href="https://www.linkedin.com/in/jake-weber-b03625135/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: "'Courier New', Courier, monospace",
            fontSize: 11,
            letterSpacing: "0.1em",
            color: "#4B5563",
            textDecoration: "none",
            transition: "color 150ms ease-out",
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#F2EDE4")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#4B5563")}
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}

// ── Page ──────────────────────────────────────────────────────
export default function Page() {
  useReveal();

  return (
    <div style={{ backgroundColor: "#F2EDE4", minHeight: "100vh" }}>
      <Nav />
      <Hero />
      <DefinitionStrip />
      <VenturesTicker />
      <Leadership />
      <Contact />
      <Footer />
    </div>
  );
}
