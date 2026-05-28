import fs from 'fs/promises';
import path from 'path';

const APPS_DIR = path.resolve(process.cwd(), 'apps');
const WWW_DIR = path.resolve(process.cwd(), 'www');

// Define app metadata manually for precision, as requested
const APP_METADATA = {
  'jartosdto': { name: 'JartosDTo', desc: 'Unified AI Chat Platform with Gemini, ChatGPT, DeepSeek, Qwen & Mistral' },
  'logisearch': { name: 'LogiSearch', desc: 'Motor de Búsqueda Logística con IA y Generación de RFQs' },
  'livekit-nikolina': { name: 'LIVEKIT Nikolina', desc: 'Asistente de Voz basado en Gemini 2.5 Flash Native Audio para Reservas' },
  'web-restaurante-atenea': { name: 'Atenea Restaurante', desc: 'Plataforma Gastronómica con Gestión de Reservas Automatizada' },
  'combipro': { name: 'CombiPro', desc: 'Generador de Combinadas Deportivas con IA' },
  'cuentos-magicos': { name: 'Cuentos Mágicos', desc: 'Generador de Cuentos Infantiles Personalizados' },
  'taskflow-pro': { name: 'TaskFlow Pro', desc: 'Gestión de Tareas y Proyectos tipo Kanban' },
  'perfume-trading': { name: 'Perfume Trading', desc: 'Sistema ERP y Facturación Empresarial' },
  'elitescout': { name: 'EliteScout', desc: 'Plataforma de Scouting y Análisis Deportivo' },
  'iaputa-os': { name: 'IAPuta OS', desc: 'Sistema Operativo AI unificado' },
  'app-generator': { name: 'App Generator', desc: 'Generador automático de aplicaciones con IA' },
  'industrialpro': { name: 'IndustrialPro', desc: 'Plataforma de servicios IndustrialPro' },
  'edelweiss': { name: 'Edelweiss', desc: 'Gestión y control Edelweiss' },
  'expositator-rte': { name: 'Expositator RTE', desc: 'Sistema expositor en tiempo real' },
  'moko-tools': { name: 'Moko Tools', desc: 'Herramientas de productividad Moko' },
  'msbross': { name: 'MSBross Portal', desc: 'Portal corporativo de MSBross' },
  'gas-station': { name: 'Gas Station', desc: 'Plataforma educativa Gas Station' },
  'traductor-pro': { name: 'Traductor Pro', desc: 'Traductor profesional impulsado por IA' },
};

function getOgTemplate(appName, appDesc) {
  return `import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "MSBrossAI - ${appName}";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(to bottom right, #0f172a, #020617)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "80px",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", marginBottom: "40px" }}>
          <div style={{ fontSize: "64px", fontWeight: "bold", background: "linear-gradient(to right, #3b82f6, #8b5cf6)", backgroundClip: "text", color: "transparent" }}>
            ⚡ MSBrossAI
          </div>
        </div>
        <div style={{ fontSize: "84px", fontWeight: "900", marginBottom: "20px", textAlign: "center", lineHeight: "1.1" }}>
          ${appName}
        </div>
        <div style={{ fontSize: "36px", color: "#94a3b8", textAlign: "center", maxWidth: "900px", lineHeight: "1.4" }}>
          ${appDesc}
        </div>
        <div style={{ position: "absolute", bottom: "40px", fontSize: "24px", color: "#64748b" }}>
          msbross.me
        </div>
      </div>
    ),
    { ...size }
  );
}
`;
}

async function findAppDir(basePath) {
  const possiblePaths = [
    path.join(basePath, 'app'),
    path.join(basePath, 'src', 'app'),
    path.join(basePath, 'client', 'app'),
    path.join(basePath, 'client', 'src', 'app'),
    path.join(basePath, 'frontend', 'app'),
    path.join(basePath, 'frontend', 'src', 'app'),
    path.join(basePath, 'erp', 'src', 'app'),
  ];

  for (const p of possiblePaths) {
    try {
      const stat = await fs.stat(p);
      if (stat.isDirectory()) return p;
    } catch (e) {
      // ignore
    }
  }
  return null;
}

async function processNextApps() {
  const apps = await fs.readdir(APPS_DIR);
  
  for (const app of apps) {
    if (app === '.DS_Store') continue;
    const appPath = path.join(APPS_DIR, app);
    const stat = await fs.stat(appPath);
    if (!stat.isDirectory()) continue;

    const nextAppDir = await findAppDir(appPath);
    if (nextAppDir) {
      console.log(`[Next.js] Found App Router at: ${nextAppDir}`);
      
      const meta = APP_METADATA[app] || { name: app, desc: 'Powered by MSBrossAI' };
      
      const ogFilePath = path.join(nextAppDir, 'opengraph-image.tsx');
      await fs.writeFile(ogFilePath, getOgTemplate(meta.name, meta.desc));
      console.log(`✅ Injected opengraph-image.tsx for ${app}`);
      
      // Attempt to modify layout.tsx to inject metadata if not complex
      const layoutPath = path.join(nextAppDir, 'layout.tsx');
      try {
        let layoutContent = await fs.readFile(layoutPath, 'utf8');
        
        // Simple regex to replace or insert title/description inside export const metadata
        if (layoutContent.includes('export const metadata')) {
          layoutContent = layoutContent.replace(/title:\s*["'][^"']*["']/g, `title: "${meta.name} — MSBrossAI"`);
          layoutContent = layoutContent.replace(/description:\s*["'][^"']*["']/g, `description: "${meta.desc}"`);
          
          if (!layoutContent.includes('metadataBase')) {
            layoutContent = layoutContent.replace(/export const metadata.*?{/g, `export const metadata: Metadata = {
  metadataBase: new URL("https://msbross.me/app/${app}"),`);
          }
          await fs.writeFile(layoutPath, layoutContent);
          console.log(`✅ Updated layout.tsx metadata for ${app}`);
        }
      } catch (e) {
        console.log(`⚠️ Could not update layout.tsx for ${app}:`, e.message);
      }
    } else {
      console.log(`⚠️ No Next.js App Router found for ${app}`);
    }
  }
}

async function processStaticApps() {
  const staticFiles = [
    {
      file: path.join(WWW_DIR, 'logitrack-almacen', 'index.html'),
      name: 'LogiTrack Almacén',
      desc: 'Tablero ágil tipo Kanban para controlar el stock y la expedición en tiempo real.',
      url: 'https://msbross.me/logitrack-almacen/',
      img: 'https://msbross.me/app/jartosdto/favicon.ico'
    },
    {
      file: path.join(WWW_DIR, 'index.html'),
      name: 'MSBrossAI Portal',
      desc: 'Ecosistema de Inteligencia Artificial para logística, restauración, análisis de datos y más.',
      url: 'https://msbross.me/',
      img: 'https://msbross.me/app/jartosdto/favicon.ico'
    },
    { file: path.join(APPS_DIR, 'logisearch', 'index.html'), name: 'LogiSearch', desc: 'Motor de Búsqueda Logística con IA y Generación de RFQs', url: 'https://msbross.me/app/logisearch', img: 'https://msbross.me/app/jartosdto/favicon.ico' },
    { file: path.join(APPS_DIR, 'livekit-nikolina', 'frontend', 'index.html'), name: 'LIVEKIT Nikolina', desc: 'Asistente de Voz basado en Gemini 2.5 Flash Native Audio', url: 'https://msbross.me/app/nikolina', img: 'https://msbross.me/app/jartosdto/favicon.ico' },
    { file: path.join(APPS_DIR, 'web-restaurante-atenea', 'index.html'), name: 'Atenea Restaurante', desc: 'Plataforma Gastronómica con Gestión de Reservas', url: 'https://msbross.me/app/atenea', img: 'https://msbross.me/app/jartosdto/favicon.ico' },
    { file: path.join(APPS_DIR, 'taskflow-pro', 'index.html'), name: 'TaskFlow Pro', desc: 'Gestión de Tareas y Proyectos tipo Kanban', url: 'https://msbross.me/app/taskflow', img: 'https://msbross.me/app/jartosdto/favicon.ico' },
    { file: path.join(APPS_DIR, 'combipro', 'index.html'), name: 'CombiPro', desc: 'Generador de Combinadas Deportivas con IA', url: 'https://msbross.me/app/combipro', img: 'https://msbross.me/app/jartosdto/favicon.ico' }
  ];

  for (const staticApp of staticFiles) {
    try {
      let content = await fs.readFile(staticApp.file, 'utf8');
      
      const metaTags = `
    <meta property="og:title" content="${staticApp.name}" />
    <meta property="og:description" content="${staticApp.desc}" />
    <meta property="og:url" content="${staticApp.url}" />
    <meta property="og:image" content="${staticApp.img}" />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${staticApp.name}" />
    <meta name="twitter:description" content="${staticApp.desc}" />
    <meta name="twitter:image" content="${staticApp.img}" />
`;

      // Insert before </head> if not already there
      if (!content.includes('og:title')) {
        content = content.replace('</head>', `${metaTags}</head>`);
        await fs.writeFile(staticApp.file, content);
        console.log(`✅ Injected static OG tags into ${path.basename(staticApp.file)}`);
      } else {
        console.log(`⚠️ Static OG tags already present in ${path.basename(staticApp.file)}`);
      }
    } catch (e) {
      console.log(`⚠️ Could not process static app ${staticApp.file}:`, e.message);
    }
  }
}

async function main() {
  console.log("🚀 Starting OpenGraph Metadata Generation...");
  await processNextApps();
  await processStaticApps();
  console.log("🎉 Done!");
}

main().catch(console.error);
