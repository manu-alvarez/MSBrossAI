// MSBrossAI — Runtime configuration
// Deployed to nominalia via deploy-ftp.sh
// tunnel.sh updates this URL automatically when cloudflared starts
window.__MSBROSS_CONFIG__ = {
  apiBase: '__TUNNEL_URL__',
  NIKOLINA_SERVER: '__TUNNEL_URL__/_atenea',
  LIVEKIT_URL: 'wss://nikolina-1jg7t00i.livekit.cloud',
};
