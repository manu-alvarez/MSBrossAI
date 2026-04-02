import { useState, useRef, useEffect, lazy, Suspense, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import NeuralOrb from './components/NeuralOrb.jsx';
import AuraBackground from './components/AuraBackground.jsx';
import './index.css';

const Orb3D = lazy(() => import('./components/Orb3D.jsx'));

// API Configuration with demo mode fallback
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api';
const API_KEY = import.meta.env.VITE_API_KEY || '';

// Demo responses when no backend available
const DEMO_RESPONSES = {
  'hola': '¡Hola! Soy IAPuta OS, tu asistente IA personal. Estoy en modo demo ya que no hay backend disponible. Puedo ayudarte con información, búsquedas, cálculos y más.',
  'hello': 'Hello! I am IAPuta OS, your personal AI assistant. I am in demo mode as no backend is available.',
  'ayuda': 'Puedo ayudarte con:\n• Búsquedas en internet\n• Análisis de imágenes\n• Ejecutar código Python\n• Gestión de correos y calendario\n• Control del sistema\n• Y mucho más...',
  'help': 'I can help with:\n• Web searches\n• Image analysis\n• Python code execution\n• Email and calendar management\n• System control\n• And much more...',
  'default': 'Entiendo tu consulta. En modo demo, mis respuestas son limitadas. Para funcionalidad completa, necesitas tener el backend corriendo (FastAPI en puerto 8000).'
};

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
  const [transcript, setTranscript] = useState(null);
  const [visionImage, setVisionImage] = useState(null);
  const [userInput, setUserInput] = useState('');
  const [useOrb3D, setUseOrb3D] = useState(true);
  const [isDemoMode, setIsDemoMode] = useState(false);
  const [backendStatus, setBackendStatus] = useState('checking');

  const audioContextRef = useRef(null);
  const analyserRef = useRef(null);
  const dataArrayRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const chunksRef = useRef([]);

  // Check backend availability
  useEffect(() => {
    const checkBackend = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/status`, {
          signal: AbortSignal.timeout(3000)
        });
        if (res.ok) {
          setBackendStatus('connected');
          setIsDemoMode(false);
        } else {
          setBackendStatus('error');
          setIsDemoMode(true);
        }
      } catch (err) {
        setBackendStatus('unavailable');
        setIsDemoMode(true);
      }
    };
    checkBackend();
    const interval = setInterval(checkBackend, 30000);
    return () => clearInterval(interval);
  }, []);

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
          setVolume(vol / 255);
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
      setTranscript({ type: 'error', text: `FALLO DE CONEXIÓN: ${err.message}` });
      setTimeout(() => setOrbState('ready'), 5000);
    }
  };

  const captureWebcam = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      const video = document.createElement('video');
      video.srcObject = stream;
      await video.play();
      
      const canvas = document.createElement('canvas');
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      canvas.getContext('2d').drawImage(video, 0, 0);
      stream.getTracks().forEach(t => t.stop());
      
      const base64 = canvas.toDataURL('image/jpeg').split(',')[1];
      setVisionImage(canvas.toDataURL('image/jpeg'));
      sendCommand('/vision-analyze', JSON.stringify({ image: base64, source: 'webcam' }));
    } catch (err) {
      setTranscript({ type: 'error', text: 'CÁMARA NO DISPONIBLE: ' + err.message });
      setOrbState('ready');
    }
  };

  const captureScreenshot = async () => {
    try {
      const stream = await navigator.mediaDevices.getDisplayMedia({ video: true });
      const video = document.createElement('video');
      video.srcObject = stream;
      await video.play();
      
      const canvas = document.createElement('canvas');
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      canvas.getContext('2d').drawImage(video, 0, 0);
      stream.getTracks().forEach(t => t.stop());
      
      const base64 = canvas.toDataURL('image/jpeg').split(',')[1];
      setVisionImage(canvas.toDataURL('image/jpeg'));
      sendCommand('/vision-analyze', JSON.stringify({ image: base64, source: 'screenshot' }));
    } catch (err) {
      setTranscript({ type: 'error', text: 'CAPTURA CANCELADA: ' + err.message });
      setOrbState('ready');
    }
  };

  const handleTextInput = (text) => {
    if (!text.trim()) return;
    setUserInput('');
    setTranscript({ type: 'user', text: text });
    
    // Check for tool commands
    if (text.toLowerCase().includes('captura') || text.toLowerCase().includes('screenshot')) {
      setTranscript({ type: 'system', text: '◈ INICIANDO CAPTURA...' });
      captureScreenshot();
      return;
    }
    if (text.toLowerCase().includes('cámara') || text.toLowerCase().includes('webcam')) {
      setTranscript({ type: 'system', text: '◈ ACTIVANDO CÁMARA...' });
      captureWebcam();
      return;
    }
    
    if (isDemoMode) {
      // Demo mode - find matching response
      const lowerText = text.toLowerCase();
      let response = DEMO_RESPONSES.default;
      for (const [key, value] of Object.entries(DEMO_RESPONSES)) {
        if (lowerText.includes(key)) {
          response = value;
          break;
        }
      }
      setOrbState('processing');
      setTimeout(() => {
        setOrbState('speaking');
        setTranscript({ type: 'bot', text: response });
        setTimeout(() => setOrbState('ready'), 2000);
      }, 1000);
    } else {
      sendCommand('/text-command', JSON.stringify({ text }));
    }
  };

  const handleVoiceInput = async () => {
    try {
      initAudio();
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);
      chunksRef.current = [];
      
      mediaRecorderRef.current.ondataavailable = (e) => {
        if (e.data.size > 0) chunksRef.current.push(e.data);
      };
      
      mediaRecorderRef.current.onstop = async () => {
        stream.getTracks().forEach(t => t.stop());
        setOrbState('processing');
        const blob = new Blob(chunksRef.current, { type: 'audio/webm' });
        
        if (isDemoMode) {
          setOrbState('speaking');
          setTranscript({ type: 'bot', text: '¡Voz capturada! En modo demo, el audio se procesa localmente. Para transcripción completa, necesitas el backend.' });
          setTimeout(() => setOrbState('ready'), 3000);
        } else {
          const formData = new FormData();
          formData.append('audio_file', blob, 'audio.webm');
          sendCommand('/voice-command', formData, false);
        }
      };
      
      mediaRecorderRef.current.start();
      setOrbState('listening');
      
      // Auto-stop after 10 seconds
      setTimeout(() => {
        if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
          mediaRecorderRef.current.stop();
        }
      }, 10000);
    } catch (err) {
      setTranscript({ type: 'error', text: 'MICRÓFONO NO DISPONIBLE: ' + err.message });
      setOrbState('ready');
    }
  };

  const handleToggleMicrophone = () => {
    if (orbState === 'listening') {
      if (mediaRecorderRef.current) mediaRecorderRef.current.stop();
    } else {
      handleVoiceInput();
    }
  };

  const handleClearMemory = async () => {
    if (isDemoMode) {
      setTranscript({ type: 'system', text: '◈ MEMORIA LIMPIADA (MODO DEMO)' });
      return;
    }
    try {
      await fetch(`${API_BASE_URL}/clear-memory`, { 
        method: 'POST', 
        headers: { 'x-api-key': API_KEY } 
      });
      setTranscript({ type: 'system', text: '◈ MEMORIA NEURONAL LIMPIADA' });
    } catch (err) {
      setTranscript({ type: 'error', text: 'Error al limpiar memoria.' });
    }
  };

  const handlePluginAction = (tool) => {
    if (tool.action === 'screenshot') {
      setTranscript({ type: 'system', text: '◈ CAPTURANDO PANTALLA...' });
      captureScreenshot();
    } else if (tool.action === 'webcam') {
      setTranscript({ type: 'system', text: '◈ ACTIVANDO CÁMARA...' });
      captureWebcam();
    } else if (tool.cmd) {
      handleTextInput(tool.cmd);
    }
  };

  return (
    <div className="luxury-layout">
      <header className="luxury-header relative z-[100]">
        <div className="flex flex-col">
          <span className="text-[10px] tracking-[0.5em] text-white/30 font-black uppercase">
            {isDemoMode ? 'MODO DEMO' : 'SISTEMA ACTIVO'}
          </span>
          <span className="text-xs font-mono text-accent-cyan/80 mt-1">
            {formatTime(currentTime)}
          </span>
        </div>
        <div className="flex flex-col items-end">
          <span className="text-[10px] tracking-[0.2em] text-white/30 uppercase">{formatDate(currentTime)}</span>
          <span className="text-[10px] font-mono text-white/20 mt-1 tracking-tighter">NODO: IAPUTA_V3.0</span>
        </div>
      </header>

      <main className="luxury-main">
        <SidePanel tools={TOOLS} onAction={handlePluginAction} />
        
        <div className="relative flex flex-col items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={orbState}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
            >
              {useOrb3D ? (
                <Suspense fallback={<NeuralOrb state={orbState} volume={volume} />}>
                  <Orb3D state={orbState} volume={volume} />
                </Suspense>
              ) : (
                <NeuralOrb state={orbState} volume={volume} />
              )}
            </motion.div>
          </AnimatePresence>

          <div className="text-center mt-12 z-50">
            <h1 className="luxury-title select-none">
              IAPUTA<span className="text-accent-cyan"> OS</span>
            </h1>
            <div className="flex items-center justify-center gap-3 mt-4">
              <div className="h-[1px] w-8 bg-white/10" />
              <div className="text-[10px] text-white/30 tracking-[0.6em] font-black uppercase">
                {isDemoMode ? 'DEMO MODE' : 'CORE INSTALLED'}
              </div>
              <div className="h-[1px] w-8 bg-white/10" />
            </div>
          </div>

          <AnimatePresence>
            {(transcript || visionImage) && (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5 }}
                className="absolute -bottom-32 w-full max-w-lg z-[200]"
              >
                <div className="glass-card glow-border p-5 shadow-2xl">
                  {visionImage && (
                    <div className="mb-4 rounded-xl overflow-hidden border border-white/10 shadow-lg">
                      <img src={visionImage} alt="Vision" className="w-full h-auto" />
                    </div>
                  )}
                  {transcript && (
                    <div className="flex items-start gap-4">
                      <div className={`w-1 h-10 rounded-full mt-1 ${transcript.type === 'user' ? 'bg-accent-cyan' : 'bg-accent-purple'}`} />
                      <div>
                        <span className="text-[9px] font-black tracking-[0.3em] text-white/20 uppercase">
                          {transcript.type === 'user' ? 'USUARIO' : transcript.type === 'system' ? 'SISTEMA' : transcript.type === 'error' ? 'ERROR' : 'IAPUTA'}
                        </span>
                        <p className="text-sm text-white/80 leading-relaxed mt-1">
                          {transcript.text}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      <ControlFooter
        orbState={orbState}
        userInput={userInput}
        setUserInput={setUserInput}
        onTextInput={handleTextInput}
        onToggleMic={handleToggleMicrophone}
        onClearMemory={handleClearMemory}
      />

      <AuraBackground />
    </div>
  );
}

export default App;
