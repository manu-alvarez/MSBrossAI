import React, { useState, useEffect, useCallback } from 'react';

// ============================================
// COMBIPRO — Real Odds + Combo Generator
// ============================================

const ODDS_API_KEY = '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';
const ODDS_API_BASE = 'https://api.the-odds-api.com/v4/sports';

interface Match {
  id: string;
  homeTeam: string;
  awayTeam: string;
  league: string;
  leagueName: string;
  commenceTime: string;
  odds: {
    home: number;
    draw: number;
    away: number;
    over25: number;
    under25: number;
    btts: number;
    bttsNo: number;
    over05HT: number;
  };
}

interface Pick {
  matchId: string;
  match: string;
  league: string;
  type: string;
  selection: string;
  odds: number;
  probability: number;
}

interface Combo {
  id: string;
  picks: Pick[];
  totalOdds: number;
  totalProbability: number;
  stake: number;
  potentialWin: number;
  riskLevel: 'safe' | 'balanced' | 'turbo';
}

const LEAGUES = [
  { key: 'soccer_uefa_champs_league', name: '🏆 Champions League', icon: '🏆' },
  { key: 'soccer_epl', name: '🇬🇧 Premier League', icon: '🇬🇧' },
  { key: 'soccer_spain_la_liga', name: '🇪🇸 LaLiga', icon: '🇪🇸' },
  { key: 'soccer_italy_serie_a', name: '🇮🇹 Serie A', icon: '🇮🇹' },
  { key: 'soccer_germany_bundesliga', name: '🇩🇪 Bundesliga', icon: '🇩🇪' },
  { key: 'soccer_france_ligue_one', name: '🇫🇷 Ligue 1', icon: '🇫🇷' },
];

// Demo matches for when API is not available
const DEMO_MATCHES: Match[] = [
  { id: '1', homeTeam: 'Real Madrid', awayTeam: 'Barcelona', league: 'LaLiga', leagueName: '🇪🇸 LaLiga', commenceTime: '2026-04-05T20:00:00Z', odds: { home: 2.10, draw: 3.40, away: 3.20, over25: 1.65, under25: 2.20, btts: 1.70, bttsNo: 2.10, over05HT: 1.35 } },
  { id: '2', homeTeam: 'Man City', awayTeam: 'Liverpool', league: 'EPL', leagueName: '🇬🇧 Premier League', commenceTime: '2026-04-06T16:30:00Z', odds: { home: 1.85, draw: 3.60, away: 3.80, over25: 1.55, under25: 2.40, btts: 1.60, bttsNo: 2.30, over05HT: 1.30 } },
  { id: '3', homeTeam: 'Bayern Munich', awayTeam: 'Dortmund', league: 'Bundesliga', leagueName: '🇩🇪 Bundesliga', commenceTime: '2026-04-05T18:30:00Z', odds: { home: 1.70, draw: 3.80, away: 4.50, over25: 1.50, under25: 2.50, btts: 1.55, bttsNo: 2.40, over05HT: 1.25 } },
  { id: '4', homeTeam: 'PSG', awayTeam: 'Marseille', league: 'Ligue1', leagueName: '🇫🇷 Ligue 1', commenceTime: '2026-04-06T20:45:00Z', odds: { home: 1.55, draw: 4.00, away: 5.50, over25: 1.70, under25: 2.10, btts: 1.75, bttsNo: 2.00, over05HT: 1.40 } },
  { id: '5', homeTeam: 'Inter Milan', awayTeam: 'AC Milan', league: 'SerieA', leagueName: '🇮🇹 Serie A', commenceTime: '2026-04-05T20:45:00Z', odds: { home: 2.00, draw: 3.30, away: 3.50, over25: 1.80, under25: 2.00, btts: 1.80, bttsNo: 1.95, over05HT: 1.35 } },
  { id: '6', homeTeam: 'Arsenal', awayTeam: 'Chelsea', league: 'EPL', leagueName: '🇬🇧 Premier League', commenceTime: '2026-04-06T14:00:00Z', odds: { home: 2.00, draw: 3.30, away: 3.50, over25: 1.75, under25: 2.05, btts: 1.75, bttsNo: 2.00, over05HT: 1.35 } },
  { id: '7', homeTeam: 'Atletico Madrid', awayTeam: 'Sevilla', league: 'LaLiga', leagueName: '🇪🇸 LaLiga', commenceTime: '2026-04-06T18:00:00Z', odds: { home: 1.90, draw: 3.40, away: 3.80, over25: 1.85, under25: 1.95, btts: 1.80, bttsNo: 1.95, over05HT: 1.40 } },
  { id: '8', homeTeam: 'Juventus', awayTeam: 'Napoli', league: 'SerieA', leagueName: '🇮🇹 Serie A', commenceTime: '2026-04-05T18:00:00Z', odds: { home: 2.40, draw: 3.20, away: 2.90, over25: 1.90, under25: 1.90, btts: 1.85, bttsNo: 1.90, over05HT: 1.45 } },
];

// Fetch real odds from The-Odds API
async function fetchRealOdds(leagues: string[]): Promise<Match[]> {
  try {
    const promises = leagues.map(async (league) => {
      const res = await fetch(`${ODDS_API_BASE}/${league}/odds/?apiKey=${ODDS_API_KEY}&regions=eu&markets=h2h,totals,btts&oddsFormat=decimal`);
      if (!res.ok) return [];
      const data = await res.json();
      return data.map((event: any) => {
        const bookmaker = event.bookmakers?.[0]?.markets;
        const h2h = bookmaker?.find((m: any) => m.key === 'h2h')?.outcomes;
        const totals = bookmaker?.find((m: any) => m.key === 'totals')?.outcomes;
        const btts = bookmaker?.find((m: any) => m.key === 'btts')?.outcomes;
        
        return {
          id: event.id,
          homeTeam: event.home_team,
          awayTeam: event.away_team,
          league: league,
          leagueName: LEAGUES.find(l => l.key === league)?.name || league,
          commenceTime: event.commence_time,
          odds: {
            home: h2h?.find((o: any) => o.name === event.home_team)?.price || 2.00,
            draw: h2h?.find((o: any) => o.name === 'Draw')?.price || 3.30,
            away: h2h?.find((o: any) => o.name === event.away_team)?.price || 3.00,
            over25: totals?.find((o: any) => o.name === 'Over')?.price || 1.80,
            under25: totals?.find((o: any) => o.name === 'Under')?.price || 2.00,
            btts: btts?.find((o: any) => o.name === 'Yes')?.price || 1.75,
            bttsNo: btts?.find((o: any) => o.name === 'No')?.price || 2.00,
            over05HT: 1.35,
          },
        };
      }).filter((m: Match) => m.odds.home && m.odds.draw && m.odds.away);
    });
    
    const results = await Promise.all(promises);
    return results.flat();
  } catch (err) {
    console.warn('API fetch failed, using demo data:', err);
    return [];
  }
}

// Calculate probability from odds (Bwin-style margin removal)
function calcProbability(odds: number): number {
  const margin = 0.05; // 5% bookmaker margin
  const fairOdds = odds * (1 + margin);
  return Math.round((1 / fairOdds) * 100);
}

// Generate combos based on risk profile
function generateCombos(matches: Match[], risk: 'safe' | 'balanced' | 'turbo', stake: number): Combo[] {
  const allPicks: Pick[] = [];
  
  matches.forEach(match => {
    const picks: Pick[] = [
      { matchId: match.id, match: `${match.homeTeam} vs ${match.awayTeam}`, league: match.leagueName, type: 'Resultado', selection: match.homeTeam, odds: match.odds.home, probability: calcProbability(match.odds.home) },
      { matchId: match.id, match: `${match.homeTeam} vs ${match.awayTeam}`, league: match.leagueName, type: 'Resultado', selection: 'Empate', odds: match.odds.draw, probability: calcProbability(match.odds.draw) },
      { matchId: match.id, match: `${match.homeTeam} vs ${match.awayTeam}`, league: match.leagueName, type: 'Resultado', selection: match.awayTeam, odds: match.odds.away, probability: calcProbability(match.odds.away) },
      { matchId: match.id, match: `${match.homeTeam} vs ${match.awayTeam}`, league: match.leagueName, type: 'Goles', selection: 'Más de 2.5', odds: match.odds.over25, probability: calcProbability(match.odds.over25) },
      { matchId: match.id, match: `${match.homeTeam} vs ${match.awayTeam}`, league: match.leagueName, type: 'Goles', selection: 'Menos de 2.5', odds: match.odds.under25, probability: calcProbability(match.odds.under25) },
      { matchId: match.id, match: `${match.homeTeam} vs ${match.awayTeam}`, league: match.leagueName, type: 'BTTS', selection: 'Ambos marcan', odds: match.odds.btts, probability: calcProbability(match.odds.btts) },
      { matchId: match.id, match: `${match.homeTeam} vs ${match.awayTeam}`, league: match.leagueName, type: 'BTTS', selection: 'No marcan ambos', odds: match.odds.bttsNo, probability: calcProbability(match.odds.bttsNo) },
      { matchId: match.id, match: `${match.homeTeam} vs ${match.awayTeam}`, league: match.leagueName, type: '1ª Mitad', selection: 'Gol 1ª mitad', odds: match.odds.over05HT, probability: calcProbability(match.odds.over05HT) },
    ];
    allPicks.push(...picks);
  });

  // Filter by risk
  let minProb: number, maxPicks: number, minPicks: number;
  if (risk === 'safe') { minProb = 60; minPicks = 3; maxPicks = 4; }
  else if (risk === 'balanced') { minProb = 40; minPicks = 4; maxPicks = 6; }
  else { minProb = 25; minPicks = 6; maxPicks = 8; }

  const filtered = allPicks.filter(p => p.probability >= minProb);
  
  // Generate combos
  const combos: Combo[] = [];
  const numCombos = 3;
  
  for (let i = 0; i < numCombos; i++) {
    const shuffled = [...filtered].sort(() => Math.random() - 0.5);
    const pickCount = minPicks + Math.floor(Math.random() * (maxPicks - minPicks + 1));
    const picks = shuffled.slice(0, Math.min(pickCount, shuffled.length));
    
    // Ensure picks are from different matches
    const uniqueMatches = new Set<string>();
    const uniquePicks: Pick[] = [];
    for (const pick of picks) {
      if (!uniqueMatches.has(pick.matchId)) {
        uniqueMatches.add(pick.matchId);
        uniquePicks.push(pick);
      }
    }
    
    if (uniquePicks.length >= 2) {
      const totalOdds = uniquePicks.reduce((acc, p) => acc * p.odds, 1);
      const totalProb = uniquePicks.reduce((acc, p) => acc * (p.probability / 100), 1) * 100;
      
      combos.push({
        id: crypto.randomUUID(),
        picks: uniquePicks,
        totalOdds: Math.round(totalOdds * 100) / 100,
        totalProbability: Math.round(totalProb * 10) / 10,
        stake,
        potentialWin: Math.round(totalOdds * stake * 100) / 100,
        riskLevel: risk,
      });
    }
  }
  
  return combos.sort((a, b) => b.potentialWin - a.potentialWin);
}

export default function App() {
  const [matches, setMatches] = useState<Match[]>(DEMO_MATCHES);
  const [loading, setLoading] = useState(false);
  const [selectedLeagues, setSelectedLeagues] = useState<string[]>(LEAGUES.map(l => l.key));
  const [risk, setRisk] = useState<'safe' | 'balanced' | 'turbo'>('balanced');
  const [stake, setStake] = useState(10);
  const [combos, setCombos] = useState<Combo[]>([]);
  const [history, setHistory] = useState<Combo[]>(() => {
    try {
      const saved = localStorage.getItem('combipro-history');
      return saved ? JSON.parse(saved) : [];
    } catch { return []; }
  });

  const fetchOdds = useCallback(async () => {
    setLoading(true);
    const realMatches = await fetchRealOdds(selectedLeagues);
    if (realMatches.length > 0) {
      setMatches(realMatches);
    }
    setLoading(false);
  }, [selectedLeagues]);

  useEffect(() => {
    fetchOdds();
  }, []);

  const generate = () => {
    const newCombos = generateCombos(matches, risk, stake);
    setCombos(newCombos);
    
    // Save to history
    const newHistory = [...newCombos, ...history].slice(0, 50);
    setHistory(newHistory);
    localStorage.setItem('combipro-history', JSON.stringify(newHistory));
  };

  const toggleLeague = (key: string) => {
    setSelectedLeagues(prev => 
      prev.includes(key) ? prev.filter(l => l !== key) : [...prev, key]
    );
  };

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0a0a1a 0%, #1a0a2e 50%, #0a1a2e 100%)' }}>
      {/* Header */}
      <header style={{ padding: '1.5rem 2rem', borderBottom: '1px solid rgba(255,255,255,0.06)', background: 'rgba(0,0,0,0.3)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ width: 48, height: 48, borderRadius: 12, background: 'linear-gradient(135deg, #00ff88, #00d4ff)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>⚽</div>
            <div>
              <h1 style={{ fontFamily: 'Space Grotesk', fontSize: '1.5rem', fontWeight: 700, background: 'linear-gradient(135deg, #00ff88, #00d4ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>CombiPro</h1>
              <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)' }}>Combinadas Deportivas con IA</p>
            </div>
          </div>
          <button onClick={fetchOdds} disabled={loading} style={{ padding: '0.5rem 1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8, color: '#fff', cursor: loading ? 'not-allowed' : 'pointer', opacity: loading ? 0.5 : 1 }}>
            {loading ? '⏳ Cargando...' : '🔄 Actualizar Cuotas'}
          </button>
        </div>
      </header>

      <main style={{ maxWidth: 1200, margin: '0 auto', padding: '2rem' }}>
        {/* League Selection */}
        <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 16, padding: '1.5rem', marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '0.9rem', fontWeight: 600, color: 'rgba(255,255,255,0.5)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>🏆 Ligas</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {LEAGUES.map(league => (
              <button key={league.key} onClick={() => toggleLeague(league.key)} style={{
                padding: '0.5rem 1rem',
                background: selectedLeagues.includes(league.key) ? 'rgba(0,255,136,0.15)' : 'rgba(255,255,255,0.03)',
                border: `1px solid ${selectedLeagues.includes(league.key) ? 'rgba(0,255,136,0.3)' : 'rgba(255,255,255,0.08)'}`,
                borderRadius: 8,
                color: selectedLeagues.includes(league.key) ? '#00ff88' : 'rgba(255,255,255,0.5)',
                cursor: 'pointer',
                fontSize: '0.85rem',
                fontWeight: 600,
                transition: 'all 0.2s',
              }}>
                {league.name}
              </button>
            ))}
          </div>
        </div>

        {/* Risk + Stake */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
          <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 16, padding: '1.5rem' }}>
            <h3 style={{ fontSize: '0.9rem', fontWeight: 600, color: 'rgba(255,255,255,0.5)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>🎯 Perfil de Riesgo</h3>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              {([['safe', '🟢 Seguro'], ['balanced', '🟡 Equilibrado'], ['turbo', '🔴 Turbo']] as const).map(([key, label]) => (
                <button key={key} onClick={() => setRisk(key)} style={{
                  flex: 1, padding: '0.75rem', background: risk === key ? 'rgba(0,255,136,0.15)' : 'rgba(255,255,255,0.03)',
                  border: `1px solid ${risk === key ? 'rgba(0,255,136,0.3)' : 'rgba(255,255,255,0.08)'}`,
                  borderRadius: 10, color: risk === key ? '#00ff88' : 'rgba(255,255,255,0.5)', cursor: 'pointer', fontSize: '0.85rem', fontWeight: 600,
                }}>
                  {label}
                </button>
              ))}
            </div>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 16, padding: '1.5rem' }}>
            <h3 style={{ fontSize: '0.9rem', fontWeight: 600, color: 'rgba(255,255,255,0.5)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>💰 Stake (€)</h3>
            <input type="number" value={stake} onChange={e => setStake(Number(e.target.value))} min={1} style={{
              width: '100%', padding: '0.75rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 10, color: '#fff', fontSize: '1.2rem', fontWeight: 700, outline: 'none',
            }} />
          </div>
        </div>

        {/* Generate Button */}
        <button onClick={generate} style={{
          width: '100%', padding: '1rem', background: 'linear-gradient(135deg, #00ff88, #00d4ff)', border: 'none',
          borderRadius: 12, color: '#000', fontSize: '1.1rem', fontWeight: 800, cursor: 'pointer', marginBottom: '1.5rem',
          transition: 'all 0.3s',
        }}
        onMouseEnter={e => { (e.target as HTMLElement).style.transform = 'translateY(-2px)'; (e.target as HTMLElement).style.boxShadow = '0 10px 30px rgba(0,255,136,0.3)'; }}
        onMouseLeave={e => { (e.target as HTMLElement).style.transform = 'none'; (e.target as HTMLElement).style.boxShadow = 'none'; }}
        >
          ⚡ GENERAR COMBINADAS
        </button>

        {/* Combos */}
        {combos.map((combo, i) => (
          <div key={combo.id} className="animate-fadeIn" style={{
            background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(0,255,136,0.2)', borderRadius: 16,
            padding: '1.5rem', marginBottom: '1rem',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'rgba(255,255,255,0.5)' }}>Combinada #{i + 1} · {combo.picks.length} picks</span>
              <span style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem', background: combo.riskLevel === 'safe' ? 'rgba(0,255,136,0.15)' : combo.riskLevel === 'balanced' ? 'rgba(255,190,11,0.15)' : 'rgba(255,68,68,0.15)', borderRadius: 6, color: combo.riskLevel === 'safe' ? '#00ff88' : combo.riskLevel === 'balanced' ? '#ffbe0b' : '#ff4444', fontWeight: 600 }}>
                {combo.riskLevel === 'safe' ? '🟢 Seguro' : combo.riskLevel === 'balanced' ? '🟡 Equilibrado' : '🔴 Turbo'}
              </span>
            </div>
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
              <div style={{ flex: 1, minWidth: 120, padding: '0.75rem', background: 'rgba(0,255,136,0.05)', borderRadius: 10, textAlign: 'center' }}>
                <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', marginBottom: '0.25rem' }}>CUOTA</div>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#00ff88' }}>{combo.totalOdds}</div>
              </div>
              <div style={{ flex: 1, minWidth: 120, padding: '0.75rem', background: 'rgba(0,212,255,0.05)', borderRadius: 10, textAlign: 'center' }}>
                <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', marginBottom: '0.25rem' }}>PROBABILIDAD</div>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#00d4ff' }}>{combo.totalProbability}%</div>
              </div>
              <div style={{ flex: 1, minWidth: 120, padding: '0.75rem', background: 'rgba(255,190,11,0.05)', borderRadius: 10, textAlign: 'center' }}>
                <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', marginBottom: '0.25rem' }}>GANANCIA</div>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#ffbe0b' }}>{combo.potentialWin}€</div>
              </div>
            </div>
            {combo.picks.map((pick, j) => (
              <div key={j} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.75rem', background: 'rgba(255,255,255,0.02)', borderRadius: 8, marginBottom: '0.5rem' }}>
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 600 }}>{pick.match}</div>
                  <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)' }}>{pick.type}: <span style={{ color: '#00ff88', fontWeight: 600 }}>{pick.selection}</span></div>
                </div>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: '#00d4ff' }}>{pick.odds}</div>
              </div>
            ))}
          </div>
        ))}

        {/* Matches */}
        <h3 style={{ fontSize: '0.9rem', fontWeight: 600, color: 'rgba(255,255,255,0.5)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>📊 Partidos Disponibles ({matches.length})</h3>
        {matches.map(match => (
          <div key={match.id} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 12, padding: '1rem', marginBottom: '0.75rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
              <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)' }}>{match.leagueName}</span>
              <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)' }}>{new Date(match.commenceTime).toLocaleDateString('es-ES', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' })}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontWeight: 600 }}>{match.homeTeam}</span>
              <span style={{ color: 'rgba(255,255,255,0.3)' }}>vs</span>
              <span style={{ fontWeight: 600 }}>{match.awayTeam}</span>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
              <span style={{ padding: '0.25rem 0.5rem', background: 'rgba(0,255,136,0.1)', borderRadius: 6, fontSize: '0.8rem', color: '#00ff88', fontWeight: 600 }}>1: {match.odds.home}</span>
              <span style={{ padding: '0.25rem 0.5rem', background: 'rgba(255,190,11,0.1)', borderRadius: 6, fontSize: '0.8rem', color: '#ffbe0b', fontWeight: 600 }}>X: {match.odds.draw}</span>
              <span style={{ padding: '0.25rem 0.5rem', background: 'rgba(0,212,255,0.1)', borderRadius: 6, fontSize: '0.8rem', color: '#00d4ff', fontWeight: 600 }}>2: {match.odds.away}</span>
              <span style={{ padding: '0.25rem 0.5rem', background: 'rgba(255,68,68,0.1)', borderRadius: 6, fontSize: '0.8rem', color: '#ff4444', fontWeight: 600 }}>O2.5: {match.odds.over25}</span>
              <span style={{ padding: '0.25rem 0.5rem', background: 'rgba(139,92,246,0.1)', borderRadius: 6, fontSize: '0.8rem', color: '#8b5cf6', fontWeight: 600 }}>BTTS: {match.odds.btts}</span>
            </div>
          </div>
        ))}
      </main>

      {/* Footer */}
      <footer style={{ textAlign: 'center', padding: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.3)', fontSize: '0.75rem' }}>
        CombiPro © 2026 — Cuotas reales de The-Odds API · Juega con responsabilidad
      </footer>
    </div>
  );
}
