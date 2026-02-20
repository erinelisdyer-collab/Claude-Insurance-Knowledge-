import Link from "next/link";

const modules = [
  {
    href: "/lloyds",
    title: "Lloyd's of London",
    subtitle: "The Global Specialty Market",
    description:
      "Master the structure of Lloyd's — syndicates, managing agents, delegated authority, slip policy language, and how to access the market as a wholesale broker.",
    accentColor: "amber",
    topics: [
      "Market Structure & Governance",
      "Syndicates & Managing Agents",
      "Delegated Authority & Coverholders",
      "Lloyd's Policy & Slip Language",
      "Accessing the Market",
      "Chain of Security",
    ],
    topicCount: 8,
    stat: "300+",
    statLabel: "Active Syndicates",
  },
  {
    href: "/es-marketplace",
    title: "E&S Marketplace",
    subtitle: "Excess & Surplus Lines",
    description:
      "Understand admitted vs. non-admitted markets, surplus lines regulation by state, stamping offices, diligent effort requirements, and CRC's role in the distribution chain.",
    accentColor: "blue",
    topics: [
      "Admitted vs. Non-Admitted",
      "Surplus Lines Regulation",
      "Stamping Offices & Compliance",
      "Diligent Effort Requirements",
      "Key E&S Carriers",
      "Wholesale Broker's Role",
    ],
    topicCount: 7,
    stat: "$100B+",
    statLabel: "US E&S Premium",
  },
  {
    href: "/pc-coverage",
    title: "P&C Coverage",
    subtitle: "Property & Casualty Fundamentals",
    description:
      "Deep dive into commercial property forms, causes of loss, business income, valuation methods, CGL, umbrella/excess, professional liability, cyber, and more.",
    accentColor: "cyan",
    topics: [
      "Commercial Property (ISO Forms)",
      "Business Income & Extra Expense",
      "Builder's Risk & Inland Marine",
      "Commercial General Liability",
      "Umbrella & Excess",
      "Professional Liability & Cyber",
    ],
    topicCount: 12,
    stat: "25+",
    statLabel: "Coverage Lines",
  },
];

const quickFacts = [
  {
    label: "Lloyd's Founded",
    value: "1688",
    detail: "Edward Lloyd's Coffee House, London",
  },
  {
    label: "E&S Market Share",
    value: "~9%",
    detail: "Of total US P&C premium",
  },
  {
    label: "CRC Group Founded",
    value: "1982",
    detail: "One of the largest US wholesale brokers",
  },
  {
    label: "NRRA Enacted",
    value: "2010",
    detail: "Streamlined surplus lines regulation",
  },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-grid">
      {/* Hero */}
      <div className="relative px-6 py-16 md:py-20 border-b border-border-subtle">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/5 via-transparent to-accent-amber/5 pointer-events-none" />
        <div className="relative max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-blue/10 border border-accent-blue/20 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-accent-blue animate-pulse"></div>
            <span className="text-xs font-medium text-accent-blue-light">
              CRC Insurance Brokerage — Leadership Learning
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-text-primary leading-tight mb-4">
            Insurance
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-cyan">
              {" "}
              Knowledge Hub
            </span>
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl leading-relaxed">
            Everything you need to master the Lloyd's market, the US E&S
            marketplace, and property & casualty coverage — built for wholesale
            insurance leaders.
          </p>
          <div className="flex items-center gap-4 mt-6">
            <Link
              href="/lloyds"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-accent-blue text-white text-sm font-semibold hover:bg-blue-500 transition-colors"
            >
              Start Learning
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
            <span className="text-sm text-text-muted">
              3 modules · AI tutor included
            </span>
          </div>
        </div>
      </div>

      <div className="px-6 py-10 space-y-10 max-w-5xl">
        {/* Quick facts */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {quickFacts.map((fact) => (
            <div
              key={fact.label}
              className="bg-bg-secondary border border-border-subtle rounded-xl p-4"
            >
              <p className="text-2xl font-bold text-text-primary">{fact.value}</p>
              <p className="text-xs font-semibold text-accent-blue-light mt-0.5">
                {fact.label}
              </p>
              <p className="text-xs text-text-muted mt-1">{fact.detail}</p>
            </div>
          ))}
        </div>

        {/* Module cards */}
        <div>
          <h2 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-4">
            Learning Modules
          </h2>
          <div className="grid md:grid-cols-1 gap-4">
            {modules.map((mod) => (
              <Link key={mod.href} href={mod.href} className="group block">
                <div
                  className={`
                  bg-bg-secondary border border-border-subtle rounded-xl p-6
                  hover:border-${mod.accentColor === "amber" ? "accent-amber" : mod.accentColor === "blue" ? "accent-blue" : "accent-cyan"}/40
                  transition-all duration-200 hover:bg-bg-tertiary
                `}
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    {/* Left: content */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <div
                            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium mb-2
                            ${
                              mod.accentColor === "amber"
                                ? "bg-accent-amber/10 text-accent-amber border border-accent-amber/20"
                                : mod.accentColor === "blue"
                                ? "bg-accent-blue/10 text-accent-blue-light border border-accent-blue/20"
                                : "bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20"
                            }
                          `}
                          >
                            {mod.subtitle}
                          </div>
                          <h3 className="text-xl font-bold text-text-primary group-hover:text-white transition-colors">
                            {mod.title}
                          </h3>
                        </div>
                        <div className="text-right hidden md:block">
                          <p
                            className={`text-2xl font-bold ${
                              mod.accentColor === "amber"
                                ? "text-accent-amber"
                                : mod.accentColor === "blue"
                                ? "text-accent-blue-light"
                                : "text-accent-cyan"
                            }`}
                          >
                            {mod.stat}
                          </p>
                          <p className="text-xs text-text-muted">
                            {mod.statLabel}
                          </p>
                        </div>
                      </div>
                      <p className="text-sm text-text-secondary leading-relaxed mb-4">
                        {mod.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {mod.topics.map((topic) => (
                          <span
                            key={topic}
                            className="px-2.5 py-1 rounded-md bg-bg-primary border border-border-subtle text-xs text-text-secondary"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right: CTA */}
                    <div className="flex md:flex-col items-center md:items-end gap-3 md:gap-2 md:min-w-[120px]">
                      <div
                        className={`
                        flex items-center justify-center w-10 h-10 rounded-lg border
                        ${
                          mod.accentColor === "amber"
                            ? "bg-accent-amber/10 border-accent-amber/30 text-accent-amber"
                            : mod.accentColor === "blue"
                            ? "bg-accent-blue/10 border-accent-blue/30 text-accent-blue-light"
                            : "bg-accent-cyan/10 border-accent-cyan/30 text-accent-cyan"
                        }
                        group-hover:scale-110 transition-transform
                      `}
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                      <span className="text-xs text-text-muted">
                        {mod.topicCount} topics
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* AI tutor callout */}
        <div className="bg-gradient-to-r from-accent-blue/10 to-accent-cyan/10 border border-accent-blue/20 rounded-xl p-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-accent-blue/20 border border-accent-blue/30 flex items-center justify-center flex-shrink-0">
              <svg
                className="w-5 h-5 text-accent-blue-light"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-text-primary mb-1">
                AI Tutor — Powered by Claude Opus
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                Every module includes a specialized AI tutor trained on wholesale
                insurance concepts. Ask anything — from how a Lloyd's syndicate
                capitalizes its capacity to the difference between an occurrence
                and claims-made CGL form. Get expert-level answers instantly.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile spacing for bottom nav */}
      <div className="h-20 md:h-0" />
    </div>
  );
}
