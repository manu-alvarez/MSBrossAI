import re

with open('/Users/manu/Desktop/MSBrossAI/www/index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace for TxaFitnessPro
txa_pattern = r'(<div class="card-title">TxaFitnessPro</div>.*?)<div class="card-status"[^>]*>.*?Próximamente</div>'
txa_repl = r'\1<div class="card-status"><span class="status-dot"></span> Online</div>'
content = re.sub(txa_pattern, txa_repl, content, flags=re.DOTALL)

# Replace for mapfre-infocol
mapfre_pattern = r'(<div class="card-title">MAPFRE Infocol</div>.*?)<div class="card-status"[^>]*>.*?Próximamente</div>'
mapfre_repl = r'\1<div class="card-status"><span class="status-dot"></span> Online</div>'
content = re.sub(mapfre_pattern, mapfre_repl, content, flags=re.DOTALL)

with open('/Users/manu/Desktop/MSBrossAI/www/index.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("Fixed statuses!")
