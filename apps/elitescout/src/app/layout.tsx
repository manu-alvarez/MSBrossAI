import type { Metadata, Viewport } from "next";
import { inter, playfair } from "@/lib/fonts";
import { Providers } from "@/lib/providers";
import { Navbar } from "@/components/layout/Navbar";
import "./globals.css";

import { ServiceWorkerRegister } from "@/components/ui/ServiceWorkerRegister";

export const metadata: Metadata = {
  title: "EliteScout — Inteligencia de Productos Premium",
  description:
    "Búsqueda, comparación y análisis exhaustivo de productos mediante IA. Motor de búsqueda de 3 capas con análisis de sentimiento y puntuación de oportunidad.",
  keywords: ["comparador de precios", "análisis de productos", "ofertas", "cupones", "IA"],
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "EliteScout",
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/icon-192.png" />
      </head>
      <body className="antialiased">
        <Providers>
          <ServiceWorkerRegister />
          <Navbar />
          <main className="min-h-screen">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
