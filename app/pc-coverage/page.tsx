import TopicAccordion from "@/components/TopicAccordion";
import GlossaryPanel from "@/components/GlossaryPanel";
import ChatInterface from "@/components/ChatInterface";
import { propertyTopics, casualtyTopics, pcGlossary } from "@/lib/pc-content";

const suggestedQuestions = [
  "Walk me through the coinsurance penalty formula with an example",
  "What's the difference between a true umbrella and an excess policy?",
  "Explain the occurrence vs. claims-made distinction for CGL",
  "How do wind/hail percentage deductibles work and why do they matter?",
  "What does business income cover and how should limits be calculated?",
  "Why is cyber underwriting so much harder now than it was in 2018?",
];

const stats = [
  { label: "Property Topics", value: "5" },
  { label: "Casualty Topics", value: "5" },
  { label: "ISO Form Numbers", value: "20+" },
  { label: "Coverage Lines", value: "25+" },
];

export default function PCCoveragePage() {
  return (
    <div className="min-h-screen bg-grid">
      {/* Hero */}
      <div className="relative px-6 py-14 border-b border-border-subtle">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/5 via-transparent to-transparent pointer-events-none" />
        <div className="relative max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 mb-5">
            <div className="w-1.5 h-1.5 rounded-full bg-accent-cyan" />
            <span className="text-xs font-medium text-accent-cyan">
              Module 3 — Property & Casualty
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-3">
            P&C Coverage
          </h1>
          <p className="text-base text-text-secondary max-w-2xl leading-relaxed">
            Deep mastery of commercial property and casualty coverage — ISO
            forms, valuation, causes of loss, CGL structure, umbrella/excess,
            professional liability, cyber, and specialty casualty lines.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-6 mt-6">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-xl font-bold text-accent-cyan">{s.value}</p>
                <p className="text-xs text-text-muted">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="px-6 py-8 max-w-5xl">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Property */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="h-px flex-1 bg-border-subtle" />
                <h2 className="text-xs font-semibold text-text-muted uppercase tracking-wider px-3">
                  Property — {propertyTopics.length} sections
                </h2>
                <div className="h-px flex-1 bg-border-subtle" />
              </div>
              <TopicAccordion topics={propertyTopics} accentColor="cyan" />
            </div>

            {/* Casualty */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="h-px flex-1 bg-border-subtle" />
                <h2 className="text-xs font-semibold text-text-muted uppercase tracking-wider px-3">
                  Casualty — {casualtyTopics.length} sections
                </h2>
                <div className="h-px flex-1 bg-border-subtle" />
              </div>
              <TopicAccordion topics={casualtyTopics} accentColor="cyan" />
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            <GlossaryPanel entries={pcGlossary} accentColor="cyan" />

            {/* ISO Forms Quick Reference */}
            <div className="bg-bg-secondary border border-border-subtle rounded-xl p-4">
              <h3 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-3">
                ISO Form Reference
              </h3>
              <div className="space-y-1.5">
                {[
                  { form: "CP 00 10", desc: "Building & BPP" },
                  { form: "CP 10 10", desc: "Basic Causes of Loss" },
                  { form: "CP 10 20", desc: "Broad Causes of Loss" },
                  { form: "CP 10 30", desc: "Special Causes of Loss" },
                  { form: "CP 00 30", desc: "Business Income" },
                  { form: "CG 00 01", desc: "Commercial General Liability" },
                  { form: "CG 20 10", desc: "Additional Insured (Ongoing Ops)" },
                  { form: "CG 20 37", desc: "Additional Insured (Completed Ops)" },
                  { form: "CU 00 01", desc: "Commercial Umbrella" },
                ].map((item) => (
                  <div key={item.form} className="flex items-center justify-between">
                    <span className="text-xs font-mono text-accent-cyan">
                      {item.form}
                    </span>
                    <span className="text-xs text-text-muted">{item.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Coinsurance Calculator helper */}
            <div className="bg-gradient-to-br from-accent-cyan/10 to-transparent border border-accent-cyan/20 rounded-xl p-4">
              <h3 className="text-xs font-semibold text-accent-cyan mb-2">
                Coinsurance Formula
              </h3>
              <div className="text-xs text-text-secondary space-y-1 font-mono">
                <p>Carried ÷ Required × Loss</p>
                <p className="text-text-muted">= Claim Payment</p>
              </div>
              <div className="mt-2 pt-2 border-t border-accent-cyan/20 text-xs text-text-muted">
                <p>Example: $600K carried, $800K required</p>
                <p>on a $200K loss =</p>
                <p className="text-accent-cyan font-semibold mt-0.5">
                  $150K paid (not $200K)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* AI Tutor */}
        <div className="mt-8">
          <div className="mb-4">
            <h2 className="text-xs font-semibold text-text-muted uppercase tracking-wider">
              AI Tutor — P&C Coverage Specialist
            </h2>
            <p className="text-sm text-text-secondary mt-1">
              Ask about ISO forms, coverage gaps, claims scenarios, or
              underwriting considerations for any P&C line.
            </p>
          </div>
          <ChatInterface
            module="pc"
            accentColor="cyan"
            placeholder="E.g. What's the difference between a true umbrella and an excess policy?"
            suggestedQuestions={suggestedQuestions}
          />
        </div>
      </div>

      <div className="h-20 md:h-0" />
    </div>
  );
}
