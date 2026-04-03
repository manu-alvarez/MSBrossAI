import React, { useState, useEffect, useCallback } from 'react';

// ============================================
// LIVEKIT NIKOLINA — Restaurant Voice Assistant
// ============================================

const API_BASE = (import.meta as any).env.VITE_API_BASE_URL || '/api';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  category: string;
  image?: string;
}

interface Reservation {
  id: number;
  name: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  notes?: string;
}

interface CallLog {
  id: number;
  date: string;
  duration: string;
  transcript?: string;
  reservation?: string;
}

// Demo data
const DEMO_MENU: MenuItem[] = [
  { id: 1, name: 'Tarta de Queso', description: 'Horneada al estilo San Sebastián con frutos rojos', price: '8.50€', category: 'Postres' },
  { id: 2, name: 'Pulpo a la Brasa', description: 'Con parmentier de patata y pimentón de la Vera', price: '18.00€', category: 'Entrantes' },
  { id: 3, name: 'Solomillo de Ternera', description: 'Con salsa de vino tinto y puré de boniato', price: '24.00€', category: 'Carnes' },
  { id: 4, name: 'Lubina a la Sal', description: 'Con verduras de temporada y aceite de oliva virgen', price: '22.00€', category: 'Pescados' },
  { id: 5, name: 'Risotto de Setas', description: 'Con parmesano reggiano y trufa negra', price: '16.00€', category: 'Arroces' },
  { id: 6, name: 'Sangría de la Casa', description: 'Receta secreta con fruta de temporada', price: '5.00€', category: 'Bebidas' },
  { id: 7, name: 'Ensalada Templada', description: 'De queso de cabra, nueces y vinagreta de miel', price: '12.00€', category: 'Entrantes' },
  { id: 8, name: 'Cochinillo Confitado', description: 'Con manzana caramelizada y reducción de Pedro Ximénez', price: '26.00€', category: 'Carnes' },
];

const DEMO_RESERVATIONS: Reservation[] = [
  { id: 1, name: 'María García', phone: '+34 612 345 678', date: '2026-04-05', time: '21:00', guests: 4, notes: 'Cumpleaños' },
  { id: 2, name: 'Carlos López', phone: '+34 698 765 432', date: '2026-04-05', time: '20:30', guests: 2 },
  { id: 3, name: 'Ana Martínez', phone: '+34 655 123 456', date: '2026-04-06', time: '14:00', guests: 6, notes: 'Alergia al gluten' },
];

const DEMO_CALLS: CallLog[] = [
  { id: 1, date: '2026-04-01 19:30', duration: '2:45', transcript: 'Cliente reserva para 4 personas el sábado a las 21:00', reservation: 'María García' },
  { id: 2, date: '2026-04-01 20:15', duration: '1:20', transcript: 'Consulta sobre alérgenos en el risotto' },
  { id: 3, date: '2026-04-02 13:00', duration: '3:10', transcript: 'Reserva para 6 personas, mesa junto a la ventana' },
];

const RESTAURANT_INFO = {
  name: 'Restaurante MSB',
  address: 'Calle Principal 42, Sevilla',
  phone: '+34 954 123 456',
  hours: 'Lun-Dom: 13:00-16:00, 20:00-00:00',
  description: 'Cocina de autor con productos de temporada',
};

type TabType = 'assistant' | 'menu' | 'reservations' | 'calls' | 'admin';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('assistant');
  const [assistantState, setAssistantState] = useState<'idle' | 'listening' | 'thinking' | 'speaking' | 'error'>('idle');
  const [transcript, setTranscript] = useState('');
  const [response, setResponse] = useState('');
  const [menu, setMenu] = useState<MenuItem[]>(DEMO_MENU);
  const [reservations, setReservations] = useState<Reservation[]>(DEMO_RESERVATIONS);
  const [calls, setCalls] = useState<CallLog[]>(DEMO_CALLS);
  const [menuFilter, setMenuFilter] = useState('Todos');
  const [isConnected, setIsConnected] = useState(false);
  const [mood, setMood] = useState('calm');

  // Try to connect to backend
  useEffect(() => {
    fetch(`${API_BASE}/status`, { signal: AbortSignal.timeout(3000) })
      .then(r => { if (r.ok) setIsConnected(true); })
      .catch(() => setIsConnected(false));
  }, []);

  // Demo assistant responses
  const demoResponses: Record<string, string> = {
    'hola': '¡Bienvenido al Restaurante MSB! ¿En qué puedo ayudarte? Puedo consultar la carta, hacer una reserva o darte información del restaurante.',
    'carta': 'Nuestra carta incluye: Pulpo a la Brasa (18€), Solomillo de Ternera (24€), Lubina a la Sal (22€), Risotto de Setas (16€), y más. ¿Te interesa algún plato en particular?',
    'reserva': '¡Por supuesto! Para hacer una reserva necesito: nombre, teléfono, fecha, hora y número de personas. ¿Cuántos seréis?',
    'horario': 'Nuestro horario es de Lunes a Domingo: 13:00-16:00 para comidas y 20:00-00:00 para cenas. ¡Te esperamos!',
    'alergenos': 'Todos nuestros platos pueden adaptarse a alergias e intolerancias. Por favor, indícanos tus necesidades al hacer la reserva.',
    'default': 'Entiendo. ¿Puedo ayudarte con la carta, una reserva, o información del restaurante?',
  };

  const handleVoiceCommand = useCallback((text: string) => {
    setTranscript(text);
    setAssistantState('thinking');
    
    setTimeout(() => {
      const lower = text.toLowerCase();
      let resp = demoResponses.default;
      for (const [key, value] of Object.entries(demoResponses)) {
        if (lower.includes(key)) { resp = value; break; }
      }
      setResponse(resp);
      setAssistantState('speaking');
      
      // TTS
      if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(resp);
        utterance.lang = 'es-ES';
        utterance.onend = () => setAssistantState('idle');
        window.speechSynthesis.speak(utterance);
      } else {
        setTimeout(() => setAssistantState('idle'), 3000);
      }
    }, 1500);
  }, []);

  const startListening = useCallback(() => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
      recognition.lang = 'es-ES';
      recognition.continuous = false;
      recognition.interimResults = false;
      
      recognition.onstart = () => setAssistantState('listening');
      recognition.onresult = (event: any) => {
        const text = event.results[0][0].transcript;
        handleVoiceCommand(text);
      };
      recognition.onerror = () => setAssistantState('error');
      recognition.onend = () => {
        if (assistantState === 'listening') setAssistantState('idle');
      };
      
      recognition.start();
    } else {
      // Fallback: use prompt
      const text = prompt('Escribe tu mensaje para Nikolina:');
      if (text) handleVoiceCommand(text);
    }
  }, [handleVoiceCommand, assistantState]);

  const categories = ['Todos', ...Array.from(new Set(menu.map(m => m.category)))];
  const filteredMenu = menuFilter === 'Todos' ? menu : menu.filter(m => m.category === menuFilter);

  const tabs: { id: TabType; icon: string; label: string }[] = [
    { id: 'assistant', icon: '🎙️', label: 'Asistente' },
    { id: 'menu', icon: '🍽️', label: 'Carta' },
    { id: 'reservations', icon: '📅', label: 'Reservas' },
    { id: 'calls', icon: '📞', label: 'Llamadas' },
    { id: 'admin', icon: '⚙️', label: 'Admin' },
  ];

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0a0a12 0%, #1a1020 50%, #0a1520 100%)' }}>
      {/* Header */}
      <header style={{ padding: '1rem 2rem', borderBottom: '1px solid rgba(212,175,55,0.1)', background: 'rgba(0,0,0,0.3)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'linear-gradient(135deg, #d4af37, #f0d060)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', animation: 'orbPulse 2s ease infinite' }}>🎙️</div>
            <div>
              <h1 style={{ fontFamily: 'Playfair Display', fontSize: '1.5rem', fontWeight: 700, color: '#d4af37' }}>Nikolina</h1>
              <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)' }}>
                {isConnected ? '🟢 Conectada' : '🟡 Modo Demo'} · {RESTAURANT_INFO.name}
              </p>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            {tabs.map(tab => (
              <button key={tab.id} onClick={() => setActiveTab(tab.id)} style={{
                padding: '0.5rem 1rem',
                background: activeTab === tab.id ? 'rgba(212,175,55,0.15)' : 'rgba(255,255,255,0.03)',
                border: `1px solid ${activeTab === tab.id ? 'rgba(212,175,55,0.3)' : 'rgba(255,255,255,0.06)'}`,
                borderRadius: 8,
                color: activeTab === tab.id ? '#d4af37' : 'rgba(255,255,255,0.5)',
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

      <main style={{ maxWidth: 1200, margin: '0 auto', padding: '2rem' }}>
        {/* Assistant Tab */}
        {activeTab === 'assistant' && (
          <div className="animate-fadeIn" style={{ textAlign: 'center' }}>
            {/* Orb */}
            <div style={{
              width: 200, height: 200, margin: '2rem auto',
              borderRadius: '50%',
              background: `radial-gradient(circle at 30% 30%, ${
                assistantState === 'listening' ? '#00f5ff' :
                assistantState === 'thinking' ? '#ff006e' :
                assistantState === 'speaking' ? '#06ff8f' :
                assistantState === 'error' ? '#ff0054' : '#d4af37'
              }, transparent)`,
              animation: 'orbPulse 2s ease infinite',
              boxShadow: `0 0 60px ${
                assistantState === 'listening' ? 'rgba(0,245,255,0.4)' :
                assistantState === 'thinking' ? 'rgba(255,0,110,0.4)' :
                assistantState === 'speaking' ? 'rgba(6,255,143,0.4)' :
                assistantState === 'error' ? 'rgba(255,0,84,0.4)' : 'rgba(212,175,55,0.4)'
              }`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '4rem',
            }}>
              {assistantState === 'listening' ? '👂' : assistantState === 'thinking' ? '🧠' : assistantState === 'speaking' ? '🗣️' : assistantState === 'error' ? '❌' : '🎙️'}
            </div>
            
            {/* Status */}
            <div style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.5)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>
              {assistantState === 'idle' && 'Toca para hablar'}
              {assistantState === 'listening' && 'Escuchando...'}
              {assistantState === 'thinking' && 'Pensando...'}
              {assistantState === 'speaking' && 'Hablando...'}
              {assistantState === 'error' && 'Error de conexión'}
            </div>

            {/* Voice Button */}
            <button onClick={startListening} style={{
              width: 80, height: 80, borderRadius: '50%',
              background: 'linear-gradient(135deg, #d4af37, #f0d060)',
              border: 'none',
              cursor: 'pointer',
              fontSize: '2rem',
              marginBottom: '2rem',
              animation: assistantState === 'listening' ? 'pulse 0.5s ease infinite' : 'glow 3s ease infinite',
            }}>
              {assistantState === 'listening' ? '⏹️' : '🎤'}
            </button>

            {/* Transcript & Response */}
            {transcript && (
              <div style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: 16,
                padding: '1.5rem',
                maxWidth: 600,
                margin: '0 auto 1rem',
                textAlign: 'left',
              }}>
                <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Tú dijiste:</div>
                <div style={{ fontSize: '1rem', color: '#d4af37', marginBottom: '1rem' }}>{transcript}</div>
                {response && (
                  <>
                    <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Nikolina responde:</div>
                    <div style={{ fontSize: '1rem', color: '#f8f8f0', lineHeight: 1.6 }}>{response}</div>
                  </>
                )}
              </div>
            )}

            {/* Quick Actions */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
              {['Ver carta', 'Hacer reserva', 'Horario', 'Alérgenos'].map(action => (
                <button key={action} onClick={() => handleVoiceCommand(action)} style={{
                  padding: '0.5rem 1rem',
                  background: 'rgba(212,175,55,0.1)',
                  border: '1px solid rgba(212,175,55,0.2)',
                  borderRadius: 20,
                  color: '#d4af37',
                  cursor: 'pointer',
                  fontSize: '0.85rem',
                }}>
                  {action}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Menu Tab */}
        {activeTab === 'menu' && (
          <div className="animate-fadeIn">
            <h2 style={{ fontFamily: 'Playfair Display', fontSize: '2rem', color: '#d4af37', marginBottom: '1rem' }}>🍽️ La Carta</h2>
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
              {categories.map(cat => (
                <button key={cat} onClick={() => setMenuFilter(cat)} style={{
                  padding: '0.5rem 1rem',
                  background: menuFilter === cat ? 'rgba(212,175,55,0.15)' : 'rgba(255,255,255,0.03)',
                  border: `1px solid ${menuFilter === cat ? 'rgba(212,175,55,0.3)' : 'rgba(255,255,255,0.06)'}`,
                  borderRadius: 8,
                  color: menuFilter === cat ? '#d4af37' : 'rgba(255,255,255,0.5)',
                  cursor: 'pointer',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                }}>
                  {cat}
                </button>
              ))}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1rem' }}>
              {filteredMenu.map(item => (
                <div key={item.id} style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: 12,
                  padding: '1.5rem',
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '0.5rem' }}>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 700 }}>{item.name}</h3>
                    <span style={{ color: '#d4af37', fontWeight: 700, fontSize: '1.1rem' }}>{item.price}</span>
                  </div>
                  <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.5 }}>{item.description}</p>
                  <span style={{ display: 'inline-block', marginTop: '0.5rem', padding: '0.25rem 0.5rem', background: 'rgba(212,175,55,0.1)', borderRadius: 6, fontSize: '0.75rem', color: '#d4af37' }}>{item.category}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Reservations Tab */}
        {activeTab === 'reservations' && (
          <div className="animate-fadeIn">
            <h2 style={{ fontFamily: 'Playfair Display', fontSize: '2rem', color: '#d4af37', marginBottom: '1rem' }}>📅 Reservas</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {reservations.map(res => (
                <div key={res.id} style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: 12,
                  padding: '1.25rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '1rem',
                }}>
                  <div>
                    <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.25rem' }}>{res.name}</h3>
                    <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)' }}>📞 {res.phone} · 👥 {res.guests} personas</p>
                    {res.notes && <p style={{ fontSize: '0.8rem', color: '#d4af37', marginTop: '0.25rem' }}>📝 {res.notes}</p>}
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '1rem', fontWeight: 600 }}>{res.date}</div>
                    <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)' }}>{res.time}h</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Calls Tab */}
        {activeTab === 'calls' && (
          <div className="animate-fadeIn">
            <h2 style={{ fontFamily: 'Playfair Display', fontSize: '2rem', color: '#d4af37', marginBottom:  '1rem' }}>📞 Historial de Llamadas</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {calls.map(call => (
                <div key={call.id} style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: 12,
                  padding: '1.25rem',
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)' }}>{call.date}</span>
                    <span style={{ fontSize: '0.85rem', color: '#d4af37' }}>⏱️ {call.duration}</span>
                  </div>
                  <p style={{ fontSize: '0.9rem', color: '#f8f8f0', lineHeight: 1.5 }}>{call.transcript}</p>
                  {call.reservation && <p style={{ fontSize: '0.8rem', color: '#06ff8f', marginTop: '0.5rem' }}>✅ Reserva: {call.reservation}</p>}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Admin Tab */}
        {activeTab === 'admin' && (
          <div className="animate-fadeIn">
            <h2 style={{ fontFamily: 'Playfair Display', fontSize: '2rem', color: '#d4af37', marginBottom: '1rem' }}>⚙️ Administración</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1rem' }}>
              <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 12, padding: '1.5rem' }}>
                <h3 style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)', marginBottom: '0.5rem' }}>ESTADO DEL SERVIDOR</h3>
                <div style={{ fontSize: '1.2rem', fontWeight: 700, color: isConnected ? '#06ff8f' : '#ffbe0b' }}>
                  {isConnected ? '🟢 Online' : '🟡 Modo Demo'}
                </div>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 12, padding: '1.5rem' }}>
                <h3 style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)', marginBottom: '0.5rem' }}>RESERVAS HOY</h3>
                <div style={{ fontSize: '1.2rem', fontWeight: 700, color: '#d4af37' }}>
                  {reservations.filter(r => r.date === '2026-04-05').length}
                </div>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 12, padding: '1.5rem' }}>
                <h3 style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)', marginBottom: '0.5rem' }}>LLAMADAS HOY</h3>
                <div style={{ fontSize: '1.2rem', fontWeight: 700, color: '#d4af37' }}>
                  {calls.filter(c => c.date.startsWith('2026-04-01')).length}
                </div>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 12, padding: '1.5rem' }}>
                <h3 style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)', marginBottom: '0.5rem' }}>PLATOS EN CARTA</h3>
                <div style={{ fontSize: '1.2rem', fontWeight: 700, color: '#d4af37' }}>
                  {menu.length}
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer style={{ textAlign: 'center', padding: '1.5rem', borderTop: '1px solid rgba(212,175,55,0.1)', color: 'rgba(255,255,255,0.3)', fontSize: '0.75rem' }}>
        LIVEKIT Nikolina © 2026 — {RESTAURANT_INFO.name} · {RESTAURANT_INFO.address} · {RESTAURANT_INFO.phone}
      </footer>
    </div>
  );
}
