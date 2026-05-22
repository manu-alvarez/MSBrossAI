"use client";

import { useState, useCallback } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import type { ChatMessage, Source } from "@/types/chat";
import { executeCode } from "@/lib/api";

/**
 * Renders a single chat message with markdown, code blocks, thinking, and sources.
 */
export default function MessageBubble({
  message,
  isStreaming,
}: {
  message: ChatMessage;
  isStreaming?: boolean;
}) {
  const isUser = message.role === "user";

  return (
    <div
      style={{
        display: "flex",
        justifyContent: isUser ? "flex-end" : "flex-start",
        marginBottom: 16,
        padding: "0 20px",
      }}
    >
      <div
        style={{
          maxWidth: isUser ? "75%" : "85%",
          width: isUser ? "auto" : "100%",
        }}
      >
        {/* Role label */}
        {!isUser && (
          <div style={{ fontSize: 12, color: "var(--text-tertiary)", marginBottom: 6, fontWeight: 500 }}>
            {message.model_id || "Assistant"}
          </div>
        )}

        {/* Thinking block (Chain-of-Thought) */}
        {message.thinking && (
          <ThinkingBlock content={message.thinking} />
        )}

        {/* Message body */}
        <div className={isUser ? "message-user" : "message-assistant"} style={{ padding: isUser ? "12px 16px" : "0" }}>
          <div className={`markdown-body ${isStreaming ? "streaming-cursor" : ""}`}>
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                code({ className, children, ...props }) {
                  const match = /language-(\w+)/.exec(className || "");
                  const codeStr = String(children).replace(/\n$/, "");
                  if (match) {
                    return (
                      <CodeBlock language={match[1]} code={codeStr} />
                    );
                  }
                  return <code className={className} {...props}>{children}</code>;
                },
              }}
            >
              {message.content}
            </ReactMarkdown>
          </div>
        </div>

        {/* Source citations */}
        {message.sources && message.sources.length > 0 && (
          <SourceCitations sources={message.sources} />
        )}
      </div>
    </div>
  );
}

/** Collapsible chain-of-thought thinking block. */
function ThinkingBlock({ content }: { content: string }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="thinking-block" style={{ cursor: "pointer" }} onClick={() => setExpanded(!expanded)}>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: expanded ? 8 : 0 }}>
        <span style={{ fontSize: 14 }}>🧠</span>
        <span style={{ fontWeight: 500 }}>Chain of Thought</span>
        <span style={{ marginLeft: "auto", fontSize: 12 }}>{expanded ? "▲" : "▼"}</span>
      </div>
      {expanded && (
        <div style={{ whiteSpace: "pre-wrap", marginTop: 8, opacity: 0.85, lineHeight: 1.6 }}>
          {content}
        </div>
      )}
    </div>
  );
}

/** Code block with syntax highlighting, copy, and execute buttons. */
function CodeBlock({ language, code }: { language: string; code: string }) {
  const [copied, setCopied] = useState(false);
  const [output, setOutput] = useState<string | null>(null);
  const [running, setRunning] = useState(false);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [code]);

  const handleRun = useCallback(async () => {
    setRunning(true);
    try {
      const result = await executeCode(code, language);
      setOutput(result.stdout || result.stderr || "No output");
    } catch {
      setOutput("Execution failed");
    } finally {
      setRunning(false);
    }
  }, [code, language]);

  const canRun = ["python", "javascript", "bash"].includes(language);

  return (
    <div className="code-block-wrapper">
      <div className="code-block-header">
        <span>{language}</span>
        <div style={{ display: "flex", gap: 4 }}>
          {canRun && (
            <button onClick={handleRun} disabled={running}>
              {running ? "⏳" : "▶ Run"}
            </button>
          )}
          <button onClick={handleCopy}>{copied ? "✓ Copied" : "📋 Copy"}</button>
        </div>
      </div>
      <SyntaxHighlighter
        style={oneDark}
        language={language}
        customStyle={{
          margin: 0,
          borderRadius: 0,
          fontSize: 13,
          background: "var(--bg-tertiary)",
          padding: "14px",
        }}
      >
        {code}
      </SyntaxHighlighter>
      {output !== null && (
        <div style={{
          background: "var(--bg-primary)",
          padding: "10px 14px",
          fontSize: 13,
          fontFamily: "'JetBrains Mono', monospace",
          color: "#a0f0a0",
          borderTop: "1px solid var(--border-subtle)",
          whiteSpace: "pre-wrap",
          maxHeight: 200,
          overflowY: "auto",
        }}>
          {output}
        </div>
      )}
    </div>
  );
}

/** Perplexity-style source citation chips. */
function SourceCitations({ sources }: { sources: Source[] }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 10 }}>
      {sources.map((src, i) => (
        <a
          key={i}
          href={src.url}
          target="_blank"
          rel="noopener noreferrer"
          className="source-chip"
          title={src.snippet}
        >
          <span style={{ fontWeight: 600 }}>{i + 1}</span>
          <span>{src.title.length > 30 ? src.title.slice(0, 30) + "…" : src.title}</span>
        </a>
      ))}
    </div>
  );
}
