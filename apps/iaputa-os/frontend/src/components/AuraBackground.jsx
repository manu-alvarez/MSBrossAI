import React from 'react';

const AuraBackground = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Dynamic Gradients */}
      <div className="aura-sphere aura-cyan" />
      <div className="aura-sphere aura-purple" />
      
      {/* Noise Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          mixBlendMode: 'overlay'
        }}
      />
      
      {/* Vignette */}
      <div className="absolute inset-0 bg-radial-gradient(circle at center, transparent 30%, rgba(0,0,0,0.4) 100%)" />
      
      {/* Scanlines Effect Overlay */}
      <div className="absolute inset-0 scanlines opacity-20" />
    </div>
  );
};

export default AuraBackground;
