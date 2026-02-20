import TopicAccordion from "@/components/TopicAccordion";
import GlossaryPanel from "@/components/GlossaryPanel";
import ChatInterface from "@/components/ChatInterface";
import { esTopics, esGlossary } from "@/lib/es-content";

const suggestedQuestions = [
  "What triggers the diligent effort requirement and how do we document it?",
  "How does the NRRA 'home state' rule work for multi-state commercial risks?",
  "Which stamping offices does CRC deal with most, and what are the deadlines?",
  "What qualifies a commercial buyer as an Exempt Commercial Purchaser (ECP)?",
  "Explain the surplus lines tax and who is responsible for filing it",
  "Which E&S carriers have the best appetite for property catastrophe right now?",
];

const stats = [
  { label: "US E&S Premium", value: "$100B+" },
  { label: "Market Growth (5yr)", value: "~2x" },
  { label: "SL Tax Range", value: "2–5%" },
  { label: "NRRA Enacted", value: "2010" },
];

export default function ESMarketplacePage() {
  return (
    <div className="min-h-screen bg-grid">
      {/* Hero */}
      <div className="relative px-6 py-14 border-b border-border-subtle">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/5 via-transparent to-transparent pointer-events-none" />
        <div className="relative max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-blue/10 border border-accent-blue/20 mb-5">
            <div className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
            <span className="text-xs font-medium text-accent-blue-light">
              Module 2 — Excess & Surplus Lines
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-3">
            E&S Marketplace
          </h1>
          <p className="text-base text-text-secondary max-w-2xl leading-relaxed">
            The non-admitted market that powers specialty insurance in the US —
            understand admitted vs. E&S regulation, stamping offices, surplus
            lines compliance, and CRC&apos;s role as a wholesale broker.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-6 mt-6">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-xl font-bold text-accent-blue-light">
                  {s.value}
                </p>
                <p className="text-xs text-text-muted">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="px-6 py-8 max-w-5xl">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h2 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-3">
                Topics — {esTopics.length} sections
              </h2>
              <TopicAccordion topics={esTopics} accentColor="blue" />
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            <GlossaryPanel entries={esGlossary} accentColor="blue" />

            {/* Admitted vs E&S quick compare */}
            <div className="bg-bg-secondary border border-border-subtle rounded-xl p-4">
              <h3 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-3">
                Admitted vs. E&S
              </h3>
              <div className="space-y-3">
                {[
                  {
                    label: "Rate/Form Filing",
                    admitted: "Required (state approval)",
                    es: "Not required (flexibility)",
                  },
                  {
                    label: "Guaranty Fund",
                    admitted: "Backed",
                    es: "NOT backed",
                  },
                  {
                    label: "Surplus Lines Tax",
                    admitted: "Not applicable",
                    es: "2–5% (varies by state)",
                  },
                  {
                    label: "Diligent Effort",
                    admitted: "N/A",
                    es: "Usually 3 declinations",
                  },
                  {
                    label: "Disclosure Required",
                    admitted: "No",
                    es: "Yes — state-specific language",
                  },
                ].map((row) => (
                  <div key={row.label} className="text-xs">
                    <p className="font-medium text-text-secondary mb-1">
                      {row.label}
                    </p>
                    <div className="flex gap-2">
                      <span className="px-2 py-0.5 rounded bg-accent-emerald/10 text-accent-emerald border border-accent-emerald/20 text-xs">
                        {row.admitted}
                      </span>
                      <span className="px-2 py-0.5 rounded bg-accent-amber/10 text-accent-amber border border-accent-amber/20 text-xs">
                        {row.es}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex gap-3 mt-3 pt-3 border-t border-border-subtle">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-sm bg-accent-emerald/30 border border-accent-emerald/40" />
                  <span className="text-xs text-text-muted">Admitted</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-sm bg-accent-amber/30 border border-accent-amber/40" />
                  <span className="text-xs text-text-muted">E&S</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* AI Tutor */}
        <div className="mt-8">
          <div className="mb-4">
            <h2 className="text-xs font-semibold text-text-muted uppercase tracking-wider">
              AI Tutor — E&S Specialist
            </h2>
            <p className="text-sm text-text-secondary mt-1">
              Ask about surplus lines compliance, carrier appetites, market
              dynamics, or anything E&S.
            </p>
          </div>
          <ChatInterface
            module="es"
            accentColor="blue"
            placeholder="E.g. What's the difference between ECP and standard surplus lines placement?"
            suggestedQuestions={suggestedQuestions}
          />
        </div>
      </div>

      <div className="h-20 md:h-0" />
    </div>
  );
}
