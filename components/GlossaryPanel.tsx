"use client";

import { useState } from "react";

interface GlossaryEntry {
  term: string;
  definition: string;
}

interface GlossaryPanelProps {
  entries: GlossaryEntry[];
  accentColor: "amber" | "blue" | "cyan";
}

export default function GlossaryPanel({
  entries,
  accentColor,
}: GlossaryPanelProps) {
  const [search, setSearch] = useState("");

  const filtered = entries.filter(
    (e) =>
      e.term.toLowerCase().includes(search.toLowerCase()) ||
      e.definition.toLowerCase().includes(search.toLowerCase())
  );

  const accentTextClass = {
    amber: "text-accent-amber",
    blue: "text-accent-blue-light",
    cyan: "text-accent-cyan",
  }[accentColor];

  return (
    <div className="bg-bg-secondary border border-border-subtle rounded-xl overflow-hidden">
      <div className="px-5 py-4 border-b border-border-subtle">
        <h3 className="text-sm font-semibold text-text-primary mb-3">
          Key Terms Glossary
        </h3>
        <div className="relative">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-text-muted"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search terms..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-8 pr-3 py-2 bg-bg-primary border border-border-subtle rounded-lg text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-blue/50 transition-colors"
          />
        </div>
      </div>
      <div className="divide-y divide-border-subtle max-h-80 overflow-y-auto">
        {filtered.length === 0 ? (
          <div className="px-5 py-4 text-sm text-text-muted">
            No terms found
          </div>
        ) : (
          filtered.map((entry) => (
            <div key={entry.term} className="px-5 py-3">
              <p className={`text-xs font-semibold ${accentTextClass} mb-0.5`}>
                {entry.term}
              </p>
              <p className="text-xs text-text-secondary leading-relaxed">
                {entry.definition}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
