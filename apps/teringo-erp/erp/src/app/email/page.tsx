'use client';

import React, { useState, useMemo } from 'react';
import { Copy, Check, Send, FileText } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { generateEmail, TEMPLATE_TYPES, LANGUAGES } from '@/lib/email-templates';
import type { TemplateType, TemplateLang } from '@/lib/email-templates';
import { cn } from '@/lib/utils';

export default function EmailPage() {
  const [lang, setLang] = useState<TemplateLang>('ES');
  const [type, setType] = useState<TemplateType>('offer');
  const [copied, setCopied] = useState<'subject' | 'body' | null>(null);
  const [vars, setVars] = useState({
    partnerName: 'GlobalFragance GmbH',
    productName: 'Bleu de Chanel EDP 100ml',
    brandName: 'Chanel',
    quantity: 50,
    priceUnit: '$78.50',
    totalAmount: '$3,925.00',
    incoterm: 'FOB',
    invoiceNumber: 'INV-2026-0001',
    validUntil: new Date(Date.now() + 30 * 86400000).toISOString().split('T')[0],
  });

  const email = useMemo(() => generateEmail(type, lang, vars), [type, lang, vars]);

  const copyToClipboard = async (text: string, field: 'subject' | 'body') => {
    await navigator.clipboard.writeText(text);
    setCopied(field);
    setTimeout(() => setCopied(null), 2000);
  };

  const openInMailto = () => {
    const mailto = `mailto:?subject=${encodeURIComponent(email.subject)}&body=${encodeURIComponent(email.body)}`;
    window.open(mailto);
  };

  const typeLabel = TEMPLATE_TYPES.find((t) => t.key === type)?.label[lang] ?? type;
  const langInfo = LANGUAGES.find((l) => l.key === lang);

  return (
    <div className="space-y-4 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold text-[#323130] dark:text-[#e0e0e0]">Correo Comercial</h2>
          <p className="text-xs text-[#605E5C] dark:text-[#888]">Plantillas profesionales multilingüe para operaciones de trading</p>
        </div>
        <Badge variant="info" dot>3 idiomas · 6 plantillas</Badge>
      </div>

      {/* Controls */}
      <Card>
        <CardContent className="p-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Select label="Idioma" value={lang}
              onChange={(e) => setLang(e.target.value as TemplateLang)}
              options={LANGUAGES.map((l) => ({ value: l.key, label: `${l.flag} ${l.label}` }))} />
            <Select label="Tipo de Plantilla" value={type}
              onChange={(e) => setType(e.target.value as TemplateType)}
              options={TEMPLATE_TYPES.map((t) => ({
                value: t.key,
                label: t.label[lang] ?? t.key,
              }))} />
          </div>

          <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3">
            <Input label="Socio" value={vars.partnerName}
              onChange={(e) => setVars({ ...vars, partnerName: e.target.value })} />
            <Input label="Marca" value={vars.brandName}
              onChange={(e) => setVars({ ...vars, brandName: e.target.value })} />
            <Input label="Producto" value={vars.productName}
              onChange={(e) => setVars({ ...vars, productName: e.target.value })} />
            <Input label="Cantidad" type="number" value={vars.quantity}
              onChange={(e) => setVars({ ...vars, quantity: Number(e.target.value) })} />
            <Input label="Precio Unit." value={vars.priceUnit}
              onChange={(e) => setVars({ ...vars, priceUnit: e.target.value })} />
            <Input label="Total" value={vars.totalAmount}
              onChange={(e) => setVars({ ...vars, totalAmount: e.target.value })} />
            <Input label="Incoterm" value={vars.incoterm}
              onChange={(e) => setVars({ ...vars, incoterm: e.target.value })} />
            <Input label="Válido Hasta" value={vars.validUntil}
              onChange={(e) => setVars({ ...vars, validUntil: e.target.value })} />
          </div>
        </CardContent>
      </Card>

      {/* Subject */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center text-sm">
            <FileText size={16} className="mr-2 text-[#005A9E]" />
            Asunto
          </CardTitle>
          <Button variant="ghost" size="sm" icon={copied === 'subject' ? Check : Copy}
            onClick={() => copyToClipboard(email.subject, 'subject')}>
            {copied === 'subject' ? 'Copiado' : 'Copiar'}
          </Button>
        </CardHeader>
        <CardContent>
          <div className="p-3 bg-[#F3F2F1] dark:bg-[#2a2a2a] text-sm font-medium rounded font-mono">
            {email.subject}
          </div>
        </CardContent>
      </Card>

      {/* Body */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center text-sm">
            <FileText size={16} className="mr-2 text-[#005A9E]" />
            Cuerpo del Correo
          </CardTitle>
          <div className="flex space-x-2">
            <Button variant="ghost" size="sm" icon={copied === 'body' ? Check : Copy}
              onClick={() => copyToClipboard(email.body, 'body')}>
              {copied === 'body' ? 'Copiado' : 'Copiar'}
            </Button>
            <Button variant="primary" size="sm" icon={Send} onClick={openInMailto}>
              Abrir en Email
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <pre className="p-4 bg-[#F3F2F1] dark:bg-[#2a2a2a] text-sm rounded whitespace-pre-wrap font-mono leading-relaxed">
            {email.body}
          </pre>
        </CardContent>
      </Card>

      {/* Meta info */}
      <div className="text-[10px] text-[#605E5C] dark:text-[#888] text-center">
        Plantilla: <strong>{typeLabel}</strong> · Idioma: <strong>{langInfo?.flag} {langInfo?.label}</strong> · Generado automáticamente por Teringo
      </div>
    </div>
  );
}
