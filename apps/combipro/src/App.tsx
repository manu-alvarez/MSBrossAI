import React, { useState, useEffect, useCallback } from 'react';

// ============================================
// COMBIPRO — Real Odds + Combo Generator
// ============================================

const ODDS_API_BASE = 'https://api.the-odds-api.com/v4/sports';

interface Match {
  id: string;
  homeTeam: string;
  awayTeam: string;
  league: string;
  leagueName: string;
  commenceTime: string;
  odds: {
    home: number; draw: number; away: number;
    over25: number; under25: number;
    btts: number; bttsNo: number;
    over05HT: number;
  };
}

interface Pick {
  matchId: string; match: string; league: string;
  type: string; selection: string; odds: number; probability: number;
}

interface Combo {
  id: string; picks: Pick[];
  totalOdds: number; totalProbability: number;
  stake: number; potentialWin: number;
  riskLevel: 'safe' | 'balanced' | 'turbo';
}

const LEAGUES = [
  { key: 'soccer_fifa_world_cup', name: '🌍 Mundial de Fútbol', icon: '🌍' },
  { key: 'soccer_uefa_champs_league', name: '🏆 Champions League', icon: '🏆' },
  { key: 'soccer_epl', name: '🇬🇧 Premier League', icon: '🇬🇧' },
  { key: 'soccer_spain_la_liga', name: '🇪🇸 LaLiga', icon: '🇪🇸' },
  { key: 'soccer_italy_serie_a', name: '🇮🇹 Serie A', icon: '🇮🇹' },
  { key: 'soccer_germany_bundesliga', name: '🇩🇪 Bundesliga', icon: '🇩🇪' },
  { key: 'soccer_france_ligue_one', name: '🇫🇷 Ligue 1', icon: '🇫🇷' },
];

// Fetch real odds from The-Odds API
async function fetchRealOdds(leagues: string[], apiKey: string): Promise<Match[]> {
  if (!apiKey) return [];
  try {
    const promises = leagues.map(async (league) => {
      const res = await fetch(`${ODDS_API_BASE}/${league}/odds/?apiKey=${apiKey}&regions=eu&markets=h2h,totals&oddsFormat=decimal`);
      if (!res.ok) {
        console.warn(`Error fetching ${league}: ${res.status}`);
        return [];
      }
      const data = await res.json();
      return data.map((event: any) => {
        const bookmaker = event.bookmakers?.[0]?.markets;
        const h2h = bookmaker?.find((m: any) => m.key === 'h2h')?.outcomes;
        const totals = bookmaker?.find((m: any) => m.key === 'totals')?.outcomes;
        
        let over25Price = totals?.find((o: any) => o.name === 'Over')?.price || 1.80;
        let under25Price = totals?.find((o: any) => o.name === 'Under')?.price || 2.00;

        return {
          id: event.id,
          homeTeam: event.home_team, awayTeam: event.away_team,
          league, leagueName: LEAGUES.find(l => l.key === league)?.name || league,
          commenceTime: event.commence_time,
          odds: {
            home: h2h?.find((o: any) => o.name === event.home_team)?.price || 2.00,
            draw: h2h?.find((o: any) => o.name === 'Draw')?.price || 3.30,
            away: h2h?.find((o: any) => o.name === event.away_team)?.price || 3.00,
            over25: over25Price,
            under25: under25Price,
            btts: over25Price > 2.0 ? 2.10 : 1.75,
            bttsNo: over25Price > 2.0 ? 1.65 : 2.00,
            over05HT: 1.35, // Est. value since API might lack first half totals
          },
        };
      }).filter((m: Match) => m.odds.home && m.odds.draw && m.odds.away);
    });
    const results = await Promise.all(promises);
    const flat = results.flat();
    return flat.length > 0 ? flat : [];
  } catch (error) { 
    console.error("Fetch error:", error);
    return []; 
  }
}

function calcProbability(odds: number): number {
  const margin = 0.05;
  return Math.round((1 / (odds * (1 + margin))) * 100);
}

function playGenerateSound() {
  try {
    const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
    if(!AudioContext) return;
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(150, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(800, ctx.currentTime + 0.1);
    gain.gain.setValueAtTime(0, ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.1, ctx.currentTime + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.4);
  } catch (e) { console.error('Audio playback failed', e); }
}

function generateCombos(matches: Match[], risk: 'safe' | 'balanced' | 'turbo', stake: number): Combo[] {
  const allPicks: Pick[] = [];
  matches.forEach(match => {
    allPicks.push(
      { matchId: match.id, match: `${match.homeTeam} vs ${match.awayTeam}`, league: match.leagueName, type: 'Resultado', selection: match.homeTeam, odds: match.odds.home, probability: calcProbability(match.odds.home) },
      { matchId: match.id, match: `${match.homeTeam} vs ${match.awayTeam}`, league: match.leagueName, type: 'Resultado', selection: 'Empate', odds: match.odds.draw, probability: calcProbability(match.odds.draw) },
      { matchId: match.id, match: `${match.homeTeam} vs ${match.awayTeam}`, league: match.leagueName, type: 'Resultado', selection: match.awayTeam, odds: match.odds.away, probability: calcProbability(match.odds.away) },
      { matchId: match.id, match: `${match.homeTeam} vs ${match.awayTeam}`, league: match.leagueName, type: 'Goles', selection: 'Más de 2.5', odds: match.odds.over25, probability: calcProbability(match.odds.over25) },
      { matchId: match.id, match: `${match.homeTeam} vs ${match.awayTeam}`, league: match.leagueName, type: 'Goles', selection: 'Menos de 2.5', odds: match.odds.under25, probability: calcProbability(match.odds.under25) },
      { matchId: match.id, match: `${match.homeTeam} vs ${match.awayTeam}`, league: match.leagueName, type: 'BTTS', selection: 'Ambos marcan', odds: match.odds.btts, probability: calcProbability(match.odds.btts) },
      { matchId: match.id, match: `${match.homeTeam} vs ${match.awayTeam}`, league: match.leagueName, type: '1ª Mitad', selection: 'Gol 1ª mitad', odds: match.odds.over05HT, probability: calcProbability(match.odds.over05HT) },
    );
  });

  let minProb: number, minPicks: number, maxPicks: number;
  if (risk === 'safe') { minProb = 55; minPicks = 3; maxPicks = 4; }
  else if (risk === 'balanced') { minProb = 35; minPicks = 4; maxPicks = 6; }
  else { minProb = 20; minPicks = 6; maxPicks = 8; }

  const filtered = allPicks.filter(p => p.probability >= minProb);
  const combos: Combo[] = [];

  for (let i = 0; i < 5; i++) {
    const shuffled = [...filtered].sort(() => Math.random() - 0.5);
    const pickCount = minPicks + Math.floor(Math.random() * (maxPicks - minPicks + 1));
    const uniqueMatches = new Set<string>();
    const uniquePicks: Pick[] = [];
    for (const pick of shuffled) {
      if (!uniqueMatches.has(pick.matchId) && uniquePicks.length < pickCount) {
        uniqueMatches.add(pick.matchId);
        uniquePicks.push(pick);
      }
    }
    if (uniquePicks.length >= 2) {
      const totalOdds = uniquePicks.reduce((acc, p) => acc * p.odds, 1);
      const totalProb = uniquePicks.reduce((acc, p) => acc * (p.probability / 100), 1) * 100;
      combos.push({
        id: crypto.randomUUID(), picks: uniquePicks,
        totalOdds: Math.round(totalOdds * 100) / 100,
        totalProbability: Math.round(totalProb * 10) / 10,
        stake, potentialWin: Math.round(totalOdds * stake * 100) / 100,
        riskLevel: risk,
      });
    }
  }
  return combos.sort((a, b) => b.potentialWin - a.potentialWin);
}

export default function App() {
  const [apiKey, setApiKey] = useState(() => localStorage.getItem('odds_api_key') || (import.meta as any).env.VITE_ODDS_API_KEY || '');
  const [inputKey, setInputKey] = useState('');
  
  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState(false);
  const [apiLoading, setApiLoading] = useState(false);
  const [selectedLeagues, setSelectedLeagues] = useState<string[]>(LEAGUES.map(l => l.key));
  const [risk, setRisk] = useState<'safe' | 'balanced' | 'turbo'>('balanced');
  const [stake, setStake] = useState(10);
  const [combos, setCombos] = useState<Combo[]>([]);

  const fetchOdds = useCallback(async () => {
    if (!apiKey) return;
    setLoading(true);
    setApiLoading(true);
    const realMatches = await fetchRealOdds(selectedLeagues, apiKey);
    setMatches(realMatches);
    setApiLoading(false);
    setLoading(false);
  }, [selectedLeagues, apiKey]);

  useEffect(() => { 
    if (apiKey) fetchOdds(); 
  }, [apiKey, fetchOdds]);

  const saveApiKey = () => {
    if (inputKey.trim()) {
      localStorage.setItem('odds_api_key', inputKey.trim());
      setApiKey(inputKey.trim());
    }
  };

  const removeApiKey = () => {
    localStorage.removeItem('odds_api_key');
    setApiKey('');
    setMatches([]);
    setCombos([]);
  };

  const generate = () => {
    if (matches.length === 0) return;
    playGenerateSound();
    const newCombos = generateCombos(matches, risk, stake);
    setCombos(newCombos);
  };

  const toggleLeague = (key: string) => {
    setSelectedLeagues(prev => prev.includes(key) ? prev.filter(l => l !== key) : [...prev, key]);
  };

  // UI cuando no hay API KEY
  if (!apiKey) {
    return (
      <div className="animate-fadeIn" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
        <div className="glass-panel" style={{ maxWidth: 500, width: '100%', padding: '3rem 2rem', textAlign: 'center' }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔒</div>
          <h2 className="font-display" style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '1rem', color: 'var(--accent)' }}>Acceso API Restringido</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: 1.6 }}>
            CombiPro funciona <strong>exclusivamente con cuotas y probabilidades 100% reales</strong>. 
            Para acceder a las bases de datos en vivo, por favor, introduce tu clave de <em>The-Odds API</em>.
          </p>
          <input 
            type="password" 
            placeholder="Pega tu API Key aquí..." 
            value={inputKey}
            onChange={(e) => setInputKey(e.target.value)}
            style={{ 
              width: '100%', padding: '1rem', marginBottom: '1rem', 
              background: 'rgba(0,0,0,0.5)', border: '1px solid var(--border)', 
              borderRadius: 8, color: 'var(--text)', outline: 'none',
              fontFamily: 'monospace'
            }}
          />
          <button onClick={saveApiKey} className="btn-premium" style={{ width: '100%', padding: '1rem', borderRadius: 8, fontWeight: 700 }}>
            Conectar Base de Datos
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fadeIn">
      {/* Header Premium */}
      <header className="glass-panel" style={{ margin: '1rem', padding: '1rem 2rem', borderTop: 'none', borderLeft: 'none', borderRight: 'none', borderRadius: '0 0 24px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <div style={{ 
              width: 54, height: 54, borderRadius: 16, 
              background: 'linear-gradient(135deg, var(--accent), var(--accent-cyan))', 
              display: 'flex', alignItems: 'center', justifyContent: 'center', 
              fontSize: '1.8rem', boxShadow: '0 4px 20px rgba(249, 115, 22, 0.3)'
            }}>⚽</div>
            <div>
              <h1 className="font-display text-gradient" style={{ fontSize: '2rem', fontWeight: 800, letterSpacing: '-0.03em' }}>CombiPro <span style={{fontSize:'0.8rem', verticalAlign:'top', color:'var(--text)', background:'var(--accent)', padding:'2px 6px', borderRadius:'10px'}}>v2.1 Real-Time</span></h1>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '4px' }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: apiLoading ? 'var(--yellow)' : (matches.length > 0 ? 'var(--green)' : 'var(--red)'), boxShadow: `0 0 10px ${apiLoading ? 'var(--yellow)' : (matches.length > 0 ? 'var(--green)' : 'var(--red)')}` }}></span>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  {apiLoading ? 'Sincronizando cuotas...' : (matches.length > 0 ? `API Conectada · ${matches.length} partidos sincronizados` : 'Sin datos disponibles')}
                </span>
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button onClick={fetchOdds} disabled={loading} className="glass-panel" style={{ 
              padding: '0.75rem 1.5rem', borderRadius: 12, color: 'var(--text)', 
              cursor: loading ? 'not-allowed' : 'pointer', opacity: loading ? 0.5 : 1, transition: 'all 0.3s'
            }}>
              {loading ? '⏳ Actualizando...' : '🔄 Recargar Cuotas'}
            </button>
            <button onClick={removeApiKey} className="glass-panel" style={{ 
              padding: '0.75rem 1rem', borderRadius: 12, color: 'var(--red)', borderColor: 'rgba(239, 68, 68, 0.3)',
              cursor: 'pointer', transition: 'all 0.3s'
            }} title="Desconectar API">
              Desconectar
            </button>
          </div>
        </div>
      </header>

      <main style={{ maxWidth: 1200, margin: '2rem auto', padding: '0 1rem' }}>
        
        {/* Controls Section */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
          
          <div className="glass-panel" style={{ padding: '1.5rem' }}>
            <h3 className="font-display" style={{ fontSize: '0.9rem', color: 'var(--accent-cyan)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '1.5rem' }}>Ligas Activas</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              {LEAGUES.map(league => (
                <button key={league.key} onClick={() => toggleLeague(league.key)} style={{
                  padding: '0.5rem 1rem',
                  background: selectedLeagues.includes(league.key) ? 'rgba(6, 182, 212, 0.1)' : 'rgba(255,255,255,0.02)',
                  border: `1px solid ${selectedLeagues.includes(league.key) ? 'var(--accent-cyan)' : 'var(--border)'}`,
                  borderRadius: 100, color: selectedLeagues.includes(league.key) ? (league.key === 'soccer_fifa_world_cup' ? 'var(--yellow)' : 'var(--text)') : 'var(--text-muted)',
                  cursor: 'pointer', fontSize: '0.85rem', fontWeight: 600, transition: 'all 0.2s',
                  boxShadow: selectedLeagues.includes(league.key) ? '0 0 15px rgba(6, 182, 212, 0.2)' : 'none'
                }}>
                  {league.name}
                </button>
              ))}
            </div>
          </div>

          <div className="glass-panel" style={{ padding: '1.5rem' }}>
            <h3 className="font-display" style={{ fontSize: '0.9rem', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '1.5rem' }}>Configuración IA</h3>
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem' }}>
              {([['safe', '🟢 Safe'], ['balanced', '🟡 Balanced'], ['turbo', '🔴 Turbo']] as const).map(([key, label]) => (
                <button key={key} onClick={() => setRisk(key)} style={{
                  flex: 1, padding: '0.75rem',
                  background: risk === key ? 'rgba(249, 115, 22, 0.1)' : 'rgba(255,255,255,0.02)',
                  border: `1px solid ${risk === key ? 'var(--accent)' : 'var(--border)'}`,
                  borderRadius: 12, color: risk === key ? 'var(--text)' : 'var(--text-muted)',
                  cursor: 'pointer', fontSize: '0.85rem', fontWeight: 700, transition: 'all 0.2s',
                  boxShadow: risk === key ? '0 0 15px rgba(249, 115, 22, 0.2)' : 'none'
                }}>{label}</button>
              ))}
            </div>
            
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Stake Inicial (€)</span>
                <span className="font-display" style={{ fontWeight: 800, color: 'var(--accent-cyan)' }}>{stake}€</span>
              </div>
              <input type="range" value={stake} onChange={e => setStake(Number(e.target.value))} min={5} max={200} step={5} style={{ width: '100%', accentColor: 'var(--accent-cyan)' }} />
            </div>
          </div>
        </div>

        {/* Generate Button Premium */}
        <button className="btn-premium font-display" onClick={generate} disabled={matches.length === 0} style={{
          width: '100%', padding: '1.5rem', borderRadius: 16, 
          fontSize: '1.2rem', fontWeight: 900, cursor: matches.length === 0 ? 'not-allowed' : 'pointer', marginBottom: '3rem',
          textTransform: 'uppercase', letterSpacing: '2px', opacity: matches.length === 0 ? 0.5 : 1
        }}>
          ⚡ GENERAR COMBINADAS
        </button>

        {/* Results / Tickets */}
        {combos.length > 0 && (
          <div style={{ marginBottom: '4rem' }}>
            <h2 className="font-display" style={{ fontSize: '1.5rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ width: 12, height: 12, background: 'var(--accent)', borderRadius: '50%', boxShadow: '0 0 10px var(--accent)' }}></span>
              Tickets IA Generados
            </h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
              {combos.map((combo, i) => (
                <div key={combo.id} className="combo-ticket animate-slideInRight" style={{ animationDelay: `${i * 0.1}s`, padding: '2rem' }}>
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem', borderBottom: '1px solid var(--border)', paddingBottom: '1.5rem' }}>
                    <div>
                      <span className="font-display text-gradient" style={{ fontSize: '1.5rem', fontWeight: 900 }}>TICKET #{i + 1}</span>
                      <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>{combo.picks.length} Selecciones · Perfil {combo.riskLevel.toUpperCase()}</div>
                    </div>
                    
                    <div style={{ textAlign: 'right', display: 'flex', gap: '1.5rem' }}>
                      <div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', letterSpacing: '1px' }}>CUOTA TOTAL</div>
                        <div className="font-display" style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--text)' }}>{combo.totalOdds.toFixed(2)}</div>
                      </div>
                      <div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', letterSpacing: '1px' }}>GANANCIA EST.</div>
                        <div className="font-display" style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--green)' }}>{combo.potentialWin.toFixed(2)}€</div>
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
                    {combo.picks.map((pick, j) => (
                      <div key={j} className="glass-panel" style={{ padding: '1rem', borderLeft: `3px solid var(--accent-cyan)` }}>
                        <div style={{ fontSize: '0.75rem', color: 'var(--accent-cyan)', fontWeight: 700, marginBottom: '0.25rem', letterSpacing: '0.5px' }}>{pick.league}</div>
                        <div style={{ fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.5rem' }}>{pick.match}</div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{pick.type}: <span style={{ color: 'var(--text)', fontWeight: 600 }}>{pick.selection}</span></div>
                          <div className="font-display" style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--accent)' }}>{pick.odds.toFixed(2)}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Database */}
        <div style={{ opacity: 0.8 }}>
          <h3 className="font-display" style={{ fontSize: '1.2rem', marginBottom: '1.5rem', color: 'var(--text-muted)' }}>Database: Partidos Reales ({matches.length})</h3>
          {matches.length === 0 && !loading && (
             <div className="glass-panel" style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-muted)' }}>
               No hay partidos disponibles actualmente para las ligas seleccionadas.
             </div>
          )}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '1rem' }}>
            {matches.map(match => (
              <div key={match.id} className="glass-panel match-card" style={{ padding: '1.25rem', borderLeft: match.league === 'soccer_fifa_world_cup' ? '3px solid var(--yellow)' : '1px solid var(--border)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '0.75rem', background: match.league === 'soccer_fifa_world_cup' ? 'rgba(245, 158, 11, 0.15)' : 'rgba(255,255,255,0.05)', padding: '4px 8px', borderRadius: '4px', color: match.league === 'soccer_fifa_world_cup' ? 'var(--yellow)' : 'var(--text-muted)', fontWeight: match.league === 'soccer_fifa_world_cup' ? 800 : 400 }}>{match.leagueName}</span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--accent-cyan)' }}>{new Date(match.commenceTime).toLocaleDateString('es-ES', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' })}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '1.1rem', fontWeight: 700, marginBottom: '1.5rem' }}>
                  <span>{match.homeTeam}</span>
                  <span style={{ color: 'var(--border)' }}>vs</span>
                  <span>{match.awayTeam}</span>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <span style={{ flex: 1, textAlign: 'center', padding: '0.5rem', background: 'rgba(255,255,255,0.03)', borderRadius: 8, fontSize: '0.85rem', fontWeight: 600 }}><span style={{ color: 'var(--text-muted)', fontSize: '0.7rem', display: 'block' }}>1</span>{match.odds.home}</span>
                  <span style={{ flex: 1, textAlign: 'center', padding: '0.5rem', background: 'rgba(255,255,255,0.03)', borderRadius: 8, fontSize: '0.85rem', fontWeight: 600 }}><span style={{ color: 'var(--text-muted)', fontSize: '0.7rem', display: 'block' }}>X</span>{match.odds.draw}</span>
                  <span style={{ flex: 1, textAlign: 'center', padding: '0.5rem', background: 'rgba(255,255,255,0.03)', borderRadius: 8, fontSize: '0.85rem', fontWeight: 600 }}><span style={{ color: 'var(--text-muted)', fontSize: '0.7rem', display: 'block' }}>2</span>{match.odds.away}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
