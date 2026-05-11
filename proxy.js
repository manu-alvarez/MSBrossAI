const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const PORT = 8080;

app.use('/_iaputa', createProxyMiddleware({ target: 'http://127.0.0.1:8006', pathRewrite: {'^/_iaputa': '/api'}, changeOrigin: true }));
app.use('/_nikolina', createProxyMiddleware({ target: 'http://127.0.0.1:8001', pathRewrite: {'^/_nikolina': ''}, changeOrigin: true }));
app.use('/_arantxa', createProxyMiddleware({ target: 'http://127.0.0.1:3001', pathRewrite: {'^/_arantxa': '/api'}, changeOrigin: true }));

app.use(express.static('www'));

app.listen(PORT, () => {
    console.log(`[🚀 MSBrossAI Reverse Proxy] Activo en puerto ${PORT}`);
    console.log(`Abriendo túneles unificados para puertos: 8006 (IAPuta), 8001 (Nikolina), 3001 (Arantxa)`);
});
