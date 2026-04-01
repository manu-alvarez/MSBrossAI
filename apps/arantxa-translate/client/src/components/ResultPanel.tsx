import React, { useRef } from 'react';
import {
  Box, Typography, Paper, IconButton, Tooltip, Zoom, Fade, Divider, Stack, Button, Alert,
} from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DownloadIcon from '@mui/icons-material/Download';
import ShareIcon from '@mui/icons-material/Share';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import ImageIcon from '@mui/icons-material/Image';
import TranslateIcon from '@mui/icons-material/Translate';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { jsPDF } from 'jspdf';
import { ProcessResult } from '../api';

interface Props {
  result: ProcessResult;
  error: string;
}

const ResultPanel: React.FC<Props> = ({ result, error }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { traduccion, resumen } = result;

  const handleCopy = async () => {
    const text = [
      traduccion ? `Traducción:\n${traduccion}` : '',
      resumen ? `Resumen:\n${resumen}` : '',
    ]
      .filter(Boolean)
      .join('\n\n');
    await navigator.clipboard.writeText(text);
  };

  const handleExportPDF = () => {
    const doc = new jsPDF({ orientation: 'p', unit: 'pt', format: 'a4' });
    const margin = 40;
    const maxWidth = 515;

    doc.setFontSize(18);
    doc.setTextColor('#01696f');
    doc.text('Resultado de traducción y resumen', margin, 50);

    let y = 90;

    if (traduccion) {
      doc.setFontSize(13);
      doc.setTextColor('#333333');
      doc.setFont('helvetica', 'bold');
      doc.text('Traducción', margin, y);
      y += 18;
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(11);
      const tradLines = doc.splitTextToSize(traduccion, maxWidth);
      doc.text(tradLines, margin, y);
      y += tradLines.length * 14 + 20;
    }

    if (resumen) {
      doc.setFontSize(13);
      doc.setTextColor('#333333');
      doc.setFont('helvetica', 'bold');
      doc.text('Resumen', margin, y);
      y += 18;
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(11);
      const resLines = doc.splitTextToSize(resumen, maxWidth);
      doc.text(resLines, margin, y);
    }

    doc.save('resultado.pdf');
  };

  const handleGenerateImage = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const W = 900;
    const H = 600;
    canvas.width = W;
    canvas.height = H;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.fillStyle = '#f7f6f2';
    ctx.fillRect(0, 0, W, H);

    ctx.fillStyle = '#01696f';
    ctx.font = 'bold 28px system-ui, sans-serif';
    ctx.fillText('Resumen', 40, 60);

    ctx.fillStyle = '#28251d';
    ctx.font = '17px system-ui, sans-serif';

    const words = (resumen || 'Sin resumen disponible').split(' ');
    let line = '';
    let y = 105;
    const maxW = 820;
    const lh = 26;

    for (const word of words) {
      const test = line + word + ' ';
      if (ctx.measureText(test).width > maxW && line) {
        ctx.fillText(line.trim(), 40, y);
        line = word + ' ';
        y += lh;
        if (y > H - 40) break;
      } else {
        line = test;
      }
    }
    ctx.fillText(line.trim(), 40, y);

    const link = document.createElement('a');
    link.download = 'resumen.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  const hasResult = !!(traduccion || resumen);

  return (
    <Box sx={{ mt: 3 }}>
      {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}

      {!hasResult && !error && (
        <Typography variant="body2" color="text.secondary">
          El resultado aparecerá aquí una vez procesado.
        </Typography>
      )}

      {traduccion && (
        <Fade in timeout={1000}>
          <Box className="hologram-panel glitch-reveal" sx={{ mb: 4 }}>
            <Typography variant="h6" sx={{ color: 'var(--hologram-cyan)', letterSpacing: 2, mb: 1, textTransform: 'uppercase' }}>
               SALIDA_DECODIFICADA
            </Typography>
            <Typography
              variant="body1"
              sx={{
                width: '100%',
                wordBreak: 'break-word',
                minHeight: { xs: 150, md: 300 },
                whiteSpace: 'pre-wrap',
                lineHeight: 1.8,
                fontSize: 'clamp(1rem, 1.5vw, 1.3rem)',
                fontFamily: "'JetBrains Mono', monospace",
                color: 'rgba(255,255,255,0.9)',
              }}
            >
              {traduccion}
            </Typography>
          </Box>
        </Fade>
      )}

      {resumen && (
        <Fade in timeout={1500}>
          <Box className="hologram-panel glitch-reveal" sx={{ mb: 4 }}>
            <Typography variant="h6" sx={{ color: 'secondary.main', letterSpacing: 2, mb: 1, textTransform: 'uppercase' }}>
              RESUMEN_EJECUTIVO
            </Typography>
            <Typography
              variant="body1"
              sx={{
                width: '100%',
                wordBreak: 'break-word',
                minHeight: { xs: 150, md: 300 },
                whiteSpace: 'pre-wrap',
                lineHeight: 1.8,
                fontSize: 'clamp(1rem, 1.5vw, 1.3rem)',
                fontFamily: "'JetBrains Mono', monospace",
                color: 'rgba(255,255,255,0.9)',
              }}
            >
              {resumen}
            </Typography>
          </Box>
        </Fade>
      )}

      {hasResult && (
        <Stack direction="row" flexWrap="wrap" gap={3} mt={4}>
          <Button 
            variant="contained" 
            size="large" 
            className="btn-beast"
            startIcon={<ContentCopyIcon />}
            onClick={handleCopy}
            sx={{ px: 5, py: 2, fontWeight: 900 }}
          >
            COPY_DATA
          </Button>
          <Button variant="outlined" size="large" className="btn-beast" startIcon={<PictureAsPdfIcon />} onClick={handleExportPDF} sx={{ px: 4 }}>
            PDF
          </Button>
          <Button variant="outlined" size="large" className="btn-beast" startIcon={<ImageIcon />} onClick={handleGenerateImage} sx={{ px: 4 }}>
            IMG
          </Button>
        </Stack>
      )}

      <canvas ref={canvasRef} style={{ display: 'none' }} />
    </Box>
  );
};

export default ResultPanel;
