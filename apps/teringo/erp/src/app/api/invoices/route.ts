import { NextResponse } from 'next/server';
import { getClient } from '@/lib/supabase-client';
import type { Invoice } from '@/types';

function mapInvoice(inv: Record<string, unknown>): Invoice {
  return {
    id: inv.id as string,
    partner_id: inv.partner_id as string,
    partner_name: (inv.partners as Record<string, unknown>)?.name as string ?? '',
    invoice_number: inv.invoice_number as string,
    type: inv.type as Invoice['type'],
    incoterm: (inv.incoterm as Invoice['incoterm']) ?? 'EXW',
    total_net: Number(inv.total_net),
    tax_percent: Number(inv.tax_percent),
    tax_amount: Number(inv.tax_amount ?? (Number(inv.total_net) * Number(inv.tax_percent) / 100)),
    total_gross: Number(inv.total_gross),
    status: inv.status as Invoice['status'],
    created_at: inv.created_at as string,
  };
}

export async function GET(request: Request) {
  try {
    const supabase = getClient();
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');

    let query = supabase.from('invoices').select('*, partners(name)');
    if (status && status !== 'all') query = query.eq('status', status);

    const { data, error } = await query.order('created_at', { ascending: false }).limit(100);
    if (error) throw error;

    const invoices = (data ?? []).map(mapInvoice);
    return NextResponse.json({ data: invoices, count: invoices.length });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Internal server error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const supabase = getClient();
    const body = await request.json();

    const totalGross = body.total_net * (1 + (body.tax_percent ?? 21) / 100);
    const invoiceNumber = `INV-${new Date().getFullYear()}-${Date.now().toString(36).toUpperCase()}`;

    const { data, error } = await supabase
      .from('invoices')
      .insert({
        partner_id: body.partner_id,
        invoice_number: invoiceNumber,
        type: body.type,
        incoterm: body.incoterm ?? 'EXW',
        total_net: body.total_net,
        tax_percent: body.tax_percent ?? 21,
        total_gross: totalGross,
        status: 'Pending',
        due_date: body.due_date,
        notes: body.notes,
      })
      .select()
      .single();

    if (error) throw error;
    return NextResponse.json({ data }, { status: 201 });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Internal server error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
