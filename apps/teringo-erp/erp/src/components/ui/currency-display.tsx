'use client';

import React, { useState, useEffect } from 'react';
import { getEURRate, formatCurrency } from '@/lib/services/currency';
import { cn } from '@/lib/utils';

interface CurrencyDisplayProps {
  amountUSD: number;
  showEUR?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

/**
 * Displays price in USD with optional EUR conversion.
 * Fetches live exchange rate on mount.
 */
export function CurrencyDisplay({
  amountUSD,
  showEUR = true,
  className,
  size = 'md',
}: CurrencyDisplayProps) {
  const [eurAmount, setEurAmount] = useState<number | null>(null);
  const [rate, setRate] = useState<number>(0.85);

  useEffect(() => {
    getEURRate().then((r) => {
      setRate(r);
      setEurAmount(Math.round(amountUSD * r * 100) / 100);
    }).catch(() => {
      // Fallback to cached/estimated rate
      setEurAmount(Math.round(amountUSD * 0.85 * 100) / 100);
    });
  }, [amountUSD]);

  const sizeClasses = size === 'sm' ? 'text-xs' : size === 'lg' ? 'text-base' : 'text-sm';

  return (
    <span className={cn('inline-flex items-center gap-1.5', sizeClasses, className)} title={`Tipo de cambio: 1 USD = ${rate} EUR`}>
      <span className="font-bold">{formatCurrency(amountUSD, 'USD')}</span>
      {showEUR && eurAmount !== null && (
        <>
          <span className="text-[#605E5C] dark:text-[#888] font-normal">/</span>
          <span className="text-[#605E5C] dark:text-[#888]">{formatCurrency(eurAmount, 'EUR')}</span>
        </>
      )}
    </span>
  );
}

/**
 * Live exchange rate badge shown in the header.
 */
export function ExchangeRateBadge() {
  const [rate, setRate] = useState<number | null>(null);

  useEffect(() => {
    getEURRate().then(setRate).catch(() => setRate(0.85));
  }, []);

  if (rate === null) return null;

  return (
    <span className="text-[10px] opacity-70 font-mono" title="Tipo de cambio en vivo">
      1 USD = {rate.toFixed(4)} EUR
    </span>
  );
}
