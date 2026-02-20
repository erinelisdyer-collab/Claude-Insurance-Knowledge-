"use client";

import { useState, useRef, useEffect } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface ChatInterfaceProps {
  module: "lloyds" | "es" | "pc";
  accentColor: "amber" | "blue" | "cyan";
  placeholder?: string;
  suggestedQuestions?: string[];
}

export default function ChatInterface({
  module,
  accentColor,
  placeholder = "Ask your AI tutor anything...",
  suggestedQuestions = [],
}: ChatInterfaceProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const accentClasses = {
    amber: {
      button: "bg-accent-amber hover:bg-yellow-400 text-black",
      userBubble: "bg-accent-amber/10 border-accent-amber/20",
      suggestionHover: "hover:border-accent-amber/40 hover:text-accent-amber",
      dot: "bg-accent-amber",
    },
    blue: {
      button: "bg-accent-blue hover:bg-blue-500 text-white",
      userBubble: "bg-accent-blue/10 border-accent-blue/20",
      suggestionHover: "hover:border-accent-blue/40 hover:text-accent-blue-light",
      dot: "bg-accent-blue",
    },
    cyan: {
      button: "bg-accent-cyan hover:bg-cyan-400 text-black",
      userBubble: "bg-accent-cyan/10 border-accent-cyan/20",
      suggestionHover: "hover:border-accent-cyan/40 hover:text-accent-cyan",
      dot: "bg-accent-cyan",
    },
  };

  const colors = accentClasses[accentColor];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async (text?: string) => {
    const messageText = text ?? input.trim();
    if (!messageText || isStreaming) return;

    const userMessage: Message = { role: "user", content: messageText };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput("");
    setIsStreaming(true);

    // Add empty assistant message to stream into
    const assistantMessage: Message = { role: "assistant", content: "" };
    setMessages([...newMessages, assistantMessage]);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: newMessages.map((m) => ({
            role: m.role,
            content: m.content,
          })),
          module,
        }),
      });

      if (!response.ok) throw new Error("API request failed");

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();

      if (!reader) throw new Error("No response body");

      let accumulated = "";
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        accumulated += chunk;

        setMessages((prev) => {
          const updated = [...prev];
          updated[updated.length - 1] = {
            role: "assistant",
            content: accumulated,
          };
          return updated;
        });
      }
    } catch (error) {
      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] = {
          role: "assistant",
          content:
            "I encountered an error. Please check your API key is configured and try again.",
        };
        return updated;
      });
    } finally {
      setIsStreaming(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
    // Auto-resize
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 120)}px`;
    }
  };

  return (
    <div className="bg-bg-secondary border border-border-subtle rounded-xl overflow-hidden flex flex-col">
      {/* Header */}
      <div className="px-5 py-4 border-b border-border-subtle flex items-center gap-3">
        <div className="flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full ${colors.dot} animate-pulse`} />
          <span className="text-sm font-semibold text-text-primary">
            AI Tutor
          </span>
        </div>
        <span className="text-xs text-text-muted">Powered by Claude Opus</span>
        {messages.length > 0 && (
          <button
            onClick={() => setMessages([])}
            className="ml-auto text-xs text-text-muted hover:text-text-secondary transition-colors"
          >
            Clear
          </button>
        )}
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-[300px] max-h-[500px]">
        {messages.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center py-6">
            <div className="text-center mb-6">
              <p className="text-sm text-text-secondary mb-1">
                Ask anything about this module
              </p>
              <p className="text-xs text-text-muted">
                Expert answers, instantly
              </p>
            </div>
            {suggestedQuestions.length > 0 && (
              <div className="w-full max-w-md space-y-2">
                {suggestedQuestions.map((q) => (
                  <button
                    key={q}
                    onClick={() => handleSend(q)}
                    className={`w-full text-left px-4 py-2.5 rounded-lg bg-bg-primary border border-border-subtle text-sm text-text-secondary transition-all ${colors.suggestionHover}`}
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}
          </div>
        ) : (
          messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              {message.role === "assistant" && (
                <div className="w-6 h-6 rounded-full bg-bg-primary border border-border flex items-center justify-center flex-shrink-0 mr-2 mt-0.5">
                  <svg
                    className="w-3 h-3 text-text-muted"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
              )}
              <div
                className={`max-w-[85%] rounded-xl px-4 py-3 text-sm leading-relaxed
                  ${
                    message.role === "user"
                      ? `border ${colors.userBubble} text-text-primary`
                      : "bg-bg-tertiary text-text-primary"
                  }
                `}
              >
                {message.content === "" && isStreaming ? (
                  <span className="cursor-blink" />
                ) : (
                  <div className="whitespace-pre-wrap">
                    {message.content}
                    {message.role === "assistant" &&
                      isStreaming &&
                      index === messages.length - 1 && (
                        <span className="cursor-blink" />
                      )}
                  </div>
                )}
              </div>
            </div>
          ))
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="px-4 pb-4 pt-3 border-t border-border-subtle">
        <div className="flex gap-2 items-end">
          <textarea
            ref={textareaRef}
            value={input}
            onChange={handleTextareaChange}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            disabled={isStreaming}
            rows={1}
            className="flex-1 bg-bg-primary border border-border-subtle rounded-lg px-3 py-2.5 text-sm text-text-primary placeholder:text-text-muted resize-none focus:outline-none focus:border-accent-blue/50 transition-colors disabled:opacity-50"
          />
          <button
            onClick={() => handleSend()}
            disabled={!input.trim() || isStreaming}
            className={`px-4 py-2.5 rounded-lg text-sm font-semibold transition-all disabled:opacity-40 disabled:cursor-not-allowed flex-shrink-0 ${colors.button}`}
          >
            {isStreaming ? (
              <span className="flex items-center gap-1.5">
                <svg className="w-3 h-3 animate-spin" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                </svg>
              </span>
            ) : (
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
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
            )}
          </button>
        </div>
        <p className="text-xs text-text-muted mt-2">
          Enter to send · Shift+Enter for new line
        </p>
      </div>
    </div>
  );
}
