import React, { useState, useEffect } from 'react'
import { Circle, Star, Eye, Leaf, Home } from 'lucide-react'
import AltoContraste from './modes/ModeAltoContraste'
import Seguimiento from './modes/ModeSeguimiento'
import Enfoque from './modes/ModeEnfoque'
import Descanso from './modes/ModeDescanso'
import FormasColores from './modes/ModeFormasColores'
import ParentalLockButton from './components/ParentalLockButton'
import { useConfig } from './hooks/useConfig'
import { useTranslation } from './hooks/useTranslation'
import { requestFullscreen, exitFullscreen } from './utils/fullscreen'

export default function App() {
  const [mode, setMode] = useState(null)
  const [config] = useConfig()
  const { t } = useTranslation()

  // Handle fullscreen based on kiosk setting
  useEffect(() => {
    if (config.kiosk) {
      requestFullscreen()
    } else {
      exitFullscreen()
    }
  }, [config.kiosk])

  const gotoHome = () => setMode(null)

  const StartScreen = () => (
    <div className="vp-center" style={{ height: '100vh' }}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl px-4">
        {[
          { key: 'alto', labelKey: 'app.modes.alto', color: '#E74C3C', icon: <Circle className="w-12 h-12"/> },
          { key: 'seguimiento', labelKey: 'app.modes.seguimiento', color: '#F1C40F', icon: <Star className="w-12 h-12"/> },
          { key: 'enfoque', labelKey: 'app.modes.enfoque', color: '#3498DB', icon: <Eye className="w-12 h-12"/> },
          { key: 'descanso', labelKey: 'app.modes.descanso', color: '#2ECC71', icon: <Leaf className="w-12 h-12"/> },
          { key: 'formas', labelKey: 'app.modes.formas', color: '#F39C12', icon: <Circle className="w-12 h-12"/> },
        ].map((b, idx) => (
          <button
            key={idx}
            onClick={() => setMode(b.key)}
            className="relative rounded-3xl flex flex-col items-center justify-center h-44 md:h-60 lg:h-72 text-2xl font-bold shadow-lg not-prose"
            style={{ background: b.color, color: '#fff' }}
            aria-label={t(b.labelKey)}
          >
            {b.icon}
          </button>
        ))}
      </div>
      <div className="mt-6 text-sm text-gray-600">
        {t('app.guide')}
      </div>
      {!config.kiosk && <ParentalLockButton onExit={gotoHome} />}
    </div>
  )

  let Content
  if (mode === 'alto') Content = <AltoContraste onExit={gotoHome} />
  else if (mode === 'seguimiento') Content = <Seguimiento onExit={gotoHome} />
  else if (mode === 'enfoque') Content = <Enfoque onExit={gotoHome} />
  else if (mode === 'descanso') Content = <Descanso onExit={gotoHome} />
  else if (mode === 'formas') Content = <FormasColores onExit={gotoHome} />
  else Content = <StartScreen />

  return (
    <div className={`bg-white w-full h-full select-none ${config.reducedMotion ? 'reduce-motion' : ''} ${config.highContrast ? 'high-contrast' : ''}`} style={{ height: '100vh' }}>
      {Content}
      {!config.kiosk && mode && (
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-black/30 text-white text-sm text-center">
          VisionPlay - modo: {t(`app.modes.${mode}`)}
        </div>
      )}
    </div>
  )
}