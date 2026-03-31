const translations = {
  es: {
    app: {
      title: "VisionPlay",
      guide: "Guía de estimulación visual: Nivel Explorador (3 años)",
      modes: {
        alto: "Alto Contraste",
        seguimiento: "Seguimiento Visual",
        enfoque: "Enfoque y Acomodación",
        descanso: "Descanso Verde",
        formas: "Formas y Colores"
      },
      statistics: {
        title: "Estadísticas de Uso",
        alto: "Alto Contraste:",
        seguimiento: "Seguimiento Visual:",
        enfoque: "Enfoque y Acomodación:",
        descanso: "Descanso Verde:",
        total: "Total:",
        lastSession: "Última sesión:",
        reset: "Reiniciar",
        close: "Cerrar"
      },
      formasColores: {
        title: "Formas y Colores",
        instruction: "Toca la forma que corresponde al color mostrado",
        correct: "¡Correcto!",
        tryAgain: "Inténtalo de nuevo",
        exit: "Volver al inicio"
      },
      parentalLock: "Bloqueo parental",
      speed: "Velocidad: {speed}s"
    }
  },
  en: {
    app: {
      title: "VisionPlay",
      guide: "Visual Stimulation Guide: Explorer Level (3 years)",
      modes: {
        alto: "High Contrast",
        seguimiento: "Visual Tracking",
        enfoque: "Focus & Accommodation",
        descanso: "Green Rest",
        formas: "Shapes & Colors"
      },
      statistics: {
        title: "Usage Statistics",
        alto: "High Contrast:",
        seguimiento: "Visual Tracking:",
        enfoque: "Focus & Accommodation:",
        descanso: "Green Rest:",
        total: "Total:",
        lastSession: "Last Session:",
        reset: "Reset",
        close: "Close"
      },
      formasColores: {
        title: "Shapes & Colors",
        instruction: "Tap the shape that matches the shown color",
        correct: "Correct!",
        tryAgain: "Try Again",
        exit: "Go Home"
      },
      parentalLock: "Parental Lock",
      speed: "Speed: {speed}s"
    }
  }
};

export function useTranslation() {
  const [config] = React.useContext(ConfigContext); // We'll need to set up context
  // For simplicity, we'll read from localStorage directly in this hook
  // but to avoid circular deps, we'll just use useConfig from hooks
  // Actually, we can't call hooks here conditionally. We'll instead create a hook that uses useConfig.
  // Let's instead export a function that takes language and key and returns translation.
  // We'll create a separate hook that uses useConfig.
  // For now, we'll just use a simple approach: we'll create a hook that uses useConfig.
  // Since we can't call hooks in this file without React, we'll export a function and a hook separately.
}

// We'll create a hook in hooks/useTranslation.js