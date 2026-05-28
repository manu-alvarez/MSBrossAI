import fs from 'fs/promises';
import path from 'path';

const WWW_DIR = path.resolve(process.cwd(), 'www');

const APP_METADATA = {
  'jartosdto': { name: 'JartosDTo', desc: 'Unified AI Chat Platform with Gemini, ChatGPT, DeepSeek, Qwen & Mistral' },
  'logisearch': { name: 'LogiSearch', desc: 'Motor de Búsqueda Logística con IA y Generación de RFQs' },
  'livekit-nikolina': { name: 'LIVEKIT Nikolina', desc: 'Asistente de Voz basado en Gemini 2.5 Flash Native Audio para Reservas' },
  'web-restaurante-atenea': { name: 'Atenea Restaurante', desc: 'Plataforma Gastronómica con Gestión de Reservas Automatizada' },
  'combipro': { name: 'CombiPro', desc: 'Generador de Combinadas Deportivas con IA' },
  'cuentos-magicos': { name: 'Cuentos Mágicos', desc: 'Generador de Cuentos Infantiles Personalizados' },
  'taskflow': { name: 'TaskFlow Pro', desc: 'Gestión de Tareas y Proyectos tipo Kanban' },
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
  'logitrack-almacen': { name: 'LogiTrack Almacén', desc: 'Tablero ágil tipo Kanban para controlar el stock y la expedición.' }
};

async function processHtmlFile(filePath, meta) {
  try {
    let content = await fs.readFile(filePath, 'utf8');
    const url = `https://msbross.me/app/${meta.id}`;
    const img = `https://msbross.me/app/jartosdto/favicon.ico`;

    const metaTags = `
    <meta property="og:title" content="${meta.name}" />
    <meta property="og:description" content="${meta.desc}" />
    <meta property="og:url" content="${url}" />
    <meta property="og:image" content="${img}" />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${meta.name}" />
    <meta name="twitter:description" content="${meta.desc}" />
    <meta name="twitter:image" content="${img}" />
`;

    // Remove existing generic tags if any, to avoid duplicates
    content = content.replace(/<meta property="og:.*?>/g, '');
    content = content.replace(/<meta name="twitter:.*?>/g, '');

    content = content.replace('</head>', `${metaTags}</head>`);
    await fs.writeFile(filePath, content);
    console.log(`✅ Injected static OG tags into ${filePath}`);
  } catch (e) {
    // Ignore if file does not exist
  }
}

async function main() {
  console.log("🚀 Starting HTML OpenGraph Injection...");
  
  // Root index
  await processHtmlFile(path.join(WWW_DIR, 'index.html'), { id: '', name: 'MSBrossAI Portal', desc: 'Ecosistema de Inteligencia Artificial para logística, restauración, análisis de datos y más.' });
  
  // LogiTrack
  await processHtmlFile(path.join(WWW_DIR, 'logitrack-almacen', 'index.html'), Object.assign({ id: 'logitrack-almacen' }, APP_METADATA['logitrack-almacen']));

  // All apps in www/app
  const appDir = path.join(WWW_DIR, 'app');
  try {
    const apps = await fs.readdir(appDir);
    for (const app of apps) {
      if (app === '.DS_Store') continue;
      const htmlPath = path.join(appDir, app, 'index.html');
      const meta = APP_METADATA[app] || { name: app, desc: 'Powered by MSBrossAI' };
      await processHtmlFile(htmlPath, Object.assign({ id: app }, meta));
    }
  } catch (e) {}

  console.log("🎉 Done injecting HTML OG tags!");
}

main().catch(console.error);
