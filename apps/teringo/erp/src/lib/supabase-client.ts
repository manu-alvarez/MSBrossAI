import { createClient, SupabaseClient } from '@supabase/supabase-js';

let _supabase: SupabaseClient | null = null;

/** Check if running in offline local-storage fallback mode. */
export function isSupabaseConfigured(): boolean {
  return true;
}

// ── Local Storage seeded databases for Offline Fallback Mode ──────────────
const MOCK_TERINGO_DB_KEY = "teringo_mock_db";

function getMockDb(): Record<string, any[]> {
  if (typeof window === "undefined") return {};
  const stored = localStorage.getItem(MOCK_TERINGO_DB_KEY);
  if (!stored) {
    // Seed initial data matching the seed-data.sql schema exactly
    const brands = [
      { id: "b-1", name: "Chanel", category: "Luxury", country: "France" },
      { id: "b-2", name: "Dior", category: "Luxury", country: "France" },
      { id: "b-3", name: "Creed", category: "Niche", country: "United Kingdom" },
      { id: "b-4", name: "Tom Ford", category: "Luxury", country: "USA" },
      { id: "b-5", name: "Lancôme", category: "Luxury", country: "France" },
      { id: "b-6", name: "Jo Malone", category: "Luxury", country: "United Kingdom" },
      { id: "b-7", name: "Prada", category: "Luxury", country: "Italy" },
      { id: "b-8", name: "Yves Saint Laurent", category: "Luxury", country: "France" },
      { id: "b-9", name: "Maison Francis Kurkdjian", category: "Niche", country: "France" },
      { id: "b-10", name: "Byredo", category: "Niche", country: "Sweden" }
    ];

    const products = [
      { id: "p-1", brand_id: "b-1", brands: brands[0], name: "Bleu de Chanel", line: "Les Exclusifs", gender: "Male", format: "Regular", concentration: "EDP", size_ml: 100, ean: "3145891073607", market_price: 135.00, cost_price: 78.50, is_active: true, created_at: new Date().toISOString() },
      { id: "p-2", brand_id: "b-1", brands: brands[0], name: "Coco Mademoiselle", line: "Les Exclusifs", gender: "Female", format: "Regular", concentration: "EDP", size_ml: 50, ean: "3145891033007", market_price: 120.00, cost_price: 72.00, is_active: true, created_at: new Date().toISOString() },
      { id: "p-3", brand_id: "b-2", brands: brands[1], name: "Sauvage", line: "Collection Privée", gender: "Male", format: "Tester", concentration: "EDT", size_ml: 100, ean: "3348901250141", market_price: 82.00, cost_price: 62.00, is_active: true, created_at: new Date().toISOString() },
      { id: "p-4", brand_id: "b-2", brands: brands[1], name: "J'adore", line: "Collection Privée", gender: "Female", format: "Regular", concentration: "EDP", size_ml: 50, ean: "3348901267897", market_price: 110.00, cost_price: 68.00, is_active: true, created_at: new Date().toISOString() },
      { id: "p-5", brand_id: "b-3", brands: brands[2], name: "Aventus", line: "Creed Signature", gender: "Male", format: "Regular", concentration: "EDP", size_ml: 100, ean: "3508441001114", market_price: 320.00, cost_price: 245.00, is_active: true, created_at: new Date().toISOString() },
      { id: "p-6", brand_id: "b-3", brands: brands[2], name: "Green Irish Tweed", line: "Creed Signature", gender: "Male", format: "Regular", concentration: "EDP", size_ml: 100, ean: "3508441000568", market_price: 290.00, cost_price: 220.00, is_active: true, created_at: new Date().toISOString() },
      { id: "p-7", brand_id: "b-4", brands: brands[3], name: "Ombre Leather", line: "Private Blend", gender: "Male", format: "Regular", concentration: "EDP", size_ml: 100, ean: "888066000512", market_price: 235.00, cost_price: 110.00, is_active: true, created_at: new Date().toISOString() },
      { id: "p-8", brand_id: "b-4", brands: brands[3], name: "Black Orchid", line: "Private Blend", gender: "Unisex", format: "Regular", concentration: "EDP", size_ml: 50, ean: "888066000314", market_price: 180.00, cost_price: 95.00, is_active: true, created_at: new Date().toISOString() }
    ];

    const partners = [
      { id: "partner-1", name: "GlobalFragance GmbH", type: "Supplier", email: "info@globalfragance.de", phone: "+49 30 1234 5678", country: "Alemania", credit_limit: 75000, payment_terms: "Net 45", broker_fee_pct: null, is_active: true },
      { id: "partner-2", name: "Parfums World SA", type: "Both", email: "sales@parfumsworld.fr", phone: "+33 1 2345 6789", country: "Francia", credit_limit: 100000, payment_terms: "Net 60", broker_fee_pct: null, is_active: true },
      { id: "partner-3", name: "Luxury Scents Ltd", type: "Supplier", email: "contact@luxuryscents.uk", phone: "+44 20 7123 4567", country: "Reino Unido", credit_limit: 50000, payment_terms: "Net 30", broker_fee_pct: null, is_active: true },
      { id: "partner-4", name: "Aroma Select SL", type: "Client", email: "compras@aromaselect.es", phone: "+34 91 2345 678", country: "España", credit_limit: 25000, payment_terms: "Net 30", broker_fee_pct: null, is_active: true }
    ];

    const warehouses = [
      { id: "w-1", name: "Almacén Central Madrid", code: "MAD-01", location: "Calle Logística 5, 28001 Madrid", is_active: true },
      { id: "w-2", name: "Almacén Puerto Barcelona", code: "BCN-01", location: "Zona Franca, 08040 Barcelona", is_active: true }
    ];

    const inventory = [
      { id: "inv-1", product_id: "p-1", products: products[0], warehouse_id: "w-1", warehouses: warehouses[0], quantity: 150, batch_code: "CHANEL-BLEU-2025A", cost_price: 78.50, expiry_date: "2028-06-01", warehouse_location: "A1-B3" },
      { id: "inv-2", product_id: "p-3", products: products[2], warehouse_id: "w-1", warehouses: warehouses[0], quantity: 45, batch_code: "DIOR-SAUVAGE-2024B", cost_price: 62.00, expiry_date: "2027-12-01", warehouse_location: "A2-C1" },
      { id: "inv-3", product_id: "p-5", products: products[4], warehouse_id: "w-1", warehouses: warehouses[0], quantity: 12, batch_code: "CREED-AVENTUS-2024A", cost_price: 245.00, expiry_date: "2028-03-01", warehouse_location: "B1-A2" },
      { id: "inv-4", product_id: "p-7", products: products[6], warehouse_id: "w-2", warehouses: warehouses[1], quantity: 25, batch_code: "TF-OMBRE-2025C", cost_price: 110.00, expiry_date: "2027-09-01", warehouse_location: "C2-B1" }
    ];

    const trading_list = [
      { id: "t-1", type: "Offer", partner_id: "partner-1", partners: partners[0], product_id: "p-1", products: products[0], brands: brands[0], quantity: 50, price_unit: 78.50, total_amount: 3925, incoterm: "EXW", market_price: 135, margin_pct: 41.85, margin_amount: 2825, status: "Active", valid_until: "2026-07-15", created_at: new Date().toISOString() },
      { id: "t-2", type: "Offer", partner_id: "partner-2", partners: partners[1], product_id: "p-3", products: products[2], brands: brands[1], quantity: 120, price_unit: 62.00, total_amount: 7440, incoterm: "FOB", market_price: 82, margin_pct: 24.39, margin_amount: 2400, status: "Active", valid_until: "2026-07-20", created_at: new Date().toISOString() }
    ];

    const invoices = [
      { id: "invc-1", partner_id: "partner-1", partners: partners[0], invoice_number: "INV-2026-0001", type: "Offer", incoterm: "EXW", total_net: 3925.00, tax_percent: 21, tax_amount: 824.25, total_gross: 4749.25, status: "Paid", due_date: "2026-07-15", created_at: new Date().toISOString() },
      { id: "invc-2", partner_id: "partner-2", partners: partners[1], invoice_number: "INV-2026-0002", type: "Offer", incoterm: "FOB", total_net: 7440.00, tax_percent: 21, tax_amount: 1562.40, total_gross: 9002.40, status: "Pending", due_date: "2026-08-01", created_at: new Date().toISOString() }
    ];

    const db = { brands, products, partners, warehouses, inventory, trading_list, invoices };
    localStorage.setItem(MOCK_TERINGO_DB_KEY, JSON.stringify(db));
    return db;
  }
  return JSON.parse(stored);
}

function saveMockDb(db: Record<string, any[]>) {
  if (typeof window !== "undefined") {
    localStorage.setItem(MOCK_TERINGO_DB_KEY, JSON.stringify(db));
  }
}

/** Construct a fully compliant Supabase Client Mock interface */
export function getMockSupabaseClient(): any {
  return {
    auth: {
      async signInWithPassword({ email }: any) {
        return {
          data: {
            user: {
              id: "local-user-id",
              email,
              user_metadata: { role: "admin", name: email.split("@")[0] },
            },
          },
          error: null,
        };
      },
      async signOut() {
        return { error: null };
      },
      async getSession() {
        return {
          data: {
            session: {
              user: {
                id: "local-user-id",
                email: "admin@msbross.me",
                user_metadata: { role: "admin", name: "Orquestador B2B" },
              },
            },
          },
          error: null,
        };
      },
    },

    from(table: string) {
      const db = getMockDb();
      let records = db[table] || [];

      // Query Builder Interface
      const builder: any = {
        _eqFilters: [] as Array<[string, any]>,
        _gtFilters: [] as Array<[string, any]>,
        _ltFilters: [] as Array<[string, any]>,
        _limit: null as number | null,
        _order: null as { column: string; ascending: boolean } | null,

        select(fields: string) {
          // simple Mock mapping
          return this;
        },
        eq(column: string, value: any) {
          this._eqFilters.push([column, value]);
          return this;
        },
        gt(column: string, value: any) {
          this._gtFilters.push([column, value]);
          return this;
        },
        lt(column: string, value: any) {
          this._ltFilters.push([column, value]);
          return this;
        },
        or(filterStr: string) {
          return this; // simplified search fallback
        },
        order(column: string, opts?: { ascending?: boolean }) {
          this._order = { column, ascending: opts?.ascending ?? true };
          return this;
        },
        limit(n: number) {
          this._limit = n;
          return this;
        },
        async single() {
          let data = [...records];
          for (const [col, val] of this._eqFilters) {
            data = data.filter(r => r[col] === val);
          }
          if (data.length === 0) {
            return { data: null, error: { message: "Row not found" } };
          }
          return { data: data[0], error: null };
        },

        // Thenable support for await builder
        then(onfulfilled?: (value: any) => any, onrejected?: (reason: any) => any) {
          let data = [...records];

          // Apply filters
          for (const [col, val] of this._eqFilters) {
            data = data.filter(r => r[col] === val);
          }
          for (const [col, val] of this._gtFilters) {
            data = data.filter(r => Number(r[col]) > Number(val));
          }
          for (const [col, val] of this._ltFilters) {
            data = data.filter(r => Number(r[col]) < Number(val));
          }

          // Apply ordering
          if (this._order) {
            const { column, ascending } = this._order;
            data.sort((a, b) => {
              const valA = a[column];
              const valB = b[column];
              if (valA < valB) return ascending ? -1 : 1;
              if (valA > valB) return ascending ? 1 : -1;
              return 0;
            });
          }

          // Apply limit
          if (this._limit) {
            data = data.slice(0, this._limit);
          }

          const response = { data, error: null };
          return Promise.resolve(response).then(onfulfilled, onrejected);
        },

        async insert(item: any) {
          const newItem = {
            id: `row-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
            created_at: new Date().toISOString(),
            ...item,
          };
          
          // Seed nested brands/products for local joins
          if (table === 'products') {
            const currentDb = getMockDb();
            const brand = currentDb.brands.find(b => b.id === item.brand_id);
            if (brand) newItem.brands = brand;
          } else if (table === 'trading_list') {
            const currentDb = getMockDb();
            const p = currentDb.products.find(p => p.id === item.product_id);
            const partner = currentDb.partners.find(pt => pt.id === item.partner_id);
            if (p) {
              newItem.products = p;
              newItem.brands = p.brands;
            }
            if (partner) newItem.partners = partner;

            // Compute margin generated metrics
            const quantity = Number(item.quantity || 0);
            const price = Number(item.price_unit || 0);
            const market = Number(item.market_price || 0);
            newItem.total_amount = quantity * price;
            newItem.margin_pct = market > 0 ? parseFloat(((market - price) / market * 100).toFixed(2)) : 0;
            newItem.margin_amount = market > 0 ? parseFloat(((market - price) * quantity).toFixed(2)) : 0;
          } else if (table === 'invoices') {
            const currentDb = getMockDb();
            const partner = currentDb.partners.find(pt => pt.id === item.partner_id);
            if (partner) newItem.partners = partner;
          }

          records.unshift(newItem);
          db[table] = records;
          saveMockDb(db);

          return {
            select() {
              return {
                single() {
                  return Promise.resolve({ data: newItem, error: null });
                }
              };
            }
          };
        },

        async update(updates: any) {
          return {
            eq: (col: string, val: any) => {
              let updatedItem: any = null;
              records = records.map(r => {
                if (r[col] === val) {
                  updatedItem = { ...r, ...updates, updated_at: new Date().toISOString() };
                  return updatedItem;
                }
                return r;
              });
              db[table] = records;
              saveMockDb(db);

              return {
                select() {
                  return {
                    single() {
                      return Promise.resolve({ data: updatedItem, error: null });
                    }
                  };
                }
              };
            }
          };
        }
      };

      return builder;
    },

    async rpc(func: string, args?: any) {
      const db = getMockDb();
      if (func === "get_dashboard_kpis") {
        // Compute dynamically based on seeded local states
        const activeOffers = db.trading_list.filter(t => t.type === 'Offer' && t.status === 'Active').length;
        const pendingBids = db.trading_list.filter(t => t.type === 'Bid' && t.status === 'Active').length;
        const lowStock = db.inventory.filter(i => i.quantity < 20).length;
        const activePartners = db.partners.filter(p => p.is_active).length;
        
        return {
          data: {
            total_sales: 11365.00,
            sales_change: 14.8,
            active_offers: activeOffers,
            pending_bids: pendingBids,
            low_stock_count: lowStock,
            active_partners: activePartners,
            avg_margin: 33.1
          },
          error: null
        };
      }

      if (func === "search_products") {
        const term = (args?.search_term || "").toLowerCase();
        const matches = db.products.filter(p => 
          p.name.toLowerCase().includes(term) || 
          p.ean.includes(term) || 
          (p.brands?.name || "").toLowerCase().includes(term)
        );
        return { data: matches, error: null };
      }

      if (func === "deduct_inventory_on_trade" || func === "deduct_inventory_fifo") {
        const prodId = args?.p_product_id;
        const qty = Number(args?.p_quantity || 0);
        let remaining = qty;

        db.inventory = db.inventory.map(inv => {
          if (inv.product_id === prodId && remaining > 0) {
            const deduct = Math.min(inv.quantity, remaining);
            remaining -= deduct;
            return { ...inv, quantity: inv.quantity - deduct };
          }
          return inv;
        }).filter(inv => inv.quantity > 0);

        saveMockDb(db);
        return { data: true, error: null };
      }

      return { data: [], error: null };
    }
  };
}

/**
 * Get or initialize the Supabase client (lazy).
 */
export function getClient(): SupabaseClient {
  if (isSupabaseConfigured()) {
    if (!_supabase) {
      const url = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
      const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
      _supabase = createClient(url, key, {
        auth: { persistSession: true, autoRefreshToken: true },
      });
    }
    return _supabase;
  }
  // Return the type-casted local storage mock client in Offline Fallback Mode
  return getMockSupabaseClient() as SupabaseClient;
}

/**
 * Generic fetch wrapper with error handling.
 */
export async function supabaseFetch<T>(
  query: Promise<{ data: T | null; error: unknown }>
): Promise<T> {
  const { data, error } = await query;
  if (error) {
    console.error('[Supabase Error]', error);
    throw new Error(
      typeof error === 'object' && error !== null && 'message' in error
        ? (error as { message: string }).message
        : 'Database query failed'
    );
  }
  if (!data) {
    throw new Error('No data returned from query');
  }
  return data;
}
