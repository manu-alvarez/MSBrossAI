import { getDb, handleDbError } from './base';
import type { Product, ApiResponse } from '@/types';

function mapProduct(p: Record<string, unknown>): Product {
  return {
    id: p.id as string,
    brand_id: p.brand_id as string,
    brand_name: (p.brands as Record<string, unknown>)?.name as string ?? '',
    brand_category: (p.brands as Record<string, unknown>)?.category as string ?? '',
    name: p.name as string,
    line: p.line as string | undefined,
    gender: p.gender as Product['gender'],
    format: p.format as Product['format'],
    concentration: p.concentration as Product['concentration'],
    size_ml: p.size_ml as number,
    ean: p.ean as string,
    market_price: p.market_price as number,
    cost_price: p.cost_price as number | undefined,
    is_active: (p.is_active as boolean) ?? true,
    created_at: p.created_at as string,
    updated_at: p.updated_at as string,
  };
}

export const ProductsService = {
  async list(search?: string): Promise<ApiResponse<Product[]>> {
    try {
      const db = getDb();
      if (search) {
        const { data, error } = await db.rpc('search_products', { search_term: search });
        if (error) throw error;
        return { data: data as unknown as Product[], count: (data as unknown[])?.length ?? 0 };
      }
      const { data, error } = await db
        .from('products')
        .select('*, brands(name, category)')
        .eq('is_active', true)
        .order('created_at', { ascending: false });
      if (error) throw error;
      const products = (data ?? []).map(mapProduct);
      return { data: products, count: products.length };
    } catch (err) { handleDbError(err); }
  },

  async getById(id: string): Promise<ApiResponse<Product>> {
    try {
      const db = getDb();
      const { data, error } = await db
        .from('products')
        .select('*, brands(name, category)')
        .eq('id', id)
        .single();
      if (error) throw error;
      return { data: mapProduct(data as Record<string, unknown>) };
    } catch (err) { handleDbError(err); }
  },

  async create(product: Omit<Product, 'id' | 'created_at' | 'updated_at'>): Promise<ApiResponse<Product>> {
    try {
      const db = getDb();
      const { data, error } = await db.from('products').insert({
        brand_id: product.brand_id,
        name: product.name,
        line: product.line,
        gender: product.gender,
        format: product.format,
        concentration: product.concentration,
        size_ml: product.size_ml,
        ean: product.ean,
        market_price: product.market_price,
        cost_price: product.cost_price,
      }).select().single();
      if (error) throw error;
      return { data: data as unknown as Product, count: 1 };
    } catch (err) { handleDbError(err); }
  },

  async update(id: string, updates: Partial<Product>): Promise<ApiResponse<Product>> {
    try {
      const db = getDb();
      const { data, error } = await db
        .from('products')
        .update(updates)
        .eq('id', id)
        .select()
        .single();
      if (error) throw error;
      return { data: data as unknown as Product };
    } catch (err) { handleDbError(err); }
  },

  async getLowStock(threshold = 20): Promise<ApiResponse<(Product & { stock_qty: number })[]>> {
    try {
      const db = getDb();
      const { data, error } = await db
        .from('inventory')
        .select('product_id, products(*, brands(name)), quantity')
        .lt('quantity', threshold)
        .gt('quantity', 0);
      if (error) throw error;
      const items = (data ?? []).map((item: Record<string, unknown>) => ({
        ...(item.products as Record<string, unknown>) ?? {},
        stock_qty: Number(item.quantity),
      })) as (Product & { stock_qty: number })[];
      return { data: items, count: items.length };
    } catch (err) { handleDbError(err); }
  },
};
