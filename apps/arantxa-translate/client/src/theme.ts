import { createTheme } from '@mui/material/styles';

/**
 * moko-Translate_PRO v.0 (HOLOGRAPHIC THEME)
 * High-Tech, Glassmorphism, Sophisticated Dark
 */
export const getAppTheme = () =>
  createTheme({
    typography: {
      fontFamily: '"Outfit", sans-serif',
      h1: { fontWeight: 900, textTransform: 'uppercase' },
      h2: { fontWeight: 900, textTransform: 'uppercase' },
      h3: { fontWeight: 700, textTransform: 'uppercase' },
      button: { fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px' },
    },
    palette: {
      mode: 'dark',
      primary: { main: '#6ee7b7' }, // Hologram Cyan
      secondary: { main: '#10b981' }, // Neural Indigo
      background: {
        default: '#050508',
        paper: 'transparent', // Using CSS glass panels
      },
      text: {
        primary: '#ffffff',
        secondary: 'rgba(255,255,255,0.6)',
      },
    },
    shape: { borderRadius: 20 },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 12,
            transition: 'all 0.3s cubic-bezier(0.23, 1, 0.32, 1)',
          },
        },
      },
      MuiPaper: {
        styleOverrides: { 
          root: { 
            backgroundImage: 'none',
            backgroundColor: '#0b0b10', // Ultra-Opaque
            borderRadius: 16,
          } 
        },
      },
      MuiMenu: {
        styleOverrides: {
          paper: {
            backgroundColor: 'rgba(11, 11, 16, 0.98)', // 98% Opacity
            border: '1px solid rgba(255,255,255,0.15)',
            boxShadow: '0 20px 60px rgba(0,0,0,1)',
            backdropFilter: 'none', // Disable blur for maximum clarity
          }
        }
      },
      MuiSelect: {
        styleOverrides: {
          select: {
            backgroundColor: 'rgba(255,255,255,0.08)',
            '&:focus': {
              backgroundColor: 'rgba(255,255,255,0.12)',
            }
          }
        }
      },
      MuiContainer: {
        styleOverrides: {
          root: {
            paddingLeft: '24px',
            paddingRight: '24px',
          }
        }
      }
    },
  });
