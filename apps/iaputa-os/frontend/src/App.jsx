import { useState, useRef, useEffect, lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import NeuralOrb from './components/NeuralOrb.jsx';
import AuraBackground from './components/AuraBackground.jsx';
import './index.css';

const Orb3D = lazy(() => import('./components/Orb3D.jsx'));

// API Configuration from environment variables
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api';
const API_KEY = import.meta.env.VITE_API_KEY || '';

import { 
  IconEye, IconCamera, IconMonitor, IconGlobe, 
  IconCalendar, IconMail, IconSend, IconTerminal, 
  IconMic, IconMicOff, IconTrash2, IconSmartphone 
} from './components/Icons.jsx';


import { CORE_PLUGINS, TOOLS } from './config/plugins.js';
import CorePlugins from './components/CorePlugins.jsx';
import SidePanel from './components/SidePanel.jsx';
import ControlFooter from './components/ControlFooter.jsx';

function App() {
  const [orbState, setOrbState] = useState('ready');
  const [volume, setVolume] = useState(0);
  const [currentTime, setCurrentTime] = useState(new Date());
  
  // Advanced State
  const [transcript, setTranscript] = useState(null);
  const [visionImage, setVisionImage] = useState(null);
  const [userInput, setUserInput] = useState('');
  const [useOrb3D, setUseOrb3D] = useState(true); // Default to 3D for Luxury

  const audioContextRef = useRef(null);
  const analyserRef = useRef(null);
  const dataArrayRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const chunksRef = useRef([]);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatDate = (date) => {
    const options = { weekday: 'long', day: 'numeric', month: 'long' };
    return date.toLocaleDateString('es-ES', options);
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  };

  const initAudio = () => {
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioContextRef.current.state === 'suspended') {
      audioContextRef.current.resume();
    }
  };

  const handleAudioPlayback = async (url) => {
    if (!url) { setOrbState('ready'); return; }
    try {
      initAudio();
      const res = await fetch(url);
      if (!res.ok) throw new Error("Audio fetch failed");
      const buffer = await audioContextRef.current.decodeAudioData(await res.arrayBuffer());
      const source = audioContextRef.current.createBufferSource();
      source.buffer = buffer;
      analyserRef.current = audioContextRef.current.createAnalyser();
      analyserRef.current.fftSize = 256;
      source.connect(analyserRef.current);
      analyserRef.current.connect(audioContextRef.current.destination);
      dataArrayRef.current = new Uint8Array(analyserRef.current.frequencyBinCount);
      setOrbState('speaking');
      source.start(0);
      
      const updateVolume = () => {
        if (analyserRef.current) {
          analyserRef.current.getByteFrequencyData(dataArrayRef.current);
          const vol = dataArrayRef.current.reduce((a, b) => a + b) / dataArrayRef.current.length;
          setVolume(vol / 255); // Normalize 0-1
          requestAnimationFrame(updateVolume);
        }
      };
      updateVolume();
      source.onended = () => { setOrbState('ready'); setVolume(0); };
    } catch (err) {
      console.error("Audio err:", err);
      setOrbState('ready');
    }
  };

  const sendCommand = async (endpoint, payload, isJson = true) => {
    initAudio();
    setOrbState('processing');
    setVisionImage(null);
    try {
      const options = { 
        method: 'POST', 
        headers: { 'x-api-key': API_KEY }, 
        body: payload 
      };
      if (isJson) options.headers['Content-Type'] = 'application/json';
      const fullUrl = `${API_BASE_URL}${endpoint}`;
      const res = await fetch(fullUrl, options);
      if (!res.ok) throw new Error("HTTP " + res.status);
      const data = await res.json();
      
      if (data.vision_url) setVisionImage(data.vision_url);

      const responseText = data.response || data.error || data.transcript || '';
      
      if (responseText.startsWith('__VISION_REQUEST__:')) {
        const visionType = responseText.split(':')[1];
        setTranscript({ type: 'system', text: visionType === 'webcam' ? '◈ ACTIVANDO WEBCAM...' : '◈ CAPTURANDO PANTALLA...' });
        visionType === 'webcam' ? await captureWebcam() : await captureScreenshot();
        return;
      }

      setTranscript({ type: 'bot', text: responseText });
      handleAudioPlayback(data.audio_url);
    } catch (err) {
      setOrbState('error');
      setTranscript({ type: 'error', text: `Error: ${err.message}` });
    }
  };

  const captureScreenshot = async () => { /* ... existing capture code ... */ };
  const captureWebcam = async () => { /* ... existing capture code ... */ };
  
  const sendVisionToBackend = async (base64Image, source) => {
    try {
      const res = await fetch(`${API_BASE_URL}/vision-analyze`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-api-key': API_KEY },
        body: JSON.stringify({ image: base64Image, source })
      });
      const data = await res.json();
      if (data.vision_url) setVisionImage(data.vision_url);
      setTranscript({ type: 'bot', text: data.response });
      handleAudioPlayback(data.audio_url);
    } catch (err) {
      setOrbState('error');
      setTranscript({ type: 'error', text: `Error análisis: ${err.message}` });
    }
  };

  const handleToolAction = (tool) => {
    if (tool.action === 'screenshot') captureScreenshot();
    else if (tool.action === 'webcam') captureWebcam();
    else if (tool.cmd) handleTextInput(tool.cmd);
  };

  const handleTextInput = (text) => {
    if (!text.trim()) return;
    setTranscript({ type: 'user', text });
    setUserInput('');
    setTimeout(() => sendCommand('/text-command', JSON.stringify({ text })), 400);
  };

  const clearMemory = async () => {
    try {
      await fetch(`${API_BASE_URL}/clear-memory`, { method: 'POST', headers: { 'x-api-key': API_KEY } });
      setTranscript({ type: 'system', text: '◈ SECUENCIA LIMPIADA' });
    } catch (err) { console.error(err); }
  };

  const toggleMic = async () => {
    initAudio();
    if (!mediaRecorderRef.current || mediaRecorderRef.current.state === 'inactive') {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        mediaRecorderRef.current = new MediaRecorder(stream);
        chunksRef.current = [];
        mediaRecorderRef.current.ondataavailable = (e) => { if (e.data.size > 0) chunksRef.current.push(e.data); };
        mediaRecorderRef.current.onstop = async () => {
          setOrbState('processing');
          setTranscript({ type: 'system', text: '◈ PROCESANDO AUDIO...' });
          setVisionImage(null);
          const type = navigator.userAgent.includes('Safari') && !navigator.userAgent.includes('Chrome') ? 'audio/mp4' : 'audio/wav';
          const audioBlob = new Blob(chunksRef.current, { type });
          const formData = new FormData();
          formData.append('audio_file', audioBlob);
          await sendCommand('/voice-command', formData, false);
          stream.getTracks().forEach(track => track.stop());
        };
        mediaRecorderRef.current.start();
        setOrbState('listening');
        setTranscript({ type: 'system', text: '◈ ESCUCHANDO...' });
      } catch (err) {
        setOrbState('error');
        setTranscript({ type: 'error', text: `Mic: ${err.message}` });
      }
    } else {
      mediaRecorderRef.current.stop();
    }
  };

  return (
    <div className="luxury-layout">
      <AuraBackground />
      
      {/* LUXURY TOP BAR */}
      <header className="luxury-header relative z-[100]">
        <div className="flex flex-col">
          <span className="text-[10px] tracking-[0.5em] text-white/30 font-black uppercase">SISTEMA ACTIVO</span>
          <span className="text-xs font-mono text-accent-cyan/80 mt-1">{formatTime(currentTime)}</span>
        </div>
        
        <div className="flex flex-col items-end">
          <span className="text-[10px] tracking-[0.2em] text-white/30 uppercase">{formatDate(currentTime)}</span>
          <span className="text-[10px] font-mono text-white/20 mt-1 tracking-tighter">NODO: SEVILLA_VPS_01</span>
        </div>
      </header>

      <main className="luxury-main">
        {/* LEFT PANEL (Focus Mode Integrated) */}
        <SidePanel tools={TOOLS} onAction={handleToolAction} />

        {/* PROTAGONIST CENTER */}
        <div className="relative flex flex-col items-center justify-center">
          
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="relative"
          >
            {/* Halo de luz reactivo */}
            <div 
              className="absolute inset-0 rounded-full blur-[100px] transition-all duration-300 opacity-20"
              style={{ 
                backgroundColor: orbState === 'listening' ? '#ff3c3c' : '#00f2ff',
                transform: `scale(${1 + volume * 2})` 
              }}
            />

            <div 
              className="cursor-pointer select-none relative z-50"
              onClick={() => setUseOrb3D(!useOrb3D)}
            >
              <Suspense fallback={<NeuralOrb audioLevel={volume} orbState="processing" />}>
                {useOrb3D ? <Orb3D audioLevel={volume} orbState={orbState} /> : <NeuralOrb audioLevel={volume} orbState={orbState} />}
              </Suspense>
            </div>
          </motion.div>

          <div className="text-center mt-12 z-50">
            <h1 className="luxury-title select-none">IAPUTA OS</h1>
            <div className="flex items-center justify-center gap-3 mt-4">
              <div className="h-[1px] w-8 bg-white/10" />
              <div className="text-[10px] text-white/30 tracking-[0.6em] font-black uppercase">RENAISSANCE CORE</div>
              <div className="h-[1px] w-8 bg-white/10" />
            </div>
          </div>

          {/* TRANSCRIPT OVERLAY (Luxury Modal) */}
          <AnimatePresence>
            {transcript && (
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                className="absolute -bottom-32 w-full max-w-lg z-[200]"
              >
                <div className="glass-card glow-border p-5 shadow-2xl">
                  {visionImage && (
                    <motion.div 
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="mb-4 rounded-xl overflow-hidden border border-white/10 shadow-lg"
                    >
                      <img src={visionImage} alt="Vision" className="w-full h-auto" />
                    </motion.div>
                  )}
                  
                  <div className="flex items-start gap-4">
                    <div className={`w-1 h-10 rounded-full mt-1 ${transcript.type === 'user' ? 'bg-accent-cyan' : 'bg-accent-purple'}`} />
                    <div>
                      <span className="text-[9px] font-black tracking-[0.3em] text-white/20 uppercase">
                        {transcript.type === 'user' ? 'SOLICITUD ENTRANTE' : 'PROTOCOLO SISTEMA'}
                      </span>
                      <p className="text-sm text-white/80 leading-relaxed mt-1">
                        {transcript.text || (transcript.type === 'bot' && "Analizando datos...")}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* RIGHT PANEL (Focus Mode Integrated) */}
        <CorePlugins plugins={CORE_PLUGINS} />
      </main>

      {/* LUXURY COMMAND BAR */}
      <ControlFooter 
        orbState={orbState}
        userInput={userInput}
        setUserInput={setUserInput}
        onTextInput={handleTextInput}
        onToggleMic={toggleMic}
        onClearMemory={clearMemory}
      />
    </div>
  );
}

export default App;
