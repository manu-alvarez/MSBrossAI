import { NextResponse } from 'next/server';
import { getClient } from '@/lib/supabase-client';
import type { Product } from '@/types';

function mapProduct(p: Record<string, unknown>): Product {
  return {
    id: p.id as string,
    brand_id: p.brand_id as string,
    brand_name: (p.brands as Record<string, unknown>)?.name as string ?? '',
    name: p.name as string,
    line: p.line as string | undefined,
    gender: p.gender as Product['gender'],
    format: p.format as Product['format'],
    concentration: p.concentration as Product['concentration'],
    size_ml: p.size_ml as number,
    ean: p.ean as string,
    market_price: p.market_price as number,
    cost_price: p.cost_price as number | undefined,
    is_active: p.is_active as boolean ?? true,
    created_at: p.created_at as string,
    updated_at: p.updated_at as string,
  };
}

export async function GET(request: Request) {
  try {
    const supabase = getClient();
    const { searchParams } = new URL(request.url);
    const search = searchParams.get('search');

    if (search) {
      const { data, error } = await supabase.rpc('search_products', { search_term: search });
      if (error) throw error;
      return NextResponse.json({ data, count: data?.length ?? 0 });
    }

    const { data, error } = await supabase
      .from('products')
      .select('*, brands(name)')
      .order('created_at', { ascending: false });

    if (error) throw error;

    const products = (data ?? []).map(mapProduct);
    return NextResponse.json({ data: products, count: products.length });
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
      .from('products')
      .insert({
        brand_id: body.brand_id,
        name: body.name,
        line: body.line,
        gender: body.gender ?? 'Unisex',
        format: body.format ?? 'Regular',
        concentration: body.concentration ?? 'EDP',
        size_ml: body.size_ml,
        ean: body.ean,
        market_price: body.market_price,
        cost_price: body.cost_price,
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
