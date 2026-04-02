import React, { useState, useMemo } from 'react';
import toolsData from './tools.json';

interface Tool { id: string; name: string; url: string; description: string; shortcut?: string; }
interface Category { id: string; name: string; icon: string; tools: Tool[]; }

const App: React.FC = () => {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const categories: Category[] = toolsData.categories;
  const allTools = categories.flatMap(c => c.tools.map(t => ({ ...t, category: c.name, icon: c.icon })));
  const categoryNames = ['All', ...categories.map(c => c.name)];
  
  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return allTools.filter(t => 
      (selectedCategory === 'All' || t.category === selectedCategory) &&
      (t.name.toLowerCase().includes(q) || t.description.toLowerCase().includes(q) || (t.shortcut && t.shortcut.toLowerCase().includes(q)))
    );
  }, [allTools, search, selectedCategory]);

  return (
    <div style={{ minHeight: '100vh', background: '#030712', color: '#f8fafc', fontFamily: 'Inter, sans-serif' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 900, background: 'linear-gradient(135deg, #14b8a6, #8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '0.5rem' }}>
          🛠️ Moko-Tools
        </h1>
        <p style={{ color: '#64748b', marginBottom: '2rem' }}>{allTools.length} herramientas en {categories.length} categorías</p>
        
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
          <input type="text" placeholder="Buscar herramientas..." value={search} onChange={e => setSearch(e.target.value)}
            style={{ flex: 1, minWidth: 200, padding: '0.75rem 1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, color: '#fff', fontSize: '1rem' }} />
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {categoryNames.slice(0, 8).map(cat => (
              <button key={cat} onClick={() => setSelectedCategory(cat)}
                style={{ padding: '0.5rem 1rem', background: selectedCategory === cat ? '#14b8a6' : 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 100, color: '#fff', cursor: 'pointer', fontSize: '0.85rem' }}>
                {cat}
              </button>
            ))}
          </div>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1rem' }}>
          {filtered.map((tool, i) => (
            <a key={i} href={tool.url} target="_blank" rel="noopener noreferrer"
              style={{ display: 'block', padding: '1.5rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 16, textDecoration: 'none', color: '#f8fafc', transition: 'all 0.3s' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#14b8a6'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.transform = ''; }}>
              <h3 style={{ margin: '0 0 0.5rem', fontWeight: 700 }}>{tool.icon} {tool.name}</h3>
              <p style={{ margin: '0 0 0.75rem', color: '#64748b', fontSize: '0.9rem', lineHeight: 1.5 }}>{tool.description}</p>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                <span style={{ padding: '0.2rem 0.6rem', background: 'rgba(20,184,166,0.1)', borderRadius: 100, fontSize: '0.75rem', color: '#14b8a6' }}>{tool.category}</span>
                {tool.shortcut && <span style={{ padding: '0.2rem 0.6rem', background: 'rgba(255,255,255,0.05)', borderRadius: 100, fontSize: '0.75rem', color: '#64748b' }}>{tool.shortcut}</span>}
              </div>
            </a>
          ))}
        </div>
        {filtered.length === 0 && <p style={{ textAlign: 'center', color: '#64748b', padding: '4rem' }}>No se encontraron herramientas</p>}
      </div>
    </div>
  );
};

export default App;
