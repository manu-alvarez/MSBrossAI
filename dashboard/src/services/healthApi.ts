export interface AppStatus {
  name: string;
  url: string;
  status: 'online' | 'offline' | 'error' | 'checking';
  responseTime?: number;
  lastChecked?: string;
  error?: string;
}

const APPS: { name: string; healthUrl: string; appUrl: string }[] = [
  {
    name: 'IAPuta OS',
    healthUrl: '/api/health',
    appUrl: 'https://msbross.me/iaputa/',
  },
  {
    name: 'LIVEKIT Nikolina',
    healthUrl: '/api/health',
    appUrl: 'https://msbross.me/nikolina/',
  },
  {
    name: 'Arantxa Translate',
    healthUrl: '/health',
    appUrl: 'https://msbross.me/traductor/',
  },
  {
    name: 'TaskFlowPro',
    healthUrl: '/health',
    appUrl: 'https://msbross.me/taskflow/',
  },
  {
    name: 'DOHLER',
    healthUrl: '/health',
    appUrl: 'https://msbross.me/dohler/',
  },
  {
    name: 'LogiSearch',
    healthUrl: '/health',
    appUrl: 'https://msbross.me/logisearch/',
  },
  {
    name: 'Edelweiss',
    healthUrl: '/health',
    appUrl: 'https://msbross.me/edelweiss/',
  },
  {
    name: 'Moko-Tools',
    healthUrl: '/health',
    appUrl: 'https://msbross.me/moko/',
  },
  {
    name: 'CombiPro',
    healthUrl: '/health',
    appUrl: 'https://msbross.me/combipro/',
  },
];

export async function checkAppHealth(app: typeof APPS[0]): Promise<AppStatus> {
  const start = performance.now();
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);

    const response = await fetch(app.healthUrl, {
      method: 'GET',
      signal: controller.signal,
      mode: 'no-cors',
    });

    clearTimeout(timeoutId);
    const responseTime = Math.round(performance.now() - start);

    return {
      name: app.name,
      url: app.appUrl,
      status: 'online',
      responseTime,
      lastChecked: new Date().toISOString(),
    };
  } catch (error) {
    const responseTime = Math.round(performance.now() - start);
    return {
      name: app.name,
      url: app.appUrl,
      status: 'offline',
      responseTime,
      lastChecked: new Date().toISOString(),
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

export async function checkAllAppsHealth(): Promise<AppStatus[]> {
  return Promise.all(APPS.map(checkAppHealth));
}
