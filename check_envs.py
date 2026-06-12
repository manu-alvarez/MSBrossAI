import os
import re

apps_dir = "apps"

def get_keys(filepath):
    keys = set()
    if not os.path.exists(filepath): return keys
    with open(filepath, 'r') as f:
        for line in f:
            line = line.strip()
            if not line or line.startswith('#'): continue
            if '=' in line:
                key = line.split('=', 1)[0].strip()
                keys.add(key)
    return keys

for root, dirs, files in os.walk(apps_dir):
    if "node_modules" in root or "venv" in root or ".next" in root:
        continue
    
    example_files = [f for f in files if "example" in f]
    
    for ex in example_files:
        ex_path = os.path.join(root, ex)
        env_name = ex.replace(".example", "")
        env_path = os.path.join(root, env_name)
        
        ex_keys = get_keys(ex_path)
        env_keys = get_keys(env_path)
        
        missing = ex_keys - env_keys
        
        if missing or not os.path.exists(env_path):
            print(f"\n[{env_path}]")
            if not os.path.exists(env_path):
                print(f"  FILE MISSING (Needs {len(ex_keys)} keys from {ex})")
            elif missing:
                print(f"  MISSING KEYS: {', '.join(missing)}")
                
