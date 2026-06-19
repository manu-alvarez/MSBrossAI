import React, { useState, useEffect, useCallback, useRef } from 'react';

// ============================================
// EDELWEISS — Vision Therapy Games for Kids
// ============================================

interface Game {
  id: string;
  name: string;
  icon: string;
  color: string;
  description: string;
  component: React.FC;
}

// ---- GAME: Follow the Star (Tracking) ----
const FollowTheStar: React.FC = () => {
  const [starPos, setStarPos] = useState({ x: 50, y: 50 });
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [showConfetti, setShowConfetti] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const gameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          setShowConfetti(true);
          setTimeout(() => setShowConfetti(false), 3000);
          return 30;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const moveStar = useCallback(() => {
    const speed = 10 + level * 5;
    setStarPos({
      x: Math.random() * (100 - speed * 2) + speed,
      y: Math.random() * (100 - speed * 2) + speed,
    });
  }, [level]);

  const handleClick = () => {
    setScore(s => s + 1);
    if ((score + 1) % 10 === 0) setLevel(l => l + 1);
    moveStar();
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2 style={{ fontFamily: 'Fredoka One', fontSize: '2rem', color: '#C084FC', marginBottom: '0.5rem' }}>
        ⭐ ¡Sigue la Estrella!
      </h2>
      <p style={{ fontSize: '1rem', color: '#666', marginBottom: '1rem' }}>
        ¡Toca la estrella antes de que se mueva!
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '1rem' }}>
        <span style={{ fontSize: '1.2rem', fontWeight: 700 }}>⭐ {score} puntos</span>
        <span style={{ fontSize: '1.2rem', fontWeight: 700 }}>🏆 Nivel {level}</span>
        <span style={{ fontSize: '1.2rem', fontWeight: 700 }}>⏱️ {timeLeft}s</span>
      </div>
      <div
        ref={gameRef}
        style={{
          position: 'relative',
          width: '100%',
          height: '400px',
          background: 'linear-gradient(135deg, #1a1a2e, #16213e)',
          borderRadius: '20px',
          overflow: 'hidden',
          cursor: 'pointer',
        }}
        onClick={handleClick}
      >
        {/* Stars background */}
        {[...Array(20)].map((_, i) => (
          <div key={i} style={{
            position: 'absolute',
            width: '3px',
            height: '3px',
            background: 'rgba(255,255,255,0.06)',
            borderRadius: '50%',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: 0.5,
          }} />
        ))}
        {/* Main star */}
        <div style={{
          position: 'absolute',
          left: `${starPos.x}%`,
          top: `${starPos.y}%`,
          transform: 'translate(-50%, -50%)',
          fontSize: `${3 + level * 0.5}rem`,
          transition: 'all 0.3s ease',
          filter: 'drop-shadow(0 0 20px gold)',
          animation: 'sparkle 0.5s ease infinite',
        }}>
          ⭐
        </div>
        {showConfetti && (
          <div style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '3rem',
            background: 'rgba(0,0,0,0.5)',
          }}>
            🎉 ¡Genial! 🎉
          </div>
        )}
      </div>
    </div>
  );
};

// ---- GAME: Color Match ----
const ColorMatch: React.FC = () => {
  const colors = [
    { name: 'Rojo', emoji: '🔴', hex: '#c06060' },
    { name: 'Azul', emoji: '🔵', hex: '#5e8eb8' },
    { name: 'Verde', emoji: '🟢', hex: '#4da88a' },
    { name: 'Amarillo', emoji: '🟡', hex: '#b8982e' },
    { name: 'Morado', emoji: '🟣', hex: '#9876c0' },
    { name: 'Naranja', emoji: '🟠', hex: '#c08050' },
  ];

  const [targetColor, setTargetColor] = useState(colors[0]);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState('');

  const newRound = () => {
    setTargetColor(colors[Math.floor(Math.random() * colors.length)]);
    setFeedback('');
  };

  useEffect(() => { newRound(); }, []);

  const handleClick = (color: typeof colors[0]) => {
    if (color.name === targetColor.name) {
      setScore(s => s + 1);
      setFeedback('🎉 ¡Correcto!');
      setTimeout(newRound, 1000);
    } else {
      setFeedback('😅 ¡Intenta otra vez!');
      setTimeout(() => setFeedback(''), 1000);
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2 style={{ fontFamily: 'Fredoka One', fontSize: '2rem', color: '#c09060', marginBottom: '0.5rem' }}>
        🎨 ¡Encuentra el Color!
      </h2>
      <p style={{ fontSize: '1rem', color: '#666', marginBottom: '1rem' }}>
        ¿Cuál es el color {targetColor.name} {targetColor.emoji}?
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '1rem' }}>
        <span style={{ fontSize: '1.2rem', fontWeight: 700 }}>⭐ {score} aciertos</span>
      </div>
      {feedback && (
        <div style={{
          fontSize: '1.5rem',
          fontWeight: 700,
          padding: '0.5rem',
          marginBottom: '1rem',
          animation: 'pop 0.3s ease',
        }}>
          {feedback}
        </div>
      )}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '1rem',
        maxWidth: '400px',
        margin: '0 auto',
      }}>
        {colors.map(color => (
          <button
            key={color.name}
            onClick={() => handleClick(color)}
            style={{
              width: '100%',
              aspectRatio: '1',
              borderRadius: '20px',
              border: '4px solid rgba(255,255,255,0.08)',
              background: color.hex,
              cursor: 'pointer',
              transition: 'all 0.2s',
              fontSize: '2rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onMouseEnter={e => {
              (e.target as HTMLElement).style.transform = 'scale(1.1)';
              (e.target as HTMLElement).style.boxShadow = `0 0 20px ${color.hex}`;
            }}
            onMouseLeave={e => {
              (e.target as HTMLElement).style.transform = 'scale(1)';
              (e.target as HTMLElement).style.boxShadow = 'none';
            }}
          />
        ))}
      </div>
    </div>
  );
};

// ---- GAME: Shape Finder ----
const ShapeFinder: React.FC = () => {
  const shapes = ['🔵', '🔺', '🟥', '⭐', '💜', '🟢'];
  const [target, setTarget] = useState(shapes[0]);
  const [grid, setGrid] = useState<string[]>([]);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState('');

  const newRound = () => {
    const t = shapes[Math.floor(Math.random() * shapes.length)];
    setTarget(t);
    const g = [...Array(12)].map(() => shapes[Math.floor(Math.random() * shapes.length)]);
    // Ensure at least one target exists
    g[Math.floor(Math.random() * g.length)] = t;
    setGrid(g);
    setFeedback('');
  };

  useEffect(() => { newRound(); }, []);

  const handleClick = (shape: string, index: number) => {
    if (shape === target) {
      setScore(s => s + 1);
      setFeedback('🎉 ¡Lo encontraste!');
      setTimeout(newRound, 800);
    } else {
      setFeedback('😅 ¡Ese no es!');
      setTimeout(() => setFeedback(''), 800);
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2 style={{ fontFamily: 'Fredoka One', fontSize: '2rem', color: '#60A5FA', marginBottom: '0.5rem' }}>
        🔍 ¡Encuentra la Forma!
      </h2>
      <p style={{ fontSize: '1rem', color: '#666', marginBottom: '1rem' }}>
        ¿Dónde está {target}?
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '1rem' }}>
        <span style={{ fontSize: '1.2rem', fontWeight: 700 }}>⭐ {score} aciertos</span>
      </div>
      {feedback && (
        <div style={{ fontSize: '1.5rem', fontWeight: 700, padding: '0.5rem', marginBottom: '1rem', animation: 'pop 0.3s ease' }}>
          {feedback}
        </div>
      )}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '0.75rem',
        maxWidth: '350px',
        margin: '0 auto',
      }}>
        {grid.map((shape, i) => (
          <button
            key={i}
            onClick={() => handleClick(shape, i)}
            style={{
              width: '100%',
              aspectRatio: '1',
              borderRadius: '15px',
              border: '3px solid rgba(255,255,255,0.08)',
              background: '#2a2a30',
              cursor: 'pointer',
              fontSize: '2.5rem',
              transition: 'all 0.2s',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onMouseEnter={e => (e.target as HTMLElement).style.transform = 'scale(1.1)'}
            onMouseLeave={e => (e.target as HTMLElement).style.transform = 'scale(1)'}
          >
            {shape}
          </button>
        ))}
      </div>
    </div>
  );
};

// ---- GAME: High Contrast ----
const HighContrast: React.FC = () => {
  const [pattern, setPattern] = useState(0);
  const patterns = [
    { bg: '#1a1a1a', fg: '#c0c0c0', emoji: '⚫⚪⚫⚪' },
    { bg: '#c0c0c0', fg: '#1a1a1a', emoji: '⬛⬜⬛⬜' },
    { bg: '#1a1a1a', fg: '#b8982e', emoji: '🟡⚫🟡⚫' },
    { bg: '#1a1a1a', fg: '#c06060', emoji: '🔴⚫🔴⚫' },
    { bg: '#c0c0c0', fg: '#4060a0', emoji: '🔵⬜🔵⬜' },
  ];

  useEffect(() => {
    const timer = setInterval(() => setPattern(p => (p + 1) % patterns.length), 3000);
    return () => clearInterval(timer);
  }, []);

  const p = patterns[pattern];

  return (
    <div style={{ textAlign: 'center' }}>
      <h2 style={{ fontFamily: 'Fredoka One', fontSize: '2rem', color: '#c08080', marginBottom: '0.5rem' }}>
        👁️ Alto Contraste
      </h2>
      <p style={{ fontSize: '1rem', color: '#666', marginBottom: '1rem' }}>
        Observa los patrones que cambian
      </p>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(8, 1fr)',
        gap: '4px',
        maxWidth: '400px',
        margin: '0 auto',
        padding: '1rem',
        background: p.bg,
        borderRadius: '20px',
        transition: 'background 1s ease',
      }}>
        {[...Array(64)].map((_, i) => (
          <div key={i} style={{
            width: '100%',
            aspectRatio: '1',
            borderRadius: '8px',
            background: i % 2 === 0 ? p.fg : p.bg,
            border: `2px solid ${i % 2 === 0 ? p.bg : p.fg}`,
            transition: 'all 1s ease',
          }} />
        ))}
      </div>
      <div style={{ fontSize: '2rem', marginTop: '1rem', animation: 'wiggle 1s ease infinite' }}>
        {p.emoji}
      </div>
    </div>
  );
};

// ---- GAME: Eye Patch Timer ----
const EyePatchTimer: React.FC = () => {
  const [selectedMinutes, setSelectedMinutes] = useState(15);
  const [totalSeconds, setTotalSeconds] = useState(15 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [done, setDone] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!isRunning) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }
    timerRef.current = setInterval(() => {
      setTotalSeconds(prev => {
        if (prev <= 1) {
          setIsRunning(false);
          setDone(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [isRunning]);

  const displayMinutes = Math.floor(totalSeconds / 60);
  const displaySeconds = totalSeconds % 60;

  const selectPreset = (m: number) => {
    setSelectedMinutes(m);
    setTotalSeconds(m * 60);
    setIsRunning(false);
    setDone(false);
  };

  const startTimer = () => {
    if (totalSeconds > 0) setIsRunning(true);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setDone(false);
    setTotalSeconds(selectedMinutes * 60);
  };

  if (done) {
    return (
      <div style={{ textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Fredoka One', fontSize: '2rem', color: '#34D399', marginBottom: '1rem' }}>
          🎉 ¡Tiempo cumplido!
        </h2>
        <div style={{ fontSize: '5rem', animation: 'bounce 1s ease infinite' }}>👏</div>
        <p style={{ fontSize: '1.2rem', color: '#666', marginTop: '1rem' }}>
          ¡Muy bien! ¡Has completado tu ejercicio!
        </p>
        <button onClick={resetTimer} style={{
          marginTop: '1rem',
          padding: '1rem 2rem',
          fontSize: '1.2rem',
          fontWeight: 700,
          background: 'linear-gradient(135deg, #4da88a, #5e8eb8)',
          border: 'none',
          borderRadius: '15px',
          color: '#e8e8e0',
          cursor: 'pointer',
        }}>
          🔄 Jugar otra vez
        </button>
      </div>
    );
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h2 style={{ fontFamily: 'Fredoka One', fontSize: '2rem', color: '#34D399', marginBottom: '0.5rem' }}>
        ⏱️ Tiempo del Parche
      </h2>
      <p style={{ fontSize: '1rem', color: '#666', marginBottom: '1rem' }}>
        ¡Cuenta regresiva para tu ejercicio!
      </p>
      <div style={{
        fontSize: '5rem',
        fontWeight: 900,
        fontFamily: 'Fredoka One',
        color: isRunning ? '#5fbf9e' : '#888',
        marginBottom: '1rem',
        animation: isRunning ? 'pulse 1s ease infinite' : 'none',
      }}>
        {String(displayMinutes).padStart(2, '0')}:{String(displaySeconds).padStart(2, '0')}
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '1rem' }}>
        <button onClick={startTimer} disabled={isRunning} style={{
          padding: '1rem 2rem',
          fontSize: '1.2rem',
          fontWeight: 700,
          background: isRunning ? '#444' : 'linear-gradient(135deg, #4da88a, #5e8eb8)',
          border: 'none',
          borderRadius: '15px',
          color: '#e8e8e0',
          cursor: isRunning ? 'not-allowed' : 'pointer',
        }}>
          ▶️ Empezar
        </button>
        <button onClick={resetTimer} style={{
          padding: '1rem 2rem',
          fontSize: '1.2rem',
          fontWeight: 700,
          background: 'linear-gradient(135deg, #c08080, #c09060)',
          border: 'none',
          borderRadius: '15px',
          color: '#e8e8e0',
          cursor: 'pointer',
        }}>
          🔄 Reiniciar
        </button>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
        {[5, 10, 15, 20, 30].map(m => (
          <button key={m} onClick={() => selectPreset(m)} style={{
            padding: '0.5rem 1rem',
            fontSize: '1rem',
            fontWeight: 700,
            background: selectedMinutes === m ? '#4da88a' : '#2a2a30',
            border: '2px solid #4da88a',
            borderRadius: '10px',
            color: selectedMinutes === m ? '#e8e8e0' : '#5fbf9e',
            cursor: 'pointer',
          }}>
            {m} min
          </button>
        ))}
      </div>
    </div>
  );
};

// ---- GAME: Find the Difference ----
const FindDifference: React.FC = () => {
  const [score, setScore] = useState(0);
  const [round, setRound] = useState(1);
  const [found, setFound] = useState(false);

  const emojis = ['🐶', '🐱', '🐰', '🐻', '🐼', '🐨', '🦊', '🐸'];

  const generateGrid = () => {
    const main = emojis[Math.floor(Math.random() * emojis.length)];
    const diff = emojis[Math.floor(Math.random() * emojis.length)];
    const grid = [...Array(16)].map(() => main);
    grid[Math.floor(Math.random() * grid.length)] = diff;
    return { grid, main, diff };
  };

  const [state, setState] = useState(generateGrid);

  const handleClick = (emoji: string, index: number) => {
    if (emoji === state.diff && !found) {
      setFound(true);
      setScore(s => s + 1);
      setTimeout(() => {
        setRound(r => r + 1);
        setFound(false);
        setState(generateGrid());
      }, 1000);
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2 style={{ fontFamily: 'Fredoka One', fontSize: '2rem', color: '#c0a040', marginBottom: '0.5rem' }}>
        🔎 ¡Encuentra el Diferente!
      </h2>
      <p style={{ fontSize: '1rem', color: '#666', marginBottom: '1rem' }}>
        ¿Cuál es diferente? Busca el {state.diff} entre los {state.main}
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '1rem' }}>
        <span style={{ fontSize: '1.2rem', fontWeight: 700 }}>⭐ {score} encontrados</span>
        <span style={{ fontSize: '1.2rem', fontWeight: 700 }}>🎯 Ronda {round}</span>
      </div>
      {found && (
        <div style={{ fontSize: '2rem', fontWeight: 700, padding: '0.5rem', marginBottom: '1rem', animation: 'pop 0.3s ease' }}>
          🎉 ¡Lo encontraste!
        </div>
      )}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '0.5rem',
        maxWidth: '300px',
        margin: '0 auto',
      }}>
        {state.grid.map((emoji, i) => (
          <button
            key={i}
            onClick={() => handleClick(emoji, i)}
            style={{
              width: '100%',
              aspectRatio: '1',
              borderRadius: '15px',
              border: '3px solid rgba(255,255,255,0.08)',
              background: found && emoji === state.diff ? '#4da88a' : '#2a2a30',
              cursor: 'pointer',
              fontSize: '2.5rem',
              transition: 'all 0.2s',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onMouseEnter={e => (e.target as HTMLElement).style.transform = 'scale(1.1)'}
            onMouseLeave={e => (e.target as HTMLElement).style.transform = 'scale(1)'}
          >
            {emoji}
          </button>
        ))}
      </div>
    </div>
  );
};

// ---- MAIN APP ----
const games: Game[] = [
  { id: 'star', name: 'Sigue la Estrella', icon: '⭐', color: '#C084FC', description: '¡Toca la estrella!', component: FollowTheStar },
  { id: 'color', name: 'Encuentra el Color', icon: '🎨', color: '#c09060', description: '¿Cuál es el color?', component: ColorMatch },
  { id: 'shape', name: 'Encuentra la Forma', icon: '🔍', color: '#7eaed4', description: '¡Busca la forma!', component: ShapeFinder },
  { id: 'contrast', name: 'Alto Contraste', icon: '👁️', color: '#c08080', description: 'Observa los patrones', component: HighContrast },
  { id: 'timer', name: 'Tiempo del Parche', icon: '⏱️', color: '#5fbf9e', description: '¡Cuenta regresiva!', component: EyePatchTimer },
  { id: 'diff', name: 'Encuentra el Diferente', icon: '🔎', color: '#c0a040', description: '¿Cuál es diferente?', component: FindDifference },
];

export default function App() {
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #09090b 0%, #18181b 50%, #09090b 100%)', color: '#f4f4f5' }}>
      {/* Header */}
      <header style={{
        padding: '1rem 2rem',
        background: 'rgba(24, 24, 27, 0.8)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
        boxShadow: '0 2px 20px rgba(0,0,0,0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{
            width: 50, height: 50, borderRadius: '50%',
            background: 'linear-gradient(135deg, #ec4899, #8b5cf6)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '1.5rem',
            boxShadow: '0 0 15px rgba(236, 72, 153, 0.5)',
          }}>
            👁️
          </div>
          <div>
            <h1 style={{ fontFamily: 'Fredoka One', fontSize: '1.5rem', color: '#f9a8d4' }}>
              Edelweiss
            </h1>
            <p style={{ fontSize: '0.8rem', color: '#9ca3af' }}>Juegos para mis ojitos ✨</p>
          </div>
        </div>
        {selectedGame && (
          <button onClick={() => setSelectedGame(null)} style={{
            padding: '0.5rem 1rem',
            background: 'rgba(244, 114, 182, 0.1)',
            border: '1px solid rgba(244, 114, 182, 0.3)',
            borderRadius: '10px',
            color: '#f472b6',
            fontWeight: 700,
            cursor: 'pointer',
            fontSize: '0.9rem',
            transition: 'all 0.2s',
          }}>
            ← Volver
          </button>
        )}
      </header>

      {/* Main Content */}
      <main style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
        {selectedGame ? (
          <div style={{
            background: 'rgba(39, 39, 42, 0.6)',
            border: '1px solid rgba(255,255,255,0.05)',
            borderRadius: '25px',
            padding: '2rem',
            boxShadow: '0 4px 30px rgba(0,0,0,0.5)',
            animation: 'slideIn 0.5s ease',
            backdropFilter: 'blur(10px)',
          }}>
            <selectedGame.component />
          </div>
        ) : (
          <>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <h2 style={{ fontFamily: 'Fredoka One', fontSize: '2rem', color: '#fbcfe8', marginBottom: '0.5rem' }}>
                ¡Elige tu juego! 🎮
              </h2>
              <p style={{ color: '#9ca3af', fontSize: '1.1rem' }}>
                Toca un juego para empezar a jugar
              </p>
            </div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
              gap: '1rem',
            }}>
              {games.map((game, i) => (
                <button
                  key={game.id}
                  onClick={() => setSelectedGame(game)}
                  style={{
                    padding: '1.5rem',
                    background: 'rgba(39, 39, 42, 0.4)',
                    border: `1px solid ${game.color}40`,
                    borderRadius: '20px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    animation: `slideIn 0.5s ease ${i * 0.1}s both`,
                    textAlign: 'center',
                    backdropFilter: 'blur(5px)',
                  }}
                  onMouseEnter={e => {
                    (e.target as HTMLElement).style.transform = 'translateY(-5px)';
                    (e.target as HTMLElement).style.boxShadow = `0 10px 30px ${game.color}20`;
                    (e.target as HTMLElement).style.background = 'rgba(63, 63, 70, 0.6)';
                  }}
                  onMouseLeave={e => {
                    (e.target as HTMLElement).style.transform = 'translateY(0)';
                    (e.target as HTMLElement).style.boxShadow = 'none';
                    (e.target as HTMLElement).style.background = 'rgba(39, 39, 42, 0.4)';
                  }}
                >
                  <div style={{ fontSize: '3rem', marginBottom: '0.5rem', animation: 'float 3s ease-in-out infinite' }}>
                    {game.icon}
                  </div>
                  <div style={{ fontFamily: 'Fredoka One', fontSize: '1.1rem', color: game.color, marginBottom: '0.25rem' }}>
                    {game.name}
                  </div>
                  <div style={{ fontSize: '0.85rem', color: '#a1a1aa' }}>
                    {game.description}
                  </div>
                </button>
              ))}
            </div>
          </>
        )}
      </main>

      {/* Footer */}
      <footer style={{
        textAlign: 'center',
        padding: '1.5rem',
        color: '#71717a',
        fontSize: '0.8rem',
      }}>
        Edelweiss VisionPlay © 2026 — Juegos de terapia visual para niños ✨
      </footer>
    </div>
  );
}
