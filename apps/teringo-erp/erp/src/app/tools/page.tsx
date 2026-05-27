'use client';

import React from 'react';
import { ExternalBridge } from '@/components/shared/ExternalBridge';

const TOOLS = [
  {
    id: 'traductor',
    name: 'Traductor',
    url: 'https://msbross.me/app/traductor/',
    type: 'iframe' as const,
    description: 'Traductor multilingüe para comunicaciones con socios internacionales.',
  },
  {
    id: 'logisearch',
    name: 'LogiSearch',
    url: 'https://msbross.me/app/logisearch/',
    type: 'iframe' as const,
    description: 'Buscador logístico para tracking de envíos y rutas internacionales.',
  },
];

export default function ToolsPage() {
  return (
    <div className="space-y-4 max-w-5xl mx-auto">
      <div>
        <h2 className="text-xl font-bold text-[#323130] dark:text-[#e0e0e0]">Herramientas Externas</h2>
        <p className="text-xs text-[#605E5C] dark:text-[#888]">Utilidades integradas para operaciones de trading internacional</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {TOOLS.map((tool) => (
          <a
            key={tool.id}
            href={tool.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-5 bg-white dark:bg-[#1e1e1e] border border-[#EDEBE9] dark:border-[#333] shadow-sm hover:border-[#f43f5e] dark:hover:border-[#fb7185] transition-colors group"
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-bold text-sm text-[#323130] dark:text-[#e0e0e0] group-hover:text-[#f43f5e] dark:group-hover:text-[#fb7185] transition-colors">
                {tool.name}
              </h3>
              <span className="text-[10px] font-semibold text-[#f43f5e] dark:text-[#fb7185] bg-[#F0F7FF] dark:bg-[#1a2a3a] px-2 py-0.5 rounded-full">
                msbross.me
              </span>
            </div>
            <p className="text-xs text-[#605E5C] dark:text-[#888]">{tool.description}</p>
            <div className="mt-3 text-xs font-semibold text-[#f43f5e] dark:text-[#fb7185] group-hover:underline">
              Abrir {tool.name} →
            </div>
          </a>
        ))}
      </div>

      {/* Embedded viewer */}
      <ExternalBridge sources={TOOLS} />
    </div>
  );
}
