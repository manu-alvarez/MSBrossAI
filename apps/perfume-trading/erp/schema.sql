-- ============================================================
-- Perfume Trading ERP - Schema v3
-- Multi-warehouse, Incoterms, Brokers, Batch Traceability
-- ============================================================

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";
CREATE EXTENSION IF NOT EXISTS "pg_trgm";

-- ─── ENUMS ───
CREATE TYPE gender_type AS ENUM ('Male','Female','Unisex');
CREATE TYPE format_type AS ENUM ('Tester','Regular','Set','Vial','Miniature');
CREATE TYPE concentration_type AS ENUM ('EDP','EDT','EDC','Parfum','Absolute','Cologne');
CREATE TYPE entity_type AS ENUM ('Supplier','Client','Both','Broker');
CREATE TYPE trade_type AS ENUM ('Offer','Bid');
CREATE TYPE trade_status AS ENUM ('Draft','Active','Accepted','Rejected','Expired','Negotiating');
CREATE TYPE invoice_status AS ENUM ('Pending','Approved','Shipped','Paid','Cancelled','Proforma');
CREATE TYPE incoterm_type AS ENUM ('EXW','FOB','CIF','DDP','CIP','CPT','DAP');
CREATE TYPE brand_category AS ENUM ('Luxury','Niche','Mass','Independent');
CREATE TYPE user_role AS ENUM ('admin','commercial','viewer');

-- ─── BRANDS ───
CREATE TABLE brands (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL UNIQUE,
    category brand_category DEFAULT 'Luxury',
    country TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);
CREATE INDEX idx_brands_name ON brands USING gin(name gin_trgm_ops);

-- ─── PRODUCTS ───
CREATE TABLE products (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    brand_id UUID REFERENCES brands(id) ON DELETE RESTRICT,
    name TEXT NOT NULL,
    line TEXT,
    gender gender_type DEFAULT 'Unisex',
    format format_type DEFAULT 'Regular',
    concentration concentration_type DEFAULT 'EDP',
    size_ml INTEGER NOT NULL CHECK (size_ml > 0),
    ean TEXT UNIQUE NOT NULL,
    market_price DECIMAL(10,2) NOT NULL CHECK (market_price >= 0),
    cost_price DECIMAL(10,2),
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);
CREATE INDEX idx_products_brand ON products(brand_id);
CREATE INDEX idx_products_ean ON products(ean);
CREATE INDEX idx_products_active ON products(is_active);
CREATE INDEX idx_products_search ON products USING gin(name gin_trgm_ops);

-- ─── PARTNERS ───
CREATE TABLE partners (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    type entity_type NOT NULL,
    email TEXT,
    phone TEXT,
    country TEXT,
    address TEXT,
    credit_limit DECIMAL(12,2) DEFAULT 0,
    payment_terms TEXT DEFAULT 'Net 30',
    is_active BOOLEAN DEFAULT true,
    broker_fee_pct DECIMAL(5,2), -- % fee for brokers
    created_at TIMESTAMPTZ DEFAULT NOW()
);
CREATE INDEX idx_partners_type ON partners(type);
CREATE INDEX idx_partners_country ON partners(country);

-- ─── WAREHOUSES ───
CREATE TABLE warehouses (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    code TEXT UNIQUE NOT NULL,
    location TEXT,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ─── INVENTORY (multi-warehouse, batch tracked) ───
CREATE TABLE inventory (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    product_id UUID REFERENCES products(id) ON DELETE RESTRICT,
    warehouse_id UUID REFERENCES warehouses(id) ON DELETE RESTRICT,
    partner_id UUID REFERENCES partners(id) ON DELETE SET NULL,
    quantity INTEGER NOT NULL DEFAULT 0 CHECK (quantity >= 0),
    batch_code TEXT NOT NULL,
    cost_price DECIMAL(10,2) NOT NULL,
    expiry_date DATE,
    warehouse_location TEXT,
    received_at TIMESTAMPTZ DEFAULT NOW()
);
CREATE INDEX idx_inventory_product ON inventory(product_id);
CREATE INDEX idx_inventory_warehouse ON inventory(warehouse_id);
CREATE INDEX idx_inventory_batch ON inventory(batch_code);
CREATE INDEX idx_inventory_expiry ON inventory(expiry_date);

-- ─── TRADING LIST (with Incoterms + margin calc) ───
CREATE TABLE trading_list (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    type trade_type NOT NULL,
    partner_id UUID REFERENCES partners(id) ON DELETE RESTRICT,
    product_id UUID REFERENCES products(id) ON DELETE RESTRICT,
    quantity INTEGER NOT NULL CHECK (quantity > 0),
    price_unit DECIMAL(10,2) NOT NULL CHECK (price_unit >= 0),
    total_amount DECIMAL(12,2) GENERATED ALWAYS AS (quantity * price_unit) STORED,
    incoterm incoterm_type DEFAULT 'EXW',
    market_price DECIMAL(10,2),
    margin_pct DECIMAL(5,2) GENERATED ALWAYS AS (
        CASE WHEN market_price > 0
        THEN ROUND(((market_price - price_unit) / market_price * 100)::numeric, 2)
        ELSE 0 END
    ) STORED,
    margin_amount DECIMAL(10,2) GENERATED ALWAYS AS (
        CASE WHEN market_price > 0
        THEN ROUND(((market_price - price_unit) * quantity)::numeric, 2)
        ELSE 0 END
    ) STORED,
    status trade_status DEFAULT 'Active',
    valid_until TIMESTAMPTZ,
    notes TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);
CREATE INDEX idx_trading_status ON trading_list(status);
CREATE INDEX idx_trading_type ON trading_list(type);
CREATE INDEX idx_trading_partner ON trading_list(partner_id);
CREATE INDEX idx_trading_incoterm ON trading_list(incoterm);

-- ─── INVOICES ───
CREATE TABLE invoices (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    partner_id UUID REFERENCES partners(id) ON DELETE RESTRICT,
    invoice_number TEXT UNIQUE NOT NULL,
    type trade_type NOT NULL,
    incoterm incoterm_type DEFAULT 'EXW',
    total_net DECIMAL(12,2) NOT NULL CHECK (total_net >= 0),
    tax_percent DECIMAL(5,2) DEFAULT 0 CHECK (tax_percent >= 0),
    tax_amount DECIMAL(12,2) GENERATED ALWAYS AS (total_net * tax_percent / 100) STORED,
    total_gross DECIMAL(12,2) NOT NULL CHECK (total_gross >= 0),
    status invoice_status DEFAULT 'Pending',
    due_date TIMESTAMPTZ,
    notes TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);
CREATE INDEX idx_invoices_status ON invoices(status);
CREATE INDEX idx_invoices_partner ON invoices(partner_id);

-- ─── INVOICE ITEMS ───
CREATE TABLE invoice_items (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    invoice_id UUID REFERENCES invoices(id) ON DELETE CASCADE,
    product_id UUID REFERENCES products(id) ON DELETE RESTRICT,
    description TEXT,
    quantity INTEGER NOT NULL CHECK (quantity > 0),
    unit_price DECIMAL(10,2) NOT NULL CHECK (unit_price >= 0),
    total_price DECIMAL(12,2) GENERATED ALWAYS AS (quantity * unit_price) STORED
);

-- ─── AUTO-UPDATE TRIGGER ───
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN NEW.updated_at = NOW(); RETURN NEW; END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER products_updated_at
    BEFORE UPDATE ON products
    FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- ─── RPC: Dashboard KPIs ───
CREATE OR REPLACE FUNCTION get_dashboard_kpis()
RETURNS JSONB LANGUAGE plpgsql SECURITY DEFINER AS $$
DECLARE result JSONB;
BEGIN
    SELECT JSONB_BUILD_OBJECT(
        'total_sales', COALESCE((SELECT SUM(total_gross) FROM invoices WHERE status IN ('Paid','Shipped') AND created_at >= NOW() - INTERVAL '30 days'), 0),
        'sales_change', 12.5,
        'active_offers', COALESCE((SELECT COUNT(*) FROM trading_list WHERE type='Offer' AND status='Active'), 0),
        'pending_bids', COALESCE((SELECT COUNT(*) FROM trading_list WHERE type='Bid' AND status IN ('Active','Negotiating')), 0),
        'low_stock_count', COALESCE((SELECT COUNT(*) FROM inventory WHERE quantity < 20), 0),
        'active_partners', COALESCE((SELECT COUNT(*) FROM partners WHERE is_active=true), 0),
        'avg_margin', COALESCE((SELECT ROUND(AVG(margin_pct), 1) FROM trading_list WHERE status='Accepted'), 0)
    ) INTO result;
    RETURN result;
END;
$$;

-- ─── RPC: Inventory by Warehouse ───
CREATE OR REPLACE FUNCTION get_inventory_by_warehouse(warehouse_id UUID)
RETURNS TABLE(
    product_id UUID, product_name TEXT, brand_name TEXT,
    batch_code TEXT, quantity BIGINT, cost_price DECIMAL,
    expiry_date DATE, warehouse_location TEXT
) LANGUAGE plpgsql SECURITY DEFINER AS $$
BEGIN
    RETURN QUERY
    SELECT i.product_id, p.name, b.name,
           i.batch_code, SUM(i.quantity)::BIGINT, i.cost_price,
           i.expiry_date, i.warehouse_location
    FROM inventory i
    JOIN products p ON p.id = i.product_id
    JOIN brands b ON b.id = p.brand_id
    WHERE i.warehouse_id = warehouse_id AND i.quantity > 0
    GROUP BY i.product_id, p.name, b.name, i.batch_code, i.cost_price, i.expiry_date, i.warehouse_location
    ORDER BY i.expiry_date NULLS LAST;
END;
$$;

-- ─── RLS POLICIES ───
ALTER TABLE brands ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE partners ENABLE ROW LEVEL SECURITY;
ALTER TABLE warehouses ENABLE ROW LEVEL SECURITY;
ALTER TABLE inventory ENABLE ROW LEVEL SECURITY;
ALTER TABLE trading_list ENABLE ROW LEVEL SECURITY;
ALTER TABLE invoices ENABLE ROW LEVEL SECURITY;
ALTER TABLE invoice_items ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Authenticated read" ON brands FOR SELECT TO authenticated USING (true);
CREATE POLICY "Authenticated read" ON products FOR SELECT TO authenticated USING (true);
CREATE POLICY "Authenticated read" ON partners FOR SELECT TO authenticated USING (true);
CREATE POLICY "Authenticated read" ON warehouses FOR SELECT TO authenticated USING (true);
CREATE POLICY "Authenticated read" ON inventory FOR SELECT TO authenticated USING (true);
CREATE POLICY "Authenticated read" ON trading_list FOR SELECT TO authenticated USING (true);
CREATE POLICY "Authenticated read" ON invoices FOR SELECT TO authenticated USING (true);
CREATE POLICY "Authenticated read" ON invoice_items FOR SELECT TO authenticated USING (true);

-- Admin write policies
CREATE POLICY "Admin write products" ON products FOR INSERT TO authenticated WITH CHECK (auth.jwt() ->> 'role' = 'admin');
CREATE POLICY "Admin write partners" ON partners FOR INSERT TO authenticated WITH CHECK (auth.jwt() ->> 'role' = 'admin');
CREATE POLICY "Admin write inventory" ON inventory FOR INSERT TO authenticated WITH CHECK (auth.jwt() ->> 'role' = 'admin');
CREATE POLICY "Admin write trading" ON trading_list FOR INSERT TO authenticated WITH CHECK (auth.jwt() ->> 'role' = 'admin');
CREATE POLICY "Admin write invoices" ON invoices FOR INSERT TO authenticated WITH CHECK (auth.jwt() ->> 'role' = 'admin');
