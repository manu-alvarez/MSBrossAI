import React from 'react';
import { Container, Box, Typography, Tabs, Tab, Fade } from '@mui/material';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import ConstructionIcon from '@mui/icons-material/Construction';
import TranslateIcon from '@mui/icons-material/Translate';
import TraducirTab from './components/TraducirTab';
import ResumirTab from './components/ResumirTab';
import ExtrasTab from './components/ExtrasTab';
import { Provider } from './api';

const App: React.FC = () => {
  const [tab, setTab] = React.useState(0);
  const [provider, setProvider] = React.useState<Provider>('groq');

  const PROVIDERS: { id: Provider; label: string; icon: string }[] = [
    { id: 'groq',       label: 'GROQ (Llama 3.3)',  icon: '🚀' },
    { id: 'openai',     label: 'OpenAI (GPT-4o)',    icon: '🧠' },
    { id: 'gemini',     label: 'Gemini (2.0 Flash)', icon: '🌠' },
    { id: 'openrouter', label: 'Claude (via OR)',     icon: '🎭' },
  ];

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative' }}>
      <Container maxWidth="lg" sx={{
        py: { xs: 4, md: 8 },
        px: { xs: 2, md: 4 },
        pb: { xs: 20, md: 10 },
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>

        {/* Neon Logo & Brand */}
        <Box sx={{ position: 'relative', mb: { xs: 2, md: 4 } }}>
          <Typography
            variant="h1"
            className="neural-title reflector-neon"
            data-text="Arantxa Translate PRO v3.0"
            sx={{ fontSize: { xs: '2rem', md: '3.5rem' }, textAlign: 'center' }}
          >
            Arantxa <b>Translate PRO</b> v3.0
          </Typography>
        </Box>

        {/* Global Neural Provider Selector */}
        <Box className="neural-provider-selector">
          {PROVIDERS.map((p) => (
            <Box
              key={p.id}
              className={`provider-chip ${p.id} ${provider === p.id ? 'active' : ''}`}
              onClick={() => setProvider(p.id)}
            >
              <span>{p.icon}</span> {p.label}
            </Box>
          ))}
        </Box>

        {/* Centered Main Panel Area */}
        <Box sx={{ width: '100%', maxWidth: 1000, display: 'flex', justifyContent: 'center' }}>
          <Fade in key={tab} timeout={800}>
            <Box sx={{ width: '100%' }}>
              {tab === 0 && <TraducirTab provider={provider} />}
              {tab === 1 && <ResumirTab provider={provider} />}
              {tab === 2 && <ExtrasTab provider={provider} />}
            </Box>
          </Fade>
        </Box>

        {/* Command Dock */}
        <Box className="neural-dock reflector-cyan">
          <Tabs
            value={tab}
            onChange={(_, v) => setTab(v)}
            variant="scrollable"
            scrollButtons={false}
            sx={{ '& .MuiTabs-indicator': { display: 'none' } }}
          >
            <Tab icon={<TranslateIcon />} label="TRADUCIR" />
            <Tab icon={<AutoAwesomeIcon />} label="RESUMIR" />
            <Tab icon={<ConstructionIcon />} label="EXTRAS" />
          </Tabs>
        </Box>

      </Container>
    </Box>
  );
};

export default App;
