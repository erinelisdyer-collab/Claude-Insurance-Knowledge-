import TopicAccordion from "@/components/TopicAccordion";
import GlossaryPanel from "@/components/GlossaryPanel";
import ChatInterface from "@/components/ChatInterface";
import { lloydsTopics, lloydsGlossary } from "@/lib/lloyds-content";

const suggestedQuestions = [
  "How does the Lloyd's Chain of Security protect a US policyholder?",
  "What's the difference between a binding authority and a lineslip?",
  "How do I access Lloyd's as a US wholesale broker without going to London?",
  "Explain the Lloyd's annual venture and year of account structure",
  "What is contract certainty and why does it matter for CRC?",
  "Which Lloyd's syndicates are most active in US property catastrophe?",
];

const stats = [
  { label: "Lloyd's Founded", value: "1688" },
  { label: "Annual Premium", value: "~£46B" },
  { label: "Active Syndicates", value: "300+" },
  { label: "Territories", value: "200+" },
];

export default function LloydsPage() {
  return (
    <div className="min-h-screen bg-grid">
      {/* Hero */}
      <div className="relative px-6 py-14 border-b border-border-subtle">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-amber/5 via-transparent to-transparent pointer-events-none" />
        <div className="relative max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-amber/10 border border-accent-amber/20 mb-5">
            <div className="w-1.5 h-1.5 rounded-full bg-accent-amber" />
            <span className="text-xs font-medium text-accent-amber">
              Module 1 — Global Specialty Market
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-3">
            Lloyd&apos;s of London
          </h1>
          <p className="text-base text-text-secondary max-w-2xl leading-relaxed">
            The world&apos;s leading specialist insurance marketplace — understand its
            structure, how syndicates operate, how business is placed, and how
            CRC accesses Lloyd&apos;s capacity for US wholesale placements.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-6 mt-6">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-xl font-bold text-accent-amber">{s.value}</p>
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
                Topics — {lloydsTopics.length} sections
              </h2>
              <TopicAccordion topics={lloydsTopics} accentColor="amber" />
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            <GlossaryPanel entries={lloydsGlossary} accentColor="amber" />

            {/* Quick reference card */}
            <div className="bg-bg-secondary border border-border-subtle rounded-xl p-4">
              <h3 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-3">
                CRC Quick Reference
              </h3>
              <div className="space-y-2">
                {[
                  { label: "Retail → CRC → London Broker → Lloyd's", note: "Open market process" },
                  { label: "CRC as Coverholder", note: "Binder/binding authority" },
                  { label: "3 Declinations Required", note: "Diligent effort for SL" },
                  { label: "Lloyd's = Eligible SL Insurer", note: "All US states (White List)" },
                  { label: "US Trust Fund Backed", note: "Lloyd's chain of security" },
                ].map((item) => (
                  <div key={item.label} className="flex flex-col">
                    <span className="text-xs text-text-primary font-medium">{item.label}</span>
                    <span className="text-xs text-text-muted">{item.note}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* AI Tutor */}
        <div className="mt-8">
          <div className="mb-4">
            <h2 className="text-xs font-semibold text-text-muted uppercase tracking-wider">
              AI Tutor — Lloyd&apos;s Specialist
            </h2>
            <p className="text-sm text-text-secondary mt-1">
              Ask detailed questions about Lloyd&apos;s structure, market practices, and wholesale placement strategy.
            </p>
          </div>
          <ChatInterface
            module="lloyds"
            accentColor="amber"
            placeholder="E.g. How does a binding authority differ from open market placement?"
            suggestedQuestions={suggestedQuestions}
          />
        </div>
      </div>

      <div className="h-20 md:h-0" />
    </div>
  );
}
