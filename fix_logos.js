const fs = require('fs');
const path = require('path');

const wwwDir = '/Users/manu/Desktop/MSBrossAI/www';
const files = [];

function findHtml(dir) {
    const items = fs.readdirSync(dir);
    for (const item of items) {
        const fullPath = path.join(dir, item);
        if (fs.statSync(fullPath).isDirectory()) {
            findHtml(fullPath);
        } else if (fullPath.endsWith('.html')) {
            files.push(fullPath);
        }
    }
}
findHtml(wwwDir);

const neonRegex = /<a href="\/" class="logo"[^>]*>[\s\S]*?<span[^>]*>MS<\/span>[\s\S]*?Bross[\s\S]*?AI[\s\S]*?<\/a>/g;
const newLogo = `<a href="/" class="logo" style="text-decoration: none; display: inline-block;">
            <span style="font-family: 'Inter', sans-serif; font-weight: 900; font-size: 1.8rem; letter-spacing: -0.04em;">
                <span style="color: #8b5cf6;">MS</span><span style="color: #ffffff;">BrossAI</span>
            </span>
        </a>`;

let count = 0;
for (const file of files) {
    let content = fs.readFileSync(file, 'utf8');
    if (neonRegex.test(content)) {
        content = content.replace(neonRegex, newLogo);
        fs.writeFileSync(file, content);
        count++;
        console.log("Fixed logo in", file);
    }
}
console.log(`Replaced in ${count} files.`);
