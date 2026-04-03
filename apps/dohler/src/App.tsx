import React, { useState, useEffect, useCallback } from 'react';

// ============================================
// DÖHLER — Industrial Process Management
// ============================================

interface Valve {
  id: string;
  name: string;
  status: 'open' | 'closed' | 'maintenance';
  operationId: string;
}

interface Pump {
  id: string;
  name: string;
  status: 'running' | 'stopped' | 'maintenance';
  rpm: number;
  operationId: string;
}

interface ChecklistItem {
  id: string;
  text: string;
  checked: boolean;
  category: string;
}

interface Operation {
  id: string;
  name: string;
  product: string;
  status: 'running' | 'completed' | 'stopped';
  startTime: string;
  valves: Valve[];
  pumps: Pump[];
  checklists: ChecklistItem[];
}

interface Product {
  id: string;
  name: string;
  category: string;
  color: string;
}

const PRODUCTS: Product[] = [
  { id: '1', name: 'Zumo Turbio de Pera', category: 'Zumos', color: '#f59e0b' },
  { id: '2', name: 'Zumo Turbio de Manzana', category: 'Zumos', color: '#84cc16' },
  { id: '3', name: 'Zumo Turbio de Kaki', category: 'Zumos', color: '#f97316' },
  { id: '4', name: 'Concentrado Clarificado de Pera', category: 'Concentrados', color: '#eab308' },
  { id: '5', name: 'Concentrado Clarificado de Manzana', category: 'Concentrados', color: '#65a30d' },
  { id: '6', name: 'Crema Concentrada de Pera', category: 'Cremas', color: '#d97706' },
  { id: '7', name: 'Crema Concentrada de Manzana', category: 'Cremas', color: '#4d7c0f' },
  { id: '8', name: 'Crema Concentrada de Nectarina', category: 'Cremas', color: '#ea580c' },
];

const DEFAULT_CHECKLISTS: ChecklistItem[] = [
  { id: '1', text: 'Revisar válvulas de entrada', checked: false, category: 'Válvulas' },
  { id: '2', text: 'Verificar presión de bombas', checked: false, category: 'Bombas' },
  { id: '3', text: 'Controlar tiempos de pasteurización', checked: false, category: 'Tiempos' },
  { id: '4', text: 'Comprobar temperatura de entrada', checked: false, category: 'Temperatura' },
  { id: '5', text: 'Verificar nivel de tanques', checked: false, category: 'Niveles' },
  { id: '6', text: 'Revisar filtros de malla', checked: false, category: 'Filtros' },
  { id: '7', text: 'Comprobar válvulas de seguridad', checked: false, category: 'Válvulas' },
  { id: '8', text: 'Verificar bombas de transferencia', checked: false, category: 'Bombas' },
  { id: '9', text: 'Controlar tiempos de concentración', checked: false, category: 'Tiempos' },
  { id: '10', text: 'Revisar sistema CIP', checked: false, category: 'Limpieza' },
];

type TabType = 'operations' | 'products' | 'checklists' | 'history';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('operations');
  const [operations, setOperations] = useState<Operation[]>(() => {
    try {
      const saved = localStorage.getItem('dohler-operations');
      return saved ? JSON.parse(saved) : [];
    } catch { return []; }
  });
  const [products, setProducts] = useState<Product[]>(() => {
    try {
      const saved = localStorage.getItem('dohler-products');
      return saved ? JSON.parse(saved) : PRODUCTS;
    } catch { return PRODUCTS; }
  });
  const [showNewOp, setShowNewOp] = useState(false);
  const [newOpName, setNewOpName] = useState('');
  const [selectedProduct, setSelectedProduct] = useState('');
  const [showNewProduct, setShowNewProduct] = useState(false);
  const [newProductName, setNewProductName] = useState('');
  const [newProductCategory, setNewProductCategory] = useState('Zumos');
  const [newProductColor, setNewProductColor] = useState('#3b82f6');

  // Persist operations
  useEffect(() => {
    localStorage.setItem('dohler-operations', JSON.stringify(operations));
  }, [operations]);

  useEffect(() => {
    localStorage.setItem('dohler-products', JSON.stringify(products));
  }, [products]);

  const createOperation = () => {
    if (!newOpName || !selectedProduct) return;
    const product = products.find(p => p.id === selectedProduct);
    const op: Operation = {
      id: crypto.randomUUID(),
      name: newOpName,
      product: product?.name || '',
      status: 'running',
      startTime: new Date().toISOString(),
      valves: [
        { id: crypto.randomUUID(), name: 'V-001 Entrada', status: 'open', operationId: '' },
        { id: crypto.randomUUID(), name: 'V-002 Pasteurizador', status: 'open', operationId: '' },
        { id: crypto.randomUUID(), name: 'V-003 Salida', status: 'closed', operationId: '' },
        { id: crypto.randomUUID(), name: 'V-004 Seguridad', status: 'open', operationId: '' },
      ],
      pumps: [
        { id: crypto.randomUUID(), name: 'B-001 Alimentación', status: 'running', rpm: 1450, operationId: '' },
        { id: crypto.randomUUID(), name: 'B-002 Transferencia', status: 'stopped', rpm: 0, operationId: '' },
      ],
      checklists: DEFAULT_CHECKLISTS.map(c => ({ ...c, id: crypto.randomUUID(), checked: false })),
    };
    setOperations(prev => [op, ...prev]);
    setNewOpName('');
    setSelectedProduct('');
    setShowNewOp(false);
  };

  const addProduct = () => {
    if (!newProductName) return;
    setProducts(prev => [...prev, {
      id: crypto.randomUUID(),
      name: newProductName,
      category: newProductCategory,
      color: newProductColor,
    }]);
    setNewProductName('');
    setShowNewProduct(false);
  };

  const toggleValve = (opId: string, valveId: string) => {
    setOperations(prev => prev.map(op => {
      if (op.id !== opId) return op;
      return {
        ...op,
        valves: op.valves.map(v => {
          if (v.id !== valveId) return v;
          return { ...v, status: v.status === 'open' ? 'closed' : v.status === 'closed' ? 'open' : 'maintenance' as Valve['status'] };
        }),
      };
    }));
  };

  const togglePump = (opId: string, pumpId: string) => {
    setOperations(prev => prev.map(op => {
      if (op.id !== opId) return op;
      return {
        ...op,
        pumps: op.pumps.map(p => {
          if (p.id !== pumpId) return p;
          return { ...p, status: p.status === 'running' ? 'stopped' : 'running' as Pump['status'], rpm: p.status === 'running' ? 0 : 1450 };
        }),
      };
    }));
  };

  const toggleChecklist = (opId: string, itemId: string) => {
    setOperations(prev => prev.map(op => {
      if (op.id !== opId) return op;
      return {
        ...op,
        checklists: op.checklists.map(c => c.id === itemId ? { ...c, checked: !c.checked } : c),
      };
    }));
  };

  const completeOperation = (opId: string) => {
    setOperations(prev => prev.map(op => op.id === opId ? { ...op, status: 'completed' as const } : op));
  };

  const tabs: { id: TabType; icon: string; label: string }[] = [
    { id: 'operations', icon: '⚙️', label: 'Operaciones' },
    { id: 'products', icon: '🧪', label: 'Productos' },
    { id: 'checklists', icon: '✅', label: 'Checklists' },
    { id: 'history', icon: '📊', label: 'Historial' },
  ];

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0a0e17 0%, #1a1a2e 50%, #0a1a2e 100%)' }}>
      {/* Header */}
      <header style={{ padding: '1rem 2rem', borderBottom: '1px solid rgba(59,130,246,0.1)', background: 'rgba(0,0,0,0.3)' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ width: 48, height: 48, borderRadius: 12, background: 'linear-gradient(135deg, #3b82f6, #06b6d4)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>⚙️</div>
            <div>
              <h1 style={{ fontFamily: 'Inter', fontSize: '1.5rem', fontWeight: 800, background: 'linear-gradient(135deg, #3b82f6, #06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>DÖHLER</h1>
              <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)' }}>Gestión de Procesos Industriales</p>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            {tabs.map(tab => (
              <button key={tab.id} onClick={() => setActiveTab(tab.id)} style={{
                padding: '0.5rem 1rem',
                background: activeTab === tab.id ? 'rgba(59,130,246,0.15)' : 'rgba(255,255,255,0.03)',
                border: `1px solid ${activeTab === tab.id ? 'rgba(59,130,246,0.3)' : 'rgba(255,255,255,0.06)'}`,
                borderRadius: 8,
                color: activeTab === tab.id ? '#3b82f6' : 'rgba(255,255,255,0.5)',
                cursor: 'pointer',
                fontSize: '0.85rem',
                fontWeight: 600,
                transition: 'all 0.2s',
              }}>
                {tab.icon} {tab.label}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main style={{ maxWidth: 1400, margin: '0 auto', padding: '2rem' }}>
        {/* Operations Tab */}
        {activeTab === 'operations' && (
          <div className="animate-fadeIn">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 700 }}>⚙️ Operaciones Activas</h2>
              <button onClick={() => setShowNewOp(true)} style={{
                padding: '0.75rem 1.5rem',
                background: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
                border: 'none',
                borderRadius: 10,
                color: '#fff',
                fontWeight: 700,
                cursor: 'pointer',
              }}>
                + Nueva Operación
              </button>
            </div>

            {showNewOp && (
              <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(59,130,246,0.2)', borderRadius: 16, padding: '1.5rem', marginBottom: '1.5rem' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '1rem' }}>Nueva Operación</h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', marginBottom: '0.5rem' }}>Nombre</label>
                    <input value={newOpName} onChange={e => setNewOpName(e.target.value)} placeholder="Ej: Lote 2026-001" style={{
                      width: '100%', padding: '0.75rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: 8, color: '#fff', fontSize: '0.9rem', outline: 'none',
                    }} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', marginBottom: '0.5rem' }}>Producto</label>
                    <select value={selectedProduct} onChange={e => setSelectedProduct(e.target.value)} style={{
                      width: '100%', padding: '0.75rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: 8, color: '#fff', fontSize: '0.9rem', outline: 'none',
                    }}>
                      <option value="">Seleccionar producto...</option>
                      {products.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
                    </select>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button onClick={createOperation} style={{
                    padding: '0.5rem 1rem', background: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
                    border: 'none', borderRadius: 8, color: '#fff', fontWeight: 600, cursor: 'pointer',
                  }}>Crear Operación</button>
                  <button onClick={() => setShowNewOp(false)} style={{
                    padding: '0.5rem 1rem', background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8, color: 'rgba(255,255,255,0.5)', cursor: 'pointer',
                  }}>Cancelar</button>
                </div>
              </div>
            )}

            {operations.filter(op => op.status === 'running').map(op => (
              <div key={op.id} className="animate-fadeIn" style={{
                background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(59,130,246,0.2)',
                borderRadius: 16, padding: '1.5rem', marginBottom: '1rem',
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <div>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 700 }}>{op.name}</h3>
                    <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)' }}>
                      Producto: <span style={{ color: '#3b82f6' }}>{op.product}</span> · 
                      Inicio: {new Date(op.startTime).toLocaleString('es-ES')}
                    </p>
                  </div>
                  <button onClick={() => completeOperation(op.id)} style={{
                    padding: '0.5rem 1rem', background: 'rgba(16,185,129,0.15)',
                    border: '1px solid rgba(16,185,129,0.3)', borderRadius: 8, color: '#10b981',
                    fontWeight: 600, cursor: 'pointer', fontSize: '0.85rem',
                  }}>✓ Completar</button>
                </div>

                {/* Valves */}
                <div style={{ marginBottom: '1rem' }}>
                  <h4 style={{ fontSize: '0.85rem', fontWeight: 600, color: 'rgba(255,255,255,0.4)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>🔧 Válvulas</h4>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    {op.valves.map(valve => (
                      <button key={valve.id} onClick={() => toggleValve(op.id, valve.id)} style={{
                        padding: '0.5rem 1rem',
                        background: valve.status === 'open' ? 'rgba(16,185,129,0.15)' : valve.status === 'closed' ? 'rgba(239,68,68,0.15)' : 'rgba(245,158,11,0.15)',
                        border: `1px solid ${valve.status === 'open' ? 'rgba(16,185,129,0.3)' : valve.status === 'closed' ? 'rgba(239,68,68,0.3)' : 'rgba(245,158,11,0.3)'}`,
                        borderRadius: 8,
                        color: valve.status === 'open' ? '#10b981' : valve.status === 'closed' ? '#ef4444' : '#f59e0b',
                        cursor: 'pointer',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                      }}>
                        {valve.name}: {valve.status === 'open' ? '🟢 Abierta' : valve.status === 'closed' ? '🔴 Cerrada' : '🟡 Mant.'}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Pumps */}
                <div style={{ marginBottom: '1rem' }}>
                  <h4 style={{ fontSize: '0.85rem', fontWeight: 600, color: 'rgba(255,255,255,0.4)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>⚡ Bombas</h4>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    {op.pumps.map(pump => (
                      <button key={pump.id} onClick={() => togglePump(op.id, pump.id)} style={{
                        padding: '0.5rem 1rem',
                        background: pump.status === 'running' ? 'rgba(16,185,129,0.15)' : 'rgba(239,68,68,0.15)',
                        border: `1px solid ${pump.status === 'running' ? 'rgba(16,185,129,0.3)' : 'rgba(239,68,68,0.3)'}`,
                        borderRadius: 8,
                        color: pump.status === 'running' ? '#10b981' : '#ef4444',
                        cursor: 'pointer',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                      }}>
                        {pump.name}: {pump.status === 'running' ? `🟢 ${pump.rpm} RPM` : '🔴 Parada'}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Checklist Progress */}
                <div>
                  <h4 style={{ fontSize: '0.85rem', fontWeight: 600, color: 'rgba(255,255,255,0.4)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    ✅ Checklist: {op.checklists.filter(c => c.checked).length}/{op.checklists.length}
                  </h4>
                  <div style={{ height: 8, background: 'rgba(255,255,255,0.05)', borderRadius: 4, overflow: 'hidden' }}>
                    <div style={{
                      height: '100%',
                      width: `${(op.checklists.filter(c => c.checked).length / op.checklists.length) * 100}%`,
                      background: 'linear-gradient(90deg, #3b82f6, #06b6d4)',
                      borderRadius: 4,
                      transition: 'width 0.3s',
                    }} />
                  </div>
                </div>
              </div>
            ))}

            {operations.filter(op => op.status === 'running').length === 0 && (
              <div style={{ textAlign: 'center', padding: '4rem', color: 'rgba(255,255,255,0.3)' }}>
                <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>⚙️</div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>No hay operaciones activas</h3>
                <p>Crea una nueva operación para comenzar</p>
              </div>
            )}
          </div>
        )}

        {/* Products Tab */}
        {activeTab === 'products' && (
          <div className="animate-fadeIn">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 700 }}>🧪 Productos</h2>
              <button onClick={() => setShowNewProduct(true)} style={{
                padding: '0.75rem 1.5rem',
                background: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
                border: 'none', borderRadius: 10, color: '#fff', fontWeight: 700, cursor: 'pointer',
              }}>
                + Nuevo Producto
              </button>
            </div>

            {showNewProduct && (
              <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(59,130,246,0.2)', borderRadius: 16, padding: '1.5rem', marginBottom: '1.5rem' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '1rem' }}>Nuevo Producto</h3>
                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                  <input value={newProductName} onChange={e => setNewProductName(e.target.value)} placeholder="Nombre del producto" style={{
                    padding: '0.75rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: 8, color: '#fff', fontSize: '0.9rem', outline: 'none',
                  }} />
                  <select value={newProductCategory} onChange={e => setNewProductCategory(e.target.value)} style={{
                    padding: '0.75rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: 8, color: '#fff', fontSize: '0.9rem', outline: 'none',
                  }}>
                    <option>Zumos</option>
                    <option>Concentrados</option>
                    <option>Cremas</option>
                  </select>
                  <input type="color" value={newProductColor} onChange={e => setNewProductColor(e.target.value)} style={{
                    width: '100%', height: '42px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: 8, cursor: 'pointer',
                  }} />
                </div>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button onClick={addProduct} style={{
                    padding: '0.5rem 1rem', background: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
                    border: 'none', borderRadius: 8, color: '#fff', fontWeight: 600, cursor: 'pointer',
                  }}>Añadir Producto</button>
                  <button onClick={() => setShowNewProduct(false)} style={{
                    padding: '0.5rem 1rem', background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8, color: 'rgba(255,255,255,0.5)', cursor: 'pointer',
                  }}>Cancelar</button>
                </div>
              </div>
            )}

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
              {products.map(product => (
                <div key={product.id} style={{
                  background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: 12, padding: '1.25rem',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                    <div style={{ width: 16, height: 16, borderRadius: 4, background: product.color }} />
                    <h3 style={{ fontSize: '1rem', fontWeight: 700 }}>{product.name}</h3>
                  </div>
                  <span style={{ display: 'inline-block', padding: '0.25rem 0.5rem', background: 'rgba(59,130,246,0.1)', borderRadius: 6, fontSize: '0.75rem', color: '#3b82f6' }}>{product.category}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Checklists Tab */}
        {activeTab === 'checklists' && (
          <div className="animate-fadeIn">
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem' }}>✅ Checklists de Seguridad y Control</h2>
            {operations.filter(op => op.status === 'running').map(op => (
              <div key={op.id} style={{
                background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(59,130,246,0.2)',
                borderRadius: 16, padding: '1.5rem', marginBottom: '1rem',
              }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1rem' }}>{op.name} — {op.product}</h3>
                {op.checklists.map(item => (
                  <label key={item.id} style={{
                    display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem',
                    background: item.checked ? 'rgba(16,185,129,0.05)' : 'rgba(255,255,255,0.02)',
                    border: `1px solid ${item.checked ? 'rgba(16,185,129,0.2)' : 'rgba(255,255,255,0.06)'}`,
                    borderRadius: 8, marginBottom: '0.5rem', cursor: 'pointer',
                  }}>
                    <input type="checkbox" checked={item.checked} onChange={() => toggleChecklist(op.id, item.id)} style={{
                      width: 20, height: 20, accentColor: '#10b981',
                    }} />
                    <div>
                      <span style={{ fontSize: '0.9rem', textDecoration: item.checked ? 'line-through' : 'none', color: item.checked ? 'rgba(255,255,255,0.4)' : '#fff' }}>{item.text}</span>
                      <span style={{ display: 'block', fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)' }}>{item.category}</span>
                    </div>
                  </label>
                ))}
              </div>
            ))}
          </div>
        )}

        {/* History Tab */}
        {activeTab === 'history' && (
          <div className="animate-fadeIn">
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem' }}>📊 Historial de Operaciones</h2>
            {operations.filter(op => op.status === 'completed').map(op => (
              <div key={op.id} style={{
                background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: 12, padding: '1.25rem', marginBottom: '0.75rem',
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <h3 style={{ fontSize: '1rem', fontWeight: 700 }}>{op.name}</h3>
                    <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)' }}>{op.product}</p>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <span style={{ display: 'inline-block', padding: '0.25rem 0.5rem', background: 'rgba(16,185,129,0.15)', borderRadius: 6, fontSize: '0.75rem', color: '#10b981' }}>✓ Completada</span>
                    <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)', marginTop: '0.25rem' }}>
                      {new Date(op.startTime).toLocaleDateString('es-ES')}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            {operations.filter(op => op.status === 'completed').length === 0 && (
              <div style={{ textAlign: 'center', padding: '4rem', color: 'rgba(255,255,255,0.3)' }}>
                <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>📊</div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Sin historial</h3>
                <p>Las operaciones completadas aparecerán aquí</p>
              </div>
            )}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer style={{ textAlign: 'center', padding: '1.5rem', borderTop: '1px solid rgba(59,130,246,0.1)', color: 'rgba(255,255,255,0.3)', fontSize: '0.75rem' }}>
        DÖHLER Process Control © 2026 — Gestión Industrial de Procesos
      </footer>
    </div>
  );
}
