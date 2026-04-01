import React, { useState } from 'react';
import { Grid, FormControl, InputLabel, Select, MenuItem, Button, CircularProgress, Stack, Box, Typography } from '@mui/material';
import UnifiedInput from './UnifiedInput';
import ResultPanel from './ResultPanel';
import { ProcessResult, processText, Modo, Provider } from '../api';

const OPCCIONES_TRADUCCION = [
  { id: 'normal', label: '🌍 Estándar / Normal' },
  { id: 'literal', label: '📖 Traducción Literal' },
  { id: 'profesional', label: '💼 Profesional / Ejecutivo' },
  { id: 'coloquial', label: '💬 Coloquial / Natural' },
];

interface Props {
  provider: Provider;
}

const TraducirTab: React.FC<Props> = ({ provider }) => {
  const [texto, setTexto] = useState('');
  const [origen, setOrigen] = useState('auto');
  const [destino, setDestino] = useState('es');
  const [modo, setModo] = useState('normal');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ProcessResult>({ traduccion: '', resumen: '' });
  const [error, setError] = useState('');

  const handleProcesar = async () => {
    if (!texto.trim()) return;
    setLoading(true);
    setError('');
    try {
      const data = await processText({ 
        texto, 
        origen, 
        destino, 
        modo: modo as Modo, 
        nivelResumen: 'normal',
        provider 
      });
      setResult({ traduccion: data.traduccion, resumen: '' });
    } catch (e: any) {
      setError(e?.message || 'Error en la traducción');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box className="neural-bridge-container">
      {/* Centered Controls */}
      <Box className="hologram-panel reflector-cyan" sx={{ mb: 4, width: '100%', maxWidth: 800 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <FormControl fullWidth size="small">
              <InputLabel sx={{ color: 'primary.main' }}>Idioma origen</InputLabel>
              <Select label="Idioma origen" value={origen} onChange={(e) => setOrigen(e.target.value)}>
                <MenuItem value="auto">🌐 Detección automática</MenuItem>
                <MenuItem value="en">🇺🇸 Inglés</MenuItem>
                <MenuItem value="es">🇪🇸 Español</MenuItem>
                <MenuItem value="fr">🇫🇷 Francés</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormControl fullWidth size="small">
              <InputLabel sx={{ color: 'primary.main' }}>Idioma destino</InputLabel>
              <Select label="Idioma destino" value={destino} onChange={(e) => setDestino(e.target.value)}>
                <MenuItem value="es">🇪🇸 Español</MenuItem>
                <MenuItem value="en">🇺🇸 Inglés</MenuItem>
                <MenuItem value="fr">🇫🇷 Francés</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormControl fullWidth size="small">
              <InputLabel sx={{ color: 'primary.main' }}>Tipo de Traducción</InputLabel>
              <Select label="Tipo de Traducción" value={modo} onChange={(e) => setModo(e.target.value)}>
                {OPCCIONES_TRADUCCION.map(o => (
                  <MenuItem key={o.id} value={o.id}>{o.label}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        
        <Box sx={{ mt: 3, textAlign: 'center' }}>
          <Button
            variant="contained" 
            size="large" 
            onClick={handleProcesar} 
            disabled={loading}
            className="btn-neural"
          >
            {loading ? <CircularProgress size={24} color="inherit" /> : 'INICIAR TRADUCCIÓN'}
          </Button>
        </Box>
      </Box>

      {/* Input & Results Stacked Center */}
      <Box sx={{ width: '100%', maxWidth: 1000 }}>
        <UnifiedInput value={texto} onChange={setTexto} disabled={loading} />
        <ResultPanel result={result} error={error} />
      </Box>
    </Box>
  );
};

export default TraducirTab;
