-- Perfume Trading ERP - Supabase Schema

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Brands Table
CREATE TABLE brands (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL UNIQUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Products (Catalog Maestro)
CREATE TYPE gender_type AS ENUM ('Male', 'Female', 'Unisex');
CREATE TYPE format_type AS ENUM ('Tester', 'Regular', 'Set');
CREATE TYPE concentration_type AS ENUM ('EDP', 'EDT', 'EDC', 'Parfum', 'Absolute');

CREATE TABLE products (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    brand_id UUID REFERENCES brands(id),
    name TEXT NOT NULL,
    line TEXT,
    gender gender_type DEFAULT 'Unisex',
    format format_type DEFAULT 'Regular',
    concentration concentration_type DEFAULT 'EDP',
    size_ml INTEGER,
    ean TEXT UNIQUE,
    market_price DECIMAL(10, 2),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Suppliers & Clients
CREATE TYPE entity_type AS ENUM ('Supplier', 'Client', 'Both');

CREATE TABLE partners (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    type entity_type NOT NULL,
    email TEXT,
    phone TEXT,
    country TEXT,
    address TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Inventory
CREATE TABLE inventory (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    product_id UUID REFERENCES products(id),
    partner_id UUID REFERENCES partners(id), -- Supplier who provided the stock
    quantity INTEGER NOT NULL DEFAULT 0,
    batch_code TEXT,
    cost_price DECIMAL(10, 2),
    warehouse_location TEXT,
    received_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Offers & Bids (Trading B2B)
CREATE TYPE trade_type AS ENUM ('Offer', 'Bid');
CREATE TYPE trade_status AS ENUM ('Draft', 'Active', 'Accepted', 'Rejected', 'Expired');

CREATE TABLE trading_list (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    type trade_type NOT NULL,
    partner_id UUID REFERENCES partners(id),
    product_id UUID REFERENCES products(id),
    quantity INTEGER NOT NULL,
    price_unit DECIMAL(10, 2) NOT NULL,
    total_amount DECIMAL(10, 2) GENERATED ALWAYS AS (quantity * price_unit) STORED,
    status trade_status DEFAULT 'Active',
    valid_until TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Invoices & Logistics
CREATE TABLE invoices (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    partner_id UUID REFERENCES partners(id),
    invoice_number TEXT UNIQUE NOT NULL,
    type trade_type NOT NULL, -- Offer/Bid determines Sale/Purchase
    total_net DECIMAL(10, 2) NOT NULL,
    tax_percent DECIMAL(5, 2) DEFAULT 0,
    total_gross DECIMAL(10, 2) NOT NULL,
    status TEXT DEFAULT 'Pending',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- RLS Policies (Row Level Security)
ALTER TABLE brands ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE partners ENABLE ROW LEVEL SECURITY;
ALTER TABLE inventory ENABLE ROW LEVEL SECURITY;
ALTER TABLE trading_list ENABLE ROW LEVEL SECURITY;
ALTER TABLE invoices ENABLE ROW LEVEL SECURITY;

-- Simple Policy: Authenticated users can read everything
CREATE POLICY "Authenticated users can read" ON brands FOR SELECT TO authenticated USING (true);
CREATE POLICY "Authenticated users can read" ON products FOR SELECT TO authenticated USING (true);
CREATE POLICY "Authenticated users can read" ON partners FOR SELECT TO authenticated USING (true);
CREATE POLICY "Authenticated users can read" ON inventory FOR SELECT TO authenticated USING (true);
CREATE POLICY "Authenticated users can read" ON trading_list FOR SELECT TO authenticated USING (true);
CREATE POLICY "Authenticated users can read" ON invoices FOR SELECT TO authenticated USING (true);
