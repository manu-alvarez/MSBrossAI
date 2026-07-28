export async function onRequest(context) {
  const url = new URL(context.request.url);
  const path = url.pathname;
  
  // List of all backend endpoints handled by the Mac Pro Tunnel
  const apiPaths = [
    "/_nikolina", 
    "/_atenea", 
    "/_elitescout", 
    "/_cuentosmagicos",
    "/rtc", 
    "/__config", 
    "/__health"
  ];
  
  // 1. If it's an API request, proxy it to the Mac Pro (api.msbross.me)
  if (apiPaths.some(p => path.startsWith(p))) {
    const targetUrl = new URL(context.request.url);
    targetUrl.hostname = "api.msbross.me";
    targetUrl.protocol = "https:";
    
    try {
      const response = await fetch(new Request(targetUrl, context.request));
      // Cloudflare Tunnels return 530/523/502 when the Mac is offline
      if (response.status === 530 || response.status === 523 || response.status === 502) {
        return new Response(JSON.stringify({
          error: "offline",
          message: "⚠️ El servidor central de IA (Mac Pro) está apagado temporalmente."
        }), {
          status: 503,
          headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
        });
      }
      return response;
    } catch (error) {
      return new Response(JSON.stringify({ error: "offline", message: "Servidor apagado." }), { status: 503, headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" } });
    }
  }
  
  // 2. Otherwise, serve the static frontend from Cloudflare Pages
  const response = await context.next();
  
  // 3. Inject a smart banner into ALL HTML pages
  const contentType = response.headers.get("content-type");
  if (contentType && contentType.includes("text/html")) {
    return new HTMLRewriter().on("body", {
      element(element) {
        element.append(`
          <script>
            // Check if backend is alive silently
            fetch('/__health').then(res => {
              // 503 means our middleware caught the offline Mac Pro
              if (res.status === 503 || res.status === 530 || res.status === 523 || res.status === 502) {
                const banner = document.createElement('div');
                banner.innerHTML = '⚠️ <b>Modo Visualización (Demo):</b> El servidor central de Inteligencia Artificial (Mac Pro) está apagado en este momento. Las interfaces gráficas funcionan, pero el procesamiento de datos está inactivo.';
                banner.style.cssText = 'position: fixed; bottom: 0; left: 0; width: 100%; background: rgba(220, 38, 38, 0.95); color: white; text-align: center; padding: 12px; z-index: 2147483647; font-family: system-ui, sans-serif; font-size: 14px; box-shadow: 0 -4px 6px rgba(0,0,0,0.1); backdrop-filter: blur(4px); border-top: 1px solid #f87171;';
                document.body.appendChild(banner);
              }
            }).catch(e => console.log('Verificación de estado offline'));
          </script>
        `, { html: true });
      }
    }).transform(response);
  }

  return response;
}
