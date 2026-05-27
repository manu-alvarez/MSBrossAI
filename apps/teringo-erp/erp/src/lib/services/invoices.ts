import { getDb, handleDbError } from './base';
import type { Invoice, InvoiceItem, ApiResponse, InvoiceStatus, TradeType, Incoterm } from '@/types';

export interface CreateInvoiceInput {
  partner_id: string;
  type: TradeType;
  incoterm: Incoterm;
  total_net: number;
  tax_percent: number;
  due_date?: string;
  notes?: string;
  items?: Array<{
    product_id: string;
    description?: string;
    quantity: number;
    unit_price: number;
  }>;
}

function mapInvoice(inv: Record<string, unknown>): Invoice {
  return {
    id: inv.id as string,
    partner_id: inv.partner_id as string,
    partner_name: (inv.partners as Record<string, unknown>)?.name as string ?? '',
    invoice_number: inv.invoice_number as string,
    type: inv.type as Invoice['type'],
    incoterm: (inv.incoterm as Incoterm) ?? 'EXW',
    total_net: Number(inv.total_net),
    tax_percent: Number(inv.tax_percent),
    tax_amount: Number(inv.tax_amount ?? 0),
    total_gross: Number(inv.total_gross),
    status: inv.status as Invoice['status'],
    due_date: inv.due_date as string | undefined,
    notes: inv.notes as string | undefined,
    created_at: inv.created_at as string,
  };
}

export const InvoicesService = {
  async list(status?: string): Promise<ApiResponse<Invoice[]>> {
    try {
      const db = getDb();
      let query = db.from('invoices').select('*, partners(name)');
      if (status && status !== 'all') query = query.eq('status', status);
      const { data, error } = await query.order('created_at', { ascending: false }).limit(100);
      if (error) throw error;
      const invoices = (data ?? []).map(mapInvoice);
      return { data: invoices, count: invoices.length };
    } catch (err) { handleDbError(err); }
  },

  async create(input: CreateInvoiceInput): Promise<ApiResponse<Invoice>> {
    try {
      const db = getDb();
      const invoiceNumber = `INV-${new Date().getFullYear()}-${Date.now().toString(36).toUpperCase()}`;
      const taxAmount = input.total_net * (input.tax_percent / 100);
      const totalGross = input.total_net + taxAmount;

      const { data: invoice, error: invError } = await db.from('invoices').insert({
        partner_id: input.partner_id,
        invoice_number: invoiceNumber,
        type: input.type,
        incoterm: input.incoterm ?? 'EXW',
        total_net: input.total_net,
        tax_percent: input.tax_percent,
        total_gross: totalGross,
        status: 'Pending',
        due_date: input.due_date,
        notes: input.notes,
      }).select().single();

      if (invError) throw invError;

      // Insert line items if provided
      if (input.items && input.items.length > 0) {
        const items = input.items.map((item) => ({
          invoice_id: invoice.id,
          product_id: item.product_id,
          description: item.description,
          quantity: item.quantity,
          unit_price: item.unit_price,
        }));
        const { error: itemsError } = await db.from('invoice_items').insert(items);
        if (itemsError) throw itemsError;
      }

      return { data: mapInvoice(invoice as Record<string, unknown>) };
    } catch (err) { handleDbError(err); }
  },

  async updateStatus(id: string, status: InvoiceStatus): Promise<ApiResponse<Invoice>> {
    try {
      const db = getDb();
      const { data, error } = await db.from('invoices').update({ status }).eq('id', id).select().single();
      if (error) throw error;
      return { data: mapInvoice(data as Record<string, unknown>) };
    } catch (err) { handleDbError(err); }
  },
};
