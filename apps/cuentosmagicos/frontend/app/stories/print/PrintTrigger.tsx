"use client";

import { useEffect } from "react";

export default function PrintTrigger() {
  useEffect(() => {
    // Wait a brief moment for images to load before opening print dialog
    const timer = setTimeout(() => {
      window.print();
    }, 800);
    return () => clearTimeout(timer);
  }, []);
  return null;
}
