import { useState, useCallback } from 'react'
import {
  AppBar, Toolbar, Container, Box, Typography, TextField, Button,
  Chip, Card, Snackbar, Alert, Tooltip,
  Stepper, Step, StepLabel, Stack, Fade, Tabs, Tab,
} from '@mui/material'
import {
  Anchor as AnchorIcon,
  Search as SearchIcon,
  AutoAwesome as SparklesIcon,
  ArrowBack as ArrowBackIcon,
  DirectionsBoat as ShipIcon,
  AttachMoney as DollarIcon,
  Group as UsersIcon,
  Shield as ShieldIcon,
  CheckCircle as CheckIcon,
  Wifi as WifiIcon,
  History as HistoryIcon,
  LocalShipping as TruckIcon,
  Gavel as GavelIcon,
  School as ExpertIcon,
  Public as GlobeIcon,
} from '@mui/icons-material'
import { motion, AnimatePresence } from 'framer-motion'
import ResultsView from './components/ResultsView'
import RfqDialog from './components/RfqDialog'
import SearchHistory from './components/SearchHistory'
import CostCalculator from './components/CostCalculator'
import { saveSearch, saveRFQ } from './lib/supabase'
import { searchFreightRates, searchCustomsRequirements } from './services/tavily'
import { analyzeRoute, compareCarriers, generateCustomRFQ, analyzeRegulations, askExpert, askGeneral } from './services/gemini'

// Motion-wrapped MUI components
const MotionBox = motion.create(Box)

// Steps for the loading stepper
const SEARCH_STEPS = [
  'Analizando consulta',
  'Buscando rutas y tarifas',
  'Consultando regulaciones',
  'Comparando transportistas',
  'Generando análisis completo',
]

// Quick search examples — include national + international
const QUICK_EXAMPLES = [
  { label: 'Shenzhen → Barcelona marítimo', category: 'Internacional' },
  { label: 'Madrid → París terrestre', category: 'Europa' },
  { label: 'Barcelona → Valencia terrestre', category: 'Nacional' },
  { label: 'Mumbai → Rotterdam aéreo', category: 'Internacional' },
  { label: 'Normativa ADR transporte mercancías peligrosas', category: 'Normativa' },
  { label: 'Shanghai → Los Angeles 40HC', category: 'Internacional' },
]

// Feature highlights
const FEATURES = [
  { icon: ShipIcon, label: 'Rutas óptimas', desc: 'Nacional e internacional' },
  { icon: DollarIcon, label: 'Costos reales', desc: 'Datos de mercado actuales' },
  { icon: UsersIcon, label: 'Transportistas', desc: 'Comparación en tiempo real' },
  { icon: ShieldIcon, label: 'Cumplimiento', desc: 'Normativa vigente' },
  { icon: TruckIcon, label: 'Multimodal', desc: 'Mar, aire y tierra' },
  { icon: GavelIcon, label: 'Documentación', desc: 'RFQ y docs legales' },
]

// Parse natural language query to extract origin, destination, mode
const parseQuery = (text: string) => {
  const lower = text.toLowerCase()

  // Detect transport mode
  let mode: 'mar' | 'aire' | 'tierra' = 'mar'
  if (lower.includes('aéreo') || lower.includes('avión') || lower.includes('air') || lower.includes('fly')) {
    mode = 'aire'
  } else if (lower.includes('terrestre') || lower.includes('camión') || lower.includes('truck') || lower.includes('tren') || lower.includes('carretera') || lower.includes('road') || lower.includes('furgoneta')) {
    mode = 'tierra'
  }

  // Extract origin and destination
  let origin = ''
  let destination = ''

  // Pattern: "de X a Y" or "from X to Y"
  const deMatch = lower.match(/de\s+([a-záéíóúñü\s,]+?)\s+a\s+([a-záéíóúñü\s,]+?)(?:\s+por|\s+en|\s+vía|\s+marítimo|\s+aéreo|\s+terrestre|$)/i)
  const fromMatch = lower.match(/from\s+([a-z\s,]+?)\s+to\s+([a-z\s,]+?)(?:\s+by|\s+via|$)/i)

  if (deMatch) {
    origin = deMatch[1].trim()
    destination = deMatch[2].trim()
  } else if (fromMatch) {
    origin = fromMatch[1].trim()
    destination = fromMatch[2].trim()
  } else {
    // Arrow pattern: "X → Y" or "X -> Y" or "X - Y"
    const arrowMatch = text.match(/^([^→\->]+?)\s*[→\->]+\s*(.+?)(?:\s+(?:por|marítimo|mar|aéreo|terrestre|air|sea|road|truck)\s*.*)?$/i)
    if (arrowMatch) {
      origin = arrowMatch[1].trim()
      destination = arrowMatch[2].trim()
    }
  }

  return { origin: origin || 'Origen', destination: destination || 'Destino', mode }
}

// Result interface
interface SearchResults {
  route: Record<string, unknown> | null
  carriers: Record<string, unknown>[]
  regulations: Record<string, unknown> | null
  webData: {
    freightData: Record<string, unknown> | null
    customsData: Record<string, unknown> | null
  }
  rfq: string | null
  expertData: string | null
}

function App() {
  const [query, setQuery] = useState('')
  const [searchMode, setSearchMode] = useState<'route' | 'expert' | 'general'>('route')
  const [isLoading, setIsLoading] = useState(false)
  const [activeStep, setActiveStep] = useState(0)
  const [hasSearched, setHasSearched] = useState(false)
  const [searchResults, setSearchResults] = useState<SearchResults | null>(null)
  const [showRFQ, setShowRFQ] = useState(false)
  const [showHistory, setShowHistory] = useState(false)
  const [savedToDB, setSavedToDB] = useState(false)
  const [lastSearchId, setLastSearchId] = useState<number | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [successMsg, setSuccessMsg] = useState<string | null>(null)

  const handleSearch = useCallback(async () => {
    if (!query.trim()) return

    setIsLoading(true)
    setActiveStep(0)
    setSavedToDB(false)
    setLastSearchId(null)
    setError(null)

    const { origin, destination, mode } = parseQuery(query)

    try {
      if (searchMode === 'expert' || searchMode === 'general') {
        setActiveStep(2)
        const expertResult = searchMode === 'expert' ? await askExpert(query) : await askGeneral(query)
        setActiveStep(4)

        setSearchResults({
          route: null, carriers: [], regulations: null, webData: { freightData: null, customsData: null }, rfq: null,
          expertData: expertResult
        })
        setHasSearched(true)
        
        saveSearch({
          origin: 'N/A', destination: 'N/A', transport_mode: searchMode as any,
          results: { expertData: expertResult },
        }).then((saved) => {
          setSavedToDB(true)
          if (saved?.id) setLastSearchId(saved.id)
        }).catch(() => { /* silently fail */ })

      } else {
        // Step 1: Parse query (instant)
        setActiveStep(1)

        // Steps 2-4: Parallel API calls (route, freight, customs, regulations, carriers)
        const [routeResult, freightResult, customsResult, regulationsResult, carriersResult] = await Promise.allSettled([
          analyzeRoute(origin, destination, mode, query),
          searchFreightRates(origin, destination, mode),
          searchCustomsRequirements(origin, destination),
          analyzeRegulations(origin, destination),
          compareCarriers(origin, destination, mode),
        ])
        setActiveStep(4)

        // Step 5: Generate RFQ (also wrapped to not crash on failure)
        let rfqText: string | null = null
        try {
          rfqText = await generateCustomRFQ(origin, destination, mode, query)
        } catch {
          console.warn('RFQ generation failed, continuing with other results')
        }
        setActiveStep(5)

        // Extract results (handle failures gracefully)
        const routeAnalysis = routeResult.status === 'fulfilled' ? routeResult.value : null
        const freightData = freightResult.status === 'fulfilled' ? freightResult.value : null
        const customsData = customsResult.status === 'fulfilled' ? customsResult.value : null
        const regulations = regulationsResult.status === 'fulfilled' ? regulationsResult.value : null
        const carriers = carriersResult.status === 'fulfilled' ? carriersResult.value : null

        // Count failures for user feedback
        const failedApis = [routeResult, freightResult, customsResult, regulationsResult, carriersResult]
          .filter(r => r.status === 'rejected').length
        const hasAnyData = routeAnalysis || freightData || customsData || regulations || carriers || rfqText

        if (!hasAnyData) {
          setError('No se pudieron obtener datos. Las APIs podrían estar saturadas. Inténtalo de nuevo en unos segundos.')
        } else if (failedApis > 0) {
          setError(`${failedApis} de 5 fuentes no respondieron. Los resultados pueden estar incompletos.`)
        }

        // Save to Supabase (non-blocking)
        saveSearch({
          origin,
          destination,
          transport_mode: mode,
          results: { routeAnalysis, freightData, customsData, regulations, carriers },
        }).then((saved) => {
          setSavedToDB(true)
          if (saved?.id) setLastSearchId(saved.id)
        }).catch(() => { /* silently fail */ })

        setSearchResults({
          route: routeAnalysis,
          carriers: carriers || [],
          regulations,
          webData: { freightData: freightData as unknown as Record<string, unknown> | null, customsData: customsData as unknown as Record<string, unknown> | null },
          rfq: rfqText,
          expertData: null,
        })

        // Show results even with partial data
        if (hasAnyData) {
          setHasSearched(true)
        }
      }
    } catch (err) {
      console.error('Search error:', err)
      setError('Error inesperado al procesar la búsqueda. Por favor, inténtalo de nuevo.')
    } finally {
      setIsLoading(false)
    }
  }, [query])

  const handleNewSearch = useCallback(() => {
    setHasSearched(false)
    setSearchResults(null)
    setQuery('')
    setSavedToDB(false)
    setLastSearchId(null)
    setActiveStep(0)
  }, [])

  const handleHistorySelect = useCallback((selectedQuery: string) => {
    setQuery(selectedQuery)
    // Auto-search after selecting from history
    setTimeout(() => {
      setQuery(selectedQuery)
    }, 100)
  }, [])

  const handleSaveRFQ = useCallback(async () => {
    if (!searchResults?.rfq || !lastSearchId) return
    const parsed = parseQuery(query)
    try {
      await saveRFQ({
        search_query_id: lastSearchId,
        origin: parsed.origin,
        destination: parsed.destination,
        transport_mode: parsed.mode,
        cargo_details: query,
        status: 'pending',
      })
      setSuccessMsg('RFQ guardado correctamente')
    } catch {
      setError('Error al guardar el RFQ')
    }
  }, [searchResults, lastSearchId, query])

  const parsed = hasSearched ? parseQuery(query) : null

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* AppBar */}
      <AppBar position="sticky">
        <Toolbar sx={{ maxWidth: 1200, width: '100%', mx: 'auto', px: { xs: 2, md: 3 } }}>
          <Box
            sx={{
              width: 40, height: 40, borderRadius: 2.5,
              background: 'linear-gradient(135deg, #00B4D8, #0096C7)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              mr: 1.5,
            }}
          >
            <AnchorIcon sx={{ fontSize: 22, color: 'white' }} />
          </Box>
          <Typography variant="h6" sx={{ fontWeight: 800, color: 'white', flexGrow: 0 }}>
            LogiSearch
          </Typography>
          <Chip
            label="AI"
            size="small"
            color="primary"
            sx={{ ml: 1, fontWeight: 700, fontSize: '0.65rem', height: 22 }}
          />
          <Box sx={{ flexGrow: 1 }} />

          {/* History button */}
          <Tooltip title="Historial de búsquedas">
            <Button
              startIcon={<HistoryIcon />}
              onClick={() => setShowHistory(true)}
              sx={{ color: 'text.secondary', '&:hover': { color: 'white' }, mr: 1 }}
              size="small"
            >
              Historial
            </Button>
          </Tooltip>

          {hasSearched && (
            <Button
              startIcon={<ArrowBackIcon />}
              onClick={handleNewSearch}
              sx={{ color: 'text.secondary', '&:hover': { color: 'white' } }}
            >
              Nueva búsqueda
            </Button>
          )}
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ flex: 1, py: { xs: 4, md: 8 } }}>
        <AnimatePresence mode="wait">
          {!hasSearched ? (
            // ─── SEARCH VIEW ───
            <MotionBox
              key="search"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <Stack spacing={5} alignItems="center">
                {/* Hero */}
                <Box sx={{ textAlign: 'center', maxWidth: 750, mx: 'auto' }}>
                  <Typography
                    variant="h1"
                    sx={{
                      fontSize: { xs: '2rem', sm: '2.75rem', md: '3.25rem' },
                      mb: 2,
                    }}
                  >
                    Tu buscador{' '}
                    <Box component="span" className="text-gradient">
                      logístico
                    </Box>
                    {' '}inteligente
                  </Typography>
                  <Typography variant="subtitle1" sx={{ fontSize: { xs: '1rem', md: '1.15rem' } }}>
                    Rutas nacionales e internacionales, costos, normativa y documentación — todo con IA en tiempo real
                  </Typography>
                </Box>

                {/* Search Box */}
                <Card
                  sx={{
                    width: '100%',
                    maxWidth: 720,
                    p: 0,
                    border: '1px solid',
                    borderColor: isLoading ? 'primary.main' : 'divider',
                    transition: 'border-color 0.3s',
                    overflow: 'hidden'
                  }}
                  className={isLoading ? 'pulse-glow' : ''}
                >
                  <Tabs 
                    value={searchMode} 
                    onChange={(_, v) => setSearchMode(v)} 
                    variant="fullWidth"
                    sx={{ borderBottom: 1, borderColor: 'divider', bgcolor: 'background.paper' }}
                  >
                    <Tab 
                      icon={<ShipIcon sx={{ fontSize: 18 }} />} 
                      iconPosition="start" 
                      label="Ruta Logística" 
                      value="route" 
                    />
                    <Tab 
                      icon={<ExpertIcon sx={{ fontSize: 18 }} />} 
                      iconPosition="start" 
                      label="Consulta Experta" 
                      value="expert" 
                    />
                    <Tab 
                      icon={<GlobeIcon sx={{ fontSize: 18 }} />} 
                      iconPosition="start" 
                      label="Búsqueda General" 
                      value="general" 
                    />
                  </Tabs>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, p: 1 }}>
                    <Box
                      sx={{
                        width: 48, height: 48, borderRadius: 2.5,
                        bgcolor: searchMode === 'route' ? 'rgba(0, 229, 255, 0.12)' : (searchMode === 'expert' ? 'rgba(139, 92, 246, 0.12)' : 'rgba(52, 211, 153, 0.12)'),
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        flexShrink: 0, ml: 1,
                        transition: 'all 0.3s'
                      }}
                    >
                      {searchMode === 'route' ? (
                        <SparklesIcon sx={{ color: 'primary.main' }} />
                      ) : (searchMode === 'expert' ? (
                        <ExpertIcon sx={{ color: '#A78BFA' }} />
                      ) : (
                        <GlobeIcon sx={{ color: '#34D399' }} />
                      ))}
                    </Box>
                    <TextField
                      fullWidth
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                      placeholder={
                        searchMode === 'route' 
                          ? "Ej: Madrid a Barcelona terrestre..." 
                          : (searchMode === 'expert' 
                              ? "Consulta leyes, tiempos aduaneros, navieras..."
                              : "Haz cualquier otra consulta externa o genérica...")
                      }
                      disabled={isLoading}
                      variant="standard"
                      InputProps={{
                        disableUnderline: true,
                        sx: { fontSize: '1.05rem', py: 1.5, px: 1 },
                      }}
                    />
                    <Button
                      variant="contained"
                      onClick={handleSearch}
                      disabled={isLoading || !query.trim()}
                      sx={{ 
                        minWidth: 120, 
                        py: 1.5,
                        ...(searchMode === 'expert' && {
                          background: 'linear-gradient(135deg, #8B5CF6, #6D28D9)',
                          color: 'white',
                          '&:hover': { background: 'linear-gradient(135deg, #A78BFA, #8B5CF6)' }
                        }),
                        ...(searchMode === 'general' && {
                          background: 'linear-gradient(135deg, #10B981, #059669)',
                          color: 'white',
                          '&:hover': { background: 'linear-gradient(135deg, #34D399, #10B981)' }
                        })
                      }}
                      startIcon={isLoading ? undefined : <SearchIcon />}
                    >
                      {isLoading ? '...' : searchMode === 'route' ? 'Cotizar' : 'Consultar'}
                    </Button>
                  </Box>
                </Card>

                {/* Loading Stepper */}
                <Fade in={isLoading} unmountOnExit>
                  <Card sx={{ width: '100%', maxWidth: 650, p: 3 }}>
                    <Stepper activeStep={activeStep} alternativeLabel>
                      {SEARCH_STEPS.map((label) => (
                        <Step key={label}>
                          <StepLabel
                            sx={{
                              '& .MuiStepLabel-label': {
                                fontSize: '0.72rem',
                                mt: 0.5,
                              },
                            }}
                          >
                            {label}
                          </StepLabel>
                        </Step>
                      ))}
                    </Stepper>
                  </Card>
                </Fade>

                {/* Quick Examples */}
                {!isLoading && (
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="caption" sx={{ color: 'text.disabled', mb: 2, display: 'block' }}>
                      Prueba con estos ejemplos
                    </Typography>
                    <Stack direction="row" flexWrap="wrap" justifyContent="center" gap={1}>
                      {QUICK_EXAMPLES.map((example) => (
                        <Chip
                          key={example.label}
                          label={example.label}
                          variant="outlined"
                          size="small"
                          onClick={() => setQuery(example.label)}
                          sx={{
                            borderColor: 'rgba(255,255,255,0.1)',
                            color: 'text.secondary',
                            '&:hover': { borderColor: 'primary.main', color: 'primary.light' },
                            transition: 'all 0.2s',
                            cursor: 'pointer',
                            mb: 0.5,
                          }}
                        />
                      ))}
                    </Stack>
                  </Box>
                )}

                {/* Features Grid */}
                {!isLoading && (
                  <Box
                    sx={{
                      display: 'grid',
                      gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(3, 1fr)', md: 'repeat(6, 1fr)' },
                      gap: 2,
                      width: '100%',
                      pt: 4,
                    }}
                  >
                    {FEATURES.map((feature, idx) => (
                      <MotionBox
                        key={feature.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.08, duration: 0.4 }}
                      >
                        <Card
                          sx={{
                            p: 2.5,
                            textAlign: 'center',
                            '&:hover': {
                              borderColor: 'rgba(0, 180, 216, 0.3)',
                              transform: 'translateY(-4px)',
                              boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                            },
                          }}
                        >
                          <feature.icon sx={{ fontSize: 28, color: 'primary.main', mb: 1 }} />
                          <Typography variant="caption" sx={{ fontWeight: 600, color: 'white', display: 'block' }}>
                            {feature.label}
                          </Typography>
                          <Typography variant="caption" sx={{ color: 'text.secondary', fontSize: '0.65rem' }}>
                            {feature.desc}
                          </Typography>
                        </Card>
                      </MotionBox>
                    ))}
                  </Box>
                )}

                {/* Integration of Cost Calculator on Home Screen below features */}
                {!isLoading && (
                  <MotionBox
                    key="home-calculator"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.4 }}
                    sx={{ width: '100%', mt: 4 }}
                  >
                     <CostCalculator defaultMode="mar" />
                  </MotionBox>
                )}
              </Stack>
            </MotionBox>
          ) : (
            // ─── RESULTS VIEW ───
            <MotionBox
              key="results"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {/* Query Summary Bar */}
              <Card sx={{ p: 2, mb: 3, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 1 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <SparklesIcon sx={{ color: 'primary.main' }} />
                  <Typography sx={{ color: 'white', fontWeight: 500 }}>{query}</Typography>
                </Box>
                <Stack direction="row" spacing={1}>
                  {savedToDB && (
                    <Chip
                      icon={<CheckIcon sx={{ fontSize: 16 }} />}
                      label="Guardado"
                      color="success"
                      size="small"
                    />
                  )}
                </Stack>
              </Card>

              {/* Results Component */}
              {parsed && (
                <ResultsView
                  origin={parsed.origin}
                  destination={parsed.destination}
                  mode={parsed.mode}
                  searchMode={searchMode}
                  onGenerateRFQ={() => setShowRFQ(true)}
                  aiResults={searchResults ?? undefined}
                />
              )}
            </MotionBox>
          )}
        </AnimatePresence>
      </Container>

      {/* Footer */}
      <Box
        component="footer"
        sx={{
          borderTop: '1px solid',
          borderColor: 'divider',
          py: 3,
          mt: 'auto',
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <AnchorIcon sx={{ fontSize: 18, color: 'text.disabled' }} />
              <Typography variant="caption" sx={{ color: 'text.disabled' }}>
                LogiSearch AI © 2026 — Datos en tiempo real
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <WifiIcon sx={{ fontSize: 14, color: 'primary.main' }} />
              <Typography variant="caption" sx={{ color: 'text.disabled' }}>
                Gemini 2.0 + Tavily + Supabase
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Search History Drawer */}
      <SearchHistory
        open={showHistory}
        onClose={() => setShowHistory(false)}
        onSelectSearch={handleHistorySelect}
      />

      {/* RFQ Dialog */}
      <RfqDialog
        open={showRFQ}
        onClose={() => setShowRFQ(false)}
        content={searchResults?.rfq || ''}
        onSave={handleSaveRFQ}
        canSave={!!lastSearchId}
        origin={parsed?.origin}
        destination={parsed?.destination}
        mode={parsed?.mode}
      />

      {/* Error Snackbar */}
      <Snackbar open={!!error} autoHideDuration={6000} onClose={() => setError(null)}>
        <Alert severity="error" onClose={() => setError(null)} variant="filled" sx={{ width: '100%' }}>
          {error}
        </Alert>
      </Snackbar>

      {/* Success Snackbar */}
      <Snackbar open={!!successMsg} autoHideDuration={4000} onClose={() => setSuccessMsg(null)}>
        <Alert severity="success" onClose={() => setSuccessMsg(null)} variant="filled" sx={{ width: '100%' }}>
          {successMsg}
        </Alert>
      </Snackbar>
    </Box>
  )
}

export default App
