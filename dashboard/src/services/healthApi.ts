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
    name: 'IAPuta OS (Backend Local)',
    healthUrl: 'http://localhost:8000/health',
    appUrl: 'https://msbross.me/iaputa/',
  },
  {
    name: 'LIVEKIT Nikolina (Backend Local)',
    healthUrl: 'http://localhost:8001/api/health',
    appUrl: 'https://msbross.me/nikolina/',
  },
  {
    name: 'Arantxa Translate (Backend Local)',
    healthUrl: 'http://localhost:3001/health',
    appUrl: 'https://msbross.me/traductor/',
  },
  {
    name: 'DOHLER (Backend Local)',
    healthUrl: 'http://localhost:8002/health',
    appUrl: 'https://msbross.me/dohler/',
  },
  {
    name: 'TaskFlowPro (Estático)',
    healthUrl: 'https://msbross.me/taskflow/',
    appUrl: 'https://msbross.me/taskflow/',
  },
  {
    name: 'LogiSearch (Estático)',
    healthUrl: 'https://msbross.me/logisearch/',
    appUrl: 'https://msbross.me/logisearch/',
  },
  {
    name: 'Edelweiss (Estático)',
    healthUrl: 'https://msbross.me/edelweiss/',
    appUrl: 'https://msbross.me/edelweiss/',
  },
  {
    name: 'Moko-Tools (Estático)',
    healthUrl: 'https://msbross.me/moko/',
    appUrl: 'https://msbross.me/moko/',
  },
  {
    name: 'CombiPro (Estático)',
    healthUrl: 'https://msbross.me/combipro/',
    appUrl: 'https://msbross.me/combipro/',
  },
];

export async function checkAppHealth(app: typeof APPS[0]): Promise<AppStatus> {
  const start = performance.now();
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2000); // Fast timeout

    // We use mode: 'no-cors' so we don't get blocked by localhost ports from https://
    // the catch here is that no-cors always returns an opaque response (status 0).
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
