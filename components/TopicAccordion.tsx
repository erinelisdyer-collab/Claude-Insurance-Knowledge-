"use client";

import { useState } from "react";
import { Topic } from "@/lib/lloyds-content";

interface TopicAccordionProps {
  topics: Topic[];
  accentColor: "amber" | "blue" | "cyan";
}

export default function TopicAccordion({
  topics,
  accentColor,
}: TopicAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(topics[0]?.id ?? null);

  const accentClasses = {
    amber: {
      badge: "bg-accent-amber/10 text-accent-amber border-accent-amber/20",
      dot: "bg-accent-amber",
      border: "border-accent-amber/30",
      bg: "bg-accent-amber/5",
    },
    blue: {
      badge: "bg-accent-blue/10 text-accent-blue-light border-accent-blue/20",
      dot: "bg-accent-blue",
      border: "border-accent-blue/30",
      bg: "bg-accent-blue/5",
    },
    cyan: {
      badge: "bg-accent-cyan/10 text-accent-cyan border-accent-cyan/20",
      dot: "bg-accent-cyan",
      border: "border-accent-cyan/30",
      bg: "bg-accent-cyan/5",
    },
  };

  const colors = accentClasses[accentColor];

  return (
    <div className="space-y-2">
      {topics.map((topic) => {
        const isOpen = openId === topic.id;
        return (
          <div
            key={topic.id}
            className={`
              rounded-xl border transition-all duration-200
              ${isOpen ? `${colors.border} ${colors.bg}` : "border-border-subtle bg-bg-secondary hover:border-border"}
            `}
          >
            <button
              onClick={() => setOpenId(isOpen ? null : topic.id)}
              className="w-full text-left px-5 py-4 flex items-center justify-between gap-4"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div
                  className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                    isOpen ? colors.dot : "bg-text-muted"
                  }`}
                />
                <div className="min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span
                      className={`text-sm font-semibold ${
                        isOpen ? "text-text-primary" : "text-text-secondary"
                      } transition-colors`}
                    >
                      {topic.title}
                    </span>
                    {topic.badge && (
                      <span
                        className={`px-2 py-0.5 rounded text-xs font-medium border ${colors.badge}`}
                      >
                        {topic.badge}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <svg
                className={`w-4 h-4 flex-shrink-0 text-text-muted transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {isOpen && (
              <div className="px-5 pb-5">
                <div
                  className="border-t border-border-subtle pt-4 topic-content"
                  dangerouslySetInnerHTML={{ __html: topic.content }}
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
