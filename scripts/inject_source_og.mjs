import fs from 'fs/promises';
import path from 'path';

const APPS_DIR = path.resolve(process.cwd(), 'apps');

const APP_METADATA = {
  'logisearch': { name: 'LogiSearch', desc: 'Motor de Búsqueda Logística con IA y Generación de RFQs' },
  'livekit-nikolina': { name: 'LIVEKIT Nikolina', desc: 'Asistente de Voz basado en Gemini 2.5 Flash Native Audio para Reservas' },
  'web-restaurante-atenea': { name: 'Atenea Restaurante', desc: 'Plataforma Gastronómica con Gestión de Reservas Automatizada' },
  'combipro': { name: 'CombiPro', desc: 'Generador de Combinadas Deportivas con IA' },
  'taskflow-pro': { name: 'TaskFlow Pro', desc: 'Gestión de Tareas y Proyectos tipo Kanban' }
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

    content = content.replace(/<meta property="og:.*?>/g, '');
    content = content.replace(/<meta name="twitter:.*?>/g, '');

    content = content.replace('</head>', `${metaTags}</head>`);
    await fs.writeFile(filePath, content);
    console.log(`✅ Injected SOURCE static OG tags into ${filePath}`);
  } catch (e) {
    // Ignore if file does not exist
  }
}

async function main() {
  console.log("🚀 Starting SOURCE HTML OpenGraph Injection...");
  
  await processHtmlFile(path.join(APPS_DIR, 'logisearch', 'index.html'), Object.assign({ id: 'logisearch' }, APP_METADATA['logisearch']));
  await processHtmlFile(path.join(APPS_DIR, 'livekit-nikolina', 'frontend', 'index.html'), Object.assign({ id: 'nikolina' }, APP_METADATA['livekit-nikolina']));
  await processHtmlFile(path.join(APPS_DIR, 'combipro', 'index.html'), Object.assign({ id: 'combipro' }, APP_METADATA['combipro']));
  await processHtmlFile(path.join(APPS_DIR, 'taskflow-pro', 'index.html'), Object.assign({ id: 'taskflow' }, APP_METADATA['taskflow-pro']));
  
  console.log("🎉 Done!");
}

main().catch(console.error);
