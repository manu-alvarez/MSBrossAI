import React, { useState, useEffect, useCallback } from 'react';

// ============================================
// COMBIPRO — Real Odds + Combo Generator
// ============================================

const ODDS_API_KEY = ''; // Add your valid key from the-odds-api.com
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
  { key: 'soccer_uefa_champs_league', name: '🏆 Champions League', icon: '🏆' },
  { key: 'soccer_epl', name: '🇬🇧 Premier League', icon: '🇬🇧' },
  { key: 'soccer_spain_la_liga', name: '🇪🇸 LaLiga', icon: '🇪🇸' },
  { key: 'soccer_italy_serie_a', name: '🇮🇹 Serie A', icon: '🇮🇹' },
  { key: 'soccer_germany_bundesliga', name: '🇩🇪 Bundesliga', icon: '🇩🇪' },
  { key: 'soccer_france_ligue_one', name: '🇫🇷 Ligue 1', icon: '🇫🇷' },
];

// Realistic demo data with REAL teams
function generateRealisticMatches(): Match[] {
  const now = new Date();
  const matches: Match[] = [];
  let id = 1;

  const fixtures: [string, string, string, string, number, number, number][] = [
    // LaLiga
    ['Real Madrid', 'Barcelona', 'LaLiga', '🇪🇸 LaLiga', 2.10, 3.40, 3.20],
    ['Atlético Madrid', 'Sevilla', 'LaLiga', '🇪🇸 LaLiga', 1.90, 3.40, 3.80],
    ['Real Sociedad', 'Villarreal', 'LaLiga', '🇪🇸 LaLiga', 2.20, 3.30, 3.10],
    ['Athletic Bilbao', 'Real Betis', 'LaLiga', '🇪🇸 LaLiga', 2.00, 3.30, 3.50],
    ['Girona', 'Valencia', 'LaLiga', '🇪🇸 LaLiga', 1.80, 3.60, 4.00],
    // Premier League
    ['Man City', 'Liverpool', 'EPL', '🇬🇧 Premier League', 2.00, 3.50, 3.40],
    ['Arsenal', 'Chelsea', 'EPL', '🇬🇧 Premier League', 2.00, 3.30, 3.50],
    ['Man United', 'Tottenham', 'EPL', '🇬🇧 Premier League', 2.30, 3.40, 2.90],
    ['Newcastle', 'Aston Villa', 'EPL', '🇬🇧 Premier League', 2.10, 3.40, 3.20],
    ['Brighton', 'West Ham', 'EPL', '🇬🇧 Premier League', 1.90, 3.50, 3.80],
    // Champions League
    ['Bayern Munich', 'PSG', 'UCL', '🏆 Champions League', 1.90, 3.60, 3.70],
    ['Inter Milan', 'Benfica', 'UCL', '🏆 Champions League', 1.70, 3.60, 4.50],
    ['Dortmund', 'Napoli', 'UCL', '🏆 Champions League', 2.20, 3.40, 3.10],
    ['Barcelona', 'Atletico Madrid', 'UCL', '🏆 Champions League', 2.00, 3.30, 3.50],
    // Serie A
    ['Inter Milan', 'AC Milan', 'SerieA', '🇮🇹 Serie A', 2.00, 3.30, 3.50],
    ['Juventus', 'Napoli', 'SerieA', '🇮🇹 Serie A', 2.40, 3.20, 2.90],
    ['Roma', 'Lazio', 'SerieA', '🇮🇹 Serie A', 2.20, 3.30, 3.10],
    ['Atalanta', 'Fiorentina', 'SerieA', '🇮🇹 Serie A', 1.80, 3.60, 4.00],
    // Bundesliga
    ['Bayern Munich', 'Dortmund', 'Bundesliga', '🇩🇪 Bundesliga', 1.70, 3.80, 4.50],
    ['Leverkusen', 'RB Leipzig', 'Bundesliga', '🇩🇪 Bundesliga', 1.90, 3.50, 3.70],
    ['Stuttgart', 'Frankfurt', 'Bundesliga', '🇩🇪 Bundesliga', 2.10, 3.40, 3.20],
    // Ligue 1
    ['PSG', 'Marseille', 'Ligue1', '🇫🇷 Ligue 1', 1.50, 4.20, 6.00],
    ['Monaco', 'Lyon', 'Ligue1', '🇫🇷 Ligue 1', 2.00, 3.40, 3.40],
    ['Lille', 'Nice', 'Ligue1', '🇫🇷 Ligue 1', 2.10, 3.30, 3.20],
  ];

  for (const [home, away, league, leagueName, h, d, a] of fixtures) {
    const daysAhead = Math.floor(Math.random() * 7) + 1;
    const matchDate = new Date(now);
    matchDate.setDate(matchDate.getDate() + daysAhead);
    matchDate.setHours([14, 16, 18, 20, 21][Math.floor(Math.random() * 5)], [0, 30, 45][Math.floor(Math.random() * 3)], 0);

    const over25 = +(1.50 + Math.random() * 0.50).toFixed(2);
    const under25 = +((1 / (1 - 1/over25) + 0.1)).toFixed(2);
    const btts = +(1.55 + Math.random() * 0.40).toFixed(2);
    const bttsNo = +((1 / (1 - 1/btts) + 0.1)).toFixed(2);
    const over05HT = +(1.25 + Math.random() * 0.25).toFixed(2);

    matches.push({
      id: String(id++),
      homeTeam: home, awayTeam: away,
      league, leagueName,
      commenceTime: matchDate.toISOString(),
      odds: {
        home: h, draw: d, away: a,
        over25, under25: +under25,
        btts, bttsNo: +bttsNo,
        over05HT: +over05HT,
      },
    });
  }

  return matches;
}

// Fetch real odds from The-Odds API
async function fetchRealOdds(leagues: string[]): Promise<Match[]> {
  if (!ODDS_API_KEY) return [];
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
          homeTeam: event.home_team, awayTeam: event.away_team,
          league, leagueName: LEAGUES.find(l => l.key === league)?.name || league,
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
    const flat = results.flat();
    return flat.length > 0 ? flat : [];
  } catch { return []; }
}

function calcProbability(odds: number): number {
  const margin = 0.05;
  return Math.round((1 / (odds * (1 + margin))) * 100);
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
  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState(false);
  const [apiLoading, setApiLoading] = useState(true);
  const [selectedLeagues, setSelectedLeagues] = useState<string[]>(LEAGUES.map(l => l.key));
  const [risk, setRisk] = useState<'safe' | 'balanced' | 'turbo'>('balanced');
  const [stake, setStake] = useState(10);
  const [combos, setCombos] = useState<Combo[]>([]);
  const [history, setHistory] = useState<Combo[]>(() => {
    try { return JSON.parse(localStorage.getItem('combipro-history') || '[]'); }
    catch { return []; }
  });

  const fetchOdds = useCallback(async () => {
    setLoading(true);
    const realMatches = await fetchRealOdds(selectedLeagues);
    if (realMatches.length > 0) {
      setMatches(realMatches);
      setApiLoading(false);
    } else {
      // Use realistic demo data
      setMatches(generateRealisticMatches());
      setApiLoading(false);
    }
    setLoading(false);
  }, [selectedLeagues]);

  useEffect(() => { fetchOdds(); }, []);

  const generate = () => {
    const newCombos = generateCombos(matches, risk, stake);
    setCombos(newCombos);
    const newHistory = [...newCombos, ...history].slice(0, 50);
    setHistory(newHistory);
    localStorage.setItem('combipro-history', JSON.stringify(newHistory));
  };

  const toggleLeague = (key: string) => {
    setSelectedLeagues(prev => prev.includes(key) ? prev.filter(l => l !== key) : [...prev, key]);
  };

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0a0a1a 0%, #1a0a2e 50%, #0a1a2e 100%)' }}>
      {/* Header */}
      <header style={{ padding: '1.5rem 2rem', borderBottom: '1px solid rgba(255,255,255,0.06)', background: 'rgba(0,0,0,0.3)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ width: 48, height: 48, borderRadius: 12, background: 'linear-gradient(135deg, #00ff88, #00d4ff)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>⚽</div>
            <div>
              <h1 style={{ fontFamily: 'Space Grotesk, Inter, sans-serif', fontSize: '1.5rem', fontWeight: 700, background: 'linear-gradient(135deg, #00ff88, #00d4ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>CombiPro</h1>
              <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)' }}>
                {apiLoading ? '⏳ Cargando cuotas...' : `📊 ${matches.length} partidos disponibles`}
              </p>
            </div>
          </div>
          <button onClick={fetchOdds} disabled={loading} style={{ padding: '0.5rem 1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8, color: '#fff', cursor: loading ? 'not-allowed' : 'pointer', opacity: loading ? 0.5 : 1 }}>
            {loading ? '⏳ Actualizando...' : '🔄 Actualizar Cuotas'}
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
                borderRadius: 8, color: selectedLeagues.includes(league.key) ? '#00ff88' : 'rgba(255,255,255,0.5)',
                cursor: 'pointer', fontSize: '0.85rem', fontWeight: 600, transition: 'all 0.2s',
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
                  flex: 1, padding: '0.75rem',
                  background: risk === key ? 'rgba(0,255,136,0.15)' : 'rgba(255,255,255,0.03)',
                  border: `1px solid ${risk === key ? 'rgba(0,255,136,0.3)' : 'rgba(255,255,255,0.08)'}`,
                  borderRadius: 10, color: risk === key ? '#00ff88' : 'rgba(255,255,255,0.5)',
                  cursor: 'pointer', fontSize: '0.85rem', fontWeight: 600,
                }}>{label}</button>
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
        }}>⚡ GENERAR COMBINADAS</button>

        {/* Combos */}
        {combos.map((combo, i) => (
          <div key={combo.id} style={{
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
            <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem', flexWrap: 'wrap' }}>
              <span style={{ padding: '0.25rem 0.5rem', background: 'rgba(0,255,136,0.1)', borderRadius: 6, fontSize: '0.8rem', color: '#00ff88', fontWeight: 600 }}>1: {match.odds.home}</span>
              <span style={{ padding: '0.25rem 0.5rem', background: 'rgba(255,190,11,0.1)', borderRadius: 6, fontSize: '0.8rem', color: '#ffbe0b', fontWeight: 600 }}>X: {match.odds.draw}</span>
              <span style={{ padding: '0.25rem 0.5rem', background: 'rgba(0,212,255,0.1)', borderRadius: 6, fontSize: '0.8rem', color: '#00d4ff', fontWeight: 600 }}>2: {match.odds.away}</span>
              <span style={{ padding: '0.25rem 0.5rem', background: 'rgba(255,68,68,0.1)', borderRadius: 6, fontSize: '0.8rem', color: '#ff4444', fontWeight: 600 }}>O2.5: {match.odds.over25}</span>
              <span style={{ padding: '0.25rem 0.5rem', background: 'rgba(139,92,246,0.1)', borderRadius: 6, fontSize: '0.8rem', color: '#8b5cf6', fontWeight: 600 }}>BTTS: {match.odds.btts}</span>
            </div>
          </div>
        ))}
      </main>

      <footer style={{ textAlign: 'center', padding: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.3)', fontSize: '0.75rem' }}>
        CombiPro © 2026 — {ODDS_API_KEY ? 'Cuotas reales de The-Odds API' : 'Cuotas estimadas · Añade tu API key de The-Odds para datos en vivo'} · Juega con responsabilidad
      </footer>
    </div>
  );
}
