import os
import re

WWW_DIR = "/Users/manu/Desktop/MSBrossAI/www"

CSS_PATTERN = re.compile(r'\.feature-grid\s*\{.*?(?=\/\* Custom Cursor \*\/)', re.DOTALL)

NEW_CSS = """        .feature-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1rem; margin-top: 1.5rem; }
        
        .feature-card {
            position: relative;
            background: rgba(255,255,255,0.02);
            border-radius: 20px;
            padding: 2px;
            transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
            transform-style: preserve-3d;
            text-decoration: none;
            color: var(--text);
        }
        
        .feature-card::before {
            content: ''; position: absolute; inset: 0; border-radius: 20px; padding: 1.5px;
            background: linear-gradient(var(--border-angle, 0deg), var(--accent), transparent 40%, transparent 60%, var(--accent));
            -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor; mask-composite: exclude;
            animation: borderSpin 4s linear infinite; opacity: 0.5; transition: opacity 0.4s;
        }
        .feature-card:hover::before { opacity: 1; }

        .feature-card-inner {
            background: rgba(8,12,24,0.85);
            backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
            border-radius: 19px; padding: 1.8rem;
            display: flex; flex-direction: column; gap: 0.8rem;
            position: relative; overflow: hidden; height: 100%;
            transform-style: preserve-3d; transition: transform 0.3s cubic-bezier(.16,1,.3,1);
        }
        .feature-card:hover { transform: translateY(-10px) scale(1.03); }
        .feature-card:hover .feature-card-inner { transform: translateZ(20px); }
        .feature-card:hover .feature-icon { transform: translateZ(40px) scale(1.1); }
        .feature-card:hover .feature-title { transform: translateZ(15px); }
        .feature-card:hover .feature-desc { transform: translateZ(10px); }

        .feature-icon { font-size: 2rem; margin-bottom: 0.5rem; width: 54px; height: 54px; border-radius: 14px; background: linear-gradient(135deg, var(--accent), transparent); border: 1px solid rgba(255,255,255,0.1); display: flex; align-items: center; justify-content: center; box-shadow: 0 0 20px rgba(236, 72, 153, 0.3); }
        .feature-title { font-weight: 700; margin-bottom: 0.2rem; }
        .feature-desc { font-size: 0.85rem; color: var(--text-muted); line-height: 1.5; }
        
        .run-btn { 
            position: relative; 
            display: inline-flex; align-items: center; gap: 0.75rem; 
            padding: 1rem 2rem; 
            background: rgba(8,12,24,0.85); 
            backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
            border-radius: 100px; 
            color: var(--text); text-decoration: none; font-size: 1.1rem; font-weight: 800; 
            transition: all 0.3s ease; 
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3); 
            z-index: 1;
        }
        .run-btn::before {
            content: ''; position: absolute; inset: 0; border-radius: 100px; padding: 2px;
            background: linear-gradient(var(--border-angle, 0deg), var(--accent), transparent 40%, transparent 60%, var(--accent));
            -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor; mask-composite: exclude;
            animation: borderSpin 4s linear infinite; opacity: 0.8; transition: opacity 0.4s;
            z-index: -1; pointer-events: none;
        }
        .run-btn:hover { transform: translateY(-2px) scale(1.05); }
        .run-btn:hover::before { opacity: 1; box-shadow: 0 0 30px var(--accent); }
        .run-btn svg { width: 24px; height: 24px; color: var(--accent); }

        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        .animate-in { animation: fadeInUp 0.6s ease forwards; }

/* ═══ PREMIUM STYLES INJECTED ═══ */
@keyframes cardGlitch {
  0% { clip-path: inset(10% 0 80% 0); transform: translate(-2px, 2px); filter: hue-rotate(90deg); }
  20% { clip-path: inset(80% 0 10% 0); transform: translate(2px, -2px); filter: hue-rotate(-90deg); }
  40% { clip-path: inset(40% 0 50% 0); transform: translate(-2px, -2px); filter: hue-rotate(45deg); }
  60% { clip-path: inset(60% 0 20% 0); transform: translate(2px, 2px); filter: hue-rotate(-45deg); }
  80% { clip-path: inset(20% 0 60% 0); transform: translate(-1px, 1px); filter: hue-rotate(20deg); }
  100% { clip-path: inset(0 0 0 0); transform: translate(0); filter: hue-rotate(0); }
}
.feature-card:hover::after {
    content: ''; position: absolute; inset: 0; background: inherit;
    border-radius: inherit; z-index: 10; pointer-events: none;
    animation: cardGlitch 0.3s cubic-bezier(.25, .46, .45, .94) both;
    opacity: 0.15; mix-blend-mode: overlay;
}
@keyframes borderSpin { to { --border-angle: 360deg; } }
@property --border-angle { syntax: '<angle>'; inherits: false; initial-value: 0deg; }

"""

HTML_CARD_PATTERN = re.compile(
    r'(<div class="feature-card[^>]*>)\s*(<div class="feature-icon">.*?</div>\s*<div class="feature-title">.*?</div>\s*<div class="feature-desc">.*?</div>)\s*(</div>)',
    re.DOTALL
)

def wrap_content(m):
    return f'{m.group(1)}\n                    <div class="feature-card-inner">\n                        {m.group(2)}\n                    </div>\n                {m.group(3)}'

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    original_content = content
    
    # Check if already processed (has feature-card-inner)
    if 'class="feature-card-inner"' in content:
        print(f"Skipping {filepath} - Already processed")
        return False
        
    # Replace CSS
    content = CSS_PATTERN.sub(NEW_CSS, content)
    
    # Replace HTML cards
    content = HTML_CARD_PATTERN.sub(wrap_content, content)
    
    # Also handle apps that don't have exactly 3 divs but might have slightly different HTML?
    # No, they were all generated identically. Let's check if modifications were actually made.
    
    if content != original_content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated {filepath}")
        return True
    else:
        print(f"No changes matched in {filepath}")
        return False

def main():
    count = 0
    for item in os.listdir(WWW_DIR):
        item_path = os.path.join(WWW_DIR, item)
        if os.path.isdir(item_path):
            index_file = os.path.join(item_path, 'index.html')
            if os.path.exists(index_file) and item != 'edelweiss': # Skip edelweiss since already done
                if process_file(index_file):
                    count += 1
    print(f"Successfully updated {count} subpages.")

if __name__ == "__main__":
    main()
