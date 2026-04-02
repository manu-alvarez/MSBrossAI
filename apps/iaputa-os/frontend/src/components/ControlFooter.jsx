import React, { useState } from 'react';
import { IconTrash2, IconMic, IconMicOff, IconSend } from './Icons.jsx';

const ControlFooter = ({ 
  orbState, 
  userInput, 
  setUserInput, 
  onTextInput, 
  onToggleMic, 
  onClearMemory 
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="command-pill glass-card glow-border mb-10 mx-auto transition-all duration-500 scale-100 hover:scale-[1.02]">
      {/* Botón de Purga Minimalista */}
      <button
        onClick={onClearMemory}
        className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-white/5 transition-colors group ml-2"
        title="Limpiar Secuencia"
      >
        <IconTrash2 className="w-5 h-5 text-white/20 group-hover:text-red-400 transition-colors" />
      </button>

      {/* Input de Comando Luxury */}
      <div className="flex-1 flex items-center h-full">
        <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-white/20 ml-4 pointer-events-none select-none">
          CMD:
        </span>
        <input 
          type="text" 
          placeholder="Inicia un protocolo..." 
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') onTextInput(userInput);
          }}
          className="command-input"
        />
        
        {/* Botón Envío Rápido si hay texto */}
        {userInput.trim() && (
          <button 
            onClick={() => onTextInput(userInput)}
            className="w-10 h-10 flex items-center justify-center text-accent-cyan animate-in fade-in zoom-in duration-300"
          >
            <IconSend className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Mic Trigger Premium */}
      <div className="h-10 w-[1px] bg-white/10 mx-2" />
      
      <button 
        className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 mr-2 ${
          orbState === 'listening' 
          ? 'bg-red-500/20 shadow-[0_0_20px_rgba(255,60,60,0.3)]' 
          : 'hover:bg-white/5'
        }`}
        onClick={onToggleMic}
      >
        {orbState === 'listening' 
          ? <IconMicOff className="text-red-400 w-5 h-5 animate-pulse" /> 
          : <IconMic className="text-white/60 w-5 h-5" />
        }
      </button>
    </div>
  );
};

export default ControlFooter;
