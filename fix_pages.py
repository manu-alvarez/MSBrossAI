import re

def update_page(file_path, title, name, badge, desc, link, features, bg_colors):
    with open(file_path, 'r') as f:
        content = f.read()

    # Title
    content = re.sub(r'<title>.*?</title>', f'<title>{title}</title>', content)
    # SEO desc
    content = re.sub(r'content="MSBrossAI — MSBrOSs Voice AI"', f'content="{title}"', content)
    
    # H1 title
    content = re.sub(r'<h1 class="title">.*?</h1>', f'<h1 class="title">{name}</h1>', content)
    
    # Badge
    content = re.sub(r'<span class="badge">.*?</span>', f'<span class="badge" style="background: {bg_colors[0]}">{badge}</span>', content)
    
    # Main description
    content = re.sub(r'<span style="font-weight: 600;">.*?</span>', f'<span style="font-weight: 600;">{name}</span>', content)
    content = re.sub(r'<span style="margin-left: auto;.*?v5\.0</span>', f'<span style="margin-left: auto; font-family: \'JetBrains Mono\', monospace; font-size: 0.8rem; color: var(--text-muted);">v1.0</span>', content)
    
    content = re.sub(r'<p style="color: var\(--text-muted\); line-height: 1\.6;">.*?</p>', f'<p style="color: var(--text-muted); line-height: 1.6;">{desc}</p>', content, flags=re.DOTALL)
    
    # Run link
    content = re.sub(r'<a href="/app/msbross/" class="run-btn".*?>.*?</a>', f'<a href="{link}" class="run-btn" style="background: linear-gradient(135deg, {bg_colors[0]}, {bg_colors[1]}); box-shadow: 0 4px 20px rgba(0,0,0,0.5);">\n                    <svg viewBox="0 0 24 24" width="24" height="24"><path d="M8 5v14l11-7z"/></svg>\n                    EJECUTAR APLICACIÓN\n                </a>', content, flags=re.DOTALL)
    
    # Features (just replace the whole feature grid)
    features_html = '<div class="feature-grid">\n'
    for i, f in enumerate(features):
        features_html += f'''                <div class="feature-card animate-in" style="animation-delay: {i*0.1}s;">
                    <div class="feature-icon">{f[0]}</div>
                    <div class="feature-title">{f[1]}</div>
                    <div class="feature-desc">{f[2]}</div>
                </div>\n'''
    features_html += '            </div>'
    
    content = re.sub(r'<div class="feature-grid">.*?</div>\s*</main>', features_html + '\n        </main>', content, flags=re.DOTALL)
    
    # Footer
    content = re.sub(r'MSBrossAI © 2026 — MSBrOSs Voice AI', f'MSBrossAI © 2026 — {name}', content)
    
    # Colors
    content = re.sub(r'--accent: #8b5cf6;', f'--accent: {bg_colors[0]};', content)
    
    with open(file_path, 'w') as f:
        f.write(content)

# TxaFitnessPro
update_page(
    'www/txafitnesspro/index.html',
    'TxaFitnessPro • MSBrossAI',
    'TxaFitnessPro',
    'FITNESS AI',
    'Plataforma integral de entrenamiento, nutrición inteligente y seguimiento biométrico con planes personalizados impulsados por IA.',
    '/app/txafitnesspro/',
    [
        ('🏋️', 'Planes Personalizados', 'Generación inteligente de rutinas y dietas.'),
        ('📊', 'Seguimiento Biométrico', 'Métricas avanzadas y progreso en tiempo real.'),
        ('🥗', 'Nutrición IA', 'Recetas y macros adaptados a tus objetivos.'),
        ('💪', 'Gestión Completa', 'Control total de tu bienestar físico.')
    ],
    ['#ef4444', '#f97316']
)

# MAPFRE
update_page(
    'www/mapfre/index.html',
    'MAPFRE Infocol • MSBrossAI',
    'MAPFRE Infocol',
    'INSURANCE',
    'Sistema avanzado de información, tasación y gestión documental para seguros y peritaje inteligente con integración corporativa.',
    '/app/mapfre/',
    [
        ('🛡️', 'Tasación Inteligente', 'Análisis rápido y automatizado de peritajes.'),
        ('📄', 'Gestión Documental', 'Organización segura de pólizas y siniestros.'),
        ('🔗', 'Integración Corporativa', 'Conexión directa con los sistemas centrales.'),
        ('🔒', 'Seguridad Total', 'Cifrado de extremo a extremo para datos sensibles.')
    ],
    ['#dc2626', '#ef4444']
)

