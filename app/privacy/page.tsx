export default function PrivacyPage() {
  return (
    <main
      style={{
        backgroundColor: "var(--paper)",
        color: "var(--black)",
        fontFamily: "Georgia, 'Times New Roman', serif",
        minHeight: "100vh",
        padding: "4rem 1.5rem",
      }}
    >
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <nav style={{ marginBottom: "2rem" }}>
          <a
            href="/"
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "clamp(14px, 1.25vw, 16px)",
              color: "var(--black)",
              textDecoration: "none",
            }}
          >
            ← Operon Group
          </a>
        </nav>
        <header style={{ marginBottom: "3rem" }}>
          <p style={{ textTransform: "uppercase", letterSpacing: "0.2em", fontSize: 12, color: "var(--phthalo)", marginBottom: "0.75rem" }}>
            Privacy Policy
          </p>
          <h1 style={{ fontSize: "clamp(38px, 4.5vw, 56px)", fontWeight: "normal", margin: 0, lineHeight: 1.05 }}>
            The Operon Group LLC Privacy Policy
          </h1>
          <p style={{ marginTop: "1rem", fontSize: "clamp(15px, 1.2vw, 18px)", lineHeight: 1.8, maxWidth: 780, color: "var(--black)" }}>
            The Operon Group LLC is a Texas-registered venture and operational infrastructure company. This page explains how we collect and use information, cookies and related technologies, third party services, and how to contact us.
          </p>
        </header>

        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "clamp(26px, 3vw, 34px)", marginBottom: "1rem" }}>Data Collection</h2>
          <p style={{ fontSize: "16px", lineHeight: 1.8, color: "var(--black)" }}>
            We collect information that you voluntarily provide when you contact us, subscribe to updates, or otherwise interact with this site. We may also collect technical data about your device and browsing session, including IP address, browser type, and pages viewed. This information helps us improve the site and better understand how visitors engage with our services.
          </p>
        </section>

        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "clamp(26px, 3vw, 34px)", marginBottom: "1rem" }}>Cookies</h2>
          <p style={{ fontSize: "16px", lineHeight: 1.8, color: "var(--black)" }}>
            We use cookies and similar technologies to enhance your experience, remember preferences, and support site functionality. Cookies may be session-based or persistent and are used for analytics, navigation, and security. Most browsers allow you to disable cookies, but some features of the site may not function as intended if cookies are blocked.
          </p>
        </section>

        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "clamp(26px, 3vw, 34px)", marginBottom: "1rem" }}>Third Party Services</h2>
          <p style={{ fontSize: "16px", lineHeight: 1.8, color: "var(--black)" }}>
            We may use third party service providers for analytics, hosting, and other operational needs. These providers may collect information on our behalf to help us better understand usage patterns and maintain the site. We do not control the privacy practices of third parties and encourage you to review their privacy policies.
          </p>
        </section>

        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "clamp(26px, 3vw, 34px)", marginBottom: "1rem" }}>Contact Information</h2>
          <p style={{ fontSize: "16px", lineHeight: 1.8, color: "var(--black)" }}>
            If you have questions about this privacy policy or your personal data, please contact us at:
          </p>
          <p style={{ fontSize: "16px", lineHeight: 1.8, color: "var(--black)", marginTop: "1rem" }}>
            The Operon Group LLC<br />
            Texas, United States<br />
            Email: hello@theoperongroup.com
          </p>
        </section>

        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "clamp(26px, 3vw, 34px)", marginBottom: "1rem" }}>Disclaimer</h2>
          <p style={{ fontSize: "16px", lineHeight: 1.8, color: "var(--black)" }}>
            Operon Group LLC is not a registered investment advisor. Nothing on this site constitutes investment advice, a recommendation, or an offer to buy or sell securities. Any information provided here is for general informational purposes only.
          </p>
        </section>
      </div>
    </main>
  );
}
