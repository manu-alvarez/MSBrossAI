import React, { useRef, useEffect } from 'react';

interface NeuralOrbProps {
  state: 'idle' | 'listening' | 'thinking' | 'speaking' | 'error';
  volume?: number;
}

const NeuralOrb: React.FC<NeuralOrbProps> = ({ state = 'idle', volume = 0 }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth * 2;
      canvas.height = canvas.offsetHeight * 2;
    };
    resize();
    window.addEventListener('resize', resize);

    // Color schemes per state
    const colors: Record<string, { core: string; glow: string; accent: string; particles: string }> = {
      idle: { core: '#8b5cf6', glow: 'rgba(139,92,246,0.3)', accent: '#6366f1', particles: '#a78bfa' },
      listening: { core: '#00f5ff', glow: 'rgba(0,245,255,0.4)', accent: '#06b6d4', particles: '#22d3ee' },
      thinking: { core: '#ff006e', glow: 'rgba(255,0,110,0.4)', accent: '#ec4899', particles: '#f472b6' },
      speaking: { core: '#06ff8f', glow: 'rgba(6,255,143,0.4)', accent: '#10b981', particles: '#34d399' },
      error: { core: '#ff0054', glow: 'rgba(255,0,84,0.4)', accent: '#ef4444', particles: '#f87171' },
    };

    const scheme = colors[state] || colors.idle;

    // Particles
    const particles: Array<{
      x: number; y: number; vx: number; vy: number;
      radius: number; opacity: number; angle: number; speed: number;
    }> = [];
    const particleCount = 80;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: canvas.width / 2,
        y: canvas.height / 2,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        radius: Math.random() * 4 + 1,
        opacity: Math.random() * 0.7 + 0.3,
        angle: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.02 + 0.005,
      });
    }

    // Neural connections
    const connections: Array<{ from: number; to: number; opacity: number }> = [];
    for (let i = 0; i < particleCount; i++) {
      for (let j = i + 1; j < particleCount; j++) {
        if (Math.random() < 0.03) {
          connections.push({ from: i, to: j, opacity: Math.random() * 0.5 });
        }
      }
    }

    let time = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.016;

      const cx = canvas.width / 2;
      const cy = canvas.height / 2;
      const baseRadius = Math.min(cx, cy) * 0.15;
      const volumeScale = 1 + volume * 0.5;

      // Update particles
      particles.forEach((p, i) => {
        p.angle += p.speed;
        const orbitRadius = baseRadius * (1.5 + Math.sin(time + i) * 0.5) * volumeScale;
        p.x = cx + Math.cos(p.angle) * orbitRadius;
        p.y = cy + Math.sin(p.angle) * orbitRadius;
        p.opacity = 0.3 + Math.sin(time * 2 + i) * 0.3;
      });

      // Draw connections
      connections.forEach(conn => {
        const p1 = particles[conn.from];
        const p2 = particles[conn.to];
        const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
        if (dist < 200) {
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = scheme.particles + Math.floor(conn.opacity * (1 - dist / 200) * 255).toString(16).padStart(2, '0');
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      });

      // Draw particles
      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * volumeScale, 0, Math.PI * 2);
        ctx.fillStyle = scheme.particles + Math.floor(p.opacity * 255).toString(16).padStart(2, '0');
        ctx.fill();
      });

      // Outer glow rings
      for (let i = 3; i > 0; i--) {
        const ringRadius = baseRadius * (1 + i * 0.4) * volumeScale;
        const ringOpacity = 0.1 / i;
        ctx.beginPath();
        ctx.arc(cx, cy, ringRadius, 0, Math.PI * 2);
        ctx.strokeStyle = scheme.glow.replace('0.4', String(ringOpacity));
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      // Core orb
      const coreGradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, baseRadius * volumeScale);
      coreGradient.addColorStop(0, '#ffffff');
      coreGradient.addColorStop(0.3, scheme.core);
      coreGradient.addColorStop(0.7, scheme.accent);
      coreGradient.addColorStop(1, 'transparent');

      ctx.beginPath();
      ctx.arc(cx, cy, baseRadius * volumeScale, 0, Math.PI * 2);
      ctx.fillStyle = coreGradient;
      ctx.fill();

      // Inner glow
      const innerGlow = ctx.createRadialGradient(cx, cy, 0, cx, cy, baseRadius * 0.6 * volumeScale);
      innerGlow.addColorStop(0, 'rgba(255,255,255,0.8)');
      innerGlow.addColorStop(0.5, scheme.core + '80');
      innerGlow.addColorStop(1, 'transparent');

      ctx.beginPath();
      ctx.arc(cx, cy, baseRadius * 0.6 * volumeScale, 0, Math.PI * 2);
      ctx.fillStyle = innerGlow;
      ctx.fill();

      // Pulse effect
      const pulseRadius = baseRadius * (1.2 + Math.sin(time * 2) * 0.1) * volumeScale;
      ctx.beginPath();
      ctx.arc(cx, cy, pulseRadius, 0, Math.PI * 2);
      ctx.strokeStyle = scheme.glow;
      ctx.lineWidth = 3;
      ctx.stroke();

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationRef.current);
    };
  }, [state, volume]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: '100%',
        height: '100%',
        display: 'block',
      }}
    />
  );
};

export default NeuralOrb;
