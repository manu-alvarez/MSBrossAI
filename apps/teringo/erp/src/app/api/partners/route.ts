import { NextResponse } from 'next/server';
import { getClient } from '@/lib/supabase-client';

export async function GET(request: Request) {
  try {
    const supabase = getClient();
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type');
    const search = searchParams.get('search');

    let query = supabase.from('partners').select('*');

    if (type && type !== 'all') {
      query = query.eq('type', type);
    }
    if (search) {
      query = query.or(`name.ilike.%${search}%,country.ilike.%${search}%,email.ilike.%${search}%`);
    }

    const { data, error } = await query.eq('is_active', true).order('name', { ascending: true });
    if (error) throw error;
    return NextResponse.json({ data, count: data?.length ?? 0 });
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
      .from('partners')
      .insert({
        name: body.name,
        type: body.type,
        email: body.email,
        phone: body.phone,
        country: body.country,
        address: body.address,
        credit_limit: body.credit_limit ?? 0,
        payment_terms: body.payment_terms ?? 'Net 30',
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

export async function PUT(request: Request) {
  try {
    const supabase = getClient();
    const body = await request.json();
    const { id, ...updates } = body;

    if (!id) {
      return NextResponse.json({ error: 'Partner ID is required' }, { status: 400 });
    }

    const { data, error } = await supabase
      .from('partners')
      .update(updates)
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
