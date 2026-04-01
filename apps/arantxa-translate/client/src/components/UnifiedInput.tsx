import React, { useState } from 'react';
import {
  Box, Typography, TextField, IconButton, CircularProgress, Alert, Tooltip, Stack,
} from '@mui/material';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import ImageIcon from '@mui/icons-material/Image';
import { extractText } from '../api';

interface UnifiedInputProps {
  value: string;
  onChange: (val: string) => void;
  disabled?: boolean;
}

/**
 * Unified text input with document upload (serverless) and client-side OCR.
 */
const UnifiedInput: React.FC<UnifiedInputProps> = ({ value, onChange, disabled }) => {
  const [extracting, setExtracting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  /** Upload a document and extract text via the PHP gateway. */
  const handleDocumentChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setErrorMsg('');
    setExtracting(true);

    try {
      const texto = await extractText(file);
      if (texto.trim()) {
        onChange(texto);
      } else {
        setErrorMsg('No se pudo extraer texto del documento.');
      }
    } catch (err: any) {
      setErrorMsg(err?.message || 'Error desconocido al extraer texto');
    } finally {
      setExtracting(false);
      e.target.value = '';
    }
  };

  /** Client-side OCR using Tesseract.js (no server needed). */
  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setErrorMsg('');
    setExtracting(true);

    try {
      const { createWorker } = await import('tesseract.js');
      const worker = await createWorker('spa+eng', 1, { logger: () => {} });
      const { data } = await worker.recognize(file);
      await worker.terminate();

      if (data.text.trim()) {
        onChange(data.text);
      } else {
        setErrorMsg('No se pudo extraer texto de la imagen.');
      }
    } catch (err: any) {
      setErrorMsg(err?.message || 'Error en OCR de la imagen');
    } finally {
      setExtracting(false);
      e.target.value = '';
    }
  };

  return (
    <Box sx={{ position: 'relative' }}>
      <TextField
        fullWidth
        multiline
        minRows={12}
        maxRows={25}
        label="FLUJO_DE_ENTRADA_DATOS"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled || extracting}
        className="hologram-panel hologram-input"
        sx={{
          '& .MuiInputLabel-root': {
            color: 'var(--hologram-cyan)',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: 2,
            fontSize: '0.9rem',
          },
          '& .MuiOutlinedInput-root': {
            p: { xs: 2, md: 4 },
          },
        }}
      />

      {/* Floating Action Buttons */}
      <Stack
        direction="row"
        spacing={1}
        sx={{ position: 'absolute', bottom: 12, right: 12, zIndex: 1 }}
      >
        {extracting && <CircularProgress size={24} sx={{ mr: 1, alignSelf: 'center' }} />}

        <Tooltip title="Subir Documento (PDF, DOCX, TXT)">
          <IconButton
            color="primary"
            component="label"
            disabled={disabled || extracting}
            sx={{ bgcolor: 'background.paper', boxShadow: 1, '&:hover': { bgcolor: 'background.default' } }}
          >
            <input type="file" accept=".pdf,.docx,.txt" hidden onChange={handleDocumentChange} />
            <FileUploadIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="Subir Imagen (OCR Automático)">
          <IconButton
            color="secondary"
            component="label"
            disabled={disabled || extracting}
            sx={{ bgcolor: 'background.paper', boxShadow: 1, '&:hover': { bgcolor: 'background.default' } }}
          >
            <input type="file" accept="image/*" hidden onChange={handleImageChange} />
            <ImageIcon />
          </IconButton>
        </Tooltip>
      </Stack>

      {errorMsg && (
        <Alert severity="warning" sx={{ mt: 2, borderRadius: 3 }}>
          {errorMsg}
        </Alert>
      )}
    </Box>
  );
};

export default UnifiedInput;
