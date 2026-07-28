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
  
  // If the request matches any of the backend API paths, proxy it to the Tunnel
  if (apiPaths.some(p => path.startsWith(p))) {
    const targetUrl = new URL(context.request.url);
    targetUrl.hostname = "api.msbross.me";
    targetUrl.protocol = "https:";
    
    return fetch(new Request(targetUrl, context.request));
  }
  
  // Otherwise, serve the static frontend from Cloudflare Pages
  return context.next();
}
