import os
import sys
import re

if len(sys.argv) < 2:
    print("Usage: python3 patch-js.py <TUNNEL_URL>")
    sys.exit(1)

tunnel_url = sys.argv[1].rstrip("/")

BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
WWW_DIR = os.path.join(BASE_DIR, "www")

API_PREFIXES = {
    "/_gas-station", "/_industrialpro", "/_elitescout", "/_atenea", 
    "/_nikolina", "/_msbross", "/_iaputa", "/_cuentosmagicos", "/_arantxa"
}

# Regex to match either string quotes + '/_prefix' OR string quotes + 'https://old.tunnel.../_prefix'
pattern = re.compile(r'([\'"`])(?:https://[a-z0-9.-]+\.trycloudflare\.com)?(/_[a-z0-9]+)')

def patch_file(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception as e:
        print(f"Error reading {filepath}: {e}")
        return

    def repl(match):
        q = match.group(1)
        p = match.group(2)
        if p in API_PREFIXES:
            return f"{q}{tunnel_url}{p}"
        return match.group(0)

    new_content, count = pattern.subn(repl, content)
    if count > 0:
        try:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"  [+] Patched {count} API URLs in {os.path.basename(filepath)}")
        except Exception as e:
            print(f"Error writing {filepath}: {e}")

if __name__ == "__main__":
    count_files = 0
    print(f"Patching JS files in {WWW_DIR} with {tunnel_url} ...")
    for root, dirs, files in os.walk(WWW_DIR):
        for f in files:
            if f.endswith('.js'):
                patch_file(os.path.join(root, f))
                count_files += 1
    print(f"Done. Scanned {count_files} JS files.")
