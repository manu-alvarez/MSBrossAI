const fs = require('fs');
const file = '/Users/manu/Desktop/MSBrossAI/www/index.html';
let content = fs.readFileSync(file, 'utf8');

// Remove the cutre logo image
content = content.replace(/<img src="\/assets\/img\/og-image\.jpg"[^>]*id="hero-logo"[^>]*>\s*/, '');

// Update the hero-title
content = content.replace(/<h1 class="hero-title">MSBrossAI<\/h1>/, `<h1 class="hero-title" style="background: none; -webkit-text-fill-color: initial; color: #ffffff;"><span style="color: #8b5cf6;">MS</span>BrossAI</h1>`);

fs.writeFileSync(file, content);
console.log("Fixed portal index.html");
