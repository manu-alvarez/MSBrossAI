import { getDb, handleDbError } from './base';
import type { Inventory, ApiResponse } from '@/types';

export interface StockAlert {
  product_id: string;
  product_name: string;
  brand_name: string;
  batch_code: string;
  quantity: number;
  threshold: number;
  expiry_date?: string;
  warehouse_location?: string;
  alert_type: 'low_stock' | 'expiring' | 'overstock';
}

export const InventoryService = {
  async list(warehouseId?: string): Promise<ApiResponse<Inventory[]>> {
    try {
      const db = getDb();
      let query = db
        .from('inventory')
        .select('*, products(name), warehouses(name), partners(name)')
        .gt('quantity', 0);
      if (warehouseId) query = query.eq('warehouse_id', warehouseId);
      const { data, error } = await query.order('expiry_date', { ascending: true, nullsFirst: false });
      if (error) throw error;
      const items = (data ?? []).map((inv: Record<string, unknown>) => ({
        id: inv.id as string,
        product_id: inv.product_id as string,
        product_name: (inv.products as Record<string, unknown>)?.name as string ?? '',
        warehouse_id: inv.warehouse_id as string,
        warehouse_name: (inv.warehouses as Record<string, unknown>)?.name as string ?? '',
        partner_id: inv.partner_id as string | undefined,
        partner_name: (inv.partners as Record<string, unknown>)?.name as string | undefined,
        quantity: Number(inv.quantity),
        batch_code: inv.batch_code as string,
        cost_price: Number(inv.cost_price),
        expiry_date: inv.expiry_date as string | undefined,
        warehouse_location: inv.warehouse_location as string | undefined,
        received_at: inv.received_at as string,
      })) as Inventory[];
      return { data: items, count: items.length };
    } catch (err) { handleDbError(err); }
  },

  /**
   * Get stock alerts: low stock (<20), expiring (within 90 days), overstock (>200).
   */
  async getAlerts(threshold = 20, expiryDays = 90): Promise<StockAlert[]> {
    try {
      const db = getDb();
      const cutoff = new Date();
      cutoff.setDate(cutoff.getDate() + expiryDays);

      const { data, error } = await db
        .from('inventory')
        .select('*, products(name), brands(name)')
        .gt('quantity', 0);

      if (error) throw error;

      const alerts: StockAlert[] = [];

      for (const item of data ?? []) {
        const record = item as Record<string, unknown>;
        const qty = Number(record.quantity);
        const product = record.products as Record<string, unknown> ?? {};
        const prodName = product.name as string ?? 'Unknown';
        const brands = (product.brands ?? record.brands) as Record<string, unknown> ?? {};

        if (qty < threshold) {
          alerts.push({
            product_id: record.product_id as string,
            product_name: prodName,
            brand_name: brands.name as string ?? '',
            batch_code: record.batch_code as string,
            quantity: qty,
            threshold,
            expiry_date: record.expiry_date as string | undefined,
            warehouse_location: record.warehouse_location as string | undefined,
            alert_type: 'low_stock',
          });
        }

        if (record.expiry_date && new Date(record.expiry_date as string) <= cutoff) {
          alerts.push({
            product_id: record.product_id as string,
            product_name: prodName,
            brand_name: brands.name as string ?? '',
            batch_code: record.batch_code as string,
            quantity: qty,
            threshold,
            expiry_date: record.expiry_date as string,
            warehouse_location: record.warehouse_location as string | undefined,
            alert_type: 'expiring',
          });
        }
      }

      return alerts;
    } catch (err) { handleDbError(err); }
  },

  /**
   * Deduct stock when a trade is completed/accepted.
   * Called automatically by TradingService.acceptOffer.
   */
  async deductStock(productId: string, quantity: number, batchCode?: string): Promise<void> {
    try {
      const db = getDb();
      if (batchCode) {
        // Deduct from specific batch
        const { error } = await db.rpc('deduct_inventory_batch', {
          p_product_id: productId,
          p_batch_code: batchCode,
          p_quantity: quantity,
        });
        if (error) throw error;
      } else {
        // Deduct from any batch (FIFO by expiry)
        const { error } = await db.rpc('deduct_inventory_fifo', {
          p_product_id: productId,
          p_quantity: quantity,
        });
        if (error) throw error;
      }
    } catch (err) { handleDbError(err); }
  },

  async addStock(input: {
    product_id: string;
    warehouse_id: string;
    quantity: number;
    batch_code: string;
    cost_price: number;
    expiry_date?: string;
    partner_id?: string;
  }): Promise<ApiResponse<Inventory>> {
    try {
      const db = getDb();
      const { data, error } = await db.from('inventory').insert({
        product_id: input.product_id,
        warehouse_id: input.warehouse_id,
        quantity: input.quantity,
        batch_code: input.batch_code,
        cost_price: input.cost_price,
        expiry_date: input.expiry_date,
        partner_id: input.partner_id,
      }).select().single();
      if (error) throw error;
      return { data: data as unknown as Inventory };
    } catch (err) { handleDbError(err); }
  },
};
