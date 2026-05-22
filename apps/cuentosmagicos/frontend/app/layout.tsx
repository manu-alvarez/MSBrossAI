import type { Metadata, Viewport } from "next";
import "./globals.css";
import "../styles/magic-effects.css";
import MagicBackground from "@/components/MagicBackground";

export const metadata: Metadata = {
  title: "CuentosMagicos AI - Cuentos Infantiles Personalizados",
  description: "Genera cuentos infantiles personalizados con IA en texto, imagenes, audio y video",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "CuentosMagicos",
  },
  formatDetection: {
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#7c3aed",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="apple-touch-icon" href="/icons/icon-192.png" />
      </head>
      <body className="antialiased relative bg-gradient-to-br from-purple-950 via-slate-950 to-indigo-900 min-h-screen text-white">
        <MagicBackground />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
