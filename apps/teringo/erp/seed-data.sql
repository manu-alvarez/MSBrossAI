-- =====================================================
-- Perfume Trading ERP — Seed Data para Demo
-- Ejecutar DESPUÉS de schema.sql en Supabase SQL Editor
-- =====================================================

-- ─── Brands ───
INSERT INTO brands (name, category, country) VALUES
  ('Chanel', 'Luxury', 'France'),
  ('Dior', 'Luxury', 'France'),
  ('Creed', 'Niche', 'United Kingdom'),
  ('Tom Ford', 'Luxury', 'USA'),
  ('Lancôme', 'Luxury', 'France'),
  ('Jo Malone', 'Luxury', 'United Kingdom'),
  ('Prada', 'Luxury', 'Italy'),
  ('Yves Saint Laurent', 'Luxury', 'France'),
  ('Maison Francis Kurkdjian', 'Niche', 'France'),
  ('Byredo', 'Niche', 'Sweden');

-- ─── Products ───
INSERT INTO products (brand_id, name, line, gender, format, concentration, size_ml, ean, market_price, cost_price) VALUES
  ((SELECT id FROM brands WHERE name='Chanel'), 'Bleu de Chanel', 'Les Exclusifs', 'Male', 'Regular', 'EDP', 100, '3145891073607', 135.00, 78.50),
  ((SELECT id FROM brands WHERE name='Chanel'), 'Coco Mademoiselle', 'Les Exclusifs', 'Female', 'Regular', 'EDP', 50, '3145891033007', 120.00, 72.00),
  ((SELECT id FROM brands WHERE name='Dior'), 'Sauvage', 'Collection Privée', 'Male', 'Tester', 'EDT', 100, '3348901250141', 82.00, 62.00),
  ((SELECT id FROM brands WHERE name='Dior'), 'J''adore', 'Collection Privée', 'Female', 'Regular', 'EDP', 50, '3348901267897', 110.00, 68.00),
  ((SELECT id FROM brands WHERE name='Creed'), 'Aventus', 'Creed Signature', 'Male', 'Regular', 'EDP', 100, '3508441001114', 320.00, 245.00),
  ((SELECT id FROM brands WHERE name='Creed'), 'Green Irish Tweed', 'Creed Signature', 'Male', 'Regular', 'EDP', 100, '3508441000568', 290.00, 220.00),
  ((SELECT id FROM brands WHERE name='Tom Ford'), 'Ombre Leather', 'Private Blend', 'Male', 'Regular', 'EDP', 100, '888066000512', 235.00, 110.00),
  ((SELECT id FROM brands WHERE name='Tom Ford'), 'Black Orchid', 'Private Blend', 'Unisex', 'Regular', 'EDP', 50, '888066000314', 180.00, 95.00),
  ((SELECT id FROM brands WHERE name='Lancôme'), 'La Vie Est Belle', 'Maison Lancôme', 'Female', 'Regular', 'EDP', 75, '3605532612836', 95.00, 72.00),
  ((SELECT id FROM brands WHERE name='Jo Malone'), 'Wood Sage & Sea Salt', 'Cologne Collection', 'Unisex', 'Regular', 'EDC', 100, '5013515100160', 105.00, 88.00),
  ((SELECT id FROM brands WHERE name='Prada'), 'Luna Rossa Carbon', 'Luna Rossa', 'Male', 'Tester', 'EDT', 150, '3348901400126', 110.00, 95.00),
  ((SELECT id FROM brands WHERE name='Yves Saint Laurent'), 'Libre', 'Libre Collection', 'Female', 'Regular', 'EDP', 90, '3614273456789', 130.00, 105.00),
  ((SELECT id FROM brands WHERE name='Maison Francis Kurkdjian'), 'Baccarat Rouge 540', 'MFK Collection', 'Unisex', 'Regular', 'EDP', 70, '3700409800012', 300.00, 225.00),
  ((SELECT id FROM brands WHERE name='Byredo'), 'Gypsy Water', 'Byredo Signature', 'Unisex', 'Regular', 'EDP', 50, '7340018701234', 190.00, 140.00);

-- ─── Partners ───
INSERT INTO partners (name, type, email, phone, country, credit_limit, payment_terms, broker_fee_pct) VALUES
  ('GlobalFragance GmbH', 'Supplier', 'info@globalfragance.de', '+49 30 1234 5678', 'Alemania', 75000, 'Net 45', NULL),
  ('Parfums World SA', 'Both', 'sales@parfumsworld.fr', '+33 1 2345 6789', 'Francia', 100000, 'Net 60', NULL),
  ('Luxury Scents Ltd', 'Supplier', 'contact@luxuryscents.uk', '+44 20 7123 4567', 'Reino Unido', 50000, 'Net 30', NULL),
  ('Aroma Select SL', 'Client', 'compras@aromaselect.es', '+34 91 2345 678', 'España', 25000, 'Net 30', NULL),
  ('Beauty Distribution Inc', 'Client', 'orders@beautydist.com', '+1 212 555 0199', 'USA', 150000, 'Net 30', NULL),
  ('Scents Global Brokers AG', 'Broker', 'trading@scentsglobal.ch', '+41 22 345 6789', 'Suiza', 50000, 'Net 15', 2.50),
  ('Orient Perfumes FZE', 'Broker', 'info@orientperfumes.ae', '+971 4 234 5678', 'EAU', 30000, 'Net 15', 3.00);

-- ─── Warehouses ───
INSERT INTO warehouses (name, code, location) VALUES
  ('Almacén Central Madrid', 'MAD-01', 'Calle Logística 5, 28001 Madrid'),
  ('Almacén Puerto Barcelona', 'BCN-01', 'Zona Franca, 08040 Barcelona');

-- ─── Inventory ───
INSERT INTO inventory (product_id, warehouse_id, quantity, batch_code, cost_price, expiry_date, warehouse_location) VALUES
  ((SELECT id FROM products WHERE ean='3145891073607'), (SELECT id FROM warehouses WHERE code='MAD-01'), 150, 'CHANEL-BLEU-2025A', 78.50, '2028-06-01', 'A1-B3'),
  ((SELECT id FROM products WHERE ean='3348901250141'), (SELECT id FROM warehouses WHERE code='MAD-01'), 45, 'DIOR-SAUVAGE-2024B', 62.00, '2027-12-01', 'A2-C1'),
  ((SELECT id FROM products WHERE ean='3508441001114'), (SELECT id FROM warehouses WHERE code='MAD-01'), 12, 'CREED-AVENTUS-2024A', 245.00, '2028-03-01', 'B1-A2'),
  ((SELECT id FROM products WHERE ean='888066000512'), (SELECT id FROM warehouses WHERE code='BCN-01'), 25, 'TF-OMBRE-2025C', 110.00, '2027-09-01', 'C2-B1'),
  ((SELECT id FROM products WHERE ean='3605532612836'), (SELECT id FROM warehouses WHERE code='BCN-01'), 80, 'LANCOME-LVEB-2025A', 72.00, '2028-01-01', 'C1-A3'),
  ((SELECT id FROM products WHERE ean='5013515100160'), (SELECT id FROM warehouses WHERE code='MAD-01'), 60, 'JM-WOODSAGE-2024A', 88.00, '2027-07-01', 'A3-B2'),
  ((SELECT id FROM products WHERE ean='3348901400126'), (SELECT id FROM warehouses WHERE code='MAD-01'), 8, 'PRADA-CARBON-2023B', 95.00, '2026-11-01', 'A1-C4');

-- ─── Trading Operations (with Incoterms and margins) ───
INSERT INTO trading_list (type, partner_id, product_id, quantity, price_unit, incoterm, market_price, status, valid_until) VALUES
  ('Offer', (SELECT id FROM partners WHERE name='GlobalFragance GmbH'), (SELECT id FROM products WHERE ean='3145891073607'), 50, 78.50, 'EXW', 135.00, 'Active', '2026-07-15'),
  ('Offer', (SELECT id FROM partners WHERE name='Parfums World SA'), (SELECT id FROM products WHERE ean='3348901250141'), 120, 62.00, 'FOB', 82.00, 'Active', '2026-07-20'),
  ('Offer', (SELECT id FROM partners WHERE name='Luxury Scents Ltd'), (SELECT id FROM products WHERE ean='3508441001114'), 10, 245.00, 'CIF', 320.00, 'Draft', '2026-08-01'),
  ('Bid', (SELECT id FROM partners WHERE name='Aroma Select SL'), (SELECT id FROM products WHERE ean='888066000512'), 25, 110.00, 'DDP', 235.00, 'Active', '2026-07-10'),
  ('Bid', (SELECT id FROM partners WHERE name='Beauty Distribution Inc'), (SELECT id FROM products WHERE ean='3605532612836'), 80, 72.00, 'FOB', 95.00, 'Accepted', '2026-06-30'),
  ('Offer', (SELECT id FROM partners WHERE name='GlobalFragance GmbH'), (SELECT id FROM products WHERE ean='3348901400126'), 40, 95.00, 'EXW', 110.00, 'Expired', '2026-06-01'),
  ('Bid', (SELECT id FROM partners WHERE name='Parfums World SA'), (SELECT id FROM products WHERE ean='5013515100160'), 60, 88.00, 'CIF', 105.00, 'Negotiating', '2026-07-25'),
  ('Offer', (SELECT id FROM partners WHERE name='Luxury Scents Ltd'), (SELECT id FROM products WHERE ean='3614273456789'), 35, 105.00, 'FOB', 130.00, 'Draft', '2026-08-05');

-- ─── Invoices ───
INSERT INTO invoices (partner_id, invoice_number, type, incoterm, total_net, tax_percent, total_gross, status, due_date) VALUES
  ((SELECT id FROM partners WHERE name='GlobalFragance GmbH'), 'INV-2026-0001', 'Offer', 'EXW', 3925.00, 21, 4749.25, 'Paid', '2026-07-15'),
  ((SELECT id FROM partners WHERE name='Parfums World SA'), 'INV-2026-0002', 'Offer', 'FOB', 7440.00, 21, 9002.40, 'Pending', '2026-08-01'),
  ((SELECT id FROM partners WHERE name='Aroma Select SL'), 'INV-2026-0003', 'Bid', 'DDP', 2750.00, 21, 3327.50, 'Approved', '2026-07-30'),
  ((SELECT id FROM partners WHERE name='Beauty Distribution Inc'), 'INV-2026-0004', 'Bid', 'FOB', 5760.00, 21, 6969.60, 'Shipped', '2026-07-10'),
  ((SELECT id FROM partners WHERE name='Luxury Scents Ltd'), 'INV-2026-0005', 'Offer', 'EXW', 2450.00, 21, 2964.50, 'Cancelled', '2026-06-30');
