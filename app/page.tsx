import Image from "next/image";
import { SiteHeader } from "./components/site-header";

const pathways = [
  {
    number: "01",
    id: "commercial-real-estate",
    title: "Commercial Real Estate",
    line: "Understand the property. Qualify the opportunity.",
    description:
      "We are developing a commercial real estate capability that connects property and ownership research with opportunity qualification and coordinated next steps.",
    details: [
      "Property & ownership research",
      "Opportunity qualification",
      "Coordinated next steps",
    ],
    status: "In development",
  },
  {
    number: "02",
    id: "technology",
    title: "Technology",
    line: "Build around the decision that needs to happen.",
    description:
      "Useful products and systems bring relevant information into the flow of work. Our technology direction focuses on specific operating problems, from evaluating a career move to preparing for a better sales conversation.",
    details: [
      "Focused product development",
      "Decision support",
      "Connected workflows",
    ],
    href: "#selected-work",
    link: "Explore the product examples",
  },
  {
    number: "03",
    id: "consulting",
    title: "Consulting",
    line: "See the operating problem. Organize the next step.",
    description:
      "Our consulting approach connects operational diagnosis, executive visibility, and implementation. The aim is to make priorities clear, responsibilities explicit, and the work easier to coordinate.",
    details: [
      "Operational diagnosis",
      "Executive visibility",
      "Implementation",
    ],
    href: "#founder",
    link: "Meet the founder",
  },
];

const products = [
  {
    name: "RepLaunch",
    category: "Career intelligence",
    description:
      "A platform for matching experience to sales roles, identifying gaps, and organizing a more focused job search.",
    href: "https://replaunch.io",
    domain: "replaunch.io",
  },
  {
    name: "Hygenie.ai",
    category: "Sales demo coaching",
    description:
      "A real-time demo coaching product for founder-led B2B teams, with a public beta-access program.",
    href: "https://hygenieai.com",
    domain: "hygenieai.com",
  },
];

export default function HomePage() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <div id="top" />
      <SiteHeader />
      <main id="main-content" tabIndex={-1}>
        <section className="hero" aria-labelledby="hero-heading">
          <div className="site-shell hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Information. Decisions. Execution.</p>
              <h1 id="hero-heading">
                Clarity first.
                <br />
                Then coordinated
                <br />
                <em>action.</em>
              </h1>
              <p className="hero-description">
                Operon Group turns fragmented information into informed
                decisions and coordinated execution across commercial real
                estate, technology, and business operations.
              </p>
              <a className="button button-paper" href="#pathways">
                Explore the pathways <span aria-hidden="true">↘</span>
              </a>
            </div>
            <figure className="hero-image">
              <div className="hero-photo">
                <Image
                  src="/hero-bg.jpg"
                  alt="A quiet conference room with a long table and large windows"
                  fill
                  priority
                  sizes="(max-width: 760px) 100vw, 42vw"
                />
              </div>
              <figcaption>
                <span>A practical operating perspective</span>
                <span aria-hidden="true">01 — 03</span>
              </figcaption>
            </figure>
          </div>
          <div
            className="site-shell hero-index"
            role="navigation"
            aria-label="Explore Operon pathways"
          >
            {pathways.map((pathway) => (
              <a href={`#${pathway.id}`} key={pathway.id}>
                <span className="index-number">{pathway.number}</span>
                <span>{pathway.title}</span>
                <span className="index-arrow" aria-hidden="true">
                  ↓
                </span>
              </a>
            ))}
          </div>
        </section>

        <section
          className="approach section-space"
          id="approach"
          aria-labelledby="approach-heading"
        >
          <div className="site-shell approach-grid">
            <div>
              <p className="approach-label">The Operon approach</p>
              <h2 id="approach-heading">
                Information matters
                <br />
                when it moves
                <br />
                the work forward.
              </h2>
            </div>
            <ol className="approach-steps">
              <li>
                <span className="step-number">01</span>
                <div>
                  <h3>Establish the picture.</h3>
                  <p>
                    Bring scattered information together. Identify what is
                    known, what is missing, and what needs a closer look.
                  </p>
                </div>
              </li>
              <li>
                <span className="step-number">02</span>
                <div>
                  <h3>Make the decision clear.</h3>
                  <p>
                    Put evidence and constraints in context so the next move has
                    a reason behind it.
                  </p>
                </div>
              </li>
              <li>
                <span className="step-number">03</span>
                <div>
                  <h3>Coordinate what comes next.</h3>
                  <p>
                    Connect the decision to priorities, responsibilities, and a
                    practical sequence of work.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </section>

        <section
          className="pathways section-space"
          id="pathways"
          aria-labelledby="pathways-heading"
        >
          <div className="site-shell">
            <div className="section-intro">
              <div>
                <p className="eyebrow">Our focus</p>
                <h2 id="pathways-heading">
                  One company.
                  <br />
                  Three ways forward.
                </h2>
              </div>
              <p className="section-description">
                Different contexts. A common discipline: understand the
                information, clarify the decision, and coordinate the next step.
              </p>
            </div>
            <div className="pathway-list">
              {pathways.map((pathway) => (
                <article
                  className="pathway"
                  id={pathway.id}
                  key={pathway.id}
                  aria-labelledby={`${pathway.id}-heading`}
                >
                  <div className="pathway-title">
                    <span className="eyebrow pathway-number">
                      {pathway.number} / Pathway
                    </span>
                    <h3 id={`${pathway.id}-heading`}>{pathway.title}</h3>
                    {pathway.status ? (
                      <span className="status-label">
                        <span aria-hidden="true" />
                        {pathway.status}
                      </span>
                    ) : null}
                  </div>
                  <div className="pathway-body">
                    <h4>{pathway.line}</h4>
                    <p>{pathway.description}</p>
                    {pathway.href ? (
                      <a className="text-link" href={pathway.href}>
                        {pathway.link} <span aria-hidden="true">↗</span>
                      </a>
                    ) : null}
                  </div>
                  <ul
                    className="pathway-details"
                    aria-label={`${pathway.title} focus areas`}
                  >
                    {pathway.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="selected-work section-space"
          id="selected-work"
          aria-labelledby="work-heading"
        >
          <div className="site-shell">
            <div className="section-intro">
              <div>
                <p className="eyebrow">Supporting work / Technology</p>
                <h2 id="work-heading">
                  Focused problems.
                  <br />
                  Practical products.
                </h2>
              </div>
              <p className="section-description">
                Two product examples, each with its own focus and identity.
                Explore their public sites for current capabilities and
                availability.
              </p>
            </div>
            <div className="product-grid">
              {products.map((product, index) => (
                <article className="product-card" key={product.name}>
                  <p className="eyebrow">
                    0{index + 1} / {product.category}
                  </p>
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <a
                    className="product-link"
                    href={product.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {product.domain}
                    <span aria-hidden="true">↗</span>
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="founder section-space"
          id="founder"
          aria-labelledby="founder-heading"
        >
          <div className="site-shell founder-grid">
            <div className="founder-image">
              <Image
                src="/jake-weber.png"
                alt="Jake Weber, founder of Operon Group"
                fill
                sizes="(max-width: 760px) 100vw, 35vw"
              />
            </div>
            <div className="founder-copy">
              <p className="eyebrow">Founder / Operon Group</p>
              <h2 id="founder-heading">Jake Weber</h2>
              <p className="founder-lead">
                An operating perspective.
                <br />A direct line to the work.
              </p>
              <p>
                Jake leads Operon Group’s work across technology and business
                operations. The focus is practical: make information useful,
                decisions informed, and execution coordinated.
              </p>
              <a
                className="text-link"
                href="https://www.linkedin.com/in/jake-weber-b03625135/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Connect with Jake on LinkedIn <span aria-hidden="true">↗</span>
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <div className="site-shell">
          <div className="footer-main">
            <a className="wordmark" href="#top">
              Operon Group
            </a>
            <p>Information. Decisions. Execution.</p>
            <a className="back-top" href="#top">
              Back to top <span aria-hidden="true">↑</span>
            </a>
          </div>
          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} The Operon Group LLC.</p>
            <nav aria-label="Footer navigation">
              <a href="#pathways">Pathways</a>
              <a href="#founder">Founder</a>
              <a href="/privacy">Privacy policy</a>
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
}
