import os
import re

WWW_DIR = "/Users/manu/Desktop/MSBrossAI/www"

# Using regex to find the logo tag, allowing for potential variations in whitespace
LOGO_PATTERN = re.compile(r'<a href="/" class="logo">\s*MSBrossAI\s*</a>')

NEW_LOGO_HTML = '<a href="/" class="logo" style="background: none;"><img src="../assets/logo.png" alt="MSBrossAI" style="height: 48px; border-radius: 12px; box-shadow: 0 4px 15px var(--accent);"></a>'

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    original_content = content
    
    # Replace the text logo with the image logo
    content = LOGO_PATTERN.sub(NEW_LOGO_HTML, content)
    
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
            if os.path.exists(index_file):
                if process_file(index_file):
                    count += 1
    print(f"Successfully updated {count} subpages with the official logo.")

if __name__ == "__main__":
    main()
