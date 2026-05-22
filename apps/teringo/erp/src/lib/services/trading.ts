import { getDb, handleDbError } from './base';
import type { TradingItem, ApiResponse, TradeStatus, TradeType, Incoterm } from '@/types';

function mapItem(item: Record<string, unknown>): TradingItem {
  return {
    id: item.id as string,
    type: item.type as TradingItem['type'],
    partner_id: item.partner_id as string,
    partner_name: (item.partners as Record<string, unknown>)?.name as string ?? '',
    product_id: item.product_id as string,
    product_name: (item.products as Record<string, unknown>)?.name as string ?? '',
    brand_name: (item.brands as Record<string, unknown>)?.name as string ?? '',
    quantity: Number(item.quantity),
    price_unit: Number(item.price_unit),
    total_amount: Number(item.total_amount),
    incoterm: (item.incoterm as Incoterm) ?? 'EXW',
    market_price: Number(item.market_price ?? 0),
    margin_pct: Number(item.margin_pct ?? 0),
    margin_amount: Number(item.margin_amount ?? 0),
    status: item.status as TradingItem['status'],
    valid_until: item.valid_until as string | undefined,
    notes: item.notes as string | undefined,
    created_at: item.created_at as string,
  };
}

export interface CreateTradeInput {
  type: TradeType;
  partner_id: string;
  product_id: string;
  quantity: number;
  price_unit: number;
  incoterm: Incoterm;
  market_price: number;
  status?: TradeStatus;
  valid_until?: string;
  notes?: string;
}

export const TradingService = {
  async list(type?: string, status?: string): Promise<ApiResponse<TradingItem[]>> {
    try {
      const db = getDb();
      let query = db.from('trading_list').select('*, partners(name), products(name)');
      if (type && type !== 'all') query = query.eq('type', type);
      if (status && status !== 'all') query = query.eq('status', status);
      const { data, error } = await query.order('created_at', { ascending: false }).limit(100);
      if (error) throw error;
      const items = (data ?? []).map(mapItem);
      return { data: items, count: items.length };
    } catch (err) { handleDbError(err); }
  },

  async create(input: CreateTradeInput): Promise<ApiResponse<TradingItem>> {
    try {
      const db = getDb();
      const { data, error } = await db.from('trading_list').insert({
        type: input.type,
        partner_id: input.partner_id,
        product_id: input.product_id,
        quantity: input.quantity,
        price_unit: input.price_unit,
        incoterm: input.incoterm ?? 'EXW',
        market_price: input.market_price ?? 0,
        status: input.status ?? 'Active',
        valid_until: input.valid_until,
        notes: input.notes,
      }).select().single();
      if (error) throw error;
      return { data: mapItem(data as Record<string, unknown>) };
    } catch (err) { handleDbError(err); }
  },

  async updateStatus(id: string, status: TradeStatus): Promise<ApiResponse<TradingItem>> {
    try {
      const db = getDb();
      const { data, error } = await db.from('trading_list').update({ status }).eq('id', id).select().single();
      if (error) throw error;
      return { data: mapItem(data as Record<string, unknown>) };
    } catch (err) { handleDbError(err); }
  },

  async acceptOffer(id: string): Promise<ApiResponse<TradingItem>> {
    const result = await TradingService.updateStatus(id, 'Accepted');
    // When an offer is accepted, auto-adjust inventory
    try {
      const db = getDb();
      const item = result.data!;
      await db.rpc('deduct_inventory_on_trade', {
        p_product_id: item.product_id,
        p_quantity: item.quantity,
      });
    } catch {
      // Inventory deduction is best-effort; log but don't fail
      console.warn('[TradingService] Inventory deduction failed for trade:', id);
    }
    return result;
  },
};
