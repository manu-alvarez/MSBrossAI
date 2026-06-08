const fs = require('fs');
let content = fs.readFileSync('proxy_server.js', 'utf8');

content = content.replace(
  "target: 'http://127.0.0.1:3456/app/txafitnesspro',",
  "target: 'http://127.0.0.1:3456',"
);
content = content.replace(
  "target: 'http://127.0.0.1:3333/app/mapfre',",
  "target: 'http://127.0.0.1:3333',"
);

// Also remove these old broken lines if they exist:
content = content.replace(
  "app.use('/txa-fitness-pro',createProxyMiddleware(proxyOpts('http://127.0.0.1:8011', '/txa-fitness-pro')));\n",
  ""
);
content = content.replace(
  "app.use('/mapfre-infocol', createProxyMiddleware(proxyOpts('http://127.0.0.1:8012', '/mapfre-infocol')));\n",
  ""
);

fs.writeFileSync('proxy_server.js', content);
