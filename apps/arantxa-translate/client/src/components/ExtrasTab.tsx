import React, { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem, Button, CircularProgress, Stack, Box, Typography } from '@mui/material';
import UnifiedInput from './UnifiedInput';
import ResultPanel from './ResultPanel';
import { ProcessResult, Provider, processExtras } from '../api';

const HERRAMIENTAS = [
  { id: 'keywords',   label: '🏷️ Palabras Clave / Etiquetas',  desc: 'Extrae conceptos y términos clave para SEO o clasificación.' },
  { id: 'sentiment',  label: '🎭 Sentimiento y Tono',           desc: 'Analiza la actitud (positiva/negativa) y el estilo del mensaje.' },
  { id: 'entities',   label: '👥 Extracción de Entidades',      desc: 'Identifica personas, lugares, fechas y organizaciones mencionadas.' },
  { id: 'appbuilder', label: '🚀 Generador de Apps/PWA',        desc: 'Crea el código de una web o app funcional desde tu descripción.' },
];

interface Props {
  provider: Provider;
}

const ExtrasTab: React.FC<Props> = ({ provider }) => {
  const [texto, setTexto] = useState('');
  const [herramienta, setHerramienta] = useState('keywords');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ProcessResult>({ traduccion: '', resumen: '' });
  const [error, setError] = useState('');

  const handleProcesar = async () => {
    if (!texto.trim()) return;
    setLoading(true);
    setError('');

    try {
      const data = await processExtras({ texto, herramienta, provider });
      setResult({ traduccion: '', resumen: data.resultado });
    } catch (e: any) {
      setError(e?.message || 'Error desconocido');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box className="neural-bridge-container">
      <Box className="hologram-panel reflector-cyan" sx={{ mb: 4, width: '100%', maxWidth: 800 }}>
        <Stack spacing={3}>
          <FormControl fullWidth size="small">
            <InputLabel sx={{ color: 'var(--neon-cyan)' }}>Herramienta Extra</InputLabel>
            <Select
              label="Herramienta Extra"
              value={herramienta}
              onChange={(e) => setHerramienta(e.target.value)}
            >
              {HERRAMIENTAS.map((h) => (
                <MenuItem key={h.id} value={h.id}>{h.label}</MenuItem>
              ))}
            </Select>
          </FormControl>

          <Box sx={{ p: 2, background: 'rgba(255,255,255,0.03)', borderRadius: 2, border: '1px solid rgba(255,255,255,0.05)' }}>
            <Typography variant="caption" sx={{ color: 'var(--neon-cyan)', display: 'block', mb: 1, fontWeight: 700, letterSpacing: 2 }}>
              SISTEMA_CORE_INFO
            </Typography>
            <Typography variant="body2" sx={{ fontFamily: "'JetBrains Mono', monospace", opacity: 0.8 }}>
              {HERRAMIENTAS.find((h) => h.id === herramienta)?.desc}
            </Typography>
          </Box>

          <Box sx={{ textAlign: 'center' }}>
            <Button
              variant="contained"
              size="large"
              onClick={handleProcesar}
              disabled={loading}
              className="btn-neural"
            >
              {loading ? <CircularProgress size={24} color="inherit" /> : 'EJECUTAR COMANDO'}
            </Button>
          </Box>
        </Stack>
      </Box>

      <Box sx={{ width: '100%', maxWidth: 1000 }}>
        <UnifiedInput value={texto} onChange={setTexto} disabled={loading} />
        <ResultPanel result={result} error={error} />
      </Box>
    </Box>
  );
};

export default ExtrasTab;
