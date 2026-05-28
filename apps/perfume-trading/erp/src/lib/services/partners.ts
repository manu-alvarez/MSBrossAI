import { getDb, handleDbError } from './base';
import type { Partner, ApiResponse } from '@/types';

export const PartnersService = {
  async list(type?: string, search?: string): Promise<ApiResponse<Partner[]>> {
    try {
      const db = getDb();
      let query = db.from('partners').select('*');
      if (type && type !== 'all') query = query.eq('type', type);
      if (search) {
        query = query.or(
          `name.ilike.%${search}%,country.ilike.%${search}%,email.ilike.%${search}%`
        );
      }
      const { data, error } = await query.eq('is_active', true).order('name');
      if (error) throw error;
      return { data: data as unknown as Partner[], count: (data ?? []).length };
    } catch (err) { handleDbError(err); }
  },

  async create(partner: Omit<Partner, 'id' | 'created_at'>): Promise<ApiResponse<Partner>> {
    try {
      const db = getDb();
      const { data, error } = await db.from('partners').insert({
        name: partner.name,
        type: partner.type,
        email: partner.email,
        phone: partner.phone,
        country: partner.country,
        address: partner.address,
        credit_limit: partner.credit_limit,
        payment_terms: partner.payment_terms,
        broker_fee_pct: partner.broker_fee_pct,
      }).select().single();
      if (error) throw error;
      return { data: data as unknown as Partner };
    } catch (err) { handleDbError(err); }
  },

  async update(id: string, updates: Partial<Partner>): Promise<ApiResponse<Partner>> {
    try {
      const db = getDb();
      const { data, error } = await db.from('partners').update(updates).eq('id', id).select().single();
      if (error) throw error;
      return { data: data as unknown as Partner };
    } catch (err) { handleDbError(err); }
  },
};
