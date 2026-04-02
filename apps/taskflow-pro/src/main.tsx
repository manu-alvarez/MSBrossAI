import React, { Component, ErrorInfo, ReactNode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { theme } from './theme/theme';
import './index.css';

class ErrorBoundary extends Component<{children: ReactNode}, {hasError: boolean, error: string}> {
  constructor(props: {children: ReactNode}) {
    super(props);
    this.state = { hasError: false, error: '' };
  }
  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error: error.message };
  }
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('TaskFlowPro Error:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return React.createElement('div', { style: { padding: '2rem', color: '#fff', background: '#050505', minHeight: '100vh' } },
        React.createElement('h2', null, 'Error en TaskFlowPro'),
        React.createElement('p', null, this.state.error),
        React.createElement('button', { onClick: () => window.location.reload() }, 'Reintentar')
      );
    }
    return this.props.children;
  }
}

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </ErrorBoundary>
  </React.StrictMode>
);
