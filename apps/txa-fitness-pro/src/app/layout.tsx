import type { Metadata } from "next";
import "./globals.css";
import { AppShell } from "@/components/layout/app-shell";
import { ThemeInit } from "@/components/ui/theme-init";

export const metadata: Metadata = {
  title: "TxaFitness - Entrenamiento Diario",
  description:
    "App de entrenamientos diarios con registro de series, repeticiones y seguimiento de progreso.",
  applicationName: "TxaFitness",
  authors: [{ name: "TxaFitness Team" }],
  openGraph: {
    title: "TxaFitness",
    description: "Entrena, registra, progresa.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="min-h-screen bg-surface-50 font-sans antialiased">
        <ThemeInit />
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
