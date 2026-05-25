"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface TravelSearchFormProps {
  onSearch: (data: {
    origin: string;
    destination: string;
    mode: "plane" | "train" | "car";
  }) => void;
  isLoading?: boolean;
}

export function TravelSearchForm({ onSearch, isLoading }: TravelSearchFormProps) {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [mode, setMode] = useState<"plane" | "train" | "car">("plane");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!destination.trim()) return;
    onSearch({ origin, destination, mode });
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="w-full max-w-4xl mx-auto glass rounded-2xl p-6 travel-active"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
        {/* Origin */}
        <div className="md:col-span-3 space-y-1.5">
          <label className="text-[10px] text-text-muted uppercase tracking-widest ml-1">Origen</label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gold">📍</span>
            <input
              type="text"
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
              placeholder="Ej: Madrid"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-9 py-3 text-sm focus:border-gold/30 outline-none transition-all"
            />
          </div>
        </div>

        {/* Destination */}
        <div className="md:col-span-4 space-y-1.5">
          <label className="text-[10px] text-text-muted uppercase tracking-widest ml-1">Destino</label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-cyan">🚩</span>
            <input
              type="text"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              placeholder="Ej: Canarias"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-9 py-3 text-sm focus:border-cyan/30 outline-none transition-all"
            />
          </div>
        </div>

        {/* Transport Mode */}
        <div className="md:col-span-3 space-y-1.5">
          <label className="text-[10px] text-text-muted uppercase tracking-widest ml-1">Transporte</label>
          <div className="flex bg-white/5 border border-white/10 rounded-xl p-1">
            {(["plane", "train", "car"] as const).map((m) => (
              <button
                key={m}
                type="button"
                onClick={() => setMode(m)}
                className={`flex-1 flex justify-center py-2 rounded-lg transition-all ${
                  mode === m ? "bg-gold/20 text-gold" : "text-text-muted hover:text-foreground"
                }`}
              >
                {m === "plane" && "✈️"}
                {m === "train" && "🚆"}
                {m === "car" && "🚗"}
              </button>
            ))}
          </div>
        </div>

        {/* Submit */}
        <div className="md:col-span-2">
          <button
            type="submit"
            disabled={isLoading || !destination.trim()}
            className="w-full bg-gold text-luxury-black font-bold py-3 rounded-xl hover:bg-vivid-gold transition-all shadow-lg shadow-gold/20 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? "..." : "Buscar"}
          </button>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-4 text-[11px] text-text-muted">
        <span className="flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan" /> Pack Alojamiento Incluido
        </span>
        <span className="flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-gold" /> Mejores Ofertas IA
        </span>
      </div>
    </motion.form>
  );
}
