import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JartosDTo — Unified AI Chat Platform",
  description:
    "Open-source, self-hosted AI chat combining the best of Gemini, ChatGPT, Perplexity, DeepSeek, Qwen & Mistral. Full control over models, RAG, and agents.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}
