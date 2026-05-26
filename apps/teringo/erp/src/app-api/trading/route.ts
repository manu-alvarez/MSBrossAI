import { NextResponse } from 'next/server';
import { getClient } from '@/lib/supabase-client';
import type { TradingItem } from '@/types';

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
    incoterm: (item.incoterm as TradingItem['incoterm']) ?? 'EXW',
    market_price: Number(item.market_price ?? 0),
    margin_pct: Number(item.margin_pct ?? 0),
    margin_amount: Number(item.margin_amount ?? 0),
    status: item.status as TradingItem['status'],
    valid_until: item.valid_until as string | undefined,
    created_at: item.created_at as string,
  };
}

export async function GET(request: Request) {
  try {
    const supabase = getClient();
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type');
    const status = searchParams.get('status');

    let query = supabase.from('trading_list').select('*, partners(name), products(name)');
    if (type && type !== 'all') query = query.eq('type', type);
    if (status && status !== 'all') query = query.eq('status', status);

    const { data, error } = await query.order('created_at', { ascending: false }).limit(100);
    if (error) throw error;

    const items = (data ?? []).map(mapItem);
    return NextResponse.json({ data: items, count: items.length });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Internal server error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const supabase = getClient();
    const body = await request.json();
    const { data, error } = await supabase
      .from('trading_list')
      .insert({
        type: body.type,
        partner_id: body.partner_id,
        product_id: body.product_id,
        quantity: body.quantity,
        price_unit: body.price_unit,
        incoterm: body.incoterm ?? 'EXW',
        market_price: body.market_price ?? 0,
        status: body.status ?? 'Draft',
        valid_until: body.valid_until,
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

export async function PATCH(request: Request) {
  try {
    const supabase = getClient();
    const body = await request.json();
    const { id, status } = body;

    if (!id || !status) {
      return NextResponse.json({ error: 'id and status are required' }, { status: 400 });
    }

    const { data, error } = await supabase
      .from('trading_list')
      .update({ status })
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return NextResponse.json({ data });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Internal server error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
