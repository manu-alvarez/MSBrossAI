import React, { useState } from 'react';
import { Grid, FormControl, InputLabel, Select, MenuItem, Button, CircularProgress, Stack, Box, Typography } from '@mui/material';
import UnifiedInput from './UnifiedInput';
import ResultPanel from './ResultPanel';
import { ProcessResult, processText, Nivel, Provider } from '../api';

interface Props {
  provider: Provider;
}

const ResumirTab: React.FC<Props> = ({ provider }) => {
  const [texto, setTexto] = useState('');
  const [nivel, setNivel] = useState('estandar');
  const [destino, setDestino] = useState('es');
  const [traducir, setTraducir] = useState(false);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ProcessResult>({ traduccion: '', resumen: '' });
  const [error, setError] = useState('');

  const handleProcesar = async () => {
    if (!texto.trim()) return;
    setLoading(true);
    setError('');
    try {
      const mode = traducir ? 'traducir_resumir' : 'resumir';
      const data = await processText({ 
        texto, 
        origen: 'auto', 
        destino, 
        modo: mode as any, 
        nivelResumen: nivel as Nivel,
        provider 
      });
      setResult({ traduccion: data.traduccion, resumen: data.resumen });
    } catch (e: any) {
      setError(e?.message || 'Error en el resumen');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box className="neural-bridge-container">
      {/* Centered Controls */}
      <Box className="hologram-panel reflector-magenta" sx={{ mb: 4, width: '100%', maxWidth: 800 }}>
        <Grid container spacing={2} alignItems="center" justifyContent="center">
          <Grid item xs={12} sm={4}>
            <FormControl fullWidth size="small">
              <InputLabel sx={{ color: 'secondary.main' }}>Nivel de Detalle</InputLabel>
              <Select label="Nivel de Detalle" value={nivel} onChange={(e) => setNivel(e.target.value)}>
                <MenuItem value="breve">🔍 Resumen Breve</MenuItem>
                <MenuItem value="estandar">⚖️ Estándar / Equilibrado</MenuItem>
                <MenuItem value="detallado">📚 Detallado / Profundo</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          
          <Grid item xs={12} sm={4}>
            <FormControl fullWidth size="small">
              <InputLabel sx={{ color: 'primary.main' }}>Traducir a...</InputLabel>
              <Select label="Traducir a..." value={destino} onChange={(e) => { setDestino(e.target.value); setTraducir(true); }}>
                <MenuItem value="es">🇪🇸 Español</MenuItem>
                <MenuItem value="en">🇺🇸 Inglés</MenuItem>
                <MenuItem value="fr">🇫🇷 Francés</MenuItem>
                <MenuItem value="pt">🇵🇹 Portugués</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Button
              variant="contained" 
              size="large" 
              fullWidth
              onClick={handleProcesar} 
              disabled={loading}
              className="btn-neural"
              sx={{ py: 1.5 }}
            >
              {loading ? <CircularProgress size={24} color="inherit" /> : 'ACTIVAR RESUMEN'}
            </Button>
          </Grid>
        </Grid>
      </Box>

      {/* Input & Results Stacked Center */}
      <Box sx={{ width: '100%', maxWidth: 1000 }}>
        <UnifiedInput value={texto} onChange={setTexto} disabled={loading} />
        <ResultPanel result={result} error={error} />
      </Box>
    </Box>
  );
};

export default ResumirTab;
