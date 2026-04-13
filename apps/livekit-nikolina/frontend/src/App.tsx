import React, { useState, useEffect, useCallback } from 'react';
import {
  LiveKitRoom,
  RoomAudioRenderer,
  VoiceAssistantControlBar,
  useRoomContext,
  useConnectionState,
} from '@livekit/components-react';
import { ConnectionState } from 'livekit-client';
import '@livekit/components-styles';

// URLs for Local Backend Slave running on the Mac
const API_BASE = (import.meta as any).env.VITE_API_BASE_URL || 'http://127.0.0.1:8001/api';
const LIVEKIT_URL = (import.meta as any).env.VITE_LIVEKIT_URL || 'ws://127.0.0.1:7880';

type TabType = 'assistant' | 'menu' | 'reservations' | 'calls' | 'admin';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('assistant');
  const [menuFilter, setMenuFilter] = useState('Todos');
  const [isConnectedBackend, setIsConnectedBackend] = useState(false);
  const [token, setToken] = useState<string>('');

  const [restaurantInfo, setRestaurantInfo] = useState<any>({ name: 'Cargando...', address: '' });
  const [menuItems, setMenuItems] = useState<any[]>([]);
  const [reservations, setReservations] = useState<any[]>([]);
  const [calls, setCalls] = useState<any[]>([]);

  // Fetch real data from Local SQLite when backend connects
  useEffect(() => {
    fetch(`${API_BASE}/health`, { signal: AbortSignal.timeout(3000) })
      .then(r => {
        if (r.ok) {
          setIsConnectedBackend(true);
          fetchData();
        }
      })
      .catch((e) => {
        console.error('Core Backend offline:', e);
        setIsConnectedBackend(false);
      });
  }, []);

  const fetchData = async () => {
    try {
      const p1 = fetch(`${API_BASE}/restaurant`).then(r => r.json());
      const p2 = fetch(`${API_BASE}/menu`).then(r => r.json());
      const p3 = fetch(`${API_BASE}/reservations`).then(r => r.json());
      const p4 = fetch(`${API_BASE}/calls`).then(r => r.json());
      const [rest, menuData, resData, callsData] = await Promise.all([p1, p2, p3, p4]);
      setRestaurantInfo(rest || { name: 'Restaurante MSB', address: 'Sevilla' });
      setMenuItems(Array.isArray(menuData) ? menuData : []);
      setReservations(Array.isArray(resData) ? resData : []);
      setCalls(Array.isArray(callsData) ? callsData : []);
    } catch (e) {
      console.error('Error fetching dashboard data:', e);
    }
  };

  const connectToVoice = async () => {
    try {
      const res = await fetch(`${API_BASE}/token`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          participant_identity: 'user-web-' + Math.floor(Math.random() * 1000),
          room_name: 'restaurant-room'
        })
      });
      if (!res.ok) throw new Error('Falló el request del Token');
      const data = await res.json();
      if (data.accessToken) {
        setToken(data.accessToken);
      }
    } catch (err) {
      console.error('LiveKit Token generation error:', err);
      alert('Error crítico: Agente de Voz Local (Docker) desconectado o token fallido.');
    }
  };

  const categories = ['Todos', ...Array.from(new Set(menuItems.map(m => m.category)))];
  const filteredMenu = menuFilter === 'Todos' ? menuItems : menuItems.filter(m => m.category === menuFilter);

  const tabs: { id: TabType; icon: string; label: string }[] = [
    { id: 'assistant', icon: '🎙️', label: 'Asistente' },
    { id: 'menu', icon: '🍽️', label: 'Carta' },
    { id: 'reservations', icon: '📅', label: 'Reservas' },
    { id: 'calls', icon: '📞', label: 'Llamadas' },
    { id: 'admin', icon: '⚙️', label: 'Admin' },
  ];

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0a0a12 0%, #1a1020 50%, #0a1520 100%)', color: 'white' }}>
      <header style={{ padding: '1rem 2rem', borderBottom: '1px solid rgba(212,175,55,0.1)', background: 'rgba(0,0,0,0.3)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'linear-gradient(135deg, #06b6d4, #22d3ee)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', flexShrink: 0 }}>🎙️</div>
            <div>
              <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', fontWeight: 700, color: '#06b6d4' }}>Nikolina Voice AI</h1>
              <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)' }}>
                {isConnectedBackend ? '🟢 DB Local Sincronizada' : '🔴 Standby'} · {restaurantInfo.name}
              </p>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {tabs.map(tab => (
              <button key={tab.id} onClick={() => setActiveTab(tab.id)} style={{
                padding: '0.5rem 1rem', background: activeTab === tab.id ? 'rgba(212,175,55,0.15)' : 'rgba(255,255,255,0.03)',
                border: `1px solid ${activeTab === tab.id ? 'rgba(212,175,55,0.3)' : 'rgba(255,255,255,0.06)'}`,
                borderRadius: 8, color: activeTab === tab.id ? '#06b6d4' : 'rgba(255,255,255,0.5)',
                cursor: 'pointer', fontSize: '0.85rem', fontWeight: 600, transition: 'all 0.2s', flex: '1 1 auto', textAlign: 'center'
              }}>{tab.icon} <span className="tab-label">{tab.label}</span></button>
            ))}
          </div>
        </div>
        <style>{`@media (max-width: 600px) { .tab-label { display: none; } }`}</style>
      </header>

      <main style={{ maxWidth: 1200, margin: '0 auto', padding: '2rem' }}>
        {activeTab === 'assistant' && (
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <h2 style={{ fontFamily: 'Playfair Display', fontSize: '2rem', color: '#06b6d4', marginBottom: '1rem' }}>Conecta con la IA</h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '3rem' }}>
              Motor WebRTC de baja latencia impulsado por Gemini 2.5 Flash Native.
            </p>

            {!token ? (
              <button onClick={connectToVoice} style={{
                padding: '1rem 3rem', background: 'linear-gradient(135deg, #06b6d4, #22d3ee)',
                border: 'none', borderRadius: 30, color: '#000', fontSize: '1.2rem', fontWeight: 800, cursor: 'pointer',
                boxShadow: '0 0 20px rgba(212,175,55,0.3)'
              }}>📻 Iniciar Canal Seguro (LiveKit)</button>
            ) : (
              <LiveKitRoom
                serverUrl={LIVEKIT_URL}
                token={token}
                connect={true}
                audio={true}
                video={false}
                style={{ height: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
              >
                <RoomAudioRenderer />
                
                {/* Embedded component to check state */}
                <AssistantStatus />
                
                <div style={{ transform: 'scale(1.5)', marginTop: '2rem' }}>
                  <VoiceAssistantControlBar />
                </div>
              </LiveKitRoom>
            )}

            {!isConnectedBackend && (
              <div style={{ marginTop: '2rem', padding: '1rem', background: 'rgba(255,0,0,0.1)', border: '1px solid rgba(255,0,0,0.3)', borderRadius: 12, color: '#f87171' }}>
                Atención: El motor backend de Nikolina no responde en tu Mac (127.0.0.1:8001). Ejecuta el script "INICIAR_NIKOLINA_MAC.sh".
              </div>
            )}
          </div>
        )}

        {/* CARTA TAB */}
        {activeTab === 'menu' && (
          <div>
            <h2 style={{ fontFamily: 'Playfair Display', fontSize: '2rem', color: '#06b6d4', marginBottom: '1rem' }}>🍽️ La Carta</h2>
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
              {categories.map(cat => (
                <button key={cat} onClick={() => setMenuFilter(cat)} style={{
                  padding: '0.5rem 1rem', background: menuFilter === cat ? 'rgba(212,175,55,0.15)' : 'rgba(255,255,255,0.03)',
                  border: `1px solid ${menuFilter === cat ? 'rgba(212,175,55,0.3)' : 'rgba(255,255,255,0.06)'}`,
                  borderRadius: 8, color: menuFilter === cat ? '#06b6d4' : 'rgba(255,255,255,0.5)',
                  cursor: 'pointer', fontSize: '0.85rem', fontWeight: 600,
                }}>{cat}</button>
              ))}
            </div>
            {menuItems.length === 0 ? <p style={{ color: '#666' }}>No hay platos en la DB.</p> : (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1rem' }}>
                {filteredMenu.map((item: any) => (
                  <div key={item.id} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 12, padding: '1.5rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '0.5rem' }}>
                      <h3 style={{ fontSize: '1.1rem', fontWeight: 700 }}>{item.name}</h3>
                      <span style={{ color: '#06b6d4', fontWeight: 700, fontSize: '1.1rem' }}>{item.price}€</span>
                    </div>
                    <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.5 }}>{item.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* RESERVATIONS TAB */}
        {activeTab === 'reservations' && (
          <div>
            <h2 style={{ fontFamily: 'Playfair Display', fontSize: '2rem', color: '#06b6d4', marginBottom: '1rem' }}>📅 Reservas en Tiempo Real</h2>
            {reservations.length === 0 ? <p style={{ color: '#666' }}>Sin reservas todavía.</p> :
              reservations.map((res: any) => (
                <div key={res.id} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 12, padding: '1.25rem', marginBottom: '0.75rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                  <div>
                    <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.25rem' }}>{res.customer_name}</h3>
                    <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)' }}>📞 {res.customer_phone || 'Sin tel'} · 👥 {res.num_guests} personas · ID: {res.id}</p>
                    {res.notes && <p style={{ fontSize: '0.8rem', color: '#06b6d4', marginTop: '0.25rem' }}>📝 {res.notes}</p>}
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '1rem', fontWeight: 600 }}>{res.date}</div>
                    <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)' }}>{res.time}h</div>
                  </div>
                </div>
              ))}
          </div>
        )}

        {/* CALLS TAB */}
        {activeTab === 'calls' && (
          <div>
            <h2 style={{ fontFamily: 'Playfair Display', fontSize: '2rem', color: '#06b6d4', marginBottom: '1rem' }}>📞 Historial de Interacciones</h2>
            {calls.length === 0 ? <p style={{ color: '#666' }}>Sin llamadas registradas.</p> :
              calls.map((c: any) => (
                <div key={c.id} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 12, padding: '1.25rem', marginBottom: '0.75rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)' }}>Inicio: {c.started_at}</span>
                    <span style={{ fontSize: '0.85rem', color: '#06b6d4' }}>⏱️ {c.duration_seconds || '?'}s</span>
                  </div>
                  <p style={{ fontSize: '0.9rem', color: '#f8f8f0', lineHeight: 1.5 }}>{c.transcript_summary || 'Sin transcripción procesada.'}</p>
                </div>
              ))
            }
          </div>
        )}
        
        {/* ADMIN TAB */}
        {activeTab === 'admin' && (
          <div>
            <h2 style={{ fontFamily: 'Playfair Display', fontSize: '2rem', color: '#06b6d4', marginBottom: '1rem' }}>⚙️ Estado de Base de Datos</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1rem' }}>
              <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 12, padding: '1.5rem' }}>
                <h3 style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)', marginBottom: '0.5rem' }}>BACKEND LOCAL</h3>
                <div style={{ fontSize: '1.2rem', fontWeight: 700, color: isConnectedBackend ? '#06ff8f' : '#ffbe0b' }}>{isConnectedBackend ? '🟢 Estable' : '🔴 Abortado'}</div>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 12, padding: '1.5rem' }}>
                <h3 style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)', marginBottom: '0.5rem' }}>RESERVAS TOTALES</h3>
                <div style={{ fontSize: '1.2rem', fontWeight: 700, color: '#06b6d4' }}>{reservations.length}</div>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 12, padding: '1.5rem' }}>
                <h3 style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)', marginBottom: '0.5rem' }}>LLAMADAS LOG</h3>
                <div style={{ fontSize: '1.2rem', fontWeight: 700, color: '#06b6d4' }}>{calls.length}</div>
              </div>
            </div>
            <p style={{ marginTop: '2rem', color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem', textAlign: 'center' }}>
              Nota: Todos los datos son despachados en tiempo real desde la red interna (localhost:8001). 
              Esta dashboard WebRTC controla a Nikolina AI mediante WebSockets asegurados.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}

// Sub-component to read connection state from Context and show Neural orb
function AssistantStatus() {
  const roomState = useConnectionState();
  
  return (
    <div style={{
      width: 200, height: 200, margin: '2rem auto', borderRadius: '50%',
      background: `radial-gradient(circle at 30% 30%, ${
        roomState === ConnectionState.Connected ? '#06ff8f' :
        roomState === ConnectionState.Connecting ? '#00f5ff' :
        '#06b6d4'
      }, transparent)`,
      boxShadow: `0 0 60px ${
        roomState === ConnectionState.Connected ? 'rgba(6,255,143,0.4)' :
        roomState === ConnectionState.Connecting ? 'rgba(0,245,255,0.4)' :
        'rgba(212,175,55,0.4)'
      }`,
      display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '4rem',
    }}>
      {roomState === ConnectionState.Connected ? '🗣️' : roomState === ConnectionState.Connecting ? '⏳' : '🎙️'}
    </div>
  );
}
